import { cookies } from 'next/headers';
import crypto from 'crypto';

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'password';
const SESSION_SECRET = 'chuuma-cms-secret-key-2024';

export function hashPassword(password: string): string {
  return crypto.createHash('sha256').update(password).digest('hex');
}

export async function authenticate(username: string, password: string): Promise<boolean> {
  const hashedPassword = hashPassword(password);
  return username === ADMIN_USERNAME && hashedPassword === hashPassword(ADMIN_PASSWORD);
}

export async function createSession(): Promise<string> {
  const sessionId = crypto.randomUUID();
  const cookieStore = await cookies();
  
  cookieStore.set('cms_session', sessionId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  });

  return sessionId;
}

export async function getSession(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get('cms_session')?.value || null;
}

export async function validateSession(): Promise<boolean> {
  const session = await getSession();
  return !!session;
}

export async function clearSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete('cms_session');
}
