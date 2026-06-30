'use client'

import { useState, type FormEvent } from 'react'
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'
import { trackEvent } from './MetaPixel'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle')
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [email, setEmail] = useState('')
  const [personas, setPersonas] = useState('')
  const [fecha, setFecha] = useState('')
  const [comentarios, setComentarios] = useState('')
  const [phoneError, setPhoneError] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const digits = telefono.replace(/\D/g, '')
    if (digits.length < 8) {
      setPhoneError(true)
      return
    }
    setPhoneError(false)
    setStatus('sending')

    try {
      const fechaLabelMap: Record<string, string> = {
        agosto2026: 'Agosto 2026',
        abril2027: 'Abril 2027',
        ambas: 'Ambas fechas',
        privado: 'Viaje privado',
        otro: 'Otro',
      }
      const fechaLabel = fechaLabelMap[fecha] ?? 'Otro'
      const res = await fetch('/api/leads/form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre,
          email,
          telefono,
          personas,
          fechaLabel,
          comentarios,
        }),
      })

      const data = await res.json()
      if (data.ok) {
        trackEvent('Lead', { content_name: 'Contact Form', content_category: 'Viaje Grupal' })
        window.location.href = '/gracias-datos'
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="contact-card reveal" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="cf-nombre">Nombre</label>
        <input
          id="cf-nombre"
          type="text"
          name="nombre"
          autoComplete="name"
          placeholder="Tu nombre"
          required
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="cf-telefono">WhatsApp</label>
        <div
          className="phone-input-dark"
          style={
            {
              '--react-international-phone-background-color': 'transparent',
              '--react-international-phone-text-color': 'var(--color-text)',
              '--react-international-phone-border-color': 'rgba(255,255,255,0.12)',
              '--react-international-phone-height': '46px',
              '--react-international-phone-font-size': '15px',
              '--react-international-phone-border-radius': '10px',
              '--react-international-phone-country-selector-background-color-hover': 'rgba(200,161,90,0.1)',
              '--react-international-phone-dropdown-item-background-color-hover': 'rgba(200,161,90,0.1)',
              '--react-international-phone-selected-dropdown-item-background-color': 'rgba(200,161,90,0.15)',
              '--react-international-phone-dropdown-background-color': '#292929',
              '--react-international-phone-dropdown-item-text-color': 'var(--color-text)',
              '--react-international-phone-dropdown-item-dial-code-color': 'var(--color-secondary)',
            } as React.CSSProperties
          }
        >
          <PhoneInput
            defaultCountry="ve"
            value={telefono}
            onChange={(phone) => {
              setTelefono(phone)
              if (phoneError) setPhoneError(false)
            }}
            forceDialCode
            placeholder="WhatsApp (obligatorio)"
            inputProps={{
              id: 'cf-telefono',
              name: 'telefono',
              autoComplete: 'tel',
              required: true,
              'aria-invalid': phoneError,
            }}
            style={{ width: '100%' }}
          />
        </div>
        {phoneError && (
          <p className="text-xs" style={{ color: '#E07A5F', marginTop: '.4rem' }}>
            Ingresa tu número de WhatsApp completo para que Katherine pueda contactarte.
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="cf-email">Correo electrónico</label>
        <input
          id="cf-email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="tu@correo.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="field" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <label htmlFor="cf-personas">N.º de personas</label>
          <input
            id="cf-personas"
            type="number"
            name="personas"
            placeholder="¿Cuántos viajan?"
            min="1"
            max="10"
            required
            value={personas}
            onChange={(e) => setPersonas(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cf-fecha">¿Qué viaje te interesa?</label>
          <select
            id="cf-fecha"
            name="fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          >
            <option value="" disabled>
              Elige una opción
            </option>
            <option value="agosto2026">Vietnam &amp; Camboya — Agosto 2026</option>
            <option value="abril2027">Vietnam &amp; Camboya — Abril 2027</option>
            <option value="ambas">Ambas fechas</option>
            <option value="privado">Viaje privado / a medida</option>
            <option value="otro">Otro destino de Asia</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="cf-comentarios">Cuéntame tu idea</label>
        <textarea
          id="cf-comentarios"
          name="comentarios"
          placeholder="Fechas aproximadas, nº de personas, qué te gustaría vivir..."
          value={comentarios}
          onChange={(e) => setComentarios(e.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn btn--lg"
        style={{ width: '100%', justifyContent: 'center' }}
      >
        {status === 'sending' ? 'Enviando…' : 'Mándame toda la información'}
      </button>

      {status === 'error' && (
        <p className="text-xs" style={{ color: '#E07A5F', textAlign: 'center', marginTop: '.6rem' }}>
          Error. Inténtalo de nuevo o escríbenos por WhatsApp.
        </p>
      )}
    </form>
  )
}
