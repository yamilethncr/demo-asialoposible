import React from 'react'
import Image from 'next/image'

/* eslint-disable @typescript-eslint/no-explicit-any */

type LexicalNode = {
  type: string
  tag?: string
  format?: number | string
  text?: string
  children?: LexicalNode[]
  direction?: string
  indent?: number
  listType?: string
  value?: number
  url?: string
  src?: string
  altText?: string
  width?: number
  height?: number
  fields?: any
  relationTo?: string
}

type RichTextRendererProps = {
  content: {
    root: {
      children: LexicalNode[]
    }
  }
}

function renderFormatted(text: string, format: number): React.ReactNode {
  let node: React.ReactNode = text
  if (format & 1) node = <strong>{node}</strong>
  if (format & 2) node = <em>{node}</em>
  if (format & 4) node = <s>{node}</s>
  if (format & 8) node = <u>{node}</u>
  if (format & 16) node = <code className="bg-[rgba(200,161,90,0.1)] text-[var(--color-accent)] px-1.5 py-0.5 text-[0.9em] rounded-sm" style={{ fontFamily: 'var(--font-monospace)' }}>{node}</code>
  return node
}

function renderNode(node: LexicalNode, index: number): React.ReactNode {
  switch (node.type) {
    case 'text':
      return <React.Fragment key={index}>{renderFormatted(node.text || '', typeof node.format === 'number' ? node.format : 0)}</React.Fragment>

    case 'linebreak':
      return <br key={index} />

    case 'link': {
      const children = node.children?.map((child, i) => renderNode(child, i))
      return (
        <a
          key={index}
          href={node.fields?.url || node.url || '#'}
          target={node.fields?.newTab ? '_blank' : undefined}
          rel={node.fields?.newTab ? 'noopener noreferrer' : undefined}
          className="text-[var(--color-accent)] underline decoration-[rgba(200,161,90,0.3)] underline-offset-4 transition-colors duration-300 hover:decoration-[var(--color-accent)]"
        >
          {children}
        </a>
      )
    }

    case 'heading': {
      const children = node.children?.map((child, i) => renderNode(child, i))
      const Tag = (node.tag || 'h2') as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
      const headingClasses: Record<string, string> = {
        h1: 'text-2xl md:text-3xl mt-12 mb-5',
        h2: 'text-xl md:text-2xl mt-10 mb-4',
        h3: 'text-lg md:text-xl mt-8 mb-3',
        h4: 'text-base md:text-lg mt-6 mb-3',
      }
      return (
        <Tag
          key={index}
          className={`${headingClasses[node.tag || 'h2'] || headingClasses.h3} text-[var(--color-text)]`}
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
        >
          {children}
        </Tag>
      )
    }

    case 'paragraph': {
      const children = node.children?.map((child, i) => renderNode(child, i))
      return (
        <p key={index} className="text-base md:text-[1.05rem] leading-[1.8] text-[rgba(255,255,255,0.85)] mb-6">
          {children}
        </p>
      )
    }

    case 'list': {
      const children = node.children?.map((child, i) => renderNode(child, i))
      if (node.listType === 'number') {
        return (
          <ol key={index} className="list-decimal list-inside mb-6 space-y-2 text-[rgba(255,255,255,0.85)] pl-4">
            {children}
          </ol>
        )
      }
      return (
        <ul key={index} className="list-disc list-inside mb-6 space-y-2 text-[rgba(255,255,255,0.85)] pl-4">
          {children}
        </ul>
      )
    }

    case 'listitem': {
      const children = node.children?.map((child, i) => renderNode(child, i))
      return <li key={index} className="text-base leading-[1.8]">{children}</li>
    }

    case 'quote': {
      const children = node.children?.map((child, i) => renderNode(child, i))
      return (
        <blockquote
          key={index}
          className="border-l-2 border-[var(--color-accent)] pl-6 my-8 text-lg italic text-[var(--color-secondary)]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {children}
        </blockquote>
      )
    }

    case 'upload': {
      const src = node.fields?.url || node.src || ''
      const alt = node.fields?.alt || node.altText || ''
      if (!src) return null
      return (
        <figure key={index} className="my-10">
          <div className="relative aspect-video overflow-hidden border border-[rgba(200,161,90,0.1)]">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
            />
          </div>
          {node.fields?.caption && (
            <figcaption className="text-xs text-[var(--color-secondary)] uppercase tracking-[0.05em] mt-3 text-center">
              {node.fields.caption}
            </figcaption>
          )}
        </figure>
      )
    }

    case 'horizontalrule':
      return (
        <hr
          key={index}
          className="my-12 border-none h-px"
          style={{ background: 'rgba(200,161,90,0.2)' }}
        />
      )

    default: {
      if (node.children) {
        return <React.Fragment key={index}>{node.children.map((child, i) => renderNode(child, i))}</React.Fragment>
      }
      return null
    }
  }
}

export default function RichTextRenderer({ content }: RichTextRendererProps) {
  if (!content?.root?.children) return null

  return (
    <div className="rich-text-content">
      {content.root.children.map((node, index) => renderNode(node, index))}
    </div>
  )
}
