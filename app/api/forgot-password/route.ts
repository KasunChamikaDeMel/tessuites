
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import crypto from 'crypto';

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

        // In a real app, send email here.
        // For development, we log the link.
        const resetLink = `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/reset-password?token=${resetToken}`;
        console.log("----------------------------------------------");
        console.log("PASSWORD RESET LINK (DEV ONLY):");
        console.log(resetLink);
        console.log("----------------------------------------------");

        return NextResponse.json({ message: "Reset link sent" });

    } catch (error) {
        console.error("Forgot password error:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}
