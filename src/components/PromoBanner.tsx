'use client'

import { useState, useEffect } from 'react'

const BANNER_HEIGHT = 44 // px, matches the banner's actual height

export default function PromoBanner() {
  const [visible, setVisible] = useState(true)
  const [animatingOut, setAnimatingOut] = useState(false)

  // Set CSS custom property so the Navbar knows the offset
  useEffect(() => {
    const root = document.documentElement
    if (visible && !animatingOut) {
      root.style.setProperty('--banner-offset', `${BANNER_HEIGHT}px`)
    } else if (!visible) {
      root.style.setProperty('--banner-offset', '0px')
    }
    return () => {
      root.style.setProperty('--banner-offset', '0px')
    }
  }, [visible, animatingOut])

  const handleDismiss = () => {
    setAnimatingOut(true)
    // Update the CSS variable immediately for smooth navbar transition
    document.documentElement.style.setProperty('--banner-offset', '0px')
    setTimeout(() => {
      setVisible(false)
    }, 400)
  }

  if (!visible) return null

  return (
    <div
      className="fixed top-0 left-0 w-full z-[110] flex items-center justify-center transition-all duration-400 overflow-hidden promo-banner"
      style={{
        height: animatingOut ? 0 : BANNER_HEIGHT,
        opacity: animatingOut ? 0 : 1,
        background: 'linear-gradient(90deg, #1a1405 0%, #2a2110 50%, #1a1405 100%)',
        borderBottom: '1px solid rgba(245, 200, 80, 0.45)',
        boxShadow: '0 0 24px rgba(245, 200, 80, 0.15)',
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none promo-banner-shimmer"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(245, 220, 120, 0.18) 50%, transparent 100%)',
          backgroundSize: '200% 100%',
        }}
      />
      <div className="flex items-center gap-2 px-10 md:px-4 relative">
        <span
          className="text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] text-center"
          style={{ color: '#F5DC78', textShadow: '0 0 8px rgba(245, 220, 120, 0.35)' }}
        >
          <span className="hidden md:inline">🔥 </span>
          <span className="hidden md:inline">Agosto 2026: </span>
          <span className="md:hidden">Ago 26: </span>
          <strong className="font-black">4</strong> cupos
          {' '}&middot;{' '}
          <span className="hidden md:inline">Abril 2027: </span>
          <span className="md:hidden">Abr 27: </span>
          <strong className="font-black">8</strong> cupos
        </span>
      </div>

      <button
        onClick={handleDismiss}
        className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer p-1 transition-opacity duration-300 hover:opacity-60"
        aria-label="Cerrar banner"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L13 13M13 1L1 13"
            stroke="#8E94A5"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  )
}
