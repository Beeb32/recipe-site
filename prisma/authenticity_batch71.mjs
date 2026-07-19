import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "red-velvet-cake",
      title: "Red Velvet Cake",
      description:
        "A striking red layer cake where natural cocoa reacts with buttermilk, vinegar, and baking soda for the tangy flavor and tender crumb real red velvet is known for - that reaction, not just red food coloring, is what most simplified versions are missing entirely.",
      imageEmoji: "🍰",
      cookTimeMinutes: 60,
      servings: 12,
      ingredients: [
        { text: "2 1/2 cups flour", ingredient: "flour", quantity: 2.5 },
        { text: "1 1/2 cups sugar", ingredient: "sugar", quantity: 1.5 },
        { text: "2 tbsp natural unsweetened cocoa powder", ingredient: "cocoa powder", quantity: 2 },
        { text: "1 tsp baking soda", ingredient: "baking soda", quantity: 1 },
        { text: "1/2 cup butter, softened", ingredient: "butter", quantity: 0.5 },
        { text: "2 eggs", ingredient: "eggs", quantity: 2 },
        { text: "1 cup buttermilk", ingredient: "buttermilk", quantity: 1 },
        { text: "1 tbsp distilled white vinegar", ingredient: "vinegar", quantity: 1 },
        { text: "1 tsp vanilla extract", ingredient: "vanilla extract", quantity: 1 },
        { text: "2 tbsp red food coloring", ingredient: "red food coloring", quantity: 2 },
      ],
      steps: [
        "Preheat oven to 350°F and grease two round cake pans.",
        "Whisk together the flour, sugar, cocoa powder, and baking soda.",
        "Cream the butter, then beat in the eggs, buttermilk, vinegar, vanilla, and red food coloring until smooth.",
        "Combine the wet and dry ingredients until just combined - the vinegar reacting with the baking soda and buttermilk's acidity is what gives red velvet its signature tang and tender crumb, not just the food coloring.",
        "Divide between the pans and bake for 28-30 minutes until a toothpick comes out clean; frost with cream cheese frosting once cooled.",
      ],
      tags: ["dessert", "vegetarian", "baking"],
    },
    bg: {
      title: "Червено кадифе торта",
      description:
        "Ефектна червена многослойна торта, в която естествено какао реагира с суроватка, оцет и сода за хляб за киселия вкус и нежната структура, с които истинската червено кадифе торта е известна - тази реакция, а не само червената хранителна боя, е това, което липсва напълно в повечето опростени версии.",
      steps: [
        "Загрейте фурната на 180°C и намажете две кръгли форми за торта.",
        "Разбъркайте брашното, захарта, какаото и содата за хляб заедно.",
        "Разбийте маслото, после добавете яйцата, суроватката, оцета, ванилията и червената хранителна боя до гладкост.",
        "Смесете течната смес със сухата до съединяване - реакцията на оцета със содата за хляб и киселинността на суроватката е това, което придава на червеното кадифе характерния му тръпчив вкус и нежна структура, а не само хранителната боя.",
        "Разпределете между формите и печете 28-30 минути, докато клечка излезе суха; намажете с крем от крема сирене след изстиване.",
      ],
      ingredients: [
        "2 1/2 чаши брашно",
        "1 1/2 чаши захар",
        "2 с.л. натурално какао на прах (неалкализирано)",
        "1 ч.л. сода за хляб",
        "1/2 чаша масло, омекотено",
        "2 яйца",
        "1 чаша суроватка",
        "1 с.л. дестилиран бял оцет",
        "1 ч.л. ванилова есенция",
        "2 с.л. червена хранителна боя",
      ],
    },
  },
  {
    en: {
      slug: "pumpkin-pie",
      title: "Pumpkin Pie",
      description:
        "A classic spiced pumpkin custard pie baked in a par-baked crust - blind-baking the crust first is what keeps the bottom from turning soggy under the wet custard filling, a step most quick versions skip.",
      imageEmoji: "🥧",
      cookTimeMinutes: 65,
      servings: 8,
      ingredients: [
        { text: "1 pie crust", ingredient: "pie crust", quantity: 1 },
        { text: "1 can pumpkin purée", ingredient: "pumpkin puree", quantity: 1 },
        { text: "1 can evaporated milk", ingredient: "evaporated milk", quantity: 1 },
        { text: "2 eggs", ingredient: "eggs", quantity: 2 },
        { text: "3/4 cup sugar", ingredient: "sugar", quantity: 0.75 },
        { text: "2 tsp pumpkin pie spice", ingredient: "pumpkin pie spice", quantity: 2 },
        { text: "1 tsp vanilla extract", ingredient: "vanilla extract", quantity: 1 },
        { text: "1/2 tsp salt", ingredient: "salt", quantity: 0.5 },
      ],
      steps: [
        "Preheat oven to 425°F, fit the pie crust into a pie dish, then line it with parchment and pie weights and blind-bake for 10 minutes - this par-baking is what keeps the crust from turning soggy under the custard filling.",
        "Remove the weights and parchment.",
        "Whisk together the pumpkin purée, evaporated milk, eggs, sugar, pumpkin pie spice, vanilla, and salt.",
        "Pour into the crust.",
        "Bake for 15 minutes, then reduce heat to 350°F and bake for another 40-45 minutes until the edges are set and only the center jiggles slightly.",
      ],
      tags: ["dessert", "vegetarian", "baking"],
    },
    bg: {
      title: "Тиквен пай",
      description:
        "Класически подправен тиквен крем пай, изпечен в предварително запечено тесто - предварителното запичане на кората е това, което пази дъното от накисване под мократа кремообразна плънка, стъпка, която повечето бързи версии пропускат.",
      steps: [
        "Загрейте фурната на 220°C, наредете тестото в тава за пай, после го покрийте с хартия за печене и тежести за пай и запечете предварително за 10 минути - това предварително запичане е това, което пази кората от накисване под кремообразната плънка.",
        "Извадете тежестите и хартията.",
        "Разбийте тиквеното пюре, евапорираното мляко, яйцата, захарта, подправката за тиквен пай, ванилията и солта заедно.",
        "Изсипете в тестото.",
        "Печете 15 минути, после намалете температурата на 180°C и печете още 40-45 минути, докато краищата се стегнат и само центърът леко потрепва.",
      ],
      ingredients: [
        "1 тесто за пай",
        "1 консерва тиквено пюре",
        "1 консерва евапорирано мляко",
        "2 яйца",
        "3/4 чаша захар",
        "2 ч.л. подправка за тиквен пай",
        "1 ч.л. ванилова есенция",
        "1/2 ч.л. сол",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
