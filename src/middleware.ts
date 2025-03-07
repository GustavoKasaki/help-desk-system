import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const middleware = (req: NextRequest) => {
  const token = req.cookies.get('auth_token')?.value // Get cookies token

  const isAuthRoute = req.nextUrl.pathname.startsWith('/login')
  const isProtectedRoute = req.nextUrl.pathname.startsWith('/dashboard')

  // If user try access the dashboard without being logged in, redirects to login page
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  // If user already authenticated and try access the login page, redirects to dashboard
  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  return NextResponse.next() // Allow normal navigation
}
