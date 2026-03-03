'use client'

import { useState } from 'react'

interface Day {
  days: string
  title: string
  location: string
  description: string
  highlight?: boolean
}

const itinerary: Day[] = [
  {
    days: 'DÍA 01',
    title: 'Llegada a Hanói',
    location: 'VIETNAM',
    description:
      'Tu guía te espera en el aeropuerto desde el primer momento. Traslado al hotel, distribución de habitaciones y tiempo libre para descansar. Por la noche, cena de bienvenida con vista panorámica desde la azotea.',
  },
  {
    days: 'DÍA 02',
    title: 'Hanói + Vespa Tour Nocturno',
    location: 'VIETNAM',
    description:
      'Mausoleo de Ho Chi Minh, Templo de la Literatura, paseo en rickshaw. Y lo mejor: tour nocturno en Vespa por el Barrio Antiguo, paradas gastronómicas y música en vivo.',
  },
  {
    days: 'DÍA 03-04',
    title: 'Crucero Bahía de Halong',
    location: 'CRUCERO',
    description:
      '1.969 islas, agua color esmeralda, Patrimonio UNESCO. Noche a bordo de un crucero premium. Al amanecer, tai chi en cubierta y brunch con vista. Luego vuelo interno a Hue.',
  },
  {
    days: 'DÍA 05',
    title: 'Hue — Capital Imperial',
    location: 'VIETNAM',
    description:
      'Ciudad Imperial amurallada, pagoda Thien Mu, fábrica de inciensos artesanales, tumba del emperador Tu Duc. Un día caminando dentro de la historia.',
  },
  {
    days: 'DÍA 06',
    title: 'Ba Na Hills + Puente Dorado',
    location: 'DA NANG',
    description:
      'Subida a 1.487 metros de altura. El Puente Dorado sostenido por dos manos gigantes. Almuerzo de buffet en la cima. Llegada a Da Nang y tarde libre en la playa de My Khe.',
  },
  {
    days: 'DÍA 07',
    title: 'Día Libre en la Playa',
    location: 'DA NANG',
    description:
      'Un día sin agenda. Playa, sol, descanso. El ritmo de un viaje diseñado para que llegues a cada nuevo destino descansado y con ganas de más.',
  },
  {
    days: 'DÍA 08',
    title: 'Da Nang + Fotografía + Hoi An',
    location: 'HOI AN',
    description:
      'Montañas de Mármol, Puente del Dragón, Pagoda Linh Ung. Sesión de fotografía profesional incluida: 2 horas. Por la tarde, llegada a Hoi An y paseo en barco con linternas al atardecer.',
  },
  {
    days: 'DÍA 09',
    title: 'Clase de Cocina + Barrio Antiguo',
    location: 'HOI AN',
    description:
      'Clase de cocina completa: mercado local, barca de bambú por la Jungla de Cocos, cuatro platos con chef. Por la tarde, Barrio Antiguo Patrimonio UNESCO, Puente Japonés de 400 años.',
  },
  {
    days: 'DÍA 10',
    title: 'Vuelo a Camboya',
    location: 'SIEM REAP',
    description:
      'Mañana libre en Hoi An. Vuelo a Siem Reap, cuna del Imperio Khmer y más de 100 templos entre los siglos IX y XIII. Bienvenida del guía local.',
  },
  {
    days: 'DÍA 11',
    title: 'Angkor Thom & Angkor Wat',
    location: 'CAMBOYA',
    description:
      'Día completo: Angkor Thom, Bayón con sus 200 rostros sonrientes, Ta Prohm cubierto de raíces (Tomb Raider), y Angkor Wat — el templo más grande del mundo en su época. Atardecer desde Phnom Bakheng.',
  },
  {
    days: 'DÍA 12',
    title: 'Circuito Largo — Banteay Srei',
    location: 'CAMBOYA',
    description:
      'Pre Rup, Banteay Samre, Banteay Srei (la joya del arte angkoriano), East Mebon, Ta Som, Neak Pean y Preah Khan — el segundo templo más grande tras Angkor Wat.',
  },
  {
    days: 'DÍA 13',
    title: 'Roluos + Lago Tonle Sap',
    location: 'CAMBOYA',
    description:
      'Templos preangkorianos de Roluos. Paseo en barco por el lago más grande del sudeste asiático. Visita al pueblo flotante de Kompong Phluk: casas, escuelas, vida entera sobre el agua.',
  },
  {
    days: 'DÍA 14',
    title: 'Despedida & Regreso',
    location: 'GLOBAL',
    description:
      'Desayuno, tiempo libre y traslado al aeropuerto de Siem Reap. Fin de la experiencia.',
    highlight: true,
  },
]

export default function Itinerary() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="recorrido" className="py-20 md:py-28 relative z-10">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <span className="block text-xs tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-4">
          LA RUTA &mdash; AGOSTO 2026
        </span>
        <h2 className="text-2xl md:text-[2.5rem] leading-tight uppercase font-bold text-[var(--color-text)] mb-10">
          14 D&Iacute;AS. 6 DESTINOS.
          <br className="hidden md:block" />
          <span className="text-[var(--color-accent)]">0 GESTIONES POR TU CUENTA.</span>
        </h2>

        <div className="border-t border-[rgba(212,168,83,0.1)]">
          {itinerary.map((day, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className="border-b transition-all duration-400 cursor-pointer"
                style={{
                  borderColor: day.highlight || isOpen
                    ? 'var(--color-accent)'
                    : 'rgba(212,168,83,0.1)',
                  background:
                    day.highlight
                      ? 'rgba(212,168,83,0.1)'
                      : isOpen
                        ? 'rgba(212,168,83,0.05)'
                        : 'transparent',
                }}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <div className="flex justify-between items-baseline py-6 md:py-8 px-0 md:hover:pl-5 transition-all duration-400">
                  <span
                    className="font-mono text-[0.8rem] w-[80px] md:w-[100px] shrink-0 transition-colors"
                    style={{
                      color:
                        day.highlight || isOpen
                          ? 'var(--color-accent)'
                          : 'var(--color-secondary)',
                    }}
                  >
                    {day.days}
                  </span>
                  <span className="text-base md:text-xl lg:text-2xl font-bold uppercase text-[var(--color-text)] flex-1 px-3 md:px-6">
                    {day.title}
                  </span>
                  <span className="text-[0.8rem] uppercase tracking-[0.1em] text-right w-[70px] md:w-[150px] shrink-0 text-[var(--color-secondary)] hidden sm:block">
                    {day.location}
                  </span>
                </div>

                {isOpen && (
                  <div
                    className="overflow-hidden px-0 md:px-[100px] pb-6"
                    style={{
                      animation: 'expandContent 0.3s ease forwards',
                    }}
                  >
                    <p className="text-[0.9rem] leading-relaxed text-[var(--color-secondary)] max-w-[600px]">
                      {day.description}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
