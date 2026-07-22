import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "sweet-potato-casserole",
      title: "Sweet Potato Casserole",
      description:
        "Mashed sweet potatoes enriched with butter, vanilla, and cinnamon, baked with a crunchy brown sugar pecan topping - seasoning the base itself, not just the streusel, is what most rushed versions skip, leaving the inside bland under a sweet crust.",
      imageEmoji: "🍠",
      cookTimeMinutes: 50,
      servings: 8,
      ingredients: [
        { text: "4 sweet potatoes, boiled and mashed", ingredient: "sweet potato", quantity: 4 },
        { text: "1/2 cup brown sugar", ingredient: "brown sugar", quantity: 0.5 },
        { text: "2 eggs", ingredient: "eggs", quantity: 2 },
        { text: "1/4 cup butter, melted (for the base)", ingredient: "butter", quantity: 0.25 },
        { text: "1 tsp vanilla extract", ingredient: "vanilla extract", quantity: 1 },
        { text: "1/2 tsp cinnamon", ingredient: "cinnamon", quantity: 0.5 },
        { text: "1/2 cup chopped pecans", ingredient: "pecans", quantity: 0.5 },
        { text: "1/4 cup melted butter", ingredient: "butter", quantity: 0.25 },
      ],
      steps: [
        "Preheat oven to 350°F.",
        "Mix the mashed sweet potatoes with half the brown sugar, the eggs, butter, vanilla, and cinnamon, then spread into a baking dish - seasoning the base itself is what keeps it from tasting bland under the sweet topping.",
        "Mix the pecans, remaining brown sugar, and melted butter, then sprinkle over the top.",
        "Bake for 30 minutes until set and golden.",
      ],
      tags: ["dinner", "vegetarian", "baking"],
    },
    bg: {
      title: "Гювеч от сладки картофи",
      description:
        "Пюре от сладки картофи, обогатено с масло, ванилия и канела, запечено с хрупкава коричка от кафява захар и орехи пекан - подправянето на самата основа, а не само на коричката, е това, което повечето набързо приготвени версии пропускат, оставяйки вътрешността безвкусна под сладката коричка.",
      steps: [
        "Загрейте фурната на 180°C.",
        "Смесете пюрето от сладки картофи с половината кафява захар, яйцата, маслото, ванилията и канелата, после разпределете в тава - подправянето на самата основа е това, което я пази от безвкусие под сладката коричка.",
        "Смесете орехите пекан, останалата кафява захар и разтопеното масло, после поръсете отгоре.",
        "Печете 30 минути до стягане и златисто.",
      ],
      ingredients: [
        "4 сладки картофа, сварени и намачкани",
        "1/2 чаша кафява захар",
        "2 яйца",
        "1/4 чаша масло, разтопено (за основата)",
        "1 ч.л. ванилова есенция",
        "1/2 ч.л. канела",
        "1/2 чаша нарязани орехи пекан",
        "1/4 чаша разтопено масло",
      ],
    },
  },
  {
    en: {
      slug: "candied-yams",
      title: "Candied Yams",
      description:
        "Sweet potatoes baked in a buttery brown sugar glaze rounded out with vanilla, nutmeg, and ginger alongside the cinnamon - stopping at cinnamon alone, which most quick versions do, leaves out the fuller warm-spice blend real candied yams are built on.",
      imageEmoji: "🍠",
      cookTimeMinutes: 55,
      servings: 6,
      ingredients: [
        { text: "4 sweet potatoes, peeled and sliced", ingredient: "sweet potato", quantity: 4 },
        { text: "1/2 cup brown sugar", ingredient: "brown sugar", quantity: 0.5 },
        { text: "4 tbsp butter", ingredient: "butter", quantity: 4 },
        { text: "1 tsp cinnamon", ingredient: "cinnamon", quantity: 1 },
        { text: "1/4 tsp nutmeg", ingredient: "nutmeg", quantity: 0.25 },
        { text: "1/4 tsp ground ginger", ingredient: "ginger", quantity: 0.25 },
        { text: "1 tsp vanilla extract", ingredient: "vanilla extract", quantity: 1 },
        { text: "1/2 cup mini marshmallows", ingredient: "marshmallows", quantity: 0.5 },
      ],
      steps: [
        "Preheat oven to 350°F.",
        "Layer the sweet potato slices in a baking dish and dot with butter.",
        "Sprinkle with brown sugar, cinnamon, nutmeg, and ginger, and drizzle with vanilla.",
        "Bake covered for 35 minutes, then top with marshmallows and bake uncovered for another 10 minutes until golden.",
      ],
      tags: ["dinner", "vegetarian", "baking"],
    },
    bg: {
      title: "Захаросани сладки картофи",
      description:
        "Сладки картофи, запечени в маслена глазура от кафява захар, закръглена с ванилия, индийско орехче и джинджифил заедно с канелата - спирането само до канела, което правят повечето бързи версии, пропуска по-пълната смес от топли подправки, на които истинските захаросани сладки картофи са изградени.",
      steps: [
        "Загрейте фурната на 180°C.",
        "Наредете на пластове резените сладки картофи в тава и поставете парченца масло.",
        "Поръсете с кафява захар, канела, индийско орехче и джинджифил, и полейте с ванилия.",
        "Печете покрито 35 минути, после отгоре сложете маршмелоу и печете непокрито още 10 минути до златисто.",
      ],
      ingredients: [
        "4 сладки картофа, обелени и нарязани на резени",
        "1/2 чаша кафява захар",
        "4 с.л. масло",
        "1 ч.л. канела",
        "1/4 ч.л. индийско орехче",
        "1/4 ч.л. смлян джинджифил",
        "1 ч.л. ванилова есенция",
        "1/2 чаша мини маршмелоу",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
