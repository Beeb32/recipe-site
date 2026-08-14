import "server-only";
import { cache } from "react";
import { unstable_cache } from "next/cache";
import { prisma } from "@/lib/prisma";
import type { Locale } from "@/lib/locale";
import { ingredientNameMatches } from "@/lib/ingredientMatch";

export type IngredientEntry = {
  name: string;
  quantity: number | null;
};

// Everything the homepage's recipe cards + name/tag/time filters need, and
// nothing more - deliberately excludes ingredientEntries, which is the
// single biggest contributor to page weight (every ingredient of every
// recipe). Ingredient search is served separately, on demand, via
// searchRecipesByIngredients instead of shipping the full ingredient index
// to the client on every page load.
export type RecipeCardData = {
  id: string;
  slug: string;
  title: string;
  description: string;
  imageEmoji: string;
  cookTimeMinutes: number;
  servings: number;
  tags: string[];
  createdAt: Date;
};

export type RecipeSummary = RecipeCardData & {
  // Canonical ingredient names + quantity used (e.g. "red pepper", 2) - what
  // ingredient-based search matches and ranks against, separate from the
  // display text shown on the page.
  ingredientEntries: IngredientEntry[];
};

export type NutritionInfo = {
  caloriesPerServing: number;
  proteinG: number;
  carbsG: number;
  fatG: number;
};

export type RecipeDetail = RecipeSummary & {
  ingredients: string[];
  steps: string[];
  // Null until this recipe has been through a nutrition-estimate batch -
  // always LLM-estimated from ingredients/servings, never lab-measured.
  nutrition: NutritionInfo | null;
};

function parseJsonArray(raw: string): string[] {
  return JSON.parse(raw) as string[];
}

// Translation rows only ever exist for non-English locales, so requesting
// them filtered by "en" naturally returns nothing and every field falls
// back to the original column - no need to special-case locale === "en".
export const getAllRecipes = unstable_cache(
  async (locale: Locale = "en"): Promise<RecipeSummary[]> => {
    const recipes = await prisma.recipe.findMany({
      orderBy: { title: "asc" },
      include: {
        recipeIngredients: { include: { ingredient: true } },
        translations: { where: { locale } },
      },
    });
    return recipes.map((r) => {
      const translation = r.translations[0];
      return {
        id: r.id,
        slug: r.slug,
        title: translation?.title ?? r.title,
        description: translation?.description ?? r.description,
        imageEmoji: r.imageEmoji,
        cookTimeMinutes: r.cookTimeMinutes,
        servings: r.servings,
        tags: parseJsonArray(r.tags),
        createdAt: r.createdAt,
        ingredientEntries: r.recipeIngredients.map((ri) => ({
          name: ri.ingredient.name,
          quantity: ri.quantity,
        })),
      };
    });
  },
  ["getAllRecipes"],
  { revalidate: 300 },
);

// Same recipe list as getAllRecipes but without the ingredient join or
// per-recipe ingredientEntries - what the homepage actually needs for
// cards plus name/tag/time filtering. Skipping the ingredient join here
// both shrinks the query and, more importantly, shrinks the payload
// shipped to and hydrated by the client on every single page load.
export const getAllRecipesLight = unstable_cache(
  async (locale: Locale = "en"): Promise<RecipeCardData[]> => {
    const recipes = await prisma.recipe.findMany({
      orderBy: { title: "asc" },
      include: {
        translations: { where: { locale } },
      },
    });
    return recipes.map((r) => {
      const translation = r.translations[0];
      return {
        id: r.id,
        slug: r.slug,
        title: translation?.title ?? r.title,
        description: translation?.description ?? r.description,
        imageEmoji: r.imageEmoji,
        cookTimeMinutes: r.cookTimeMinutes,
        servings: r.servings,
        tags: parseJsonArray(r.tags),
        createdAt: r.createdAt,
      };
    });
  },
  ["getAllRecipesLight"],
  { revalidate: 300 },
);

