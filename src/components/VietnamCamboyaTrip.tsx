import Contacto from './Contacto'

/**
 * Cuerpo de la money page "Viaje a Vietnam y Camboya". Salida confirmada 23 mar–5 abr 2027,
 * 15 días / 9 destinos. Incluye itinerario breve, programa detallado día a día (acordeón nativo
 * <details>, sin JS), tabla de hoteles por categoría (3/4/5★) y precios por tier.
 * Usado por /viajes/vietnam-camboya e /inscribete.
 */

const ITINERARY_BRIEF = [
  { day: 'Día 01', title: 'Hanói — Llegada', meals: '—', body: 'Llegada a Hanói y traslado privado al hotel: la bienvenida a Vietnam.' },
  { day: 'Día 02', title: 'Hanói: la capital cultural de Vietnam', meals: 'D', body: 'Mausoleo de Ho Chi Minh, Templo de la Literatura, la Calle del Tren y el lago Hoan Kiem.' },
  { day: 'Día 03', title: 'Hanói — Mai Chau', meals: 'D, C', body: 'Ruta hacia el valle de Mai Chau: paisajes de montaña y paseo en bicicleta por aldeas Thai.' },
  { day: 'Día 04', title: 'Mai Chau — Pu Luong', meals: 'D, A', body: 'Caminata por Pu Luong entre arrozales en terrazas, cuevas y ruedas hidráulicas de bambú.' },
  { day: 'Día 05', title: 'Pu Luong — Ninh Binh: Tam Coc y Cueva Mua', meals: 'D', body: 'Canoa por Tam Coc, la pagoda de Bich Dong y los 486 escalones de la Cueva Mua.' },
  { day: 'Día 06', title: 'Ninh Binh — Bahía de Halong', meals: 'D, A, C', body: 'Crucero de lujo por la Bahía de Halong, entre miles de islotes de piedra caliza (guía en inglés a bordo).' },
  { day: 'Día 07', title: 'Halong — Hanói — vuelo a Hue', meals: 'D', body: 'Brunch a bordo y vuelo desde Hanói hacia Hue, la antigua capital imperial.' },
  { day: 'Día 08', title: 'Hue: la antigua capital imperial', meals: 'D', body: 'La Ciudadela Imperial, la Pagoda Thien Mu y la tumba del emperador Tu Duc.' },
  { day: 'Día 09', title: 'Hue — Da Nang — Hoi An', meals: 'D', body: 'Paso de Hai Van, las Montañas de Mármol y el casco antiguo de Hoi An.' },
  { day: 'Día 10', title: 'Hoi An — vuelo a Ho Chi Minh (sin guía)', meals: 'D', body: 'Vuelo hacia Ho Chi Minh y recorrido en rickshaw por el corazón de Saigón.' },
  { day: 'Día 11', title: 'Saigón — Ben Tre — Saigón', meals: 'D, A', body: 'Delta del Mekong: cocoteros, canales y vida fluvial en Ben Tre.' },
  { day: 'Día 12', title: 'Saigón — vuelo a Siem Reap (sin guía)', meals: 'D', body: 'Vuelo hacia Siem Reap, la puerta de entrada a los templos de Angkor.' },
  { day: 'Día 13', title: 'Siem Reap: Angkor Thom y Angkor Wat', meals: 'D', body: 'Angkor Thom, el templo Bayón, Ta Prohm y el atardecer en Angkor Wat.' },
  { day: 'Día 14', title: 'Siem Reap: circuito largo — Banteay Srei y Banteay Samre', meals: 'D, C', body: 'Banteay Srei, Banteay Samre y Preah Khan, con cena de despedida jemer y danza de Apsara.' },
  { day: 'Día 15', title: 'Siem Reap — Salida (sin guía)', meals: 'D', body: 'Traslado al aeropuerto de Siem Reap y vuelo de salida.' },
]

