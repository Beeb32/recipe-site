import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "classic-omelette",
      title: "Classic Omelette",
      description:
        "A simple three-egg omelette whisked vigorously for a fluffier texture and cooked over medium-low heat, folded around melted cheese - high heat is what turns omelette eggs rubbery and browned instead of soft and tender.",
      imageEmoji: "🍳",
      cookTimeMinutes: 10,
      servings: 1,
      ingredients: [
        { text: "3 eggs", ingredient: "eggs", quantity: 3 },
        { text: "1 tbsp milk", ingredient: "milk", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
        { text: "1 tbsp butter", ingredient: "butter", quantity: 1 },
        { text: "1/4 cup shredded cheese", ingredient: "cheese", quantity: 0.25 },
      ],
      steps: [
        "Whisk the eggs with milk, salt, and pepper vigorously until fully combined and slightly frothy - the extra air is what makes the eggs fluffier.",
        "Melt the butter in a nonstick pan over medium-low heat.",
        "Pour in the eggs and let them set for 30 seconds, then gently push the edges toward the center - low heat is what keeps the eggs tender instead of turning rubbery.",
        "When mostly set, sprinkle cheese over one half and fold the omelette over.",
        "Slide onto a plate and serve immediately.",
      ],
      tags: ["breakfast", "quick", "vegetarian"],
    },
    bg: {
      title: "Класически омлет",
      description:
        "Прост омлет от три яйца, разбити енергично за по-пухкава текстура и изпечен на среден до слаб огън, сгънат около разтопено сирене - силният огън е това, което прави омлетните яйца гумени и покафенели, вместо меки и крехки.",
      steps: [
        "Разбийте яйцата с млякото, солта и черния пипер енергично, докато се съединят напълно и станат леко пенливи - допълнителният въздух е това, което прави яйцата по-пухкави.",
        "Разтопете маслото в незалепващ тиган на среден до слаб огън.",
        "Изсипете яйцата и оставете да се стегнат за 30 секунди, после леко избутайте краищата към центъра - слабият огън е това, което пази яйцата крехки, вместо да станат гумени.",
        "Когато почти се стегне, поръсете сирене върху едната половина и сгънете омлета.",
        "Прехвърлете в чиния и сервирайте веднага.",
      ],
      ingredients: [
        "3 яйца",
        "1 с.л. мляко",
        "Сол на вкус",
        "Черен пипер на вкус",
        "1 с.л. масло",
        "1/4 чаша настъргано сирене",
      ],
    },
  },
  {
    en: {
      slug: "cinnamon-toast",
      title: "Cinnamon Toast",
      description:
        "Buttery toast with a crisp, sweet cinnamon-sugar topping - toasting the bread first and mixing the cinnamon sugar directly into the butter is what gives an even, adhered coating instead of a topping that slides off and burns unevenly under the broiler.",
      imageEmoji: "🍞",
      cookTimeMinutes: 10,
      servings: 2,
      ingredients: [
        { text: "4 slices bread", ingredient: "bread", quantity: 4 },
        { text: "3 tbsp butter, softened", ingredient: "butter", quantity: 3 },
        { text: "1/4 cup sugar", ingredient: "sugar", quantity: 0.25 },
        { text: "1 tbsp cinnamon", ingredient: "cinnamon", quantity: 1 },
      ],
      steps: [
        "Toast the bread slices lightly first.",
        "Mix the softened butter with the sugar and cinnamon to make a spreadable cinnamon butter.",
        "Preheat the broiler and spread the cinnamon butter generously over each slice of toast.",
        "Broil for 1-2 minutes until bubbly and lightly golden, watching closely so it doesn't burn.",
      ],
      tags: ["breakfast", "quick", "vegetarian", "baking"],
    },
    bg: {
      title: "Тост с канела",
      description:
        "Маслен тост с хрупкава, сладка коричка от канела и захар - препичането на хляба първо и смесването на канелата и захарта директно в маслото е това, което придава равномерна, залепнала коричка, вместо покритие, което се плъзга и изгаря неравномерно под грила.",
      steps: [
        "Препечете леко филиите хляб първо.",
        "Смесете омекотеното масло със захарта и канелата, за да направите намазка от масло с канела.",
        "Загрейте грила и намажете обилно всяка филия тост с маслото с канела.",
        "Печете на грил 1-2 минути до леко къкрене и златисто, следейки внимателно да не изгори.",
      ],
      ingredients: ["4 филии хляб", "3 с.л. масло, омекотено", "1/4 чаша захар", "1 с.л. канела"],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
