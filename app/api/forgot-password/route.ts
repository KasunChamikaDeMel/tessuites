
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import crypto from 'crypto';
import { sendPasswordResetEmail } from "@/lib/mail";

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        // We return OK even if user doesn't exist for security (prevent enumeration)
        if (!existingUser) {
            return NextResponse.json({ message: "Reset link sent" });
        }

        // Generate token
        const resetToken = crypto.randomBytes(32).toString('hex');
        const tokenExpiry = new Date(Date.now() + 3600 * 1000); // 1 hour

        await prisma.passwordResetToken.create({
            data: {
                email,
                token: resetToken,
                expires: tokenExpiry
            }
        });

        // Send real email using Resend
        try {
            await sendPasswordResetEmail(email, resetToken);
        } catch (mailError) {
            console.error("Failed to send reset email:", mailError);
            // We still return success to the user for security, 
            // but we log the error internally.
        }

        return NextResponse.json({ message: "Reset link sent" });

    } catch (error) {
        console.error("Forgot password error:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}
