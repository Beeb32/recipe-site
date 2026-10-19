"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Locale } from "@/lib/locale";
import { t } from "@/lib/i18n";
import type { Meal, PlanRecipe } from "@/lib/planner";

/** A modal list for choosing the recipe of one meal slot. */
export function PlannerPicker({
  recipes,
  favoriteSlugs,
  meal,
  locale,
  currentSlug,
  onPick,
  onRemove,
  onClose,
}: {
  recipes: PlanRecipe[];
  favoriteSlugs: Set<string>;
  meal: Meal;
  locale: Locale;
  currentSlug?: string;
  onPick: (slug: string) => void;
  onRemove?: () => void;
  onClose: () => void;
}) {
  const strings = t(locale);
  const mealName = strings.plannerMeal[meal];
  const [query, setQuery] = useState("");
  const [onlyMeal, setOnlyMeal] = useState(true);
  const [onlyFav, setOnlyFav] = useState(false);
  const [onlyQuick, setOnlyQuick] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = recipes.filter((r) => {
      if (onlyMeal && !r.tags.includes(meal)) return false;
      if (onlyFav && !favoriteSlugs.has(r.slug)) return false;
      if (onlyQuick && r.time > 30) return false;
      if (q && !r.title.toLowerCase().includes(q)) return false;
      return true;
    });
    // favorites first, then the (already alphabetical) rest
    filtered.sort((a, b) => Number(favoriteSlugs.has(b.slug)) - Number(favoriteSlugs.has(a.slug)));
    return filtered;
  }, [recipes, query, onlyMeal, onlyFav, onlyQuick, meal, favoriteSlugs]);

  const chip = (active: boolean) =>
    `rounded-full border px-3 py-1 text-xs transition ${
      active
        ? "bg-foreground text-background border-foreground"
        : "border-black/15 dark:border-white/20 hover:border-accent hover:text-accent"
    }`;

  return (
    <div
      className="fixed inset-0 z-40 flex items-end sm:items-center justify-center bg-black/60 sm:p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={strings.plannerPickFor(mealName)}
        className="flex w-full max-w-xl max-h-[88vh] flex-col rounded-t-2xl sm:rounded-2xl border border-black/10 dark:border-white/15 bg-background shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 px-4 pt-4 pb-2">
          <h2 className="font-semibold">{strings.plannerPickFor(mealName)}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={strings.plannerClose}
            className="rounded-full px-2 py-1 text-lg leading-none opacity-70 hover:opacity-100"
          >
            ×
          </button>
        </div>
        <div className="px-4 pb-2">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={strings.plannerSearch}
            className="w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2 text-sm outline-none focus:border-black/30 dark:focus:border-white/30"
          />
          <div className="mt-2 flex flex-wrap gap-2">
            <button type="button" onClick={() => setOnlyMeal((v) => !v)} className={chip(onlyMeal)}>
              {strings.plannerOnlyMeal(mealName)}
            </button>
            <button type="button" onClick={() => setOnlyQuick((v) => !v)} className={chip(onlyQuick)}>
              {strings.plannerQuick}
            </button>
            {favoriteSlugs.size > 0 && (
              <button type="button" onClick={() => setOnlyFav((v) => !v)} className={chip(onlyFav)}>
                {strings.plannerFavorites}
              </button>
            )}
          </div>
        </div>
        <ul className="flex-1 overflow-y-auto px-2 pb-3">
          {results.length === 0 && <li className="px-3 py-6 text-center text-sm opacity-60">{strings.plannerNoResults}</li>}
          {results.slice(0, 80).map((r) => (
            <li key={r.slug}>
              <button
                type="button"
                onClick={() => onPick(r.slug)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left hover:bg-black/5 dark:hover:bg-white/8 ${
                  r.slug === currentSlug ? "bg-accent/10" : ""
                }`}
              >
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-black/5 dark:bg-white/10 text-2xl" aria-hidden>
                  {r.emoji}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium">
                    {favoriteSlugs.has(r.slug) ? "★ " : ""}
                    {r.title}
                  </span>
                  <span className="block text-xs opacity-60">
                    ⏱ {r.time} {strings.min}
                    {r.kcal != null ? ` · 🔥 ${r.kcal} ${strings.kcal}` : ""}
                    {r.protein != null ? ` · ${strings.plannerProteinG(r.protein)}` : ""}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
        {onRemove && (
          <div className="border-t border-black/10 dark:border-white/10 px-4 py-3">
            <button type="button" onClick={onRemove} className="text-sm text-red-500 hover:underline">
              {strings.plannerRemove}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
