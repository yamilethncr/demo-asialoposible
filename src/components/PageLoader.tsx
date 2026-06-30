'use client'

import { useState, useEffect } from 'react'

export default function PageLoader() {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 1200)
    const removeTimer = setTimeout(() => setVisible(false), 1800)
    return () => {
      clearTimeout(timer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{
        backgroundColor: '#1E1E1E',
        opacity: fadeOut ? 0 : 1,
        transform: fadeOut ? 'scale(1.05)' : 'scale(1)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
        pointerEvents: fadeOut ? 'none' : 'auto',
      }}
    >
      <div className="relative flex items-center justify-center">
        {/* Rotating gold ring */}
        <div
          className="absolute"
          style={{
            width: '180px',
            height: '180px',
            border: '1px solid #C8A15A',
            borderRadius: '50%',
            borderTopColor: 'transparent',
            animation: 'pageloader-spin 1.4s linear infinite',
          }}
        />
        {/* Second ring, slightly larger, counter-rotating */}
        <div
          className="absolute"
          style={{
            width: '200px',
            height: '200px',
            border: '1px solid rgba(200, 161, 90, 0.3)',
            borderRadius: '50%',
            borderBottomColor: 'transparent',
            animation: 'pageloader-spin-reverse 2s linear infinite',
          }}
        />
        {/* Brand text */}
        <span
          style={{
            color: '#C8A15A',
            fontSize: '14px',
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontFamily: 'var(--ff-body), Helvetica Neue, sans-serif',
          }}
        >
          Asia Lo Posible
        </span>
      </div>
    </div>
  )
}
