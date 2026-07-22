import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "basic-sugar-cookies",
      title: "Basic Sugar Cookies",
      description:
        "Simple, soft sugar cookies with a pinch of salt to balance the sweetness, chilled before baking and rolled in sugar for a lightly crackled top - skipping the chill is why sugar cookie dough spreads thin and loses its shape in the oven.",
      imageEmoji: "🍪",
      cookTimeMinutes: 35,
      servings: 24,
      ingredients: [
        { text: "1 cup butter, softened", ingredient: "butter", quantity: 1 },
        { text: "1 cup sugar", ingredient: "sugar", quantity: 1 },
        { text: "1 egg", ingredient: "eggs", quantity: 1 },
        { text: "1 tsp vanilla extract", ingredient: "vanilla extract", quantity: 1 },
        { text: "2 3/4 cups flour", ingredient: "flour", quantity: 2.75 },
        { text: "1 tsp baking soda", ingredient: "baking soda", quantity: 1 },
        { text: "1/4 tsp salt", ingredient: "salt", quantity: 0.25 },
        { text: "1/4 cup sugar, for rolling", ingredient: "sugar", quantity: 0.25 },
      ],
      steps: [
        "Cream the butter and sugar, then beat in the egg and vanilla.",
        "Mix in the flour, baking soda, and salt until a soft dough forms.",
        "Cover and refrigerate the dough for at least 30 minutes - chilling firms up the butter so the cookies hold their shape instead of spreading thin.",
        "Preheat oven to 375°F.",
        "Roll into balls, coat in sugar, flatten slightly, and bake for 8-10 minutes until just set.",
      ],
      tags: ["dessert", "vegetarian", "baking"],
    },
    bg: {
      title: "Основни бисквити със захар",
      description:
        "Прости, меки бисквити със захар, с щипка сол за баланс на сладостта, охладени преди печене и овалени в захар за леко напукана коричка - пропускането на охлаждането е причината тестото за бисквити със захар да се разлее тънко и да загуби формата си във фурната.",
      steps: [
        "Разбийте маслото и захарта на крем, после добавете яйцето и ванилията.",
        "Разбъркайте брашното, содата бикарбонат и солта, докато се образува меко тесто.",
        "Покрийте и приберете тестото в хладилника за поне 30 минути - охлаждането втвърдява маслото, за да задържат бисквитите формата си, вместо да се разлеят тънко.",
        "Загрейте фурната на 190°C.",
        "Оформете топчета, овалайте в захар, леко сплескайте и печете 8-10 минути до леко стягане.",
      ],
      ingredients: [
        "1 чаша масло, омекнало",
        "1 чаша захар",
        "1 яйце",
        "1 ч.л. ванилова есенция",
        "2 3/4 чаши брашно",
        "1 ч.л. сода бикарбонат",
        "1/4 ч.л. сол",
        "1/4 чаша захар, за овалване",
      ],
    },
  },
  {
    en: {
      slug: "banana-nut-muffins",
      title: "Banana Nut Muffins",
      description:
        "Moist banana muffins studded with walnuts toasted first for real nutty flavor, lifted with baking soda and rounded out with a pinch of salt and vanilla - folding raw nuts straight into the batter is why most muffins taste flat instead of nutty, and the recipe needs the baking soda that quick versions often leave out.",
      imageEmoji: "🧁",
      cookTimeMinutes: 40,
      servings: 12,
      ingredients: [
        { text: "3 ripe bananas, mashed", ingredient: "banana", quantity: 3 },
        { text: "2 cups flour", ingredient: "flour", quantity: 2 },
        { text: "3/4 cup sugar", ingredient: "sugar", quantity: 0.75 },
        { text: "1 tsp baking soda", ingredient: "baking soda", quantity: 1 },
        { text: "1/2 tsp salt", ingredient: "salt", quantity: 0.5 },
        { text: "2 eggs", ingredient: "eggs", quantity: 2 },
        { text: "1/2 cup melted butter", ingredient: "butter", quantity: 0.5 },
        { text: "1 tsp vanilla extract", ingredient: "vanilla extract", quantity: 1 },
        { text: "1/2 cup chopped walnuts, toasted", ingredient: "walnuts", quantity: 0.5 },
      ],
      steps: [
        "Preheat oven to 350°F and line a muffin tin.",
        "Toast the chopped walnuts in a dry pan over medium heat for 2-3 minutes until fragrant, then set aside to cool - toasting raw nuts is what brings out real nutty flavor instead of a flat crunch.",
        "Mix the mashed bananas, sugar, eggs, melted butter, and vanilla together.",
        "Stir in the flour, baking soda, and salt until just combined, then fold in the toasted walnuts.",
        "Divide among muffin cups and bake for 20-22 minutes until a toothpick comes out clean.",
      ],
      tags: ["breakfast", "vegetarian", "baking"],
    },
    bg: {
      title: "Мъфини с банан и орехи",
      description:
        "Сочни бананови мъфини с орехи, изпечени леко предварително за истински ядков вкус, повдигнати със сода бикарбонат и допълнени с щипка сол и ванилия - добавянето на сурови орехи направо в тестото е причината повечето мъфини да имат плосък, а не ядков вкус, а рецептата се нуждае от содата бикарбонат, която бързите версии често пропускат.",
      steps: [
        "Загрейте фурната на 180°C и застелете форма за мъфини.",
        "Изпечете нарязаните орехи в сух тиган на среден огън 2-3 минути до ароматизиране, после оставете да изстинат - изпичането на суровите орехи е това, което извлича истинския им ядков вкус, вместо плосък хрупкав вкус.",
        "Смесете намачканите банани, захарта, яйцата, разтопеното масло и ванилията заедно.",
        "Разбъркайте брашното, содата бикарбонат и солта до леко смесване, после добавете изпечените орехи.",
        "Разпределете в купичките за мъфини и печете 20-22 минути, докато клечка излезе суха.",
      ],
      ingredients: [
        "3 узрели банана, намачкани",
        "2 чаши брашно",
        "3/4 чаша захар",
        "1 ч.л. сода бикарбонат",
        "1/2 ч.л. сол",
        "2 яйца",
        "1/2 чаша разтопено масло",
        "1 ч.л. ванилова есенция",
        "1/2 чаша нарязани орехи, изпечени",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
