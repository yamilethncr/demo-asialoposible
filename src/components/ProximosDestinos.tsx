'use client'

import { useState, useEffect } from 'react'

const SLIDES = [
  { src: '/img/festival-1.jpg', alt: 'Festival de las Linternas — Tailandia' },
  { src: '/img/festival-2.jpg', alt: '20 días, 3 países: una ruta inolvidable' },
  { src: '/img/festival-3.jpg', alt: 'Un viaje diseñado para todos' },
  { src: '/img/festival-4.jpg', alt: 'El viaje de tu vida te espera' },
]

const ITEMS = [
  {
    title: 'Noviembre · Tailandia',
    sub: 'Festival de las Linternas',
    tag: 'Salida confirmada · Noviembre',
    body: (
      <>
        Vive el mágico <strong>Festival de las Linternas</strong> en Tailandia. Miles de farolillos
        iluminando el cielo de Chiang Mai, templos dorados, naturaleza y la calidez tailandesa — en
        grupo reducido y 100% en español.
      </>
    ),
    cta: { label: 'Ver presentación →', href: 'https://festival-linternas-2026-437b8nw.gamma.site' },
  },
  {
    title: 'Vietnam & Camboya — ruta completa',
    sub: '14 días · 7 destinos',
    tag: 'Próxima opción',
    body: 'La gran ruta por lo mejor del Sudeste Asiático: Hanói, la Bahía de Halong, Hue, Hoi An, Saigón y el delta del Mekong, para cerrar en los templos de Angkor (Siem Reap). Cultura, naturaleza e historia en un solo viaje.',
    cta: {
      label: 'Quiero info →',
      href: 'https://wa.me/84934949756?text=Hola,%20quiero%20info%20sobre%20la%20ruta%20completa%20de%20Vietnam%20y%20Camboya',
    },
  },
  {
    title: 'Esencias: Vietnam, Camboya y Tailandia',
    sub: '15 días · 3 países',
    tag: 'Próxima opción',
    body: 'Tres países en un solo gran viaje: lo mejor de Vietnam (Hanói, Halong, Hue, Hoi An, Saigón), los templos de Angkor en Camboya y el bullicio vibrante de Bangkok en Tailandia. La esencia del Sudeste Asiático.',
    cta: {
      label: 'Quiero info →',
      href: 'https://wa.me/84934949756?text=Hola,%20quiero%20info%20sobre%20la%20ruta%20Vietnam-Camboya-Tailandia',
    },
  },
  {
    title: 'China: paisajes y tradiciones',
    sub: '14 días · de Pekín a Shanghái',
    tag: 'Próxima opción',
    body: "China de norte a sur: la Gran Muralla en Pekín, los Guerreros de Terracota en Xi'an, los pandas gigantes de Chengdú, los paisajes de ensueño del Río Li en Guilin y el skyline futurista de Shanghái.",
    cta: {
      label: 'Quiero info →',
      href: 'https://wa.me/84934949756?text=Hola,%20quiero%20info%20sobre%20el%20tour%20de%20China',
    },
  },
]

export default function ProximosDestinos() {
  const [active, setActive] = useState(0) // slider
  const [open, setOpen] = useState(0) // accordion

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % SLIDES.length), 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <div className="section-head reveal" id="proximos-destinos" style={{ marginTop: '4rem' }}>
        <h2 className="h2">Próximos destinos</h2>
        <p className="lead">
          Toca cada destino para ver el resumen. Vamos sumando nuevas rutas grupales — escríbenos
          para reservar plaza o recibir todos los detalles.
        </p>
      </div>
      <div className="next-dest-wrap reveal">
        <figure className="about-photo about-slider">
          {SLIDES.map((s, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={s.src}
              src={s.src}
              className={`slide${i === active ? ' active' : ''}`}
              alt={s.alt}
              loading="lazy"
            />
          ))}
        </figure>
        <div className="accordion">
          {ITEMS.map((it, i) => {
            const isOpen = open === i
            return (
              <div className={`acc-item${isOpen ? ' open' : ''}`} key={it.title}>
                <button
                  className="acc-head"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`acc-panel-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>
                    <b>{it.title}</b>
                    <small>{it.sub}</small>
                  </span>
                  <svg className="acc-ico" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div className="acc-body" id={`acc-panel-${i}`} role="region" inert={!isOpen}>
                  <div className="acc-body-inner">
                    <span className="acc-tag">{it.tag}</span>
                    <p>{it.body}</p>
                    <a href={it.cta.href} target="_blank" rel="noopener" className="btn">
                      {it.cta.label}
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
