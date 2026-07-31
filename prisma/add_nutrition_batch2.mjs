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
  "cacio-e-pepe": [600, 28, 84, 15],
  "caesar-salad": [370, 8, 7, 32],
  "california-roll": [300, 8, 34, 13],
  "candied-yams": [270, 2, 51, 7],
  "caprese-panini": [610, 28, 32, 38],
  "caprese-salad": [270, 11, 11, 22],
  "caprese-sandwich": [790, 33, 72, 38],
  "caprese-skewers": [150, 7, 6, 10],
  "caribbean-rice-and-peas": [400, 9, 59, 14],
  "carnitas-tacos": [770, 47, 23, 52],
  "carrot-cake": [780, 6, 89, 44],
  "cauliflower-soup": [250, 3, 9, 23],
  "cauliflower-tacos": [220, 5, 29, 10],
  "chai-tea-latte": [140, 4, 23, 4],
  "chana-masala": [290, 12, 44, 7],
  "cheese-ball": [320, 9, 4, 29],
  "cheese-and-crackers-platter": [490, 16, 45, 25],
  "cheesy-rice": [550, 17, 74, 19],
  "cherry-pie": [400, 3, 57, 18],
  cheverme: [760, 68, 1, 54],
  "chicken-adobo": [570, 39, 5, 43],
  "chicken-alfredo-skillet": [1100, 51, 87, 59],
  "chicken-biryani": [660, 33, 53, 33],
  "chicken-enchilada-casserole": [450, 33, 26, 20],
  "chicken-fried-rice": [470, 34, 50, 13],
  "chicken-katsu": [800, 38, 89, 31],
  "chicken-marsala": [440, 53, 8, 14],
  "chicken-noodle-soup": [230, 13, 22, 8],
  "chicken-parmesan": [870, 77, 39, 38],
  "chicken-piccata": [480, 53, 5, 24],
  "chicken-pot-pie": [530, 23, 43, 26],
  "chicken-quesadillas": [540, 40, 38, 26],
  "chicken-ramen": [900, 49, 60, 46],
  "chicken-salad-sandwich": [650, 50, 31, 33],
  "chicken-tacos": [430, 58, 21, 11],
  "chicken-tikka-masala": [530, 55, 11, 28],
  "chicken-tortilla-soup": [210, 19, 13, 10],
  "chicken-vindaloo": [570, 38, 6, 43],
  "chicken-sausage-jambalaya": [600, 35, 55, 22],
  "chickpea-salad": [350, 15, 39, 14],
  chilaquiles: [380, 11, 25, 24],
  "chili-con-carne": [550, 36, 21, 33],
  "chimichurri-steak": [580, 47, 2, 42],
  "chocolate-cake": [330, 5, 52, 12],
  "chocolate-chip-cookies": [270, 2, 29, 15],
  "chocolate-covered-strawberries": [250, 2, 18, 13],
  "chorba-ot-kiselec": [190, 6, 12, 13],
  churros: [360, 3, 40, 22],
  "chushki-byurek": [630, 41, 49, 32],
  "cinnamon-rolls": [360, 5, 55, 12],
  "cinnamon-toast": [410, 6, 55, 17],
  "classic-apple-pie": [450, 3, 63, 21],
  "classic-cheese-quesadilla": [690, 31, 26, 51],
  "classic-cheeseburger": [730, 52, 28, 45],
  "classic-coleslaw": [240, 1, 13, 21],
  "classic-french-toast": [270, 8, 27, 14],
  "classic-guacamole": [250, 3, 15, 22],
  "classic-hummus": [310, 11, 28, 17],
  "classic-lasagna": [630, 36, 35, 32],
  "classic-margherita-pizza": [560, 20, 63, 23],
  "classic-meatloaf": [570, 34, 28, 32],
  "classic-omelette": [420, 25, 2, 35],
  "cobb-salad": [470, 37, 4, 31],
  "coconut-chickpea-curry": [440, 14, 44, 21],
  "coconut-macaroons": [150, 2, 12, 12],
  "coconut-shrimp": [440, 32, 35, 17],
  "coffee-cake": [340, 5, 44, 16],
  "coffee-cake-muffins": [240, 4, 28, 12],
  "coq-au-vin": [1160, 70, 8, 72],
  "corn-chowder": [320, 5, 35, 18],
  cornbread: [190, 6, 28, 5],
  "corned-beef-hash": [330, 13, 22, 21],
  "crab-cakes": [350, 23, 9, 23],
  "cranberry-sauce": [120, 0, 31, 0],
  "cream-of-mushroom-soup": [230, 3, 10, 19],
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
