import Link from "next/link";
import type { RecipeSummary } from "@/lib/recipes";
import type { Locale } from "@/lib/locale";
import { t } from "@/lib/i18n";

export function RecipeCard({ recipe, locale = "en" }: { recipe: RecipeSummary; locale?: Locale }) {
  const strings = t(locale);
  return (
    <Link
      href={`/recipes/${recipe.slug}`}
      className="group rounded-xl border border-black/10 dark:border-white/15 p-5 hover:border-black/30 dark:hover:border-white/30 transition-colors"
    >
      <div className="text-4xl mb-3">{recipe.imageEmoji}</div>
      <h3 className="font-semibold mb-1 group-hover:underline">{recipe.title}</h3>
      <p className="text-sm opacity-70 mb-3 line-clamp-2">{recipe.description}</p>
      <div className="flex items-center gap-3 text-xs opacity-60">
        <span>⏱ {recipe.cookTimeMinutes} {strings.min}</span>
        <span>🍽 {recipe.servings} {strings.servings}</span>
      </div>
    </Link>
  );
}
