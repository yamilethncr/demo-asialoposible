'use client'

const BASE_CLASSES =
  'inline-block px-8 py-4 text-sm uppercase tracking-[0.1em] font-bold no-underline transition-all duration-500 hover:shadow-[0_0_20px_rgba(200,161,90,0.4)] cursor-pointer text-center'

const VARIANT_CLASSES = {
  primary:
    'border border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-bg)] hover:bg-transparent hover:text-[var(--color-accent)]',
  outline:
    'border border-[var(--color-accent)] bg-transparent text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)]',
} as const

type Props = {
  className?: string
  label?: string
  variant?: 'primary' | 'outline'
  onClick?: () => void
}

export default function ChatwootButton({
  className = '',
  label = 'HABLA CON KATHERINE',
  variant = 'primary',
  onClick,
}: Props) {
  const handleClick = () => {
    onClick?.()
    const win = window as unknown as { $chatwoot?: { toggle: (state: 'open' | 'close') => void } }
    if (win.$chatwoot) {
      win.$chatwoot.toggle('open')
    } else {
      window.location.href = 'https://wa.me/84934949756'
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {label}
    </button>
  )
}
