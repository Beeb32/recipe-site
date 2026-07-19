import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "vietnamese-iced-coffee",
      title: "Vietnamese Iced Coffee",
      description:
        "Dark-roast robusta coffee grounds bloomed then slow-dripped through a phin filter into sweetened condensed milk, poured over ice - robusta rather than the arabica used in most Western coffee, and the slow phin drip, are what give this its distinctive strength.",
      imageEmoji: "☕",
      cookTimeMinutes: 10,
      servings: 1,
      ingredients: [
        { text: "2 tbsp dark roast Vietnamese robusta coffee, ground for phin filter", ingredient: "coffee", quantity: 2 },
        { text: "3 tbsp sweetened condensed milk", ingredient: "condensed milk", quantity: 3 },
        { text: "3/4 cup hot water, just off the boil", ingredient: "water", quantity: 0.75 },
        { text: "1 cup ice", ingredient: "ice", quantity: 1 },
      ],
      steps: [
        "Spoon the condensed milk into the bottom of a glass and set a phin filter on top.",
        "Add the coffee grounds to the phin chamber and press lightly with the press plate.",
        "Pour a small splash of hot water over the grounds and let it bloom for 30 seconds, then fill the phin and cover with the lid - letting it drip slowly for 4-6 minutes is what gives Vietnamese coffee its strength.",
        "Stir the finished coffee into the condensed milk.",
        "Pour over a glass of ice to serve.",
      ],
      tags: ["breakfast", "quick", "vegetarian"],
    },
    bg: {
      title: "Виетнамско студено кафе",
      description:
        "Тъмно печено кафе робуста, набъбнало и после бавно прецедено през фин филтър в подсладено кондензирано мляко, залято върху лед - робустата, вместо арабиката, използвана в повечето западни кафета, и бавното прецеждане през фин са това, което придава на тази напитка характерната ѝ сила.",
      steps: [
        "Сложете кондензираното мляко на дъното на чаша и поставете фин филтър отгоре.",
        "Сложете смляното кафе в камерата на фина и притиснете леко с пресоващата плочка.",
        "Изсипете малко гореща вода върху кафето и оставете да набъбне за 30 секунди, после напълнете фина и покрийте с капака - бавното прецеждане в продължение на 4-6 минути е това, което придава на виетнамското кафе неговата сила.",
        "Разбъркайте готовото кафе в кондензираното мляко.",
        "Излейте върху чаша лед за сервиране.",
      ],
      ingredients: [
        "2 с.л. тъмно печено виетнамско кафе робуста, смляно за фин филтър",
        "3 с.л. подсладено кондензирано мляко",
        "3/4 чаша гореща вода, точно след завиране",
        "1 чаша лед",
      ],
    },
  },
  {
    en: {
      slug: "crepes",
      title: "Crepes",
      description:
        "Thin, delicate French pancakes whisked into a batter that rests before cooking so the gluten relaxes and the bubbles settle - resting for at least 30 minutes, plus a pinch of salt, is what most quick versions skip, though both make a real difference in tenderness and flavor.",
      imageEmoji: "🥞",
      cookTimeMinutes: 25,
      servings: 4,
      ingredients: [
        { text: "1 cup flour", ingredient: "flour", quantity: 1 },
        { text: "1/2 tsp salt", ingredient: "salt", quantity: 0.5 },
        { text: "1 tbsp sugar", ingredient: "sugar", quantity: 1 },
        { text: "2 eggs", ingredient: "eggs", quantity: 2 },
        { text: "1 1/4 cups milk", ingredient: "milk", quantity: 1.25 },
        { text: "2 tbsp melted butter, plus more for the pan", ingredient: "butter", quantity: 2 },
      ],
      steps: [
        "Whisk together the flour, salt, sugar, eggs, milk, and melted butter until smooth.",
        "Cover and let the batter rest at room temperature for at least 30 minutes - resting relaxes the gluten and lets air bubbles rise out, so the crepes stay thin and tender instead of chewy.",
        "Heat a lightly greased nonstick pan over medium heat.",
        "Pour a thin layer of batter, swirling to coat, and cook for 1-2 minutes per side.",
        "Fill with your favorite sweet or savory filling.",
      ],
      tags: ["breakfast", "vegetarian", "french"],
    },
    bg: {
      title: "Палачинки",
      description:
        "Тънки, нежни френски палачинки, приготвени от тесто, което почива преди печене, за да се отпусне глутенът и мехурчетата да излязат - почивката от поне 30 минути, плюс щипка сол, е това, което повечето бързи версии пропускат, макар и двете да правят реална разлика в мекотата и вкуса.",
      steps: [
        "Разбийте брашното, солта, захарта, яйцата, млякото и разтопеното масло заедно до гладкост.",
        "Покрийте и оставете тестото да почине на стайна температура поне 30 минути - почивката отпуска глутена и позволява на въздушните мехурчета да излязат, така че палачинките остават тънки и меки, вместо жилави.",
        "Загрейте леко намазнен незалепващ тиган на среден огън.",
        "Изсипете тънък слой тесто, завъртайки за покриване, и печете по 1-2 минути от всяка страна.",
        "Напълнете с любимата ви сладка или солена плънка.",
      ],
      ingredients: [
        "1 чаша брашно",
        "1/2 ч.л. сол",
        "1 с.л. захар",
        "2 яйца",
        "1 1/4 чаши мляко",
        "2 с.л. разтопено масло, плюс още за тигана",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
