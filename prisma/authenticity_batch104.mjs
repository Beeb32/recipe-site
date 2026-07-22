import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "baked-potato-skins",
      title: "Baked Potato Skins",
      description:
        "Crispy baked potato shells brushed with butter and seasoned before their second bake, loaded with cheese, bacon, and green onion, and served with sour cream - seasoning the shells themselves, not just the toppings, is what most quick versions skip.",
      imageEmoji: "🥔",
      cookTimeMinutes: 60,
      servings: 4,
      ingredients: [
        { text: "4 potatoes", ingredient: "potato", quantity: 4 },
        { text: "1 cup shredded cheddar cheese", ingredient: "cheddar cheese", quantity: 1 },
        { text: "4 slices bacon, cooked and crumbled", ingredient: "bacon", quantity: 4 },
        { text: "2 green onions, sliced", ingredient: "green onion", quantity: 2 },
        { text: "3 tbsp butter, melted", ingredient: "butter", quantity: 3 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
        { text: "1/2 cup sour cream, for serving", ingredient: "sour cream", quantity: 0.5 },
      ],
      steps: [
        "Bake the potatoes at 400°F for 45 minutes until tender, then cool slightly.",
        "Slice in half and scoop out most of the flesh, leaving a thin shell.",
        "Brush the shells with melted butter and season with salt and pepper, then bake for 10 more minutes until crisp - seasoning the shells themselves, not just the toppings, is what keeps them from tasting flat underneath.",
        "Fill with cheese and bacon, then bake for another 5 minutes until the cheese melts.",
        "Top with green onions and serve with sour cream.",
      ],
      tags: ["snack"],
    },
    bg: {
      title: "Печени картофени черупки",
      description:
        "Хрупкави печени картофени черупки, намазани с масло и подправени преди второто печене, пълни със сирене, бекон и пресен лук, сервирани със заквасена сметана - подправянето на самите черупки, не само на добавките, е това, което повечето бързи версии пропускат.",
      steps: [
        "Изпечете картофите на 200°C 45 минути до омекване, после оставете да изстинат леко.",
        "Разрежете наполовина и извадете по-голямата част от месото, оставяйки тънка черупка.",
        "Намажете черупките с разтопено масло и подправете със сол и черен пипер, после печете още 10 минути до хрупкавост - подправянето на самите черупки, не само на добавките, е това, което ги пази да не са безвкусни отвътре.",
        "Напълнете със сирене и бекон, после печете още 5 минути до разтапяне на сиренето.",
        "Отгоре добавете пресен лук и сервирайте със заквасена сметана.",
      ],
      ingredients: [
        "4 картофа",
        "1 чаша настъргано чедър сирене",
        "4 резена бекон, изпечен и натрошен",
        "2 стръка пресен лук, нарязани",
        "3 с.л. масло, разтопено",
        "Сол на вкус",
        "Черен пипер на вкус",
        "1/2 чаша заквасена сметана, за сервиране",
      ],
    },
  },
  {
    en: {
      slug: "baked-potato-chips",
      title: "Baked Potato Chips",
      description:
        "Thin potato slices soaked in cold water to draw out surface starch, then dried and baked until crisp and golden - skipping the soak is why most homemade baked chips turn soft or steam instead of crisping.",
      imageEmoji: "🥔",
      cookTimeMinutes: 30,
      servings: 4,
      ingredients: [
        { text: "3 potatoes, thinly sliced", ingredient: "potato", quantity: 3 },
        { text: "2 tbsp olive oil", ingredient: "olive oil", quantity: 2 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Soak the potato slices in a bowl of cold water for 20-30 minutes, then drain and pat completely dry - removing the surface starch is what lets the slices crisp in the oven instead of steaming.",
        "Preheat oven to 400°F.",
        "Toss the potato slices with olive oil and salt.",
        "Arrange in a single layer on a baking sheet, without overlapping.",
        "Bake for 20-25 minutes, flipping halfway, until crisp and golden.",
      ],
      tags: ["snack", "vegan", "vegetarian"],
    },
    bg: {
      title: "Печен картофен чипс",
      description:
        "Тънки резени картофи, накиснати в студена вода, за да се извади повърхностното нишесте, после подсушени и изпечени до хрупкаво и златисто - пропускането на накисването е причината повечето домашни печени чипсове да излизат меки или на пара, вместо хрупкави.",
      steps: [
        "Накиснете резените картофи в купа със студена вода за 20-30 минути, после отцедете и подсушете напълно - премахването на повърхностното нишесте е това, което позволява на резените да станат хрупкави във фурната, вместо да се задушат на пара.",
        "Загрейте фурната на 200°C.",
        "Разбъркайте резените картофи със зехтин и сол.",
        "Наредете в един слой върху тава, без да се застъпват.",
        "Печете 20-25 минути, обръщайки по средата, до хрупкаво и златисто.",
      ],
      ingredients: ["3 картофа, нарязани на тънко", "2 с.л. зехтин", "Сол на вкус"],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
