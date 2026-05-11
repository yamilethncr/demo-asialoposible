import { NextResponse } from 'next/server'
import { z } from 'zod'
import { createLead } from '@/lib/notion'
import {
  addToFormLeadsAudience,
  addToPrivateLeadsAudience,
  fireFormSubmittedEvent,
  firePrivateLeadEvent,
} from '@/lib/resend'
import { sendLeadFallbackAlert } from '@/lib/fallback-alert'

export const runtime = 'nodejs'

const FormLeadSchema = z.object({
  nombre: z.string().trim().min(1).max(200),
  email: z.string().email().max(200),
  telefono: z.string().trim().min(8).max(50),
  personas: z.union([z.string(), z.number()]).optional(),
  fechaLabel: z.enum(['Agosto 2026', 'Abril 2027', 'Ambas fechas', 'Viaje privado', 'Otro']).optional(),
  comentarios: z.string().trim().max(2000).optional(),
})

function parsePersonas(v: unknown): number | null {
  if (typeof v === 'number') return Number.isFinite(v) ? v : null
  if (typeof v === 'string' && v.trim()) {
    const n = parseInt(v, 10)
    return Number.isFinite(n) ? n : null
  }
  return null
}

function splitName(full: string): { firstName: string; lastName?: string } {
  const parts = full.trim().split(/\s+/)
  if (parts.length === 1) return { firstName: parts[0] }
  return { firstName: parts[0], lastName: parts.slice(1).join(' ') }
}

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 })
  }

  const parsed = FormLeadSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: 'Validation failed', issues: parsed.error.issues }, { status: 400 })
  }

  const data = parsed.data
  const personas = parsePersonas(data.personas)
  const { firstName, lastName } = splitName(data.nombre)
  const source: 'Form' | 'PrivateForm' = data.fechaLabel === 'Viaje privado' ? 'PrivateForm' : 'Form'

  const leadInput = {
    source,
    nombre: data.nombre,
    email: data.email,
    telefono: data.telefono,
    personas,
    viaje: data.fechaLabel ?? null,
    comentarios: data.comentarios ?? null,
  }

  const [notionResult, resendResult, whatsappResult] = await Promise.allSettled([
    createLead(leadInput),
    (async () => {
      if (source === 'PrivateForm') {
        await addToPrivateLeadsAudience({ email: data.email, firstName, lastName })
        await firePrivateLeadEvent({
          email: data.email,
          source: 'PrivateForm',
          viaje: data.fechaLabel,
          personas,
        })
      } else {
        await addToFormLeadsAudience({ email: data.email, firstName, lastName })
        await fireFormSubmittedEvent({
          email: data.email,
          source: 'Form',
          viaje: data.fechaLabel,
          personas,
        })
      }
    })(),
    (async () => {
      const url = process.env.WHATSAPP_WEBHOOK_URL
      const secret = process.env.WHATSAPP_WEBHOOK_SECRET
      if (!url || !secret) return
      const res = await fetch(`${url}?secret=${encodeURIComponent(secret)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone: data.telefono,
          firstName,
          template: 'form_lead_welcome',
        }),
      })
      if (!res.ok) throw new Error(`WhatsApp webhook returned ${res.status}`)
    })(),
  ])

  if (notionResult.status === 'rejected') {
    console.error('[/api/leads/form] Notion failed:', notionResult.reason)
    try {
      await sendLeadFallbackAlert({
        context: `Notion (form /inscribete, source=${source})`,
        lead: {
          nombre: data.nombre,
          email: data.email,
          telefono: data.telefono,
          personas: personas ?? '',
          viaje: data.fechaLabel ?? '',
          comentarios: data.comentarios ?? '',
        },
        error: notionResult.reason,
      })
    } catch (err) {
      console.error('[/api/leads/form] Fallback alert ALSO failed:', err)
    }
  }

  if (resendResult.status === 'rejected') {
    console.error('[/api/leads/form] Resend audience add failed:', resendResult.reason)
  }

  if (whatsappResult.status === 'rejected') {
    console.error('[/api/leads/form] WhatsApp send failed:', whatsappResult.reason)
  }

  return NextResponse.json({
    ok: true,
    source,
    notion: notionResult.status === 'fulfilled' ? 'ok' : 'failed',
    resend: resendResult.status === 'fulfilled' ? 'ok' : 'failed',
    whatsapp: whatsappResult.status === 'fulfilled' ? 'ok' : 'failed',
  })
}
