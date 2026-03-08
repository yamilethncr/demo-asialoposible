'use client'

import { useState } from 'react'

interface Day {
  days: string
  title: string
  location: string
  description: string
  meals?: string
  hotel?: string
  highlight?: boolean
}

const itinerary: Day[] = [
  {
    days: 'DÍA 01',
    title: 'Llegada a Hanói',
    location: 'VIETNAM',
    meals: 'C',
    hotel: 'Anatole Hotel',
    description: 'Tu guía te espera en el aeropuerto desde el primer momento. Traslado al hotel Anatole en el corazón del Barrio Antiguo, distribución de habitaciones y tiempo libre para descansar del vuelo. Por la noche, cena de bienvenida con el grupo completo para conocerse y brindar por la aventura que comienza.',
  },
  {
    days: 'DÍA 02',
    title: 'Hanói — Capital de Vietnam',
    location: 'VIETNAM',
    meals: 'D',
    hotel: 'Anatole Hotel',
    description: 'Día completo explorando la capital milenaria. Visita al Mausoleo de Ho Chi Minh, el Templo de la Literatura (la primera universidad de Vietnam, siglo XI), paseo en rickshaw por el Barrio Antiguo de las 36 calles, y la pagoda Tran Quoc junto al lago. Al caer la noche, lo mejor: Vespa Night Tour — recorrido nocturno en moto por los callejones de Hanói con paradas gastronómicas y música en vivo.',
  },
  {
    days: 'DÍA 03',
    title: 'Hanói — Bahía de Halong',
    location: 'CRUCERO',
    meals: 'D, A, C',
    hotel: 'Indochine Premium Cruise',
    description: 'Salida hacia la Bahía de Halong, Patrimonio UNESCO con 1.969 islas de piedra caliza emergiendo del agua color esmeralda. Embarque en el crucero Indochine Premium. Almuerzo a bordo con mariscos frescos, kayak entre formaciones rocosas, cueva de estalactitas, y cena gourmet bajo las estrellas. Noche a bordo del crucero.',
  },
  {
    days: 'DÍA 04',
    title: 'Halong — Hanói — Vuelo a Hue',
    location: 'VIETNAM',
    meals: 'D',
    hotel: 'White Lotus Hotel',
    description: 'Amanecer en la bahía. Sesión de tai chi en cubierta al amanecer, brunch panorámico mientras el crucero navega de regreso. Desembarque y traslado a Hanói para tomar el vuelo interno a Hue, la antigua capital imperial. Llegada al hotel White Lotus y noche libre.',
  },
  {
    days: 'DÍA 05',
    title: 'Hue — Antigua Capital Imperial',
    location: 'VIETNAM',
    meals: 'D',
    hotel: 'White Lotus Hotel',
    description: 'Un día caminando dentro de la historia. Visita a la Ciudad Imperial amurallada (Patrimonio UNESCO), la pagoda Thien Mu a orillas del Río del Perfume, la Tumba del emperador Tu Duc entre jardines y estanques, y el vibrante mercado Dong Ba para descubrir los sabores locales de Hue, considerada la capital gastronómica de Vietnam.',
  },
  {
    days: 'DÍA 06',
    title: 'Hue — Ba Na Hills — Danang',
    location: 'DA NANG',
    meals: 'D, A',
    hotel: 'A La Carte Hotel',
    description: 'Cruce del legendario Paso de las Nubes (Hai Van Pass) con vistas espectaculares al mar. Subida en teleférico a Ba Na Hills a 1.487 metros de altura. El famoso Puente Dorado sostenido por dos manos gigantes de piedra. Almuerzo buffet en la cima con vista panorámica. Descenso y llegada a Danang, check-in en el hotel A La Carte frente a la playa de My Khe.',
  },
  {
    days: 'DÍA 07',
    title: 'Día Libre en Playa My Khe',
    location: 'DA NANG',
    meals: 'D',
    hotel: 'A La Carte Hotel',
    description: 'Un día sin agenda. Playa, sol, piscina del hotel, spa, o simplemente descanso. My Khe fue nombrada una de las playas más hermosas del planeta. El ritmo del viaje está diseñado para que llegues a cada nuevo destino descansado y con ganas de más. Día libre sin guía — explora a tu ritmo.',
  },
  {
    days: 'DÍA 08',
    title: 'Danang — City Tour — Hoi An',
    location: 'HOI AN',
    meals: 'D',
    hotel: 'Hoi An Delicacy Hotel',
    description: 'Mañana visitando las Montañas de Mármol (cinco colinas con cuevas y templos budistas), el imponente Puente del Dragón, y la Pagoda Linh Ung con su Lady Buddha de 67 metros mirando al mar. Por la tarde, traslado a Hoi An y paseo en barco por el río Hoai al atardecer, soltando linternas de colores flotantes — uno de los momentos más mágicos del viaje.',
  },
  {
    days: 'DÍA 09',
    title: 'Hoi An — Clase de Cocina y Cam Thanh',
    location: 'HOI AN',
    meals: 'D, A',
    hotel: 'Hoi An Delicacy Hotel',
    description: 'Mañana en el mercado local seleccionando ingredientes frescos. Paseo en barca de bambú por la Jungla de Cocos de Cam Thanh. Clase de cocina vietnamita completa: preparación de cuatro platos tradicionales con chef local. Por la tarde, tiempo libre en el Barrio Antiguo Patrimonio UNESCO: Puente Japonés de 400 años, casas de mercaderes, sastrería artesanal, y la mejor comida callejera de Vietnam.',
  },
  {
    days: 'DÍA 10',
    title: 'Hoi An — Danang — Vuelo a Siem Reap',
    location: 'SIEM REAP',
    meals: 'D',
    hotel: 'Metta Residence & Spa',
    description: 'Mañana libre en Hoi An para últimas compras o paseo. Traslado al aeropuerto de Danang para el vuelo a Siem Reap, Camboya — cuna del Imperio Khmer y hogar de más de 100 templos construidos entre los siglos IX y XIII. Bienvenida del guía local camboyano. Check-in en Metta Residence & Spa.',
  },
  {
    days: 'DÍA 11',
    title: 'Angkor Thom y Angkor Wat',
    location: 'CAMBOYA',
    meals: 'D',
    hotel: 'Metta Residence & Spa',
    description: 'El día más épico del viaje. Angkor Thom: la gran ciudad amurallada con el templo Bayón y sus 200 rostros sonrientes tallados en piedra. Ta Prohm: el templo devorado por las raíces de árboles gigantes (escenario de Tomb Raider). Y el gran Angkor Wat — el monumento religioso más grande del mundo, símbolo de Camboya. Atardecer desde la colina de Phnom Bakheng con vista panorámica de todo el complejo.',
  },
  {
    days: 'DÍA 12',
    title: 'Circuito Largo — Banteay Srei y Samre',
    location: 'CAMBOYA',
    meals: 'A',
    hotel: 'Metta Residence & Spa',
    description: 'Exploración del circuito lejano de Angkor. Pre Rup (templo-montaña del siglo X), Banteay Samre, y la joya del arte angkoriano: Banteay Srei, con los bajorrelieves más detallados y mejor conservados de todo el complejo. East Mebon, y Preah Khan — el segundo templo más grande tras Angkor Wat, laberinto de corredores y galerías. Almuerzo incluido.',
  },
  {
    days: 'DÍA 13',
    title: 'Grupo Roluos — Lago Tonle Sap',
    location: 'CAMBOYA',
    meals: 'D',
    hotel: 'Metta Residence & Spa',
    description: 'Visita a los templos preangkorianos de Roluos, los más antiguos del complejo de Angkor (siglo IX). Luego, paseo en barco por el Tonle Sap, el lago más grande del sudeste asiático. Visita al pueblo flotante de Kompong Phluk: casas, escuelas, mercados — una comunidad entera viviendo sobre el agua. Una experiencia humana única.',
  },
  {
    days: 'DÍA 14',
    title: 'Despedida y Regreso',
    location: 'CAMBOYA',
    meals: 'D',
    hotel: '',
    description: 'Último desayuno juntos. Tiempo libre para compras de último momento o simplemente disfrutar la piscina del hotel. Traslado al aeropuerto de Siem Reap. Fin de la experiencia — pero el comienzo de una conexión que dura para siempre.',
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
                    <div className="flex flex-wrap gap-4 mt-3">
                      {day.meals && (
                        <span className="text-xs uppercase tracking-wide text-[var(--color-accent)]">
                          {day.meals.split(', ').map(m => m === 'D' ? 'Desayuno' : m === 'A' ? 'Almuerzo' : 'Cena').join(' · ')}
                        </span>
                      )}
                      {day.hotel && (
                        <span className="text-xs uppercase tracking-wide text-[var(--color-secondary)]">
                          🏨 {day.hotel}
                        </span>
                      )}
                    </div>
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
