"use server";

import { signIn } from "next-auth/react";
import { AuthError } from "next-auth";
import { Data } from "@/types/telegram";

export async function googleAuthenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn("google");
  } catch (error) {
    if (error instanceof AuthError) {
      return "google log in failed";
    }
    throw error;
  }
}

export async function telegramAuthenticate(data: false | Data) {
  if (data === false) {
    return "telegram log in failed";
  }

  try {
    await signIn(
      "telegram-login",
      {
        callbackUrl: "/investors",
      },
      data as any,
    );
  } catch (error) {
    if (error instanceof AuthError) {
      return "telegram log in failed";
    }
    throw error;
  }
}
