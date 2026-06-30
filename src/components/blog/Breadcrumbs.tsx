import Script from 'next/script'

type BreadcrumbItem = {
  name: string
  href: string
}

type BreadcrumbsProps = {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const baseUrl = 'https://asialoposible.net'

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.href}`,
    })),
  }

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <nav
        aria-label="Navegación de migas de pan"
        className="text-[0.7rem] uppercase tracking-[0.1em] text-[var(--color-secondary)]"
      >
        <ol className="flex flex-wrap items-center gap-2 list-none p-0 m-0">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 && (
                <span className="text-[rgba(200, 161, 90,0.3)]">/</span>
              )}
              {index === items.length - 1 ? (
                <span className="text-[var(--color-text)]">{item.name}</span>
              ) : (
                <a
                  href={item.href}
                  className="no-underline text-[var(--color-secondary)] transition-colors duration-300 hover:text-[var(--color-accent)]"
                >
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
