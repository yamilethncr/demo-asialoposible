import type { Metadata } from 'next'
import PromoBanner from '@/components/PromoBanner'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AboutSlider from '@/components/AboutSlider'

export const metadata: Metadata = {
  title: 'Sobre nosotros | Asia Lo Posible — viajes a Asia en español',
  description:
    'Somos dos venezolanos viviendo en Vietnam. Creamos Asia Lo Posible para darte la guía amable y actualizada que nos hubiese encantado tener: viajes guiados, asesorías y rutas listas, en tu idioma.',
  openGraph: {
    title: 'Sobre nosotros | Asia Lo Posible',
    description:
      'Dos venezolanos viviendo en Vietnam te guían para que vivas Asia sin estrés y en tu idioma.',
    url: 'https://asialoposible.net/sobre-nosotros',
    siteName: 'Asia Lo Posible',
    locale: 'es_LA',
    type: 'website',
    images: [{ url: '/og-asialoposible.jpg', width: 1200, height: 630, alt: 'Sobre nosotros — Asia Lo Posible' }],
  },
  alternates: { canonical: '/sobre-nosotros' },
}

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Sobre nosotros — Asia Lo Posible',
  about: {
    '@type': 'Organization',
    name: 'Asia Lo Posible',
    founder: { '@type': 'Person', name: 'Katherine Molinares' },
  },
  url: 'https://asialoposible.net/sobre-nosotros',
}

const WAYS = [
  {
    num: '01',
    title: 'Viajes de Autor: recorre Asia con nosotros',
    body: 'Nuestras rutas estrella. Te acompañamos en persona para vivir Asia desde adentro, cuidando cada detalle.',
    chip: 'Boutique · máx. 12 personas',
  },
  {
    num: '02',
    title: 'Asia en Grupo, con el respaldo de nuestra red',
    body: 'Viaja acompañado por coordinadores y guías de total confianza que hablan tu idioma. Tú solo disfruta; nosotros coordinamos desde aquí.',
    chip: 'Boutique · máx. 12 personas',
  },
  {
    num: '03',
    title: 'Sesión 1-a-1: tu hora de asesoría virtual',
    body: 'Tómate un café virtual con nosotros. Resolvemos tus dudas, revisamos tus miedos y ordenamos tu ruta para cualquier país del Sudeste Asiático, Corea y Japón: visados, itinerario, formas de pago y más.',
    chip: 'Asesoría online',
  },
  {
    num: '04',
    title: 'Itinerarios listos, como nos habría gustado tenerlos',
    body: 'Rutas optimizadas paso a paso, basadas en nuestra experiencia real viviendo aquí. Olvídate de perder el tiempo investigando en blogs.',
    chip: 'Rutas autoguiadas',
  },
]

const REALITY = [
  { b: 'Te ahorramos más de 40 horas de investigación', p: 'Deja de saltar de blog en blog y de armar itinerarios imposibles. Nosotros ya hicimos el trabajo pesado por ti.' },
  { b: 'Información en tiempo real', p: 'En internet todo cambia muy rápido: líneas de bus que ya no existen, templos en renovación, nuevas visas. Viviendo aquí, sabemos qué funciona hoy, no hace tres años.' },
  { b: 'Moverse por Asia no es como viajar por Europa', p: 'Las apps locales a veces no aceptan tarjetas extranjeras y los horarios cambian sin aviso. Te decimos exactamente cómo moverte sin quedar varado.' },
  { b: 'Ubicaciones reales, no fotos de Instagram', p: 'Un hotel puede verse idílico en Booking pero estar en una zona ruidosa o incomunicada. Te aseguramos que donde te hospedes sea cómodo y seguro.' },
  { b: 'El traductor de Google tiene un límite', p: 'Pedir comida es fácil; resolver un malentendido en la estación o explicar una alergia médica es otra historia. Te damos el respaldo de guías que hablan tu idioma.' },
  { b: 'Cero "impuesto al turista" (evita estafas)', p: 'Te enseñamos a esquivar los cobros excesivos en taxis, mercados y agencias locales. Viajarás pagando lo justo.' },
  { b: 'Filtramos el "postureo" de las redes', p: 'Te decimos qué atracciones realmente valen la pena y cuáles son solo una trampa para turistas que te hará perder el día.' },
  { b: 'Comer comida callejera sin miedo', p: 'Te enseñamos a disfrutar la verdadera gastronomía asiática donde comen los locales, cuidando tu salud.' },
]

