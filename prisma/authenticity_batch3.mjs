import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "bob-chorba",
      title: "Bob Chorba",
      description:
        "A hearty Bulgarian bean soup built on a sautéed vegetable zaprazhka of onion, carrot, and pepper, finished with paprika, dried spearmint, and tomato.",
      imageEmoji: "🍲",
      cookTimeMinutes: 90,
      servings: 6,
      ingredients: [
        { text: "1 1/4 cups dried white beans, soaked overnight", ingredient: "white beans", quantity: 1.25 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "1 carrot, diced", ingredient: "carrot", quantity: 1 },
        { text: "1 green bell pepper, diced", ingredient: "green pepper", quantity: 1 },
        { text: "2 tomatoes, diced", ingredient: "tomato", quantity: 2 },
        { text: "4 tbsp sunflower oil, divided", ingredient: "sunflower oil", quantity: 4 },
        { text: "1 1/2 tbsp paprika", ingredient: "paprika", quantity: 1.5 },
        { text: "2 tsp dried spearmint", ingredient: "spearmint", quantity: 2 },
        { text: "Salt and black pepper to taste", ingredient: "salt", quantity: null },
        { text: "Fresh parsley, chopped, for serving", ingredient: "parsley", quantity: null },
      ],
      steps: [
        "Drain the soaked beans, cover with fresh water, and bring to a boil; after 5 minutes, discard the water again, leaving just the beans.",
        "Add 2 tbsp of the oil to the beans, fry for 2 minutes stirring constantly, then cover with fresh water and simmer for about 45 minutes until the beans begin to soften.",
        "Meanwhile, make the zaprazhka: sauté the onion and carrot in the remaining oil for 8 minutes, then add the bell pepper, tomatoes, paprika, and spearmint and cook for another 5 minutes.",
        "Stir the vegetable mixture into the beans, season with salt and pepper, and simmer for 20 more minutes until the beans are fully cooked but still whole; serve hot topped with parsley.",
      ],
      tags: ["dinner", "vegan", "vegetarian"],
    },
    bg: {
      title: "Боб чорба",
      description:
        "Ситна българска боб чорба на основа от запържени лук, моркови и чушки, довършена с червен пипер, сушена мента и домат.",
      steps: [
        "Отцедете накиснатия боб, залейте с прясна вода и доведете до кипене; след 5 минути изхвърлете водата отново, оставяйки само боба.",
        "Добавете 2 с.л. от олиото към боба, запържете 2 минути, разбърквайки постоянно, после залейте с прясна вода да покрие и варете около 45 минути, докато бобът започне да омеква.",
        "Междувременно направете запръжката: запържете лука и моркова в останалото олио 8 минути, после добавете чушката, доматите, червения пипер и ментата и гответе още 5 минути.",
        "Разбъркайте зеленчуковата смес в боба, подправете със сол и черен пипер и варете още 20 минути, докато бобът се сготви напълно, но остане цял; сервирайте топло с магданоз отгоре.",
      ],
      ingredients: [
        "1 1/4 чаши сух бял боб, накиснат през нощта",
        "1 лук, нарязан на кубчета",
        "1 морков, нарязан на кубчета",
        "1 зелена чушка, нарязана на кубчета",
        "2 домата, нарязани на кубчета",
        "4 с.л. слънчогледово олио, разделено",
        "1 1/2 с.л. червен пипер",
        "2 ч.л. сушена мента",
        "Сол и черен пипер на вкус",
        "Пресен магданоз, нарязан, за поднасяне",
      ],
    },
  },
  {
    en: {
      slug: "bulgarian-musaka",
      title: "Bulgarian Musaka",
      description:
        "A baked casserole of cubed potatoes and spiced pork and beef, topped with a light, tangy yogurt-egg custard leavened with baking soda.",
      imageEmoji: "🥘",
      cookTimeMinutes: 90,
      servings: 6,
      ingredients: [
        { text: "1 lb ground pork and beef mix", ingredient: "ground meat", quantity: 1 },
        { text: "4 potatoes, peeled and cut into small cubes", ingredient: "potato", quantity: 4 },
        { text: "1 carrot, diced", ingredient: "carrot", quantity: 1 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "2 tomatoes, diced", ingredient: "tomato", quantity: 2 },
        { text: "4 tbsp sunflower oil, divided", ingredient: "sunflower oil", quantity: 4 },
        { text: "1 tsp chubritsa (Bulgarian savory)", ingredient: "chubritsa", quantity: 1 },
        { text: "1 tbsp fresh parsley, chopped", ingredient: "parsley", quantity: 1 },
        { text: "Salt and black pepper to taste", ingredient: "salt", quantity: null },
        { text: "3 eggs", ingredient: "eggs", quantity: 3 },
        { text: "1 1/4 cups plain yogurt", ingredient: "yogurt", quantity: 1.25 },
        { text: "2 tbsp flour", ingredient: "flour", quantity: 2 },
        { text: "Pinch of baking soda", ingredient: "baking soda", quantity: null },
      ],
      steps: [
        "Preheat oven to 350°F. Sauté the onion, potatoes, and carrot in half the oil until softened and golden at the edges.",
        "Spread the tomatoes in the bottom of a baking dish, top with the sautéed vegetables, and bake until most of the liquid evaporates, about 20 minutes.",
        "Meanwhile, sauté the ground meat in the remaining oil until browned, then season with salt, pepper, chubritsa, and parsley; combine with the baked potatoes.",
        "Whisk the baking soda into the yogurt until bubbly, then beat in the eggs and flour; pour evenly over the meat and potatoes and bake for 10-15 minutes until golden on top.",
      ],
      tags: ["dinner"],
    },
    bg: {
      title: "Българска мусака",
      description:
        "Печена гювеч от нарязани на кубчета картофи и подправена кайма от свинско и телешко месо, залята с лек, кисел крем от кисело мляко и яйца, втасал със сода бикарбонат.",
      steps: [
        "Загрейте фурната на 180°C. Запържете лука, картофите и моркова в половината олио, докато омекнат и леко позлатеят по краищата.",
        "Разстелете доматите на дъното на тава, отгоре сложете запържените зеленчуци и печете, докато по-голямата част от течността се изпари, около 20 минути.",
        "Междувременно запържете каймата в останалото олио до запичане, после подправете със сол, черен пипер, чубрица и магданоз; смесете с изпечените картофи.",
        "Разбийте содата бикарбонат в киселото мляко, докато се разпени, после разбийте яйцата и брашното; залейте равномерно върху месото и картофите и печете 10-15 минути до златисто отгоре.",
      ],
      ingredients: [
        "450 г кайма от свинско и телешко месо",
        "4 картофа, обелени и нарязани на дребни кубчета",
        "1 морков, нарязан на кубчета",
        "1 лук, нарязан на кубчета",
        "2 домата, нарязани на кубчета",
        "4 с.л. слънчогледово олио, разделено",
        "1 ч.л. чубрица",
        "1 с.л. пресен магданоз, нарязан",
        "Сол и черен пипер на вкус",
        "3 яйца",
        "1 1/4 чаши натурално кисело мляко",
        "2 с.л. брашно",
        "Щипка сода бикарбонат",
      ],
    },
  },
  {
    en: {
      slug: "snezhanka-salad",
      title: "Snezhanka Salad",
      description:
        "A creamy, garlicky Bulgarian salad of strained yogurt and squeezed cucumber, named for its snow-white color - light and refreshing.",
      imageEmoji: "🥒",
      cookTimeMinutes: 75,
      servings: 4,
      ingredients: [
        { text: "3 cups strained (thick) yogurt", ingredient: "yogurt", quantity: 3 },
        { text: "1 cucumber, peeled, grated, and squeezed dry", ingredient: "cucumber", quantity: 1 },
        { text: "1/2 tbsp garlic, minced", ingredient: "garlic", quantity: 0.5 },
        { text: "1 tbsp fresh dill, chopped", ingredient: "dill", quantity: 1 },
        { text: "2 tbsp walnuts, crushed", ingredient: "walnuts", quantity: 2 },
        { text: "1 tbsp olive oil", ingredient: "olive oil", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "If needed, strain the yogurt through cheesecloth until it loses about a third of its volume and becomes very thick.",
        "Squeeze the grated cucumber firmly in a clean towel to remove as much water as possible, then stir it into the yogurt with the garlic, dill, olive oil, and salt.",
        "Cover and refrigerate for at least 1 hour, ideally overnight, so the flavors meld.",
        "Top with crushed walnuts just before serving.",
      ],
      tags: ["lunch", "vegetarian", "quick", "salad"],
    },
    bg: {
      title: "Снежанка салата",
      description:
        "Кремообразна българска салата от прецедено кисело мляко и изцедена краставица, наречена на бялото си като сняг оцветяване - лека и освежаваща.",
      steps: [
        "При нужда прецедете киселото мляко през марля, докато загуби около една трета от обема си и стане много гъсто.",
        "Изцедете настърганата краставица силно в чиста кърпа, за да премахнете колкото се може повече вода, после я разбъркайте в киселото мляко заедно с чесъна, копъра, зехтина и солта.",
        "Покрийте и оставете в хладилника поне 1 час, в идеалния случай през нощта, за да се смесят ароматите.",
        "Поръсете с натрошени орехи точно преди сервиране.",
      ],
      ingredients: [
        "3 чаши прецедено (гъсто) кисело мляко",
        "1 краставица, обелена, настъргана и изцедена",
        "1/2 с.л. чесън, ситно нарязан",
        "1 с.л. пресен копър, нарязан",
        "2 с.л. натрошени орехи",
        "1 с.л. зехтин",
        "Сол на вкус",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
