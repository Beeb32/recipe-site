import Link from "next/link";
import type { RecipeCardData } from "@/lib/recipes";
import type { Locale } from "@/lib/locale";
import { t } from "@/lib/i18n";
import { DishMedia } from "@/components/DishMedia";

export function RecipeCard({ recipe, locale = "en" }: { recipe: RecipeCardData; locale?: Locale }) {
  const strings = t(locale);
  return (
    <Link
      href={`/recipes/${recipe.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-black/10 dark:border-white/12 bg-black/[0.02] dark:bg-white/[0.03] hover:border-accent/60 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30 transition-all duration-200"
    >
      <div className="relative aspect-video overflow-hidden">
        <DishMedia slug={recipe.slug} emoji={recipe.imageEmoji} title={recipe.title} />
        <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-1.5 p-2.5 bg-gradient-to-t from-black/70 to-transparent pt-8">
          <span className="rounded-full bg-black/55 backdrop-blur px-2.5 py-0.5 text-xs text-white">
            ⏱ {recipe.cookTimeMinutes} {strings.min}
          </span>
          {recipe.caloriesPerServing != null && (
            <span
              title={strings.estimatedNutrition}
              className="rounded-full bg-black/55 backdrop-blur px-2.5 py-0.5 text-xs text-white"
            >
              🔥 {recipe.caloriesPerServing} {strings.kcal}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-semibold leading-snug mb-1 group-hover:text-accent transition-colors">{recipe.title}</h3>
        <p className="text-sm opacity-65 line-clamp-2">{recipe.description}</p>
        <p className="mt-auto pt-3 text-xs opacity-50">🍽 {recipe.servings} {strings.servings}</p>
      </div>
    </Link>
  );
}
