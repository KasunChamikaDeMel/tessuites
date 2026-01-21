import NextAuth from "next-auth"                // Core library
import authConfig from "./auth.config"          // Minimal config for edge runtime


const { auth } = NextAuth(authConfig)          // Initialize NextAuth auth helper


export default auth

export const config = {                        // Define which routes the middleware should run on
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],

}
