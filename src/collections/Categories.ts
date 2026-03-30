import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  labels: {
    singular: 'Categoría',
    plural: 'Categorías',
  },
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  admin: {
    useAsTitle: 'name',
    group: 'Contenido',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Nombre',
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
        description: 'URL amigable (ej: "vietnam", "camboya")',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descripción',
    },
    {
      name: 'metaTitle',
      type: 'text',
      label: 'Título SEO',
      maxLength: 60,
      admin: {
        position: 'sidebar',
        description: 'Máximo 60 caracteres',
      },
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      label: 'Descripción SEO',
      maxLength: 155,
      admin: {
        position: 'sidebar',
        description: 'Máximo 155 caracteres',
      },
    },
  ],
}
