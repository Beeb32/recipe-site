import { getAllRecipes } from "@/lib/recipes";
import { getLocale } from "@/lib/locale";
import { t } from "@/lib/i18n";
import { Wheel } from "@/components/Wheel";

export default async function WheelPage() {
  const locale = await getLocale();
  const strings = t(locale);
  const recipes = await getAllRecipes(locale);

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight mb-2 text-center">{strings.wheelHeading}</h1>
      <p className="opacity-70 mb-8 text-center">{strings.wheelSubheading}</p>
      <Wheel recipes={recipes} locale={locale} />
    </main>
  );
}
