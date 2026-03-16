import type { Metadata } from 'next'
import { Agentation } from 'agentation'
import MetaPixel from '@/components/MetaPixel'
import './globals.css'

export const metadata: Metadata = {
  title: 'Asia Lo Posible — Vietnam & Camboya | Julio 2026',
  description: 'Viaje guiado en español a Vietnam y Camboya. 14 días, 6 destinos, grupo exclusivo de 10 personas. Todo incluido. By Katherine Molinares.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head />
      <body>
        <MetaPixel />
        {children}
        {process.env.NODE_ENV === 'development' && <Agentation />}
      </body>
    </html>
  )
}
