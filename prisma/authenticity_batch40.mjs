import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "fettuccine-alfredo",
      title: "Fettuccine Alfredo",
      description:
        "Fettuccine tossed with butter, finely grated Parmigiano-Reggiano, and starchy pasta water emulsified off the heat - the original Roman recipe has no cream and no garlic; those are American additions that mask what makes the emulsion work.",
      imageEmoji: "🍝",
      cookTimeMinutes: 20,
      servings: 4,
      ingredients: [
        { text: "1 lb fettuccine", ingredient: "fettuccine", quantity: 1 },
        { text: "1/2 cup butter", ingredient: "butter", quantity: 0.5 },
        { text: "2 cups finely grated Parmigiano-Reggiano", ingredient: "parmesan", quantity: 2 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Cook the fettuccine in salted boiling water until al dente, reserving 1 1/2 cups of the starchy pasta water before draining.",
        "Melt the butter in a large skillet or bowl.",
        "Add the hot, drained pasta to the butter along with a splash of the pasta water and the Parmigiano-Reggiano, off the heat.",
        "Toss vigorously, adding more pasta water a little at a time, until the butter and cheese emulsify into a smooth, glossy sauce that coats the pasta - this starchy water is the real emulsifier, not cream.",
        "Season with salt and pepper and serve immediately.",
      ],
      tags: ["dinner", "italian", "quick", "vegetarian"],
    },
    bg: {
      title: "Фетучини Алфредо",
      description:
        "Фетучини, разбъркани с масло, фино настърган пармиджано реджано и скорбялена вода от пастата, емулгирани извън котлона - оригиналната римска рецепта не съдържа нито сметана, нито чесън; те са американски добавки, които прикриват това, което всъщност прави емулсията да се получи.",
      steps: [
        "Сварете фетучините в подсолена вряла вода до готовност, запазвайки 1 1/2 чаши от скорбялената вода преди отцеждане.",
        "Разтопете маслото в голям тиган или купа.",
        "Добавете горещата, отцедена паста в маслото заедно с малко от водата от пастата и пармиджано реджаното, извън котлона.",
        "Разбърквайте енергично, доливайки още вода от пастата на малки количества, докато маслото и сиренето се емулгират в гладък, лъскав сос, който покрива пастата - тази скорбялена вода е истинският емулгатор, не сметаната.",
        "Подправете със сол и черен пипер и сервирайте веднага.",
      ],
      ingredients: [
        "450 г фетучини",
        "1/2 чаша масло",
        "2 чаши фино настърган пармиджано реджано",
        "Сол на вкус",
        "Черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "eggplant-parmesan",
      title: "Eggplant Parmesan",
      description:
        "Salted and drained eggplant, fried until golden, layered with tomato sauce, torn basil, and mozzarella - salting draws out the bitterness and excess moisture that would otherwise make the dish watery and dense.",
      imageEmoji: "🍆",
      cookTimeMinutes: 105,
      servings: 6,
      ingredients: [
        { text: "2 eggplants, sliced", ingredient: "eggplant", quantity: 2 },
        { text: "Salt (for drawing out moisture)", ingredient: "salt", quantity: null },
        { text: "1 cup breadcrumbs", ingredient: "breadcrumbs", quantity: 1 },
        { text: "2 eggs, beaten", ingredient: "eggs", quantity: 2 },
        { text: "Olive oil, for frying", ingredient: "olive oil", quantity: null },
        { text: "2 cups marinara sauce", ingredient: "marinara sauce", quantity: 2 },
        { text: "1/4 cup fresh basil, torn", ingredient: "basil", quantity: 0.25 },
        { text: "2 cups shredded mozzarella (or fresh mozzarella, torn)", ingredient: "mozzarella", quantity: 2 },
        { text: "1/2 cup grated Parmesan", ingredient: "parmesan", quantity: 0.5 },
      ],
      steps: [
        "Salt the eggplant slices generously and let them sit in a colander for 1 hour to draw out excess moisture and bitterness, then rinse and pat dry - this step is what keeps the finished dish from turning watery and bitter.",
        "Preheat oven to 400°F.",
        "Dredge the eggplant slices in egg, then breadcrumbs, and fry in olive oil until golden on both sides; drain on paper towels.",
        "Layer the eggplant, marinara sauce, torn basil, mozzarella, and Parmesan in a baking dish, repeating twice.",
        "Bake for 20-25 minutes until bubbly.",
      ],
      tags: ["dinner", "italian", "vegetarian"],
    },
    bg: {
      title: "Патладжан пармиджано",
      description:
        "Осолен и отцеден патладжан, изпържен до златисто, наслоен с доматен сос, накъсан босилек и моцарела - осоляването изтегля горчивината и излишната влага, които иначе биха направили ястието водянисто и тежко.",
      steps: [
        "Осолете обилно резените патладжан и ги оставете в гевгир 1 час, за да се отцеди излишната влага и горчивина, после изплакнете и подсушете - тази стъпка е това, което пази готовото ястие да не стане водянисто и горчиво.",
        "Загрейте фурната на 200°C.",
        "Овалайте резените патладжан в яйце, после в галета, и ги изпържете в зехтин до златисто от двете страни; отцедете върху хартиена кърпа.",
        "Наредете на пластове патладжана, соса маринара, накъсания босилек, моцарелата и пармезана в тава, повтаряйки два пъти.",
        "Печете 20-25 минути до къкрене.",
      ],
      ingredients: [
        "2 патладжана, нарязани на резени",
        "Сол (за изтегляне на влагата)",
        "1 чаша галета",
        "2 разбити яйца",
        "Зехтин, за пържене",
        "2 чаши сос маринара",
        "1/4 чаша пресен босилек, накъсан",
        "2 чаши настъргана моцарела (или прясна моцарела, накъсана)",
        "1/2 чаша настърган пармезан",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
