"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/dal";

export async function toggleFavorite(recipeId: string, recipeSlug: string) {
  const user = await getCurrentUser();
  // No UI currently lets a logged-out user reach this action (they see a
  // "Log in to save" link instead of the form), but guard anyway since
  // Server Actions are reachable directly by anyone who can send the POST.
  if (!user) return;

  const existing = await prisma.favorite.findUnique({
    where: { userId_recipeId: { userId: user.id, recipeId } },
  });

  if (existing) {
    await prisma.favorite.delete({ where: { id: existing.id } });
  } else {
    await prisma.favorite.create({ data: { userId: user.id, recipeId } });
  }

  revalidatePath(`/recipes/${recipeSlug}`);
  revalidatePath("/favorites");
}
