import "server-only";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function sendPasswordResetEmail(to: string, resetUrl: string) {
  if (!resend) {
    // No RESEND_API_KEY configured (e.g. local dev) - log the link instead
    // of failing, so the flow is still testable without a real inbox.
    console.log(`[email] Password reset link for ${to}: ${resetUrl}`);
    return;
  }

  await resend.emails.send({
    from: process.env.EMAIL_FROM ?? "What to cook <onboarding@resend.dev>",
    to,
    subject: "Reset your password",
    html: `
      <p>Someone requested a password reset for your What to cook account.</p>
      <p><a href="${resetUrl}">Click here to choose a new password</a>. This link expires in 1 hour.</p>
      <p>If you didn't request this, you can safely ignore this email.</p>
    `,
  });
}
