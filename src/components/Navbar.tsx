'use client'

import { useState, useEffect } from 'react'

const links = [
  { href: '#recorrido', label: 'Itinerario' },
  { href: '#katherine', label: 'Katherine' },
  { href: '#incluye', label: 'Detalles' },
  { href: '#precio', label: 'Precio' },
  { href: '/viajes-privados', label: 'Viaje Privado' },
  { href: '/imprescindibles', label: 'Imprescindibles' },
  { href: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed w-full z-[100] transition-all duration-500"
      style={{
        top: 'var(--banner-offset, 0px)',
        padding: scrolled ? '20px 0' : '40px 0',
        background: scrolled
          ? 'rgba(10,15,30,0.95)'
          : 'linear-gradient(to bottom, rgba(10,15,30,0.9), transparent)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 flex justify-between items-center">
        <a href="/" className="font-black tracking-[0.1em] uppercase text-[var(--color-accent)]">
          Asia Lo Posible{' '}
          <sup className="text-[var(--color-secondary)]">26</sup>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[var(--color-text)] no-underline text-xs uppercase tracking-[0.1em] transition-colors duration-300 hover:text-[var(--color-accent)]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#reservar"
            className="text-[var(--color-accent)] no-underline text-xs uppercase tracking-[0.1em] font-black"
          >
            Reservar
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className="block w-6 h-[2px] bg-[var(--color-accent)] transition-all duration-300"
            style={{
              transform: menuOpen ? 'rotate(45deg) translateY(5px)' : 'none',
            }}
          />
          <span
            className="block w-6 h-[2px] bg-[var(--color-accent)] transition-all duration-300"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-6 h-[2px] bg-[var(--color-accent)] transition-all duration-300"
            style={{
              transform: menuOpen ? 'rotate(-45deg) translateY(-5px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[rgba(10,15,30,0.98)] backdrop-blur-lg border-t border-[rgba(212,168,83,0.1)]">
          <div className="flex flex-col items-center py-8 gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-[var(--color-text)] no-underline text-sm uppercase tracking-[0.15em] transition-colors duration-300 hover:text-[var(--color-accent)]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#reservar"
              onClick={() => setMenuOpen(false)}
              className="text-[var(--color-accent)] no-underline text-sm uppercase tracking-[0.15em] font-black"
            >
              Reservar
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
