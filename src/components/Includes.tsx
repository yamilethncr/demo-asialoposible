const items = [
  { label: 'HOSPEDAJE 4★ TODAS LAS NOCHES + CRUCERO HALONG', icon: '🏨' },
  { label: 'TODOS LOS DESAYUNOS (14 DÍAS)', icon: '🍳' },
  { label: 'ALMUERZOS Y CENAS SELECCIONADOS', icon: '🍜' },
  { label: 'VUELOS INTERNOS + VUELO A CAMBOYA', icon: '✈️' },
  { label: 'TRANSPORTE DE LUJO CLIMATIZADO', icon: '🚐' },
  { label: 'ENTRADAS A TODAS LAS ACTIVIDADES', icon: '🎟️' },
  { label: 'GUÍA VIETNAMITA EN ESPAÑOL', icon: '🧭' },
  { label: 'ACOMPAÑAMIENTO DE KATHERINE', icon: '🤝' },
  { label: 'OPERADOR TURÍSTICO LICENCIADO', icon: '🏢' },
  { label: 'HIDRATACIÓN EN TODAS LAS ACTIVIDADES', icon: '💧' },
  { label: 'KIT DE SOUVENIRS DE BIENVENIDA', icon: '🎁' },
  { label: 'FOTOGRAFÍA PROFESIONAL EN DA NANG (2H)', icon: '📸' },
]

export default function Includes() {
  return (
    <section id="incluye" className="py-20 md:py-28 relative z-10">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          {/* Left column */}
          <div className="md:col-span-5">
            <span className="block text-xs tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-4">
              LA PROPUESTA DE VALOR
            </span>
            <h2 className="text-2xl md:text-[2.5rem] leading-tight uppercase font-bold text-[var(--color-text)] mb-4">
              UNA SOLA CUOTA.
              <br />
              TODO ESTO ADENTRO.
            </h2>
            <p className="text-[0.85rem] leading-relaxed text-[var(--color-secondary)] max-w-[380px]">
              No tienes que calcular extras, comparar hoteles, coordinar traslados ni buscar entradas. Todo lo que ves a continuaci&oacute;n ya est&aacute; incluido en tu cupo.
            </p>
          </div>

          {/* Right column - list */}
          <div className="md:col-start-7 md:col-span-6">
            <ul className="list-none">
              {items.map((item, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center py-4 md:py-5 transition-colors duration-300 hover:bg-[rgba(212,168,83,0.05)]"
                  style={{
                    borderBottom: '1px solid rgba(212,168,83,0.15)',
                  }}
                >
                  <span className="text-[var(--color-text)] text-xs md:text-sm tracking-wide uppercase">
                    {item.label}
                  </span>
                  <span className="text-[var(--color-accent)] ml-4 shrink-0">✓</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
