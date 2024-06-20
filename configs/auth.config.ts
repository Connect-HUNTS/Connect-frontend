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

const baseUrl = "https://crayfish-inspired-fly.ngrok-free.app"

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

            if (isOnPrivate && !isLoggedIn) {
                return false
            }

            if (isLoggedIn && callbackUrl) {
                return Response.redirect(new URL(callbackUrl))
            }

            return true
        },
    },
    providers: [],
} satisfies NextAuthConfig
