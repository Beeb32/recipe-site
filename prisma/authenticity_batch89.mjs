import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "cream-of-mushroom-soup",
      title: "Cream of Mushroom Soup",
      description:
        "A rich, silky homemade soup of mushrooms seared until deeply browned and deglazed with sherry - searing the mushrooms hard instead of just softening them, and deglazing with sherry to lift the browned bits, are what give real cream of mushroom soup its deep, savory flavor instead of a pale, one-note one.",
      imageEmoji: "🍄",
      cookTimeMinutes: 35,
      servings: 4,
      ingredients: [
        { text: "1 lb mushrooms, sliced", ingredient: "mushroom", quantity: 1 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "3 tbsp butter", ingredient: "butter", quantity: 3 },
        { text: "3 tbsp flour", ingredient: "flour", quantity: 3 },
        { text: "2 tbsp dry sherry", ingredient: "sherry", quantity: 2 },
        { text: "4 cups chicken broth", ingredient: "chicken broth", quantity: 4 },
        { text: "1 tsp fresh thyme leaves", ingredient: "thyme", quantity: 1 },
        { text: "1/2 cup heavy cream", ingredient: "heavy cream", quantity: 0.5 },
      ],
      steps: [
        "Sauté the mushrooms and onion in butter over medium-high heat, stirring occasionally, until the mushrooms release their liquid and turn deeply golden brown, about 10 minutes - searing them hard instead of just softening them is what builds real mushroom flavor.",
        "Sprinkle in the flour and cook for 1 minute, stirring constantly.",
        "Pour in the sherry and scrape up any browned bits from the bottom of the pot.",
        "Gradually whisk in the chicken broth and thyme, then simmer for 15 minutes.",
        "Stir in the cream before serving.",
      ],
      tags: ["lunch", "vegetarian", "quick"],
    },
    bg: {
      title: "Крем супа от гъби",
      description:
        "Наситена, кадифена домашна супа от гъби, запържени до дълбоко кафяво и дегласирани с шери - запържването на гъбите силно, вместо просто да омекнат, и дегласирането с шери за вдигане на запечените частици, е това, което придава на истинската крем супа от гъби дълбокия ѝ, наситен вкус, вместо блед и едноизмерен.",
      steps: [
        "Задушете гъбите и лука в масло на среден до силен огън, разбърквайки от време на време, докато гъбите отделят течността си и станат дълбоко златисти, около 10 минути - запържването им силно, вместо просто да омекнат, е това, което изгражда истинския вкус на гъбите.",
        "Поръсете с брашно и гответе 1 минута, разбърквайки постоянно.",
        "Долейте шерито и изстържете запечените частици от дъното на тенджерата.",
        "Постепенно вмъкнете пилешкия бульон и мащерката, разбърквайки, и варете 15 минути.",
        "Разбъркайте сметаната преди сервиране.",
      ],
      ingredients: [
        "450 г гъби, нарязани на резени",
        "1 лук, нарязан на кубчета",
        "3 с.л. масло",
        "3 с.л. брашно",
        "2 с.л. сухо шери",
        "4 чаши пилешки бульон",
        "1 ч.л. листа пресна мащерка",
        "1/2 чаша сметана за готвене",
      ],
    },
  },
  {
    en: {
      slug: "tomato-basil-soup",
      title: "Tomato Basil Soup",
      description:
        "A creamy, bright tomato soup finished with fresh basil stirred in off the heat - caramelizing the onion fully and browning a spoonful of tomato paste before the tomatoes go in are what build the deep, rounded flavor that plain simmered canned tomatoes alone can't reach.",
      imageEmoji: "🍅",
      cookTimeMinutes: 30,
      servings: 4,
      ingredients: [
        { text: "2 tbsp butter", ingredient: "butter", quantity: 2 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "3 cloves garlic, minced", ingredient: "garlic", quantity: 3 },
        { text: "1 tbsp tomato paste", ingredient: "tomato paste", quantity: 1 },
        { text: "2 cans crushed tomatoes", ingredient: "tomato", quantity: 2 },
        { text: "2 cups vegetable broth", ingredient: "vegetable broth", quantity: 2 },
        { text: "1/2 cup heavy cream", ingredient: "heavy cream", quantity: 0.5 },
        { text: "1/4 cup fresh basil leaves", ingredient: "basil", quantity: 0.25 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Melt butter in a pot and sauté the onion until deeply softened and lightly caramelized, about 8-10 minutes - rushing this step is what leaves the soup tasting flat.",
        "Add garlic and tomato paste and cook for 1-2 minutes, stirring, until the paste darkens slightly - browning the paste is what deepens its flavor before the liquid goes in.",
        "Stir in the crushed tomatoes and vegetable broth; simmer for 15 minutes.",
        "Blend the soup until smooth, then stir in the cream and basil off the heat - adding basil after blending keeps it bright instead of dulled by prolonged heat.",
        "Season with salt and pepper before serving.",
      ],
      tags: ["dinner", "vegetarian", "quick"],
    },
    bg: {
      title: "Доматена супа с босилек",
      description:
        "Кремообразна, свежа доматена супа, довършена с пресен босилек, разбъркан извън котлона - пълното карамелизиране на лука и запържването на лъжица доматено пюре, преди да се добавят доматите, е това, което изгражда дълбокия, закръглен вкус, който само варените консервирани домати не могат да постигнат.",
      steps: [
        "Разтопете масло в тенджера и запържете лука, докато омекне дълбоко и леко карамелизира, около 8-10 минути - бързането с тази стъпка е това, което оставя супата блудкава.",
        "Добавете чесъна и доматеното пюре и гответе 1-2 минути, разбърквайки, докато пюрето леко потъмнее - запържването на пюрето задълбочава вкуса му, преди да се добави течността.",
        "Добавете доматеното пюре и зеленчуковия бульон; варете 15 минути.",
        "Пасирайте супата до гладкост, после разбъркайте със сметаната и босилека извън котлона - добавянето на босилека след пасиране го запазва свеж, вместо да избледнее от продължителна топлина.",
        "Подправете със сол и черен пипер преди сервиране.",
      ],
      ingredients: [
        "2 с.л. масло",
        "1 лук, нарязан на кубчета",
        "3 скилидки чесън, ситно нарязани",
        "1 с.л. доматено пюре",
        "2 консерви пасирани домати",
        "2 чаши зеленчуков бульон",
        "1/2 чаша сметана за готвене",
        "1/4 чаша пресни листа босилек",
        "Сол на вкус",
        "Черен пипер на вкус",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
