import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "beef-tacos",
      title: "Beef Tacos",
      description:
        "Weeknight ground beef tacos with a full homemade spice blend - garlic powder and oregano round out the usual chili powder and cumin, and charring the tortillas over an open flame or dry skillet instead of just warming them is what gives them real smoky flavor and pliability.",
      imageEmoji: "🌮",
      cookTimeMinutes: 20,
      servings: 4,
      ingredients: [
        { text: "1 lb ground beef", ingredient: "ground beef", quantity: 1 },
        { text: "8 small corn tortillas", ingredient: "corn tortillas", quantity: 8 },
        { text: "1 tbsp chili powder", ingredient: "chili powder", quantity: 1 },
        { text: "1 tsp cumin", ingredient: "cumin", quantity: 1 },
        { text: "1/2 tsp paprika", ingredient: "paprika", quantity: 0.5 },
        { text: "1/2 tsp garlic powder", ingredient: "garlic powder", quantity: 0.5 },
        { text: "1/2 tsp dried oregano", ingredient: "oregano", quantity: 0.5 },
        { text: "1/2 tsp salt", ingredient: "salt", quantity: 0.5 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "Shredded lettuce for topping", ingredient: "lettuce", quantity: null },
        { text: "Diced tomato for topping", ingredient: "tomato", quantity: null },
        { text: "Shredded cheese for topping", ingredient: "cheese", quantity: null },
      ],
      steps: [
        "Cook the diced onion in a pan over medium heat until softened.",
        "Add the ground beef and cook until browned, breaking it up as it cooks, then drain any excess grease.",
        "Stir in chili powder, cumin, paprika, garlic powder, oregano, and salt; cook for another 2 minutes.",
        "Char the tortillas directly over an open flame or in a dry skillet until lightly spotted and pliable - charring instead of just warming is what gives real taco flavor and keeps them from cracking when folded.",
        "Fill the tortillas with the beef mixture.",
        "Top with lettuce, tomato, and cheese.",
      ],
      tags: ["dinner", "quick"],
    },
    bg: {
      title: "Тако с телешко месо",
      description:
        "Бързи такос с кайма и пълна домашна подправка - чеснов прах и риган допълват обичайния лютив пипер на прах и кимион, а овъгляването на тортилите на открит пламък или в сух тиган, вместо просто затопляне, е това, което им придава истински димен вкус и гъвкавост.",
      steps: [
        "Гответе нарязания лук в тиган на среден огън до омекване.",
        "Добавете каймата и гответе до запържване, разбивайки я по време на готвене, после отцедете излишната мазнина.",
        "Добавете лютив пипер на прах, кимион, червен пипер, чеснов прах, риган и сол; гответе още 2 минути.",
        "Овъглете тортилите директно на открит пламък или в сух тиган, докато се появят леки петна и станат гъвкави - овъгляването, вместо просто затопляне, е това, което придава истински вкус на тако и пречи да се напукат при сгъване.",
        "Напълнете тортилите с месната смес.",
        "Гарнирайте със салата, домат и сирене.",
      ],
      ingredients: [
        "450 г кайма от телешко месо",
        "8 малки царевични тортили",
        "1 с.л. лютив пипер на прах",
        "1 ч.л. кимион",
        "1/2 ч.л. червен пипер",
        "1/2 ч.л. чеснов прах",
        "1/2 ч.л. сушен риган",
        "1/2 ч.л. сол",
        "1 лук, нарязан на кубчета",
        "Настъргана маруля за гарниране",
        "Нарязан домат за гарниране",
        "Настъргано сирене за гарниране",
      ],
    },
  },
  {
    en: {
      slug: "black-bean-tacos",
      title: "Black Bean Tacos",
      description:
        "Seasoned black beans simmered with garlic and a splash of their own liquid until saucy, tucked into tortillas charred over a flame for real flavor - beans mashed dry with just cumin are what makes most quick veggie tacos taste flat.",
      imageEmoji: "🌮",
      cookTimeMinutes: 20,
      servings: 4,
      ingredients: [
        { text: "2 cans black beans, drained, 1/4 cup liquid reserved", ingredient: "black beans", quantity: 2 },
        { text: "1 tsp cumin", ingredient: "cumin", quantity: 1 },
        { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
        { text: "1 tbsp lime juice", ingredient: "lime juice", quantity: 1 },
        { text: "8 small corn tortillas", ingredient: "corn tortillas", quantity: 8 },
        { text: "1 cup shredded lettuce", ingredient: "lettuce", quantity: 1 },
        { text: "1/2 cup salsa", ingredient: "salsa", quantity: 0.5 },
      ],
      steps: [
        "Warm the black beans with the garlic, cumin, and reserved bean liquid in a saucepan, mashing slightly and simmering until saucy, about 5 minutes - the reserved liquid is what keeps the beans from drying out into a paste.",
        "Stir in the lime juice.",
        "Char the tortillas directly over an open flame or in a dry skillet until lightly spotted.",
        "Fill each tortilla with black beans and lettuce.",
        "Top with salsa before serving.",
      ],
      tags: ["dinner", "vegan", "vegetarian", "mexican", "quick"],
    },
    bg: {
      title: "Тако с черен боб",
      description:
        "Подправен черен боб, къкрен с чесън и малко от собствената си течност до сгъстяване, поставен в тортили, овъглени на пламък за истински вкус - боб, намачкан сух само с кимион, е това, което прави повечето бързи вегетариански такос безвкусни.",
      steps: [
        "Затоплете черния боб с чесъна, кимиона и запазената течност от боба в тенджера, намачквайки леко и къкрейки до сгъстяване, около 5 минути - запазената течност е това, което пази боба да не изсъхне до паста.",
        "Разбъркайте с лимоновия сок.",
        "Овъглете тортилите директно на открит пламък или в сух тиган, докато се появят леки петна.",
        "Напълнете всяка тортила с черен боб и маруля.",
        "Отгоре сложете салса преди сервиране.",
      ],
      ingredients: [
        "2 консерви черен боб, отцеден, 1/4 чаша течност запазена",
        "1 ч.л. кимион",
        "2 скилидки чесън, ситно нарязани",
        "1 с.л. лимонов сок",
        "8 малки царевични тортили",
        "1 чаша настъргана маруля",
        "1/2 чаша салса",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
