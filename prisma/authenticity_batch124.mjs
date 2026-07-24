import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "ham-and-cheese-sandwich",
      title: "Ham and Cheese Sandwich",
      description:
        "A simple, satisfying sandwich of sliced ham and melted cheese spread with a touch of mustard - a plain ham and cheese with nothing but butter tastes flat and dry; the mustard is what actually seasons the inside.",
      imageEmoji: "🥪",
      cookTimeMinutes: 10,
      servings: 1,
      ingredients: [
        { text: "2 slices bread", ingredient: "bread", quantity: 2 },
        { text: "3 slices ham", ingredient: "ham", quantity: 3 },
        { text: "2 slices cheese", ingredient: "cheese", quantity: 2 },
        { text: "1 tsp mustard", ingredient: "mustard", quantity: 1 },
        { text: "1 tbsp butter", ingredient: "butter", quantity: 1 },
      ],
      steps: [
        "Spread mustard on the inside of one bread slice.",
        "Butter the outside of each bread slice.",
        "Layer ham and cheese between the slices, buttered sides facing out.",
        "Cook in a skillet over medium heat for 2-3 minutes per side until golden and the cheese melts.",
      ],
      tags: ["lunch", "quick"],
    },
    bg: {
      title: "Сандвич с шунка и сирене",
      description:
        "Прост, засищащ сандвич от нарязана шунка и разтопено сирене, намазан с малко горчица - обикновен сандвич с шунка и сирене само с масло има плосък и сух вкус; горчицата е това, което наистина подправя вътрешността.",
      steps: [
        "Намажете горчица от вътрешната страна на едната филия.",
        "Намажете с масло външната страна на всяка филия.",
        "Наредете шунка и сирене между филиите, намазаните страни навън.",
        "Изпечете в тиган на среден огън по 2-3 минути от всяка страна до златисто и разтапяне на сиренето.",
      ],
      ingredients: ["2 филии хляб", "3 резена шунка", "2 резена сирене", "1 ч.л. горчица", "1 с.л. масло"],
    },
  },
  {
    en: {
      slug: "ham-and-swiss-panini",
      title: "Ham and Swiss Panini",
      description:
        "A pressed, toasted sandwich of ham and melted Swiss cheese with a tangy mustard spread sharpened with cracked black pepper - a touch of pepper in the mustard is a small classic upgrade that keeps the filling from tasting one-note.",
      imageEmoji: "🥪",
      cookTimeMinutes: 15,
      servings: 2,
      ingredients: [
        { text: "4 slices bread", ingredient: "bread", quantity: 4 },
        { text: "6 slices ham", ingredient: "ham", quantity: 6 },
        { text: "4 slices Swiss cheese", ingredient: "swiss cheese", quantity: 4 },
        { text: "2 tsp Dijon mustard", ingredient: "dijon mustard", quantity: 2 },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
        { text: "2 tbsp butter", ingredient: "butter", quantity: 2 },
      ],
      steps: [
        "Mix the mustard with a pinch of cracked black pepper and spread on one side of each bread slice.",
        "Layer ham and Swiss cheese between the slices, mustard sides facing in.",
        "Butter the outside of the sandwiches.",
        "Grill in a skillet or panini press over medium heat until golden and the cheese melts, about 3 minutes per side.",
      ],
      tags: ["lunch", "quick"],
    },
    bg: {
      title: "Панини с шунка и швейцарско сирене",
      description:
        "Пресован, препечен сандвич с шунка и разтопено швейцарско сирене с пикантна горчица, изострена с прясно смлян черен пипер - малко черен пипер в горчицата е малко класическо надграждане, което пази плънката от еднообразен вкус.",
      steps: [
        "Смесете горчицата с щипка прясно смлян черен пипер и намажете от едната страна на всяка филия.",
        "Наредете шунка и швейцарско сирене между филиите, страните с горчица навътре.",
        "Намажете отвън сандвичите с масло.",
        "Изпечете в тиган или преса за панини на среден огън до златисто и разтапяне на сиренето, около 3 минути от всяка страна.",
      ],
      ingredients: [
        "4 филии хляб",
        "6 резена шунка",
        "4 резена швейцарско сирене",
        "2 ч.л. дижонска горчица",
        "Черен пипер на вкус",
        "2 с.л. масло",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
