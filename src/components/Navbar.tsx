'use client'

import { useState, useEffect, useRef } from 'react'

const LEGAL_LINKS = [
  { href: '/terminos', label: 'Términos de la web' },
  { href: '/terminos-viaje', label: 'Términos de los viajes' },
  { href: '/privacidad', label: 'Política de privacidad' },
  { href: '/aviso-legal', label: 'Aviso Legal' },
  { href: '/politica-de-cancelacion', label: 'Política de cancelación' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [ddOpen, setDdOpen] = useState(false)
  const ddRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (ddRef.current && !ddRef.current.contains(e.target as Node)) setDdOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDdOpen(false)
        setMenuOpen(false)
      }
    }
    document.addEventListener('click', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a href="/" className="nav__brand" aria-label="Asia Lo Posible — inicio">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/logo.png" alt="Asia Lo Posible" className="nav__logo" />
      </a>

      <nav className={`nav__links${menuOpen ? ' open' : ''}`} aria-label="Principal">
        <a href="/sobre-nosotros" onClick={closeMenu}>Sobre nosotros</a>
        <a href="/#tours" onClick={closeMenu}>Tours</a>
        <a href="/#viajes" onClick={closeMenu}>Estilos de viaje</a>
        <a href="/blog" onClick={closeMenu}>Blog</a>
        <a href="/#contacto" onClick={closeMenu}>Contacto</a>

        <div className={`nav__dd${ddOpen ? ' open' : ''}`} ref={ddRef}>
          <button
            className="nav__dd-toggle"
            type="button"
            aria-expanded={ddOpen}
            aria-haspopup="true"
            onClick={(e) => {
              e.stopPropagation()
              setDdOpen((v) => !v)
            }}
          >
            Términos y condiciones
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <div className="nav__dd-menu" role="menu">
            {LEGAL_LINKS.map((l) => (
              <a key={l.href} href={l.href} role="menuitem" onClick={closeMenu}>
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <a href="/#contacto" className="btn" onClick={closeMenu}>Reservar</a>
      </nav>

      <button
        className="nav__toggle"
        aria-label="Abrir menú"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span /><span /><span />
      </button>
    </header>
  )
}
