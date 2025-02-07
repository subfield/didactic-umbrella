import nodemailer from "nodemailer";
import crypto from "crypto";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to generate a 6-digit code
function generateCode(): string {
  return crypto.randomInt(100000, 999999).toString();
}

// ✅ Send Verification Code Email
export async function sendVerificationEmail(email: string, name: string, code: string) {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your Email Verification Code",
      html: `
        <h1>Welcome, ${name}!</h1>
        <p>Your verification code is:</p>
        <h2>${code}</h2>
        <p>Enter this code on the verification page to confirm your email.</p>
      `,
    };
    
    await transporter.sendMail(mailOptions);
    console.log(`Verification code sent to ${email}`);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

// ✅ Send Password Reset Code Email
export async function sendPasswordResetEmail(email: string, code: string) {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Reset Your Password",
      html: `
        <h1>Reset Your Password</h1>
        <p>Use the following code to reset your password:</p>
        <h2>${code}</h2>
        <p>If you did not request this, please ignore this email.</p>
      `,
    };
    
    await transporter.sendMail(mailOptions);
    console.log(`Password reset code sent to ${email}`);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
