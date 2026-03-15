'use client'

import { useState, useEffect, useCallback } from 'react'

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
        background: 'rgba(10,15,30,0.6)',
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

  // Watch for video section visibility
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const section = document.getElementById('video-showcase')
      if (section) {
        const io = new IntersectionObserver(
          ([entry]) => setSectionVisible(entry.isIntersecting),
          { threshold: 0.15 }
        )
        io.observe(section)
        observer.disconnect()
        return () => io.disconnect()
      }
    })
    // Check immediately
    const section = document.getElementById('video-showcase')
    if (section) {
      const io = new IntersectionObserver(
        ([entry]) => setSectionVisible(entry.isIntersecting),
        { threshold: 0.15 }
      )
      io.observe(section)
      return () => io.disconnect()
    }
    // If section not yet in DOM (dynamic import), watch for it
    observer.observe(document.body, { childList: true, subtree: true })
    return () => observer.disconnect()
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

  return (
    <div
      className="fixed z-50 cursor-pointer"
      style={{
        bottom: isMobile ? '80px' : '100px',
        right: isMobile ? '16px' : '24px',
        opacity: show ? 1 : 0,
        pointerEvents: show ? 'auto' : 'none',
        animation: show ? 'slide-up-in 0.6s ease-out forwards' : 'none',
        transition: 'opacity 0.4s ease',
      }}
      onClick={scrollToSection}
      role="button"
      tabIndex={show ? 0 : -1}
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
          border: '1px solid rgba(212,168,83,0.4)',
          boxShadow: '0 0 20px rgba(212,168,83,0.15)',
          overflow: 'hidden',
          opacity: isMobile ? 0.6 : 1,
        }}
      >
        <img
          src={THUMBNAIL_URL}
          alt="Video de Katherine en Asia"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-[rgba(10,15,30,0.3)]">
          <GoldPlayButton size={isMobile ? 22 : 28} />
        </div>
        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          className="absolute flex items-center justify-center text-[var(--color-accent)] hover:text-white transition-colors z-10"
          style={{
            top: isMobile ? '2px' : '4px',
            right: isMobile ? '2px' : '4px',
            width: isMobile ? '16px' : '20px',
            height: isMobile ? '16px' : '20px',
            background: 'rgba(10,15,30,0.7)',
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
