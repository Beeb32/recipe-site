import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "jerk-chicken",
      title: "Jerk Chicken",
      description:
        "Chicken marinated in a blended fresh paste of scotch bonnet, allspice, scallion, thyme, garlic, and ginger - it's the allspice and scotch bonnet blended fresh, not a store-bought seasoning blend rubbed on dry, that gives real jerk its depth.",
      imageEmoji: "🍗",
      cookTimeMinutes: 90,
      servings: 4,
      ingredients: [
        { text: "4 chicken leg quarters", ingredient: "chicken", quantity: 4 },
        { text: "1-2 scotch bonnet peppers (seeded for less heat if desired)", ingredient: "scotch bonnet pepper", quantity: 1 },
        { text: "4 scallions, chopped", ingredient: "scallion", quantity: 4 },
        { text: "1 tbsp ground allspice", ingredient: "allspice", quantity: 1 },
        { text: "4 cloves garlic", ingredient: "garlic", quantity: 4 },
        { text: "1 tbsp grated ginger", ingredient: "ginger", quantity: 1 },
        { text: "2 tsp fresh thyme leaves", ingredient: "thyme", quantity: 2 },
        { text: "1/2 tsp ground cinnamon", ingredient: "cinnamon", quantity: 0.5 },
        { text: "1/4 tsp ground nutmeg", ingredient: "nutmeg", quantity: 0.25 },
        { text: "3 tbsp brown sugar", ingredient: "brown sugar", quantity: 3 },
        { text: "2 tbsp soy sauce", ingredient: "soy sauce", quantity: 2 },
        { text: "1 lime, juiced", ingredient: "lime", quantity: 1 },
        { text: "2 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 2 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Blend the scotch bonnet, scallions, allspice, garlic, ginger, thyme, cinnamon, nutmeg, brown sugar, soy sauce, lime juice, oil, and salt into a spreadable paste.",
        "Poke holes in the chicken with a fork, then rub the paste all over and under the skin.",
        "Marinate for at least 2 hours, ideally overnight, for the flavor to penetrate.",
        "Grill over medium heat, turning occasionally, for 35-40 minutes until cooked through and charred.",
        "Rest for a few minutes before serving.",
      ],
      tags: ["dinner"],
    },
    bg: {
      title: "Джерк пиле",
      description:
        "Пиле, маринована в пасирана прясна паста от скоч бонет чушка, бахар, пресен лук, мащерка, чесън и джинджифил - именно бахарът и пресният скоч бонет, пасирани прясно, а не купена подправка, разтрита суха, придават на истинското джерк дълбочината му.",
      steps: [
        "Пасирайте скоч бонет чушката, пресния лук, бахара, чесъна, джинджифила, мащерката, канелата, индийското орехче, кафявата захар, соевия сос, лаймовия сок, олиото и солта в намазваща се паста.",
        "Направете дупки в пилето с вилица, после натъркайте пастата навсякъде и под кожата.",
        "Маринова поне 2 часа, в идеалния случай през нощта, за да проникне вкусът.",
        "Изпечете на скара на среден огън, обръщайки от време на време, 35-40 минути до готовност и овъгляне.",
        "Оставете да почине няколко минути преди сервиране.",
      ],
      ingredients: [
        "4 пилешки бутчета с кълка",
        "1-2 скоч бонет чушки (без семки за по-малко лютивина, по желание)",
        "4 стръка пресен лук, нарязани",
        "1 с.л. смлян бахар",
        "4 скилидки чесън",
        "1 с.л. настърган джинджифил",
        "2 ч.л. пресни листа мащерка",
        "1/2 ч.л. смляна канела",
        "1/4 ч.л. смляно индийско орехче",
        "3 с.л. кафява захар",
        "2 с.л. соев сос",
        "сок от 1 лайм",
        "2 с.л. олио",
        "Сол на вкус",
      ],
    },
  },
  {
    en: {
      slug: "cuban-sandwich",
      title: "Cuban Sandwich",
      description:
        "A pressed sandwich of ham, mojo-marinated roast pork, Swiss cheese, and pickles on Cuban bread, buttered on the outside before pressing for the crisp, golden crust that defines a real Cubano.",
      imageEmoji: "🥪",
      cookTimeMinutes: 20,
      servings: 2,
      ingredients: [
        { text: "1 loaf Cuban or French bread", ingredient: "bread", quantity: 1 },
        { text: "2 tbsp butter, softened (for the outside)", ingredient: "butter", quantity: 2 },
        { text: "2 tbsp mustard", ingredient: "mustard", quantity: 2 },
        { text: "6 oz sliced ham", ingredient: "ham", quantity: 6 },
        { text: "6 oz sliced mojo-marinated roast pork", ingredient: "roast pork", quantity: 6 },
        { text: "4 slices Swiss cheese", ingredient: "swiss cheese", quantity: 4 },
        { text: "1/4 cup sliced dill pickles", ingredient: "pickles", quantity: 0.25 },
      ],
      steps: [
        "Split the bread and spread mustard on the inside of both halves.",
        "Layer the Swiss cheese, ham, roast pork, and pickles inside.",
        "Butter the outside of the sandwich generously - this is what gives a real Cubano its golden, crispy crust.",
        "Press the sandwich in a hot skillet or panini press with something heavy on top (a foil-wrapped brick works well) until the bread is crispy and the cheese melts, about 5-7 minutes per side, pressing until compressed to about a third of its original height.",
        "Slice and serve hot.",
      ],
      tags: ["lunch", "quick"],
    },
    bg: {
      title: "Кубински сандвич",
      description:
        "Пресован сандвич от шунка, печено свинско месо, мариновано в мохо, швейцарско сирене и кисели краставички върху кубински хляб, намазан с масло отвън преди пресоване за хрупкавата, златиста коричка, която определя истинския кубано.",
      steps: [
        "Разрежете хляба и намажете горчица от вътрешната страна на двете половини.",
        "Наредете вътре швейцарското сирене, шунката, печеното свинско и краставичките.",
        "Намажете обилно с масло отвън на сандвича - това е това, което придава на истинския кубано златистата му, хрупкава коричка.",
        "Пресовайте сандвича в горещ тиган или преса за панини с нещо тежко отгоре (тухла, увита във фолио, върши работа), докато хлябът стане хрупкав и сиренето се разтопи, около 5-7 минути от всяка страна, притискайки, докато се сплеска до около трета от първоначалната си височина.",
        "Нарежете и сервирайте топъл.",
      ],
      ingredients: [
        "1 хляб кубински или френски",
        "2 с.л. масло, омекотено (за отвън)",
        "2 с.л. горчица",
        "170 г нарязана шунка",
        "170 г нарязано печено свинско месо, мариновано в мохо",
        "4 резена швейцарско сирене",
        "1/4 чаша нарязани кисели краставички",
      ],
    },
  },
  {
    en: {
      slug: "caribbean-rice-and-peas",
      title: "Caribbean Rice and Peas",
      description:
        "Coconut rice simmered with kidney beans, scallion, garlic, and thyme, with a whole scotch bonnet pepper added for its fragrance and a touch of heat without overwhelming spice - removing the pepper whole afterward is the classic technique for flavor without fire.",
      imageEmoji: "🍚",
      cookTimeMinutes: 40,
      servings: 6,
      ingredients: [
        { text: "2 cups rice", ingredient: "rice", quantity: 2 },
        { text: "1 can kidney beans, drained", ingredient: "kidney beans", quantity: 1 },
        { text: "1 can coconut milk (full-fat)", ingredient: "coconut milk", quantity: 1 },
        { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
        { text: "3 scallions, chopped", ingredient: "scallion", quantity: 3 },
        { text: "1 tsp fresh thyme", ingredient: "thyme", quantity: 1 },
        { text: "4 whole allspice berries (or 1/2 tsp ground allspice)", ingredient: "allspice", quantity: 4 },
        { text: "1 whole scotch bonnet pepper (left uncut)", ingredient: "scotch bonnet pepper", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Combine the rice, kidney beans, coconut milk, garlic, scallions, thyme, and allspice in a pot with about 1 1/2 cups water.",
        "Nestle the whole scotch bonnet pepper into the pot without cutting it - this infuses fragrance and a touch of heat without making the dish too spicy.",
        "Bring to a boil, then cover and reduce heat to low.",
        "Simmer for 18-20 minutes until the rice is tender, stirring occasionally.",
        "Remove and discard the whole scotch bonnet pepper, season with salt, and fluff with a fork before serving.",
      ],
      tags: ["dinner", "vegan", "vegetarian"],
    },
    bg: {
      title: "Карибски ориз с боб",
      description:
        "Кокосов ориз, варен с боб, пресен лук, чесън и мащерка, с цяла скоч бонет чушка, добавена за аромат и лек привкус на лютивина без прекомерна острота - изваждането на чушката цяла след готвене е класическата техника за вкус без огън.",
      steps: [
        "Смесете ориза, боба, кокосовото мляко, чесъна, пресния лук, мащерката и бахара в тенджера с около 1 1/2 чаши вода.",
        "Сложете цялата скоч бонет чушка в тенджерата, без да я режете - това вкарва аромат и лек привкус на лютивина, без ястието да стане прекалено люто.",
        "Оставете да заври, после покрийте и намалете котлона.",
        "Варете 18-20 минути, докато оризът омекне, разбърквайки от време на време.",
        "Извадете и изхвърлете цялата скоч бонет чушка, подправете със сол и разбъркайте с вилица преди сервиране.",
      ],
      ingredients: [
        "2 чаши ориз",
        "1 консерва червен боб, отцеден",
        "1 консерва кокосово мляко (пълномаслено)",
        "2 скилидки чесън, ситно нарязани",
        "3 стръка пресен лук, нарязани",
        "1 ч.л. прясна мащерка",
        "4 зърна бахар (или 1/2 ч.л. смлян бахар)",
        "1 цяла скоч бонет чушка (нерязана)",
        "Сол на вкус",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
