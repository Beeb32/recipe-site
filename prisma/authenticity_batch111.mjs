import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "chicken-salad-sandwich",
      title: "Chicken Salad Sandwich",
      description:
        "Shredded chicken tossed in a creamy dressing sharpened with a touch of mustard and lemon juice, with celery for crunch, piled onto bread - mayonnaise alone without any acid is why most chicken salad tastes flat and one-note.",
      imageEmoji: "🥪",
      cookTimeMinutes: 15,
      servings: 2,
      ingredients: [
        { text: "2 cups cooked shredded chicken", ingredient: "chicken", quantity: 2 },
        { text: "1/3 cup mayonnaise", ingredient: "mayonnaise", quantity: 0.33 },
        { text: "1 tsp dijon mustard", ingredient: "dijon mustard", quantity: 1 },
        { text: "1 tsp lemon juice", ingredient: "lemon juice", quantity: 1 },
        { text: "1 celery stalk, diced", ingredient: "celery", quantity: 1 },
        { text: "4 slices bread", ingredient: "bread", quantity: 4 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Mix the shredded chicken with mayonnaise, mustard, lemon juice, and celery - the mustard and lemon juice are what keep the dressing from tasting flat and one-note.",
        "Season with salt and pepper to taste.",
        "Spread onto bread slices and top with the remaining bread.",
      ],
      tags: ["lunch", "quick"],
    },
    bg: {
      title: "Сандвич със салата от пиле",
      description:
        "Накъсано пиле, разбъркано в кремообразен сос, изострен с малко горчица и лимонов сок, с целина за хрупкавост, натрупано върху хляб - само майонезата без никаква киселина е причината повечето салата от пиле да има плосък, еднообразен вкус.",
      steps: [
        "Смесете накъсаното пиле с майонезата, горчицата, лимоновия сок и целината - горчицата и лимоновият сок са това, което пази соса от плосък, еднообразен вкус.",
        "Подправете със сол и черен пипер на вкус.",
        "Намажете върху филии хляб и покрийте с останалия хляб.",
      ],
      ingredients: [
        "2 чаши сготвено накъсано пиле",
        "1/3 чаша майонеза",
        "1 ч.л. горчица дижон",
        "1 ч.л. лимонов сок",
        "1 стъбло целина, нарязано на кубчета",
        "4 филии хляб",
        "Сол на вкус",
        "Черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "caprese-panini",
      title: "Caprese Panini",
      description:
        "A pressed sandwich of melted mozzarella, tomato patted dry, and basil finished with a balsamic drizzle before pressing - balsamic is what actually makes this taste like caprese instead of just melted cheese and tomato, and drying the tomato slices is what keeps the bread from turning soggy under pressure.",
      imageEmoji: "🍅",
      cookTimeMinutes: 15,
      servings: 2,
      ingredients: [
        { text: "4 slices bread", ingredient: "bread", quantity: 4 },
        { text: "8 oz fresh mozzarella, sliced", ingredient: "mozzarella", quantity: 8 },
        { text: "1 tomato, sliced and patted dry", ingredient: "tomato", quantity: 1 },
        { text: "1/4 cup fresh basil leaves", ingredient: "basil", quantity: 0.25 },
        { text: "1 tbsp balsamic vinegar", ingredient: "balsamic vinegar", quantity: 1 },
        { text: "2 tbsp olive oil", ingredient: "olive oil", quantity: 2 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Pat the tomato slices dry with paper towels - excess moisture is what makes the bread turn soggy under the press.",
        "Layer mozzarella, tomato, and basil between the bread slices, seasoning with salt and pepper and drizzling the balsamic vinegar over the filling - balsamic is what actually makes this taste like caprese instead of just melted cheese and tomato.",
        "Brush the outside of the sandwiches with olive oil.",
        "Grill in a skillet or panini press over medium heat until golden and the cheese melts, about 3 minutes per side.",
      ],
      tags: ["lunch", "vegetarian", "quick", "italian"],
    },
    bg: {
      title: "Капрезе панини",
      description:
        "Пресован сандвич от разтопена моцарела, домат подсушен предварително и босилек, завършен с балсамов оцет преди пресоване - балсамовият оцет е това, което наистина му придава вкус на капрезе, вместо просто разтопено сирене и домат, а подсушаването на резените домат е това, което пази хляба да не омекне под пресата.",
      steps: [
        "Подсушете резените домат с хартиени кърпи - излишната влага е това, което кара хляба да омекне под пресата.",
        "Наредете моцарела, домат и босилек между филиите хляб, подправяйки със сол и черен пипер и поливайки плънката с балсамовия оцет - балсамовият оцет е това, което наистина придава вкус на капрезе, вместо просто разтопено сирене и домат.",
        "Намажете отвън сандвичите със зехтин.",
        "Изпечете в тиган или преса за панини на среден огън до златисто и разтапяне на сиренето, около 3 минути от всяка страна.",
      ],
      ingredients: [
        "4 филии хляб",
        "225 г прясна моцарела, нарязана на резени",
        "1 домат, нарязан на резени и подсушен",
        "1/4 чаша пресни листа босилек",
        "1 с.л. балсамов оцет",
        "2 с.л. зехтин",
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
