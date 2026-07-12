import Link from "next/link";
import type { RecipeSummary } from "@/lib/recipes";

export function RecipeCard({ recipe }: { recipe: RecipeSummary }) {
  return (
    <Link
      href={`/recipes/${recipe.slug}`}
      className="group rounded-xl border border-black/10 dark:border-white/15 p-5 hover:border-black/30 dark:hover:border-white/30 transition-colors"
    >
      <div className="text-4xl mb-3">{recipe.imageEmoji}</div>
      <h3 className="font-semibold mb-1 group-hover:underline">{recipe.title}</h3>
      <p className="text-sm opacity-70 mb-3 line-clamp-2">{recipe.description}</p>
      <div className="flex items-center gap-3 text-xs opacity-60">
        <span>⏱ {recipe.cookTimeMinutes} min</span>
        <span>🍽 {recipe.servings} servings</span>
      </div>
    </Link>
  );
}
