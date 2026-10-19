// Pure logic for the weekly meal planner (no React, no server code), so it is easy to test.

export const MEALS = ["breakfast", "lunch", "dinner"] as const;
export type Meal = (typeof MEALS)[number];

// The slim recipe shape the planner works with (a small subset of the homepage's card data).
export type PlanRecipe = {
  slug: string;
  title: string;
  emoji: string;
  kcal: number | null;
  protein: number | null;
  time: number;
  servings: number;
  tags: string[];
};

// "<day 0-6, Monday first>-<meal>" -> recipe slug
export type Plan = Record<string, string>;
export type Goal = { kcal: number; protein: number };
export const DEFAULT_GOAL: Goal = { kcal: 2000, protein: 90 };

export function slotKey(day: number, meal: Meal): string {
  return `${day}-${meal}`;
}

// ---- weeks (all in local time; a week starts on Monday) ----

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

export function toKey(d: Date): string {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export function fromKey(key: string): Date {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function mondayOf(d: Date): Date {
  const copy = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const sinceMonday = (copy.getDay() + 6) % 7;
  copy.setDate(copy.getDate() - sinceMonday);
  return copy;
}

export function weekKeyFor(d: Date): string {
  return toKey(mondayOf(d));
}

export function shiftWeek(key: string, weeks: number): string {
  const d = fromKey(key);
  d.setDate(d.getDate() + weeks * 7);
  return toKey(d);
}

export function dayDate(weekKey: string, day: number): Date {
  const d = fromKey(weekKey);
  d.setDate(d.getDate() + day);
  return d;
}

// ---- totals ----

export function dayTotals(plan: Plan, bySlug: Map<string, PlanRecipe>, day: number) {
  let kcal = 0;
  let protein = 0;
  let meals = 0;
  for (const meal of MEALS) {
    const slug = plan[slotKey(day, meal)];
    const r = slug ? bySlug.get(slug) : undefined;
    if (!r) continue;
    meals++;
    kcal += r.kcal ?? 0;
    protein += r.protein ?? 0;
  }
  return { kcal: Math.round(kcal), protein: Math.round(protein), meals };
}

export function weekTotals(plan: Plan, bySlug: Map<string, PlanRecipe>) {
  let kcal = 0;
  let protein = 0;
  let meals = 0;
  let days = 0;
  for (let d = 0; d < 7; d++) {
    const t = dayTotals(plan, bySlug, d);
    if (t.meals > 0) days++;
    kcal += t.kcal;
    protein += t.protein;
    meals += t.meals;
  }
  return {
    kcal,
    protein,
    meals,
    avgKcal: days ? Math.round(kcal / days) : 0,
    avgProtein: days ? Math.round(protein / days) : 0,
  };
}

// How often each recipe appears in the plan (for the shopping list: the same recipe twice = twice the ingredients).
export function slugCounts(plan: Plan, bySlug: Map<string, PlanRecipe>): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const slug of Object.values(plan)) {
    if (!bySlug.has(slug)) continue;
    counts[slug] = (counts[slug] ?? 0) + 1;
  }
  return counts;
}

// ---- auto-fill ----

const GENERIC_TAGS = new Set([
  "breakfast", "lunch", "dinner", "dessert", "snack", "quick", "vegetarian", "vegan", "baking",
  "salad", "soup", "appetizer", "sandwich", "asian", "mediterranean", "african",
]);

export function cuisineOf(r: PlanRecipe): string | null {
  return r.tags.find((tag) => !GENERIC_TAGS.has(tag)) ?? null;
}

const SHARE: Record<Meal, number> = { breakfast: 0.25, lunch: 0.35, dinner: 0.4 };

// Recipes that make sense for a meal: tagged for it, with calories known, and no desserts / snacks at lunch or dinner.
export function poolFor(meal: Meal, recipes: PlanRecipe[]): PlanRecipe[] {
  const withKcal = recipes.filter((r) => r.kcal != null);
  const strict = withKcal.filter(
    (r) => r.tags.includes(meal) && (meal === "breakfast" || (!r.tags.includes("dessert") && !r.tags.includes("snack"))),
  );
  if (strict.length >= 12) return strict;
  return withKcal.filter((r) => !r.tags.includes("dessert") && !r.tags.includes("snack"));
}

/**
 * Fills every EMPTY slot of the week with recipes that land near the day's calorie goal, prefer protein,
 * avoid repeating a recipe (or cuisine two meals in a row), and leaves anything already planned alone.
 */
export function suggestPlan(
  plan: Plan,
  recipes: PlanRecipe[],
  goal: Goal,
  rand: () => number = Math.random,
): Plan {
  const bySlug = new Map(recipes.map((r) => [r.slug, r]));
  const next: Plan = { ...plan };
  const usedOnDay = new Map<string, number[]>();
  for (const [key, slug] of Object.entries(next)) {
    const day = Number(key.split("-")[0]);
    usedOnDay.set(slug, [...(usedOnDay.get(slug) ?? []), day]);
  }
  const pools: Record<Meal, PlanRecipe[]> = {
    breakfast: poolFor("breakfast", recipes),
    lunch: poolFor("lunch", recipes),
    dinner: poolFor("dinner", recipes),
  };

  for (let day = 0; day < 7; day++) {
    for (let mi = 0; mi < MEALS.length; mi++) {
      const meal = MEALS[mi];
      const key = slotKey(day, meal);
      if (next[key] && bySlug.has(next[key])) continue;
      let eaten = 0;
      for (const m of MEALS) {
        const r = bySlug.get(next[slotKey(day, m)] ?? "");
        if (r) eaten += r.kcal ?? 0;
      }
      let shareLeft = 0;
      for (const m of MEALS) {
        if (!bySlug.has(next[slotKey(day, m)] ?? "")) shareLeft += SHARE[m];
      }
      const target = Math.max(150, ((goal.kcal - eaten) * SHARE[meal]) / Math.max(shareLeft, SHARE[meal]));
      const previous = bySlug.get(next[slotKey(day, MEALS[mi - 1] ?? "dinner")] ?? "");
      const previousCuisine = previous ? cuisineOf(previous) : null;

      const scored = pools[meal].map((r) => {
        let score = Math.abs((r.kcal ?? 0) - target);
        score -= (r.protein ?? 0) * 0.8;
        const days = usedOnDay.get(r.slug) ?? [];
        if (days.length > 0) score += 400;
        if (days.some((d) => Math.abs(d - day) <= 2)) score += 300;
        if (previousCuisine && cuisineOf(r) === previousCuisine) score += 150;
        score += rand() * 140;
        return { r, score };
      });
      scored.sort((a, b) => a.score - b.score);
      const top = scored.slice(0, 5);
      const pick = top[Math.floor(rand() * top.length)]?.r;
      if (pick) {
        next[key] = pick.slug;
        usedOnDay.set(pick.slug, [...(usedOnDay.get(pick.slug) ?? []), day]);
      }
    }
  }
  return next;
}
