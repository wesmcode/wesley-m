'use client'

import { useEffect, useRef } from 'react'

const INTEREST_OPTIONS = [
  'Product audit',
  'Discovery sprint',
  'OKR & roadmap reset',
  'Platform modernization',
  'AI readiness & pilot roadmap',
  'Multi-CMS / headless migration',
  'Hourly advisory',
  'Something else',
]

interface ContactFormProps {
  variant?: 'sidebar' | 'default'
  heading?: string
}

export function ContactForm({ variant = 'default', heading }: ContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const addr = ['contato', 'wesley-m.com'].join('@')

    const links = document.querySelectorAll<HTMLAnchorElement>('.js-email-reveal')
    links.forEach((el) => {
      el.href = `mailto:${addr}`
      el.textContent = addr
    })

    const form = formRef.current
    if (!form) return

    const onSubmit = (e: Event) => {
      e.preventDefault()
      const name = (form.querySelector<HTMLInputElement>('[name="name"]')?.value ?? '').trim()
      const email = (form.querySelector<HTMLInputElement>('[name="email"]')?.value ?? '').trim()
      const interest = form.querySelector<HTMLSelectElement>('[name="interest"]')?.value ?? 'Something else'
      const message = (form.querySelector<HTMLTextAreaElement>('[name="message"]')?.value ?? '').trim()

      if (!name || !email || !message) return

      const subject = interest ? `${interest} inquiry from ${name}` : `Inquiry from ${name}`
      let body = `Name: ${name}\nEmail: ${email}`
      if (interest) body += `\nInterested in: ${interest}`
      if (message) body += `\n\n${message}`

      window.location.href = `mailto:${addr}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

      const content = form.querySelector<HTMLElement>('.contact-form-content')
      const thanks = form.querySelector<HTMLElement>('.contact-thanks')
      if (content && thanks) {
        content.style.display = 'none'
        thanks.style.display = 'flex'
      }
    }

    form.addEventListener('submit', onSubmit)
    return () => form.removeEventListener('submit', onSubmit)
  }, [])

  const className = variant === 'sidebar' ? 'contact-form contact-form--sidebar' : 'contact-form'

  return (
    <form className={className} ref={formRef} noValidate>
      {heading ? <h3 className="contact-form-heading">{heading}</h3> : null}
      <div className="contact-form-content">
        <div className="contact-field">
          <label className="contact-label" htmlFor="contact-name">Name</label>
          <input className="contact-input" type="text" id="contact-name" name="name" required autoComplete="name" placeholder="Your name" />
        </div>
        <div className="contact-field">
          <label className="contact-label" htmlFor="contact-email">Email</label>
          <input className="contact-input" type="email" id="contact-email" name="email" required autoComplete="email" placeholder="you@company.com" />
        </div>
        <div className="contact-field">
          <label className="contact-label" htmlFor="contact-interest">Interested in</label>
          <select className="contact-select" id="contact-interest" name="interest">
            <option value="">Select a topic</option>
            {INTEREST_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div className="contact-field">
          <label className="contact-label" htmlFor="contact-message">How can I help?</label>
          <textarea className="contact-textarea" id="contact-message" name="message" rows={4} required placeholder="Tell me about your challenge" />
        </div>
        <button type="submit" className="cta-button contact-submit">
          <span>Send message</span>
          <span aria-hidden="true">{'→︎'}</span>
        </button>
        <p className="contact-fallback">Prefer email? <a href="#" className="link js-email-reveal">loading...</a></p>
      </div>
      <div className="contact-thanks" aria-live="polite">
        <h3 className="contact-thanks-title">Thank you.</h3>
        <p className="contact-thanks-text">{"Your email client should open with the message ready to send. If it didn't, write to "}<a href="#" className="link js-email-reveal">loading...</a> directly.</p>
      </div>
    </form>
  )
}
