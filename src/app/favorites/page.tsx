import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/dal";
import { getFavoriteRecipesForUser } from "@/lib/favorites";
import { RecipeCard } from "@/components/RecipeCard";

export default async function FavoritesPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login");
  }

  const recipes = await getFavoriteRecipesForUser(user.id);

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight mb-2">My Favorites</h1>
      <p className="opacity-70 mb-8">Recipes you&apos;ve saved.</p>

      {recipes.length === 0 ? (
        <p className="text-sm opacity-70">
          No favorites yet - save a recipe from its page to see it here.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </main>
  );
}
