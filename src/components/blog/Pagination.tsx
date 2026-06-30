import Link from 'next/link'

type PaginationProps = {
  currentPage: number
  totalPages: number
  basePath: string
}

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <nav aria-label="Paginación" className="flex justify-center items-center gap-2 mt-16">
      {currentPage > 1 && (
        <Link
          href={currentPage === 2 ? basePath : `${basePath}?page=${currentPage - 1}`}
          className="inline-flex items-center justify-center w-10 h-10 border border-[rgba(200,161,90,0.2)] text-[var(--color-secondary)] no-underline text-sm transition-all duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          aria-label="Página anterior"
        >
          &larr;
        </Link>
      )}

      {pages.map((page) => (
        <Link
          key={page}
          href={page === 1 ? basePath : `${basePath}?page=${page}`}
          className={`inline-flex items-center justify-center w-10 h-10 border text-sm no-underline transition-all duration-300 ${
            page === currentPage
              ? 'border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-bg)] font-bold'
              : 'border-[rgba(200,161,90,0.2)] text-[var(--color-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
          }`}
          aria-current={page === currentPage ? 'page' : undefined}
        >
          {page}
        </Link>
      ))}

      {currentPage < totalPages && (
        <Link
          href={`${basePath}?page=${currentPage + 1}`}
          className="inline-flex items-center justify-center w-10 h-10 border border-[rgba(200,161,90,0.2)] text-[var(--color-secondary)] no-underline text-sm transition-all duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          aria-label="Página siguiente"
        >
          &rarr;
        </Link>
      )}
    </nav>
  )
}
