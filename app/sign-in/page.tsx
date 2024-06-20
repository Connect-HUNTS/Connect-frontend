"use client";

import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  router.push("/sign-in");

  return <></>;
}
