import ProximosDestinos from './ProximosDestinos'

/**
 * "Tours disponibles" — salidas confirmadas (sección cream) + Próximos destinos (acordeón).
 * El H2 lleva la keyword protegida "Vietnam y Camboya".
 */
export default function ToursDisponibles() {
  return (
    <section className="section section--cream" id="tours">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Tours disponibles</p>
          <h2 className="h2">Viajes a Vietnam y Camboya disponibles ahora mismo</h2>
          <p className="lead">
            Salidas confirmadas y listas para reservar. Haz clic para ver el itinerario completo,
            día a día.
          </p>
        </div>

        <div className="trips">
          <a className="trip-card reveal" href="/viajes/vietnam-camboya">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hotels/indochine-cruise.jpg"
              alt="Itinerario Vietnam y Camboya — crucero por la Bahía de Halong"
              loading="lazy"
            />
            <div className="trip-card__body">
              <span className="trip-card__tag">Viajes de Autor · Grupal</span>
              <h3>Vietnam &amp; Camboya</h3>
              <p>
                14 días · 6 destinos. Hanói, crucero por la Bahía de Halong, Hue, Da Nang, Hoi An y
                los templos de Angkor. Todo en español.
              </p>
              <div className="trip-card__foot">
                <span className="trip-card__price">
                  <small>Salidas</small>
                  <b>Ago 2026 · Abr 2027</b>
                </span>
                <span className="link-arrow">
                  Ver itinerario <span>→</span>
                </span>
              </div>
            </div>
          </a>

          <a className="trip-card reveal" href="/viajes-privados">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hotels/alacarte-danang.jpg"
              alt="Viaje privado a medida por Asia"
              loading="lazy"
            />
            <div className="trip-card__body">
              <span className="trip-card__tag">A medida · Privado</span>
              <h3>Viaje Privado</h3>
              <p>
                Tu grupo, tus fechas, tu ritmo. Diseñamos la ruta a medida desde 5 personas, con
                todo el respaldo del negocio.
              </p>
              <div className="trip-card__foot">
                <span className="trip-card__price">
                  <small>Desde</small>
                  <b>5 personas</b>
                </span>
                <span className="link-arrow">
                  Diseñar mi viaje <span>→</span>
                </span>
              </div>
            </div>
          </a>
        </div>

        <ProximosDestinos />
      </div>
    </section>
  )
}
