const items = [
  {
    label: 'Vuelos internacionales y tasas de aeropuerto',
    note: null,
  },
  {
    label: 'Visado para Vietnam y Camboya',
    note: 'Asesoría incluida. Te orientamos y conectamos con un agente. Costo estimado: ~USD 70 Vietnam + ~USD 30 Camboya.',
  },
  {
    label: 'Seguro de viaje',
    note: 'Asesoría incluida. Tenemos proveedor recomendado con cobertura médica completa para el sudeste asiático.',
  },
  {
    label: 'Comidas no indicadas en el programa',
    note: null,
  },
  {
    label: 'Gastos personales',
    note: null,
  },
]

export default function NotIncluded() {
  return (
    <section className="py-16 md:py-20 relative z-10">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <span className="block text-xs tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-4">
          TRANSPARENCIA
        </span>
        <h2 className="text-xl md:text-2xl leading-tight uppercase font-bold text-[var(--color-text)] mb-8">
          PARA QUE NO HAYA SORPRESAS:
          <br />
          ESTO NO EST&Aacute; INCLUIDO.
        </h2>

        <div className="max-w-[700px]">
          {items.map((item, i) => (
            <div
              key={i}
              className="py-4 md:py-5"
              style={{ borderBottom: '1px solid rgba(212,168,83,0.1)' }}
            >
              <div className="flex items-start gap-3">
                <span className="text-[var(--color-secondary)] shrink-0 mt-0.5">✕</span>
                <div>
                  <p className="text-sm text-[var(--color-text)] uppercase tracking-wide">
                    {item.label}
                  </p>
                  {item.note && (
                    <p className="text-xs text-[var(--color-accent)] mt-1 leading-relaxed">
                      ✓ {item.note}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
