'use client'

import { useState, useEffect } from 'react'

/**
 * Slider con crossfade automático en loop (clases .about-slider / .slide del sistema de diseño).
 */
export default function AboutSlider({
  images,
  className = '',
}: {
  images: { src: string; alt: string }[]
  className?: string
}) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (images.length < 2) return
    const id = setInterval(() => setActive((i) => (i + 1) % images.length), 4000)
    return () => clearInterval(id)
  }, [images.length])

  return (
    <figure className={`about-photo about-slider ${className}`.trim()}>
      {images.map((img, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={img.src}
          src={img.src}
          className={`slide${i === active ? ' active' : ''}`}
          alt={img.alt}
          loading={i === 0 ? 'eager' : 'lazy'}
        />
      ))}
    </figure>
  )
}
