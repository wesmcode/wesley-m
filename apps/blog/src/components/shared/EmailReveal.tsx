'use client'

import { useEffect } from 'react'

export function EmailReveal() {
  useEffect(() => {
    const addr = ['contato', 'wesley-m.com'].join('@')
    document.querySelectorAll<HTMLAnchorElement>('.js-email-reveal').forEach((el) => {
      el.href = `mailto:${addr}`
      el.textContent = addr
    })
  }, [])
  return null
}
