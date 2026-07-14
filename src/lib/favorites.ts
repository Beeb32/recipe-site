import "server-only";
import { prisma } from "@/lib/prisma";
import type { RecipeSummary } from "@/lib/recipes";
import type { Locale } from "@/lib/locale";

function parseTags(raw: string): string[] {
  return JSON.parse(raw) as string[];
}

export async function isFavorited(userId: string, recipeId: string): Promise<boolean> {
  const existing = await prisma.favorite.findUnique({
    where: { userId_recipeId: { userId, recipeId } },
  });
  return existing !== null;
}

export async function getFavoriteRecipesForUser(
  userId: string,
  locale: Locale = "en",
): Promise<RecipeSummary[]> {
  const favorites = await prisma.favorite.findMany({
    where: { userId },
    include: {
      recipe: {
        include: {
          recipeIngredients: { include: { ingredient: true } },
          translations: { where: { locale } },
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });
  return favorites.map(({ recipe: r }) => {
    const translation = r.translations[0];
    return {
      id: r.id,
      slug: r.slug,
      title: translation?.title ?? r.title,
      description: translation?.description ?? r.description,
      imageEmoji: r.imageEmoji,
      cookTimeMinutes: r.cookTimeMinutes,
      servings: r.servings,
      tags: parseTags(r.tags),
      createdAt: r.createdAt,
      ingredientEntries: r.recipeIngredients.map((ri) => ({
        name: ri.ingredient.name,
        quantity: ri.quantity,
      })),
    };
  });
}
