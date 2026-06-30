/**
 * Barra de anuncio (urgencia) — fija arriba. El Navbar se posiciona a 40px (ver .nav en globals.css).
 */
export default function PromoBanner() {
  return (
    <div className="announce">
      <svg
        className="emo"
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22a6 6 0 0 0 6-6c0-4-3-6-4-9-1.5 1.5-1.7 3.2-3 4-1-1-1-2.5-1-4-2.2 1.8-4 4.2-4 9a6 6 0 0 0 6 6z" />
      </svg>
      Agosto 2026: 4 cupos · Abril 2027: 8 cupos
    </div>
  )
}
