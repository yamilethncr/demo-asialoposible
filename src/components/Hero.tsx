'use client'

import { useState, useEffect } from 'react'
import SprayPaint from './SprayPaint'

const bgImages = [
  'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2940&auto=format&fit=crop', // Halong Bay
  'https://images.unsplash.com/photo-1557750255-c76072a7aad1?q=80&w=2940&auto=format&fit=crop', // Hoi An lanterns
  'https://images.unsplash.com/photo-1569309986620-4face6ad4739?q=80&w=2940&auto=format&fit=crop', // Angkor Wat temple
  'https://images.unsplash.com/photo-1504457047772-27faf1c00561?q=80&w=2940&auto=format&fit=crop', // Vietnam rice fields
  'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=2940&auto=format&fit=crop', // Vietnam boats river
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bgImages.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <header className="h-screen flex items-center relative overflow-hidden">
      {/* Background image carousel with Ken Burns */}
      {bgImages.map((img, i) => (
        <div
          key={i}
          className="absolute top-0 left-0 w-full h-full z-0 transition-opacity duration-[2000ms]"
          style={{
            backgroundImage: `url('${img}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: i === current ? 0.7 : 0,
            filter: 'saturate(0.8)',
            animation: i === current ? 'kenburns 12s ease-in-out forwards' : 'none',
          }}
        />
      ))}
      {/* Overlay gradient */}
      <div
        className="absolute top-0 left-0 w-full h-full z-[1]"
        style={{
          background:
            'linear-gradient(to bottom, rgba(10,15,30,0.6) 0%, rgba(10,15,30,0.3) 45%, rgba(10,15,30,0.7) 85%, var(--color-bg) 100%)',
        }}
      />

      <SprayPaint
        className="top-[5%] left-[15%] w-[700px] h-[700px]"
        style={{ animation: 'pulse-smoke 10s infinite alternate' }}
        shape="blob1"
      />

      <div className="max-w-[1200px] mx-auto px-5 md:px-10 z-10 w-full">
        <span className="block text-xs tracking-[0.2em] uppercase mb-4 text-[var(--color-accent)]" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.4)' }}>
          EDICI&Oacute;N LIMITADA &mdash; AGOSTO 2026
        </span>

        <h1
          className="text-[3rem] sm:text-[4.5rem] md:text-[6rem] leading-[0.85] tracking-tight relative z-[2] text-white"
          style={{ textShadow: '0 2px 40px rgba(0,0,0,0.8)' }}
        >
          VIETNAM
          <br />
          <span
            className="text-[var(--color-accent)] italic"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            &amp;
          </span>{' '}
          CAMBOYA
        </h1>

        <p
          className="text-lg md:text-2xl tracking-[0.3em] uppercase mt-4 font-normal"
          style={{ color: 'rgba(255,255,255,0.75)' }}
        >
          EN ESPA&Ntilde;OL
        </p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-10">
          <div className="hidden md:block md:col-span-6" />
          <div className="md:col-span-4">
            <p
              className="text-[0.85rem] leading-snug tracking-wide max-w-[400px] uppercase"
              style={{
                color: 'rgba(255,255,255,0.92)',
                textShadow: '0 1px 12px rgba(0,0,0,0.5)',
                background: 'rgba(10,15,30,0.6)',
                padding: '16px',
                backdropFilter: 'blur(4px)',
                borderLeft: '2px solid var(--color-accent)',
                textAlign: 'justify',
              }}
            >
              14 d&iacute;as. 6 destinos. Un grupo exclusivo de solo 10 personas. Hoteles 4 estrellas, crucero de lujo en Halong, todo incluido. Dise&ntilde;ado por una venezolana que vive en Vietnam.
            </p>
          </div>
          <div className="md:col-span-2 flex md:justify-end items-start">
            <a
              href="https://wa.me/584248455010"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-bg)] px-8 py-4 text-sm uppercase tracking-[0.1em] font-bold no-underline transition-all duration-500 hover:shadow-[0_0_20px_rgba(212,168,83,0.4)] hover:bg-transparent hover:text-[var(--color-accent)]"
            >
              RESERVAR
            </a>
          </div>
        </div>

        {/* Scribble SVG */}
        <svg
          className="absolute hidden md:block opacity-60"
          style={{
            bottom: '25%',
            right: '15%',
            width: '240px',
            height: '120px',
            stroke: 'var(--color-accent)',
            strokeWidth: 1.5,
            fill: 'none',
            strokeDasharray: 1000,
            strokeDashoffset: 1000,
            animation: 'draw 3s forwards',
            zIndex: 5,
          }}
          viewBox="0 0 200 100"
        >
          <path d="M10,50 Q50,10 90,50 T180,50" />
          <path d="M20,60 L170,40" strokeWidth="2" strokeOpacity="0.3" />
        </svg>
      </div>
    </header>
  )
}
