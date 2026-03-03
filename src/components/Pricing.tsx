export default function Pricing() {
  return (
    <section id="precio" className="py-20 md:py-28 relative z-10">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <span className="block text-xs tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-4">
          INVERSI&Oacute;N
        </span>
        <h2 className="text-2xl md:text-[2.5rem] leading-tight uppercase font-bold text-[var(--color-text)] mb-6">
          14 D&Iacute;AS EN ASIA.
          <br />
          TODO INCLUIDO.
        </h2>
        <p className="text-[0.95rem] leading-relaxed text-[var(--color-secondary)] max-w-[600px] mb-10">
          Hoteles 4 estrellas, crucero de lujo, vuelos internos, transporte premium, guía en español, fotografía profesional, todas las entradas y el acompañamiento personal de Katherine. Si lo organizas por tu cuenta &mdash;si es que puedes hacerlo en español&mdash; gastas más.
        </p>

        {/* Price cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mb-10">
          {/* Upfront */}
          <div
            className="border border-[var(--color-accent)] p-8 md:p-10 relative overflow-hidden"
            style={{ background: 'rgba(212,168,83,0.05)' }}
          >
            <div
              className="absolute top-0 right-0 w-[200px] h-[200px] pointer-events-none"
              style={{
                background: 'var(--color-accent)',
                filter: 'blur(80px)',
                opacity: 0.08,
              }}
            />
            <span className="block text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] mb-4 relative z-10">
              PAGO &Uacute;NICO
            </span>
            <div className="flex items-baseline gap-2 mb-2 relative z-10">
              <span className="text-4xl md:text-5xl font-bold text-[var(--color-text)]">
                $3.200
              </span>
              <span className="text-sm text-[var(--color-secondary)] uppercase">USD</span>
            </div>
            <p className="text-xs text-[var(--color-secondary)] uppercase tracking-wide relative z-10">
              Por persona &middot; Acomodaci&oacute;n doble
            </p>
          </div>

          {/* Installments */}
          <div className="border border-[rgba(212,168,83,0.2)] p-8 md:p-10">
            <span className="block text-xs tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-4">
              PAGO EN CUOTAS
            </span>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl md:text-5xl font-bold text-[var(--color-text)]">
                $3.499
              </span>
              <span className="text-sm text-[var(--color-secondary)] uppercase">USD</span>
            </div>
            <p className="text-xs text-[var(--color-secondary)] uppercase tracking-wide mb-4">
              Por persona &middot; Acomodaci&oacute;n doble
            </p>
            <p className="text-xs text-[var(--color-secondary)] leading-relaxed">
              30% para reservar (m&aacute;ximo marzo 2026). Resto en 3 cuotas iguales hasta julio.
            </p>
          </div>
        </div>

        {/* Breakdown */}
        <div
          className="inline-block border-l-2 border-[var(--color-accent)] pl-5 mb-8"
        >
          <p className="text-lg md:text-xl font-bold text-[var(--color-text)]">
            USD 228 por d&iacute;a
          </p>
          <p className="text-xs text-[var(--color-secondary)] uppercase tracking-wide">
            Incluyendo hotel, gu&iacute;a, transporte, entradas y crucero
          </p>
        </div>

        {/* Early bird */}
        <div
          className="border border-[rgba(212,168,83,0.3)] p-6 md:p-8 max-w-[600px]"
          style={{ background: 'rgba(212,168,83,0.08)' }}
        >
          <p className="text-sm font-bold text-[var(--color-accent)] uppercase tracking-wide mb-2">
            ⚡ PRECIO EARLY BIRD
          </p>
          <p className="text-sm text-[var(--color-text)] leading-relaxed">
            Estos precios son v&aacute;lidos solo para los primeros 5 cupos. Una vez cubiertos, el precio sube.
          </p>
        </div>

        {/* Solo traveler note */}
        <p className="text-xs text-[var(--color-secondary)] mt-6 italic">
          &iquest;Viajas solo/a? Escr&iacute;benos para indicarte el precio en acomodaci&oacute;n individual.
        </p>
      </div>
    </section>
  )
}
