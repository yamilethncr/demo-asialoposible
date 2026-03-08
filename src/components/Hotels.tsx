const hotels = [
  {
    city: 'Hanói',
    name: 'Anatole Hotel Hanoi',
    url: 'https://anatolehotelhanoi.com/',
    stars: '★★★★',
    room: 'Habitación Executive',
    image: 'https://anatolehotelhanoi.com/UploadFile/Gallery-2024/Pool/4.jpg',
  },
  {
    city: 'Bahía de Halong',
    name: 'Crucero Indochine Premium',
    url: 'https://www.indochinasails.com/en/indochine-premium-ha-long.html',
    stars: '★★★★★',
    room: 'Camarote Junior Suite',
    image: 'https://www.indochinasails.com/DataUpload/Tau/1201017561._Overview_Indochine_Premium_Luxury_Cruise_Ha_Long_Bay_(7)_(3)_(2).jpg',
  },
  {
    city: 'Hue',
    name: 'White Lotus Hue Hotel',
    url: 'https://whitelotus.com.vn/',
    stars: '★★★★',
    room: 'Deluxe con vista al río',
    image: 'https://whitelotus.com.vn/wp-content/uploads/2018/12/WhiteLotus-157-of-437.jpg',
  },
  {
    city: 'Da Nang',
    name: 'À La Carte Da Nang',
    url: 'https://alacartedanangbeach.com/en/',
    stars: '★★★★',
    room: 'Frente al mar',
    image: 'https://alacartebeach.hoteldanang.net/data/Pics/OriginalPhoto/16747/1674730/1674730852/a-la-carte-da-nang-beach-da-nang-pic-1.JPEG',
  },
  {
    city: 'Hoi An',
    name: 'Hoi An Delicacy Hotel',
    url: 'https://hoiandelicacyhotel.com/',
    stars: '★★★★',
    room: 'Balcón y vista a la piscina',
    image: 'https://hoiandelicacyhotel.com/wp-content/uploads/2022/12/Swimming-Pool.jpg',
  },
  {
    city: 'Siem Reap',
    name: 'Metta Residence & Spa',
    url: 'https://www.mettaresidence.com/',
    stars: '★★★★',
    room: 'Premier Deluxe Pool View',
    image: 'https://www.mettaresidence.com/api/media/file/Swimming%20Pool%20Side%20-%20Metta%20Residence%20%26%20Spa%20-%20Siem%20Reap%20Hotel%20in%20Cambodia-1920x1080.jpg',
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
              className="border border-[rgba(212,168,83,0.15)] overflow-hidden transition-all duration-400 hover:border-[var(--color-accent)] group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={h.image}
                  alt={`${h.name} — ${h.city}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
                <a
                  href={h.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold uppercase text-[var(--color-text)] mb-1 block hover:text-[var(--color-accent)] transition-colors duration-300"
                >
                  {h.name}
                </a>
                <p className="text-xs text-[var(--color-accent)] mb-2">{h.stars}</p>
                <p className="text-xs text-[var(--color-secondary)] uppercase tracking-wide">
                  {h.room}
                </p>
              </div>
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
