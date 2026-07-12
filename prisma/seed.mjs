import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaLibSql } from "@prisma/adapter-libsql";
import "dotenv/config";

const databaseUrl = process.env.DATABASE_URL ?? "file:./dev.db";
const adapter = databaseUrl.startsWith("libsql:")
  ? new PrismaLibSql({ url: databaseUrl, authToken: process.env.TURSO_AUTH_TOKEN })
  : new PrismaBetterSqlite3({ url: databaseUrl });
const prisma = new PrismaClient({ adapter });

// Each ingredient line pairs the exact display text (shown on the recipe
// page as-is), a canonical ingredient name (what "what can I cook with X"
// search matches against), and a parsed quantity (null when the line has no
// clean numeric amount, e.g. "Salt to taste") used to rank search matches by
// how much of that ingredient a recipe actually uses.
const recipes = [
  {
    slug: "classic-margherita-pizza",
    title: "Classic Margherita Pizza",
    description:
      "A simple, ingredient-driven pizza with fresh mozzarella, basil, and a bright tomato sauce.",
    imageEmoji: "🍕",
    cookTimeMinutes: 25,
    servings: 4,
    ingredients: [
      { text: "1 pizza dough ball", ingredient: "pizza dough", quantity: 1 },
      { text: "1/2 cup crushed San Marzano tomatoes", ingredient: "tomato", quantity: 0.5 },
      { text: "8 oz fresh mozzarella, torn", ingredient: "mozzarella", quantity: 8 },
      { text: "Fresh basil leaves", ingredient: "basil", quantity: null },
      { text: "2 tbsp olive oil", ingredient: "olive oil", quantity: 2 },
      { text: "Salt to taste", ingredient: "salt", quantity: null },
    ],
    steps: [
      "Preheat oven (with a pizza stone if you have one) to 500°F / 260°C.",
      "Stretch the dough into a 12-inch round on a floured surface.",
      "Spread the crushed tomatoes evenly, leaving a border for the crust.",
      "Scatter torn mozzarella over the sauce.",
      "Bake for 8-10 minutes until the crust is golden and cheese is bubbling.",
      "Top with fresh basil and a drizzle of olive oil before serving.",
    ],
    tags: ["dinner", "vegetarian", "italian"],
  },
  {
    slug: "spicy-chickpea-curry",
    title: "Spicy Chickpea Curry",
    description:
      "A warming, one-pot chickpea curry in a spiced tomato-coconut sauce, ready in half an hour.",
    imageEmoji: "🍛",
    cookTimeMinutes: 30,
    servings: 4,
    ingredients: [
      { text: "2 cans chickpeas, drained", ingredient: "chickpeas", quantity: 2 },
      { text: "1 can coconut milk", ingredient: "coconut milk", quantity: 1 },
      { text: "1 can diced tomatoes", ingredient: "tomato", quantity: 1 },
      { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
      { text: "3 cloves garlic, minced", ingredient: "garlic", quantity: 3 },
      { text: "1 tbsp curry powder", ingredient: "curry powder", quantity: 1 },
      { text: "1 tsp chili flakes", ingredient: "chili flakes", quantity: 1 },
      { text: "2 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 2 },
      { text: "Salt to taste", ingredient: "salt", quantity: null },
    ],
    steps: [
      "Heat the oil in a large pot and sauté the onion until soft, about 5 minutes.",
      "Add garlic, curry powder, and chili flakes; cook for 1 minute until fragrant.",
      "Stir in the diced tomatoes and coconut milk, then bring to a simmer.",
      "Add the chickpeas and simmer for 15 minutes, stirring occasionally.",
      "Season with salt and serve over rice.",
    ],
    tags: ["dinner", "vegan", "quick"],
  },
  {
    slug: "chocolate-chip-cookies",
    title: "Chocolate Chip Cookies",
    description:
      "Chewy in the middle, crisp at the edges - a reliable everyday chocolate chip cookie.",
    imageEmoji: "🍪",
    cookTimeMinutes: 20,
    servings: 24,
    ingredients: [
      { text: "2 1/4 cups all-purpose flour", ingredient: "flour", quantity: 2.25 },
      { text: "1 tsp baking soda", ingredient: "baking soda", quantity: 1 },
      { text: "1 tsp salt", ingredient: "salt", quantity: 1 },
      { text: "1 cup butter, softened", ingredient: "butter", quantity: 1 },
      { text: "3/4 cup granulated sugar", ingredient: "sugar", quantity: 0.75 },
      { text: "3/4 cup brown sugar", ingredient: "brown sugar", quantity: 0.75 },
      { text: "2 large eggs", ingredient: "eggs", quantity: 2 },
      { text: "2 tsp vanilla extract", ingredient: "vanilla extract", quantity: 2 },
      { text: "2 cups chocolate chips", ingredient: "chocolate chips", quantity: 2 },
    ],
    steps: [
      "Preheat oven to 375°F / 190°C.",
      "Whisk together flour, baking soda, and salt in a bowl.",
      "Cream the butter and both sugars until light and fluffy.",
      "Beat in the eggs and vanilla.",
      "Mix in the dry ingredients until just combined, then fold in chocolate chips.",
      "Drop rounded tablespoons of dough onto a baking sheet and bake for 9-11 minutes.",
    ],
    tags: ["dessert", "baking", "vegetarian"],
  },
  {
    slug: "avocado-toast",
    title: "Avocado Toast",
    description: "A fast, satisfying breakfast: mashed avocado on toasted sourdough with chili flakes.",
    imageEmoji: "🥑",
    cookTimeMinutes: 10,
    servings: 1,
    ingredients: [
      { text: "2 slices sourdough bread", ingredient: "sourdough bread", quantity: 2 },
      { text: "1 ripe avocado", ingredient: "avocado", quantity: 1 },
      { text: "1/2 lemon, juiced", ingredient: "lemon", quantity: 0.5 },
      { text: "Chili flakes", ingredient: "chili flakes", quantity: null },
      { text: "Salt to taste", ingredient: "salt", quantity: null },
      { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      { text: "Olive oil for drizzling", ingredient: "olive oil", quantity: null },
    ],
    steps: [
      "Toast the sourdough slices until golden and crisp.",
      "Mash the avocado with lemon juice, salt, and pepper.",
      "Spread the mashed avocado over the toast.",
      "Top with chili flakes and a drizzle of olive oil.",
    ],
    tags: ["breakfast", "vegetarian", "quick"],
  },
  {
    slug: "beef-tacos",
    title: "Beef Tacos",
    description: "Weeknight ground beef tacos with a quick homemade spice blend.",
    imageEmoji: "🌮",
    cookTimeMinutes: 20,
    servings: 4,
    ingredients: [
      { text: "1 lb ground beef", ingredient: "ground beef", quantity: 1 },
      { text: "8 small corn tortillas", ingredient: "corn tortillas", quantity: 8 },
      { text: "1 tbsp chili powder", ingredient: "chili powder", quantity: 1 },
      { text: "1 tsp cumin", ingredient: "cumin", quantity: 1 },
      { text: "1/2 tsp paprika", ingredient: "paprika", quantity: 0.5 },
      { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
      { text: "Shredded lettuce for topping", ingredient: "lettuce", quantity: null },
      { text: "Diced tomato for topping", ingredient: "tomato", quantity: null },
      { text: "Shredded cheese for topping", ingredient: "cheese", quantity: null },
    ],
    steps: [
      "Cook the diced onion in a pan over medium heat until softened.",
      "Add the ground beef and cook until browned, breaking it up as it cooks.",
      "Stir in chili powder, cumin, and paprika; cook for another 2 minutes.",
      "Warm the tortillas and fill with the beef mixture.",
      "Top with lettuce, tomato, and cheese.",
    ],
    tags: ["dinner", "quick"],
  },
];

async function main() {
  for (const recipe of recipes) {
    const created = await prisma.recipe.upsert({
      where: { slug: recipe.slug },
      update: {
        title: recipe.title,
        description: recipe.description,
        imageEmoji: recipe.imageEmoji,
        cookTimeMinutes: recipe.cookTimeMinutes,
        servings: recipe.servings,
        steps: JSON.stringify(recipe.steps),
        tags: JSON.stringify(recipe.tags),
      },
      create: {
        slug: recipe.slug,
        title: recipe.title,
        description: recipe.description,
        imageEmoji: recipe.imageEmoji,
        cookTimeMinutes: recipe.cookTimeMinutes,
        servings: recipe.servings,
        steps: JSON.stringify(recipe.steps),
        tags: JSON.stringify(recipe.tags),
      },
    });

    // Re-link ingredients fresh each run rather than trying to diff them -
    // simplest way to keep a hand-authored seed script idempotent.
    await prisma.recipeIngredient.deleteMany({ where: { recipeId: created.id } });

    for (let i = 0; i < recipe.ingredients.length; i++) {
      const { text, ingredient, quantity } = recipe.ingredients[i];
      const ingredientRow = await prisma.ingredient.upsert({
        where: { name: ingredient },
        update: {},
        create: { name: ingredient },
      });
      await prisma.recipeIngredient.create({
        data: {
          recipeId: created.id,
          ingredientId: ingredientRow.id,
          displayText: text,
          quantity: quantity,
          position: i,
        },
      });
    }
  }
  console.log(`Seeded ${recipes.length} recipes.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
