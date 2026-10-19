import type { Metadata } from "next";
import { getAllRecipesLight } from "@/lib/recipes";
import { getLocale } from "@/lib/locale";
import { getCurrentUser } from "@/lib/dal";
import { getFavoriteRecipesForUser } from "@/lib/favorites";
import { t } from "@/lib/i18n";
import type { PlanRecipe } from "@/lib/planner";
import { MealPlanner } from "@/components/MealPlanner";

export const metadata: Metadata = {
  title: "Weekly meal planner",
  description: "Plan breakfast, lunch and dinner for the whole week, track calories and protein, and get a shopping list.",
};

export default async function PlannerPage() {
  const locale = await getLocale();
  const strings = t(locale);
  const [recipes, user] = await Promise.all([getAllRecipesLight(locale), getCurrentUser()]);
  const favorites = user ? await getFavoriteRecipesForUser(user.id, locale) : [];

  // Only what the planner needs (no descriptions) to keep the page light.
  const planRecipes: PlanRecipe[] = recipes.map((r) => ({
    slug: r.slug,
    title: r.title,
    emoji: r.imageEmoji,
    kcal: r.caloriesPerServing,
    protein: r.proteinG,
    time: r.cookTimeMinutes,
    servings: r.servings,
    tags: r.tags,
  }));

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2 text-center">{strings.plannerHeading}</h1>
      <p className="opacity-70 mb-8 text-center max-w-2xl mx-auto">{strings.plannerSubheading}</p>
      <MealPlanner recipes={planRecipes} favoriteSlugs={favorites.map((f) => f.slug)} locale={locale} />
    </main>
  );
}
