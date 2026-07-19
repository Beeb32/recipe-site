import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "caesar-salad",
      title: "Caesar Salad",
      description:
        "Romaine tossed in a real Caesar dressing emulsified from egg yolk and oil with anchovy, garlic, and Worcestershire sauce - anchovy is the ingredient most simplified versions leave out entirely, even though it's what gives Caesar dressing its signature savory depth.",
      imageEmoji: "🥗",
      cookTimeMinutes: 20,
      servings: 4,
      ingredients: [
        { text: "1 head romaine lettuce, chopped", ingredient: "romaine lettuce", quantity: 1 },
        { text: "1/2 cup grated Parmesan", ingredient: "parmesan", quantity: 0.5 },
        { text: "1 cup croutons", ingredient: "croutons", quantity: 1 },
        { text: "1 egg yolk", ingredient: "egg yolks", quantity: 1 },
        { text: "4 anchovy fillets, minced (or 2 tsp anchovy paste)", ingredient: "anchovy", quantity: 4 },
        { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
        { text: "1 tbsp lemon juice", ingredient: "lemon juice", quantity: 1 },
        { text: "1 tsp Dijon mustard", ingredient: "dijon mustard", quantity: 1 },
        { text: "1 tsp Worcestershire sauce", ingredient: "worcestershire sauce", quantity: 1 },
        { text: "1/2 cup olive oil", ingredient: "olive oil", quantity: 0.5 },
        { text: "Salt and pepper to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Whisk the egg yolk in a bowl until pale and creamy, about 2 minutes.",
        "Whisk in the anchovies, garlic, lemon juice, Dijon mustard, and Worcestershire sauce.",
        "Slowly drizzle in the olive oil while whisking constantly until the dressing emulsifies into a thick, creamy consistency - anchovy is what gives real Caesar dressing its savory depth, not just garlic and lemon.",
        "Stir in half the Parmesan and season with salt and pepper.",
        "Toss the chopped romaine with the dressing until evenly coated.",
        "Top with croutons and the remaining Parmesan before serving.",
      ],
      tags: ["lunch", "quick", "salad"],
    },
    bg: {
      title: "Салата Цезар",
      description:
        "Романа салата, разбъркана в истински сос Цезар, емулгиран от жълтък и олио с аншоа, чесън и устършърски сос - аншоата е съставката, която повечето опростени версии напълно пропускат, макар че тя придава на соса Цезар характерната му наситена дълбочина.",
      steps: [
        "Разбийте жълтъка в купа до побледняване и кремообразност, около 2 минути.",
        "Разбъркайте аншоата, чесъна, лимоновия сок, дижонската горчица и устършърския сос.",
        "Бавно наливайте зехтина, докато разбърквате непрекъснато, докато сосът се емулгира в гъста, кремообразна консистенция - аншоата е това, което придава на истинския сос Цезар наситената му дълбочина, не само чесънът и лимонът.",
        "Разбъркайте половината пармезан и подправете със сол и черен пипер.",
        "Разбъркайте нарязаната романа салата със соса до равномерно покриване.",
        "Поръсете с крутони и останалия пармезан преди сервиране.",
      ],
      ingredients: [
        "1 глава салата романа, нарязана",
        "1/2 чаша настърган пармезан",
        "1 чаша крутони",
        "1 жълтък",
        "4 филенца аншоа, ситно нарязани (или 2 ч.л. паста аншоа)",
        "2 скилидки чесън, ситно нарязани",
        "1 с.л. лимонов сок",
        "1 ч.л. дижонска горчица",
        "1 ч.л. устършърски сос",
        "1/2 чаша зехтин",
        "Сол и черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "gnocchi-sage-butter",
      title: "Gnocchi with Sage Butter",
      description:
        "Pillowy potato gnocchi finished in a nutty brown butter and crispy sage sauce, pan-seared briefly for a light crust instead of just tossed - letting the gnocchi sit undisturbed to brown on one side is what gives the dish its textural contrast.",
      imageEmoji: "🥔",
      cookTimeMinutes: 25,
      servings: 4,
      ingredients: [
        { text: "1 lb potato gnocchi", ingredient: "gnocchi", quantity: 1 },
        { text: "6 tbsp butter", ingredient: "butter", quantity: 6 },
        { text: "10 fresh sage leaves", ingredient: "sage", quantity: 10 },
        { text: "1/2 cup grated Parmesan", ingredient: "parmesan", quantity: 0.5 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Cook the gnocchi in salted boiling water until they float, then drain.",
        "Melt the butter in a skillet (cast iron works best) over medium heat and add the sage leaves, cooking until the butter turns golden brown and fragrant and the sage is crisp - watch closely, as brown butter can burn quickly.",
        "Add the gnocchi to the pan and let them sit undisturbed for a minute or two to brown lightly on one side before gently tossing - this brief sear is what gives real burro e salvia its textural contrast, not just tossing.",
        "Sprinkle with Parmesan and salt before serving.",
      ],
      tags: ["dinner", "italian", "vegetarian", "quick"],
    },
    bg: {
      title: "Ньоки с масло от градински чай",
      description:
        "Пухкави картофени ньоки, довършени в ядково кафяво масло с хрупкав градински чай, леко запечени в тигана, вместо просто разбъркани - оставянето им неподвижни, за да покафенеят от едната страна, е това, което придава на ястието текстурния му контраст.",
      steps: [
        "Сварете ньоките в подсолена вряла вода, докато изплуват, после отцедете.",
        "Разтопете маслото в тиган (чугунен работи най-добре) на среден огън и добавете листата градински чай, гответе, докато маслото стане златисто-кафяво и ароматно, а градинският чай стане хрупкав - следете внимателно, защото кафявото масло може бързо да загори.",
        "Добавете ньоките в тигана и ги оставете неподвижни минута-две, за да покафенеят леко от едната страна, преди внимателно да разбъркате - това кратко запичане е това, което придава на истинското бурро е салвия текстурния му контраст, не просто разбъркване.",
        "Поръсете с пармезан и сол преди сервиране.",
      ],
      ingredients: [
        "450 г картофени ньоки",
        "6 с.л. масло",
        "10 пресни листа градински чай",
        "1/2 чаша настърган пармезан",
        "Сол на вкус",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
