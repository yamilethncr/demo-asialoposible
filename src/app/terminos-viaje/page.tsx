import Link from 'next/link'

export const metadata = {
  title: 'Términos y Condiciones del Viaje — Asia Lo Posible',
}

export default function TerminosViaje() {
  return (
    <main className="min-h-screen py-20 px-5 md:px-10">
      <div className="max-w-[800px] mx-auto">
        <Link href="/" className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] no-underline hover:underline mb-10 block">&larr; Volver al inicio</Link>
        <h1 className="text-2xl md:text-4xl font-bold mb-8 uppercase">Términos y Condiciones del Viaje</h1>
        <p className="text-xs text-[var(--color-secondary)] mb-10">Última actualización: Marzo 2026</p>

        <div className="space-y-8 text-[0.9rem] leading-relaxed text-[var(--color-secondary)]">
          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">1. Estructura de Responsabilidad</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong className="text-[var(--color-text)]">Operadora Certificada:</strong> La logística, operación técnica, seguros y contratación de servicios locales están a cargo de una Operadora de Viajes Certificada con todas las licencias y avales legales requeridos.</li>
              <li><strong className="text-[var(--color-text)]">Rol de la Host:</strong> Katherine Molinares actúa como Host (Anfitriona) y organizadora del concepto del viaje. Su función es la curaduría de la experiencia, acompañamiento del grupo y enlace con la operadora. No es legalmente responsable por interrupciones de servicios de terceros.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">2. Reserva y Pagos</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong className="text-[var(--color-text)]">Depósito de Reserva:</strong> 30% del monto total para confirmar plaza. No reembolsable, se destina a gestión inmediata y bloqueos con proveedores.</li>
              <li><strong className="text-[var(--color-text)]">Pago de Contado:</strong> Precio preferencial para quienes liquiden el total al momento de la reserva.</li>
              <li><strong className="text-[var(--color-text)]">Pago en Cuotas:</strong> Monto total superior al de contado. Las cuotas se calculan según los meses restantes antes del viaje.</li>
              <li>El viaje debe estar pagado en su totalidad antes de la fecha de salida. Incumplimiento puede derivar en cancelación sin devolución del depósito.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">3. Cancelaciones y Reembolsos</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong className="text-[var(--color-text)]">Más de 60 días antes:</strong> reembolso del 70% de lo abonado (excluyendo depósito de reserva).</li>
              <li><strong className="text-[var(--color-text)]">Entre 30 y 60 días:</strong> reembolso del 40%.</li>
              <li><strong className="text-[var(--color-text)]">Menos de 30 días:</strong> no se realizan reembolsos.</li>
              <li><strong className="text-[var(--color-text)]">Cancelación por fuerza mayor del organizador:</strong> reembolso del 100%.</li>
              <li>El depósito de reserva (30%) no es reembolsable en ningún caso, salvo cancelación por parte del organizador.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">4. Alojamiento y Disponibilidad</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>El precio se basa en habitación doble (dos camas independientes). Viajeros solos serán asignados con compañero/a de habitación del mismo sexo.</li>
              <li><strong className="text-[var(--color-text)]">Suplemento individual disponible (+$655 USD)</strong> para habitación privada.</li>
              <li>Los hoteles publicados son referenciales. Pueden sustituirse por alojamientos de categoría similar o superior según disponibilidad confirmada por la operadora.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">5. Requisitos Obligatorios</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong className="text-[var(--color-text)]">Seguro de Viaje:</strong> Obligatorio contar con seguro médico de viaje con cobertura amplia. Se facilita gestión a través de la operadora.</li>
              <li><strong className="text-[var(--color-text)]">Visados:</strong> Se brinda apoyo y asesoría. Aprobación final es facultad de autoridades consulares. Costos consulares no reembolsables en caso de denegación. Costos estimados: ~$50 USD Vietnam, ~$30 USD Camboya.</li>
              <li><strong className="text-[var(--color-text)]">Pasaporte:</strong> Vigente con mínimo 6 meses de validez desde la fecha de entrada.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">6. Logística y Flexibilidad</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>El organizador puede modificar itinerario, hoteles o actividades por razones de fuerza mayor, clima, disponibilidad o seguridad, garantizando alternativas de calidad equivalente o superior.</li>
              <li>Aunque es un viaje grupal, participantes pueden realizar actividades separadas informando a la Host y bajo su propia responsabilidad.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">7. Fuerza Mayor</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>Ni la organizadora ni la operadora serán responsables por eventos fuera de su control: desastres naturales, pandemias, conflictos, huelgas de transporte, decisiones gubernamentales o cualquier circunstancia imprevisible.</li>
              <li>En caso de fuerza mayor que impida la realización del viaje, se ofrecerá reprogramación o reembolso según las condiciones negociadas con proveedores.</li>
            </ul>
          </section>

          <section className="border-t border-[var(--color-secondary)]/20 pt-8">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">Aceptación</h2>
            <p className="mb-4">Al realizar tu reserva y efectuar el pago del depósito, confirmas que has leído, comprendido y aceptado estos términos y condiciones en su totalidad.</p>
            <p>Contacto: WhatsApp +58 424 845 5010 o Instagram @kathmolinares.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
