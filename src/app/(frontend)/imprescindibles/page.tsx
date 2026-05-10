import Link from 'next/link'
import ChatwootButton from '@/components/ChatwootButton'
import SafetyWingCallout from '@/components/imprescindibles/SafetyWingCallout'
import LiveVndRate from '@/components/imprescindibles/LiveVndRate'
import LiveKhrRate from '@/components/imprescindibles/LiveKhrRate'
import TimezoneSelector from '@/components/imprescindibles/TimezoneSelector'

export const metadata = {
  title: 'Guía de Viaje a Vietnam y Camboya | Qué Llevar, Visas y Consejos | Asia Lo Posible',
  description: 'Todo lo que necesitas saber antes de viajar a Vietnam y Camboya: visados, vacunas, dinero, equipaje, zona horaria y seguro de viaje. Guía completa en español actualizada a 2026.',
  openGraph: {
    title: 'Guía de Viaje a Vietnam y Camboya | Asia Lo Posible',
    description: 'Todo lo que necesitas saber antes de viajar a Vietnam y Camboya: visados, vacunas, dinero, equipaje y seguro de viaje.',
    url: 'https://asialoposible.net/imprescindibles',
    siteName: 'Asia Lo Posible',
    locale: 'es_LA',
    type: 'website',
  },
}

/* ── SVG Icons ── */

function PassportIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="4" width="24" height="32" rx="2" />
      <circle cx="20" cy="18" r="5" />
      <path d="M15 18c0-2.8 2.2-5 5-5s5 2.2 5 5" strokeDasharray="2 2" />
      <line x1="13" y1="28" x2="27" y2="28" />
      <line x1="15" y1="31" x2="25" y2="31" />
    </svg>
  )
}

function PlugIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="10" y="6" width="20" height="14" rx="3" />
      <line x1="17" y1="10" x2="17" y2="16" />
      <line x1="23" y1="10" x2="23" y2="16" />
      <line x1="20" y1="20" x2="20" y2="26" />
      <path d="M14 26h12v4a2 2 0 01-2 2H16a2 2 0 01-2-2v-4z" />
      <circle cx="31" cy="10" r="3" strokeDasharray="2 1.5" opacity="0.5" />
      <path d="M30 8.5v3M29.5 10h3" opacity="0.5" />
    </svg>
  )
}

function LuggageIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="10" y="10" width="20" height="24" rx="2" />
      <path d="M15 10V7a2 2 0 012-2h6a2 2 0 012 2v3" />
      <line x1="10" y1="18" x2="30" y2="18" />
      <line x1="18" y1="22" x2="22" y2="22" />
      <circle cx="14" cy="36" r="1.5" />
      <circle cx="26" cy="36" r="1.5" />
    </svg>
  )
}

function HealthIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 36s-12-7.2-12-16.8C8 12.9 11.6 8 16 8c2.5 0 4 1.5 4 1.5S22.5 8 24 8c4.4 0 8 4.9 8 11.2C32 28.8 20 36 20 36z" />
      <line x1="20" y1="16" x2="20" y2="26" />
      <line x1="15" y1="21" x2="25" y2="21" />
    </svg>
  )
}

function MoneyIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="10" width="32" height="20" rx="2" />
      <circle cx="20" cy="20" r="5" />
      <line x1="20" y1="16" x2="20" y2="24" />
      <path d="M17.5 18.5c0-1.1 1.1-2 2.5-2s2.5.9 2.5 2-1.1 2-2.5 2-2.5.9-2.5 2 1.1 2 2.5 2 2.5-.9 2.5-2" />
      <circle cx="9" cy="20" r="1.5" opacity="0.4" />
      <circle cx="31" cy="20" r="1.5" opacity="0.4" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="20" cy="20" r="14" />
      <line x1="20" y1="10" x2="20" y2="20" />
      <line x1="20" y1="20" x2="27" y2="24" />
      <line x1="20" y1="6" x2="20" y2="8" opacity="0.4" />
      <line x1="20" y1="32" x2="20" y2="34" opacity="0.4" />
      <line x1="6" y1="20" x2="8" y2="20" opacity="0.4" />
      <line x1="32" y1="20" x2="34" y2="20" opacity="0.4" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 4L6 10v10c0 9.3 6 17.3 14 20 8-2.7 14-10.7 14-20V10L20 4z" />
      <line x1="20" y1="16" x2="20" y2="24" />
      <line x1="16" y1="20" x2="24" y2="20" />
    </svg>
  )
}

