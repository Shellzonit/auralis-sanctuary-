// API route to send interview reminder emails
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { email, date, time, company } = req.body;
  if (!email || !date || !time) return res.status(400).json({ error: 'Missing required fields' });

  // Compose reminder message
  const subject = `Interview Reminder: ${company ? company + ' - ' : ''}${date} at ${time}`;
  const text = `Hi!

This is your friendly reminder from Mr. Job Nanny about your upcoming job interview${company ? ' at ' + company : ''} on ${date} at ${time}.

Tips for today:
- Review the job description and your resume
- Prepare answers for common interview questions
- Dress appropriately and be on time
- Bring questions to ask the interviewer
- Stay positive and confident—you've got this!

Good luck!

-- Mr. Job Nanny`;

  // Send email
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    await transporter.sendMail({
      from: process.env.CONTACT_EMAIL,
      to: email,
      subject,
      text,
    });
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send email', details: err.message });
  }
}
