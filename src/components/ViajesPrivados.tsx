import Link from 'next/link'
import SprayPaint from './SprayPaint'

const WA_MESSAGE = encodeURIComponent(
  'Hola Katherine, me interesa organizar un viaje privado al Sudeste Asiático para mi grupo. ¿Podemos hablar?'
)
const WA_URL = `https://wa.me/584248455010?text=${WA_MESSAGE}`

const features = [
  {
    title: 'ITINERARIO A MEDIDA',
    desc: 'Eligen los destinos, el ritmo y las experiencias. Vietnam, Camboya, Tailandia... o todo.',
  },
  {
    title: '100% EN ESPAÑOL',
    desc: 'Guía, coordinación y acompañamiento en tu idioma. Sin barrera lingüística en ningún momento del viaje.',
  },
  {
    title: 'FECHAS FLEXIBLES',
    desc: 'No se ajustan a una salida grupal. Ustedes deciden cuándo viajar.',
  },
  {
    title: 'DESDE $3,200 USD/PERSONA',
    desc: 'Precio referencial para grupos de 5+. Cotización personalizada por WhatsApp.',
  },
]

export default function ViajesPrivados() {
  return (
    <section id="viajes-privados" className="pt-20 md:pt-28 pb-20 md:pb-28 relative z-10">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Gold divider */}
        <div
          className="h-px mb-20 md:mb-28"
          style={{
            background:
              'linear-gradient(90deg, transparent, var(--color-accent), transparent)',
            opacity: 0.3,
          }}
        />

        <div
          className="border border-[rgba(212,168,83,0.35)] p-8 md:p-16 relative overflow-hidden"
          style={{ background: 'rgba(212,168,83,0.08)' }}
        >
          {/* Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
            style={{
              background: 'var(--color-accent)',
              filter: 'blur(120px)',
              opacity: 0.12,
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 relative z-10">
            {/* Left — Copy + CTAs */}
            <div className="md:col-span-5">
              <span className="block text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] mb-6">
                EXPERIENCIA PRIVADA
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] leading-tight uppercase font-bold text-[var(--color-text)] mb-6">
                TU VIAJE PRIVADO AL
                <br />
                SUDESTE ASI&Aacute;TICO
              </h2>

              <p className="text-base md:text-lg leading-relaxed text-[var(--color-text)] mb-4 max-w-[440px]">
                Tus fechas. Tu grupo. Tu ritmo.{' '}
                <span className="text-[var(--color-accent)]">
                  Todo en espa&ntilde;ol.
                </span>
              </p>

              <p className="text-sm md:text-base leading-relaxed text-[var(--color-secondary)] mb-10 max-w-[440px]">
                Imagina recorrer Asia con tus amigos o tu familia, en un viaje
                exclusivo dise&ntilde;ado solo para ustedes. Gu&iacute;a en
                espa&ntilde;ol, coordinaci&oacute;n personalizada, hoteles que
                elegimos juntos &mdash; una experiencia privada desde 5 personas
                donde todo est&aacute; resuelto en tu idioma.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-bg)] px-8 py-4 text-sm uppercase tracking-[0.1em] font-bold no-underline transition-all duration-500 hover:shadow-[0_0_20px_rgba(212,168,83,0.4)] hover:bg-transparent hover:text-[var(--color-accent)] text-center animate-hover:scale-105 animate-tap:scale-95 animate-spring"
                >
                  PLANIFICA TU VIAJE PRIVADO
                </a>
                <Link
                  href="/viajes-privados"
                  className="inline-block border border-[var(--color-accent)] bg-transparent text-[var(--color-accent)] px-8 py-4 text-sm uppercase tracking-[0.1em] font-bold no-underline transition-all duration-500 hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] hover:shadow-[0_0_20px_rgba(212,168,83,0.4)] text-center animate-hover:scale-105 animate-tap:scale-95 animate-spring"
                >
                  VER DETALLES COMPLETOS
                </Link>
              </div>

              <p className="text-xs tracking-[0.1em] uppercase text-[var(--color-secondary)]">
                Disponibilidad limitada por temporada
              </p>
            </div>

            {/* Right — Feature cards */}
            <div className="md:col-start-7 md:col-span-6 flex flex-col gap-6">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="pl-5 py-4"
                  style={{ borderLeft: '2px solid var(--color-accent)' }}
                >
                  <p className="text-sm uppercase tracking-[0.1em] font-bold text-[var(--color-text)] mb-2">
                    {f.title}
                  </p>
                  <p className="text-sm leading-relaxed text-[var(--color-secondary)] max-w-[400px]">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SprayPaint
        className="w-[500px] h-[500px]"
        style={{
          bottom: '-120px',
          right: '-120px',
          filter: 'blur(80px)',
        }}
        shape="blob2"
      />
    </section>
  )
}
