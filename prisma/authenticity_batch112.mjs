import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "breakfast-casserole",
      title: "Breakfast Casserole",
      description:
        "A baked egg casserole with sausage, cheese, and bread that soaks overnight before baking - letting the bread sit in the egg custard is what actually makes this make-ahead friendly and custardy, not just calling it that while baking it the same day.",
      imageEmoji: "🍳",
      cookTimeMinutes: 60,
      servings: 8,
      ingredients: [
        { text: "1 lb breakfast sausage, cooked", ingredient: "breakfast sausage", quantity: 1 },
        { text: "6 cups cubed bread", ingredient: "bread", quantity: 6 },
        { text: "8 eggs", ingredient: "eggs", quantity: 8 },
        { text: "2 cups milk", ingredient: "milk", quantity: 2 },
        { text: "2 cups shredded cheddar cheese", ingredient: "cheddar cheese", quantity: 2 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Grease a baking dish and layer the bread cubes, sausage, and cheese in the dish.",
        "Whisk together the eggs, milk, salt, and pepper, then pour evenly over the top.",
        "Cover and refrigerate for at least 4 hours, or overnight - this is what lets the bread actually absorb the custard instead of staying dry in the center.",
        "Preheat oven to 350°F.",
        "Bake for 45 minutes until set and golden.",
      ],
      tags: ["breakfast"],
    },
    bg: {
      title: "Гювеч за закуска",
      description:
        "Печен яйчен гювеч с наденица, сирене и хляб, накиснат през нощта преди печене - оставянето на хляба в яйчения крем е това, което наистина го прави удобен за приготвяне предварително и кремообразен, а не само наречен така, докато се пече в същия ден.",
      steps: [
        "Намажете тава с мазнина и наредете кубчетата хляб, наденицата и сиренето в тавата.",
        "Разбийте яйцата с млякото, солта и черния пипер, после залейте равномерно отгоре.",
        "Покрийте и приберете в хладилника за поне 4 часа или през нощта - това е, което позволява на хляба наистина да попие крема, вместо да остане сух в средата.",
        "Загрейте фурната на 180°C.",
        "Печете 45 минути до стягане и златисто.",
      ],
      ingredients: [
        "450 г наденица за закуска, сготвена",
        "6 чаши хляб, нарязан на кубчета",
        "8 яйца",
        "2 чаши мляко",
        "2 чаши настъргано чедър сирене",
        "Сол на вкус",
        "Черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "breakfast-hash",
      title: "Breakfast Hash",
      description:
        "Crispy pan-fried potatoes with peppers and onion, topped with a fried egg - parboiling the potatoes first is what lets them cook through and crisp at the same time, instead of burning outside while staying raw in the middle.",
      imageEmoji: "🥔",
      cookTimeMinutes: 25,
      servings: 2,
      ingredients: [
        { text: "3 potatoes, diced", ingredient: "potato", quantity: 3 },
        { text: "1/2 onion, diced", ingredient: "onion", quantity: 0.5 },
        { text: "1/2 green bell pepper, diced", ingredient: "green pepper", quantity: 0.5 },
        { text: "2 eggs", ingredient: "eggs", quantity: 2 },
        { text: "3 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 3 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Parboil the diced potatoes in salted water for 5 minutes, then drain and pat dry - this is what lets them finish cooking through in the pan without burning on the outside.",
        "Heat oil in a skillet and cook the parboiled potatoes over medium-high heat in a single layer, stirring occasionally, for 10-12 minutes until golden and crisp - crowding the pan is what steams potatoes instead of crisping them.",
        "Add the onion and green pepper, cooking for another 5 minutes until softened.",
        "Season with salt and push the hash to one side of the pan.",
        "Fry the eggs in the empty space until done to your liking, then serve on top of the hash.",
      ],
      tags: ["breakfast", "vegetarian"],
    },
    bg: {
      title: "Хаш за закуска",
      description:
        "Хрупкави картофи, изпечени в тиган с чушки и лук, покрити с пържено яйце - предварителното сваряване на картофите е това, което им позволява да се сготвят докрай и да станат хрупкави едновременно, вместо да изгорят отвън, докато останат сурови отвътре.",
      steps: [
        "Сварете леко нарязаните картофи в подсолена вода за 5 минути, после отцедете и подсушете - това е, което им позволява да се сготвят докрай в тигана, без да изгорят отвън.",
        "Загрейте олио в тиган и гответе сварените картофи на средно-силен огън в един слой, разбърквайки от време на време, 10-12 минути до златисто и хрупкаво - претрупването на тигана е това, което задушава картофите на пара, вместо да ги направи хрупкави.",
        "Добавете лука и зелената чушка, гответе още 5 минути до омекване.",
        "Подправете със сол и избутайте хаша настрани в тигана.",
        "Изпържете яйцата в празното място до желаната готовност, после сервирайте върху хаша.",
      ],
      ingredients: [
        "3 картофа, нарязани на кубчета",
        "1/2 лук, нарязан на кубчета",
        "1/2 зелена чушка, нарязана на кубчета",
        "2 яйца",
        "3 с.л. олио",
        "Сол на вкус",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
