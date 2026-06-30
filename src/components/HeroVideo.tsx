'use client'

import { useEffect, useState } from 'react'

const POSTER = '/hotels/hoian-delicacy.jpg'

/**
 * Video de fondo del hero. Respeta prefers-reduced-motion (WCAG 2.2.2): si el usuario
 * prefiere menos movimiento, muestra solo el poster en vez de reproducir el video.
 * preload="metadata" para no descargar el MP4 completo antes de tiempo.
 */
export default function HeroVideo() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  if (reduced) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={POSTER} alt="" aria-hidden="true" />
  }

  return (
    <video className="hero__video" autoPlay muted playsInline loop preload="metadata" poster={POSTER}>
      <source src="/video/hero-asia.mp4" type="video/mp4" />
    </video>
  )
}
