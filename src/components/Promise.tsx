export default function Promise() {
  return (
    <section className="py-20 md:py-28 relative z-10">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div
          className="border border-[rgba(212,168,83,0.2)] p-8 md:p-16 relative overflow-hidden"
          style={{ background: 'rgba(212,168,83,0.03)' }}
        >
          {/* Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none"
            style={{
              background: 'var(--color-accent)',
              filter: 'blur(120px)',
              opacity: 0.08,
            }}
          />

          <span className="block text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] mb-6 relative z-10">
            LA PROMESA
          </span>

          <h2 className="text-xl sm:text-2xl md:text-[2.5rem] leading-tight uppercase font-bold text-[var(--color-text)] mb-8 relative z-10 max-w-[700px]">
            DESDE QUE ATERRIZAS EN HANO&Iacute; HASTA QUE TE DESPIDES DE CAMBOYA, T&Uacute; SOLO TIENES QUE DISFRUTAR.
          </h2>

          <p className="text-[0.95rem] leading-relaxed text-[var(--color-secondary)] max-w-[600px] relative z-10 mb-4">
            Probar la sopa en el mercado. Sacar la foto en el Puente Dorado. Despertar en un crucero en medio de la Bah&iacute;a de Halong y entender por qu&eacute; la llaman la octava maravilla del mundo.
          </p>
          <p className="text-[0.95rem] leading-relaxed text-[var(--color-text)] max-w-[600px] relative z-10">
            Todo lo dem&aacute;s ya est&aacute; resuelto. Nosotros ya buscamos la informaci&oacute;n. T&uacute; solo vienes y disfrutas.
          </p>
        </div>
      </div>
    </section>
  )
}
