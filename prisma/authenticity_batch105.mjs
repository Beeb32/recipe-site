import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "butternut-squash-soup",
      title: "Butternut Squash Soup",
      description:
        "A silky, naturally sweet soup made from butternut squash roasted with oil until caramelized at the edges, not just softened, plus a hint of nutmeg alongside the cinnamon - roasting the squash dry without oil is why many quick versions taste flat instead of deeply roasted.",
      imageEmoji: "🎃",
      cookTimeMinutes: 50,
      servings: 6,
      ingredients: [
        { text: "1 butternut squash, cubed", ingredient: "butternut squash", quantity: 1 },
        { text: "2 tbsp olive oil", ingredient: "olive oil", quantity: 2 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "3 cloves garlic", ingredient: "garlic", quantity: 3 },
        { text: "4 cups vegetable broth", ingredient: "vegetable broth", quantity: 4 },
        { text: "1/2 cup heavy cream", ingredient: "heavy cream", quantity: 0.5 },
        { text: "1 tsp cinnamon", ingredient: "cinnamon", quantity: 1 },
        { text: "1/4 tsp nutmeg", ingredient: "nutmeg", quantity: 0.25 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Toss the squash cubes with the olive oil and a pinch of salt, then roast at 400°F for 25-30 minutes, until tender and caramelized at the edges - roasting with oil until the edges brown is what develops real depth of flavor instead of just steaming the squash soft.",
        "Sauté the onion and garlic in a large pot until softened.",
        "Add the roasted squash and vegetable broth, then simmer for 10 minutes.",
        "Blend until smooth, then stir in the cream, cinnamon, and nutmeg, seasoning with salt and pepper.",
      ],
      tags: ["dinner", "vegetarian"],
    },
    bg: {
      title: "Крем супа от тиква бътърнът",
      description:
        "Копринена, естествено сладка супа от тиква бътърнът, изпечена със зехтин до карамелизиране по краищата, не само омекване, плюс лек намек за индийско орехче заедно с канелата - печенето на тиквата суха, без зехтин, е причината много бързи версии да имат безвкусен, а не дълбоко печен вкус.",
      steps: [
        "Разбъркайте кубчетата тиква със зехтина и щипка сол, после изпечете на 200°C 25-30 минути, докато омекнат и карамелизират по краищата - печенето със зехтин до покафеняване на краищата е това, което развива истинска дълбочина на вкуса, вместо просто да задуши тиквата на пара до омекване.",
        "Запържете лука и чесъна в голяма тенджера до омекване.",
        "Добавете печената тиква и зеленчуковия бульон, после варете 10 минути.",
        "Пасирайте до гладкост, после добавете сметаната, канелата и индийското орехче, подправяйки със сол и черен пипер.",
      ],
      ingredients: [
        "1 тиква бътърнът, нарязана на кубчета",
        "2 с.л. зехтин",
        "1 лук, нарязан на кубчета",
        "3 скилидки чесън",
        "4 чаши зеленчуков бульон",
        "1/2 чаша сметана за готвене",
        "1 ч.л. канела",
        "1/4 ч.л. индийско орехче",
        "Сол на вкус",
        "Черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "black-bean-soup",
      title: "Black Bean Soup",
      description:
        "A hearty soup of black beans blended until creamy, built smoky with a touch of smoked paprika and finished with lime - most versions call themselves 'smoky' without anything in the pot that actually delivers it.",
      imageEmoji: "🍲",
      cookTimeMinutes: 40,
      servings: 6,
      ingredients: [
        { text: "3 cans black beans, drained", ingredient: "black beans", quantity: 3 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
        { text: "4 cups vegetable broth", ingredient: "vegetable broth", quantity: 4 },
        { text: "1 tsp cumin", ingredient: "cumin", quantity: 1 },
        { text: "1/2 tsp smoked paprika", ingredient: "smoked paprika", quantity: 0.5 },
        { text: "2 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 2 },
        { text: "1 tbsp lime juice", ingredient: "lime juice", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Sauté the onion and garlic in oil until softened.",
        "Stir in the cumin, smoked paprika, black beans, and vegetable broth - the smoked paprika is what actually makes this soup smoky, instead of just calling itself that.",
        "Simmer for 20 minutes.",
        "Blend part of the soup until smooth, leaving some beans whole for texture, then stir in the lime juice and season with salt.",
      ],
      tags: ["lunch", "vegan", "vegetarian", "mexican"],
    },
    bg: {
      title: "Супа от черен боб",
      description:
        "Сита супа от черен боб, пасирана до кремообразност, изградена с димен вкус чрез щипка пушен червен пипер и завършена с лайм - повечето версии се наричат 'димни', без нищо в тенджерата, което реално да го постига.",
      steps: [
        "Задушете лука и чесъна в олио до омекване.",
        "Разбъркайте кимиона, пушения червен пипер, черния боб и зеленчуковия бульон - пушеният червен пипер е това, което реално прави тази супа димна, вместо просто да се нарича така.",
        "Варете 20 минути.",
        "Пасирайте част от супата до гладкост, оставяйки част от боба цял за текстура, после разбъркайте с лимоновия сок и подправете със сол.",
      ],
      ingredients: [
        "3 консерви черен боб, отцеден",
        "1 лук, нарязан на кубчета",
        "2 скилидки чесън, ситно нарязани",
        "4 чаши зеленчуков бульон",
        "1 ч.л. кимион",
        "1/2 ч.л. пушен червен пипер",
        "2 с.л. олио",
        "1 с.л. лимонов сок",
        "Сол на вкус",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
