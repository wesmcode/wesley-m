import { urls } from './urls'

export interface NavItem {
  href: string
  label: string
}

export const SITE_NAV: NavItem[] = [
  { href: urls.work, label: 'Case studies' },
  { href: urls.services, label: 'Services' },
  { href: urls.blog, label: 'Blog' },
  { href: urls.contact, label: 'Contact' },
  { href: urls.linkedin, label: 'LinkedIn' },
]

// Services-group nav (services, contact pages). FAQ points at the
// services page + anchor so it works from any page in the group. "Book a call"
// goes to the contact page, which hosts the scheduling embed.
export const SERVICES_NAV: NavItem[] = [
  { href: urls.work, label: 'Case studies' },
  { href: urls.services, label: 'Services' },
  { href: `${urls.services}#faq`, label: 'FAQ' },
  { href: urls.contact, label: 'Book a call' },
]

// Work subdomain nav. "Case studies" points at the work subdomain root.
export const WORK_NAV: NavItem[] = [
  { href: urls.work, label: 'Case studies' },
  { href: urls.services, label: 'Services' },
  { href: urls.contact, label: 'Contact' },
  { href: urls.linkedin, label: 'LinkedIn' },
]
