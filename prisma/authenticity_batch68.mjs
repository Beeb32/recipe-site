import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "potato-leek-soup",
      title: "Potato Leek Soup",
      description:
        "A creamy, comforting soup of tender potatoes and sweet leeks, sweated low and slow in butter so they stay pale instead of browning - browning the leeks, which happens if the heat runs too high, turns the soup bitter and dull instead of delicately sweet.",
      imageEmoji: "🥔",
      cookTimeMinutes: 40,
      servings: 6,
      ingredients: [
        { text: "3 leeks, white and light green parts only, sliced and rinsed well", ingredient: "leek", quantity: 3 },
        { text: "4 potatoes, cubed", ingredient: "potato", quantity: 4 },
        { text: "4 cups chicken broth", ingredient: "chicken broth", quantity: 4 },
        { text: "1/2 cup heavy cream", ingredient: "heavy cream", quantity: 0.5 },
        { text: "2 tbsp butter", ingredient: "butter", quantity: 2 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Melt the butter and sweat the leeks over low heat until softened but not browned, about 8-10 minutes - browning here is what turns the soup bitter instead of sweet.",
        "Add the potatoes and chicken broth, then simmer until the potatoes are tender, about 20 minutes.",
        "Blend until smooth.",
        "Stir in the cream and season with salt and pepper before serving.",
      ],
      tags: ["dinner", "quick"],
    },
    bg: {
      title: "Крем супа от картофи и праз",
      description:
        "Кремообразна, уютна супа от нежни картофи и сладък праз, задушен бавно на слаб огън в масло, за да остане блед, вместо да покафенее - покафеняването на праза, ако топлината е твърде силна, прави супата горчива и матова, вместо нежно сладка.",
      steps: [
        "Разтопете маслото и задушете праза на слаб огън, докато омекне, но не покафенее, около 8-10 минути - покафеняването тук е това, което прави супата горчива, вместо сладка.",
        "Добавете картофите и пилешкия бульон, после варете, докато картофите омекнат, около 20 минути.",
        "Пасирайте до гладкост.",
        "Добавете сметаната и подправете със сол и черен пипер преди сервиране.",
      ],
      ingredients: [
        "3 стръка праз, само бялата и светлозелената част, нарязани и добре изплакнати",
        "4 картофа, нарязани на кубчета",
        "4 чаши пилешки бульон",
        "1/2 чаша течна сметана",
        "2 с.л. масло",
        "Сол на вкус",
        "Черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "classic-coleslaw",
      title: "Classic Coleslaw",
      description:
        "Crunchy shredded cabbage and carrot salted and drained first to pull out excess water, then tossed in a creamy, tangy dressing - salting is the step most quick versions skip, and it's what keeps coleslaw crisp instead of watery.",
      imageEmoji: "🥬",
      cookTimeMinutes: 15,
      servings: 6,
      ingredients: [
        { text: "1 head cabbage, shredded", ingredient: "cabbage", quantity: 1 },
        { text: "2 carrots, shredded", ingredient: "carrot", quantity: 2 },
        { text: "1 tsp salt, for drawing out water", ingredient: "salt", quantity: 1 },
        { text: "3/4 cup mayonnaise", ingredient: "mayonnaise", quantity: 0.75 },
        { text: "2 tbsp apple cider vinegar", ingredient: "apple cider vinegar", quantity: 2 },
        { text: "1 tbsp sugar", ingredient: "sugar", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Toss the shredded cabbage and carrots with the 1 tsp salt in a colander and let drain for 15 minutes, then rinse briefly and pat dry - salting draws out excess water so the coleslaw stays crisp instead of watery.",
        "Whisk together the mayonnaise, vinegar, and sugar.",
        "Toss the dressing with the drained cabbage and carrots until evenly coated.",
        "Season with additional salt to taste and chill for at least 30 minutes before serving.",
      ],
      tags: ["lunch", "vegetarian", "quick", "salad"],
    },
    bg: {
      title: "Класическа зелева салата",
      description:
        "Хрупкаво настъргано зеле и моркови, посолени и отцедени първо, за да се извади излишната вода, после разбъркани в кремообразен, кисел сос - осоляването е стъпката, която повечето бързи версии пропускат, и е това, което пази салатата хрупкава, вместо воднеста.",
      steps: [
        "Разбъркайте настърганото зеле и морковите с 1 ч.л. сол в гевгир и оставете да се отцеди 15 минути, после изплакнете набързо и подсушете - осоляването изважда излишната вода, за да остане салатата хрупкава, вместо воднеста.",
        "Разбъркайте майонезата, оцета и захарта.",
        "Разбъркайте соса с отцеденото зеле и морковите до равномерно покриване.",
        "Подправете с още сол на вкус и охладете поне 30 минути преди сервиране.",
      ],
      ingredients: [
        "1 глава зеле, настъргана",
        "2 моркова, настъргани",
        "1 ч.л. сол, за извличане на водата",
        "3/4 чаша майонеза",
        "2 с.л. ябълков оцет",
        "1 с.л. захар",
        "Сол на вкус",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
