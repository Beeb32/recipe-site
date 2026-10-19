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
    <header className="border-b border-black/10 dark:border-white/10 sticky top-0 z-20 bg-background/85 backdrop-blur">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent text-black text-base" aria-hidden>
            🍳
          </span>
          <span className="text-lg hidden min-[420px]:inline">What to cook</span>
        </Link>
        <nav className="flex items-center gap-x-2.5 sm:gap-x-4 text-sm">
          <Link href="/wheel" title={strings.wheelNavLink} className="rounded-full border border-black/10 dark:border-white/15 px-3 py-1 hover:border-accent hover:text-accent transition whitespace-nowrap">
            <span className="min-[420px]:hidden" aria-label={strings.wheelNavLink}>{strings.wheelNavShort.split(" ")[0]}</span>
            <span className="hidden min-[420px]:inline sm:hidden">{strings.wheelNavShort}</span>
            <span className="hidden sm:inline">{strings.wheelNavLink}</span>
          </Link>
          <Link href="/planner" title={strings.plannerNavLink} className="rounded-full border border-black/10 dark:border-white/15 px-3 py-1 hover:border-accent hover:text-accent transition whitespace-nowrap">
            <span className="min-[420px]:hidden" aria-label={strings.plannerNavLink}>{strings.plannerNavShort.split(" ")[0]}</span>
            <span className="hidden min-[420px]:inline sm:hidden">{strings.plannerNavShort}</span>
            <span className="hidden sm:inline">{strings.plannerNavLink}</span>
          </Link>
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
              <Link href="/login" className="underline underline-offset-2 whitespace-nowrap">
                {strings.logIn}
              </Link>
              <Link href="/signup" className="rounded-full bg-accent text-black px-3.5 py-1 font-medium whitespace-nowrap hover:brightness-110 transition">
                {strings.signUp}
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
