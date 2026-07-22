import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "avocado-toast",
      title: "Avocado Toast",
      description:
        "A fast, satisfying breakfast: toasted sourdough rubbed with a cut garlic clove before the mashed avocado goes on, finished with chili flakes and a drizzle of olive oil - the garlic rub is what real cafe-style avocado toast uses for a background savory note most home versions skip.",
      imageEmoji: "🥑",
      cookTimeMinutes: 10,
      servings: 1,
      ingredients: [
        { text: "2 slices sourdough bread", ingredient: "sourdough bread", quantity: 2 },
        { text: "1 clove garlic, halved", ingredient: "garlic", quantity: 1 },
        { text: "1 ripe avocado", ingredient: "avocado", quantity: 1 },
        { text: "1/2 lemon, juiced", ingredient: "lemon", quantity: 0.5 },
        { text: "Chili flakes", ingredient: "chili flakes", quantity: null },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
        { text: "Olive oil for drizzling", ingredient: "olive oil", quantity: null },
      ],
      steps: [
        "Toast the sourdough slices until golden and crisp, then rub the cut side of the garlic clove over the warm toast.",
        "Mash the avocado with lemon juice, salt, and pepper.",
        "Spread the mashed avocado over the garlic-rubbed toast.",
        "Top with chili flakes and a drizzle of olive oil.",
      ],
      tags: ["breakfast", "vegetarian", "quick"],
    },
    bg: {
      title: "Тост с авокадо",
      description:
        "Бърза, засищаща закуска: препечен квасен хляб, натрит с разрязана скилидка чесън преди намаченото авокадо, завършен с люти чушки на люспи и зехтин - натриването с чесън е това, което истинският кафене-стил тост с авокадо използва за фонова пикантна нотка, която повечето домашни версии пропускат.",
      steps: [
        "Препечете филиите квасен хляб до златисто и хрупкаво, после натрийте разрязаната страна на чесъна върху топлия тост.",
        "Намачкайте авокадото с лимонов сок, сол и черен пипер.",
        "Намажете намаченото авокадо върху натрития с чесън тост.",
        "Поръсете с люти чушки на люспи и малко зехтин.",
      ],
      ingredients: [
        "2 филии квасен хляб",
        "1 скилидка чесън, разрязана наполовина",
        "1 узряло авокадо",
        "сок от 1/2 лимон",
        "Люти чушки на люспи",
        "Сол на вкус",
        "Черен пипер на вкус",
        "Зехтин за поливане",
      ],
    },
  },
  {
    en: {
      slug: "bagel-with-cream-cheese",
      title: "Bagel with Cream Cheese",
      description:
        "A toasted bagel spread thick with cream cheese softened to room temperature first - cold cream cheese straight from the fridge tears a warm bagel instead of spreading smoothly, the small step most quick versions skip.",
      imageEmoji: "🥯",
      cookTimeMinutes: 5,
      servings: 1,
      ingredients: [
        { text: "1 bagel, sliced", ingredient: "bagel", quantity: 1 },
        { text: "3 tbsp cream cheese", ingredient: "cream cheese", quantity: 3 },
      ],
      steps: [
        "Let the cream cheese sit at room temperature for about 10 minutes so it spreads easily - cold cream cheese straight from the fridge tears a warm bagel instead of gliding over it.",
        "Toast the bagel halves until golden and crisp.",
        "Spread the softened cream cheese generously over each half, all the way to the edges.",
      ],
      tags: ["breakfast", "quick", "vegetarian"],
    },
    bg: {
      title: "Бейгъл с крема сирене",
      description:
        "Препечен бейгъл, обилно намазан с крема сирене, оставено първо да омекне на стайна температура - студеното крема сирене директно от хладилника къса топлия бейгъл, вместо да се намазва гладко, малката стъпка, която повечето бързи версии пропускат.",
      steps: [
        "Оставете крема сиренето на стайна температура за около 10 минути, за да се намазва лесно - студеното крема сирене директно от хладилника къса топлия бейгъл, вместо да се плъзга по него.",
        "Препечете половинките бейгъл до златисто и хрупкаво.",
        "Намажете обилно омекналото крема сирене върху всяка половинка, чак до краищата.",
      ],
      ingredients: ["1 бейгъл, разрязан", "3 с.л. крема сирене"],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
