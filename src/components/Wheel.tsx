"use client";

import { useState } from "react";
import Link from "next/link";
import type { RecipeSummary } from "@/lib/recipes";
import type { Locale } from "@/lib/locale";
import { t } from "@/lib/i18n";
import { ingredientNameMatches } from "@/lib/ingredientMatch";

// Capped so the wheel stays readable - an ingredient like "chicken" can
// match 50+ recipes, which would make individual slices too thin to see or
// tap. A random sample keeps every spin small and legible instead.
const MAX_SLICES = 8;
const SPIN_DURATION_MS = 4200;

const SLICE_COLORS = [
  "#f97316",
  "#eab308",
  "#22c55e",
  "#06b6d4",
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
  "#ef4444",
];

function pickRandomSample<T>(items: T[], count: number): T[] {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

export function Wheel({ recipes, locale }: { recipes: RecipeSummary[]; locale: Locale }) {
  const strings = t(locale);
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);
  const [wheelRecipes, setWheelRecipes] = useState<RecipeSummary[]>([]);
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [winnerIndex, setWinnerIndex] = useState<number | null>(null);

  const sliceAngle = wheelRecipes.length > 0 ? 360 / wheelRecipes.length : 0;
  const winner = winnerIndex !== null ? wheelRecipes[winnerIndex] : null;

  function handleSearch() {
    const q = query.trim().toLowerCase();
    setWinnerIndex(null);
    setRotation(0);
    setSearched(true);
    if (q.length === 0) {
      setWheelRecipes([]);
      return;
    }
    const matches = recipes.filter((r) => r.ingredientEntries.some((e) => ingredientNameMatches(e.name, q)));
    setWheelRecipes(matches.length > 0 ? pickRandomSample(matches, Math.min(matches.length, MAX_SLICES)) : []);
  }

  function handleSpin() {
    if (wheelRecipes.length === 0 || spinning) return;
    setSpinning(true);
    setWinnerIndex(null);

    const targetIndex = Math.floor(Math.random() * wheelRecipes.length);
    const sliceCenter = targetIndex * sliceAngle + sliceAngle / 2;
    const currentMod = ((rotation % 360) + 360) % 360;
    // Land sliceCenter under the fixed top pointer (screen angle 0), plus
    // several full turns so the spin actually looks like a spin.
    const offsetToTarget = (((360 - sliceCenter - currentMod) % 360) + 360) % 360;
    const extraFullSpins = 5 * 360;
    setRotation(rotation + extraFullSpins + offsetToTarget);

    window.setTimeout(() => {
      setSpinning(false);
      setWinnerIndex(targetIndex);
    }, SPIN_DURATION_MS);
  }

  function reset() {
    setQuery("");
    setSearched(false);
    setWheelRecipes([]);
    setRotation(0);
    setWinnerIndex(null);
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex w-full max-w-md gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
          placeholder={strings.wheelIngredientPlaceholder}
          className="flex-1 rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2 text-sm outline-none focus:border-black/30 dark:focus:border-white/30"
        />
        <button
          type="button"
          onClick={handleSearch}
          className="rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium"
        >
          {strings.wheelFind}
        </button>
      </div>

      {searched && wheelRecipes.length === 0 && (
        <p className="text-sm opacity-70">{strings.wheelNoMatches}</p>
      )}

      {wheelRecipes.length > 0 && (
        <>
          <div className="relative" style={{ width: 280, height: 280 }}>
            <div
              className="absolute left-1/2 -top-1 -translate-x-1/2 z-10 text-3xl leading-none"
              aria-hidden
            >
              ▼
            </div>
            <div
              className="absolute inset-0 rounded-full border-4 border-black/10 dark:border-white/20 shadow-lg"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: spinning
                  ? `transform ${SPIN_DURATION_MS}ms cubic-bezier(0.15, 0.65, 0.2, 1)`
                  : "none",
                background: `conic-gradient(${wheelRecipes
                  .map(
                    (_, i) =>
                      `${SLICE_COLORS[i % SLICE_COLORS.length]} ${i * sliceAngle}deg ${(i + 1) * sliceAngle}deg`,
                  )
                  .join(", ")})`,
              }}
            >
              {wheelRecipes.map((r, i) => {
                const angle = i * sliceAngle + sliceAngle / 2;
                return (
                  <div key={r.id} className="absolute inset-0" style={{ transform: `rotate(${angle}deg)` }}>
                    <div className="absolute left-1/2 top-3 -translate-x-1/2 text-2xl leading-none drop-shadow">
                      {r.imageEmoji}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={handleSpin}
            disabled={spinning}
            className="rounded-full bg-foreground text-background px-6 py-2 text-sm font-medium disabled:opacity-50"
          >
            {spinning ? strings.wheelSpinning : strings.wheelSpin}
          </button>
        </>
      )}

      {winner && (
        <div className="flex flex-col items-center gap-3 rounded-lg border border-black/10 dark:border-white/15 p-6 text-center">
          <div className="text-4xl">{winner.imageEmoji}</div>
          <h2 className="text-xl font-semibold">{winner.title}</h2>
          <Link
            href={`/recipes/${winner.slug}`}
            className="rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium"
          >
            {strings.wheelCookThis}
          </Link>
        </div>
      )}

      {wheelRecipes.length > 0 && (
        <button type="button" onClick={reset} className="text-sm underline underline-offset-2 opacity-70">
          {strings.wheelTryAnother}
        </button>
      )}
    </div>
  );
}
