'use client'

import { useRef, useState, useEffect } from 'react'

const REELS = [
  { id: 'ALipFoUcmXI', title: 'Vietnam real' },
  { id: '2FRn93zCKdw', title: 'Hanói de noche' },
  { id: '7zpBHV5xNps', title: 'Street food' },
  { id: 'CKM4oRbH5jQ', title: 'Descubre Asia' },
  { id: 'UgYEZXAa0bE', title: 'La aventura' },
  { id: 'bGwJDZ98r_4', title: 'Sabores de Asia' },
  { id: 'hTOrKuj8eT0', title: 'Momentos' },
]

export default function VideoReels() {
  const carRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const [openId, setOpenId] = useState<string | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenId(null)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  // Mover el foco al botón de cerrar al abrir el lightbox (a11y diálogo modal)
  useEffect(() => {
    if (openId) closeRef.current?.focus()
  }, [openId])

  const scroll = (dir: number) => {
    const car = carRef.current
    if (!car) return
    const card = car.querySelector<HTMLElement>('.vid-card')
    const step = card ? card.offsetWidth + 16 : 240
    car.scrollBy({ left: dir * step * 1.3, behavior: 'smooth' })
  }

  return (
    <section className="section section--alt" id="video">
      <div className="container">
        <div className="section-head center reveal">
          <p className="eyebrow">Asia en movimiento</p>
          <h2 className="h2">Esto no se explica. Se siente.</h2>
          <p className="lead">
            El rugido de una metrópolis futurista, el silencio de un amanecer en los templos
            antiguos, el picante que te vuela la cabeza en un puesto callejero... Un viaje por los
            contrastes de Asia que redefine lo que significa estar vivo. Tu próxima gran historia
            empieza aquí.
          </p>
        </div>

        <div className="vid-wrap reveal">
          <div className="vid-nav">
            <button type="button" aria-label="Anterior" onClick={() => scroll(-1)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button type="button" aria-label="Siguiente" onClick={() => scroll(1)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
          <div className="vid-carousel" ref={carRef}>
            {REELS.map((r) => (
              <button className="vid-card" type="button" key={r.id} onClick={() => setOpenId(r.id)}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`https://img.youtube.com/vi/${r.id}/hqdefault.jpg`} alt={r.title} loading="lazy" />
                <span className="vid-card__play">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className="vid-card__title">{r.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`vid-modal${openId ? ' open' : ''}`}
        aria-hidden={!openId}
        role="dialog"
        aria-modal="true"
        aria-label="Reproductor de video"
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpenId(null)
        }}
      >
        <div className="vid-modal__box">
          <button ref={closeRef} className="vid-modal__close" type="button" aria-label="Cerrar" onClick={() => setOpenId(null)}>
            ×
          </button>
          {openId && (
            <iframe
              src={`https://www.youtube.com/embed/${openId}?autoplay=1&rel=0&playsinline=1`}
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
              title="Reel de Asia Lo Posible"
            />
          )}
        </div>
      </div>
    </section>
  )
}
