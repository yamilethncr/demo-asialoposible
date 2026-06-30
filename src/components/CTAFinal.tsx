import ChatwootButton from './ChatwootButton'
import ContactForm from './ContactForm'

export default function CTAFinal({ variant = 'call' }: { variant?: 'call' | 'form' } = {}) {
  const paragraph =
    variant === 'call'
      ? 'Habla con Katherine ahora mismo. Resolvemos tus dudas en español, sin compromiso, y te enviamos el itinerario completo.'
      : 'Déjanos tus datos y Katherine te contacta en menos de 24 horas con el itinerario completo y todos los detalles.'

  return (
    <section id="reservar" className="pt-8 md:pt-12 pb-32 md:pb-40 relative z-10">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div
          className="border border-[rgba(200, 161, 90,0.3)] p-10 md:p-20 text-center relative overflow-hidden"
          style={{ background: 'rgba(200, 161, 90,0.02)' }}
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

          <span
            className="inline-block text-xs tracking-[0.2em] uppercase px-4 py-2 font-bold mb-6 relative z-10"
            style={{
              background: 'rgba(200, 161, 90,0.15)',
              border: '1px solid rgba(200, 161, 90,0.4)',
              color: 'var(--color-accent)',
            }}
          >
            AGOSTO 2026: <strong>4 CUPOS</strong> &middot; ABRIL 2027: <strong>8 CUPOS</strong>
          </span>

          <h2
            className="text-2xl sm:text-3xl md:text-[3.5rem] leading-tight uppercase font-bold text-[var(--color-text)] mb-6 relative z-10 animate-initial:opacity-0 animate-initial:y-20 animate-inview:opacity-100 animate-inview:y-0 animate-duration-600 animate-ease-out animate-once"
          >
            &iquest;EST&Aacute;S DENTRO?
          </h2>

          <p className="text-sm md:text-base leading-relaxed text-[var(--color-secondary)] max-w-[440px] mx-auto mb-8 relative z-10">
            {paragraph}
          </p>

          {variant === 'call' ? (
            <div className="flex justify-center relative z-10">
              <ChatwootButton variant="primary" label="ESCRÍBEME Y TE COMPARTO TODO" />
            </div>
          ) : (
            <div className="relative z-10 max-w-[480px] mx-auto">
              <ContactForm />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
