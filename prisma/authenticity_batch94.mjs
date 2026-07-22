import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "simple-roast-chicken",
      title: "Simple Roast Chicken",
      description:
        "A whole chicken roasted until golden and juicy with garlic, lemon, and herbs - salting it well ahead of time and letting it air-dry uncovered in the fridge is what gives real roast chicken crackling skin and deeply seasoned meat, a step most same-day versions skip.",
      imageEmoji: "🍗",
      cookTimeMinutes: 90,
      servings: 6,
      ingredients: [
        { text: "1 whole chicken (about 4 lb)", ingredient: "chicken", quantity: 1 },
        { text: "1 lemon, halved", ingredient: "lemon", quantity: 1 },
        { text: "4 cloves garlic", ingredient: "garlic", quantity: 4 },
        { text: "2 tbsp butter, softened", ingredient: "butter", quantity: 2 },
        { text: "1 tbsp fresh thyme", ingredient: "thyme", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Pat the chicken dry and season generously with salt, then refrigerate uncovered for at least 4 hours, or overnight - this dry brine seasons the meat all the way through and dries the skin for a crackling roast.",
        "Preheat oven to 425°F.",
        "Stuff the cavity with the lemon halves and garlic cloves.",
        "Rub the softened butter and thyme over the skin, then season with pepper.",
        "Roast for about 1 hour 20 minutes, until the internal temperature reaches 165°F.",
        "Let rest for 10-15 minutes before carving - resting is what keeps the juices in the meat instead of running out onto the board.",
      ],
      tags: ["dinner"],
    },
    bg: {
      title: "Просто печено пиле",
      description:
        "Цяло пиле, изпечено до златисто и сочно, с чесън, лимон и билки - осоляването му предварително и оставянето да съхне непокрито в хладилника е това, което придава на истинското печено пиле хрупкава коричка и добре подправено месо, стъпка, която повечето версии за същия ден пропускат.",
      steps: [
        "Подсушете пилето и го подправете обилно със сол, после го приберете непокрито в хладилника за поне 4 часа или през нощта - това сухо осоляване подправя месото докрай и подсушава кожата за хрупкава коричка.",
        "Загрейте фурната на 220°C.",
        "Напълнете кухината с половинките лимон и скилидките чесън.",
        "Намажете кожата с омекналото масло и мащерката, после подправете с черен пипер.",
        "Печете около 1 час и 20 минути, докато вътрешната температура достигне 74°C.",
        "Оставете да почине 10-15 минути преди да нарежете - почивката е това, което задържа соковете в месото, вместо да изтекат върху дъската.",
      ],
      ingredients: [
        "1 цяло пиле (около 1.8 кг)",
        "1 лимон, разрязан наполовина",
        "4 скилидки чесън",
        "2 с.л. масло, омекнало",
        "1 с.л. свежа мащерка",
        "Сол на вкус",
        "Черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "pumpkin-bread",
      title: "Pumpkin Bread",
      description:
        "A moist, spiced quick bread made with real pumpkin purée and a full blend of cinnamon, nutmeg, ginger, and cloves rather than a single pre-mixed spice jar - building the spice blend from scratch is what gives real pumpkin bread its fuller, more balanced flavor.",
      imageEmoji: "🎃",
      cookTimeMinutes: 70,
      servings: 8,
      ingredients: [
        { text: "1 can pumpkin purée", ingredient: "pumpkin puree", quantity: 1 },
        { text: "2 cups flour", ingredient: "flour", quantity: 2 },
        { text: "1 cup sugar", ingredient: "sugar", quantity: 1 },
        { text: "2 eggs", ingredient: "eggs", quantity: 2 },
        { text: "1/2 cup vegetable oil", ingredient: "vegetable oil", quantity: 0.5 },
        { text: "1 tsp baking soda", ingredient: "baking soda", quantity: 1 },
        { text: "1/2 tsp baking powder", ingredient: "baking powder", quantity: 0.5 },
        { text: "1/2 tsp salt", ingredient: "salt", quantity: 0.5 },
        { text: "1 1/2 tsp cinnamon", ingredient: "cinnamon", quantity: 1.5 },
        { text: "1/2 tsp nutmeg", ingredient: "nutmeg", quantity: 0.5 },
        { text: "1/2 tsp ground ginger", ingredient: "ginger", quantity: 0.5 },
        { text: "1/4 tsp ground cloves", ingredient: "cloves", quantity: 0.25 },
      ],
      steps: [
        "Preheat oven to 350°F and grease a loaf pan.",
        "Whisk together the pumpkin purée, sugar, eggs, and oil.",
        "Mix in the flour, baking soda, baking powder, salt, cinnamon, nutmeg, ginger, and cloves until just combined - building the spice blend from scratch instead of using a single jar of pumpkin pie spice is what gives real pumpkin bread its fuller flavor.",
        "Pour into the pan and bake for 55-60 minutes until a toothpick comes out clean.",
      ],
      tags: ["breakfast", "vegetarian", "baking"],
    },
    bg: {
      title: "Хляб с тиква",
      description:
        "Сочен, подправен бърз хляб с истинско тиквено пюре и пълна смес от канела, индийско орехче, джинджифил и карамфил, вместо един буркан готова подправка - изграждането на сместа от нулата е това, което придава на истинския хляб с тиква по-пълен, по-балансиран вкус.",
      steps: [
        "Загрейте фурната на 180°C и намажете форма за хляб.",
        "Разбийте заедно тиквеното пюре, захарта, яйцата и олиото.",
        "Разбъркайте брашното, содата за хляб, бакпулвера, солта, канелата, индийското орехче, джинджифила и карамфила до смесване - изграждането на сместа от подправки от нулата, вместо използване на един буркан готова подправка, е това, което придава на истинския хляб с тиква по-пълен вкус.",
        "Изсипете в тавата и печете 55-60 минути, докато клечка излезе чиста.",
      ],
      ingredients: [
        "1 консерва тиквено пюре",
        "2 чаши брашно",
        "1 чаша захар",
        "2 яйца",
        "1/2 чаша олио",
        "1 ч.л. сода за хляб",
        "1/2 ч.л. бакпулвер",
        "1/2 ч.л. сол",
        "1 1/2 ч.л. канела",
        "1/2 ч.л. индийско орехче",
        "1/2 ч.л. смлян джинджифил",
        "1/4 ч.л. смлян карамфил",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
