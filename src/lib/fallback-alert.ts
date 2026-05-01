import { sendEmail } from './resend'

const FALLBACK_ALERT_EMAIL = process.env.FALLBACK_ALERT_EMAIL || 'katherinemolinares1@gmail.com'

type LeadFields = Record<string, string | number | null | undefined>

function escape(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export async function sendLeadFallbackAlert(opts: {
  context: string
  lead: LeadFields
  error: unknown
}) {
  const errorMsg = opts.error instanceof Error ? opts.error.message : String(opts.error)
  const rows = Object.entries(opts.lead)
    .map(([k, v]) => `<tr><td style="padding:4px 8px;font-weight:600">${escape(k)}</td><td style="padding:4px 8px">${escape(v)}</td></tr>`)
    .join('')

  const html = `
    <div style="font-family:system-ui,sans-serif;max-width:560px">
      <h2 style="color:#B85C5C">⚠️ Lead recibido pero falló ${escape(opts.context)}</h2>
      <p>Un lead llegó al sitio pero hubo un problema al sincronizar a Notion. Aquí están los datos para que no se pierda:</p>
      <table style="border-collapse:collapse;border:1px solid #ddd;width:100%">${rows}</table>
      <h3>Error</h3>
      <pre style="background:#f6f6f6;padding:12px;border-radius:6px;white-space:pre-wrap">${escape(errorMsg)}</pre>
      <p style="color:#888;font-size:12px">— Sistema Asia Lo Posible (alerta automática)</p>
    </div>
  `

  const subject = `[ALERTA] Lead recibido pero falló ${opts.context} — ${escape(opts.lead.nombre || opts.lead.Name || 'sin nombre')}`

  return sendEmail({
    to: FALLBACK_ALERT_EMAIL,
    subject,
    html,
  })
}
