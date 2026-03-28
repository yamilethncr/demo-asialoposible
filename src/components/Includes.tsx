const items: { label: string; icon: string; highlight?: boolean }[] = [
  { label: 'HOSPEDAJE 4 O 5 ESTRELLAS + CRUCERO DE LUJO EN LA BAHÍA DE HALONG', icon: '🏨' },
  { label: 'TODOS LOS DESAYUNOS (14 DÍAS)', icon: '🍳' },
  { label: 'ALGUNOS ALMUERZOS Y CENAS INCLUIDOS', icon: '🍜' },
  { label: 'VUELOS INTERNOS + VUELO A CAMBOYA', icon: '✈️' },
  { label: 'TRANSPORTE DE LUJO CLIMATIZADO', icon: '🚐' },
  { label: 'ENTRADAS A TODAS LAS ACTIVIDADES', icon: '🎟️' },
  { label: 'GUÍA VIETNAMITA EN ESPAÑOL', icon: '🧭' },
  { label: 'KATHERINE MOLINARES COMO TU ANFITRIONA DURANTE TODO EL VIAJE', icon: '🤝', highlight: true },
  { label: 'OPERADOR TURÍSTICO LICENCIADO', icon: '🏢' },
  { label: 'HIDRATACIÓN EN TODAS LAS ACTIVIDADES', icon: '💧' },
  { label: 'KIT DE SOUVENIRS DE BIENVENIDA', icon: '🎁' },
  { label: 'FOTOGRAFÍA PROFESIONAL EN DA NANG (2H)', icon: '📸' },
  { label: 'TARJETA E-SIM PARA VIETNAM Y CAMBOYA', icon: '📱' },
]

export default function Includes() {
  return (
    <section id="incluye" className="pt-10 md:pt-14 pb-20 md:pb-28 relative z-10">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          {/* Left column */}
          <div className="md:col-span-5">
            <span className="block text-xs tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-4">
              LA PROPUESTA DE VALOR
            </span>
            <h2 className="text-2xl md:text-[2.5rem] leading-tight uppercase font-bold text-[var(--color-text)] mb-4">
              QU&Eacute; INCLUYE EL VIAJE
              <br />
              A VIETNAM Y CAMBOYA
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-[var(--color-secondary)] max-w-[380px]">
              No tienes que calcular extras, comparar hoteles, coordinar traslados ni buscar entradas. Todo lo que ves a continuaci&oacute;n ya est&aacute; incluido en tu cupo.
            </p>
          </div>

          {/* Right column - list */}
          <div className="md:col-start-7 md:col-span-6">
            <ul className="list-none">
              {items.map((item, i) => (
                <li
                  key={i}
                  className={`flex justify-between items-center py-4 md:py-5 px-4 md:px-5 transition-colors duration-300 hover:bg-[rgba(212,168,83,0.05)] ${item.highlight ? 'bg-[rgba(212,168,83,0.08)]' : ''} animate-hover:x-2 animate-duration-200 animate-ease-out`}
                  style={{
                    borderBottom: '1px solid rgba(212,168,83,0.15)',
                    ...(item.highlight ? { borderLeft: '2px solid var(--color-accent)' } : {}),
                  }}
                >
                  <span className={`text-xs md:text-sm tracking-wide uppercase ${item.highlight ? 'text-[var(--color-accent)] font-bold' : 'text-[var(--color-text)]'}`}>
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
