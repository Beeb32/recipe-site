import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "fluffy-pancakes",
      title: "Fluffy Pancakes",
      description:
        "Classic fluffy pancakes made with real buttermilk instead of plain milk for the tang and tenderness the name promises, rested briefly before cooking - swapping in plain milk is why many 'buttermilk' pancakes taste more like flat pancakes than the real thing.",
      imageEmoji: "🥞",
      cookTimeMinutes: 20,
      servings: 4,
      ingredients: [
        { text: "1 1/2 cups all-purpose flour", ingredient: "flour", quantity: 1.5 },
        { text: "2 tsp baking powder", ingredient: "baking powder", quantity: 2 },
        { text: "1/2 tsp baking soda", ingredient: "baking soda", quantity: 0.5 },
        { text: "1 tsp salt", ingredient: "salt", quantity: 1 },
        { text: "1 tbsp sugar", ingredient: "sugar", quantity: 1 },
        { text: "1 1/4 cups buttermilk", ingredient: "buttermilk", quantity: 1.25 },
        { text: "1 egg", ingredient: "eggs", quantity: 1 },
        { text: "3 tbsp melted butter", ingredient: "butter", quantity: 3 },
      ],
      steps: [
        "Whisk together flour, baking powder, baking soda, salt, and sugar in a large bowl.",
        "In a separate bowl, whisk the buttermilk, egg, and melted butter together.",
        "Pour the wet ingredients into the dry ingredients and stir until just combined - a few lumps are fine - then let the batter rest for 5 minutes so the baking soda reacting with the buttermilk gives the pancakes their rise.",
        "Heat a lightly greased griddle over medium heat and pour 1/4 cup batter per pancake.",
        "Cook until bubbles form on the surface, then flip and cook until golden on the other side.",
      ],
      tags: ["breakfast", "quick", "vegetarian"],
    },
    bg: {
      title: "Пухкави палачинки",
      description:
        "Класически пухкави палачинки, приготвени с истинска обикновена мътеница вместо мляко, за да имат киселинката и мекотата, които името обещава, оставени да починат за кратко преди печене - използването на обикновено мляко е причината много 'палачинки с мътеница' да имат вкус на плоски палачинки, вместо истинско нещо.",
      steps: [
        "Разбъркайте брашното, бакпулвера, содата за хляб, солта и захарта в голяма купа.",
        "В отделна купа разбийте мътеницата, яйцето и разтопеното масло.",
        "Изсипете течната смес в сухата и разбъркайте до съединяване - няколко бучки са нормални - после оставете тестото да почине 5 минути, за да има содата за хляб, реагираща с мътеницата, време да придаде на палачинките тяхното надигане.",
        "Загрейте леко намаслен тиган на среден огън и изсипете по 1/4 чаша тесто за всяка палачинка.",
        "Печете, докато се образуват мехурчета на повърхността, после обърнете и печете до златисто от другата страна.",
      ],
      ingredients: [
        "1 1/2 чаши бяло брашно",
        "2 ч.л. бакпулвер",
        "1/2 ч.л. сода за хляб",
        "1 ч.л. сол",
        "1 с.л. захар",
        "1 1/4 чаши мътеница",
        "1 яйце",
        "3 с.л. разтопено масло",
      ],
    },
  },
  {
    en: {
      slug: "coffee-cake",
      title: "Coffee Cake",
      description:
        "A tender cake with a buttery cinnamon streusel topping, lifted with baking powder and rounded out with vanilla and salt - a cake with no leavening at all is what most quick coffee cake recipes get wrong, baking dense instead of tender.",
      imageEmoji: "☕",
      cookTimeMinutes: 55,
      servings: 9,
      ingredients: [
        { text: "2 cups flour", ingredient: "flour", quantity: 2 },
        { text: "1 1/2 tsp baking powder", ingredient: "baking powder", quantity: 1.5 },
        { text: "1/2 tsp salt", ingredient: "salt", quantity: 0.5 },
        { text: "1 cup sugar", ingredient: "sugar", quantity: 1 },
        { text: "2 eggs", ingredient: "eggs", quantity: 2 },
        { text: "1 cup sour cream", ingredient: "sour cream", quantity: 1 },
        { text: "1/2 cup melted butter", ingredient: "butter", quantity: 0.5 },
        { text: "1 tsp vanilla extract", ingredient: "vanilla extract", quantity: 1 },
        { text: "2 tsp cinnamon", ingredient: "cinnamon", quantity: 2 },
      ],
      steps: [
        "Preheat oven to 350°F and grease a baking pan.",
        "Whisk together the flour, baking powder, and salt.",
        "Whisk together the sugar, eggs, sour cream, vanilla, and half the butter, then stir in the flour mixture - the baking powder is what actually lifts the cake instead of leaving it dense.",
        "Pour into the pan and mix the remaining butter with cinnamon and a little sugar to sprinkle on top.",
        "Bake for 35-40 minutes until a toothpick comes out clean.",
      ],
      tags: ["breakfast", "vegetarian", "baking"],
    },
    bg: {
      title: "Кафе кекс",
      description:
        "Нежен кекс с маслена посипка от канела, повдигнат с бакпулвер и допълнен с ванилия и сол - кекс без никакво втасване е това, което повечето бързи рецепти за кафе кекс правят грешно, изпичайки го плътен, вместо нежен.",
      steps: [
        "Загрейте фурната на 180°C и намажете тава за печене.",
        "Разбъркайте брашното, бакпулвера и солта.",
        "Разбийте захарта, яйцата, заквасената сметана, ванилията и половината масло заедно, после разбъркайте брашнената смес - бакпулверът е това, което всъщност повдига кекса, вместо да го остави плътен.",
        "Изсипете в тавата и смесете останалото масло с канела и малко захар за поръсване отгоре.",
        "Печете 35-40 минути, докато клечка излезе суха.",
      ],
      ingredients: [
        "2 чаши брашно",
        "1 1/2 ч.л. бакпулвер",
        "1/2 ч.л. сол",
        "1 чаша захар",
        "2 яйца",
        "1 чаша заквасена сметана",
        "1/2 чаша разтопено масло",
        "1 ч.л. ванилова есенция",
        "2 ч.л. канела",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
