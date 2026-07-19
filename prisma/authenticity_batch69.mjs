import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "snickerdoodles",
      title: "Snickerdoodles",
      description:
        "Soft, chewy sugar cookies rolled in cinnamon sugar - the cream of tartar paired with baking soda is what gives real snickerdoodles their signature tangy edge and tender crumb, not just cinnamon on a plain sugar cookie.",
      imageEmoji: "🍪",
      cookTimeMinutes: 25,
      servings: 24,
      ingredients: [
        { text: "2 3/4 cups flour", ingredient: "flour", quantity: 2.75 },
        { text: "1 cup butter, softened", ingredient: "butter", quantity: 1 },
        { text: "1 1/2 cups sugar", ingredient: "sugar", quantity: 1.5 },
        { text: "2 eggs", ingredient: "eggs", quantity: 2 },
        { text: "2 tsp cream of tartar", ingredient: "cream of tartar", quantity: 2 },
        { text: "1 tsp baking soda", ingredient: "baking soda", quantity: 1 },
        { text: "2 tbsp cinnamon (for rolling)", ingredient: "cinnamon", quantity: 2 },
      ],
      steps: [
        "Preheat oven to 400°F.",
        "Cream the butter and sugar, then beat in the eggs.",
        "Mix in the flour, cream of tartar, and baking soda until a soft dough forms.",
        "Roll the dough into balls and coat in cinnamon sugar.",
        "Bake for 8-10 minutes until just set and slightly crackled on top.",
      ],
      tags: ["dessert", "baking", "vegetarian"],
    },
    bg: {
      title: "Сникърдудъл бисквитки",
      description:
        "Меки бисквитки от захарно тесто, овалени в канела и захар - кремотартарът, съчетан със сода за хляб, е това, което придава на истинските сникърдудъл бисквитки характерния им леко кисел привкус и нежна структура, а не просто канела върху обикновена захарна бисквитка.",
      steps: [
        "Загрейте фурната на 200°C.",
        "Разбийте маслото и захарта, после добавете яйцата.",
        "Добавете брашното, кремотартара и содата за хляб до образуване на меко тесто.",
        "Оформете тестото на топчета и овалайте в канела и захар.",
        "Печете 8-10 минути до леко стягане и напукване отгоре.",
      ],
      ingredients: [
        "2 3/4 чаши брашно",
        "1 чаша масло, омекотено",
        "1 1/2 чаши захар",
        "2 яйца",
        "2 ч.л. кремотартар",
        "1 ч.л. сода за хляб",
        "2 с.л. канела (за овалване)",
      ],
    },
  },
  {
    en: {
      slug: "hot-chocolate",
      title: "Hot Chocolate",
      description:
        "Rich, creamy hot chocolate made with real melted chocolate alongside cocoa powder for the cocoa-butter richness that cocoa powder alone can't give, heated gently without ever boiling - boiling is what makes chocolate separate and turn grainy.",
      imageEmoji: "☕",
      cookTimeMinutes: 10,
      servings: 2,
      ingredients: [
        { text: "2 cups milk", ingredient: "milk", quantity: 2 },
        { text: "2 oz semi-sweet chocolate, chopped", ingredient: "chocolate", quantity: 2 },
        { text: "2 tbsp cocoa powder", ingredient: "cocoa powder", quantity: 2 },
        { text: "2 tbsp sugar", ingredient: "sugar", quantity: 2 },
        { text: "1/2 tsp vanilla extract", ingredient: "vanilla extract", quantity: 0.5 },
        { text: "Pinch of salt", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Whisk the cocoa powder and sugar with a splash of milk in a saucepan until smooth.",
        "Gradually whisk in the remaining milk, then add the chopped chocolate.",
        "Heat over medium-low heat, whisking often, until the chocolate is fully melted and the mixture is hot but not boiling - boiling is what makes chocolate separate and turn grainy.",
        "Stir in the vanilla and a pinch of salt before serving.",
      ],
      tags: ["snack", "vegetarian", "quick"],
    },
    bg: {
      title: "Топъл шоколад",
      description:
        "Наситен, кремообразен топъл шоколад, приготвен с истински разтопен шоколад заедно с какао на прах за богатството от какаово масло, което самото какао на прах не може да даде, загрят внимателно, без никога да завира - завирането е това, което кара шоколада да се отдели и да стане на зърна.",
      steps: [
        "Разбъркайте какаото и захарта с малко мляко в тенджерка до гладкост.",
        "Постепенно добавяйте останалото мляко, после добавете нарязания шоколад.",
        "Загрейте на среден до слаб огън, разбърквайки често, докато шоколадът се разтопи напълно и сместа стане гореща, но не заври - завирането е това, което кара шоколада да се отдели и да стане на зърна.",
        "Добавете ванилията и щипка сол преди сервиране.",
      ],
      ingredients: [
        "2 чаши мляко",
        "60 г полусладък шоколад, нарязан",
        "2 с.л. какао на прах",
        "2 с.л. захар",
        "1/2 ч.л. ванилова есенция",
        "Щипка сол",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
