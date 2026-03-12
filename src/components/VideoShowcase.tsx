'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import SprayPaint from './SprayPaint'

const YOUTUBE_ID = 'ALipFoUcmXI'
const YOUTUBE_EMBED_URL = `https://www.youtube.com/embed/${YOUTUBE_ID}?controls=0&modestbranding=1&rel=0&playsinline=1&loop=1&playlist=${YOUTUBE_ID}&autoplay=1`
const THUMBNAIL_URL = `https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`
const WHATSAPP_URL = 'https://wa.me/584248455010'

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

/* ─── Floating Widget ─── */
function VideoWidget({
  sectionVisible,
}: {
  sectionVisible: boolean
}) {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

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

/* ─── Cinematic Section ("El Eco") ─── */
function VideoSection({
  onVisibilityChange,
}: {
  onVisibilityChange: (visible: boolean) => void
}) {
  const [isPlaying, setIsPlaying] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // IntersectionObserver to track when section is in view
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        onVisibilityChange(entry.isIntersecting)
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [onVisibilityChange])

  const handlePlay = useCallback(() => {
    setIsPlaying(true)
  }, [])

  return (
    <section
      id="video-showcase"
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ minHeight: '80vh' }}
    >
      {/* Top gold divider */}
      <div
        className="w-full h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, var(--color-accent), transparent)',
        }}
      />

      <div className="flex flex-col items-center justify-center py-20 md:py-28 px-5">
        {/* Heading */}
        <h2
          className="text-center text-lg md:text-2xl font-bold uppercase mb-16 md:mb-20"
          style={{
            color: 'var(--color-accent)',
            letterSpacing: '0.3em',
          }}
        >
          ESTO NO SE EXPLICA. SE SIENTE.
        </h2>

        {/* Video container */}
        <div className="relative w-[85vw] max-w-[400px]" style={{ aspectRatio: '9/16' }}>
          {/* Radial glow */}
          <div
            className="absolute inset-0 -z-10"
            style={{
              background: 'var(--color-accent)',
              filter: 'blur(100px)',
              opacity: 0.1,
              transform: 'scale(1.5)',
            }}
          />

          {/* SprayPaint blob */}
          <SprayPaint
            shape="blob2"
            className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] -top-10 -left-16"
            style={{
              animation: 'pulse-smoke 6s ease-in-out infinite alternate',
            }}
          />

          {/* Gold border frame */}
          <div
            className="relative w-full h-full overflow-hidden"
            style={{
              border: '1px solid rgba(212,168,83,0.3)',
            }}
          >
            {isPlaying ? (
              <iframe
                src={YOUTUBE_EMBED_URL}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Asia Lo Posible — Video"
                loading="lazy"
              />
            ) : (
              <button
                onClick={handlePlay}
                className="relative w-full h-full cursor-pointer group"
                aria-label="Reproducir video"
              >
                <img
                  src={THUMBNAIL_URL}
                  alt="Vista previa del video"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <GoldPlayButton size={72} />
                </div>
              </button>
            )}
          </div>
        </div>

        {/* Scarcity text */}
        <p
          className="mt-10 text-xs md:text-sm text-center"
          style={{
            fontFamily: 'monospace',
            color: 'var(--color-secondary)',
            letterSpacing: '0.1em',
          }}
        >
          4 de 10 cupos disponibles
        </p>

        {/* Mini CTA */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)]"
          style={{
            border: '1px solid var(--color-accent)',
            color: 'var(--color-accent)',
            background: 'transparent',
          }}
        >
          RESERVAR MI CUPO
        </a>
      </div>

      {/* Bottom gold divider */}
      <div
        className="w-full h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, var(--color-accent), transparent)',
        }}
      />
    </section>
  )
}

/* ─── Main Export: Widget + Section ─── */
export default function VideoShowcase() {
  const [sectionVisible, setSectionVisible] = useState(false)

  const handleVisibilityChange = useCallback((visible: boolean) => {
    setSectionVisible(visible)
  }, [])

  return (
    <>
      <VideoWidget sectionVisible={sectionVisible} />
      <VideoSection onVisibilityChange={handleVisibilityChange} />
    </>
  )
}
