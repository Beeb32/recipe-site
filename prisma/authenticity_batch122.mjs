import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "grilled-chicken-skewers",
      title: "Grilled Chicken Skewers",
      description:
        "Chicken chunks actually marinated for real time in olive oil, paprika, and lemon juice before grilling on skewers with peppers and onion - tossing the chicken and grilling immediately, which most quick versions do, isn't marinating at all and leaves the meat under-seasoned.",
      imageEmoji: "🍢",
      cookTimeMinutes: 30,
      servings: 4,
      ingredients: [
        { text: "1 1/2 lb chicken breast, cubed", ingredient: "chicken breast", quantity: 1.5 },
        { text: "1 red bell pepper, cubed", ingredient: "red pepper", quantity: 1 },
        { text: "1 onion, cubed", ingredient: "onion", quantity: 1 },
        { text: "3 tbsp olive oil", ingredient: "olive oil", quantity: 3 },
        { text: "1 tbsp lemon juice", ingredient: "lemon juice", quantity: 1 },
        { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
        { text: "1 tsp paprika", ingredient: "paprika", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Toss the chicken with olive oil, lemon juice, garlic, paprika, and salt, then marinate in the fridge for at least 30 minutes, or up to overnight - this is what actually earns the name 'marinated' instead of just tossed and grilled.",
        "Thread the chicken, pepper, and onion onto skewers.",
        "Grill over medium-high heat, turning occasionally, for 12-15 minutes until cooked through.",
        "Serve hot.",
      ],
      tags: ["dinner", "quick"],
    },
    bg: {
      title: "Пилешки шишчета на скара",
      description:
        "Пилешки парченца, наистина маринована за реално време в зехтин, червен пипер и лимонов сок преди печене на скара на шишчета с чушки и лук - разбъркването на пилето и незабавно печене, което правят повечето бързи версии, изобщо не е мариноване и оставя месото недостатъчно подправено.",
      steps: [
        "Разбъркайте пилето със зехтин, лимонов сок, чесън, червен пипер и сол, после мариновайте в хладилника за поне 30 минути, или до цяла нощ - това е, което наистина заслужава името 'маринован', вместо просто разбъркан и изпечен.",
        "Нанижете пилето, чушката и лука на шишчета.",
        "Изпечете на скара на среден до силен огън, обръщайки от време на време, 12-15 минути до готовност.",
        "Сервирайте горещо.",
      ],
      ingredients: [
        "700 г пилешка гърда, нарязана на кубчета",
        "1 червена чушка, нарязана на кубчета",
        "1 лук, нарязан на кубчета",
        "3 с.л. зехтин",
        "1 с.л. лимонов сок",
        "2 скилидки чесън, ситно нарязани",
        "1 ч.л. червен пипер",
        "Сол на вкус",
      ],
    },
  },
  {
    en: {
      slug: "grilled-chicken-wrap",
      title: "Grilled Chicken Wrap",
      description:
        "Juicy grilled chicken seasoned before it hits the pan, lettuce, and dressing rolled up in a soft tortilla - cooking chicken plain and relying on the dressing alone for flavor is why most wraps taste bland at the center.",
      imageEmoji: "🌯",
      cookTimeMinutes: 20,
      servings: 2,
      ingredients: [
        { text: "1 chicken breast, sliced", ingredient: "chicken breast", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
        { text: "2 large flour tortillas", ingredient: "flour tortillas", quantity: 2 },
        { text: "1 cup shredded lettuce", ingredient: "lettuce", quantity: 1 },
        { text: "3 tbsp ranch dressing", ingredient: "ranch dressing", quantity: 3 },
        { text: "1 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 1 },
      ],
      steps: [
        "Season the chicken with salt and pepper.",
        "Cook the chicken in oil over medium-high heat for 5-6 minutes per side until cooked through.",
        "Warm the tortillas slightly so they fold easily.",
        "Spread ranch dressing on each tortilla, then top with lettuce and sliced chicken.",
        "Roll up tightly and slice in half.",
      ],
      tags: ["lunch", "quick"],
    },
    bg: {
      title: "Рол с пиле на скара",
      description:
        "Сочно пиле на скара, подправено преди да влезе в тигана, салата и сос, завити в мека тортила - готвенето на пилето обикновено и разчитането само на соса за вкус е причината повечето ролове да имат безвкусен център.",
      steps: [
        "Подправете пилето със сол и черен пипер.",
        "Изпечете пилето в олио на среден до силен огън по 5-6 минути от всяка страна до готовност.",
        "Затоплете леко тортилите, за да се сгъват лесно.",
        "Намажете сос ранч върху всяка тортила, после добавете салата и нарязано пиле.",
        "Завийте стегнато и нарежете наполовина.",
      ],
      ingredients: [
        "1 пилешка гърда, нарязана",
        "Сол на вкус",
        "Черен пипер на вкус",
        "2 големи пшенични тортили",
        "1 чаша настъргана салата",
        "3 с.л. сос ранч",
        "1 с.л. олио",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
