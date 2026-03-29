import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import Script from 'next/script'
import BlogHero from '@/components/blog/BlogHero'
import RichTextRenderer from '@/components/blog/RichTextRenderer'
import Breadcrumbs from '@/components/blog/Breadcrumbs'
import ShareButtons from '@/components/blog/ShareButtons'
import RelatedPosts from '@/components/blog/RelatedPosts'
import BlogCTA from '@/components/blog/BlogCTA'

type Params = Promise<{ slug: string }>

/* eslint-disable @typescript-eslint/no-explicit-any */

export async function generateStaticParams() {
  try {
    const payload = await getPayload({ config })
    const posts = await payload.find({
      collection: 'posts',
      where: { status: { equals: 'published' } },
      limit: 1000,
      select: { slug: true },
    })
    return posts.docs.map((post: any) => ({ slug: post.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'posts',
    where: {
      slug: { equals: slug },
      status: { equals: 'published' },
    },
    depth: 2,
    limit: 1,
  })

  const post = result.docs[0] as any
  if (!post) return { title: 'Artículo no encontrado' }

  const metaTitle = post.seo?.metaTitle || post.title
  const metaDescription = post.seo?.metaDescription || post.excerpt
  const imageUrl = post.featuredImage?.sizes?.hero?.url || post.featuredImage?.url

  return {
    title: `${metaTitle} | Asia Lo Posible`,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `https://asialoposible.net/blog/${slug}`,
      siteName: 'Asia Lo Posible',
      locale: 'es_LA',
      type: 'article',
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedAt,
      authors: [post.author?.name || 'Asia Lo Posible'],
      images: imageUrl
        ? [{ url: imageUrl, width: 1200, height: 630, alt: post.featuredImage?.alt }]
        : [],
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'posts',
    where: {
      slug: { equals: slug },
      status: { equals: 'published' },
    },
    depth: 2,
    limit: 1,
  })

  const post = result.docs[0] as any
  if (!post) notFound()

  // Fetch related posts (same category, excluding current)
  const relatedResult = await payload.find({
    collection: 'posts',
    where: {
      status: { equals: 'published' },
      category: { equals: typeof post.category === 'object' ? post.category.id : post.category },
      id: { not_equals: post.id },
    },
    sort: '-publishedDate',
    limit: 3,
    depth: 2,
  })

  const relatedPosts = relatedResult.docs.map((p: any) => ({
    title: p.title,
    slug: p.slug,
    excerpt: p.excerpt,
    featuredImage: p.featuredImage,
    category: p.category,
    publishedDate: p.publishedDate,
    readingTime: p.readingTime,
  }))

  const category = typeof post.category === 'object' ? post.category : { name: '', slug: '' }
  const author = typeof post.author === 'object' ? post.author : { name: 'Asia Lo Posible' }
  const imageUrl = post.featuredImage?.sizes?.hero?.url || post.featuredImage?.url
  const postUrl = `https://asialoposible.net/blog/${slug}`

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: imageUrl,
    datePublished: post.publishedDate,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Person',
      name: author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Asia Lo Posible',
      url: 'https://asialoposible.net',
    },
    description: post.seo?.metaDescription || post.excerpt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    wordCount: post.readingTime ? post.readingTime * 200 : undefined,
    articleSection: category.name,
    inLanguage: 'es',
  }

  return (
    <>
      <Script
        id="blog-posting-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      <BlogHero
        title={post.title}
        featuredImage={post.featuredImage}
        category={category}
        publishedDate={post.publishedDate}
        readingTime={post.readingTime}
        author={author}
      />

      <article className="max-w-[800px] mx-auto px-5 md:px-10 py-12 md:py-16">
        {/* Breadcrumbs */}
        <div className="mb-10">
          <Breadcrumbs
            items={[
              { name: 'Inicio', href: '/' },
              { name: 'Blog', href: '/blog' },
              { name: category.name, href: `/blog/categoria/${category.slug}` },
              { name: post.title, href: `/blog/${slug}` },
            ]}
          />
        </div>

        {/* Content */}
        <RichTextRenderer content={post.content} />

        {/* Share */}
        <div className="mt-12 pt-8 border-t border-[rgba(212,168,83,0.1)]">
          <ShareButtons url={postUrl} title={post.title} />
        </div>

        {/* CTA */}
        <BlogCTA />

        {/* Related posts */}
        <RelatedPosts posts={relatedPosts} />
      </article>
    </>
  )
}
