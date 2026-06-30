/**
 * "Sobre Katherine" — bio de la fundadora (sección de marca). Foto localizada en /img.
 */
export default function Host() {
  return (
    <section className="section" id="sobre-mi">
      <div className="container contact-wrap">
        <div
          className="reveal"
          style={{
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow)',
            aspectRatio: '4 / 5',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/katherine-molinares.jpg"
            alt="Katherine Molinares, fundadora de Asia Lo Posible"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="reveal">
          <p className="eyebrow">Detrás de la marca</p>
          <h2 className="h2">
            Hola, soy Katherine{' '}
            <svg className="emo" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7z" />
              <path d="M19 14l.6 1.9 1.9.6-1.9.6L19 19l-.6-1.9-1.9-.6z" />
            </svg>
          </h2>
          <p className="lead">
            Periodista venezolana, creadora de contenido y una mente inquieta que siempre ha creído
            que la vida se mide en experiencias. Mi historia con la organización y la logística no
            empezó ayer: soy la fundadora y sigo liderando On Stage Producciones en Venezuela, una
            empresa con la que creamos y coordinamos momentos inolvidables. Mi pasión por entender
            el mundo, sus historias y sus dinámicas me llevó a Madrid a hacer un máster, un paso
            clave que expandió mi visión global.
          </p>
          <p style={{ color: 'var(--color-secondary)', margin: '1rem 0' }}>
            Hoy, mi base está en Da Nang, Vietnam, donde vivo desde hace más de dos años. Pero mi
            brújula no se detiene aquí: he recorrido 10 países de Asia, sumergiéndome en sus
            culturas, probando sus sabores y construyendo una red de confianza sobre el terreno.
          </p>
          <p style={{ margin: '1rem 0' }}>
            <em className="text-accent">
              Asia Lo Posible nació de una idea simple: diseñar el viaje que yo le haría a alguien
              que quiero.
            </em>
          </p>
          <p style={{ color: 'var(--color-secondary)', margin: '1rem 0 1.6rem' }}>
            Al unir mi experiencia activa en producción, mi ojo periodístico y mi vida en el
            continente, el resultado es un viaje impecable. Conozco a los proveedores cara a cara,
            hablo tu idioma y entiendo lo que busca un viajero exigente. Por eso, cada hotel, cada
            ruta y cada detalle está pensado para que tú solo te dediques a vivir Asia, con la
            seguridad de que nada queda a la improvisación.
          </p>
          <a
            href="https://instagram.com/kathmolinares"
            target="_blank"
            rel="noopener"
            className="btn btn--ghost"
          >
            Sígueme en @kathmolinares
          </a>
        </div>
      </div>
    </section>
  )
}
