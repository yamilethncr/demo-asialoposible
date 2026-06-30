'use client'

import { useState, useEffect, useRef } from 'react'

const LEGAL_LINKS = [
  { href: '/terminos', label: 'Términos de la web' },
  { href: '/terminos-viaje', label: 'Términos de los viajes' },
  { href: '/privacidad', label: 'Política de privacidad' },
  { href: '/aviso-legal', label: 'Aviso Legal' },
  { href: '/politica-de-cancelacion', label: 'Política de cancelación' },
]

export default function Footer() {
  const [legalOpen, setLegalOpen] = useState(false)
  const legalRef = useRef<HTMLDivElement>(null)
  const year = 2026

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (legalRef.current && !legalRef.current.contains(e.target as Node)) setLegalOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLegalOpen(false)
    }
    document.addEventListener('click', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="/" className="nav__brand" aria-label="Asia Lo Posible — inicio">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/logo.png" alt="Asia Lo Posible" className="footer__logo" />
            </a>
            <p>
              Viajes boutique a Asia en español. Salidas grupales, itinerarios curados y viajes a
              medida. Así se vive Asia.
            </p>
          </div>
          <div>
            <h4>Viajes</h4>
            <a href="/viajes/vietnam-camboya">Vietnam &amp; Camboya</a>
            <a href="/viajes-privados">Viaje privado</a>
            <a href="/#tours">Tours</a>
            <a href="/imprescindibles">Los imprescindibles</a>
            <a href="/blog">Blog</a>
          </div>
          <div>
            <h4>Contacto</h4>
            <a href="https://wa.me/84934949756" target="_blank" rel="noopener">
              WhatsApp +84 934 949 756
            </a>
            <a href="https://instagram.com/kathmolinares" target="_blank" rel="noopener">
              Instagram @kathmolinares
            </a>
            <a href="/#contacto">Formulario de contacto</a>
          </div>
        </div>
        <div className="footer__bottom">
          <span>
            © {year} Asia Lo Posible ·{' '}
            <a
              href="https://pondhorizons.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline', color: 'var(--color-secondary)' }}
            >
              Desarrollado por Pond Horizons LLC
            </a>
          </span>
          <span>Hecho con cariño desde Vietnam 🇻🇳</span>
          <div className={`footer__legal${legalOpen ? ' open' : ''}`} ref={legalRef}>
            <button
              className="footer__legal-toggle"
              type="button"
              aria-expanded={legalOpen}
              aria-haspopup="true"
              onClick={(e) => {
                e.stopPropagation()
                setLegalOpen((v) => !v)
              }}
            >
              Términos y condiciones
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div className="footer__legal-menu" role="menu">
              {LEGAL_LINKS.map((l) => (
                <a key={l.href} href={l.href} role="menuitem">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
