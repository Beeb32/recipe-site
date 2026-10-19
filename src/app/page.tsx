import { getAllRecipesLight, getAllTags } from "@/lib/recipes";
import { getLocale } from "@/lib/locale";
import { t } from "@/lib/i18n";
import { RecipeBrowser } from "@/components/RecipeBrowser";
import Link from "next/link";

export default async function Home() {
  const locale = await getLocale();
  const [recipes, tags] = await Promise.all([getAllRecipesLight(locale), getAllTags()]);
  const strings = t(locale);

  return (
    <main className="max-w-5xl mx-auto px-6 pb-12">
      <section className="relative overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 px-5 sm:px-6 py-8 sm:py-16 mt-5 sm:mt-8 mb-8 sm:mb-10 text-center bg-[radial-gradient(ellipse_at_top,rgba(245,158,66,0.16),transparent_65%)]">
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight max-w-2xl mx-auto leading-tight">
          {strings.heroTitle}
        </h1>
        <p className="mt-4 opacity-70 max-w-xl mx-auto">{strings.heroSub}</p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#recipes"
            className="rounded-full bg-accent text-black px-6 py-2.5 text-sm font-semibold hover:brightness-110 transition"
          >
            {strings.browseRecipes}
          </a>
          <Link
            href="/wheel"
            className="rounded-full border border-black/15 dark:border-white/25 px-6 py-2.5 text-sm font-medium hover:border-accent hover:text-accent transition"
          >
            🎡 {strings.spinTheWheel}
          </Link>
        </div>
        <p className="mt-6 text-xs opacity-50">{strings.recipeCount(recipes.length)}</p>
      </section>
      <div id="recipes" className="scroll-mt-6">
        <RecipeBrowser recipes={recipes} allTags={tags} locale={locale} />
      </div>
    </main>
  );
}
