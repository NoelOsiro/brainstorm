import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, subject, phone, message } = req.body;

  // Create a Nodemailer transporter using SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.example.com', // Your SMTP host
    port: 587, // Your SMTP port
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'your_email@example.com', // Your email address
      pass: 'your_password', // Your email password (for testing purposes, consider using environment variables)
    },
  });

  // Email content
  let mailOptions = {
    from: email,
    to: 'recipient@example.com', // Email address where you want to receive emails
    subject: subject,
    text: `
      From: ${name} <${email}>
      Phone Number: ${phone}
      Message: ${message}
    `,
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
}

export default sendEmail;
