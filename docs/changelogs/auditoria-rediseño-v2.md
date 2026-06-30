# Auditoría multiagente — Rediseño v2 (rama `redesign/v2-yamileth`)

Fecha: 2026-06-30 · Auditores: SEO/GEO, Performance/A11y, Dirección creativa, Corrección de código.
Método: revisión de código + HTML renderizado en `localhost:3025` + comparación con el demo en vivo `demo-asialoposible.vercel.app`. (Lighthouse/MCP chrome-devtools no disponible en el entorno; perf evaluada por código.)

## Veredictos
- **Dirección creativa:** REVISE → **resuelto el bloqueante** (regla de oro tipográfica). Fidelidad al diseño de Yamileth muy alta (82/100).
- **SEO/GEO:** apto tras corregir sitemap, doble H1 y keywords perdidas.
- **Performance/A11y:** apto tras corregir nav móvil, contraste y video; quedan mejoras de imagen.
- **Corrección de código:** lead flow INTACTO; `tsc` limpio; corregida regresión de clases Tailwind.

---

## Corregido en esta pasada

### Crítico
- **Clases Tailwind rotas** (corrección de código #1): la migración de color había insertado espacios dentro de `[rgba(...)]` rompiendo ~15 archivos live (incl. `/gracias-datos`, destino del lead). Des-espaciado global → clases válidas de nuevo.
- **Menú móvil roto + layouts sin colapsar** (perf A1): faltaban las `@media` responsive del sistema de diseño. Reañadidas a `globals.css` (drawer móvil, contact-wrap/split/footer/incl-grid).
- **Contraste oro sobre crema 2.3:1** (perf C2): `.section--cream .eyebrow/.post-card__cat` → oro oscurecido `#8a6d2f` (≥4.5:1).
- **Doble H1 en todo el sitio** (SEO C2 / perf A3): `loading.tsx` usaba `<h1>`; ahora `<div role="status">`.
- **Regla de oro tipográfica** (dir. creativa #1, bloqueante): headings con `uppercase` (páginas migradas) salían Cormorant itálica+mayúsculas. Regla global `h1..h4.uppercase { font-style: normal }`.

### Alto / Medio
- **Keyword "viaje vietnam precio"** (SEO A1): nuevo H2 "Precio del viaje a Vietnam y Camboya" en la sticky-card.
- **Keyword "viaje organizado"** (SEO A2): incorporada a la meta description de la money page.
- **Meta descriptions >155** (SEO M1): money 151 ✓, sobre-nosotros recortada ✓ (home 145 ✓).
- **Sitemap** (SEO C1): añadidas `/viajes/vietnam-camboya` (prio 0.95) y `/sobre-nosotros`.
- **"Angkor Wat" exacto** (SEO M3): H3 del día 11–14.
- **Orden de headings money page** (perf M3): días del itinerario `h4`→`h3`.
- **Breadcrumb** (SEO M5): ancla `/#viajes`→`/#tours` (visible + JSON-LD).
- **Itálica en labels sans** (perf M4): `.footer h4` y `.itin-day h3` → `font-style: normal`.
- **Video hero** (perf C1/A2): `HeroVideo` client con `preload="metadata"` y respeto a `prefers-reduced-motion` (solo poster si reduce).
- **PageLoader eliminado** (perf C3): el demo no tiene loader; quitado del layout (mejora LCP). Componente conservado por si se desea revertir.
- **Chatwoot** (perf M7): `strategy="lazyOnload"`.
- **Lightbox** (perf M1): `role="dialog"`, `aria-modal`, foco al botón cerrar al abrir.
- **Acordeón** (perf M2): `aria-controls` + `inert` en paneles cerrados.
- **JSON-LD** (SEO M4): `image` en TouristTrip y Event de la money page.

---

## Pendiente / decisiones del usuario

### Requiere acceso a DB (follow-up)
- **Contenido de blog (Fase 7):** migrar los 6 artículos del demo a Payload Posts requiere correr los seed scripts contra la DB Neon (no disponible localmente). En el preview de Vercel (con DB) se mostrarán los posts ya publicados en producción. Drafts + extensión de `seed-articles.ts` quedan como tarea con DB.

### Decisiones de producto
- **Video de fondo en móvil** (perf C1): recomendado comprimir el MP4 (5.7 MB → <2 MB, añadir WebM/AV1) y/o servir solo poster en móvil. Pendiente de recomprimir el asset.
- **PageLoader**: eliminado para coincidir con el demo y ganar LCP. Si la marca lo quiere, revertir (≤300 ms).
- **Cal.com en Navbar**: el demo usa "Reservar"→#contacto; Cal.com queda accesible vía modalidad "Sesión 1-a-1". Confirmar.
- **Formulario en money page**: añadido (no estaba en el demo) para captura de leads. Confirmar que es deseado.
- **Copy "máx. 12" vs "máx. 10"** (corrección #5): EstilosViaje/sobre-nosotros dicen "máx. 12 personas" mientras meta/schema/sticky-card dicen "máx. 10". Unificar con negocio.

### Polish recomendado antes de main (no bloqueante)
- **"Dos eras" visual** (dir. creativa #2): páginas migradas (imprescindibles, legales, blog) conservan estética ALL-CAPS heredada. Convertir section-headings a sentence-case Cormorant para coherencia total con home/money/about.
- **next/image** (perf B2): migrar `<img>` de `/img` y `/hotels` a `next/image` para AVIF/WebP + srcset (ahorro de ancho de banda; CLS ya mitigado por aspect-ratio).
- **ScrollReveal SPA** (corrección #2): re-ejecutar el observer por ruta (`usePathname`) si en el futuro se usan `<Link>` hacia páginas con `.reveal`.
- **Pesos de fuente** (perf M6): recortar variantes de Cormorant/DM Sans a las usadas.
- **llms.txt / GEO** (SEO B3): generar `public/llms.txt`; enriquecer alt de hoteles; añadir `logo`/`sameAs` a TravelAgency.
- **inscribete noindex+canonical cross-page** (SEO B1): quitar el canonical cross-page o el noindex.
- **Canibalización home↔money** (SEO M2): vigilar; el enlace interno home→money ya ayuda.

### Hallazgos clasificados como intencionales (diseño fuente de Yamileth)
- `.callout` con borde-izquierdo de acento (patrón convencional de cita).
- Transición de `padding` del nav al hacer scroll (patrón estándar de navbar que encoge).

---

## Verificado OK
- Lead flow intacto: `ContactForm` → `POST /api/leads/form` con body exacto y enum `fechaLabel`; `trackEvent` + redirect a `/gracias-datos`.
- `npx tsc --noEmit`: 0 errores. Todas las rutas responden 200. Un solo H1 por página.
- Contraste de oro/secundario sobre fondo carbón #1E1E1E: cumple AA.
- Componentes client/server correctos; keys, aria y SVG camelCase correctos.
