import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "shrimp-scampi-linguine",
      title: "Shrimp Scampi Linguine",
      description:
        "Linguine tossed with shrimp in a garlic-white wine butter sauce built with shallot, red pepper flakes, and starchy pasta water to emulsify - the pasta water and chili flakes are what real scampi is built on, not just butter and wine.",
      imageEmoji: "🍝",
      cookTimeMinutes: 25,
      servings: 4,
      ingredients: [
        { text: "1 lb linguine", ingredient: "linguine", quantity: 1 },
        { text: "1 lb shrimp, peeled", ingredient: "shrimp", quantity: 1 },
        { text: "Salt and pepper to taste", ingredient: "salt", quantity: null },
        { text: "2 tbsp olive oil", ingredient: "olive oil", quantity: 2 },
        { text: "4 tbsp butter (divided)", ingredient: "butter", quantity: 4 },
        { text: "1 shallot, minced", ingredient: "shallot", quantity: 1 },
        { text: "4 cloves garlic, minced", ingredient: "garlic", quantity: 4 },
        { text: "1/2 tsp red pepper flakes", ingredient: "red pepper flakes", quantity: 0.5 },
        { text: "1/2 cup white wine", ingredient: "white wine", quantity: 0.5 },
        { text: "2 tbsp lemon juice", ingredient: "lemon juice", quantity: 2 },
        { text: "1/4 cup chopped parsley", ingredient: "parsley", quantity: 0.25 },
      ],
      steps: [
        "Cook the linguine in salted boiling water until al dente, reserving 3/4 cup of the starchy pasta water before draining.",
        "Season the shrimp with salt and pepper.",
        "Heat the olive oil and half the butter in a large skillet, then sauté the shallot, garlic, and red pepper flakes until the shallot is translucent.",
        "Add the shrimp and cook until just pink, about 2-3 minutes - don't overcook, or the shrimp turn rubbery.",
        "Pour in the white wine and lemon juice, then swirl in the remaining butter and a splash of the reserved pasta water to emulsify the sauce.",
        "Toss the drained pasta and parsley into the sauce, adding more pasta water as needed until glossy, before serving.",
      ],
      tags: ["dinner", "italian", "quick"],
    },
    bg: {
      title: "Лингуини със скариди скампи",
      description:
        "Лингуини, разбъркани със скариди в чеснов сос от бяло вино и масло, изграден с шалот, люспи лют пипер и скорбялена вода от пастата за емулгиране - водата от пастата и лютите люспи са това, върху което е изградено истинското скампи, не само масло и вино.",
      steps: [
        "Сварете лингуините в подсолена вряща вода до състояние ал денте, запазвайки 3/4 чаша от скорбялената вода преди отцеждане.",
        "Подправете скаридите със сол и черен пипер.",
        "Загрейте зехтина и половината масло в голям тиган, после запържете шалота, чесъна и люспите лют пипер, докато шалотът стане прозрачен.",
        "Добавете скаридите и гответе до леко порозовяване, около 2-3 минути - не преварявайте, иначе скаридите ще станат гумени.",
        "Налейте бялото вино и лимоновия сок, после разбъркайте останалото масло и малко от запазената вода от пастата, за да емулгирате соса.",
        "Разбъркайте отцедената паста и магданоза в соса, доливайки още вода от пастата при нужда, докато стане лъскав, преди сервиране.",
      ],
      ingredients: [
        "450 г лингуини",
        "450 г скариди, обелени",
        "Сол и черен пипер на вкус",
        "2 с.л. зехтин",
        "4 с.л. масло (разделено)",
        "1 шалот, ситно нарязан",
        "4 скилидки чесън, ситно нарязани",
        "1/2 ч.л. люспи лют пипер",
        "1/2 чаша бяло вино",
        "2 с.л. лимонов сок",
        "1/4 чаша нарязан магданоз",
      ],
    },
  },
  {
    en: {
      slug: "crab-cakes",
      title: "Crab Cakes",
      description:
        "Lump crab meat bound with a minimal Old Bay-mustard-Worcestershire mixture and chilled before frying - Old Bay and minimal filler are what define real Maryland crab cakes, and chilling is what keeps them from falling apart in the pan.",
      imageEmoji: "🦀",
      cookTimeMinutes: 55,
      servings: 4,
      ingredients: [
        { text: "1 lb lump crab meat", ingredient: "crab meat", quantity: 1 },
        { text: "1/2 cup panko breadcrumbs", ingredient: "breadcrumbs", quantity: 0.5 },
        { text: "1/4 cup mayonnaise", ingredient: "mayonnaise", quantity: 0.25 },
        { text: "1 egg", ingredient: "eggs", quantity: 1 },
        { text: "1 tsp Dijon mustard", ingredient: "dijon mustard", quantity: 1 },
        { text: "1 tsp Worcestershire sauce", ingredient: "worcestershire sauce", quantity: 1 },
        { text: "2 tsp Old Bay seasoning", ingredient: "old bay seasoning", quantity: 2 },
        { text: "1 tbsp lemon juice", ingredient: "lemon juice", quantity: 1 },
        { text: "3 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 3 },
      ],
      steps: [
        "Whisk together the mayonnaise, egg, Dijon mustard, Worcestershire sauce, Old Bay, and lemon juice.",
        "Gently fold in the crab meat and breadcrumbs, using your fingers and being careful not to break up the lumps.",
        "Form into patties and chill in the fridge for at least 30 minutes - this is what keeps the crab cakes from falling apart in the pan.",
        "Fry in oil over medium heat for 3-4 minutes per side until golden.",
        "Serve warm.",
      ],
      tags: ["dinner", "quick"],
    },
    bg: {
      title: "Кюфтенца от раци",
      description:
        "Едро месо от раци, свързано с минимална смес от Олд Бей, горчица и устършърски сос, охладена преди пържене - Олд Бей и минималният пълнеж определят истинските мерилендски кюфтенца от раци, а охлаждането е това, което ги пази да не се разпаднат в тигана.",
      steps: [
        "Разбийте майонезата, яйцето, дижонската горчица, устършърския сос, Олд Бей и лимоновия сок.",
        "Внимателно разбъркайте месото от раци и галетата с пръсти, стараейки се да не натрошите бучките.",
        "Оформете на кюфтенца и охладете в хладилника поне 30 минути - това е това, което пази кюфтенцата да не се разпаднат в тигана.",
        "Изпържете в олио на среден огън по 3-4 минути от всяка страна до златисто.",
        "Сервирайте топло.",
      ],
      ingredients: [
        "450 г едро месо от раци",
        "1/2 чаша галета панко",
        "1/4 чаша майонеза",
        "1 яйце",
        "1 ч.л. дижонска горчица",
        "1 ч.л. устършърски сос",
        "2 ч.л. подправка Олд Бей",
        "1 с.л. лимонов сок",
        "3 с.л. олио",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
