import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const SUBDOMAIN_ROUTES: Record<string, string> = {
  services: '/services',
  contact: '/contact',
  resume: '/resume',
  work: '/work',
  blog: '/blog',
}

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const { pathname } = request.nextUrl

  // Extract subdomain: "services.wesley-m.com" -> "services"
  // Also handle "services.localhost:3000" for local dev
  const parts = hostname.split('.')
  let subdomain = ''

  if (hostname.includes('localhost') || hostname.includes('127.0.0.1')) {
    // Local dev: services.localhost:3000
    if (parts.length > 1 && parts[0] !== 'localhost' && parts[0] !== 'www') {
      subdomain = parts[0]
    }
  } else {
    // Production: services.wesley-m.com (3 parts) or services.wesley-m.vercel.app (4 parts)
    if (parts.length > 2 && parts[0] !== 'www') {
      subdomain = parts[0]
    }
  }

  if (!subdomain || !SUBDOMAIN_ROUTES[subdomain]) {
    return NextResponse.next()
  }

  const targetPath = SUBDOMAIN_ROUTES[subdomain]

  // If user is at subdomain root, rewrite to the target route
  if (pathname === '/') {
    const url = request.nextUrl.clone()
    url.pathname = targetPath
    return NextResponse.rewrite(url)
  }

  // If user navigates within the subdomain (e.g. work.wesley-m.com/enterprise-ai-platform-launch)
  // rewrite to /work/enterprise-ai-platform-launch
  if (targetPath === '/work' || targetPath === '/blog') {
    const url = request.nextUrl.clone()
    url.pathname = targetPath + pathname
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except static files and api
    '/((?!_next/static|_next/image|favicon\\.svg|images|css|js|resume/.*\\.pdf|api|admin).*)',
  ],
}
