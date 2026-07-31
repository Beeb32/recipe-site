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
  "creamy-potato-salad": [340, 6, 27, 24],
  crepes: [250, 8, 30, 11],
  croissant: [560, 6, 48, 37],
  "creme-brulee": [610, 3, 40, 49],
  "cuban-sandwich": [930, 68, 67, 40],
  "cucumber-tomato-salad": [100, 1, 6, 7],
  "dal-tadka": [370, 18, 49, 11],
  "deviled-eggs": [120, 6, 1, 11],
  "dinner-rolls": [210, 5, 35, 4],
  "domashno-kiselo-mlyako": [100, 5, 8, 5],
  "domashno-sirene": [160, 13, 1, 13],
  "double-chocolate-cookies": [240, 2, 30, 12],
  "drob-sarma": [450, 28, 40, 18],
  "drobcheta-s-yaytsa": [500, 31, 10, 35],
  "dutch-baby-pancake": [230, 7, 19, 13],
  "dyulovo-sladko": [450, 1, 107, 4],
  "easy-smores-bars": [320, 3, 35, 18],
  "easy-tomato-soup": [200, 2, 12, 16],
  "egg-drop-soup": [75, 4, 3, 4],
  "egg-salad-sandwich": [630, 24, 31, 43],
  "egg-in-a-basket": [250, 9, 15, 16],
  "eggplant-parmesan": [340, 15, 24, 18],
  "eggs-benedict": [820, 29, 27, 66],
  empanadas: [430, 15, 28, 30],
  "ethiopian-lentil-stew": [440, 24, 67, 7],
  falafel: [400, 20, 63, 10],
  "falafel-bowl": [560, 18, 72, 20],
  "fasul-yahnia": [490, 22, 67, 14],
  "fattoush-salad": [200, 3, 23, 10],
  "fettuccine-alfredo": [810, 33, 84, 37],
  "fish-and-chips": [480, 30, 54, 13],
  "fluffy-pancakes": [310, 9, 41, 11],
  focaccia: [340, 6, 45, 14],
  "french-onion-soup": [380, 11, 35, 19],
  "french-toast-sticks": [250, 10, 26, 10],
  "fried-egg-avocado-toast": [630, 16, 51, 41],
  "fried-sweet-plantains": [220, 1, 34, 10],
  "frozen-yogurt-bark": [140, 6, 19, 6],
  "fudgy-brownies": [230, 2, 30, 12],
  "gabena-yahnia": [160, 6, 7, 10],
  "garash-cake": [460, 7, 35, 32],
  "garlic-bread": [260, 6, 22, 16],
  "garlic-butter-pasta": [560, 18, 84, 16],
  "garlic-butter-shrimp": [250, 24, 1, 12],
  "garlic-parmesan-rice": [460, 12, 74, 12],
  gazpacho: [180, 3, 20, 10],
  "general-tsos-chicken": [390, 19, 25, 22],
  gevrek: [460, 11, 67, 16],
  "gingerbread-cookies": [160, 2, 23, 6],
  "gnocchi-sage-butter": [420, 10, 44, 22],
  "greek-chicken-bowl": [480, 33, 45, 17],
  "greek-lemon-chicken-souvlaki": [270, 26, 1, 17],
  "greek-salad": [260, 6, 8, 23],
  "green-bean-almondine": [180, 4, 10, 14],
  "green-bean-casserole": [150, 3, 12, 9],
  "green-smoothie": [180, 5, 33, 4],
  "grilled-bbq-ribs": [780, 50, 26, 50],
  "grilled-burgers": [730, 52, 28, 45],
  "grilled-cheese-sandwich": [580, 20, 30, 39],
  "grilled-chicken-skewers": [390, 53, 5, 16],
  "grilled-chicken-wrap": [460, 30, 28, 26],
  "grilled-corn-on-the-cob": [160, 3, 19, 8],
  "grilled-salmon-lemon-butter": [430, 37, 1, 30],
  "grilled-steak": [780, 52, 0, 64],
  "grilled-vegetable-platter": [120, 2, 10, 10],
  "ground-beef-skillet": [490, 26, 25, 30],
  gyuvech: [350, 16, 15, 22],
  "ham-and-cheese-sandwich": [560, 32, 31, 32],
  "ham-and-swiss-panini": [550, 33, 31, 31],
  "hashbrown-casserole": [400, 11, 28, 26],
  "hawaiian-pizza": [590, 29, 70, 20],
  "hearty-beef-stew": [500, 33, 22, 28],
  "homemade-granola": [420, 8, 53, 20],
  "homemade-lemonade": [110, 0, 28, 0],
  horchata: [230, 5, 44, 4],
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
