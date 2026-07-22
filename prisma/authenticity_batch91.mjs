import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "peanut-butter-cookies",
      title: "Peanut Butter Cookies",
      description:
        "Classic bakery-style cookies made with butter and flour rather than the flourless 3-ingredient shortcut, topped with the trademark criss-cross fork pattern - a technique that traces back to a 1930s newspaper recipe, originally used to help the dense dough bake through evenly, not just for looks.",
      imageEmoji: "🥜",
      cookTimeMinutes: 25,
      servings: 24,
      ingredients: [
        { text: "1/2 cup butter, softened", ingredient: "butter", quantity: 0.5 },
        { text: "1 cup peanut butter", ingredient: "peanut butter", quantity: 1 },
        { text: "1/2 cup sugar", ingredient: "sugar", quantity: 0.5 },
        { text: "1/2 cup brown sugar", ingredient: "brown sugar", quantity: 0.5 },
        { text: "1 egg", ingredient: "eggs", quantity: 1 },
        { text: "1 tsp vanilla extract", ingredient: "vanilla extract", quantity: 1 },
        { text: "1 1/4 cups flour", ingredient: "flour", quantity: 1.25 },
        { text: "1 tsp baking soda", ingredient: "baking soda", quantity: 1 },
        { text: "1/2 tsp salt", ingredient: "salt", quantity: 0.5 },
      ],
      steps: [
        "Preheat oven to 350°F.",
        "Cream the butter, peanut butter, and both sugars together, then beat in the egg and vanilla.",
        "Mix in the flour, baking soda, and salt until a smooth dough forms.",
        "Roll into balls and place on a baking sheet, flattening each with a fork in a criss-cross pattern - this pressing technique dates back to a 1930s newspaper recipe and was originally meant to help the dense dough bake through evenly.",
        "Bake for 10-12 minutes until just set.",
      ],
      tags: ["dessert", "baking", "vegetarian", "quick"],
    },
    bg: {
      title: "Бисквитки с фъстъчено масло",
      description:
        "Класически сладкарски бисквитки, приготвени с масло и брашно, вместо безбрашнената пряка рецепта от 3 съставки, покрити с характерния кръстосан десен с вилица - техника, която датира от вестникарска рецепта от 30-те години на миналия век, първоначално използвана, за да помогне на плътното тесто да се изпече равномерно, а не само за красота.",
      steps: [
        "Загрейте фурната на 180°C.",
        "Разбийте маслото, фъстъченото масло и двете захари заедно, после добавете яйцето и ванилията.",
        "Разбъркайте брашното, содата за хляб и солта до образуване на гладко тесто.",
        "Оформете топчета и наредете върху тава, сплесквайки всяко с вилица в кръстосан десен - тази техника на притискане датира от вестникарска рецепта от 30-те години и първоначално е служела да помогне на плътното тесто да се изпече равномерно.",
        "Печете 10-12 минути до леко стягане.",
      ],
      ingredients: [
        "1/2 чаша масло, омекнало",
        "1 чаша фъстъчено масло",
        "1/2 чаша захар",
        "1/2 чаша кафява захар",
        "1 яйце",
        "1 ч.л. ванилова есенция",
        "1 1/4 чаши брашно",
        "1 ч.л. сода за хляб",
        "1/2 ч.л. сол",
      ],
    },
  },
  {
    en: {
      slug: "sausage-and-egg-muffins",
      title: "Sausage and Egg Muffins",
      description:
        "Portable baked egg cups with well-drained sausage and cheese, whisked eggs for a fluffy texture, and a well-greased tin so they release cleanly - draining the sausage fat is what keeps the cups from turning greasy and dense.",
      imageEmoji: "🧁",
      cookTimeMinutes: 30,
      servings: 12,
      ingredients: [
        { text: "1/2 lb breakfast sausage, crumbled", ingredient: "breakfast sausage", quantity: 0.5 },
        { text: "8 eggs", ingredient: "eggs", quantity: 8 },
        { text: "1/4 cup milk", ingredient: "milk", quantity: 0.25 },
        { text: "1 cup shredded cheddar cheese", ingredient: "cheddar cheese", quantity: 1 },
        { text: "Salt and pepper to taste", ingredient: "salt and pepper", quantity: null },
      ],
      steps: [
        "Preheat oven to 350°F and grease a muffin tin well or line with paper liners.",
        "Cook the sausage, breaking it into crumbles, then drain off the excess fat - well-drained sausage is what keeps the egg cups from turning greasy and dense.",
        "Whisk the eggs and milk together vigorously until well combined and slightly frothy, then stir in the cheese, sausage, salt, and pepper.",
        "Divide the mixture among the muffin cups.",
        "Bake for 18-20 minutes until puffed and set, then let cool for a few minutes before removing so they release cleanly.",
      ],
      tags: ["breakfast", "quick"],
    },
    bg: {
      title: "Мъфини с наденица и яйце",
      description:
        "Преносими печени яйчени купички с добре отцедена наденица и сирене, разбити яйца за пухкава текстура и добре намазнена форма, за да се отделят чисто - отцеждането на мазнината от наденицата е това, което пази купичките от омазняване и плътност.",
      steps: [
        "Загрейте фурната на 180°C и намажете добре форма за мъфини или наредете хартиени касетки.",
        "Сгответе наденицата, натрошавайки я, после отцедете излишната мазнина - добре отцедената наденица е това, което пази яйчените купички от омазняване и плътност.",
        "Разбийте яйцата и млякото енергично, докато се съединят добре и леко разпенят, после разбъркайте сиренето, наденицата, солта и черния пипер.",
        "Разпределете сместа в купичките за мъфини.",
        "Печете 18-20 минути до надуване и стягане, после оставете да изстинат няколко минути, преди да ги извадите, за да се отделят чисто.",
      ],
      ingredients: [
        "225 г наденица за закуска, натрошена",
        "8 яйца",
        "1/4 чаша мляко",
        "1 чаша настъргано чедър сирене",
        "Сол и черен пипер на вкус",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
