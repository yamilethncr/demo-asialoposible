import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'

/* eslint-disable @typescript-eslint/no-explicit-any */

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://asialoposible.net'

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/viajes-privados`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/imprescindibles`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/aviso-legal`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terminos`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terminos-viaje`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacidad`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  try {
    const payload = await getPayload({ config })

    // Blog posts
    const posts = await payload.find({
      collection: 'posts',
      where: { status: { equals: 'published' } },
      limit: 1000,
      select: { slug: true, updatedAt: true },
    })

    const postPages: MetadataRoute.Sitemap = posts.docs.map((post: any) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))

    // Categories — only include those with 2+ published posts
    const categories = await payload.find({
      collection: 'categories',
      limit: 100,
      select: { slug: true },
    })

    const categoryPages: MetadataRoute.Sitemap = []
    for (const cat of categories.docs as any[]) {
      const postCount = await payload.count({
        collection: 'posts',
        where: {
          status: { equals: 'published' },
          category: { equals: cat.id },
        },
      })
      if (postCount.totalDocs >= 2) {
        categoryPages.push({
          url: `${baseUrl}/blog/categoria/${cat.slug}`,
          lastModified: new Date(),
          changeFrequency: 'weekly' as const,
          priority: 0.6,
        })
      }
    }

    return [...staticPages, ...postPages, ...categoryPages]
  } catch {
    // If Payload is not initialized (e.g., no database), return static pages only
    return staticPages
  }
}
