import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getRecipeBySlug } from "@/lib/recipes";
import { getCurrentUser } from "@/lib/dal";
import { isFavorited } from "@/lib/favorites";
import { toggleFavorite } from "@/app/actions/favorites";
import { getRatingSummary, getUserRating, getComments } from "@/lib/reviews";
import { getLocale } from "@/lib/locale";
import { t, tagLabel } from "@/lib/i18n";
import { RatingWidget } from "@/components/RatingWidget";
import { CommentSection } from "@/components/CommentSection";
import { SITE_URL } from "@/lib/site";

// ISO 8601 duration (e.g. 1h 30m -> "PT1H30M") - the format schema.org's
// Recipe.totalTime and Google's recipe rich results both require.
function toIsoDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `PT${hours > 0 ? `${hours}H` : ""}${mins > 0 ? `${mins}M` : ""}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getLocale();
  const recipe = await getRecipeBySlug(slug, locale);
  if (!recipe) return {};

  const url = `${SITE_URL}/recipes/${recipe.slug}`;
  const ogImage = `${url}/opengraph-image`;

  return {
    title: recipe.title,
    description: recipe.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: recipe.title,
      description: recipe.description,
      url,
      images: [{ url: ogImage, width: 1200, height: 630, alt: recipe.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: recipe.title,
      description: recipe.description,
      images: [ogImage],
    },
  };
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = await getLocale();
  const recipe = await getRecipeBySlug(slug, locale);

  if (!recipe) {
    notFound();
  }

  const strings = t(locale);
  const user = await getCurrentUser();
  const [favorited, ratingSummary, userRating, comments] = await Promise.all([
    user ? isFavorited(user.id, recipe.id) : Promise.resolve(false),
    getRatingSummary(recipe.id),
    user ? getUserRating(user.id, recipe.id) : Promise.resolve(null),
    getComments(recipe.id),
  ]);
  const toggleAction = toggleFavorite.bind(null, recipe.id, recipe.slug);

  const recipeUrl = `${SITE_URL}/recipes/${recipe.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipe.title,
    description: recipe.description,
    image: [`${recipeUrl}/opengraph-image`],
    datePublished: recipe.createdAt.toISOString(),
    totalTime: toIsoDuration(recipe.cookTimeMinutes),
    recipeYield: `${recipe.servings}`,
    recipeIngredient: recipe.ingredients,
    recipeInstructions: recipe.steps.map((step) => ({
      "@type": "HowToStep",
      text: step,
    })),
    keywords: recipe.tags.join(", "),
    ...(recipe.nutrition && {
      nutrition: {
        "@type": "NutritionInformation",
        calories: `${recipe.nutrition.caloriesPerServing} calories`,
        proteinContent: `${recipe.nutrition.proteinG}g`,
        carbohydrateContent: `${recipe.nutrition.carbsG}g`,
        fatContent: `${recipe.nutrition.fatG}g`,
      },
    }),
    ...(ratingSummary.count > 0 && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: ratingSummary.average,
        reviewCount: ratingSummary.count,
      },
    }),
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex items-start justify-between gap-4">
        <div className="text-6xl mb-4">{recipe.imageEmoji}</div>
        {user ? (
          <form action={toggleAction}>
            <button
              type="submit"
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                favorited
                  ? "bg-foreground text-background border-foreground"
                  : "border-black/10 dark:border-white/15 hover:border-black/30 dark:hover:border-white/30"
              }`}
            >
              {favorited ? strings.saved : strings.save}
            </button>
          </form>
        ) : (
          <Link href="/login" className="text-sm underline underline-offset-2 opacity-70 mt-2">
            {strings.logInToSave}
          </Link>
        )}
      </div>
      <h1 className="text-3xl font-semibold tracking-tight mb-2">{recipe.title}</h1>
      <p className="opacity-70 mb-4">{recipe.description}</p>

      <div className="flex items-center gap-4 text-sm opacity-70 mb-4">
        <span>⏱ {recipe.cookTimeMinutes} {strings.min}</span>
        <span>🍽 {recipe.servings} {strings.servings}</span>
      </div>

      <div className="mb-6">
        <RatingWidget
          recipeId={recipe.id}
          recipeSlug={recipe.slug}
          average={ratingSummary.average}
          count={ratingSummary.count}
          userRating={userRating}
          canRate={user !== null}
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        {recipe.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-black/10 dark:border-white/15 px-3 py-1 text-xs capitalize"
          >
            {tagLabel(locale, tag)}
          </span>
        ))}
      </div>

      {recipe.nutrition && (
        <div className="mb-10">
          <h2 className="font-semibold mb-1">{strings.nutrition}</h2>
          <p className="text-xs opacity-50 mb-3">{strings.nutritionEstimated}</p>
          <div className="flex flex-wrap gap-6 text-sm">
            <span>
              <span className="font-medium">{recipe.nutrition.caloriesPerServing}</span>{" "}
              <span className="opacity-70">{strings.calories}</span>
            </span>
            <span>
              <span className="font-medium">{recipe.nutrition.proteinG}g</span>{" "}
              <span className="opacity-70">{strings.protein}</span>
            </span>
            <span>
              <span className="font-medium">{recipe.nutrition.carbsG}g</span>{" "}
              <span className="opacity-70">{strings.carbs}</span>
            </span>
            <span>
              <span className="font-medium">{recipe.nutrition.fatG}g</span>{" "}
              <span className="opacity-70">{strings.fat}</span>
            </span>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <section className="sm:col-span-1">
          <h2 className="font-semibold mb-3">{strings.ingredients}</h2>
          <ul className="space-y-2 text-sm">
            {recipe.ingredients.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="opacity-50">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="sm:col-span-2">
          <h2 className="font-semibold mb-3">{strings.steps}</h2>
          <ol className="space-y-3 text-sm">
            {recipe.steps.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="font-medium opacity-50">{i + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <CommentSection
        recipeId={recipe.id}
        recipeSlug={recipe.slug}
        comments={comments}
        canComment={user !== null}
      />
    </main>
  );
}
