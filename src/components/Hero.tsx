/**
 * Hero del home (estilo agencia boutique). Video de fondo en loop (autoplay muted).
 * El H1 de marca es "Así se vive Asia."; la keyword principal vive en el meta title
 * y en la money page /viajes/vietnam-camboya. Ver guard SEO en el plan.
 */
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <video
          className="hero__video"
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          poster="/hotels/hoian-delicacy.jpg"
        >
          <source src="/video/hero-asia.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="container hero__inner">
        <p className="eyebrow">Viajes boutique a Asia · En español</p>
        <h1 className="display">Así se vive Asia.</h1>
        <p className="lead">
          Asia siempre estuvo en tu lista. Y no era falta de ganas — era no saber por dónde
          empezar. Nosotros lo resolvemos: tú solo viajas.
        </p>
        <div className="hero__cta">
          <a href="#viajes" className="btn btn--lg">Descubre tu viaje</a>
          <a
            href="https://wa.me/84934949756"
            className="btn btn--ghost btn--lg"
            target="_blank"
            rel="noopener"
          >
            Escríbenos al WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
