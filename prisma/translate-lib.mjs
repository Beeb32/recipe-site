import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const databaseUrl = process.env.DATABASE_URL ?? "file:./dev.db";
const adapter = databaseUrl.startsWith("libsql:")
  ? new PrismaLibSql({ url: databaseUrl, authToken: process.env.TURSO_AUTH_TOKEN })
  : new PrismaBetterSqlite3({ url: databaseUrl });

export const prisma = new PrismaClient({ adapter });

// Shared by every translate_bg_batchN.mjs script - upserts a
// RecipeTranslation plus one RecipeIngredientTranslation per ingredient
// line (matched by position) for each { slug, title, description, steps,
// ingredients } entry.
export async function runTranslations(translations, locale = "bg") {
  let translatedCount = 0;
  for (const item of translations) {
    const recipe = await prisma.recipe.findUnique({
      where: { slug: item.slug },
      include: { recipeIngredients: { orderBy: { position: "asc" } } },
    });
    if (!recipe) {
      console.warn(`Skipping ${item.slug}: recipe not found`);
      continue;
    }

    await prisma.recipeTranslation.upsert({
      where: { recipeId_locale: { recipeId: recipe.id, locale } },
      update: { title: item.title, description: item.description, steps: JSON.stringify(item.steps) },
      create: {
        recipeId: recipe.id,
        locale,
        title: item.title,
        description: item.description,
        steps: JSON.stringify(item.steps),
      },
    });

    if (item.ingredients.length !== recipe.recipeIngredients.length) {
      console.warn(
        `Ingredient count mismatch for ${item.slug}: recipe has ${recipe.recipeIngredients.length}, translation has ${item.ingredients.length}`,
      );
    }

    for (let i = 0; i < recipe.recipeIngredients.length; i++) {
      const displayText = item.ingredients[i];
      if (!displayText) continue;
      const recipeIngredientId = recipe.recipeIngredients[i].id;
      await prisma.recipeIngredientTranslation.upsert({
        where: { recipeIngredientId_locale: { recipeIngredientId, locale } },
        update: { displayText },
        create: { recipeIngredientId, locale, displayText },
      });
    }

    translatedCount++;
  }
  console.log(`Translated ${translatedCount} recipes into ${locale}.`);
  await prisma.$disconnect();
}
