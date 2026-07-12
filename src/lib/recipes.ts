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
};

export type RecipeDetail = RecipeSummary & {
  ingredients: string[];
  steps: string[];
};

function parseTags(raw: string): string[] {
  return JSON.parse(raw) as string[];
}

export async function getAllRecipes(): Promise<RecipeSummary[]> {
  const recipes = await prisma.recipe.findMany({
    orderBy: { title: "asc" },
  });
  return recipes.map((r) => ({
    id: r.id,
    slug: r.slug,
    title: r.title,
    description: r.description,
    imageEmoji: r.imageEmoji,
    cookTimeMinutes: r.cookTimeMinutes,
    servings: r.servings,
    tags: parseTags(r.tags),
  }));
}

export async function getRecipeBySlug(slug: string): Promise<RecipeDetail | null> {
  const r = await prisma.recipe.findUnique({ where: { slug } });
  if (!r) return null;
  return {
    id: r.id,
    slug: r.slug,
    title: r.title,
    description: r.description,
    imageEmoji: r.imageEmoji,
    cookTimeMinutes: r.cookTimeMinutes,
    servings: r.servings,
    ingredients: parseTags(r.ingredients),
    steps: parseTags(r.steps),
    tags: parseTags(r.tags),
  };
}

export async function getAllTags(): Promise<string[]> {
  const recipes = await prisma.recipe.findMany({ select: { tags: true } });
  const tagSet = new Set<string>();
  for (const r of recipes) {
    for (const tag of parseTags(r.tags)) tagSet.add(tag);
  }
  return Array.from(tagSet).sort();
}
