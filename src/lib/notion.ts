import { Client } from '@notionhq/client'

const NOTION_TOKEN = process.env.NOTION_TOKEN
const NOTION_LEADS_DATABASE_ID = process.env.NOTION_LEADS_DATABASE_ID

if (!NOTION_TOKEN) {
  console.warn('[notion] NOTION_TOKEN not set — leads will not sync')
}

const notion = NOTION_TOKEN ? new Client({ auth: NOTION_TOKEN }) : null

export type LeadSource = 'Form' | 'PrivateForm' | 'Cal' | 'PrivateCal'

export type ViajeOption = 'Agosto 2026' | 'Abril 2027' | 'Ambas fechas' | 'Viaje privado' | 'Otro'

export type FormLeadInput = {
  source: 'Form' | 'PrivateForm'
  nombre: string
  email: string
  telefono: string
  personas?: number | null
  viaje?: ViajeOption | null
  comentarios?: string | null
}

export type CalLeadInput = {
  source: 'Cal' | 'PrivateCal'
  nombre: string
  email: string
  telefono?: string | null
  startTime: string
  bookingUid: string
  comentarios?: string | null
}

export type LeadInput = FormLeadInput | CalLeadInput

function richText(value: string | null | undefined) {
  if (!value) return []
  return [{ type: 'text' as const, text: { content: value.slice(0, 2000) } }]
}

function isCalInput(input: LeadInput): input is CalLeadInput {
  return input.source === 'Cal' || input.source === 'PrivateCal'
}

export async function createLead(input: LeadInput): Promise<{ id: string }> {
  if (!notion || !NOTION_LEADS_DATABASE_ID) {
    throw new Error('Notion client not configured')
  }

  const properties: Record<string, unknown> = {
    Name: { title: richText(input.nombre) },
    Email: { email: input.email },
    Source: { select: { name: input.source } },
    Status: { status: { name: isCalInput(input) ? 'Meeting' : 'Lead' } },
  }

  if (input.telefono) properties.Phone = { phone_number: input.telefono }
  if (input.comentarios) properties.Comentarios = { rich_text: richText(input.comentarios) }

  if (isCalInput(input)) {
    properties['Cal Booking UID'] = { rich_text: richText(input.bookingUid) }
    properties['Cal Booking Start'] = { date: { start: input.startTime } }
  } else {
    if (typeof input.personas === 'number' && Number.isFinite(input.personas)) {
      properties.Personas = { number: input.personas }
    }
    if (input.viaje) properties.Viaje = { select: { name: input.viaje } }
  }

  const res = await notion.pages.create({
    parent: { database_id: NOTION_LEADS_DATABASE_ID },
    properties: properties as never,
  })
  return { id: (res as { id: string }).id }
}

export async function findLeadByCalUid(uid: string): Promise<string | null> {
  if (!NOTION_TOKEN || !NOTION_LEADS_DATABASE_ID) return null
  const res = await fetch(`https://api.notion.com/v1/databases/${NOTION_LEADS_DATABASE_ID}/query`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${NOTION_TOKEN}`,
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      filter: { property: 'Cal Booking UID', rich_text: { equals: uid } },
      page_size: 1,
    }),
  })
  if (!res.ok) throw new Error(`Notion query failed: ${res.status} ${await res.text()}`)
  const data = (await res.json()) as { results: Array<{ id: string }> }
  return data.results[0]?.id ?? null
}

export async function updateLeadStatusByCalUid(uid: string, status: string, patch?: { startTime?: string }) {
  if (!notion) throw new Error('Notion client not configured')
  const pageId = await findLeadByCalUid(uid)
  if (!pageId) throw new Error(`Lead not found for Cal UID ${uid}`)
  const properties: Record<string, unknown> = {
    Status: { status: { name: status } },
  }
  if (patch?.startTime) {
    properties['Cal Booking Start'] = { date: { start: patch.startTime } }
  }
  await notion.pages.update({ page_id: pageId, properties: properties as never })
}
