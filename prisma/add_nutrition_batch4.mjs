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
  "hot-chocolate": [340, 10, 43, 17],
  "huevos-rancheros": [430, 15, 32, 24],
  "hummus-veggie-pita": [250, 9, 40, 6],
  "hungarian-goulash": [560, 34, 26, 33],
  "iced-coffee": [120, 4, 18, 4],
  "instant-oatmeal-with-fruit": [490, 14, 86, 11],
  "instant-ramen-upgrade": [460, 14, 54, 20],
  "italian-wedding-soup": [380, 22, 28, 17],
  "jalapeno-poppers": [260, 11, 4, 22],
  "japanese-curry": [900, 24, 98, 40],
  japchae: [460, 13, 55, 20],
  "jerk-chicken": [780, 55, 11, 57],
  kachamak: [510, 17, 55, 25],
  "kake-udon": [390, 8, 79, 1],
  "kale-caesar-salad": [310, 8, 14, 24],
  kapama: [800, 42, 32, 49],
  katak: [200, 10, 7, 16],
  katmi: [430, 12, 62, 14],
  kavarma: [600, 34, 6, 43],
  kebapche: [310, 23, 1, 23],
  keks: [340, 3, 45, 15],
  "key-lime-pie": [470, 6, 48, 27],
  khachapuri: [680, 31, 59, 35],
  "kimchi-fried-rice": [450, 11, 64, 15],
  "kiselo-zele": [50, 2, 12, 0],
  "kofta-kebabs": [310, 23, 3, 23],
  "koledna-pitka": [250, 5, 38, 8],
  "korean-bbq-short-ribs": [750, 38, 25, 53],
  "korean-beef-bulgogi": [570, 34, 16, 40],
  "korean-fried-chicken": [810, 51, 44, 46],
  kozunak: [350, 8, 53, 10],
  "kung-pao-chicken": [280, 31, 10, 12],
  "kurban-chorba": [470, 32, 7, 34],
  kyopoolu: [120, 2, 12, 7],
  kyufte: [630, 41, 2, 49],
  "lamb-burger": [640, 37, 28, 42],
  "lasagna-soup": [450, 25, 31, 20],
  "lemon-bars": [260, 3, 37, 12],
  "lemon-bundt-cake": [570, 7, 80, 25],
  "lemon-cookies": [170, 1, 22, 8],
  "lentil-shepherds-pie": [210, 8, 36, 4],
  "leshta-yahnia": [450, 24, 64, 10],
  "loaded-baked-potato-soup": [390, 10, 23, 27],
  "loaded-baked-potatoes": [440, 14, 37, 26],
  "loaded-nachos": [560, 18, 51, 30],
  "lobster-rolls": [420, 26, 25, 24],
  "lozovi-sarmi": [200, 2, 28, 9],
  lyutenitsa: [100, 2, 12, 5],
  "magic-cookie-bars": [330, 2, 31, 21],
  "malai-kofta": [500, 10, 35, 34],
  "mango-lassi": [270, 8, 50, 6],
  "mango-salsa-fish": [250, 32, 10, 9],
  "mapo-tofu": [350, 19, 7, 26],
  "mashed-potatoes": [240, 3, 23, 15],
  "massaman-curry": [610, 26, 31, 42],
  medenki: [400, 5, 62, 14],
  mekitsi: [290, 9, 47, 6],
  "mexican-street-corn": [290, 6, 20, 21],
  "microwave-mug-cake": [720, 5, 81, 44],
  milinki: [380, 10, 48, 16],
  "minestrone-soup": [210, 6, 26, 6],
  "mish-mash": [380, 20, 7, 31],
  "miso-soup": [75, 5, 4, 2],
  "molasses-cookies": [140, 1, 20, 6],
  "moroccan-chicken-tagine": [460, 25, 13, 33],
  moussaka: [330, 14, 9, 21],
  "mozak-pane": [300, 14, 6, 23],
  "mug-omelette": [270, 19, 2, 19],
  muhammara: [230, 4, 16, 18],
  mujadara: [620, 15, 75, 28],
  "mushroom-risotto": [480, 10, 63, 15],
  "mushroom-swiss-burger": [820, 53, 32, 53],
  naan: [320, 7, 46, 11],
  "new-england-clam-chowder": [350, 15, 20, 20],
  "new-york-cheesecake": [490, 8, 35, 36],
  "no-bake-breakfast-bars": [300, 7, 39, 13],
  "no-bake-cheesecake-cups": [600, 6, 34, 49],
  "no-bake-chocolate-pudding-pie": [340, 4, 42, 18],
  "no-bake-energy-bites": [160, 4, 18, 8],
  "no-bake-oatmeal-cookies": [350, 6, 50, 13],
  "no-bake-peanut-butter-bars": [420, 5, 44, 22],
  "no-bake-trail-bars": [250, 7, 32, 10],
  "no-churn-vanilla-ice-cream": [360, 4, 30, 26],
  "no-knead-bread": [160, 5, 34, 1],
  "oatmeal-raisin-cookies": [190, 3, 26, 8],
  okonomiyaki: [550, 12, 58, 24],
  "one-bowl-brownies": [170, 2, 23, 9],
  "one-pot-beef-and-noodles": [580, 30, 40, 29],
  "one-pot-chicken-and-rice": [630, 30, 58, 30],
  "one-pot-chili": [280, 18, 14, 15],
  "one-pot-pasta": [510, 15, 90, 10],
  onigiri: [270, 11, 43, 6],
  "oriz-na-mlyako": [290, 9, 52, 6],
  "orzo-salad": [280, 9, 39, 9],
  "ovcharska-salad": [300, 15, 11, 21],
  "oven-smoked-brisket": [510, 45, 3, 35],
  "overnight-oats": [380, 13, 64, 9],
  pacha: [430, 35, 1, 31],
  "pad-thai": [460, 21, 58, 16],
  "palak-paneer": [270, 13, 9, 20],
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