// Wrapped in React's cache() so generateMetadata and the page component
// (which both need the same recipe) share one DB call per request instead
// of fetching it twice.
export const getRecipeBySlug = cache(async function getRecipeBySlug(
  slug: string,
  locale: Locale = "en"
): Promise<RecipeDetail | null> {
  const r = await prisma.recipe.findUnique({
    where: { slug },
    include: {
      recipeIngredients: {
        include: {
          ingredient: true,
          translations: { where: { locale } },
        },
        orderBy: { position: "asc" },
      },
      translations: { where: { locale } },
    },
  });
  if (!r) return null;
  const translation = r.translations[0];
  return {
    id: r.id,
    slug: r.slug,
    title: translation?.title ?? r.title,
    description: translation?.description ?? r.description,
    imageEmoji: r.imageEmoji,
    cookTimeMinutes: r.cookTimeMinutes,
    servings: r.servings,
    createdAt: r.createdAt,
    ingredients: r.recipeIngredients.map((ri) => ri.translations[0]?.displayText ?? ri.displayText),
    ingredientEntries: r.recipeIngredients.map((ri) => ({
      name: ri.ingredient.name,
      quantity: ri.quantity,
    })),
    steps: translation?.steps ? parseJsonArray(translation.steps) : parseJsonArray(r.steps),
    tags: parseJsonArray(r.tags),
    nutrition:
      r.caloriesPerServing != null && r.proteinG != null && r.carbsG != null && r.fatG != null
        ? {
            caloriesPerServing: r.caloriesPerServing,
            proteinG: r.proteinG,
            carbsG: r.carbsG,
            fatG: r.fatG,
          }
        : null,
  };
});

// Slug + createdAt only, for the sitemap - avoids pulling ingredients and
// translations for every recipe just to list URLs.
export async function getAllRecipeSlugs(): Promise<{ slug: string; createdAt: Date }[]> {
  return prisma.recipe.findMany({
    select: { slug: true, createdAt: true },
    orderBy: { slug: "asc" },
  });
}

export const getAllTags = unstable_cache(
  async (): Promise<string[]> => {
    const recipes = await prisma.recipe.findMany({ select: { tags: true } });
    const tagSet = new Set<string>();
    for (const r of recipes) {
      for (const tag of parseJsonArray(r.tags)) tagSet.add(tag);
    }
    return Array.from(tagSet).sort();
  },
  ["getAllTags"],
  { revalidate: 300 },
);

export async function getAllIngredientNames(): Promise<string[]> {
  const ingredients = await prisma.ingredient.findMany({
    select: { name: true },
    orderBy: { name: "asc" },
  });
  return ingredients.map((i) => i.name);
}

// Slug + ingredient names/quantities only, for ingredient-based search -
// the lean counterpart to getAllRecipesLight's title/description/tags.
// Cached separately since it's only ever needed once a user actually
// searches by ingredient, not on every homepage load.
const getIngredientIndex = unstable_cache(
  async (): Promise<{ slug: string; ingredientEntries: IngredientEntry[] }[]> => {
    const recipes = await prisma.recipe.findMany({
      select: {
        slug: true,
        recipeIngredients: { select: { quantity: true, ingredient: { select: { name: true } } } },
      },
    });
    return recipes.map((r) => ({
      slug: r.slug,
      ingredientEntries: r.recipeIngredients.map((ri) => ({
        name: ri.ingredient.name,
        quantity: ri.quantity,
      })),
    }));
  },
  ["getIngredientIndex"],
  { revalidate: 300 },
);

// Mirrors RecipeBrowser's old client-side matching/ranking exactly (every
// tag must match - AND, not OR - ranked by total matched quantity), just
// run server-side over the lean ingredient index instead of shipping that
// index to every visitor.
export async function searchRecipesByIngredients(tags: string[]): Promise<{ slug: string; rank: number }[]> {
  if (tags.length === 0) return [];
  const index = await getIngredientIndex();

  const results: { slug: string; rank: number }[] = [];
  for (const r of index) {
    let rank = 0;
    let matchesAll = true;
    for (const tag of tags) {
      let best: number | null = null;
      for (const entry of r.ingredientEntries) {
        if (ingredientNameMatches(entry.name, tag)) {
          if (entry.quantity !== null && (best === null || entry.quantity > best)) {
            best = entry.quantity;
          } else if (best === null) {
            best = 0;
          }
        }
      }
      if (best === null) {
        matchesAll = false;
        break;
      }
      rank += best;
    }
    if (matchesAll) results.push({ slug: r.slug, rank });
  }
  return results;
}