const ITINERARY_DETAIL = [
  {
    day: 'Día 01', title: 'Hanói — Llegada', meta: 'Sin comidas incluidas · Guía y chofer',
    body: [
      'A la llegada al aeropuerto internacional de Hanói, recepción cálida por parte de tu guía de habla hispana y traslado privado al hotel en el corazón de la ciudad. Tiempo libre para descansar o explorar la ciudad por tu cuenta.',
    ],
  },
  {
    day: 'Día 02', title: 'Hanói: la capital cultural de Vietnam', meta: 'Desayuno · Guía y chofer',
    body: [
      'Comenzamos la visita a Hanói, la capital de Vietnam, por el imponente Mausoleo de Ho Chi Minh (visita exterior) — abierto todos los días menos los lunes, viernes y los meses de octubre y noviembre. Muy cerca se encuentran el amarillo Palacio Presidencial (visita exterior) y la Casa sobre Pilotes de Ho Chi Minh. Al salir visitamos la Pagoda del Pilar Único, o de una sola columna.',
      'Nos trasladamos a la zona del lago Oeste (Ho Tay) para visitar la Pagoda de Tran Quoc. La visita continúa con el Templo de la Literatura, fundado en el siglo XI — la primera universidad de Vietnam.',
      'Por la tarde, exploramos la curiosa Calle del Tren, donde la vida transcurre a escasos centímetros de las vías ferroviarias activas. Haremos una pausa para degustar un café de huevo — especialidad única de Hanói — o una cerveza local, mientras contemplamos pasar los trenes. Luego nos dirigimos al lago Hoan Kiem, donde se encuentra el Templo de la Montaña de Jade (Ngoc Son), al que se accede por el célebre Puente del Sol Naciente, erigido en el siglo XVIII. Dentro del templo se puede ver una enorme tortuga disecada hallada en el lago.',
    ],
    tip: 'Por la noche puedes descubrir la calle Ta Hien, ideal para tomar unas cervezas con buen ambiente y buenos precios.',
  },
  {
    day: 'Día 03', title: 'Hanói — Mai Chau', meta: 'Desayuno y cena · Guía y chofer',
    body: [
      'Por la mañana, a las 8:00, recogida en tu hotel y salida por carretera hacia Mai Chau, un valle pintoresco rodeado de montañas esmeraldas y habitado por las minorías étnicas Thai y Muong. Durante el trayecto, una parada en el Paso de Thung Khe permite admirar vistas panorámicas espectaculares del valle. A unos 145 km de Hanói, Mai Chau sorprende con su paisaje armonioso de arrozales, montañas verdes y pueblos tradicionales de la comunidad Thai blanca. Llegada alrededor del mediodía.',
      'Por la tarde, excursión en bicicleta para adentrarse en la vida auténtica de Mai Chau. El recorrido atraviesa arrozales resplandecientes, bosques de bambú y aldeas con casas sobre pilotes, con la hospitalidad de sus habitantes. Visitaremos aldeas como Chieng Sai, Cha Long y Na Tang, guardianas de tradiciones ancestrales. Por la noche, cena en el hotel.',
    ],
    note: 'Ruta Hanói – Mai Chau: 150 km / 4 horas. Paseo en bicicleta: 12 km / 2 horas (si no sabes montar en bicicleta, el recorrido se puede hacer en carrito eléctrico del resort, con la misma comodidad).',
  },
  {
    day: 'Día 04', title: 'Mai Chau — Pu Luong', meta: 'Desayuno y almuerzo · Guía y chofer',
    body: [
      'Después del desayuno salimos hacia Pu Luong. Al llegar, caminata por Kho Muong, el pueblo aislado dentro de un valle, hasta la Cueva Doi, la más grande de la zona. Almuerzo tipo picnic con los lugareños.',
      "Traslado al pueblo de Don, epicentro de Pu Luong, y caminata de 6 km por los senderos icónicos de la región: campos de arroz en terrazas, arroyos frescos, ruedas hidráulicas de bambú sobre el río, tierras de cultivo, patos chapoteando en los estanques y la gente amable de la zona. También haremos un corto paseo en balsas de bambú por el tranquilo arroyo de Cham.",
    ],
    note: 'Ruta Mai Chau – Pu Luong: 1.5 horas (50 km).',
  },
  {
    day: 'Día 05', title: 'Pu Luong — Ninh Binh: Tam Coc y Cueva Mua', meta: 'Desayuno · Guía y chofer',
    body: [
      "Tras el desayuno, salimos hacia Ninh Binh, la versión “terrestre” de la Bahía de Halong. Realizamos un paseo en canoas a remo por el río Ngo Dong (2 km), atravesando tres cuevas: Hang Ca (127 m), Hang Giua (70 m) y Hang Cuoi (45 m).",
      'Continuamos hacia la pagoda de Bich Dong, formada por tres templos escalonados en la ladera de un cerro y unidos por un túnel; desde el más alto se aprecian bonitas vistas. Cerramos el día en la Cueva Mua, célebre por sus paisajes vinculados a los valores culturales de la antigua capital. Para llegar a la cima de Hang Mua — considerada la Gran Muralla de Vietnam — hay que subir 486 escalones de piedra cubiertos de musgo; desde arriba, el panorama de Tam Coc (las Tres Cuevas) es espectacular.',
    ],
    note: 'Ruta: Pu Luong – Ninh Binh: 4 horas (150 km).',
  },
  {
    day: 'Día 06', title: 'Ninh Binh — Bahía de Halong', meta: 'Desayuno, almuerzo y cena · Guía en inglés a bordo',
    body: [
      'Después del desayuno, traslado terrestre hacia la legendaria Bahía de Halong, declarada Patrimonio de la Humanidad por la UNESCO (3.5 – 4 horas).',
      'A la llegada, embarcamos en un junco tradicional de lujo para una travesía inolvidable entre más de 1,900 islas e islotes de piedra caliza que emergen del mar esmeralda. Almuerzo recién preparado a bordo mientras navegamos entre formaciones rocosas esculpidas por la naturaleza durante millones de años.',
      'Por la tarde, el crucero ofrece actividades como visitas a cuevas, una playa escondida o un islote — según decisión del capitán y las condiciones climáticas. Puedes relajarte en cubierta, disfrutar de un baño o participar en un taller de cocina vietnamita. Por la noche, cena especial y descanso en las aguas serenas de la bahía.',
    ],
    note: 'El itinerario exacto del crucero puede variar por condiciones del tiempo o decisión del capitán.',
  },
  {
    day: 'Día 07', title: 'Halong — Hanói — vuelo a Hue', meta: 'Desayuno · Guía y chofer',
    body: [
      'Al amanecer, si lo deseas, puedes unirte a una sesión de tai chi en cubierta mientras contemplas el despertar de la bahía. Disfrutamos de un brunch a bordo mientras el barco navega de regreso al puerto. Tras desembarcar, traslado al aeropuerto de Noi Bai (Hanói) para tomar el vuelo hacia Hue, antigua capital imperial de Vietnam. A la llegada, recogida por el chofer y traslado al hotel (sin guía).',
    ],
  },
  {
    day: 'Día 08', title: 'Hue: la antigua capital imperial', meta: 'Desayuno · Guía y chofer',
    body: [
      'Visita a la ciudad imperial de Hue, declarada Patrimonio de la Humanidad por la UNESCO en 1993. Comenzamos por la Ciudadela Imperial, construida a semejanza de la Ciudad Prohibida de Pekín: la Puerta Ngo Mon, los nueve cañones sagrados, el Palacio de Thai Hoa, la Ciudad Púrpura Prohibida, el templo The Mieu, el Teatro Real, el Pabellón Hien Lam y las nueve urnas dinásticas.',
      'Continuamos con la Pagoda Thien Mu, icono espiritual de Hue, donde se conserva el histórico Austin desde el que el monje Thich Quang Duc partió hacia su inmolación en Saigón en 1963. Seguimos hacia el pueblo de Thuy Xuan, conocido por la fabricación tradicional de varillas de incienso, y visitamos la Tumba del emperador Tu Duc, uno de los complejos funerarios mejor conservados de la dinastía Nguyen, rodeado de pinos. Cerramos el día en el animado mercado Dong Ba, ideal para productos locales y la vida cotidiana de la ciudad.',
    ],
  },
  {
    day: 'Día 09', title: 'Hue — Da Nang — Hoi An', meta: 'Desayuno · Guía y chofer',
    body: [
      'Traslado por la panorámica carretera de la costa hacia Hoi An, unos 130 km al sur de Hue, con parada en el Paso de las Nubes (Hai Van) antes de llegar a Da Nang. Visitamos las Montañas de Mármol, un complejo de cinco formaciones rocosas junto al mar, de gran importancia espiritual a lo largo de los siglos — subimos a la “Montaña del Agua” para visitar alguna de sus cuevas y pagodas.',
      'Por la tarde, visita a Hoi An, próspero puerto histórico y punto de encuentro entre Oriente y Occidente en la época de los señores Nguyen. Visitamos la Pagoda de Phuoc Kien, construida por marineros chinos en el siglo XVII en honor a Thien Hau Thanh Mau, y el Puente Cubierto Japonés, con 400 años de antigüedad. También la Casa Vieja de Tan Ky (Phung Hung), antigua casa de comerciantes de más de 2 siglos, con decoración que mezcla elementos chinos, japoneses y locales. Cerramos con un té en Reaching Out Tea House, un oasis de silencio en el corazón de la bulliciosa Hoi An.',
    ],
    tip: "El show “Memoria de Hoi An” es el mejor espectáculo de tradición, luces y música de la ciudad.",
  },
  {
    day: 'Día 10', title: 'Hoi An — vuelo a Ho Chi Minh (sin guía)', meta: 'Desayuno · Chofer (traslado sin guía)',
    body: [
      'Recogida por nuestro chofer (sin guía) y traslado al aeropuerto de Da Nang para volar a Ho Chi Minh, la antigua Saigón, conocida como “La Perla del Lejano Oriente” y la ciudad más extensa y poblada de Vietnam.',
      'A la llegada, recogida por nuestro guía y recorrido por la ciudad en rickshaw (triciclo conducido por gente local). Saigón esconde lugares secretos e historias maravillosas — con más de 2,000 años de historia, es un destino prometedor para cualquier viajero curioso. Durante el recorrido (aprox. 2h30) verás Chợ Lớn (mercado Lớn), calles comerciales tradicionales y mercados de flores. El triciclo es la mejor manera de descubrir la ciudad y la vida de sus habitantes desde muy cerca.',
    ],
  },
  {
    day: 'Día 11', title: 'Saigón — Ben Tre — Saigón', meta: 'Desayuno y almuerzo · Guía y chofer',
    body: [
      'Salimos hacia Ben Tre, en pleno corazón del Delta del Mekong, conocida como la tierra de los cocoteros. La economía local gira en torno a este fruto: fibras, leche, aceite e incluso carbón activo a partir de la cáscara. Visitamos también un horno de ladrillos artesanal, donde aún se conserva la técnica tradicional de fabricación.',
      "Embarcamos en un bote para recorrer uno de los brazos del Mekong, observando la vida fluvial: barcazas cargadas de fruta, pescadores locales y casas sobre pilotes. Cambiamos de ritmo subiendo a un “xe lam” (el tuktuk vietnamita) o en bicicleta, para atravesar los tranquilos senderos del pueblo entre palmeras y huertos.",
      'Nos detenemos en una casa local para disfrutar de un té con miel, frutas tropicales de temporada y conocer la elaboración de dulces de coco y vino de arroz. Después, paseo en bote de remos por estrechos canales flanqueados por palmas de agua, estampa típica del Delta. Almuerzo en una casa tradicional.',
    ],
  },
  {
    day: 'Día 12', title: 'Saigón — vuelo a Siem Reap (sin guía)', meta: 'Desayuno · Chofer',
    body: [
      'Tiempo libre hasta el traslado al aeropuerto, donde tomarás tu vuelo con destino a Siem Reap (sin guía). A la llegada a Camboya, recepción por parte del chofer y traslado al hotel. Siem Reap, puerta de entrada a los majestuosos templos de Angkor, es un auténtico tesoro histórico y cultural del país. Tiempo libre para descansar.',
    ],
  },
  {
    day: 'Día 13', title: 'Siem Reap: Angkor Thom y Angkor Wat', meta: 'Desayuno · Guía y chofer',
    body: [
      'Recogida en el hotel a las 08:30. Día dedicado al complejo arqueológico de Angkor, Patrimonio de la Humanidad por la UNESCO. Empezamos por la Puerta Oeste de Angkor Thom, menos transitada y rodeada de selva, y visitamos sus principales monumentos: el misterioso templo Bayón, con sus 54 torres decoradas con caras sonrientes; el Baphuon, representación simbólica del monte Meru; el Recinto Real, Phimeanakas, la Terraza de los Elefantes y la Terraza del Rey Leproso.',
      'Continuamos hacia el templo de Ta Prohm, donde las raíces gigantescas de los árboles abrazan los muros de piedra — una escena inolvidable, famosa por aparecer en la película Tomb Raider.',
      'Por la tarde, visita al majestuoso Angkor Wat, el templo más grande y emblemático de todo el conjunto, cuya armonía arquitectónica y riqueza de relieves lo convierten en uno de los tesoros más impresionantes de Asia.',
    ],
    tip: 'Por la noche, disfruta del animado ambiente de Pub Street o del Angkor Night Market, ideales para probar la gastronomía local, comprar recuerdos artesanales o simplemente vivir la vida nocturna camboyana.',
  },
  {
    day: 'Día 14', title: 'Siem Reap: circuito largo — Banteay Srei y Banteay Samre', meta: 'Desayuno y cena de despedida · Guía y chofer',
    body: [
      'Comenzamos temprano, en coche hacia el templo Pre Rup, desde donde se contempla la jungla que lo rodea. Visitamos Banteay Samre (la ciudadela de los agricultores), considerado una maqueta de Angkor Wat, y Banteay Srei (la ciudadela de las mujeres), la joya de la corona del arte angkoriano.',
      'Tras la comida, visitamos East Mebon, Ta Som, Neak Pean y Preah Khan, el segundo templo más grande después de Angkor Wat.',
    ],
    tip: 'Cena de despedida de estilo jemer con danza de Apsara incluida.',
  },
  {
    day: 'Día 15', title: 'Siem Reap — Salida (sin guía)', meta: 'Desayuno · Chofer',
    body: [
      'A la hora indicada, traslado al aeropuerto de Siem Reap (sin guía) para tomar tu vuelo de salida.',
    ],
  },
]

