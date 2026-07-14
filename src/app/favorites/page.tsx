import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/dal";
import { getFavoriteRecipesForUser } from "@/lib/favorites";
import { getLocale } from "@/lib/locale";
import { t } from "@/lib/i18n";
import { RecipeCard } from "@/components/RecipeCard";

export default async function FavoritesPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login");
  }

  const locale = await getLocale();
  const strings = t(locale);
  const recipes = await getFavoriteRecipesForUser(user.id, locale);

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight mb-2">{strings.myFavorites}</h1>
      <p className="opacity-70 mb-8">{strings.favoritesSubheading}</p>

      {recipes.length === 0 ? (
        <p className="text-sm opacity-70">{strings.noFavoritesYet}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} locale={locale} />
          ))}
        </div>
      )}
    </main>
  );
}
