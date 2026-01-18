
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
    try {
        const { email, password, name } = await req.json();            // Parse request

        if (!email || !password) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const existingUser = await prisma.user.findUnique({            // Check if email already exists
            where: { email }
        });

        if (existingUser) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        // Securely hash before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Store the new user in the database
        const user = await prisma.user.create({ data: { email, name, password: hashedPassword } });

        const { password: _, ...userWithoutPassword } = user;

        return NextResponse.json(userWithoutPassword);

    } catch (error) {
        console.error("Registration error:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}
