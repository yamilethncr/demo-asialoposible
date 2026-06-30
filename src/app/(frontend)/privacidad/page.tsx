import Link from 'next/link'

export const metadata = {
  title: 'Política de Privacidad — Asia Lo Posible',
  description: 'Política de privacidad y protección de datos de Asia Lo Posible: responsable, base legal, datos recopilados, finalidades, transferencias internacionales, retención y derechos del titular.',
}

export default function Privacidad() {
  return (
    <main className="min-h-screen py-20 px-5 md:px-10">
      <div className="max-w-[800px] mx-auto">
        <Link href="/" className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] no-underline hover:underline mb-10 block">&larr; Volver al inicio</Link>
        <h1 className="text-2xl md:text-4xl font-bold mb-8">Política de Privacidad</h1>
        <p className="text-xs text-[var(--color-secondary)] mb-10">Última actualización: Mayo 2026 · Versión 1.0</p>

        <div className="space-y-8 text-[0.9rem] leading-relaxed text-[var(--color-secondary)]">

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">1. Responsable del Tratamiento</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-[var(--color-text)]">Razón social:</strong> Pond Horizons LLC.</li>
              <li><strong className="text-[var(--color-text)]">EIN:</strong> 38-4385110.</li>
              <li><strong className="text-[var(--color-text)]">Domicilio:</strong> 1209 Mountain Road Place NE, Suite R, Albuquerque, NM 87110, USA.</li>
              <li><strong className="text-[var(--color-text)]">Contacto para asuntos de privacidad:</strong> <a href="mailto:katherine@emails.asialoposible.net" className="text-[var(--color-accent)] underline hover:no-underline">katherine@emails.asialoposible.net</a>.</li>
              <li><strong className="text-[var(--color-text)]">Marca operada:</strong> Asia Lo Posible (asialoposible.net).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">2. Marco Legal Aplicable</h2>
            <p>Esta política se alinea con: el Reglamento General de Protección de Datos (RGPD/GDPR, Reglamento UE 2016/679) para residentes de la Unión Europea; la Ley Orgánica 3/2018 de Protección de Datos (LOPDGDD) de España; la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) de México; la Ley 1581 de 2012 (Estatuto de Protección de Datos) de Colombia; y las normas equivalentes de protección al consumidor en otros países latinoamericanos.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">3. Categorías de Datos Recopilados</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-[var(--color-text)]">Datos de identificación:</strong> nombre completo, fecha de nacimiento, copia del pasaporte (necesario para reservas de vuelo y hotel).</li>
              <li><strong className="text-[var(--color-text)]">Datos de contacto:</strong> email, WhatsApp, país de residencia.</li>
              <li><strong className="text-[var(--color-text)]">Datos de salud relevantes (sensibles):</strong> alergias, medicación regular, condiciones preexistentes que el viajero declare voluntariamente para garantizar su seguridad durante el viaje.</li>
              <li><strong className="text-[var(--color-text)]">Datos financieros:</strong> procesados directamente por la pasarela de pago (PayKings, Stripe, PayPal o sucesor). Pond Horizons LLC <strong className="text-[var(--color-text)]">no almacena</strong> los números de tarjeta (PAN).</li>
              <li><strong className="text-[var(--color-text)]">Datos contractuales:</strong> versión del contrato firmado, fecha y hora UTC de aceptación, dirección IP, dispositivo, registro de DocuSeal.</li>
              <li><strong className="text-[var(--color-text)]">Imagen y voz:</strong> fotografías y vídeo capturados durante el viaje, conforme al Photo/Video Release del Waiver firmado.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">4. Base Legal y Finalidades</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-[var(--color-text)]">Ejecución del contrato</strong> (art. 6.1.b RGPD, art. 8.II LFPDPPP, art. 10.a Ley 1581): gestión de la reserva, contratación con el operador local, comunicaciones pre/post viaje, cumplimiento de obligaciones migratorias y aduaneras.</li>
              <li><strong className="text-[var(--color-text)]">Consentimiento</strong> (art. 6.1.a RGPD): marketing y comunicaciones promocionales fuera del contrato vigente.</li>
              <li><strong className="text-[var(--color-text)]">Obligación legal</strong> (art. 6.1.c RGPD): cumplimiento de KYC y anti-fraude del procesador de pagos, retención fiscal y contable.</li>
              <li><strong className="text-[var(--color-text)]">Interés legítimo</strong> (art. 6.1.f RGPD): defensa frente a chargebacks, disputas y reclamos legales, seguridad del grupo.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">5. Destinatarios y Transferencias Internacionales</h2>
            <p className="mb-3">Para ejecutar el viaje, ciertos datos se transfieren a:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-[var(--color-text)]">Equipo interno y contratistas de Pond Horizons LLC</strong>: empleados, oficiales, asesores y contratistas que necesiten acceder a la información para operación, atención al cliente, contabilidad, cumplimiento legal o defensa frente a disputas.</li>
              <li><strong className="text-[var(--color-text)]">Katherine Molinares Angel</strong> (Tour Leader, contratista independiente): datos necesarios para su rol de host del grupo, comunicación pre/post viaje, gestión de información de salud declarada y coordinación con el operador local.</li>
              <li><strong className="text-[var(--color-text)]">Operador turístico licenciado en Vietnam</strong> (responsable de la ejecución logística del viaje): pasaporte, nombre, fechas, datos médicos declarados. La identidad legal completa del operador se identifica al viajero en los documentos contractuales firmados al reservar.</li>
              <li><strong className="text-[var(--color-text)]">Hoteles, aerolíneas, cruceros</strong> del itinerario: datos de check-in.</li>
              <li><strong className="text-[var(--color-text)]">Autoridades migratorias</strong> de Vietnam y Camboya: según exigencias migratorias locales.</li>
              <li><strong className="text-[var(--color-text)]">Procesador de pagos</strong> (PayKings, SMB Global, Stripe o sucesor, EE.UU.): datos exigidos por KYC y anti-fraude.</li>
              <li><strong className="text-[var(--color-text)]">DocuSeal</strong> (EE.UU.): firma electrónica de los documentos contractuales.</li>
              <li><strong className="text-[var(--color-text)]">Resend, Vercel, Neon (EE.UU.):</strong> infraestructura de comunicación, alojamiento web y base de datos.</li>
            </ul>
            <p className="mt-3"><strong className="text-[var(--color-text)]">Transferencia a Vietnam.</strong> Vietnam no cuenta con una decisión de adecuación de la Unión Europea. La transferencia se ampara en (a) la ejecución del contrato (art. 49.1.b RGPD) y (b) el consentimiento informado del titular al inscribirse en el viaje.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">6. Plazos de Retención</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-[var(--color-text)]">Datos del viaje:</strong> 24 meses posteriores a la finalización del viaje (plazo necesario para defensa frente a chargebacks, disputas y reclamos legales).</li>
              <li><strong className="text-[var(--color-text)]">Datos contables y fiscales:</strong> 7 años, conforme a las obligaciones fiscales de EE.UU.</li>
              <li><strong className="text-[var(--color-text)]">Datos de marketing:</strong> hasta que el titular revoque el consentimiento.</li>
              <li><strong className="text-[var(--color-text)]">Material audiovisual del viaje:</strong> conforme al Photo/Video Release firmado (perpetuo, salvo opt-out previo o revocación por incumplimiento material de la Empresa).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">7. Derechos del Titular</h2>
            <p className="mb-3">Como titular de los datos, tienes los siguientes derechos:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-[var(--color-text)]">Acceso:</strong> conocer qué datos tuyos tratamos.</li>
              <li><strong className="text-[var(--color-text)]">Rectificación:</strong> corregir datos inexactos o incompletos.</li>
              <li><strong className="text-[var(--color-text)]">Supresión / cancelación (&laquo;derecho al olvido&raquo;):</strong> solicitar la eliminación de tus datos, sujeto a los plazos de retención obligatorios.</li>
              <li><strong className="text-[var(--color-text)]">Oposición:</strong> oponerte al tratamiento por motivos legítimos personales.</li>
              <li><strong className="text-[var(--color-text)]">Limitación del tratamiento:</strong> solicitar que el tratamiento se restrinja.</li>
              <li><strong className="text-[var(--color-text)]">Portabilidad:</strong> recibir tus datos en formato estructurado y transferirlos a otro responsable.</li>
              <li><strong className="text-[var(--color-text)]">Revocación del consentimiento:</strong> retirar tu consentimiento en cualquier momento, sin efectos retroactivos.</li>
              <li><strong className="text-[var(--color-text)]">Reclamación ante autoridad de control:</strong> presentar queja ante la AEPD (España), INAI (México), SIC (Colombia), DPC (Irlanda) o la autoridad equivalente de tu país.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">8. Ejercicio de Derechos</h2>
            <p>Para ejercer cualquier derecho, envía un email a <a href="mailto:katherine@emails.asialoposible.net" className="text-[var(--color-accent)] underline hover:no-underline">katherine@emails.asialoposible.net</a> adjuntando copia del pasaporte para verificar tu identidad (eliminamos esta copia una vez verificada). Responderemos en un plazo máximo de <strong className="text-[var(--color-text)]">30 días naturales</strong>.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">9. Cookies y Tecnologías de Seguimiento</h2>
            <p>Actualmente, este sitio web <strong className="text-[var(--color-text)]">no utiliza cookies de seguimiento de terceros, pixeles publicitarios ni herramientas de analítica</strong> de terceros. La navegación es esencialmente anónima. Si en el futuro implementamos analytics o pixeles, mostraremos un banner de consentimiento previo y actualizaremos esta política antes de activar dicho tratamiento.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">10. Seguridad</h2>
            <p>Implementamos medidas técnicas y organizativas razonables para proteger los datos: cifrado en tránsito (HTTPS/TLS), control de acceso a la base de datos, contratos de procesamiento con los encargados (Vercel, Neon, Resend, DocuSeal), y notificación de brechas de seguridad en 72 horas conforme al art. 33 RGPD. Ninguna medida de seguridad es absoluta; el titular acepta el riesgo residual inherente a la transmisión de datos por Internet.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">11. Menores de Edad</h2>
            <p>No procesamos voluntariamente datos personales de menores de 18 años sin consentimiento parental verificable. Los menores que viajen con familiares deberán acompañar consentimiento parental notarial conforme a los Términos del Viaje.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">12. Cambios en esta Política</h2>
            <p>Nos reservamos el derecho de actualizar esta política. Los cambios sustanciales se notificarán por email a los usuarios registrados con al menos 30 días de antelación. La fecha de última actualización se indica al inicio de esta página.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">13. Documentos Legales Relacionados</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><Link href="/aviso-legal" className="text-[var(--color-accent)] underline hover:no-underline">Aviso Legal</Link>.</li>
              <li><Link href="/terminos" className="text-[var(--color-accent)] underline hover:no-underline">Términos de la Web</Link>.</li>
              <li><Link href="/terminos-viaje" className="text-[var(--color-accent)] underline hover:no-underline">Términos y Condiciones del Viaje</Link>.</li>
              <li><Link href="/politica-de-cancelacion" className="text-[var(--color-accent)] underline hover:no-underline">Política de Cancelación</Link>.</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
