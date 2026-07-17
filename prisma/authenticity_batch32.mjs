import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "mujadara",
      title: "Mujadara",
      description:
        "Lentils and rice cooked in the flavorful oil left from frying the onions, topped with a portion of those onions fried extra crispy - using the onion oil to cook the grains, not just plain water, is what makes real mujadara taste the way it does.",
      imageEmoji: "🍚",
      cookTimeMinutes: 60,
      servings: 4,
      ingredients: [
        { text: "1 cup brown lentils", ingredient: "lentils", quantity: 1 },
        { text: "1 cup rice", ingredient: "rice", quantity: 1 },
        { text: "3 onions, thinly sliced", ingredient: "onion", quantity: 3 },
        { text: "1/2 cup olive oil", ingredient: "olive oil", quantity: 0.5 },
        { text: "1 tsp cumin", ingredient: "cumin", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "2 tbsp chopped parsley, for garnish", ingredient: "parsley", quantity: 2 },
      ],
      steps: [
        "Simmer the lentils in salted water for 10 minutes until just par-boiled, then drain, reserving a little of the cooking water.",
        "Heat the olive oil in a skillet and fry the onions over medium-high heat, tossing occasionally, until deeply golden and crispy, about 15-20 minutes; transfer to a paper-towel-lined plate, reserving the flavorful onion oil.",
        "Cook the rice with the par-boiled lentils, cumin, salt, and enough water (using the reserved onion oil in place of some of the water or oil) until tender.",
        "Let sit undisturbed for 10 minutes, then garnish with parsley and top with the crispy onions before serving.",
      ],
      tags: ["dinner", "vegan", "vegetarian", "mediterranean"],
    },
    bg: {
      title: "Муджадара",
      description:
        "Леща и ориз, сготвени в ароматния зехтин, останал от запържването на лука, покрити с част от този лук, изпържен допълнително хрупкав - готвенето на зърната в лучевото олио, а не просто във вода, е това, което придава на истинската муджадара характерния й вкус.",
      steps: [
        "Варете лещата в подсолена вода 10 минути до полуготовност, после отцедете, запазвайки малко от отварата.",
        "Загрейте зехтина в тиган и изпържете лука на среден до силен огън, разбърквайки от време на време, докато стане дълбоко златист и хрупкав, около 15-20 минути; прехвърлете на хартиена кърпа, запазвайки ароматното лучево олио.",
        "Сгответе ориза с полуготовата леща, кимиона, солта и достатъчно вода (използвайки запазеното лучево олио вместо част от водата или олиото) до омекване.",
        "Оставете да престои непобъркано 10 минути, после гарнирайте с магданоз и отгоре добавете хрупкавия лук преди сервиране.",
      ],
      ingredients: [
        "1 чаша кафява леща",
        "1 чаша ориз",
        "3 лука, нарязани на тънко",
        "1/2 чаша зехтин",
        "1 ч.л. кимион",
        "Сол на вкус",
        "2 с.л. нарязан магданоз, за гарниране",
      ],
    },
  },
  {
    en: {
      slug: "zaatar-flatbread",
      title: "Za'atar Flatbread",
      description:
        "Soft flatbread dimpled with fingertips before baking so the olive oil-za'atar topping settles into the dough instead of running off - the dimpling technique is what gives manakish its name and its signature texture.",
      imageEmoji: "🫓",
      cookTimeMinutes: 40,
      servings: 6,
      ingredients: [
        { text: "3 cups flour", ingredient: "flour", quantity: 3 },
        { text: "1 tsp yeast", ingredient: "yeast", quantity: 1 },
        { text: "1 cup warm water", ingredient: "water", quantity: 1 },
        { text: "1 tsp salt", ingredient: "salt", quantity: 1 },
        { text: "1/4 cup olive oil (for the dough and topping, divided)", ingredient: "olive oil", quantity: 0.25 },
        { text: "1/3 cup za'atar spice blend", ingredient: "zaatar", quantity: 0.33 },
      ],
      steps: [
        "Mix the flour, yeast, salt, and warm water into a soft dough with a splash of the olive oil; knead for 5 minutes.",
        "Let rise for 45 minutes until doubled.",
        "Divide into rounds and roll out about 1/4-inch thick, then press your fingertips firmly all over the surface to make dimples - this keeps the topping from running off and stops the dough from puffing up too much in the oven.",
        "Mix the remaining olive oil with the za'atar (about equal parts by volume) and spread generously over each round, letting it pool into the dimples.",
        "Bake at 450°F for 10-12 minutes until golden.",
      ],
      tags: ["snack", "vegan", "vegetarian", "mediterranean", "baking"],
    },
    bg: {
      title: "Питка със заатар",
      description:
        "Мека питка, набраздена с пръсти преди печене, за да попие сместа от зехтин и заатар в тестото, вместо да изтече - техниката на набраздяване е това, което придава на манакиша името и характерната му текстура.",
      steps: [
        "Смесете брашното, маята, солта и топлата вода в меко тесто с малко от зехтина; месете 5 минути.",
        "Оставете да втаса 45 минути, докато удвои обема си.",
        "Разделете на кръгчета и разточете около 0.5 см дебелина, после натиснете пръстите си силно по цялата повърхност, за да направите вдлъбнатини - това пази плънката да не изтича и спира тестото да се издуе прекалено много във фурната.",
        "Смесете останалия зехтин със заатара (приблизително равни части по обем) и намажете обилно всяко кръгче, оставяйки сместа да се събере във вдлъбнатините.",
        "Печете на 230°C 10-12 минути до златисто.",
      ],
      ingredients: [
        "3 чаши брашно",
        "1 ч.л. мая",
        "1 чаша топла вода",
        "1 ч.л. сол",
        "1/4 чаша зехтин (за тестото и плънката, разделен)",
        "1/3 чаша подправка заатар",
      ],
    },
  },
  {
    en: {
      slug: "muhammara",
      title: "Muhammara",
      description:
        "A smoky roasted red pepper and toasted walnut dip sharpened with Aleppo pepper, garlic, cumin, and pomegranate molasses - Aleppo pepper is the ingredient that gives muhammara its signature gentle heat and fruity depth, and toasting the walnuts first keeps them from tasting waxy.",
      imageEmoji: "🌶️",
      cookTimeMinutes: 30,
      servings: 6,
      ingredients: [
        { text: "3 red bell peppers, roasted", ingredient: "red pepper", quantity: 3 },
        { text: "1 cup walnuts, toasted", ingredient: "walnuts", quantity: 1 },
        { text: "2 cloves garlic", ingredient: "garlic", quantity: 2 },
        { text: "2 tbsp pomegranate molasses", ingredient: "pomegranate molasses", quantity: 2 },
        { text: "1 tbsp lemon juice", ingredient: "lemon juice", quantity: 1 },
        { text: "1 tbsp Aleppo pepper (or 1 tsp red pepper flakes plus a pinch of paprika)", ingredient: "aleppo pepper", quantity: 1 },
        { text: "1/2 tsp cumin", ingredient: "cumin", quantity: 0.5 },
        { text: "1/2 cup breadcrumbs", ingredient: "breadcrumbs", quantity: 0.5 },
        { text: "3 tbsp olive oil", ingredient: "olive oil", quantity: 3 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Toast the walnuts in a dry pan for 3-4 minutes until fragrant - this keeps them from tasting waxy or bitter.",
        "Blend the roasted peppers, toasted walnuts, garlic, pomegranate molasses, lemon juice, Aleppo pepper, cumin, and breadcrumbs until mostly smooth but still a little chunky.",
        "Stream in the olive oil while blending until creamy, then season with salt.",
        "Chill before serving.",
        "Serve with pita bread or vegetables.",
      ],
      tags: ["snack", "vegan", "vegetarian", "mediterranean"],
    },
    bg: {
      title: "Мухамара",
      description:
        "Опушен сос от печени червени чушки и препечени орехи, изострен с алепски пипер, чесън, кимион и нар меласа - алепският пипер е подправката, която придава на мухамарата характерната й мека лютивина и плодова дълбочина, а препичането на орехите ги пази от восъчен вкус.",
      steps: [
        "Препечете орехите в сух тиган 3-4 минути до ароматизиране - това ги пази от восъчен или горчив вкус.",
        "Пасирайте печените чушки, препечените орехи, чесъна, нар меласата, лимоновия сок, алепския пипер, кимиона и галетата до почти гладка, но леко на бучки смес.",
        "Наливайте зехтина по време на пасиране до кремообразност, после подправете със сол.",
        "Охладете преди сервиране.",
        "Сервирайте с пита или зеленчуци.",
      ],
      ingredients: [
        "3 червени чушки, изпечени",
        "1 чаша орехи, препечени",
        "2 скилидки чесън",
        "2 с.л. нар меласа",
        "1 с.л. лимонов сок",
        "1 с.л. алепски пипер (или 1 ч.л. люспи лют пипер плюс щипка червен пипер на прах)",
        "1/2 ч.л. кимион",
        "1/2 чаша галета",
        "3 с.л. зехтин",
        "Сол на вкус",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
