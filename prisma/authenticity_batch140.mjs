import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "blt-wrap",
      title: "BLT Wrap",
      description:
        "All the flavors of a classic BLT rolled up in a soft tortilla, with the tomato seasoned before it goes in - salting the tomato slices is what actually brings out their flavor instead of leaving them watery and bland in the wrap.",
      imageEmoji: "🌯",
      cookTimeMinutes: 15,
      servings: 2,
      ingredients: [
        { text: "6 slices bacon, cooked", ingredient: "bacon", quantity: 6 },
        { text: "2 large flour tortillas", ingredient: "flour tortillas", quantity: 2 },
        { text: "1 cup shredded lettuce", ingredient: "lettuce", quantity: 1 },
        { text: "1 tomato, diced", ingredient: "tomato", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
        { text: "3 tbsp mayonnaise", ingredient: "mayonnaise", quantity: 3 },
      ],
      steps: [
        "Season the diced tomato with salt and let sit for a few minutes - salting the tomato is what brings out its flavor instead of leaving it watery and bland.",
        "Spread mayonnaise over each tortilla and season with pepper.",
        "Layer bacon, lettuce, and the seasoned tomato down the center.",
        "Roll up tightly, tucking in the sides.",
        "Slice in half before serving.",
      ],
      tags: ["lunch", "quick"],
    },
    bg: {
      title: "БЛТ рол",
      description:
        "Всички вкусове на класическото БЛТ, завити в мека тортила, с домата подправен, преди да влезе - осоляването на нарязания домат е това, което наистина извлича вкуса му, вместо да го остави воднист и безвкусен в рола.",
      steps: [
        "Подправете нарязания домат със сол и оставете за няколко минути - осоляването на домата извлича вкуса му, вместо да го остави воднист и безвкусен.",
        "Намажете майонеза върху всяка тортила и подправете с черен пипер.",
        "Наредете бекон, салата и подправения домат по средата.",
        "Завийте стегнато, подгъвайки страните.",
        "Нарежете наполовина преди сервиране.",
      ],
      ingredients: [
        "6 резена бекон, изпечен",
        "2 големи пшенични тортили",
        "1 чаша настъргана салата",
        "1 домат, нарязан на кубчета",
        "Сол на вкус",
        "Черен пипер на вкус",
        "3 с.л. майонеза",
      ],
    },
  },
  {
    en: {
      slug: "breakfast-quesadilla",
      title: "Breakfast Quesadilla",
      description:
        "A crispy tortilla folded around scrambled eggs and melted cheese - scrambling the eggs over low heat and seasoning them is what keeps them soft and flavorful instead of dry and bland inside the tortilla.",
      imageEmoji: "🌯",
      cookTimeMinutes: 15,
      servings: 2,
      ingredients: [
        { text: "4 eggs", ingredient: "eggs", quantity: 4 },
        { text: "2 large flour tortillas", ingredient: "flour tortillas", quantity: 2 },
        { text: "1 cup shredded cheddar cheese", ingredient: "cheddar cheese", quantity: 1 },
        { text: "1 tbsp butter", ingredient: "butter", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Scramble the eggs in butter over low heat, seasoning with salt and pepper, until just set and still creamy - low heat keeps the eggs soft instead of rubbery.",
        "Sprinkle cheese and scrambled eggs over half of each tortilla, then fold over.",
        "Cook in a dry skillet over medium heat until golden and crisp on both sides.",
        "Slice into wedges before serving.",
      ],
      tags: ["breakfast", "quick", "vegetarian", "mexican"],
    },
    bg: {
      title: "Кесадия за закуска",
      description:
        "Хрупкава тортила, сгъната около бъркани яйца и разтопено сирене - бъркането на яйцата на слаб огън и подправянето им е това, което ги пази меки и вкусни, вместо сухи и безвкусни вътре в тортилата.",
      steps: [
        "Разбъркайте яйцата в масло на слаб огън, подправяйки със сол и черен пипер, до леко стягане и кремообразна консистенция - слабият огън пази яйцата меки, вместо гумени.",
        "Поръсете сирене и бъркани яйца върху половината от всяка тортила, после сгънете.",
        "Изпечете в сух тиган на среден огън до златисто и хрупкаво от двете страни.",
        "Нарежете на резенчета преди сервиране.",
      ],
      ingredients: [
        "4 яйца",
        "2 големи пшенични тортили",
        "1 чаша настъргано чедър сирене",
        "1 с.л. масло",
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
