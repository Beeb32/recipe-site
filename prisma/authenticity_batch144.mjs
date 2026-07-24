import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "quick-stovetop-mac-and-cheese",
      title: "Quick Stovetop Mac and Cheese",
      description:
        "Creamy, cheesy macaroni made entirely on the stovetop in about fifteen minutes, sharpened with a touch of dry mustard - a cheese sauce built with nothing but cheese and milk is why quick stovetop versions can taste flat compared to the baked kind.",
      imageEmoji: "🧀",
      cookTimeMinutes: 15,
      servings: 4,
      ingredients: [
        { text: "1 lb elbow macaroni", ingredient: "elbow macaroni", quantity: 1 },
        { text: "3 tbsp butter", ingredient: "butter", quantity: 3 },
        { text: "3 tbsp flour", ingredient: "flour", quantity: 3 },
        { text: "2 cups milk", ingredient: "milk", quantity: 2 },
        { text: "1/4 tsp dry mustard", ingredient: "dry mustard", quantity: 0.25 },
        { text: "2 cups shredded cheddar cheese", ingredient: "cheddar cheese", quantity: 2 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Cook the macaroni in salted boiling water until al dente, then drain.",
        "Melt the butter in a saucepan, whisk in the flour, and cook for 1 minute.",
        "Gradually whisk in the milk and dry mustard and simmer until thickened.",
        "Remove from heat, stir in the cheddar cheese until melted, season with salt and pepper, then toss with the macaroni.",
      ],
      tags: ["dinner", "quick", "vegetarian"],
    },
    bg: {
      title: "Бърза паста с кашкавал на котлона",
      description:
        "Кремообразни, сирени макарони, приготвени изцяло на котлона за около петнайсет минути, изострени с щипка сух синап - сос от сирене, направен само от сирене и мляко, е причината бързите версии на котлона да имат по-плосък вкус в сравнение с печените.",
      steps: [
        "Сварете макароните в подсолена вряла вода до готовност, после отцедете.",
        "Разтопете маслото в тенджерка, разбъркайте с брашното и гответе 1 минута.",
        "Постепенно добавяйте млякото и сухия синап и варете до сгъстяване.",
        "Свалете от котлона, добавете чедъра до разтапяне, подправете със сол и черен пипер, после разбъркайте с макароните.",
      ],
      ingredients: [
        "450 г макарони",
        "3 с.л. масло",
        "3 с.л. брашно",
        "2 чаши мляко",
        "1/4 ч.л. сух синап",
        "2 чаши настъргано чедър сирене",
        "Сол на вкус",
        "Черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "cheesy-rice",
      title: "Cheesy Rice",
      description:
        "Fluffy rice stirred with melted cheddar, seasoned with garlic powder and pepper - cheese and butter alone with no other seasoning is why quick cheesy rice can taste one-note despite all that cheese.",
      imageEmoji: "🧀",
      cookTimeMinutes: 25,
      servings: 4,
      ingredients: [
        { text: "2 cups rice", ingredient: "rice", quantity: 2 },
        { text: "4 cups chicken broth", ingredient: "chicken broth", quantity: 4 },
        { text: "1 1/2 cups shredded cheddar cheese", ingredient: "cheddar cheese", quantity: 1.5 },
        { text: "2 tbsp butter", ingredient: "butter", quantity: 2 },
        { text: "1/2 tsp garlic powder", ingredient: "garlic powder", quantity: 0.5 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Cook the rice in the chicken broth according to package instructions until tender.",
        "Stir in the butter, cheddar cheese, and garlic powder while the rice is still hot.",
        "Stir until the cheese is fully melted and creamy, then season with salt and pepper.",
      ],
      tags: ["dinner", "quick", "vegetarian"],
    },
    bg: {
      title: "Ориз със сирене",
      description:
        "Пухкав ориз, разбъркан с разтопено чедър сирене, подправен с чеснов прах и черен пипер - сирене и масло сами по себе си, без никакво друго подправяне, е причината бързият ориз със сирене често да има еднообразен вкус, въпреки цялото това сирене.",
      steps: [
        "Сварете ориза в пилешкия бульон според инструкциите на опаковката до омекване.",
        "Добавете маслото, чедъра и чесновия прах, докато оризът е още топъл.",
        "Разбърквайте, докато сиренето се разтопи напълно и стане кремообразно, после подправете със сол и черен пипер.",
      ],
      ingredients: [
        "2 чаши ориз",
        "4 чаши пилешки бульон",
        "1 1/2 чаши настърган чедър сирене",
        "2 с.л. масло",
        "1/2 ч.л. чеснов прах",
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
