# Automatizaciones n8n — Asia Lo Posible

**Instancia:** https://innovalygroup.app.n8n.cloud  
**Credenciales:** Vaultwarden → vault `Asialoposible` → `n8n - asialoposible`

---

## Resumen de workflows

| Workflow | ID | Estado | Tipo | Trigger |
|---|---|---|---|---|
| Cal.com Lead Pipeline | `Er3DYB9jfG1BsX9n` | Activo | Principal | Webhook `/cal-leads` |
| Cal Bookings — Polling Reconciliation | `AppL7v10mvTF4qKp` | Activo | Cron | Cada 60 min |
| Chatwoot Lead Pipeline | `x21RMbIErUvWcjPB` | Activo | Principal | Webhook `/chatwoot-lead` |
| Notion Manual Email Trigger | `OlAsTrZkdl1p3nd8` | Activo | Utilidad | Webhook `/notion-manual-email` |
| Notion Unsubscribe Trigger | `4fgE5hzhFHm06zr7` | Activo | Utilidad | Webhook `/notion-unsubscribe` |
| Resend Enrollment | `bSpvtqyRqKW2iqgB` | Activo | Sub-workflow | Llamado por otros workflows |
| WhatsApp Template Send | `7LYiRjPAlhQsGZ0l` | Activo | Sub-workflow | Llamado por otros workflows |
| WhatsApp Webhook (form) | `Hj0kHjkgICRVx2qX` | Activo | Proxy | Webhook `/whatsapp-template-send` |
| Notion Unsubscribe Trigger (v1) | `VkYbXs2Pp8bPgH0n` | **Inactivo** | Deprecado | — |

---

## Mapa de dependencias

```
Fuentes de leads
  ├── Cal.com booking  →  Cal.com Lead Pipeline  ──┬──► Resend Enrollment (sub)
  │                                                 └──► WhatsApp Template Send (sub)
  │
  └── Chatwoot form    →  Chatwoot Lead Pipeline ──┬──► Resend Enrollment (sub)
                                                    └──► WhatsApp Template Send (sub)

Disparadores manuales desde Notion
  ├── Botón "Enviar email"    →  Notion Manual Email Trigger
  └── Botón "Desuscribir"    →  Notion Unsubscribe Trigger

Proxy HTTP externo
  └── Site (WHATSAPP_WEBHOOK_URL) →  WhatsApp Webhook (form) → WhatsApp Template Send (sub)

Reconciliación automática
  └── Cron 60min  →  Cal Bookings Polling  →  replay a Cal.com Lead Pipeline
```

---

## Detalle por workflow

---

### 1. Cal.com Lead Pipeline
**ID:** `Er3DYB9jfG1BsX9n` | **Estado:** Activo

Flujo principal que procesa todos los eventos de reservas de Cal.com. Es el workflow más complejo — gestiona el ciclo de vida completo de un lead desde que agenda hasta después de la reunión.

**Trigger:** Webhook POST en `/cal-leads` (autenticado con HMAC SHA-256)

**Flujo por tipo de evento:**

#### `booking.created` — Nueva reserva
1. Verifica firma HMAC del payload
2. Crea registro en Notion CRM (base `699c629a...`) con datos del lead
3. Si falla Notion → envía email de alerta a Katherine (`fallback alert`)
4. Llama a **Resend Enrollment** (sub) → inscribe en audiencia de email
5. Llama a **WhatsApp Template Send** (sub) → envía mensaje de bienvenida
6. ⏳ Espera hasta T-24h antes de la reunión
7. Consulta Notion para verificar que el lead sigue en estado "Meeting"
8. Si sigue activo → envía email recordatorio T-24h + WhatsApp T-24h (solo si no es same-day)
9. ⏳ Espera hasta T-30min
10. Consulta Notion, si sigue activo → envía WhatsApp recordatorio T-30min
11. ⏳ Espera hasta T-10min
12. Consulta Notion, si sigue activo → envía email recordatorio T-10min

#### `booking.cancelled` — Cancelación
1. Busca el lead en Notion por UID de reserva
2. Actualiza `Status = Lost`

#### `booking.rescheduled` — Reprogramación
1. Busca el lead en Notion por UID
2. Actualiza campo `startTime` con la nueva fecha

#### `meeting.ended` — Reunión terminada
1. Busca el lead en Notion por UID
2. Actualiza `Status = Qualified`

