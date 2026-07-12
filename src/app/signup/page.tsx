"use client";

import { useActionState } from "react";
import Link from "next/link";
import { signup } from "@/app/actions/auth";

export default function SignupPage() {
  const [state, action, pending] = useActionState(signup, undefined);

  return (
    <main className="max-w-sm mx-auto px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight mb-6">Sign up</h1>
      <form action={action} className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="block text-sm mb-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2 text-sm outline-none focus:border-black/30 dark:focus:border-white/30"
          />
          {state?.errors?.name && (
            <p className="text-xs text-red-500 mt-1">{state.errors.name[0]}</p>
          )}
        </div>

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

        <div>
          <label htmlFor="password" className="block text-sm mb-1">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2 text-sm outline-none focus:border-black/30 dark:focus:border-white/30"
          />
          {state?.errors?.password && (
            <ul className="text-xs text-red-500 mt-1 list-disc list-inside">
              {state.errors.password.map((err) => (
                <li key={err}>{err}</li>
              ))}
            </ul>
          )}
        </div>

        {state?.message && <p className="text-xs text-red-500">{state.message}</p>}

        <button
          type="submit"
          disabled={pending}
          className="mt-2 rounded-md bg-foreground text-background py-2 text-sm font-medium disabled:opacity-60"
        >
          {pending ? "Creating account..." : "Sign up"}
        </button>
      </form>
      <p className="text-sm opacity-70 mt-6">
        Already have an account?{" "}
        <Link href="/login" className="underline">
          Log in
        </Link>
      </p>
    </main>
  );
}
