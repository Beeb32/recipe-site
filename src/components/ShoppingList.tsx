"use client";

import { useEffect, useMemo, useState } from "react";
import type { Locale } from "@/lib/locale";
import { t } from "@/lib/i18n";
import { INGREDIENT_NAMES_BG } from "@/lib/ingredientNamesBg";
import { aggregate, formatAmounts, type ShoppingGroup, type IngredientLine } from "@/lib/shopping";

type Fetched = { slug: string; title: string; servings: number; lines: IngredientLine[] }[];

const checkedKey = (week: string) => `wtc.planner.checked.${week}`;

/** The week's shopping list: ingredients of the planned recipes merged, grouped by aisle, tick them off as you shop. */
export function ShoppingList({
  counts,
  week,
  locale,
  onClose,
}: {
  counts: Record<string, number>;
  week: string;
  locale: Locale;
  onClose: () => void;
}) {
  const strings = t(locale);
  const [data, setData] = useState<Fetched | null>(null);
  const [error, setError] = useState(false);
  const [checked, setChecked] = useState<Set<string>>(() => {
    try {
      const raw = localStorage.getItem(checkedKey(week));
      return new Set<string>(raw ? JSON.parse(raw) : []);
    } catch {
      return new Set<string>();
    }
  });
  const [copied, setCopied] = useState(false);
  const slugs = useMemo(() => Object.keys(counts).sort(), [counts]);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/planner-shopping", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slugs }),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error("bad response"))))
      .then((json) => {
        if (!cancelled) setData(json.recipes as Fetched);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
    };
  }, [slugs]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const groups: ShoppingGroup[] = useMemo(
    () =>
      data
        ? aggregate(
            data.map((r) => ({ slug: r.slug, title: r.title, count: counts[r.slug] ?? 1, lines: r.lines })),
            locale,
            locale === "bg" ? INGREDIENT_NAMES_BG : {},
          )
        : [],
    [data, counts, locale],
  );

  const toggle = (key: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      try {
        localStorage.setItem(checkedKey(week), JSON.stringify([...next]));
      } catch {
        /* storage unavailable - the ticks just won't persist */
      }
      return next;
    });
  };

  const amountText = (g: ShoppingGroup["items"][number]) => {
    const amounts = formatAmounts(g.amounts, locale);
    if (amounts) return amounts;
    return g.noAmount ? strings.plannerToTaste : "";
  };

  const asText = () => {
    const lines: string[] = [strings.plannerShoppingTitle, ""];
    for (const g of groups) {
      lines.push(strings.plannerAisle[g.aisle].toUpperCase());
      for (const item of g.items) {
        const amount = amountText(item);
        lines.push(`${checked.has(item.key) ? "[x]" : "[ ]"} ${item.label}${amount ? ` - ${amount}` : ""}`);
      }
      lines.push("");
    }
    return lines.join("\n").trim();
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(asText());
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked - nothing else to do */
    }
  };

  const canShare = typeof navigator !== "undefined" && typeof navigator.share === "function";

  return (
    <div className="print-modal fixed inset-0 z-40 flex items-end sm:items-center justify-center bg-black/60 sm:p-4" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={strings.plannerShoppingTitle}
        className="print-modal flex w-full max-w-xl max-h-[90vh] flex-col rounded-t-2xl sm:rounded-2xl border border-black/10 dark:border-white/15 bg-background shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 px-4 pt-4 pb-2 no-print">
          <h2 className="font-semibold">{strings.plannerShoppingTitle}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={strings.plannerClose}
            className="rounded-full px-2 py-1 text-lg leading-none opacity-70 hover:opacity-100"
          >
            ×
          </button>
        </div>

        <div className="print-area flex-1 overflow-y-auto px-4 pb-4">
          <h2 className="hidden print:block text-xl font-semibold mb-3">{strings.plannerShoppingTitle}</h2>
          {error && <p className="py-8 text-center text-sm text-red-500">{strings.plannerShoppingError}</p>}
          {!error && !data && slugs.length > 0 && <p className="py-8 text-center text-sm opacity-60">{strings.plannerShoppingLoading}</p>}
          {slugs.length === 0 && <p className="py-8 text-center text-sm opacity-60">{strings.plannerShoppingEmpty}</p>}
          {groups.map((g) => (
            <section key={g.aisle} className="mb-4">
              <h3 className="mb-1 text-xs font-semibold uppercase tracking-wide text-accent">{strings.plannerAisle[g.aisle]}</h3>
              <ul className="divide-y divide-black/5 dark:divide-white/10">
                {g.items.map((item) => {
                  const done = checked.has(item.key);
                  const amount = amountText(item);
                  return (
                    <li key={item.key}>
                      <label className="flex cursor-pointer items-start gap-3 py-2">
                        <input
                          type="checkbox"
                          checked={done}
                          onChange={() => toggle(item.key)}
                          className="mt-1 h-4 w-4 flex-none accent-[var(--accent)]"
                        />
                        <span className={`min-w-0 flex-1 ${done ? "line-through opacity-45" : ""}`}>
                          <span className="block text-sm">
                            <span className="font-medium">{item.label}</span>
                            {amount ? <span className="opacity-70"> - {amount}</span> : null}
                          </span>
                          <span className="block text-xs opacity-45">{item.recipes.join(" · ")}</span>
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
          {groups.length > 0 && <p className="mt-2 text-xs opacity-45">{strings.plannerAmountsNote}</p>}
        </div>

        <div className="no-print flex flex-wrap items-center gap-2 border-t border-black/10 dark:border-white/10 px-4 py-3">
          <button
            type="button"
            onClick={copy}
            disabled={groups.length === 0}
            className="rounded-full border border-black/15 dark:border-white/25 px-4 py-1.5 text-sm hover:border-accent hover:text-accent transition disabled:opacity-40"
          >
            {copied ? strings.plannerCopied : strings.plannerCopy}
          </button>
          {canShare && (
            <button
              type="button"
              onClick={() => navigator.share({ title: strings.plannerShoppingTitle, text: asText() }).catch(() => {})}
              disabled={groups.length === 0}
              className="rounded-full border border-black/15 dark:border-white/25 px-4 py-1.5 text-sm hover:border-accent hover:text-accent transition disabled:opacity-40"
            >
              {strings.plannerShare}
            </button>
          )}
          <button
            type="button"
            onClick={() => window.print()}
            disabled={groups.length === 0}
            className="rounded-full border border-black/15 dark:border-white/25 px-4 py-1.5 text-sm hover:border-accent hover:text-accent transition disabled:opacity-40"
          >
            {strings.plannerPrint}
          </button>
        </div>
      </div>
    </div>
  );
}
