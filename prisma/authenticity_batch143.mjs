import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "cheese-and-crackers-platter",
      title: "Cheese and Crackers Platter",
      description:
        "An easy no-cook snack platter of sliced cheese and crunchy crackers, with the cheese brought to room temperature and a drizzle of honey alongside - cold cheese straight from the fridge mutes its flavor, and honey is the classic sweet contrast most quick platters skip.",
      imageEmoji: "🧀",
      cookTimeMinutes: 10,
      servings: 4,
      ingredients: [
        { text: "8 oz assorted cheese, sliced", ingredient: "cheese", quantity: 8 },
        { text: "1 box crackers", ingredient: "crackers", quantity: 1 },
        { text: "1 cup grapes", ingredient: "grapes", quantity: 1 },
        { text: "2 tbsp honey, for drizzling", ingredient: "honey", quantity: 2 },
      ],
      steps: [
        "Let the cheese sit at room temperature for 30 minutes before serving - cold cheese straight from the fridge is why it tastes muted instead of full-flavored.",
        "Arrange the sliced cheese on a platter.",
        "Add the crackers and grapes around the cheese, and drizzle a little honey over the cheese - the honey is the sweet contrast that keeps a cheese platter from tasting one-note.",
        "Serve at room temperature.",
      ],
      tags: ["snack", "vegetarian", "quick"],
    },
    bg: {
      title: "Плато със сирене и крекери",
      description:
        "Лесно плато без готвене от нарязано сирене и хрупкави крекери, със сиренето, оставено да достигне стайна температура, и малко мед за поливане - студеното сирене направо от хладилника заглушава вкуса му, а медът е класическият сладък контраст, който повечето бързи плата пропускат.",
      steps: [
        "Оставете сиренето на стайна температура за 30 минути преди сервиране - студеното сирене направо от хладилника е причината да има заглушен, а не пълен вкус.",
        "Наредете нарязаното сирене върху плато.",
        "Добавете крекерите и гроздето около сиренето, и полейте малко мед върху сиренето - медът е сладкият контраст, който пази плато със сирене от еднообразен вкус.",
        "Сервирайте на стайна температура.",
      ],
      ingredients: ["225 г разнообразно сирене, нарязано", "1 кутия крекери", "1 чаша грозде", "2 с.л. мед, за поливане"],
    },
  },
  {
    en: {
      slug: "cheese-ball",
      title: "Cheese Ball",
      description:
        "A creamy, tangy cheese ball rolled in chopped nuts - a splash of Worcestershire sauce and green onion is what gives real party cheese balls their savory depth, which a plain cream cheese and cheddar mix alone is missing.",
      imageEmoji: "🧀",
      cookTimeMinutes: 20,
      servings: 10,
      ingredients: [
        { text: "16 oz cream cheese, softened", ingredient: "cream cheese", quantity: 16 },
        { text: "2 cups shredded cheddar cheese", ingredient: "cheddar cheese", quantity: 2 },
        { text: "2 tsp garlic powder", ingredient: "garlic powder", quantity: 2 },
        { text: "1 tsp Worcestershire sauce", ingredient: "worcestershire sauce", quantity: 1 },
        { text: "2 green onions, finely chopped", ingredient: "green onion", quantity: 2 },
        { text: "1/4 tsp salt", ingredient: "salt", quantity: 0.25 },
        { text: "1 cup chopped pecans", ingredient: "pecans", quantity: 1 },
      ],
      steps: [
        "Mix the cream cheese, cheddar cheese, garlic powder, Worcestershire sauce, green onions, and salt until well combined.",
        "Shape the mixture into a ball.",
        "Roll the ball in chopped pecans to coat.",
        "Chill for at least 1 hour before serving with crackers.",
      ],
      tags: ["snack", "vegetarian"],
    },
    bg: {
      title: "Сиренена топка",
      description:
        "Кремообразна, кисела сиренена топка, овалена в нарязани орехи - малко уорчестърски сос и пресен лук е това, което придава на истинските парти сиренени топки тяхната солена дълбочина, каквато обикновената смес от крема сирене и чедър сама по себе си няма.",
      steps: [
        "Смесете крема сирене, чедъра, чесновия прах, уорчестърския сос, пресния лук и солта до добро смесване.",
        "Оформете сместа на топка.",
        "Овалайте топката в нарязани орехи пекан за покриване.",
        "Охладете поне 1 час преди сервиране с крекери.",
      ],
      ingredients: [
        "450 г крема сирене, омекнало",
        "2 чаши настъргано чедър сирене",
        "2 ч.л. чеснов прах",
        "1 ч.л. уорчестърски сос",
        "2 стръка пресен лук, ситно нарязани",
        "1/4 ч.л. сол",
        "1 чаша нарязани орехи пекан",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
