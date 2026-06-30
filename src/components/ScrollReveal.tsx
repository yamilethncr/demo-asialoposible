'use client'

import { useEffect } from 'react'

/**
 * Observa los elementos `.reveal` y les añade `.in` al entrar en viewport.
 * Usa IntersectionObserver para los que ya existen + MutationObserver para los que
 * llegan después (server components async en streaming, navegación cliente).
 * Replica el comportamiento de reveal del sitio de Yamileth (assets/js/main.js).
 */
export default function ScrollReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => el.classList.add('in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in')
            io.unobserve(en.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    const observeAll = () => {
      document.querySelectorAll<HTMLElement>('.reveal:not(.in)').forEach((el) => io.observe(el))
    }

    observeAll()

    // Captura contenido añadido después (streaming de server components / navegación SPA)
    const mo = new MutationObserver(() => observeAll())
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])

  return null
}
