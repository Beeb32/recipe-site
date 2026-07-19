import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "chicken-quesadillas",
      title: "Chicken Quesadillas",
      description:
        "Chicken seasoned with cumin, chili powder, and garlic, melted with Oaxaca (or Monterey Jack) cheese in a lightly oiled tortilla - Oaxaca cheese's stretchy melt and the seasoned chicken are what separate real quesadillas from a plain cheddar-and-chicken pocket.",
      imageEmoji: "🧀",
      cookTimeMinutes: 25,
      servings: 4,
      ingredients: [
        { text: "2 cups shredded cooked chicken", ingredient: "chicken", quantity: 2 },
        { text: "1 tsp cumin", ingredient: "cumin", quantity: 1 },
        { text: "1 tsp chili powder", ingredient: "chili powder", quantity: 1 },
        { text: "1/2 tsp garlic powder", ingredient: "garlic powder", quantity: 0.5 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "1/2 onion, diced", ingredient: "onion", quantity: 0.5 },
        { text: "1/2 red pepper, diced", ingredient: "red pepper", quantity: 0.5 },
        { text: "2 cups shredded Oaxaca cheese (or Monterey Jack)", ingredient: "oaxaca cheese", quantity: 2 },
        { text: "8 flour tortillas", ingredient: "flour tortillas", quantity: 8 },
        { text: "2 tbsp chopped cilantro", ingredient: "cilantro", quantity: 2 },
        { text: "1 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 1 },
      ],
      steps: [
        "Toss the shredded chicken with cumin, chili powder, garlic powder, and salt.",
        "Sauté the onion and red pepper until softened, then mix with the seasoned chicken and cilantro.",
        "Lay a tortilla flat, sprinkle cheese and the chicken mixture over half, then fold over.",
        "Heat oil in a skillet over medium heat and cook each quesadilla until golden and crispy and the cheese is fully melted, about 3 minutes per side.",
        "Slice into wedges and serve with salsa or sour cream.",
      ],
      tags: ["lunch", "quick", "mexican"],
    },
    bg: {
      title: "Пилешки кесадийи",
      description:
        "Пиле, подправено с кимион, лют пипер на прах и чесън, разтопено със сирене оахака (или монтерей джак) в леко намаслена тортила - разтегливото топене на сиренето оахака и подправеното пиле са това, което отличава истинската кесадия от обикновен джоб с чедър и пиле.",
      steps: [
        "Разбъркайте накъсаното пиле с кимиона, лютия пипер на прах, чесновия прах и солта.",
        "Запържете лука и чушката до омекване, после смесете с подправеното пиле и кориандъра.",
        "Поставете тортила на равна повърхност, поръсете сирене и пилешката смес върху половината, после сгънете.",
        "Загрейте олио в тиган на среден огън и изпечете всяка кесадия до златисто и хрупкаво и пълно разтопяване на сиренето, около 3 минути от всяка страна.",
        "Нарежете на резени и сервирайте със salsa или заквасена сметана.",
      ],
      ingredients: [
        "2 чаши накъсано сготвено пиле",
        "1 ч.л. кимион",
        "1 ч.л. лют пипер на прах",
        "1/2 ч.л. чеснов прах",
        "Сол на вкус",
        "1/2 лук, нарязан на кубчета",
        "1/2 червена чушка, нарязана на кубчета",
        "2 чаши настъргано сирене оахака (или монтерей джак)",
        "8 пшенични тортили",
        "2 с.л. нарязан кориандър",
        "1 с.л. олио",
      ],
    },
  },
  {
    en: {
      slug: "buffalo-wings",
      title: "Buffalo Wings",
      description:
        "Wings tossed in the original Anchor Bar-style sauce of hot sauce, butter, and a splash of vinegar - the vinegar is what the original 1964 recipe calls out as crucial for cutting the richness of the butter, and deep-frying is the traditional method, though baking is a common lighter alternative.",
      imageEmoji: "🍗",
      cookTimeMinutes: 50,
      servings: 4,
      ingredients: [
        { text: "2 lb chicken wings", ingredient: "chicken wings", quantity: 2 },
        { text: "1/2 cup hot sauce (such as Frank's RedHot)", ingredient: "hot sauce", quantity: 0.5 },
        { text: "4 tbsp butter, melted", ingredient: "butter", quantity: 4 },
        { text: "1 tbsp white vinegar", ingredient: "white vinegar", quantity: 1 },
        { text: "1/2 tsp garlic powder", ingredient: "garlic powder", quantity: 0.5 },
        { text: "1/4 tsp cayenne pepper", ingredient: "cayenne pepper", quantity: 0.25 },
      ],
      steps: [
        "Preheat oven to 425°F and pat the wings dry (or deep-fry at 375°F for 8-10 minutes for the traditional Anchor Bar method).",
        "Bake the wings on a rack for 40-45 minutes, flipping halfway, until crispy.",
        "Whisk together the hot sauce, melted butter, vinegar, garlic powder, and cayenne - the vinegar is what the original recipe calls out as crucial for balancing the richness of the butter.",
        "Toss the crispy wings in the sauce until fully coated.",
      ],
      tags: ["snack", "quick"],
    },
    bg: {
      title: "Крилца Бъфало",
      description:
        "Крилца, разбъркани в сос в стила на оригиналния Anchor Bar от лют сос, масло и малко оцет - оцетът е това, което оригиналната рецепта от 1964 г. посочва като задължително за балансиране на наситеността на маслото, а дълбокото пържене е традиционният метод, макар печенето да е обичайна по-лека алтернатива.",
      steps: [
        "Загрейте фурната на 220°C и подсушете крилцата (или ги изпържете дълбоко на 190°C за 8-10 минути за традиционния метод на Anchor Bar).",
        "Печете крилцата на решетка 40-45 минути, обръщайки по средата, до хрупкавост.",
        "Разбъркайте лютия сос, разтопеното масло, оцета, чесновия прах и лютия червен пипер - оцетът е това, което оригиналната рецепта посочва като задължително за балансиране на наситеността на маслото.",
        "Разбъркайте хрупкавите крилца в соса до пълно покриване.",
      ],
      ingredients: [
        "900 г пилешки крилца",
        "1/2 чаша лют сос (като Frank's RedHot)",
        "4 с.л. масло, разтопено",
        "1 с.л. бял оцет",
        "1/2 ч.л. чеснов прах",
        "1/4 ч.л. лют червен пипер",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
