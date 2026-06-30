import Link from 'next/link'

export const metadata = {
  title: 'Términos de la Web — Asia Lo Posible',
  description: 'Términos y condiciones de uso del sitio web asialoposible.net. Propiedad intelectual, enlaces externos, limitación de responsabilidad y legislación aplicable.',
}

export default function Terminos() {
  return (
    <main className="min-h-screen py-20 px-5 md:px-10">
      <div className="max-w-[800px] mx-auto">
        <Link href="/" className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] no-underline hover:underline mb-10 block">&larr; Volver al inicio</Link>
        <h1 className="text-2xl md:text-4xl font-bold mb-8 uppercase">Términos de la Web</h1>
        <p className="text-xs text-[var(--color-secondary)] mb-10">Última actualización: Mayo 2026</p>

        <div className="space-y-8 text-[0.9rem] leading-relaxed text-[var(--color-secondary)]">

          <section className="p-5" style={{ border: '1px solid rgba(200,161,90,0.3)', background: 'rgba(200,161,90,0.05)' }}>
            <p><strong className="text-[var(--color-text)]">Importante.</strong> Estos son los términos de uso del sitio web. <strong className="text-[var(--color-text)]">Comprar un viaje requiere aceptar separadamente</strong> los <Link href="/terminos-viaje" className="text-[var(--color-accent)] underline hover:no-underline">Términos y Condiciones del Viaje</Link>, la <Link href="/politica-de-cancelacion" className="text-[var(--color-accent)] underline hover:no-underline">Política de Cancelación</Link> y el Waiver de Exoneración de Responsabilidad, que se firman vía DocuSeal al pagar el depósito.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">1. Información General</h2>
            <p>Asia Lo Posible es una marca comercial operada por <strong className="text-[var(--color-text)]">Pond Horizons LLC</strong> (EIN 38-4385110), sociedad registrada en el Estado de Nuevo México, EE.UU., titular del sitio web asialoposible.net. Al acceder y utilizar este sitio, aceptas cumplir estos términos. Si no estás de acuerdo, te rogamos que no utilices el sitio.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">2. Uso del Sitio</h2>
            <p>Este sitio tiene fines informativos y promocionales sobre los servicios de viaje ofrecidos por Asia Lo Posible. El contenido publicado (textos, imágenes, diseños, logotipos) es propiedad de Pond Horizons LLC o se utiliza con autorización. Queda prohibida su reproducción, distribución, descarga, copia o uso comercial sin autorización previa por escrito.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">3. Exactitud de la Información</h2>
            <p>Asia Lo Posible se esfuerza por mantener la información actualizada y precisa, incluyendo precios, itinerarios, hoteles y servicios. Sin embargo, no garantiza que toda la información esté libre de errores u omisiones. Los precios, disponibilidad y características pueden cambiar sin previo aviso. La información definitiva y vinculante es la confirmada al momento de la reserva mediante los <Link href="/terminos-viaje" className="text-[var(--color-accent)] underline hover:no-underline">Términos del Viaje</Link>.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">4. Propiedad Intelectual</h2>
            <p className="mb-3">Todo el contenido del sitio (textos, fotografías, gráficos, logotipos, iconos, vídeo, diseño) está protegido por las leyes de derechos de autor y propiedad intelectual de EE.UU. e internacionales. Las fotografías de destinos turísticos se utilizan con fines ilustrativos y pueden no representar las condiciones exactas durante el viaje.</p>
            <p><strong className="text-[var(--color-text)]">Notificaciones DMCA / infracción de derechos.</strong> Si consideras que algún contenido del sitio infringe tus derechos de autor, envía una notificación detallada (identificación de la obra, URL del contenido infractor, declaración bajo juramento) a <a href="mailto:katherine@emails.asialoposible.net" className="text-[var(--color-accent)] underline hover:no-underline">katherine@emails.asialoposible.net</a>. Atenderemos la notificación de buena fe conforme a la práctica DMCA.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">5. Enlaces Externos</h2>
            <p>Este sitio puede contener enlaces a sitios web de terceros (hoteles, aerolíneas, proveedores, redes sociales). Asia Lo Posible no se responsabiliza por el contenido, políticas de privacidad ni prácticas de dichos sitios. El acceso a enlaces externos es bajo tu propia responsabilidad.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">6. Comunicaciones y Captación de Leads</h2>
            <p>Al utilizar los formularios de contacto, enlaces de WhatsApp, llamadas, suscripción por email u otros canales del sitio, aceptas que Pond Horizons LLC procese tus datos conforme a la <Link href="/privacidad" className="text-[var(--color-accent)] underline hover:no-underline">Política de Privacidad</Link>, y aceptas recibir respuestas e información relacionada con los servicios ofrecidos. Puedes retirar tu consentimiento en cualquier momento.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">7. Limitación de Responsabilidad del Sitio</h2>
            <p>El sitio se proporciona <strong className="text-[var(--color-text)]">&laquo;tal como está&raquo;</strong> sin garantías de ningún tipo. Asia Lo Posible no será responsable por daños directos, indirectos, incidentales o consecuenciales derivados del uso o imposibilidad de uso del sitio, incluyendo errores técnicos, interrupciones del servicio, pérdida de datos, o efectos de virus, malware o ataques de terceros.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">8. Modificaciones de estos Términos</h2>
            <p>Asia Lo Posible se reserva el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor desde su publicación. El uso continuado del sitio tras la publicación de cambios constituye aceptación.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">9. Documentos Legales Relacionados</h2>
            <p>Para los términos específicos de compra y ejecución del viaje, consulta:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li><Link href="/terminos-viaje" className="text-[var(--color-accent)] underline hover:no-underline">Términos y Condiciones del Viaje</Link>.</li>
              <li><Link href="/politica-de-cancelacion" className="text-[var(--color-accent)] underline hover:no-underline">Política de Cancelación</Link>.</li>
              <li><Link href="/aviso-legal" className="text-[var(--color-accent)] underline hover:no-underline">Aviso Legal</Link>.</li>
              <li><Link href="/privacidad" className="text-[var(--color-accent)] underline hover:no-underline">Política de Privacidad</Link>.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">10. Ley Aplicable y Jurisdicción</h2>
            <p>Estos términos se rigen por las leyes del Estado de Nuevo México, EE.UU. Las disputas relacionadas con la compra de un viaje se rigen por el régimen de arbitraje AAA descrito en los Términos y Condiciones del Viaje. Para disputas relacionadas exclusivamente con el uso del sitio (no con la compra de un viaje), las partes acuerdan someterse a las cortes competentes del Estado de Nuevo México.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">11. Contacto</h2>
            <p>Para consultas sobre estos términos: <a href="mailto:katherine@emails.asialoposible.net" className="text-[var(--color-accent)] underline hover:no-underline">katherine@emails.asialoposible.net</a> · WhatsApp +58 424 845 5010 · Instagram @kathmolinares.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
