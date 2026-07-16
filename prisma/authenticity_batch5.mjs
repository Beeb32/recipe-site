import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "gyuvech",
      title: "Gyuvech",
      description:
        "A baked Bulgarian casserole of pork and mixed vegetables in a clay pot, seasoned with chubritsa - started in a cold oven so the clay doesn't crack.",
      imageEmoji: "🥘",
      cookTimeMinutes: 150,
      servings: 6,
      ingredients: [
        { text: "1 lb pork, cubed", ingredient: "pork", quantity: 1 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "1 carrot, sliced", ingredient: "carrot", quantity: 1 },
        { text: "1 green bell pepper, diced", ingredient: "green pepper", quantity: 1 },
        { text: "1 eggplant, cubed", ingredient: "eggplant", quantity: 1 },
        { text: "2 potatoes, cubed", ingredient: "potato", quantity: 2 },
        { text: "1 zucchini, sliced", ingredient: "zucchini", quantity: 1 },
        { text: "2 tomatoes, diced", ingredient: "tomato", quantity: 2 },
        { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
        { text: "3 tbsp sunflower oil", ingredient: "sunflower oil", quantity: 3 },
        { text: "1 tsp chubritsa (Bulgarian savory)", ingredient: "chubritsa", quantity: 1 },
        { text: "Salt and black pepper to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Brown the pork in sunflower oil with the onion and garlic in a skillet, then season with salt, pepper, and chubritsa.",
        "Layer the browned pork and all the vegetables in a clay pot or baking dish, cover, and place in a cold oven - starting cold prevents a clay pot from cracking.",
        "Set the oven to 375°F and bake for about 2 hours until the meat and vegetables are fully tender.",
        "Serve hot straight from the pot.",
      ],
      tags: ["dinner"],
    },
    bg: {
      title: "Гювеч",
      description:
        "Печен български гювеч от свинско месо и разнообразни зеленчуци в глинен съд, подправен с чубрица - започва се в студена фурна, за да не се напука глината.",
      steps: [
        "Запържете свинското месо в слънчогледово олио с лука и чесъна в тиган, после подправете със сол, черен пипер и чубрица.",
        "Наредете запърженото месо и всички зеленчуци на пластове в глинен съд или тава, покрийте и поставете в студена фурна - започването от студено предпазва глинения съд от напукване.",
        "Настройте фурната на 190°C и печете около 2 часа, докато месото и зеленчуците омекнат напълно.",
        "Сервирайте горещо направо от съда.",
      ],
      ingredients: [
        "450 г свинско месо, нарязано на кубчета",
        "1 лук, нарязан на кубчета",
        "1 морков, нарязан на резени",
        "1 зелена чушка, нарязана на кубчета",
        "1 патладжан, нарязан на кубчета",
        "2 картофа, нарязани на кубчета",
        "1 тиквичка, нарязана на резени",
        "2 домата, нарязани на кубчета",
        "2 скилидки чесън, ситно нарязани",
        "3 с.л. слънчогледово олио",
        "1 ч.л. чубрица",
        "Сол и черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "pulneni-chushki",
      title: "Pulneni Chushki",
      description:
        "Bulgarian-style stuffed peppers filled with minced pork, rice, carrot, and chubritsa, baked in tomato sauce and served with a spoonful of yogurt.",
      imageEmoji: "🫑",
      cookTimeMinutes: 70,
      servings: 6,
      ingredients: [
        { text: "6 red bell peppers, tops removed and seeded", ingredient: "bell peppers", quantity: 6 },
        { text: "1 lb ground pork", ingredient: "ground pork", quantity: 1 },
        { text: "1/2 cup rice", ingredient: "rice", quantity: 0.5 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "1 carrot, diced", ingredient: "carrot", quantity: 1 },
        { text: "1 tsp paprika", ingredient: "paprika", quantity: 1 },
        { text: "1 tsp chubritsa (Bulgarian savory), or dried oregano and thyme", ingredient: "chubritsa", quantity: 1 },
        { text: "1 cup tomato sauce", ingredient: "tomato sauce", quantity: 1 },
        { text: "Plain yogurt, for serving", ingredient: "yogurt", quantity: null },
      ],
      steps: [
        "Preheat oven to 375°F. Sauté the onion and carrot in a little oil for 3-4 minutes until fragrant, then add the ground pork and cook, breaking it up, until it changes color.",
        "Mix the meat and vegetables with the rice, paprika, and chubritsa.",
        "Stuff each pepper about three-quarters full with the mixture and arrange them in a baking dish.",
        "Pour the tomato sauce around the peppers and bake covered for 45-50 minutes until the peppers are tender and the rice is cooked; serve with a spoonful of yogurt on top.",
      ],
      tags: ["dinner"],
    },
    bg: {
      title: "Пълнени чушки",
      description:
        "Пълнени чушки по български с кайма от свинско месо, ориз, моркови и чубрица, печени в доматен сос и сервирани с лъжица кисело мляко.",
      steps: [
        "Загрейте фурната на 190°C. Задушете лука и моркова в малко олио 3-4 минути до ароматизиране, после добавете каймата и гответе, разчупвайки я, докато промени цвета си.",
        "Смесете месото и зеленчуците с ориза, червения пипер и чубрицата.",
        "Напълнете всяка чушка на около три четвърти със сместа и ги наредете в тава.",
        "Залейте чушките с доматен сос и печете покрити 45-50 минути, докато чушките омекнат и оризът се сготви; сервирайте с лъжица кисело мляко отгоре.",
      ],
      ingredients: [
        "6 червени чушки, с изрязани връхчета и почистени от семки",
        "450 г кайма от свинско месо",
        "1/2 чаша ориз",
        "1 лук, нарязан на кубчета",
        "1 морков, нарязан на кубчета",
        "1 ч.л. червен пипер",
        "1 ч.л. чубрица, или сушен риган и мащерка",
        "1 чаша доматен сос",
        "Натурално кисело мляко, за сервиране",
      ],
    },
  },
  {
    en: {
      slug: "ayran",
      title: "Ayran",
      description:
        "A cooling, salty Bulgarian yogurt drink, whisked until frothy - the perfect companion to a grilled meal.",
      imageEmoji: "🥤",
      cookTimeMinutes: 5,
      servings: 4,
      ingredients: [
        { text: "2 cups plain yogurt", ingredient: "yogurt", quantity: 2 },
        { text: "2 cups cold water", ingredient: "water", quantity: 2 },
        { text: "1 tsp salt", ingredient: "salt", quantity: 1 },
        { text: "Fresh mint leaves, finely chopped (optional)", ingredient: "mint", quantity: null },
      ],
      steps: [
        "Whisk the yogurt, cold water, and salt together until smooth and frothy.",
        "Stir in a few chopped mint leaves if using.",
        "Chill or serve immediately over ice.",
      ],
      tags: ["snack", "vegetarian", "quick"],
    },
    bg: {
      title: "Айрян",
      description:
        "Освежаваща солена българска напитка от разбито до пенливост кисело мляко - идеалният спътник на ястие от скара.",
      steps: [
        "Разбийте киселото мляко, студената вода и солта заедно до гладка и пенлива смес.",
        "Разбъркайте няколко нарязани листа мента, ако желаете.",
        "Охладете или сервирайте веднага с лед.",
      ],
      ingredients: [
        "2 чаши натурално кисело мляко",
        "2 чаши студена вода",
        "1 ч.л. сол",
        "Пресни листа мента, ситно нарязани (по желание)",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
