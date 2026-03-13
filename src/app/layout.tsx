import type { Metadata } from 'next'
import Script from 'next/script'
import { Agentation } from 'agentation'
import './globals.css'

export const metadata: Metadata = {
  title: 'Asia Lo Posible — Vietnam & Camboya | Julio 2026',
  description: 'Viaje guiado en español a Vietnam y Camboya. 14 días, 6 destinos, grupo exclusivo de 10 personas. Todo incluido. By Katherine Molinares.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1808011489910343&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body>
        <Script id="meta-pixel" strategy="beforeInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1808011489910343');
            fbq('track', 'PageView');
            if (window.location.pathname === '/imprescindibles') {
              fbq('track', 'ViewContent', {
                content_name: 'Guía Imprescindibles Vietnam & Camboya',
                content_type: 'travel_guide'
              });
            }
          `}
        </Script>
        <Script id="meta-pixel-events" strategy="afterInteractive">
          {`
            document.addEventListener('click', function(e) {
              var link = e.target.closest('a[href]');
              if (!link || typeof fbq === 'undefined') return;
              var href = link.getAttribute('href') || '';

              if (href.indexOf('wa.me') !== -1) {
                fbq('track', 'Lead', {
                  content_name: 'WhatsApp Click',
                  content_category: link.closest('#reservar') ? 'CTA Final' :
                    link.closest('#precio') ? 'Pricing' : 'General'
                });
              }

              if (href.indexOf('instagram.com') !== -1) {
                fbq('track', 'Contact', {
                  content_name: 'Instagram DM Click'
                });
              }
            });

            var pricingTracked = false;
            var precioEl = document.getElementById('precio');
            if (precioEl && typeof IntersectionObserver !== 'undefined') {
              var obs = new IntersectionObserver(function(entries) {
                if (entries[0].isIntersecting && !pricingTracked) {
                  pricingTracked = true;
                  fbq('track', 'ViewContent', {
                    content_name: 'Pricing Calculator',
                    content_type: 'pricing'
                  });
                  obs.disconnect();
                }
              }, { threshold: 0.3 });
              obs.observe(precioEl);
            }
          `}
        </Script>
        {children}
        {process.env.NODE_ENV === 'development' && <Agentation />}
      </body>
    </html>
  )
}
