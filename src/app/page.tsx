import { getAllRecipes, getAllTags } from "@/lib/recipes";
import { RecipeBrowser } from "@/components/RecipeBrowser";

export default async function Home() {
  const [recipes, tags] = await Promise.all([getAllRecipes(), getAllTags()]);

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight mb-2">Recipes</h1>
      <p className="opacity-70 mb-8">Browse, search, and filter what to cook next.</p>
      <RecipeBrowser recipes={recipes} allTags={tags} />
    </main>
  );
}
