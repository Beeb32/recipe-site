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
  "palneni-domati": [200, 3, 33, 7],
  "panagyurski-eggs": [490, 29, 6, 41],
  "paneer-tikka": [380, 24, 9, 29],
  panzanella: [260, 5, 35, 10],
  "papaya-salad": [160, 4, 22, 5],
  "pasta-primavera": [550, 18, 90, 12],
  patatnik: [450, 18, 43, 23],
  "peanut-butter-banana-toast": [520, 15, 77, 16],
  "peanut-butter-cookies": [160, 3, 15, 9],
  "peanut-butter-and-jelly-sandwich": [490, 15, 71, 16],
  "pecan-pie": [540, 6, 68, 30],
  "pechen-sharan": [430, 31, 18, 25],
  "pecheni-chushki-s-chesan": [140, 2, 12, 10],
  "peking-duck": [1200, 40, 62, 84],
  "penne-arrabbiata": [510, 15, 90, 10],
  "pepperoni-pizza": [590, 25, 65, 24],
  "peri-peri-chicken": [770, 55, 3, 60],
  "peruvian-lomo-saltado": [630, 26, 40, 37],
  "pesto-pasta": [830, 22, 86, 43],
  "philly-cheesesteak": [900, 52, 42, 57],
  pierogi: [620, 17, 91, 17],
  "pigs-in-a-blanket": [240, 7, 9, 19],
  "pileshko-s-oriz": [1070, 63, 58, 60],
  "poke-bowl": [470, 36, 49, 11],
  popara: [770, 33, 70, 40],
  "pork-dumplings": [380, 19, 25, 22],
  "potato-leek-soup": [200, 3, 25, 11],
  "pound-cake": [500, 7, 68, 21],
  poutine: [660, 19, 54, 37],
  "pozole-rojo": [410, 23, 17, 24],
  "pulled-pork-sandwiches": [660, 37, 44, 37],
  "pulneni-chushki": [360, 17, 26, 17],
  "pulneni-tikvichki": [360, 15, 25, 22],
  "pumpkin-bread": [370, 5, 51, 15],
  "pumpkin-pie": [310, 6, 40, 14],
  "przheno-sirene": [470, 27, 9, 37],
  "quiche-lorraine": [420, 12, 15, 34],
  "quick-stovetop-mac-and-cheese": [800, 33, 93, 30],
  "quinoa-salad": [310, 10, 32, 16],
  rajma: [280, 11, 36, 10],
  ratatouille: [150, 2, 12, 9],
  "ravioli-with-marinara": [430, 15, 45, 22],
  "red-velvet-cake": [280, 5, 45, 10],
  revane: [460, 7, 76, 15],
  "rice-krispie-treats": [140, 1, 26, 3],
  "rice-pudding": [270, 7, 50, 5],
  "rice-and-beans": [480, 12, 89, 7],
  "rozovo-sladko": [290, 0, 75, 0],
  "saag-aloo": [210, 5, 26, 10],
  sach: [580, 56, 6, 35],
  samosa: [340, 6, 45, 14],
  sarmi: [320, 16, 20, 17],
  "sausage-and-egg-muffins": [150, 9, 1, 12],
  "scrambled-eggs-on-toast": [370, 18, 31, 16],
  "seafood-paella": [490, 30, 58, 12],
  "seven-layer-dip": [250, 7, 15, 17],
  shakshuka: [230, 11, 8, 16],
  "shawarma-chicken": [650, 37, 38, 37],
  "sheet-pan-chicken-and-vegetables": [520, 27, 25, 33],
  "sheet-pan-sausage-and-peppers": [450, 15, 8, 38],
  "shepherds-pie": [380, 18, 39, 15],
  "shkembe-chorba": [230, 18, 6, 12],
  "shopska-salad": [230, 8, 10, 17],
  "shrimp-ceviche": [140, 24, 7, 1],
  "shrimp-scampi-linguine": [720, 39, 85, 19],
  "shrimp-tacos": [330, 26, 21, 12],
  "simple-baked-apples": [210, 1, 41, 6],
  "simple-baked-chicken-breast": [370, 53, 1, 16],
  "simple-baked-meatballs": [480, 28, 26, 26],
  "simple-baked-pork-chops": [420, 46, 1, 25],
  "simple-baked-salmon": [430, 37, 1, 30],
  "simple-bean-salad": [200, 8, 28, 7],
  "simple-beef-stir-fry": [300, 27, 7, 16],
  "simple-chicken-soup": [160, 20, 12, 2],
  "simple-egg-fried-rice": [390, 8, 63, 10],
  "simple-fish-tacos": [410, 26, 22, 22],
  "simple-fruit-crisp": [370, 2, 56, 15],
  "simple-fruit-punch": [180, 0, 44, 0],
  "simple-fruit-salad": [130, 1, 32, 0],
  "simple-fruit-smoothie": [200, 4, 36, 4],
  "simple-garden-salad": [120, 1, 8, 10],
  "simple-lentil-soup": [250, 16, 44, 1],
  "simple-pasta-salad": [370, 10, 61, 9],
  "simple-roast-chicken": [430, 34, 1, 32],
  "simple-shortbread-cookies": [180, 2, 17, 11],
  "simple-tomato-pasta": [540, 18, 90, 12],
  "simple-turkey-burgers": [420, 31, 28, 19],
  "simple-vanilla-pudding": [220, 5, 37, 6],
  "simple-vegetable-soup": [70, 2, 15, 0],
  "sirene-po-shopski": [510, 35, 6, 40],
  "skillet-chicken-fajitas": [360, 30, 29, 13],
  "slanchogledov-halva": [380, 7, 26, 29],
  "sloppy-joes": [570, 28, 53, 25],
  "slow-cooker-applesauce": [150, 1, 40, 0],
  "slow-cooker-bbq-meatballs": [490, 17, 37, 24],
  "slow-cooker-beef-stew": [420, 30, 23, 22],
  "slow-cooker-chicken-curry": [480, 26, 7, 37],
  "slow-cooker-chicken-tacos": [380, 49, 26, 5],
  "slow-cooker-chili": [440, 30, 24, 23],
  "slow-cooker-mac-and-cheese": [660, 33, 65, 28],
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
