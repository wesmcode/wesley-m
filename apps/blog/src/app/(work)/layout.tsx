import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { SkipLink, ActiveTopBar, Footer } from '@/components/shared'
import { WORK_NAV } from '@/lib/navigation'
import { urls } from '@/lib/urls'
import '@/styles/globals.css'
import './work.css'
import './case.css'

export const metadata: Metadata = {
  title: 'Case studies: Wesley Melo',
  description:
    'Seven case studies from Wesley Melo: AI productization, platform retention, CMS modernization, and growth systems, each built around the business bottleneck hiding behind the product problem.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'),
  icons: { icon: '/favicon.svg' },
  robots: 'noai, noimageai',
  alternates: { canonical: urls.work },
}

export default function WorkLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SkipLink />
        <ActiveTopBar items={WORK_NAV} />
        {children}
      </body>
    </html>
  )
}
