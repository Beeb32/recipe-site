import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "caprese-salad",
      title: "Caprese Salad",
      description:
        "Fresh mozzarella, ripe tomatoes, and basil, finished simply with good olive oil and sea salt - the traditional Capri version skips the balsamic entirely, though a drizzle is a common modern addition.",
      imageEmoji: "🍅",
      cookTimeMinutes: 10,
      servings: 4,
      ingredients: [
        { text: "3 large tomatoes, sliced", ingredient: "tomato", quantity: 3 },
        { text: "8 oz fresh mozzarella (fior di latte), sliced", ingredient: "mozzarella", quantity: 8 },
        { text: "1/4 cup fresh basil leaves", ingredient: "basil", quantity: 0.25 },
        { text: "3 tbsp extra-virgin olive oil", ingredient: "olive oil", quantity: 3 },
        { text: "2 tbsp balsamic glaze (optional)", ingredient: "balsamic glaze", quantity: 2 },
        { text: "Flaky sea salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Arrange alternating slices of tomato and mozzarella on a platter.",
        "Tuck basil leaves between the slices.",
        "Sprinkle generously with sea salt and pepper, then drizzle with olive oil - this is the traditional Caprese finish.",
        "Add balsamic glaze if using, though the classic Capri version is dressed with oil and salt alone.",
      ],
      tags: ["lunch", "vegetarian", "quick", "salad", "italian"],
    },
    bg: {
      title: "Капрезе салата",
      description:
        "Прясна моцарела, узрели домати и босилек, довършени просто с добър зехтин и морска сол - традиционната версия от Капри изобщо не включва балсамов оцет, макар че поливането с него е популярно съвременно допълнение.",
      steps: [
        "Наредете последователно резени домат и моцарела върху плато.",
        "Пъхнете листа босилек между резените.",
        "Поръсете обилно с морска сол и черен пипер, после полейте със зехтин - това е традиционният финал на капрезе.",
        "Добавете балсамов гланц, ако желаете, макар че класическата версия от Капри се поднася само със зехтин и сол.",
      ],
      ingredients: [
        "3 големи домата, нарязани на резени",
        "225 г прясна моцарела (фиор ди лате), нарязана на резени",
        "1/4 чаша пресни листа босилек",
        "3 с.л. екстра върджин зехтин",
        "2 с.л. балсамов гланц (по желание)",
        "Едра морска сол на вкус",
        "Черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "bruschetta",
      title: "Bruschetta",
      description:
        "Toasted rustic bread rubbed with raw garlic while still hot, topped with salted tomatoes rested to draw out their juices, and fresh basil - the garlic goes on the bread itself, not into the topping.",
      imageEmoji: "🍅",
      cookTimeMinutes: 25,
      servings: 6,
      ingredients: [
        { text: "1 baguette (or rustic Italian loaf), sliced", ingredient: "baguette", quantity: 1 },
        { text: "4 tomatoes, diced", ingredient: "tomato", quantity: 4 },
        { text: "1/4 cup fresh basil, chopped", ingredient: "basil", quantity: 0.25 },
        { text: "2 cloves garlic, halved (for rubbing the bread)", ingredient: "garlic", quantity: 2 },
        { text: "4 tbsp olive oil (divided)", ingredient: "olive oil", quantity: 4 },
        { text: "Salt and pepper to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Toss the diced tomatoes with a good pinch of salt and 1 tablespoon of the olive oil, then let stand for 10-15 minutes to draw out their juices.",
        "Toast or grill the baguette slices until golden and lightly charred.",
        "While the bread is still hot, rub the cut side of a garlic clove firmly over each slice - this is the traditional way bruschetta gets its garlic flavor, not mixed into the topping - then drizzle with the remaining olive oil.",
        "Stir the basil into the rested tomatoes and season with pepper.",
        "Spoon the tomato mixture onto each garlic-rubbed slice and serve immediately.",
      ],
      tags: ["snack", "vegan", "vegetarian", "italian", "quick"],
    },
    bg: {
      title: "Брускета",
      description:
        "Препечен селски хляб, натрит със суров чесън докато е още горещ, покрит с подсолени домати, оставени да отделят сока си, и пресен босилек - чесънът отива върху хляба, не в плънката.",
      steps: [
        "Разбъркайте нарязаните домати с щипка сол и 1 с.л. от зехтина, после ги оставете да престоят 10-15 минути, за да отделят сока си.",
        "Препечете или изпечете на скара резените багета до златисто и леко овъглени.",
        "Докато хлябът е още горещ, натрийте разрязана скилидка чесън силно върху всеки резен - това е традиционният начин, по който брускетата получава аромата на чесън, а не като се смесва в плънката - после полейте с останалия зехтин.",
        "Разбъркайте босилека в отцедените домати и подправете с черен пипер.",
        "Сложете с лъжица доматената смес върху всеки натрит с чесън резен и сервирайте веднага.",
      ],
      ingredients: [
        "1 багета (или селски италиански хляб), нарязана",
        "4 домата, нарязани на кубчета",
        "1/4 чаша пресен босилек, нарязан",
        "2 скилидки чесън, разрязани наполовина (за натриване на хляба)",
        "4 с.л. зехтин (разделен)",
        "Сол и черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "chicken-piccata",
      title: "Chicken Piccata",
      description:
        "Pan-seared chicken cutlets in a bright lemon-caper butter sauce built on a shallot-garlic and white wine base, finished off the heat so the butter turns glossy instead of greasy.",
      imageEmoji: "🍋",
      cookTimeMinutes: 35,
      servings: 4,
      ingredients: [
        { text: "4 chicken breasts, pounded thin", ingredient: "chicken breast", quantity: 4 },
        { text: "1/2 cup flour", ingredient: "flour", quantity: 0.5 },
        { text: "Salt and pepper to taste", ingredient: "salt", quantity: null },
        { text: "2 tbsp olive oil (for searing)", ingredient: "olive oil", quantity: 2 },
        { text: "1 shallot, minced", ingredient: "shallot", quantity: 1 },
        { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
        { text: "1/4 cup dry white wine", ingredient: "white wine", quantity: 0.25 },
        { text: "1/3 cup lemon juice", ingredient: "lemon juice", quantity: 0.33 },
        { text: "1/4 cup capers", ingredient: "capers", quantity: 0.25 },
        { text: "1 cup chicken broth", ingredient: "chicken broth", quantity: 1 },
        { text: "4 tbsp butter", ingredient: "butter", quantity: 4 },
        { text: "2 tbsp chopped parsley, for garnish", ingredient: "parsley", quantity: 2 },
      ],
      steps: [
        "Season the pounded chicken with salt and pepper, then dredge in flour, shaking off the excess.",
        "Heat the olive oil in a skillet and sear the chicken until golden and cooked through; set aside.",
        "Add the shallot and garlic to the same pan and sauté for 1-2 minutes, then pour in the white wine, scraping up the browned bits, and let it reduce by about a third.",
        "Add the chicken broth, lemon juice, and capers, simmering for 3-4 minutes.",
        "Remove the pan from the heat and swirl in the butter until the sauce is glossy - adding it off the heat keeps the sauce from breaking.",
        "Return the chicken to the pan to coat in the sauce, then garnish with parsley before serving.",
      ],
      tags: ["dinner", "italian", "quick"],
    },
    bg: {
      title: "Пилешко Пиката",
      description:
        "Запържени пилешки котлети в ярък сос от масло с лимон и каперси, изграден върху основа от шалот, чесън и бяло вино, довършен извън котлона, за да стане маслото лъскаво, а не мазно.",
      steps: [
        "Подправете разбитото пиле със сол и черен пипер, после го овалайте в брашно, изтръсквайки излишното.",
        "Загрейте зехтина в тиган и запържете пилето до златисто и готовност; оставете настрана.",
        "Добавете шалота и чесъна в същия тиган и запържете 1-2 минути, после налейте бялото вино, изстъргвайки запечените парченца, и оставете да се редуцира с около трета.",
        "Добавете пилешкия бульон, лимоновия сок и каперсите, къкрете 3-4 минути.",
        "Свалете тигана от котлона и разбъркайте маслото, докато сосът стане лъскав - добавянето му извън котлона пази соса да не се разцепи.",
        "Върнете пилето в тигана, за да се покрие със соса, после гарнирайте с магданоз преди сервиране.",
      ],
      ingredients: [
        "4 пилешки гърди, разбити тънко",
        "1/2 чаша брашно",
        "Сол и черен пипер на вкус",
        "2 с.л. зехтин (за запържване)",
        "1 шалот, ситно нарязан",
        "2 скилидки чесън, ситно нарязани",
        "1/4 чаша сухо бяло вино",
        "1/3 чаша лимонов сок",
        "1/4 чаша каперси",
        "1 чаша пилешки бульон",
        "4 с.л. масло",
        "2 с.л. нарязан магданоз, за гарниране",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
