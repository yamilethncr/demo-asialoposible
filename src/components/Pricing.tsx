'use client'

import { useState, useEffect } from 'react'
import { trackEvent } from './MetaPixel'

type Viaje = 'agosto2026' | 'abril2027'
type Metodo = 'contado' | 'cuotas'
type Habitacion = 'compartida' | 'privada'

const VIAJE_INFO: Record<Viaje, { label: string; fechas: string; cupos: number }> = {
  agosto2026: { label: 'Agosto 2026', fechas: '1 – 14 de agosto, 2026', cupos: 6 },
  abril2027: { label: 'Abril 2027', fechas: '1 – 14 de abril, 2027', cupos: 8 },
}

const PRICES: Record<Metodo, number> = {
  contado: 3500,
  cuotas: 3800,
}

const HABITACION_EXTRA = 655

interface CuotaRow {
  mes: string
  concepto: string
  monto: number
  nota?: string
}

function getCronograma(viaje: Viaje, totalPrice: number): CuotaRow[] {
  const reserva = totalPrice * 0.30
  const saldo = totalPrice * 0.70

  if (viaje === 'agosto2026') {
    const cuota = saldo / 4
    return [
      { mes: 'Al reservar', concepto: 'Reserva (30%)', monto: reserva, nota: 'No reembolsable' },
      { mes: 'Mayo', concepto: 'Cuota 1', monto: cuota },
      { mes: 'Junio', concepto: 'Cuota 2', monto: cuota },
      { mes: 'Julio (Inicios)', concepto: 'Cuota 3', monto: cuota },
      { mes: 'Julio (Antes del 15)', concepto: 'Cuota 4', monto: cuota, nota: 'Liquidación total' },
    ]
  } else {
    const cuota = saldo / 5
    return [
      { mes: 'Al reservar', concepto: 'Reserva (30%)', monto: reserva, nota: 'No reembolsable' },
      { mes: 'Noviembre 2026', concepto: 'Cuota 1', monto: cuota },
      { mes: 'Diciembre', concepto: 'Cuota 2', monto: cuota },
      { mes: 'Enero 2027', concepto: 'Cuota 3', monto: cuota },
      { mes: 'Febrero', concepto: 'Cuota 4', monto: cuota },
      { mes: 'Marzo (Antes del 15)', concepto: 'Cuota 5', monto: cuota, nota: 'Liquidación total' },
    ]
  }
}

function formatUSD(n: number): string {
  return n.toLocaleString('en-US', { minimumFractionDigits: n % 1 === 0 ? 0 : 2, maximumFractionDigits: 2 })
}

