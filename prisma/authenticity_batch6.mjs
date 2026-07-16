import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "palneni-domati",
      title: "Palneni Domati",
      description:
        "Ripe tomatoes hollowed out and stuffed with rice, carrot, and chubritsa, then baked in their own reserved juices until tender.",
      imageEmoji: "🍅",
      cookTimeMinutes: 65,
      servings: 6,
      ingredients: [
        { text: "6 large tomatoes", ingredient: "tomato", quantity: 6 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "1 carrot, grated", ingredient: "carrot", quantity: 1 },
        { text: "3 tbsp sunflower oil", ingredient: "sunflower oil", quantity: 3 },
        { text: "1 cup rice", ingredient: "rice", quantity: 1 },
        { text: "1 tsp chubritsa (Bulgarian savory)", ingredient: "chubritsa", quantity: 1 },
        { text: "1/4 cup chopped parsley", ingredient: "parsley", quantity: 0.25 },
        { text: "Salt and black pepper to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Preheat oven to 375°F. Slice the tops off the tomatoes and scoop out the pulp, reserving it; season the insides lightly with salt.",
        "Sauté the onion and carrot in oil until softened, then stir in the rice and toast for 2-3 minutes until slightly glassy.",
        "Mix in the reserved tomato pulp, chubritsa, parsley, salt, and pepper.",
        "Stuff the mixture into the tomatoes, replace the tops, arrange in a baking dish with a splash of water poured around them, and bake for 40-45 minutes until the rice is tender.",
      ],
      tags: ["dinner", "vegan", "vegetarian"],
    },
    bg: {
      title: "Пълнени домати",
      description:
        "Узрели домати, издълбани и пълнени с ориз, моркови и чубрица, после запечени в собствения си запазен сок до омекване.",
      steps: [
        "Загрейте фурната на 190°C. Отрежете връхчетата на доматите и извадете месестата част, като я запазите; леко подсолете вътрешността.",
        "Запържете лука и моркова в олио до омекване, после разбъркайте ориза и запържете 2-3 минути, докато леко се остъклят.",
        "Разбъркайте запазената доматена каша, чубрицата, магданоза, солта и черния пипер.",
        "Напълнете доматите със сместа, поставете капачетата обратно, наредете в тава с малко вода около тях и печете 40-45 минути, докато оризът омекне.",
      ],
      ingredients: [
        "6 големи домата",
        "1 лук, нарязан на кубчета",
        "1 морков, настърган",
        "3 с.л. слънчогледово олио",
        "1 чаша ориз",
        "1 ч.л. чубрица",
        "1/4 чаша нарязан магданоз",
        "Сол и черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "bulgarian-fish-soup",
      title: "Bulgarian Fish Soup",
      description:
        "A tangy Bulgarian fish soup of potatoes and carrots in a paprika-butter broth, with the fish quickly seared before it's added so the pieces hold together.",
      imageEmoji: "🐟",
      cookTimeMinutes: 50,
      servings: 4,
      ingredients: [
        { text: "1 lb white fish fillets, cut into bite-sized pieces", ingredient: "white fish", quantity: 1 },
        { text: "2 tbsp sunflower oil", ingredient: "sunflower oil", quantity: 2 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "1 carrot, diced", ingredient: "carrot", quantity: 1 },
        { text: "2 potatoes, diced", ingredient: "potato", quantity: 2 },
        { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
        { text: "6 cups fish or vegetable broth", ingredient: "fish broth", quantity: 6 },
        { text: "2 tbsp butter", ingredient: "butter", quantity: 2 },
        { text: "1 tsp paprika", ingredient: "paprika", quantity: 1 },
        { text: "1/4 cup chopped parsley", ingredient: "parsley", quantity: 0.25 },
        { text: "1 tbsp lemon juice", ingredient: "lemon juice", quantity: 1 },
        { text: "Salt and black pepper to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Heat the oil in a pan and sear the fish pieces just until the outside sets, about 30 seconds per side, so they hold together in the soup; set aside.",
        "Sauté the onion, carrot, and garlic until softened, then add the potatoes and broth and simmer for 15 minutes until the potatoes are nearly tender.",
        "Melt the butter in a small pan, stir in the paprika off the heat, and whisk it into the soup to enrich and color the broth.",
        "Add the seared fish and simmer gently for 5-8 minutes until just cooked through; stir in the lemon juice, season with salt and pepper, and garnish with parsley before serving.",
      ],
      tags: ["dinner", "quick"],
    },
    bg: {
      title: "Българска рибена супа",
      description:
        "Пикантна българска рибена супа от картофи и моркови в сос от масло и червен пипер, с риба, бързо запържена преди добавяне, за да запази формата си.",
      steps: [
        "Загрейте олиото в тиган и запържете рибените парченца само докато повърхността се стегне, около 30 секунди от всяка страна, за да не се разпаднат в супата; оставете настрана.",
        "Запържете лука, моркова и чесъна до омекване, после добавете картофите и бульона и варете 15 минути, докато картофите почти омекнат.",
        "Разтопете маслото в малък тиган, разбъркайте червения пипер извън котлона, после вмъкнете сместа в супата, за да я обогати и оцвети.",
        "Добавете запържената риба и варете леко 5-8 минути, докато се сготви; разбъркайте лимоновия сок, подправете със сол и черен пипер и гарнирайте с магданоз преди сервиране.",
      ],
      ingredients: [
        "450 г филе от бяла риба, нарязано на хапки",
        "2 с.л. слънчогледово олио",
        "1 лук, нарязан на кубчета",
        "1 морков, нарязан на кубчета",
        "2 картофа, нарязани на кубчета",
        "2 скилидки чесън, ситно нарязани",
        "6 чаши рибен или зеленчуков бульон",
        "2 с.л. масло",
        "1 ч.л. червен пипер",
        "1/4 чаша нарязан магданоз",
        "1 с.л. лимонов сок",
        "Сол и черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "mish-mash",
      title: "Mish-Mash",
      description:
        "A quick Bulgarian scramble of onion, peppers, and tomatoes stewed until soft, folded with eggs and crumbled sirene into a silky, not curdled, mixture.",
      imageEmoji: "🍳",
      cookTimeMinutes: 25,
      servings: 2,
      ingredients: [
        { text: "4 eggs", ingredient: "eggs", quantity: 4 },
        { text: "1/2 onion, diced", ingredient: "onion", quantity: 0.5 },
        { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
        { text: "1 green bell pepper, diced", ingredient: "green pepper", quantity: 1 },
        { text: "2 tomatoes, diced", ingredient: "tomato", quantity: 2 },
        { text: "1/2 cup crumbled sirene (Bulgarian white cheese)", ingredient: "sirene", quantity: 0.5 },
        { text: "2 tbsp sunflower oil", ingredient: "sunflower oil", quantity: 2 },
        { text: "2 tbsp fresh parsley, chopped", ingredient: "parsley", quantity: 2 },
      ],
      steps: [
        "Sauté the onion and garlic in sunflower oil for 2 minutes until softened, then add the green pepper, cover, and cook for 5 minutes.",
        "Add the tomatoes, cover, and cook for another 5-7 minutes until they break down.",
        "Stir in the sirene, then pour in the beaten eggs and stir constantly over low heat until just set into a silky, not curdled, mixture.",
        "Stir in the parsley and cook for another minute before serving.",
      ],
      tags: ["breakfast", "vegetarian", "quick"],
    },
    bg: {
      title: "Миш-маш",
      description:
        "Бърза българска бъркана яйца с лук, чушки и домати, задушени до омекване, смесени с яйца и натрошено сирене в копринена, а не сгърчена смес.",
      steps: [
        "Запържете лука и чесъна в слънчогледово олио 2 минути до омекване, после добавете зелената чушка, покрийте и гответе 5 минути.",
        "Добавете доматите, покрийте и гответе още 5-7 минути, докато се разпаднат.",
        "Разбъркайте сиренето, после изсипете разбитите яйца и разбърквайте постоянно на слаб огън, докато се стегнат в копринена, а не сгърчена смес.",
        "Разбъркайте магданоза и гответе още минута преди сервиране.",
      ],
      ingredients: [
        "4 яйца",
        "1/2 лук, нарязан на кубчета",
        "2 скилидки чесън, ситно нарязани",
        "1 зелена чушка, нарязана на кубчета",
        "2 домата, нарязани на кубчета",
        "1/2 чаша натрошено сирене",
        "2 с.л. слънчогледово олио",
        "2 с.л. пресен магданоз, нарязан",
      ],
    },
  },
  {
    en: {
      slug: "garash-cake",
      title: "Garash Cake",
      description:
        "A rich Bulgarian layer cake of five thin walnut meringue rounds filled with whipped chocolate ganache and finished with a poured chocolate glaze - invented in Ruse in 1885.",
      imageEmoji: "🍫",
      cookTimeMinutes: 180,
      servings: 12,
      ingredients: [
        { text: "8 egg whites", ingredient: "egg whites", quantity: 8 },
        { text: "1 1/4 cups sugar (for the meringue)", ingredient: "sugar", quantity: 1.25 },
        { text: "2 cups ground walnuts", ingredient: "walnuts", quantity: 2 },
        { text: "1 1/2 cups heavy cream", ingredient: "heavy cream", quantity: 1.5 },
        { text: "2 tbsp sugar (for the filling)", ingredient: "sugar", quantity: 2 },
        { text: "10 oz dark chocolate, melted, divided", ingredient: "dark chocolate", quantity: 10 },
        { text: "2 tbsp vegetable oil (for the glaze)", ingredient: "vegetable oil", quantity: 2 },
      ],
      steps: [
        "Preheat oven to 325°F. Whip the egg whites to stiff peaks, then gradually beat in the sugar until thick and glossy; gently fold in the ground walnuts.",
        "Divide the batter into five thin, even rounds on parchment-lined baking sheets and bake for 12-15 minutes each until just set; cool completely.",
        "Whip the cream with the 2 tbsp sugar to soft peaks, then gradually fold in half of the melted chocolate to make a whipped ganache filling; spread between the cooled meringue layers and over the outside of the cake.",
        "Chill the assembled cake for at least 2 hours, then melt the remaining chocolate with the oil and pour it over the top to glaze before slicing.",
      ],
      tags: ["dessert", "vegetarian", "baking"],
    },
    bg: {
      title: "Торта Гараш",
      description:
        "Наситена българска торта от пет тънки коржа от орехово безе, пълнени с разбита шоколадова ганаш и завършени с изсипана шоколадова глазура - създадена в Русе през 1885 г.",
      steps: [
        "Загрейте фурната на 165°C. Разбийте белтъците до твърди връхчета, после постепенно добавете захарта, докато се сгъсти и заблести; внимателно вмесете смлените орехи.",
        "Разпределете тестото на пет тънки, равни коржа върху тави, застлани с хартия за печене, и печете по 12-15 минути всеки, докато се стегнат; оставете да изстинат напълно.",
        "Разбийте сметаната с 2-те с.л. захар до меки връхчета, после постепенно вмесете половината от разтопения шоколад, за да направите разбита ганаш; намажете между изстиналите коржове и отвън по тортата.",
        "Охладете сглобената торта поне 2 часа, после разтопете останалия шоколад с олиото и го изсипете отгоре за глазура, преди да нарежете.",
      ],
      ingredients: [
        "8 белтъка",
        "1 1/4 чаши захар (за безето)",
        "2 чаши смлени орехи",
        "1 1/2 чаши сметана за разбиване",
        "2 с.л. захар (за плънката)",
        "285 г тъмен шоколад, разтопен, разделен",
        "2 с.л. олио (за глазурата)",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
