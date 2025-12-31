
import nodemailer from 'nodemailer';
import { decryptFernet } from '../../lib/fernetNode';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { encrypted } = req.body;
  if (!encrypted) {
    return res.status(400).json({ error: 'Missing encrypted payload' });
  }
  const key = process.env.NEXT_PUBLIC_FERNET_KEY || '';
  const decrypted = decryptFernet(encrypted, key);
  if (!decrypted) {
    return res.status(400).json({ error: 'Failed to decrypt message' });
  }
  let name, email, message;
  try {
    ({ name, email, message } = JSON.parse(decrypted));
  } catch {
    return res.status(400).json({ error: 'Invalid decrypted payload' });
  }

  // Configure your SMTP or email service here
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `Sanctuary Contact <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });
    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
