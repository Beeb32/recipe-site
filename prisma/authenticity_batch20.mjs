import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "classic-lasagna",
      title: "Classic Lasagna",
      description:
        "Layers of pasta, a slow-simmered meat sauce, and nutmeg-scented ricotta baked until bubbling - a classic crowd-pleaser that rests before slicing so the layers hold.",
      imageEmoji: "🍝",
      cookTimeMinutes: 105,
      servings: 8,
      ingredients: [
        { text: "1 lb ground beef", ingredient: "ground beef", quantity: 1 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "3 cloves garlic, minced", ingredient: "garlic", quantity: 3 },
        { text: "2 cans crushed tomatoes", ingredient: "tomato", quantity: 2 },
        { text: "2 tbsp tomato paste", ingredient: "tomato paste", quantity: 2 },
        { text: "12 lasagna noodles", ingredient: "lasagna noodles", quantity: 12 },
        { text: "2 cups ricotta cheese", ingredient: "ricotta cheese", quantity: 2 },
        { text: "1 egg", ingredient: "eggs", quantity: 1 },
        { text: "1/4 tsp nutmeg", ingredient: "nutmeg", quantity: 0.25 },
        { text: "3 cups shredded mozzarella", ingredient: "mozzarella", quantity: 3 },
        { text: "1/2 cup grated Parmesan", ingredient: "parmesan", quantity: 0.5 },
        { text: "Salt and pepper to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Brown the ground beef with onion and garlic, then stir in the crushed tomatoes and tomato paste and simmer for 30-45 minutes until thickened and rich.",
        "Cook the lasagna noodles according to package instructions.",
        "Mix the ricotta with the egg, nutmeg, and half the Parmesan.",
        "Layer noodles, meat sauce, ricotta mixture, and mozzarella in a baking dish, repeating twice more.",
        "Top with remaining mozzarella and Parmesan, then bake at 375°F for 35-40 minutes until bubbly; let rest for 15 minutes before slicing so the layers hold together.",
      ],
      tags: ["dinner", "italian"],
    },
    bg: {
      title: "Класическа лазаня",
      description:
        "Пластове паста, бавно къкрещ месен сос и кремообразна рикота с индийско орехче, запечени до къкрене - класика, харесвана от всички, която почива преди рязане, за да задържат пластовете формата си.",
      steps: [
        "Запържете каймата с лука и чесъна, после разбъркайте пасираните домати и доматеното пюре и оставете да къкри 30-45 минути до сгъстяване и наситен вкус.",
        "Сварете листата за лазаня според инструкциите на опаковката.",
        "Смесете рикотата с яйцето, индийското орехче и половината от пармезана.",
        "Наредете на пластове листата, месния сос, рикотената смес и моцарелата в тава, повтаряйки още два пъти.",
        "Отгоре сложете останалата моцарела и пармезан, после печете на 190°C 35-40 минути до къкрене; оставете да почине 15 минути преди рязане, за да задържат пластовете формата си.",
      ],
      ingredients: [
        "450 г кайма от телешко месо",
        "1 лук, нарязан на кубчета",
        "3 скилидки чесън, ситно нарязани",
        "2 консерви пасирани домати",
        "2 с.л. доматено пюре",
        "12 листа лазаня",
        "2 чаши рикота",
        "1 яйце",
        "1/4 ч.л. индийско орехче",
        "3 чаши настъргана моцарела",
        "1/2 чаша настърган пармезан",
        "Сол и черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "pesto-pasta",
      title: "Pesto Pasta",
      description:
        "Fresh basil pesto tossed with pasta and a splash of starchy pasta water - Genovese pesto uses a mix of Parmesan and Pecorino for its sharper edge.",
      imageEmoji: "🍝",
      cookTimeMinutes: 20,
      servings: 4,
      ingredients: [
        { text: "1 lb pasta", ingredient: "pasta", quantity: 1 },
        { text: "2 cups fresh basil leaves", ingredient: "basil", quantity: 2 },
        { text: "1/3 cup grated Parmesan", ingredient: "parmesan", quantity: 0.33 },
        { text: "1/4 cup grated Pecorino Romano", ingredient: "pecorino", quantity: 0.25 },
        { text: "1/2 cup pine nuts", ingredient: "pine nuts", quantity: 0.5 },
        { text: "2 cloves garlic", ingredient: "garlic", quantity: 2 },
        { text: "1/2 cup olive oil", ingredient: "olive oil", quantity: 0.5 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Cook the pasta in salted boiling water until al dente; reserve 1/2 cup pasta water.",
        "Blend the basil, Parmesan, Pecorino, pine nuts, and garlic in a food processor.",
        "With the processor running, slowly stream in the olive oil until smooth.",
        "Toss the drained pasta with the pesto, loosening with a splash of pasta water until it coats evenly.",
        "Season with salt and serve.",
      ],
      tags: ["dinner", "italian", "quick", "vegetarian"],
    },
    bg: {
      title: "Паста Песто",
      description:
        "Прясно песто от босилек, разбъркано с паста и малко скорбялена вода от пастата - истинското генуезко песто използва смес от пармезан и пекорино за по-остър вкус.",
      steps: [
        "Сварете пастата в подсолена вряла вода до готовност; запазете 1/2 чаша от водата.",
        "Пасирайте босилека, пармезана, пекорино, боровите ядки и чесъна в кухненски робот.",
        "Докато роботът работи, бавно наливайте зехтина до гладка смес.",
        "Разбъркайте отцедената паста с песто, разреждайки с малко вода от пастата, докато покрие равномерно.",
        "Подправете със сол и сервирайте.",
      ],
      ingredients: [
        "450 г паста",
        "2 чаши пресни листа босилек",
        "1/3 чаша настърган пармезан",
        "1/4 чаша настърган пекорино романо",
        "1/2 чаша борови ядки",
        "2 скилидки чесън",
        "1/2 чаша зехтин",
        "Сол на вкус",
      ],
    },
  },
  {
    en: {
      slug: "tiramisu",
      title: "Tiramisu",
      description:
        "Espresso-soaked ladyfingers layered with a cooked zabaglione-mascarpone filling lightened with whipped egg whites, not cream - the traditional Italian method, and safer than using raw yolks.",
      imageEmoji: "☕",
      cookTimeMinutes: 45,
      servings: 8,
      ingredients: [
        { text: "24 ladyfinger cookies", ingredient: "ladyfingers", quantity: 24 },
        { text: "1 1/2 cups strong brewed coffee, cooled", ingredient: "coffee", quantity: 1.5 },
        { text: "2 tbsp Marsala wine (optional)", ingredient: "marsala wine", quantity: 2 },
        { text: "4 egg yolks", ingredient: "egg yolks", quantity: 4 },
        { text: "1/2 cup sugar", ingredient: "sugar", quantity: 0.5 },
        { text: "4 egg whites", ingredient: "egg whites", quantity: 4 },
        { text: "Pinch of salt", ingredient: "salt", quantity: null },
        { text: "16 oz mascarpone cheese", ingredient: "mascarpone", quantity: 16 },
        { text: "2 tbsp cocoa powder for dusting", ingredient: "cocoa powder", quantity: 2 },
      ],
      steps: [
        "Whisk the egg yolks, sugar, and Marsala together in a heatproof bowl, then set over a pot of barely simmering water and whisk continuously for about 10 minutes until pale, thick, and doubled in volume (a zabaglione) - this cooks the yolks safely.",
        "Remove from the heat and whisk in the mascarpone until smooth, then let cool slightly.",
        "Beat the egg whites with a pinch of salt to stiff peaks, then gently fold them into the mascarpone mixture in two additions to keep it light.",
        "Dip each ladyfinger briefly in the cooled coffee (mixed with a splash of Marsala if using) and layer half of them in a dish, then spread half the mascarpone mixture over the top; repeat with a second layer.",
        "Chill for at least 6 hours, ideally overnight, then dust with cocoa powder before serving.",
      ],
      tags: ["dessert", "italian"],
    },
    bg: {
      title: "Тирамису",
      description:
        "Бишкоти, напоени с еспресо, наредени на пластове с изварена забальоне-маскарпоне плънка, олекотена с разбити белтъци, а не сметана - традиционният италиански метод, и по-безопасен от суровите жълтъци.",
      steps: [
        "Разбийте жълтъците, захарта и марсалата заедно в термоустойчива купа, после поставете над тенджера с леко къкреща вода и разбивайте непрекъснато около 10 минути, докато сместа побледнее, сгъсти се и удвои обема си (забальоне) - това сготвя жълтъците безопасно.",
        "Свалете от котлона и разбъркайте маскарпонето до гладкост, после оставете да изстине леко.",
        "Разбийте белтъците с щипка сол до твърди връхчета, после внимателно ги вмесете в маскарпонената смес на две части, за да остане лека.",
        "Потопете за кратко всяко бишкотче в изстиналото кафе (смесено с малко марсала, ако използвате) и наредете половината в съд, после разпределете половината от маскарпонената смес отгоре; повторете с втори пласт.",
        "Охладете поне 6 часа, в идеалния случай през нощта, после поръсете с какао преди сервиране.",
      ],
      ingredients: [
        "24 бишкоти дамски пръсти",
        "1 1/2 чаши силно сварено кафе, изстинало",
        "2 с.л. вино марсала (по желание)",
        "4 жълтъка",
        "1/2 чаша захар",
        "4 белтъка",
        "Щипка сол",
        "450 г маскарпоне",
        "2 с.л. какао на прах за поръсване",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
