import { getPayload } from 'payload'
import config from '@payload-config'

type TeaserPost = {
  id: string
  title: string
  slug: string
  excerpt?: string
  readingTime?: number
  category?: { name?: string } | null
  featuredImage?: { url?: string; alt?: string; sizes?: { card?: { url?: string } } } | null
}

/**
 * Sección de blog del home — consulta Payload por los 3 posts publicados más recientes.
 * Si no hay posts publicados, no renderiza la sección.
 */
export default async function BlogTeaser() {
  let posts: TeaserPost[] = []
  try {
    const payload = await getPayload({ config })
    const res = await payload.find({
      collection: 'posts',
      where: { status: { equals: 'published' } },
      sort: '-publishedDate',
      limit: 3,
      depth: 2,
    })
    posts = res.docs as unknown as TeaserPost[]
  } catch {
    posts = []
  }

  if (!posts.length) return null

  return (
    <section className="section section--alt" id="blog">
      <div className="container">
        <div
          className="section-head reveal"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            maxWidth: '100%',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div style={{ maxWidth: '620px' }}>
            <p className="eyebrow">Blog de viajes</p>
            <h2 className="h2">Tips, guías y rutas para tu Asia</h2>
            <p className="lead">Todo lo que aprendí viviendo aquí, para que tú viajes mejor.</p>
          </div>
          <a href="/blog" className="btn btn--ghost">
            Ver todo el blog
          </a>
        </div>

        <div className="blog-grid">
          {posts.map((p) => {
            const img = p.featuredImage?.sizes?.card?.url || p.featuredImage?.url || ''
            return (
              <a className="post-card reveal" href={`/blog/${p.slug}`} key={p.id}>
                <div className="post-card__img">
                  {img && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={img} alt={p.featuredImage?.alt || p.title} loading="lazy" />
                  )}
                </div>
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
      </div>
    </section>
  )
}
