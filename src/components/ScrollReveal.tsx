'use client'

import { useEffect } from 'react'

/**
 * Observa los elementos `.reveal` y les añade `.in` al entrar en viewport.
 * Replica el comportamiento de reveal del sitio de Yamileth (assets/js/main.js).
 * Montar una vez en el layout de (frontend).
 */
export default function ScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>('.reveal')
    if (!reveals.length) return

    if (!('IntersectionObserver' in window)) {
      reveals.forEach((el) => el.classList.add('in'))
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

    reveals.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return null
}
