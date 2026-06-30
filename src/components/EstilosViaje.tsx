/**
 * "Estilos de viaje" — 4 modalidades (sección cream). Concepto navegacional:
 * enlaza a la money page, contacto y WhatsApp. Las páginas dedicadas por modalidad
 * se difieren a una fase posterior (ver plan).
 */
const SESION_WA =
  'https://wa.me/84934949756?text=Hola,%20quiero%20agendar%20una%20sesi%C3%B3n%201-a-1%20de%20asesor%C3%ADa'

const CARDS = [
  {
    href: '/viajes/vietnam-camboya',
    img: '/img/modal-autor.jpg',
    alt: 'Viajeros recorriendo Angkor Wat, una ruta estrella de Asia',
    tag: 'En persona · con nosotros',
    title: 'Viajes de Autor',
    body: 'Recorre Asia con nosotros. Nuestras rutas estrella: te acompañamos en persona para vivir Asia desde adentro, cuidando cada detalle.',
    priceSmall: 'Boutique',
    priceBig: 'Máx. 12 p',
    cta: 'Ver más',
    external: false,
  },
  {
    href: '/#contacto',
    img: '/img/modal-grupo.jpg',
    alt: 'Grupo de viajeros en un palacio de Asia',
    tag: 'Con el respaldo de nuestra red',
    title: 'Asia en Grupo',
    body: 'Viaja acompañado por coordinadores y guías de total confianza que hablan tu idioma. Tú solo disfruta; nosotros coordinamos desde aquí.',
    priceSmall: 'Boutique',
    priceBig: 'Máx. 12 p',
    cta: 'Más info',
    external: false,
  },
  {
    href: SESION_WA,
    img: '/img/modal-sesion.jpg',
    alt: 'Café vietnamita para una sesión de asesoría virtual',
    tag: 'Asesoría virtual',
    title: 'Sesión 1-a-1',
    body: 'Tómate un café virtual con nosotros. Resolvemos tus dudas y ordenamos tu ruta para el Sudeste Asiático, Corea y Japón.',
    priceSmall: '1 hora',
    priceBig: 'Online',
    cta: 'Agendar',
    external: true,
  },
  {
    href: '/#contacto',
    img: '/img/modal-itinerarios.jpg',
    alt: 'Itinerarios listos para viajar a tu aire',
    tag: 'Rutas autoguiadas',
    title: 'Itinerarios Listos',
    body: 'Rutas optimizadas día por día, basadas en nuestra experiencia real viviendo en Asia. Descarga, viaja y disfruta.',
    priceSmall: 'Producto digital',
    priceBig: 'A tu aire',
    cta: 'Ver más',
    external: false,
  },
]

export default function EstilosViaje() {
  return (
    <section className="section section--cream" id="viajes">
      <div className="container">
        <div className="section-head center reveal">
          <p className="eyebrow">Estilos de viaje</p>
          <h2 className="h2">Elige cómo quieres vivir Asia</h2>
          <p className="lead">
            Cuatro formas de viajar con nosotros — desde acompañarte en persona hasta darte la ruta
            lista para que viajes a tu aire. Elige la que va contigo.
          </p>
        </div>

        <div className="trips">
          {CARDS.map((c) => (
            <a
              className="trip-card reveal"
              href={c.href}
              key={c.title}
              {...(c.external ? { target: '_blank', rel: 'noopener' } : {})}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.img} alt={c.alt} loading="lazy" />
              <div className="trip-card__body">
                <span className="trip-card__tag">{c.tag}</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <div className="trip-card__foot">
                  <span className="trip-card__price">
                    <small>{c.priceSmall}</small>
                    <b>{c.priceBig}</b>
                  </span>
                  <span className="link-arrow">
                    {c.cta} <span>→</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
