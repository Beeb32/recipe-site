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
// Final batch - covers every remaining recipe.
const nutrition = {
  "slow-cooker-pot-roast": [660, 48, 23, 42],
  "smoothie-bowl": [490, 7, 95, 10],
  "snezhanka-salad": [200, 15, 11, 10],
  snickerdoodles: [180, 2, 23, 8],
  "soft-pretzels": [260, 6, 45, 4],
  "southwest-chicken-salad": [310, 32, 24, 8],
  "spaghetti-aglio-e-olio": [650, 15, 86, 28],
  "spaghetti-bolognese": [680, 27, 66, 26],
  "spaghetti-carbonara": [800, 31, 85, 35],
  "spanacheva-banitsa": [560, 18, 34, 39],
  spanakopita: [360, 10, 32, 20],
  "spicy-chickpea-curry": [500, 12, 47, 28],
  "spinach-artichoke-dip": [260, 8, 7, 23],
  "split-pea-soup": [270, 19, 44, 2],
  "strawberry-milkshake": [380, 6, 47, 17],
  "strawberry-sorbet": [100, 0, 26, 0],
  "stuffed-bell-peppers": [550, 31, 28, 32],
  "stuffed-mushrooms": [130, 4, 9, 8],
  "stuffed-portobello-mushrooms": [200, 6, 13, 12],
  "stuffed-shells": [430, 24, 29, 22],
  "sweet-potato-casserole": [310, 4, 34, 18],
  tabbouleh: [180, 2, 12, 14],
  "taco-casserole": [490, 27, 24, 30],
  "taco-salad": [530, 32, 17, 37],
  takoyaki: [310, 11, 30, 16],
  tarator: [250, 8, 10, 20],
  tempura: [350, 23, 36, 11],
  "teriyaki-chicken": [390, 25, 15, 23],
  "teriyaki-chicken-bowl": [630, 34, 58, 26],
  "teriyaki-salmon": [480, 37, 23, 25],
  "thai-basil-chicken": [580, 36, 50, 25],
  "thai-fried-rice": [460, 21, 62, 12],
  "thai-green-curry": [450, 35, 15, 25],
  "thai-peanut-noodles": [680, 13, 85, 30],
  "thai-red-curry": [490, 24, 15, 36],
  "thanksgiving-stuffing": [260, 5, 32, 11],
  tikvenik: [560, 6, 58, 34],
  "tikvichki-s-kiselo-mlyako": [210, 4, 13, 15],
  tiramisu: [460, 9, 36, 27],
  "tom-yum-soup": [140, 24, 4, 1],
  "tomato-basil-soup": [210, 2, 13, 16],
  "trail-mix": [370, 8, 32, 24],
  "tres-leches-cake": [420, 9, 53, 18],
  tsatsa: [360, 34, 6, 21],
  "tuna-noodle-casserole": [560, 31, 60, 18],
  "tuna-salad-sandwich": [560, 38, 31, 28],
  "turkey-avocado-wrap": [500, 28, 34, 27],
  "turkey-club-sandwich": [650, 41, 47, 27],
  turshiya: [30, 1, 6, 0],
  tutmanik: [430, 16, 42, 22],
  "two-ingredient-banana-pancakes": [260, 10, 27, 13],
  "vanilla-cake": [370, 5, 49, 18],
  "vegan-chili": [160, 7, 28, 1],
  "vegetable-biryani": [370, 7, 57, 10],
  "vegetable-chow-mein": [300, 7, 50, 7],
  "vegetable-curry": [310, 3, 26, 21],
  "vegetable-frittata": [230, 15, 5, 15],
  "vegetable-lo-mein": [420, 10, 72, 8],
  "vegetable-spring-rolls": [220, 3, 38, 6],
  "vegetable-stir-fry": [120, 3, 13, 7],
  "veggie-pizza": [540, 22, 68, 18],
  "veggie-wrap": [290, 5, 31, 16],
  "vietnamese-caramel-pork": [740, 29, 23, 60],
  "vietnamese-fresh-spring-rolls": [470, 31, 53, 11],
  "vietnamese-iced-coffee": [190, 5, 32, 5],
  "waldorf-salad": [370, 2, 19, 31],
  "watermelon-feta-salad": [200, 8, 14, 15],
  "white-pizza": [700, 29, 64, 36],
  "wiener-schnitzel": [450, 40, 24, 19],
  "wonton-soup": [250, 14, 18, 14],
  "xiao-long-bao": [340, 18, 19, 17],
  yakisoba: [420, 16, 41, 19],
  "yogurt-parfait": [510, 18, 73, 20],
  "yorkshire-pudding": [260, 6, 17, 18],
  "zaatar-flatbread": [330, 6, 47, 11],
  zelnik: [310, 11, 36, 12],
  "zucchini-bread": [360, 5, 49, 15],
  "zucchini-noodles-with-pesto": [200, 6, 7, 16],
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
