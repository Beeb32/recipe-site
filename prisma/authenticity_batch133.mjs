import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "cauliflower-soup",
      title: "Cauliflower Soup",
      description:
        "A velvety, mild soup made from cauliflower roasted until browned at the edges rather than simply simmered, blended until smooth - boiling the cauliflower straight in broth is why many versions taste watery instead of deeply flavored.",
      imageEmoji: "🥣",
      cookTimeMinutes: 40,
      servings: 4,
      ingredients: [
        { text: "1 head cauliflower, cut into florets", ingredient: "cauliflower", quantity: 1 },
        { text: "2 tbsp olive oil", ingredient: "olive oil", quantity: 2 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "4 cups vegetable broth", ingredient: "vegetable broth", quantity: 4 },
        { text: "1/2 cup heavy cream", ingredient: "heavy cream", quantity: 0.5 },
        { text: "2 tbsp butter", ingredient: "butter", quantity: 2 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Toss the cauliflower with the olive oil and a pinch of salt, then roast at 425°F for 20-25 minutes until tender and browned at the edges - roasting instead of boiling is what gives the soup real depth of flavor instead of a watery base.",
        "Melt the butter and sauté the onion until softened.",
        "Add the roasted cauliflower and vegetable broth, then simmer for 10 minutes.",
        "Blend until smooth, then stir in the cream, seasoning with salt and pepper.",
      ],
      tags: ["lunch", "vegetarian", "quick"],
    },
    bg: {
      title: "Супа от карфиол",
      description:
        "Кадифена, лека супа от карфиол, печен до покафеняване по краищата, вместо просто варен, пасирана до гладкост - варенето на карфиола направо в бульона е причината много версии да имат воднист, а не дълбок вкус.",
      steps: [
        "Разбъркайте карфиола със зехтина и щипка сол, после изпечете на 220°C 20-25 минути, докато омекне и покафенее по краищата - печенето, вместо варенето, е това, което придава на супата истинска дълбочина на вкуса, вместо воднист вкус.",
        "Разтопете маслото и задушете лука до омекване.",
        "Добавете печения карфиол и зеленчуковия бульон, после варете 10 минути.",
        "Пасирайте до гладкост, после добавете сметаната, подправяйки със сол и черен пипер.",
      ],
      ingredients: [
        "1 глава карфиол, нарязана на съцветия",
        "2 с.л. зехтин",
        "1 лук, нарязан на кубчета",
        "4 чаши зеленчуков бульон",
        "1/2 чаша сметана за готвене",
        "2 с.л. масло",
        "Сол на вкус",
        "Черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "easy-tomato-soup",
      title: "Easy Tomato Soup",
      description:
        "A quick, creamy tomato soup made from canned tomatoes with garlic, basil, and a pinch of sugar to balance the acidity - canned tomatoes straight into broth with nothing to round out their sharpness is why quick tomato soup often tastes thin and tinny.",
      imageEmoji: "🍅",
      cookTimeMinutes: 20,
      servings: 4,
      ingredients: [
        { text: "2 cans crushed tomatoes", ingredient: "tomato", quantity: 2 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
        { text: "2 cups vegetable broth", ingredient: "vegetable broth", quantity: 2 },
        { text: "1/2 cup heavy cream", ingredient: "heavy cream", quantity: 0.5 },
        { text: "2 tbsp butter", ingredient: "butter", quantity: 2 },
        { text: "1 tsp sugar", ingredient: "sugar", quantity: 1 },
        { text: "2 tbsp chopped fresh basil", ingredient: "basil", quantity: 2 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Melt the butter and sauté the onion and garlic until softened, about 5 minutes.",
        "Stir in the crushed tomatoes, vegetable broth, and sugar, then simmer for 10 minutes - the sugar is what balances the acidity of canned tomatoes instead of leaving the soup sharp and tinny.",
        "Blend until smooth using an immersion blender or regular blender.",
        "Stir in the cream and basil, and season with salt before serving.",
      ],
      tags: ["lunch", "vegetarian", "quick"],
    },
    bg: {
      title: "Лесна доматена супа",
      description:
        "Бърза, кремообразна доматена супа от консервирани домати с чесън, босилек и щипка захар за баланс на киселинността - консервираните домати направо в бульона, без нищо да закръгли остротата им, е причината бързата доматена супа често да има тънък, металически вкус.",
      steps: [
        "Разтопете маслото и запържете лука и чесъна до омекване, около 5 минути.",
        "Добавете нарязаните домати, зеленчуковия бульон и захарта, после варете 10 минути - захарта е това, което балансира киселинността на консервираните домати, вместо да остави супата остра и с металически вкус.",
        "Пасирайте до гладкост с пасатор или обикновен блендер.",
        "Добавете сметаната и босилека, и подправете със сол преди сервиране.",
      ],
      ingredients: [
        "2 консерви нарязани домати",
        "1 лук, нарязан на кубчета",
        "2 скилидки чесън, ситно нарязани",
        "2 чаши зеленчуков бульон",
        "1/2 чаша сметана за готвене",
        "2 с.л. масло",
        "1 ч.л. захар",
        "2 с.л. нарязан пресен босилек",
        "Сол на вкус",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
