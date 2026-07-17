import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "baba-ganoush",
      title: "Baba Ganoush",
      description:
        "Eggplant charred directly over an open flame until collapsed and smoky, then drained of its bitter liquid before blending with tahini and garlic - baking in the oven skips the smokiness that defines the dish.",
      imageEmoji: "🍆",
      cookTimeMinutes: 45,
      servings: 6,
      ingredients: [
        { text: "2 large eggplants", ingredient: "eggplant", quantity: 2 },
        { text: "1/4 cup tahini", ingredient: "tahini", quantity: 0.25 },
        { text: "1 lemon, juiced", ingredient: "lemon", quantity: 1 },
        { text: "2 cloves garlic", ingredient: "garlic", quantity: 2 },
        { text: "2 tbsp olive oil", ingredient: "olive oil", quantity: 2 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Char the whole eggplants directly over an open gas flame or grill, turning occasionally with tongs, until the skin is blackened all over and the flesh has collapsed and softened, 15-20 minutes - this direct char is what gives baba ganoush its smoky flavor; an oven won't do it.",
        "Slit the charred eggplants open and let them drain in a colander for 15-20 minutes, then scoop out the flesh, discarding the skins and the bitter liquid that drains out.",
        "Blend the drained eggplant flesh with tahini, lemon juice, and garlic until smooth.",
        "Season with salt and drizzle with olive oil before serving.",
      ],
      tags: ["snack", "vegan", "mediterranean"],
    },
    bg: {
      title: "Баба гануш",
      description:
        "Патладжан, овъглен директно на открит пламък до сгромолясване и опушеност, после изцеден от горчивата течност преди пасиране с тахан и чесън - печенето във фурна пропуска опушения вкус, който определя ястието.",
      steps: [
        "Овъглете целите патладжани директно над открит газов пламък или скара, обръщайки от време на време с щипки, докато кожата почернее навсякъде, а месото се сгромоляса и омекне, 15-20 минути - това директно овъгляне придава на баба гануш опушения му вкус; фурната няма да свърши работа.",
        "Разрежете овъглените патладжани и ги оставете да се отцедят в гевгир 15-20 минути, после извадете месото с лъжица, изхвърляйки кожите и горчивата течност, която изтича.",
        "Пасирайте изцеденото месо на патладжана с тахана, лимоновия сок и чесъна до гладкост.",
        "Подправете със сол и полейте със зехтин преди сервиране.",
      ],
      ingredients: [
        "2 големи патладжана",
        "1/4 чаша тахан",
        "сок от 1 лимон",
        "2 скилидки чесън",
        "2 с.л. зехтин",
        "Сол на вкус",
      ],
    },
  },
  {
    en: {
      slug: "shawarma-chicken",
      title: "Shawarma Chicken",
      description:
        "Chicken thighs marinated for hours in spiced yogurt - the yogurt's acidity tenderizes the meat while carrying the full shawarma spice blend - then roasted until charred.",
      imageEmoji: "🌯",
      cookTimeMinutes: 45,
      servings: 4,
      ingredients: [
        { text: "1 1/2 lb chicken thighs", ingredient: "chicken thighs", quantity: 1.5 },
        { text: "1/2 cup plain yogurt", ingredient: "yogurt", quantity: 0.5 },
        { text: "3 tbsp olive oil", ingredient: "olive oil", quantity: 3 },
        { text: "3 cloves garlic, minced", ingredient: "garlic", quantity: 3 },
        { text: "2 tsp cumin", ingredient: "cumin", quantity: 2 },
        { text: "2 tsp paprika", ingredient: "paprika", quantity: 2 },
        { text: "1 tsp ground coriander", ingredient: "coriander", quantity: 1 },
        { text: "1/2 tsp turmeric", ingredient: "turmeric", quantity: 0.5 },
        { text: "1/2 tsp cinnamon", ingredient: "cinnamon", quantity: 0.5 },
        { text: "1 lemon, juiced", ingredient: "lemon", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "4 pita breads", ingredient: "pita bread", quantity: 4 },
      ],
      steps: [
        "Whisk together the yogurt, olive oil, garlic, cumin, paprika, coriander, turmeric, cinnamon, lemon juice, and salt.",
        "Marinate the chicken in the mixture, covered, in the fridge for at least 3 hours, ideally overnight.",
        "Roast or grill the chicken until charred and cooked through, about 25 minutes.",
        "Slice the chicken thin.",
        "Serve wrapped in warm pita bread with your favorite toppings.",
      ],
      tags: ["dinner", "mediterranean", "quick"],
    },
    bg: {
      title: "Пилешка Шаурма",
      description:
        "Пилешки бутчета, маринована с часове в подправено кисело мляко - киселинността на млякото омекотява месото, докато носи целия аромат на шаурма подправките - после изпечени до овъгляне.",
      steps: [
        "Разбийте киселото мляко, зехтина, чесъна, кимиона, червения пипер, кориандъра, куркумата, канелата, лимоновия сок и солта.",
        "Маринова пилето в сместа, покрито, в хладилника поне 3 часа, в идеалния случай през нощта.",
        "Изпечете пилето във фурна или на скара до овъгляне и готовност, около 25 минути.",
        "Нарежете пилето на тънко и сервирайте увито в топла пита с любимите ви добавки.",
      ],
      ingredients: [
        "700 г пилешки бутчета",
        "1/2 чаша натурално кисело мляко",
        "3 с.л. зехтин",
        "3 скилидки чесън, ситно нарязани",
        "2 ч.л. кимион",
        "2 ч.л. червен пипер",
        "1 ч.л. млян кориандър",
        "1/2 ч.л. куркума",
        "1/2 ч.л. канела",
        "сок от 1 лимон",
        "Сол на вкус",
        "4 питки",
      ],
    },
  },
  {
    en: {
      slug: "kofta-kebabs",
      title: "Kofta Kebabs",
      description:
        "Spiced ground beef skewers bound with well-squeezed grated onion and warm baharat spices, grilled until juicy and lightly charred.",
      imageEmoji: "🍢",
      cookTimeMinutes: 30,
      servings: 4,
      ingredients: [
        { text: "1 lb ground beef", ingredient: "ground beef", quantity: 1 },
        { text: "1 onion, grated and squeezed dry (liquid discarded)", ingredient: "onion", quantity: 1 },
        { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
        { text: "1 tsp cumin", ingredient: "cumin", quantity: 1 },
        { text: "1/2 tsp ground coriander", ingredient: "coriander", quantity: 0.5 },
        { text: "1/2 tsp allspice", ingredient: "allspice", quantity: 0.5 },
        { text: "1/4 tsp cinnamon", ingredient: "cinnamon", quantity: 0.25 },
        { text: "1/4 cup chopped parsley", ingredient: "parsley", quantity: 0.25 },
        { text: "Salt and pepper to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Grate the onion, then squeeze it firmly in a fine-mesh strainer or clean towel to remove as much liquid as possible - excess moisture keeps the kofta from holding its shape on the skewer.",
        "Mix the ground beef with the squeezed onion, garlic, cumin, coriander, allspice, cinnamon, parsley, salt, and pepper.",
        "Shape the mixture around skewers into long oval patties, pressing firmly so they hold together.",
        "Grill over medium-high heat for 4-5 minutes per side until cooked through.",
        "Serve hot with flatbread.",
      ],
      tags: ["dinner", "mediterranean"],
    },
    bg: {
      title: "Кофта кебап",
      description:
        "Подправени шишчета от телешка кайма, свързани с добре изцеден настърган лук и топли подправки бахарат, изпечени на скара до сочност и леко овъгляне.",
      steps: [
        "Настържете лука, после го изстискайте силно в цедка с фини дупки или чиста кърпа, за да премахнете колкото се може повече сок - излишната влага пречи на кофтата да задържи формата си на шишчето.",
        "Смесете каймата с изцедения лук, чесъна, кимиона, кориандъра, бахара, канелата, магданоза, солта и черния пипер.",
        "Оформете сместа около шишчета в дълги овални кюфтета, притискайки здраво, за да се задържат.",
        "Изпечете на скара на среден до силен огън по 4-5 минути от всяка страна до готовност. Сервирайте топло с питки хляб.",
      ],
      ingredients: [
        "450 г кайма от телешко месо (или наполовина с агнешко)",
        "1 лук, настърган и изцеден (сокът запазен)",
        "2 скилидки чесън, ситно нарязани",
        "1 ч.л. кимион",
        "1/2 ч.л. млян кориандър",
        "1/2 ч.л. бахар",
        "1/4 ч.л. канела",
        "1/4 чаша нарязан магданоз",
        "Сол и черен пипер на вкус",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
