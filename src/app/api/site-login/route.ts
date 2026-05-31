import { NextRequest, NextResponse } from 'next/server';
import {
  createSiteSessionValue,
  credentialsAreValid,
  sanitizeNextPath,
  SITE_AUTH_COOKIE,
} from '@/lib/site-auth';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const email = String(formData.get('email') || '');
  const password = String(formData.get('password') || '');
  const nextPath = sanitizeNextPath(String(formData.get('next') || '/'));

  if (!(await credentialsAreValid(email, password))) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = '/site-login';
    loginUrl.searchParams.set('error', '1');
    loginUrl.searchParams.set('next', nextPath);
    return NextResponse.redirect(loginUrl, 303);
  }

  const response = NextResponse.redirect(new URL(nextPath, request.url), 303);
  response.cookies.set(SITE_AUTH_COOKIE, await createSiteSessionValue(), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}
