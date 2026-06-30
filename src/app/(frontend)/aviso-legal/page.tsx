import Link from 'next/link'

export const metadata = {
  title: 'Aviso Legal — Asia Lo Posible',
  description: 'Aviso legal de Asia Lo Posible. Identificación del titular, estructura operativa, responsabilidades sobre visas, seguros y jurisdicción aplicable.',
}

export default function AvisoLegal() {
  return (
    <main className="min-h-screen py-20 px-5 md:px-10">
      <div className="max-w-[800px] mx-auto">
        <Link href="/" className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] no-underline hover:underline mb-10 block">&larr; Volver al inicio</Link>
        <h1 className="text-2xl md:text-4xl font-bold mb-8">Aviso Legal</h1>
        <p className="text-xs text-[var(--color-secondary)] mb-10">Última actualización: Mayo 2026</p>

        <div className="space-y-8 text-[0.9rem] leading-relaxed text-[var(--color-secondary)]">
          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">1. Titular del Sitio</h2>
            <p className="mb-3">Asia Lo Posible es una marca comercial operada por <strong className="text-[var(--color-text)]">Pond Horizons LLC</strong>, sociedad de responsabilidad limitada (LLC) registrada en el Estado de Nuevo México, Estados Unidos de América, titular del sitio web asialoposible.net y responsable de los servicios ofrecidos.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-[var(--color-text)]">Razón social:</strong> Pond Horizons LLC.</li>
              <li><strong className="text-[var(--color-text)]">EIN (Identificador Fiscal de EE.UU.):</strong> 38-4385110.</li>
              <li><strong className="text-[var(--color-text)]">Domicilio social:</strong> 1209 Mountain Road Place NE, Suite R, Albuquerque, NM 87110, USA.</li>
              <li><strong className="text-[var(--color-text)]">Email de contacto legal:</strong> <a href="mailto:katherine@emails.asialoposible.net" className="text-[var(--color-accent)] underline hover:no-underline">katherine@emails.asialoposible.net</a>.</li>
              <li><strong className="text-[var(--color-text)]">Sitio corporativo:</strong> <a href="https://pondhorizons.xyz/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] underline hover:no-underline">pondhorizons.xyz</a>.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">2. Estructura Operativa</h2>
            <p className="mb-3">Pond Horizons LLC actúa como <strong className="text-[var(--color-text)]">Merchant of Record (comerciante registrado)</strong> y <strong className="text-[var(--color-text)]">organizador promocional</strong> del viaje. La ejecución logística en destino es realizada por un <strong className="text-[var(--color-text)]">operador turístico licenciado en Vietnam</strong>, con más de dos décadas de trayectoria, autorización vigente para la organización de tours internacionales y especialización en grupos de habla hispana. Los viajeros contratan directamente con Pond Horizons LLC, quien a su vez contrata los servicios del operador local bajo un acuerdo B2B independiente. La identidad legal completa del operador local se entrega al viajero en los documentos contractuales firmados por DocuSeal al confirmar la reserva.</p>
            <p>Cargo en estado de cuenta del Cliente: <code className="text-[var(--color-accent)]">POND HORIZONS</code> o <code className="text-[var(--color-accent)]">ASIA LO POSIBLE</code>, según el procesador.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">3. Responsabilidad sobre Visas</h2>
            <p>Los visados para Vietnam (~USD 50) y Camboya (~USD 30) son responsabilidad exclusiva del viajero. Asia Lo Posible brinda asesoría informal, pero la aprobación final depende exclusivamente de las autoridades consulares respectivas. Los costos consulares y de gestión <strong className="text-[var(--color-text)]">no son reembolsables</strong> en caso de denegación. Si a un viajero se le niega la visa o se le rechaza la entrada al país, Pond Horizons LLC no se hace responsable y no se emitirán reembolsos.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">4. Pasaporte</h2>
            <p>El pasaporte debe tener una vigencia mínima de <strong className="text-[var(--color-text)]">6 meses</strong> desde la fecha de entrada al primer país del itinerario y contar con al menos <strong className="text-[var(--color-text)]">4 páginas en blanco</strong> para sellos de inmigración. El nombre del pasaporte debe coincidir exactamente con el de la reserva.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">5. Seguro de Viaje Obligatorio</h2>
            <p>La contratación de un seguro médico de viaje con cobertura internacional es <strong className="text-[var(--color-text)]">obligatoria</strong> para participar. La cobertura mínima exigida es de USD 50,000 en gastos médicos, e incluir evacuación médica de emergencia, repatriación y pérdida de equipaje. Si el viajero viaja sin seguro o con cobertura insuficiente, asume íntegramente cualquier gasto médico o de emergencia, y Pond Horizons LLC se exime de toda responsabilidad económica derivada de esta omisión. Ver <Link href="/terminos-viaje" className="text-[var(--color-accent)] underline hover:no-underline">Términos del Viaje</Link>, Sección 7.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">6. Limitación de Responsabilidad</h2>
            <p className="mb-3">Pond Horizons LLC actúa como organizador y comerciante registrado. No se hace responsable por:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Daños, pérdidas o accidentes causados por terceros proveedores.</li>
              <li>Fallas logísticas del operador local en Vietnam.</li>
              <li>Retrasos o cancelaciones de vuelos comerciales internacionales o internos.</li>
              <li>Condiciones climáticas adversas.</li>
              <li>Decisiones discrecionales de autoridades migratorias.</li>
              <li>Enfermedades preexistentes del viajero.</li>
              <li>Pérdida o robo de pertenencias personales.</li>
              <li>Conducta de otros participantes del grupo.</li>
              <li>Eventos de Fuerza Mayor.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">7. Transferencia Internacional de Datos</h2>
            <p>Para la ejecución del viaje, los datos personales del viajero (incluyendo copia de pasaporte) son transferidos a Vietnam y Camboya (operador local, hoteles, aerolíneas, autoridades migratorias). Esta transferencia se ampara en la ejecución del contrato. Para más detalle, ver la <Link href="/privacidad" className="text-[var(--color-accent)] underline hover:no-underline">Política de Privacidad</Link>.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">8. Documentos Legales Relacionados</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><Link href="/terminos-viaje" className="text-[var(--color-accent)] underline hover:no-underline">Términos y Condiciones del Viaje</Link> &mdash; el contrato vinculante para la compra del viaje.</li>
              <li><Link href="/politica-de-cancelacion" className="text-[var(--color-accent)] underline hover:no-underline">Política de Cancelación</Link> &mdash; el régimen de reembolsos y cancelaciones.</li>
              <li><Link href="/privacidad" className="text-[var(--color-accent)] underline hover:no-underline">Política de Privacidad</Link> &mdash; el tratamiento de datos personales.</li>
              <li><Link href="/terminos" className="text-[var(--color-accent)] underline hover:no-underline">Términos de la Web</Link> &mdash; las condiciones de uso del sitio.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">9. Jurisdicción Aplicable</h2>
            <p>Cualquier disputa derivada de los servicios ofrecidos por Pond Horizons LLC se resolverá conforme a las leyes del Estado de Nuevo México, EE.UU., y mediante arbitraje obligatorio AAA (American Arbitration Association), sede Albuquerque NM, conforme al detalle establecido en los <Link href="/terminos-viaje" className="text-[var(--color-accent)] underline hover:no-underline">Términos y Condiciones del Viaje</Link>.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">10. Contacto</h2>
            <p>Para consultas sobre este aviso legal: <a href="mailto:katherine@emails.asialoposible.net" className="text-[var(--color-accent)] underline hover:no-underline">katherine@emails.asialoposible.net</a> · WhatsApp +58 424 845 5010 · Instagram @kathmolinares.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
