# Lead Flow Architecture

**Last updated:** 2026-05-01
**Plan reference:** `~/.claude/plans/quisiera-mejorar-el-flujo-floofy-swan.md`
**Status:** Phase 1 + Phase 2 + Phase 4 backend live in code (un-deployed). Phase 3 in progress.

---

## What this document covers

End-to-end pipeline for capturing, nurturing, and following up with leads on asialoposible.net. Three lead sources converge into a single Notion CRM database, a 5-email sequence runs on Resend for form-fillers, and Cal.com bookings get pre-meeting reminders via N8N. The system replaces a previous Web3Forms-only flow that had no central database, no nurture, and no reminder system (causing high no-show rates on Cal bookings).

---

## Architecture diagram

```
[/inscribete form]
   POST /api/leads/form ──┬─> Notion: createLead(Source=Form)
                          │     └─ on error: Resend → katherinemolinares1@gmail.com (fallback)
                          └─> Resend: contacts.create(audience=form-leads)
                              + events.send('lead.form_submitted')
                                  └─> Resend Automation (5-email nurture, T+0 → T+9d)

[/viajes-privados form]
   POST /api/leads/private ─> Notion: createLead(Source=PrivateForm)
                              └─ on error: Resend → katherinemolinares1@gmail.com (fallback)
                              (NO Resend sequence — high-touch leads)

[Cal.com booking webhooks]
   ─> N8N webhook (single endpoint, HMAC-verified)
        ├─> HTTP → Notion: createLead/update (Source=Cal)
        │     └─ on error: Resend → katherinemolinares1@gmail.com (fallback)
        ├─> Wait until startTime - 24h ─> Resend: reminder #1
        └─> Wait until startTime - 10m ─> Resend: reminder #2
      (BOOKING_CANCELLED skips the sends; MEETING_ENDED moves Status → Qualified)

[Email enviado a katherine@emails.asialoposible.net]
   ─> Resend Inbound (MX) ─> webhook /api/webhooks/resend-inbound (post-deploy)
        └─> Resend forward(passthrough=true) → katherinemolinares1@gmail.com

[Katherine compone desde Gmail]
   ─> Gmail "Send mail as" via SMTP smtp.resend.com:465
        └─> Email enviado con From: katherine@emails.asialoposible.net
```

---

## Components

### 1. Forms → Notion CRM

**API routes (Next.js):**
- `src/app/(frontend)/api/leads/form/route.ts` — `/inscribete` ContactForm
- `src/app/(frontend)/api/leads/private/route.ts` — `/viajes-privados` PrivateContactForm

Both validate with Zod, call `createLead()` in `src/lib/notion.ts`, and on Notion failure invoke `sendLeadFallbackAlert()` from `src/lib/fallback-alert.ts` so no lead is lost. Form route also calls `addToFormLeadsAudience()` and `fireFormSubmittedEvent()` on the Resend SDK (private route does not — private leads are intentionally not in the nurture sequence).

**Notion database** — "Sales CRM" (id `699c629a2dbc8242a7b28153361201ca`). Properties added for this system:
- `Source` (select: `Form` / `PrivateForm` / `Cal`)
- `Personas` (number)
- `Comentarios` (rich text)
- `Cal Booking Start` (date)
- `Cal Booking UID` (rich text — used for matching reschedule/cancel events)
- Existing `Viaje` select extended with options `Abril 2027` and `Ambas fechas`

The Notion `Status` property is the existing CRM status (Lead → Qualified → Meeting → Proposal → Negotiation → Closed/Lost) — the system writes `Lead` for new form submissions and `Meeting` for new Cal bookings.

**Web3Forms is fully decommissioned** (May 2026 hard cutover). No fallback to Web3Forms exists in code.

### 2. Resend nurture sequence

**Audience:** `form-leads` (id `ba6e3b37-ba36-48bc-a63d-a83385b3b69a`)

**Templates (5):** `als-welcome`, `als-scarcity`, `als-destino`, `als-curated`, `als-final-cta` — drafts in `_bmad-output/email-sequence/01-...05-*.md`. Each tagged with marketing-psychology principles (scarcity, loss aversion, social proof, narrative transportation, objection handling, urgency). Final CTA points to WhatsApp (`wa.me/584248455010`) instead of dual reserve/agenda.

**Event:** `lead.form_submitted` (custom Resend event, schema: `source` string, `viaje` string, `personas` number)

**Automation:** "form-leads · 5-email nurture" (id `019de138-1ced-75dd-bc65-235f02fb7934`), graph:
```
trigger(lead.form_submitted) → s1 welcome → 1d → s2 scarcity → 2d → s3 destino → 3d → s4 curated → 3d → s5 final-cta
```

**Sender:** `Katherine Molinares · Asia Lo Posible <katherine@emails.asialoposible.net>` — dedicated marketing subdomain to keep deliverability reputation separate from the root `asialoposible.net`.

### 3. Cal.com reminders via N8N

Cal.com FREE plan supports webhooks (verified) but does not send native reminders. N8N (Starter Pro Cloud) is the orchestration hub for time-based reminder sends. Single webhook from Cal → single N8N workflow that fans out to Notion (HTTP node) and schedules reminders via Wait + Resend HTTP nodes.

Workflow file: `_bmad-output/cal-reminders/` (drafts) — workflow created in N8N Cloud at `https://innovalygroup.app.n8n.cloud`.

Reminder templates: T-24h ("Mañana hablamos") and T-10m ("Nos vemos en 10 min — link aquí"), Spanish, Katherine voice, with the video call URL from the Cal payload.

