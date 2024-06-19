import type { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const privateRoutes = [
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

      const callbackUrl = nextUrl.searchParams.get("callbackUrl");
      const isOnPrivate = privateRoutes.includes(nextUrl.pathname);

      if (isOnPrivate && !isLoggedIn) {
        return false;
      }

      if (isLoggedIn && callbackUrl) {
        return Response.redirect(new URL(callbackUrl));
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
