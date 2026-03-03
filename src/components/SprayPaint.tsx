'use client'

import { useEffect, useRef } from 'react'

interface SprayPaintProps {
  className?: string
  style?: React.CSSProperties
  shape?: 'blob1' | 'blob2' | 'circle'
}

const paths = {
  blob1: 'M44.5,-76.3C58.9,-69.3,71.9,-59.1,80.6,-46.8C89.3,-34.5,93.6,-20.1,91.8,-6.4C89.9,7.3,81.9,20.3,72.6,31.7C63.3,43.1,52.7,52.9,41.1,60.6C29.5,68.3,16.9,73.9,3.6,71.8C-9.7,69.7,-23.7,59.9,-37.2,50.7C-50.7,41.5,-63.7,32.9,-72.4,20.9C-81.1,8.9,-85.5,-6.5,-80.7,-19.4C-75.9,-32.3,-61.9,-42.7,-48.6,-50.3C-35.3,-57.9,-22.7,-62.7,-9.4,-61.2C3.9,-59.7,21.5,-74.6,30.1,-83.3L44.5,-76.3Z',
  blob2: 'M41.8,-71.4C54.4,-65.3,65.3,-56.3,73.6,-45.5C81.9,-34.7,87.6,-22.1,86.6,-9.9C85.6,2.3,77.9,14.1,69.5,25.3C61.1,36.5,52,47.1,41.2,55.4C30.4,63.7,17.9,69.7,4.8,71.3C-8.3,72.9,-22,70.1,-34.5,63.6C-47,57.1,-58.3,46.9,-66.4,34.8C-74.5,22.7,-79.4,8.7,-77.9,-4.6C-76.4,-17.9,-68.5,-30.5,-58.5,-40.4C-48.5,-50.3,-36.4,-57.5,-23.9,-63.7C-11.4,-69.9,1.5,-75.1,13.6,-74.6C25.7,-74.1,37,-67.9,41.8,-71.4Z',
  circle: '',
}

export default function SprayPaint({ className = '', style, shape = 'blob1' }: SprayPaintProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current) return
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      const speed = 15
      ref.current.style.transform = `translate(-${x * speed}px, -${y * speed}px)`
    }
    document.addEventListener('mousemove', handler)
    return () => document.removeEventListener('mousemove', handler)
  }, [])

  return (
    <div
      ref={ref}
      className={`absolute pointer-events-none mix-blend-screen ${className}`}
      style={{
        filter: 'blur(50px)',
        opacity: 0.2,
        zIndex: 1,
        ...style,
      }}
    >
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        {shape === 'circle' ? (
          <circle cx="100" cy="100" r="80" fill="var(--color-accent)" />
        ) : (
          <path
            d={paths[shape]}
            transform="translate(100 100)"
            fill="var(--color-accent)"
          />
        )}
      </svg>
    </div>
  )
}
