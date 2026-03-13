'use client'

import { useEffect } from 'react'
import { setup } from 'meta-pixel'
import { usePathname } from 'next/navigation'

const PIXEL_ID = '1808011489910343'

let initialized = false
let $fbq: ReturnType<typeof setup>['$fbq'] | null = null

export function getPixel() {
  return $fbq
}

export default function MetaPixel() {
  const pathname = usePathname()

  // Initialize pixel once
  useEffect(() => {
    if (initialized) return
    initialized = true
    const pixel = setup().init(PIXEL_ID).pageView()
    $fbq = pixel.$fbq
  }, [])

  // Track PageView on route changes
  useEffect(() => {
    if (!$fbq) return
    $fbq('track', 'PageView')

    if (pathname === '/imprescindibles') {
      $fbq('track', 'ViewContent', {
        content_name: 'Guía Imprescindibles Vietnam & Camboya',
        content_type: 'travel_guide',
      })
    }
  }, [pathname])

  // Event delegation for WhatsApp & Instagram clicks
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const link = (e.target as HTMLElement).closest('a[href]') as HTMLAnchorElement | null
      if (!link || !$fbq) return
      const href = link.getAttribute('href') || ''

      if (href.includes('wa.me')) {
        $fbq('track', 'Lead', {
          content_name: 'WhatsApp Click',
          content_category: link.closest('#reservar')
            ? 'CTA Final'
            : link.closest('#precio')
              ? 'Pricing'
              : 'General',
        })
      }

      if (href.includes('instagram.com')) {
        $fbq('track', 'Contact', {
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
    if (!precioEl || !$fbq) return

    let tracked = false
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !tracked) {
          tracked = true
          $fbq!('track', 'ViewContent', {
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
