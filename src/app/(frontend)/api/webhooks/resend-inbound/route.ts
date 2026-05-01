import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'

const RESEND_API_KEY = process.env.RESEND_API_KEY
const RESEND_WEBHOOK_SECRET = process.env.RESEND_WEBHOOK_SECRET
const KATHERINE_GMAIL = process.env.FALLBACK_ALERT_EMAIL || 'katherinemolinares1@gmail.com'

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null

type InboundEvent = {
  type: string
  data: {
    email_id: string
    from: string
    to: string[]
    subject: string
  }
}

export async function POST(req: Request) {
  if (!resend) {
    return NextResponse.json({ ok: false, error: 'Resend not configured' }, { status: 500 })
  }

  const payload = await req.text()
  const svixHeaders = {
    id: req.headers.get('svix-id') ?? '',
    timestamp: req.headers.get('svix-timestamp') ?? '',
    signature: req.headers.get('svix-signature') ?? '',
  }

  let event: InboundEvent
  if (RESEND_WEBHOOK_SECRET) {
    try {
      const verified = resend.webhooks.verify({
        payload,
        headers: svixHeaders,
        webhookSecret: RESEND_WEBHOOK_SECRET,
      }) as unknown as InboundEvent
      event = verified
    } catch (err) {
      console.error('[/api/webhooks/resend-inbound] signature verify failed:', err)
      return NextResponse.json({ ok: false, error: 'Invalid signature' }, { status: 401 })
    }
  } else {
    console.warn('[/api/webhooks/resend-inbound] RESEND_WEBHOOK_SECRET not set — skipping signature verification (DEV ONLY)')
    event = JSON.parse(payload) as InboundEvent
  }

  if (event.type !== 'email.received') {
    return NextResponse.json({ ok: true, ignored: event.type })
  }

  const emailId = event.data.email_id
  try {
    const forwarded = await resend.emails.receiving.forward({
      emailId,
      to: KATHERINE_GMAIL,
      from: 'Asia Lo Posible Inbox <inbox@emails.asialoposible.net>',
      passthrough: true,
    })
    if (forwarded.error) {
      console.error('[/api/webhooks/resend-inbound] forward failed:', forwarded.error)
      return NextResponse.json({ ok: false, error: forwarded.error.message }, { status: 500 })
    }
    return NextResponse.json({ ok: true, forwardedId: forwarded.data?.id })
  } catch (err) {
    console.error('[/api/webhooks/resend-inbound] unexpected error:', err)
    return NextResponse.json({ ok: false, error: 'Forward failed' }, { status: 500 })
  }
}
