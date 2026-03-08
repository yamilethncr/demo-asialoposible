export default function SafetyWingCallout() {
  return (
    <div
      className="mt-4 p-5 md:p-6"
      style={{
        border: '1px solid rgba(212,168,83,0.3)',
        background: 'rgba(212,168,83,0.06)',
      }}
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0 mt-0.5">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2L4 7v7c0 6.5 4.2 12.1 10 14 5.8-1.9 10-7.5 10-14V7L14 2z" />
            <path d="M10 14l3 3 5-6" />
          </svg>
        </div>
        <div className="flex-1">
          <span className="block text-[10px] tracking-[0.15em] uppercase font-bold text-[var(--color-accent)] mb-2">
            Seguro Recomendado
          </span>
          <p className="text-[0.85rem] leading-relaxed text-[var(--color-secondary)] mb-4">
            Recomendamos <strong className="text-[var(--color-text)]">SafetyWing Nomad Insurance</strong> — un seguro de viaje y salud diseñado para nómadas y viajeros. Cubre emergencias médicas, evacuación, pérdida de equipaje y más, con un proceso 100% online y precios accesibles.
          </p>
          <a
            href="https://safetywing.com/nomad-insurance?referenceID=24982814&utm_source=24982814&utm_medium=costam&utm_campaign=nomad-insurance"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 text-[11px] tracking-[0.1em] uppercase font-bold no-underline transition-all duration-300"
            style={{
              background: 'var(--color-accent)',
              color: 'var(--color-bg)',
              borderRadius: '100px',
            }}
          >
            Ver SafetyWing Nomad Insurance
          </a>
        </div>
      </div>
    </div>
  )
}
