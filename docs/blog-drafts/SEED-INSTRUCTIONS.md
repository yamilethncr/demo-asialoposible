# Sembrar los 6 artículos nuevos del blog (rediseño v2)

Los drafts ya están listos en `docs/blog-drafts/` y añadidos a `scripts/seed-articles.ts`
con fechas escalonadas (`publishDate`). Para publicarlos en Payload necesitas tu `.env`
(la DB Neon). Sigue el workflow de `CLAUDE.md`:

```bash
# 1. Node 22 para el CLI de Payload
fnm use 22

# 2. Levantar el dev server local (con tu .env: DATABASE_URI unpooled, PAYLOAD_SECRET, BLOB_READ_WRITE_TOKEN)
npm run dev

# 3. En otra terminal: sembrar taxonomía (categorías/tags) si falta, luego los artículos
npx tsx scripts/seed-taxonomy.ts http://localhost:3000
npx tsx scripts/seed-articles.ts http://localhost:3000
```

El script crea solo los que no existan (idempotente por slug) y respeta `publishDate`.

## Artículos y fechas
| Slug | Categoría | Fecha |
|------|-----------|-------|
| mejor-epoca-viajar-vietnam | Consejos de Viaje | 2026-05-05 |
| que-ver-en-camboya-angkor | Camboya | 2026-05-10 |
| mejores-hoteles-hanoi | Vietnam | 2026-05-16 |
| mejores-rutas-sudeste-asiatico | Destinos del Sudeste Asiático | 2026-05-21 |
| guia-gastronomica-vietnam | Gastronomía | 2026-05-27 |
| viajar-asia-en-espanol | Consejos de Viaje | 2026-06-02 |

## Imágenes destacadas (paso opcional, recomendado)
El seed crea los posts SIN `featuredImage`. Para añadirlas, sube cada imagen vía dev local
(sharp → WebP + 3 tamaños → Vercel Blob) y enlázala, según el workflow de `CLAUDE.md`:

```bash
TOKEN=$(curl -s 'http://localhost:3000/api/users/login' -H 'Content-Type: application/json' \
  -d '{"email":"weare@innovaly.services","password":"AsiaLoPosible2026!"}' \
  | python3 -c "import sys,json; print(json.load(sys.stdin)['token'])")

# subir imagen (ej. desde public/img o public/hotels) y PATCH al post con featuredImage: <id>
```

Imágenes sugeridas (ya en el repo): `public/hotels/indochine-cruise.jpg`,
`public/hotels/metta-siemreap.jpg`, `public/hotels/anatole-hanoi.jpg`,
`public/img/blog-comida-vietnam.jpg`.
