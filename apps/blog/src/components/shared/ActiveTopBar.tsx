'use client'

import { usePathname } from 'next/navigation'
import { TopBar } from './TopBar'
import type { NavItem } from '@/lib/navigation'

interface ActiveTopBarProps {
  items?: NavItem[]
}

export function ActiveTopBar({ items }: ActiveTopBarProps) {
  const pathname = usePathname()
  return <TopBar currentPath={pathname} items={items} />
}
