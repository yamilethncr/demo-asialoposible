'use client'

import { useState, type FormEvent } from 'react'
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'

const WEB3FORMS_KEY = '5fe64ee2-20aa-4bc1-a66f-78015b8881d4'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Nuevo lead: ${nombre}`,
          from_name: nombre,
          name: nombre,
          email,
          phone: telefono,
        }),
      })

      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setNombre('')
        setTelefono('')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        className="border border-[rgba(74,103,65,0.4)] p-8 text-center"
        style={{ background: 'rgba(74,103,65,0.08)' }}
      >
        <p className="text-sm uppercase tracking-[0.2em] font-bold mb-2" style={{ color: '#4A6741' }}>
          &#10003; LISTO
        </p>
        <p className="text-sm text-[var(--color-secondary)]">
          Katherine te contactar&aacute; en menos de 24 horas.
        </p>
      </div>
    )
  }

  const inputClass =
    'w-full px-4 py-3 text-sm bg-transparent border border-[rgba(212,168,83,0.2)] text-[var(--color-text)] placeholder:text-[var(--color-secondary)] placeholder:opacity-50 outline-none transition-colors focus:border-[var(--color-accent)]'

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] mb-1">
        O D&Eacute;JANOS TUS DATOS
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
          onChange={(phone) => setTelefono(phone)}
          placeholder="WhatsApp / Teléfono"
          inputProps={{
            name: 'telefono',
            autoComplete: 'tel',
            required: true,
          }}
          countrySelectorStyleProps={{
            buttonClassName: 'phone-country-btn',
          }}
          inputClassName="phone-number-input"
          style={{ width: '100%' }}
        />
      </div>

      <input type="email" name="email" autoComplete="email" placeholder="Correo electrónico" required value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full px-6 py-3 text-sm uppercase tracking-[0.1em] font-bold cursor-pointer border border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-bg)] transition-all duration-500 hover:shadow-[0_0_20px_rgba(212,168,83,0.4)] hover:bg-transparent hover:text-[var(--color-accent)] disabled:opacity-50 animate-hover:scale-[1.03] animate-tap:scale-95 animate-spring animate-stiffness-400 animate-damping-20"
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
