import { getPayload } from 'payload'
import config from '@payload-config'

/* eslint-disable @typescript-eslint/no-explicit-any */

export async function GET() {
  const baseUrl = 'https://asialoposible.net'

  try {
    const payload = await getPayload({ config })

    const posts = await payload.find({
      collection: 'posts',
      where: { status: { equals: 'published' } },
      sort: '-publishedDate',
      limit: 50,
      depth: 1,
    })

    const items = posts.docs
      .map((post: any) => {
        const pubDate = post.publishedDate
          ? new Date(post.publishedDate).toUTCString()
          : new Date(post.createdAt).toUTCString()
        const category =
          typeof post.category === 'object' ? post.category.name : ''

        return `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${pubDate}</pubDate>${category ? `\n      <category><![CDATA[${category}]]></category>` : ''}
    </item>`
      })
      .join('\n')

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Asia Lo Posible — Blog de Viajes</title>
    <link>${baseUrl}/blog</link>
    <description>Guías, consejos y experiencias de viaje por Vietnam, Camboya y el Sudeste Asiático en español.</description>
    <language>es</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`

    return new Response(rss, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    })
  } catch {
    return new Response(
      `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Asia Lo Posible</title><link>${baseUrl}</link></channel></rss>`,
      { headers: { 'Content-Type': 'application/xml' } },
    )
  }
}
