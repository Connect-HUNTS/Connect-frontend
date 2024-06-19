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
  pages: {},
  callbacks: {
    async authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const nextUrl = new URL(request.nextUrl);

      const callbackUrl = nextUrl.searchParams.get("callbackUrl");
      const isOnPrivate = privateRoutes.includes(nextUrl.pathname);

      if (isOnPrivate) {
        return isLoggedIn;
      } else if (isLoggedIn && callbackUrl) {
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
