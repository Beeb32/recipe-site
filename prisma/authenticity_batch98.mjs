import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "baked-bbq-chicken",
      title: "Baked BBQ Chicken",
      description:
        "Chicken thighs baked until tender and glazed with sticky barbecue sauce applied in stages so the sugars caramelize instead of burn - brushing on the full amount at the start is what causes most baked BBQ chicken to come out with a scorched, bitter glaze.",
      imageEmoji: "🍗",
      cookTimeMinutes: 45,
      servings: 4,
      ingredients: [
        { text: "4 chicken thighs", ingredient: "chicken thighs", quantity: 4 },
        { text: "1 cup barbecue sauce", ingredient: "barbecue sauce", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Preheat oven to 400°F.",
        "Season the chicken thighs with salt and pepper and place in a baking dish.",
        "Brush with a thin, light layer of barbecue sauce and bake for 20 minutes.",
        "Brush with more barbecue sauce and continue baking for 15-20 minutes, until cooked through and the glaze is sticky - saving the heaviest coat for the final stretch is what keeps the sugars from scorching.",
        "Let rest for 5 minutes before serving.",
      ],
      tags: ["dinner", "quick"],
    },
    bg: {
      title: "Печено пиле барбекю",
      description:
        "Пилешки бутчета, печени до омекване и глазирани със соса барбекю на етапи, за да карамелизира захарта, вместо да изгори - намазването с цялото количество в началото е това, което кара повечето печени пилета барбекю да излязат с прегоряла, горчива глазура.",
      steps: [
        "Загрейте фурната на 200°C.",
        "Подправете пилешките бутчета със сол и черен пипер и поставете в тава.",
        "Намажете с тънък, лек слой сос барбекю и печете 20 минути.",
        "Намажете с още сос барбекю и продължете да печете 15-20 минути, до готовност и лепкава глазура - оставянето на най-обилния слой за накрая е това, което пази захарта от прегаряне.",
        "Оставете да почине 5 минути преди сервиране.",
      ],
      ingredients: ["4 пилешки бутчета", "1 чаша сос барбекю", "Сол на вкус", "Черен пипер на вкус"],
    },
  },
  {
    en: {
      slug: "bbq-pulled-chicken",
      title: "BBQ Pulled Chicken",
      description:
        "Tender shredded chicken simmered back in tangy barbecue sauce rather than just tossed cold, so the meat actually absorbs the sauce instead of sitting under it, piled onto buns.",
      imageEmoji: "🍗",
      cookTimeMinutes: 40,
      servings: 6,
      ingredients: [
        { text: "2 lb chicken breasts", ingredient: "chicken breast", quantity: 2 },
        { text: "Salt and pepper to taste", ingredient: "salt and pepper", quantity: null },
        { text: "1 1/2 cups barbecue sauce", ingredient: "barbecue sauce", quantity: 1.5 },
        { text: "1 cup chicken broth", ingredient: "chicken broth", quantity: 1 },
        { text: "6 hamburger buns", ingredient: "hamburger buns", quantity: 6 },
      ],
      steps: [
        "Season the chicken breasts with salt and pepper, then simmer in the chicken broth until cooked through, about 20 minutes.",
        "Shred the chicken with two forks.",
        "Return the shredded chicken to the pot with the barbecue sauce and simmer for 5-10 minutes, stirring occasionally - simmering it in the sauce instead of just tossing is what lets the meat actually absorb the flavor instead of sitting under it.",
        "Pile onto buns and serve.",
      ],
      tags: ["dinner", "quick"],
    },
    bg: {
      title: "Накъсано пиле барбекю",
      description:
        "Крехко накъсано пиле, къкрено обратно в пикантен сос барбекю, вместо просто разбъркано студено, за да попие месото соса, вместо да стои под него, натрупано върху хлебчета.",
      steps: [
        "Подправете пилешките гърди със сол и черен пипер, после ги варете в пилешкия бульон до готовност, около 20 минути.",
        "Накъсайте пилето с две вилици.",
        "Върнете накъсаното пиле в тенджерата със соса барбекю и къкрете 5-10 минути, като разбърквате от време на време - къкренето в соса, вместо просто разбъркване, е това, което позволява на месото наистина да попие вкуса, вместо да стои под него.",
        "Натрупайте върху хлебчета и сервирайте.",
      ],
      ingredients: [
        "900 г пилешки гърди",
        "Сол и черен пипер на вкус",
        "1 1/2 чаши сос барбекю",
        "1 чаша пилешки бульон",
        "6 хлебчета за бургер",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
