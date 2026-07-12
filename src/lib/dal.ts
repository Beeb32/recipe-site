import "server-only";
import { cache } from "react";
import { cookies } from "next/headers";
import { decrypt } from "@/lib/session";
import { prisma } from "@/lib/prisma";

// Optimistic, non-redirecting check: most of this site is public, so callers
// decide for themselves whether a missing session means "show a login link"
// or "reject the action" - unlike a typical dashboard app, there's no single
// protected-route boundary to enforce here.
export const getSession = cache(async () => {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("session")?.value;
  const session = await decrypt(cookie);
  if (!session?.userId) return null;
  return { userId: session.userId };
});

export const getCurrentUser = cache(async () => {
  const session = await getSession();
  if (!session) return null;

  const user = await prisma.user.findUnique({
    where: { id: session.userId },
    select: { id: true, name: true, email: true },
  });
  return user;
});
