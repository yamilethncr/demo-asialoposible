# Lead Flow & Email Automation Architecture

**Last updated:** 2026-05-11
**Stack:** Resend + Notion + N8N + Vercel/Next.js + Cal.com + Chatwoot + Meta WhatsApp Business Cloud + 1Password
**Status:** Production. Replicable to other projects with the checklist at the bottom.

---

## TL;DR

This is a Spanish-language CRM + email automation pipeline for a small high-touch travel business (Asia Lo Posible). It does eight things:

1. **Captures leads** from website forms, Cal.com bookings, and Chatwoot chats into a single Notion CRM database.
2. **Auto-enrolls** form/chat leads in a Resend nurture sequence (different sequences for group-trip vs private-trip leads).
3. **Sends Cal.com booking reminders** (T-24h + T-10m) via N8N before each meeting.
4. **Fires a Meta-approved WhatsApp template** to every new lead within seconds — `form_lead_welcome` for form + chat leads, `cal_booked_welcome` for Cal bookings — opening the 24h WhatsApp conversation window for Katherine.
5. **Forwards inbound emails** sent to `katherine@emails.asialoposible.net` to Katherine's personal Gmail, preserving the original Reply-To.
6. **Lets Katherine manually trigger any sequence email** from a Notion row by ticking a checkbox (no need to log into Resend).
7. **Lets Katherine remove a converted/lost lead** from all running automations by ticking a different checkbox.
8. **Falls back to email alert** on any Notion write failure so no lead is lost.

The whole thing is webhook-driven (no polling) and split across three orchestrators: Vercel for synchronous form/webhook handlers, N8N for time-based and webhook-triggered flows, and Notion automations for human-initiated actions.

---

## System map

```
┌────────────────────┐     ┌──────────────────┐
│ asialoposible.net  │     │   Cal.com        │
│  /inscribete       │     │ booking webhook  │
│  /viajes-privados  │     └────────┬─────────┘
└─────────┬──────────┘              │
          │ POST                    │
          ▼                         ▼
   ┌────────────────────┐    ┌──────────────────┐
   │ Vercel (Next.js)   │    │     N8N Cloud    │
   │ /api/leads/form    │    │ Cal.com Lead     │
   │                    │    │ Pipeline (HMAC)  │
   └──┬──────────┬──────┘    └──┬─────┬─────────┘
      │          │              │     │
      │ Notion   │ Resend       │     │ Wait T-24h
      │ create   │ + event      │     │ + T-10m reminders
      │ lead     │              │     │
      ▼          ▼              ▼     ▼
   ┌────────────────────┐    ┌──────────────────┐
   │   Notion CRM       │    │      Resend      │
   │  "Sales CRM" db    │◄───┤ Automations:     │
   │                    │    │  • form-leads    │
   └────┬───────────┬───┘    │  • private-leads │
        │           │        └──────────────────┘
        │ Database  │ Database
        │ automation│ automation
        │ (UI)      │ (UI)
        ▼           ▼
   ┌──────────────────┐    ┌──────────────────┐
   │ N8N: Manual      │    │ N8N: Unsubscribe │
   │ Email Trigger    │    │ Trigger          │
   │ (webhook)        │    │ (webhook)        │
   └──────┬───────────┘    └──────┬───────────┘
          │ POST /emails           │ DELETE contacts
          ▼                        ▼
        Resend send             Resend audiences
        (one-off)               (form + private)


  ┌─────────────────────────────────────────────────┐
  │  katherine@emails.asialoposible.net (inbound)   │
  │      ▼                                          │
  │  Resend MX → /api/webhooks/resend-inbound       │
  │      ▼                                          │
  │  forward via emails.send (replyTo = original)   │
  │      ▼                                          │
  │  katherinemolinares1@gmail.com                  │
  └─────────────────────────────────────────────────┘
```

---

## Components and their roles

### Resend — email engine (sends + audiences + automations)

**Audiences** are lists of contacts. Each contact has `email`, optional `firstName`/`lastName`, and an `unsubscribed` flag. We have two:
- `form-leads` (id `ba6e3b37-ba36-48bc-a63d-a83385b3b69a`) — group-trip nurture
- `private-leads` (id `724c683e-bf30-4a50-b0ad-b9ffb5ef45d6`) — private-trip nurture

**Templates** are the actual email bodies (subject + html + optional text). They use Handlebars-style placeholders. We use only one custom variable: `{{{FNAME}}}` (fallback `viajera`), bound to `contact.first_name`. The system reserves `{{{RESEND_UNSUBSCRIBE_URL}}}` which Resend auto-resolves only on automation/audience sends — for one-off `POST /emails` sends you must substitute it manually.

**Critical:** Resend templates have draft/published versions. `PATCH /templates/{id}` writes a draft. To make changes live (and used by future automation runs), call `POST /templates/{id}/publish` afterward. GET-after with `has_unpublished_versions: false` confirms.

**Automations** are state machines triggered by custom events. Each one:
1. Listens for an event name
2. Filters contacts by audience (only members are enrolled)
3. Steps through `send email` and `wait` blocks with delays
4. Skips a `send email` step if the contact's `unsubscribed: true`

