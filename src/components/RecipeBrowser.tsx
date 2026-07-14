"use client";

import { useMemo, useState } from "react";
import type { RecipeSummary } from "@/lib/recipes";
import { RecipeCard } from "@/components/RecipeCard";

export function RecipeBrowser({
  recipes,
  allTags,
}: {
  recipes: RecipeSummary[];
  allTags: string[];
}) {
  const [nameQuery, setNameQuery] = useState("");
  const [ingredientQuery, setIngredientQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [maxTime, setMaxTime] = useState<number | null>(null);

  // Prefix/substring match ("chocolate" finds "chocolate chips"), plus an
  // exact singular/plural check ("red peppers" finds "red pepper" and vice
  // versa) - deliberately NOT a loose "query contains name" check in general,
  // since that let short names like "pepper" false-match inside unrelated
  // longer queries like "red peppers" (which does contain the substring
  // "pepper"). Requiring the plural to be an exact +s/-s match avoids that.
  function ingredientNameMatches(entryName: string, q: string): boolean {
    return entryName.includes(q) || q === `${entryName}s` || entryName === `${q}s`;
  }

  // For a given search term, how much of the matched ingredient this recipe
  // uses (the highest quantity among any matching ingredient entries, or
  // null if nothing matched by ingredient at all).
  function matchedIngredientQuantity(r: RecipeSummary, q: string): number | null {
    let best: number | null = null;
    for (const entry of r.ingredientEntries) {
      if (ingredientNameMatches(entry.name, q)) {
        if (entry.quantity !== null && (best === null || entry.quantity > best)) {
          best = entry.quantity;
        } else if (best === null) {
          best = 0;
        }
      }
    }
    return best;
  }

  const hasActiveFilters =
    nameQuery.trim().length > 0 ||
    ingredientQuery.trim().length > 0 ||
    activeTag !== null ||
    maxTime !== null;

  const filtered = useMemo(() => {
    const nameQ = nameQuery.trim().toLowerCase();
    const ingredientQ = ingredientQuery.trim().toLowerCase();

    const matches = recipes.filter((r) => {
      const matchesName =
        nameQ.length === 0 ||
        r.title.toLowerCase().includes(nameQ) ||
        r.description.toLowerCase().includes(nameQ);
      const matchesIngredient =
        ingredientQ.length === 0 || matchedIngredientQuantity(r, ingredientQ) !== null;
      const matchesTag = !activeTag || r.tags.includes(activeTag);
      const matchesTime = !maxTime || r.cookTimeMinutes <= maxTime;
      return matchesName && matchesIngredient && matchesTag && matchesTime;
    });

    // Rank by quantity used, highest first, so searching an ingredient
    // surfaces the recipe using the most of it at the top - helps use up a
    // surplus of whatever's on hand. Recipes with no parsed quantity for
    // that ingredient sort after, keeping their original relative order.
    if (ingredientQ.length > 0) {
      return [...matches].sort((a, b) => {
        const qa = matchedIngredientQuantity(a, ingredientQ) ?? -1;
        const qb = matchedIngredientQuantity(b, ingredientQ) ?? -1;
        return qb - qa;
      });
    }
    return matches;
  }, [recipes, nameQuery, ingredientQuery, activeTag, maxTime]);

  // With no search/filter active, the homepage would otherwise render every
  // recipe at once (400+ and growing), which is a heavy, unfocused first
  // view. Defaulting to the most recently added 20 keeps the page light and
  // surfaces what's new; any active filter searches the full catalog instead.
  const newestFirst = useMemo(
    () => [...recipes].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
    [recipes],
  );
  const displayed = hasActiveFilters ? filtered : newestFirst.slice(0, 20);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
        <div className="flex flex-col gap-3 sm:flex-row w-full sm:w-auto">
          <input
            type="text"
            value={nameQuery}
            onChange={(e) => setNameQuery(e.target.value)}
            placeholder="Search by recipe name..."
            className="w-full sm:w-64 rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2 text-sm outline-none focus:border-black/30 dark:focus:border-white/30"
          />
          <input
            type="text"
            value={ingredientQuery}
            onChange={(e) => setIngredientQuery(e.target.value)}
            placeholder="Search by ingredient..."
            className="w-full sm:w-64 rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2 text-sm outline-none focus:border-black/30 dark:focus:border-white/30"
          />
        </div>
        <select
          value={maxTime ?? ""}
          onChange={(e) => setMaxTime(e.target.value ? Number(e.target.value) : null)}
          className="rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2 text-sm outline-none"
        >
          <option value="">Any cook time</option>
          <option value="15">15 min or less</option>
          <option value="30">30 min or less</option>
          <option value="60">1 hour or less</option>
        </select>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveTag(null)}
          className={`rounded-full px-3 py-1 text-xs font-medium border transition-colors ${
            activeTag === null
              ? "bg-foreground text-background border-foreground"
              : "border-black/10 dark:border-white/15 hover:border-black/30 dark:hover:border-white/30"
          }`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag === activeTag ? null : tag)}
            className={`rounded-full px-3 py-1 text-xs font-medium border capitalize transition-colors ${
              activeTag === tag
                ? "bg-foreground text-background border-foreground"
                : "border-black/10 dark:border-white/15 hover:border-black/30 dark:hover:border-white/30"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {!hasActiveFilters && (
        <h2 className="text-lg font-semibold tracking-tight mb-4">🆕 Newly Added</h2>
      )}

      {displayed.length === 0 ? (
        <p className="text-sm opacity-70">No recipes match your search.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayed.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}
