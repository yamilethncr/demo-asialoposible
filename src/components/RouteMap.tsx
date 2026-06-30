'use client'

import { useState, useEffect, useRef } from 'react'

interface City {
  id: string
  name: string
  country: string
  days: string
  description: string
  // SVG coordinates (relative to viewBox)
  x: number
  y: number
}

const cities: City[] = [
  {
    id: 'hanoi',
    name: 'Hanói',
    country: 'Vietnam',
    days: 'Días 1–4',
    description: 'Capital milenaria. Barrio Antiguo, Vespa Night Tour, y embarque al crucero en Halong.',
    x: 248,
    y: 118,
  },
  {
    id: 'halong',
    name: 'Bahía de Halong',
    country: 'Vietnam',
    days: 'Días 3–4',
    description: 'Patrimonio UNESCO. Crucero de lujo entre 1.969 islas de piedra caliza.',
    x: 290,
    y: 105,
  },
  {
    id: 'hue',
    name: 'Hué',
    country: 'Vietnam',
    days: 'Días 4–5',
    description: 'Antigua capital imperial. Ciudad amurallada, pagodas y gastronomía legendaria.',
    x: 240,
    y: 218,
  },
  {
    id: 'danang',
    name: 'Da Nang',
    country: 'Vietnam',
    days: 'Días 6–7',
    description: 'Puente Dorado en Ba Na Hills, playa My Khe, y las Montañas de Mármol.',
    x: 250,
    y: 240,
  },
  {
    id: 'hoian',
    name: 'Hội An',
    country: 'Vietnam',
    days: 'Días 8–9',
    description: 'Ciudad antigua UNESCO. Linternas flotantes, clase de cocina, y el Puente Japonés.',
    x: 248,
    y: 255,
  },
  {
    id: 'siemreap',
    name: 'Siem Reap',
    country: 'Camboya',
    days: 'Días 10–14',
    description: 'Angkor Wat, templos milenarios del Imperio Khmer y el lago Tonle Sap.',
    x: 155,
    y: 328,
  },
]

// Route connections (index pairs)
const route: [number, number][] = [
  [0, 1], // Hanoi → Halong
  [1, 0], // Halong → Hanoi (return)
  [0, 2], // Hanoi → Hue (flight)
  [2, 3], // Hue → Da Nang
  [3, 4], // Da Nang → Hoi An
  [4, 5], // Hoi An → Siem Reap (flight)
]

const flights = new Set([2, 5]) // indices in route[] that are flights

