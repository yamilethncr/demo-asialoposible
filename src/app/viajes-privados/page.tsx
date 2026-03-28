import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SprayPaint from '@/components/SprayPaint'
import CalBooking from '@/components/CalBooking'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title:
    'Viaje Privado a Vietnam, Camboya y Tailandia en Español | Grupos desde 5 | Asia Lo Posible',
  description:
    'Viaje a medida al Sudeste Asiático para grupos de 5+. Vietnam, Camboya, Tailandia — itinerario personalizado, guía en español, hoteles 4-5 estrellas, todo resuelto. Cotización en 48h por Katherine Molinares.',
  openGraph: {
    title: 'Viaje Privado a Vietnam, Camboya y Tailandia en Español | Asia Lo Posible',
    description:
      'Tu grupo. Tus fechas. Tu ritmo. Todo en español. Viajes privados diseñados por quien vive en Asia.',
    url: 'https://asialoposible.com/viajes-privados',
    siteName: 'Asia Lo Posible',
    locale: 'es_LA',
    type: 'website',
  },
}

const WA_MESSAGE_HERO = encodeURIComponent(
  'Hola Katherine, quiero cotizar un viaje privado a Asia para mi grupo. ¿Podemos hablar de los detalles?'
)
const WA_MESSAGE_FINAL = encodeURIComponent(
  'Hola Katherine, vi la página de viajes privados y me interesa. ¿Qué opciones hay para mi grupo?'
)
const WA_URL_HERO = `https://wa.me/584248455010?text=${WA_MESSAGE_HERO}`
const WA_URL_FINAL = `https://wa.me/584248455010?text=${WA_MESSAGE_FINAL}`

const steps = [
  {
    num: '01',
    title: 'CUÉNTANOS TU IDEA',
    desc: 'Escríbenos por WhatsApp en español. Dinos cuántos son, qué fechas manejan, qué destinos les interesan y qué tipo de experiencia buscan.',
  },
  {
    num: '02',
    title: 'DISEÑAMOS TU ITINERARIO',
    desc: 'En 48 horas te enviamos una propuesta personalizada con destinos, hoteles, actividades y precio detallado.',
  },
  {
    num: '03',
    title: 'AJUSTAMOS JUNTOS',
    desc: 'Revisamos contigo cada detalle hasta que el viaje sea exactamente lo que quieren. Sin letra pequeña.',
  },
  {
    num: '04',
    title: 'VIAJAN Y DISFRUTAN',
    desc: 'Katherine y el equipo local se encargan de todo. Guía en español durante todo el recorrido. Ustedes solo tienen que vivir la experiencia.',
  },
]

const includes = [
  'Guía profesional en español durante todo el recorrido',
  'Coordinación y acompañamiento 100% en español',
  'Hoteles 4-5 estrellas seleccionados personalmente',
  'Transporte privado climatizado en cada destino',
  'Vuelos internos entre destinos',
  'Actividades, entradas y experiencias curadas',
  'eSIM con datos móviles incluida',
  'Katherine como coordinadora personal del viaje',
  'Itinerario 100% personalizado a tu grupo',
  'Flexibilidad total de fechas y ritmo',
]

const trustCards = [
  {
    stat: '+30',
    title: 'VIAJEROS ACOMPAÑADOS',
    desc: 'Latinoamericanos que confiaron en nosotros y vivieron Asia como nunca imaginaron.',
  },
  {
    stat: '2',
    title: 'AÑOS VIVIENDO EN VIETNAM',
    desc: 'Katherine no organiza desde un escritorio. Vive aquí. Conoce cada rincón, cada proveedor, cada truco.',
  },
  {
    stat: '100%',
    title: 'EN ESPAÑOL',
    desc: 'Guía, coordinación, emergencias, negociaciones — todo en tu idioma. El idioma nunca será un problema.',
  },
]

const forYou = [
  'Tienes un grupo de 5 o más personas',
  'Quieren viajar en fechas a su medida',
  'Necesitan que todo sea en español — guía, coordinación, acompañamiento',
  'Valoran tener absolutamente todo resuelto sin barrera de idioma',
]

const notForYou = [
  'Buscas el viaje más barato posible',
  'Prefieres improvisar todo sobre la marcha',
  'No necesitas acompañamiento ni guía',
]

