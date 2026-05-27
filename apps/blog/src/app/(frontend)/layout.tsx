import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { SkipLink } from '@/components/shared'
import '@/styles/globals.css'
import './styles.css'

export const metadata: Metadata = {
  title: 'Direction Challenge — Wesley Melo',
  description:
    'Notes and essays from Wesley Melo on product management, AI/ML, and shipping software.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'),
  robots: 'noai, noimageai, noarchive, nosnippet',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Direction Challenge — Wesley Melo',
    description:
      'Notes and essays from Wesley Melo on product management, AI/ML, and shipping software.',
    type: 'website',
  },
}

export default function FrontendLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SkipLink />
        {children}
      </body>
    </html>
  )
}
