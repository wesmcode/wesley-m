import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { SkipLink, TopBar, Footer } from '@/components/shared'
import { SERVICES_NAV } from '@/lib/navigation'
import '@/styles/globals.css'
import './playground.css'

export const metadata: Metadata = {
  title: 'Playground: Wesley Melo',
  description: 'Small apps, experiments, and tools built for fun. A personal sandbox for ideas that don\'t need a business case.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'),
  icons: { icon: '/favicon.svg' },
  robots: 'noai, noimageai, noarchive, nosnippet',
  alternates: { canonical: '/playground' },
}

export default function PlaygroundLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SkipLink />
        <TopBar currentPath="/playground" items={SERVICES_NAV} />
        <div className="page">
          <main id="main-content">{children}</main>
        </div>
        <Footer variant="minimal" wrapperClass="page" />
      </body>
    </html>
  )
}
