const PAGE = { width: 1080, height: 1350 }

const colors = {
  navy: '#0A0F1E',
  gold: '#D4A853',
  white: '#FFFFFF',
  muted: '#8E94A5',
  goldFaint: 'rgba(212,168,83,0.2)',
  goldGlow: 'rgba(212,168,83,0.15)',
}

const images = {
  halongBay: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2940&auto=format&fit=crop',
  hoiAnLanterns: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?q=80&w=2940&auto=format&fit=crop',
  angkorWat: 'https://images.unsplash.com/photo-1760442936485-b26b087c2030?q=80&w=2940&auto=format&fit=crop',
  riceFields: 'https://images.unsplash.com/photo-1504457047772-27faf1c00561?q=80&w=2940&auto=format&fit=crop',
  boats: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=2940&auto=format&fit=crop',
}

const pageStyle: React.CSSProperties = {
  width: PAGE.width,
  height: PAGE.height,
  position: 'relative',
  overflow: 'hidden',
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  color: colors.white,
}

// ─── PAGE 1: PORTADA ─────────────────────────────────────────
function Portada() {
  return (
    <section style={{ ...pageStyle, background: colors.navy }}>
      {/* Background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('${images.halongBay}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.55,
          filter: 'saturate(0.7)',
        }}
      />
      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(to bottom, rgba(10,15,30,0.3) 0%, rgba(10,15,30,0.15) 40%, rgba(10,15,30,0.6) 70%, ${colors.navy} 100%)`,
        }}
      />

      {/* Airplane path SVG */}
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1 }}
        viewBox={`0 0 ${PAGE.width} ${PAGE.height}`}
      >
        <path
          d="M80,200 Q350,100 540,350 T1000,250"
          stroke={colors.goldFaint}
          strokeWidth="2"
          strokeDasharray="8 8"
          fill="none"
        />
        {/* Airplane icon */}
        <g transform="translate(540,350) rotate(15)">
          <path
            d="M0,-8 L4,8 L0,5 L-4,8 Z"
            fill={colors.gold}
            opacity="0.7"
          />
          <path
            d="M-12,-2 L0,-4 L12,-2 L0,0 Z"
            fill={colors.gold}
            opacity="0.5"
          />
        </g>
      </svg>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column', padding: '60px 70px' }}>
        {/* Top - brand */}
        <div>
          <p style={{ fontSize: 16, letterSpacing: '0.3em', textTransform: 'uppercase', color: colors.gold, margin: 0 }}>
            ASIA LO POSIBLE
          </p>
        </div>

        {/* Center - main title */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1 style={{
            fontSize: 120,
            lineHeight: 0.9,
            fontWeight: 300,
            letterSpacing: '-0.02em',
            margin: 0,
            textShadow: '0 4px 60px rgba(0,0,0,0.8)',
          }}>
            Vietnam
            <br />
            <span style={{ fontFamily: "'Courier New', monospace", color: colors.gold, fontStyle: 'italic', fontSize: 80 }}>&amp;</span>
            {' '}Cambodia
          </h1>

          <p style={{
            fontSize: 22,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.7)',
            marginTop: 24,
            fontWeight: 300,
          }}>
            14 d&iacute;as &middot; 6 destinos &middot; Todo en espa&ntilde;ol
          </p>
        </div>

        {/* Badge */}
        <div style={{
          display: 'inline-flex',
          alignSelf: 'flex-start',
          border: `1px solid ${colors.gold}`,
          padding: '14px 28px',
          marginBottom: 50,
        }}>
          <span style={{ fontSize: 14, letterSpacing: '0.2em', textTransform: 'uppercase', color: colors.gold, fontWeight: 600 }}>
            PR&Oacute;XIMAS SALIDAS — AGOSTO 2026 &amp; ABRIL 2027
          </span>
        </div>

        {/* Bottom icons row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          borderTop: `1px solid ${colors.goldFaint}`,
          paddingTop: 30,
        }}>
          {[
            { icon: '★', label: 'Hoteles 4★' },
            { icon: '⚓', label: 'Crucero 5★' },
            { icon: '🗣', label: 'Guía en español' },
            { icon: '👥', label: '10 cupos por salida' },
          ].map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <span style={{ fontSize: 24, display: 'block', marginBottom: 8, opacity: 0.8 }}>{item.icon}</span>
              <span style={{ fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: colors.muted, fontWeight: 500 }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── PAGE 2: VIETNAM + DESTINOS ──────────────────────────────
function VietnamDestinos() {
  const destinations = [
    { name: 'Hanói', days: 'Días 1–4', desc: 'Capital milenaria. Barrio Antiguo, Vespa Night Tour, crucero en Halong.', x: 248, y: 118 },
    { name: 'Bahía de Halong', days: 'Días 3–4', desc: 'Patrimonio UNESCO. Crucero de lujo entre islas de piedra caliza.', x: 290, y: 105 },
    { name: 'Hué', days: 'Días 4–5', desc: 'Antigua capital imperial. Ciudad amurallada y gastronomía legendaria.', x: 240, y: 218 },
    { name: 'Da Nang', days: 'Días 6–7', desc: 'Puente Dorado en Ba Na Hills, playa My Khe y Montañas de Mármol.', x: 250, y: 240 },
    { name: 'Hội An', days: 'Días 8–9', desc: 'Ciudad UNESCO. Linternas flotantes, clase de cocina y Puente Japonés.', x: 248, y: 255 },
  ]

  return (
    <section style={{ ...pageStyle, background: colors.navy }}>
      {/* Subtle texture overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 30% 50%, rgba(212,168,83,0.04) 0%, transparent 60%)',
      }} />

      <div style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column', padding: '60px 70px' }}>
        {/* Header */}
        <div style={{ marginBottom: 20 }}>
          <p style={{ fontSize: 13, letterSpacing: '0.25em', textTransform: 'uppercase', color: colors.gold, margin: '0 0 12px 0' }}>
            LA RUTA — VIETNAM
          </p>
          <h2 style={{ fontSize: 48, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em', margin: 0 }}>
            9 d&iacute;as descubriendo
            <br />
            <span style={{ color: colors.gold }}>Vietnam</span> de norte a sur
          </h2>
        </div>

        {/* Map + destinations layout */}
        <div style={{ flex: 1, display: 'flex', gap: 40 }}>
          {/* Map */}
          <div style={{ flex: '0 0 420px', position: 'relative' }}>
            <svg viewBox="60 40 300 300" style={{ width: '100%', height: '100%' }}>
              {/* Vietnam outline */}
              <path
                d={`M230,60 L260,70 L280,80 L300,95 L310,110 L305,120
                    L290,115 L280,108 L275,115 L285,125 L290,140
                    L280,145 L270,155 L265,170 L260,180 L255,195
                    L250,210 L248,220 L252,235 L258,250 L265,265
                    L270,280 L275,300 L278,315 L275,330 L268,340
                    L255,345 L245,340 L240,330 L238,318 L242,305
                    L245,290 L240,275 L235,260 L232,250 L228,240
                    L225,225 L222,215 L220,205 L218,195 L225,180
                    L235,165 L240,150 L245,135 L248,120 L250,105
                    L245,90 L238,78 L230,60`}
                fill="rgba(212,168,83,0.08)"
                stroke={colors.goldFaint}
                strokeWidth="1.5"
              />

              {/* Country label */}
              <text x="258" y="185" fill="rgba(212,168,83,0.15)" fontSize="16" fontWeight="900" letterSpacing="0.2em" textAnchor="middle">
                VIETNAM
              </text>

              {/* Route lines */}
              {destinations.slice(0, -1).map((dest, i) => {
                const next = destinations[i + 1]
                return (
                  <line
                    key={i}
                    x1={dest.x} y1={dest.y}
                    x2={next.x} y2={next.y}
                    stroke={colors.goldFaint}
                    strokeWidth="1.5"
                    strokeDasharray="3 5"
                  />
                )
              })}

              {/* City pins */}
              {destinations.map((dest, i) => (
                <g key={i}>
                  <circle cx={dest.x} cy={dest.y} r="8" fill={colors.gold} opacity="0.2" />
                  <circle cx={dest.x} cy={dest.y} r="4" fill={colors.gold} />
                  <text
                    x={dest.x}
                    y={dest.y - 14}
                    fill={colors.white}
                    fontSize="8"
                    fontWeight="700"
                    textAnchor="middle"
                    letterSpacing="0.08em"
                  >
                    {dest.name.toUpperCase()}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          {/* Destination list */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 24 }}>
            {destinations.map((dest, i) => (
              <div key={i} style={{
                borderLeft: `2px solid ${colors.gold}`,
                paddingLeft: 20,
              }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 4 }}>
                  <span style={{ fontSize: 12, fontFamily: 'monospace', color: colors.gold, fontWeight: 700 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{ fontSize: 22, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {dest.name}
                  </span>
                </div>
                <p style={{ fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', color: colors.gold, margin: '0 0 4px 0' }}>
                  {dest.days}
                </p>
                <p style={{ fontSize: 14, color: colors.muted, margin: 0, lineHeight: 1.5 }}>
                  {dest.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── PAGE 3: CAMBODIA + PRECIO ───────────────────────────────
function CambodiaPrecio() {
  const temples = [
    { name: 'Angkor Wat', x: 155, y: 48 },
    { name: 'Angkor Thom', x: 140, y: 38 },
    { name: 'Ta Prohm', x: 170, y: 55 },
    { name: 'Tonle Sap', x: 130, y: 70 },
  ]

  const inclusions = [
    'Vuelos internos Vietnam + Camboya',
    'Hoteles 4★ con desayuno incluido',
    'Crucero de lujo Bahía de Halong',
    'Guía en español durante todo el viaje',
    'Entradas a templos de Angkor',
    'Traslados terrestres y aéreos',
    'Seguro de viaje internacional',
  ]

  return (
    <section style={{ ...pageStyle, background: colors.navy }}>
      {/* Top half — Cambodia map */}
      <div style={{ height: '50%', position: 'relative', padding: '50px 70px' }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 70% 40%, rgba(212,168,83,0.05) 0%, transparent 60%)',
        }} />

        <div style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', gap: 40 }}>
          {/* Text */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ fontSize: 13, letterSpacing: '0.25em', textTransform: 'uppercase', color: colors.gold, margin: '0 0 12px 0' }}>
              LA RUTA — CAMBOYA
            </p>
            <h2 style={{ fontSize: 44, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em', margin: '0 0 20px 0' }}>
              5 d&iacute;as en el
              <br />
              <span style={{ color: colors.gold }}>coraz&oacute;n del</span>
              <br />
              Imperio Khmer
            </h2>
            <p style={{ fontSize: 15, color: colors.muted, lineHeight: 1.6, maxWidth: 380, margin: 0 }}>
              Siem Reap es la puerta de entrada a Angkor, el complejo de templos m&aacute;s grande del mundo.
              Amanecer en Angkor Wat, explorar Ta Prohm entre ra&iacute;ces milenarias y navegar el Tonle Sap.
            </p>
          </div>

          {/* Mini map */}
          <div style={{ flex: '0 0 340px', position: 'relative' }}>
            <svg viewBox="80 10 140 90" style={{ width: '100%', height: '100%' }}>
              {/* Cambodia outline */}
              <path
                d={`M100,20 L140,18 L170,22 L195,30
                    L210,42 L215,55 L212,68 L205,78
                    L192,85 L175,90 L155,88 L135,82
                    L118,74 L105,62 L98,48 L95,35
                    L100,20`}
                fill="rgba(212,168,83,0.08)"
                stroke={colors.goldFaint}
                strokeWidth="1.5"
              />
              <text x="155" y="58" fill="rgba(212,168,83,0.12)" fontSize="8" fontWeight="900" letterSpacing="0.2em" textAnchor="middle">
                CAMBOYA
              </text>

              {/* Siem Reap marker */}
              <circle cx="155" cy="42" r="10" fill={colors.gold} opacity="0.15" />
              <circle cx="155" cy="42" r="5" fill={colors.gold} />
              <text x="155" y="32" fill={colors.white} fontSize="6" fontWeight="700" textAnchor="middle" letterSpacing="0.1em">
                SIEM REAP
              </text>

              {/* Temple labels */}
              {temples.map((t, i) => (
                <text key={i} x={t.x} y={t.y} fill={colors.muted} fontSize="4.5" textAnchor="middle" letterSpacing="0.05em">
                  {t.name}
                </text>
              ))}
            </svg>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: `linear-gradient(to right, transparent, ${colors.goldFaint}, transparent)`, margin: '0 70px' }} />

      {/* Bottom half — Pricing */}
      <div style={{ height: '50%', padding: '40px 70px', display: 'flex', gap: 50 }}>
        {/* Price */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ fontSize: 13, letterSpacing: '0.25em', textTransform: 'uppercase', color: colors.gold, margin: '0 0 16px 0' }}>
            INVERSI&Oacute;N
          </p>
          <p style={{
            fontSize: 72,
            fontWeight: 700,
            color: colors.gold,
            margin: '0 0 8px 0',
            lineHeight: 1,
            fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
          }}>
            $3,200
          </p>
          <p style={{ fontSize: 18, textTransform: 'uppercase', letterSpacing: '0.15em', color: colors.muted, margin: '0 0 30px 0' }}>
            USD por persona
          </p>

          {/* Promo box */}
          <div style={{
            border: `1px solid ${colors.gold}`,
            padding: '16px 24px',
            marginBottom: 24,
            background: 'rgba(212,168,83,0.06)',
          }}>
            <p style={{ fontSize: 16, color: colors.gold, fontWeight: 600, margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Reserva temprano y ahorra $300
            </p>
            <p style={{ fontSize: 13, color: colors.muted, margin: 0 }}>
              Precio early bird: $2,900 USD
            </p>
          </div>

          <p style={{ fontSize: 14, color: colors.muted, margin: 0, lineHeight: 1.6 }}>
            <span style={{ color: colors.gold }}>&#9679;</span> Paga en cuotas: 30% inicial + cuotas mensuales
          </p>
        </div>

        {/* Inclusions */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ fontSize: 13, letterSpacing: '0.25em', textTransform: 'uppercase', color: colors.gold, margin: '0 0 24px 0' }}>
            EL PRECIO INCLUYE
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {inclusions.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span style={{
                  width: 22,
                  height: 22,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `1px solid ${colors.goldFaint}`,
                  color: colors.gold,
                  fontSize: 12,
                  flexShrink: 0,
                }}>
                  &#10003;
                </span>
                <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── PAGE 4: CTA / RESERVA ──────────────────────────────────
function CtaReserva() {
  return (
    <section style={{ ...pageStyle, background: colors.navy }}>
      {/* Background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('${images.angkorWat}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          opacity: 0.35,
          filter: 'saturate(0.6)',
        }}
      />
      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(to bottom, ${colors.navy} 0%, rgba(10,15,30,0.5) 30%, rgba(10,15,30,0.5) 60%, ${colors.navy} 100%)`,
        }}
      />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '60px 80px',
      }}>
        {/* Brand */}
        <p style={{ fontSize: 14, letterSpacing: '0.3em', textTransform: 'uppercase', color: colors.gold, marginBottom: 60 }}>
          ASIA LO POSIBLE
        </p>

        {/* Emotional copy */}
        <h2 style={{
          fontSize: 56,
          fontWeight: 300,
          lineHeight: 1.15,
          maxWidth: 800,
          margin: '0 0 24px 0',
          letterSpacing: '-0.01em',
        }}>
          &iquest;Lista para vivir la
          <br />
          <span style={{ color: colors.gold, fontWeight: 600 }}>aventura de tu vida?</span>
        </h2>

        <p style={{
          fontSize: 20,
          color: colors.muted,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          maxWidth: 600,
          lineHeight: 1.5,
          margin: '0 0 60px 0',
        }}>
          Solo 10 personas. Solo una vez al a&ntilde;o.
        </p>

        {/* CTA button */}
        <a
          href="https://wa.me/84934949756"
          style={{
            display: 'inline-block',
            background: colors.gold,
            color: colors.navy,
            padding: '22px 60px',
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            marginBottom: 16,
          }}
        >
          RESERVAR POR WHATSAPP
        </a>
        <p style={{ fontSize: 14, color: colors.muted, margin: '0 0 80px 0' }}>
          wa.me/84934949756
        </p>

        {/* Social / contact */}
        <div style={{
          borderTop: `1px solid ${colors.goldFaint}`,
          paddingTop: 30,
          width: '100%',
          maxWidth: 600,
          display: 'flex',
          justifyContent: 'center',
          gap: 40,
        }}>
          {['@kathmolinares', '@asialoposible', 'asialoposible.net'].map((handle, i) => (
            <span key={i} style={{ fontSize: 14, color: colors.muted, letterSpacing: '0.05em' }}>
              {handle}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── MAIN PAGE ───────────────────────────────────────────────
export default function FlyerPage() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 40,
      padding: '40px 0',
      background: '#111',
      minHeight: '100vh',
    }}>
      <Portada />
      <VietnamDestinos />
      <CambodiaPrecio />
      <CtaReserva />
    </div>
  )
}
