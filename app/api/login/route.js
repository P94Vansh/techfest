// app/api/login/route.js

import { NextResponse } from 'next/server';
// import {secrets} from "../../../lib/hlpr"

export async function POST(request) {
  // Define the correct admin password
  const ADMIN_PASSWORD = process.env.ADMIN_KEY || 'admin-key'//secrets['ADMIN_KEY'];

  // Parse the request body
  const body = await request.json();
  const { password } = body;

  // Check if the provided password matches the correct admin password
  if (password === ADMIN_PASSWORD) {
    // Set the 'admin' cookie with the password value
    const response = NextResponse.json({ success: true });
    response.cookies.set('admin', ADMIN_PASSWORD, { 
      httpOnly: true, 
      secure: true,//process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 86400
    });
    return response;
  }

  // If the password is incorrect, return a 401 Unauthorized response
  return NextResponse.json({ success: false, message: 'Invalid password' }, { status: 401 });
}
