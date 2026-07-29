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
const nutrition = {
  "al-pastor-tacos": [580, 36, 30, 36],
  "aloo-gobi": [260, 5, 33, 11],
  "angel-food-cake": [180, 4, 40, 0],
  "antipasto-salad": [330, 13, 8, 27],
  "ants-on-a-log": [250, 8, 21, 16],
  "arroz-con-pollo": [490, 23, 52, 19],
  "asian-sesame-salad": [110, 2, 10, 8],
  "avocado-toast": [560, 10, 51, 37],
  ayran: [75, 6, 6, 4],
  "bbq-chicken-pizza": [600, 33, 72, 19],
  "bbq-pulled-chicken": [470, 52, 45, 7],
  "blt-sandwich": [400, 15, 32, 22],
  "blt-wrap": [430, 13, 29, 29],
  "baba-ganoush": [140, 3, 10, 10],
  "bacon-burger": [810, 58, 28, 52],
  "bagel-with-cream-cheese": [410, 13, 55, 16],
  "baja-fish-tacos": [460, 27, 38, 20],
  "baked-bbq-chicken": [290, 18, 17, 15],
  "baked-chicken-tenders": [470, 36, 41, 16],
  "baked-mac-and-cheese": [660, 27, 65, 29],
  "baked-oatmeal": [240, 8, 41, 6],
  "baked-potato-chips": [140, 2, 20, 6],
  "baked-potato-skins": [420, 14, 37, 23],
  "baked-tilapia": [200, 26, 1, 10],
  "baked-ziti": [520, 27, 50, 20],
  baklava: [460, 5, 51, 28],
  "banana-bread": [270, 4, 46, 8],
  "banana-nice-cream": [300, 6, 54, 8],
  "banana-nut-muffins": [260, 4, 34, 12],
  "banh-mi": [680, 41, 70, 23],
  banitsa: [500, 19, 33, 34],
  "basic-sugar-cookies": [160, 2, 20, 8],
  "beef-barley-soup": [300, 18, 30, 11],
  "beef-enchiladas": [550, 26, 23, 35],
  "beef-pho": [510, 35, 50, 14],
  "beef-tacos": [490, 29, 23, 28],
  "beef-wellington": [700, 48, 30, 38],
  "beef-and-broccoli": [310, 27, 10, 16],
  "belgian-waffles": [530, 12, 54, 29],
  "berries-and-cream": [290, 3, 21, 21],
  bibimbap: [650, 23, 66, 27],
  "birria-tacos": [860, 58, 30, 52],
  "biscuits-and-gravy": [860, 29, 71, 54],
  "black-bean-burger": [500, 19, 69, 17],
  "black-bean-soup": [220, 10, 33, 5],
  "black-bean-tacos": [270, 12, 52, 2],
  "blackened-fish": [260, 32, 1, 13],
  blondies: [190, 2, 26, 9],
  "blueberry-muffins": [230, 3, 36, 7],
  "bob-chorba": [260, 9, 32, 9],
  bobotie: [420, 25, 16, 25],
  borscht: [450, 24, 19, 31],
  boza: [170, 2, 40, 0],
  "brazilian-feijoada": [370, 23, 23, 21],
  "breakfast-burrito": [460, 20, 33, 28],
  "breakfast-casserole": [490, 26, 22, 32],
  "breakfast-hash": [420, 10, 43, 24],
  "breakfast-quesadilla": [560, 30, 26, 38],
  "breakfast-sausage-patties": [360, 24, 1, 28],
  "breakfast-skillet": [400, 16, 21, 28],
  "breakfast-tacos": [450, 24, 26, 26],
  "broccoli-cheddar-soup": [350, 11, 8, 30],
  "broccoli-rice-casserole": [350, 12, 34, 18],
  "broccoli-salad": [200, 3, 5, 17],
  bruschetta: [210, 4, 26, 9],
  "buddha-bowl": [450, 12, 61, 17],
  "buffalo-wings": [700, 51, 2, 53],
  "bulgarian-fish-soup": [310, 26, 16, 14],
  "bulgarian-musaka": [460, 23, 22, 29],
  "burrito-bowl": [460, 36, 67, 3],
  "butter-chicken": [700, 44, 7, 53],
  "butter-noodles": [460, 16, 58, 18],
  "buttered-popcorn": [260, 3, 18, 19],
  "buttermilk-biscuits": [220, 4, 24, 11],
  "butternut-squash-soup": [230, 2, 29, 12],
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
