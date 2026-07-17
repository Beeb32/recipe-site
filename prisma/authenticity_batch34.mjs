import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "moroccan-chicken-tagine",
      title: "Moroccan Chicken Tagine",
      description:
        "Chicken browned then slow-simmered with garlic, ginger, saffron, and preserved lemon alongside apricots and olives - preserved lemon is the salty, intensely citrusy ingredient real tagine can't be made without, and fresh lemon isn't a substitute.",
      imageEmoji: "🍗",
      cookTimeMinutes: 70,
      servings: 4,
      ingredients: [
        { text: "4 chicken thighs", ingredient: "chicken thighs", quantity: 4 },
        { text: "1 onion, grated", ingredient: "onion", quantity: 1 },
        { text: "4 cloves garlic, minced", ingredient: "garlic", quantity: 4 },
        { text: "1 tbsp grated ginger", ingredient: "ginger", quantity: 1 },
        { text: "2 tsp ras el hanout", ingredient: "ras el hanout", quantity: 2 },
        { text: "1 tsp ground cumin", ingredient: "cumin", quantity: 1 },
        { text: "1 tsp paprika", ingredient: "paprika", quantity: 1 },
        { text: "1/2 tsp turmeric", ingredient: "turmeric", quantity: 0.5 },
        { text: "Pinch of saffron threads, bloomed in 1 tbsp hot water", ingredient: "saffron", quantity: null },
        { text: "2 tbsp olive oil", ingredient: "olive oil", quantity: 2 },
        { text: "1/2 cup dried apricots", ingredient: "dried apricots", quantity: 0.5 },
        { text: "1/2 cup green olives", ingredient: "olives", quantity: 0.5 },
        { text: "1 preserved lemon, pulp removed, rind sliced", ingredient: "preserved lemon", quantity: 1 },
        { text: "2 cups chicken broth", ingredient: "chicken broth", quantity: 2 },
        { text: "2 tbsp chopped cilantro, for garnish", ingredient: "cilantro", quantity: 2 },
      ],
      steps: [
        "Rub the chicken thighs with the grated onion, garlic, ginger, ras el hanout, cumin, paprika, and turmeric; marinate for at least 1 hour, ideally overnight.",
        "Heat the olive oil in a large pot or tagine and brown the chicken on both sides, 3-4 minutes per side, then set aside.",
        "Add the bloomed saffron with its soaking water, apricots, olives, preserved lemon rind, and chicken broth to the pot, then return the chicken.",
        "Cover tightly and simmer over low heat for 40 minutes until the chicken is tender and the sauce is fragrant.",
        "Garnish with cilantro before serving.",
      ],
      tags: ["dinner", "mediterranean"],
    },
    bg: {
      title: "Марокански пилешки тажин",
      description:
        "Пиле, запържено и после бавно варено с чесън, джинджифил, шафран и консервиран лимон заедно с кайсии и маслини - консервираният лимон е соленото, интензивно цитрусово съставка, без която истинският тажин не може да се направи, и пресен лимон не е заместител.",
      steps: [
        "Натъркайте пилешките бутчета с настъргания лук, чесъна, джинджифила, рас ел ханут, кимиона, червения пипер и куркумата; маринова поне 1 час, в идеалния случай през нощта.",
        "Загрейте зехтина в голяма тенджера или тажин и запържете пилето от двете страни, по 3-4 минути от всяка, после отделете настрани.",
        "Добавете разтворения шафран с водата, в която е накиснат, кайсиите, маслините, кората на консервирания лимон и пилешкия бульон в тенджерата, после върнете пилето.",
        "Покрийте плътно и варете на слаб огън 40 минути, докато пилето омекне и сосът стане ароматен.",
        "Гарнирайте с кориандър преди сервиране.",
      ],
      ingredients: [
        "4 пилешки бутчета",
        "1 лук, настърган",
        "4 скилидки чесън, ситно нарязани",
        "1 с.л. настърган джинджифил",
        "2 ч.л. рас ел ханут",
        "1 ч.л. смлян кимион",
        "1 ч.л. червен пипер",
        "1/2 ч.л. куркума",
        "Щипка нишки шафран, разтворени в 1 с.л. гореща вода",
        "2 с.л. зехтин",
        "1/2 чаша сушени кайсии",
        "1/2 чаша зелени маслини",
        "1 консервиран лимон, без пулпата, кората нарязана",
        "2 чаши пилешки бульон",
        "2 с.л. нарязан кориандър, за гарниране",
      ],
    },
  },
  {
    en: {
      slug: "ethiopian-lentil-stew",
      title: "Ethiopian Lentil Stew",
      description:
        "Onions cooked low and slow until deeply softened before the berbere and garlic-ginger go in, then simmered with red lentils - the long, patient onion cook is the technique real misir wot is built on, not just a quick sauté.",
      imageEmoji: "🍲",
      cookTimeMinutes: 65,
      servings: 4,
      ingredients: [
        { text: "2 cups red lentils", ingredient: "lentils", quantity: 2 },
        { text: "1 onion, finely diced", ingredient: "onion", quantity: 1 },
        { text: "3 cloves garlic, minced", ingredient: "garlic", quantity: 3 },
        { text: "1 tbsp grated ginger", ingredient: "ginger", quantity: 1 },
        { text: "2 tbsp vegetable oil (or niter kibbeh/butter for a traditional finish)", ingredient: "vegetable oil", quantity: 2 },
        { text: "2 tbsp berbere spice blend", ingredient: "berbere", quantity: 2 },
        { text: "1 tbsp tomato paste", ingredient: "tomato paste", quantity: 1 },
        { text: "1 can diced tomatoes", ingredient: "tomato", quantity: 1 },
        { text: "4 cups vegetable broth", ingredient: "vegetable broth", quantity: 4 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Cook the onion in a dry pot (no oil yet) over medium-low heat, stirring occasionally, for 15-20 minutes until deeply softened and starting to turn golden - this long, patient cook is what real misir wot's flavor base is built on.",
        "Add the oil, garlic, and ginger, and cook for 2 minutes until fragrant.",
        "Stir in the berbere and tomato paste and cook for 1-2 minutes until deeply fragrant.",
        "Add the diced tomatoes, lentils, and vegetable broth.",
        "Simmer for 25-30 minutes until the lentils are tender and thickened, then season with salt.",
      ],
      tags: ["dinner", "vegan", "vegetarian"],
    },
    bg: {
      title: "Етиопска яхния от леща",
      description:
        "Лук, готвен бавно и постепенно, докато омекне дълбоко, преди да се добавят бербере, чесън и джинджифил, после сготвен с червена леща - дългото, търпеливо готвене на лука е техниката, върху която е изградено истинското мисир уот, не просто бързо запържване.",
      steps: [
        "Гответе лука в суха тенджера (без олио засега) на среден до слаб огън, разбърквайки от време на време, 15-20 минути, докато омекне дълбоко и започне да пожълтява - това дълго, търпеливо готвене е това, върху което е изграден вкусът на истинското мисир уот.",
        "Добавете олиото, чесъна и джинджифила и гответе 2 минути до ароматизиране.",
        "Разбъркайте бербере и доматеното пюре и гответе 1-2 минути до дълбоко ароматизиране.",
        "Добавете нарязаните домати, лещата и зеленчуковия бульон.",
        "Варете 25-30 минути, докато лещата омекне и се сгъсти, после подправете със сол.",
      ],
      ingredients: [
        "2 чаши червена леща",
        "1 лук, ситно нарязан",
        "3 скилидки чесън, ситно нарязани",
        "1 с.л. настърган джинджифил",
        "2 с.л. олио (или нитер кибе/масло за традиционен финал)",
        "2 с.л. подправка бербере",
        "1 с.л. доматено пюре",
        "1 консерва нарязани домати",
        "4 чаши зеленчуков бульон",
        "Сол на вкус",
      ],
    },
  },
  {
    en: {
      slug: "peri-peri-chicken",
      title: "Peri Peri Chicken",
      description:
        "Chicken marinated in a blended fresh sauce of bird's eye chilies, garlic, paprika, oregano, lemon, and vinegar - the fresh chili-garlic blend, not a bottled sauce, is what real peri-peri is built on.",
      imageEmoji: "🌶️",
      cookTimeMinutes: 280,
      servings: 4,
      ingredients: [
        { text: "4 chicken leg quarters", ingredient: "chicken", quantity: 4 },
        { text: "4-6 bird's eye chilies (piri piri chilies), stemmed", ingredient: "birds eye chili", quantity: 4 },
        { text: "4 cloves garlic", ingredient: "garlic", quantity: 4 },
        { text: "1 tbsp paprika", ingredient: "paprika", quantity: 1 },
        { text: "1 tsp dried oregano", ingredient: "oregano", quantity: 1 },
        { text: "2 tbsp red wine vinegar", ingredient: "red wine vinegar", quantity: 2 },
        { text: "1 lemon, juiced", ingredient: "lemon", quantity: 1 },
        { text: "3 tbsp olive oil", ingredient: "olive oil", quantity: 3 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Blend the chilies, garlic, paprika, oregano, vinegar, lemon juice, olive oil, and salt until smooth - this fresh-blended sauce, not a bottled one, is what real peri-peri is built on.",
        "Make shallow cuts in the chicken for better absorption, then coat thoroughly with the marinade.",
        "Marinate for at least 4 hours, ideally overnight.",
        "Grill over medium heat, turning occasionally, for 35-40 minutes until cooked through.",
        "Brush with extra sauce before serving.",
      ],
      tags: ["dinner"],
    },
    bg: {
      title: "Пиле Пери Пери",
      description:
        "Пиле, маринована в прясно пасиран сос от люти чушки бърдс ай, чесън, червен пипер, риган, лимон и оцет - прясно пасираният сос от чушки и чесън, а не бутилиран сос, е това, върху което е изградено истинското пери-пери.",
      steps: [
        "Пасирайте лютите чушки, чесъна, червения пипер, ригана, оцета, лимоновия сок, зехтина и солта до гладкост - този прясно пасиран сос, а не бутилиран, е това, върху което е изградено истинското пери-пери.",
        "Направете плитки разрези в пилето за по-добро попиване, после покрийте обилно с маринатата.",
        "Маринова поне 4 часа, в идеалния случай през нощта.",
        "Изпечете на скара на среден огън, обръщайки от време на време, 35-40 минути до готовност.",
        "Намажете с допълнителен сос преди сервиране.",
      ],
      ingredients: [
        "4 пилешки бутчета с кълка",
        "4-6 люти чушки бърдс ай (пири пири чушки), без дръжки",
        "4 скилидки чесън",
        "1 с.л. червен пипер",
        "1 ч.л. сух риган",
        "2 с.л. червен винен оцет",
        "сок от 1 лимон",
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
