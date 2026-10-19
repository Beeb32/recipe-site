import { NextRequest, NextResponse } from "next/server";
import { getIngredientLinesForSlugs } from "@/lib/recipes";
import { getLocale } from "@/lib/locale";

// Ingredient lines for the recipes in a meal plan, for the shopping list (grouping/merging happens in the browser).
export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const slugs = body?.slugs;
  if (!Array.isArray(slugs) || !slugs.every((s) => typeof s === "string") || slugs.length > 40) {
    return NextResponse.json({ error: "slugs must be a string array (max 40)" }, { status: 400 });
  }
  const locale = await getLocale();
  const recipes = await getIngredientLinesForSlugs(Array.from(new Set(slugs as string[])), locale);
  return NextResponse.json({ recipes });
}
