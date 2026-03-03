import React, { useState, useEffect, useRef } from 'react';

const customStyles = {
  root: {
    '--color-bg': '#0A0F1E',
    '--color-text': '#FFFFFF',
    '--color-accent': '#D4A853',
    '--color-secondary': '#8E94A5',
  },
  body: {
    backgroundColor: '#0A0F1E',
    color: '#FFFFFF',
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    overflowX: 'hidden',
    fontSize: '16px',
    lineHeight: '1.5',
    WebkitFontSmoothing: 'antialiased',
  },
  heroTitle: {
    fontSize: '6rem',
    lineHeight: '0.85',
    letterSpacing: '-0.02em',
    position: 'relative',
    zIndex: 2,
    color: '#FFFFFF',
    textShadow: '0 2px 40px rgba(0,0,0,0.8)',
    textTransform: 'uppercase',
    fontWeight: 700,
  },
  label: {
    fontSize: '0.75rem',
    letterSpacing: '0.2em',
    color: '#8E94A5',
    marginBottom: '1rem',
    display: 'block',
    textTransform: 'uppercase',
    fontWeight: 700,
  },
  denseCopy: {
    fontSize: '0.85rem',
    textAlign: 'justify',
    lineHeight: '1.4',
    letterSpacing: '0.02em',
    maxWidth: '400px',
  },
  heroDenseCopy: {
    fontSize: '0.85rem',
    textAlign: 'justify',
    lineHeight: '1.4',
    letterSpacing: '0.02em',
    maxWidth: '400px',
    color: 'rgba(255,255,255,0.92)',
    textShadow: '0 1px 12px rgba(0,0,0,0.5)',
    background: 'rgba(10,15,30,0.6)',
    padding: '16px',
    backdropFilter: 'blur(4px)',
    borderLeft: '2px solid #D4A853',
  },
  btn: {
    display: 'inline-block',
    border: '1px solid #D4A853',
    padding: '16px 32px',
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    fontWeight: 700,
    color: '#D4A853',
    textDecoration: 'none',
    transition: 'all 0.4s cubic-bezier(0.19, 1, 0.22, 1)',
    position: 'relative',
    overflow: 'hidden',
    background: 'transparent',
    cursor: 'pointer',
  },
  btnPrimary: {
    display: 'inline-block',
    border: '1px solid #D4A853',
    padding: '16px 32px',
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    fontWeight: 700,
    color: '#0A0F1E',
    textDecoration: 'none',
    transition: 'all 0.4s cubic-bezier(0.19, 1, 0.22, 1)',
    position: 'relative',
    overflow: 'hidden',
    background: '#D4A853',
    cursor: 'pointer',
  },
};

