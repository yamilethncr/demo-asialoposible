import Link from 'next/link'

export const metadata = {
  title: 'Aviso Legal — Asia Lo Posible',
}

export default function AvisoLegal() {
  return (
    <main className="min-h-screen py-20 px-5 md:px-10">
      <div className="max-w-[800px] mx-auto">
        <Link href="/" className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] no-underline hover:underline mb-10 block">&larr; Volver al inicio</Link>
        <h1 className="text-2xl md:text-4xl font-bold mb-8 uppercase">AVISO LEGAL</h1>
        <p className="text-xs text-[var(--color-secondary)] mb-10">Última actualización: Marzo 2026</p>

        <div className="space-y-8 text-[0.9rem] leading-relaxed text-[var(--color-secondary)]">
          <section>
            <h2 className="text-lg font-semibold text-[var(--color-primary)] mb-3">1. Responsabilidad sobre Visas</h2>
            <p>Los visados para Vietnam y Camboya son responsabilidad exclusiva del viajero. Asia Lo Posible brinda asesoría y apoyo en la gestión, pero la aprobación final depende de las autoridades consulares de cada país. Los costos consulares y de gestión no son reembolsables en caso de denegación.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-primary)] mb-3">2. Costo Estimado de Visas</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Vietnam: ~$50 USD (visa electrónica o visa on arrival)</li>
              <li>Camboya: ~$30 USD (e-visa o visa on arrival)</li>
              <li>Estos costos son referenciales y pueden variar según nacionalidad y tipo de trámite. Es responsabilidad del viajero verificar los requisitos actualizados según su pasaporte.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-primary)] mb-3">3. Actualización de Requisitos</h2>
            <p>Los requisitos de entrada pueden cambiar sin previo aviso por parte de los gobiernos de Vietnam y Camboya. El viajero debe verificar la vigencia de los requisitos con al menos 60 días de anticipación. Asia Lo Posible informará sobre cambios conocidos pero no garantiza la exactitud de la información en tiempo real.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-primary)] mb-3">4. Pasaporte</h2>
            <p>El pasaporte debe tener una vigencia mínima de 6 meses desde la fecha de entrada al primer país del itinerario. Debe contar con al menos 4 páginas en blanco para sellos de inmigración. Pasaportes dañados o en mal estado pueden ser rechazados por las autoridades migratorias.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-primary)] mb-3">5. Seguro de Viaje Obligatorio</h2>
            <p>La contratación de un seguro médico de viaje con cobertura internacional es obligatoria para participar en este viaje. La cobertura mínima recomendada es de $50,000 USD en gastos médicos. Debe incluir: atención médica de emergencia, evacuación médica, repatriación, pérdida de equipaje y cancelación de viaje. Asia Lo Posible facilita la gestión del seguro a través de la operadora certificada, pero la responsabilidad de contratación recae en el viajero.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-primary)] mb-3">6. Limitación de Responsabilidad</h2>
            <p className="mb-3">Asia Lo Posible y Katherine Molinares actúan como intermediarios entre el viajero y los proveedores de servicios turísticos locales. No se hacen responsables por:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Daños, pérdidas o accidentes causados por terceros</li>
              <li>Retrasos o cancelaciones de vuelos comerciales</li>
              <li>Condiciones climáticas adversas</li>
              <li>Decisiones de autoridades migratorias</li>
              <li>Enfermedades o condiciones médicas preexistentes del viajero</li>
              <li>Pérdida o robo de pertenencias personales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-primary)] mb-3">7. Contacto</h2>
            <p>Para consultas sobre este aviso legal, escríbenos por WhatsApp al +58 424 845 5010 o por Instagram a @kathmolinares.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
