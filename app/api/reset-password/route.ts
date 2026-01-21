
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
    try {
        const { token, password } = await req.json();
        if (!token || !password) {
            return NextResponse.json({ error: "Missing token or password" }, { status: 400 });
        }

        const resetToken = await prisma.passwordResetToken.findUnique({         // Look up the token in the database
            where: { token }
        });
        if (!resetToken) {
            return NextResponse.json({ error: "Invalid token" }, { status: 400 });
        }
        if (resetToken.expires < new Date()) {
            return NextResponse.json({ error: "Token expired" }, { status: 400 });       // after 1hr
        }

        const hashedPassword = await bcrypt.hash(password, 10);           // encrypt new password
        await prisma.user.update({                                        // Update database
            where: { email: resetToken.email },
            data: { password: hashedPassword }
        });

        await prisma.passwordResetToken.delete({                // Delete token (one time use)
            where: { id: resetToken.id }
        });
        return NextResponse.json({ message: "Password updated successfully" });

    } catch (error) {
        console.error("Reset password error:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}
