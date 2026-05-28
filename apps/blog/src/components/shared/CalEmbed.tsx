'use client'

import { useEffect, useRef } from 'react'

export function CalEmbed() {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    const w = window as unknown as Record<string, unknown>

    const setup = () => {
      const Cal = w.Cal as ((...args: unknown[]) => void) & {
        ns?: Record<string, ((...args: unknown[]) => void)>
      }
      if (!Cal) return

      Cal('init', '30wes', { origin: 'https://app.cal.com' })

      Cal.ns?.['30wes']?.('inline', {
        elementOrSelector: '#my-cal-inline-30wes',
        config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true', theme: 'dark' },
        calLink: 'wesley-m/30wes',
      })

      Cal.ns?.['30wes']?.('ui', {
        theme: 'dark',
        cssVarsPerTheme: { light: { 'cal-brand': '#000000' } },
        hideEventTypeDetails: true,
        layout: 'month_view',
      })
    }

    if (w.Cal) {
      setup()
      return
    }

    const script = document.createElement('script')
    script.src = 'https://app.cal.com/embed/embed.js'
    script.async = true
    script.onload = () => {
      const poll = setInterval(() => {
        if (w.Cal) { clearInterval(poll); setup() }
      }, 50)
      setTimeout(() => clearInterval(poll), 10000)
    }
    document.head.appendChild(script)
  }, [])

  return (
    <div className="booking-embed">
      <div
        id="my-cal-inline-30wes"
        style={{ width: '100%', minHeight: 600, overflow: 'scroll' }}
      />
    </div>
  )
}
