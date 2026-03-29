import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import BlogCard from '@/components/blog/BlogCard'
import CategoryFilter from '@/components/blog/CategoryFilter'
import Pagination from '@/components/blog/Pagination'

type Params = Promise<{ slug: string }>
type SearchParams = Promise<{ page?: string }>

/* eslint-disable @typescript-eslint/no-explicit-any */

export async function generateStaticParams() {
  try {
    const payload = await getPayload({ config })
    const categories = await payload.find({
      collection: 'categories',
      limit: 100,
      select: { slug: true },
    })
    return categories.docs.map((cat: any) => ({ slug: cat.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'categories',
    where: { slug: { equals: slug } },
    limit: 1,
  })

  const category = result.docs[0] as any
  if (!category) return { title: 'Categoría no encontrada' }

  const metaTitle = category.metaTitle || `${category.name} — Blog de Viajes`
  const metaDescription = category.metaDescription || `Artículos sobre ${category.name}. Guías, consejos y experiencias de viaje en español.`

  return {
    title: `${metaTitle} | Asia Lo Posible`,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `https://asialoposible.net/blog/categoria/${slug}`,
      siteName: 'Asia Lo Posible',
      locale: 'es_LA',
      type: 'website',
    },
    alternates: {
      canonical: `/blog/categoria/${slug}`,
    },
  }
}

const POSTS_PER_PAGE = 12

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Params
  searchParams: SearchParams
}) {
  const { slug } = await params
  const { page: pageParam } = await searchParams
  const currentPage = Number(pageParam) || 1
  const payload = await getPayload({ config })

  // Find category
  const categoryResult = await payload.find({
    collection: 'categories',
    where: { slug: { equals: slug } },
    limit: 1,
  })

  const category = categoryResult.docs[0] as any
  if (!category) notFound()

  // Find posts in this category
  const [postsResult, allCategories] = await Promise.all([
    payload.find({
      collection: 'posts',
      where: {
        status: { equals: 'published' },
        category: { equals: category.id },
      },
      sort: '-publishedDate',
      limit: POSTS_PER_PAGE,
      page: currentPage,
      depth: 2,
    }),
    payload.find({
      collection: 'categories',
      limit: 100,
      sort: 'name',
    }),
  ])

  const posts = postsResult.docs
  const totalPages = postsResult.totalPages

  return (
    <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-12 md:py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <span
          className="inline-block text-[0.65rem] tracking-[0.2em] uppercase px-3 py-1.5 font-bold mb-6"
          style={{
            background: 'rgba(212,168,83,0.15)',
            border: '1px solid rgba(212,168,83,0.3)',
            color: 'var(--color-accent)',
          }}
        >
          CATEGOR&Iacute;A
        </span>

        <h1
          className="text-3xl sm:text-4xl md:text-5xl uppercase mb-4"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.06em' }}
        >
          {category.name}
        </h1>

        {category.description && (
          <p className="text-sm md:text-base text-[var(--color-secondary)] max-w-[500px] mx-auto">
            {category.description}
          </p>
        )}
      </div>

      {/* Category filter */}
      <CategoryFilter
        categories={allCategories.docs.map((c: any) => ({
          name: c.name,
          slug: c.slug,
        }))}
        activeSlug={slug}
      />

      {/* Posts grid */}
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post: any) => (
            <BlogCard
              key={post.id}
              title={post.title}
              slug={post.slug}
              excerpt={post.excerpt}
              featuredImage={post.featuredImage}
              category={post.category}
              publishedDate={post.publishedDate}
              readingTime={post.readingTime}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-[var(--color-secondary)] text-sm uppercase tracking-[0.1em]">
            A&uacute;n no hay art&iacute;culos en esta categor&iacute;a.
          </p>
        </div>
      )}

      <Pagination currentPage={currentPage} totalPages={totalPages} basePath={`/blog/categoria/${slug}`} />
    </div>
  )
}