**Integraciones:** Cal.com · Notion CRM · Resend · WhatsApp (Meta Graph API)

---

### 2. Cal Bookings — Polling Reconciliation
**ID:** `AppL7v10mvTF4qKp` | **Estado:** Activo

Workflow de seguridad que garantiza que ninguna reserva de Cal.com se pierda por fallos de webhook. Actúa como red de seguridad del workflow anterior.

**Trigger:** Cron cada 60 minutos

**Flujo:**
1. Consulta Cal.com API para obtener reservas recientes (`GET /v2/bookings`)
2. Filtra solo las del último período y con estado `accepted`
3. Para cada reserva, consulta Notion: ¿ya existe un registro con ese UID?
4. Si **no existe en Notion** → construye payload idéntico al webhook de Cal.com, lo firma con HMAC y lo reenvía al endpoint `/cal-leads`
5. El Cal.com Lead Pipeline procesa la reserva como si fuera nueva

**Por qué existe:** Los webhooks de Cal.com pueden fallar o llegar fuera de orden. Este cron reconcilia el estado real contra el CRM.

**Integraciones:** Cal.com API · Notion CRM · (replay a Cal.com Lead Pipeline)

---

### 3. Chatwoot Lead Pipeline
**ID:** `x21RMbIErUvWcjPB` | **Estado:** Activo

Procesa leads que llegan a través del widget de chat Chatwoot integrado en el site.

**Trigger:** Webhook POST en `/chatwoot-lead`

**Flujo:**
1. Extrae datos del contacto del payload de Chatwoot
2. Valida que el payload sea bien formado
3. Crea registro en Notion CRM
4. Llama a **Resend Enrollment** (sub) → inscribe en audiencia email
5. Llama a **WhatsApp Template Send** (sub) → envía mensaje de bienvenida por WhatsApp

**Diferencia con Cal.com Lead Pipeline:** No tiene lógica de recordatorios porque Chatwoot no tiene reservas con fecha específica. Solo captura y bienvenida.

**Integraciones:** Chatwoot · Notion CRM · Resend · WhatsApp

---

### 4. Notion Manual Email Trigger
**ID:** `OlAsTrZkdl1p3nd8` | **Estado:** Activo

Permite a Katherine enviar emails manuales a leads individuales directamente desde Notion, usando un botón de automatización en la base de datos CRM.

**Trigger:** Webhook POST en `/notion-manual-email` (disparado por botón en Notion)

**Flujo:**
1. Extrae datos de la fila de Notion (email del lead, `page_id`, `template_id`)
2. Verifica que el guard sea válido (evita doble disparo)
3. Obtiene la plantilla de email desde Resend por `template_id`
4. Prepara y envía el email via Resend
5. Actualiza la fila de Notion (marca el email como enviado / timestamp)

**Caso de uso:** Katherine necesita hacer seguimiento personalizado a un lead — abre Notion, selecciona la plantilla apropiada y presiona el botón.

**Integraciones:** Notion CRM · Resend

---

### 5. Notion Unsubscribe Trigger
**ID:** `4fgE5hzhFHm06zr7` | **Estado:** Activo  
*(reemplaza al ID `VkYbXs2Pp8bPgH0n` que está inactivo)*

Gestiona las desuscripciones de email desde Notion, manteniendo consistencia entre el CRM y Resend.

**Trigger:** Webhook POST en `/notion-unsubscribe` (disparado por botón en Notion)

**Flujo:**
1. Extrae datos de la fila de Notion
2. Verifica guard para evitar doble ejecución
3. Llama a Resend API: **unsubscribe global** del contacto
4. Elimina el contacto de la audiencia **form-leads** (`ba6e3b37...`)
5. Elimina el contacto de la audiencia **private-leads** (`724c683e...`)
6. Actualiza la fila de Notion (marca como desuscrito)

**Diferencia con la v1 inactiva:** La versión activa hace un unsubscribe global de Resend además de eliminar de las audiencias. La v1 solo eliminaba de audiencias.

**Integraciones:** Notion CRM · Resend

---

### 6. Resend Enrollment (sub-workflow)
**ID:** `bSpvtqyRqKW2iqgB` | **Estado:** Activo

Sub-workflow reutilizable que inscribe un contacto en la audiencia de Resend correcta y dispara el evento de enrollment.

**Trigger:** `executeWorkflowTrigger` (llamado por Cal.com Lead Pipeline y Chatwoot Lead Pipeline)