We have two automations:
- `form-leads · 5-email nurture` (`019de138-1ced-75dd-bc65-235f02fb7934`) triggered by event `lead.form_submitted`
- `Private Trip Leads` (`019de2f2-4766-763d-bb1a-ab0f2efbe05e`) triggered by event `lead.private_form_submitted`

**Resend limitations to know:**
- **No public API to cancel an in-progress automation run.** Once enrolled, the run stays "Running" in the UI until all delays expire (up to weeks). The only way to stop sends is `unsubscribed: true` on the contact, which makes each `send email` step transition to `skipped` when its time comes. The "Running" UI status persists but no email actually delivers.
- **Audience-bound variables (`{{{FNAME}}}`, `{{{RESEND_UNSUBSCRIBE_URL}}}`) are only resolved by Resend in audience+automation+broadcast sends — NOT in `POST /emails` one-off sends.** For one-off sends you must do string substitution before sending.
- **Resend's reserved `{{{FIRST_NAME}}}` only works in Broadcasts, not Automations triggered by custom events.** That's why we use a custom `{{{FNAME}}}` registered against the audience.

### Notion — source of truth for contacts

**Database:** `Sales CRM` (id `699c629a2dbc8242a7b28153361201ca`). Properties used by this system:

| Property | Type | Purpose |
|---|---|---|
| `Name` | title | Lead's full name (used to derive `{{{FNAME}}}` first word) |
| `Email` | email | Lead's email — required, used as join key everywhere |
| `Phone` | phone | WhatsApp/contact number |
| `Source` | select | `Form` / `PrivateForm` / `Cal` / `PrivateCal` |
| `Status` | status | CRM funnel stage (Lead → Qualified → Meeting → Won/Lost) |
| `Personas` | number | Group size from form |
| `Viaje` | select | Trip date interest (`Agosto 2026`, `Abril 2027`, `Ambas fechas`, `Viaje privado`, `Otro`) |
| `Comentarios` | rich_text | Free-form notes from form |
| `Cal Booking UID` | rich_text | Cal.com booking id (key for reschedule/cancel matching) |
| `Cal Booking Start` | date | Meeting timestamp |
| **`Email Template`** | select | One of 9 template labels — used by manual trigger |
| **`Send Email`** | checkbox | Tick to fire a manual one-off send |
| **`Last Email Sent`** | rich_text | Audit log of last manual send |
| **`Last Send Time`** | date | Timestamp of last manual send |
| **`Stop Sequence`** | checkbox | Tick to remove from all running automations |
| **`Last Stop Time`** | date | Timestamp of last unsubscribe |
| **`Last Stop Result`** | rich_text | Audit string of unsubscribe results per audience |

**Notion Database Automations (UI feature, Plus+ plan)** are the bridge from Notion to N8N. They watch a property and call a webhook when it changes. Two are configured:

1. **Send emails** — Trigger: `Send Email is checked` → Action: Send webhook to `https://innovalygroup.app.n8n.cloud/webhook/notion-manual-email`
2. **Manual Unsubscribe** — Trigger: `Stop Sequence is checked` → Action: Send webhook to `https://innovalygroup.app.n8n.cloud/webhook/notion-unsubscribe`

**Critical:** Both automations must have **"Select all existing properties"** enabled in the Content section. Without it, Notion sends an empty page object and the n8n guard rejects the call.

**Notion API limitations:**
- Database automations cannot be created via API (UI only). Document the manual setup steps for replication.
- `rich_text` updates overwrite, never append. Audit logs that need history must read-then-write or use a different data shape.

### N8N — orchestration hub (Cloud Starter Pro)

Seven workflows live at `https://innovalygroup.app.n8n.cloud`:

| Workflow | id | Trigger | What it does |
|---|---|---|---|
| Cal.com Lead Pipeline | `Er3DYB9jfG1BsX9n` | Webhook (HMAC-verified) from Cal.com | Creates Notion row, schedules T-24h + T-10m reminders, fires private-leads enrollment when `viaje=Viaje privado`, fires WhatsApp `cal_booked_welcome` on every booking |
| Chatwoot Lead Pipeline | `x21RMbIErUvWcjPB` | Webhook from Chatwoot (`conversation_created`, secret-guarded) | Extracts sender, creates Notion row, calls Resend Enrollment subworkflow, fires WhatsApp `form_lead_welcome` |
| Resend Enrollment | `bSpvtqyRqKW2iqgB` | Execute Workflow Trigger (subworkflow) | Adds contact to correct audience + fires custom event based on `audience` input |
| WhatsApp Template Send | `7LYiRjPAlhQsGZ0l` | Execute Workflow Trigger (subworkflow) | Sanitizes phone, POSTs Meta Graph API `/messages` with template payload, `continueOnFail` |
| WhatsApp Webhook (form) | `Hj0kHjkgICRVx2qX` | Webhook at `/whatsapp-template-send` (secret-guarded) | Validates inputs, calls WhatsApp Template Send subworkflow. Used by Vercel form route |
| Notion Manual Email Trigger | `OlAsTrZkdl1p3nd8` | Webhook from Notion automation | Looks up template by select-option label, substitutes vars, sends via Resend, resets checkbox + audit log |
| Notion Unsubscribe Trigger | `4fgE5hzhFHm06zr7` | Webhook from Notion automation | Globally unsubscribes the contact + DELETEs from both audiences, resets checkbox + audit log |

