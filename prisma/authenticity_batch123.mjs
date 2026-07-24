import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "grilled-bbq-ribs",
      title: "Grilled BBQ Ribs",
      description:
        "Tender pork ribs slow-grilled and basted with tangy barbecue sauce - removing the membrane from the back of the racks before seasoning is what lets the rub and smoke actually penetrate the meat, the single most common step skipped in home rib cooking.",
      imageEmoji: "🍖",
      cookTimeMinutes: 120,
      servings: 4,
      ingredients: [
        { text: "2 racks pork ribs", ingredient: "pork ribs", quantity: 2 },
        { text: "3 tbsp dry rub seasoning", ingredient: "dry rub", quantity: 3 },
        { text: "1 1/2 cups barbecue sauce", ingredient: "barbecue sauce", quantity: 1.5 },
      ],
      steps: [
        "Remove the thin membrane from the back of each rack of ribs - leaving it on is what blocks the rub and smoke from penetrating and makes the ribs chewy instead of tender.",
        "Rub the ribs generously with the dry rub and let sit for 30 minutes.",
        "Grill over indirect low heat, covered, for 1.5 hours, turning occasionally.",
        "Brush with barbecue sauce during the last 20 minutes of cooking.",
        "Rest for 10 minutes before slicing.",
      ],
      tags: ["dinner"],
    },
    bg: {
      title: "Ребра барбекю на скара",
      description:
        "Крехки свински ребра, бавно изпечени на скара и намазвани с пикантен сос барбекю - премахването на тънката ципа от гърба на плочките преди подправяне е това, което позволява на подправката и дима наистина да проникнат в месото, най-често пропусканата стъпка в домашното приготвяне на ребра.",
      steps: [
        "Премахнете тънката ципа от гърба на всяка плочка ребра - оставянето ѝ е това, което блокира подправката и дима от проникване и прави ребрата жилави, вместо крехки.",
        "Намажете обилно ребрата със сухата подправка и оставете за 30 минути.",
        "Изпечете на скара на индиректен слаб огън, покрито, 1.5 часа, обръщайки от време на време.",
        "Намажете със сос барбекю през последните 20 минути от готвенето.",
        "Оставете да починат 10 минути преди нарязване.",
      ],
      ingredients: ["2 плочки свински ребра", "3 с.л. суха подправка", "1 1/2 чаши сос барбекю"],
    },
  },
  {
    en: {
      slug: "grilled-burgers",
      title: "Grilled Burgers",
      description:
        "Classic juicy beef burgers grilled to perfection - handling the meat as little as possible while forming the patties and pressing a shallow dimple in the center is what keeps them tender and flat instead of tough and domed.",
      imageEmoji: "🍔",
      cookTimeMinutes: 20,
      servings: 4,
      ingredients: [
        { text: "1 1/2 lb ground beef", ingredient: "ground beef", quantity: 1.5 },
        { text: "1 tsp garlic powder", ingredient: "garlic powder", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "4 hamburger buns", ingredient: "hamburger buns", quantity: 4 },
        { text: "4 slices cheese", ingredient: "cheese", quantity: 4 },
      ],
      steps: [
        "Gently form the ground beef into four patties, handling the meat as little as possible, and press a shallow dimple into the center of each - overworking the meat is what makes burgers tough, and the dimple keeps them from puffing into a dome.",
        "Season with garlic powder and salt.",
        "Grill over medium-high heat for 4-5 minutes per side to desired doneness.",
        "Top with cheese during the last minute of cooking to melt.",
        "Serve on buns with your favorite toppings.",
      ],
      tags: ["dinner", "quick"],
    },
    bg: {
      title: "Бургери на скара",
      description:
        "Класически сочни телешки бургери, изпечени до съвършенство - работата с каймата колкото се може по-малко при оформянето на кюфтетата и правенето на плитка вдлъбнатина в центъра е това, което ги пази крехки и плоски, вместо жилави и издути.",
      steps: [
        "Оформете внимателно каймата на четири кюфтета, работейки с месото колкото се може по-малко, и направете плитка вдлъбнатина в средата на всяко - прекомерната работа с месото е това, което прави бургерите жилави, а вдлъбнатината ги пази да не се издуят като кубе.",
        "Подправете с чеснов прах и сол.",
        "Изпечете на скара на среден до силен огън по 4-5 минути от всяка страна до желаната готовност.",
        "Отгоре сложете сирене през последната минута от готвенето, за да се разтопи.",
        "Сервирайте върху хлебчета с любимите ви добавки.",
      ],
      ingredients: [
        "700 г кайма от телешко месо",
        "1 ч.л. чеснов прах",
        "Сол на вкус",
        "4 хлебчета за бургер",
        "4 резена сирене",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
