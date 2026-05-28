export interface NavItem {
  href: string
  label: string
}

export const SITE_NAV: NavItem[] = [
  { href: '/work', label: 'Case studies' },
  { href: '/services', label: 'Services' },
  { href: '/playground', label: 'Playground' },
  { href: '/contact', label: 'Contact' },
  { href: 'https://linkedin.com/in/wesmelo', label: 'LinkedIn' },
]

export const SERVICES_NAV: NavItem[] = [
  { href: '/', label: 'About' },
  { href: '/work', label: 'Case studies' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]
