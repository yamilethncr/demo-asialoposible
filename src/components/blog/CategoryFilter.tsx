import Link from 'next/link'

type Category = {
  name: string
  slug: string
}

type CategoryFilterProps = {
  categories: Category[]
  activeSlug?: string
}

export default function CategoryFilter({ categories, activeSlug }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      <Link
        href="/blog"
        className={`inline-block px-4 py-2 text-[0.7rem] uppercase tracking-[0.15em] font-bold no-underline border transition-all duration-300 ${
          !activeSlug
            ? 'border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-bg)]'
            : 'border-[rgba(200,161,90,0.2)] text-[var(--color-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
        }`}
      >
        Todos
      </Link>

      {categories.map((cat) => (
        <Link
          key={cat.slug}
          href={`/blog/categoria/${cat.slug}`}
          className={`inline-block px-4 py-2 text-[0.7rem] uppercase tracking-[0.15em] font-bold no-underline border transition-all duration-300 ${
            activeSlug === cat.slug
              ? 'border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-bg)]'
              : 'border-[rgba(200,161,90,0.2)] text-[var(--color-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
          }`}
        >
          {cat.name}
        </Link>
      ))}
    </div>
  )
}