export default function SobreNosotrosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <PromoBanner />
      <Navbar />

      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/hotels/alacarte-danang.jpg" alt="Atardecer frente al mar en Asia" />
        <div className="container">
          <p className="breadcrumb">
            <a href="/">Inicio</a> › Sobre nosotros
          </p>
          <p className="eyebrow">Sobre nosotros</p>
          <h1 className="display" style={{ fontSize: 'clamp(2.3rem,5.5vw,4rem)' }}>
            Asia en tu idioma, <span className="text-accent serif-i">a tu manera</span>
          </h1>
          <p className="lead" style={{ maxWidth: '620px', color: '#fff' }}>
            Viajes guiados, asesorías y rutas a tu ritmo. Planificar un viaje a Asia parece fácil,
            hasta que te pones a hacerlo. Somos dos venezolanos viviendo en Vietnam y te guiamos en
            todo para que disfrutes sin estrés y en tu idioma.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-wrap">
          <AboutSlider
            className="reveal"
            images={[
              { src: '/img/nosotros-1.jpg', alt: 'Katherine y David recorriendo Asia' },
              { src: '/img/nosotros-2.jpg', alt: 'Katherine y David frente a un templo de Asia' },
            ]}
          />
          <div className="reveal">
            <p className="eyebrow">Nuestra historia</p>
            <h2 className="h2">¡Hola! Somos dos venezolanos enamorados de Asia</h2>
            <p style={{ margin: '1.2rem 0', color: 'rgba(255,255,255,.85)' }}>
              Hace más de dos años decidimos hacer de Vietnam nuestro hogar. Cuando empezamos a
              buscar información en internet para venir a este lado del mundo, nos topamos con una
              pared:{' '}
              <strong>
                en español no había casi nada, y lo poco que encontrábamos estaba totalmente
                disperso, desactualizado y regado por mil páginas.
              </strong>
            </p>
            <p style={{ margin: '1.2rem 0', color: 'rgba(255,255,255,.85)' }}>
              Armar el rompecabezas de transportes, visas y rutas nos tomó meses de frustración. Por
              eso creamos <strong className="text-accent">Asia Lo Posible</strong>. Nosotros ya
              hicimos el trabajo pesado por ti: compilamos, ordenamos y actualizamos toda la
              información real del terreno.
            </p>
            <p style={{ margin: '1.2rem 0', color: 'rgba(255,255,255,.85)' }}>
              Queremos darte la guía amable y sencilla de entender que a nosotros nos hubiese
              encantado tener cuando empezamos, para que tú solo te preocupes por disfrutar.
            </p>
            <a href="https://instagram.com/kathmolinares" target="_blank" rel="noopener" className="btn btn--ghost">
              Síguenos en @kathmolinares
            </a>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-head center reveal">
            <p className="eyebrow">Estilos de viaje</p>
            <h2 className="h2">Elige tu forma de viajar</h2>
            <p className="lead">
              Cuatro maneras de vivir Asia con nosotros — desde acompañarte en persona hasta darte
              la ruta lista para que viajes a tu aire.
            </p>
          </div>
          <div className="way-grid">
            {WAYS.map((w) => (
              <article className="way-card reveal" key={w.num}>
                <span className="num">{w.num}</span>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
                <span className="chip" style={{ marginTop: '1rem' }}>
                  {w.chip}
                </span>
              </article>
            ))}
          </div>
          <div className="center reveal" style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <a href="/#contacto" className="btn btn--lg">
              Quiero más información
            </a>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Por qué con nosotros</p>
            <h2 className="h2">La realidad de viajar a Asia</h2>
            <p className="lead">
              Lo que nadie te cuenta — y en lo que te ahorramos tiempo, dinero y dolores de cabeza.
            </p>
          </div>
          <div className="reality-grid">
            {REALITY.map((r) => (
              <div className="reality-item reveal" key={r.b}>
                <span className="rico">✦</span>
                <div>
                  <b>{r.b}</b>
                  <p>{r.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Agenda</p>
            <h2 className="h2">Próximas salidas</h2>
          </div>
          <div className="next-card reveal">
            <div>
              <h3 style={{ fontSize: '1.7rem' }}>Vietnam &amp; Camboya</h3>
              <p style={{ color: 'var(--color-secondary)', marginTop: '.3rem' }}>
                14 días · 6 destinos · grupo boutique en español
              </p>
              <div className="dates" style={{ marginTop: '1.2rem' }}>
                <div className="date">
                  <b>Agosto 2026</b>
                  <span>4 cupos disponibles</span>
                </div>
                <div className="date">
                  <b>Abril 2027</b>
                  <span>8 cupos disponibles</span>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.7rem' }}>
              <a href="/viajes/vietnam-camboya" className="btn btn--lg">
                Ver itinerario y precios
              </a>
              <a
                href="https://wa.me/84934949756?text=Hola,%20quiero%20info%20sobre%20las%20pr%C3%B3ximas%20salidas"
                target="_blank"
                rel="noopener"
                className="btn btn--ghost"
                style={{ justifyContent: 'center' }}
              >
                Reservar mi cupo
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
