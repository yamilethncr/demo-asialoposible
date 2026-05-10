'use client'

import { useEffect } from 'react'

const CAL_LINK = 'katherine-molinares-angel/15min'

const BASE_CLASSES =
  'inline-block uppercase font-bold no-underline transition-all duration-500 hover:shadow-[0_0_20px_rgba(212,168,83,0.4)] cursor-pointer text-center'

const SIZE_CLASSES = {
  sm: 'px-4 py-2 text-[11px] tracking-[0.12em]',
  md: 'px-8 py-4 text-sm tracking-[0.1em]',
} as const

const VARIANT_CLASSES = {
  primary:
    'border border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-bg)] hover:bg-transparent hover:text-[var(--color-accent)]',
  outline:
    'border border-[var(--color-accent)] bg-transparent text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)]',
} as const

type Props = {
  className?: string
  label?: string
  variant?: 'primary' | 'outline'
  size?: 'sm' | 'md'
}

export default function CalBooking({
  className = '',
  label = 'AGENDA UNA LLAMADA CONMIGO',
  variant = 'outline',
  size = 'md',
}: Props) {
  useEffect(() => {
    const win = window as any
    if (win.__calEmbedLoaded) return
    win.__calEmbedLoaded = true

    // Cal.com official bootstrap — must run BEFORE embed.js loads
    ;(function (C: any, A: string, L: string) {
      function p(a: any, ar: any) { a.q.push(ar) }
      const d = C.document
      C.Cal = C.Cal || function () {
        const cal = C.Cal
        const args = arguments
        if (!cal.loaded) {
          cal.ns = {}
          cal.q = cal.q || []
          d.head.appendChild(d.createElement('script')).src = A
          cal.loaded = true
        }
        if (args[0] === L) {
          const api: any = function () { p(api, arguments) }
          const namespace = args[1]
          api.q = api.q || []
          if (typeof namespace === 'string') {
            cal.ns[namespace] = cal.ns[namespace] || api
            p(cal.ns[namespace], args)
            p(cal, ['initNamespace', namespace])
          } else p(cal, args)
          return
        }
        p(cal, args)
      }
    })(win, 'https://app.cal.com/embed/embed.js', 'init')

    win.Cal('init', 'asialoposible', { origin: 'https://cal.com' })
    win.Cal.ns.asialoposible('ui', {
      theme: 'dark',
      cssVarsPerTheme: { dark: { 'cal-brand': '#D4A853' } },
      hideEventTypeDetails: false,
      layout: 'month_view',
      locale: 'es',
    })

    // Client-side redirect after booking (Cal free plan doesn't allow server redirect)
    win.Cal.ns.asialoposible('on', {
      action: 'bookingSuccessful',
      callback: () => {
        window.location.href = '/gracias'
      },
    })
  }, [])

  return (
    <button
      data-cal-namespace="asialoposible"
      data-cal-link={CAL_LINK}
      data-cal-config='{"layout":"month_view","theme":"dark","locale":"es"}'
      className={`${BASE_CLASSES} ${SIZE_CLASSES[size]} ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {label}
    </button>
  )
}
