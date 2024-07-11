import nodemailer from 'nodemailer';

// Define TypeScript types for email form data
export interface EmailFormData {
  name: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
}

// Function to send email using Nodemailer
const sendEmail = async (formData: EmailFormData) => {
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
    from: formData.email,
    to: 'recipient@example.com', // Email address where you want to receive emails
    subject: formData.subject,
    text: `
      From: ${formData.name} <${formData.email}>
      Phone Number: ${formData.phone}
      Message: ${formData.message}
    `,
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
};

export default sendEmail;
