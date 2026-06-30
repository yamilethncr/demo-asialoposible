/**
 * Seeds blog articles from markdown drafts into Payload CMS via REST API.
 * Converts markdown to Lexical JSON, then creates posts as drafts.
 *
 * Usage: npx tsx scripts/seed-articles.ts [base-url]
 */

import fs from 'fs'
import path from 'path'
import { markdownToLexical } from './md-to-lexical'

const BASE_URL = process.argv[2] || 'https://asialoposible.net'
const EMAIL = 'weare@innovaly.services'
const PASSWORD = 'AsiaLoPosible2026!'

interface Frontmatter {
  title: string
  slug: string
  metaTitle: string
  metaDescription: string
  excerpt: string
  category: string
  tags: string[]
  publishDate?: string
}

function parseFrontmatter(content: string): { frontmatter: Frontmatter; body: string } {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) throw new Error('No frontmatter found')

  const fm: Record<string, any> = {}
  let currentKey = ''
  const inTags = { active: false }

  for (const line of match[1].split('\n')) {
    if (line.trim().startsWith('- ') && inTags.active) {
      if (!Array.isArray(fm.tags)) fm.tags = []
      fm.tags.push(line.trim().replace(/^- "?|"$/g, ''))
      continue
    }

    inTags.active = false
    const kvMatch = line.match(/^(\w+):\s*"?(.*?)"?\s*$/)
    if (kvMatch) {
      currentKey = kvMatch[1]
      fm[currentKey] = kvMatch[2]
      if (currentKey === 'tags' && kvMatch[2] === '') {
        inTags.active = true
      }
    }
  }

  if (!fm.tags) fm.tags = []
  return { frontmatter: fm as Frontmatter, body: match[2] }
}

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

async function findBySlug(collection: string, slug: string, token: string): Promise<any | null> {
  const res = await fetch(
    `${BASE_URL}/api/${collection}?where[slug][equals]=${encodeURIComponent(slug)}&limit=1`,
    { headers: { Authorization: `JWT ${token}` } }
  )
  const data = await res.json()
  return data.docs?.[0] || null
}

async function findByName(collection: string, name: string, token: string): Promise<any | null> {
  const res = await fetch(
    `${BASE_URL}/api/${collection}?where[name][equals]=${encodeURIComponent(name)}&limit=1`,
    { headers: { Authorization: `JWT ${token}` } }
  )
  const data = await res.json()
  return data.docs?.[0] || null
}

async function seed() {
  console.log(`Connecting to ${BASE_URL}...`)
  const token = await login()
  console.log('Logged in.\n')

  // Get author
  const usersRes = await fetch(`${BASE_URL}/api/users?limit=1`, {
    headers: { Authorization: `JWT ${token}` },
  })
  const usersData = await usersRes.json()
  const authorId = usersData.docs?.[0]?.id
  if (!authorId) {
    console.error('No users found.')
    process.exit(1)
  }
  console.log(`Author: ${usersData.docs[0].name} (id: ${authorId})`)

  const draftsDir = path.resolve(__dirname, '../docs/blog-drafts')
  const files = [
    'bahia-de-halong-guia-completa.md',
    'que-ver-en-vietnam.md',
    'viaje-vietnam-camboya-14-dias.md',
    // Artículos portados del rediseño v2 (demo de Yamileth)
    'mejor-epoca-viajar-vietnam.md',
    'que-ver-en-camboya-angkor.md',
    'mejores-hoteles-hanoi.md',
    'mejores-rutas-sudeste-asiatico.md',
    'guia-gastronomica-vietnam.md',
    'viajar-asia-en-espanol.md',
    // Top 10 — guías por destino (demo de Yamileth)
    'bahia-de-ha-long.md',
    'siem-reap-angkor.md',
    'chiang-mai.md',
    'luang-prabang.md',
    'hoi-an.md',
    'kioto.md',
    'seul.md',
    'tokio.md',
    'pekin-gran-muralla.md',
    'isla-de-jeju.md',
  ]

  for (const file of files) {
    const filePath = path.join(draftsDir, file)
    if (!fs.existsSync(filePath)) {
      console.error(`\nFile not found: ${file}`)
      continue
    }

    const raw = fs.readFileSync(filePath, 'utf-8')
    const { frontmatter, body } = parseFrontmatter(raw)
    console.log(`\nProcessing: ${frontmatter.title}`)

    // Check if exists
    const existing = await findBySlug('posts', frontmatter.slug, token)
    if (existing) {
      console.log(`  ✓ Already exists (id: ${existing.id}), skipping`)
      continue
    }

    // Find category
    const category = await findByName('categories', frontmatter.category, token)
    if (!category) {
      console.error(`  ✗ Category "${frontmatter.category}" not found`)
      continue
    }

    // Find tags
    const tagIds: number[] = []
    for (const tagName of frontmatter.tags) {
      const tag = await findByName('tags', tagName.trim(), token)
      if (tag) tagIds.push(tag.id)
      else console.log(`  ⚠ Tag "${tagName}" not found`)
    }

    // Convert markdown to Lexical
    const content = markdownToLexical(body)

    // Create post
    const postRes = await fetch(`${BASE_URL}/api/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${token}`,
      },
      body: JSON.stringify({
        title: frontmatter.title,
        slug: frontmatter.slug,
        content,
        excerpt: frontmatter.excerpt,
        category: category.id,
        tags: tagIds,
        author: authorId,
        status: 'published',
        // Escalonar fechas (regla CLAUDE.md): usa publishDate del frontmatter si existe
        publishedDate: frontmatter.publishDate
          ? new Date(frontmatter.publishDate).toISOString()
          : new Date().toISOString(),
        seo: {
          metaTitle: frontmatter.metaTitle,
          metaDescription: frontmatter.metaDescription,
        },
      }),
    })

    const postData = await postRes.json()
    if (postData.doc) {
      console.log(`  + Created "${frontmatter.title}" (id: ${postData.doc.id})`)
    } else {
      console.error(`  ✗ Failed:`, JSON.stringify(postData.errors || postData).slice(0, 200))
    }
  }

  console.log('\nDone! Check articles at /blog')
}

seed().catch((e) => {
  console.error('Seed failed:', e.message)
  process.exit(1)
})
