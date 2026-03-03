const hotels = [
  {
    city: 'Hanói',
    name: 'Anatole Hotel Hanoi',
    stars: '★★★★',
    room: 'Habitación Executive',
    emoji: '🏙️',
  },
  {
    city: 'Bahía de Halong',
    name: 'Crucero Indochine Premium',
    stars: '★★★★★',
    room: 'Camarote Junior Suite',
    emoji: '🚢',
  },
  {
    city: 'Hue',
    name: 'White Lotus Hue Hotel',
    stars: '★★★★',
    room: 'Deluxe con vista al río',
    emoji: '🏯',
  },
  {
    city: 'Da Nang',
    name: 'À La Carte Da Nang',
    stars: '★★★★',
    room: 'Frente al mar',
    emoji: '🌊',
  },
  {
    city: 'Hoi An',
    name: 'Hoi An Delicacy Hotel',
    stars: '★★★★',
    room: 'Balcón y vista a la piscina',
    emoji: '🌸',
  },
  {
    city: 'Siem Reap',
    name: 'Metta Residence & Spa',
    stars: '★★★★',
    room: 'Premier Deluxe Pool View',
    emoji: '🛕',
  },
]

export default function Hotels() {
  return (
    <section className="py-20 md:py-28 relative z-10">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <span className="block text-xs tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-4">
          ALOJAMIENTO
        </span>
        <h2 className="text-2xl md:text-[2.5rem] leading-tight uppercase font-bold text-[var(--color-text)] mb-10">
          NOCHE A NOCHE,
          <br />
          AS&Iacute; VAS A DORMIR.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {hotels.map((h, i) => (
            <div
              key={i}
              className="border border-[rgba(212,168,83,0.15)] p-6 md:p-8 transition-all duration-400 hover:border-[var(--color-accent)] hover:bg-[rgba(212,168,83,0.05)]"
            >
              <span className="text-2xl mb-4 block">{h.emoji}</span>
              <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-accent)] mb-2">
                {h.city}
              </p>
              <p className="text-base font-bold uppercase text-[var(--color-text)] mb-1">
                {h.name}
              </p>
              <p className="text-xs text-[var(--color-accent)] mb-2">{h.stars}</p>
              <p className="text-xs text-[var(--color-secondary)] uppercase tracking-wide">
                {h.room}
              </p>
            </div>
          ))}
        </div>

        <p className="text-xs text-[var(--color-secondary)] mt-8 italic max-w-[600px]">
          Los hoteles mencionados pueden estar sujetos a cambio por disponibilidad. En ese caso ser&aacute;n reemplazados por un hotel equivalente o superior.
        </p>
      </div>
    </section>
  )
}
