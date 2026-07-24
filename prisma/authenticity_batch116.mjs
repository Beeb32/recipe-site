import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "corned-beef-hash",
      title: "Corned Beef Hash",
      description:
        "Crispy pan-fried potatoes and corned beef - parboiling the potatoes first is what lets them cook through and crisp at the same time, instead of burning outside while staying raw in the middle.",
      imageEmoji: "🥔",
      cookTimeMinutes: 30,
      servings: 4,
      ingredients: [
        { text: "2 cups cooked corned beef, diced", ingredient: "corned beef", quantity: 2 },
        { text: "3 potatoes, diced", ingredient: "potato", quantity: 3 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "3 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 3 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Parboil the diced potatoes in salted water for 5 minutes, then drain and pat dry - this lets them finish cooking through without burning on the outside.",
        "Cook the parboiled potatoes in oil over medium-high heat in a single layer until golden and crisp, about 8-10 minutes.",
        "Add the onion and cook for another 5 minutes.",
        "Stir in the corned beef and cook until heated through and crisp in spots.",
        "Season with salt and pepper before serving.",
      ],
      tags: ["breakfast"],
    },
    bg: {
      title: "Хаш от осолено телешко",
      description:
        "Хрупкави запържени картофи с осолено телешко - предварителното сваряване на картофите е това, което им позволява да се сготвят докрай и да станат хрупкави едновременно, вместо да изгорят отвън, докато останат сурови отвътре.",
      steps: [
        "Сварете леко нарязаните на кубчета картофи в подсолена вода за 5 минути, после отцедете и подсушете - това им позволява да се сготвят докрай, без да изгорят отвън.",
        "Изпечете сварените картофи в олио на средно-силен огън в един слой до златисто и хрупкаво, около 8-10 минути.",
        "Добавете лука и гответе още 5 минути.",
        "Разбъркайте осоленото телешко и гответе до затопляне и леко хрупкане на места.",
        "Подправете със сол и черен пипер преди сервиране.",
      ],
      ingredients: [
        "2 чаши сготвено осолено телешко, нарязано на кубчета",
        "3 картофа, нарязани на кубчета",
        "1 лук, нарязан на кубчета",
        "3 с.л. олио",
        "Сол на вкус",
        "Черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "egg-in-a-basket",
      title: "Egg in a Basket",
      description:
        "A fried egg cooked right in the center of a buttery slice of toast, with the cut-out round fried alongside instead of thrown away - frying the little round too is the classic diner touch that most home versions skip.",
      imageEmoji: "🍳",
      cookTimeMinutes: 10,
      servings: 1,
      ingredients: [
        { text: "1 slice bread", ingredient: "bread", quantity: 1 },
        { text: "1 egg", ingredient: "eggs", quantity: 1 },
        { text: "1 tbsp butter", ingredient: "butter", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Cut a hole in the center of the bread slice using a cup or cookie cutter, keeping the cut-out round.",
        "Melt the butter in a skillet over medium heat and lay the bread and the cut-out round in the pan.",
        "Crack the egg into the hole and cook for 2-3 minutes until the white sets, flipping the round separately once golden.",
        "Flip the bread carefully and cook for another 1-2 minutes, then season with salt and pepper.",
      ],
      tags: ["breakfast", "quick", "vegetarian"],
    },
    bg: {
      title: "Яйце в кошничка",
      description:
        "Пържено яйце, изпечено точно в центъра на маслена филия тост, с изрязаното кръгче, изпържено отделно, вместо изхвърлено - изпържването и на кръгчето е класическият щрих от бюфет-закусвалня, който повечето домашни версии пропускат.",
      steps: [
        "Изрежете дупка в центъра на филията хляб с чаша или форма за бисквити, запазвайки изрязаното кръгче.",
        "Разтопете маслото в тиган на среден огън и поставете хляба и кръгчето в тигана.",
        "Счупете яйцето в дупката и гответе 2-3 минути, докато белтъкът се стегне, обръщайки кръгчето отделно, щом стане златисто.",
        "Обърнете хляба внимателно и гответе още 1-2 минути, после подправете със сол и черен пипер.",
      ],
      ingredients: ["1 филия хляб", "1 яйце", "1 с.л. масло", "Сол на вкус", "Черен пипер на вкус"],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
