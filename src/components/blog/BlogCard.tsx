import Image from 'next/image'
import Link from 'next/link'

type BlogCardProps = {
  title: string
  slug: string
  excerpt: string
  featuredImage: {
    url: string
    alt: string
    sizes?: {
      card?: { url: string }
    }
  }
  category: {
    name: string
    slug: string
  }
  publishedDate: string
  readingTime?: number
}

export default function BlogCard({
  title,
  slug,
  excerpt,
  featuredImage,
  category,
  publishedDate,
  readingTime,
}: BlogCardProps) {
  const imageUrl = featuredImage.sizes?.card?.url || featuredImage.url
  const date = new Date(publishedDate).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="group relative overflow-hidden border border-[rgba(212,168,83,0.15)] transition-all duration-500 hover:border-[rgba(212,168,83,0.4)] hover:shadow-[0_0_30px_rgba(212,168,83,0.08)]">
      <Link href={`/blog/${slug}`} className="no-underline block">
        {/* Image */}
        <div className="relative aspect-[3/2] overflow-hidden">
          <Image
            src={imageUrl}
            alt={featuredImage.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent opacity-60" />

          {/* Category badge */}
          <span
            className="absolute top-4 left-4 text-[0.65rem] uppercase tracking-[0.15em] font-bold px-3 py-1.5 z-10"
            style={{
              background: 'rgba(212,168,83,0.15)',
              border: '1px solid rgba(212,168,83,0.3)',
              color: 'var(--color-accent)',
            }}
          >
            {category.name}
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3 text-[0.7rem] text-[var(--color-secondary)] uppercase tracking-[0.1em]">
            <time dateTime={publishedDate}>{date}</time>
            {readingTime && (
              <>
                <span className="text-[rgba(212,168,83,0.3)]">&middot;</span>
                <span>{readingTime} min lectura</span>
              </>
            )}
          </div>

          <h3
            className="text-lg md:text-xl leading-tight mb-3 transition-colors duration-300 group-hover:text-[var(--color-accent)]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {title}
          </h3>

          <p className="text-sm text-[var(--color-secondary)] leading-relaxed line-clamp-3">
            {excerpt}
          </p>

          <span className="inline-block mt-4 text-xs uppercase tracking-[0.15em] text-[var(--color-accent)] font-bold transition-transform duration-300 group-hover:translate-x-1">
            Leer m&aacute;s &rarr;
          </span>
        </div>
      </Link>
    </article>
  )
}
