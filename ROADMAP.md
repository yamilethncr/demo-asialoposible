# Roadmap — Asia Lo Posible
## De un viaje único a una plataforma de viajes boutique

> Documento maestro de producto, contenido, CTAs y SEO.
> Última actualización: 2026-06-15

> **Decisiones de negocio confirmadas:**
> - **"Viajes sin mí" = dossier curado + reservas gestionadas** por el negocio (hoteles/transportes). Mayor margen y soporte completo.
> - **Catálogo amplio multi-destino:** Vietnam, Camboya, Tailandia, Japón, Indonesia… "Asia en general". La plantilla debe escalar a muchos destinos.
> - **Prioridad de la 1ª ronda: lanzar los nuevos pilares** ("Viajes sin mí" y "a medida") cuanto antes — el Home hub y Sobre mí van en paralelo/después.

---

## 1. Visión

Hoy `asialoposible.net` vende **un solo producto**: el viaje grupal a Vietnam y Camboya guiado por Katherine. La marca, el tono ("ASÍ SE VIVE ASIA", "ESTO NO SE EXPLICA. SE SIENTE.") y la confianza personal ya funcionan.

El objetivo es **transformar la web en una plataforma de viajes boutique a Asia**, manteniendo el branding actual intacto (logo, colores, tipografía, tono cercano y aspiracional), pero abriendo la oferta en **3 pilares de producto + 1 pilar de marca**:

| Pilar | Qué es | Promesa central |
|---|---|---|
| **1. Viajes conmigo** | Salidas grupales exclusivas que Katherine acompaña en persona | "Yo voy contigo" — cercanía, curaduría y respaldo total |
| **2. Viajes sin mí** | Itinerarios curados, listos para viajar por tu cuenta con respaldo del negocio | "Mi ruta, tu ritmo" — libertad con red de seguridad |
| **3. Viajes personalizados** | Viaje 100% a medida, diseñado contigo | "Tu Asia, a tu medida" — diseño hecho a mano |
| **4. Sobre mí / La marca** | Historia, quién es Katherine, por qué somos la mejor opción | Confianza — la persona detrás de la marca |

**Principio rector de diseño:** *no se rediseña la marca*. Se **reutiliza** el sistema visual existente (tokens de color, tipografía, componentes de tarjeta, estilo de CTA) y se **extiende** a las nuevas secciones para que todo se sienta de la misma familia.

---

## 2. Arquitectura de información (nueva estructura del sitio)

La web pasa de ser una *landing larga de un producto* a un **hub con páginas hijas por pilar**.

```
Home (HUB)  ─────────────────────────────────────────────┐
│                                                          │
├─ Viajes conmigo (grupales)                               │
│    ├─ Vietnam & Camboya — Ago 2026 / Abr 2027  (actual)  │
│    └─ [próximas salidas...]                               │
│                                                          │
├─ Viajes sin mí (itinerarios curados)                     │
│    ├─ Itinerario A (p. ej. Japón esencial)               │
│    ├─ Itinerario B (p. ej. Tailandia + islas)            │
│    └─ [...]                                               │
│                                                          │
├─ Viajes personalizados (a medida)                        │
│    └─ Formulario / brief de cotización                    │
│                                                          │
├─ Sobre mí / La marca                                     │
│                                                          │
├─ Blog  (existente — reorientado a SEO)                   │
├─ FAQ   (existente — segmentado por pilar)                │
└─ Contacto / WhatsApp                                     │
```

**Decisiones clave de IA:**
- El **Home** deja de ser la landing del viaje a Vietnam. Pasa a ser un **selector de pilares** ("¿Cómo quieres vivir Asia?") + prueba social + autoridad de marca.
- El viaje actual a Vietnam/Camboya **se convierte en la primera ficha del pilar "Viajes conmigo"**. No se pierde nada: toda la landing actual se reusa como página de detalle de ese viaje.
- Cada pilar tiene una **página índice** (lista de productos) y **fichas de detalle** (template reutilizable).
- Navegación principal sugerida: `Viajes conmigo · Viajes sin mí · A medida · Sobre mí · Blog`.

---

## 3. Roadmap por fases

> Cada fase es entregable de forma independiente: el sitio nunca queda "a medias" de cara al público.
> **Orden ajustado a tu prioridad:** lanzar primero los nuevos pilares ("sin mí" y "a medida").

