import "server-only";
import { prisma } from "@/lib/prisma";

export type RecipeSummary = {
  id: string;
  slug: string;
  title: string;
  description: string;
  imageEmoji: string;
  cookTimeMinutes: number;
  servings: number;
  tags: string[];
  // Canonical ingredient names (e.g. "red pepper") - what ingredient-based
  // search matches against, separate from the display text shown on the page.
  ingredientNames: string[];
};

export type RecipeDetail = RecipeSummary & {
  ingredients: string[];
  steps: string[];
};

function parseJsonArray(raw: string): string[] {
  return JSON.parse(raw) as string[];
}

export async function getAllRecipes(): Promise<RecipeSummary[]> {
  const recipes = await prisma.recipe.findMany({
    orderBy: { title: "asc" },
    include: { recipeIngredients: { include: { ingredient: true } } },
  });
  return recipes.map((r) => ({
    id: r.id,
    slug: r.slug,
    title: r.title,
    description: r.description,
    imageEmoji: r.imageEmoji,
    cookTimeMinutes: r.cookTimeMinutes,
    servings: r.servings,
    tags: parseJsonArray(r.tags),
    ingredientNames: r.recipeIngredients.map((ri) => ri.ingredient.name),
  }));
}

export async function getRecipeBySlug(slug: string): Promise<RecipeDetail | null> {
  const r = await prisma.recipe.findUnique({
    where: { slug },
    include: {
      recipeIngredients: {
        include: { ingredient: true },
        orderBy: { position: "asc" },
      },
    },
  });
  if (!r) return null;
  return {
    id: r.id,
    slug: r.slug,
    title: r.title,
    description: r.description,
    imageEmoji: r.imageEmoji,
    cookTimeMinutes: r.cookTimeMinutes,
    servings: r.servings,
    ingredients: r.recipeIngredients.map((ri) => ri.displayText),
    ingredientNames: r.recipeIngredients.map((ri) => ri.ingredient.name),
    steps: parseJsonArray(r.steps),
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
