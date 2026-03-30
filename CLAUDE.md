# Asia Lo Posible

## Tech Stack
- Next.js 16, React 19, TypeScript, Tailwind CSS v4
- Payload CMS v3.80 (blog CMS) — admin at `/admin`
- PostgreSQL via Neon (unpooled connection required)
- No UI library — custom components with inline styles + Tailwind utilities
- Deployed on Vercel

## Payload CMS / Neon Database Setup

### Connection
- **Use the UNPOOLED Neon connection string** (without `-pooler` in the hostname). The pooler endpoint breaks Drizzle-kit's parameterized schema introspection queries.
- Set `push: false` in the Postgres adapter config. Drizzle-kit's `push` (which pulls schema first) fails with Neon due to a bug sending `$1`/`$2` params as empty arrays.
- Tables were created manually via a Node.js `pg` client script (not via Payload migrations or push), because both the CLI (`npx payload migrate`) and the push mechanism fail with Neon's Postgres.

### Node.js Version
- Payload v3.80 CLI commands (`npx payload migrate:create`, etc.) require **Node 22+** (Node 20 crashes with `undici` CacheStorage error). Use `fnm use 22` before running Payload CLI.
- The Next.js dev server works fine on Node 20 (Turbopack handles compilation differently).

### Route Structure
- Frontend routes live in `src/app/(frontend)/` — has its own `layout.tsx` with `<html>`, fonts, GTM, PageLoader.
- Payload admin lives in `src/app/(payload)/` — has its own `layout.tsx` with Payload's `RootLayout`.
- Root `src/app/layout.tsx` is a bare passthrough (`return children`) to avoid nested `<html>` hydration errors.
- This separation is required because Payload's `RootLayout` renders its own `<html>` tag.

### Adding New Tables / Schema Changes
Since `push: false`, any new collections or field changes require manually creating/altering tables in Neon. Use a Node.js script with the `pg` package against the unpooled connection string.

## Design Context

### Users
Spanish-speaking travelers (primarily Latin American) who dream of visiting Southeast Asia but feel overwhelmed by language barriers, logistics, and the complexity of planning a trip to a continent they don't know. They are looking for a premium, curated experience where everything is handled for them — in their language. They arrive via Katherine Molinares' social media (Instagram) or word of mouth.

### Brand Personality
**Luxurious, Intimate, Adventurous** — a blend of premium travel exclusivity with the warmth and authenticity of Katherine's personal touch. Not a corporate tour operator; this is a curated, personality-driven experience with a bold, confident edge.

### Emotional Goals
**Primary: Desire + FOMO** — "I NEED to be on this trip before the 10 spots are gone." The site should create urgency through scarcity (10 max), temporal pressure (early bird pricing), and aspiration (this is the trip of a lifetime). Secondary emotions of trust (everything is handled) and wonder (Asia is incredible) support the conversion.

### Aesthetic Direction
- **Dark luxury editorial**: Deep navy background (`#0A0F1E`), gold accent (`#D4A853`), muted secondary (`#8E94A5`)
- **Typography**: Helvetica Neue, all-caps headings with wide letter-spacing (`0.05em`+), monospace for pricing/numbers
- **Textures**: Spray paint blobs, Ken Burns photo transitions, SVG scribble drawings, subtle gold glow effects
- **Photography**: Desaturated, high-contrast travel imagery (Halong Bay, Hoi An lanterns, Angkor Wat, rice fields)
- **Borders**: Thin gold borders (`rgba(212,168,83,0.2)`) as card containers; gold left-border accents for callouts
- **CTAs**: Gold filled buttons with hover-to-outline transition; WhatsApp as primary conversion channel
- **Dark mode only** — the entire brand identity is built on the dark palette
- **No external references needed** — the current direction is on track

### Design Principles
1. **Scarcity drives action** — Always reinforce the limited nature (10 spots, early bird deadlines, exclusive access). Design choices should amplify urgency without feeling desperate.
2. **Luxury through restraint** — Use generous whitespace, uppercase type, thin borders, and subtle gold accents. Never cluttered, never loud. The premium feel comes from what's left out.
3. **Personal over corporate** — Katherine's voice, photo, and story are the brand. Design should feel like a personal invitation, not a travel agency brochure.
4. **Progressive disclosure** — Reveal information in a deliberate funnel: hook with emotion, build with details, convert with pricing. The stepped pricing calculator is the model pattern.
5. **Spanish-first, culturally aware** — All copy, UI labels, and microcopy in Spanish. Design for Latin American cultural context (WhatsApp over email, payment flexibility, trust through personal connection).

## SEO Keyword Strategy

**CRITICAL: Preserve SEO keywords when editing any copy.** The site's headings, titles, and descriptions have been optimized based on keyword research (DataForSEO, March 2026). Before modifying any text, verify you are not removing high-value search terms.

### Protected Keywords (DO NOT remove from headings/titles/descriptions)
These keywords drive organic traffic. They must remain present in at least one H1/H2 heading or meta tag:

