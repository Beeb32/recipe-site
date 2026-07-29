import { ingredientInCategory } from "@/lib/ingredientCategories";
import { bgIngredientMatches } from "@/lib/ingredientTranslations";

// Prefix/substring match ("chocolate" finds "chocolate chips"), plus an
// exact singular/plural check ("red peppers" finds "red pepper" and vice
// versa) - deliberately NOT a loose "query contains name" check in general,
// since that let short names like "pepper" false-match inside unrelated
// longer queries like "red peppers" (which does contain the substring
// "pepper"). Requiring the plural to be an exact +s/-s match avoids that.
// A category query ("cheese", "meat") also matches any ingredient curated
// into that category, even when the name itself doesn't contain the word
// (parmesan, chicken breast) - see lib/ingredientCategories.ts. Ingredient
// names have no per-locale column (see lib/recipes.ts), so a Bulgarian
// query is checked against a separate curated bg->English word list
// instead (lib/ingredientTranslations.ts).
export function ingredientNameMatches(entryName: string, q: string): boolean {
  const singularQ = q.endsWith("s") ? q.slice(0, -1) : q;
  return (
    entryName.includes(q) ||
    q === `${entryName}s` ||
    entryName === `${q}s` ||
    ingredientInCategory(entryName, q) ||
    ingredientInCategory(entryName, singularQ) ||
    bgIngredientMatches(entryName, q)
  );
}