### Fase 0 — Fundaciones (semana 1)
*Preparar el terreno sin romper lo que ya funciona.*
- Auditar el sitio actual y extraer el **sistema de diseño** existente (paleta, tipografías, espaciados, estilos de botón/tarjeta) a tokens reutilizables.
- Definir **plantilla de ficha de viaje** reutilizable y **multi-destino** (la base es la landing actual de Vietnam; debe escalar a Japón, Tailandia, Indonesia, etc.).
- Configurar analítica de base: eventos de clic en CTAs, WhatsApp, vistas por pilar (GA4 + Meta Pixel).
- Inventario de contenido actual reusable (textos, fotos, itinerarios).

### Fase 1 — Pilar "Viajes sin mí" (semanas 2–4) ⭐ PRIORIDAD
*El nuevo producto que más escala y mayor margen (dossier + reservas gestionadas).*
- Definir 3–4 itinerarios curados de lanzamiento (sugerencia: Vietnam, Japón, Tailandia, Indonesia).
- Plantilla de ficha "itinerario curado": día a día, **qué incluye el dossier**, **qué reservas gestionamos** (hoteles/transportes), soporte por WhatsApp durante el viaje, y precio del producto.
- Página índice del pilar con tarjetas por destino (escalable a "Asia en general").
- Flujo de compra/contratación → WhatsApp/cotización.

### Fase 2 — Pilar "Viajes personalizados" (semanas 3–5, en paralelo) ⭐ PRIORIDAD
- Página de venta del servicio a medida.
- **Brief / formulario de cotización** (destino, fechas, presupuesto, estilo, nº personas).
- Flujo de seguimiento (a WhatsApp o email) con SLA de respuesta (ej. <24h).

### Fase 3 — Home Hub + Sobre mí (semanas 4–6)
*La cara nueva que conecta los pilares ya lanzados.*
- Rediseñar el **Home como hub** de 3 pilares + autoridad de marca + prueba social.
- Construir página **"Sobre mí / La marca"** sólida (historia, credibilidad, por qué nosotros).
- Redirección: la URL raíz deja de ser la landing de Vietnam (ver redirecciones 301 en §6).

### Fase 4 — Pilar "Viajes conmigo" (semana 6) 
*Migrar lo que ya existe a la nueva estructura.*
- Mover la landing actual a `/viajes-conmigo/vietnam-camboya`.
- Crear la **página índice del pilar** con sistema de tarjetas (próximas salidas, cupos, fechas, precio "desde").
- Componente reutilizable de "salida": fecha, cupos restantes, precio desde, CTA reservar.

### Fase 5 — SEO, optimización y lanzamiento (semanas 7–8)
- Optimización on-page de todas las páginas (§6).
- Reorientar el Blog a clusters SEO por destino/pilar.
- Pruebas de conversión (A/B de CTAs principales).
- Lanzamiento + campaña de comunicación en redes (@kathmolinares).

---

## 4. Tareas detalladas por área

> Formato: `[Prioridad]` P0 = bloqueante / P1 = importante / P2 = mejora.

### 4.1 Producto / Negocio
- `[P0]` Validar el **modelo de monetización del pilar "Viajes sin mí"** (precio del dossier, qué incluye el respaldo, márgenes).
- `[P0]` Definir **catálogo de lanzamiento**: qué destinos abren cada pilar (mín. 1 "conmigo" + 2 "sin mí" + servicio "a medida").
- `[P1]` Definir **SLA de respuesta** para personalizados y soporte (ej. "respondemos en <24h").
- `[P1]` Política de precios "desde" homogénea en todas las fichas.
- `[P2]` Programa de referidos / lista de espera para próximas salidas.

### 4.2 Contenido y Copys
- `[P0]` Copy del **Home hub** (titular, sub, bloques de 3 pilares, prueba social) — ver §5.1.
- `[P0]` Copy de **Sobre mí / La marca** — ver §5.2.
- `[P0]` Copy de **página índice** de cada pilar — ver §5.3–5.5.
- `[P1]` Adaptar copy de la landing de Vietnam al nuevo contexto (ahora es "una de varias salidas").
- `[P1]` FAQ segmentada por pilar (las dudas de "sin mí" son distintas a "conmigo").
- `[P2]` Testimonios / reseñas reales de viajeros (pedirlos activamente).

### 4.3 Diseño / Desarrollo
- `[P0]` Extraer tokens de diseño y crear **componentes reutilizables**: tarjeta de viaje, bloque de pilar, hero, CTA, bloque "incluye/no incluye".
- `[P0]` Plantilla de **ficha de viaje** (sirve para "conmigo" y "sin mí" con variaciones).
- `[P0]` Nuevo **Home hub** responsive.
- `[P1]` Página y **formulario de cotización** para personalizados.
- `[P1]` Menú de navegación nuevo + footer con los 4 pilares.
- `[P2]` Microinteracciones / mantener la sensación "boutique" (transiciones suaves, fotografía protagonista).

