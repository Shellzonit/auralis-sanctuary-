// Node.js script to send daily interview reminders from Supabase
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const nodemailer = require('nodemailer');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function sendReminders() {
  const today = new Date().toISOString().slice(0, 10); // 'YYYY-MM-DD'
  // 1. Get all reminders for today that haven't been sent
  const { data: reminders, error } = await supabase
    .from('interview_reminders')
    .select('*')
    .eq('date', today)
    .eq('sent', false);
  if (error) {
    console.error('Error fetching reminders:', error);
    return;
  }
  if (!reminders.length) {
    console.log('No reminders to send today.');
    return;
  }
  // 2. Set up email transport
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  // 3. Send emails and update sent status
  for (const rem of reminders) {
    const subject = `Interview Reminder${rem.company ? ': ' + rem.company : ''}`;
    const text = `Hi!\n\nThis is your friendly reminder from Mr. Job Nanny about your job interview${rem.company ? ' at ' + rem.company : ''} today at ${rem.time}.\n\nTips:\n- Review the job description and your resume\n- Prepare answers for common interview questions\n- Dress appropriately and be on time\n- Bring questions to ask the interviewer\n- Stay positive and confident—you've got this!\n\nGood luck!\n\n-- Mr. Job Nanny`;
    try {
      await transporter.sendMail({
        from: process.env.CONTACT_EMAIL,
        to: rem.email,
        subject,
        text,
      });
      // Mark as sent
      await supabase
        .from('interview_reminders')
        .update({ sent: true })
        .eq('id', rem.id);
      console.log(`Sent reminder to ${rem.email}`);
    } catch (err) {
      console.error(`Failed to send to ${rem.email}:`, err.message);
    }
  }
}

sendReminders();
