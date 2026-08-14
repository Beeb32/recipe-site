"use client";

import { useActionState } from "react";
import Link from "next/link";
import { requestPasswordReset } from "@/app/actions/auth";

export default function ForgotPasswordPage() {
  const [state, action, pending] = useActionState(requestPasswordReset, undefined);

  return (
    <main className="max-w-sm mx-auto px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight mb-2">Reset your password</h1>
      <p className="text-sm opacity-70 mb-6">
        Enter your email and we&apos;ll send you a link to choose a new password.
      </p>

      {state?.message ? (
        <p className="text-sm">{state.message}</p>
      ) : (
        <form action={action} className="flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="block text-sm mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2 text-sm outline-none focus:border-black/30 dark:focus:border-white/30"
            />
            {state?.errors?.email && (
              <p className="text-xs text-red-500 mt-1">{state.errors.email[0]}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={pending}
            className="mt-2 rounded-md bg-foreground text-background py-2 text-sm font-medium disabled:opacity-60"
          >
            {pending ? "Sending..." : "Send reset link"}
          </button>
        </form>
      )}

      <p className="text-sm opacity-70 mt-6">
        <Link href="/login" className="underline">
          Back to log in
        </Link>
      </p>
    </main>
  );
}
