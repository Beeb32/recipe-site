import "server-only";
import { prisma } from "@/lib/prisma";

export type CommentWithAuthor = {
  id: string;
  body: string;
  createdAt: Date;
  authorName: string;
};

export async function getRatingSummary(recipeId: string): Promise<{ average: number; count: number }> {
  const result = await prisma.rating.aggregate({
    where: { recipeId },
    _avg: { value: true },
    _count: true,
  });
  return {
    average: result._avg.value ?? 0,
    count: result._count,
  };
}

export async function getUserRating(userId: string, recipeId: string): Promise<number | null> {
  const rating = await prisma.rating.findUnique({
    where: { userId_recipeId: { userId, recipeId } },
  });
  return rating?.value ?? null;
}

export async function getComments(recipeId: string): Promise<CommentWithAuthor[]> {
  const comments = await prisma.comment.findMany({
    where: { recipeId },
    include: { user: { select: { name: true } } },
    orderBy: { createdAt: "desc" },
  });
  return comments.map((c) => ({
    id: c.id,
    body: c.body,
    createdAt: c.createdAt,
    authorName: c.user.name,
  }));
}
