export default function Loading() {
  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-center"
      style={{ background: 'var(--color-bg, #1E1E1E)' }}
    >
      <div
        role="status"
        aria-label="Cargando"
        className="text-2xl md:text-4xl font-bold uppercase tracking-[0.1em] mb-4 upper-serif"
        style={{ color: 'var(--color-accent, #C8A15A)' }}
      >
        ASIA LO POSIBLE
      </div>
      <div
        className="w-16 h-px animate-pulse"
        style={{ background: 'var(--color-accent, #C8A15A)' }}
      />
    </div>
  )
}
