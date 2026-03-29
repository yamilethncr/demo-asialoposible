import type { Metadata } from 'next'
import Script from 'next/script'
import { Playfair_Display, DM_Sans, Space_Mono } from 'next/font/google'
import { Agentation } from 'agentation'
import PageLoader from '@/components/PageLoader'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--ff-heading',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--ff-body',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--ff-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://asialoposible.net'),
  title: 'Viaje a Vietnam y Camboya en Español | 14 Días Todo Incluido | Asia Lo Posible',
  description: 'Viaje organizado a Vietnam y Camboya en español. 14 días, 6 destinos, grupo exclusivo de 10 personas. Hoteles 4-5 estrellas, crucero en la Bahía de Halong, Angkor Wat y más. Todo incluido. Próximas salidas: agosto 2026 y abril 2027.',
  openGraph: {
    title: 'Viaje a Vietnam y Camboya en Español | Asia Lo Posible',
    description: 'Viaje organizado a Vietnam y Camboya. 14 días, 6 destinos, grupo exclusivo de 10 personas. Hoteles 4-5 estrellas, crucero en la Bahía de Halong, Angkor Wat. Todo incluido.',
    url: 'https://asialoposible.net',
    siteName: 'Asia Lo Posible',
    locale: 'es_LA',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Viaje a Vietnam y Camboya en Español — Asia Lo Posible',
      },
    ],
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${playfair.variable} ${dmSans.variable} ${spaceMono.variable} antialiased`}>
      <head>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-59VR7PF3');`}
        </Script>
      </head>
      <body>
        <PageLoader />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-59VR7PF3"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        {process.env.NODE_ENV === 'development' && <Agentation />}
      </body>
    </html>
  )
}
