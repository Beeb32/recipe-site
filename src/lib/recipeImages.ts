// Dish pictures live in public/recipe-images/<slug>-card.webp (640x360, for cards) and
// <slug>-hero.webp (1200x675, for the recipe page), plus <slug>-icon.webp (a small round crop used as the
// recipe's icon in the wheel and elsewhere). A recipe is listed here only once its files exist -
// recipes not listed keep the tinted emoji "dish tile" (see DishMedia). No database change needed.
//
// To add a picture: put the three files in public/recipe-images/ and add the slug below
// (the helper script tools/add-recipe-image.mjs does both).
export const RECIPES_WITH_IMAGES: ReadonlySet<string> = new Set<string>([]);

export type RecipeImageKind = "card" | "hero" | "icon";

/** Public URL of a recipe's picture, or null if it has none yet. */
export function recipeImageSrc(slug: string, kind: RecipeImageKind): string | null {
  return RECIPES_WITH_IMAGES.has(slug) ? `/recipe-images/${slug}-${kind}.webp` : null;
}
