
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

        if (!existingUser) {                // Return OK even if user doesn't exist for security
            return NextResponse.json({ message: "Reset link sent" });
        }

        const resetToken = crypto.randomBytes(32).toString('hex');          // Generate token
        const tokenExpiry = new Date(Date.now() + 3600 * 1000);

        await prisma.passwordResetToken.create({
            data: {
                email,
                token: resetToken,
                expires: tokenExpiry
            }
        });

        try {
            await sendPasswordResetEmail(email, resetToken);
        } catch (mailError) {
            console.error("Failed to send reset email:", mailError);
        }

        return NextResponse.json({ message: "Reset link sent" });

    } catch (error) {
        console.error("Forgot password error:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}
