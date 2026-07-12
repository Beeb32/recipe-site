import "server-only";
import { prisma } from "@/lib/prisma";
import type { RecipeSummary } from "@/lib/recipes";

function parseTags(raw: string): string[] {
  return JSON.parse(raw) as string[];
}

export async function isFavorited(userId: string, recipeId: string): Promise<boolean> {
  const existing = await prisma.favorite.findUnique({
    where: { userId_recipeId: { userId, recipeId } },
  });
  return existing !== null;
}

export async function getFavoriteRecipesForUser(userId: string): Promise<RecipeSummary[]> {
  const favorites = await prisma.favorite.findMany({
    where: { userId },
    include: {
      recipe: { include: { recipeIngredients: { include: { ingredient: true } } } },
    },
    orderBy: { createdAt: "desc" },
  });
  return favorites.map(({ recipe: r }) => ({
    id: r.id,
    slug: r.slug,
    title: r.title,
    description: r.description,
    imageEmoji: r.imageEmoji,
    cookTimeMinutes: r.cookTimeMinutes,
    servings: r.servings,
    tags: parseTags(r.tags),
    ingredientEntries: r.recipeIngredients.map((ri) => ({
      name: ri.ingredient.name,
      quantity: ri.quantity,
    })),
  }));
}
