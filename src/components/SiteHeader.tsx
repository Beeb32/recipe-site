import Link from "next/link";
import { getCurrentUser } from "@/lib/dal";
import { logout } from "@/app/actions/auth";
import { getLocale } from "@/lib/locale";
import { t } from "@/lib/i18n";
import { LanguageToggle } from "@/components/LanguageToggle";

export async function SiteHeader() {
  const [user, locale] = await Promise.all([getCurrentUser(), getLocale()]);
  const strings = t(locale);

  return (
    <header className="border-b border-black/10 dark:border-white/15">
      <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          🍳 What to cook
        </Link>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
          <LanguageToggle locale={locale} />
          {user ? (
            <>
              <Link href="/favorites" className="underline underline-offset-2">
                {strings.favorites}
              </Link>
              <span className="opacity-70 whitespace-nowrap">{strings.hi(user.name)}</span>
              <form action={logout}>
                <button type="submit" className="underline underline-offset-2 whitespace-nowrap">
                  {strings.logOut}
                </button>
              </form>
            </>
          ) : (
            <>
              <Link href="/login" className="underline underline-offset-2">
                {strings.logIn}
              </Link>
              <Link href="/signup" className="underline underline-offset-2">
                {strings.signUp}
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
