import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "italian-wedding-soup",
      title: "Italian Wedding Soup",
      description:
        "A comforting soup of Parmesan-and-breadcrumb-bound meatballs, escarole, and pasta in a savory broth - the name is actually a mistranslation of the Italian minestra maritata ('married soup'), referring to the greens and meat marrying in the pot, not an actual wedding; escarole, not spinach, is the traditional green.",
      imageEmoji: "🍲",
      cookTimeMinutes: 40,
      servings: 6,
      ingredients: [
        { text: "1 lb ground beef", ingredient: "ground beef", quantity: 1 },
        { text: "1/4 cup breadcrumbs", ingredient: "breadcrumbs", quantity: 0.25 },
        { text: "1 egg", ingredient: "eggs", quantity: 1 },
        { text: "1/4 cup grated Parmesan, plus more for serving", ingredient: "parmesan", quantity: 0.25 },
        { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
        { text: "8 cups chicken broth", ingredient: "chicken broth", quantity: 8 },
        { text: "4 cups escarole, chopped", ingredient: "escarole", quantity: 4 },
        { text: "1 cup small pasta (acini di pepe or pastina)", ingredient: "pasta", quantity: 1 },
      ],
      steps: [
        "Combine the ground beef, breadcrumbs, egg, Parmesan, and garlic, and roll into small meatballs - these are what hold the meatballs together and give them flavor, instead of plain ground beef alone.",
        "Bring the chicken broth to a simmer and add the meatballs, cooking for 8-10 minutes.",
        "Add the pasta and cook until tender.",
        "Stir in the escarole until wilted.",
        "Top with Parmesan before serving.",
      ],
      tags: ["dinner", "italian", "quick"],
    },
    bg: {
      title: "Италианска сватбена супа",
      description:
        "Уютна супа от кюфтенца, свързани с пармезан и галета, ескарол и паста в ароматен бульон - името всъщност е грешен превод на италианското minestra maritata (\"женена супа\"), отнасящо се до зеленчуците и месото, които се \"женят\" в тенджерата, а не за сватба; ескаролът, а не спанакът, е традиционната зелена съставка.",
      steps: [
        "Смесете каймата, галетата, яйцето, пармезана и чесъна, и оформете малки кюфтенца - те са това, което държи кюфтенцата заедно и им придава вкус, вместо чиста кайма.",
        "Загрейте пилешкия бульон до леко къкрене и добавете кюфтенцата, готвейки 8-10 минути.",
        "Добавете пастата и гответе до омекване.",
        "Разбъркайте ескарола до омекване.",
        "Отгоре поръсете пармезан преди сервиране.",
      ],
      ingredients: [
        "450 г кайма от телешко месо",
        "1/4 чаша галета",
        "1 яйце",
        "1/4 чаша настърган пармезан, плюс още за сервиране",
        "2 скилидки чесън, ситно нарязани",
        "8 чаши пилешки бульон",
        "4 чаши ескарол, нарязан",
        "1 чаша малка паста (ачини ди пепе или пастина)",
      ],
    },
  },
  {
    en: {
      slug: "no-knead-bread",
      title: "No-Knead Bread",
      description:
        "A rustic, crusty artisan loaf that needs no kneading - just a long, slow fermentation, a quick shape and second rest, then a blazing-hot covered Dutch oven that traps the steam giving it its crackling crust; skipping that second rest is what most abbreviated versions do.",
      imageEmoji: "🍞",
      cookTimeMinutes: 180,
      servings: 8,
      ingredients: [
        { text: "3 cups flour", ingredient: "flour", quantity: 3 },
        { text: "1/4 tsp yeast", ingredient: "yeast", quantity: 0.25 },
        { text: "1 1/2 tsp salt", ingredient: "salt", quantity: 1.5 },
        { text: "1 1/2 cups water", ingredient: "water", quantity: 1.5 },
      ],
      steps: [
        "Mix the flour, yeast, salt, and water into a shaggy dough.",
        "Cover and let rise at room temperature for 12-18 hours, until the surface is dotted with bubbles.",
        "Turn the dough onto a floured surface, fold it over on itself once or twice, then let it rest, covered, for about 2 hours until roughly doubled - this second rest is what most abbreviated versions skip.",
        "Preheat a covered Dutch oven at 450°F, then carefully place the dough inside.",
        "Bake covered for 30 minutes, then uncovered for 15 minutes until deeply golden - the covered bake traps the steam that gives the crust its crackle.",
      ],
      tags: ["snack", "vegan", "vegetarian", "baking"],
    },
    bg: {
      title: "Хляб без месене",
      description:
        "Селски, хрупкав занаятчийски хляб, който не изисква месене - само дълга, бавна ферментация, бързо оформяне и второ втасване, после нажежена покрита чугунена тенджера, която задържа парата, придаваща му напуканата коричка; пропускането на това второ втасване е това, което правят повечето съкратени версии.",
      steps: [
        "Смесете брашното, маята, солта и водата в грубо тесто.",
        "Покрийте и оставете да втаса на стайна температура 12-18 часа, докато повърхността се покрие с мехурчета.",
        "Обърнете тестото върху набрашнена повърхност, сгънете го върху себе си веднъж-два пъти, после го оставете да почине, покрито, около 2 часа, докато почти удвои обема си - това второ втасване е това, което повечето съкратени версии пропускат.",
        "Загрейте покрита чугунена тенджера на 230°C, после внимателно поставете тестото вътре.",
        "Печете покрито 30 минути, после непокрито 15 минути до дълбоко златисто - печенето покрито задържа парата, която придава на коричката напукаността ѝ.",
      ],
      ingredients: ["3 чаши брашно", "1/4 ч.л. мая", "1 1/2 ч.л. сол", "1 1/2 чаши вода"],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
