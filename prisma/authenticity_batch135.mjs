import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "green-bean-almondine",
      title: "Green Bean Almondine",
      description:
        "Crisp green beans sautéed with toasted almonds and butter, finished with lemon juice, salt, and pepper - almondine with no seasoning at all is why this simple side often tastes like plain buttered vegetables instead of a proper dish.",
      imageEmoji: "🫘",
      cookTimeMinutes: 20,
      servings: 4,
      ingredients: [
        { text: "1 lb green beans, trimmed", ingredient: "green beans", quantity: 1 },
        { text: "1/3 cup sliced almonds", ingredient: "almonds", quantity: 0.33 },
        { text: "3 tbsp butter", ingredient: "butter", quantity: 3 },
        { text: "1 tbsp lemon juice", ingredient: "lemon juice", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Blanch the green beans in boiling water for 3-4 minutes, then drain.",
        "Toast the almonds in butter until golden.",
        "Add the green beans and toss to coat in the butter.",
        "Stir in the lemon juice and season with salt and pepper before serving.",
      ],
      tags: ["dinner", "vegetarian", "quick"],
    },
    bg: {
      title: "Зелен боб Алмандин",
      description:
        "Хрупкав зелен боб, задушен с препечени бадеми и масло, завършен с лимонов сок, сол и черен пипер - алмандин без никакво подправяне е причината тази проста гарнитура често да има вкус на обикновени зеленчуци с масло, вместо истинско ястие.",
      steps: [
        "Бланширайте зеления боб във вряла вода 3-4 минути, после отцедете.",
        "Препечете бадемите в масло до златисто.",
        "Добавете зеления боб и разбъркайте, за да се покрие с маслото.",
        "Разбъркайте лимоновия сок и подправете със сол и черен пипер преди сервиране.",
      ],
      ingredients: [
        "450 г зелен боб, почистен",
        "1/3 чаша бадеми, нарязани на резенчета",
        "3 с.л. масло",
        "1 с.л. лимонов сок",
        "Сол на вкус",
        "Черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "grilled-vegetable-platter",
      title: "Grilled Vegetable Platter",
      description:
        "A colorful mix of vegetables grilled until tender and lightly charred, finished with a balsamic drizzle and black pepper - vegetables straight off the grill with nothing but salt taste one-note; the balsamic is what brightens the char instead of leaving it just smoky.",
      imageEmoji: "🥬",
      cookTimeMinutes: 25,
      servings: 4,
      ingredients: [
        { text: "1 zucchini, sliced", ingredient: "zucchini", quantity: 1 },
        { text: "1 red bell pepper, sliced", ingredient: "red pepper", quantity: 1 },
        { text: "1 onion, sliced into rounds", ingredient: "onion", quantity: 1 },
        { text: "1 cup mushrooms", ingredient: "mushroom", quantity: 1 },
        { text: "3 tbsp olive oil", ingredient: "olive oil", quantity: 3 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
        { text: "1 tbsp balsamic vinegar", ingredient: "balsamic vinegar", quantity: 1 },
      ],
      steps: [
        "Toss the vegetables with olive oil, salt, and pepper.",
        "Grill over medium-high heat for 3-4 minutes per side until tender and charred in spots.",
        "Arrange on a platter and drizzle with balsamic vinegar.",
        "Serve warm.",
      ],
      tags: ["snack", "vegan", "vegetarian", "quick"],
    },
    bg: {
      title: "Плато зеленчуци на скара",
      description:
        "Цветна смес от зеленчуци, изпечени до омекване и леко овъгляне, завършени с балсамов оцет и черен пипер - зеленчуци направо от скарата само със сол имат еднообразен вкус; балсамовият оцет е това, което освежава овъгляването, вместо да го остави просто опушено.",
      steps: [
        "Разбъркайте зеленчуците със зехтин, сол и черен пипер.",
        "Изпечете на скара на среден до силен огън по 3-4 минути от всяка страна до омекване и леко овъгляне.",
        "Наредете върху плато и полейте с балсамов оцет.",
        "Сервирайте топло.",
      ],
      ingredients: [
        "1 тиквичка, нарязана на резени",
        "1 червена чушка, нарязана на резени",
        "1 лук, нарязан на кръгчета",
        "1 чаша гъби",
        "3 с.л. зехтин",
        "Сол на вкус",
        "Черен пипер на вкус",
        "1 с.л. балсамов оцет",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
