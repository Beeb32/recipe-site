import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "caprese-sandwich",
      title: "Caprese Sandwich",
      description:
        "Fresh mozzarella, tomato, and basil on crusty bread, seasoned with salt and olive oil and finished with an optional balsamic drizzle - salting the tomato directly is what makes it taste like the star, and balsamic glaze is a modern add-on many simple Italian versions skip entirely.",
      imageEmoji: "🍅",
      cookTimeMinutes: 10,
      servings: 2,
      ingredients: [
        { text: "1 baguette, sliced in half lengthwise", ingredient: "baguette", quantity: 1 },
        { text: "8 oz fresh mozzarella, sliced", ingredient: "mozzarella", quantity: 8 },
        { text: "2 tomatoes, sliced", ingredient: "tomato", quantity: 2 },
        { text: "1/4 cup fresh basil leaves", ingredient: "basil", quantity: 0.25 },
        { text: "2 tbsp olive oil", ingredient: "olive oil", quantity: 2 },
        { text: "Salt and pepper to taste", ingredient: "salt and pepper", quantity: null },
        { text: "2 tbsp balsamic glaze (optional)", ingredient: "balsamic glaze", quantity: 2 },
      ],
      steps: [
        "Layer the tomato slices first onto the bottom half of the baguette, since they're bulkier and would otherwise slide, then top with the mozzarella.",
        "Season the tomato and mozzarella with salt and pepper, then drizzle with olive oil.",
        "Top with fresh basil leaves and, if using, a drizzle of balsamic glaze - balsamic is a modern addition that the simplest Italian versions skip entirely.",
        "Top with the other half of the baguette and slice into portions.",
      ],
      tags: ["lunch", "vegetarian", "quick", "italian"],
    },
    bg: {
      title: "Капрезе сандвич",
      description:
        "Прясна моцарела, домат и босилек върху хрупкав хляб, подправени със сол и зехтин и довършени с незадължителна капка балсамов гланц - осоляването на домата директно е това, което го прави да звучи като звездата, а балсамовият гланц е модерна добавка, която много прости италиански версии пропускат напълно.",
      steps: [
        "Наредете резенчетата домат първо върху долната половина на багетата, тъй като са по-обемни и иначе биха се плъзгали, после отгоре сложете моцарелата.",
        "Подправете домата и моцарелата със сол и черен пипер, после полейте със зехтин.",
        "Отгоре сложете пресни листа босилек и, ако желаете, капка балсамов гланц - балсамовият гланц е модерна добавка, която най-простите италиански версии пропускат напълно.",
        "Покрийте с другата половина на багетата и нарежете на порции.",
      ],
      ingredients: [
        "1 багета, разрязана наполовина по дължина",
        "225 г прясна моцарела, нарязана на резени",
        "2 домата, нарязани на резени",
        "1/4 чаша пресни листа босилек",
        "2 с.л. зехтин",
        "Сол и черен пипер на вкус",
        "2 с.л. балсамов гланц (незадължително)",
      ],
    },
  },
  {
    en: {
      slug: "buttered-popcorn",
      title: "Buttered Popcorn",
      description:
        "Classic stovetop popcorn tossed in golden clarified butter and salt - clarified butter is what gives theater-style richness without the sogginess plain melted butter causes, since removing the milk solids and water is what keeps the popcorn crisp.",
      imageEmoji: "🍿",
      cookTimeMinutes: 10,
      servings: 4,
      ingredients: [
        { text: "1/2 cup popcorn kernels", ingredient: "popcorn kernels", quantity: 0.5 },
        { text: "3 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 3 },
        { text: "3 tbsp butter", ingredient: "butter", quantity: 3 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Melt the butter in a small saucepan over medium heat, then let it bubble until the milk solids separate and the butter turns clear golden, 3-5 minutes; skim off the foam and pour off the clear butterfat, leaving the milky solids behind - this clarified butter is what keeps popcorn crisp instead of soggy.",
        "Heat the oil in a large pot over medium-high heat with a few kernels.",
        "Once those kernels pop, add the rest and cover with a lid, shaking occasionally.",
        "Once popping slows to a few seconds apart, remove from heat.",
        "Toss with the clarified butter and salt.",
      ],
      tags: ["snack", "vegetarian", "quick"],
    },
    bg: {
      title: "Пуканки с масло",
      description:
        "Класически пуканки, приготвени на котлона, разбъркани със златисто пречистено масло и сол - пречистеното масло е това, което придава богатство като в киносалон, без лепкавостта, която обикновеното разтопено масло причинява, тъй като премахването на млечните частици и водата е това, което пази пуканките хрупкави.",
      steps: [
        "Разтопете маслото в малка тенджерка на среден огън, после го оставете да къкри, докато млечните частици се отделят и маслото стане бистро златисто, 3-5 минути; отстранете пяната и излейте бистрото масло, оставяйки млечните частици настрана - това пречистено масло е това, което пази пуканките хрупкави, вместо лепкави.",
        "Загрейте олиото в голяма тенджера на среден до силен огън с няколко зърна.",
        "Щом тези зърна се пукнат, добавете останалите и покрийте с капак, разклащайки от време на време.",
        "Когато пукането се забави до няколко секунди между звуците, свалете от котлона.",
        "Разбъркайте с пречистеното масло и сол.",
      ],
      ingredients: [
        "1/2 чаша зърна за пуканки",
        "3 с.л. олио",
        "3 с.л. масло",
        "Сол на вкус",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
