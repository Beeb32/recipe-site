import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "antipasto-salad",
      title: "Antipasto Salad",
      description:
        "A hearty Italian-style salad of cured meats, cheese, and marinated vegetables tossed in a garlic-oregano vinaigrette rather than a plain oil drizzle, then rested to let the flavors meld - the vinaigrette is what actually seasons the ingredients instead of just coating them.",
      imageEmoji: "🥗",
      cookTimeMinutes: 15,
      servings: 4,
      ingredients: [
        { text: "4 oz salami, sliced", ingredient: "salami", quantity: 4 },
        { text: "4 oz mozzarella balls", ingredient: "mozzarella", quantity: 4 },
        { text: "1 cup cherry tomatoes, halved", ingredient: "cherry tomatoes", quantity: 1 },
        { text: "1/2 cup marinated artichoke hearts", ingredient: "artichoke hearts", quantity: 0.5 },
        { text: "1/2 cup olives", ingredient: "olives", quantity: 0.5 },
        { text: "3 tbsp olive oil", ingredient: "olive oil", quantity: 3 },
        { text: "1 tbsp red wine vinegar", ingredient: "red wine vinegar", quantity: 1 },
        { text: "1 clove garlic, minced", ingredient: "garlic", quantity: 1 },
        { text: "1/2 tsp dried oregano", ingredient: "oregano", quantity: 0.5 },
        { text: "Salt and pepper to taste", ingredient: "salt and pepper", quantity: null },
      ],
      steps: [
        "Whisk together the olive oil, red wine vinegar, garlic, oregano, salt, and pepper to make a vinaigrette.",
        "Toss the salami, mozzarella, tomatoes, artichoke hearts, and olives with the vinaigrette - tossing everything in the dressing is what actually seasons the salad, instead of leaving it under a plain oil drizzle.",
        "Let sit for 10-15 minutes at room temperature before serving so the flavors meld.",
      ],
      tags: ["lunch", "italian", "quick", "salad"],
    },
    bg: {
      title: "Салата Антипасто",
      description:
        "Сита салата в италиански стил от сушени меса, сирене и маринован зеленчук, разбъркана с винегрет от чесън и риган, вместо оставена под обикновен зехтин, после оставена да почине, за да се слеят вкусовете - винегретът е това, което всъщност подправя съставките, вместо просто да ги покрива.",
      steps: [
        "Разбийте зехтина, червения винен оцет, чесъна, ригана, солта и черния пипер, за да направите винегрет.",
        "Разбъркайте салама, моцарелата, доматите, сърцата от артишок и маслините с винегрета - разбъркването на всичко в дресинга е това, което всъщност подправя салатата, вместо да я остави под обикновен зехтин.",
        "Оставете да престои 10-15 минути на стайна температура преди сервиране, за да се слеят вкусовете.",
      ],
      ingredients: [
        "115 г салам, нарязан на резени",
        "115 г топчета моцарела",
        "1 чаша чери домати, разрязани наполовина",
        "1/2 чаша маринован сърца от артишок",
        "1/2 чаша маслини",
        "3 с.л. зехтин",
        "1 с.л. червен винен оцет",
        "1 скилидка чесън, ситно нарязана",
        "1/2 ч.л. сушен риган",
        "Сол и черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "broccoli-salad",
      title: "Broccoli Salad",
      description:
        "Crunchy raw broccoli tossed with bacon, red onion, and a creamy, tangy dressing, then chilled for a few hours instead of just 30 minutes - broccoli salad needs real time in the fridge for the vinegar to mellow the raw broccoli's bite, not just a quick chill.",
      imageEmoji: "🥦",
      cookTimeMinutes: 20,
      servings: 6,
      ingredients: [
        { text: "4 cups broccoli florets, chopped small", ingredient: "broccoli", quantity: 4 },
        { text: "6 slices bacon, cooked and crumbled", ingredient: "bacon", quantity: 6 },
        { text: "1/4 cup diced red onion", ingredient: "red onion", quantity: 0.25 },
        { text: "1/2 cup mayonnaise", ingredient: "mayonnaise", quantity: 0.5 },
        { text: "1 tbsp apple cider vinegar", ingredient: "apple cider vinegar", quantity: 1 },
        { text: "1 tbsp sugar", ingredient: "sugar", quantity: 1 },
      ],
      steps: [
        "Chop the broccoli florets into small bite-sized pieces - smaller pieces take the dressing better and are less harsh to bite into raw.",
        "Whisk together the mayonnaise, vinegar, and sugar.",
        "Toss the broccoli, bacon, and red onion with the dressing.",
        "Chill for at least 2-3 hours, or overnight, before serving - broccoli salad needs real time for the vinegar to mellow the raw broccoli, not just a quick chill.",
      ],
      tags: ["lunch", "quick", "salad"],
    },
    bg: {
      title: "Салата от броколи",
      description:
        "Хрупкави сурови броколи, разбъркани с бекон, червен лук и кремообразен, пикантен сос, после охладени за няколко часа, вместо само 30 минути - салатата от броколи се нуждае от реално време в хладилника, за да омекоти оцетът суровостта на броколите, не само бърз студ.",
      steps: [
        "Нарежете съцветията броколи на малки хапки - по-малките парченца поемат по-добре соса и са по-леки за хапане в суров вид.",
        "Разбъркайте майонезата, оцета и захарта.",
        "Разбъркайте броколите, бекона и червения лук със соса.",
        "Охладете поне 2-3 часа, или през нощта, преди сервиране - салатата от броколи се нуждае от реално време, за да омекоти оцетът суровите броколи, не само бърз студ.",
      ],
      ingredients: [
        "4 чаши съцветия броколи, нарязани на малки парченца",
        "6 резена бекон, изпечен и натрошен",
        "1/4 чаша нарязан на кубчета червен лук",
        "1/2 чаша майонеза",
        "1 с.л. ябълков оцет",
        "1 с.л. захар",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