/* ── Data ── */

interface InfoItem {
  label: string
  text: string | React.ReactNode
}

interface Section {
  id: string
  title: string
  subtitle: string
  icon: React.ComponentType
  items: InfoItem[]
  highlight?: string
  customContent?: React.ReactNode
}

const sections: Section[] = [
  {
    id: 'docs',
    title: 'Documentación y Visados',
    subtitle: 'Lo primero que necesitas resolver',
    icon: PassportIcon,
    highlight: 'Nosotros te asesoramos en todo el proceso de visas',
    items: [
      { label: 'Pasaporte', text: 'Mínimo 6 meses de vigencia y 4 páginas en blanco' },
      { label: 'Visa Vietnam', text: '$50 USD multi-entry (depende de tu nacionalidad) — e-visa' },
      { label: 'Visa Camboya', text: '$30 USD' },
      { label: 'Copias digitales', text: 'Guarda copias de tu pasaporte, visas y seguro en tu email y en la nube' },
    ],
  },
  {
    id: 'conectividad',
    title: 'Conectividad y Energía',
    subtitle: 'Mantente conectado desde el primer día',
    icon: PlugIcon,
    items: [
      { label: 'WiFi', text: 'Disponible en todos los hoteles y la mayoría de restaurantes' },
      { label: 'eSIM', text: 'Incluida en tu paquete — la recibirás antes del viaje con instrucciones de activación' },
      { label: 'Apps útiles', text: 'Google Maps (offline), Google Translate (vietnamita y khmer), Grab (el Uber de Asia)' },
      { label: 'Enchufes', text: <>Tipo A, C y G — lleva un <a href="https://www.power-plugs-sockets.com/vietnam/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] underline hover:no-underline transition-colors">adaptador universal</a> (<a href="https://www.worldstandards.eu/electricity/plugs-and-sockets/a/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] underline hover:no-underline transition-colors">ver fotos de enchufes</a>)</> },
      { label: 'Voltaje', text: '220V — verifica que tus cargadores sean dual voltage (la mayoría lo son)' },
    ],
  },
  {
    id: 'equipaje',
    title: 'Equipaje y Ropa',
    subtitle: 'Agosto: cálido y húmedo (28-35°C)',
    icon: LuggageIcon,
    items: [
      { label: 'Maleta', text: 'Equipaje facturado: 20kg máximo + equipaje de mano: 7kg' },
      { label: 'Ropa', text: 'Ligera, cómoda y transpirable — algodón, lino, telas técnicas' },
      { label: 'Imprescindibles', text: 'Camisetas, pantalones ligeros, traje de baño, ropa para cubrir hombros y rodillas (templos)' },
      { label: 'Calzado', text: 'Zapatillas cómodas + sandalias' },
      { label: 'Abrigo', text: 'Suéter o chaqueta ligera para el aire acondicionado en buses y restaurantes' },
      { label: 'Lluvia', text: 'Impermeable ligero o poncho — las lluvias son breves pero intensas' },
      { label: 'Accesorios', text: 'Sombrero/gorra y gafas de sol' },
    ],
  },
  {
    id: 'salud',
    title: 'Salud',
    subtitle: 'Prevención y bienestar durante el viaje',
    icon: HealthIcon,
    items: [
      { label: 'Botiquín', text: 'Protector solar 50+, repelente con DEET, antidiarreicos, analgésicos, Band-Aids' },
      { label: 'Hidratación', text: 'Beber solo agua embotellada — nunca del grifo' },
      { label: 'Comida callejera', text: 'Segura en general, elige puestos con alta rotación de clientes' },
      { label: 'Medicamentos', text: 'Lleva tus medicamentos con receta en su empaque original' },
    ],
  },
  {
    id: 'dinero',
    title: 'Dinero y Pagos',
    subtitle: 'Efectivo es rey en el sudeste asiático',
    icon: MoneyIcon,
    highlight: 'Presupuesto recomendado para gastos personales: $20-40 USD/día',
    items: [
      { label: 'Vietnam', text: <LiveVndRate /> },
      { label: 'Camboya', text: <LiveKhrRate /> },
      { label: 'Efectivo', text: 'Dólares americanos en billetes nuevos, sin arrugas ni marcas — los rechazan' },
      { label: 'Tarjetas', text: 'Visa/Mastercard funcionan en hoteles y restaurantes grandes' },
      { label: 'Digital', text: 'Apple Pay/Google Pay con cobertura limitada' },
      { label: 'ATM', text: 'Disponibles en ciudades principales (comisión ~$2-5 por retiro)' },
    ],
  },
  {
    id: 'horario',
    title: 'Zona Horaria',
    subtitle: 'GMT+7 — Indochina Time',
    icon: ClockIcon,
    highlight: 'Empieza a ajustar tu horario de sueño 3-4 días antes del viaje',
    customContent: <TimezoneSelector />,
    items: [],
  },
  {
    id: 'vacunas',
    title: 'Vacunas y Seguro',
    subtitle: 'Seguro médico de viaje: OBLIGATORIO',
    icon: ShieldIcon,
    highlight: 'Si decides contratar con SafetyWing, te podemos ayudar con el proceso de contratación sin ningún costo adicional',
    items: [
      { label: 'Vacunas recomendadas', text: 'Hepatitis A y B, Tétanos, Fiebre tifoidea (consulta con tu médico)' },
      { label: 'Obligatorias', text: 'No se requieren vacunas obligatorias para entrar a Vietnam o Camboya' },
      { label: 'Malaria', text: 'Riesgo bajo en las zonas del itinerario, pero consulta profilaxis con tu médico' },
    ],
  },
]

