import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import PromoBanner from '@/components/PromoBanner'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Promise from '@/components/Promise'
import VideoWidget from '@/components/VideoWidget'
import ShortsCarousel from '@/components/ShortsCarousel'

export const metadata: Metadata = {
  title: 'Viaje a Vietnam y Camboya en Español | 14 Días Todo Incluido | Asia Lo Posible',
  description: 'Viaje organizado a Vietnam y Camboya en español. 14 días, 6 destinos, grupo exclusivo de 10 personas. Hoteles 4-5 estrellas, crucero en la Bahía de Halong, Angkor Wat y más. Todo incluido. Próximas salidas: agosto 2026 y abril 2027.',
  openGraph: {
    title: 'Viaje a Vietnam y Camboya en Español | Asia Lo Posible',
    description: 'Viaje organizado a Vietnam y Camboya. 14 días, 6 destinos, grupo exclusivo de 10 personas. Hoteles 4-5 estrellas, crucero en la Bahía de Halong, Angkor Wat. Todo incluido.',
    url: 'https://asialoposible.net',
    siteName: 'Asia Lo Posible',
    locale: 'es_LA',
    type: 'website',
  },
}

// Below-fold components — loaded on demand for faster initial page load
const Hotels = dynamic(() => import('@/components/Hotels'))
const Host = dynamic(() => import('@/components/Host'))
const RouteMap = dynamic(() => import('@/components/RouteMap'))
const Itinerary = dynamic(() => import('@/components/Itinerary'))
const Includes = dynamic(() => import('@/components/Includes'))
const VideoShowcase = dynamic(() => import('@/components/VideoShowcase'))
const Pricing = dynamic(() => import('@/components/Pricing'))
const NotIncluded = dynamic(() => import('@/components/NotIncluded'))
const FAQ = dynamic(() => import('@/components/FAQ'))
const ViajesPrivados = dynamic(() => import('@/components/ViajesPrivados'))
const CTAFinal = dynamic(() => import('@/components/CTAFinal'))
const Footer = dynamic(() => import('@/components/Footer'))

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué hace diferente a este viaje de un tour convencional?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No es un tour. Es una experiencia curada por Katherine, quien vive en Vietnam y conoce cada rincón. Grupo máximo de 10 personas, guía en español, hoteles boutique 4 estrellas, y un itinerario diseñado para vivir Asia, no solo visitarla.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Necesito saber inglés?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Todo el viaje está diseñado para funcionar completamente en español. Tienes guía profesional en español durante todo el recorrido y el acompañamiento personal de Katherine.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Es obligatorio el seguro de viaje?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, es obligatorio contar con un seguro médico de viaje con cobertura internacional amplia. Nosotros te facilitamos la gestión y emisión a través de la operadora certificada.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El boleto de avión está incluido?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Los vuelos internacionales no están incluidos para darte flexibilidad de salir desde tu ciudad. Los vuelos internos dentro de Vietnam y Camboya sí están incluidos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué formas de pago aceptan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Transferencias bancarias en dólares y en euros, criptomonedas, bolívares a la tasa Kontigo, y pago con tarjeta de débito/crédito. Katherine te indicará las opciones disponibles según tu país de residencia.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo funciona el transporte dentro del viaje?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Todo el transporte está incluido: vehículos privados con aire acondicionado, vuelos internos, crucero en Halong Bay, barcas, rickshaws y Vespa tour. No necesitas gestionar nada.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Es seguro viajar a Vietnam y Camboya?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Vietnam y Camboya son destinos muy seguros para turistas. El crimen violento es extremadamente raro. Las precauciones son las mismas que en cualquier ciudad: cuidar pertenencias y estar atento en zonas concurridas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo organizar un viaje privado para mi grupo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Si tienes un grupo de 5 o más personas, podemos diseñar una experiencia completamente privada con destinos, fechas y actividades a medida. Visita nuestra página de Viajes Privados o escríbenos directamente por WhatsApp para cotización.',
      },
    },
  ],
}

