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