const HOTELS = [
  { img: '/hotels/anatole-hanoi.jpg', place: 'Hanói', desc: 'Anatole Hotel Hanoi, 4★ — centro histórico' },
  { img: '/hotels/indochine-cruise.jpg', place: 'Bahía de Halong', desc: 'Indochine Premium Cruise, 4★ — junco de lujo' },
  { img: '/hotels/white-lotus-hue.jpg', place: 'Hue', desc: 'White Lotus, 4★ — vistas al río de los Perfumes' },
  { img: '/hotels/hoian-delicacy.jpg', place: 'Hoi An', desc: 'Hoi An Delicacy, 4★ — piscina con encanto' },
  { img: '/hotels/metta-siemreap.jpg', place: 'Siem Reap', desc: 'Metta Residence & Spa, 4★ — jardín y piscina' },
]

const HOTEL_TIERS = [
  {
    city: 'Hanói',
    options: [
      { stars: [3], name: 'Hong Ngoc Dynastie Hotel', room: 'Deluxe City View', address: '30-34 Hang Manh St., Casco Antiguo, Hanói', phone: '+84 24 3828 5053', url: 'https://hongngochotels.com/dynastie' },
      { stars: [4], name: 'Anatole Hotel Hanoi', room: 'Executive', address: '26-30 Nha Chung, Hoan Kiem, Hanói', phone: '+84 24 3675 1888', url: 'https://anatolehotelhanoi.com' },
      { stars: [5], name: 'Apricot Hotel Hanói', room: 'Canvas', address: '136 Hang Trong St., Hoan Kiem, Hanói', phone: '+84 24 3828 9595', url: 'https://apricothotels.com' },
    ],
  },
  {
    city: 'Mai Chau',
    options: [
      { stars: [3, 4, 5], name: 'Mai Chau Ecolodge', room: 'Junior Deluxe', address: 'Nà Chiềng, Mai Chau', phone: '+84 218 3819 888', url: 'https://maichau.ecolodge.asia' },
    ],
  },
  {
    city: 'Pu Luong',
    options: [
      { stars: [3], name: 'Pu Luong Natura', room: 'Deluxe Bungalow', address: 'Bản Đôn, Pu Luong, Thanh Hoa', phone: '+84 971 336 650', url: 'https://naturabungalow.com' },
      { stars: [4, 5], name: 'Pu Luong Retreat', room: 'Deluxe', address: 'Thành Lâm, Thanh Hoa', phone: '+84 24 3823 9988', url: 'https://puluongretreat.com/en' },
    ],
  },
  {
    city: 'Ninh Binh',
    options: [
      { stars: [3, 4], name: 'Hidden Charm', room: 'Superior', address: 'Tam Coc - Bich Dong Tourist Center, Ninh Bình', phone: '+84 229 3888 555', url: 'https://hiddencharmresort.com' },
      { stars: [5], name: 'Nham Village', room: 'Rom House', address: 'Hai Nham Hamlet, Ninh Hai, Hoa Lu, Ninh Bình', phone: '+84 81 681 6859', url: 'https://nhamvillageresort.com' },
    ],
  },
  {
    city: 'Bahía de Halong',
    options: [
      { stars: [3], name: 'Victory Star Cruise', room: 'Deluxe Ocean View Balcony', address: 'Le Quy Don St., Bach Dang, Halong City', phone: '+84 203 3826 898', url: 'https://halongvictorystarcruise.com' },
      { stars: [4], name: 'Indochine Premium Cruise', room: 'Junior Suite cabin', address: 'Tuan Chau Port, Halong, Quang Ninh', phone: '+84 24 3984 2362', url: 'https://www.indochinasails.com/en/indochine-premium-ha-long.html' },
      { stars: [5], name: 'Aimee Cruise Ha Long', room: 'Eden Balcony Suite cabin', address: 'Ha Long, Quang Ninh', phone: '+84 906 230 886', url: 'https://aimeecruises.com' },
    ],
  },
  {
    city: 'Hue',
    options: [
      { stars: [3], name: 'Thanh Lich Royal Boutique', room: 'Boutique Deluxe', address: '33 Hai Ba Trung, Hue', phone: '+84 234 3825 974', url: 'https://thanhlichroyalboutiquehotel.com' },
      { stars: [4], name: 'White Lotus Hue Hotel', room: 'Deluxe River View', address: '05-07 Hoang Hoa Tham, Hue', phone: '+84 234 3881 888', url: 'https://whitelotus.com.vn' },
      { stars: [5], name: 'Silk Path Grand Hotel & Spa', room: 'Deluxe', address: 'Hue, Vietnam', phone: '+84 234 3266 8585', url: 'https://silkpathhotel.com/hue' },
    ],
  },
  {
    city: 'Hoi An',
    options: [
      { stars: [3], name: 'Royal Riverside Hoi An', room: 'Deluxe City', address: '40 Nguyen Du, Hoi An, Quang Nam', phone: '+84 235 3666 979', url: 'https://royalriversidehoian.com' },
      { stars: [4], name: 'Hoi An Delicacy Hotel', room: 'Premium Balcony Pool View', address: '116 Hùng Vương St., Hoi An, Quang Nam', phone: '+84 235 3939 333', url: 'https://hoiandelicacyhotel.com' },
      { stars: [5], name: 'Hoi An Moon Premium Boutique Hotel & Spa', room: 'Moonlight Deluxe', address: '242 Nguyen Duy Hieu St., Hoi An Dong, Da Nang', phone: '+84 235 3862 999', url: 'https://hoianmoon.com' },
    ],
  },
  {
    city: 'Ho Chi Minh',
    options: [
      { stars: [3], name: 'Acnos Sai Gon Hotel', room: 'Deluxe room', address: '18-20 Nguyen Thi Nghia St., District 1, HCMC', phone: '+84 28 3925 2090', url: 'https://acnoshotel.com/hotel/en/home/' },
      { stars: [4], name: 'Silverland May Hotel', room: 'Narra', address: '28-30 Thi Sach St., Ben Nghe, District 1, HCMC', phone: '+84 28 3845 6888', url: 'https://silverlandmayhotel.com' },
      { stars: [5], name: 'Mai House Saigon', room: 'Deluxe', address: '157 Nam Kỳ Khởi Nghĩa St., District 3, HCMC', phone: '+84 28 7303 9000', url: 'https://maihouse.com.vn' },
    ],
  },
  {
    city: 'Siem Reap',
    options: [
      { stars: [3], name: 'Royal Crown Hotel', room: 'Deluxe Balcony', address: '7 Makara St., Wat Bo Village, Siem Reap', phone: '+855 63 760 316', url: 'http://royalcrownhotel.com.kh' },
      { stars: [4], name: 'Metta Residence & Spa', room: 'Premier Deluxe Pool View', address: 'Phum Salakamreuk, Siem Reap', phone: '+855 63 766 388', url: 'https://www.mettaresidence.com' },
      { stars: [5], name: 'FCC Angkor by Avani', room: 'Deluxe', address: 'Pokambor Ave, Siem Reap', phone: '+855 63 760 280', url: 'https://www.avanihotels.com/en/angkor-siem-reap' },
    ],
  },
]

