import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "greek-chicken-bowl",
      title: "Greek Chicken Bowl",
      description:
        "Grilled chicken, rice, cucumber, tomato, red onion, and feta with a lemon-oregano dressing - a bowl calling itself Greek with no oregano, tomato, or onion in it is missing the ingredients that actually make it taste Greek.",
      imageEmoji: "🥗",
      cookTimeMinutes: 30,
      servings: 4,
      ingredients: [
        { text: "2 chicken breasts, grilled, sliced, and seasoned with salt", ingredient: "chicken breast", quantity: 2 },
        { text: "3 cups cooked rice", ingredient: "rice", quantity: 3 },
        { text: "1 cucumber, diced", ingredient: "cucumber", quantity: 1 },
        { text: "1 tomato, diced", ingredient: "tomato", quantity: 1 },
        { text: "1/4 red onion, thinly sliced", ingredient: "red onion", quantity: 0.25 },
        { text: "1/2 cup crumbled feta cheese", ingredient: "feta cheese", quantity: 0.5 },
        { text: "3 tbsp olive oil", ingredient: "olive oil", quantity: 3 },
        { text: "1 lemon, juiced", ingredient: "lemon", quantity: 1 },
        { text: "1/2 tsp dried oregano", ingredient: "oregano", quantity: 0.5 },
      ],
      steps: [
        "Divide the rice among bowls.",
        "Top with sliced chicken, cucumber, tomato, red onion, and feta.",
        "Whisk together the olive oil, lemon juice, and oregano - the oregano is what actually makes this taste Greek instead of just a generic lemon-chicken bowl.",
        "Drizzle the dressing over the bowls before serving.",
      ],
      tags: ["dinner", "mediterranean", "quick"],
    },
    bg: {
      title: "Гръцка купа с пиле",
      description:
        "Пиле на скара, ориз, краставица, домат, червен лук и фета с дресинг от лимон и риган - купа, наречена гръцка, без риган, домат или лук в нея, липсва съставките, които наистина ѝ придават гръцки вкус.",
      steps: [
        "Разпределете ориза в купи.",
        "Отгоре сложете нарязано пиле, краставица, домат, червен лук и фета.",
        "Разбийте зехтина, лимоновия сок и ригана заедно - риганът е това, което наистина придава гръцки вкус, вместо да е просто обикновена купа с пиле и лимон.",
        "Полейте купите с дресинга преди сервиране.",
      ],
      ingredients: [
        "2 пилешки гърди, изпечени на скара, нарязани и подправени със сол",
        "3 чаши сготвен ориз",
        "1 краставица, нарязана на кубчета",
        "1 домат, нарязан на кубчета",
        "1/4 червен лук, нарязан на тънко",
        "1/2 чаша натрошено сирене фета",
        "3 с.л. зехтин",
        "1 лимон, изцеден",
        "1/2 ч.л. сушен риган",
      ],
    },
  },
  {
    en: {
      slug: "falafel-bowl",
      title: "Falafel Bowl",
      description:
        "Crispy falafel over rice with hummus, cucumber, tomato, and a lemony tahini drizzle - a bowl with nothing but a dollop of hummus and no dressing on the vegetables is why most falafel bowls taste dry and under-seasoned.",
      imageEmoji: "🥗",
      cookTimeMinutes: 35,
      servings: 4,
      ingredients: [
        { text: "12 falafel, cooked", ingredient: "falafel", quantity: 12 },
        { text: "3 cups cooked rice", ingredient: "rice", quantity: 3 },
        { text: "1/2 cup hummus", ingredient: "hummus", quantity: 0.5 },
        { text: "1 cucumber, diced", ingredient: "cucumber", quantity: 1 },
        { text: "1 tomato, diced", ingredient: "tomato", quantity: 1 },
        { text: "2 tbsp tahini", ingredient: "tahini", quantity: 2 },
        { text: "1 tbsp lemon juice", ingredient: "lemon juice", quantity: 1 },
        { text: "2 tbsp water", ingredient: "water", quantity: 2 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Divide the rice among bowls.",
        "Top with falafel, cucumber, and tomato.",
        "Whisk the tahini with lemon juice, water, and salt until smooth and drizzle over the bowls - a tahini drizzle is what actually dresses the vegetables instead of leaving them plain next to a dollop of hummus.",
        "Add a generous dollop of hummus and serve immediately.",
      ],
      tags: ["lunch", "vegan", "vegetarian", "mediterranean", "quick"],
    },
    bg: {
      title: "Купа с фалафел",
      description:
        "Хрупкав фалафел върху ориз с хумус, краставица, домат и лимонов дресинг от тахан - купа само с лъжица хумус и без дресинг за зеленчуците е причината повечето купи с фалафел да са сухи и недостатъчно подправени.",
      steps: [
        "Разпределете ориза в купи.",
        "Отгоре сложете фалафел, краставица и домат.",
        "Разбийте тахана с лимонов сок, вода и сол до гладкост и полейте купите - дресингът от тахан е това, което наистина подправя зеленчуците, вместо да ги остави обикновени до лъжица хумус.",
        "Добавете щедра лъжица хумус и сервирайте веднага.",
      ],
      ingredients: [
        "12 фалафела, сготвени",
        "3 чаши сготвен ориз",
        "1/2 чаша хумус",
        "1 краставица, нарязана на кубчета",
        "1 домат, нарязан на кубчета",
        "2 с.л. тахан",
        "1 с.л. лимонов сок",
        "2 с.л. вода",
        "Сол на вкус",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
