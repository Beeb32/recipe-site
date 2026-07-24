import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "butter-noodles",
      title: "Butter Noodles",
      description:
        "Egg noodles tossed simply in melted butter and Parmesan - reserving a splash of starchy pasta water and tossing it in with the butter is what turns plain melted butter into a light sauce that clings to the noodles instead of pooling at the bottom.",
      imageEmoji: "🍜",
      cookTimeMinutes: 15,
      servings: 4,
      ingredients: [
        { text: "12 oz egg noodles", ingredient: "egg noodles", quantity: 12 },
        { text: "4 tbsp butter", ingredient: "butter", quantity: 4 },
        { text: "1/2 cup grated Parmesan", ingredient: "parmesan", quantity: 0.5 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Cook the egg noodles in salted boiling water until tender, then drain, reserving 1/4 cup pasta water.",
        "Toss the hot noodles with butter and a splash of the reserved pasta water until melted, coated, and glossy.",
        "Stir in the Parmesan and season with salt and pepper.",
      ],
      tags: ["dinner", "quick", "vegetarian"],
    },
    bg: {
      title: "Юфка с масло",
      description:
        "Юфка, просто разбъркана с разтопено масло и пармезан - запазването на малко нишестена вода от пастата и разбъркването ѝ с маслото е това, което превръща обикновеното разтопено масло в лек сос, който полепва по юфката, вместо да се събира на дъното.",
      steps: [
        "Сварете юфката в подсолена вряла вода до омекване, после отцедете, запазвайки 1/4 чаша от водата.",
        "Разбъркайте горещата юфка с маслото и малко от запазената вода, докато маслото се разтопи, покрие юфката и стане лъскаво.",
        "Добавете пармезана и подправете със сол и черен пипер.",
      ],
      ingredients: ["340 г юфка", "4 с.л. масло", "1/2 чаша настърган пармезан", "Сол на вкус", "Черен пипер на вкус"],
    },
  },
  {
    en: {
      slug: "pasta-primavera",
      title: "Pasta Primavera",
      description:
        "Pasta tossed with a colorful medley of sautéed spring vegetables and garlic, brightened with a squeeze of lemon - vegetables sautéed with nothing but oil and no seasoning is why quick primavera often tastes like plain steamed vegetables tossed with noodles.",
      imageEmoji: "🍝",
      cookTimeMinutes: 30,
      servings: 4,
      ingredients: [
        { text: "1 lb penne pasta", ingredient: "penne", quantity: 1 },
        { text: "1 zucchini, sliced", ingredient: "zucchini", quantity: 1 },
        { text: "1 cup cherry tomatoes, halved", ingredient: "cherry tomatoes", quantity: 1 },
        { text: "1 cup broccoli florets", ingredient: "broccoli", quantity: 1 },
        { text: "3 tbsp olive oil", ingredient: "olive oil", quantity: 3 },
        { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
        { text: "1/4 cup grated Parmesan", ingredient: "parmesan", quantity: 0.25 },
        { text: "1/2 lemon, juiced", ingredient: "lemon", quantity: 0.5 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Cook the penne in salted boiling water until al dente, then drain.",
        "Sauté the zucchini and broccoli in olive oil with the garlic until crisp-tender, seasoning with salt and pepper.",
        "Add the cherry tomatoes and cook for 2 more minutes.",
        "Toss the pasta with the vegetables, lemon juice, and Parmesan.",
      ],
      tags: ["dinner", "italian", "vegetarian", "quick"],
    },
    bg: {
      title: "Паста Примавера",
      description:
        "Паста, разбъркана с цветна смес от задушени пролетни зеленчуци и чесън, освежена с малко лимонов сок - зеленчуци, задушени само в зехтин без никакво подправяне, е причината бързата примавера често да има вкус на обикновени задушени зеленчуци, разбъркани с юфка.",
      steps: [
        "Сварете пенето в подсолена вряща вода до състояние ал денте, после отцедете.",
        "Задушете тиквичките и броколите в зехтин с чесъна до хрупкаво омекване, подправяйки със сол и черен пипер.",
        "Добавете чери доматите и гответе още 2 минути.",
        "Разбъркайте пастата със зеленчуците, лимоновия сок и пармезана.",
      ],
      ingredients: [
        "450 г пене паста",
        "1 тиквичка, нарязана на резени",
        "1 чаша чери домати, разрязани наполовина",
        "1 чаша съцветия броколи",
        "3 с.л. зехтин",
        "2 скилидки чесън, ситно нарязани",
        "1/4 чаша настърган пармезан",
        "сок от 1/2 лимон",
        "Сол на вкус",
        "Черен пипер на вкус",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