const PRICE_TIERS = [
  { stars: '3★', price: 3620, single: 786 },
  { stars: '4★', price: 3944, single: 1006 },
  { stars: '5★', price: 4386, single: 1396 },
]

const INCLUDED = [
  'Alojamiento con desayuno en los hoteles seleccionados (o similares)',
  'Comidas indicadas en el itinerario (D = desayuno, A = almuerzo, C = cena), sin bebidas',
  'Traslados y desplazamientos en vehículos privados con aire acondicionado, excepto días libres',
  'Guías locales de habla hispana en cada destino, excepto días libres y en el crucero de la Bahía de Halong (guía a bordo en inglés)',
  'Paseos en barco indicados en el programa, incluyendo barco compartido en la Bahía de Halong con cabina privada',
  '3 vuelos internos y regionales en clase económica con tasas incluidas: Hanói–Hue, Da Nang–Saigón, Saigón–Siem Reap',
  'Entradas a todos los sitios turísticos mencionados en el itinerario',
]

const NOT_INCLUDED = [
  'Vuelos internacionales y tasas de aeropuerto',
  'Visado de entrada y seguro de viaje',
  'Gastos personales: llamadas, lavandería, bebidas, compras, etc.',
  'Comidas no mencionadas expresamente en el programa',
  'Gastos bancarios relacionados con el pago del viaje',
  'Cualquier servicio no especificado claramente en "el precio incluye"',
]

