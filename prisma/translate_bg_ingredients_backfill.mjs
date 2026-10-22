import fs from "fs";
import { prisma } from "./translate-lib.mjs";

// Backfills the Bulgarian ingredient lines (RecipeIngredientTranslation, locale "bg") for the ~430 recipes that
// had recipe titles/steps translated but not their ingredient lists. Data: prisma/data/bg_ingredients_backfill.json
// ({ lines: [bg text...], rows: [[slug, position, lineIndex]...] }). Safe to re-run: existing translations are never
// overwritten (only missing ones are created), and a recipe whose ingredient count no longer matches is skipped.
const data = JSON.parse(fs.readFileSync(new URL("./data/bg_ingredients_backfill.json", import.meta.url), "utf8"));

async function main() {
  const bySlug = new Map();
  for (const [slug, position, line] of data.rows) {
    if (!bySlug.has(slug)) bySlug.set(slug, []);
    bySlug.get(slug).push([position, line]);
  }
  let created = 0;
  let skipped = 0;
  for (const [slug, items] of bySlug) {
    const recipe = await prisma.recipe.findUnique({
      where: { slug },
      include: { recipeIngredients: { orderBy: { position: "asc" }, include: { translations: { where: { locale: "bg" } } } } },
    });
    if (!recipe) {
      console.warn(`Skipping ${slug}: recipe not found`);
      skipped++;
      continue;
    }
    const byPos = new Map(recipe.recipeIngredients.map((ri) => [ri.position, ri]));
    for (const [position, line] of items) {
      const ri = byPos.get(position);
      if (!ri || ri.translations.length > 0) continue;
      await prisma.recipeIngredientTranslation.create({
        data: { recipeIngredientId: ri.id, locale: "bg", displayText: data.lines[line] },
      });
      created++;
    }
  }
  console.log(`Created ${created} Bulgarian ingredient lines for ${bySlug.size - skipped} recipes (${skipped} skipped).`);
}

main();
