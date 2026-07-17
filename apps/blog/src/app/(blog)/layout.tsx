import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { SkipLink, ActiveTopBar } from '@/components/shared'
import { urls } from '@/lib/urls'
import '@/styles/globals.css'
import './blog.css'

export const metadata: Metadata = {
  title: 'Blog: Wesley Melo',
  description:
    'Working notes from Wesley Melo on digital transformation, platform modernization, growth strategy, and AI applied to B2B and B2C products.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'),
  icons: { icon: '/favicon.svg' },
  robots: 'noai, noimageai',
  alternates: { canonical: urls.blog },
}

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SkipLink />
        <ActiveTopBar />
        {children}
      </body>
    </html>
  )
}
