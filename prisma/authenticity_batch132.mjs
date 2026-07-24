import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "lentil-shepherds-pie",
      title: "Lentil Shepherd's Pie",
      description:
        "A vegetarian take on shepherd's pie with a hearty lentil and vegetable filling deepened with tomato paste and thyme, topped with well-seasoned mashed potatoes - a filling built on lentils and broth alone, with nothing to season the potato topping, is why most versions taste watery and bland.",
      imageEmoji: "🥘",
      cookTimeMinutes: 55,
      servings: 6,
      ingredients: [
        { text: "2 cups cooked lentils", ingredient: "lentils", quantity: 2 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "2 carrots, diced", ingredient: "carrot", quantity: 2 },
        { text: "1 tbsp tomato paste", ingredient: "tomato paste", quantity: 1 },
        { text: "1/2 tsp dried thyme", ingredient: "thyme", quantity: 0.5 },
        { text: "1 cup vegetable broth", ingredient: "vegetable broth", quantity: 1 },
        { text: "4 potatoes, boiled and mashed", ingredient: "potato", quantity: 4 },
        { text: "2 tbsp butter", ingredient: "butter", quantity: 2 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Preheat oven to 375°F.",
        "Sauté the onion and carrots until softened, then stir in the tomato paste and thyme and cook for 1 minute.",
        "Add the lentils and vegetable broth, season with salt and pepper, and simmer for 5 minutes until slightly thickened.",
        "Spread the lentil mixture into a baking dish and top with mashed potatoes mixed with butter and seasoned with salt and pepper.",
        "Bake for 25-30 minutes until golden on top.",
      ],
      tags: ["dinner", "vegan", "vegetarian"],
    },
    bg: {
      title: "Пастирски пай с леща",
      description:
        "Вегетарианска версия на пастирски пай със сита плънка от леща и зеленчуци, задълбочена с доматено пюре и мащерка, покрита с добре подправено картофено пюре - плънка, изградена само от леща и бульон, без нищо да подправи картофената покривка, е причината повечето версии да имат воднист и безвкусен резултат.",
      steps: [
        "Загрейте фурната на 190°C.",
        "Задушете лука и морковите до омекване, после разбъркайте доматеното пюре и мащерката и гответе 1 минута.",
        "Добавете лещата и зеленчуковия бульон, подправете със сол и черен пипер, и къкрете 5 минути до леко сгъстяване.",
        "Разпределете сместа от леща в тава и отгоре сложете пюре от картофи, смесено с масло и подправено със сол и черен пипер.",
        "Печете 25-30 минути до златисто отгоре.",
      ],
      ingredients: [
        "2 чаши сготвена леща",
        "1 лук, нарязан на кубчета",
        "2 моркова, нарязани на кубчета",
        "1 с.л. доматено пюре",
        "1/2 ч.л. сушена мащерка",
        "1 чаша зеленчуков бульон",
        "4 картофа, сварени и намачкани",
        "2 с.л. масло",
        "Сол на вкус",
        "Черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "broccoli-rice-casserole",
      title: "Broccoli Rice Casserole",
      description:
        "A cheesy, comforting bake of rice, broccoli, and creamy sauce, seasoned with onion and garlic powder and black pepper - canned soup alone with nothing else added is why this casserole often tastes one-note and gluey.",
      imageEmoji: "🥦",
      cookTimeMinutes: 45,
      servings: 6,
      ingredients: [
        { text: "3 cups cooked rice", ingredient: "rice", quantity: 3 },
        { text: "3 cups broccoli florets, steamed", ingredient: "broccoli", quantity: 3 },
        { text: "2 cups shredded cheddar cheese", ingredient: "cheddar cheese", quantity: 2 },
        { text: "1 can cream of mushroom soup", ingredient: "cream of mushroom soup", quantity: 1 },
        { text: "1/2 cup milk", ingredient: "milk", quantity: 0.5 },
        { text: "1/2 tsp onion powder", ingredient: "onion powder", quantity: 0.5 },
        { text: "1/2 tsp garlic powder", ingredient: "garlic powder", quantity: 0.5 },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Preheat oven to 350°F.",
        "Mix the rice, broccoli, half the cheese, cream of mushroom soup, milk, onion powder, garlic powder, and pepper in a baking dish.",
        "Top with the remaining cheese.",
        "Bake for 25-30 minutes until bubbly and golden.",
      ],
      tags: ["dinner", "vegetarian"],
    },
    bg: {
      title: "Гювеч от броколи и ориз",
      description:
        "Сирен, уютен гювеч от ориз, броколи и кремообразен сос, подправен с лучен и чеснов прах и черен пипер - консервираната супа сама по себе си, без нищо друго добавено, е причината този гювеч често да има еднообразен и лепкав вкус.",
      steps: [
        "Загрейте фурната на 180°C.",
        "Смесете ориза, броколите, половината сирене, крем супата от гъби, млякото, лучения прах, чесновия прах и черния пипер в тава.",
        "Отгоре сложете останалото сирене.",
        "Печете 25-30 минути до къкрене и златисто.",
      ],
      ingredients: [
        "3 чаши сготвен ориз",
        "3 чаши съцветия броколи, задушени на пара",
        "2 чаши настъргано чедър сирене",
        "1 консерва крем супа от гъби",
        "1/2 чаша мляко",
        "1/2 ч.л. лучен прах",
        "1/2 ч.л. чеснов прах",
        "Черен пипер на вкус",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
