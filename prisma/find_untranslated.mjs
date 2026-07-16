import { prisma } from "./translate-lib.mjs";

const all = await prisma.recipe.findMany({
  select: { slug: true, title: true, translations: { where: { locale: "bg" }, select: { locale: true } } },
});

const untranslated = all.filter((r) => r.translations.length === 0);
console.log("Total recipes:", all.length);
console.log("Untranslated:", untranslated.length);
untranslated.forEach((r) => console.log(r.slug, "-", r.title));

await prisma.$disconnect();
