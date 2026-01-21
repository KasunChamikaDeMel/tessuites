import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"                 // Bridge between NextAuth and Prisma
import Google from "next-auth/providers/google"
import MicrosoftEntraId from "next-auth/providers/microsoft-entra-id"
import Credentials from "next-auth/providers/credentials"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"                                 // password hashing
import authConfig from "@/auth.config"                // Shared base configuration


export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),                             // Connect to database
    session: { strategy: "jwt" },                    // Use JSON Web Tokens for sessions
    ...authConfig,                                         // Apply shared base config
    providers: [
        Google({                      // Google OAuth provider

            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            allowDangerousEmailAccountLinking: true,
        }),
        MicrosoftEntraId,                                // Microsoft OAuth provider
        Credentials({                                    // Email and Password provider

            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            authorize: async (credentials) => {                                // Custom validation logic

                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                const email = credentials.email as string;
                const password = credentials.password as string;

                const user = await prisma.user.findUnique({
                    where: { email },
                });

                if (!user || !user.password) {
                    return null;
                }

                const isValid = await bcrypt.compare(password, user.password);        // Compare provided password with hashed password in DB

                if (!isValid) {
                    return null;
                }
                return user;
            }
        })
    ],
})
