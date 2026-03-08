import Link from 'next/link'

export const metadata = {
  title: 'Los Imprescindibles — Asia Lo Posible',
  description: 'Guía de preparación para tu viaje a Vietnam y Camboya con Asia Lo Posible',
}

export default function Imprescindibles() {
  return (
    <main className="min-h-screen py-20 px-5 md:px-10">
      <div className="max-w-[800px] mx-auto">
        <Link href="/" className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] no-underline hover:underline mb-10 block">&larr; Volver al inicio</Link>
        <h1 className="text-2xl md:text-4xl font-bold mb-8 uppercase">LOS IMPRESCINDIBLES</h1>
        <p className="text-xs text-[var(--color-secondary)] mb-2">Guía de preparación para tu viaje</p>
        <p className="text-xs text-[var(--color-secondary)] mb-10">Última actualización: Marzo 2026</p>
        <div className="space-y-10 text-[0.9rem] leading-relaxed text-[var(--color-secondary)]">

          {/* 1. Documentación y Visados */}
          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">1. Documentación y Visados</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li><span className="text-[var(--color-text)] font-bold">Pasaporte</span> con mínimo 6 meses de vigencia y 4 páginas en blanco</li>
              <li><span className="text-[var(--color-text)] font-bold">Visa Vietnam:</span> ~$50 USD — e-visa (25 días hábiles) o visa on arrival</li>
              <li><span className="text-[var(--color-text)] font-bold">Visa Camboya:</span> ~$30 USD — e-visa o visa on arrival</li>
              <li>Lleva <span className="text-[var(--color-text)] font-bold">2 fotos tamaño pasaporte</span> por si las necesitas en inmigración</li>
              <li>Guarda <span className="text-[var(--color-text)] font-bold">copias digitales</span> de tu pasaporte, visas y seguro en tu email y en la nube</li>
              <li>Nosotros te asesoramos en todo el proceso de visas</li>
            </ul>
          </section>

          {/* 2. Conectividad y Energía */}
          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">2. Conectividad y Energía</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li><span className="text-[var(--color-text)] font-bold">WiFi</span> disponible en todos los hoteles y la mayoría de restaurantes</li>
              <li>Recomendamos comprar una <span className="text-[var(--color-text)] font-bold">eSIM</span> antes de viajar o SIM local al llegar (~$5-10 USD para 15-30 días de datos)</li>
              <li><span className="text-[var(--color-text)] font-bold">Apps útiles:</span> Google Maps (descarga mapas offline), Google Translate (descarga vietnamita y khmer), Grab (el Uber de Asia)</li>
              <li><span className="text-[var(--color-text)] font-bold">Enchufes:</span> Vietnam y Camboya usan tipo A, C y G. Lleva un adaptador universal</li>
              <li><span className="text-[var(--color-text)] font-bold">Voltaje:</span> 220V — si vienes de América (110V), verifica que tus cargadores sean dual voltage (la mayoría lo son)</li>
            </ul>
          </section>

          {/* 3. Equipaje y Ropa */}
          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">3. Equipaje y Ropa</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li><span className="text-[var(--color-text)] font-bold">Maleta de 23kg máximo</span> + equipaje de mano</li>
              <li>Ropa ligera, cómoda y transpirable (algodón, lino, telas técnicas)</li>
              <li><span className="text-[var(--color-text)] font-bold">Agosto:</span> temporada cálida y húmeda (28-35°C), posibles lluvias tropicales cortas</li>
              <li><span className="text-[var(--color-text)] font-bold">Imprescindibles:</span> camisetas, pantalones ligeros, vestido/falda fresca, traje de baño, ropa para cubrir hombros y rodillas (templos)</li>
              <li><span className="text-[var(--color-text)] font-bold">Calzado:</span> zapatillas cómodas para caminar + sandalias. No zapatos nuevos sin estrenar</li>
              <li>Un <span className="text-[var(--color-text)] font-bold">suéter o chaqueta ligera</span> para aire acondicionado en buses y restaurantes</li>
              <li><span className="text-[var(--color-text)] font-bold">Impermeable ligero o poncho</span> (las lluvias son breves pero intensas)</li>
              <li>Sombrero/gorra y gafas de sol</li>
            </ul>
          </section>

          {/* 4. Salud */}
          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">4. Salud</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li><span className="text-[var(--color-text)] font-bold">Botiquín personal:</span> protector solar alto (50+), repelente de mosquitos con DEET, antidiarreicos, analgésicos, Band-Aids, medicamentos personales</li>
              <li><span className="text-[var(--color-text)] font-bold">Hidratación constante:</span> beber solo agua embotellada (nunca del grifo)</li>
              <li><span className="text-[var(--color-text)] font-bold">Comida callejera:</span> segura en general, pero elige puestos con alta rotación de clientes</li>
              <li>Lleva tus <span className="text-[var(--color-text)] font-bold">medicamentos con receta</span> en su empaque original</li>
            </ul>
          </section>

          {/* 5. Dinero y Pagos */}
          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">5. Dinero y Pagos</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li><span className="text-[var(--color-text)] font-bold">Moneda Vietnam:</span> Dong (VND). 1 USD ≈ 25,000 VND</li>
              <li><span className="text-[var(--color-text)] font-bold">Moneda Camboya:</span> Riel (KHR), pero el dólar americano se acepta en todas partes</li>
              <li>Lleva <span className="text-[var(--color-text)] font-bold">dólares americanos en efectivo</span> (billetes nuevos, sin arrugas ni marcas — los rechazan)</li>
              <li><span className="text-[var(--color-text)] font-bold">Tarjetas Visa/Mastercard</span> funcionan en hoteles y restaurantes grandes</li>
              <li><span className="text-[var(--color-text)] font-bold">Apple Pay/Google Pay:</span> cobertura limitada</li>
              <li><span className="text-[var(--color-text)] font-bold">Cajeros ATM</span> disponibles en ciudades principales (comisión ~$2-5 por retiro)</li>
              <li>Para mercados, street food y compras locales: <span className="text-[var(--color-text)] font-bold">efectivo es rey</span></li>
              <li><span className="text-[var(--color-text)] font-bold">Presupuesto recomendado</span> para gastos personales: $20-40 USD/día</li>
            </ul>
          </section>

          {/* 6. Propinas */}
          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">6. Propinas</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>Las propinas <span className="text-[var(--color-text)] font-bold">no son obligatorias</span> pero sí apreciadas</li>
              <li><span className="text-[var(--color-text)] font-bold">Guía:</span> $5-10 USD por día por grupo</li>
              <li><span className="text-[var(--color-text)] font-bold">Conductor:</span> $3-5 USD por día</li>
              <li><span className="text-[var(--color-text)] font-bold">Restaurantes:</span> 5-10% si no está incluido</li>
              <li><span className="text-[var(--color-text)] font-bold">Masajes/spa:</span> 10-15%</li>
              <li><span className="text-[var(--color-text)] font-bold">Porteros de hotel:</span> $1-2 USD</li>
              <li>Nosotros organizaremos una <span className="text-[var(--color-text)] font-bold">colecta grupal</span> para guías y conductores al final del viaje</li>
            </ul>
          </section>

          {/* 7. Zona Horaria */}
          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">7. Zona Horaria</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li><span className="text-[var(--color-text)] font-bold">Vietnam y Camboya:</span> GMT+7 (Indochina Time)</li>
              <li><span className="text-[var(--color-text)] font-bold">Diferencia con Latinoamérica:</span> +11 a +14 horas según el país
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Venezuela: +11 horas</li>
                  <li>Colombia/Perú/Ecuador: +12 horas</li>
                  <li>Chile/Argentina: +14 horas (verano) / +10 horas (invierno)</li>
                  <li>México (CDMX): +13 horas</li>
                  <li>Miami/Nueva York: +11 horas (verano) / +12 horas (invierno)</li>
                </ul>
              </li>
              <li><span className="text-[var(--color-text)] font-bold">Consejo:</span> empieza a ajustar tu horario de sueño 3-4 días antes del viaje</li>
            </ul>
          </section>

          {/* 8. Vacunas y Seguro */}
          <section>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">8. Vacunas y Seguro</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li><span className="text-[var(--color-text)] font-bold">Vacunas recomendadas</span> (consulta con tu médico): Hepatitis A y B, Tétanos, Fiebre tifoidea</li>
              <li>No se requieren vacunas obligatorias para entrar a Vietnam o Camboya</li>
              <li>Consulta si necesitas <span className="text-[var(--color-text)] font-bold">profilaxis contra malaria</span> (riesgo bajo en las zonas del itinerario, pero consulta)</li>
              <li><span className="text-[var(--color-text)] font-bold">Seguro médico de viaje: OBLIGATORIO.</span> Cobertura mínima recomendada: $50,000 USD</li>
              <li>El seguro debe incluir: <span className="text-[var(--color-text)] font-bold">emergencias médicas, evacuación, repatriación, pérdida de equipaje</span></li>
              <li>Nosotros facilitamos la gestión del seguro a través de la operadora certificada</li>
            </ul>
          </section>

        </div>
      </div>
    </main>
  )
}
