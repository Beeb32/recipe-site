import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "sheet-pan-chicken-and-vegetables",
      title: "Sheet Pan Chicken and Vegetables",
      description:
        "Chicken thighs and vegetables roasted together on one pan - starting the slower-cooking potatoes and carrots first and adding the quicker-cooking bell pepper partway through is what keeps everything properly cooked instead of the potatoes underdone while the pepper turns mushy.",
      imageEmoji: "🍗",
      cookTimeMinutes: 45,
      servings: 4,
      ingredients: [
        { text: "4 chicken thighs", ingredient: "chicken thighs", quantity: 4 },
        { text: "3 potatoes, cubed", ingredient: "potato", quantity: 3 },
        { text: "2 carrots, sliced", ingredient: "carrot", quantity: 2 },
        { text: "1 red bell pepper, sliced", ingredient: "red pepper", quantity: 1 },
        { text: "3 tbsp olive oil", ingredient: "olive oil", quantity: 3 },
        { text: "1 tsp garlic powder", ingredient: "garlic powder", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Preheat oven to 425°F.",
        "Toss the chicken, potatoes, and carrots with olive oil, garlic powder, salt, and pepper on a large baking sheet and spread into a single layer.",
        "Roast for 20 minutes, then add the bell pepper and toss everything together - starting the potatoes and carrots first is what keeps them from being underdone while the quicker-cooking pepper turns mushy.",
        "Roast for another 15-20 minutes until the chicken is cooked through and the vegetables are tender.",
      ],
      tags: ["dinner", "quick"],
    },
    bg: {
      title: "Пиле и зеленчуци на тава",
      description:
        "Пилешки бутчета и зеленчуци, изпечени заедно на една тава - започването първо с по-бавно готвещите се картофи и моркови и добавянето на по-бързата чушка по средата е това, което пази всичко правилно сготвено, вместо картофите недопечени, докато чушката стане кашава.",
      steps: [
        "Загрейте фурната на 220°C.",
        "Разбъркайте пилето, картофите и морковите със зехтин, чеснов прах, сол и черен пипер върху голяма тава и разпределете в един слой.",
        "Печете 20 минути, после добавете чушката и разбъркайте всичко заедно - започването с картофите и морковите първо е това, което пази ги от недопичане, докато по-бързо готвещата се чушка стане кашава.",
        "Печете още 15-20 минути, докато пилето се сготви напълно и зеленчуците омекнат.",
      ],
      ingredients: [
        "4 пилешки бутчета",
        "3 картофа, нарязани на кубчета",
        "2 моркова, нарязани на резени",
        "1 червена чушка, нарязана на резени",
        "3 с.л. зехтин",
        "1 ч.л. чеснов прах",
        "Сол на вкус",
        "Черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "sheet-pan-sausage-and-peppers",
      title: "Sheet Pan Sausage and Peppers",
      description:
        "Sausage and bell peppers roasted together until caramelized and tender, with garlic added alongside the oregano - oregano without salt or garlic is why this classic Italian sheet pan dish can taste under-seasoned despite the herbs.",
      imageEmoji: "🌶️",
      cookTimeMinutes: 35,
      servings: 4,
      ingredients: [
        { text: "4 Italian sausages", ingredient: "sausage", quantity: 4 },
        { text: "2 red bell peppers, sliced", ingredient: "red pepper", quantity: 2 },
        { text: "1 onion, sliced", ingredient: "onion", quantity: 1 },
        { text: "3 tbsp olive oil", ingredient: "olive oil", quantity: 3 },
        { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
        { text: "1 tsp dried oregano", ingredient: "oregano", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Preheat oven to 425°F.",
        "Toss the sausages, peppers, onion, garlic, olive oil, oregano, and salt on a baking sheet.",
        "Spread into a single layer.",
        "Roast for 25-30 minutes, turning halfway, until the sausages are cooked through and the vegetables are caramelized.",
      ],
      tags: ["dinner", "quick", "italian"],
    },
    bg: {
      title: "Наденица и чушки на тава",
      description:
        "Наденица и чушки, изпечени заедно до карамелизиране и омекване, с чесън добавен заедно с ригана - риган без сол или чесън е причината това класическо италианско ястие на тава да има недостатъчно подправен вкус, въпреки билките.",
      steps: [
        "Загрейте фурната на 220°C.",
        "Разбъркайте наденицата, чушките, лука, чесъна, зехтина, ригана и солта върху тава.",
        "Разпределете в един слой.",
        "Печете 25-30 минути, обръщайки по средата, докато наденицата се сготви напълно и зеленчуците карамелизират.",
      ],
      ingredients: [
        "4 италиански наденици",
        "2 червени чушки, нарязани на резени",
        "1 лук, нарязан на резени",
        "3 с.л. зехтин",
        "2 скилидки чесън, ситно нарязани",
        "1 ч.л. сух риган",
        "Сол на вкус",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
