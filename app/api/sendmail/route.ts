
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, subject, phone, message } = await req.json();

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
    return NextResponse.json({ success: true,status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    NextResponse.json({ success: false, error: 'Failed to send email', status: 500});
  }
}


