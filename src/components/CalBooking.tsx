'use client'

import { useEffect } from 'react'

const CAL_LINK = 'katherine-molinares-angel/15min'

export default function CalBooking({ className = '' }: { className?: string }) {
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
  }, [])

  return (
    <button
      data-cal-namespace="asialoposible"
      data-cal-link={CAL_LINK}
      data-cal-config='{"layout":"month_view","theme":"dark","locale":"es"}'
      className={`inline-block border border-[var(--color-accent)] bg-transparent text-[var(--color-accent)] px-8 py-4 text-sm uppercase tracking-[0.1em] font-bold no-underline transition-all duration-500 hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] hover:shadow-[0_0_20px_rgba(212,168,83,0.4)] cursor-pointer text-center ${className}`}
    >
      AGENDA UNA LLAMADA CONMIGO
    </button>
  )
}
