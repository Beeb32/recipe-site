import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "one-pot-beef-and-noodles",
      title: "One-Pot Beef and Noodles",
      description:
        "Ground beef and egg noodles simmered together in a creamy, savory sauce, seasoned with garlic alongside salt and pepper - browning beef with nothing but onion is why most one-pot noodle dishes taste flat under the sour cream.",
      imageEmoji: "🍜",
      cookTimeMinutes: 30,
      servings: 4,
      ingredients: [
        { text: "1 lb ground beef", ingredient: "ground beef", quantity: 1 },
        { text: "8 oz egg noodles", ingredient: "egg noodles", quantity: 8 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
        { text: "3 cups beef broth", ingredient: "beef broth", quantity: 3 },
        { text: "1/2 cup sour cream", ingredient: "sour cream", quantity: 0.5 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Brown the ground beef with the onion and garlic in a large pot, seasoning with salt and pepper.",
        "Stir in the beef broth and egg noodles.",
        "Simmer for 10-12 minutes until the noodles are tender.",
        "Remove from heat and stir in the sour cream before serving.",
      ],
      tags: ["dinner", "quick"],
    },
    bg: {
      title: "Телешко с юфка в един съд",
      description:
        "Телешка кайма и юфка, варени заедно в кремообразен, ароматен сос, подправени с чесън заедно със солта и черния пипер - запържването на каймата само с лук е причината повечето ястия с юфка в един съд да имат плосък вкус под заквасената сметана.",
      steps: [
        "Запържете каймата с лука и чесъна в голяма тенджера, подправяйки със сол и черен пипер.",
        "Добавете телешкия бульон и юфката.",
        "Варете 10-12 минути, докато юфката омекне.",
        "Свалете от котлона и добавете заквасена сметана преди сервиране.",
      ],
      ingredients: [
        "450 г кайма от телешко месо",
        "225 г юфка",
        "1 лук, нарязан на кубчета",
        "2 скилидки чесън, ситно нарязани",
        "3 чаши телешки бульон",
        "1/2 чаша заквасена сметана",
        "Сол на вкус",
        "Черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "ground-beef-skillet",
      title: "Ground Beef Skillet",
      description:
        "A simple, hearty skillet of ground beef, potatoes, and vegetables all in one pan, seasoned with garlic powder and pepper alongside the salt - potatoes and beef browned with nothing but salt at the very end is why this kind of skillet often tastes underseasoned.",
      imageEmoji: "🥘",
      cookTimeMinutes: 30,
      servings: 4,
      ingredients: [
        { text: "1 lb ground beef", ingredient: "ground beef", quantity: 1 },
        { text: "3 potatoes, diced", ingredient: "potato", quantity: 3 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "1 cup frozen mixed vegetables", ingredient: "mixed vegetables", quantity: 1 },
        { text: "2 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 2 },
        { text: "1 tsp garlic powder", ingredient: "garlic powder", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Heat oil in a large skillet and cook the diced potatoes until golden and nearly tender, about 12 minutes.",
        "Push the potatoes aside and brown the ground beef with the onion, garlic powder, salt, and pepper.",
        "Stir in the mixed vegetables and cook for another 5 minutes.",
        "Combine everything before serving.",
      ],
      tags: ["dinner", "quick"],
    },
    bg: {
      title: "Телешка кайма в тиган",
      description:
        "Проста, ситна яхния в тиган от кайма, картофи и зеленчуци, всичко в един тиган, подправена с чеснов прах и черен пипер заедно със солта - запържването на картофите и каймата само със сол в самия край е причината такива ястия често да излизат недостатъчно подправени.",
      steps: [
        "Загрейте олио в голям тиган и изпечете нарязаните картофи до златисто и почти омекнало, около 12 минути.",
        "Избутайте картофите настрани и запържете каймата с лука, чесновия прах, солта и черния пипер.",
        "Добавете смесените зеленчуци и гответе още 5 минути.",
        "Смесете всичко преди сервиране.",
      ],
      ingredients: [
        "450 г кайма от телешко месо",
        "3 картофа, нарязани на кубчета",
        "1 лук, нарязан на кубчета",
        "1 чаша замразени смесени зеленчуци",
        "2 с.л. олио",
        "1 ч.л. чеснов прах",
        "Сол на вкус",
        "Черен пипер на вкус",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
