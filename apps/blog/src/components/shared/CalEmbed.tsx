'use client'

import { useEffect } from 'react'

export function CalEmbed() {
  useEffect(() => {
    const w = window as unknown as Record<string, unknown>
    const init = () => {
      const Cal = w.Cal as ((...args: unknown[]) => void) & { ns?: Record<string, (...args: unknown[]) => void> }
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
      init()
      return
    }

    const script = document.createElement('script')
    script.src = 'https://app.cal.com/embed/embed.js'
    script.async = true
    script.onload = () => {
      const check = () => {
        if (w.Cal) { init(); return }
        setTimeout(check, 50)
      }
      check()
    }
    document.head.appendChild(script)

    return () => { script.remove() }
  }, [])

  return (
    <div className="booking-embed">
      <div style={{ width: '100%', height: '100%', overflow: 'scroll' }} id="my-cal-inline-30wes" />
    </div>
  )
}
