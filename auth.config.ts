import type { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const privateRoutes = [
  "/investors",
  "/startups",
  "/partners",
  "/settings",
  "/account",
  "/notifications",
  "/messages",
];

const baseUrl = "http://localhost:3000";

export const authConfig = {
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    async authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const nextUrl = new URL(request.nextUrl);

      const callbackUrl = new URL(
        nextUrl.searchParams.get("callbackUrl") || baseUrl,
      );
      const isOnPrivate = privateRoutes.includes(nextUrl.pathname);

      if (isOnPrivate) {
        return isLoggedIn;
      } else if (isLoggedIn && nextUrl.pathname === "/sign-in") {
        return Response.redirect(callbackUrl);
      }

      return true;
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
} satisfies NextAuthConfig;
