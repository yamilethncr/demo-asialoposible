'use client'

import { useState, useRef, useCallback, useEffect } from 'react'

const shorts = [
  { id: '2FRn93zCKdw', label: 'Hanoi de noche' },
  { id: 'bGwJDZ98r_4', label: 'Street food' },
  { id: 'CKM4oRbH5jQ', label: 'Vietnam real' },
  { id: 'UgYEZXAa0bE', label: 'Descubre Asia' },
  { id: '7zpBHV5xNps', label: 'La aventura' },
  { id: 'hTOrKuj8eT0', label: 'Momentos únicos' },
]

function PlayButton() {
  return (
    <div
      className="rounded-full flex items-center justify-center"
      style={{
        width: 52,
        height: 52,
        border: '2px solid var(--color-accent)',
        background: 'rgba(30, 30, 30,0.6)',
        backdropFilter: 'blur(4px)',
        animation: 'pulse-glow 2s ease-in-out infinite',
      }}
    >
      <svg width={18} height={20} viewBox="0 0 24 28" fill="none" className="ml-0.5">
        <path d="M24 14L0 28V0L24 14Z" fill="var(--color-accent)" />
      </svg>
    </div>
  )
}

function ShortCard({
  id,
  label,
  isPlaying,
  onPlay,
}: {
  id: string
  label: string
  isPlaying: boolean
  onPlay: () => void
}) {
  const thumbnail = `https://img.youtube.com/vi/${id}/oar2.jpg`

  return (
    <div className="shrink-0 w-[200px] sm:w-[220px] md:w-[240px] animate-initial:opacity-0 animate-initial:y-20 animate-inview:opacity-100 animate-inview:y-0 animate-duration-600 animate-ease-out animate-once">
      <div
        className="relative overflow-hidden group"
        style={{
          aspectRatio: '9/16',
          border: '1px solid rgba(200, 161, 90,0.2)',
        }}
      >
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1&controls=1&modestbranding=1&rel=0&playsinline=1&loop=1&playlist=${id}&showinfo=0&iv_load_policy=3&fs=0&disablekb=1`}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title={label}
          />
        ) : (
          <button
            onClick={onPlay}
            className="relative w-full h-full cursor-pointer"
            aria-label={`Reproducir: ${label}`}
          >
            <img
              src={thumbnail}
              alt={label}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ filter: 'saturate(0.85) brightness(0.85)' }}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayButton />
            </div>
            {/* Bottom gradient + label */}
            <div
              className="absolute bottom-0 left-0 right-0 p-4 pt-12"
              style={{ background: 'linear-gradient(to top, rgba(30, 30, 30,0.9), transparent)' }}
            >
              <span className="text-[10px] tracking-[0.15em] uppercase font-bold text-[var(--color-accent)]">
                {label}
              </span>
            </div>
          </button>
        )}
      </div>
    </div>
  )
}

export default function ShortsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeId, setActiveId] = useState<string | null>(null)
  const [canScroll, setCanScroll] = useState(false)

  const checkOverflow = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScroll(el.scrollWidth > el.clientWidth + 8)
  }, [])

  useEffect(() => {
    checkOverflow()
    window.addEventListener('resize', checkOverflow)
    return () => window.removeEventListener('resize', checkOverflow)
  }, [checkOverflow])

  const handlePlay = useCallback((id: string) => {
    setActiveId(id)
  }, [])

  const scroll = useCallback((dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    const amount = 260
    scrollRef.current.scrollBy({
      left: dir === 'right' ? amount : -amount,
      behavior: 'smooth',
    })
  }, [])

  return (
    <section className="pt-10 md:pt-16 pb-8 md:pb-12 relative z-10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Header row */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="block text-xs tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-3">
              KATHERINE EN VIETNAM
            </span>
            <h2 className="text-xl md:text-2xl leading-tight uppercase font-bold text-[var(--color-text)]">
              AS&Iacute; SE VIVE ASIA.
            </h2>
          </div>

          {/* Navigation arrows — only when content overflows */}
          <div className={`hidden gap-3 ${canScroll ? 'md:flex' : ''}`}>
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 flex items-center justify-center border border-[rgba(200, 161, 90,0.3)] text-[var(--color-accent)] transition-all duration-300 hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] cursor-pointer bg-transparent"
              aria-label="Anterior"
            >
              &#8592;
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 flex items-center justify-center border border-[rgba(200, 161, 90,0.3)] text-[var(--color-accent)] transition-all duration-300 hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] cursor-pointer bg-transparent"
              aria-label="Siguiente"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable row */}
      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto px-5 md:px-[calc((100vw-1200px)/2+40px)] pb-4 scroll-smooth"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {shorts.map((s) => (
          <ShortCard
            key={s.id}
            id={s.id}
            label={s.label}
            isPlaying={activeId === s.id}
            onPlay={() => handlePlay(s.id)}
          />
        ))}
      </div>

      {/* Scroll hint on mobile */}
      <p className="md:hidden text-center text-[10px] tracking-[0.15em] uppercase text-[var(--color-secondary)] mt-2 opacity-50">
        DESLIZA PARA VER M&Aacute;S &#8594;
      </p>
    </section>
  )
}
