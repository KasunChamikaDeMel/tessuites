import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import crypto from 'crypto';
import { sendPasswordResetEmail } from "@/lib/mail";

export async function POST(req: Request) {                  // defineAPI endpoint
    try {
        const { email } = await req.json();                // for extracting email


        if (!email) {                                      // avoid empty request
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        const existingUser = await prisma.user.findUnique({      // check existance
            where: { email }
        });


        if (!existingUser) {                                                // Return OK even if user doesn't exist for security
            return NextResponse.json({ message: "Reset link sent" });
        }

        const resetToken = crypto.randomBytes(32).toString('hex');          // Generate random token
        const tokenExpiry = new Date(Date.now() + 3600 * 1000);              // expire in 1hr

        await prisma.passwordResetToken.create({                              // reset after finish the request
            data: {
                email,
                token: resetToken,
                expires: tokenExpiry
            }
        });

        try {
            await sendPasswordResetEmail(email, resetToken);              // send reset email
        } catch (mailError) {
            console.error("Failed to send reset email:", mailError);
        }

        return NextResponse.json({ message: "Reset link sent" });           // success

    } catch (error) {
        console.error("Forgot password error:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}