export default function Pricing({ variant = 'call' }: { variant?: 'call' | 'form' } = {}) {
  const [viaje, setViaje] = useState<Viaje>('agosto2026')
  const [metodo, setMetodo] = useState<Metodo>('contado')
  const [habitacion, setHabitacion] = useState<Habitacion>('compartida')
  const [step, setStep] = useState(1)
  const [calculating, setCalculating] = useState(false)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (step < 3) return
    setVisible(false)
    setCalculating(true)
    const t1 = setTimeout(() => {
      setCalculating(false)
      setVisible(true)
    }, 500)
    return () => clearTimeout(t1)
  }, [viaje, metodo, habitacion, step])

  const basePrice = PRICES[metodo]
  const totalPrice = basePrice + (habitacion === 'privada' ? HABITACION_EXTRA : 0)
  const reserva = totalPrice * 0.30
  const remaining = totalPrice * 0.70
  const contadoTotal = PRICES.contado + (habitacion === 'privada' ? HABITACION_EXTRA : 0)
  const ahorroContado = totalPrice - contadoTotal
  const cronograma = getCronograma(viaje, totalPrice)
  const numCuotas = viaje === 'agosto2026' ? 4 : 5

  const viajeLabel = VIAJE_INFO[viaje].label
  const metodoLabel = metodo === 'contado' ? 'Contado' : 'Cuotas'
  const habitacionLabel = habitacion === 'compartida' ? 'Compartida' : 'Privada'

  const waMessage = encodeURIComponent(
    `Hola Katherine, usé la calculadora y me interesa el viaje de ${viajeLabel}. Mi selección: ${metodoLabel} + ${habitacionLabel} = $${formatUSD(totalPrice)} USD. ¿Podemos hablar?`
  )

  const handleViaje = (v: Viaje) => {
    setViaje(v)
    setStep(prev => Math.max(prev, 2))
    trackEvent('CustomizeProduct', { content_name: 'Viaje', content_type: v })
  }

  const handleMetodo = (m: Metodo) => {
    setMetodo(m)
    setStep(prev => Math.max(prev, 3))
    trackEvent('CustomizeProduct', { content_name: 'Método de pago', content_type: m })
  }

  const handleHabitacion = (h: Habitacion) => {
    setHabitacion(h)
    trackEvent('CustomizeProduct', { content_name: 'Habitación', content_type: h })
  }

  const stepDone = (s: number) => step > s
  const stepActive = (s: number) => step >= s

  return (
    <section id="precio" className="pt-20 md:pt-28 pb-8 md:pb-10 relative z-10">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <span className="block text-xs tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-4">
          INVERSI&Oacute;N
        </span>
        <h2 className="text-2xl md:text-[2.5rem] leading-tight uppercase font-bold text-[var(--color-text)] mb-2 animate-initial:opacity-0 animate-initial:y-20 animate-inview:opacity-100 animate-inview:y-0 animate-duration-600 animate-ease-out animate-once">
          PRECIO DEL VIAJE A VIETNAM Y CAMBOYA
        </h2>
        <p className="text-base md:text-lg tracking-wide uppercase text-[var(--color-accent)] mb-6">
          TODO INCLUIDO.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-[var(--color-secondary)] max-w-[600px] mb-12">
          Hoteles 4 estrellas, crucero de lujo, vuelos internos, transporte premium, gu&iacute;a en espa&ntilde;ol, fotograf&iacute;a profesional, todas las entradas y el acompa&ntilde;amiento personal de Katherine. Si lo organizas por tu cuenta &mdash;si es que puedes hacerlo en espa&ntilde;ol&mdash; gastas m&aacute;s.
        </p>

        <div className="max-w-[860px]">

          {/* ── PASO 1: Viaje ── */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="flex items-center justify-center w-8 h-8 text-xs font-bold shrink-0 transition-all duration-300"
                style={{
                  border: '1px solid',
                  borderColor: stepActive(1) ? 'var(--color-accent)' : 'rgba(212,168,83,0.2)',
                  background: stepDone(1) ? 'var(--color-accent)' : 'transparent',
                  color: stepDone(1) ? 'var(--color-bg)' : stepActive(1) ? 'var(--color-accent)' : 'var(--color-secondary)',
                }}
              >
                {stepDone(1) ? '✓' : '1'}
              </span>
              <p className="text-xs tracking-[0.2em] uppercase" style={{ color: stepActive(1) ? 'var(--color-accent)' : 'var(--color-secondary)' }}>
                &iquest;Qu&eacute; fecha de viaje?
              </p>
              {stepDone(1) && (
                <span className="text-xs text-[var(--color-secondary)] ml-auto">{viajeLabel}</span>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3 pl-11">
              <button
                onClick={() => handleViaje('agosto2026')}
                className="px-4 py-4 text-left transition-all duration-300 cursor-pointer"
                style={{
                  border: viaje === 'agosto2026' ? '1px solid var(--color-accent)' : '1px solid rgba(212,168,83,0.15)',
                  background: viaje === 'agosto2026' ? 'rgba(212,168,83,0.1)' : 'transparent',
                  color: viaje === 'agosto2026' ? 'var(--color-accent)' : 'var(--color-secondary)',
                }}
              >
                <span className="block text-sm font-bold uppercase tracking-wide">Agosto 2026</span>
                <span className="block text-[11px] mt-1 opacity-70">1 &ndash; 14 de agosto &middot; {VIAJE_INFO.agosto2026.cupos} cupos</span>
              </button>
              <button
                onClick={() => handleViaje('abril2027')}
                className="px-4 py-4 text-left transition-all duration-300 cursor-pointer"
                style={{
                  border: viaje === 'abril2027' ? '1px solid var(--color-accent)' : '1px solid rgba(212,168,83,0.15)',
                  background: viaje === 'abril2027' ? 'rgba(212,168,83,0.1)' : 'transparent',
                  color: viaje === 'abril2027' ? 'var(--color-accent)' : 'var(--color-secondary)',
                }}
              >
                <span className="block text-sm font-bold uppercase tracking-wide">Abril 2027</span>
                <span className="block text-[11px] mt-1 opacity-70">1 &ndash; 14 de abril &middot; {VIAJE_INFO.abril2027.cupos} cupos</span>
              </button>
            </div>
          </div>

          {/* ── PASO 2: Método de pago ── */}
          <div
            className="mb-8 transition-all duration-500"
            style={{ opacity: stepActive(2) ? 1 : 0.3, pointerEvents: stepActive(2) ? 'auto' : 'none' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                className="flex items-center justify-center w-8 h-8 text-xs font-bold shrink-0 transition-all duration-300"
                style={{
                  border: '1px solid',
                  borderColor: stepActive(2) ? 'var(--color-accent)' : 'rgba(212,168,83,0.2)',
                  background: stepDone(2) ? 'var(--color-accent)' : 'transparent',
                  color: stepDone(2) ? 'var(--color-bg)' : stepActive(2) ? 'var(--color-accent)' : 'var(--color-secondary)',
                }}
              >
                {stepDone(2) ? '✓' : '2'}
              </span>
              <p className="text-xs tracking-[0.2em] uppercase" style={{ color: stepActive(2) ? 'var(--color-accent)' : 'var(--color-secondary)' }}>
                &iquest;C&oacute;mo prefieres pagar?
              </p>
              {stepDone(2) && (
                <span className="text-xs text-[var(--color-secondary)] ml-auto">{metodoLabel}</span>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3 pl-11">
              <button
                onClick={() => handleMetodo('contado')}
                className="px-4 py-4 text-left transition-all duration-300 cursor-pointer"
                style={{
                  border: metodo === 'contado' ? '1px solid var(--color-accent)' : '1px solid rgba(212,168,83,0.15)',
                  background: metodo === 'contado' ? 'rgba(212,168,83,0.1)' : 'transparent',
                  color: metodo === 'contado' ? 'var(--color-accent)' : 'var(--color-secondary)',
                }}
              >
                <span className="block text-sm font-bold uppercase tracking-wide">Contado</span>
                <span className="block text-[11px] mt-1 opacity-70">Pago &uacute;nico &middot; Mejor precio</span>
              </button>
              <button
                onClick={() => handleMetodo('cuotas')}
                className="px-4 py-4 text-left transition-all duration-300 cursor-pointer"
                style={{
                  border: metodo === 'cuotas' ? '1px solid var(--color-accent)' : '1px solid rgba(212,168,83,0.15)',
                  background: metodo === 'cuotas' ? 'rgba(212,168,83,0.1)' : 'transparent',
                  color: metodo === 'cuotas' ? 'var(--color-accent)' : 'var(--color-secondary)',
                }}
              >
                <span className="block text-sm font-bold uppercase tracking-wide">Cuotas</span>
                <span className="block text-[11px] mt-1 opacity-70">
                  {numCuotas} cuotas mensuales
                </span>
              </button>
            </div>
          </div>

          {/* ── PASO 3: Habitación ── */}
          <div
            className="mb-10 transition-all duration-500"
            style={{ opacity: stepActive(3) ? 1 : 0.3, pointerEvents: stepActive(3) ? 'auto' : 'none' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                className="flex items-center justify-center w-8 h-8 text-xs font-bold shrink-0 transition-all duration-300"
                style={{
                  border: '1px solid',
                  borderColor: stepActive(3) ? 'var(--color-accent)' : 'rgba(212,168,83,0.2)',
                  background: stepDone(3) ? 'var(--color-accent)' : 'transparent',
                  color: stepDone(3) ? 'var(--color-bg)' : stepActive(3) ? 'var(--color-accent)' : 'var(--color-secondary)',
                }}
              >
                3
              </span>
              <p className="text-xs tracking-[0.2em] uppercase" style={{ color: stepActive(3) ? 'var(--color-accent)' : 'var(--color-secondary)' }}>
                Tipo de habitaci&oacute;n
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pl-11">
              <button
                onClick={() => handleHabitacion('compartida')}
                className="px-4 py-4 text-left transition-all duration-300 cursor-pointer"
                style={{
                  border: habitacion === 'compartida' ? '1px solid var(--color-accent)' : '1px solid rgba(212,168,83,0.15)',
                  background: habitacion === 'compartida' ? 'rgba(212,168,83,0.1)' : 'transparent',
                  color: habitacion === 'compartida' ? 'var(--color-accent)' : 'var(--color-secondary)',
                }}
              >
                <span className="block text-sm font-bold uppercase tracking-wide">Compartida</span>
                <span className="block text-[11px] mt-1 opacity-70">Dos camas &middot; Precio base</span>
              </button>
              <button
                onClick={() => handleHabitacion('privada')}
                className="px-4 py-4 text-left transition-all duration-300 cursor-pointer"
                style={{
                  border: habitacion === 'privada' ? '1px solid var(--color-accent)' : '1px solid rgba(212,168,83,0.15)',
                  background: habitacion === 'privada' ? 'rgba(212,168,83,0.1)' : 'transparent',
                  color: habitacion === 'privada' ? 'var(--color-accent)' : 'var(--color-secondary)',
                }}
              >
                <span className="block text-sm font-bold uppercase tracking-wide">Privada</span>
                <span className="block text-[11px] mt-1 opacity-70">Tu propio espacio &middot; +$655 USD</span>
              </button>
            </div>
          </div>

          {/* ── RESULTADOS ── */}
          {stepActive(3) && (
            <div className="relative">
              <div className="h-px w-full mb-8" style={{ background: 'linear-gradient(to right, var(--color-accent), transparent)' }} />

              <div
                className="absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-300 pointer-events-none"
                style={{ opacity: calculating ? 1 : 0 }}
              >
                <p className="text-sm tracking-[0.15em] uppercase" style={{ color: '#4A6741' }}>
                  Calculando tu experiencia&hellip;
                </p>
              </div>

              <div className="transition-opacity duration-300" style={{ opacity: visible ? 1 : 0 }}>

                <div className={`grid grid-cols-1 ${metodo === 'cuotas' ? 'md:grid-cols-2' : ''} gap-6 mb-6`}>
                  <div
                    className="border border-[var(--color-accent)] p-8 relative overflow-hidden"
                    style={{ background: 'rgba(212,168,83,0.05)' }}
                  >
                    <div
                      className="absolute top-0 right-0 w-[200px] h-[200px] pointer-events-none"
                      style={{ background: 'var(--color-accent)', filter: 'blur(80px)', opacity: 0.08 }}
                    />
                    <span className="block text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] mb-4 relative z-10">
                      Inversi&oacute;n Total &middot; {viajeLabel}
                    </span>
                    <div className="flex items-baseline gap-2 mb-3 relative z-10">
                      <span className="text-4xl md:text-5xl font-bold text-[var(--color-text)] font-mono">
                        ${formatUSD(totalPrice)}
                      </span>
                      <span className="text-sm text-[var(--color-secondary)] uppercase">USD</span>
                    </div>
                    <p className="text-xs text-[var(--color-secondary)] relative z-10">
                      {viajeLabel} &middot; {metodoLabel} &middot; Hab. {habitacionLabel}
                    </p>
                    {metodo === 'contado' && (
                      <p className="text-xs mt-2 relative z-10" style={{ color: '#4A6741' }}>
                        Precio preferencial de contado &middot; Pago &uacute;nico
                      </p>
                    )}
                    {habitacion === 'privada' && (
                      <p className="text-xs mt-1 text-[var(--color-secondary)] relative z-10">
                        Incluye suplemento individual +$655
                      </p>
                    )}
                  </div>

                  {metodo === 'cuotas' && (
                    <div className="border border-[rgba(212,168,83,0.2)] p-8" style={{ background: 'rgba(139,115,85,0.04)' }}>
                      <span className="block text-xs tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-4">
                        Desglose
                      </span>
                      <div className="space-y-3">
                        <div className="flex justify-between items-baseline">
                          <span className="text-sm text-[var(--color-secondary)]">Reserva (30%)</span>
                          <span className="text-lg font-bold text-[var(--color-text)] font-mono">${formatUSD(reserva)}</span>
                        </div>
                        <div className="h-px w-full" style={{ background: 'rgba(212,168,83,0.1)' }} />
                        <div className="flex justify-between items-baseline">
                          <span className="text-sm text-[var(--color-secondary)]">
                            Saldo restante ({numCuotas} cuotas)
                          </span>
                          <span className="text-lg font-bold text-[var(--color-text)] font-mono">${formatUSD(remaining)}</span>
                        </div>
                        {habitacion === 'privada' && (
                          <>
                            <div className="h-px w-full" style={{ background: 'rgba(212,168,83,0.1)' }} />
                            <div className="flex justify-between items-baseline">
                              <span className="text-xs text-[var(--color-secondary)]">Incluye suplemento individual</span>
                              <span className="text-sm text-[var(--color-secondary)] font-mono">+$655</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {metodo === 'cuotas' && (
                  <div
                    className="border border-[rgba(212,168,83,0.2)] p-6 md:p-8 mb-6"
                    style={{ background: 'rgba(212,168,83,0.03)' }}
                  >
                    <span className="block text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] mb-5">
                      Cronograma de Pagos &middot; {viajeLabel}
                    </span>

                    <div
                      className="hidden md:grid grid-cols-12 gap-2 pb-3 mb-3 text-[11px] uppercase tracking-wide text-[var(--color-secondary)]"
                      style={{ borderBottom: '1px solid rgba(212,168,83,0.15)' }}
                    >
                      <div className="col-span-3">Mes</div>
                      <div className="col-span-3">Concepto</div>
                      <div className="col-span-3 text-right">Monto</div>
                      <div className="col-span-3 text-right">Nota</div>
                    </div>

                    {cronograma.map((row, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-2 py-3 items-baseline"
                        style={{ borderBottom: i < cronograma.length - 1 ? '1px solid rgba(212,168,83,0.08)' : 'none' }}
                      >
                        <div className="md:col-span-3">
                          <span className="text-sm font-bold text-[var(--color-text)]">{row.mes}</span>
                        </div>
                        <div className="md:col-span-3">
                          <span className="text-sm text-[var(--color-secondary)]">{row.concepto}</span>
                        </div>
                        <div className="md:col-span-3 md:text-right">
                          <span className="text-sm font-bold text-[var(--color-text)] font-mono">${formatUSD(row.monto)}</span>
                        </div>
                        <div className="md:col-span-3 md:text-right">
                          {row.nota && (
                            <span
                              className="text-[11px] uppercase tracking-wide"
                              style={{ color: row.nota === 'No reembolsable' ? '#B85C5C' : '#4A6741' }}
                            >
                              {row.nota}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}

                    <div
                      className="grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-2 pt-4 mt-3 items-baseline"
                      style={{ borderTop: '1px solid rgba(212,168,83,0.3)' }}
                    >
                      <div className="md:col-span-3">
                        <span className="text-sm font-bold uppercase text-[var(--color-accent)]">Total</span>
                      </div>
                      <div className="md:col-span-3" />
                      <div className="md:col-span-3 md:text-right">
                        <span className="text-lg font-bold text-[var(--color-accent)] font-mono">${formatUSD(totalPrice)}</span>
                      </div>
                      <div className="md:col-span-3" />
                    </div>
                  </div>
                )}

                {metodo === 'cuotas' && (
                  <div
                    className="border border-[rgba(74,103,65,0.3)] p-5 mb-6"
                    style={{ background: 'rgba(74,103,65,0.06)' }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <p className="text-sm" style={{ color: '#4A6741' }}>
                        Si pagaras de contado ahorrar&iacute;as <strong>${formatUSD(ahorroContado)}</strong>
                      </p>
                      <p className="text-sm text-[var(--color-secondary)]">
                        Precio de contado: <span className="font-mono font-bold text-[var(--color-text)]">${formatUSD(contadoTotal)}</span> USD
                      </p>
                    </div>
                  </div>
                )}

                {variant === 'call' ? (
                  <a
                    href={`https://wa.me/584248455010?text=${waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('InitiateCheckout', {
                      value: totalPrice,
                      currency: 'USD',
                      num_items: 1,
                    })}
                    className="inline-block w-full md:w-auto text-center px-10 py-4 text-sm font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:brightness-110 mb-6"
                    style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}
                  >
                    Reservar por WhatsApp
                  </a>
                ) : (
                  <a
                    href="#reservar"
                    onClick={() => trackEvent('InitiateCheckout', {
                      value: totalPrice,
                      currency: 'USD',
                      num_items: 1,
                    })}
                    className="inline-block w-full md:w-auto text-center px-10 py-4 text-sm font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:brightness-110 mb-6"
                    style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}
                  >
                    Reservar mi cupo
                  </a>
                )}

                <div className="mb-6">
                  <p className="text-[11px] tracking-[0.15em] uppercase text-[var(--color-secondary)] mb-3">
                    Formas de pago aceptadas
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: 'VISA', icon: (
                        <svg viewBox="0 0 32 20" className="w-6 h-4" fill="currentColor">
                          <path d="M13.2 13.5L14.8 6.5H17L15.4 13.5H13.2ZM23.8 6.7C23.3 6.5 22.5 6.3 21.5 6.3C19.3 6.3 17.7 7.5 17.7 9.1C17.7 10.3 18.7 10.9 19.5 11.3C20.3 11.7 20.6 11.9 20.6 12.3C20.6 12.8 20 13.1 19.4 13.1C18.5 13.1 18 12.9 17.2 12.6L16.9 12.5L16.6 14.3C17.2 14.5 18.2 14.8 19.3 14.8C21.6 14.8 23.2 13.6 23.2 11.9C23.2 11 22.7 10.3 21.5 9.7C20.8 9.3 20.3 9.1 20.3 8.6C20.3 8.2 20.8 7.8 21.7 7.8C22.5 7.8 23.1 8 23.5 8.1L23.7 8.2L23.8 6.7ZM28.2 6.5H26.5C26 6.5 25.6 6.7 25.4 7.2L22.3 13.5H24.6L25.1 12.2H27.9L28.2 13.5H30.2L28.2 6.5ZM25.7 10.6L26.8 8L27.4 10.6H25.7ZM11.8 6.5L9.6 11.3L9.4 10.2C9 9 7.8 7.6 6.5 7L8.5 13.5H10.8L14.1 6.5H11.8Z"/>
                        </svg>
                      )},
                      { label: 'Mastercard', icon: (
                        <svg viewBox="0 0 32 20" className="w-6 h-4" fill="none">
                          <circle cx="12" cy="10" r="6" fill="currentColor" opacity="0.5"/>
                          <circle cx="20" cy="10" r="6" fill="currentColor" opacity="0.5"/>
                        </svg>
                      )},
                      { label: 'Transfer. USD', icon: (
                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <rect x="2" y="3" width="20" height="18" rx="2"/>
                          <path d="M2 8h20"/>
                          <path d="M6 13h4M6 16h8"/>
                        </svg>
                      )},
                      { label: 'Transfer. EUR', icon: (
                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <rect x="2" y="3" width="20" height="18" rx="2"/>
                          <path d="M2 8h20"/>
                          <path d="M6 13h4M6 16h8"/>
                        </svg>
                      )},
                      { label: 'Cripto', icon: (
                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <circle cx="12" cy="12" r="9"/>
                          <path d="M8 9h8M12 9v9" strokeWidth="1.5"/>
                        </svg>
                      )},
                      { label: 'Bol\u00edvares', sublabel: 'Tasa Kontigo', icon: (
                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <circle cx="12" cy="12" r="9"/>
                          <path d="M10 6v12M10 8h3.5a2.5 2.5 0 010 5H10m0 0h4a2.5 2.5 0 010 5H10" strokeWidth="1.3"/>
                        </svg>
                      )},
                    ].map((method) => (
                      <div
                        key={method.label}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-[var(--color-secondary)] transition-colors hover:text-[var(--color-accent)]"
                        style={{ border: '1px solid rgba(212,168,83,0.12)', background: 'rgba(212,168,83,0.03)' }}
                      >
                        {method.icon}
                        <span className="text-[11px] uppercase tracking-wide">{method.label}</span>
                        {'sublabel' in method && method.sublabel && (
                          <span className="text-[9px] opacity-60">{method.sublabel}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-[var(--color-secondary)]">
                  Al reservar, aceptas nuestros{' '}
                  <a href="/terminos-viaje" className="text-[var(--color-accent)] underline hover:no-underline transition-colors">
                    t&eacute;rminos y condiciones del viaje
                  </a>.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
