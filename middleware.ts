import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // This is a basic middleware - actual auth check happens client-side
  // In production, you'd verify tokens/cookies here
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*'],
}
