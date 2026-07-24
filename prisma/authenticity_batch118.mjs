import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "creamy-potato-salad",
      title: "Creamy Potato Salad",
      description:
        "Tender boiled potatoes tossed with vinegar while still warm so they actually absorb seasoning, then combined with a creamy mustard dressing, celery, and egg - dressing cold, unseasoned potatoes straight with mayonnaise is why most potato salad tastes bland at the base.",
      imageEmoji: "🥔",
      cookTimeMinutes: 35,
      servings: 6,
      ingredients: [
        { text: "6 potatoes, cubed", ingredient: "potato", quantity: 6 },
        { text: "1 tbsp apple cider vinegar", ingredient: "apple cider vinegar", quantity: 1 },
        { text: "3 eggs, hard-boiled and chopped", ingredient: "eggs", quantity: 3 },
        { text: "2 celery stalks, diced", ingredient: "celery", quantity: 2 },
        { text: "3/4 cup mayonnaise", ingredient: "mayonnaise", quantity: 0.75 },
        { text: "1 tbsp Dijon mustard", ingredient: "dijon mustard", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Boil the potatoes until fork-tender, then drain.",
        "While still warm, toss the potatoes with the vinegar - warm potatoes absorb seasoning that cold ones won't.",
        "Once slightly cooled, combine the potatoes with the eggs and celery in a large bowl.",
        "Whisk together the mayonnaise and Dijon mustard, then fold into the potato mixture.",
        "Season with salt and pepper and chill before serving.",
      ],
      tags: ["lunch", "vegetarian", "salad"],
    },
    bg: {
      title: "Кремообразна картофена салата",
      description:
        "Нежни сварени картофи, разбъркани с оцет докато са още топли, за да попият наистина подправките, после смесени с кремообразен сос от горчица, целина и яйце - подправянето на студени, безвкусни картофи направо с майонеза е причината повечето картофени салати да имат безвкусна основа.",
      steps: [
        "Сварете картофите до омекване, после отцедете.",
        "Докато са още топли, разбъркайте картофите с оцета - топлите картофи попиват подправки, каквито студените няма.",
        "След като леко изстинат, смесете картофите с яйцата и целината в голяма купа.",
        "Разбъркайте майонезата и дижонската горчица, после добавете в картофената смес.",
        "Подправете със сол и черен пипер и охладете преди сервиране.",
      ],
      ingredients: [
        "6 картофа, нарязани на кубчета",
        "1 с.л. ябълков оцет",
        "3 твърдо сварени яйца, нарязани",
        "2 стъбла целина, нарязани на кубчета",
        "3/4 чаша майонеза",
        "1 с.л. дижонска горчица",
        "Сол на вкус",
        "Черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "cucumber-tomato-salad",
      title: "Cucumber Tomato Salad",
      description:
        "A refreshing, no-cook salad of cucumber and tomato tossed in a light dressing - salting the cucumbers and letting them drain first is what keeps the salad crisp instead of watery, a step most quick versions skip.",
      imageEmoji: "🥒",
      cookTimeMinutes: 10,
      servings: 4,
      ingredients: [
        { text: "2 cucumbers, sliced", ingredient: "cucumber", quantity: 2 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "2 tomatoes, diced", ingredient: "tomato", quantity: 2 },
        { text: "1/4 red onion, sliced thin", ingredient: "red onion", quantity: 0.25 },
        { text: "2 tbsp olive oil", ingredient: "olive oil", quantity: 2 },
        { text: "1 tbsp red wine vinegar", ingredient: "red wine vinegar", quantity: 1 },
      ],
      steps: [
        "Salt the sliced cucumbers and let them sit in a colander for 10-15 minutes to draw out excess water, then pat dry - skipping this is what makes the salad watery.",
        "Combine the cucumbers, tomatoes, and red onion in a bowl.",
        "Whisk together the olive oil and red wine vinegar.",
        "Toss the salad with the dressing and chill before serving.",
      ],
      tags: ["lunch", "vegan", "vegetarian", "quick", "salad", "mediterranean"],
    },
    bg: {
      title: "Салата от краставици и домати",
      description:
        "Освежаваща салата без готвене от краставица и домат в лек сос - осоляването на краставиците и оставянето им да отцедят първо е това, което пази салатата хрупкава, вместо воднеста, стъпка, която повечето бързи версии пропускат.",
      steps: [
        "Осолете нарязаните краставици и ги оставете в цедка за 10-15 минути, за да изтече излишната вода, после подсушете - пропускането на това прави салатата воднеста.",
        "Смесете краставиците, доматите и червения лук в купа.",
        "Разбъркайте зехтина и червения винен оцет.",
        "Разбъркайте салатата със соса и охладете преди сервиране.",
      ],
      ingredients: [
        "2 краставици, нарязани на резени",
        "Сол на вкус",
        "2 домата, нарязани на кубчета",
        "1/4 червен лук, нарязан на тънко",
        "2 с.л. зехтин",
        "1 с.л. червен винен оцет",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
