import "server-only";
import { prisma } from "@/lib/prisma";
import type { Locale } from "@/lib/locale";

export type IngredientEntry = {
  name: string;
  quantity: number | null;
};

export type RecipeSummary = {
  id: string;
  slug: string;
  title: string;
  description: string;
  imageEmoji: string;
  cookTimeMinutes: number;
  servings: number;
  tags: string[];
  createdAt: Date;
  // Canonical ingredient names + quantity used (e.g. "red pepper", 2) - what
  // ingredient-based search matches and ranks against, separate from the
  // display text shown on the page.
  ingredientEntries: IngredientEntry[];
};

export type RecipeDetail = RecipeSummary & {
  ingredients: string[];
  steps: string[];
};

function parseJsonArray(raw: string): string[] {
  return JSON.parse(raw) as string[];
}

// Translation rows only ever exist for non-English locales, so requesting
// them filtered by "en" naturally returns nothing and every field falls
// back to the original column - no need to special-case locale === "en".
export async function getAllRecipes(locale: Locale = "en"): Promise<RecipeSummary[]> {
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
}

export async function getRecipeBySlug(slug: string, locale: Locale = "en"): Promise<RecipeDetail | null> {
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
  };
}

export async function getAllTags(): Promise<string[]> {
  const recipes = await prisma.recipe.findMany({ select: { tags: true } });
  const tagSet = new Set<string>();
  for (const r of recipes) {
    for (const tag of parseJsonArray(r.tags)) tagSet.add(tag);
  }
  return Array.from(tagSet).sort();
}

export async function getAllIngredientNames(): Promise<string[]> {
  const ingredients = await prisma.ingredient.findMany({
    select: { name: true },
    orderBy: { name: "asc" },
  });
  return ingredients.map((i) => i.name);
}
