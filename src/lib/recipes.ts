import "server-only";
import { prisma } from "@/lib/prisma";

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
    ingredientEntries: r.recipeIngredients.map((ri) => ({
      name: ri.ingredient.name,
      quantity: ri.quantity,
    })),
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
    ingredientEntries: r.recipeIngredients.map((ri) => ({
      name: ri.ingredient.name,
      quantity: ri.quantity,
    })),
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
