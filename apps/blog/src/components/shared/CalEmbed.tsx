'use client'

import Cal, { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'

interface CalEmbedProps {
  // Services hides the event-type details for a tighter scheduler; contact
  // shows them so first-time visitors see what they are booking.
  hideEventTypeDetails?: boolean
}

export function CalEmbed({ hideEventTypeDetails = true }: CalEmbedProps) {
  useEffect(() => {
    ;(async () => {
      const cal = await getCalApi({ namespace: '30wes' })
      cal('ui', { theme: 'dark', hideEventTypeDetails, layout: 'month_view' })
    })()
  }, [hideEventTypeDetails])

  return (
    <div className="booking-embed">
      <Cal
        namespace="30wes"
        calLink="wesley-m/30wes"
        style={{ width: '100%', height: '100%', minHeight: 600, overflow: 'scroll' }}
        config={{ layout: 'month_view', useSlotsViewOnSmallScreen: 'true', theme: 'dark' }}
      />
    </div>
  )
}
