import { encode as base64encode } from 'js-base64';
import { createHmac, randomBytes } from 'crypto';

// Fernet-like symmetric encryption (browser-safe, not full Fernet spec)
export function encryptFernet(message: string, key: string): string {
  // Simple HMAC-based encryption for demo (use a real Fernet lib for production)
  const iv = randomBytes(16).toString('base64');
  const hmac = createHmac('sha256', key).update(iv + message).digest('base64');
  const payload = base64encode(iv + '::' + message + '::' + hmac);
  return payload;
}

export function decryptFernet(payload: string, key: string): string | null {
  try {
    const decoded = Buffer.from(payload, 'base64').toString();
    const [iv, message, hmac] = decoded.split('::');
    const check = createHmac('sha256', key).update(iv + message).digest('base64');
    if (check === hmac) return message;
    return null;
  } catch {
    return null;
  }
}
