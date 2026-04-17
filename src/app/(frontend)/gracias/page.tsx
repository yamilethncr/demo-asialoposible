import type { Metadata } from 'next'
import GraciasTracker from './GraciasTracker'

export const metadata: Metadata = {
  title: 'Gracias — Tu llamada está agendada | Asia Lo Posible',
  robots: { index: false, follow: false },
}

export default function Gracias() {
  return (
    <>
      <GraciasTracker />
      <section className="min-h-screen flex items-center justify-center px-5 py-20">
        <div
          className="max-w-[600px] text-center border border-[rgba(212,168,83,0.3)] p-10 md:p-12 relative overflow-hidden"
          style={{ background: 'rgba(212,168,83,0.04)' }}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none"
            style={{ background: 'var(--color-accent)', filter: 'blur(100px)', opacity: 0.08 }}
          />
          <span className="inline-block text-xs tracking-[0.2em] uppercase px-4 py-2 font-bold mb-6 relative z-10"
                style={{ background: 'rgba(212,168,83,0.15)', border: '1px solid rgba(212,168,83,0.4)', color: 'var(--color-accent)' }}>
            ✓ LLAMADA AGENDADA
          </span>
          <h1 className="text-3xl md:text-5xl uppercase font-bold mb-6 relative z-10 leading-tight text-[var(--color-text)]">
            GRACIAS.<br/>NOS VEMOS EN LA LLAMADA.
          </h1>
          <p className="text-sm md:text-base text-[var(--color-secondary)] mb-4 relative z-10 max-w-[440px] mx-auto leading-relaxed">
            Te llegará una confirmación por email con el enlace a la reunión. Si no la ves en unos minutos, revisa spam o{' '}
            <a
              href="https://wa.me/584248455010"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] underline decoration-[rgba(212,168,83,0.4)] underline-offset-4 hover:decoration-[var(--color-accent)] transition-colors"
            >
              escríbenos por WhatsApp
            </a>
            .
          </p>
          <a
            href="/"
            className="inline-block border border-[var(--color-accent)] bg-transparent text-[var(--color-accent)] px-8 py-4 text-sm uppercase tracking-[0.1em] font-bold no-underline transition-all duration-300 hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] hover:shadow-[0_0_20px_rgba(212,168,83,0.4)] relative z-10 mt-6"
          >
            VOLVER AL INICIO
          </a>
        </div>
      </section>
    </>
  )
}
