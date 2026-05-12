import Link from 'next/link'

export const metadata = {
  title: 'Política de Cancelación — Asia Lo Posible',
  description: 'Política oficial de cancelación y reembolsos de Asia Lo Posible para viajes a Vietnam y Camboya. Depósito 30% no reembolsable, escala de reembolsos y procedimiento.',
}

export default function PoliticaDeCancelacion() {
  return (
    <main className="min-h-screen py-20 px-5 md:px-10">
      <div className="max-w-[800px] mx-auto">
        <Link href="/" className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] no-underline hover:underline mb-10 block">&larr; Volver al inicio</Link>
        <h1 className="text-2xl md:text-4xl font-bold mb-8 uppercase">Política de Cancelación y Reembolsos</h1>
        <p className="text-xs text-[var(--color-secondary)] mb-10">Última actualización: Mayo 2026 · Versión 1.0</p>

        <div className="space-y-8 text-[0.9rem] leading-relaxed text-[var(--color-secondary)]">
          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">1. Contexto</h2>
            <p>Al organizar un viaje grupal a Vietnam y Camboya, asumimos compromisos financieros irrevocables con el operador turístico local, aerolíneas y hoteles desde el momento mismo en que se confirma una plaza. Esta política está diseñada para ser justa con el viajero, al tiempo que protege la viabilidad del viaje para el resto del grupo. Recomendamos contratar un <strong className="text-[var(--color-text)]">seguro de cancelación de viaje</strong> como única protección efectiva ante imprevistos personales.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">2. Identificación del Comerciante</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-[var(--color-text)]">Razón social:</strong> Pond Horizons LLC (sociedad de responsabilidad limitada).</li>
              <li><strong className="text-[var(--color-text)]">Jurisdicción:</strong> Estado de Nuevo México, EE.UU.</li>
              <li><strong className="text-[var(--color-text)]">EIN (identificador fiscal):</strong> 38-4385110.</li>
              <li><strong className="text-[var(--color-text)]">Domicilio:</strong> 1209 Mountain Road Pl NE, Ste R, Albuquerque, NM 87110, USA.</li>
              <li><strong className="text-[var(--color-text)]">Marca operada:</strong> Asia Lo Posible (asialoposible.net).</li>
              <li><strong className="text-[var(--color-text)]">Descriptor en estado de cuenta:</strong> el cargo aparecerá como <code className="text-[var(--color-accent)]">POND HORIZONS</code> o <code className="text-[var(--color-accent)]">ASIA LO POSIBLE</code>.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">3. Depósito de Reserva (30%)</h2>
            <p className="mb-3">El depósito equivale al <strong className="text-[var(--color-text)]">30% del precio total</strong> y se abona al confirmar la plaza. El depósito es <strong className="text-[var(--color-text)]">NO REEMBOLSABLE bajo ninguna circunstancia atribuible al Cliente</strong>, incluyendo sin limitación: cambio de planes, emergencia personal, enfermedad o accidente del Cliente o de un familiar, denegación de visa, rechazo en frontera, conflicto laboral, fuerza mayor personal, o decisión voluntaria de no participar.</p>
            <p>La única excepción es la cancelación del viaje por decisión propia de la Empresa (ver Sección 6).</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">4. Escala de Reembolso (sobre pagos adicionales al depósito)</h2>
            <p className="mb-4">Si tras pagar el depósito el Cliente realizó pagos adicionales (saldo o cuotas), aplica esta escala sobre dichos pagos adicionales. El depósito (30%) nunca es reembolsable.</p>
            <div className="overflow-x-auto mb-4" style={{ border: '1px solid rgba(212,168,83,0.2)' }}>
              <table className="w-full text-[0.85rem]">
                <thead>
                  <tr className="border-b" style={{ borderColor: 'rgba(212,168,83,0.2)' }}>
                    <th className="text-left p-3 text-[var(--color-text)] font-bold">Días antes de la salida</th>
                    <th className="text-left p-3 text-[var(--color-text)] font-bold">Reembolso sobre pagos adicionales</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b" style={{ borderColor: 'rgba(212,168,83,0.1)' }}>
                    <td className="p-3">Entre 30 y 60 días</td>
                    <td className="p-3"><strong className="text-[var(--color-text)]">40%</strong> del monto pagado por encima del depósito</td>
                  </tr>
                  <tr>
                    <td className="p-3">Menos de 30 días</td>
                    <td className="p-3"><strong className="text-[var(--color-text)]">0%</strong> — no se realizan reembolsos</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs">La fecha relevante es la de recepción del correo electrónico de cancelación en la dirección oficial. WhatsApp y conversaciones informales no determinan plazo.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">5. Documento Legal de Causa (Obligatorio)</h2>
            <p className="mb-3">Para procesar cualquier reembolso conforme a la Sección 4, el Cliente deberá presentar documentación firmada y certificada que acredite que la cancelación se produjo por una de las <strong className="text-[var(--color-text)]">dos únicas causas aceptadas</strong>:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li><strong className="text-[var(--color-text)]">Enfermedad o accidente</strong> que impida físicamente viajar (certificado médico oficial firmado por médico licenciado, con diagnóstico y prohibición expresa de viajar).</li>
              <li><strong className="text-[var(--color-text)]">Fallecimiento de familiar directo</strong> (padre, madre, cónyuge, hijo, hermano): certificado de defunción + prueba documental del vínculo.</li>
            </ul>
            <p>Cualquier otra causa &mdash; denegación de visa, rechazo en frontera, conflicto laboral, cambio de planes, emergencia familiar no fallecimiento, fuerza mayor personal o decisión voluntaria &mdash; <strong className="text-[var(--color-text)]">NO da derecho a reembolso alguno</strong>, ni siquiera del monto pagado por encima del depósito.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">6. Cancelación por parte de la Empresa</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong className="text-[var(--color-text)]">Mínimo de inscritos:</strong> Si a 60 días de la salida el grupo no alcanza 6 plazas confirmadas, la Empresa puede (a) cancelar y reembolsar el 100% (incluido el depósito) dentro de 30 días hábiles, o (b) ofrecer reagendar a una próxima salida con los pagos como crédito.</li>
              <li><strong className="text-[var(--color-text)]">Incumplimiento del operador local:</strong> La Empresa reembolsa lo que efectivamente recupere del operador, menos gastos administrativos documentados.</li>
              <li><strong className="text-[var(--color-text)]">Seguridad operacional grave:</strong> En epidemia activa, conflicto geopolítico o alerta consular roja, aplica reembolso 100%.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">7. Fuerza Mayor</h2>
            <p className="mb-3">En caso de eventos ajenos al control razonable (pandemias, guerras, terrorismo, desastres naturales, cierres de frontera, suspensión generalizada del tráfico aéreo, crisis de combustible), la Empresa queda eximida de la ejecución y <strong className="text-[var(--color-text)]">no está obligada a reembolsar de sus propios fondos</strong>.</p>
            <p>La Empresa actuará como mediador para recuperar fondos del operador local, reembolsando al Cliente únicamente los montos efectivamente recuperados, menos gastos administrativos. No se indemnizan boletos aéreos internacionales, oportunidades perdidas, costos de visado/vacunas ni gastos preparativos.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">8. Procedimiento de Cancelación</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong className="text-[var(--color-text)]">Notificación por escrito</strong> a <a href="mailto:katherine@emails.asialoposible.net" className="text-[var(--color-accent)] underline hover:no-underline">katherine@emails.asialoposible.net</a>.</li>
              <li><strong className="text-[var(--color-text)]">Información requerida:</strong> nombre completo, pasaporte, fecha de salida, motivo, documentación de causa adjunta, datos bancarios para el reembolso.</li>
              <li><strong className="text-[var(--color-text)]">Confirmación de recepción</strong> en 3 días hábiles, indicando el monto del eventual reembolso.</li>
              <li><strong className="text-[var(--color-text)]">Procesamiento del reembolso</strong> dentro de 60 días hábiles desde la aceptación formal.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">9. Método, Moneda y Gastos</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-[var(--color-text)]">Método:</strong> a elección de la Empresa &mdash; mismo método de pago original (cuando el procesador lo permita), transferencia internacional, o método electrónico equivalente.</li>
              <li><strong className="text-[var(--color-text)]">Moneda:</strong> Dólares Estadounidenses (USD). Las pérdidas o ganancias por conversión las asume el Cliente.</li>
              <li><strong className="text-[var(--color-text)]">Gastos bancarios:</strong> los costos de transferencia internacional (modo &laquo;OUR&raquo;) corren a cargo del Cliente y se deducen del monto a reembolsar.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">10. Gastos Externos No Indemnizables</h2>
            <p className="mb-3">La Empresa no se hace responsable, en ningún caso, de:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Boletos aéreos internacionales adquiridos por el Cliente.</li>
              <li>Reservas de hotel previas o posteriores al viaje.</li>
              <li>Gastos de visado, vacunas o trámites preparatorios.</li>
              <li>Oportunidades de negocio, lucro cesante, ingresos dejados de percibir.</li>
              <li>Cualquier otro gasto incurrido por el Cliente de forma independiente.</li>
            </ul>
            <p className="mt-3">La <strong className="text-[var(--color-text)]">única vía para protegerte contra estas pérdidas externas</strong> es contratar un seguro de cancelación de viaje antes de comenzar el plan de pagos.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">11. Resolución de Disputas — Procedimiento Previo</h2>
            <p className="mb-3">Antes de iniciar cualquier acción legal o de presentar un chargeback ante el emisor de la tarjeta, el Cliente acepta intentar una resolución amistosa contactando a la Empresa a <a href="mailto:katherine@emails.asialoposible.net" className="text-[var(--color-accent)] underline hover:no-underline">katherine@emails.asialoposible.net</a> y permitiendo un plazo de <strong className="text-[var(--color-text)]">30 días calendario</strong> para responder.</p>
            <p>Iniciar un chargeback antes de cumplir este procedimiento constituye un incumplimiento del contrato. Las disputas no resueltas en 30 días se someten al procedimiento de arbitraje obligatorio AAA descrito en los <Link href="/terminos-viaje" className="text-[var(--color-accent)] underline hover:no-underline">Términos y Condiciones del Viaje</Link>.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">12. Documentos Relacionados</h2>
            <p>Esta política forma parte integral del paquete contractual del viaje, junto con los <Link href="/terminos-viaje" className="text-[var(--color-accent)] underline hover:no-underline">Términos y Condiciones del Viaje</Link>, el Waiver de Exoneración de Responsabilidad (firmado vía DocuSeal), el <Link href="/aviso-legal" className="text-[var(--color-accent)] underline hover:no-underline">Aviso Legal</Link>, y la <Link href="/privacidad" className="text-[var(--color-accent)] underline hover:no-underline">Política de Privacidad</Link>.</p>
          </section>

          <section className="border-t pt-8" style={{ borderColor: 'rgba(142,148,165,0.2)' }}>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">Aceptación</h2>
            <p>Al pagar el depósito de reserva, el Cliente declara haber leído, comprendido y aceptado en su totalidad la presente Política de Cancelación.</p>
            <p className="mt-4">Contacto: <a href="mailto:katherine@emails.asialoposible.net" className="text-[var(--color-accent)] underline hover:no-underline">katherine@emails.asialoposible.net</a> · WhatsApp +58 424 845 5010 · Instagram @kathmolinares.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
