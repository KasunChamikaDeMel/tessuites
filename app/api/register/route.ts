
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";               // for encrypted password

export async function POST(req: Request) {
    try {
        const { email, password, name } = await req.json();            // Parse request

        if (!email || !password) {                                     // validate
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const existingUser = await prisma.user.findUnique({            // Check if email already exists
            where: { email }
        });

        if (existingUser) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);             // password protection (cost factor 10)

        const user = await prisma.user.create({ data: { email, name, password: hashedPassword } });     // for new user row

        const { password: _, ...userWithoutPassword } = user;                 // remove password from return response
        return NextResponse.json(userWithoutPassword);

    } catch (error) {
        console.error("Registration error:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}