### 4.4 SEO / Analítica
- `[P0]` Plan de redirecciones 301 (la home actual y URLs que cambien) — ver §6.
- `[P0]` Keyword research por pilar y destino — ver §6.
- `[P1]` Metadatos (title/description) y datos estructurados `TripleProduct`/`FAQPage`/`Organization`.
- `[P1]` Eventos de conversión en GA4 + Pixel (clic WhatsApp, reservar, cotizar).
- `[P2]` Sitemap actualizado + Search Console.

---

## 5. Copys y CTAs por sección

> Tono: cercano, aspiracional, en español latino, frases cortas con impacto (consistente con "ASÍ SE VIVE ASIA"). Mayúsculas para titulares de impacto.

### 5.1 Home (Hub)

**Hero**
- Titular: **ASIA, COMO TÚ QUIERAS VIVIRLA.**
- Sub: *Viajes boutique a Asia, en español. Conmigo, a tu aire o 100% a tu medida. Tú eliges cómo; yo me encargo del resto.*
- CTA primario: **DESCUBRE TU VIAJE** → scroll a los 3 pilares
- CTA secundario: **ESCRÍBEME AL WHATSAPP**

**Bloque selector de pilares** — titular: *"¿CÓMO QUIERES VIVIR ASIA?"*

1. **VIAJES CONMIGO**
   *Salidas grupales exclusivas donde yo viajo contigo. Grupos pequeños, todo resuelto, cero preocupaciones.*
   CTA: **VER PRÓXIMAS SALIDAS**

2. **VIAJES SIN MÍ**
   *Itinerarios que yo diseñaría, listos para que viajes a tu aire — con mi respaldo en cada paso.*
   CTA: **EXPLORAR ITINERARIOS**

3. **VIAJES A MEDIDA**
   *Cuéntame tu Asia soñada y la diseño contigo, kilómetro a kilómetro.*
   CTA: **DISEÑAR MI VIAJE**

**Bloque autoridad** (mini "sobre mí"): foto de Katherine + *"Soy Katherine, periodista venezolana viviendo en Vietnam. Llevo años recorriendo Asia para que tú no tengas que improvisar."* CTA: **CONÓCEME**

**Prueba social:** nº de viajeros, reseñas, fotos reales, @kathmolinares.

### 5.2 Sobre mí / La marca
- Titular: **DETRÁS DE CADA VIAJE, HAY ALGUIEN QUE YA LO VIVIÓ.**
- Estructura: (1) Quién soy (Katherine, periodista venezolana, años en Vietnam) → (2) Por qué nació Asia Lo Posible → (3) Qué significa "boutique" para nosotros (grupos pequeños, curaduría real, español, respaldo) → (4) Por qué confiar en nosotros (vivo aquí, conozco a los proveedores, hablo tu idioma).
- CTA: **EMPECEMOS A PLANEAR TU VIAJE**

### 5.3 Pilar "Viajes conmigo"
- Titular: **YO VOY CONTIGO.**
- Sub: *Salidas grupales pequeñas y exclusivas. Yo te acompaño, tú solo disfrutas.*
- Tarjetas de salida: destino · fechas · cupos restantes · "DESDE $X USD" · CTA **RESERVAR MI CUPO**
- CTA secundario: **¿DUDAS? ESCRÍBEME**

### 5.4 Pilar "Viajes sin mí"
- Titular: **MI RUTA. TU RITMO.**
- Sub: *Los itinerarios que yo haría, listos para que viajes a tu aire. Tú disfrutas; nosotros gestionamos hoteles, transportes y cada reserva por ti.*
- Cada ficha aclara claramente tres bloques:
  - **Tu dossier curado:** itinerario día a día, recomendaciones, mapas, tips locales que solo sé por vivir aquí.
  - **Nosotros lo gestionamos:** reservamos hoteles y transportes; tú no peleas con webs ni idiomas.
  - **Respaldo en ruta:** soporte por WhatsApp durante todo el viaje, por si algo pasa.
- CTA primario: **QUIERO ESTE ITINERARIO**
- CTA secundario: **VER QUÉ INCLUYE** / **PERSONALIZAR ESTA RUTA** (puente al pilar a medida)

### 5.5 Pilar "Viajes personalizados"
- Titular: **TU ASIA, A TU MEDIDA.**
- Sub: *Sin plantillas. Me cuentas qué sueñas y lo diseño contigo, paso a paso.*
- CTA primario: **COTIZAR MI VIAJE** → formulario/brief
- CTA secundario: **AGENDA UNA LLAMADA**

