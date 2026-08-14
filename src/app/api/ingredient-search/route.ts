import { NextRequest, NextResponse } from "next/server";
import { searchRecipesByIngredients } from "@/lib/recipes";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const ingredients = body?.ingredients;
  if (!Array.isArray(ingredients) || !ingredients.every((i) => typeof i === "string")) {
    return NextResponse.json({ error: "ingredients must be a string array" }, { status: 400 });
  }

  const results = await searchRecipesByIngredients(ingredients);
  return NextResponse.json({ results });
}
