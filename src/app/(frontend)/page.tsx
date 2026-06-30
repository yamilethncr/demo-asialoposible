import type { Metadata } from 'next'
import PromoBanner from '@/components/PromoBanner'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import PorQue from '@/components/PorQue'
import EstilosViaje from '@/components/EstilosViaje'
import VideoReels from '@/components/VideoReels'
import Host from '@/components/Host'
import ToursDisponibles from '@/components/ToursDisponibles'
import Contacto from '@/components/Contacto'
import BlogTeaser from '@/components/BlogTeaser'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Viajes boutique a Asia en español — Vietnam y Camboya',
  description:
    'Viajes a Vietnam, Camboya y el Sudeste Asiático en español: salidas grupales exclusivas, itinerarios curados y viajes a medida. Así se vive Asia.',
  openGraph: {
    title: 'Asia Lo Posible | Viajes boutique a Asia en español',
    description:
      'Salidas grupales exclusivas, itinerarios curados y viajes a medida por Vietnam, Camboya y Asia. Así se vive Asia.',
    url: 'https://asialoposible.net',
    siteName: 'Asia Lo Posible',
    locale: 'es_LA',
    type: 'website',
    images: [
      {
        url: '/og-asialoposible.jpg',
        width: 1200,
        height: 630,
        alt: 'Asia Lo Posible — viajes boutique a Asia en español',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asia Lo Posible | Viajes boutique a Asia en español',
    description:
      'Salidas grupales exclusivas, itinerarios curados y viajes a medida por Vietnam, Camboya y Asia.',
    images: ['/og-asialoposible.jpg'],
  },
  alternates: {
    canonical: '/',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'Asia Lo Posible',
  url: 'https://asialoposible.net',
  description:
    'Viajes boutique a Asia en español: salidas grupales, itinerarios curados y viajes a medida por Vietnam, Camboya, Tailandia, Japón y más.',
  founder: {
    '@type': 'Person',
    name: 'Katherine Molinares',
    jobTitle: 'Fundadora · Organizadora de viajes',
    sameAs: ['https://www.instagram.com/kathmolinares', 'https://www.instagram.com/asialoposible'],
  },
  areaServed: ['Vietnam', 'Camboya', 'Tailandia', 'Japón', 'Corea del Sur', 'China', 'Asia'],
  knowsLanguage: 'es',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'reservations',
    telephone: '+84934949756',
    url: 'https://wa.me/84934949756',
    availableLanguage: 'Spanish',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Asia Lo Posible',
  url: 'https://asialoposible.net',
  inLanguage: 'es',
  publisher: { '@type': 'TravelAgency', name: 'Asia Lo Posible' },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <PromoBanner />
      <Navbar />
      <Hero />
      <PorQue />
      <EstilosViaje />
      <VideoReels />
      <Host />
      <ToursDisponibles />
      <Contacto />
      <BlogTeaser />
      <Footer />
    </>
  )
}
