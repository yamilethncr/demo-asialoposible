import BlogCard from './BlogCard'

type Post = {
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

type RelatedPostsProps = {
  posts: Post[]
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null

  return (
    <section className="mt-20 pt-16 border-t border-[rgba(200,161,90,0.1)]">
      <h2
        className="text-xl md:text-2xl uppercase mb-10 text-center"
        style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.06em' }}
      >
        ART&Iacute;CULOS RELACIONADOS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </section>
  )
}