### 5.6 Sistema de CTAs (consistencia)
| Intención | Texto recomendado |
|---|---|
| Reservar salida grupal | **RESERVAR MI CUPO** |
| Comprar itinerario | **QUIERO ESTE ITINERARIO** |
| Cotizar a medida | **COTIZAR MI VIAJE** |
| Contacto rápido | **ESCRÍBEME AL WHATSAPP** |
| Agendar | **AGENDA UNA LLAMADA** |
| Descubrir | **DESCUBRE TU VIAJE** |

> Mantener el WhatsApp (+84 934949756) como canal de cierre en todas las páginas, como ya se hace hoy.

---

## 6. SEO

### 6.1 Estrategia de keywords por pilar
- **Viajes conmigo (grupales):** "viaje grupal a Vietnam en español", "tour en grupo a Asia en español", "viaje organizado a Camboya", "salidas grupales Asia 2026/2027".
- **Viajes sin mí (itinerarios):** "itinerario [destino] X días", "qué ver en [destino] en X días", "ruta por [Vietnam/Japón/Tailandia] por tu cuenta".
- **A medida:** "viaje personalizado a Asia", "diseñar viaje a [destino]", "agencia de viajes boutique a Asia en español".
- **Marca / informativo (blog):** "mejor época para viajar a [destino]", "presupuesto viaje a [destino]", "visado [país]".

### 6.2 On-page (cada página)
- 1 `H1` único por página con la keyword principal del pilar/destino.
- `title` (≤60 car.) y `meta description` (≤155 car.) propios por página.
- URLs limpias y semánticas: `/viajes-conmigo/vietnam-camboya`, `/viajes-sin-mi/japon-esencial`, `/viajes-a-medida`, `/sobre-mi`.
- Texto real indexable (no solo imágenes); `alt` descriptivo en fotos.
- Enlazado interno entre pilares, fichas y blog.

### 6.3 Datos estructurados (schema.org)
- `Organization` / `LocalBusiness` en el sitio.
- `Trip` / `Product` + `Offer` (con precio "desde") en fichas de viaje.
- `FAQPage` en las FAQ.
- `BreadcrumbList` para la jerarquía hub → pilar → ficha.

### 6.4 Redirecciones (crítico al reestructurar)
- La URL raíz cambia de propósito → **301** de cualquier URL antigua del viaje de Vietnam a su nueva ruta `/viajes-conmigo/vietnam-camboya`.
- Mantener un mapa de redirecciones para no perder posicionamiento ni romper enlaces compartidos.
- Actualizar `sitemap.xml` y reenviar en Google Search Console.

### 6.5 Blog como motor SEO
- Reorientar a **clusters por destino**: cada artículo informativo enlaza al pilar/ficha relevante (ej. "Mejor época para Vietnam" → CTA al viaje grupal o itinerario).
- Calendario editorial: 2–4 artículos/mes apuntando a keywords informativas de alto volumen.

---

## 7. Decisiones de negocio

### ✅ Confirmadas
- **"Viajes sin mí" — modelo:** dossier curado **+ reservas gestionadas** (hoteles/transportes) por el negocio, con soporte por WhatsApp en ruta.
- **Catálogo:** multi-destino amplio — Vietnam, Camboya, Tailandia, Japón, Indonesia y "Asia en general". La plantilla debe escalar a nuevos destinos sin rehacer diseño.
- **Prioridad:** lanzar primero los pilares nuevos ("sin mí" y "a medida").

### ⏳ Por afinar (no bloquean el arranque)
1. **Precio de los itinerarios curados:** ¿tarifa fija por el servicio, % sobre reservas, o fee de gestión? Define el "DESDE $X" de las fichas.
2. **Capacidad operativa:** ¿cuántos viajes a medida / "sin mí" puedes gestionar al mes? Define cuánto empujamos esos CTAs y si hace falta lista de espera.
3. **Orden del catálogo de lanzamiento:** de los destinos confirmados, ¿con cuáles 3–4 abrimos para no dispersar el esfuerzo de contenido inicial?

---

## 8. Resumen ejecutivo de próximos pasos inmediatos

1. **Cerrar decisiones de negocio** del §7 (especialmente el modelo de "Viajes sin mí").
2. **Extraer el sistema de diseño** actual a componentes reutilizables (Fase 0).
3. **Diseñar y redactar el Home hub + Sobre mí** (Fases 1).
4. **Migrar el viaje de Vietnam** a la nueva estructura sin perder SEO (Fase 2 + redirecciones 301).
5. Iterar pilares 2 y 3 con catálogo de lanzamiento.
