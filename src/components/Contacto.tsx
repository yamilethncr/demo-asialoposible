import ContactForm from './ContactForm'

/**
 * Sección de contacto del home. El formulario muerto del demo se sustituye por
 * el ContactForm real (POST /api/leads/form → Notion + Resend + n8n WhatsApp).
 * Se conserva el WhatsApp directo como CTA secundario.
 */
export default function Contacto() {
  return (
    <section className="section" id="contacto">
      <div className="container contact-wrap">
        <div className="reveal">
          <p className="eyebrow">Hablemos</p>
          <h2 className="h2">¿Listos para tu viaje a Asia?</h2>
          <p className="lead">
            Cuéntame qué sueñas y te respondo personalmente — normalmente en menos de 24 horas.
          </p>
          <div className="contact-list">
            <a href="https://wa.me/84934949756" target="_blank" rel="noopener">
              <span className="ico">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.207z" />
                </svg>
              </span>
              <span>
                <b>WhatsApp</b>
                <br />
                <small style={{ color: 'var(--color-secondary)' }}>+84 934 949 756</small>
              </span>
            </a>
            <a href="https://instagram.com/kathmolinares" target="_blank" rel="noopener">
              <span className="ico">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.43-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.68a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.16a4 4 0 110-8 4 4 0 010 8zm6.41-10.4a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </span>
              <span>
                <b>Instagram</b>
                <br />
                <small style={{ color: 'var(--color-secondary)' }}>@kathmolinares</small>
              </span>
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
