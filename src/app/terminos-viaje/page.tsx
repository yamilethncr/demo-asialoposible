import Link from 'next/link'

export const metadata = {
  title: 'Terminos y Condiciones del Viaje — Asia Lo Posible',
}

export default function TerminosViaje() {
  return (
    <main className="min-h-screen py-20 px-5 md:px-10">
      <div className="max-w-[800px] mx-auto">
        <Link href="/" className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] no-underline hover:underline mb-10 block">&larr; Volver al inicio</Link>
        <h1 className="text-2xl md:text-4xl font-bold mb-8 uppercase">Terminos y Condiciones del Viaje</h1>
        <p className="text-xs text-[var(--color-secondary)] mb-10">Ultima actualizacion: Marzo 2026</p>

        <div className="space-y-8 text-[0.9rem] leading-relaxed text-[var(--color-secondary)]">
          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">1. Reservas y Politica de Pago</h2>
            <p className="mb-4">Para garantizar la exclusividad y personalizacion de esta experiencia (limitada a 10 personas), se establecen las siguientes condiciones:</p>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong className="text-[var(--color-text)]">Deposito de Reserva:</strong> Se requiere el pago del 30% del monto total para confirmar la plaza. Este deposito tiene caracter de no reembolsable, ya que se destina a la gestion inmediata y bloqueos de servicios con proveedores.</li>
              <li>
                <strong className="text-[var(--color-text)]">Modalidades de Precio:</strong>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li><strong className="text-[var(--color-text)]">Pago de Contado:</strong> Aplica un precio preferencial para quienes liquiden el total al momento de la reserva.</li>
                  <li><strong className="text-[var(--color-text)]">Pago en Cuotas:</strong> El monto total sera superior al de contado. Las cuotas y su valor se calcularan segun los meses restantes para la fecha del viaje.</li>
                </ul>
              </li>
              <li><strong className="text-[var(--color-text)]">Calendario de Pagos:</strong> El viaje debe estar pagado en su totalidad antes de la salida. El incumplimiento de los pagos mensuales podria derivar en la cancelacion de la reserva sin devolucion del deposito inicial.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">2. Organizacion y Responsabilidades</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong className="text-[var(--color-text)]">Operadora Certificada:</strong> La logistica, operacion tecnica, seguros y contratacion de servicios locales estan a cargo de una Operadora de Viajes Certificada, quien cuenta con todas las licencias y avales legales requeridos para la prestacion de servicios turisticos.</li>
              <li><strong className="text-[var(--color-text)]">Rol de la Host:</strong> Katherine Molinares actua exclusivamente como Host (Anfitriona) y organizadora del concepto del viaje. Su funcion es la curaduria de la experiencia, acompanamiento del grupo y enlace directo con la operadora. No es legalmente responsable por interrupciones de servicios de terceros (aerolineas, hoteles, etc.).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">3. Alojamiento y Disponibilidad</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong className="text-[var(--color-text)]">Habitaciones:</strong> El precio publicado se basa en habitacion doble (dos camas independientes). Al viajar solo/a, se te asignara un companero/a de habitacion de tu mismo sexo.</li>
              <li><strong className="text-[var(--color-text)]">Hoteleria:</strong> Los hoteles publicados son referenciales. Nos reservamos el derecho de sustituirlos por alojamientos de categoria similar o superior, sujetos siempre a la disponibilidad confirmada por la operadora al momento del cierre del grupo.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">4. Requisitos Obligatorios y Gestiones</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong className="text-[var(--color-text)]">Seguro de Viaje:</strong> Es obligatorio contar con un seguro medico de viaje con cobertura amplia. Nosotros facilitamos la gestion y emision de este seguro a traves de la operadora, pero es responsabilidad del viajero proporcionar los datos correctos.</li>
              <li><strong className="text-[var(--color-text)]">Visados:</strong> Brindamos apoyo y asesoria en la gestion de visas. Sin embargo, la aprobacion final es facultad exclusiva de las autoridades consulares. Los costos consulares y de gestion no son reembolsables en caso de denegacion.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">5. Dinamica y Flexibilidad</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong className="text-[var(--color-text)]">Lanzamiento por Etapas:</strong> Inicialmente se abrira la convocatoria para la primera semana del viaje. La apertura de semanas adicionales quedara sujeta a la demanda y logistica organizativa.</li>
              <li><strong className="text-[var(--color-text)]">Independencia:</strong> Aunque es un viaje grupal, los participantes pueden optar por realizar actividades acompanados o de forma separada, siempre informando a la Host y bajo su propia responsabilidad.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">6. Exclusiones (Lo que NO incluye)</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>Boletos aereos internacionales (salvo que se especifique lo contrario).</li>
              <li>Visas y gestiones.</li>
              <li>Seguro de viaje.</li>
              <li>Propinas, gastos personales, lavanderia o llamadas telefonicas.</li>
              <li>Comidas o traslados no especificados explicitamente en el itinerario detallado.</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
