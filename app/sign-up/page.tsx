"use client";

import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();

  router.push("/sign-up");

  return <></>;
}
