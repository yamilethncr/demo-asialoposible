import Contacto from './Contacto'

/**
 * Cuerpo de la money page "Viaje a Vietnam y Camboya". Port fiel del diseño de Yamileth
 * (page-hero + split + sticky price card + CTA), con la sección de Contacto (ContactForm real)
 * añadida para preservar la captura de leads. Usado por /viajes/vietnam-camboya e /inscribete.
 */

const ITINERARY = [
  { tag: 'Días 1–4 · Vietnam', title: 'Hanói, la capital con alma', body: 'Casco antiguo, templo de la Literatura, café vietnamita y el caos hermoso de sus calles. Primer contacto con Asia, acompañado.' },
  { tag: 'Día 5 · Vietnam', title: 'Crucero por la Bahía de Halong', body: 'Navegación entre miles de islotes de piedra caliza a bordo de un crucero de lujo. Kayak, cuevas y una de las puestas de sol más icónicas del planeta.' },
  { tag: 'Día 6–7 · Vietnam', title: 'Hue imperial', body: 'La antigua capital imperial: la Ciudadela, las tumbas reales y la historia viva del país a orillas del Río de los Perfumes.' },
  { tag: 'Día 8 · Vietnam', title: 'Da Nang & Ba Na Hills', body: 'El famoso Puente Dorado sostenido por dos manos gigantes y sesión de fotografía profesional incluida.' },
  { tag: 'Días 9–10 · Vietnam', title: 'Hoi An, ciudad de los faroles', body: 'Casco antiguo Patrimonio de la Humanidad, faroles de colores al anochecer y una clase de cocina vietnamita para llevarte Asia en el paladar.' },
  { tag: 'Días 11–14 · Camboya', title: 'Siem Reap & Angkor', body: 'Amanecer en Angkor Wat, los rostros de Bayón, el templo-jungla de Ta Prohm, Banteay Srei y la vida flotante del Lago Tonle Sap.' },
]

const HOTELS = [
  { img: '/hotels/anatole-hanoi.jpg', place: 'Hanói', desc: 'Hotel boutique en el centro' },
  { img: '/hotels/indochine-cruise.jpg', place: 'Bahía de Halong', desc: 'Crucero de lujo Indochine' },
  { img: '/hotels/white-lotus-hue.jpg', place: 'Hue', desc: 'White Lotus, vistas al río' },
  { img: '/hotels/alacarte-danang.jpg', place: 'Da Nang', desc: 'À La Carte, frente al mar' },
  { img: '/hotels/hoian-delicacy.jpg', place: 'Hoi An', desc: 'Delicacy, piscina con encanto' },
  { img: '/hotels/metta-siemreap.jpg', place: 'Siem Reap', desc: 'Metta Residence, jardín y piscina' },
]

const INCLUDED = [
  'Hospedaje en hoteles 4-5★ seleccionados',
  'Crucero de lujo en la Bahía de Halong',
  'Todos los desayunos + algunas comidas y cenas',
  'Vuelos internos en Asia',
  'Transporte privado climatizado',
  'Entradas a los sitios del itinerario',
  'Guía local en español en cada destino',
  'e-SIM con datos para todo el viaje',
  'Sesión de fotografía profesional en Da Nang',
  'Kit de bienvenida y souvenirs',
]

const NOT_INCLUDED = [
  'Vuelos internacionales hacia/desde Asia',
  'Visados (~$70 USD Vietnam + ~$30 USD Camboya)',
  'Seguro de viaje',
  'Comidas no indicadas en el itinerario',
  'Gastos personales y propinas',
]

