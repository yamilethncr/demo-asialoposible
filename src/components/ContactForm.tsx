'use client'

import { useState, type FormEvent } from 'react'
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'
import { trackEvent } from './MetaPixel'

const WEB3FORMS_KEY = '5fe64ee2-20aa-4bc1-a66f-78015b8881d4'

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
      const fechaLabel = fecha === 'agosto2026' ? 'Agosto 2026' : fecha === 'abril2027' ? 'Abril 2027' : 'Ambas fechas'
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Nuevo lead viaje grupal: ${nombre}`,
          from_name: nombre,
          name: nombre,
          email,
          phone: telefono,
          personas: personas || 'No indicó',
          fecha_interes: fechaLabel,
          comentarios: comentarios || 'Sin comentarios',
        }),
      })

      const data = await res.json()
      if (data.success) {
        trackEvent('Lead', { content_name: 'Contact Form', content_category: 'Viaje Grupal' })
        window.location.href = '/gracias-datos'
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full px-4 py-3 text-sm bg-transparent border border-[rgba(212,168,83,0.2)] text-[var(--color-text)] placeholder:text-[var(--color-secondary)] placeholder:opacity-50 outline-none transition-colors focus:border-[var(--color-accent)]'

  const selectClass =
    'w-full px-4 py-3 text-sm bg-transparent border border-[rgba(212,168,83,0.2)] text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-accent)] appearance-none cursor-pointer'

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] mb-1">
        COMPLETA TUS DATOS
      </p>

      <input type="text" name="nombre" autoComplete="name" placeholder="Nombre" required value={nombre} onChange={(e) => setNombre(e.target.value)} className={inputClass} />

      <div
        className="phone-input-dark w-full"
        style={{
          '--react-international-phone-background-color': 'transparent',
          '--react-international-phone-text-color': 'var(--color-text)',
          '--react-international-phone-border-color': 'rgba(212,168,83,0.2)',
          '--react-international-phone-height': '44px',
          '--react-international-phone-font-size': '14px',
          '--react-international-phone-border-radius': '0px',
          '--react-international-phone-country-selector-background-color-hover': 'rgba(212,168,83,0.1)',
          '--react-international-phone-dropdown-item-background-color-hover': 'rgba(212,168,83,0.1)',
          '--react-international-phone-selected-dropdown-item-background-color': 'rgba(212,168,83,0.15)',
          '--react-international-phone-dropdown-background-color': '#0A0F1E',
          '--react-international-phone-dropdown-item-text-color': 'var(--color-text)',
          '--react-international-phone-dropdown-item-dial-code-color': 'var(--color-secondary)',
        } as React.CSSProperties}
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
            name: 'telefono',
            autoComplete: 'tel',
            required: true,
            'aria-invalid': phoneError,
          }}
          countrySelectorStyleProps={{
            buttonClassName: 'phone-country-btn',
          }}
          inputClassName="phone-number-input"
          style={{ width: '100%' }}
        />
      </div>
      {phoneError && (
        <p className="text-xs -mt-1" style={{ color: '#B85C5C' }}>
          Ingresa tu n&uacute;mero de WhatsApp completo para que Katherine pueda contactarte.
        </p>
      )}

      <input type="email" name="email" autoComplete="email" placeholder="Correo electrónico" required value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />

      <div className="grid grid-cols-2 gap-3">
        <input
          type="number"
          name="personas"
          placeholder="N.º de personas"
          min="1"
          max="10"
          required
          value={personas}
          onChange={(e) => setPersonas(e.target.value)}
          className={inputClass}
        />
        <div className="relative">
          <select
            name="fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className={selectClass}
            required
            style={{ color: fecha ? 'var(--color-text)' : 'var(--color-secondary)', opacity: fecha ? 1 : 0.5 }}
          >
            <option value="" disabled>Fecha de inter&eacute;s</option>
            <option value="agosto2026">Agosto 2026</option>
            <option value="abril2027">Abril 2027</option>
            <option value="ambas">Ambas fechas</option>
          </select>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-secondary)] pointer-events-none text-xs">&#9660;</span>
        </div>
      </div>

      <textarea
        name="comentarios"
        placeholder="Comentarios o preguntas (opcional)"
        rows={3}
        value={comentarios}
        onChange={(e) => setComentarios(e.target.value)}
        className={`${inputClass} resize-none`}
      />

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full min-h-[52px] px-6 py-3 text-sm uppercase tracking-[0.1em] font-bold cursor-pointer border border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-bg)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,168,83,0.4)] hover:bg-transparent hover:text-[var(--color-accent)] disabled:opacity-50 flex items-center justify-center"
      >
        {status === 'sending' ? 'ENVIANDO...' : 'M\u00c1NDAME TODA LA INFORMACI\u00d3N'}
      </button>

      {status === 'error' && (
        <p className="text-xs text-center" style={{ color: '#B85C5C' }}>
          Error. Int&eacute;ntalo de nuevo o escr&iacute;benos por WhatsApp.
        </p>
      )}
    </form>
  )
}
