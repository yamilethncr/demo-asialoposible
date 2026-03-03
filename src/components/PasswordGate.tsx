'use client'

import { useState } from 'react'

const SITE_PASSWORD = 'asialoposible'

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false)
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  if (unlocked) return <>{children}</>

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.toLowerCase().trim() === SITE_PASSWORD) {
      setUnlocked(true)
    } else {
      setError(true)
      setTimeout(() => setError(false), 1500)
    }
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center px-5" style={{ background: 'var(--color-bg)' }}>
      <p className="font-black tracking-[0.1em] uppercase text-[var(--color-accent)] text-xl mb-2">
        Asia Lo Posible <sup className="text-[var(--color-secondary)]">26</sup>
      </p>
      <p className="text-xs text-[var(--color-secondary)] uppercase tracking-[0.2em] mb-10">Acceso restringido</p>

      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full max-w-[320px]">
        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Contraseña"
          autoFocus
          className="w-full bg-transparent text-center text-sm tracking-[0.15em] uppercase py-4 outline-none transition-colors duration-300"
          style={{
            border: `1px solid ${error ? '#ff4444' : 'rgba(212,168,83,0.3)'}`,
            color: 'var(--color-text)',
            caretColor: 'var(--color-accent)',
          }}
        />
        <button
          type="submit"
          className="w-full border border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-bg)] py-3 text-xs uppercase tracking-[0.15em] font-bold cursor-pointer transition-all duration-500 hover:bg-transparent hover:text-[var(--color-accent)]"
        >
          Entrar
        </button>
        {error && (
          <p className="text-xs text-red-400 uppercase tracking-wide">Contraseña incorrecta</p>
        )}
      </form>
    </div>
  )
}
