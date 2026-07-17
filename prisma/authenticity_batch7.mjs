import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "spaghetti-carbonara",
      title: "Spaghetti Carbonara",
      description:
        "A Roman classic of spaghetti in a silky egg and Pecorino sauce with crispy guanciale - no cream, no garlic, just eggs, cheese, and pasta water for the emulsion.",
      imageEmoji: "🍝",
      cookTimeMinutes: 25,
      servings: 4,
      ingredients: [
        { text: "1 lb spaghetti", ingredient: "spaghetti", quantity: 1 },
        { text: "7 oz guanciale, cut into small pieces", ingredient: "guanciale", quantity: 7 },
        { text: "4 whole eggs", ingredient: "eggs", quantity: 4 },
        { text: "3/4 cup finely grated Pecorino Romano", ingredient: "pecorino", quantity: 0.75 },
        { text: "Black pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Cook the guanciale in a skillet over medium heat for 2-3 minutes, stirring, until the fat renders; turn off the heat.",
        "Whisk the whole eggs and Pecorino Romano together in a bowl with black pepper until you have a thick, creamy sauce.",
        "Cook the spaghetti in salted boiling water until al dente, then drain and add directly to the skillet with the guanciale, tossing briefly over heat to coat in the rendered fat.",
        "Turn off the heat completely, pour in the egg-cheese mixture, and stir quickly to form a smooth, creamy sauce, loosening with a splash of pasta water if needed - no garlic, no cream. Serve immediately with extra pepper and cheese.",
      ],
      tags: ["dinner", "italian", "quick"],
    },
    bg: {
      title: "Спагети Карбонара",
      description:
        "Римска класика от спагети в копринен сос от яйца и пекорино с хрупкав гуанчале - без сметана, без чесън, само яйца, сирене и вода от пастата за емулсията.",
      steps: [
        "Изпечете гуанчалето в тиган на среден огън 2-3 минути, разбърквайки, докато мазнината се разтопи; изгасете котлона.",
        "Разбийте целите яйца с пекорино романо в купа с черен пипер, докато се получи гъст, кремообразен сос.",
        "Сварете спагетите в подсолена вряща вода до готовност, после отцедете и добавете директно в тигана с гуанчалето, разбърквайки за кратко на котлона, за да се покрият с разтопената мазнина.",
        "Изгасете котлона напълно, изсипете яйчено-сиренената смес и разбъркайте бързо, за да се получи гладък, кремообразен сос, разреждайки с малко вода от пастата при нужда - без чесън, без сметана. Сервирайте веднага с допълнителен пипер и сирене.",
      ],
      ingredients: [
        "450 г спагети",
        "200 г гуанчале, нарязано на дребно",
        "4 цели яйца",
        "3/4 чаша фино настърган пекорино романо",
        "Черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "spaghetti-bolognese",
      title: "Spaghetti Bolognese",
      description:
        "A slow-simmered beef and pancetta ragù with a soffritto of onion, carrot, and celery, mellowed with a splash of milk - traditionally tossed with tagliatelle, though spaghetti works too.",
      imageEmoji: "🍝",
      cookTimeMinutes: 150,
      servings: 6,
      ingredients: [
        { text: "3 oz pancetta, finely diced", ingredient: "pancetta", quantity: 3 },
        { text: "2 tbsp olive oil", ingredient: "olive oil", quantity: 2 },
        { text: "1 onion, finely diced", ingredient: "onion", quantity: 1 },
        { text: "2 carrots, finely diced", ingredient: "carrot", quantity: 2 },
        { text: "2 celery stalks, finely diced", ingredient: "celery", quantity: 2 },
        { text: "1 lb ground beef", ingredient: "ground beef", quantity: 1 },
        { text: "1 cup red wine", ingredient: "red wine", quantity: 1 },
        { text: "2 cans crushed tomatoes", ingredient: "tomato", quantity: 2 },
        { text: "1/2 cup whole milk", ingredient: "milk", quantity: 0.5 },
        { text: "1 lb spaghetti or tagliatelle", ingredient: "spaghetti", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Cook the pancetta in olive oil in a large pot until the fat renders, then add the onion, carrot, and celery and sauté until softened.",
        "Add the ground beef and cook until browned.",
        "Pour in the red wine and simmer until mostly evaporated.",
        "Stir in the crushed tomatoes and simmer, partially covered, on low heat for at least 2 hours, stirring occasionally.",
        "Stir in the milk during the last 10 minutes to mellow the sauce's acidity, then season to taste.",
        "Cook the pasta separately, then toss with the sauce and serve.",
      ],
      tags: ["dinner", "italian"],
    },
    bg: {
      title: "Спагети Болонезе",
      description:
        "Бавно къкрещ рагу от телешко и панчета с основа от лук, моркови и целина, омекотен с малко мляко - традиционно се сервира с тальятели, но спагетите също работят.",
      steps: [
        "Запържете панчетата в зехтина в голяма тенджера, докато мазнината се разтопи, после добавете лука, моркова и целината и запържете до омекване.",
        "Добавете каймата и гответе до запържване.",
        "Изсипете червеното вино и оставете да къкри, докато почти се изпари.",
        "Добавете доматеното пюре и оставете да къкри, частично покрито, на слаб огън поне 2 часа, разбърквайки от време на време.",
        "Разбъркайте млякото през последните 10 минути, за да омекотите киселинността на соса, после подправете на вкус.",
        "Сварете пастата отделно, после разбъркайте със соса и сервирайте.",
      ],
      ingredients: [
        "85 г панчета, ситно нарязана",
        "2 с.л. зехтин",
        "1 лук, ситно нарязан на кубчета",
        "2 моркова, ситно нарязани на кубчета",
        "2 стъбла целина, ситно нарязани на кубчета",
        "450 г кайма от телешко месо",
        "1 чаша червено вино",
        "2 консерви доматено пюре",
        "1/2 чаша пълномаслено мляко",
        "450 г спагети или тальятели",
        "Сол на вкус",
        "Черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "pad-thai",
      title: "Pad Thai",
      description:
        "Stir-fried rice noodles with shrimp or tofu, egg, and peanuts, balanced by the classic Thai trinity of tamarind, fish sauce, and palm sugar.",
      imageEmoji: "🍜",
      cookTimeMinutes: 30,
      servings: 4,
      ingredients: [
        { text: "8 oz rice noodles", ingredient: "rice noodles", quantity: 8 },
        { text: "2 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 2 },
        { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
        { text: "2 eggs", ingredient: "eggs", quantity: 2 },
        { text: "8 oz shrimp or tofu", ingredient: "shrimp", quantity: 8 },
        { text: "3 tbsp tamarind paste", ingredient: "tamarind paste", quantity: 3 },
        { text: "2 tbsp fish sauce", ingredient: "fish sauce", quantity: 2 },
        { text: "2 tbsp palm sugar (or brown sugar)", ingredient: "palm sugar", quantity: 2 },
        { text: "2 cups bean sprouts", ingredient: "bean sprouts", quantity: 2 },
        { text: "3 green onions, sliced", ingredient: "green onion", quantity: 3 },
        { text: "1/4 cup crushed peanuts", ingredient: "peanuts", quantity: 0.25 },
        { text: "Lime wedges, for serving", ingredient: "lime", quantity: null },
      ],
      steps: [
        "Soak the rice noodles in warm water until pliable, then drain.",
        "Whisk together the tamarind paste, fish sauce, and palm sugar until the sugar dissolves; taste and adjust for a balance of sour, salty, and sweet.",
        "Heat oil in a wok, sauté the garlic briefly, then scramble the eggs and push to one side; add the shrimp or tofu and cook through.",
        "Add the noodles and the tamarind sauce, tossing to coat, then stir in the bean sprouts and green onions.",
        "Top with crushed peanuts and serve with lime wedges to squeeze over just before eating.",
      ],
      tags: ["dinner", "asian"],
    },
    bg: {
      title: "Пад Тай",
      description:
        "Пържена юфка от ориз със скариди или тофу, яйце и фъстъци, балансирана с класическата тайландска триада от тамаринд, рибен сос и палмова захар.",
      steps: [
        "Накиснете оризовата юфка в топла вода до омекване, после отцедете.",
        "Разбийте тамариндовата паста, рибения сос и палмовата захар заедно, докато захарта се разтвори; опитайте и коригирайте баланса между кисело, солено и сладко.",
        "Загрейте олио в уок, задушете за кратко чесъна, после разбъркайте яйцата и ги избутайте настрани; добавете скаридите или тофуто и гответе до готовност.",
        "Добавете юфката и тамариндовия сос, разбърквайки за покриване, после добавете кълновете от боб и пресния лук.",
        "Поръсете с натрошени фъстъци и сервирайте с резенчета лайм за изстискване точно преди хапване.",
      ],
      ingredients: [
        "225 г оризова юфка",
        "2 с.л. олио",
        "2 скилидки чесън, ситно нарязани",
        "2 яйца",
        "225 г скариди или тофу",
        "3 с.л. тамариндова паста",
        "2 с.л. рибен сос",
        "2 с.л. палмова захар (или кафява захар)",
        "2 чаши кълнове от боб",
        "3 стръка пресен лук, нарязани",
        "1/4 чаша натрошени фъстъци",
        "Резенчета лайм, за сервиране",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
