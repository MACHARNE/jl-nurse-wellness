export const SITE_AUTH_COOKIE = 'jl_site_auth';

const FALLBACK_CREDENTIAL_HASH =
  'dd0a340e0c2cea67b5eb80eb2a90d697c56bf9212b67d8cedb19b146fffc4f5c';

const encoder = new TextEncoder();

function getCredentialHash() {
  return process.env.SITE_PASSWORD_HASH || FALLBACK_CREDENTIAL_HASH;
}

function getSessionSecret() {
  return process.env.SITE_AUTH_SECRET || getCredentialHash();
}

function toHex(buffer: ArrayBuffer) {
  return Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

async function sha256(value: string) {
  const digest = await crypto.subtle.digest('SHA-256', encoder.encode(value));
  return toHex(digest);
}

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export async function credentialsAreValid(email: string, password: string) {
  const hash = await sha256(`${normalizeEmail(email)}:${password}`);
  return hash === getCredentialHash();
}

export async function createSiteSessionValue() {
  return sha256(`jl-nurse-wellness:${getSessionSecret()}`);
}

export async function siteSessionIsValid(value?: string) {
  if (!value) {
    return false;
  }

  return value === (await createSiteSessionValue());
}

export function sanitizeNextPath(value: string | null) {
  if (!value || !value.startsWith('/') || value.startsWith('//')) {
    return '/';
  }

  if (value.startsWith('/site-login') || value.startsWith('/api/site-login')) {
    return '/';
  }

  return value;
}
