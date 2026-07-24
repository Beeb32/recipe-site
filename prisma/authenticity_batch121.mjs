import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "chicken-fried-rice",
      title: "Chicken Fried Rice",
      description:
        "Wok-fried rice with chicken, egg, garlic, and vegetables finished with a drizzle of sesame oil - day-old cold rice is what keeps the grains separate instead of turning into a sticky clump, and garlic is a near-universal ingredient in fried rice that this version was missing.",
      imageEmoji: "🍚",
      cookTimeMinutes: 20,
      servings: 4,
      ingredients: [
        { text: "3 cups cooked, cold rice", ingredient: "rice", quantity: 3 },
        { text: "2 chicken breasts, diced", ingredient: "chicken breast", quantity: 2 },
        { text: "2 eggs, beaten", ingredient: "eggs", quantity: 2 },
        { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
        { text: "1 cup frozen peas and carrots", ingredient: "peas and carrots", quantity: 1 },
        { text: "3 green onions, sliced", ingredient: "green onion", quantity: 3 },
        { text: "3 tbsp soy sauce", ingredient: "soy sauce", quantity: 3 },
        { text: "1 tsp sesame oil", ingredient: "sesame oil", quantity: 1 },
        { text: "2 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 2 },
      ],
      steps: [
        "Heat 1 tbsp oil in a large wok and scramble the eggs, then set aside.",
        "Add the remaining oil and stir-fry the chicken and garlic until the chicken is cooked through.",
        "Add the peas and carrots and cook for 2 minutes.",
        "Add the cold rice, breaking up any clumps, and stir-fry for 3-4 minutes.",
        "Stir in the eggs, soy sauce, and green onions, tossing until well combined, then finish with a drizzle of sesame oil.",
      ],
      tags: ["dinner", "quick", "asian"],
    },
    bg: {
      title: "Пържен ориз с пиле",
      description:
        "Пържен в уок ориз с пиле, яйце, чесън и зеленчуци, завършен с малко сусамово масло - оризът отпреди един ден, студен, е това, което пази зърната отделени, вместо да се слепят в лепкава буца, а чесънът е почти задължителна съставка в пържения ориз, която липсваше в тази версия.",
      steps: [
        "Загрейте 1 с.л. олио в голям уок и разбъркайте яйцата, после отделете настрани.",
        "Добавете останалото олио и запържете пилето и чесъна, докато пилето се сготви напълно.",
        "Добавете граха и морковите и гответе 2 минути.",
        "Добавете студения ориз, разбивайки бучките, и запържете 3-4 минути.",
        "Добавете яйцата, соевия сос и пресния лук, разбърквайки добре, после завършете с малко сусамово масло.",
      ],
      ingredients: [
        "3 чаши сготвен, студен ориз",
        "2 пилешки гърди, нарязани на кубчета",
        "2 разбити яйца",
        "2 скилидки чесън, ситно нарязани",
        "1 чаша замразен грах и моркови",
        "3 стръка пресен лук, нарязани",
        "3 с.л. соев сос",
        "1 ч.л. сусамово масло",
        "2 с.л. олио",
      ],
    },
  },
  {
    en: {
      slug: "chicken-alfredo-skillet",
      title: "Chicken Alfredo Skillet",
      description:
        "Tender chicken and pasta tossed in a rich, creamy garlic Parmesan sauce, with seasoned chicken and a splash of reserved pasta water loosening the sauce - unseasoned chicken and a sauce with nothing to thin it are why most one-pan Alfredo turns bland and gluey.",
      imageEmoji: "🍝",
      cookTimeMinutes: 30,
      servings: 4,
      ingredients: [
        { text: "2 chicken breasts, sliced", ingredient: "chicken breast", quantity: 2 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
        { text: "1 lb fettuccine", ingredient: "fettuccine", quantity: 1 },
        { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
        { text: "2 cups heavy cream", ingredient: "heavy cream", quantity: 2 },
        { text: "1 cup grated Parmesan", ingredient: "parmesan", quantity: 1 },
        { text: "2 tbsp butter", ingredient: "butter", quantity: 2 },
      ],
      steps: [
        "Cook the fettuccine in salted boiling water until al dente, then drain, reserving 1/2 cup pasta water.",
        "Season the chicken with salt and pepper and sear in butter in a large skillet until browned and cooked through; set aside.",
        "Add the garlic to the skillet and cook for 30 seconds, then add the cream and simmer until slightly thickened, then whisk in the Parmesan.",
        "Toss the pasta and chicken in the sauce, loosening with the reserved pasta water as needed, before serving.",
      ],
      tags: ["dinner", "italian", "quick"],
    },
    bg: {
      title: "Пиле Алфредо в тиган",
      description:
        "Крехко пиле и паста в наситен, кремообразен сос от чесън и пармезан, с подправено пиле и малко от запазената вода от пастата, разреждаща соса - неподправеното пиле и сос без нищо да го разреди са причината повечето Алфредо в един тиган да излезе безвкусно и лепкаво.",
      steps: [
        "Сварете фетучините в подсолена вряла вода до готовност, после отцедете, запазвайки 1/2 чаша от водата.",
        "Подправете пилето със сол и черен пипер и запържете в масло в голям тиган до запържване и готовност; отделете настрани.",
        "Добавете чесъна в тигана и гответе 30 секунди, после добавете сметаната и варете до леко сгъстяване, после добавете пармезана.",
        "Разбъркайте пастата и пилето в соса, разреждайки със запазената вода от пастата при нужда, преди сервиране.",
      ],
      ingredients: [
        "2 пилешки гърди, нарязани",
        "Сол на вкус",
        "Черен пипер на вкус",
        "450 г фетучини",
        "2 скилидки чесън, ситно нарязани",
        "2 чаши сметана за готвене",
        "1 чаша настърган пармезан",
        "2 с.л. масло",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
