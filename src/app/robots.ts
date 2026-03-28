import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/flyer'],
    },
    sitemap: 'https://asialoposible.net/sitemap.xml',
  }
}
