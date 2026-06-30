/**
 * Seeds categories and tags into Payload CMS via REST API.
 * Requires the dev server or production to be running.
 *
 * Usage: npx tsx scripts/seed-taxonomy.ts [base-url]
 * Default base URL: http://localhost:3000
 */

const BASE_URL = process.argv[2] || 'https://asialoposible.net'
const EMAIL = 'weare@innovaly.services'
const PASSWORD = 'AsiaLoPosible2026!'

const categories = [
  { name: 'Vietnam', slug: 'vietnam', description: 'Guías, experiencias y consejos para viajar a Vietnam en español', metaTitle: 'Vietnam — Guías de Viaje en Español', metaDescription: 'Guías, rutas y consejos para viajar a Vietnam. Escritas por quien vive allá.' },
  { name: 'Camboya', slug: 'camboya', description: 'Todo sobre Camboya: templos, cultura y gastronomía', metaTitle: 'Camboya — Guías de Viaje en Español', metaDescription: 'Angkor Wat, Siem Reap y más. Guías de Camboya para viajeros hispanohablantes.' },
  { name: 'Destinos del Sudeste Asiático', slug: 'destinos-sudeste-asiatico', description: 'Explora los destinos más fascinantes del Sudeste Asiático', metaTitle: 'Destinos del Sudeste Asiático en Español', metaDescription: 'Los mejores destinos del Sudeste Asiático explicados en español por quien vive en Asia.' },
  { name: 'Consejos de Viaje', slug: 'consejos-de-viaje', description: 'Tips prácticos para viajar a Asia sin complicaciones', metaTitle: 'Consejos para Viajar a Asia en Español', metaDescription: 'Tips prácticos de viaje, logística, presupuesto y preparación para tu viaje a Asia.' },
  { name: 'Gastronomía', slug: 'gastronomia', description: 'La comida del Sudeste Asiático, plato a plato', metaTitle: 'Gastronomía Asiática en Español', metaDescription: 'Descubre la comida de Vietnam y Camboya: platos típicos, mercados y clases de cocina.' },
  { name: 'Japón', slug: 'japon', description: 'Guías de Japón: templos, ciudades y cultura', metaTitle: 'Japón — Guías de Viaje en Español', metaDescription: 'Kioto, Tokio y más. Guías de Japón en español para viajeros hispanohablantes.' },
  { name: 'Corea del Sur', slug: 'corea-del-sur', description: 'Guías de Corea del Sur: Seúl, Jeju y cultura', metaTitle: 'Corea del Sur — Guías de Viaje en Español', metaDescription: 'Seúl, la isla de Jeju y más. Guías de Corea del Sur en español.' },
  { name: 'China', slug: 'china', description: 'Guías de China: Pekín, la Gran Muralla y más', metaTitle: 'China — Guías de Viaje en Español', metaDescription: 'La Gran Muralla, Pekín y más. Guías de China en español para viajeros.' },
]

const tags = [
  { name: 'Bahía de Halong', slug: 'bahia-de-halong' },
  { name: 'Crucero', slug: 'crucero' },
  { name: 'UNESCO', slug: 'unesco' },
  { name: 'Hanoi', slug: 'hanoi' },
  { name: 'Hoi An', slug: 'hoi-an' },
  { name: 'Da Nang', slug: 'da-nang' },
  { name: 'Hue', slug: 'hue' },
  { name: 'Angkor Wat', slug: 'angkor-wat' },
  { name: 'Siem Reap', slug: 'siem-reap' },
  { name: 'Itinerario', slug: 'itinerario' },
  { name: 'Viaje organizado', slug: 'viaje-organizado' },
  { name: 'Presupuesto', slug: 'presupuesto' },
]

async function login(): Promise<string> {
  const res = await fetch(`${BASE_URL}/api/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: EMAIL, password: PASSWORD }),
  })
  const data = await res.json()
  if (!data.token) throw new Error(`Login failed: ${JSON.stringify(data)}`)
  return data.token
}

async function createItem(collection: string, data: Record<string, any>, token: string): Promise<any> {
  const res = await fetch(`${BASE_URL}/api/${collection}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`,
    },
    body: JSON.stringify(data),
  })
  return res.json()
}

async function seed() {
  console.log(`Connecting to ${BASE_URL}...`)
  const token = await login()
  console.log('Logged in successfully.\n')

  console.log('Seeding categories...')
  for (const cat of categories) {
    const result = await createItem('categories', cat, token)
    if (result.doc) {
      console.log(`  + Created "${cat.name}" (id: ${result.doc.id})`)
    } else if (result.errors) {
      console.log(`  ⚠ "${cat.name}": ${result.errors.map((e: any) => e.message).join(', ')}`)
    }
  }

  console.log('\nSeeding tags...')
  for (const tag of tags) {
    const result = await createItem('tags', tag, token)
    if (result.doc) {
      console.log(`  + Created "${tag.name}" (id: ${result.doc.id})`)
    } else if (result.errors) {
      console.log(`  ⚠ "${tag.name}": ${result.errors.map((e: any) => e.message).join(', ')}`)
    }
  }

  console.log('\nDone!')
}

seed().catch((e) => {
  console.error('Seed failed:', e.message)
  process.exit(1)
})
