import { urls } from './urls'

export interface NavItem {
  href: string
  label: string
}

export const SITE_NAV: NavItem[] = [
  { href: urls.work, label: 'Case studies' },
  { href: urls.services, label: 'Services' },
  { href: urls.playground, label: 'Playground' },
  { href: urls.contact, label: 'Contact' },
  { href: urls.linkedin, label: 'LinkedIn' },
]

// Services-group nav (services, contact, about pages). FAQ and Book point at
// the services page + anchor so they work from any page in the group, not just
// from the services page itself. On the services page this is a same-document
// hash scroll; from contact it navigates to services and scrolls.
export const SERVICES_NAV: NavItem[] = [
  { href: urls.work, label: 'Case studies' },
  { href: urls.services, label: 'Services' },
  { href: `${urls.services}#faq`, label: 'FAQ' },
  { href: `${urls.services}#book`, label: 'Book a call' },
]

// Work subdomain nav. "Case studies" points at the work subdomain root.
export const WORK_NAV: NavItem[] = [
  { href: urls.work, label: 'Case studies' },
  { href: urls.services, label: 'Services' },
  { href: urls.contact, label: 'Contact' },
  { href: urls.linkedin, label: 'LinkedIn' },
]
