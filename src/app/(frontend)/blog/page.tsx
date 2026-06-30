import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import Script from 'next/script'
import Pagination from '@/components/blog/Pagination'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Blog de viajes a Asia | Tips, guías y rutas',
  description:
    'Guías y tips para viajar a Asia: mejor época para Vietnam, qué ver en Camboya, mejores hoteles en Hanói y rutas por el Sudeste Asiático. Consejos de quien vive aquí.',
  openGraph: {
    title: 'Blog de viajes a Asia | Asia Lo Posible',
    description: 'Tips, guías y rutas para viajar mejor por Asia.',
    url: 'https://asialoposible.net/blog',
    siteName: 'Asia Lo Posible',
    locale: 'es_LA',
    type: 'website',
    images: [{ url: '/og-asialoposible.jpg', width: 1200, height: 630, alt: 'Blog de viajes por Asia en español — Asia Lo Posible' }],
  },
  alternates: { canonical: '/blog' },
}

const POSTS_PER_PAGE = 12

// "Nuestro Top 10 de Asia" — sección de Yamileth (guía boutique). Imágenes en public/img/dest/.
const TOP10 = [
  { rank: '01', name: 'Bahía de Ha Long', desc: 'Vietnam · islas de piedra caliza', img: 'dest-halong', slug: 'bahia-de-ha-long' },
  { rank: '02', name: 'Siem Reap & Angkor', desc: 'Camboya · templos de Angkor Wat', img: 'dest-angkor', slug: 'siem-reap-angkor' },
  { rank: '03', name: 'Chiang Mai', desc: 'Tailandia · templos y montañas', img: 'dest-chiangmai', slug: 'chiang-mai' },
  { rank: '04', name: 'Luang Prabang', desc: 'Laos · monjes y río Mekong', img: 'dest-luangprabang', slug: 'luang-prabang' },
  { rank: '05', name: 'Hoi An', desc: 'Vietnam · ciudad de los faroles', img: 'dest-hoian', slug: 'hoi-an' },
  { rank: '06', name: 'Kioto', desc: 'Japón · geishas y toriis', img: 'dest-kioto', slug: 'kioto' },
  { rank: '07', name: 'Seúl', desc: 'Corea del Sur · palacios y K-pop', img: 'dest-seul', slug: 'seul' },
  { rank: '08', name: 'Tokio', desc: 'Japón · neón y megalópolis', img: 'dest-tokio', slug: 'tokio' },
  { rank: '09', name: 'Pekín & Gran Muralla', desc: 'China · historia milenaria', img: 'dest-granmuralla', slug: 'pekin-gran-muralla' },
  { rank: '10', name: 'Isla de Jeju', desc: 'Corea del Sur · isla volcánica', img: 'dest-jeju', slug: 'isla-de-jeju' },
]

type Post = {
  id: string
  title: string
  slug: string
  excerpt?: string
  readingTime?: number
  category?: { name?: string } | null
  featuredImage?: { url?: string; alt?: string; sizes?: { card?: { url?: string } } } | null
}

type SearchParams = Promise<{ page?: string }>

export default async function BlogPage({ searchParams }: { searchParams: SearchParams }) {
  const { page: pageParam } = await searchParams
  const currentPage = Number(pageParam) || 1

  let posts: Post[] = []
  let totalPages = 1
  try {
    const payload = await getPayload({ config })
    const res = await payload.find({
      collection: 'posts',
      where: { status: { equals: 'published' } },
      sort: '-publishedDate',
      limit: POSTS_PER_PAGE,
      page: currentPage,
      depth: 2,
    })
    posts = res.docs as unknown as Post[]
    totalPages = res.totalPages
  } catch {
    posts = []
  }

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog de viajes a Asia — Asia Lo Posible',
    description:
      'Guías y tips para viajar a Asia en español: mejor época, qué ver, dónde dormir, rutas y gastronomía.',
    url: 'https://asialoposible.net/blog',
    inLanguage: 'es',
    publisher: { '@type': 'Organization', name: 'Asia Lo Posible', url: 'https://asialoposible.net' },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `https://asialoposible.net/blog/${p.slug}`,
    })),
  }

  return (
    <>
      <Script id="blog-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="breadcrumb">
              <a href="/">Inicio</a> › Blog
            </p>
            <p className="eyebrow">Blog de viajes</p>
            <h1 className="h2">Tips, guías y rutas para tu Asia</h1>
            <p className="lead">
              Todo lo que aprendí viviendo aquí, para que tú viajes mejor, gastes mejor y disfrutes
              más.
            </p>
          </div>

          <div className="section-head reveal" style={{ marginTop: '2.5rem' }}>
            <h2 className="h2">Guías y artículos</h2>
          </div>

          {posts.length > 0 ? (
            <div className="blog-grid">
              {posts.map((p) => {
                const img = p.featuredImage?.sizes?.card?.url || p.featuredImage?.url || ''
                return (
                  <a className="post-card reveal" href={`/blog/${p.slug}`} key={p.id}>
                    {img && (
                      <div className="post-card__img">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={img} alt={p.featuredImage?.alt || p.title} loading="lazy" />
                      </div>
                    )}
                    <div className="post-card__body">
                      {p.category?.name && <span className="post-card__cat">{p.category.name}</span>}
                      <h3>{p.title}</h3>
                      {p.excerpt && <p>{p.excerpt}</p>}
                      {p.readingTime ? (
                        <span className="post-card__meta">{p.readingTime} min de lectura</span>
                      ) : null}
                    </div>
                  </a>
                )
              })}
            </div>
          ) : (
            <p className="lead">Próximamente publicaremos nuevos artículos.</p>
          )}

          {totalPages > 1 && (
            <Pagination currentPage={currentPage} totalPages={totalPages} basePath="/blog" />
          )}

          {/* ===================== NUESTRO TOP 10 ===================== */}
          <div className="section-head reveal" id="top10" style={{ marginTop: '4.5rem' }}>
            <p className="eyebrow">Guía boutique</p>
            <h2 className="h2">Nuestro Top 10 de Asia</h2>
            <p className="lead">
              Los 10 lugares que recomendamos vivir al menos una vez. Toca cada uno para leer su
              guía con las mejores recomendaciones y datos clave.
            </p>
          </div>
          <div className="dest-grid">
            {TOP10.map((d) => (
              <a className="dest-card reveal" href={`/blog/${d.slug}`} key={d.rank}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/img/dest/${d.img}.jpg`} alt={`${d.name} — ${d.desc}`} loading="lazy" />
                <span className="dest-card__rank">{d.rank}</span>
                <div className="dest-card__body">
                  <h3>{d.name}</h3>
                  <span>{d.desc}</span>
                </div>
              </a>
            ))}
          </div>

          {/* ===================== CTA ===================== */}
          <div className="section-head center reveal" style={{ margin: '4rem auto 0' }}>
            <h2 className="h2" style={{ fontSize: 'clamp(1.6rem,3vw,2.3rem)' }}>
              ¿Quieres vivir Asia, no solo leerla?
            </h2>
            <p className="lead">Te llevamos. Salidas grupales en español o tu viaje a medida.</p>
            <a href="/#viajes" className="btn btn--lg" style={{ marginTop: '1.2rem' }}>
              Ver nuestros viajes
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
