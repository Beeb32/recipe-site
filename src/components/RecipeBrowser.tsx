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
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [maxTime, setMaxTime] = useState<number | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return recipes.filter((r) => {
      // Matches either direction so "red peppers" (plural) still finds an
      // ingredient named "red pepper" (singular), and vice versa.
      const matchesIngredient = r.ingredientNames.some(
        (name) => name.includes(q) || q.includes(name)
      );
      const matchesQuery =
        q.length === 0 ||
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        matchesIngredient;
      const matchesTag = !activeTag || r.tags.includes(activeTag);
      const matchesTime = !maxTime || r.cookTimeMinutes <= maxTime;
      return matchesQuery && matchesTag && matchesTime;
    });
  }, [recipes, query, activeTag, maxTime]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name or ingredient..."
          className="w-full sm:w-72 rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2 text-sm outline-none focus:border-black/30 dark:focus:border-white/30"
        />
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

      {filtered.length === 0 ? (
        <p className="text-sm opacity-70">No recipes match your search.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}
