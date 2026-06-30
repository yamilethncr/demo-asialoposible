import Link from 'next/link'

export const metadata = {
  title: 'Términos y Condiciones del Viaje — Asia Lo Posible',
  description: 'Términos y condiciones del viaje organizado a Vietnam y Camboya con Asia Lo Posible. Reservas, pagos, cancelaciones, seguros y responsabilidades.',
}

export default function TerminosViaje() {
  return (
    <main className="min-h-screen py-20 px-5 md:px-10">
      <div className="max-w-[800px] mx-auto">
        <Link href="/" className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] no-underline hover:underline mb-10 block">&larr; Volver al inicio</Link>
        <h1 className="text-2xl md:text-4xl font-bold mb-8 uppercase">Términos y Condiciones del Viaje</h1>
        <p className="text-xs text-[var(--color-secondary)] mb-10">Última actualización: Mayo 2026 · Versión 1.0</p>

        <div className="space-y-8 text-[0.9rem] leading-relaxed text-[var(--color-secondary)]">

          <section className="p-5" style={{ border: '1px solid rgba(200, 161, 90,0.3)', background: 'rgba(200, 161, 90,0.05)' }}>
            <p className="mb-2"><strong className="text-[var(--color-text)]">Documento vinculante de firma electrónica.</strong> Al inscribirte recibirás estos Términos por DocuSeal, junto con la Política de Cancelación y el Waiver de Exoneración de Responsabilidad. <strong className="text-[var(--color-text)]">Pagar el depósito implica aceptación contractual vinculante</strong> y supone que has leído y comprendido los tres documentos.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">Identificación del Comerciante</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-[var(--color-text)]">Razón social:</strong> Pond Horizons LLC (sociedad de responsabilidad limitada).</li>
              <li><strong className="text-[var(--color-text)]">Jurisdicción:</strong> Estado de Nuevo México, EE.UU.</li>
              <li><strong className="text-[var(--color-text)]">EIN:</strong> 38-4385110.</li>
              <li><strong className="text-[var(--color-text)]">Domicilio:</strong> 1209 Mountain Road Pl NE, Ste R, Albuquerque, NM 87110, USA.</li>
              <li><strong className="text-[var(--color-text)]">Marca operada:</strong> Asia Lo Posible (asialoposible.net).</li>
              <li><strong className="text-[var(--color-text)]">Descriptor en estado de cuenta:</strong> <code className="text-[var(--color-accent)]">POND HORIZONS</code> o <code className="text-[var(--color-accent)]">ASIA LO POSIBLE</code>.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">1. Partes y Estructura de Responsabilidad</h2>
            <p className="mb-3">Pond Horizons LLC actúa como <strong className="text-[var(--color-text)]">organizador promocional y Merchant of Record</strong> que procesa el pago del Cliente. La ejecución logística en destino la realiza un <strong className="text-[var(--color-text)]">operador turístico licenciado en Vietnam</strong> &mdash; con más de dos décadas de trayectoria, autorización vigente para tours internacionales y especialización en grupos de habla hispana &mdash; quien asume la responsabilidad total y exclusiva de transporte, alojamiento, guías locales, vuelos internos y seguridad operativa. La identidad legal completa del operador local se entrega al Cliente en los documentos contractuales firmados por DocuSeal al confirmar la reserva.</p>
            <p className="mb-3">El Tour Leader (Katherine Molinares Angel) es un contratista independiente sin autoridad para modificar este contrato, ofrecer reembolsos ni efectuar promesas que vinculen a la Empresa.</p>
            <p className="mb-3"><strong className="text-[var(--color-text)]">Alcance limitado al paquete contratado.</strong> Salvo que se haya contratado expresamente lo contrario por escrito, ni la Empresa ni el Tour Leader están obligados a proveer servicios, asistencia o asesoría adicionales más allá de lo estipulado en este contrato y en el Anexo del Viaje. Esto incluye, sin limitación: asesoría de visados, asesoría de viaje o itinerarios personalizados, gestión de reservas adicionales (vuelos internacionales, hoteles fuera de fechas, extensiones), asistencia logística en días libres o tras finalizar el viaje, y asesoría médica, sanitaria, de seguros, fiscal, migratoria, legal o financiera. Lo incluido en el paquete está descrito de forma exhaustiva en el Anexo del Viaje.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">2. Precio, Pagos y Comisiones</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong className="text-[var(--color-text)]">Depósito de Reserva:</strong> 30% del precio total, no reembolsable bajo ninguna circunstancia atribuible al Cliente.</li>
              <li><strong className="text-[var(--color-text)]">Saldo:</strong> debe liquidarse antes de la fecha de salida según calendario confirmado.</li>
              <li><strong className="text-[var(--color-text)]">Comisiones de procesamiento:</strong> las comisiones de la pasarela de pago son asumidas íntegramente por el Cliente y se añaden al checkout (referencial: VISA/MC 2.8&ndash;3.4%, AMEX 3.3&ndash;4%, PayPal 4.7%).</li>
              <li><strong className="text-[var(--color-text)]">Moneda:</strong> todos los precios se facturan y cobran en USD. La diferencia cambiaria a moneda local la asume el Cliente.</li>
              <li><strong className="text-[var(--color-text)]">Gastos bancarios:</strong> cualquier costo de transferencia internacional (modo OUR) corre por cuenta del Cliente.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">3. Política de Cancelación (Resumen)</h2>
            <p className="mb-3">La <Link href="/politica-de-cancelacion" className="text-[var(--color-accent)] underline hover:no-underline">Política de Cancelación completa</Link> se incorpora íntegramente a este contrato. Resumen:</p>
            <div className="overflow-x-auto mb-4" style={{ border: '1px solid rgba(200, 161, 90,0.2)' }}>
              <table className="w-full text-[0.85rem]">
                <thead>
                  <tr className="border-b" style={{ borderColor: 'rgba(200, 161, 90,0.2)' }}>
                    <th className="text-left p-3 text-[var(--color-text)] font-bold">Días antes de la salida</th>
                    <th className="text-left p-3 text-[var(--color-text)] font-bold">Reembolso sobre pagos adicionales</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b" style={{ borderColor: 'rgba(200, 161, 90,0.1)' }}>
                    <td className="p-3">Entre 30 y 60 días</td>
                    <td className="p-3"><strong className="text-[var(--color-text)]">40%</strong></td>
                  </tr>
                  <tr>
                    <td className="p-3">Menos de 30 días</td>
                    <td className="p-3"><strong className="text-[var(--color-text)]">0%</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mb-3">El depósito del 30% <strong className="text-[var(--color-text)]">nunca</strong> es reembolsable salvo cancelación por parte de la Empresa.</p>
            <p><strong className="text-[var(--color-text)]">Documento de causa obligatorio:</strong> los reembolsos solo proceden por dos causas documentadas: (i) <strong className="text-[var(--color-text)]">enfermedad o accidente</strong> con certificado médico oficial que prohíba viajar, o (ii) <strong className="text-[var(--color-text)]">fallecimiento de familiar directo</strong> (padre, madre, cónyuge, hijo, hermano) con certificado de defunción y prueba del vínculo. Cualquier otra causa (denegación de visa, conflicto laboral, cambio de planes, fuerza mayor personal) no da derecho a reembolso alguno.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">4. No Modificaciones, No Sustituciones, No Participación Voluntaria</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong className="text-[var(--color-text)]">No modificaciones unilaterales:</strong> Confirmada la reserva, no se admiten cambios unilaterales por parte del Cliente (fechas, hoteles, actividades, vuelos internos). El paquete se contrata como un todo indivisible.</li>
              <li><strong className="text-[var(--color-text)]">No sustitución de viajero:</strong> La plaza es <strong className="text-[var(--color-text)]">personal, intransferible y no cesible</strong>. La Empresa no admite la sustitución del Cliente por terceros bajo ninguna circunstancia.</li>
              <li><strong className="text-[var(--color-text)]">No participación voluntaria:</strong> Si el Cliente decide voluntariamente no participar en alguna actividad incluida, no tiene derecho a reembolso parcial, crédito ni compensación.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">5. Sustitución de Itinerario por la Empresa</h2>
            <p>La Empresa y el operador local se reservan el derecho de sustituir hoteles, vuelos internos, actividades, restaurantes, días disponibles en una ciudad, o incluso segmentos o destinos enteros por motivos de fuerza mayor, seguridad, regulatorios u operativos, sin que ello dé lugar a <strong className="text-[var(--color-text)]">reembolso, devolución parcial, crédito ni compensación de ningún tipo</strong>. La Empresa hará esfuerzos razonables para sustituir cualquier segmento afectado por una alternativa de calidad equivalente o superior. Los cambios materiales se comunicarán por escrito al Cliente.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">6. Tamaño Mínimo del Grupo</h2>
            <p>Si a 60 días de la salida no se alcanzan 6 plazas confirmadas, la Empresa puede (a) cancelar el viaje y reembolsar el 100% (incluido depósito) en 30 días hábiles, o (b) ofrecer reagendar a una próxima salida con los pagos como crédito.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">7. Seguro de Viaje (Obligatorio)</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong className="text-[var(--color-text)]">Obligatorio:</strong> el Cliente debe contratar un seguro de viaje internacional con cobertura mínima USD 50,000 en gastos médicos, evacuación de emergencia, repatriación y pérdida de equipaje.</li>
              <li><strong className="text-[var(--color-text)]">Seguro de cancelación recomendado:</strong> es la única protección efectiva del Cliente contra costos no reembolsables del depósito y demás pagos.</li>
              <li><strong className="text-[var(--color-text)]">Entrega de comprobante:</strong> copia legible de la póliza vigente al menos 15 días antes de la salida.</li>
              <li><strong className="text-[var(--color-text)]">Asunción total de riesgo por omisión:</strong> la Empresa no condiciona el embarque a la entrega de la póliza, pero si el Cliente viaja sin seguro o con cobertura insuficiente <strong className="text-[var(--color-text)]">asume íntegramente</strong> cualquier costo médico, evacuación, repatriación, hospitalización o gasto derivado de un incidente. La Empresa, el Tour Leader y el operador local se eximen de cualquier responsabilidad económica o de gestión derivada de esta omisión.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">8. Visas, Pasaporte y Salud</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong className="text-[var(--color-text)]">Visas:</strong> el Cliente es único y exclusivo responsable de tramitar y mantener vigentes los visados para Vietnam (~USD 50) y Camboya (~USD 30). <strong className="text-[var(--color-text)]">La gestión, asesoría o tramitación de visados no es un servicio incluido en el paquete</strong> y la Empresa no está obligada a proveerlo. Cualquier referencia informal sobre requisitos consulares es meramente informativa, no profesional y sin garantía. Si se le niega la visa o se le rechaza la entrada al país, la Empresa no se hace responsable y no se emiten reembolsos.</li>
              <li><strong className="text-[var(--color-text)]">Pasaporte:</strong> vigencia mínima 6 meses desde la fecha de entrada al primer país, mínimo 4 páginas en blanco, nombre coincidente con la reserva.</li>
              <li><strong className="text-[var(--color-text)]">Salud:</strong> el Cliente declara encontrarse en condiciones físicas y de salud adecuadas. Es <strong className="text-[var(--color-text)]">obligación del Cliente informar a Katherine (Tour Leader)</strong> antes del viaje &mdash; vía cuestionario pre-viaje o escrito a `katherine@emails.asialoposible.net` &mdash; sobre <strong className="text-[var(--color-text)]">alergias</strong> (de cualquier tipo: alimentarias, a picaduras, a medicamentos, ambientales), <strong className="text-[var(--color-text)]">enfermedades crónicas</strong> (diabetes, hipertensión, asma, cardiovasculares, autoinmunes, etc.), <strong className="text-[var(--color-text)]">intolerancias</strong> alimentarias y restricciones dietéticas, medicación regular, limitaciones físicas y embarazo. La omisión o información inexacta libera a las Partes Liberadas y al operador local de responsabilidad por las consecuencias.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">9. Fuerza Mayor</h2>
            <p>Constituyen Fuerza Mayor los eventos ajenos al control razonable de la Empresa: guerras, terrorismo, pandemias, desastres naturales, cierres de frontera, restricciones generalizadas de vuelos, crisis de combustible. En tales casos la Empresa queda eximida de la ejecución, <strong className="text-[var(--color-text)]">no está obligada a reembolsar de sus propios fondos</strong>, y reembolsará al Cliente únicamente los montos efectivamente recuperados del operador local y aerolíneas, menos gastos administrativos. La Empresa no indemniza boletos aéreos internacionales, oportunidades perdidas ni gastos preparativos.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">10. Limitación de Responsabilidad</h2>
            <p className="mb-3">El Cliente reconoce que Pond Horizons LLC y sus contratistas actúan únicamente como promotores, organizadores y procesadores de pago. La Empresa no es responsable bajo ninguna circunstancia por:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Lesiones, accidentes, enfermedades o muerte durante el viaje, salvo dolo o negligencia grave directamente atribuible a la Empresa.</li>
              <li>Fallas, incumplimientos o negligencia del operador local, hoteles, aerolíneas, transportistas, embarcaciones, restaurantes o cualquier proveedor.</li>
              <li>Pérdida, daño o robo de equipaje, efectos personales, dinero o documentos.</li>
              <li>Retrasos o cancelaciones de vuelos internacionales o internos.</li>
              <li>Negación de visados o rechazo de entrada por autoridades migratorias.</li>
              <li>Peligros inherentes al viaje por tierra, mar o aire.</li>
              <li>Conducta de otros participantes del grupo.</li>
              <li>Eventos de Fuerza Mayor.</li>
            </ul>
            <p className="mt-3">Cualquier reclamo por la <strong className="text-[var(--color-text)]">ejecución operativa</strong> del viaje debe dirigirse al operador turístico local en Vietnam. El Cliente acepta firmar adicionalmente el <strong className="text-[var(--color-text)]">Waiver de Exoneración de Responsabilidad</strong> que le será enviado vía DocuSeal.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">11. Código de Conducta y Derecho de Expulsión</h2>
            <p className="mb-3">Durante el viaje, el Cliente se compromete a tratar con respeto a viajeros, personal y locales, cumplir las leyes locales (con especial atención a la legislación antidroga severa de Vietnam y Camboya), consumir alcohol responsablemente y respetar la logística del grupo.</p>
            <p>La Empresa y el Tour Leader se reservan el <strong className="text-[var(--color-text)]">derecho exclusivo y discrecional de expulsar al Cliente</strong> si su conducta pone en riesgo la seguridad, infringe leyes locales, constituye acoso o discriminación, o interrumpe significativamente al grupo. La expulsión es <strong className="text-[var(--color-text)]">sin reembolso</strong> y los costos de regreso son a cargo del Cliente expulsado.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">12. Menores de Edad</h2>
            <p>La edad mínima para inscripción individual es 18 años. Los menores solo pueden viajar acompañados de su padre, madre o tutor legal, con consentimiento parental notarial apostillado del progenitor no viajante (cuando aplique) y firma del Waiver por el padre/tutor en nombre del menor.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">13. Aceptación Electrónica</h2>
            <p>Al firmar electrónicamente vía DocuSeal y/o al pagar el depósito, el Cliente acepta de forma vinculante estos Términos. La firma electrónica tiene el mismo valor legal que una firma manuscrita conforme a la <strong className="text-[var(--color-text)]">E-SIGN Act</strong> (15 USC §7001) y la legislación equivalente del país del Cliente. La Empresa registra fecha, hora, IP, dispositivo y versión del documento aceptado.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">14. Datos Personales</h2>
            <p>Para ejecutar el viaje, la Empresa comparte ciertos datos personales (pasaporte, fecha de nacimiento, datos médicos declarados) con el operador turístico licenciado en Vietnam, hoteles, aerolíneas, autoridades migratorias, el procesador de pagos y DocuSeal. Los datos se conservan 24 meses post-viaje. Los derechos del Cliente sobre sus datos se rigen por la <Link href="/privacidad" className="text-[var(--color-accent)] underline hover:no-underline">Política de Privacidad</Link>.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">15. Resolución de Disputas — Procedimiento Previo Obligatorio</h2>
            <p className="mb-3">Antes de iniciar cualquier acción legal o un chargeback, el Cliente debe comunicar la disputa por escrito a <a href="mailto:katherine@emails.asialoposible.net" className="text-[var(--color-accent)] underline hover:no-underline">katherine@emails.asialoposible.net</a> y permitir un plazo de <strong className="text-[var(--color-text)]">30 días calendario</strong> para que la Empresa responda y proponga una solución.</p>
            <p>Iniciar un chargeback antes de cumplir este procedimiento constituye incumplimiento material del contrato.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">16. Arbitraje Obligatorio y Renuncia a Acciones Colectivas</h2>
            <p className="mb-3">Cualquier disputa no resuelta en el plazo previo se resolverá <strong className="text-[var(--color-text)]">exclusivamente por arbitraje vinculante</strong> administrado por la American Arbitration Association (AAA) bajo sus Consumer Arbitration Rules, sede Albuquerque NM, idioma español, árbitro único.</p>
            <p>El Cliente renuncia expresamente a (a) juicio por jurado, (b) participar como demandante o miembro de una acción colectiva (class action) o de representación contra la Empresa.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">17. Ley Aplicable</h2>
            <p>Este contrato se rige por las leyes del Estado de Nuevo México, EE.UU. La presente cláusula no priva al Cliente residente en la Unión Europea de la protección imperativa que le confiere la legislación de protección al consumidor de su país de residencia habitual, en la medida en que la ley aplicable así lo exija imperativamente.</p>
          </section>

          <section className="border-t pt-8" style={{ borderColor: 'rgba(142,148,165,0.2)' }}>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">Aceptación</h2>
            <p className="mb-3">Al realizar el pago del depósito y/o firmar electrónicamente vía DocuSeal, declaras haber leído, comprendido y aceptado estos Términos en su totalidad, junto con la <Link href="/politica-de-cancelacion" className="text-[var(--color-accent)] underline hover:no-underline">Política de Cancelación</Link>, el Waiver de Exoneración de Responsabilidad y la <Link href="/privacidad" className="text-[var(--color-accent)] underline hover:no-underline">Política de Privacidad</Link>.</p>
            <p>Contacto: <a href="mailto:katherine@emails.asialoposible.net" className="text-[var(--color-accent)] underline hover:no-underline">katherine@emails.asialoposible.net</a> · WhatsApp +58 424 845 5010 · Instagram @kathmolinares.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
