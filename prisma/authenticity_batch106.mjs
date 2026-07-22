import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "belgian-waffles",
      title: "Belgian Waffles",
      description:
        "Crisp on the outside, fluffy inside - classic deep-pocketed waffles rounded out with vanilla, made light by whipping the egg whites separately and folding them in, with a short rest before cooking so the baking powder has time to work.",
      imageEmoji: "🧇",
      cookTimeMinutes: 25,
      servings: 4,
      ingredients: [
        { text: "2 cups flour", ingredient: "flour", quantity: 2 },
        { text: "1 tbsp sugar", ingredient: "sugar", quantity: 1 },
        { text: "4 tsp baking powder", ingredient: "baking powder", quantity: 4 },
        { text: "1/2 tsp salt", ingredient: "salt", quantity: 0.5 },
        { text: "2 eggs, separated", ingredient: "eggs", quantity: 2 },
        { text: "1 3/4 cups milk", ingredient: "milk", quantity: 1.75 },
        { text: "1/2 cup melted butter", ingredient: "butter", quantity: 0.5 },
        { text: "1 tsp vanilla extract", ingredient: "vanilla extract", quantity: 1 },
      ],
      steps: [
        "Whisk together the flour, sugar, baking powder, and salt.",
        "In another bowl, whisk the egg yolks, milk, melted butter, and vanilla.",
        "Combine the wet and dry ingredients until just mixed, then let the batter rest for 5 minutes - resting gives the baking powder time to start working for a lighter waffle.",
        "Beat the egg whites to soft peaks and fold them into the batter.",
        "Cook in a preheated waffle iron until golden and crisp.",
      ],
      tags: ["breakfast", "vegetarian"],
    },
    bg: {
      title: "Белгийски вафли",
      description:
        "Хрупкави отвън, пухкави отвътре - класически дълбоки вафли, допълнени с ванилия, направени леки чрез разбиване на белтъците отделно и внимателното им вмесване, с кратка почивка на тестото преди печене, за да има бакпулверът време да подейства.",
      steps: [
        "Разбъркайте брашното, захарта, бакпулвера и солта.",
        "В друга купа разбийте жълтъците, млякото, разтопеното масло и ванилията.",
        "Смесете течната смес със сухата до съединяване, после оставете тестото да почине 5 минути - почивката дава на бакпулвера време да започне да действа за по-леки вафли.",
        "Разбийте белтъците до меки връхчета и ги вмесете внимателно в тестото.",
        "Изпечете в предварително загрят уред за вафли до златисто и хрупкаво.",
      ],
      ingredients: [
        "2 чаши брашно",
        "1 с.л. захар",
        "4 ч.л. бакпулвер",
        "1/2 ч.л. сол",
        "2 яйца, разделени",
        "1 3/4 чаши мляко",
        "1/2 чаша разтопено масло",
        "1 ч.л. ванилова есенция",
      ],
    },
  },
  {
    en: {
      slug: "baked-oatmeal",
      title: "Baked Oatmeal",
      description:
        "A hearty, cake-like baked oatmeal lifted with baking powder and rounded out with vanilla and a pinch of salt, plus cinnamon and berries - describing it as cake-like while leaving out the leavening is why most baked oatmeal turns out dense and flat instead of light.",
      imageEmoji: "🥣",
      cookTimeMinutes: 45,
      servings: 6,
      ingredients: [
        { text: "2 cups rolled oats", ingredient: "oats", quantity: 2 },
        { text: "2 cups milk", ingredient: "milk", quantity: 2 },
        { text: "2 eggs", ingredient: "eggs", quantity: 2 },
        { text: "1/3 cup honey", ingredient: "honey", quantity: 0.33 },
        { text: "1 tsp vanilla extract", ingredient: "vanilla extract", quantity: 1 },
        { text: "1 tsp baking powder", ingredient: "baking powder", quantity: 1 },
        { text: "1/4 tsp salt", ingredient: "salt", quantity: 0.25 },
        { text: "1 cup mixed berries", ingredient: "berries", quantity: 1 },
        { text: "1 tsp cinnamon", ingredient: "cinnamon", quantity: 1 },
      ],
      steps: [
        "Preheat oven to 375°F and grease a baking dish.",
        "Whisk together the oats, milk, eggs, honey, vanilla, baking powder, salt, and cinnamon - the baking powder is what actually gives this a cake-like rise instead of a dense, flat texture.",
        "Pour into the dish and scatter the berries over the top.",
        "Bake for 35-40 minutes until set and golden.",
      ],
      tags: ["breakfast", "vegetarian", "baking"],
    },
    bg: {
      title: "Печен овес",
      description:
        "Сит, подобен на кекс печен овес, повдигнат с бакпулвер и допълнен с ванилия и щипка сол, плюс канела и плодове - описанието му като 'подобен на кекс', докато липсва бакпулверът, е причината повечето печен овес да излиза плътен и плосък, вместо лек.",
      steps: [
        "Загрейте фурната на 190°C и намажете тава за печене.",
        "Разбийте овеса, млякото, яйцата, меда, ванилията, бакпулвера, солта и канелата заедно - бакпулверът е това, което реално придава на овеса леко надигане като кекс, вместо плътна, плоска текстура.",
        "Изсипете в тавата и поръсете отгоре плодовете.",
        "Печете 35-40 минути до стягане и златисто.",
      ],
      ingredients: [
        "2 чаши овесени ядки",
        "2 чаши мляко",
        "2 яйца",
        "1/3 чаша мед",
        "1 ч.л. ванилова есенция",
        "1 ч.л. бакпулвер",
        "1/4 ч.л. сол",
        "1 чаша микс от плодове",
        "1 ч.л. канела",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
