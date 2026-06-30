'use client'

import { useEffect, useState, useCallback } from 'react'

interface CountryTz {
  label: string
  offsets: { value: number; label: string; months: [number, number] }[]
}

const VIETNAM_OFFSET = 7

const countries: CountryTz[] = [
  {
    label: 'Venezuela',
    offsets: [{ value: -4, label: 'GMT-4', months: [1, 12] }],
  },
  {
    label: 'Colombia / Perú / Ecuador',
    offsets: [{ value: -5, label: 'GMT-5', months: [1, 12] }],
  },
  {
    label: 'Chile / Argentina',
    offsets: [
      { value: -3, label: 'Verano (GMT-3)', months: [10, 3] },
      { value: -4, label: 'Invierno (GMT-4)', months: [4, 9] },
    ],
  },
  {
    label: 'México (CDMX)',
    offsets: [{ value: -6, label: 'GMT-6', months: [1, 12] }],
  },
  {
    label: 'Miami / Nueva York',
    offsets: [
      { value: -4, label: 'Verano (EDT)', months: [3, 11] },
      { value: -5, label: 'Invierno (EST)', months: [11, 3] },
    ],
  },
]

function isInRange(month: number, start: number, end: number): boolean {
  if (start <= end) return month >= start && month <= end
  return month >= start || month <= end
}

function formatTime(date: Date, utcOffset: number): string {
  const utc = date.getTime() + date.getTimezoneOffset() * 60000
  const target = new Date(utc + utcOffset * 3600000)
  return target.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', hour12: false })
}

export default function TimezoneSelector() {
  const [selected, setSelected] = useState(0)
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())
    const interval = setInterval(() => setNow(new Date()), 60000)
    return () => clearInterval(interval)
  }, [])

  const country = countries[selected]
  const currentMonth = now ? now.getMonth() + 1 : 1

  const getActiveOffset = useCallback(
    (tz: CountryTz) => {
      if (tz.offsets.length === 1) return tz.offsets[0]
      return tz.offsets.find((o) => isInRange(currentMonth, o.months[0], o.months[1])) ?? tz.offsets[0]
    },
    [currentMonth]
  )

  const activeOffset = getActiveOffset(country)
  const diff = VIETNAM_OFFSET - activeOffset.value

  const localTime = now ? formatTime(now, activeOffset.value) : '--:--'
  const vietnamTime = now ? formatTime(now, VIETNAM_OFFSET) : '--:--'

  return (
    <div>
      {/* Country pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {countries.map((c, i) => (
          <button
            key={c.label}
            onClick={() => setSelected(i)}
            className="text-[11px] tracking-[0.1em] uppercase px-3 py-1.5 border transition-all duration-300 cursor-pointer"
            style={{
              background: selected === i ? 'var(--color-accent)' : 'transparent',
              color: selected === i ? 'var(--color-bg)' : 'var(--color-secondary)',
              borderColor: selected === i ? 'var(--color-accent)' : 'rgba(200,161,90,0.15)',
            }}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Clock comparison */}
      <div
        className="p-5 md:p-6"
        style={{ background: 'rgba(200,161,90,0.04)', border: '1px solid rgba(200,161,90,0.1)' }}
      >
        <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
          {/* Local clock */}
          <div className="text-center min-w-[120px]">
            <span className="block text-[10px] tracking-[0.15em] uppercase text-[var(--color-secondary)] mb-2">
              Tu hora
            </span>
            <span className="block font-mono text-2xl md:text-3xl font-bold text-[var(--color-text)]">
              {localTime}
            </span>
            <span className="block text-[10px] text-[var(--color-secondary)] mt-1 opacity-60">
              {country.label}
            </span>
          </div>

          {/* Arrow bridge */}
          <div className="flex flex-col items-center gap-1">
            <span className="text-[var(--color-accent)] font-mono text-sm font-bold">
              +{diff}h
            </span>
            <svg width="40" height="12" viewBox="0 0 40 12" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="0" y1="6" x2="34" y2="6" />
              <polyline points="30 2 36 6 30 10" />
            </svg>
          </div>

          {/* Vietnam clock */}
          <div className="text-center min-w-[120px]">
            <span className="block text-[10px] tracking-[0.15em] uppercase text-[var(--color-accent)] mb-2">
              Vietnam (GMT+7)
            </span>
            <span className="block font-mono text-2xl md:text-3xl font-bold text-[var(--color-accent)]">
              {vietnamTime}
            </span>
            <span className="block text-[10px] text-[var(--color-secondary)] mt-1 opacity-60">
              Indochina Time
            </span>
          </div>
        </div>

        {/* Seasonal note */}
        {country.offsets.length > 1 && (
          <div className="mt-4 pt-3 text-center" style={{ borderTop: '1px solid rgba(200,161,90,0.1)' }}>
            <p className="text-[11px] text-[var(--color-secondary)]">
              {country.offsets.map((o, i) => (
                <span key={o.label}>
                  {i > 0 && ' · '}
                  <span className={isInRange(currentMonth, o.months[0], o.months[1]) ? 'text-[var(--color-accent)] font-bold' : 'opacity-50'}>
                    {o.label}: +{VIETNAM_OFFSET - o.value}h
                  </span>
                </span>
              ))}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
