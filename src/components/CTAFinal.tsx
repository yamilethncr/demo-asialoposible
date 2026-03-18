import SprayPaint from './SprayPaint'

export default function CTAFinal() {
  return (
    <section id="reservar" className="pt-8 md:pt-12 pb-32 md:pb-40 relative z-10">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div
          className="border border-[rgba(212,168,83,0.3)] p-10 md:p-20 text-center relative overflow-hidden"
          style={{ background: 'rgba(212,168,83,0.02)' }}
        >
          {/* Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none"
            style={{
              background: 'var(--color-accent)',
              filter: 'blur(100px)',
              opacity: 0.1,
            }}
          />

          <span className="block text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] mb-6 relative z-10">
            SOLO 10 CUPOS &middot; PRIMEROS 5 AL PRECIO EARLY BIRD
          </span>

          <h2
            className="text-2xl sm:text-3xl md:text-[3.5rem] leading-tight uppercase font-bold text-[var(--color-text)] mb-6 relative z-10"
          >
            &iquest;EST&Aacute;S DENTRO?
          </h2>

          <p className="text-sm md:text-base leading-relaxed text-[var(--color-secondary)] max-w-[440px] mx-auto mb-8 relative z-10">
            Escr&iacute;benos hoy. Sin compromiso. Te mandamos el itinerario completo, los detalles de precio y resolvemos tus dudas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a
              href="https://wa.me/584248455010"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-bg)] px-8 py-4 text-sm uppercase tracking-[0.1em] font-bold no-underline transition-all duration-500 hover:shadow-[0_0_20px_rgba(212,168,83,0.4)] hover:bg-transparent hover:text-[var(--color-accent)]"
            >
              WHATSAPP DIRECTO
            </a>
            <a
              href="https://www.instagram.com/kathmolinares"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[var(--color-accent)] bg-transparent text-[var(--color-accent)] px-8 py-4 text-sm uppercase tracking-[0.1em] font-bold no-underline transition-all duration-500 hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] hover:shadow-[0_0_20px_rgba(212,168,83,0.4)]"
            >
              DM INSTAGRAM
            </a>
          </div>

          <p className="text-xs text-[var(--color-secondary)] mt-8 italic relative z-10 max-w-[500px] mx-auto">
            &ldquo;No busques m&aacute;s informaci&oacute;n en internet. Nosotros ya lo hicimos por ti. Solo ven y disfruta.&rdquo;
            <br />
            <span className="text-[var(--color-accent)] not-italic">&mdash; Katherine Molinares</span>
          </p>
        </div>
      </div>
    </section>
  )
}
