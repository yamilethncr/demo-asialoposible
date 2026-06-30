'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

const YOUTUBE_ID = 'ALipFoUcmXI'
const THUMBNAIL_URL = `https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`

function GoldPlayButton({ size = 48 }: { size?: number }) {
  return (
    <div
      className="rounded-full flex items-center justify-center"
      style={{
        width: size,
        height: size,
        border: '2px solid var(--color-accent)',
        background: 'rgba(30,30,30,0.6)',
        animation: 'pulse-glow 2s ease-in-out infinite',
      }}
    >
      <svg
        width={size * 0.35}
        height={size * 0.4}
        viewBox="0 0 24 28"
        fill="none"
        className="ml-0.5"
      >
        <path d="M24 14L0 28V0L24 14Z" fill="var(--color-accent)" />
      </svg>
    </div>
  )
}

export default function VideoWidget() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [sectionVisible, setSectionVisible] = useState(false)
  const ioRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Show after 2s delay
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  // Watch for video section visibility using polling + IntersectionObserver
  useEffect(() => {
    function tryObserve() {
      const section = document.getElementById('video-showcase')
      if (!section) return false

      if (ioRef.current) ioRef.current.disconnect()

      ioRef.current = new IntersectionObserver(
        ([entry]) => setSectionVisible(entry.isIntersecting),
        { threshold: 0.15 }
      )
      ioRef.current.observe(section)
      return true
    }

    // Try immediately
    if (tryObserve()) return () => ioRef.current?.disconnect()

    // Poll until section appears (dynamic import may delay it)
    const interval = setInterval(() => {
      if (tryObserve()) clearInterval(interval)
    }, 500)

    return () => {
      clearInterval(interval)
      ioRef.current?.disconnect()
    }
  }, [])

  const handleDismiss = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    setDismissed(true)
  }, [])

  const scrollToSection = useCallback(() => {
    const section = document.getElementById('video-showcase')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const show = visible && !dismissed && !sectionVisible

  const thumbWidth = isMobile ? 56 : 72
  const thumbHeight = isMobile ? 100 : 128

  if (!show) return null

  return (
    <div
      className="fixed z-50 cursor-pointer"
      style={{
        bottom: isMobile ? '80px' : '100px',
        right: isMobile ? '16px' : '24px',
        animation: 'slide-up-in 0.6s ease-out forwards',
      }}
      onClick={scrollToSection}
      role="button"
      tabIndex={0}
      aria-label="Ver video de Katherine en Asia"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') scrollToSection()
      }}
    >
      <div
        className="relative"
        style={{
          width: `${thumbWidth}px`,
          height: `${thumbHeight}px`,
          border: '1px solid rgba(200,161,90,0.4)',
          boxShadow: '0 0 20px rgba(200,161,90,0.15)',
          overflow: 'hidden',
          opacity: isMobile ? 0.6 : 1,
        }}
      >
        <img
          src={THUMBNAIL_URL}
          alt="Video de Katherine en Asia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-[rgba(30,30,30,0.3)]">
          <GoldPlayButton size={isMobile ? 22 : 28} />
        </div>
        <button
          onClick={handleDismiss}
          className="absolute flex items-center justify-center text-[var(--color-accent)] hover:text-white transition-colors z-10"
          style={{
            top: isMobile ? '2px' : '4px',
            right: isMobile ? '2px' : '4px',
            width: isMobile ? '16px' : '20px',
            height: isMobile ? '16px' : '20px',
            background: 'rgba(30,30,30,0.7)',
            borderRadius: '50%',
            border: 'none',
            fontSize: isMobile ? '8px' : '10px',
            lineHeight: 1,
            cursor: 'pointer',
          }}
          aria-label="Cerrar"
        >
          ✕
        </button>
      </div>
      <span
        className="block text-center mt-1.5"
        style={{
          fontSize: '9px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--color-accent)',
        }}
      >
        VER VIDEO
      </span>
    </div>
  )
}
