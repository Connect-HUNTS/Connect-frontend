"use client";

import { useFormState } from "react-dom";
import { googleAuthenticate } from "@/lib/actions";

export default function LoginForm() {
  const [errorMsgGoogle, dispatchGoogle] = useFormState(
    googleAuthenticate,
    undefined,
  );

  return (
    <div>
      <form action={dispatchGoogle}>
        <button>Sign in with Google</button>
      </form>
    </div>
  );
}
