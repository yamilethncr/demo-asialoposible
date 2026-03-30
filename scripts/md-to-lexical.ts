/**
 * Converts markdown content to Payload CMS Lexical editor JSON format.
 * Supports: headings, paragraphs, bold, italic, links, blockquotes,
 * ordered/unordered lists, horizontal rules, tables (as paragraphs).
 */

type LexicalNode = {
  type: string
  tag?: string
  format?: number | string
  text?: string
  children?: LexicalNode[]
  direction?: string
  indent?: number
  listType?: string
  start?: number
  value?: number
  url?: string
  fields?: { url?: string; newTab?: boolean }
  version?: number
}

function parseInline(text: string): LexicalNode[] {
  const nodes: LexicalNode[] = []
  // Process bold, italic, links
  let remaining = text

  while (remaining.length > 0) {
    // Bold+italic ***text***
    const boldItalicMatch = remaining.match(/^\*\*\*(.+?)\*\*\*/)
    if (boldItalicMatch) {
      nodes.push({ type: 'text', text: boldItalicMatch[1], format: 3 }) // bold(1) + italic(2) = 3
      remaining = remaining.slice(boldItalicMatch[0].length)
      continue
    }

    // Bold **text**
    const boldMatch = remaining.match(/^\*\*(.+?)\*\*/)
    if (boldMatch) {
      nodes.push({ type: 'text', text: boldMatch[1], format: 1 })
      remaining = remaining.slice(boldMatch[0].length)
      continue
    }

    // Italic *text*
    const italicMatch = remaining.match(/^\*([^*]+?)\*/)
    if (italicMatch) {
      nodes.push({ type: 'text', text: italicMatch[1], format: 2 })
      remaining = remaining.slice(italicMatch[0].length)
      continue
    }

    // Links [text](url)
    const linkMatch = remaining.match(/^\[([^\]]+)\]\(([^)]+)\)/)
    if (linkMatch) {
      nodes.push({
        type: 'link',
        fields: { url: linkMatch[2], newTab: linkMatch[2].startsWith('http') },
        children: [{ type: 'text', text: linkMatch[1], format: 0 }],
      })
      remaining = remaining.slice(linkMatch[0].length)
      continue
    }

    // Inline code `text`
    const codeMatch = remaining.match(/^`([^`]+)`/)
    if (codeMatch) {
      nodes.push({ type: 'text', text: codeMatch[1], format: 16 })
      remaining = remaining.slice(codeMatch[0].length)
      continue
    }

    // Plain text until next special char
    const plainMatch = remaining.match(/^[^*`\[]+/)
    if (plainMatch) {
      nodes.push({ type: 'text', text: plainMatch[0], format: 0 })
      remaining = remaining.slice(plainMatch[0].length)
      continue
    }

    // Single special char that didn't match a pattern
    nodes.push({ type: 'text', text: remaining[0], format: 0 })
    remaining = remaining.slice(1)
  }

  return nodes
}

function parseLine(line: string): LexicalNode | null {
  // Empty line
  if (line.trim() === '') return null

  // Horizontal rule
  if (/^---+$/.test(line.trim()) || /^\*\*\*+$/.test(line.trim())) {
    return { type: 'horizontalrule', version: 1 }
  }

  // Headings
  const headingMatch = line.match(/^(#{1,6})\s+(.+)$/)
  if (headingMatch) {
    const level = headingMatch[1].length
    return {
      type: 'heading',
      tag: `h${level}`,
      children: parseInline(headingMatch[2]),
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    }
  }

  // Blockquote
  if (line.startsWith('> ')) {
    const content = line.slice(2)
    return {
      type: 'quote',
      children: parseInline(content),
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    }
  }

  // Regular paragraph
  return {
    type: 'paragraph',
    children: parseInline(line),
    direction: 'ltr',
    format: '',
    indent: 0,
    version: 1,
  }
}

export function markdownToLexical(markdown: string): { root: { children: LexicalNode[]; direction: string; format: string; indent: number; type: string; version: number } } {
  const lines = markdown.split('\n')
  const children: LexicalNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    // Skip YAML frontmatter
    if (i === 0 && line.trim() === '---') {
      i++
      while (i < lines.length && lines[i].trim() !== '---') i++
      i++ // skip closing ---
      continue
    }

    // Multi-line blockquote
    if (line.startsWith('> ')) {
      const quoteLines: string[] = []
      while (i < lines.length && lines[i].startsWith('> ')) {
        quoteLines.push(lines[i].slice(2))
        i++
      }
      children.push({
        type: 'quote',
        children: parseInline(quoteLines.join(' ')),
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      })
      continue
    }

    // Unordered list
    if (/^[-*]\s/.test(line.trim())) {
      const listItems: LexicalNode[] = []
      let itemValue = 1
      while (i < lines.length && /^[-*]\s/.test(lines[i].trim())) {
        const itemText = lines[i].trim().replace(/^[-*]\s+/, '')
        listItems.push({
          type: 'listitem',
          children: parseInline(itemText),
          direction: 'ltr',
          format: '',
          indent: 0,
          value: itemValue++,
          version: 1,
        })
        i++
      }
      children.push({
        type: 'list',
        listType: 'bullet',
        children: listItems,
        direction: 'ltr',
        format: '',
        indent: 0,
        start: 1,
        tag: 'ul',
        version: 1,
      })
      continue
    }

    // Ordered list
    if (/^\d+\.\s/.test(line.trim())) {
      const listItems: LexicalNode[] = []
      let itemValue = 1
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        const itemText = lines[i].trim().replace(/^\d+\.\s+/, '')
        listItems.push({
          type: 'listitem',
          children: parseInline(itemText),
          direction: 'ltr',
          format: '',
          indent: 0,
          value: itemValue++,
          version: 1,
        })
        i++
      }
      children.push({
        type: 'list',
        listType: 'number',
        children: listItems,
        direction: 'ltr',
        format: '',
        indent: 0,
        start: 1,
        tag: 'ol',
        version: 1,
      })
      continue
    }

    // Table — convert rows to formatted paragraphs
    if (line.includes('|') && line.trim().startsWith('|')) {
      // Collect all table rows
      const tableRows: string[] = []
      while (i < lines.length && lines[i].includes('|') && lines[i].trim().startsWith('|')) {
        const row = lines[i].trim()
        // Skip separator rows (|---|---|)
        if (!/^[\s|:-]+$/.test(row)) {
          tableRows.push(row)
        }
        i++
      }

      // Convert table to bold header + rows as paragraphs
      for (let r = 0; r < tableRows.length; r++) {
        const cells = tableRows[r].split('|').filter(c => c.trim() !== '')
        const cellTexts = cells.map(c => c.trim())

        if (r === 0) {
          // Header row — bold
          children.push({
            type: 'paragraph',
            children: [{ type: 'text', text: cellTexts.join(' | '), format: 1 }],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          })
        } else {
          children.push({
            type: 'paragraph',
            children: parseInline(cellTexts.join(' — ')),
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          })
        }
      }
      continue
    }

    // Regular line
    const node = parseLine(line)
    if (node) {
      children.push(node)
    }
    i++
  }

  return {
    root: {
      children,
      direction: 'ltr',
      format: '',
      indent: 0,
      type: 'root',
      version: 1,
    },
  }
}
