import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "homemade-granola",
      title: "Homemade Granola",
      description:
        "Oats and nuts baked with honey until golden and crunchy, pressed firmly onto the pan and left undisturbed as it cools - stirring granola right after baking is why most homemade batches turn out loose and crumbly instead of clustery, and a pinch of salt and vanilla round out the sweetness.",
      imageEmoji: "🥣",
      cookTimeMinutes: 40,
      servings: 8,
      ingredients: [
        { text: "3 cups rolled oats", ingredient: "oats", quantity: 3 },
        { text: "1 cup chopped almonds", ingredient: "almonds", quantity: 1 },
        { text: "1/2 cup honey", ingredient: "honey", quantity: 0.5 },
        { text: "1/3 cup vegetable oil", ingredient: "vegetable oil", quantity: 0.33 },
        { text: "1 tsp cinnamon", ingredient: "cinnamon", quantity: 1 },
        { text: "1/4 tsp salt", ingredient: "salt", quantity: 0.25 },
        { text: "1 tsp vanilla extract", ingredient: "vanilla extract", quantity: 1 },
        { text: "1 cup dried cranberries", ingredient: "dried cranberries", quantity: 1 },
      ],
      steps: [
        "Preheat oven to 325°F.",
        "Toss the oats and almonds with honey, oil, cinnamon, salt, and vanilla until evenly coated.",
        "Spread onto a baking sheet and press down firmly into an even layer - pressing is what creates clusters instead of loose, crumbly granola.",
        "Bake for 25-30 minutes, without stirring, until golden.",
        "Cool completely without disturbing the pan, then break into clusters and stir in the dried cranberries.",
      ],
      tags: ["breakfast", "vegetarian", "vegan", "baking"],
    },
    bg: {
      title: "Домашна гранола",
      description:
        "Овесени ядки и ядки, изпечени с мед до златисто и хрупкаво, притиснати плътно върху тавата и оставени необезпокоявани, докато изстиват - разбъркването на гранолата веднага след печене е причината повечето домашни партиди да излизат разпилени и трошливи, вместо на бучки, а щипка сол и ванилия допълват сладостта.",
      steps: [
        "Загрейте фурната на 165°C.",
        "Разбъркайте овесените ядки и бадемите с меда, олиото, канелата, солта и ванилията до равномерно покриване.",
        "Разпределете върху тава и притиснете плътно в равномерен слой - притискането е това, което създава бучки, вместо разпиляна, трошлива гранола.",
        "Печете 25-30 минути, без разбъркване, до златисто.",
        "Оставете да изстине напълно, без да пипате тавата, после разчупете на бучки и добавете сушените боровинки.",
      ],
      ingredients: [
        "3 чаши овесени ядки",
        "1 чаша нарязани бадеми",
        "1/2 чаша мед",
        "1/3 чаша олио",
        "1 ч.л. канела",
        "1/4 ч.л. сол",
        "1 ч.л. ванилова есенция",
        "1 чаша сушени боровинки",
      ],
    },
  },
  {
    en: {
      slug: "instant-oatmeal-with-fruit",
      title: "Instant Oatmeal with Fruit",
      description:
        "Warm, creamy oatmeal simmered with a pinch of salt to bring out its flavor, topped with fresh fruit and a touch of cinnamon - oatmeal cooked without any salt at all is a common reason it tastes flat, even when topped with sweet fruit.",
      imageEmoji: "🥣",
      cookTimeMinutes: 10,
      servings: 1,
      ingredients: [
        { text: "1/2 cup rolled oats", ingredient: "oats", quantity: 0.5 },
        { text: "1 cup milk", ingredient: "milk", quantity: 1 },
        { text: "Pinch of salt", ingredient: "salt", quantity: null },
        { text: "1 banana, sliced", ingredient: "banana", quantity: 1 },
        { text: "1 tbsp honey", ingredient: "honey", quantity: 1 },
        { text: "1/2 tsp cinnamon", ingredient: "cinnamon", quantity: 0.5 },
      ],
      steps: [
        "Combine the oats, milk, and a pinch of salt in a saucepan over medium heat.",
        "Simmer, stirring often, for about 5 minutes until thickened.",
        "Pour into a bowl and top with banana slices and cinnamon.",
        "Drizzle with honey before serving.",
      ],
      tags: ["breakfast", "quick", "vegetarian"],
    },
    bg: {
      title: "Бърза овесена каша с плодове",
      description:
        "Топла, кремообразна овесена каша, къкрена с щипка сол, за да разкрие вкуса си, поднесена с пресни плодове и нотка канела - овесена каша, приготвена без никаква сол, е честа причина да има плосък вкус, дори с покритие от сладки плодове.",
      steps: [
        "Смесете овесените ядки, млякото и щипка сол в тенджерка на среден огън.",
        "Варете, разбърквайки често, около 5 минути до сгъстяване.",
        "Изсипете в купа и добавете резенчета банан и канела отгоре.",
        "Полейте с мед преди сервиране.",
      ],
      ingredients: [
        "1/2 чаша овесени ядки",
        "1 чаша мляко",
        "Щипка сол",
        "1 банан, нарязан на резени",
        "1 с.л. мед",
        "1/2 ч.л. канела",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