**Inputs esperados:** email, nombre, tipo de audiencia (`form` o `private`)

**Flujo:**
- Si audiencia = **form-leads:**
  1. `POST /audiences/ba6e3b37.../contacts` → añade contacto
  2. `POST /events/send` → dispara evento de enrollment (activa secuencia de emails)
- Si audiencia = **private-leads:**
  1. `POST /audiences/724c683e.../contacts` → añade contacto  
  2. `POST /events/send` → dispara evento de enrollment

**Dos audiencias en Resend:**
- `form-leads` (`ba6e3b37...`): Leads del formulario público del site
- `private-leads` (`724c683e...`): Leads de viajes privados / segmento premium

**Integraciones:** Resend

---

### 7. WhatsApp Template Send (sub-workflow)
**ID:** `7LYiRjPAlhQsGZ0l` | **Estado:** Activo

Sub-workflow reutilizable que envía un mensaje de WhatsApp Business usando una plantilla aprobada por Meta.

**Trigger:** `executeWorkflowTrigger` (llamado por Cal.com Lead Pipeline, Chatwoot Lead Pipeline, y WhatsApp Webhook)

**Inputs esperados:** número de teléfono, ID de plantilla, variables de la plantilla

**Flujo:**
1. Sanitiza el número de teléfono (normaliza formato internacional)
2. Verifica que el número sea válido
3. Si válido → `POST https://graph.facebook.com/v21.0/1065596523306877/messages` con la plantilla
4. Si no tiene teléfono → termina silenciosamente

**Phone number ID Meta:** `1065596523306877`

**Integraciones:** Meta WhatsApp Business Cloud API

---

### 8. WhatsApp Webhook (form)
**ID:** `Hj0kHjkgICRVx2qX` | **Estado:** Activo

Actúa como proxy HTTP que recibe llamadas desde el site (Next.js) y las redirige al sub-workflow de WhatsApp Template Send. Existe porque el site no puede llamar directamente al sub-workflow de n8n.

**Trigger:** Webhook POST en `/whatsapp-template-send`  
**URL en el site:** Variable de entorno `WHATSAPP_WEBHOOK_URL`

**Flujo:**
1. Verifica el secreto compartido (`WHATSAPP_WEBHOOK_SECRET`) en el payload
2. Si válido → llama a **WhatsApp Template Send** (sub)
3. Responde `200 OK` o `skipped` según resultado

**Caso de uso en el site:** Cuando un lead completa el formulario de inscripción (`/inscribete`), el servidor Next.js hace POST a este webhook para disparar el mensaje de WhatsApp de bienvenida.

**Variables de entorno relacionadas en el site:**
- `WHATSAPP_WEBHOOK_URL` → URL de este webhook
- `WHATSAPP_WEBHOOK_SECRET` → secreto compartido para autenticación

**Integraciones:** Next.js site → WhatsApp Template Send (sub)

---

### 9. Notion Unsubscribe Trigger v1 (DEPRECADO)
**ID:** `VkYbXs2Pp8bPgH0n` | **Estado:** Inactivo

Versión anterior del workflow de desuscripción. Inactivo desde que se añadió el unsubscribe global a la versión `4fgE5hzhFHm06zr7`. No eliminar hasta confirmar que el webhook en Notion apunta al ID activo.

---

## Variables de entorno que conectan el site con n8n

| Variable en Vercel | Qué hace |
|---|---|
| `WHATSAPP_WEBHOOK_URL` | URL del webhook `/whatsapp-template-send` en n8n |
| `WHATSAPP_WEBHOOK_SECRET` | Secreto HMAC compartido entre site y n8n |

El resto de integraciones (Cal.com, Chatwoot, Notion, Resend) se configuran directamente en n8n con sus propias credenciales, sin pasar por el site.

---

## Credenciales n8n (Vaultwarden → `Asialoposible`)

| Credencial | Usada en |
|---|---|
| Resend API Key | Workflows de email |
| Notion Token | Todos los workflows con CRM |
| Meta WhatsApp (token + phone ID) | WhatsApp Template Send |
| Cal.com API Key + HMAC Secret | Cal.com Lead Pipeline + Polling |
| Chatwoot API | Chatwoot Lead Pipeline |
| WHATSAPP_WEBHOOK_SECRET | WhatsApp Webhook (form) |