const SprayPaintHero = ({ mousePos }) => {
  const speed = 15;
  return (
    <div
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        filter: 'blur(50px)',
        opacity: 0.2,
        zIndex: 1,
        mixBlendMode: 'screen',
        top: '5%',
        left: '15%',
        width: '700px',
        height: '700px',
        transform: `translate(-${mousePos.x * speed}px, -${mousePos.y * speed}px)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#D4A853"
          d="M44.5,-76.3C58.9,-69.3,71.9,-59.1,80.6,-46.8C89.3,-34.5,93.6,-20.1,91.8,-6.4C89.9,7.3,81.9,20.3,72.6,31.7C63.3,43.1,52.7,52.9,41.1,60.6C29.5,68.3,16.9,73.9,3.6,71.8C-9.7,69.7,-23.7,59.9,-37.2,50.7C-50.7,41.5,-63.7,32.9,-72.4,20.9C-81.1,8.9,-85.5,-6.5,-80.7,-19.4C-75.9,-32.3,-61.9,-42.7,-48.6,-50.3C-35.3,-57.9,-22.7,-62.7,-9.4,-61.2C3.9,-59.7,21.5,-74.6,30.1,-83.3L44.5,-76.3Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
};

const SprayPaintCorner = ({ mousePos }) => {
  const speed = 15;
  return (
    <div
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        filter: 'blur(80px)',
        opacity: 0.2,
        zIndex: 1,
        mixBlendMode: 'screen',
        bottom: '-150px',
        right: '-150px',
        width: '600px',
        height: '600px',
        transform: `translate(-${mousePos.x * speed}px, -${mousePos.y * speed}px)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#D4A853"
          d="M41.8,-71.4C54.4,-65.3,65.3,-56.3,73.6,-45.5C81.9,-34.7,87.6,-22.1,86.6,-9.9C85.6,2.3,77.9,14.1,69.5,25.3C61.1,36.5,52,47.1,41.2,55.4C30.4,63.7,17.9,69.7,4.8,71.3C-8.3,72.9,-22,70.1,-34.5,63.6C-47,57.1,-58.3,46.9,-66.4,34.8C-74.5,22.7,-79.4,8.7,-77.9,-4.6C-76.4,-17.9,-68.5,-30.5,-58.5,-40.4C-48.5,-50.3,-36.4,-57.5,-23.9,-63.7C-11.4,-69.9,1.5,-75.1,13.6,-74.6C25.7,-74.1,37,-67.9,41.8,-71.4Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
};

const NavBar = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      style={{
        padding: '40px 0',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 100,
        background: 'linear-gradient(to bottom, rgba(10,15,30,0.9), transparent)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            fontWeight: 900,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#D4A853',
          }}
        >
          Asia Lo Posible{' '}
          <sup style={{ color: '#8E94A5' }}>26</sup>
        </div>
        <div style={{ display: 'flex', gap: '32px' }}>
          {[
            { label: 'Itinerario', id: 'itinerary' },
            { label: 'Katherine', id: 'host' },
            { label: 'Detalles', id: 'details' },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              style={{
                color: '#FFFFFF',
                background: 'none',
                border: 'none',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                cursor: 'pointer',
                transition: 'color 0.3s ease',
                fontFamily: 'inherit',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#D4A853')}
              onMouseLeave={(e) => (e.target.style.color = '#FFFFFF')}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('book')}
            style={{
              color: '#D4A853',
              background: 'none',
              border: 'none',
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              cursor: 'pointer',
              fontWeight: 900,
              fontFamily: 'inherit',
            }}
          >
            Reservar
          </button>
        </div>
      </div>
    </nav>
  );
};

const HeroSection = ({ mousePos }) => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: "url('https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2940&auto=format&fit=crop') center/cover no-repeat",
          opacity: 0.7,
          filter: 'saturate(0.8)',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(10,15,30,0.6) 0%, rgba(10,15,30,0.3) 45%, rgba(10,15,30,0.7) 85%, #0A0F1E 100%)',
          zIndex: 1,
        }}
      />
      <SprayPaintHero mousePos={mousePos} />
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 40px',
          position: 'relative',
          zIndex: 10,
          width: '100%',
        }}
      >
        <span
          style={{
            ...customStyles.label,
            color: '#D4A853',
            textShadow: '0 1px 8px rgba(0,0,0,0.4)',
          }}
        >
          EDICIÓN LIMITADA — JULIO 2026
        </span>
        <h1 style={customStyles.heroTitle}>
          VIETNAM
          <br />
          <span
            style={{
              color: '#D4A853',
              fontFamily: "'Courier New', monospace",
              fontStyle: 'italic',
            }}
          >
            &amp;
          </span>{' '}
          CAMBOYA
        </h1>
        <p
          style={{
            color: 'rgba(255,255,255,0.75)',
            fontSize: '1rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            marginTop: '16px',
            fontWeight: 400,
          }}
        >
          EN ESPAÑOL
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '24px',
            marginTop: '40px',
          }}
        >
          <div style={{ gridColumn: 'span 6' }} />
          <div style={{ gridColumn: 'span 4' }}>
            <p style={customStyles.heroDenseCopy}>
              "ASIA LO POSIBLE" BY KATH MOLINARES ES UNA CAMPAÑA DE VIAJE CONCEPTUAL QUE SE ADENTRA EN LAS PROFUNDIDADES DEL SUDESTE ASIÁTICO. UNA EXPERIENCIA CINEMATOGRÁFICA DE 14 DÍAS DISEÑADA PARA EL VIAJERO QUE BUSCA AUTENTICIDAD SIN SACRIFICAR EL CONFORT.
            </p>
          </div>
          <div style={{ gridColumn: 'span 2', textAlign: 'right' }}>
            <button
              onClick={() => scrollTo('book')}
              style={{
                ...customStyles.btnPrimary,
                fontFamily: 'inherit',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#D4A853';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(212,168,83,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#D4A853';
                e.currentTarget.style.color = '#0A0F1E';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              UNIRSE
            </button>
          </div>
        </div>
        <svg
          style={{
            position: 'absolute',
            bottom: '-180px',
            right: '15%',
            width: '240px',
            height: '120px',
            stroke: '#D4A853',
            strokeWidth: 1.5,
            fill: 'none',
            opacity: 0.6,
            zIndex: 5,
          }}
          viewBox="0 0 200 100"
        >
          <path
            d="M10,50 Q50,10 90,50 T180,50"
            style={{
              strokeDasharray: 1000,
              strokeDashoffset: 0,
            }}
          />
          <path d="M20,60 L170,40" strokeWidth="2" strokeOpacity="0.3" />
        </svg>
      </div>
    </header>
  );
};

