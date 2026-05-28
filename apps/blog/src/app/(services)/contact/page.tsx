import type { Metadata } from 'next'
import Link from 'next/link'
import { ContactForm } from '@/components/shared'

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
          <p className="contact-lede">Prefer to talk? <Link href="/services#book" className="link">Book a 30-minute call</Link>.</p>
          <p className="contact-fallback contact-fallback--side">Or email directly: <a href="#" className="link js-email-reveal">loading...</a></p>
          <p className="contact-fallback">Common questions? <Link href="/services#faq" className="link">Read the FAQ</Link>.</p>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
