import NextAuth from "next-auth";
import { authConfig } from "./configs/auth.config";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { AuthDataValidator } from "@telegram-auth/server";

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  ...authConfig,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "telegram-login",
      name: "Telegram Login",
      credentials: {},
      async authorize(credentials, req) {
        const validator = new AuthDataValidator({
          botToken: `${process.env.BOT_TOKEN}`,
        });

        console.log(req);

        const searchParams = new URL(req.url).searchParams;

        const data = new Map(searchParams.entries());

        const user = await validator.validate(data);

        if (user.id && user.first_name) {
          return {
            id: user.id.toString(),
            email: user.id.toString(),
            name: [user.first_name, user.last_name || ""].join(" "),
            image: user.photo_url,
          };
        }
        return null;
      },
    }),
  ],
});
