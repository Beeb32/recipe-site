import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "grilled-steak",
      title: "Grilled Steak",
      description:
        "A simply seasoned steak grilled to a perfect crust and juicy center - salting well ahead of time, rather than right before grilling, is what lets the seasoning penetrate the meat and gives the sear a better crust.",
      imageEmoji: "🥩",
      cookTimeMinutes: 20,
      servings: 4,
      ingredients: [
        { text: "4 ribeye steaks", ingredient: "ribeye steak", quantity: 4 },
        { text: "3 tbsp olive oil", ingredient: "olive oil", quantity: 3 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Season the steaks generously with salt at least 40 minutes before grilling (or up to overnight, uncovered in the fridge) - salting ahead of time lets it penetrate the meat instead of just sitting on the surface.",
        "Pat the steaks dry and rub with olive oil and pepper just before grilling.",
        "Preheat the grill to high heat.",
        "Grill for 4-5 minutes per side for medium-rare.",
        "Rest for 5-10 minutes before slicing - cutting in too soon lets the juices run out onto the plate instead of redistributing through the meat.",
      ],
      tags: ["dinner", "quick"],
    },
    bg: {
      title: "Стек на скара",
      description:
        "Просто подправен стек, изпечен до перфектна коричка и сочен център - осоляването доста преди печене, вместо точно преди скарата, е това, което позволява на подправката да проникне в месото и придава на изпечената коричка по-добра текстура.",
      steps: [
        "Подправете стековете обилно със сол поне 40 минути преди печене (или до цяла нощ, непокрити в хладилника) - осоляването предварително позволява на солта да проникне в месото, вместо просто да остане на повърхността.",
        "Подсушете стековете и ги намажете със зехтин и черен пипер точно преди печене.",
        "Загрейте скарата на силен огън.",
        "Изпечете по 4-5 минути от всяка страна за средно препечено.",
        "Оставете да почине 5-10 минути преди нарязване - нарязването твърде рано изпуска соковете върху чинията, вместо да им позволи да се разпределят обратно в месото.",
      ],
      ingredients: ["4 рибай стека", "3 с.л. зехтин", "Сол на вкус", "Черен пипер на вкус"],
    },
  },
  {
    en: {
      slug: "green-bean-casserole",
      title: "Green Bean Casserole",
      description:
        "Tender green beans baked in a creamy mushroom sauce with soy sauce and black pepper, topped with crispy fried onions - this is Dorcas Reilly's original 1955 recipe developed at Campbell's, and soy sauce is the ingredient most modern versions leave out even though it was there from the start.",
      imageEmoji: "🥘",
      cookTimeMinutes: 40,
      servings: 8,
      ingredients: [
        { text: "4 cups green beans", ingredient: "green beans", quantity: 4 },
        { text: "2 cans cream of mushroom soup", ingredient: "cream of mushroom soup", quantity: 2 },
        { text: "1 cup milk", ingredient: "milk", quantity: 1 },
        { text: "1 tbsp soy sauce", ingredient: "soy sauce", quantity: 1 },
        { text: "1/4 tsp black pepper", ingredient: "black pepper", quantity: 0.25 },
        { text: "1 1/3 cups crispy fried onions", ingredient: "fried onions", quantity: 1.33 },
      ],
      steps: [
        "Preheat oven to 350°F.",
        "Mix the green beans, cream of mushroom soup, milk, soy sauce, and black pepper in a baking dish.",
        "Bake for 25 minutes.",
        "Top with fried onions and bake for another 5 minutes until golden.",
      ],
      tags: ["dinner", "vegetarian"],
    },
    bg: {
      title: "Гювеч със зелен боб",
      description:
        "Крехък зелен боб, запечен в кремообразен сос от гъби със соев сос и черен пипер, покрит с хрупкав пържен лук - това е оригиналната рецепта на Доркас Райли от 1955 г., разработена в Campbell's, и соевият сос е съставката, която повечето съвременни версии пропускат, макар да е била там от самото начало.",
      steps: [
        "Загрейте фурната на 180°C.",
        "Смесете зеления боб, крем супата от гъби, млякото, соевия сос и черния пипер в тава.",
        "Печете 25 минути.",
        "Отгоре сложете пържен лук и печете още 5 минути до златисто.",
      ],
      ingredients: [
        "4 чаши зелен боб",
        "2 консерви крем супа от гъби",
        "1 чаша мляко",
        "1 с.л. соев сос",
        "1/4 ч.л. черен пипер",
        "1 1/3 чаши хрупкав пържен лук",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
