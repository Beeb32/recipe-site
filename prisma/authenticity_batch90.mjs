import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "grilled-corn-on-the-cob",
      title: "Grilled Corn on the Cob",
      description:
        "Sweet corn grilled in the husk until tender, then unwrapped and charred briefly directly over the flame - steaming in the husk first keeps the kernels juicy, and that final direct-flame char is what gives it real smoky grilled flavor, which husk-only versions miss.",
      imageEmoji: "🌽",
      cookTimeMinutes: 25,
      servings: 4,
      ingredients: [
        { text: "4 ears corn, in husk", ingredient: "corn", quantity: 4 },
        { text: "3 tbsp butter, softened", ingredient: "butter", quantity: 3 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Soak the corn in its husk in water for at least 30 minutes - this traps steam inside the husk during grilling and keeps the husk from burning.",
        "Grill over medium heat, turning occasionally, for 15-20 minutes until tender.",
        "Peel back the husks, keeping them attached at the base, and grill the bare cobs directly over the flame for 1-2 minutes, turning, until lightly charred - this direct char is what gives real grilled corn its smoky flavor, since steaming in the husk alone won't do it.",
        "Brush with butter and season with salt before serving.",
      ],
      tags: ["snack", "vegetarian", "quick"],
    },
    bg: {
      title: "Царевица на скара",
      description:
        "Сладка царевица, изпечена на скара в люспите до омекване, после разопакована и препечена за кратко директно на пламъка - задушаването в люспите първо пази зърната сочни, а окончателното препичане на директен пламък е това, което ѝ придава истински димен вкус от скара, който версиите само в люспи пропускат.",
      steps: [
        "Накиснете царевицата в люспите ѝ във вода поне 30 минути - това задържа пара вътре в люспите по време на печене и пази люспите да не изгорят.",
        "Изпечете на скара на среден огън, обръщайки от време на време, 15-20 минути до омекване.",
        "Отделете люспите, оставяйки ги прикрепени в основата, и изпечете голите кочани директно на пламъка 1-2 минути, обръщайки, докато леко овъглеят - това директно овъгляне е това, което придава на истинската царевица на скара димния ѝ вкус, тъй като само задушаването в люспите не го постига.",
        "Намажете с масло и подправете със сол преди сервиране.",
      ],
      ingredients: ["4 кочана царевица, с люспи", "3 с.л. масло, омекотено", "Сол на вкус"],
    },
  },
  {
    en: {
      slug: "oatmeal-raisin-cookies",
      title: "Oatmeal Raisin Cookies",
      description:
        "Chewy oatmeal cookies studded with plump raisins and warm cinnamon, made with browned butter for deeper flavor - browning the butter first is what gives real oatmeal raisin cookies their rich, butterscotch-like edge instead of a flat, one-note sweetness.",
      imageEmoji: "🍪",
      cookTimeMinutes: 30,
      servings: 24,
      ingredients: [
        { text: "1 cup butter", ingredient: "butter", quantity: 1 },
        { text: "1 cup brown sugar", ingredient: "brown sugar", quantity: 1 },
        { text: "2 eggs", ingredient: "eggs", quantity: 2 },
        { text: "1 tsp vanilla extract", ingredient: "vanilla extract", quantity: 1 },
        { text: "1 1/2 cups flour", ingredient: "flour", quantity: 1.5 },
        { text: "1 tsp baking soda", ingredient: "baking soda", quantity: 1 },
        { text: "1 tsp cinnamon", ingredient: "cinnamon", quantity: 1 },
        { text: "1/2 tsp salt", ingredient: "salt", quantity: 0.5 },
        { text: "3 cups rolled oats", ingredient: "oats", quantity: 3 },
        { text: "1 cup raisins", ingredient: "raisins", quantity: 1 },
      ],
      steps: [
        "Preheat oven to 350°F.",
        "Melt the butter in a skillet over medium heat and continue cooking, swirling occasionally, until it turns golden brown and smells nutty, then let cool slightly - this browned butter is what gives the cookies their deep, butterscotch-like flavor.",
        "Whisk the browned butter and brown sugar together, then beat in the eggs and vanilla.",
        "Mix in the flour, baking soda, cinnamon, and salt, then fold in the oats and raisins.",
        "Drop spoonfuls onto a baking sheet and bake for 10-12 minutes until just golden at the edges - pulling them while the centers still look slightly underdone is what keeps them chewy instead of dry.",
      ],
      tags: ["dessert", "vegetarian", "baking"],
    },
    bg: {
      title: "Бисквити с овес и стафиди",
      description:
        "Дъвчащи овесени бисквити със сочни стафиди и топла канела, приготвени с препечено масло за по-дълбок вкус - препичането на маслото първо е това, което придава на истинските бисквити с овес и стафиди наситения им, карамелоподобен привкус, вместо плоска, едноизмерна сладост.",
      steps: [
        "Загрейте фурната на 180°C.",
        "Разтопете маслото в тиган на среден огън и продължете да го готвите, завъртайки от време на време, докато стане златистокафяво и замирише на ядки, после оставете да изстине леко - това препечено масло е това, което придава на бисквитите дълбокия им, карамелоподобен вкус.",
        "Разбийте препеченото масло и кафявата захар заедно, после добавете яйцата и ванилията.",
        "Разбъркайте брашното, содата за хляб, канелата и солта, после добавете овеса и стафидите.",
        "Сложете с лъжица купчинки върху тава за печене и печете 10-12 минути, докато леко позлатеят по краищата - изваждането им, докато центърът все още изглежда леко недопечен, е това, което ги пази дъвчещи, вместо сухи.",
      ],
      ingredients: [
        "1 чаша масло",
        "1 чаша кафява захар",
        "2 яйца",
        "1 ч.л. ванилова есенция",
        "1 1/2 чаши брашно",
        "1 ч.л. сода за хляб",
        "1 ч.л. канела",
        "1/2 ч.л. сол",
        "3 чаши овесени ядки",
        "1 чаша стафиди",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