const HostSection = ({ mousePos }) => {
  const [hovered, setHovered] = useState(false);
  const speed = 15;

  return (
    <section
      id="host"
      style={{ padding: '120px 0', position: 'relative', zIndex: 10 }}
    >
      <div
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              position: 'relative',
              border: '1px solid rgba(212, 168, 83, 0.2)',
              overflow: 'hidden',
              filter: hovered
                ? 'grayscale(0) contrast(100%) brightness(1)'
                : 'grayscale(0.3) contrast(110%) brightness(0.8)',
              transition: 'all 0.6s ease',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop"
              alt="Katherine Molinares"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div
              style={{
                position: 'absolute',
                pointerEvents: 'none',
                filter: 'blur(50px)',
                opacity: 0.2,
                zIndex: 1,
                bottom: '-80px',
                left: '-80px',
                width: '350px',
                height: '350px',
                transform: `translate(-${mousePos.x * speed}px, -${mousePos.y * speed}px)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="80" fill="#D4A853" />
              </svg>
            </div>
          </div>
          <div>
            <span style={customStyles.label}>LA ANFITRIONA</span>
            <h2
              style={{
                fontSize: '2.5rem',
                marginBottom: '2rem',
                position: 'relative',
                display: 'inline-block',
                color: '#FFFFFF',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontWeight: 700,
              }}
            >
              KATHERINE
              <br />
              MOLINARES
            </h2>
            <p
              style={{
                ...customStyles.denseCopy,
                marginBottom: '30px',
                fontSize: '1rem',
                color: '#FFFFFF',
              }}
            >
              Periodista venezolana y creadora de contenido con base en Vietnam. Con más de 28k seguidores, Katherine ha documentado la esencia cruda de Asia, lejos de las trampas turísticas.
            </p>
            <p style={{ ...customStyles.denseCopy, color: '#8E94A5' }}>
              Este viaje no es un tour estándar. Es una inmersión curada por alguien que llama a estas calles su hogar. Sin barreras de idioma. Sin estrés logístico. Acceso total.
            </p>
            <div
              style={{
                marginTop: '40px',
                borderLeft: '2px solid #D4A853',
                paddingLeft: '20px',
              }}
            >
              <p
                style={{
                  ...customStyles.label,
                  margin: 0,
                  color: '#D4A853',
                  fontWeight: 900,
                }}
              >
                @KATHMOLINARES
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DetailsSection = () => {
  const items = [
    'HOTELES 4-5 ESTRELLAS',
    'CRUCERO HALONG BAY (LUXURY)',
    'VUELOS INTERNOS & TRASLADOS',
    'TODAS LAS COMIDAS & ACTIVIDADES',
    'GUÍA EN ESPAÑOL & ACOMPAÑAMIENTO',
  ];

  return (
    <section
      id="details"
      style={{ padding: '120px 0', position: 'relative', zIndex: 10 }}
    >
      <div
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '24px',
          }}
        >
          <div style={{ gridColumn: 'span 5' }}>
            <span style={customStyles.label}>LA PROPUESTA DE VALOR</span>
            <h2
              style={{
                fontSize: '2.5rem',
                marginBottom: '2rem',
                color: '#FFFFFF',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontWeight: 700,
              }}
            >
              TODO INCLUIDO.
              <br />
              CERO SORPRESAS.
            </h2>
            <p style={{ ...customStyles.denseCopy, color: '#8E94A5' }}>
              Olvídate de las letras pequeñas. El precio es final y cubre cada aspecto esencial de tu experiencia de lujo.
            </p>
          </div>
          <div style={{ gridColumn: '7 / span 6' }}>
            <ul style={{ listStyle: 'none' }}>
              {items.map((item, i) => (
                <li
                  key={i}
                  style={{
                    borderBottom: '1px solid rgba(212, 168, 83, 0.15)',
                    padding: '20px 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <span style={{ color: '#FFFFFF' }}>{item}</span>
                  <span style={{ color: '#D4A853' }}>✓</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const ItinerarySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const days = [
    { num: 'DÍA 01-03', title: 'El Caos Poético de Hanoi', loc: 'VIETNAM', isLast: false },
    { num: 'DÍA 04-05', title: 'Misticismo en Halong Bay', loc: 'CRUCERO', isLast: false },
    { num: 'DÍA 06-08', title: 'Linternas en Hoi An', loc: 'CENTRO', isLast: false },
    { num: 'DÍA 09-10', title: 'Historia Imperial en Hue', loc: 'VIETNAM', isLast: false },
    { num: 'DÍA 11-13', title: 'Templos de Angkor Wat', loc: 'CAMBOYA', isLast: false },
    { num: 'DÍA 14', title: 'Despedida & Regreso', loc: 'GLOBAL', isLast: true },
  ];

  return (
    <section
      id="itinerary"
      style={{ padding: '120px 0', position: 'relative', zIndex: 10 }}
    >
      <div
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}
      >
        <span style={customStyles.label}>LA RUTA — JULIO 2026</span>
        <div style={{ borderTop: '1px solid rgba(212, 168, 83, 0.1)' }}>
          {days.map((day, i) => {
            const isHovered = hoveredIndex === i;
            const isLastItem = day.isLast;
            return (
              <div
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  padding: isHovered ? '32px 0 32px 20px' : '32px 0',
                  borderBottom: isLastItem
                    ? '1px solid #D4A853'
                    : isHovered
                    ? '1px solid #D4A853'
                    : '1px solid rgba(212, 168, 83, 0.1)',
                  background: isLastItem
                    ? 'rgba(212, 168, 83, 0.1)'
                    : isHovered
                    ? 'rgba(212, 168, 83, 0.05)'
                    : 'transparent',
                  transition: 'all 0.4s ease',
                  cursor: 'default',
                }}
              >
                <span
                  style={{
                    fontFamily: 'monospace',
                    fontSize: '0.8rem',
                    color: isLastItem || isHovered ? '#D4A853' : '#8E94A5',
                    width: '100px',
                    transition: 'color 0.4s ease',
                  }}
                >
                  {day.num}
                </span>
                <span
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                    letterSpacing: '0.05em',
                  }}
                >
                  {day.title}
                </span>
                <span
                  style={{
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    textAlign: 'right',
                    width: '150px',
                    color: '#8E94A5',
                  }}
                >
                  {day.loc}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  const [whatsappHovered, setWhatsappHovered] = useState(false);
  const [igHovered, setIgHovered] = useState(false);

  return (
    <section
      id="book"
      style={{ padding: '120px 0 160px', position: 'relative', zIndex: 10 }}
    >
      <div
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}
      >
        <div
          style={{
            border: '1px solid rgba(212, 168, 83, 0.3)',
            padding: '80px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            background: 'rgba(212, 168, 83, 0.02)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '400px',
              height: '400px',
              background: '#D4A853',
              filter: 'blur(100px)',
              opacity: 0.1,
              pointerEvents: 'none',
            }}
          />
          <span style={{ ...customStyles.label, color: '#D4A853' }}>
            GRUPO PEQUEÑO Y SELECTO
          </span>
          <h2
            style={{
              fontSize: '3.5rem',
              margin: '30px 0',
              color: '#FFFFFF',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              fontWeight: 700,
            }}
          >
            ¿ESTÁS DENTRO?
          </h2>
          <p
            style={{
              ...customStyles.denseCopy,
              margin: '0 auto 40px auto',
              color: '#8E94A5',
            }}
          >
            Las plazas son estrictamente limitadas para garantizar la calidad de la experiencia. Primer llegado, primer servido.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <button
              style={{
                ...customStyles.btn,
                background: whatsappHovered ? 'transparent' : '#D4A853',
                color: whatsappHovered ? '#D4A853' : '#0A0F1E',
                borderColor: '#D4A853',
                fontFamily: 'inherit',
                boxShadow: whatsappHovered ? '0 0 20px rgba(212,168,83,0.4)' : 'none',
              }}
              onMouseEnter={() => setWhatsappHovered(true)}
              onMouseLeave={() => setWhatsappHovered(false)}
            >
              WHATSAPP DIRECTO
            </button>
            <button
              style={{
                ...customStyles.btn,
                background: igHovered ? '#D4A853' : 'transparent',
                color: igHovered ? '#0A0F1E' : '#D4A853',
                borderColor: '#D4A853',
                fontFamily: 'inherit',
                boxShadow: igHovered ? '0 0 20px rgba(212,168,83,0.4)' : 'none',
              }}
              onMouseEnter={() => setIgHovered(true)}
              onMouseLeave={() => setIgHovered(false)}
            >
              DM INSTAGRAM
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ mousePos }) => {
  return (
    <footer
      style={{
        padding: '80px 0 40px',
        borderTop: '1px solid rgba(212, 168, 83, 0.1)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 40px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
        }}
      >
        <div
          style={{
            fontSize: '0.7rem',
            color: '#8E94A5',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          © 2024 ASIA LO POSIBLE.
          <br />
          DISEÑO DE EXPERIENCIA POR KATH MOLINARES.
        </div>
        <div
          style={{
            fontSize: '0.7rem',
            color: '#8E94A5',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            textAlign: 'right',
          }}
        >
          <p>TERMINOS Y CONDICIONES</p>
          <p>POLITICA DE PRIVACIDAD</p>
          <br />
          <p style={{ color: '#D4A853', opacity: 0.6 }}>
            MIDNIGHT BLUE &amp; ELECTRIC GOLD SYSTEM
          </p>
        </div>
      </div>
      <SprayPaintCorner mousePos={mousePos} />
    </footer>
  );
};

const App = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body { background-color: #0A0F1E; overflow-x: hidden; }
      html { scroll-behavior: smooth; }
      @keyframes pulse-smoke {
        0% { transform: scale(1) translate(0,0); opacity: 0.15; }
        100% { transform: scale(1.2) translate(40px, -30px); opacity: 0.3; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div style={customStyles.body}>
      <svg
        style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
        version="1.1"
      >
        <defs>
          <filter id="sprayBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="30" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
          </filter>
        </defs>
      </svg>
      <NavBar />
      <HeroSection mousePos={mousePos} />
      <HostSection mousePos={mousePos} />
      <DetailsSection />
      <ItinerarySection />
      <CTASection />
      <Footer mousePos={mousePos} />
    </div>
  );
};

export default App;