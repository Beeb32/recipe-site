import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import "dotenv/config";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL ?? "file:./dev.db",
});
const prisma = new PrismaClient({ adapter });

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
      "1 pizza dough ball",
      "1/2 cup crushed San Marzano tomatoes",
      "8 oz fresh mozzarella, torn",
      "Fresh basil leaves",
      "2 tbsp olive oil",
      "Salt to taste",
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
      "2 cans chickpeas, drained",
      "1 can coconut milk",
      "1 can diced tomatoes",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "1 tbsp curry powder",
      "1 tsp chili flakes",
      "2 tbsp vegetable oil",
      "Salt to taste",
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
      "2 1/4 cups all-purpose flour",
      "1 tsp baking soda",
      "1 tsp salt",
      "1 cup butter, softened",
      "3/4 cup granulated sugar",
      "3/4 cup brown sugar",
      "2 large eggs",
      "2 tsp vanilla extract",
      "2 cups chocolate chips",
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
      "2 slices sourdough bread",
      "1 ripe avocado",
      "1/2 lemon, juiced",
      "Chili flakes",
      "Salt and pepper to taste",
      "Olive oil for drizzling",
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
      "1 lb ground beef",
      "8 small corn tortillas",
      "1 tbsp chili powder",
      "1 tsp cumin",
      "1/2 tsp paprika",
      "1 onion, diced",
      "Shredded lettuce, diced tomato, shredded cheese for topping",
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
    await prisma.recipe.upsert({
      where: { slug: recipe.slug },
      update: {},
      create: {
        slug: recipe.slug,
        title: recipe.title,
        description: recipe.description,
        imageEmoji: recipe.imageEmoji,
        cookTimeMinutes: recipe.cookTimeMinutes,
        servings: recipe.servings,
        ingredients: JSON.stringify(recipe.ingredients),
        steps: JSON.stringify(recipe.steps),
        tags: JSON.stringify(recipe.tags),
      },
    });
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
