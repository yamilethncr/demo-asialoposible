'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/components/MetaPixel'

export default function GraciasDatosTracker() {
  useEffect(() => {
    trackEvent('Lead', {
      content_name: 'Contact Form Submitted',
      content_category: 'Viaje Grupal',
    })

    if (typeof window !== 'undefined') {
      const w = window as unknown as { dataLayer?: unknown[] }
      w.dataLayer = w.dataLayer || []
      w.dataLayer.push({ event: 'lead_submitted', form_type: 'inscribete' })
    }
  }, [])

  return null
}
