import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { SkipLink, TopBar } from '@/components/shared'
import { SERVICES_NAV } from '@/lib/navigation'
import '@/styles/globals.css'
import '../(services)/services.css'
import './work.css'

export const metadata: Metadata = {
  title: 'Case studies: Wesley Melo',
  description:
    'Seven cases. Each one: find the business bottleneck hiding behind the product problem, turn it into a system, ship it. AI productization, platform retention, CMS modernization, growth systems.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'),
  robots: 'noai, noimageai, noarchive, nosnippet',
  alternates: { canonical: '/work' },
  openGraph: {
    title: 'Case studies: Wesley Melo',
    description:
      'Seven cases. Each one: find the business bottleneck hiding behind the product problem, turn it into a system, ship it.',
    type: 'website',
  },
}

export default function WorkLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SkipLink />
        <TopBar currentPath="/work" items={SERVICES_NAV} />
        <div className="page">
          <main id="main-content">{children}</main>
        </div>
      </body>
    </html>
  )
}