**N8N patterns to replicate:**
- **Always use webhook triggers, not schedules**, when the source can call you. A webhook trigger costs 1 execution per real event; a 1-minute cron costs ~43k/month even with zero matches.
- **Inline auth headers** (`Authorization: Bearer ...`) instead of n8n credential objects. Simpler to maintain and matches the existing Cal.com pipeline pattern.
- **PUT body whitelist:** when updating a workflow via `PUT /api/v1/workflows/{id}`, the body MUST be limited to `{name, nodes, connections, settings, staticData}`. Any extra field (`id`, `active`, `createdAt`, `updatedAt`, `versionId`, `tags`, `pinData`, `meta`) returns "must NOT have additional properties".
- **`continueOnError: true`** (or `neverError: true` in newer versions) on Resend HTTP nodes that may legitimately 404 (e.g. unsubscribing a contact who's only in one audience).
- **Early-exit guard pattern:** every webhook-triggered workflow starts with an `Extract Row` Code node that probes envelope shapes (`$json.body`, `$json.body.data`, `$json.body.source`, `$json.body.entity`), validates required fields, and sets `_skip` if invalid. An IF node branches to `Respond Skipped` (HTTP 200 with `{ok:true, skipped:true, reason}`) or to the action chain. This avoids wasted Resend/Notion calls and gives Notion a clean response so its automation log shows success.

### Vercel + Next.js — synchronous handlers

Three API routes:

- `src/app/(frontend)/api/leads/form/route.ts` — Receives `/inscribete` form submissions. Validates with Zod. Determines `source = data.fechaLabel === 'Viaje privado' ? 'PrivateForm' : 'Form'`. Calls `createLead()` and (in parallel) either `addToFormLeadsAudience + fireFormSubmittedEvent` (Form) or `addToPrivateLeadsAudience + firePrivateLeadEvent` (PrivateForm). Both use `Promise.allSettled` so a Notion failure doesn't block the Resend side and vice versa. On Notion failure, calls `sendLeadFallbackAlert()` so no lead is lost.
- `src/app/(frontend)/api/webhooks/resend-inbound/route.ts` — Receives `email.received` events from Resend. Verifies the svix signature via `resend.webhooks.verify({payload, headers, webhookSecret})`. Fetches the email via `resend.emails.receiving.get(emailId)` and forwards via `resend.emails.send({from: 'inbox@...', to: KATHERINE_GMAIL, replyTo: original.from, subject, html, text})`. **Critical:** uses `emails.send` with explicit `replyTo`, NOT `emails.receiving.forward(...)` — the latter sets `Reply-To` to the inbox address, breaking real replies.

**Vercel patterns:**
- All API routes use `export const runtime = 'nodejs'` (the Resend SDK and the Notion SDK don't run cleanly on Edge).
- Zod schemas define the API contract at the route boundary.
- The `Promise.allSettled` pattern lets the route succeed even if one side (Notion or Resend) is down — the user still gets a 200 and the working side completes; the failed side is logged + alerted.

### Cal.com — bookings

Free plan with webhooks. Sends `BOOKING_CREATED`, `BOOKING_RESCHEDULED`, `BOOKING_CANCELLED`, `MEETING_ENDED` to a single N8N endpoint. Booking form custom fields (`viaje`, `personas`, etc.) are configured via Cal API v2 with header `cal-api-version: 2024-06-14`. The `viaje` field includes `Viaje privado` as an option — N8N maps that to `Source: PrivateCal` in Notion and enrolls the booker in the private-leads audience.

### 1Password — secrets vault

All credentials live in vault `Asialoposible`. Items follow `<Tool> - Asialoposible` naming. Read via `op read "op://Asialoposible/<item>/credential"`. Items currently in use:

| Item | Used for |
|---|---|
| `Notion - Asialoposible` | Notion API token (env `NOTION_TOKEN`, n8n inline header) |
| `Resend - Asialoposible` | Resend API key (env `RESEND_API_KEY`, n8n inline header, Gmail SMTP password for "Send mail as") |
| `N8N - Asialoposible` | N8N personal access token (CLI workflow CRUD) |
| `Cal.com - asialoposible` | Cal API key (booking field config) |
| `WHATSAPP_API (Asialoposible)` | Meta WhatsApp Business Cloud API access token. **Use a permanent System User token, not a 24h Developer token.** Inlined in the `HTTP: Send WA Template` node of workflow `7LYiRjPAlhQsGZ0l`. |
| `WHATSAPP_PHONE_NUMBER_ID (Asialoposible)` | Meta phone number id (`1065596523306877` for Katherine's Vietnam number). Inlined in the URL of the same HTTP node. |

---

## Detailed flow walkthroughs

### A. Form submission → Notion + Resend nurture + WhatsApp

1. User fills `/inscribete` form, submits → `POST /api/leads/form`.
2. Zod validates body. Route computes `source` from `fechaLabel`.
3. Three parallel side effects via `Promise.allSettled`:
   - **Notion:** `createLead()` writes a row with `Source`, `Status: Lead`, `Personas`, `Viaje`, etc.
   - **Resend:** if `Form`, add to `form-leads` audience + fire `lead.form_submitted` event. If `PrivateForm`, add to `private-leads` + fire `lead.private_form_submitted`.
   - **WhatsApp:** fire-and-forget POST to `WHATSAPP_WEBHOOK_URL?secret=…` with `{phone, firstName, template: 'form_lead_welcome'}`. The N8N webhook calls the `WhatsApp Template Send` subworkflow, which sanitizes phone → POSTs Meta Graph API. Skipped silently if env vars unset.
4. Resend Automation matches the event, finds the contact in the correct audience, enrolls them, and starts the sequence.
5. If Notion fails, `sendLeadFallbackAlert` emails the lead data to Katherine so manual recovery is possible. The user still sees a success page.

### B. Cal.com booking → Notion + reminders

1. User books via Cal.com. Cal sends webhook to N8N.
2. N8N verifies HMAC, parses payload (extracts `name`, `email`, `phone`, `viaje`, `personas`, `startTime`, `uid`, `meetingUrl`, `rescheduleUri`).
3. Determines `Source = viaje === "Viaje privado" ? "PrivateCal" : "Cal"`.
4. HTTP node creates Notion row with `Status: Meeting`.
5. If `viaje === "Viaje privado"`: also add to private-leads audience + fire enrollment event.
6. **WhatsApp template `cal_booked_welcome`** fires in parallel (from a third branch off `Notion: Create Lead`) for every `BOOKING_CREATED`, regardless of `viaje` value. Phone read from the Cal HMAC payload; sent via `Execute Workflow → WhatsApp Template Send`.
7. Schedule two reminders via Wait nodes:
   - At `startTime - 24h`: re-query Notion for current `Status`. If `!== Meeting`, skip. Otherwise send T-24h reminder email (template auto-detects same-day vs next-day to render "Hoy hablamos" vs "Mañana hablamos").
   - At `startTime - 10m`: same status check, then send T-10m reminder with the Google Meet link + WhatsApp fallback paragraph.
8. On `BOOKING_CANCELLED`: update Notion `Status` so the status check on each reminder skips the send.
9. On `MEETING_ENDED`: update Notion `Status` to `Qualified`.

### B'. Chatwoot chat → Notion + Resend + WhatsApp

1. Visitor opens the Chatwoot widget and sends a message. Chatwoot fires `conversation_created` webhook → `https://innovalygroup.app.n8n.cloud/webhook/chatwoot-lead?secret=…`.
2. `Extract Contact` Code node validates the shared secret, only acts on `event === 'conversation_created'`, requires a sender email.
3. Splits `name` into first/last, derives `audience` from the referer URL (`/viajes-privados` → `private`, else `form`), captures the visitor's first message + page + Chatwoot conversation id as `comentarios`.
4. `Notion: Create Lead` writes the row with `Source: Chatwoot`.
5. `Build Resend Inputs` → `Execute Workflow → Resend Enrollment` enrolls in the matching audience + fires the matching event.
6. `Build WA Inputs (Chatwoot)` → `Execute Workflow → WhatsApp Template Send` fires `form_lead_welcome` (always, even for `/viajes-privados` leads — channel-based, not audience-based). Skipped if Chatwoot sender has no phone.

### C. Inbound email → Gmail forward

1. Email sent to `katherine@emails.asialoposible.net`.
2. Resend MX accepts it (Receiving must be enabled on the domain in Resend dashboard).
3. Resend fires `email.received` webhook to `/api/webhooks/resend-inbound`.
4. Handler verifies the svix signature with `RESEND_WEBHOOK_SECRET`.
5. Fetches the email body via `resend.emails.receiving.get(id)`.
6. Forwards via `resend.emails.send({to: KATHERINE_GMAIL, replyTo: original.data.from, subject, html, text})`.
7. Katherine sees the email in Gmail. When she replies, the reply goes to the original sender (not the inbox).

### D. Manual email send from Notion (NEW)

1. Katherine opens a row in Notion CRM, picks an option from `Email Template`, ticks `Send Email`.
2. Notion's database automation fires within seconds → calls webhook `https://innovalygroup.app.n8n.cloud/webhook/notion-manual-email` with the full page object (because "Select all existing properties" is enabled).
3. N8N `Extract Row` node:
   - Probes envelope shape, finds the page
   - Reads `Email`, `Name` (first word → FNAME, fallback `viajera`), `Email Template`, `Send Email`
   - Validates: if not all present and `Send Email = true` → set `_skip` and short-circuit
   - Looks up `template_id` from a hardcoded `TEMPLATE_MAP` keyed by select-option label
4. `GET /templates/{id}` from Resend to fetch subject + html + text.
5. Code node substitutes `{{{FNAME}}}` and `{{{RESEND_UNSUBSCRIBE_URL}}}` in subject, html, and text.
6. `POST /emails` to send (from `Katherine Molinares · Asia Lo Posible <katherine@emails.asialoposible.net>`, replyTo same, unique `X-Entity-Ref-ID` header).
7. `PATCH /pages/{page_id}` to reset `Send Email = false`, set `Last Send Time = now()`, set `Last Email Sent = "<label> @ <iso> (resend_id=<id>)"`.
8. Webhook responds `{ok:true, sent:true, page_id, resend_id}`.

End-to-end latency: ~5–15 seconds from checkbox tick to inbox.

### E. Manual unsubscribe from Notion (NEW)

1. Katherine ticks `Stop Sequence` on a converted/lost lead's row.
2. Notion fires webhook to `https://innovalygroup.app.n8n.cloud/webhook/notion-unsubscribe`.
3. N8N `Extract Row` validates and short-circuits if `Stop Sequence !== true` or `Email` empty.
4. Three Resend calls in sequence (all with `continueOnError: true` so 404s are non-fatal):
   - `PATCH /contacts/{email}` with `{unsubscribed: true}` → globally marks the contact unsubscribed (belt-and-suspenders).
   - `DELETE /audiences/{form-leads}/contacts/{email}` → removes from group nurture audience.
   - `DELETE /audiences/{private-leads}/contacts/{email}` → removes from private nurture audience.
5. Code node maps each status code to `ok` / `not_found` / `error:N` and builds an audit string like `unsubscribed @ <iso> (unsub: ok, del-form: ok, del-private: not_found)`.
6. `PATCH /pages/{page_id}` resets `Stop Sequence = false`, sets `Last Stop Time` and `Last Stop Result`.

**Important behavior:** in-progress Resend automation runs continue showing "Running" in the UI until their delays expire (Resend has no run-cancel API). However, every `send email` step in those runs will transition to `skipped` because the contact is unsubscribed AND no longer in the audience. **No email actually delivers.** Don't be misled by the UI.

### F. WhatsApp template send (NEW)

Two N8N workflows + one Meta-approved template per channel.

**`WhatsApp Template Send` subworkflow** (`7LYiRjPAlhQsGZ0l`, Execute Workflow Trigger):
1. Input schema: `{ phone: string, firstName: string, template: string }`. `firstName` falls back to `'viajera'`; `template` defaults to `'form_lead_welcome'` if missing.
2. `Sanitize Phone` Code node strips the leading `+` and any non-digit chars. Meta expects E.164 *digits-only* (`"+34 612 345 678"` → `"34612345678"`). Empty result sets `_skip:true`.
3. `IF has phone` short-circuits when sanitized phone is empty.
4. `HTTP: Send WA Template` POSTs Meta Graph API `v21.0/{phone_number_id}/messages` with the named-parameter template payload (`parameter_name: 'customer_name'`). `continueOnFail: true` — a Meta error never breaks the parent workflow.

**`WhatsApp Webhook (form)` wrapper** (`Hj0kHjkgICRVx2qX`, Webhook trigger at `/whatsapp-template-send`):
1. Webhook checks `?secret=` against the inlined shared secret. Wrong/missing secret → respond `{ok:true,skipped:true,reason:'invalid or missing secret'}`.
2. Missing `phone` in body → respond `{ok:true,skipped:true,reason:'no phone'}`.
3. Valid call → `Execute Workflow → WhatsApp Template Send` (passing `{phone, firstName, template}`) → respond `{ok:true,sent:true}`.

**Templates approved by Meta (category Marketing, language `es`):**

| Name | Triggered by | Variable |
|---|---|---|
| `form_lead_welcome` | Form route (any source), Chatwoot pipeline (any audience) | `customer_name` (named) |
| `cal_booked_welcome` | Cal pipeline (every `BOOKING_CREATED`, regardless of `Viaje privado`) | `customer_name` (named) |

Channel-based routing (NOT audience-based): form/chat leads → `form_lead_welcome`; booked-a-call leads → `cal_booked_welcome`. The audience split (`form` vs `private`) still drives Resend enrollment as before.

**Wire-up points:**
- **Chatwoot Lead Pipeline** (`x21RMbIErUvWcjPB`): `Resend Enrollment` → `Build WA Inputs (Chatwoot)` → `WhatsApp Template Send`. Phone from `$('Extract Contact').item.json.phone`; static `template: 'form_lead_welcome'`.
- **Cal.com Lead Pipeline** (`Er3DYB9jfG1BsX9n`): NEW third branch off `Notion: Create Lead` (parallel to `IF Notion failed` + `IF Viaje privado`): `Build WA Inputs (Cal)` → `WhatsApp Template Send`. Phone from `$('Verify HMAC + Parse').item.json.phone`; firstName from first word of `name`; static `template: 'cal_booked_welcome'`.
- **Vercel form route** (`src/app/(frontend)/api/leads/form/route.ts`): third side-effect inside `Promise.allSettled`, fire-and-forget POST to `WHATSAPP_WEBHOOK_URL?secret=…` with `{phone: data.telefono, firstName, template: 'form_lead_welcome'}`. Skipped silently if env vars unset. Response includes `whatsapp: 'ok'|'failed'`.

**WhatsApp gotchas:**
- **Meta access token rotation.** Permanent System User tokens never expire; Developer Console tokens are 24h. Rotate the inlined value in the `HTTP: Send WA Template` node + the 1Password item `WHATSAPP_API (Asialoposible)` together.
- **Template names are case-sensitive.** Misspelling returns Meta error 132001 "template name does not exist". Both names live as static string values in the `Build WA Inputs (*)` Set nodes — one place to grep/edit.
- **N8N HTTP node body shape.** Use `jsonBody` with an expression returning an **object** literal (`={{ ({ messaging_product: 'whatsapp', ... }) }}`), NOT `JSON.stringify(...)`. The latter caused N8N to emit `{"error":"invalid syntax"}` and never reach Meta (~2ms execution time, no network call).
- **Phone formatting.** Meta expects digits only, no `+`, no spaces. The `Sanitize Phone` node handles `+34 612-345-678` → `34612345678`. Use the same logic if calling Meta from elsewhere.
- **Named vs positional parameters.** Both templates use named variables (`parameter_name: 'customer_name'`). If Meta later re-approves a template as positional `{{1}}`, drop `parameter_name` from the parameters array.
- **24-hour conversation window.** Templates are the only way to start a conversation outside the 24h window. Once the lead replies, Katherine can send free-form messages for 24h — then template-only again. Katherine handles replies manually inside the window.

---

## Failure modes and fallbacks

| Failure | What happens | What the user sees |
|---|---|---|
| Notion write fails (form path) | API route catches error, calls `sendLeadFallbackAlert` → email to fallback Gmail with full lead data + error trace | Form returns 200, user sees the success thank-you page |
| Resend audience add fails (form path) | Logged. Route returns 200 (Notion sync still happened) | User sees success; lead in Notion but not in sequence — manual recovery needed |
| Notion write fails (Cal/N8N path) | N8N error branch fires HTTP → Resend send to fallback Gmail; flow continues to schedule reminders | Lead visible in N8N executions panel + email alert to Katherine |
| Cal.com → N8N webhook unreachable | Cal.com retries automatically; Cal native email notifications also fire (independent of webhook) | Katherine always gets the booking email from Cal directly |
| Resend Inbound webhook fails | Resend retries; emails remain stored in Resend Receiving tab and visible in dashboard | No data loss, manual access via dashboard |
| Notion automation fires with empty payload | "Select all existing properties" was disabled — `_skip` guard in n8n catches it, returns 200 silently | Nothing visible; Notion automation log shows success |
| User ticks Send Email without picking a template | n8n guard rejects → no send → `Send Email` stays checked | User sees no email arrive — must un-tick, pick template, re-tick |
| Resend template id missing from TEMPLATE_MAP | Code node returns null for template_id → guard `_skip` | n8n execution log shows "unknown template label" |

---

## Environment / secrets

```bash
# .env.local + Vercel production
NOTION_TOKEN=ntn_...
NOTION_LEADS_DATABASE_ID=699c629a2dbc8242a7b28153361201ca
RESEND_API_KEY=re_...
RESEND_AUDIENCE_FORM_LEADS=ba6e3b37-ba36-48bc-a63d-a83385b3b69a
RESEND_AUDIENCE_PRIVATE_LEADS=724c683e-bf30-4a50-b0ad-b9ffb5ef45d6
RESEND_WEBHOOK_SECRET=whsec_...
FALLBACK_ALERT_EMAIL=katherinemolinares1@gmail.com
WHATSAPP_WEBHOOK_URL=https://innovalygroup.app.n8n.cloud/webhook/whatsapp-template-send
WHATSAPP_WEBHOOK_SECRET=<24-char shared secret, also pasted into the WA Webhook node's secret check>
```

N8N stores Resend / Notion / Meta API keys inline in HTTP node headers. To rotate keys, edit each affected workflow in n8n directly (no centralized credential reference). Meta WhatsApp token + phone_number_id live inline in the `HTTP: Send WA Template` node of `WhatsApp Template Send` (id `7LYiRjPAlhQsGZ0l`); rotating it = editing one node.

---

## Code layout

| File | Purpose |
|---|---|
| `src/lib/notion.ts` | `createLead`, `findLeadByCalUid`, `updateLeadStatusByCalUid`, type guards for discriminated `LeadInput` union |
| `src/lib/resend.ts` | `addToFormLeadsAudience`, `addToPrivateLeadsAudience`, `fireFormSubmittedEvent`, `firePrivateLeadEvent`, `sendEmail` |
| `src/lib/fallback-alert.ts` | `sendLeadFallbackAlert` — emails Katherine on critical Notion failures |
| `src/app/(frontend)/api/leads/form/route.ts` | `/inscribete` POST handler |
| `src/app/(frontend)/api/webhooks/resend-inbound/route.ts` | Inbound email forwarder |
| `src/components/ContactForm.tsx` | Form UI, posts to `/api/leads/form` |

---

## Replication checklist (clone this stack to a new project)

Replicating to a different domain / business takes ~2 hours if you follow this order. Each step is independent — verify each before moving to the next.

### 1. Resend setup
- [ ] Create or claim a sending domain (e.g. `emails.<yourbrand>.net`). Add SPF/DKIM/DMARC records. Wait for verification.
- [ ] Enable **Receiving** on the domain (adds MX records — required only if you want inbound forwarding).
- [ ] Create one or more **audiences** (one per nurture sequence).
- [ ] For each audience, create a custom variable (e.g. `FNAME`) bound to `contact.first_name` with a fallback. **Do not rely on Resend's reserved `{{{FIRST_NAME}}}`** — it only works in Broadcasts, not in Automations triggered by custom events.
- [ ] Create the email **templates**. Use Spanish (or whatever the audience speaks). Reference `{{{FNAME}}}` and `{{{RESEND_UNSUBSCRIBE_URL}}}`. **Always click Publish** after editing — drafts don't go live.
- [ ] Create **automations** with custom event triggers (e.g. `lead.form_submitted`). Wire steps with delays. Activate.

### 2. Notion CRM setup
- [ ] Create a database with at minimum: `Name` (title), `Email` (email), `Phone` (phone), `Source` (select), `Status` (status). Add domain-specific fields (`Personas`, `Viaje`, etc.) as needed.
- [ ] **For manual email triggers:** add `Email Template` (select with option per template), `Send Email` (checkbox), `Last Email Sent` (rich_text), `Last Send Time` (date).
- [ ] **For manual unsubscribe:** add `Stop Sequence` (checkbox), `Last Stop Time` (date), `Last Stop Result` (rich_text).
- [ ] Create an **integration** in Notion settings, share the database with it, copy the integration token.
- [ ] You're on Notion **Plus or higher** (Free doesn't have database automations).

### 3. Vercel + Next.js setup
- [ ] Create the Next.js project. Add API routes for whatever forms you have. Use Zod, `Promise.allSettled`, fallback alerts. Set `runtime = 'nodejs'`.
- [ ] If you want inbound forwarding, add `/api/webhooks/resend-inbound/route.ts`. Use `emails.send` with explicit `replyTo`, not `emails.receiving.forward`.
- [ ] Set env vars in Vercel for all environments (production / preview / development): tokens, audience ids, webhook secret, fallback email.
- [ ] Deploy.

### 4. N8N setup
- [ ] Sign up for N8N Cloud (Starter Pro is sufficient for low-volume CRMs). Get a personal access token.
- [ ] Create the **Cal.com Lead Pipeline** workflow (if Cal is in scope): webhook trigger, HMAC verify, Notion HTTP create, Wait nodes for reminders, Resend HTTP send for each reminder, Notion status check before each send, Cal.com webhook URL pasted into Cal.
- [ ] Create the **Notion Manual Email Trigger** workflow: webhook trigger at path `/notion-manual-email`, Extract Row Code node with `TEMPLATE_MAP` keyed by Notion select-option labels → Resend GET template → Code substitution → Resend POST email → Notion PATCH page.
- [ ] Create the **Notion Unsubscribe Trigger** workflow: webhook trigger at path `/notion-unsubscribe`, Extract Row guard, three Resend calls (global PATCH unsubscribed + two DELETE from audiences), Notion PATCH.
- [ ] Activate each workflow.
- [ ] Save the production webhook URLs.

### 5. Notion Database Automations setup (UI only)
For each manual-trigger workflow, configure a database automation in Notion:
- [ ] Open the database → ⚡ Automations → New automation
- [ ] Trigger: `<checkbox property> is checked`
- [ ] Action: Send webhook → paste the n8n production webhook URL
- [ ] **Critical:** in the Content section, enable **"Select all existing properties"**. Without this, the webhook payload is empty and the n8n guard rejects the call.
- [ ] Save and activate.

### 6. Cal.com setup (if applicable)
- [ ] Configure the booking form custom fields via API (`PATCH /event-types/{id}` with `bookingFields`). Spanish labels, required where appropriate, options matching your Notion `Viaje` select.
- [ ] Set the webhook URL to your N8N endpoint. Subscribe to `BOOKING_CREATED`, `BOOKING_RESCHEDULED`, `BOOKING_CANCELLED`, `MEETING_ENDED`.
- [ ] Set the HMAC secret. Save it in N8N's HMAC verify node.
- [ ] Enable Cal native email notifications as a backup.

### 7. Gmail "Send mail as" (optional, for sending from your domain via personal Gmail)
- [ ] Gmail → Settings → Accounts → Send mail as → Add another email address.
- [ ] Email address: `<alias>@<yourbrand>.net`. Treat as alias.
- [ ] SMTP server: `smtp.resend.com:465`, username `resend`, password `<RESEND_API_KEY>`, SSL.
- [ ] Confirmation code: retrieve from Resend dashboard's Receiving tab (the confirmation email arrives there because the alias domain has Receiving enabled).

### 8. Operational testing checklist
- [ ] Submit a real form → Notion row created + welcome email arrives
- [ ] Book a Cal slot → Notion row created (Status=Meeting) + N8N execution shows scheduled reminders
- [ ] Tick `Send Email` on a Notion row → email arrives within ~15s, checkbox auto-resets, audit log populated
- [ ] Tick `Stop Sequence` on a row → contact removed from audiences within ~15s, audit log populated. Verify a future enrollment event for that email shows steps as `skipped` in Resend
- [ ] Send an inbound email to your domain alias → arrives in your Gmail with original sender's address as Reply-To

---

## Known limitations and gotchas

1. **No way to cancel a Resend automation run in progress.** The contact stays "Running" in the UI until delays expire. Mitigated by `unsubscribed: true` + audience deletion → individual `send email` steps `skipped`. Never delivers a real email but the UI is misleading.
2. **Notion API doesn't support creating database automations.** They must be configured manually in the UI for each replication.
3. **Notion `rich_text` updates overwrite, never append.** If you need history, either pre-fetch and concatenate, or design the audit log to overwrite (we chose overwrite for v1).
4. **Resend reserved variables (`{{{FIRST_NAME}}}`, `{{{RESEND_UNSUBSCRIBE_URL}}}`) only auto-resolve in audience-bound sends, not in `POST /emails`.** Substitute manually for one-off sends.
5. **N8N's PUT `/workflows/{id}` rejects extra fields.** Whitelist body to `{name, nodes, connections, settings, staticData}` only.
6. **Notion Database Automations require Plus or higher.** Free tier users need a different approach (Notion Buttons + Make/Zapier proxy).
7. **N8N webhook authentication is path-obscurity by default.** For stronger security, add a shared-secret header check in the Extract Row guard and configure Notion's "Send webhook" action to send a custom header.
8. **Schedule triggers burn n8n task quota fast.** A 1-min cron costs ~43k executions/month even with zero matches. Always prefer webhook triggers when the source can call you.
9. **Vercel serverless has limited sharp binary support for Payload uploads.** Process images on local dev (which has native sharp) — uploaded files land in Vercel Blob and are accessible from production.

---

## Operational runbook

### Adding a new template to the manual-trigger menu
1. Create + publish the template in Resend. Note the id.
2. Add a new option to Notion's `Email Template` select property (UI or API).
3. In n8n workflow `Notion Manual Email Trigger`, edit the `Extract Row` Code node — add a new line to `TEMPLATE_MAP` mapping the select-option label exactly to the template id.
4. Save + verify the workflow is still `active: true`.
5. Test by ticking `Send Email` on a row with the new option selected.

### Adding a new automation / nurture sequence
1. Create a new audience in Resend.
2. Add the `FNAME` variable to the new audience (same shape as existing).
3. Build the templates and automation. Activate.
4. Add a new env var for the audience id (`RESEND_AUDIENCE_<NAME>`). Push to Vercel.
5. Update `src/lib/resend.ts` with `addTo<Name>Audience` and `fire<Name>Event` helpers.
6. Update the relevant API route (or N8N node) to call them at the right branch.
7. Add the new templates to the manual-trigger TEMPLATE_MAP (and Notion select options) if Katherine should be able to send them manually too.

### Debugging a failed manual email send
1. Open n8n → Executions → filter by workflow `Notion Manual Email Trigger`. Find the failed execution.
2. Click each node to see input/output.
3. Common causes:
   - `_skip = "Email empty"` → row has no email
   - `_skip = "Send Email not checked"` → Notion fired the webhook but the property wasn't actually checked (race condition?)
   - `_skip = "unknown template label"` → TEMPLATE_MAP missing the option (see runbook above)
   - Resend GET 404 → template was deleted or its id changed (verify in Resend dashboard)
   - Resend POST 422 → unresolved `{{{...}}}` in HTML or invalid `to` email
   - Notion PATCH 400 → property name typo or wrong field type

### Rotating credentials
- **Notion token:** generate new in Notion settings → update `NOTION_TOKEN` in Vercel + redeploy → update inline `Authorization` header in all n8n workflows that hit Notion.
- **Resend API key:** generate new in Resend dashboard → update `RESEND_API_KEY` in Vercel + redeploy → update inline `Authorization` header in all n8n workflows that hit Resend → update Gmail "Send mail as" SMTP password.
- **N8N PAT:** generate new in n8n → update local 1Password `N8N - Asialoposible` item.

---

## Reference URLs

- Notion CRM database: `https://www.notion.so/<workspace>/699c629a2dbc8242a7b28153361201ca`
- N8N workflows list: `https://innovalygroup.app.n8n.cloud/home/workflows`
- Resend dashboard: `https://resend.com/audiences`
- Cal.com bookings: `https://app.cal.com/bookings/upcoming`
- Vercel project: `https://vercel.com/david-atias-projects/asialoposible`

---

## Appendix: full Resend template list (as of last update)

| Notion Select Option | Resend Template ID | Subject | In Automation |
|---|---|---|---|
| Group 1 — Bienvenida | `aa46ea37-f4de-42a0-8bfe-72271077ecfd` | Bienvenida — esto es lo que sigue | form-leads s1 |
| Group 2 — Cupos | `a25cfcf4-5a02-4580-9ea8-58283a11a368` | Solo 10 cupos por viaje (esto es importante) | form-leads s2 |
| Group 3 — Destino | `b3b0a95e-8a67-4574-9ddd-adc2957f74cb` | Por qué Vietnam + Camboya está en el top 2026 | form-leads s3 |
| Group 4 — Viajar sola | `a625ae05-280f-4da6-bf3f-971e6e3838de` | Lo que NADIE te dice de viajar a Asia por tu cuenta | form-leads s4 |
| Group 5 — Última llamada | `422ed190-f56e-40aa-bd61-f8bb3ab6b243` | Última llamada antes de cerrar la lista | form-leads s5 |
| Private 1 — Welcome | `9a6fd5f0-0e57-4739-b93d-c7f3a45b94c9` | Tu viaje privado — esto es lo que sigue | private-leads s1 |
| Private 2 — Cómo funciona | `e4b5d7cc-8e6f-4960-8fd3-a6f4b0e1aafa` | Cómo armamos un viaje privado (los 4 pasos) | private-leads s2 |
| Private 3 — Ejemplo real | `70b9dd2d-1c20-4eb6-b825-0dd5007a6af9` | Un ejemplo real: 12 días en Vietnam para una pareja | private-leads s3 |
| Private 4 — Última nota | `4232daaf-a1b6-49a8-9750-ad3614603724` | Última nota — y un regalo de bienvenida | private-leads s4 |
