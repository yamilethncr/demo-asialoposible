import type { Metadata } from 'next'
import PromoBanner from '@/components/PromoBanner'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import VietnamCamboyaTrip from '@/components/VietnamCamboyaTrip'

/**
 * Variante de tráfico pagado (noindex). Reusa el cuerpo de la money page
 * Vietnam & Camboya, que ya incluye el formulario de captura de leads.
 */
export const metadata: Metadata = {
  title: 'Viaje a Vietnam y Camboya en Español | Déjanos tus Datos',
  description:
    'Viaje organizado a Vietnam y Camboya en español. 14 días, 6 destinos, grupo exclusivo. Déjanos tus datos y te contactamos con el itinerario completo.',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://asialoposible.net/viajes/vietnam-camboya' },
}

export default function InscribetePage() {
  return (
    <>
      <PromoBanner />
      <Navbar />
      <VietnamCamboyaTrip />
      <Footer />
    </>
  )
}
