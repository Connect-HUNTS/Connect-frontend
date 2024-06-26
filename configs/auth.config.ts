import type { NextAuthConfig } from "next-auth"

export const privateRoutes = [
    "/investors",
    "/startups",
    "/partners",
    "/settings",
    "/account",
    "/notifications",
    "/messages",
]

const baseUrl = process.env.NEXTAUTH_URL

export const authConfig = {
    trustHost: true,
    pages: {
        signIn: "/sign-in",
    },
    callbacks: {
        async authorized({ auth, request }) {
            const isLoggedIn = !!auth?.user
            const nextUrl = new URL(request.nextUrl)

            const callbackUrl = nextUrl.searchParams.get("callbackUrl")
            const isOnPrivate = privateRoutes.includes(nextUrl.pathname)

            if (isOnPrivate) {
                return isLoggedIn
            }

            if (isLoggedIn && callbackUrl) {
                return Response.redirect(new URL(callbackUrl))
            }

            return true
        },
    },
    providers: [],
} satisfies NextAuthConfig
