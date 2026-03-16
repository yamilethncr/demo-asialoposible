'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

declare global {
  interface Window {
    fbq: any
  }
}

export function trackEvent(event: string, data?: Record<string, any>) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', event, data)
  }
}

export default function MetaPixel() {
  const pathname = usePathname()
  const isFirstPageView = useRef(true)

  // Track PageView on client-side route changes (skip first — Script in layout handles it)
  useEffect(() => {
    if (isFirstPageView.current) {
      isFirstPageView.current = false
      return
    }
    trackEvent('PageView')

    if (pathname === '/imprescindibles') {
      trackEvent('ViewContent', {
        content_name: 'Guía Imprescindibles Vietnam & Camboya',
        content_type: 'travel_guide',
      })
    }
  }, [pathname])

  // Event delegation for WhatsApp & Instagram clicks
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const link = (e.target as HTMLElement).closest('a[href]') as HTMLAnchorElement | null
      if (!link) return
      const href = link.getAttribute('href') || ''

      if (href.includes('wa.me')) {
        trackEvent('Lead', {
          content_name: 'WhatsApp Click',
          content_category: link.closest('#reservar')
            ? 'CTA Final'
            : link.closest('#precio')
              ? 'Pricing'
              : 'General',
        })
      }

      if (href.includes('instagram.com')) {
        trackEvent('Contact', {
          content_name: 'Instagram DM Click',
        })
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  // IntersectionObserver for pricing section
  useEffect(() => {
    const precioEl = document.getElementById('precio')
    if (!precioEl) return

    let tracked = false
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !tracked) {
          tracked = true
          trackEvent('ViewContent', {
            content_name: 'Pricing Calculator',
            content_type: 'pricing',
          })
          obs.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(precioEl)
    return () => obs.disconnect()
  }, [pathname])

  return null
}
