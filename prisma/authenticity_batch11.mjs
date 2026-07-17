import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "kung-pao-chicken",
      title: "Kung Pao Chicken",
      description:
        "Spicy Sichuan stir-fried chicken with peanuts, dry-fried chilies, and Sichuan peppercorns in a savory-sweet-tangy sauce - the peppercorns are what give it real mala heat, not just chili spice.",
      imageEmoji: "🥜",
      cookTimeMinutes: 35,
      servings: 4,
      ingredients: [
        { text: "2 chicken breasts, diced", ingredient: "chicken breast", quantity: 2 },
        { text: "1 tbsp soy sauce (for velveting)", ingredient: "soy sauce", quantity: 1 },
        { text: "1 tsp Shaoxing wine (for velveting)", ingredient: "shaoxing wine", quantity: 1 },
        { text: "1 tbsp cornstarch (for velveting)", ingredient: "cornstarch", quantity: 1 },
        { text: "1/2 cup peanuts", ingredient: "peanuts", quantity: 0.5 },
        { text: "1 red bell pepper, diced", ingredient: "red pepper", quantity: 1 },
        { text: "6 dried red chilies", ingredient: "dried chilies", quantity: 6 },
        { text: "1 tsp Sichuan peppercorns", ingredient: "sichuan peppercorns", quantity: 1 },
        { text: "3 cloves garlic, minced", ingredient: "garlic", quantity: 3 },
        { text: "1 tbsp grated ginger", ingredient: "ginger", quantity: 1 },
        { text: "3 green onions, sliced", ingredient: "green onion", quantity: 3 },
        { text: "2 tbsp soy sauce (for the sauce)", ingredient: "soy sauce", quantity: 2 },
        { text: "1 tbsp Chinese black vinegar (or rice vinegar)", ingredient: "black vinegar", quantity: 1 },
        { text: "1 tbsp sugar", ingredient: "sugar", quantity: 1 },
        { text: "1 tsp cornstarch (for the sauce, mixed with water)", ingredient: "cornstarch", quantity: 1 },
      ],
      steps: [
        "Toss the diced chicken with soy sauce, Shaoxing wine, and cornstarch; let it velvet for 15-20 minutes - this coating protects the chicken from the high heat so it stays tender.",
        "Heat oil in a wok over high heat and stir-fry the chicken until just cooked through; set aside.",
        "Add the dried chilies and Sichuan peppercorns to the wok and stir-fry until the chilies darken and turn fragrant - this builds the \"mala\" numbing-spicy base the dish is named for.",
        "Add the garlic, ginger, and red pepper and stir-fry for 1-2 minutes, then return the chicken to the wok.",
        "Whisk together the soy sauce, black vinegar, sugar, and cornstarch slurry, pour into the wok, and toss until the sauce thickens and coats everything; stir in the peanuts and green onions before serving.",
      ],
      tags: ["dinner", "asian"],
    },
    bg: {
      title: "Кунг Пао пиле",
      description:
        "Пикантно сичуанско пържено пиле с фъстъци, сухо запържени люти чушки и сичуански пипер в кисело-сладко-солен сос - пиперът е това, което дава истинската мала лютивина, не просто чушките.",
      steps: [
        "Разбъркайте нарязаното пиле със соевия сос, шаосинското вино и царевичното нишесте; оставете да се \"кадифи\" 15-20 минути - този слой предпазва пилето от силния огън, за да остане крехко.",
        "Загрейте олио в уок на силен огън и запържете пилето само докато се сготви; отделете настрани.",
        "Добавете сушените люти чушки и сичуанския пипер в уока и запържете, докато чушките потъмнеят и се ароматизират - това изгражда основата \"мала\", на която е кръстено ястието.",
        "Добавете чесъна, джинджифила и червената чушка и запържете 1-2 минути, после върнете пилето в уока.",
        "Разбийте соевия сос, черния оцет, захарта и разтвора от царевично нишесте, изсипете в уока и разбърквайте, докато сосът се сгъсти и покрие всичко; разбъркайте фъстъците и пресния лук преди сервиране.",
      ],
      ingredients: [
        "2 пилешки гърди, нарязани на кубчета",
        "1 с.л. соев сос (за кадифяването)",
        "1 ч.л. шаосинско вино (за кадифяването)",
        "1 с.л. царевично нишесте (за кадифяването)",
        "1/2 чаша фъстъци",
        "1 червена чушка, нарязана на кубчета",
        "6 сушени люти чушки",
        "1 ч.л. сичуански пипер",
        "3 скилидки чесън, ситно нарязани",
        "1 с.л. настърган джинджифил",
        "3 стръка пресен лук, нарязани",
        "2 с.л. соев сос (за соса)",
        "1 с.л. китайски черен оцет (или оризов оцет)",
        "1 с.л. захар",
        "1 ч.л. царевично нишесте (за соса, разтворено във вода)",
      ],
    },
  },
  {
    en: {
      slug: "mushroom-risotto",
      title: "Mushroom Risotto",
      description:
        "Creamy Arborio rice slowly built with ladled broth and toasted first for structure, finished off the heat with a vigorous mantecatura of cold butter and Parmesan for its glossy shine.",
      imageEmoji: "🍄",
      cookTimeMinutes: 45,
      servings: 4,
      ingredients: [
        { text: "1 1/2 cups Arborio rice", ingredient: "arborio rice", quantity: 1.5 },
        { text: "8 oz mushrooms, sliced", ingredient: "mushroom", quantity: 8 },
        { text: "1 onion, diced (or shallot)", ingredient: "onion", quantity: 1 },
        { text: "5 cups vegetable broth, warmed", ingredient: "vegetable broth", quantity: 5 },
        { text: "1/2 cup white wine", ingredient: "white wine", quantity: 0.5 },
        { text: "1/2 cup grated Parmesan", ingredient: "parmesan", quantity: 0.5 },
        { text: "4 tbsp butter, divided", ingredient: "butter", quantity: 4 },
      ],
      steps: [
        "Sauté the mushrooms in 1 tbsp butter until golden, then set aside.",
        "In the same pot, melt 1 tbsp butter and sauté the onion until soft, then add the rice and toast, stirring, for 3-4 minutes until the edges turn translucent - this coats each grain and keeps the risotto from turning gluey.",
        "Pour in the white wine and let it absorb, then add the warm broth one ladle at a time, stirring every 30-45 seconds and letting each addition mostly absorb before the next, until the rice is creamy and just tender, about 20 minutes.",
        "Remove from the heat, stir in the mushrooms, then vigorously beat in the remaining 2 tbsp cold butter and the Parmesan (the mantecatura) until glossy and emulsified before serving immediately.",
      ],
      tags: ["dinner", "italian", "vegetarian"],
    },
    bg: {
      title: "Ризото с гъби",
      description:
        "Кремообразен ориз Арборио, изграден бавно с добавян на порции бульон и препечен първо за структура, довършен извън котлона с енергична мантекатура от студено масло и пармезан за блясъка му.",
      steps: [
        "Запържете гъбите в 1 с.л. масло до златисто, после отделете настрани.",
        "В същата тенджера разтопете 1 с.л. масло и запържете лука до омекване, после добавете ориза и препечете, разбърквайки, 3-4 минути, докато краищата на зърната станат прозрачни - това покрива всяко зърно и пази ризотото от лепкавост.",
        "Налейте бялото вино и оставете да се абсорбира, после добавяйте топлия бульон по един черпак наведнъж, разбърквайки на всеки 30-45 секунди и оставяйки всяка порция да се абсорбира почти напълно преди следващата, докато оризът стане кремообразен и точно омекнал, около 20 минути.",
        "Свалете от котлона, разбъркайте гъбите, после енергично вмесете останалите 2 с.л. студено масло и пармезана (мантекатурата), докато стане лъскаво и емулгирано, преди да сервирате веднага.",
      ],
      ingredients: [
        "1 1/2 чаши ориз Арборио",
        "225 г гъби, нарязани на резени",
        "1 лук (или шалот), нарязан на кубчета",
        "5 чаши зеленчуков бульон, затоплен",
        "1/2 чаша бяло вино",
        "1/2 чаша настърган пармезан",
        "4 с.л. масло, разделено",
      ],
    },
  },
  {
    en: {
      slug: "seafood-paella",
      title: "Seafood Paella",
      description:
        "A vibrant Spanish rice dish built on a deep sofrito of tomato, pepper, and smoked paprika, loaded with shrimp and mussels, and finished with a crisp socarrat crust on the bottom.",
      imageEmoji: "🥘",
      cookTimeMinutes: 55,
      servings: 6,
      ingredients: [
        { text: "2 cups Bomba or other short-grain Spanish rice", ingredient: "rice", quantity: 2 },
        { text: "1/4 cup olive oil", ingredient: "olive oil", quantity: 0.25 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "1 red bell pepper, diced", ingredient: "red pepper", quantity: 1 },
        { text: "3 cloves garlic, minced", ingredient: "garlic", quantity: 3 },
        { text: "2 tomatoes, diced (or 1 cup canned diced tomato)", ingredient: "tomato", quantity: 2 },
        { text: "1 tsp smoked paprika", ingredient: "smoked paprika", quantity: 1 },
        { text: "1/2 tsp saffron threads", ingredient: "saffron", quantity: 0.5 },
        { text: "4 cups seafood or chicken broth, warmed", ingredient: "seafood broth", quantity: 4 },
        { text: "1 lb shrimp, peeled", ingredient: "shrimp", quantity: 1 },
        { text: "1 lb mussels, cleaned", ingredient: "mussels", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Steep the saffron in a splash of the warm broth and set aside.",
        "Heat the olive oil in a paella pan and sauté the onion and red bell pepper until softened, then add the garlic, tomatoes, and smoked paprika, cooking down until deepened in color and thickened - this sofrito is the base flavor of the whole dish.",
        "Add the rice and stir constantly for 2 minutes to coat every grain in the sofrito, then pour in the broth and saffron; do not stir again from this point on.",
        "Simmer undisturbed for 12-15 minutes, nestling the shrimp and mussels into the rice for the last 8-10 minutes until the seafood is cooked through and most of the liquid is absorbed.",
        "Raise the heat to medium-high for the final 1-2 minutes to crisp the bottom into a socarrat - listen for a light crackling and toasted aroma - then let rest a few minutes before serving.",
      ],
      tags: ["dinner", "mediterranean"],
    },
    bg: {
      title: "Морска паеля",
      description:
        "Ярко испанско ястие от ориз, изградено върху дълбока запръжка софрито от домат, чушка и опушен червен пипер, богато на скариди и миди, довършено с хрупкава коричка сокарат на дъното.",
      steps: [
        "Накиснете шафрана в малко от топлия бульон и оставете настрана.",
        "Загрейте зехтина в тиган за паеля и запържете лука и червената чушка до омекване, после добавете чесъна, доматите и опушения червен пипер, готвейки до потъмняване и сгъстяване - тази запръжка софрито е основният вкус на цялото ястие.",
        "Добавете ориза и разбърквайте постоянно 2 минути, за да покриете всяко зърно със запръжката, после налейте бульона и шафрана; не разбърквайте повече от този момент нататък.",
        "Варете без разбъркване 12-15 минути, наглаждайки скаридите и мидите в ориза през последните 8-10 минути, докато морските дарове се сготвят и по-голямата част от течността се абсорбира.",
        "Повишете котлона на среден до силен огън за последните 1-2 минути, за да се получи хрупкав сокарат на дъното - заслушайте се за леко пращене и препечен аромат - после оставете да почине няколко минути преди сервиране.",
      ],
      ingredients: [
        "2 чаши ориз Бомба или друг ориз с къси зърна",
        "1/4 чаша зехтин",
        "1 лук, нарязан на кубчета",
        "1 червена чушка, нарязана на кубчета",
        "3 скилидки чесън, ситно нарязани",
        "2 домата, нарязани на кубчета (или 1 чаша консервирани нарязани домати)",
        "1 ч.л. опушен червен пипер",
        "1/2 ч.л. нишки шафран",
        "4 чаши бульон от морски дарове или пилешки бульон, затоплен",
        "450 г скариди, обелени",
        "450 г миди, почистени",
        "Сол на вкус",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
