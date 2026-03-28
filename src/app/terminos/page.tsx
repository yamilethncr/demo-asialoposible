import Link from 'next/link'

export const metadata = {
  title: 'Términos y Condiciones de la Web — Asia Lo Posible',
}

export default function Terminos() {
  return (
    <main className="min-h-screen py-20 px-5 md:px-10">
      <div className="max-w-[800px] mx-auto">
        <Link href="/" className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] no-underline hover:underline mb-10 block">&larr; Volver al inicio</Link>
        <h1 className="text-2xl md:text-4xl font-bold mb-8 uppercase">T&eacute;rminos y Condiciones de la Web</h1>
        <p className="text-xs text-[var(--color-secondary)] mb-10">&Uacute;ltima actualizaci&oacute;n: Marzo 2026</p>

        <div className="space-y-8 text-[0.9rem] leading-relaxed text-[var(--color-secondary)]">
          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">1. Informaci&oacute;n General</h2>
            <p>Este sitio web es propiedad y est&aacute; operado por Asialoposible.net. Al acceder y utilizar este sitio web, aceptas cumplir con los presentes t&eacute;rminos y condiciones de uso. Si no est&aacute;s de acuerdo con alguno de estos t&eacute;rminos, te rogamos que no utilices el sitio.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">2. Uso del Sitio Web</h2>
            <p>Este sitio web tiene fines informativos y promocionales sobre los servicios de viaje ofrecidos por Asia Lo Posible. El contenido publicado (textos, im&aacute;genes, dise&ntilde;os, logotipos) es propiedad de Asia Lo Posible o se utiliza con autorizaci&oacute;n. Queda prohibida su reproducci&oacute;n, distribuci&oacute;n o uso comercial sin autorizaci&oacute;n previa por escrito.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">3. Exactitud de la Informaci&oacute;n</h2>
            <p>Asia Lo Posible se esfuerza por mantener la informaci&oacute;n del sitio actualizada y precisa, incluyendo precios, itinerarios, hoteles y servicios. Sin embargo, no garantiza que toda la informaci&oacute;n est&eacute; libre de errores u omisiones. Los precios, disponibilidad y caracter&iacute;sticas de los servicios pueden cambiar sin previo aviso. La informaci&oacute;n definitiva ser&aacute; la confirmada al momento de la reserva.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">4. Propiedad Intelectual</h2>
            <p>Todo el contenido de este sitio web, incluyendo pero no limitado a textos, fotograf&iacute;as, gr&aacute;ficos, logotipos, iconos y dise&ntilde;o, est&aacute; protegido por derechos de autor y otras leyes de propiedad intelectual. Las fotograf&iacute;as de destinos tur&iacute;sticos son utilizadas con fines ilustrativos y pueden no representar las condiciones exactas durante el viaje.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">5. Enlaces Externos</h2>
            <p>Este sitio puede contener enlaces a sitios web de terceros (hoteles, aerol&iacute;neas, proveedores de servicios). Asia Lo Posible no se responsabiliza por el contenido, pol&iacute;ticas de privacidad ni pr&aacute;cticas de dichos sitios. El acceso a enlaces externos es bajo tu propia responsabilidad.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">6. Comunicaciones</h2>
            <p>Al utilizar los formularios de contacto, enlaces de WhatsApp u otros canales de comunicaci&oacute;n del sitio, aceptas recibir respuestas e informaci&oacute;n relacionada con los servicios de Asia Lo Posible. No compartiremos tu informaci&oacute;n de contacto con terceros sin tu consentimiento.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">7. Limitaci&oacute;n de Responsabilidad</h2>
            <p>Asia Lo Posible no ser&aacute; responsable por da&ntilde;os directos o indirectos derivados del uso o imposibilidad de uso de este sitio web, incluyendo errores t&eacute;cnicos, interrupciones del servicio o p&eacute;rdida de datos. El sitio se proporciona &ldquo;tal como est&aacute;&rdquo; sin garant&iacute;as de ningún tipo.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">8. Modificaciones</h2>
            <p>Asia Lo Posible se reserva el derecho de modificar estos t&eacute;rminos y condiciones en cualquier momento. Los cambios entrar&aacute;n en vigor desde su publicaci&oacute;n en el sitio. El uso continuado del sitio despu&eacute;s de cualquier modificaci&oacute;n constituye la aceptaci&oacute;n de los nuevos t&eacute;rminos.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">9. Otros T&eacute;rminos</h2>
            <p>Para los t&eacute;rminos espec&iacute;ficos del viaje (reservas, pagos, cancelaciones, alojamiento), consulta nuestros{' '}
              <a href="/terminos-viaje" className="text-[var(--color-accent)] underline hover:no-underline">T&eacute;rminos y Condiciones del Viaje</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">10. Contacto</h2>
            <p>Para consultas sobre estos t&eacute;rminos, escr&iacute;benos por WhatsApp al +58 424 845 5010 o por Instagram a @kathmolinares.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
