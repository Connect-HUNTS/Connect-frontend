"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const SignUpPage = () => {
  const { status } = useSession();

  const router = useRouter();

  if (status === "authenticated") {
    return router.push("/investors");
  }

  return <>{status}</>;
};

export default SignUpPage;
