import crypto from 'crypto';
import { Buffer } from 'buffer';

// Fernet-like symmetric decryption (matches browser-side logic)
export function decryptFernet(payload, key) {
  try {
    const decoded = Buffer.from(payload, 'base64').toString();
    const [iv, message, hmac] = decoded.split('::');
    const check = crypto.createHmac('sha256', key).update(iv + message).digest('base64');
    if (check === hmac) return message;
    return null;
  } catch {
    return null;
  }
}
