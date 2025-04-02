import { NextResponse } from 'next/server';

export async function POST(req) {
  return
  // Create a response to clear the 'admin' cookie and redirect
  const response = NextResponse.redirect(new URL('/login', req.url));

  // Clear the 'admin' cookie
  response.cookies.set('admin', '', {
    path: '/',
    maxAge: -1, // Set a negative value to expire the cookie immediately
  });

  return response;
}

