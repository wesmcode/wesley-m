import type { Metadata } from 'next'
import { CalEmbed, ContactForm } from '@/components/shared'
import { urls } from '@/lib/urls'

export const metadata: Metadata = {
  title: 'Contact: Wesley Melo',
  description: 'Get in touch with Wesley Melo. Tell me about your product, AI, or platform challenge. I reply within 24 hours.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <section className="contact-hero" aria-label="Contact">
      <div className="contact-grid">
        <div className="contact-text">
          <p className="section-label">Contact</p>
          <h1 className="section-title">Get in<br />touch</h1>
          <p className="contact-lede">Tell me about the problem. Product, AI, platform, growth. I reply within 24 hours.</p>
          <p className="contact-lede">Prefer to talk? <a href="#book" className="link">Book a 30-minute call</a> below.</p>
          <p className="contact-fallback">Common questions? <a href={`${urls.services}#faq`} className="link">Read the FAQ</a>.</p>
        </div>
        <ContactForm />
      </div>
      <div className="contact-booking" id="book">
        <CalEmbed hideEventTypeDetails={false} />
      </div>
    </section>
  )
}