export default function ViajesPrivadosPage() {
  return (
    <>
      <Navbar />

      {/* S1 — Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1528127269322-539801943592?w=1600&auto=format)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(0.3) contrast(110%) brightness(0.4)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(10,15,30,0.7) 0%, rgba(10,15,30,0.9) 70%, var(--color-bg) 100%)',
          }}
        />

        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-10 text-center pt-32 pb-20">
          <span className="block text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] mb-6">
            EXPERIENCIA PRIVADA
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-[3.5rem] leading-tight uppercase font-bold text-[var(--color-text)] mb-6 max-w-[800px] mx-auto">
            VIAJES PRIVADOS
            <br />
            AL SUDESTE ASI&Aacute;TICO
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-[var(--color-text)] mb-4 max-w-[600px] mx-auto">
            Tu grupo. Tus fechas. Tu ritmo.{' '}
            <span className="text-[var(--color-accent)]">Todo en espa&ntilde;ol.</span>
            {' '}Desde 5 personas.
          </p>

          <p className="text-sm md:text-base leading-relaxed text-[var(--color-secondary)] mb-10 max-w-[550px] mx-auto">
            El idioma no deber&iacute;a ser lo que te frena de conocer Asia.
            Dise&ntilde;amos experiencias privadas con gu&iacute;a en
            espa&ntilde;ol, coordinaci&oacute;n en espa&ntilde;ol y
            acompa&ntilde;amiento completo en tu idioma &mdash; para que
            disfrutes sin perderte nada.
          </p>

          <a
            href={WA_URL_HERO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-bg)] px-10 py-4 text-sm uppercase tracking-[0.1em] font-bold no-underline transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,168,83,0.5)] hover:bg-transparent hover:text-[var(--color-accent)]"
          >
            COTIZAR MI VIAJE PRIVADO
          </a>

          <p className="text-xs tracking-[0.1em] uppercase text-[var(--color-secondary)] mt-6">
            Disponibilidad limitada por temporada
          </p>
        </div>
      </section>

      {/* S2 — How It Works */}
      <section className="pt-20 md:pt-28 pb-20 md:pb-28 relative z-10">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <span className="block text-xs tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-4">
                AS&Iacute; FUNCIONA
              </span>
              <h2 className="text-2xl md:text-[2.5rem] leading-tight uppercase font-bold text-[var(--color-text)]">
                DE TU IDEA
                <br />
                A TU VIAJE
                <br />
                EN 4 PASOS.
              </h2>
            </div>

            <div className="md:col-start-6 md:col-span-7 flex flex-col gap-0">
              {steps.map((step, i) => (
                <div
                  key={step.num}
                  className="flex gap-6 py-8"
                  style={{
                    borderBottom:
                      i < steps.length - 1
                        ? '1px solid rgba(212,168,83,0.1)'
                        : 'none',
                  }}
                >
                  <span
                    className="text-3xl md:text-4xl font-bold shrink-0"
                    style={{
                      fontFamily: 'var(--ff-mono)',
                      color: 'var(--color-accent)',
                      opacity: 0.4,
                    }}
                  >
                    {step.num}
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.1em] font-bold text-[var(--color-text)] mb-2">
                      {step.title}
                    </p>
                    <p className="text-sm leading-relaxed text-[var(--color-secondary)] max-w-[400px]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* S3 — What's Included */}
      <section className="pt-16 md:pt-20 pb-20 md:pb-28 relative z-10">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <span className="block text-xs tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-4">
                QU&Eacute; INCLUYE
              </span>
              <h2 className="text-2xl md:text-[2.5rem] leading-tight uppercase font-bold text-[var(--color-text)]">
                TODO LO QUE
                <br />
                NECESITAS.
                <br />
                NADA QUE NO.
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-[var(--color-secondary)] mt-6 max-w-[350px]">
                Cada viaje privado incluye el mismo est&aacute;ndar de calidad
                que nuestro viaje grupal, con la flexibilidad de
                personalizarlo todo.
              </p>
            </div>

            <div className="md:col-start-6 md:col-span-7">
              <div className="flex flex-col gap-0">
                {includes.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 py-4"
                    style={{
                      borderBottom: '1px solid rgba(212,168,83,0.08)',
                    }}
                  >
                    <span className="text-[var(--color-accent)] text-sm mt-0.5 shrink-0">
                      &#10003;
                    </span>
                    <p className="text-sm md:text-base leading-relaxed text-[var(--color-text)]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <SprayPaint
          className="w-[400px] h-[400px]"
          style={{
            top: '50%',
            left: '-100px',
            filter: 'blur(80px)',
            opacity: 0.15,
          }}
          shape="circle"
        />
      </section>

      {/* S4 — Trust / Social Proof */}
      <section className="pt-16 md:pt-20 pb-20 md:pb-28 relative z-10">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <span className="block text-xs tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-4">
            POR QU&Eacute; CON NOSOTROS
          </span>
          <h2 className="text-2xl md:text-[2.5rem] leading-tight uppercase font-bold text-[var(--color-text)] mb-12 md:mb-16">
            ESTO NO LO ENCUENTRAS
            <br />
            EN GOOGLE.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustCards.map((card) => (
              <div
                key={card.title}
                className="border border-[rgba(212,168,83,0.15)] p-8 relative overflow-hidden"
                style={{ background: 'rgba(212,168,83,0.02)' }}
              >
                <span
                  className="block text-4xl md:text-5xl font-bold mb-4"
                  style={{
                    fontFamily: 'var(--ff-mono)',
                    color: 'var(--color-accent)',
                  }}
                >
                  {card.stat}
                </span>
                <p className="text-sm uppercase tracking-[0.1em] font-bold text-[var(--color-text)] mb-3">
                  {card.title}
                </p>
                <p className="text-sm leading-relaxed text-[var(--color-secondary)]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S5 — Who It's For */}
      <section className="pt-16 md:pt-20 pb-20 md:pb-28 relative z-10">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div
            className="border border-[rgba(212,168,83,0.2)] p-8 md:p-16 relative overflow-hidden"
            style={{ background: 'rgba(212,168,83,0.03)' }}
          >
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none"
              style={{
                background: 'var(--color-accent)',
                filter: 'blur(120px)',
                opacity: 0.05,
              }}
            />

            <span className="block text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] mb-6 relative z-10">
              IMPORTANTE
            </span>
            <h2 className="text-2xl md:text-[2.5rem] leading-tight uppercase font-bold text-[var(--color-text)] mb-10 md:mb-14 relative z-10">
              ESTE SERVICIO
              <br />
              ES PARA TI SI&hellip;
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 relative z-10">
              {/* For you */}
              <div className="flex flex-col gap-5">
                {forYou.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="text-[var(--color-accent)] text-sm mt-0.5 shrink-0 font-bold">
                      &#10003;
                    </span>
                    <p className="text-sm md:text-base leading-relaxed text-[var(--color-text)]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Not for you */}
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-5">
                  QUIZ&Aacute;S NO ES PARA TI SI&hellip;
                </p>
                <div className="flex flex-col gap-5">
                  {notForYou.map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <span className="text-[var(--color-secondary)] text-sm mt-0.5 shrink-0">
                        &#10007;
                      </span>
                      <p className="text-sm md:text-base leading-relaxed text-[var(--color-secondary)]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S6 — Pricing + Final CTA */}
      <section className="pt-8 md:pt-12 pb-32 md:pb-40 relative z-10">
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
              INVERSI&Oacute;N
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-[3.5rem] leading-tight uppercase font-bold text-[var(--color-text)] mb-4 relative z-10">
              DESDE $3,200 USD
              <br />
              POR PERSONA
            </h2>

            <p className="text-sm md:text-base leading-relaxed text-[var(--color-secondary)] max-w-[500px] mx-auto mb-4 relative z-10">
              Para grupos de 5 o m&aacute;s personas. El precio final depende
              del destino, duraci&oacute;n, nivel de hoteles y actividades
              seleccionadas.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center text-xs tracking-[0.1em] uppercase text-[var(--color-secondary)] mb-10 relative z-10">
              <span>&#10003; Incluye todo lo mencionado</span>
              <span className="hidden sm:inline">&middot;</span>
              <span>&#10003; Cotizaci&oacute;n en 48 horas</span>
              <span className="hidden sm:inline">&middot;</span>
              <span>&#10003; Sin compromiso</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <a
                href={WA_URL_FINAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-bg)] px-10 py-4 text-sm uppercase tracking-[0.1em] font-bold no-underline transition-all duration-500 hover:shadow-[0_0_20px_rgba(212,168,83,0.4)] hover:bg-transparent hover:text-[var(--color-accent)]"
              >
                COTIZAR MI VIAJE PRIVADO
              </a>
              <CalBooking />
              <Link
                href="/"
                className="inline-block border border-[var(--color-accent)] bg-transparent text-[var(--color-accent)] px-10 py-4 text-sm uppercase tracking-[0.1em] font-bold no-underline transition-all duration-500 hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] hover:shadow-[0_0_20px_rgba(212,168,83,0.4)]"
              >
                VER VIAJE GRUPAL
              </Link>
            </div>

            {/* Contact Form */}
            <div className="relative z-10 max-w-[480px] mx-auto mt-10">
              <ContactForm />
            </div>

          </div>
        </div>

        <SprayPaint
          className="w-[600px] h-[600px]"
          style={{
            bottom: '-150px',
            left: '-150px',
            filter: 'blur(80px)',
          }}
          shape="blob2"
        />
      </section>

      <Footer />
    </>
  )
}
