import type { NextAuthConfig } from "next-auth"         // Type definition for NextAuth config


export default {
    providers: [],                        // Providers are added in lib/auth.ts to keep middleware small
    pages: {
        signIn: '/login',                 // Custom sign-in page path
    },

    callbacks: {
        authorized({ auth, request: { nextUrl } }) {                  // Guard logic for routes
            const isLoggedIn = !!auth?.user;
            const isAuthPage = nextUrl.pathname.startsWith('/login') ||
                nextUrl.pathname.startsWith('/register') ||
                nextUrl.pathname.startsWith('/forgot-password') ||
                nextUrl.pathname.startsWith('/reset-password');


            // If the user is logged in and tries to access auth pages, redirect to home
            if (isAuthPage) {
                if (isLoggedIn) return Response.redirect(new URL('/', nextUrl));
                return true;
            }

            return true;                   // For now, allow access to all other pages
        },
    },
} satisfies NextAuthConfig
