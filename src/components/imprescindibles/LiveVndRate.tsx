'use client'

import { useEffect, useState } from 'react'

interface RateData {
  rate: number
  lastUpdate: string
}

export default function LiveVndRate() {
  const [data, setData] = useState<RateData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('https://open.er-api.com/v6/latest/USD')
      .then((res) => res.json())
      .then((json) => {
        if (json.result === 'success' && json.rates?.VND) {
          setData({
            rate: json.rates.VND,
            lastUpdate: json.time_last_update_utc,
          })
        } else {
          setError(true)
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  const formattedRate = data
    ? new Intl.NumberFormat('de-DE', { maximumFractionDigits: 0 }).format(data.rate)
    : '25.000'

  const formattedDate = data?.lastUpdate
    ? new Date(data.lastUpdate).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
    : null

  if (loading) {
    return (
      <span className="animate-pulse">
        Dong (VND). 1 USD &asymp; 25.000 VND
      </span>
    )
  }

  if (error || !data) {
    return <span>Dong (VND). 1 USD &asymp; 25.000 VND</span>
  }

  return (
    <span>
      Dong (VND). 1 USD &asymp;{' '}
      <span className="font-mono font-bold text-[var(--color-text)]">
        {formattedRate} VND
      </span>
      <span className="inline-flex items-center gap-1.5 ms-2">
        <span
          className="inline-block w-1.5 h-1.5 rounded-full"
          style={{ background: '#22c55e' }}
        />
        <span className="text-[11px] text-[var(--color-secondary)] opacity-60">
          Actualizado: {formattedDate}
        </span>
      </span>
    </span>
  )
}
