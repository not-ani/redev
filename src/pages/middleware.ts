import { useSession } from "next-auth/react"
import { NextRequest, NextResponse } from "next/server"

const authRequiredPaths = [
  '/profile',
]
const premiumRequiredPaths = [
  '/premium',
]
const adminRequiredPaths = [
  '/admin',
]


console.log("Middleware loaded")

export function middleware(request: NextRequest) {
  const { data: sessionData } = useSession()

  if(!sessionData) {
    console.log('No session data')
  }

  if (request.nextUrl.pathname.startsWith('/profile')) {
    
    if (!sessionData) {
      return NextResponse.rewrite('/')
    }
  }
  
}
