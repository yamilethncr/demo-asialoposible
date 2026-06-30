import type { Metadata } from 'next'
import PromoBanner from '@/components/PromoBanner'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import VietnamCamboyaTrip from '@/components/VietnamCamboyaTrip'

export const metadata: Metadata = {
  title: 'Viaje a Vietnam y Camboya en español | 14 días',
  description:
    'Viaje grupal a Vietnam y Camboya en español: 14 días, 6 destinos, grupo máximo de 10. Hanói, crucero por la Bahía de Halong, Hoi An y Angkor Wat. Hoteles 4-5★. Desde $3,200 USD.',
  openGraph: {
    title: 'Viaje a Vietnam y Camboya en español | 14 días',
    description:
      '14 días, 6 destinos, grupo máximo de 10. Crucero por la Bahía de Halong y Angkor Wat, todo en español. Desde $3,200 USD.',
    url: 'https://asialoposible.net/viajes/vietnam-camboya',
    siteName: 'Asia Lo Posible',
    locale: 'es_LA',
    type: 'website',
    images: [{ url: '/og-asialoposible.jpg', width: 1200, height: 630, alt: 'Viaje a Vietnam y Camboya en español' }],
  },
  alternates: { canonical: '/viajes/vietnam-camboya' },
}

const touristTripSchema = {
  '@context': 'https://schema.org',
  '@type': 'TouristTrip',
  name: 'Viaje a Vietnam y Camboya en Español — 14 Días Todo Incluido',
  description:
    '14 días por Vietnam y Camboya: Hanói, Bahía de Halong, Hue, Da Nang, Hoi An y Siem Reap (Angkor Wat). Grupo máximo de 10 personas, todo en español.',
  touristType: 'Spanish-speaking travelers',
  itinerary: {
    '@type': 'ItemList',
    numberOfItems: 6,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Hanói, Vietnam' },
      { '@type': 'ListItem', position: 2, name: 'Bahía de Halong, Vietnam' },
      { '@type': 'ListItem', position: 3, name: 'Hue, Vietnam' },
      { '@type': 'ListItem', position: 4, name: 'Da Nang, Vietnam' },
      { '@type': 'ListItem', position: 5, name: 'Hoi An, Vietnam' },
      { '@type': 'ListItem', position: 6, name: 'Siem Reap & Angkor Wat, Camboya' },
    ],
  },
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '3200',
    highPrice: '3855',
    priceCurrency: 'USD',
    offerCount: 2,
    availability: 'https://schema.org/LimitedAvailability',
  },
  provider: { '@type': 'TravelAgency', name: 'Asia Lo Posible', url: 'https://asialoposible.net' },
  inLanguage: 'es',
}

const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Viaje Organizado a Vietnam y Camboya en Español',
  description:
    'Viaje guiado de 14 días por Vietnam y Camboya en español. Grupo exclusivo de 10 personas. Hoteles 4-5 estrellas, crucero de lujo en la Bahía de Halong, templos de Angkor Wat. Todo incluido.',
  startDate: '2026-08-01',
  endDate: '2026-08-14',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  organizer: { '@type': 'Person', name: 'Katherine Molinares', url: 'https://asialoposible.net' },
  location: {
    '@type': 'Place',
    name: 'Vietnam y Camboya',
    address: { '@type': 'PostalAddress', addressCountry: 'VN' },
  },
  offers: {
    '@type': 'Offer',
    price: '3200',
    priceCurrency: 'USD',
    availability: 'https://schema.org/LimitedAvailability',
    url: 'https://asialoposible.net/viajes/vietnam-camboya',
  },
  inLanguage: 'es',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://asialoposible.net' },
    { '@type': 'ListItem', position: 2, name: 'Viajes', item: 'https://asialoposible.net/#viajes' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Vietnam y Camboya',
      item: 'https://asialoposible.net/viajes/vietnam-camboya',
    },
  ],
}

export default function VietnamCamboyaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PromoBanner />
      <Navbar />
      <VietnamCamboyaTrip />
      <Footer />
    </>
  )
}
