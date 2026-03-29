import type { Metadata } from 'next'
import ViajesPrivadosContent from './ViajesPrivadosContent'

export const metadata: Metadata = {
  title:
    'Viaje Privado a Vietnam, Camboya y Tailandia en Español | Grupos desde 5 | Asia Lo Posible',
  description:
    'Viaje a medida al Sudeste Asiático para grupos de 5+. Vietnam, Camboya, Tailandia — itinerario personalizado, guía en español, hoteles 4-5 estrellas, todo resuelto. Cotización en 48h por Katherine Molinares.',
  openGraph: {
    title: 'Viaje Privado a Vietnam, Camboya y Tailandia en Español | Asia Lo Posible',
    description:
      'Tu grupo. Tus fechas. Tu ritmo. Todo en español. Viajes privados diseñados por quien vive en Asia.',
    url: 'https://asialoposible.net/viajes-privados',
    siteName: 'Asia Lo Posible',
    locale: 'es_LA',
    type: 'website',
  },
}

export default function ViajesPrivadosPage() {
  return <ViajesPrivadosContent />
}
