import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "dinner-rolls",
      title: "Dinner Rolls",
      description:
        "Soft, pillowy yeast rolls enriched with egg and butter, brushed with more butter the moment they come out of the oven - the egg is what gives them their soft, rich crumb, and brushing them warm is what gives them their glossy finish.",
      imageEmoji: "🍞",
      cookTimeMinutes: 120,
      servings: 12,
      ingredients: [
        { text: "4 cups flour", ingredient: "flour", quantity: 4 },
        { text: "2 1/4 tsp active dry yeast", ingredient: "yeast", quantity: 2.25 },
        { text: "1 cup warm milk", ingredient: "milk", quantity: 1 },
        { text: "1/4 cup sugar", ingredient: "sugar", quantity: 0.25 },
        { text: "1 egg", ingredient: "eggs", quantity: 1 },
        { text: "4 tbsp melted butter", ingredient: "butter", quantity: 4 },
      ],
      steps: [
        "Mix the flour, yeast, warm milk, sugar, egg, and half the butter into a soft dough; knead for 5 minutes - the egg is what enriches the dough for a softer, richer crumb.",
        "Let rise for 1 hour until doubled.",
        "Shape into rolls and place in a baking dish, then let rise for another 30 minutes.",
        "Bake at 375°F for 18-20 minutes until golden, then brush with the remaining butter while still warm - brushing them warm is what gives dinner rolls their glossy finish.",
      ],
      tags: ["dinner", "vegetarian", "baking"],
    },
    bg: {
      title: "Хлебчета за вечеря",
      description:
        "Меки, пухкави хлебчета с мая, обогатени с яйце и масло, намазани с още масло веднага щом излязат от фурната - яйцето е това, което им придава мека, богата структура, а намазването им топли е това, което им дава лъскавия финал.",
      steps: [
        "Смесете брашното, маята, топлото мляко, захарта, яйцето и половината масло в меко тесто; месете 5 минути - яйцето обогатява тестото за по-мека, по-богата структура.",
        "Оставете да втаса 1 час, докато удвои обема си.",
        "Оформете на хлебчета и поставете в тава, после оставете да втаса още 30 минути.",
        "Печете на 190°C 18-20 минути до златисто, после намажете с останалото масло, докато са още топли - намазването им топли е това, което придава на хлебчетата лъскавия им финал.",
      ],
      ingredients: [
        "4 чаши брашно",
        "2 1/4 ч.л. суха мая",
        "1 чаша топло мляко",
        "1/4 чаша захар",
        "1 яйце",
        "4 с.л. разтопено масло",
      ],
    },
  },
  {
    en: {
      slug: "chocolate-cake",
      title: "Chocolate Cake",
      description:
        "A rich, moist layer cake with deep chocolate flavor and fudgy frosting - blooming the cocoa powder in hot coffee, and using buttermilk for its tang and tenderizing acidity, are what most quick versions skip, and they're what give real chocolate cake its deepest flavor and moistest crumb.",
      imageEmoji: "🍰",
      cookTimeMinutes: 60,
      servings: 12,
      ingredients: [
        { text: "2 cups flour", ingredient: "flour", quantity: 2 },
        { text: "2 cups sugar", ingredient: "sugar", quantity: 2 },
        { text: "3/4 cup cocoa powder", ingredient: "cocoa powder", quantity: 0.75 },
        { text: "2 tsp baking soda", ingredient: "baking soda", quantity: 2 },
        { text: "1/2 tsp baking powder", ingredient: "baking powder", quantity: 0.5 },
        { text: "1/2 tsp salt", ingredient: "salt", quantity: 0.5 },
        { text: "2 eggs", ingredient: "eggs", quantity: 2 },
        { text: "1 cup buttermilk", ingredient: "buttermilk", quantity: 1 },
        { text: "1/2 cup vegetable oil", ingredient: "vegetable oil", quantity: 0.5 },
        { text: "1 cup hot coffee", ingredient: "coffee", quantity: 1 },
      ],
      steps: [
        "Preheat oven to 350°F and grease two round cake pans.",
        "Whisk together the flour, sugar, cocoa powder, baking soda, baking powder, and salt.",
        "Beat in the eggs, buttermilk, and oil until smooth.",
        "Stir in the hot coffee last - the batter will turn thin, and the hot coffee is what blooms the cocoa for deeper flavor and keeps the crumb moist.",
        "Divide between the pans and bake for 30-35 minutes until a toothpick comes out clean; frost once cooled.",
      ],
      tags: ["dessert", "vegetarian", "baking"],
    },
    bg: {
      title: "Шоколадова торта",
      description:
        "Наситена, сочна многослойна торта с дълбок шоколадов вкус и мека глазура - разтварянето на какаото в горещо кафе и използването на суроватка за нейната киселинност и омекотяващ ефект е това, което повечето бързи версии пропускат, и точно те придават на истинската шоколадова торта най-дълбокия ѝ вкус и най-сочната структура.",
      steps: [
        "Загрейте фурната на 180°C и намажете две кръгли форми за торта.",
        "Разбъркайте брашното, захарта, какаото, содата за хляб, бакпулвера и солта заедно.",
        "Разбийте яйцата, суроватката и олиото до гладкост.",
        "Разбъркайте горещото кафе накрая - тестото ще стане течно, а горещото кафе е това, което разтваря какаото за по-дълбок вкус и пази структурата сочна.",
        "Разпределете между формите и печете 30-35 минути, докато клечка излезе суха; намажете с глазура след изстиване.",
      ],
      ingredients: [
        "2 чаши брашно",
        "2 чаши захар",
        "3/4 чаша какао на прах",
        "2 ч.л. сода за хляб",
        "1/2 ч.л. бакпулвер",
        "1/2 ч.л. сол",
        "2 яйца",
        "1 чаша суроватка",
        "1/2 чаша олио",
        "1 чаша горещо кафе",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
