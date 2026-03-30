import type { CollectionConfig } from 'payload'

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

function estimateReadingTime(content: unknown): number {
  if (!content) return 1
  const text = JSON.stringify(content)
  const plainText = text.replace(/"type":"[^"]*"/g, '').replace(/[{}[\]",:]/g, ' ')
  const wordCount = plainText.split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(wordCount / 200))
}

export const Posts: CollectionConfig = {
  slug: 'posts',
  labels: {
    singular: 'Artículo',
    plural: 'Artículos',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'status', 'publishedDate'],
    group: 'Contenido',
    listSearchableFields: ['title', 'slug', 'excerpt'],
  },
  defaultSort: '-publishedDate',
  versions: {
    drafts: true,
  },
  hooks: {
    beforeChange: [
      ({ data, operation }) => {
        if (data) {
          if (operation === 'create' && data.title && !data.slug) {
            data.slug = slugify(data.title)
          }
          if (data.content) {
            data.readingTime = estimateReadingTime(data.content)
          }
        }
        return data
      },
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Título',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      label: 'Slug',
      admin: {
        position: 'sidebar',
        description: 'Se genera automáticamente del título',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'Contenido',
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      maxLength: 300,
      label: 'Extracto',
      admin: {
        description: 'Resumen breve del artículo (máx. 300 caracteres)',
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Imagen destacada',
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
      label: 'Categoría',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
      label: 'Etiquetas',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      label: 'Autor',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      label: 'Estado',
      options: [
        { label: 'Borrador', value: 'draft' },
        { label: 'Publicado', value: 'published' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishedDate',
      type: 'date',
      label: 'Fecha de publicación',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'readingTime',
      type: 'number',
      label: 'Tiempo de lectura (min)',
      admin: {
        position: 'sidebar',
        readOnly: true,
        description: 'Se calcula automáticamente',
      },
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      admin: {
        position: 'sidebar',
      },
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Título SEO',
          maxLength: 60,
          admin: {
            description: 'Máximo 60 caracteres. Si se deja vacío, se usa el título.',
          },
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Descripción SEO',
          maxLength: 155,
          admin: {
            description: 'Máximo 155 caracteres. Si se deja vacío, se usa el extracto.',
          },
        },
      ],
    },
  ],
}
