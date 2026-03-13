'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

declare global {
  interface Window {
    fbq?: (...args: any[]) => void
  }
}

function fbq(...args: any[]) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq(...args)
  }
}

export function trackEvent(event: string, data?: Record<string, any>) {
  fbq('track', event, data)
}

export default function MetaPixel() {
  const pathname = usePathname()
  const isFirstRender = useRef(true)

  // Track PageView on client-side route changes (skip first — inline script handles it)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    fbq('track', 'PageView')

    if (pathname === '/imprescindibles') {
      fbq('track', 'ViewContent', {
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
        fbq('track', 'Lead', {
          content_name: 'WhatsApp Click',
          content_category: link.closest('#reservar')
            ? 'CTA Final'
            : link.closest('#precio')
              ? 'Pricing'
              : 'General',
        })
      }

      if (href.includes('instagram.com')) {
        fbq('track', 'Contact', {
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
          fbq('track', 'ViewContent', {
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
