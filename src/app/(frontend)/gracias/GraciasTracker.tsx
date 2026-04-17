'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/components/MetaPixel'

export default function GraciasTracker() {
  useEffect(() => {
    trackEvent('Schedule', {
      content_name: 'Cal Booking Completed',
      content_category: 'Viaje Grupal',
    })

    if (typeof window !== 'undefined') {
      const w = window as unknown as { dataLayer?: unknown[] }
      w.dataLayer = w.dataLayer || []
      w.dataLayer.push({ event: 'booking_completed', booking_type: 'cal_call' })
    }
  }, [])

  return null
}
