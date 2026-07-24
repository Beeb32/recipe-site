import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "garlic-butter-pasta",
      title: "Garlic Butter Pasta",
      description:
        "Simple spaghetti tossed in a fragrant garlic butter sauce finished with parsley and black pepper - cooking the garlic over low heat instead of high is what keeps it sweet and golden instead of scorched and bitter, the most common mistake in garlic butter pasta.",
      imageEmoji: "🍝",
      cookTimeMinutes: 20,
      servings: 4,
      ingredients: [
        { text: "1 lb spaghetti", ingredient: "spaghetti", quantity: 1 },
        { text: "5 tbsp butter", ingredient: "butter", quantity: 5 },
        { text: "4 cloves garlic, minced", ingredient: "garlic", quantity: 4 },
        { text: "1/4 cup grated Parmesan", ingredient: "parmesan", quantity: 0.25 },
        { text: "2 tbsp chopped fresh parsley", ingredient: "parsley", quantity: 2 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Cook the spaghetti in salted boiling water until al dente; reserve 1/2 cup pasta water.",
        "Melt the butter in a large pan over low heat and sauté the garlic gently until fragrant and golden, about 2 minutes - low heat is what keeps garlic from turning bitter and scorched.",
        "Toss in the drained pasta with a splash of pasta water, the Parmesan, and parsley.",
        "Season with salt and pepper before serving.",
      ],
      tags: ["dinner", "quick", "vegetarian", "italian"],
    },
    bg: {
      title: "Паста с чеснов сос",
      description:
        "Проста паста спагети, разбъркана в ароматен сос от чесън и масло, завършена с магданоз и черен пипер - готвенето на чесъна на слаб огън, вместо силен, е това, което го пази сладък и златист, вместо прегорял и горчив, най-честата грешка при паста с чеснов сос.",
      steps: [
        "Сварете спагетите в подсолена вряла вода до готовност; запазете 1/2 чаша от водата.",
        "Разтопете маслото в голям тиган на слаб огън и запържете чесъна внимателно до ароматизиране и златисто, около 2 минути - слабият огън е това, което пази чесъна от горчивина и прегаряне.",
        "Разбъркайте отцедената паста с малко вода от нея, пармезана и магданоза.",
        "Подправете със сол и черен пипер преди сервиране.",
      ],
      ingredients: [
        "450 г спагети",
        "5 с.л. масло",
        "4 скилидки чесън, ситно нарязани",
        "1/4 чаша настърган пармезан",
        "2 с.л. нарязан пресен магданоз",
        "Сол на вкус",
        "Черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "garlic-parmesan-rice",
      title: "Garlic Parmesan Rice",
      description:
        "Fluffy rice sautéed with garlic cooked low and slow so it turns sweet instead of bitter, finished with Parmesan and parsley - high heat on the garlic is the most common reason this simple side turns acrid.",
      imageEmoji: "🍚",
      cookTimeMinutes: 25,
      servings: 4,
      ingredients: [
        { text: "2 cups rice", ingredient: "rice", quantity: 2 },
        { text: "3 cloves garlic, minced", ingredient: "garlic", quantity: 3 },
        { text: "3 tbsp butter", ingredient: "butter", quantity: 3 },
        { text: "4 cups chicken broth", ingredient: "chicken broth", quantity: 4 },
        { text: "1/2 cup grated Parmesan", ingredient: "parmesan", quantity: 0.5 },
        { text: "2 tbsp chopped fresh parsley", ingredient: "parsley", quantity: 2 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Melt the butter in a pot over low heat and sauté the garlic gently until fragrant and golden, about 2 minutes - low heat is what keeps the garlic sweet instead of turning bitter.",
        "Add the rice and stir to coat, then pour in the chicken broth.",
        "Bring to a boil, then cover and simmer for 18-20 minutes until the rice is tender.",
        "Stir in the Parmesan and parsley, and season with salt and pepper before serving.",
      ],
      tags: ["dinner", "quick", "vegetarian"],
    },
    bg: {
      title: "Ориз с чесън и пармезан",
      description:
        "Пухкав ориз, запържен с чесън, готвен бавно на слаб огън, за да стане сладък, вместо горчив, довършен с пармезан и магданоз - силният огън върху чесъна е най-честата причина тази проста гарнитура да стане остра и горчива.",
      steps: [
        "Разтопете маслото в тенджера на слаб огън и запържете чесъна внимателно до ароматизиране и златисто, около 2 минути - слабият огън е това, което пази чесъна сладък, вместо да стане горчив.",
        "Добавете ориза и разбъркайте за покриване, после налейте пилешкия бульон.",
        "Оставете да заври, после покрийте и варете 18-20 минути, докато оризът омекне.",
        "Добавете пармезана и магданоза, и подправете със сол и черен пипер преди сервиране.",
      ],
      ingredients: [
        "2 чаши ориз",
        "3 скилидки чесън, ситно нарязани",
        "3 с.л. масло",
        "4 чаши пилешки бульон",
        "1/2 чаша настърган пармезан",
        "2 с.л. нарязан пресен магданоз",
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
