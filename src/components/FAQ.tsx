'use client'

import { useState, type ReactNode } from 'react'

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: '¿Qué hace diferente a este viaje de un tour convencional?',
    a: 'No es un tour. Es una experiencia curada por Katherine, quien vive en Vietnam y conoce cada rincón. Grupo máximo de 10 personas, guía en español, hoteles boutique 4 estrellas, y un itinerario diseñado para vivir Asia, no solo visitarla.',
  },
  {
    q: '¿Necesito saber inglés?',
    a: 'No. Todo el viaje está diseñado para funcionar completamente en español. Tienes guía profesional en español durante todo el recorrido y el acompañamiento personal de Katherine.',
  },
  {
    q: '¿Es obligatorio el seguro de viaje?',
    a: 'Sí, es obligatorio contar con un seguro médico de viaje con cobertura internacional amplia. Nosotros te facilitamos la gestión y emisión a través de la operadora certificada.',
  },
  {
    q: '¿El boleto de avión está incluido?',
    a: 'No. Los vuelos internacionales no están incluidos para darte flexibilidad de salir desde tu ciudad. Los vuelos internos dentro de Vietnam y Camboya sí están incluidos.',
  },
  {
    q: '¿Qué tipo de ropa debo llevar?',
    a: 'Ropa ligera, cómoda y transpirable. El sudeste asiático es cálido todo el año (25-35°C). En agosto es temporada húmeda; en abril es temporada seca y más calurosa. Incluye un suéter ligero para interiores con aire acondicionado y calzado cómodo para caminar.',
  },
  {
    q: '¿Qué formas de pago aceptan?',
    a: 'Transferencias bancarias en dólares y en euros, criptomonedas, bolívares a la tasa Kontigo, y pago con tarjeta de débito/crédito. Katherine te indicará las opciones disponibles según tu país de residencia.',
  },
  {
    q: '¿Funcionan las tarjetas de crédito y Apple Pay en Vietnam y Camboya?',
    a: 'Las tarjetas Visa y Mastercard funcionan en hoteles, restaurantes grandes y tiendas. Apple Pay tiene cobertura limitada. Para mercados, street food y compras locales necesitarás efectivo (dólares o moneda local). Te asesoramos sobre cuánto llevar.',
  },
  {
    q: '¿Cómo funciona el transporte dentro del viaje?',
    a: 'Todo el transporte está incluido: vehículos privados con aire acondicionado, vuelos internos, crucero en Halong Bay, barcas, rickshaws y Vespa tour. No necesitas gestionar nada.',
  },
  {
    q: '¿Necesito comprar una SIM local o hay WiFi?',
    a: 'Los hoteles tienen WiFi. Además, te regalamos una tarjeta eSIM con datos móviles para Vietnam y Camboya (incluida en tu cupo, con un límite de uso razonable para todo el viaje). Te enviamos las instrucciones de activación antes de salir.',
  },
  {
    q: '¿Es seguro viajar a Vietnam y Camboya?',
    a: 'Sí. Vietnam y Camboya son destinos muy seguros para turistas. El crimen violento es extremadamente raro. Las precauciones son las mismas que en cualquier ciudad: cuidar pertenencias y estar atento en zonas concurridas.',
  },
  {
    q: '¿Cuánto cuesta el suplemento de habitación individual?',
    a: 'El suplemento por habitación privada es de $655 USD adicionales al precio del viaje. Si viajas solo/a y prefieres no compartir habitación, esta opción te garantiza tu propio espacio.',
  },
  {
    q: '¿El viaje requiere mucha exigencia física?',
    a: 'No. El itinerario está diseñado con un ritmo balanceado entre actividad y descanso. Incluye caminatas moderadas en templos y ciudades, pero no excursiones extremas. Hay días libres para recuperar energía.',
  },
  {
    q: '¿Puedo organizar un viaje privado para mi grupo?',
    a: <>Sí. Si tienes un grupo de 5 o más personas, podemos diseñar una experiencia completamente privada con destinos, fechas y actividades a medida. Visita nuestra página de{' '}<a href="/viajes-privados" className="text-[var(--color-accent)] underline hover:no-underline">Viajes Privados</a>{' '}o escríbenos directamente por WhatsApp para cotización.</>,
  },
  {
    q: '¿Puedo extender mi estadía antes o después del viaje?',
    a: 'Sí. Muchos viajeros llegan antes o se quedan después para explorar por su cuenta. Te asesoramos con recomendaciones de destinos, hoteles y logística para tu extensión.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="pt-16 md:pt-20 pb-10 md:pb-14 relative z-10">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <span className="block text-xs tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-4">
              FAQ
            </span>
            <h2 className="text-2xl md:text-[2.5rem] leading-tight uppercase font-bold text-[var(--color-text)]">
              PREGUNTAS FRECUENTES SOBRE EL VIAJE A VIETNAM Y CAMBOYA
            </h2>
          </div>

          <div className="md:col-start-6 md:col-span-7">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={i}
                  className="cursor-pointer"
                  style={{ borderBottom: '1px solid rgba(212,168,83,0.1)' }}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <div className="flex justify-between items-center py-5 md:py-6">
                    <p className="text-sm md:text-base font-bold uppercase text-[var(--color-text)] pr-4">
                      {faq.q}
                    </p>
                    <span
                      className="text-[var(--color-accent)] text-xl shrink-0 transition-transform duration-300"
                      style={{
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                      }}
                    >
                      +
                    </span>
                  </div>
                  {isOpen && (
                    <div
                      className="pb-5 md:pb-6"
                      style={{ animation: 'expandContent 0.3s ease forwards' }}
                    >
                      <p className="text-sm leading-relaxed text-[var(--color-secondary)] max-w-[500px]">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA below FAQ */}
        <div className="mt-12 md:mt-16 text-center">
          <a
            href="#reservar"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('reservar')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-block border border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-bg)] px-10 py-4 text-sm uppercase tracking-[0.1em] font-bold no-underline transition-all duration-500 hover:shadow-[0_0_20px_rgba(212,168,83,0.4)] hover:bg-transparent hover:text-[var(--color-accent)]"
          >
            M&Aacute;NDAME TODA LA INFORMACI&Oacute;N
          </a>
        </div>
      </div>
    </section>
  )
}