export default function VietnamCamboyaTrip() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/hotels/indochine-cruise.jpg" alt="Crucero de lujo en la Bahía de Halong, Vietnam" />
        <div className="container">
          <p className="breadcrumb">
            <a href="/">Inicio</a> › <a href="/#viajes">Viajes</a> › Vietnam &amp; Camboya
          </p>
          <p className="eyebrow">Viaje conmigo · Salida grupal en español</p>
          <h1 className="display" style={{ fontSize: 'clamp(2.4rem,6vw,4.4rem)' }}>
            Viaje a Vietnam y Camboya en español — 14 días
          </h1>
          <div className="tag-row">
            <span className="chip">14 días</span>
            <span className="chip">6 destinos</span>
            <span className="chip">Grupo máx. 10</span>
            <span className="chip">Hoteles 4–5★</span>
            <span className="chip">Crucero Halong</span>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="section">
        <div className="container split">
          <div>
            <div className="prose reveal">
              <p className="lead" style={{ color: 'var(--color-text)' }}>
                Catorce días por lo mejor del Sudeste Asiático, en grupos pequeños y 100% en
                español. De los callejones de Hanói al amanecer en Angkor Wat, con todo resuelto
                para que tú solo te dediques a vivirlo.
              </p>
              <p>
                Este es el viaje que yo le haría a alguien que quiero: hoteles seleccionados uno a
                uno, un crucero de lujo entre los islotes de la Bahía de Halong, clase de cocina en
                Hoi An y guía local en español en cada parada. Nada de improvisar — nosotros nos
                encargamos de la logística, tú de los recuerdos.
              </p>

              <h2>Itinerario día a día por Vietnam y Camboya</h2>
              <div className="itinerary">
                {ITINERARY.map((d) => (
                  <div className="itin-day reveal" key={d.title}>
                    <span className="daytag">{d.tag}</span>
                    <h4>{d.title}</h4>
                    <p>{d.body}</p>
                  </div>
                ))}
              </div>

              <h2>Dónde dormirás — hoteles en Vietnam y Camboya</h2>
              <p>
                Hoteles 4-5★ seleccionados uno a uno en cada parada del itinerario. Estos son
                algunos de los alojamientos del viaje:
              </p>
              <div className="hotel-grid">
                {HOTELS.map((h) => (
                  <figure className="hotel" key={h.place}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={h.img} alt={`Hotel en ${h.place}`} loading="lazy" />
                    <figcaption>
                      <b>{h.place}</b>
                      <span>{h.desc}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>

              <h2>Qué incluye — todo incluido</h2>
              <div className="incl-grid">
                <div>
                  <h3>Sí incluye ✓</h3>
                  <ul>
                    {INCLUDED.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>No incluye</h3>
                  <ul>
                    {NOT_INCLUDED.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                  <div className="callout">
                    <p>
                      Te ayudamos con todo: vuelos, visados y seguro. Aunque no estén incluidos, no
                      te dejamos solo en el proceso.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar precio */}
          <aside>
            <div className="sticky-card reveal">
              <p className="eyebrow">Desde</p>
              <p className="price">
                $3,200 <small>USD / persona</small>
              </p>
              <ul>
                <li>Habitación compartida (base)</li>
                <li>Suplemento individual: +$655 USD</li>
                <li>Pago de contado o en 4 cuotas</li>
              </ul>
              <div className="tag-row">
                <span className="chip">Ago 2026 · 4 cupos</span>
                <span className="chip">Abr 2027 · 8 cupos</span>
              </div>
              <a
                href="https://wa.me/84934949756?text=Hola%20Katherine,%20quiero%20reservar%20mi%20cupo%20para%20Vietnam%20y%20Camboya"
                target="_blank"
                rel="noopener"
                className="btn btn--lg"
                style={{ width: '100%', justifyContent: 'center', marginTop: '.4rem' }}
              >
                Reservar mi cupo
              </a>
              <a
                href="#contacto"
                className="btn btn--ghost"
                style={{ width: '100%', justifyContent: 'center', marginTop: '.6rem' }}
              >
                Quiero más información
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Contacto / captura de leads */}
      <Contacto />

      {/* CTA final → viaje privado */}
      <section className="section section--cream">
        <div className="container section-head center reveal" style={{ marginBottom: 0 }}>
          <p className="eyebrow">Tus fechas. Tu grupo. Tu ritmo.</p>
          <h2 className="h2">¿Prefieres este viaje en privado?</h2>
          <p className="lead">
            Si quieres viajar solo con tu grupo y en tus propias fechas, lo diseñamos a tu medida
            desde 5 personas.
          </p>
          <a href="/viajes-privados" className="btn btn--lg" style={{ marginTop: '1.4rem' }}>
            Ver viaje privado
          </a>
        </div>
      </section>
    </>
  )
}
