import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "peanut-butter-and-jelly-sandwich",
      title: "Peanut Butter and Jelly Sandwich",
      description:
        "The classic lunchbox sandwich - creamy peanut butter and sweet jelly on soft bread, with peanut butter spread on both slices before the jelly goes on - peanut butter on just one side is why jelly soaks straight through the bread and makes the sandwich soggy by lunchtime.",
      imageEmoji: "🥪",
      cookTimeMinutes: 5,
      servings: 1,
      ingredients: [
        { text: "2 slices bread", ingredient: "bread", quantity: 2 },
        { text: "2 tbsp peanut butter", ingredient: "peanut butter", quantity: 2 },
        { text: "2 tbsp jelly", ingredient: "jelly", quantity: 2 },
      ],
      steps: [
        "Spread peanut butter on both slices of bread, all the way to the edges - a full layer on both sides is what keeps the jelly from soaking through and making the sandwich soggy.",
        "Spread jelly over the peanut butter on one slice.",
        "Press the slices together.",
        "Slice diagonally before serving.",
      ],
      tags: ["lunch", "quick", "vegetarian"],
    },
    bg: {
      title: "Сандвич с фъстъчено масло и конфитюр",
      description:
        "Класическият сандвич за обяд - кремообразно фъстъчено масло и сладък конфитюр върху мек хляб, с фъстъчено масло, намазано върху двете филии, преди да се добави конфитюрът - фъстъчено масло само от едната страна е причината конфитюрът да прогизне направо през хляба и да направи сандвича мокър до обяд.",
      steps: [
        "Намажете фъстъчено масло върху двете филии хляб, чак до краищата - пълен слой от двете страни е това, което пази конфитюра да не прогизне през хляба и да направи сандвича мокър.",
        "Намажете конфитюр върху фъстъченото масло на едната филия.",
        "Притиснете филиите заедно.",
        "Нарежете диагонално преди сервиране.",
      ],
      ingredients: ["2 филии хляб", "2 с.л. фъстъчено масло", "2 с.л. конфитюр"],
    },
  },
  {
    en: {
      slug: "peanut-butter-banana-toast",
      title: "Peanut Butter Banana Toast",
      description:
        "A two-minute breakfast of crispy toast topped with peanut butter, sliced banana, and a pinch of cinnamon - cinnamon is the small classic touch that ties peanut butter and banana together instead of leaving them tasting like two separate toppings.",
      imageEmoji: "🍌",
      cookTimeMinutes: 5,
      servings: 1,
      ingredients: [
        { text: "2 slices bread", ingredient: "bread", quantity: 2 },
        { text: "2 tbsp peanut butter", ingredient: "peanut butter", quantity: 2 },
        { text: "1 banana, sliced", ingredient: "banana", quantity: 1 },
        { text: "Pinch of cinnamon", ingredient: "cinnamon", quantity: null },
        { text: "1 tsp honey (optional)", ingredient: "honey", quantity: 1 },
      ],
      steps: [
        "Toast the bread until golden.",
        "Spread peanut butter evenly over each slice.",
        "Top with banana slices and a pinch of cinnamon.",
        "Drizzle with honey if using.",
      ],
      tags: ["breakfast", "quick", "vegetarian"],
    },
    bg: {
      title: "Тост с фъстъчено масло и банан",
      description:
        "Двуминутна закуска от хрупкав тост с фъстъчено масло, нарязан банан и щипка канела - канелата е малкият класически щрих, който обединява фъстъченото масло и банана, вместо да имат вкус на две отделни добавки.",
      steps: [
        "Препечете хляба до златисто.",
        "Намажете фъстъчено масло равномерно върху всяка филия.",
        "Отгоре сложете резенчета банан и щипка канела.",
        "Полейте с мед, ако използвате.",
      ],
      ingredients: [
        "2 филии хляб",
        "2 с.л. фъстъчено масло",
        "1 банан, нарязан на резени",
        "Щипка канела",
        "1 ч.л. мед (по желание)",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
