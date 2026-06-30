/**
 * "¿Por qué viajar con Asia Lo Posible?" — grid de valores (reality-grid del sistema de diseño).
 */
const ITEMS = [
  {
    title: 'De latinos para latinos',
    body: 'Entendemos tu forma de viajar, tus gustos y lo que buscas en una experiencia inolvidable. Hablamos tu mismo idioma (literal y culturalmente).',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </>
    ),
  },
  {
    title: '¡No esperes por nadie más!',
    body: 'Si viajas solo o sola, no tienes que quedarte con las ganas. Súmate a nuestros viajes en grupo, comparte la aventura con personas que buscan lo mismo y regresa a casa con amigos nuevos.',
    icon: (
      <>
        <circle cx="9" cy="8" r="3.2" />
        <circle cx="17" cy="9" r="2.6" />
        <path d="M3.5 19c0-3 2.5-4.6 5.5-4.6S14.5 16 14.5 19M15 14.6c2.6.1 4.5 1.7 4.5 4.4" />
      </>
    ),
  },
  {
    title: '100% en tu idioma',
    body: 'Olvídate de las barreras de comunicación. Toda la planificación, el acompañamiento y las experiencias son totalmente en español.',
    icon: (
      <>
        <path d="M21 11.5a8.5 8.5 0 0 1-12.3 7.6L3 21l1.9-5.7A8.5 8.5 0 1 1 21 11.5z" />
        <path d="M8.5 11h7M8.5 14h4" />
      </>
    ),
  },
  {
    title: 'Locales en el destino',
    body: (
      <>
        No te lo contamos desde lejos: <strong className="text-accent">vivimos en Da Nang, Vietnam</strong>. Estamos en el mismo huso horario que tu viaje, conocemos los secretos locales y te apoyamos en tiempo real.
      </>
    ),
    icon: (
      <>
        <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.6" />
      </>
    ),
  },
  {
    title: 'Experiencias curadas y auténticas',
    body: 'No vendemos paquetes en masa. Cada ruta, hotel y actividad ha sido seleccionada y probada de primera mano por nosotros para garantizar calidad y seguridad.',
    icon: <path d="M12 3l2.4 5.3L20 9l-4 4 1 6-5-2.8L7 19l1-6-4-4 5.6-.7L12 3z" />,
  },
  {
    title: 'Acompañamiento de principio a fin',
    body: 'Tu viaje empieza desde el primer clic. Atención personalizada y asesoramiento experto desde que empiezas a planificar hasta que regresas a casa.',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" />
      </>
    ),
  },
  {
    title: 'Planes de pago a tu medida',
    body: 'Queremos hacer tu viaje posible: contamos con opciones de pago flexibles para que financies tu aventura de forma cómoda y sin estrés.',
    icon: (
      <>
        <rect x="2.5" y="5.5" width="19" height="13" rx="2.2" />
        <path d="M2.5 9.5h19M6 14.5h4" />
      </>
    ),
  },
]

export default function PorQue() {
  return (
    <section className="section" id="por-que">
      <div className="container">
        <div className="section-head center reveal">
          <h2 className="h2">¿Por qué viajar con Asia Lo Posible?</h2>
          <p className="lead">
            Moverse por Asia es una aventura increíble, pero planificarla no tiene por qué ser un
            dolor de cabeza. Diseñamos experiencias pensadas exclusivamente para ti, combinando la
            magia de Oriente con la calidez de nuestra cultura.
          </p>
        </div>
        <div className="reality-grid">
          {ITEMS.map((it) => (
            <div className="reality-item reveal" key={it.title}>
              <span className="rico">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {it.icon}
                </svg>
              </span>
              <div>
                <b>{it.title}</b>
                <p>{it.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
