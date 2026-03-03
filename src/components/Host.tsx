import SprayPaint from './SprayPaint'

export default function Host() {
  return (
    <section id="katherine" className="py-20 md:py-28 relative z-10">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative border border-[rgba(212,168,83,0.2)] overflow-hidden">
            <div className="aspect-[3/4] bg-[#161C2D] relative">
              <img
                src="https://katherinemolinares.com/_next/image?url=%2Fkatherine-molinares.jpg&w=640&q=75"
                alt="Katherine Molinares"
                className="w-full h-full object-cover block"
                style={{ filter: 'grayscale(0.3) contrast(110%) brightness(0.8)' }}
              />
            </div>
            <SprayPaint
              className="w-[350px] h-[350px]"
              style={{ bottom: '-80px', left: '-80px', opacity: 0.2 }}
              shape="circle"
            />
          </div>

          {/* Bio */}
          <div>
            <span className="block text-xs tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-4">
              LA ANFITRIONA
            </span>
            <h2 className="text-3xl md:text-[2.5rem] leading-tight uppercase font-bold text-[var(--color-text)] mb-6">
              KATHERINE
              <br />
              MOLINARES
            </h2>
            <p className="text-[0.95rem] leading-relaxed text-[var(--color-text)] mb-6 max-w-[440px]">
              Periodista venezolana y creadora de contenido con casi dos a&ntilde;os viviendo en Vietnam y recorriendo Asia de punta a punta. Lleg&oacute; a este continente sin saber el idioma, sin conocer a nadie, y con la misma incertidumbre que siente cualquier latinoamericano que mira el mapa del sudeste asi&aacute;tico por primera vez.
            </p>
            <p className="text-[0.85rem] leading-relaxed text-[var(--color-secondary)] max-w-[440px] mb-8">
              Este viaje no es un tour de cat&aacute;logo. Es el viaje que yo le har&iacute;a a alguien que quiero que tenga la mejor experiencia posible en Asia. Con un equipo local: gu&iacute;a vietnamita en espa&ntilde;ol, operador tur&iacute;stico licenciado y todo resuelto antes de que hagas tu maleta.
            </p>
            <div
              className="pl-5"
              style={{ borderLeft: '2px solid var(--color-accent)' }}
            >
              <a href="https://www.instagram.com/kathmolinares" target="_blank" rel="noopener noreferrer" className="text-xs tracking-[0.2em] uppercase font-black text-[var(--color-accent)] mb-0 no-underline hover:underline">
                @KATHMOLINARES
              </a>
              <p className="text-xs tracking-[0.1em] uppercase text-[var(--color-secondary)] mt-1">
                Periodista &middot; Organizadora de eventos &middot; Creadora de contenido
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
