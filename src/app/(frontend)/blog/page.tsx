import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import BlogCard from '@/components/blog/BlogCard'
import CategoryFilter from '@/components/blog/CategoryFilter'
import Pagination from '@/components/blog/Pagination'

export const metadata: Metadata = {
  title: 'Blog de Viajes a Asia en Español | Asia Lo Posible',
  description: 'Guías, consejos y experiencias de viaje por Vietnam, Camboya y el Sudeste Asiático. Todo en español, por viajeros que conocen Asia de verdad.',
  openGraph: {
    title: 'Blog de Viajes a Asia en Español | Asia Lo Posible',
    description: 'Guías, consejos y experiencias de viaje por Vietnam, Camboya y el Sudeste Asiático.',
    url: 'https://asialoposible.net/blog',
    siteName: 'Asia Lo Posible',
    locale: 'es_LA',
    type: 'website',
  },
  alternates: {
    canonical: '/blog',
  },
}

const POSTS_PER_PAGE = 12

type SearchParams = Promise<{ page?: string }>

export default async function BlogPage({ searchParams }: { searchParams: SearchParams }) {
  const { page: pageParam } = await searchParams
  const currentPage = Number(pageParam) || 1
  const payload = await getPayload({ config })

  const [postsResult, categoriesResult] = await Promise.all([
    payload.find({
      collection: 'posts',
      where: { status: { equals: 'published' } },
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
  const categories = categoriesResult.docs

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
          BLOG
        </span>

        <h1
          className="text-3xl sm:text-4xl md:text-5xl uppercase mb-4"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.06em' }}
        >
          VIAJES POR ASIA
        </h1>

        <p className="text-sm md:text-base text-[var(--color-secondary)] max-w-[500px] mx-auto">
          Gu&iacute;as, consejos y experiencias para tu viaje al Sudeste Asi&aacute;tico. Todo en espa&ntilde;ol.
        </p>
      </div>

      {/* Category filter */}
      <CategoryFilter
        categories={categories.map((c) => {
          const cat = c as unknown as { name: string; slug: string }
          return { name: cat.name, slug: cat.slug }
        })}
      />

      {/* Posts grid */}
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => {
            const p = post as unknown as {
              id: string
              title: string
              slug: string
              excerpt: string
              featuredImage: { url: string; alt: string; sizes?: { card?: { url: string } } }
              category: { name: string; slug: string }
              publishedDate: string
              readingTime?: number
            }
            return (
              <BlogCard
                key={p.id}
                title={p.title}
                slug={p.slug}
                excerpt={p.excerpt}
                featuredImage={p.featuredImage}
                category={p.category}
                publishedDate={p.publishedDate}
                readingTime={p.readingTime}
              />
            )
          })}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-[var(--color-secondary)] text-sm uppercase tracking-[0.1em]">
            Pr&oacute;ximamente publicaremos nuevos art&iacute;culos.
          </p>
        </div>
      )}

      <Pagination currentPage={currentPage} totalPages={totalPages} basePath="/blog" />
    </div>
  )
}
