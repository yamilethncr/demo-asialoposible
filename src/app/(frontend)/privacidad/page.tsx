import Link from 'next/link'

export const metadata = {
  title: 'Política de Privacidad — Asia Lo Posible',
  description: 'Política de privacidad de Asia Lo Posible. Cómo recopilamos, usamos y protegemos tus datos personales.',
}

export default function Privacidad() {
  return (
    <main className="min-h-screen py-20 px-5 md:px-10">
      <div className="max-w-[800px] mx-auto">
        <Link href="/" className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] no-underline hover:underline mb-10 block">&larr; Volver al inicio</Link>
        <h1 className="text-2xl md:text-4xl font-bold mb-8">POLÍTICA DE PRIVACIDAD</h1>
        <p className="text-xs text-[var(--color-secondary)] mb-10">Última actualización: Marzo 2026</p>

        <div className="space-y-8 text-[0.9rem] leading-relaxed text-[var(--color-secondary)]">
          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">1. Datos que Recopilamos</h2>
            <p>Al contactarnos para reservar o consultar sobre el viaje, podemos recopilar tu nombre completo, correo electrónico, número de teléfono/WhatsApp, país de residencia y datos necesarios para la gestión del viaje (pasaporte, preferencias alimentarias, condiciones médicas relevantes).</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">2. Uso de los Datos</h2>
            <p>Tus datos personales se utilizan exclusivamente para: gestionar tu reserva y participación en el viaje, comunicarnos contigo sobre el itinerario y logística, coordinar con operadores turísticos y proveedores de servicios, y enviarte información relevante sobre el viaje.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">3. Compartición de Datos</h2>
            <p>Tus datos podrán ser compartidos con los operadores turísticos locales, hoteles y aerolíneas estrictamente para la prestación de los servicios contratados. No vendemos ni cedemos tus datos a terceros con fines comerciales.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">4. Almacenamiento y Seguridad</h2>
            <p>Tus datos se almacenan de forma segura y se conservan únicamente durante el tiempo necesario para cumplir con los fines para los que fueron recopilados. Implementamos medidas razonables de seguridad para proteger tu información personal.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">5. Tus Derechos</h2>
            <p>Tienes derecho a acceder, rectificar, eliminar o limitar el tratamiento de tus datos personales. Para ejercer estos derechos, contáctanos a <a href="mailto:katherine@emails.asialoposible.net" className="text-[var(--color-accent)] underline hover:no-underline">katherine@emails.asialoposible.net</a>, por WhatsApp al +58 424 845 5010 o por Instagram a @kathmolinares.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">6. Cookies y Sitio Web</h2>
            <p>Este sitio web no utiliza cookies de seguimiento ni herramientas de analítica de terceros. La navegación es completamente anónima.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">7. Cambios en esta Política</h2>
            <p>Nos reservamos el derecho de actualizar esta política. Cualquier cambio será publicado en esta página con la fecha de última actualización.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
