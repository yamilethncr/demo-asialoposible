'use client'

import { useState } from 'react'

const faqs = [
  {
    q: '¿Necesito saber inglés?',
    a: 'No. El viaje está diseñado para funcionar completamente en español. Tienes guía en español todo el recorrido y el acompañamiento de Katherine como anfitriona.',
  },
  {
    q: '¿Puedo ir solo/a?',
    a: 'Sí. El viaje es para parejas, amigos, familias y personas que viajan solas. Si viajas solo/a, escríbenos para el precio en acomodación individual.',
  },
  {
    q: '¿Para qué edades es el viaje?',
    a: 'Para todas las edades. El ritmo está balanceado entre actividad y descanso, y el grupo pequeño permite adaptarlo a las necesidades de cada persona.',
  },
  {
    q: '¿Qué pasa con el visado?',
    a: 'No está incluido en el precio, pero te asesoramos en todo el proceso y te conectamos con un agente. Costo estimado: USD 70 Vietnam + USD 30 Camboya.',
  },
  {
    q: '¿Necesito seguro de viaje?',
    a: 'Sí, recomendamos contratarlo. Tenemos un proveedor recomendado con excelente cobertura médica y de viaje para el sudeste asiático.',
  },
  {
    q: '¿Cuántas personas viajan?',
    a: 'El grupo es de máximo 10 personas. Grupo pequeño y selecto. No es un tour masivo.',
  },
  {
    q: '¿Cómo reservo mi cupo?',
    a: 'Escríbenos por WhatsApp o Instagram. Te enviamos el itinerario detallado, condiciones de pago y resolvemos cualquier duda antes de confirmar.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-28 relative z-10">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <span className="block text-xs tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-4">
              FAQ
            </span>
            <h2 className="text-2xl md:text-[2.5rem] leading-tight uppercase font-bold text-[var(--color-text)]">
              PREGUNTAS
              <br />
              FRECUENTES
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
      </div>
    </section>
  )
}
