import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "breakfast-burrito",
      title: "Breakfast Burrito",
      description:
        "Scrambled eggs, cheese, and crisped potatoes wrapped in a warm flour tortilla and griddled seam-side down until sealed - griddling the rolled burrito is what keeps it from unraveling and gives the outside a light crisp, a step most versions skip.",
      imageEmoji: "🌯",
      cookTimeMinutes: 20,
      servings: 4,
      ingredients: [
        { text: "6 eggs", ingredient: "eggs", quantity: 6 },
        { text: "1 cup diced cooked potatoes", ingredient: "potato", quantity: 1 },
        { text: "1 cup shredded cheddar cheese", ingredient: "cheddar cheese", quantity: 1 },
        { text: "4 large flour tortillas", ingredient: "flour tortillas", quantity: 4 },
        { text: "2 tbsp butter", ingredient: "butter", quantity: 2 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Crisp the diced potatoes in a hot pan with a little of the butter until golden, then set aside.",
        "Scramble the eggs in the remaining butter over low heat, stirring gently, until just set and still creamy, seasoning with salt and pepper - low heat is what keeps scrambled eggs soft instead of rubbery.",
        "Warm the tortillas slightly so they fold easily.",
        "Fill each tortilla with eggs, potatoes, and cheese, then roll tightly.",
        "Place seam-side down in a hot dry pan for a minute per side to seal and lightly crisp the tortilla.",
      ],
      tags: ["breakfast", "quick", "mexican"],
    },
    bg: {
      title: "Буррито за закуска",
      description:
        "Бъркани яйца, сирене и хрупкави картофи, увити в топла пшенична тортила и препечени със завивката надолу до запечатване - препичането на завитото буррито е това, което го пази да не се разгъне и придава лека хрупкавост отвън, стъпка, която повечето версии пропускат.",
      steps: [
        "Изпечете нарязаните на кубчета картофи в горещ тиган с малко от маслото до златисто, после оставете настрана.",
        "Разбъркайте яйцата в останалото масло на слаб огън, като бъркате внимателно, до леко стягане и кремообразна консистенция, подправяйки със сол и черен пипер - слабият огън е това, което пази бърканите яйца меки, вместо гумени.",
        "Затоплете леко тортилите, за да се сгъват лесно.",
        "Напълнете всяка тортила с яйца, картофи и сирене, после завийте стегнато.",
        "Поставете със завивката надолу в горещ сух тиган за минута от всяка страна, за да се запечата и леко препече тортилата.",
      ],
      ingredients: [
        "6 яйца",
        "1 чаша сготвени картофи, нарязани на кубчета",
        "1 чаша настъргано чедър сирене",
        "4 големи пшенични тортили",
        "2 с.л. масло",
        "Сол на вкус",
        "Черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "breakfast-tacos",
      title: "Breakfast Tacos",
      description:
        "Warm tortillas charred lightly over a flame or dry skillet and filled with eggs scrambled in the bacon's own rendered fat, plus crispy bacon, cheese, and salsa - scrambling the eggs in bacon fat instead of a clean pan is what ties the two together instead of tasting like two separate toppings.",
      imageEmoji: "🌮",
      cookTimeMinutes: 20,
      servings: 4,
      ingredients: [
        { text: "6 eggs", ingredient: "eggs", quantity: 6 },
        { text: "6 slices bacon, chopped", ingredient: "bacon", quantity: 6 },
        { text: "8 small flour tortillas", ingredient: "flour tortillas", quantity: 8 },
        { text: "1 cup shredded cheddar cheese", ingredient: "cheddar cheese", quantity: 1 },
        { text: "1/2 cup salsa", ingredient: "salsa", quantity: 0.5 },
      ],
      steps: [
        "Cook the chopped bacon in a skillet until crisp, then remove with a slotted spoon, leaving the rendered fat in the pan.",
        "Scramble the eggs in the reserved bacon fat over low heat until just set and still creamy.",
        "Char the tortillas lightly over an open flame or in a dry skillet until lightly spotted.",
        "Fill each tortilla with eggs, bacon, and cheese.",
        "Top with salsa before serving.",
      ],
      tags: ["breakfast", "mexican", "quick"],
    },
    bg: {
      title: "Тако за закуска",
      description:
        "Топли тортили, леко овъглени на открит пламък или в сух тиган, пълни с яйца, бъркани в собствената мазнина на бекона, плюс хрупкав бекон, сирене и салса - бъркането на яйцата в мазнината от бекона, вместо в чист тиган, е това, което ги обединява, вместо да имат вкус на две отделни добавки.",
      steps: [
        "Изпечете нарязания бекон в тиган до хрупкавост, после извадете с решетеста лъжица, оставяйки разтопената мазнина в тигана.",
        "Разбъркайте яйцата в запазената бекон мазнина на слаб огън до леко стягане и кремообразна консистенция.",
        "Овъглете леко тортилите на открит пламък или в сух тиган, докато се появят леки петна.",
        "Напълнете всяка тортила с яйца, бекон и сирене.",
        "Отгоре сложете салса преди сервиране.",
      ],
      ingredients: [
        "6 яйца",
        "6 резена бекон, нарязани",
        "8 малки пшенични тортили",
        "1 чаша настъргано чедър сирене",
        "1/2 чаша салса",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
