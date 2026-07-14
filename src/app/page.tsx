import { getAllRecipes, getAllTags } from "@/lib/recipes";
import { getLocale } from "@/lib/locale";
import { t } from "@/lib/i18n";
import { RecipeBrowser } from "@/components/RecipeBrowser";

export default async function Home() {
  const locale = await getLocale();
  const [recipes, tags] = await Promise.all([getAllRecipes(locale), getAllTags()]);
  const strings = t(locale);

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight mb-2">{strings.recipesHeading}</h1>
      <p className="opacity-70 mb-8">{strings.recipesSubheading}</p>
      <RecipeBrowser recipes={recipes} allTags={tags} locale={locale} />
    </main>
  );
}
