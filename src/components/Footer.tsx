import SprayPaint from './SprayPaint'

export default function Footer() {
  return (
    <footer
      className="pt-16 md:pt-20 pb-8 md:pb-10 relative"
      style={{ borderTop: '1px solid rgba(212,168,83,0.1)' }}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="text-[0.7rem] text-[var(--color-secondary)] uppercase tracking-[0.05em]">
          <p>&copy; 2026 ASIA LO POSIBLE.</p>
          <p>EXPERIENCIA DISE&Ntilde;ADA POR KATHERINE MOLINARES.</p>
        </div>
        <div className="text-[0.7rem] text-[var(--color-secondary)] uppercase tracking-[0.05em] md:text-right">
          <a href="/terminos" className="block no-underline text-[var(--color-secondary)] hover:text-[var(--color-accent)] transition-colors">T&Eacute;RMINOS DE LA WEB</a>
          <a href="/terminos-viaje" className="block no-underline text-[var(--color-secondary)] hover:text-[var(--color-accent)] transition-colors">T&Eacute;RMINOS DEL VIAJE</a>
          <a href="/aviso-legal" className="block no-underline text-[var(--color-secondary)] hover:text-[var(--color-accent)] transition-colors">AVISO LEGAL</a>
          <a href="/viajes-privados" className="block no-underline text-[var(--color-secondary)] hover:text-[var(--color-accent)] transition-colors">VIAJES PRIVADOS</a>
          <a href="/imprescindibles" className="block no-underline text-[var(--color-secondary)] hover:text-[var(--color-accent)] transition-colors">LOS IMPRESCINDIBLES</a>
          <a href="/privacidad" className="block no-underline text-[var(--color-secondary)] hover:text-[var(--color-accent)] transition-colors">POL&Iacute;TICA DE PRIVACIDAD</a>
          <p className="mt-4 opacity-60">
            <a href="https://innovaly.services/" target="_blank" rel="noopener noreferrer" className="no-underline text-[var(--color-accent)] hover:underline">DESARROLLADO POR INNOVALY SERVICES O&Uuml;</a>
          </p>
        </div>
      </div>

      <SprayPaint
        className="w-[600px] h-[600px]"
        style={{
          bottom: '-150px',
          right: '-150px',
          filter: 'blur(80px)',
        }}
        shape="blob2"
      />
    </footer>
  )
}
