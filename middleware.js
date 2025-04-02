// middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  const ADMIN_PASSWORD = process.env.ADMIN_KEY || 'admin-key'; // Admin password
  const { pathname } = req.nextUrl;
  const method = req.method

  const protectedPaths = ['/api/registration', '/dashboard'];
  if (protectedPaths.some(path => pathname.startsWith(path)) && ['GET', 'DELETE'].includes(method)) {
    const adminCookie = req.cookies.get('admin');
    // Redirect to login if the admin cookie is not set or the password doesn't match
    console.log({cookie:adminCookie})
    if (!adminCookie || adminCookie.value !== ADMIN_PASSWORD) {
      console.log("redirecting")
      if(pathname.startsWith("/dashboard")) return NextResponse.redirect(new URL('/login', req.url));
      return NextResponse.json({ message: 'Unauthorized access' }, { status: 401 });
    }
  }
  console.log(pathname, "allowed")
  // Allow access if the password matches
  return NextResponse.next();
}

// Apply the middleware to API routes and the dashboard route
export const config = {
  matcher: ['/api/registration/', '/dashboard'],
};