Status checks before each reminder send: workflow re-queries Notion for the current `Status` of the booking (matched by `Cal Booking UID`); if `Status !== Meeting`, the send is skipped. This is how cancelled bookings avoid sending stale reminders even though Wait nodes can't be aborted retroactively.

Second line of defense: Cal.com native email notifications (Settings → Notifications) are enabled so Katherine always gets a copy independent of N8N.

### 4. Inbound forwarding + Gmail "Send mail as"

`emails.asialoposible.net` has Receiving enabled in Resend (MX configured). Two flows:

- **Outbound (live now):** Gmail of Katherine has `katherine@emails.asialoposible.net` configured as a "Send mail as" alias using SMTP `smtp.resend.com:465` with the Resend API key as password. Gmail's confirmation code was retrieved one-time from the Resend Dashboard's Receiving tab.
- **Inbound forwarding (code ready, activates post-deploy):** `src/app/(frontend)/api/webhooks/resend-inbound/route.ts` receives Resend `email.received` events, verifies the svix signature with `RESEND_WEBHOOK_SECRET`, fetches the email body, and forwards via `resend.emails.receiving.forward({ passthrough: true })` to `katherinemolinares1@gmail.com`. Until deployed, replies to the email sequence accumulate in the Resend dashboard's Receiving tab.

---

## Failure modes and fallbacks

| Failure | What happens | What the user sees |
|---|---|---|
| Notion write fails (form path) | API route catches error, calls `sendLeadFallbackAlert` → email to `katherinemolinares1@gmail.com` with full lead data + error trace | Form still returns 200, user sees the success thank-you page |
| Resend audience add fails (form path) | Logged, route returns 200 (Notion sync still happened) | User sees success; lead is in Notion but won't get the sequence — manual recovery needed |
| Notion write fails (Cal/N8N path) | N8N error branch fires HTTP → Resend send to fallback Gmail; flow continues to schedule reminders | Lead visible in N8N executions panel + email alert to Katherine |
| Cal.com → N8N webhook unreachable | Cal.com retries automatically; Cal native email notifications also fire (independent of webhook) | Katherine always gets the booking email from Cal directly |
| Resend Inbound webhook fails | Resend retries; emails remain stored in Resend Receiving tab and visible in dashboard | No data loss, manual access via dashboard |

---

## Secrets and environment

All third-party secrets live in the 1Password vault `Asialoposible`:

| 1Password item | Maps to env | Used in |
|---|---|---|
| `Notion - Asialoposible` (`credential`) | `NOTION_TOKEN` | `src/lib/notion.ts` |
| `RESEND - Asialoposible` (`credential`) | `RESEND_API_KEY` | `src/lib/resend.ts`, N8N HTTP nodes, Gmail SMTP password |
| `n8n - asialoposible` (`credential`) | N8N PAT | N8N MCP server config in `~/.claude/.mcp.json` |
| `Cal.com - asialoposible` | Cal.com credentials | N/A (manual dashboard config) |

Project env vars (in `.env.local` and Vercel):
```
NOTION_TOKEN
NOTION_LEADS_DATABASE_ID=699c629a2dbc8242a7b28153361201ca
RESEND_API_KEY
RESEND_AUDIENCE_FORM_LEADS=ba6e3b37-ba36-48bc-a63d-a83385b3b69a
RESEND_WEBHOOK_SECRET   # set after creating the inbound webhook in Resend dashboard
FALLBACK_ALERT_EMAIL=katherinemolinares1@gmail.com
```

---

## Files

**Code:**
- `src/lib/notion.ts` — `createLead`, `findLeadByCalUid`, `updateLeadStatusByCalUid`
- `src/lib/resend.ts` — `addToFormLeadsAudience`, `fireFormSubmittedEvent`, `sendEmail`
- `src/lib/fallback-alert.ts` — `sendLeadFallbackAlert`
- `src/app/(frontend)/api/leads/form/route.ts`
- `src/app/(frontend)/api/leads/private/route.ts`
- `src/app/(frontend)/api/webhooks/resend-inbound/route.ts` (sleeping until deployed)
- `src/components/ContactForm.tsx` (modified: Web3Forms → /api/leads/form)
- `src/components/PrivateContactForm.tsx` (modified: Web3Forms → /api/leads/private)

**Drafts and reference material:**
- `_bmad-output/email-sequence/01-welcome.md` … `05-final-cta.md` — markdown drafts of the 5 nurture emails with marketing-psychology tags
- `_bmad-output/cal-reminders/` — drafts of the T-24h and T-10m reminder templates

---

## Testing

The full test matrix is in the plan file (`~/.claude/plans/quisiera-mejorar-el-flujo-floofy-swan.md`) — Phases 1–4, 30+ cases covering happy paths, validation, fallbacks, reschedules, cancellations, idempotency, deliverability, send-as, and inbound forwarding. Test status as of 2026-05-01:

- **Phase 1 (Notion sync):** 1.1, 1.4, 1.5 verified via curl on local dev. 1.2 (browser submit), 1.6 (fallback alert), 1.7 (cutover verification) pending the user's manual test before commit.
- **Phase 2 (Resend nurture):** 2.1 (domain verified), 2.6 (no-duplication verified) confirmed. 2.2–2.5, 2.7, 2.8 pending after the automation is enabled and a real form submit goes through.
- **Phase 3 (N8N + Cal):** workflow setup in progress as of this writing.
- **Phase 4 (Inbound + Send-as):** Gmail "Send mail as" verified by user on 2026-05-01. Inbound forwarding webhook handler ready in code, awaiting deploy.
