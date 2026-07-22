import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "chicken-tacos",
      title: "Chicken Tacos",
      description:
        "Seasoned shredded chicken rested before shredding and tucked into tortillas charred over a flame for real flavor, finished with a squeeze of lime - shredding straight off the heat is what lets the juices run out onto the cutting board instead of staying in the meat.",
      imageEmoji: "🌮",
      cookTimeMinutes: 30,
      servings: 4,
      ingredients: [
        { text: "1 1/2 lb chicken breast", ingredient: "chicken breast", quantity: 1.5 },
        { text: "2 tbsp taco seasoning", ingredient: "taco seasoning", quantity: 2 },
        { text: "8 small corn tortillas", ingredient: "corn tortillas", quantity: 8 },
        { text: "1 cup shredded lettuce", ingredient: "lettuce", quantity: 1 },
        { text: "1/2 cup shredded cheese", ingredient: "cheese", quantity: 0.5 },
        { text: "1 lime, cut into wedges", ingredient: "lime", quantity: 1 },
      ],
      steps: [
        "Season the chicken with taco seasoning and cook in a skillet until cooked through, about 6-7 minutes per side.",
        "Let the chicken rest for 5 minutes before shredding - resting keeps the juices in the meat instead of running out onto the board.",
        "Shred the chicken.",
        "Char the tortillas directly over an open flame or in a dry skillet until lightly spotted.",
        "Fill with chicken, lettuce, and cheese, and finish with a squeeze of lime.",
      ],
      tags: ["dinner", "mexican", "quick"],
    },
    bg: {
      title: "Тако с пиле",
      description:
        "Подправено накъсано пиле, оставено да почине преди накъсване и поставено в тортили, овъглени на пламък за истински вкус, завършено с малко лайм - накъсването веднага след готвене е това, което оставя соковете да изтекат върху дъската, вместо да останат в месото.",
      steps: [
        "Подправете пилето с подправка тако и изпечете в тиган до готовност, около 6-7 минути от всяка страна.",
        "Оставете пилето да почине 5 минути преди накъсване - почивката задържа соковете в месото, вместо да изтекат върху дъската.",
        "Накъсайте пилето.",
        "Овъглете тортилите директно на открит пламък или в сух тиган, докато се появят леки петна.",
        "Напълнете с пиле, маруля и сирене, и завършете с малко лайм.",
      ],
      ingredients: [
        "700 г пилешка гърда",
        "2 с.л. подправка тако",
        "8 малки царевични тортили",
        "1 чаша настъргана маруля",
        "1/2 чаша настъргано сирене",
        "1 лайм, нарязан на резенчета",
      ],
    },
  },
  {
    en: {
      slug: "cauliflower-tacos",
      title: "Cauliflower Tacos",
      description:
        "Roasted spiced cauliflower tucked into tortillas charred over a flame, with cabbage tossed in lime juice instead of left plain - a squeeze of lime on the slaw is the brightness that keeps a vegan taco from tasting one-note against the roasted cauliflower.",
      imageEmoji: "🌮",
      cookTimeMinutes: 35,
      servings: 4,
      ingredients: [
        { text: "1 head cauliflower, cut into florets", ingredient: "cauliflower", quantity: 1 },
        { text: "2 tsp taco seasoning", ingredient: "taco seasoning", quantity: 2 },
        { text: "3 tbsp olive oil", ingredient: "olive oil", quantity: 3 },
        { text: "8 small corn tortillas", ingredient: "corn tortillas", quantity: 8 },
        { text: "1/2 cup shredded cabbage", ingredient: "cabbage", quantity: 0.5 },
        { text: "1 tbsp lime juice", ingredient: "lime juice", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Preheat oven to 425°F.",
        "Toss the cauliflower with olive oil and taco seasoning, then spread on a baking sheet.",
        "Roast for 25 minutes until tender and browned at the edges.",
        "Toss the shredded cabbage with the lime juice and a pinch of salt - dressing the cabbage is what gives it brightness instead of leaving it flat next to the roasted cauliflower.",
        "Char the tortillas directly over an open flame or in a dry skillet until lightly spotted.",
        "Fill the warm tortillas with the roasted cauliflower and dressed cabbage.",
      ],
      tags: ["dinner", "vegan", "vegetarian", "mexican"],
    },
    bg: {
      title: "Тако с карфиол",
      description:
        "Печен подправен карфиол, поставен в тортили, овъглени на пламък, със зеле, разбъркано с лимонов сок, вместо оставено обикновено - малко лайм в зелевата салата е свежестта, която пази веган такото от еднообразен вкус до печения карфиол.",
      steps: [
        "Загрейте фурната на 220°C.",
        "Разбъркайте карфиола със зехтин и подправка тако, после разпределете върху тава за печене.",
        "Печете 25 минути до омекване и леко изпичане по краищата.",
        "Разбъркайте настърганото зеле с лимоновия сок и щипка сол - подправянето на зелето е това, което му придава свежест, вместо да остане безвкусно до печения карфиол.",
        "Овъглете тортилите директно на открит пламък или в сух тиган, докато се появят леки петна.",
        "Напълнете топлите тортили с печения карфиол и подправеното зеле.",
      ],
      ingredients: [
        "1 глава карфиол, нарязана на съцветия",
        "2 ч.л. подправка тако",
        "3 с.л. зехтин",
        "8 малки царевични тортили",
        "1/2 чаша настъргано зеле",
        "1 с.л. лимонов сок",
        "Сол на вкус",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