/* ── Component ── */

export default function Imprescindibles() {
  return (
    <main className="min-h-screen relative">
      {/* Hero header */}
      <div className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-20">
        <div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] pointer-events-none"
          style={{ background: 'var(--color-accent)', filter: 'blur(180px)', opacity: 0.04 }}
        />
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] no-underline hover:underline mb-10"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="8" x2="4" y2="8" />
              <polyline points="8 4 4 8 8 12" />
            </svg>
            Volver al inicio
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            <div className="md:col-span-7">
              <span className="block text-xs tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-4">
                GU&Iacute;A DE PREPARACI&Oacute;N
              </span>
              <h1 className="text-3xl md:text-[3.5rem] leading-[0.9] font-bold uppercase text-[var(--color-text)]">
                LOS
                <br />
                IMPRESCINDIBLES
              </h1>
            </div>
            <div className="md:col-span-5">
              <p className="text-[0.9rem] leading-relaxed text-[var(--color-secondary)] max-w-[400px]">
                Todo lo que necesitas saber antes de hacer tu maleta. De visas a voltaje, de dinero a zona horaria.
              </p>
              <p className="text-xs text-[var(--color-secondary)] mt-3 opacity-50">
                &Uacute;ltima actualizaci&oacute;n: Marzo 2026
              </p>
            </div>
          </div>

          {/* Section quick nav */}
          <div className="flex flex-wrap gap-2 mt-10">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-[11px] tracking-[0.1em] uppercase px-3 py-1.5 border border-[rgba(212,168,83,0.15)] text-[var(--color-secondary)] no-underline transition-all duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, var(--color-accent), transparent 60%)' }} />
      </div>

      {/* Sections */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-16 md:py-20">
        <div className="space-y-16 md:space-y-20">
          {sections.map((section, sectionIdx) => {
            const Icon = section.icon
            const isEven = sectionIdx % 2 === 0

            return (
              <section key={section.id} id={section.id}>
                {/* Section header */}
                <div className={`grid grid-cols-1 md:grid-cols-12 gap-6 mb-8 items-start ${!isEven ? 'md:text-right' : ''}`}>
                  <div className={`md:col-span-5 ${!isEven ? 'md:order-2' : ''}`}>
                    <div className={`flex items-start gap-4 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                      <div
                        className="shrink-0 w-16 h-16 flex items-center justify-center border border-[rgba(212,168,83,0.2)] relative"
                        style={{ background: 'rgba(212,168,83,0.04)' }}
                      >
                        <Icon />
                        {/* Number badge */}
                        <span
                          className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center text-[9px] font-bold font-mono"
                          style={{
                            background: 'var(--color-bg)',
                            border: '1px solid var(--color-accent)',
                            color: 'var(--color-accent)',
                          }}
                        >
                          {sectionIdx + 1}
                        </span>
                      </div>
                      <div>
                        <h2 className="text-xl md:text-2xl font-bold uppercase text-[var(--color-text)] leading-tight">
                          {section.title}
                        </h2>
                        <p className="text-xs tracking-[0.1em] uppercase text-[var(--color-accent)] mt-1">
                          {section.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Custom content or Items grid */}
                {section.customContent ? (
                  section.customContent
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'rgba(212,168,83,0.08)' }}>
                    {section.items.map((item, i) => (
                      <div
                        key={i}
                        className="p-5 md:p-6 transition-all duration-300 group"
                        style={{ background: 'var(--color-bg)' }}
                      >
                        <span className="block text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-accent)] mb-2 transition-colors duration-300">
                          {item.label}
                        </span>
                        <p className="text-[0.85rem] leading-relaxed text-[var(--color-secondary)]">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* SafetyWing callout for health and insurance sections */}
                {(section.id === 'salud' || section.id === 'vacunas') && (
                  <SafetyWingCallout />
                )}

                {/* Highlight callout */}
                {section.highlight && (
                  <div
                    className="mt-4 px-5 py-3 flex items-center gap-3"
                    style={{
                      borderLeft: '2px solid var(--color-accent)',
                      background: 'rgba(212,168,83,0.04)',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" className="shrink-0">
                      <circle cx="8" cy="8" r="6" />
                      <line x1="8" y1="5" x2="8" y2="8" />
                      <circle cx="8" cy="11" r="0.5" fill="var(--color-accent)" />
                    </svg>
                    <p className="text-[0.85rem] text-[var(--color-accent)]">
                      {section.highlight}
                    </p>
                  </div>
                )}
              </section>
            )
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 pb-20">
        <div
          className="border border-[rgba(212,168,83,0.3)] p-10 md:p-16 text-center relative overflow-hidden"
          style={{ background: 'rgba(212,168,83,0.04)' }}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none"
            style={{ background: 'var(--color-accent)', filter: 'blur(100px)', opacity: 0.08 }}
          />

          <h3 className="text-xl md:text-2xl uppercase font-bold text-[var(--color-text)] mb-4 relative z-10">
            &iquest;TIENES DUDAS?
          </h3>
          <p className="text-sm md:text-base text-[var(--color-secondary)] mb-8 max-w-[440px] mx-auto relative z-10">
            Si algo no est&aacute; en esta gu&iacute;a, cont&aacute;ctanos directamente. Estamos para ayudarte.
          </p>

          <div className="flex justify-center relative z-10">
            <ChatwootButton variant="primary" label="PREGÚNTAME LO QUE QUIERAS" />
          </div>
        </div>
      </div>
    </main>
  )
}
