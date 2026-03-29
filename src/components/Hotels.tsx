import Image from 'next/image'

const hotels = [
  {
    city: 'Hanói',
    name: 'Anatole Hotel Hanoi',
    url: 'https://anatolehotelhanoi.com/',
    stars: '★★★★',
    room: 'Habitación Executive',
    image: '/hotels/anatole-hanoi.jpg',
  },
  {
    city: 'Bahía de Halong',
    name: 'Crucero Indochine Premium',
    url: 'https://www.indochinasails.com/en/indochine-premium-ha-long.html',
    stars: '★★★★★',
    room: 'Camarote Junior Suite',
    image: '/hotels/indochine-cruise.jpg',
  },
  {
    city: 'Hue',
    name: 'White Lotus Hue Hotel',
    url: 'https://whitelotus.com.vn/',
    stars: '★★★★',
    room: 'Deluxe con vista al río',
    image: '/hotels/white-lotus-hue.jpg',
  },
  {
    city: 'Da Nang',
    name: 'À La Carte Da Nang',
    url: 'https://alacartedanangbeach.com/en/',
    stars: '★★★★',
    room: 'Frente al mar',
    image: '/hotels/alacarte-danang.jpg',
  },
  {
    city: 'Hoi An',
    name: 'Hoi An Delicacy Hotel',
    url: 'https://hoiandelicacyhotel.com/',
    stars: '★★★★',
    room: 'Balcón y vista a la piscina',
    image: '/hotels/hoian-delicacy.jpg',
  },
  {
    city: 'Siem Reap',
    name: 'Metta Residence & Spa',
    url: 'https://www.mettaresidence.com/',
    stars: '★★★★',
    room: 'Premier Deluxe Pool View',
    image: '/hotels/metta-siemreap.jpg',
  },
]

export default function Hotels() {
  return (
    <section className="pt-20 md:pt-28 pb-10 md:pb-14 relative z-10">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <span className="block text-xs tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-4">
          ALOJAMIENTO
        </span>
        <h2 className="text-2xl md:text-[2.5rem] leading-tight uppercase font-bold text-[var(--color-text)] mb-10">
          HOTELES EN VIETNAM Y CAMBOYA
          <br />
          &mdash; NOCHE A NOCHE
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {hotels.map((h, i) => (
            <a
              key={i}
              href={h.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[rgba(212,168,83,0.15)] overflow-hidden transition-all duration-400 hover:border-[var(--color-accent)] group block no-underline cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={h.image}
                  alt={`${h.name} — ${h.city}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ filter: 'saturate(0.85) brightness(0.9)' }}
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, var(--color-bg) 0%, transparent 50%)' }}
                />
                <span className="absolute top-3 left-3 text-[10px] tracking-[0.15em] uppercase px-2 py-1 font-bold text-[var(--color-accent)]" style={{ background: 'rgba(10,15,30,0.8)', backdropFilter: 'blur(4px)' }}>
                  {h.city}
                </span>
              </div>
              <div className="p-6">
                <p className="text-base font-bold uppercase text-[var(--color-text)] mb-1 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                  {h.name}
                </p>
                <p className="text-xs text-[var(--color-accent)] mb-2">{h.stars}</p>
                <p className="text-xs text-[var(--color-secondary)] uppercase tracking-wide">
                  {h.room}
                </p>
              </div>
            </a>
          ))}
        </div>

        <p className="text-xs text-[var(--color-secondary)] mt-8 italic max-w-[600px]">
          Los hoteles mencionados pueden estar sujetos a cambio por disponibilidad. En ese caso ser&aacute;n reemplazados por un hotel equivalente o superior.
        </p>
      </div>
    </section>
  )
}
