import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "spaghetti-aglio-e-olio",
      title: "Spaghetti Aglio e Olio",
      description:
        "Spaghetti tossed in oil where thin-sliced garlic is infused from a cold start over low heat until pale gold - never dark brown - then emulsified with starchy pasta water; low heat is non-negotiable, since garlic turns bitter in seconds if it gets too hot.",
      imageEmoji: "🍝",
      cookTimeMinutes: 20,
      servings: 4,
      ingredients: [
        { text: "1 lb spaghetti", ingredient: "spaghetti", quantity: 1 },
        { text: "1/2 cup olive oil", ingredient: "olive oil", quantity: 0.5 },
        { text: "6 cloves garlic, thinly sliced", ingredient: "garlic", quantity: 6 },
        { text: "1 tsp red chili flakes", ingredient: "chili flakes", quantity: 1 },
        { text: "1/4 cup chopped parsley", ingredient: "parsley", quantity: 0.25 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Cook the spaghetti in salted boiling water until al dente; reserve 1/2 cup pasta water.",
        "Combine the olive oil and sliced garlic in a cold pan, then place over low heat and let the garlic infuse slowly until pale gold and fragrant, 5-8 minutes - low heat is non-negotiable, since garlic goes from golden to bitter in seconds if the pan is too hot.",
        "Stir in the chili flakes for the last 30 seconds.",
        "Add the pasta and a splash of the reserved pasta water to the pan, tossing continuously off the heat until the sauce turns glossy and emulsified (this technique is called mantecare) - don't skip the pasta water, or the dish turns out oily instead of creamy.",
        "Stir in the parsley and season with salt before serving.",
      ],
      tags: ["dinner", "italian", "quick", "vegan", "vegetarian"],
    },
    bg: {
      title: "Спагети алио е олио",
      description:
        "Спагети, разбъркани в олио, в което тънко нарязан чесън се ароматизира от студен старт на слаб огън до бледо златисто - никога тъмно кафяво - после емулгирани със скорбялена вода от пастата; слабият огън е задължителен, защото чесънът се превръща в горчив за секунди, ако прегрее.",
      steps: [
        "Сварете спагетите в подсолена вряща вода до състояние ал денте; запазете 1/2 чаша от водата за пастата.",
        "Смесете зехтина и нарязания чесън в студен тиган, после сложете на слаб огън и оставете чесъна да се ароматизира бавно до бледо златисто, 5-8 минути - слабият огън е задължителен, защото чесънът преминава от златисто към горчиво за секунди, ако тиганът е прекалено горещ.",
        "Разбъркайте люспите лют пипер през последните 30 секунди.",
        "Добавете пастата и малко от запазената вода в тигана, разбърквайки непрекъснато извън котлона, докато сосът стане лъскав и емулгиран (тази техника се нарича мантекаре) - не пропускайте водата от пастата, иначе ястието ще стане мазно вместо кремообразно.",
        "Разбъркайте магданоза и подправете със сол преди сервиране.",
      ],
      ingredients: [
        "450 г спагети",
        "1/2 чаша зехтин",
        "6 скилидки чесън, нарязани на тънко",
        "1 ч.л. люти чушки на люспи",
        "1/4 чаша нарязан магданоз",
        "Сол на вкус",
      ],
    },
  },
  {
    en: {
      slug: "eggs-benedict",
      title: "Eggs Benedict",
      description:
        "Poached eggs and Canadian bacon on toasted English muffins, draped in hollandaise made with hot (not just melted) butter and seasoned with salt and cayenne - the hot butter is what allows the sauce to emulsify properly, and cayenne is the traditional finishing touch most simplified versions skip.",
      imageEmoji: "🍳",
      cookTimeMinutes: 30,
      servings: 2,
      ingredients: [
        { text: "2 English muffins, split", ingredient: "english muffin", quantity: 2 },
        { text: "4 slices Canadian bacon", ingredient: "canadian bacon", quantity: 4 },
        { text: "4 eggs", ingredient: "eggs", quantity: 4 },
        { text: "3 egg yolks (for hollandaise)", ingredient: "egg yolks", quantity: 3 },
        { text: "1/2 cup butter, melted until hot", ingredient: "butter", quantity: 0.5 },
        { text: "1 tbsp lemon juice", ingredient: "lemon juice", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pinch of cayenne pepper", ingredient: "cayenne pepper", quantity: null },
      ],
      steps: [
        "Toast the English muffin halves and warm the Canadian bacon in a skillet.",
        "Whisk the egg yolks and lemon juice over a double boiler until thickened and doubled in volume, then slowly whisk in the hot melted butter to make hollandaise - the butter needs to be hot, not just melted, or the sauce won't emulsify properly.",
        "Season the hollandaise with salt and a pinch of cayenne pepper.",
        "Poach the eggs in barely simmering water with a splash of vinegar for about 3 minutes.",
        "Assemble each muffin half with bacon, a poached egg, and a generous spoonful of hollandaise.",
      ],
      tags: ["breakfast"],
    },
    bg: {
      title: "Яйца Бенедикт",
      description:
        "Яйца пош и канадски бекон върху препечени английски кифлички, покрити с холандез, направен с горещо (не просто разтопено) масло и подправен със сол и лютив червен пипер - горещото масло е това, което позволява на соса да се емулгира правилно, а лютивият червен пипер е традиционният финален щрих, който повечето опростени версии пропускат.",
      steps: [
        "Препечете половинките английски кифлички и затоплете канадския бекон в тиган.",
        "Разбийте жълтъците и лимоновия сок на водна баня до сгъстяване и удвояване на обема, после бавно добавяйте горещото разтопено масло, разбърквайки, за да направите холандез - маслото трябва да е горещо, не просто разтопено, иначе сосът няма да се емулгира правилно.",
        "Подправете холандеза със сол и щипка лютив червен пипер.",
        "Направете яйца пош в едва къкреща вода с малко оцет за около 3 минути.",
        "Наредете върху всяка половинка кифличка бекон, яйце пош и обилна лъжица холандез.",
      ],
      ingredients: [
        "2 английски кифлички, разрязани",
        "4 резена канадски бекон",
        "4 яйца",
        "3 жълтъка (за холандеза)",
        "1/2 чаша масло, разтопено до горещо",
        "1 с.л. лимонов сок",
        "Сол на вкус",
        "Щипка лютив червен пипер",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