const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Viaje Organizado a Vietnam y Camboya en Español',
  description: 'Viaje guiado de 14 días por Vietnam y Camboya en español. Grupo exclusivo de 10 personas. Hoteles 4-5 estrellas, crucero de lujo en la Bahía de Halong, templos de Angkor Wat. Todo incluido.',
  startDate: '2026-08-01',
  endDate: '2026-08-14',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  location: {
    '@type': 'Place',
    name: 'Vietnam y Camboya',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'VN',
    },
  },
  organizer: {
    '@type': 'Person',
    name: 'Katherine Molinares',
    url: 'https://asialoposible.net',
  },
  offers: {
    '@type': 'Offer',
    price: '3500',
    priceCurrency: 'USD',
    availability: 'https://schema.org/LimitedAvailability',
    validFrom: '2026-01-01',
    url: 'https://asialoposible.net',
  },
  inLanguage: 'es',
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'Asia Lo Posible',
  url: 'https://asialoposible.net',
  description: 'Viajes organizados al Sudeste Asiático en español para latinoamericanos. Vietnam, Camboya y Tailandia con guía en español.',
  founder: {
    '@type': 'Person',
    name: 'Katherine Molinares',
    jobTitle: 'Organizadora de viajes',
    sameAs: [
      'https://www.instagram.com/kathmolinares',
      'https://www.instagram.com/asialoposible',
    ],
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 21.0285,
      longitude: 105.8542,
    },
    description: 'Vietnam, Camboya, Sudeste Asiático',
  },
  knowsLanguage: 'es',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'reservations',
    url: 'https://wa.me/584248455010',
    availableLanguage: 'Spanish',
  },
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'TouristTrip',
  name: 'Viaje a Vietnam y Camboya en Español — 14 Días Todo Incluido',
  description: 'Viaje guiado de 14 días por Vietnam y Camboya en español. Hanói, Bahía de Halong, Hue, Hoi An, Da Nang y Siem Reap (Angkor Wat). Grupo exclusivo de 10 personas. Hoteles 4-5 estrellas. Todo incluido.',
  touristType: 'Spanish-speaking travelers',
  itinerary: {
    '@type': 'ItemList',
    numberOfItems: 6,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Hanói, Vietnam' },
      { '@type': 'ListItem', position: 2, name: 'Bahía de Halong, Vietnam' },
      { '@type': 'ListItem', position: 3, name: 'Hue, Vietnam' },
      { '@type': 'ListItem', position: 4, name: 'Da Nang & Hoi An, Vietnam' },
      { '@type': 'ListItem', position: 5, name: 'Hoi An, Vietnam' },
      { '@type': 'ListItem', position: 6, name: 'Siem Reap & Angkor Wat, Camboya' },
    ],
  },
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '3500',
    highPrice: '4455',
    priceCurrency: 'USD',
    offerCount: 2,
    availability: 'https://schema.org/LimitedAvailability',
    offers: [
      {
        '@type': 'Offer',
        name: 'Agosto 2026 — Habitación compartida, pago de contado',
        price: '3500',
        priceCurrency: 'USD',
        availability: 'https://schema.org/LimitedAvailability',
        inventoryLevel: { '@type': 'QuantitativeValue', value: 6 },
        validFrom: '2026-01-01',
      },
      {
        '@type': 'Offer',
        name: 'Abril 2027 — Habitación compartida, pago de contado',
        price: '3500',
        priceCurrency: 'USD',
        availability: 'https://schema.org/LimitedAvailability',
        inventoryLevel: { '@type': 'QuantitativeValue', value: 8 },
        validFrom: '2026-01-01',
      },
    ],
  },
  provider: {
    '@type': 'TravelAgency',
    name: 'Asia Lo Posible',
    url: 'https://asialoposible.net',
  },
  inLanguage: 'es',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Inicio',
      item: 'https://asialoposible.net',
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PromoBanner />
      <Navbar />
      <VideoWidget />
      <Hero />
      <ShortsCarousel />
      <Problem />
      <Promise />
      <Hotels />
      <Host />
      <RouteMap />
      <Itinerary />
      <Includes />
      <VideoShowcase />
      <Pricing />
      <NotIncluded />
      <FAQ />
      <ViajesPrivados />
      <CTAFinal />
      <Footer />
    </>
  )
}