export default function RouteMap() {
  const [activeCity, setActiveCity] = useState<string | null>(null)
  const [animatedIn, setAnimatedIn] = useState(false)
  const [visibleCities, setVisibleCities] = useState<Set<number>>(new Set())
  const sectionRef = useRef<HTMLElement>(null)

  // Intersection observer for scroll-triggered animation
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedIn) {
          setAnimatedIn(true)
          // Stagger city appearances
          cities.forEach((_, i) => {
            setTimeout(() => {
              setVisibleCities((prev) => new Set([...prev, i]))
            }, 300 + i * 250)
          })
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [animatedIn])

  const activeCityData = cities.find((c) => c.id === activeCity)

  return (
    <section ref={sectionRef} id="mapa" className="pt-20 md:pt-28 pb-10 md:pb-14 relative z-10 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'var(--color-accent)', filter: 'blur(200px)', opacity: 0.04 }}
      />

      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <span className="block text-xs tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-4">
          LA RUTA
        </span>
        <h2 className="text-2xl md:text-[2.5rem] leading-tight uppercase font-bold text-[var(--color-text)] mb-4">
          6 DESTINOS.
          <br />
          <span className="text-[var(--color-accent)]">2 PA&Iacute;SES.</span>
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-[var(--color-secondary)] max-w-[500px] mb-12">
          De Hano&iacute; a Siem Reap. Cada punto del mapa es una experiencia que ya est&aacute; organizada para ti.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Map */}
          <div className="lg:col-span-7 relative">
            <div
              className="relative w-full border border-[rgba(200,161,90,0.15)]"
              style={{ background: 'rgba(30,30,30,0.6)' }}
            >
              <svg
                viewBox="60 40 300 380"
                className="w-full h-auto"
                style={{ maxHeight: '80vh' }}
              >
                {/* Vietnam outline (simplified) */}
                <path
                  d={`M230,60 L260,70 L280,80 L300,95 L310,110 L305,120
                      L290,115 L280,108 L275,115 L285,125 L290,140
                      L280,145 L270,155 L265,170 L260,180 L255,195
                      L250,210 L248,220 L252,235 L258,250 L265,265
                      L270,280 L275,300 L278,315 L275,330 L268,340
                      L255,345 L245,340 L240,330 L238,318 L242,305
                      L245,290 L240,275 L235,260 L232,250 L228,240
                      L225,225 L222,215 L220,205 L218,195 L225,180
                      L235,165 L240,150 L245,135 L248,120 L250,105
                      L245,90 L238,78 L230,60`}
                  fill="rgba(200,161,90,0.06)"
                  stroke="rgba(200,161,90,0.2)"
                  strokeWidth="1"
                  className="transition-all duration-1000"
                  style={{
                    opacity: animatedIn ? 1 : 0,
                    strokeDasharray: animatedIn ? 'none' : '2000',
                    strokeDashoffset: animatedIn ? '0' : '2000',
                  }}
                />

                {/* Cambodia outline (simplified) */}
                <path
                  d={`M120,280 L145,275 L170,278 L195,282 L215,290
                      L228,300 L235,315 L240,330 L238,345 L230,358
                      L218,365 L200,370 L180,368 L160,362 L142,355
                      L128,345 L118,332 L112,318 L110,305 L112,292
                      L120,280`}
                  fill="rgba(200,161,90,0.04)"
                  stroke="rgba(200,161,90,0.15)"
                  strokeWidth="1"
                  className="transition-all duration-1000"
                  style={{
                    opacity: animatedIn ? 1 : 0,
                    transitionDelay: '0.3s',
                  }}
                />

                {/* Country labels */}
                <text
                  x="258"
                  y="185"
                  fill="rgba(200,161,90,0.12)"
                  fontSize="14"
                  fontWeight="900"
                  letterSpacing="0.15em"
                  textAnchor="middle"
                  className="uppercase transition-opacity duration-1000"
                  style={{ opacity: animatedIn ? 1 : 0, transitionDelay: '0.5s' }}
                >
                  VIETNAM
                </text>
                <text
                  x="170"
                  y="335"
                  fill="rgba(200,161,90,0.1)"
                  fontSize="11"
                  fontWeight="900"
                  letterSpacing="0.15em"
                  textAnchor="middle"
                  className="uppercase transition-opacity duration-1000"
                  style={{ opacity: animatedIn ? 1 : 0, transitionDelay: '0.8s' }}
                >
                  CAMBOYA
                </text>

                {/* Route lines */}
                {route.map(([fromIdx, toIdx], i) => {
                  const from = cities[fromIdx]
                  const to = cities[toIdx]
                  const isFlight = flights.has(i)
                  const lineKey = `route-${i}`

                  // Skip return routes for display simplicity
                  if (i === 1) return null

                  return (
                    <line
                      key={lineKey}
                      x1={from.x}
                      y1={from.y}
                      x2={to.x}
                      y2={to.y}
                      stroke="rgba(200,161,90,0.3)"
                      strokeWidth={isFlight ? '1' : '1.5'}
                      strokeDasharray={isFlight ? '4 4' : '2 4'}
                      className="transition-all duration-700"
                      style={{
                        opacity: animatedIn ? 1 : 0,
                        transitionDelay: `${0.5 + i * 0.2}s`,
                      }}
                    />
                  )
                })}

                {/* Flight icons */}
                {[2, 5].map((routeIdx) => {
                  const [fromIdx, toIdx] = route[routeIdx]
                  const from = cities[fromIdx]
                  const to = cities[toIdx]
                  const mx = (from.x + to.x) / 2
                  const my = (from.y + to.y) / 2

                  return (
                    <g
                      key={`flight-${routeIdx}`}
                      className="transition-opacity duration-500"
                      style={{
                        opacity: animatedIn ? 0.5 : 0,
                        transitionDelay: `${1 + routeIdx * 0.2}s`,
                      }}
                    >
                      <text
                        x={mx}
                        y={my - 4}
                        fill="var(--color-accent)"
                        fontSize="8"
                        textAnchor="middle"
                        letterSpacing="0.1em"
                      >
                        VUELO
                      </text>
                    </g>
                  )
                })}

                {/* City markers */}
                {cities.map((city, i) => {
                  const isActive = activeCity === city.id
                  const isVisible = visibleCities.has(i)

                  return (
                    <g
                      key={city.id}
                      className="cursor-pointer"
                      onClick={() => setActiveCity(isActive ? null : city.id)}
                      onMouseEnter={() => setActiveCity(city.id)}
                      onMouseLeave={() => setActiveCity(null)}
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'scale(1)' : 'scale(0)',
                        transformOrigin: `${city.x}px ${city.y}px`,
                        transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      }}
                    >
                      {/* Pulse ring */}
                      <circle
                        cx={city.x}
                        cy={city.y}
                        r={isActive ? 18 : 12}
                        fill="none"
                        stroke="var(--color-accent)"
                        strokeWidth="0.5"
                        className="transition-all duration-500"
                        style={{
                          opacity: isActive ? 0.6 : 0.2,
                        }}
                      >
                        {isActive && (
                          <animate
                            attributeName="r"
                            values="18;24;18"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        )}
                        {isActive && (
                          <animate
                            attributeName="opacity"
                            values="0.6;0.1;0.6"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        )}
                      </circle>

                      {/* Glow */}
                      <circle
                        cx={city.x}
                        cy={city.y}
                        r={isActive ? 10 : 6}
                        fill="var(--color-accent)"
                        className="transition-all duration-300"
                        style={{
                          filter: isActive ? 'blur(6px)' : 'blur(3px)',
                          opacity: isActive ? 0.5 : 0.25,
                        }}
                      />

                      {/* Dot */}
                      <circle
                        cx={city.x}
                        cy={city.y}
                        r={isActive ? 5 : 3.5}
                        fill="var(--color-accent)"
                        className="transition-all duration-300"
                      />

                      {/* Step number */}
                      <circle
                        cx={city.x + (i < 3 ? -14 : 14)}
                        cy={city.y}
                        r="7"
                        fill="var(--color-bg)"
                        stroke="rgba(200,161,90,0.3)"
                        strokeWidth="0.5"
                      />
                      <text
                        x={city.x + (i < 3 ? -14 : 14)}
                        y={city.y + 3}
                        fill="var(--color-accent)"
                        fontSize="7"
                        fontWeight="700"
                        textAnchor="middle"
                        fontFamily="monospace"
                      >
                        {i + 1}
                      </text>

                      {/* City label */}
                      <text
                        x={city.x}
                        y={city.y - 14}
                        fill={isActive ? 'var(--color-accent)' : 'var(--color-text)'}
                        fontSize={isActive ? '9' : '7.5'}
                        fontWeight="700"
                        textAnchor="middle"
                        letterSpacing="0.08em"
                        className="uppercase transition-all duration-300"
                        style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}
                      >
                        {city.name}
                      </text>
                    </g>
                  )
                })}
              </svg>
            </div>
          </div>

          {/* City details sidebar */}
          <div className="lg:col-span-5">
            {/* Active city detail card — hidden on mobile when no city selected */}
            <div
              className={`border border-[rgba(200,161,90,0.2)] p-6 md:p-8 mb-6 transition-all duration-500 relative overflow-hidden ${activeCityData ? '' : 'hidden lg:block'}`}
              style={{
                background: activeCityData
                  ? 'rgba(200,161,90,0.05)'
                  : 'rgba(30,30,30,0.4)',
                minHeight: activeCityData ? undefined : '180px',
              }}
            >
              {activeCityData && (
                <div
                  className="absolute top-0 right-0 w-[150px] h-[150px] pointer-events-none"
                  style={{ background: 'var(--color-accent)', filter: 'blur(60px)', opacity: 0.06 }}
                />
              )}

              {activeCityData ? (
                <div className="relative z-10">
                  <span className="block text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] mb-2">
                    {activeCityData.days}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold uppercase text-[var(--color-text)] mb-1">
                    {activeCityData.name}
                  </h3>
                  <span className="block text-xs tracking-[0.15em] uppercase text-[var(--color-secondary)] mb-4">
                    {activeCityData.country}
                  </span>
                  <p className="text-sm md:text-base leading-relaxed text-[var(--color-secondary)]">
                    {activeCityData.description}
                  </p>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full min-h-[140px]">
                  <p className="text-sm text-[var(--color-secondary)] uppercase tracking-[0.15em] text-center">
                    Toca un destino en el mapa
                    <br />
                    <span className="text-xs opacity-60 normal-case tracking-normal">
                      para ver los detalles
                    </span>
                  </p>
                </div>
              )}
            </div>

            {/* City list — expandable on mobile */}
            <div className="space-y-0">
              {cities.map((city, i) => {
                const isActive = activeCity === city.id
                return (
                  <div key={city.id}>
                    <button
                      className="w-full text-left flex items-center gap-4 py-4 px-4 transition-all duration-300 cursor-pointer border-b border-[rgba(200,161,90,0.08)]"
                      style={{
                        background: isActive ? 'rgba(200,161,90,0.08)' : 'transparent',
                        borderLeft: isActive
                          ? '2px solid var(--color-accent)'
                          : '2px solid transparent',
                      }}
                      onClick={() => setActiveCity(isActive ? null : city.id)}
                      onMouseEnter={() => setActiveCity(city.id)}
                      onMouseLeave={() => setActiveCity(null)}
                    >
                      <span
                        className="flex items-center justify-center w-7 h-7 text-[11px] font-bold font-mono shrink-0 transition-all duration-300"
                        style={{
                          border: '1px solid',
                          borderColor: isActive ? 'var(--color-accent)' : 'rgba(200,161,90,0.2)',
                          background: isActive ? 'var(--color-accent)' : 'transparent',
                          color: isActive ? 'var(--color-bg)' : 'var(--color-secondary)',
                        }}
                      >
                        {i + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <span
                          className="block text-sm font-bold uppercase tracking-wide transition-colors duration-300"
                          style={{
                            color: isActive ? 'var(--color-accent)' : 'var(--color-text)',
                          }}
                        >
                          {city.name}
                        </span>
                        <span className="block text-[11px] text-[var(--color-secondary)] uppercase tracking-wide mt-0.5">
                          {city.days}
                        </span>
                      </div>
                      <span
                        className="text-[10px] uppercase tracking-[0.1em] shrink-0 transition-colors duration-300"
                        style={{
                          color: isActive ? 'var(--color-accent)' : 'var(--color-secondary)',
                          opacity: 0.7,
                        }}
                      >
                        {city.country}
                      </span>
                    </button>
                    {/* Inline description on mobile when tapped */}
                    {isActive && (
                      <div
                        className="lg:hidden px-4 pb-4 pl-[60px]"
                        style={{ animation: 'expandContent 0.3s ease-out forwards' }}
                      >
                        <p className="text-sm md:text-base leading-relaxed text-[var(--color-secondary)]">
                          {city.description}
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
