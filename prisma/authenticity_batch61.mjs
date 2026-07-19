import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "chocolate-chip-cookies",
      title: "Chocolate Chip Cookies",
      description:
        "Chewy in the middle, crisp at the edges - the classic 1938 Toll House recipe, with the dough chilled briefly before baking so it spreads less and develops deeper caramel notes; the original recipe also included chopped walnuts, kept optional here.",
      imageEmoji: "🍪",
      cookTimeMinutes: 20,
      servings: 24,
      ingredients: [
        { text: "2 1/4 cups all-purpose flour", ingredient: "flour", quantity: 2.25 },
        { text: "1 tsp baking soda", ingredient: "baking soda", quantity: 1 },
        { text: "1 tsp salt", ingredient: "salt", quantity: 1 },
        { text: "1 cup butter, softened", ingredient: "butter", quantity: 1 },
        { text: "3/4 cup granulated sugar", ingredient: "sugar", quantity: 0.75 },
        { text: "3/4 cup brown sugar", ingredient: "brown sugar", quantity: 0.75 },
        { text: "2 large eggs", ingredient: "eggs", quantity: 2 },
        { text: "2 tsp vanilla extract", ingredient: "vanilla extract", quantity: 2 },
        { text: "2 cups chocolate chips", ingredient: "chocolate chips", quantity: 2 },
        { text: "1 cup walnuts, chopped (optional, per the original recipe)", ingredient: "walnuts", quantity: 1 },
      ],
      steps: [
        "Whisk together flour, baking soda, and salt in a bowl.",
        "Cream the butter and both sugars until light and fluffy.",
        "Beat in the eggs and vanilla.",
        "Mix in the dry ingredients until just combined, then fold in the chocolate chips and walnuts, if using.",
        "Cover and chill the dough for at least 30 minutes, up to 24 hours - resting lets the flour hydrate fully, deepens the dough's flavor, and keeps the cookies from spreading too thin.",
        "Preheat oven to 375°F / 190°C.",
        "Drop rounded tablespoons of dough onto a baking sheet and bake for 9-11 minutes.",
      ],
      tags: ["dessert", "baking", "vegetarian"],
    },
    bg: {
      title: "Бисквитки с шоколадови парченца",
      description:
        "Меки в средата, хрупкави по краищата - класическата рецепта Toll House от 1938 г., с тесто, охладено за кратко преди печене, така че се разстила по-малко и развива по-дълбоки карамелени нотки; оригиналната рецепта включваше и нарязани орехи, тук оставени по избор.",
      steps: [
        "Разбъркайте брашното, содата за хляб и солта в купа.",
        "Разбийте маслото с двете захари до пухкава смес.",
        "Добавете яйцата и ванилията, разбивайки.",
        "Смесете със сухите съставки до съединяване, после вмесете шоколадовите парченца и орехите, ако ги ползвате.",
        "Покрийте и охладете тестото поне 30 минути, до 24 часа - почивката позволява на брашното да се хидратира напълно, задълбочава вкуса на тестото и пази бисквитките да не се разстелят твърде тънко.",
        "Загрейте фурната на 190°C.",
        "Оформете топчета тесто с лъжица върху тава за печене и печете 9-11 минути.",
      ],
      ingredients: [
        "2 1/4 чаши бяло брашно",
        "1 ч.л. сода за хляб",
        "1 ч.л. сол",
        "1 чаша масло, омекотено",
        "3/4 чаша бяла захар",
        "3/4 чаша кафява захар",
        "2 големи яйца",
        "2 ч.л. ванилова есенция",
        "2 чаши шоколадови парченца",
        "1 чаша орехи, нарязани (по избор, по оригиналната рецепта)",
      ],
    },
  },
  {
    en: {
      slug: "classic-french-toast",
      title: "Classic French Toast",
      description:
        "Thick slices of day-old bread soaked in a rich milk-and-cream custard with cinnamon and vanilla, then pan-fried until golden - stale bread and a splash of cream are what let the custard soak in fully without turning the inside mushy.",
      imageEmoji: "🍞",
      cookTimeMinutes: 15,
      servings: 4,
      ingredients: [
        { text: "4 thick slices day-old brioche or challah bread", ingredient: "bread", quantity: 4 },
        { text: "2 eggs", ingredient: "eggs", quantity: 2 },
        { text: "1/4 cup milk", ingredient: "milk", quantity: 0.25 },
        { text: "1/4 cup heavy cream", ingredient: "heavy cream", quantity: 0.25 },
        { text: "1 tsp vanilla extract", ingredient: "vanilla extract", quantity: 1 },
        { text: "1/2 tsp cinnamon", ingredient: "cinnamon", quantity: 0.5 },
        { text: "Pinch of salt", ingredient: "salt", quantity: null },
        { text: "1 tbsp butter for frying", ingredient: "butter", quantity: 1 },
      ],
      steps: [
        "If your bread isn't already a day old, let the slices sit out uncovered for a few hours first - slightly stale bread soaks up the custard without turning mushy.",
        "Whisk the eggs, milk, cream, vanilla, cinnamon, and salt together in a shallow dish.",
        "Dip each bread slice into the custard, coating both sides well and letting the excess drip off.",
        "Melt butter in a skillet over medium heat.",
        "Cook each slice for 2-3 minutes per side until golden brown.",
        "Serve warm with maple syrup and fresh fruit.",
      ],
      tags: ["breakfast", "quick", "vegetarian"],
    },
    bg: {
      title: "Класически пържен хляб",
      description:
        "Дебели филии стар хляб, накиснати в наситен крем от мляко и сметана с канела и ванилия, после изпържени до златисто - старият хляб и капката сметана са това, което позволява на крема да попие напълно, без вътрешността да стане кашеста.",
      steps: [
        "Ако хлябът ви не е вече стар, оставете филиите да престоят на въздух няколко часа първо - леко стария хляб попива крема, без да стане кашест.",
        "Разбийте яйцата, млякото, сметаната, ванилията, канелата и солта заедно в плитка чиния.",
        "Потопете всяка филия хляб в крема, покривайки добре двете страни и оставяйки излишъка да се отцеди.",
        "Разтопете масло в тиган на среден огън.",
        "Изпечете всяка филия по 2-3 минути от всяка страна до златисто.",
        "Сервирайте топъл с кленов сироп и пресни плодове.",
      ],
      ingredients: [
        "4 дебели филии стар бриош или хала хляб",
        "2 яйца",
        "1/4 чаша мляко",
        "1/4 чаша течна сметана",
        "1 ч.л. ванилова есенция",
        "1/2 ч.л. канела",
        "Щипка сол",
        "1 с.л. масло за пържене",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
