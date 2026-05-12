import SprayPaint from './SprayPaint'

export default function Footer() {
  return (
    <footer
      className="pt-16 md:pt-20 pb-8 md:pb-10 relative"
      style={{ borderTop: '1px solid rgba(212,168,83,0.1)' }}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="text-[0.7rem] text-[var(--color-secondary)] uppercase tracking-[0.05em]">
          <p>&copy; 2026 ASIALOPOSIBLE.NET</p>
        </div>
        <div className="text-[0.7rem] text-[var(--color-secondary)] uppercase tracking-[0.05em] md:text-right">
          <a
            href="https://wa.me/84934949756?text=Hola%20Katherine%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20Asia%20Lo%20Posible"
            target="_blank"
            rel="noopener noreferrer"
            className="block no-underline text-[var(--color-accent)] hover:underline transition-colors"
          >
            ESCR&Iacute;BEME AL WHATSAPP
          </a>
          <a href="/terminos" className="block no-underline text-[var(--color-secondary)] hover:text-[var(--color-accent)] transition-colors">T&Eacute;RMINOS DE LA WEB</a>
          <a href="/terminos-viaje" className="block no-underline text-[var(--color-secondary)] hover:text-[var(--color-accent)] transition-colors">T&Eacute;RMINOS DEL VIAJE</a>
          <a href="/politica-de-cancelacion" className="block no-underline text-[var(--color-secondary)] hover:text-[var(--color-accent)] transition-colors">POL&Iacute;TICA DE CANCELACI&Oacute;N</a>
          <a href="/aviso-legal" className="block no-underline text-[var(--color-secondary)] hover:text-[var(--color-accent)] transition-colors">AVISO LEGAL</a>
          <a href="/viajes-privados" className="block no-underline text-[var(--color-secondary)] hover:text-[var(--color-accent)] transition-colors">VIAJES PRIVADOS</a>
          <a href="/imprescindibles" className="block no-underline text-[var(--color-secondary)] hover:text-[var(--color-accent)] transition-colors">LOS IMPRESCINDIBLES</a>
          <a href="/blog" className="block no-underline text-[var(--color-secondary)] hover:text-[var(--color-accent)] transition-colors">BLOG</a>
          <a href="/privacidad" className="block no-underline text-[var(--color-secondary)] hover:text-[var(--color-accent)] transition-colors">POL&Iacute;TICA DE PRIVACIDAD</a>
          <p className="mt-4 opacity-60">
            <a href="https://pondhorizons.xyz/" target="_blank" rel="noopener noreferrer" className="no-underline text-[var(--color-accent)] hover:underline">DESARROLLADO POR POND HORIZONS LLC</a>
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
