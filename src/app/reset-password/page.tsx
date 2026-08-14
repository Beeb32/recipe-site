"use client";

import { Suspense, useActionState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { resetPassword } from "@/app/actions/auth";

export default function ResetPasswordPage() {
  return (
    <Suspense>
      <ResetPasswordForm />
    </Suspense>
  );
}

function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") ?? "";
  const [state, action, pending] = useActionState(resetPassword, undefined);

  if (!token) {
    return (
      <main className="max-w-sm mx-auto px-6 py-16">
        <h1 className="text-2xl font-semibold tracking-tight mb-2">Reset your password</h1>
        <p className="text-sm opacity-70 mb-6">
          This reset link is missing its token. Please request a new one.
        </p>
        <Link href="/forgot-password" className="underline text-sm">
          Request a new link
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-sm mx-auto px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight mb-6">Choose a new password</h1>
      <form action={action} className="flex flex-col gap-4">
        <input type="hidden" name="token" value={token} />

        <div>
          <label htmlFor="password" className="block text-sm mb-1">
            New password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2 text-sm outline-none focus:border-black/30 dark:focus:border-white/30"
          />
          {state?.errors?.password && (
            <p className="text-xs text-red-500 mt-1">{state.errors.password[0]}</p>
          )}
        </div>

        {state?.message && <p className="text-xs text-red-500">{state.message}</p>}

        <button
          type="submit"
          disabled={pending}
          className="mt-2 rounded-md bg-foreground text-background py-2 text-sm font-medium disabled:opacity-60"
        >
          {pending ? "Saving..." : "Save new password"}
        </button>
      </form>
      <p className="text-sm opacity-70 mt-6">
        <Link href="/forgot-password" className="underline">
          Request a new link
        </Link>
      </p>
    </main>
  );
}
