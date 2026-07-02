import type { Metadata } from 'next'
import PromoBanner from '@/components/PromoBanner'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import VietnamCamboyaTrip from '@/components/VietnamCamboyaTrip'

export const metadata: Metadata = {
  title: 'Viaje a Vietnam y Camboya en español | 15 días',
  description:
    'Viaje organizado a Vietnam y Camboya en español: 15 días, grupo máx. 10. Bahía de Halong, Hoi An y Angkor Wat. Hoteles 3-5★ todo incluido desde $3,620.',
  openGraph: {
    title: 'Viaje a Vietnam y Camboya en español | 15 días',
    description:
      '15 días, 9 destinos, grupo máximo de 10. Crucero por la Bahía de Halong y Angkor Wat, todo en español. Desde $3,620 USD.',
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
  name: 'Viaje a Vietnam y Camboya en Español — 15 Días Todo Incluido',
  description:
    '15 días por Vietnam y Camboya: Hanói, Mai Chau, Pu Luong, Ninh Binh, Bahía de Halong, Hue, Hoi An, Ho Chi Minh y Siem Reap (Angkor Wat). Grupo máximo de 10 personas, todo en español.',
  image: 'https://asialoposible.net/og-asialoposible.jpg',
  touristType: 'Spanish-speaking travelers',
  itinerary: {
    '@type': 'ItemList',
    numberOfItems: 9,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Hanói, Vietnam' },
      { '@type': 'ListItem', position: 2, name: 'Mai Chau, Vietnam' },
      { '@type': 'ListItem', position: 3, name: 'Pu Luong, Vietnam' },
      { '@type': 'ListItem', position: 4, name: 'Ninh Binh, Vietnam' },
      { '@type': 'ListItem', position: 5, name: 'Bahía de Halong, Vietnam' },
      { '@type': 'ListItem', position: 6, name: 'Hue, Vietnam' },
      { '@type': 'ListItem', position: 7, name: 'Hoi An, Vietnam' },
      { '@type': 'ListItem', position: 8, name: 'Ho Chi Minh, Vietnam' },
      { '@type': 'ListItem', position: 9, name: 'Siem Reap & Angkor Wat, Camboya' },
    ],
  },
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '3620',
    highPrice: '4386',
    priceCurrency: 'USD',
    offerCount: 3,
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
    'Viaje guiado de 15 días por Vietnam y Camboya en español. Grupo exclusivo de 10 personas. Hoteles 3-5 estrellas, crucero de lujo en la Bahía de Halong, templos de Angkor Wat. Todo incluido.',
  startDate: '2027-03-23',
  endDate: '2027-04-05',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  image: 'https://asialoposible.net/og-asialoposible.jpg',
  organizer: { '@type': 'Person', name: 'Katherine Molinares', url: 'https://asialoposible.net' },
  location: {
    '@type': 'Place',
    name: 'Vietnam y Camboya',
    address: { '@type': 'PostalAddress', addressCountry: 'VN' },
  },
  offers: {
    '@type': 'Offer',
    price: '3620',
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
    { '@type': 'ListItem', position: 2, name: 'Viajes', item: 'https://asialoposible.net/#tours' },
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
