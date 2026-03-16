declare global {
  interface Window {
    fbq: any
  }
}

export function trackEvent(event: string, data?: Record<string, any>) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', event, data)
  }
}
