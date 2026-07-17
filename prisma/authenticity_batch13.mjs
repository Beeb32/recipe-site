import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "falafel",
      title: "Falafel",
      description:
        "Crispy fried patties of raw, soaked chickpeas (never canned) ground with herbs and spices - a Middle Eastern staple whose light, fluffy interior depends on starting from dried beans.",
      imageEmoji: "🧆",
      cookTimeMinutes: 60,
      servings: 4,
      ingredients: [
        { text: "2 cups dried chickpeas", ingredient: "chickpeas", quantity: 2 },
        { text: "1/2 tsp baking soda (for soaking)", ingredient: "baking soda", quantity: 0.5 },
        { text: "1 onion, chopped", ingredient: "onion", quantity: 1 },
        { text: "3 cloves garlic", ingredient: "garlic", quantity: 3 },
        { text: "1/2 cup chopped parsley", ingredient: "parsley", quantity: 0.5 },
        { text: "1/2 cup chopped cilantro", ingredient: "cilantro", quantity: 0.5 },
        { text: "1 tsp cumin", ingredient: "cumin", quantity: 1 },
        { text: "1 tsp ground coriander", ingredient: "coriander", quantity: 1 },
        { text: "1/4 tsp baking soda (added just before frying)", ingredient: "baking soda", quantity: 0.25 },
        { text: "2 tbsp flour", ingredient: "flour", quantity: 2 },
        { text: "Vegetable oil for frying", ingredient: "vegetable oil", quantity: null },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Soak the dried chickpeas with the baking soda in plenty of water for 18-24 hours (do not use canned chickpeas or pre-cook them - raw soaked chickpeas are what give falafel its light, fluffy texture).",
        "Drain the chickpeas well and pulse them in a food processor with the onion, garlic, parsley, and cilantro until finely ground but not puréed.",
        "Add the cumin, coriander, flour, and salt, pulsing until a coarse, holdable mixture forms; refrigerate for 30 minutes to firm up.",
        "Just before frying, mix in the remaining baking soda, then shape the mixture into small patties or balls.",
        "Heat oil in a deep pan and fry the falafel until golden brown and crisp, about 3-4 minutes. Drain on paper towels and serve in pita with tahini sauce.",
      ],
      tags: ["lunch", "vegan", "mediterranean"],
    },
    bg: {
      title: "Фалафел",
      description:
        "Хрупкави пържени кюфтенца от сурови, накиснати (никога консервирани) нахутови зърна, смлени с билки и подправки - основно ястие в Близкия изток, чиято лека, пухкава сърцевина зависи от започването със сух нахут.",
      steps: [
        "Накиснете сухия нахут със содата бикарбонат в обилно количество вода за 18-24 часа (не използвайте консервиран нахут и не го варете предварително - сурови накиснати зърна са това, което дава на фалафела лека, пухкава текстура).",
        "Отцедете добре нахута и го пасирайте на пресекулки в кухненски робот с лука, чесъна, магданоза и кориандъра, докато стане фино смляно, но не на пюре.",
        "Добавете кимиона, млития кориандър, брашното и солта, пасирайте до груба, стегната смес; охладете в хладилника 30 минути, за да се стегне.",
        "Точно преди пържене вмесете останалата сода бикарбонат, после оформете сместа на малки кюфтенца или топчета.",
        "Загрейте олио в дълбок тиган и изпържете фалафела до златисто и хрупкаво, около 3-4 минути. Отцедете върху кухненска хартия и сервирайте в пита с тахан сос.",
      ],
      ingredients: [
        "2 чаши сух нахут",
        "1/2 ч.л. сода бикарбонат (за накисване)",
        "1 лук, нарязан",
        "3 скилидки чесън",
        "1/2 чаша нарязан магданоз",
        "1/2 чаша нарязан пресен кориандър",
        "1 ч.л. кимион",
        "1 ч.л. млян кориандър",
        "1/4 ч.л. сода бикарбонат (добавена точно преди пържене)",
        "2 с.л. брашно",
        "Олио за пържене",
        "Сол на вкус",
      ],
    },
  },
  {
    en: {
      slug: "tabbouleh",
      title: "Tabbouleh",
      description:
        "A refreshing herb salad - parsley makes up most of the volume, with just enough bulgur, soaked directly in the lemon-olive oil dressing, to bind it.",
      imageEmoji: "🥗",
      cookTimeMinutes: 20,
      servings: 4,
      ingredients: [
        { text: "1/4 cup fine (#1) bulgur", ingredient: "bulgur", quantity: 0.25 },
        { text: "1/4 cup lemon juice", ingredient: "lemon juice", quantity: 0.25 },
        { text: "1/4 cup olive oil", ingredient: "olive oil", quantity: 0.25 },
        { text: "1/2 tsp salt", ingredient: "salt", quantity: 0.5 },
        { text: "3 cups finely chopped flat-leaf parsley", ingredient: "parsley", quantity: 3 },
        { text: "2 tomatoes, diced", ingredient: "tomato", quantity: 2 },
        { text: "1/4 cup chopped mint", ingredient: "mint", quantity: 0.25 },
        { text: "2 green onions, finely sliced", ingredient: "green onion", quantity: 2 },
      ],
      steps: [
        "Whisk together the lemon juice, olive oil, and salt, then stir in the bulgur and let it sit for 15-20 minutes while you prep the vegetables - it will soften and soak up the dressing.",
        "Finely chop the parsley, tomatoes, mint, and green onions.",
        "Toss the softened bulgur mixture with the parsley, tomatoes, mint, and green onions.",
        "Chill before serving.",
      ],
      tags: ["lunch", "vegan", "quick", "mediterranean", "salad"],
    },
    bg: {
      title: "Табуле",
      description:
        "Освежаваща билкова салата - магданозът съставлява по-голямата част от обема, с точно толкова булгур, колкото да го свърже, накиснат директно в лимоново-зехтиновия дресинг.",
      steps: [
        "Разбийте лимоновия сок, зехтина и солта заедно, после разбъркайте булгура и оставете да престои 15-20 минути, докато подготвяте зеленчуците - той ще омекне и ще попие дресинга.",
        "Нарежете ситно магданоза, доматите, ментата и пресния лук.",
        "Разбъркайте омекналия булгур със зеленчуковата смес.",
        "Охладете преди сервиране.",
      ],
      ingredients: [
        "1/4 чаша фин булгур (#1)",
        "1/4 чаша лимонов сок",
        "1/4 чаша зехтин",
        "1/2 ч.л. сол",
        "3 чаши ситно нарязан магданоз с плоски листа",
        "2 домата, нарязани на кубчета",
        "1/4 чаша нарязана мента",
        "2 стръка пресен лук, ситно нарязани",
      ],
    },
  },
  {
    en: {
      slug: "tom-yum-soup",
      title: "Tom Yum Soup",
      description:
        "A hot and sour Thai soup built on the tom yum trinity of lemongrass, galangal, and kaffir lime leaves, with shrimp, mushrooms, and Thai chilies.",
      imageEmoji: "🍲",
      cookTimeMinutes: 30,
      servings: 4,
      ingredients: [
        { text: "1 lb shrimp, peeled", ingredient: "shrimp", quantity: 1 },
        { text: "6 cups chicken broth", ingredient: "chicken broth", quantity: 6 },
        { text: "2 stalks lemongrass, bottom half only, smashed", ingredient: "lemongrass", quantity: 2 },
        { text: "4-5 slices galangal", ingredient: "galangal", quantity: null },
        { text: "4 kaffir lime leaves, torn", ingredient: "kaffir lime leaves", quantity: 4 },
        { text: "2-3 Thai chilies, smashed", ingredient: "thai chilies", quantity: null },
        { text: "1 cup mushrooms, sliced", ingredient: "mushroom", quantity: 1 },
        { text: "3 tbsp lime juice", ingredient: "lime juice", quantity: 3 },
        { text: "2 tbsp fish sauce", ingredient: "fish sauce", quantity: 2 },
        { text: "1 tbsp roasted chili paste (nam prik pao), optional", ingredient: "roasted chili paste", quantity: null },
        { text: "Fresh cilantro, for garnish", ingredient: "cilantro", quantity: null },
      ],
      steps: [
        "Bring the chicken broth to a simmer with the lemongrass, galangal, kaffir lime leaves, and Thai chilies for 10-15 minutes to infuse - these aromatics are traditionally left in the soup as garnish, not eaten.",
        "Add the mushrooms and simmer for 5 minutes, then stir in the roasted chili paste if using.",
        "Add the shrimp and cook until pink, about 3 minutes.",
        "Remove from heat and stir in the lime juice and fish sauce (adding them off the heat keeps their flavor bright), then garnish with cilantro before serving.",
      ],
      tags: ["lunch", "asian", "quick"],
    },
    bg: {
      title: "Том Ям супа",
      description:
        "Лютиво-кисела тайландска супа, изградена върху тройката том ям от лимонова трева, галангал и лаймови листа кафир, със скариди, гъби и тайландски люти чушки.",
      steps: [
        "Загрейте пилешкия бульон до леко къкрене с лимоновата трева, галангала, лаймовите листа кафир и лютите чушки за 10-15 минути, за да се ароматизира - тези ароматни съставки традиционно се оставят в супата като гарнитура, но не се ядат.",
        "Добавете гъбите и варете 5 минути, после разбъркайте пастата от печени люти чушки, ако използвате.",
        "Добавете скаридите и гответе до порозовяване, около 3 минути.",
        "Свалете от котлона и разбъркайте лаймовия сок и рибния сос (добавянето им извън котлона запазва вкуса им ярък), после гарнирайте с кориандър преди сервиране.",
      ],
      ingredients: [
        "450 г скариди, обелени",
        "6 чаши пилешки бульон",
        "2 стръка лимонова трева, само долната половина, натрошени",
        "4-5 резенчета галангал",
        "4 лаймови листа кафир, накъсани",
        "2-3 тайландски люти чушки, натрошени",
        "1 чаша гъби, нарязани на резени",
        "3 с.л. лаймов сок",
        "2 с.л. рибен сос",
        "1 с.л. паста от печени люти чушки (нам прик пао), по желание",
        "Пресен кориандър, за гарниране",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
