import Link from "next/link";
import { getCurrentUser } from "@/lib/dal";
import { logout } from "@/app/actions/auth";

export async function SiteHeader() {
  const user = await getCurrentUser();

  return (
    <header className="border-b border-black/10 dark:border-white/15">
      <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          🍳 Home Cooked
        </Link>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
          {user ? (
            <>
              <Link href="/favorites" className="underline underline-offset-2">
                Favorites
              </Link>
              <span className="opacity-70 whitespace-nowrap">Hi, {user.name}</span>
              <form action={logout}>
                <button type="submit" className="underline underline-offset-2 whitespace-nowrap">
                  Log out
                </button>
              </form>
            </>
          ) : (
            <>
              <Link href="/login" className="underline underline-offset-2">
                Log in
              </Link>
              <Link href="/signup" className="underline underline-offset-2">
                Sign up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
