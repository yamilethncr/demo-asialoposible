import Link from 'next/link'

export const metadata = {
  title: 'Términos y Condiciones — Asia Lo Posible',
}

export default function Terminos() {
  return (
    <main className="min-h-screen py-20 px-5 md:px-10">
      <div className="max-w-[800px] mx-auto">
        <Link href="/" className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] no-underline hover:underline mb-10 block">&larr; Volver al inicio</Link>
        <h1 className="text-2xl md:text-4xl font-bold mb-8">TÉRMINOS Y CONDICIONES</h1>
        <p className="text-xs text-[var(--color-secondary)] mb-10">Última actualización: Marzo 2026</p>

        <div className="space-y-8 text-[0.9rem] leading-relaxed text-[var(--color-secondary)]">
          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">1. Información General</h2>
            <p>Asia Lo Posible es un programa de viaje grupal organizado por Katherine Molinares en colaboración con operadores turísticos locales licenciados en Vietnam y Camboya. Al reservar tu cupo, aceptas los presentes términos y condiciones.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">2. Reservas y Pagos</h2>
            <p>La reserva se confirma con el pago del 30% del valor total del viaje. El saldo restante deberá cancelarse según el plan de cuotas acordado, con fecha límite de julio de 2026. Los precios están expresados en dólares americanos (USD) y pueden estar sujetos a variaciones por tipo de cambio.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">3. Política de Cancelación</h2>
            <p>En caso de cancelación por parte del viajero: con más de 60 días de anticipación se reembolsa el 80% de lo abonado; entre 30 y 60 días, el 50%; con menos de 30 días no se realizan reembolsos. En caso de cancelación por fuerza mayor por parte del organizador, se reembolsará el 100% de lo abonado.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">4. Responsabilidades del Viajero</h2>
            <p>El viajero es responsable de gestionar su pasaporte vigente, visados correspondientes (con asesoría del organizador) y seguro de viaje. El organizador no se hace responsable por documentación vencida o incompleta que impida el ingreso a algún país del itinerario.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">5. Modificaciones al Itinerario</h2>
            <p>El organizador se reserva el derecho de modificar el itinerario, hoteles o actividades por razones de fuerza mayor, condiciones climáticas, disponibilidad o seguridad, garantizando siempre alternativas de calidad equivalente o superior.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">6. Seguro de Viaje</h2>
            <p>Se recomienda encarecidamente la contratación de un seguro de viaje con cobertura médica internacional. El organizador puede recomendar proveedores, pero la contratación es responsabilidad exclusiva del viajero.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">7. Limitación de Responsabilidad</h2>
            <p>Asia Lo Posible actúa como intermediario entre el viajero y los proveedores de servicios turísticos locales. No se hace responsable por daños, pérdidas, accidentes o inconvenientes causados por terceros, condiciones climáticas o circunstancias fuera de su control.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">8. Contacto</h2>
            <p>Para consultas sobre estos términos, escríbenos por WhatsApp al +58 424 845 5010 o por Instagram a @kathmolinares.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
