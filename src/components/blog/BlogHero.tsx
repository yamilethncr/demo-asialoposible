import Image from 'next/image'

type BlogHeroProps = {
  title: string
  featuredImage: {
    url: string
    alt: string
    sizes?: {
      hero?: { url: string }
    }
  }
  category: {
    name: string
    slug: string
  }
  publishedDate: string
  readingTime?: number
  author: {
    name: string
  }
}

export default function BlogHero({
  title,
  featuredImage,
  category,
  publishedDate,
  readingTime,
  author,
}: BlogHeroProps) {
  const imageUrl = featuredImage.sizes?.hero?.url || featuredImage.url
  const date = new Date(publishedDate).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <header className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-end overflow-hidden">
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt={featuredImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ animation: 'kenburns 20s ease-in-out infinite alternate' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[rgba(10,15,30,0.5)] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-10 pb-12 md:pb-16 w-full">
        <a
          href={`/blog/categoria/${category.slug}`}
          className="inline-block text-[0.65rem] uppercase tracking-[0.15em] font-bold px-3 py-1.5 mb-6 no-underline transition-colors duration-300 hover:bg-[rgba(212,168,83,0.25)]"
          style={{
            background: 'rgba(212,168,83,0.15)',
            border: '1px solid rgba(212,168,83,0.3)',
            color: 'var(--color-accent)',
          }}
        >
          {category.name}
        </a>

        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-[800px] mb-6"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
        >
          {title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-[0.75rem] text-[var(--color-secondary)] uppercase tracking-[0.1em]">
          <span>Por {author.name}</span>
          <span className="text-[rgba(212,168,83,0.3)]">&middot;</span>
          <time dateTime={publishedDate}>{date}</time>
          {readingTime && (
            <>
              <span className="text-[rgba(212,168,83,0.3)]">&middot;</span>
              <span>{readingTime} min lectura</span>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
