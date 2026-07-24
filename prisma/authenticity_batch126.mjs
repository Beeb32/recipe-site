import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "coffee-cake-muffins",
      title: "Coffee Cake Muffins",
      description:
        "Individual muffins with a cinnamon streusel topping, lifted with baking powder and rounded out with a pinch of salt - all the flavor of coffee cake in muffin form, minus the dense texture that comes from skipping the leavening most quick versions forget.",
      imageEmoji: "🧁",
      cookTimeMinutes: 35,
      servings: 12,
      ingredients: [
        { text: "2 cups flour", ingredient: "flour", quantity: 2 },
        { text: "1 1/2 tsp baking powder", ingredient: "baking powder", quantity: 1.5 },
        { text: "1/2 tsp salt", ingredient: "salt", quantity: 0.5 },
        { text: "3/4 cup sugar", ingredient: "sugar", quantity: 0.75 },
        { text: "2 eggs", ingredient: "eggs", quantity: 2 },
        { text: "1 cup sour cream", ingredient: "sour cream", quantity: 1 },
        { text: "1/2 cup melted butter", ingredient: "butter", quantity: 0.5 },
        { text: "2 tsp cinnamon", ingredient: "cinnamon", quantity: 2 },
      ],
      steps: [
        "Preheat oven to 375°F and line a muffin tin.",
        "Whisk together the flour, baking powder, and salt.",
        "Whisk together the sugar, eggs, sour cream, and half the butter, then stir in the flour mixture.",
        "Divide the batter among the muffin cups.",
        "Mix the remaining butter with cinnamon and a little sugar, sprinkle on top, and bake for 18-20 minutes.",
      ],
      tags: ["breakfast", "vegetarian", "baking"],
    },
    bg: {
      title: "Мъфини кафе кекс",
      description:
        "Индивидуални мъфини с посипка от канела, повдигнати с бакпулвер и допълнени с щипка сол - целият вкус на кафе кекс във формата на мъфин, минус плътната текстура, която идва от пропускането на втасването, което повечето бързи версии забравят.",
      steps: [
        "Загрейте фурната на 190°C и застелете форма за мъфини.",
        "Разбъркайте брашното, бакпулвера и солта.",
        "Разбийте захарта, яйцата, заквасената сметана и половината масло заедно, после разбъркайте брашнената смес.",
        "Разпределете тестото в купичките за мъфини.",
        "Смесете останалото масло с канела и малко захар, поръсете отгоре и печете 18-20 минути.",
      ],
      ingredients: [
        "2 чаши брашно",
        "1 1/2 ч.л. бакпулвер",
        "1/2 ч.л. сол",
        "3/4 чаша захар",
        "2 яйца",
        "1 чаша заквасена сметана",
        "1/2 чаша разтопено масло",
        "2 ч.л. канела",
      ],
    },
  },
  {
    en: {
      slug: "double-chocolate-cookies",
      title: "Double Chocolate Cookies",
      description:
        "Rich chocolate cookies loaded with extra chocolate chips, lifted with baking soda and rounded out with salt and vanilla - cocoa-heavy cookie dough with no leavening at all is why most quick double chocolate cookies bake flat and dense instead of soft-centered.",
      imageEmoji: "🍪",
      cookTimeMinutes: 25,
      servings: 24,
      ingredients: [
        { text: "1 cup butter, softened", ingredient: "butter", quantity: 1 },
        { text: "1 1/2 cups sugar", ingredient: "sugar", quantity: 1.5 },
        { text: "2 eggs", ingredient: "eggs", quantity: 2 },
        { text: "1 tsp vanilla extract", ingredient: "vanilla extract", quantity: 1 },
        { text: "2 cups flour", ingredient: "flour", quantity: 2 },
        { text: "3/4 cup cocoa powder", ingredient: "cocoa powder", quantity: 0.75 },
        { text: "1 tsp baking soda", ingredient: "baking soda", quantity: 1 },
        { text: "1/2 tsp salt", ingredient: "salt", quantity: 0.5 },
        { text: "2 cups chocolate chips", ingredient: "chocolate chips", quantity: 2 },
      ],
      steps: [
        "Preheat oven to 350°F.",
        "Cream the butter and sugar, then beat in the eggs and vanilla.",
        "Mix in the flour, cocoa powder, baking soda, and salt, then fold in the chocolate chips.",
        "Drop spoonfuls onto a baking sheet and bake for 9-11 minutes.",
      ],
      tags: ["dessert", "vegetarian", "baking"],
    },
    bg: {
      title: "Двойно шоколадови бисквити",
      description:
        "Наситени шоколадови бисквити, богати на допълнителни шоколадови парченца, повдигнати със сода за хляб и допълнени със сол и ванилия - тесто, богато на какао, без никакво втасване, е причината повечето бързи двойно шоколадови бисквити да излизат плоски и плътни, вместо меки в средата.",
      steps: [
        "Загрейте фурната на 180°C.",
        "Разбийте маслото и захарта на крем, после добавете яйцата и ванилията.",
        "Разбъркайте брашното, какаото на прах, содата за хляб и солта, после добавете шоколадовите парченца.",
        "Сложете с лъжица купчинки върху тава за печене и печете 9-11 минути.",
      ],
      ingredients: [
        "1 чаша масло, омекнало",
        "1 1/2 чаши захар",
        "2 яйца",
        "1 ч.л. ванилова есенция",
        "2 чаши брашно",
        "3/4 чаша какао на прах",
        "1 ч.л. сода за хляб",
        "1/2 ч.л. сол",
        "2 чаши шоколадови парченца",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
