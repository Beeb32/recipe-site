import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "loaded-nachos",
      title: "Loaded Nachos",
      description:
        "Crispy tortilla chips piled high with cheese, beans, and all the toppings, layered twice instead of once so every chip gets its share - a single flat layer of chips under all the toppings, which most quick versions use, leaves the bottom half bare.",
      imageEmoji: "🌮",
      cookTimeMinutes: 25,
      servings: 6,
      ingredients: [
        { text: "1 bag tortilla chips", ingredient: "tortilla chips", quantity: 1 },
        { text: "2 cups shredded cheddar cheese", ingredient: "cheddar cheese", quantity: 2 },
        { text: "1 can refried beans, warmed", ingredient: "refried beans", quantity: 1 },
        { text: "1/2 cup salsa", ingredient: "salsa", quantity: 0.5 },
        { text: "1/2 cup sour cream", ingredient: "sour cream", quantity: 0.5 },
        { text: "1 jalapeño, sliced", ingredient: "jalapeno", quantity: 1 },
      ],
      steps: [
        "Preheat oven to 400°F.",
        "Spread half the tortilla chips on a baking sheet and dot with half the refried beans and half the cheese, then repeat with the remaining chips, beans, and cheese - layering twice is what keeps every chip topped instead of leaving the bottom bare.",
        "Bake for 8-10 minutes until the cheese melts.",
        "Top with salsa, sour cream, and jalapeño slices before serving.",
      ],
      tags: ["snack", "mexican", "vegetarian", "quick"],
    },
    bg: {
      title: "Пълни начос",
      description:
        "Хрупкави чипсове тортила, натрупани високо със сирене, боб и всички добавки, наслоени два пъти вместо веднъж, за да получи всеки чипс своя дял - един плосък слой чипсове под всички добавки, който повечето бързи версии използват, оставя долната половина гола.",
      steps: [
        "Загрейте фурната на 200°C.",
        "Разпределете половината чипсове тортила върху тава за печене и поставете на точки половината запържен боб и половината сирене, после повторете с останалите чипсове, боб и сирене - наслояването два пъти е това, което пази всеки чипс покрит, вместо да оставя долната част гола.",
        "Печете 8-10 минути до разтопяване на сиренето.",
        "Отгоре сложете салса, заквасена сметана и резенчета халапеньо преди сервиране.",
      ],
      ingredients: [
        "1 торбичка чипсове тортила",
        "2 чаши настъргано чедър сирене",
        "1 консерва запържен боб, затоплен",
        "1/2 чаша салса",
        "1/2 чаша заквасена сметана",
        "1 халапеньо, нарязано на резени",
      ],
    },
  },
  {
    en: {
      slug: "classic-cheese-quesadilla",
      title: "Classic Cheese Quesadilla",
      description:
        "A crispy tortilla stuffed with melted cheese, pressed flat and cooked covered so the inside melts through before the outside burns - cooking it uncovered and unpressed is why quesadillas often come out with a scorched outside and a cold cheese center.",
      imageEmoji: "🧀",
      cookTimeMinutes: 10,
      servings: 1,
      ingredients: [
        { text: "1 large flour tortilla", ingredient: "flour tortillas", quantity: 1 },
        { text: "1 cup shredded cheddar cheese", ingredient: "cheddar cheese", quantity: 1 },
        { text: "1 tbsp butter", ingredient: "butter", quantity: 1 },
      ],
      steps: [
        "Sprinkle cheese over half of the tortilla, then fold the other half over.",
        "Melt butter in a skillet over medium heat.",
        "Cook the quesadilla covered, pressing down gently with a spatula, for 2-3 minutes per side until golden and the cheese melts - covering it traps heat so the cheese melts through before the outside scorches.",
        "Slice into wedges before serving.",
      ],
      tags: ["lunch", "quick", "vegetarian", "mexican"],
    },
    bg: {
      title: "Класическа кесадия със сирене",
      description:
        "Хрупкава тортила, пълнена с разтопено сирене, притисната плоско и изпечена покрита, за да се разтопи вътрешността, преди външността да изгори - печенето непокрито и без притискане е причината кесадиите често излизат прегорели отвън и с изстинал център от сирене.",
      steps: [
        "Поръсете сирене върху половината тортила, после сгънете другата половина.",
        "Разтопете масло в тиган на среден огън.",
        "Изпечете кесадията покрита, притискайки леко с шпатула, по 2-3 минути от всяка страна до златисто и разтапяне на сиренето - покриването задържа топлината, за да се разтопи сиренето докрай, преди външността да прегори.",
        "Нарежете на резенчета преди сервиране.",
      ],
      ingredients: ["1 голяма пшенична тортила", "1 чаша настъргано чедър сирене", "1 с.л. масло"],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