export default function VietnamCamboyaTrip() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/hotels/indochine-cruise.jpg" alt="Crucero de lujo en la Bahía de Halong, Vietnam" />
        <div className="container">
          <p className="breadcrumb">
            <a href="/">Inicio</a> › <a href="/#tours">Viajes</a> › Vietnam &amp; Camboya
          </p>
          <p className="eyebrow">Viaje conmigo · Salida grupal en español · 23 mar – 5 abr 2027</p>
          <h1 className="display" style={{ fontSize: 'clamp(2.4rem,6vw,4.4rem)' }}>
            Viaje a Vietnam y Camboya en español — 15 días
          </h1>
          <div className="tag-row">
            <span className="chip">15 días</span>
            <span className="chip">9 destinos</span>
            <span className="chip">Grupo máx. 10</span>
            <span className="chip">Hoteles 3–5★</span>
            <span className="chip">Bahía de Halong + Angkor Wat</span>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="section">
        <div className="container split">
          <div>
            <div className="prose reveal">
              <p className="lead" style={{ color: 'var(--color-text)' }}>
                Quince días por lo mejor del sudeste asiático, en grupos pequeños y 100% en
                español. De los callejones de Hanói al amanecer en Angkor Wat, pasando por los
                valles de Mai Chau y Pu Luong, la bahía terrestre de Ninh Binh y el Delta del
                Mekong — con todo resuelto para que tú solo te dediques a vivirlo.
              </p>
              <p>
                Este es el viaje organizado que yo le haría a alguien que quiero: hoteles
                seleccionados uno a uno, un crucero de lujo entre los islotes de la Bahía de
                Halong, caminatas por los arrozales en terraza de Pu Luong, un día en el Delta del
                Mekong y guía local en español en cada parada. Nada de improvisar — nosotros nos
                encargamos de la logística, tú de los recuerdos.
              </p>

              <h2>Itinerario breve — Vietnam y Camboya en 15 días</h2>
              <div className="itinerary">
                {ITINERARY_BRIEF.map((d) => (
                  <div className="itin-day reveal" key={d.day}>
                    <span className="daytag">{d.day} · {d.meals}</span>
                    <h3>{d.title}</h3>
                    <p>{d.body}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '.82rem', color: 'var(--color-secondary)' }}>
                D = desayuno · A = almuerzo · C = cena. Todos los días incluyen guía y chofer
                privado, salvo donde se indica &quot;sin guía&quot; (solo traslado con chofer).
              </p>

              <h2>Itinerario detallado — programa día a día</h2>
              <div className="itin-detail">
                {ITINERARY_DETAIL.map((d) => (
                  <details key={d.day}>
                    <summary>
                      <span>
                        <span className="daytag">{d.day}</span>
                        <b>{d.title}</b>
                      </span>
                      <svg className="chev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </summary>
                    <div className="detail-body">
                      <span className="detail-meta">{d.meta}</span>
                      {d.body.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                      {d.tip && (
                        <div className="callout">
                          <p>{d.tip}</p>
                        </div>
                      )}
                      {d.note && (
                        <p style={{ fontSize: '.82rem', fontStyle: 'italic' }}>{d.note}</p>
                      )}
                    </div>
                  </details>
                ))}
              </div>

              <h2>Dónde dormirás — hoteles en Vietnam y Camboya</h2>
              <p>
                Hoteles seleccionados uno a uno en cada parada del itinerario, disponibles en
                categoría 3, 4 o 5 estrellas. Estos son algunos de los alojamientos del viaje:
              </p>
              <div className="hotel-grid">
                {HOTELS.map((h) => (
                  <figure className="hotel" key={h.place}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={h.img} alt={`Hotel en ${h.place}`} loading="lazy" />
                    <figcaption>
                      <b>{h.place}</b>
                      <span>{h.desc}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>

              <h3>Lista completa de hoteles por categoría</h3>
              <div className="hotel-table-wrap">
                <table className="hotel-table">
                  <thead>
                    <tr>
                      <th>Destino</th>
                      <th>3★</th>
                      <th>4★</th>
                      <th>5★</th>
                    </tr>
                  </thead>
                  <tbody>
                    {HOTEL_TIERS.map((row) => (
                      <tr key={row.city}>
                        <td className="city">{row.city}</td>
                        {row.options.map((opt) => (
                          <td className="htl" colSpan={opt.stars.length} key={opt.name}>
                            <a href={opt.url} target="_blank" rel="noopener noreferrer">
                              {opt.name}
                            </a>
                            <small>{opt.room}</small>
                            <small>{opt.address}</small>
                            <small>{opt.phone}</small>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p style={{ fontSize: '.82rem', color: 'var(--color-secondary)' }}>
                Los hoteles listados son orientativos y su disponibilidad depende del momento de la
                reserva. Si alguno no está disponible, lo sustituimos por otro equivalente o
                similar.
              </p>

              <h2>Qué incluye — todo incluido</h2>
              <div className="incl-grid">
                <div>
                  <h3>Sí incluye ✓</h3>
                  <ul>
                    {INCLUDED.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>No incluye</h3>
                  <ul>
                    {NOT_INCLUDED.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                  <div className="callout">
                    <p>
                      Te ayudamos con todo: vuelos, visados y seguro. Aunque no estén incluidos, no
                      te dejamos solo en el proceso.
                    </p>
                  </div>
                </div>
              </div>

              <h3>Notas importantes</h3>
              <ul>
                <li>
                  Las aerolíneas locales pueden cambiar los horarios de los vuelos internos sin
                  previo aviso; se intenta mantener todas las visitas previstas, aunque el orden
                  puede variar.
                </li>
                <li>
                  Nos reservamos el derecho de ajustar las tarifas si el precio del combustible
                  incrementa en más de un 15%.
                </li>
                <li>
                  El check-in oficial suele ser entre las 12:00 y las 14:00 h según la ciudad; si
                  llegamos antes, la disponibilidad anticipada de habitación no está garantizada.
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar precio */}
          <aside>
            <div className="sticky-card reveal">
              <h2 style={{ fontSize: '1.35rem', marginBottom: '.5rem' }}>
                Precio del viaje a Vietnam y Camboya
              </h2>
              <p className="eyebrow">Desde</p>
              <p className="price">
                $3,620 <small>USD / persona</small>
              </p>
              <div className="price-tiers">
                {PRICE_TIERS.map((t) => (
                  <div className="price-tier" key={t.stars}>
                    <span className="tier-name">Hoteles {t.stars}</span>
                    <span className="tier-price">
                      ${t.price.toLocaleString('en-US')} <small>+ supl. ind. ${t.single}</small>
                    </span>
                  </div>
                ))}
              </div>
              <ul>
                <li>Precio por persona en habitación compartida (base)</li>
                <li>Depósito del 30% para asegurar tu cupo</li>
                <li>Pago de contado o en 4 cuotas</li>
              </ul>
              <div className="tag-row">
                <span className="chip">23 mar – 5 abr 2027</span>
                <span className="chip">Salida confirmada</span>
              </div>
              <a
                href="https://wa.me/84934949756?text=Hola%20Katherine,%20quiero%20reservar%20mi%20cupo%20para%20Vietnam%20y%20Camboya%20(23%20mar%20-%205%20abr%202027)"
                target="_blank"
                rel="noopener"
                className="btn btn--lg"
                style={{ width: '100%', justifyContent: 'center', marginTop: '.4rem' }}
              >
                Reservar mi cupo
              </a>
              <a
                href="#contacto"
                className="btn btn--ghost"
                style={{ width: '100%', justifyContent: 'center', marginTop: '.6rem' }}
              >
                Quiero más información
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Contacto / captura de leads */}
      <Contacto />

      {/* CTA final → viaje privado */}
      <section className="section section--cream">
        <div className="container section-head center reveal" style={{ marginBottom: 0 }}>
          <p className="eyebrow">Tus fechas. Tu grupo. Tu ritmo.</p>
          <h2 className="h2">¿Prefieres este viaje en privado?</h2>
          <p className="lead">
            Si quieres viajar solo con tu grupo y en tus propias fechas, lo diseñamos a tu medida
            desde 5 personas.
          </p>
          <a href="/viajes-privados" className="btn btn--lg" style={{ marginTop: '1.4rem' }}>
            Ver viaje privado
          </a>
        </div>
      </section>
    </>
  )
}
