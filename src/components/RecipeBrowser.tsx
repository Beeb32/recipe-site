"use client";

import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import type { RecipeCardData } from "@/lib/recipes";
import type { Locale } from "@/lib/locale";
import { t, tagLabel } from "@/lib/i18n";
import { RecipeCard } from "@/components/RecipeCard";

// Filter steps chosen from the real data (median ~390 kcal, protein 0-37+ g across 698 recipes).
const CALORIE_STEPS = [300, 450, 600, 800];
const PROTEIN_STEPS = [15, 25, 35];

export function RecipeBrowser({
  recipes,
  allTags,
  locale,
}: {
  recipes: RecipeCardData[];
  allTags: string[];
  locale: Locale;
}) {
  const strings = t(locale);
  const [nameQuery, setNameQuery] = useState("");
  const [ingredientInput, setIngredientInput] = useState("");
  const [ingredientTags, setIngredientTags] = useState<string[]>([]);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [maxTime, setMaxTime] = useState<number | null>(null);
  const [maxCalories, setMaxCalories] = useState<number | null>(null);
  const [minProtein, setMinProtein] = useState<number | null>(null);
  const [tagsExpanded, setTagsExpanded] = useState(false);

  const TAG_PREVIEW_COUNT = 7;
  const visibleTags = tagsExpanded ? allTags : allTags.slice(0, TAG_PREVIEW_COUNT);

  // The text currently being typed counts as a search term too, so results
  // still filter live as you type (matching the old single-ingredient
  // behavior) - Enter/comma just "commits" it into its own chip so you can
  // start typing the next ingredient while this one stays applied.
  const pendingTag = ingredientInput.trim().toLowerCase();
  const effectiveIngredientTags = useMemo(() => {
    if (pendingTag.length === 0 || ingredientTags.includes(pendingTag)) return ingredientTags;
    return [...ingredientTags, pendingTag];
  }, [ingredientTags, pendingTag]);

  function commitIngredientTag() {
    if (pendingTag.length > 0 && !ingredientTags.includes(pendingTag)) {
      setIngredientTags((prev) => [...prev, pendingTag]);
    }
    setIngredientInput("");
  }

  function clearAllFilters() {
    setNameQuery("");
    setIngredientInput("");
    setIngredientTags([]);
    setIngredientMatches(null);
    setActiveTag(null);
    setMaxTime(null);
    setMaxCalories(null);
    setMinProtein(null);
  }

  function removeIngredientTag(tag: string) {
    setIngredientTags((prev) => prev.filter((t) => t !== tag));
  }

  function handleIngredientKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      commitIngredientTag();
    } else if (e.key === "Backspace" && ingredientInput.length === 0 && ingredientTags.length > 0) {
      setIngredientTags((prev) => prev.slice(0, -1));
    }
  }

  // Ingredient matching runs server-side (over the full ingredient index,
  // which is too heavy to ship to every visitor just so browsing/name/tag
  // filtering can stay instant) - slug -> total matched quantity, used both
  // to decide inclusion and to rank results. Kept as its previous value
  // while a new search is in flight rather than cleared, so results don't
  // flash empty between keystrokes.
  const [ingredientMatches, setIngredientMatches] = useState<Map<string, number> | null>(null);
  const ingredientTagsKey = effectiveIngredientTags.join("\0");
  const requestSeq = useRef(0);

  useEffect(() => {
    if (effectiveIngredientTags.length === 0) return;
    const seq = ++requestSeq.current;
    const timeoutId = setTimeout(() => {
      fetch("/api/ingredient-search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ingredients: effectiveIngredientTags }),
      })
        .then((res) => (res.ok ? res.json() : null))
        .then((data: { results: { slug: string; rank: number }[] } | null) => {
          // Ignore replies to a search that's since been superseded by a
          // newer one (typing quickly can resolve out of order).
          if (data && seq === requestSeq.current) {
            setIngredientMatches(new Map(data.results.map((r) => [r.slug, r.rank])));
          }
        })
        .catch(() => {});
    }, 250);
    return () => clearTimeout(timeoutId);
    // effectiveIngredientTags is intentionally omitted - it's a new array
    // every render, which would refire this on every keystroke regardless
    // of content; ingredientTagsKey is its stable, order-sensitive identity.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ingredientTagsKey]);

  const hasActiveFilters =
    nameQuery.trim().length > 0 ||
    effectiveIngredientTags.length > 0 ||
    activeTag !== null ||
    maxTime !== null ||
    maxCalories !== null ||
    minProtein !== null;

  const filtered = useMemo(() => {
    const nameQ = nameQuery.trim().toLowerCase();
    const hasIngredientFilter = effectiveIngredientTags.length > 0;

    const matches = recipes.filter((r) => {
      const matchesName =
        nameQ.length === 0 ||
        r.title.toLowerCase().includes(nameQ) ||
        r.description.toLowerCase().includes(nameQ);
      const matchesIngredients = !hasIngredientFilter || (ingredientMatches?.has(r.slug) ?? false);
      const matchesTag = !activeTag || r.tags.includes(activeTag);
      const matchesTime = !maxTime || r.cookTimeMinutes <= maxTime;
      // A recipe without a nutrition estimate can't be said to fit, so an active nutrition filter hides it.
      const matchesCalories = !maxCalories || (r.caloriesPerServing != null && r.caloriesPerServing <= maxCalories);
      const matchesProtein = !minProtein || (r.proteinG != null && r.proteinG >= minProtein);
      return matchesName && matchesIngredients && matchesTag && matchesTime && matchesCalories && matchesProtein;
    });

    // Rank by total quantity used across all matched ingredients, highest
    // first, so searching surfaces the recipe using the most of what's on
    // hand at the top - helps use up a surplus rather than just a garnish.
    if (hasIngredientFilter && ingredientMatches) {
      return [...matches].sort(
        (a, b) => (ingredientMatches.get(b.slug) ?? 0) - (ingredientMatches.get(a.slug) ?? 0),
      );
    }
    return matches;
  }, [recipes, nameQuery, effectiveIngredientTags, activeTag, maxTime, maxCalories, minProtein, ingredientMatches]);

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
      <div className="flex flex-col gap-3 mb-6">
      {/* Line 1: the original search row (name, ingredient, cook time) */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-3 sm:flex-row w-full sm:w-auto">
          <input
            type="text"
            value={nameQuery}
            onChange={(e) => setNameQuery(e.target.value)}
            placeholder={strings.searchByName}
            className="w-full sm:w-64 rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2 text-sm outline-none focus:border-black/30 dark:focus:border-white/30"
          />
          <div className="w-full sm:w-64">
            <input
              type="text"
              value={ingredientInput}
              onChange={(e) => setIngredientInput(e.target.value)}
              onKeyDown={handleIngredientKeyDown}
              onBlur={commitIngredientTag}
              placeholder={strings.searchByIngredient}
              className="w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2 text-sm outline-none focus:border-black/30 dark:focus:border-white/30"
            />
            {ingredientTags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {ingredientTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 rounded-full bg-foreground text-background px-2.5 py-1 text-xs"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeIngredientTag(tag)}
                      aria-label={strings.removeIngredient(tag)}
                      className="opacity-70 hover:opacity-100"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        <select
          value={maxTime ?? ""}
          onChange={(e) => setMaxTime(e.target.value ? Number(e.target.value) : null)}
          className="rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2 text-sm outline-none"
        >
          <option value="">{strings.anyCookTime}</option>
          <option value="15">{strings.fifteenMinOrLess}</option>
          <option value="30">{strings.thirtyMinOrLess}</option>
          <option value="60">{strings.oneHourOrLess}</option>
        </select>
      </div>
      {/* Line 2: the nutrition filters */}
      <div className="flex flex-wrap gap-3">
        <select
          value={maxCalories ?? ""}
          onChange={(e) => setMaxCalories(e.target.value ? Number(e.target.value) : null)}
          aria-label={strings.estimatedNutrition}
          title={strings.estimatedNutrition}
          className="rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2 text-sm outline-none"
        >
          <option value="">{strings.anyCalories}</option>
          {CALORIE_STEPS.map((n) => (
            <option key={n} value={n}>{strings.caloriesUnder(n)}</option>
          ))}
        </select>
        <select
          value={minProtein ?? ""}
          onChange={(e) => setMinProtein(e.target.value ? Number(e.target.value) : null)}
          aria-label={strings.estimatedNutrition}
          title={strings.estimatedNutrition}
          className="rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2 text-sm outline-none"
        >
          <option value="">{strings.anyProtein}</option>
          {PROTEIN_STEPS.map((n) => (
            <option key={n} value={n}>{strings.proteinAtLeast(n)}</option>
          ))}
        </select>
      </div>
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
          {strings.allTag}
        </button>
        {visibleTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag === activeTag ? null : tag)}
            className={`rounded-full px-3 py-1 text-xs font-medium border capitalize transition-colors ${
              activeTag === tag
                ? "bg-foreground text-background border-foreground"
                : "border-black/10 dark:border-white/15 hover:border-black/30 dark:hover:border-white/30"
            }`}
          >
            {tagLabel(locale, tag)}
          </button>
        ))}
        {allTags.length > TAG_PREVIEW_COUNT && (
          <button
            onClick={() => setTagsExpanded((prev) => !prev)}
            className="rounded-full px-3 py-1 text-xs font-medium border border-dashed border-black/20 dark:border-white/25 opacity-70 hover:opacity-100 transition-opacity"
          >
            {tagsExpanded ? strings.showLessTags : strings.showMoreTags}
          </button>
        )}
      </div>

      {!hasActiveFilters && (
        <h2 className="text-lg font-semibold tracking-tight mb-4">{strings.newlyAdded}</h2>
      )}
      {hasActiveFilters && (
        <div className="flex items-center gap-4 mb-4 text-sm">
          <span className="opacity-70">{strings.resultsCount(filtered.length)}</span>
          <button
            type="button"
            onClick={clearAllFilters}
            className="underline opacity-70 hover:opacity-100"
          >
            {strings.clearFilters}
          </button>
        </div>
      )}

      {displayed.length === 0 ? (
        <p className="text-sm opacity-70">{strings.noRecipesMatch}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayed.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} locale={locale} />
          ))}
        </div>
      )}
    </div>
  );
}
