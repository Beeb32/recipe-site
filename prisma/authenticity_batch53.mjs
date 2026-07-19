import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "mango-lassi",
      title: "Mango Lassi",
      description:
        "Yogurt and mango blended with a pinch of ground cardamom and a touch of salt - cardamom is the spice that gives real mango lassi its signature aromatic lift, and it was missing entirely before.",
      imageEmoji: "🥭",
      cookTimeMinutes: 10,
      servings: 2,
      ingredients: [
        { text: "2 cups mango chunks", ingredient: "mango", quantity: 2 },
        { text: "1 cup yogurt", ingredient: "yogurt", quantity: 1 },
        { text: "1/2 cup milk", ingredient: "milk", quantity: 0.5 },
        { text: "2 tbsp honey (or sugar)", ingredient: "honey", quantity: 2 },
        { text: "1/4 tsp ground cardamom", ingredient: "cardamom", quantity: 0.25 },
        { text: "Pinch of salt", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Combine the mango, yogurt, milk, honey, cardamom, and salt in a blender.",
        "Blend until completely smooth, 60-90 seconds - cardamom is what gives real mango lassi its signature aromatic lift.",
        "Pour over ice and serve immediately.",
      ],
      tags: ["breakfast", "vegetarian", "quick"],
    },
    bg: {
      title: "Манго ласи",
      description:
        "Кисело мляко и манго, пасирани с щипка смлян кардамон и малко сол - кардамонът е подправката, която придава на истинското манго ласи характерния му ароматен привкус, и напълно липсваше преди.",
      steps: [
        "Смесете мангото, киселото мляко, млякото, меда, кардамона и солта в блендер.",
        "Пасирайте до пълна гладкост, 60-90 секунди - кардамонът е това, което придава на истинското манго ласи характерния му ароматен привкус.",
        "Излейте върху лед и сервирайте веднага.",
      ],
      ingredients: [
        "2 чаши парченца манго",
        "1 чаша кисело мляко",
        "1/2 чаша мляко",
        "2 с.л. мед (или захар)",
        "1/4 ч.л. смлян кардамон",
        "Щипка сол",
      ],
    },
  },
  {
    en: {
      slug: "chai-tea-latte",
      title: "Chai Tea Latte",
      description:
        "Whole spices and fresh ginger simmered in water first before the milk goes in - boiling ginger before adding milk is what keeps the milk from curdling, and simmering the spices in water alone extracts their aroma more fully than milk does.",
      imageEmoji: "☕",
      cookTimeMinutes: 20,
      servings: 2,
      ingredients: [
        { text: "1 cup water", ingredient: "water", quantity: 1 },
        { text: "1 cup milk", ingredient: "milk", quantity: 1 },
        { text: "2 black tea bags", ingredient: "black tea", quantity: 2 },
        { text: "1 cinnamon stick", ingredient: "cinnamon stick", quantity: 1 },
        { text: "3 cardamom pods, crushed", ingredient: "cardamom", quantity: 3 },
        { text: "2 whole cloves", ingredient: "cloves", quantity: 2 },
        { text: "1 tbsp grated fresh ginger", ingredient: "ginger", quantity: 1 },
        { text: "2 tbsp honey (or sugar)", ingredient: "honey", quantity: 2 },
      ],
      steps: [
        "Simmer the water with the ginger, cinnamon stick, cardamom, and cloves for 5-10 minutes - boiling the ginger first is what keeps the milk from curdling later, since heat destroys the enzyme in ginger that causes it.",
        "Add the milk and tea bags, and simmer together for another 5 minutes so the tea and spices infuse fully.",
        "Remove the tea bags and strain out the spices.",
        "Stir in the honey.",
        "Pour into mugs and serve hot.",
      ],
      tags: ["breakfast", "vegetarian", "quick"],
    },
    bg: {
      title: "Чай Чай Лате",
      description:
        "Цели подправки и пресен джинджифил, сварени във вода първо, преди да се добави млякото - варенето на джинджифила първо е това, което пази млякото да не се пресече, а варенето на подправките само във вода извлича аромата им по-пълно, отколкото млякото.",
      steps: [
        "Варете водата с джинджифила, пръчката канела, кардамона и карамфила 5-10 минути - варенето на джинджифила първо е това, което пази млякото да не се пресече по-късно, тъй като топлината унищожава ензима в джинджифила, който причинява това.",
        "Добавете млякото и чаените пакетчета, и варете заедно още 5 минути, за да се извлекат напълно чаят и подправките.",
        "Извадете чаените пакетчета и прецедете подправките.",
        "Разбъркайте меда.",
        "Изсипете в чаши и сервирайте горещо.",
      ],
      ingredients: [
        "1 чаша вода",
        "1 чаша мляко",
        "2 пакетчета черен чай",
        "1 пръчка канела",
        "3 шушулки кардамон, натрошени",
        "2 карамфилчета",
        "1 с.л. настърган пресен джинджифил",
        "2 с.л. мед (или захар)",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
