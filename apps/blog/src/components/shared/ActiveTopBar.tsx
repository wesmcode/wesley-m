'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { TopBar } from './TopBar'
import type { NavItem } from '@/lib/navigation'

interface ActiveTopBarProps {
  items?: NavItem[]
}

export function ActiveTopBar({ items }: ActiveTopBarProps) {
  const pathname = usePathname()
  // On a subdomain the pathname is always "/", so the live URL (origin +
  // pathname) is what tells us which nav item is current. Resolve on mount.
  const [currentUrl, setCurrentUrl] = useState<string | undefined>(undefined)

  useEffect(() => {
    setCurrentUrl(window.location.origin + window.location.pathname)
  }, [pathname])

  return <TopBar currentPath={pathname} currentUrl={currentUrl} items={items} />
}
