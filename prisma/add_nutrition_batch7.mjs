import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const databaseUrl = process.env.DATABASE_URL ?? "file:./dev.db";
const adapter = databaseUrl.startsWith("libsql:")
  ? new PrismaLibSql({ url: databaseUrl, authToken: process.env.TURSO_AUTH_TOKEN })
  : new PrismaBetterSqlite3({ url: databaseUrl });
const prisma = new PrismaClient({ adapter });

// Per-serving estimates, reasoned from each recipe's ingredient list and
// servings count - not lab-measured. calories, proteinG, carbsG, fatG.
// Covers the 10 tomato-forward recipes added after the main nutrition rollout.
const nutrition = {
  "pappa-al-pomodoro": [350, 7, 38, 19],
  "pasta-puttanesca": [590, 17, 89, 17],
  menemen: [400, 19, 14, 31],
  "tomato-rasam": [170, 4, 21, 7],
  chakalaka: [190, 5, 23, 7],
  "salsa-roja": [40, 2, 9, 0],
  "tomato-egg-stir-fry": [340, 15, 14, 25],
  kachumbari: [50, 2, 11, 0],
  "tomato-chutney": [70, 2, 6, 5],
  "shrimp-creole": [340, 27, 34, 8],
};

async function main() {
  let updated = 0;
  for (const [slug, [caloriesPerServing, proteinG, carbsG, fatG]] of Object.entries(nutrition)) {
    const result = await prisma.recipe.updateMany({
      where: { slug },
      data: { caloriesPerServing, proteinG, carbsG, fatG },
    });
    if (result.count === 0) {
      console.warn(`No recipe found for slug: ${slug}`);
    } else {
      updated++;
    }
  }
  console.log(`Updated ${updated} recipes with nutrition estimates.`);
}

main().finally(() => prisma.$disconnect());
