import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "shopska-salad",
      title: "Shopska Salad",
      description:
        "Bulgaria's national salad of tomatoes, cucumbers, and peppers, salted to draw out their juices and topped with grated sirene (Bulgarian white cheese).",
      imageEmoji: "🥗",
      cookTimeMinutes: 15,
      servings: 4,
      ingredients: [
        { text: "4 tomatoes, cut into bite-sized pieces", ingredient: "tomato", quantity: 4 },
        { text: "2 cucumbers, thinly sliced", ingredient: "cucumber", quantity: 2 },
        { text: "1 green bell pepper, sliced into rings", ingredient: "green pepper", quantity: 1 },
        { text: "1/2 red onion, thinly sliced", ingredient: "red onion", quantity: 0.5 },
        { text: "1 tsp salt", ingredient: "salt", quantity: 1 },
        { text: "3 tbsp sunflower oil", ingredient: "sunflower oil", quantity: 3 },
        { text: "1 tbsp vinegar", ingredient: "vinegar", quantity: 1 },
        { text: "1 cup grated sirene (Bulgarian white cheese)", ingredient: "sirene", quantity: 1 },
        { text: "2 tbsp chopped parsley", ingredient: "parsley", quantity: 2 },
      ],
      steps: [
        "Combine the tomatoes, cucumbers, pepper, onion, and parsley in a large bowl.",
        "Sprinkle with the salt and let stand for 10 minutes - this draws out the vegetables' juices, which become the base of the dressing.",
        "Add the vinegar and sunflower oil, then toss gently.",
        "Divide among plates or serve in one large bowl, then generously grate the sirene over the top just before serving - never mix the cheese in.",
      ],
      tags: ["lunch", "vegetarian", "quick", "salad"],
    },
    bg: {
      title: "Шопска салата",
      description:
        "Националната салата на България - домати, краставици и чушки, посолени, за да пуснат сок, и поръсени с настъргано сирене.",
      steps: [
        "Смесете доматите, краставиците, чушката, лука и магданоза в голяма купа.",
        "Поръсете със солта и оставете да престои 10 минути - това изважда сока от зеленчуците, който става основа на дресинга.",
        "Добавете оцета и слънчогледовото олио, после разбъркайте внимателно.",
        "Разпределете в чинии или сервирайте в една голяма купа, после настържете обилно сиренето отгоре точно преди сервиране - никога не разбърквайте сиренето в салатата.",
      ],
      ingredients: [
        "4 домата, нарязани на едри парчета",
        "2 краставици, нарязани на тънки резени",
        "1 зелена чушка, нарязана на ленти",
        "1/2 червен лук, нарязан на тънко",
        "1 ч.л. сол",
        "3 с.л. слънчогледово олио",
        "1 с.л. оцет",
        "1 чаша настъргано сирене",
        "2 с.л. нарязан магданоз",
      ],
    },
  },
  {
    en: {
      slug: "banitsa",
      title: "Banitsa",
      description:
        "A traditional Bulgarian pastry of phyllo sheets rolled into spirals around a tangy filling of eggs, yogurt, and sirene, then coiled into a pan and baked until golden.",
      imageEmoji: "🥧",
      cookTimeMinutes: 80,
      servings: 8,
      ingredients: [
        { text: "4 eggs", ingredient: "eggs", quantity: 4 },
        { text: "2 cups plain yogurt (preferably thick Bulgarian-style)", ingredient: "yogurt", quantity: 2 },
        { text: "12 oz (340g) crumbled sirene (Bulgarian white cheese)", ingredient: "sirene", quantity: 12 },
        { text: "1/2 tsp baking soda", ingredient: "baking soda", quantity: 0.5 },
        { text: "1 lb (450g) phyllo dough sheets, thawed", ingredient: "phyllo dough", quantity: 1 },
        { text: "3/4 cup melted butter", ingredient: "butter", quantity: 0.75 },
      ],
      steps: [
        "Preheat oven to 375°F and butter a round baking pan or springform pan.",
        "Beat the eggs and yogurt together until smooth, then whisk in the crumbled sirene and baking soda - the baking soda reacts with the yogurt to lighten the filling.",
        "Brush one sheet of phyllo with melted butter, spread a thin line of the filling along one long edge, then roll it up loosely into a rope.",
        "Coil the rope around the edge of the pan, spiraling inward with each additional rolled sheet, then brush the top with butter and bake for 45-60 minutes until golden brown; rest covered for 10-15 minutes before serving.",
      ],
      tags: ["breakfast", "vegetarian", "baking"],
    },
    bg: {
      title: "Баница",
      description:
        "Традиционен български сладкиш от кори, навити на спирала около плънка от яйца, кисело мляко и сирене, увити на руло в тава и изпечени до златисто.",
      steps: [
        "Загрейте фурната на 190°C и намажете с масло кръгла тава или тава с падащо дъно.",
        "Разбийте яйцата и киселото мляко до гладкост, после вмъкнете натрошеното сирене и содата бикарбонат - содата реагира с киселото мляко и олеква плънката.",
        "Намажете една кора с разтопено масло, разстелете тънка ивица от плънката по единия дълъг край, после навийте хлабаво на руло.",
        "Навийте рулото на спирала около ръба на тавата, продължавайки навътре с всяка следваща навита кора, после намажете отгоре с масло и печете 45-60 минути до златисто; оставете покрито да почине 10-15 минути преди сервиране.",
      ],
      ingredients: [
        "4 яйца",
        "2 чаши натурално кисело мляко (за предпочитане гъсто, българско)",
        "340 г натрошено сирене",
        "1/2 ч.л. сода бикарбонат",
        "450 г кори за баница, размразени",
        "3/4 чаша разтопено масло",
      ],
    },
  },
  {
    en: {
      slug: "tarator",
      title: "Tarator",
      description:
        "A chilled Bulgarian soup of yogurt, cucumber, garlic, and dill, finished with toasted walnuts - refreshing on a hot day.",
      imageEmoji: "🥒",
      cookTimeMinutes: 45,
      servings: 4,
      ingredients: [
        { text: "3 cups plain yogurt", ingredient: "yogurt", quantity: 3 },
        { text: "1 cup cold water", ingredient: "water", quantity: 1 },
        { text: "2 cucumbers, finely diced", ingredient: "cucumber", quantity: 2 },
        { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
        { text: "1/4 cup chopped fresh dill", ingredient: "dill", quantity: 0.25 },
        { text: "3 tbsp sunflower oil", ingredient: "sunflower oil", quantity: 3 },
        { text: "1/4 cup walnuts, chopped and lightly toasted, divided", ingredient: "walnuts", quantity: 0.25 },
        { text: "Salt and black pepper to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Whisk the yogurt until smooth, then gradually add the cold water to reach a pourable consistency.",
        "Stir in the cucumber, garlic, half the walnuts, and dill.",
        "Drizzle with sunflower oil and season with salt and pepper, then chill for at least 30 minutes.",
        "Serve cold, topped with the remaining walnuts and a drizzle of oil.",
      ],
      tags: ["lunch", "vegetarian", "quick"],
    },
    bg: {
      title: "Таратор",
      description:
        "Студена българска супа от кисело мляко, краставица, чесън и копър, довършена с препечени орехи - освежаваща в горещ ден.",
      steps: [
        "Разбийте киселото мляко до гладкост, после постепенно добавяйте студената вода, докато достигнете течна консистенция.",
        "Разбъркайте краставицата, чесъна, половината орехи и копъра.",
        "Полейте със слънчогледово олио и подправете със сол и черен пипер, после оставете да се охлади поне 30 минути.",
        "Сервирайте студено, поръсено с останалите орехи и малко олио.",
      ],
      ingredients: [
        "3 чаши натурално кисело мляко",
        "1 чаша студена вода",
        "2 краставици, ситно нарязани",
        "2 скилидки чесън, ситно нарязани",
        "1/4 чаша нарязан пресен копър",
        "3 с.л. слънчогледово олио",
        "1/4 чаша орехи, нарязани и леко препечени, разделени на две части",
        "Сол и черен пипер на вкус",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
