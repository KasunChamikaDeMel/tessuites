import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendPasswordResetEmail = async (email: string, token: string) => {
    const resetLink = `${domain}/reset-password?token=${token}`;

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Reset your password",
        html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; rounded: 8px;">
        <h2 style="color: #111827; font-size: 24px; font-weight: 600; margin-bottom: 16px;">Reset your password</h2>
        <p style="color: #4b5563; font-size: 16px; line-height: 24px; margin-bottom: 24px;">
          We received a request to reset your password for your account. Click the button below to set a new password. This link will expire in 1 hour.
        </p>
        <a href="${resetLink}" style="display: inline-block; background-color: #1a82e0; color: white; font-size: 16px; font-weight: 600; padding: 12px 24px; text-decoration: none; border-radius: 9999px;">
          Reset Password
        </a>
        <p style="color: #9ca3af; font-size: 14px; margin-top: 32px;">
          If you didn't request this, you can safely ignore this email.
        </p>
        <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 32px 0;" />
        <p style="color: #9ca3af; font-size: 12px; text-align: center;">
          Powered by 100Thinkers © 2025
        </p>
      </div>
    `,
    });
};
