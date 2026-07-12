"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/dal";

export async function rateRecipe(recipeId: string, recipeSlug: string, formData: FormData) {
  const user = await getCurrentUser();
  if (!user) return;

  const raw = formData.get("value");
  const value = Number(raw);
  if (!Number.isInteger(value) || value < 1 || value > 5) return;

  await prisma.rating.upsert({
    where: { userId_recipeId: { userId: user.id, recipeId } },
    update: { value },
    create: { userId: user.id, recipeId, value },
  });

  revalidatePath(`/recipes/${recipeSlug}`);
}

export async function addComment(recipeId: string, recipeSlug: string, formData: FormData) {
  const user = await getCurrentUser();
  if (!user) return;

  const body = String(formData.get("body") ?? "").trim();
  if (body.length === 0 || body.length > 2000) return;

  await prisma.comment.create({
    data: { userId: user.id, recipeId, body },
  });

  revalidatePath(`/recipes/${recipeSlug}`);
}
