"use client";

import { signIn } from "next-auth/react";

export default function LoginForm() {
  const handleGoogleSignIn = async () => {
    await signIn("google");
  };

  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={handleGoogleSignIn}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        Sign in with Google
      </button>
    </div>
  );
}
