import ChatwootButton from '../ChatwootButton'

export default function BlogCTA() {
  return (
    <section
      className="border border-[rgba(200,161,90,0.3)] p-8 md:p-12 text-center relative overflow-hidden mt-16"
      style={{ background: 'rgba(200,161,90,0.02)' }}
    >
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] pointer-events-none"
        style={{
          background: 'var(--color-accent)',
          filter: 'blur(80px)',
          opacity: 0.08,
        }}
      />

      <span
        className="inline-block text-[0.65rem] tracking-[0.2em] uppercase px-3 py-1.5 font-bold mb-4 relative z-10"
        style={{
          background: 'rgba(200,161,90,0.15)',
          border: '1px solid rgba(200,161,90,0.4)',
          color: 'var(--color-accent)',
        }}
      >
        VIAJE EN GRUPO &middot; 10 PLAZAS
      </span>

      <h3
        className="text-xl md:text-2xl leading-tight uppercase mb-4 relative z-10"
        style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.06em' }}
      >
        &iquest;LISTO PARA VIVIR ASIA?
      </h3>

      <p className="text-sm text-[var(--color-secondary)] max-w-[400px] mx-auto mb-6 relative z-10">
        14 d&iacute;as por Vietnam y Camboya. Todo organizado, todo en espa&ntilde;ol. Sin complicaciones.
      </p>

      <div className="relative z-10 inline-block">
        <ChatwootButton variant="primary" label="VER ITINERARIO COMPLETO" />
      </div>
    </section>
  )
}
