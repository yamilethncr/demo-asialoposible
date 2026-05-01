import { Resend } from 'resend'

const RESEND_API_KEY = process.env.RESEND_API_KEY
const RESEND_AUDIENCE_FORM_LEADS = process.env.RESEND_AUDIENCE_FORM_LEADS
const RESEND_AUDIENCE_PRIVATE_LEADS = process.env.RESEND_AUDIENCE_PRIVATE_LEADS

if (!RESEND_API_KEY) {
  console.warn('[resend] RESEND_API_KEY not set — emails will not send')
}

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null

export const SENDER = 'Katherine Molinares · Asia Lo Posible <katherine@emails.asialoposible.net>'

export async function addToFormLeadsAudience(input: { email: string; firstName?: string; lastName?: string }) {
  if (!resend || !RESEND_AUDIENCE_FORM_LEADS) {
    throw new Error('Resend audience not configured')
  }
  const res = await resend.contacts.create({
    audienceId: RESEND_AUDIENCE_FORM_LEADS,
    email: input.email,
    firstName: input.firstName,
    lastName: input.lastName,
    unsubscribed: false,
  })
  return res
}

export async function addToPrivateLeadsAudience(input: { email: string; firstName?: string; lastName?: string }) {
  if (!resend || !RESEND_AUDIENCE_PRIVATE_LEADS) {
    throw new Error('Resend private-leads audience not configured')
  }
  const res = await resend.contacts.create({
    audienceId: RESEND_AUDIENCE_PRIVATE_LEADS,
    email: input.email,
    firstName: input.firstName,
    lastName: input.lastName,
    unsubscribed: false,
  })
  return res
}

export async function fireFormSubmittedEvent(input: {
  email: string
  source: 'Form' | 'PrivateForm'
  viaje?: string
  personas?: number | null
}) {
  if (!resend) throw new Error('Resend not configured')
  return resend.events.send({
    event: 'lead.form_submitted',
    email: input.email,
    payload: {
      source: input.source,
      viaje: input.viaje ?? '',
      personas: input.personas ?? 0,
    },
  })
}

export async function firePrivateLeadEvent(input: {
  email: string
  source: 'PrivateForm' | 'PrivateCal'
  viaje?: string
  personas?: number | null
}) {
  if (!resend) throw new Error('Resend not configured')
  return resend.events.send({
    event: 'lead.private_form_submitted',
    email: input.email,
    payload: {
      source: input.source,
      viaje: input.viaje ?? '',
      personas: input.personas ?? 0,
    },
  })
}

export async function sendEmail(input: { to: string | string[]; subject: string; html: string; replyTo?: string }) {
  if (!resend) throw new Error('Resend not configured')
  return resend.emails.send({
    from: SENDER,
    to: input.to,
    subject: input.subject,
    html: input.html,
    replyTo: input.replyTo,
  })
}
