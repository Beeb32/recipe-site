"use client";

import type { Locale } from "@/lib/locale";

function setLocale(locale: Locale) {
  document.cookie = `locale=${locale}; path=/; max-age=${60 * 60 * 24 * 365}`;
  window.location.reload();
}

export function LanguageToggle({ locale }: { locale: Locale }) {
  return (
    <div className="flex items-center gap-1 text-sm">
      <button
        type="button"
        onClick={() => setLocale("en")}
        disabled={locale === "en"}
        className={locale === "en" ? "font-semibold underline underline-offset-2" : "opacity-60 hover:opacity-100"}
      >
        EN
      </button>
      <span className="opacity-40">/</span>
      <button
        type="button"
        onClick={() => setLocale("bg")}
        disabled={locale === "bg"}
        className={locale === "bg" ? "font-semibold underline underline-offset-2" : "opacity-60 hover:opacity-100"}
      >
        BG
      </button>
    </div>
  );
}