| Keyword | Monthly Searches (Spain) | Where it lives |
|---------|-------------------------|----------------|
| viaje a vietnam y camboya | 1,000 | Hero H1, meta title, multiple headings |
| viaje a vietnam | 5,400 | Meta title, Hero H1 |
| bahía de halong | 6,600 | Hero description, Includes, Promise |
| angkor wat | 14,800 | Meta description, Itinerary |
| itinerario vietnam | 170 | Itinerary section heading |
| viaje organizado | 260 | Meta description, Host bio |
| todo incluido | 110 | Meta title, Pricing heading |
| viaje vietnam precio | 390 | Pricing section heading |
| hoteles vietnam | — | Hotels section heading |
| sudeste asiático | 210 | ViajesPrivados heading |
| en español | — | Hero subheading, meta title |

### Rules for Copy Edits
1. **Never replace a keyword-rich heading with a generic one.** If changing a heading, keep the target keywords or replace them with equal/higher-volume alternatives.
2. **Use Spanish destination names** — "Bahía de Halong" not "Halong Bay", "Angkor Wat" stays as-is (it's the search term).
3. **Meta titles must stay under 60 characters** and include the primary keyword for that page. **Do NOT append "| Asia Lo Posible"** to article meta titles — Google shows the site name separately.
4. **Meta descriptions must stay under 155 characters** and include 2-3 keywords naturally.
5. **The full keyword research is documented in `docs/seo-keyword-research.md`** — consult it before making copy changes to understand search volume and intent behind existing wording choices.

## Publishing Blog Articles to Payload CMS

### Upload Workflow (Images + Content)

**Always upload via the local dev server** (`localhost:3000`), not production. The local server has native sharp for image processing. Images are automatically stored in Vercel Blob and accessible on production.

```bash
# 1. Start the dev server
npm run dev

# 2. Authenticate
TOKEN=$(curl -s 'http://localhost:3000/api/users/login' \
  -H 'Content-Type: application/json' \
  -d '{"email":"weare@innovaly.services","password":"AsiaLoPosible2026!"}' \
  | python3 -c "import sys,json; print(json.load(sys.stdin)['token'])")

# 3. Upload featured image (sharp auto-converts to WebP + generates sizes)
curl -s 'http://localhost:3000/api/media' \
  -H "Authorization: JWT $TOKEN" \
  -F "file=@/path/to/image.png;type=image/png;filename=image-name.png" \
  -F '_payload={"alt":"descriptive alt text with keyword"}'
# Returns: { "doc": { "id": <MEDIA_ID>, ... } }

# 4. Create/update post (link image via featuredImage: <MEDIA_ID>)
curl -s -X PATCH 'http://localhost:3000/api/posts/<POST_ID>' \
  -H "Authorization: JWT $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"featuredImage": <MEDIA_ID>}'
```

### Why Local, Not Production
- Production uses Vercel serverless which has limited sharp binary support
- The local dev server has native sharp for generating all 3 image sizes (thumbnail 400x300, card 768x512, hero 1200x630)
- The Vercel Blob storage plugin uploads processed images to the CDN — they're accessible from production immediately
- Admin panel at `/admin` also works for manual uploads

### Image Format
- Media collection is configured with `formatOptions: { format: 'webp' }` — sharp auto-converts all uploads to WebP
- WebP is ~60-70% smaller than PNG at equivalent quality
- All 3 responsive sizes are also generated as WebP

### Access Control
- Posts, Categories, Tags, Users, Media all have explicit access control
- **Read**: Public (posts filtered to `status: published` for unauthenticated requests)
- **Create/Update/Delete**: Requires authenticated user (JWT)
- Admin credentials: `weare@innovaly.services` / `AsiaLoPosible2026!`

### Auto-Generated SEO Features
These are generated automatically from the content — no manual setup needed:
- **BlogPosting JSON-LD** on each article (from post metadata)
- **FAQPage JSON-LD** on articles with a "Preguntas Frecuentes" H2 section (extracts H3 questions + paragraph answers)
- **BreadcrumbList JSON-LD** on articles (Home → Blog → Category → Article)
- **CollectionPage + ItemList JSON-LD** on blog listing and category pages
- **Sitemap** at `/sitemap.xml` — auto-includes published posts, excludes empty categories
- **RSS feed** at `/feed.xml`
- **Noindex** on category pages with < 2 published articles (prevents thin content indexing)

### Staggering Publish Dates
Never publish multiple articles on the same date — it looks like bulk content to search engines. Space articles at least 3-5 days apart. If writing multiple in one session, set `publishedDate` to spread over 2-3 weeks.

### Content Creation Workflow
Use the `/seo-blog-writer` skill for the full 10-step workflow: keyword research → competitive analysis → article planning → brand voice writing → humanizer pass → SEO optimization → GEO optimization → quality checklist → image generation → CMS publishing.
