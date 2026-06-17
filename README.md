# Asia Lo Posible

Sitio web de viajes premium a Asia para viajeros latinoamericanos, operado por **Katherine Molinares**. Combina una landing page en Next.js, un blog con Payload CMS, un pipeline de captura de leads hacia Notion CRM, y automatizaciones en n8n para seguimiento por email y WhatsApp.

Producción: **[asialoposible.net](https://asialoposible.net)**

---

## Tech Stack

| Capa | Tecnología | Versión |
|---|---|---|
| Frontend | Next.js | 16 |
| Lenguaje | TypeScript | 5.x |
| Estilos | Tailwind CSS | v4 |
| CMS | Payload CMS | 3.80 |
| Base de datos | PostgreSQL (Neon) | — |
| Deployment | Vercel (infra@innovaly.house) | Pro |
| CDN de imágenes | Vercel Blob | — |
| CRM | Notion | — |
| Automatizaciones | n8n Cloud | — |
| Email transaccional | Resend | — |
| Mensajería | Meta WhatsApp Business Cloud | — |

---

## Prerrequisitos

- **Node.js 22+** — requerido para comandos `npx payload` (migraciones, CLI de Payload). El servidor de desarrollo funciona desde Node 20+.
- **npm** (incluido con Node)
- Acceso a **Vaultwarden** del equipo (vault `Asialoposible`) para obtener las variables de entorno

---

## Setup local

```bash
# 1. Clonar
git clone https://github.com/Innovaly-Group/asialoposible.git
cd asialoposible

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env.local
# → Rellenar los valores desde Vaultwarden (vault: Asialoposible)

# 4. Iniciar servidor de desarrollo
npm run dev
# → http://localhost:3000        sitio web
# → http://localhost:3000/admin  Payload CMS admin
```

**Credenciales del admin de Payload:** ver Vaultwarden → `Payload CMS - Asialoposible`.

---

## Variables de entorno

Copia `.env.example` a `.env.local` y rellena los valores desde Vaultwarden (vault `Asialoposible`).

| Variable | Descripción |
|---|---|
| `PAYLOAD_DATABASE_URL` | Neon PostgreSQL — usar la cadena **sin pooler** (sin `-pooler` en el hostname) |
| `PAYLOAD_SECRET` | Secret aleatorio para JWT signing de Payload |
| `BLOB_READ_WRITE_TOKEN` | Token de Vercel Blob para subir imágenes del blog |
| `NOTION_TOKEN` | Token de integración de Notion |
| `NOTION_LEADS_DATABASE_ID` | ID de la base de datos CRM en Notion |
| `RESEND_API_KEY` | API key de Resend para emails transaccionales |
| `RESEND_AUDIENCE_FORM_LEADS` | ID de audiencia Resend para leads del formulario grupal |
| `RESEND_AUDIENCE_PRIVATE_LEADS` | ID de audiencia Resend para leads de viajes privados |
| `RESEND_WEBHOOK_SECRET` | `whsec_...` para verificar webhooks entrantes de Resend |
| `FALLBACK_ALERT_EMAIL` | Email para alertas de fallo de escritura en Notion |
| `WHATSAPP_WEBHOOK_URL` | URL del webhook de n8n para envío de templates de WhatsApp |
| `WHATSAPP_WEBHOOK_SECRET` | Secret compartido para autenticar el webhook de WhatsApp |

---

## Estrategia de ramas

```
main          ← producción (asialoposible.net). Protegida: solo David puede mergear.
development   ← staging. URL de preview en Vercel (ver sección Entornos).
feature/*     ← tu trabajo. PR → development. Nunca PR directo a main.
```

**Flujo de trabajo:**

1. Crear rama desde `development`: `git checkout -b feature/nombre-del-cambio development`
2. Hacer push y abrir PR hacia `development`
3. Verificar en la URL de preview de Vercel
4. David mergea `development` → `main` para ir a producción

---

## Entornos Vercel

| Ambiente | Rama | Dominio |
|---|---|---|
| Production | `main` | [asialoposible.net](https://asialoposible.net) |
| Preview | `development` | [asialoposible-git-development-innovalygroup.vercel.app](https://asialoposible-git-development-innovalygroup.vercel.app) |

El proyecto está bajo la cuenta **infra@innovaly.house** en Vercel. Para acceder al dashboard, pedir acceso a David.

---

## Automatizaciones n8n

**7 workflows activos** en [innovalygroup.app.n8n.cloud](https://innovalygroup.app.n8n.cloud/home/workflows)

Credenciales de acceso: Vaultwarden → `n8n - Innovalygroup Cloud`

| Workflow | Qué hace |
|---|---|
| **Cal.com Lead Pipeline** | Captura reservas de Cal.com → crea lead en Notion, programa recordatorios T-24h/T-10m, envía template de WhatsApp |
| **Chatwoot Lead Pipeline** | Captura chats de Chatwoot → crea lead en Notion, enrola en Resend, envía template de WhatsApp |
| **Resend Enrollment** | Subworkflow: añade contacto a audiencia Resend y dispara evento de bienvenida |
| **WhatsApp Template Send** | Subworkflow: sanitiza teléfono y llama a Meta Graph API para enviar template |
| **WhatsApp Webhook (form)** | Punto de entrada HTTP desde el formulario del sitio → delega a WhatsApp Template Send |
| **Notion Manual Email Trigger** | Permite a Katherine enviar un email puntual desde una fila de Notion con un checkbox |
| **Notion Unsubscribe Trigger** | Remueve un lead de todas las audiencias de Resend cuando Katherine marca "Stop Sequence" |

Los webhooks de n8n están referenciados en el código del sitio a través de `WHATSAPP_WEBHOOK_URL` y en las automations de Notion (configuradas en la UI de Notion, no en el código).

Ver arquitectura completa: [`docs/lead-flow-architecture.md`](./docs/lead-flow-architecture.md)

---

## Documentos clave

| Archivo | Contenido |
|---|---|
| [`CLAUDE.md`](./CLAUDE.md) | Referencia técnica profunda: stack, diseño, SEO, restricciones de Payload (para agentes de IA y devs) |
| [`docs/lead-flow-architecture.md`](./docs/lead-flow-architecture.md) | Arquitectura detallada del CRM + pipeline de email + WhatsApp |
| [`docs/seo-keyword-research.md`](./docs/seo-keyword-research.md) | Estrategia SEO y keywords protegidas — leer antes de editar cualquier copy |

---

## Restricciones importantes

| Restricción | Por qué |
|---|---|
| Usar la conexión Neon **sin pooler** | El pooler rompe las queries de introspección de schema de Drizzle |
| `push: false` en el adaptador Postgres de Payload | El mecanismo push de Drizzle falla con Neon; los cambios de schema se aplican con scripts SQL manuales |
| Node 22+ para comandos `npx payload` | Node 20 falla con un error de `undici` CacheStorage |
| Subir imágenes del blog desde el **servidor local** (`localhost:3000`) | Vercel serverless no tiene el binario de `sharp` disponible para generar las 3 tallas WebP |

---

## Estructura del proyecto

```
src/
├── app/
│   ├── (frontend)/     ← rutas del sitio web público
│   │   ├── blog/
│   │   ├── inscribete/
│   │   ├── viajes-privados/
│   │   └── layout.tsx  ← tiene <html>, fuentes, GTM, PageLoader
│   ├── (payload)/      ← admin de Payload CMS
│   │   ├── admin/
│   │   └── layout.tsx  ← RootLayout de Payload (tiene su propio <html>)
│   └── layout.tsx      ← passthrough raíz (evita <html> anidados)
├── collections/        ← definiciones de colecciones Payload (Posts, Media, etc.)
└── payload.config.ts   ← configuración principal de Payload
docs/
scripts/
```
=======
# Asia Lo Posible — Sitio web boutique

Sitio estático (HTML + CSS + JS, sin frameworks ni build) que transforma la web actual en una
plataforma de viajes boutique, manteniendo el branding oficial.

## 🎨 Branding aplicado (oficial)
- **Colores:** fondo `#0A0F1E`, superficie `#161C2D`, acento oro `#D4A853`, texto tenue `#8E94A5`, blanco `#FFFFFF`.
- **Tipografías:** Playfair Display (titulares), DM Sans (cuerpo), Space Mono (detalles).
- Todo definido como variables CSS en [`assets/css/styles.css`](assets/css/styles.css) — cámbialo en un solo sitio.

## 📁 Estructura
```
index.html                         Home: header+CTA, viajes, video, top 10, contacto, blog
viajes/vietnam-camboya.html        Detalle del viaje grupal (itinerario, precios, incluye)
viajes/viaje-privado.html          Viaje a medida / privado
blog/index.html                    Índice del blog
blog/*.html                        4 artículos optimizados para SEO
assets/css/styles.css              Sistema de diseño completo
assets/js/main.js                  Nav móvil, scroll-reveal, reproductor de video
sitemap.xml · robots.txt           SEO técnico
```

## ✅ Requerimientos cumplidos
1. **Header atractivo con CTA** → hero con "Descubre tu viaje" + WhatsApp.
2. **Viajes disponibles** → tarjetas que enlazan a páginas de detalle con info, precios e itinerario.
3. **Video de Asia** → sección con reproductor (ver "Cómo poner tu video" abajo).
4. **Top 10 destinos de Asia** → grid numerado del 01 al 10.
5. **Información de contacto** → WhatsApp, Instagram y formulario.
6. **Blog SEO** → índice + artículos de tips, guías, hoteles y rutas.

## ▶️ Ver el sitio en local
Ábrelo con cualquier servidor estático. Por ejemplo, desde esta carpeta:
```bash
npx serve .
# o
python -m http.server 8000
```
Luego abre `http://localhost:8000`. (También puedes abrir `index.html` directo en el navegador.)

## 🎬 Cómo poner tu video real
En `index.html`, sección `#video`:
- **Opción YouTube/Vimeo:** cambia el atributo `data-embed="..."` del `<div class="video">` por la URL *embed* de tu video.
- **Opción archivo propio:** dentro de ese `<div class="video">` agrega `<video src="ruta/a/tu-video.mp4"></video>` y quita el `data-embed`.
- Reemplaza también la imagen `.video__poster` por un fotograma real.

## 🖼️ Imágenes
Las imágenes son **placeholders** de `picsum.photos` (marcadas con `REEMPLAZAR` en los comentarios del HTML).
Sustitúyelas por las fotos reales de la marca: descarga las que ya usas en la web actual y cámbialas
en los `src`. Mantén el `alt` descriptivo (importa para SEO).

## 🚀 Publicar
Es un sitio estático: súbelo tal cual a **Netlify, Vercel, Cloudflare Pages** o cualquier hosting.
Recuerda actualizar el dominio en `sitemap.xml`, `robots.txt` y las etiquetas `canonical`/`og:` si cambia.

## 🔎 SEO incluido
- `title`, `meta description` y `canonical` únicos por página.
- Open Graph para compartir en redes.
- Datos estructurados JSON-LD (`TravelAgency`, `TouristTrip`, `Article`).
- `sitemap.xml` + `robots.txt`. Envía el sitemap en Google Search Console tras publicar.
>>>>>>> 3a0c015 (Sitio web Asia Lo Posible — plataforma de viajes boutique)
