import type { Metadata } from 'next'
import Script from 'next/script'
import { Playfair_Display, DM_Sans, Space_Mono } from 'next/font/google'
import { Agentation } from 'agentation'
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
  title: 'Asia Lo Posible — Vietnam & Camboya | Agosto 2026 & Abril 2027',
  description: 'Viaje guiado en español a Vietnam y Camboya. 14 días, 6 destinos, grupo exclusivo de 10 personas. Todo incluido. Próximas salidas: agosto 2026 y abril 2027. By Katherine Molinares.',
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
