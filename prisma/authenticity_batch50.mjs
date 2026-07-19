import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "watermelon-feta-salad",
      title: "Watermelon Feta Salad",
      description:
        "Watermelon and mellowed red onion tossed with feta, mint, and a lime-olive oil dressing - red onion is a near-universal ingredient this recipe was missing entirely, and rinsing it under water first is what takes the raw bite off.",
      imageEmoji: "🍉",
      cookTimeMinutes: 15,
      servings: 4,
      ingredients: [
        { text: "4 cups cubed watermelon", ingredient: "watermelon", quantity: 4 },
        { text: "1/2 red onion, thinly sliced", ingredient: "red onion", quantity: 0.5 },
        { text: "1 cup crumbled feta cheese", ingredient: "feta cheese", quantity: 1 },
        { text: "1/4 cup fresh mint leaves", ingredient: "mint", quantity: 0.25 },
        { text: "2 tbsp olive oil", ingredient: "olive oil", quantity: 2 },
        { text: "1 tbsp lime juice", ingredient: "lime juice", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Rinse the sliced red onion under warm water for a minute to take the raw bite off, then pat dry.",
        "Arrange the watermelon cubes on a platter.",
        "Scatter the red onion, feta, and mint leaves over the top.",
        "Whisk together the olive oil and lime juice, drizzle over the salad, and season with salt.",
        "Serve chilled.",
      ],
      tags: ["lunch", "vegetarian", "quick", "salad", "mediterranean"],
    },
    bg: {
      title: "Салата с диня и фета",
      description:
        "Диня и омекотен червен лук, разбъркани с фета, мента и дресинг от лайм и зехтин - червеният лук е почти универсална съставка, която тази рецепта напълно пропускаше, а изплакването му под вода първо е това, което премахва суровата му острота.",
      steps: [
        "Изплакнете нарязания червен лук под топла вода за минута, за да премахнете суровата острота, после подсушете.",
        "Наредете кубчетата диня върху плато.",
        "Поръсете отгоре червения лук, фетата и листата мента.",
        "Разбъркайте зехтина и лаймовия сок, полейте салатата и подправете със сол.",
        "Сервирайте охладено.",
      ],
      ingredients: [
        "4 чаши диня, нарязана на кубчета",
        "1/2 червен лук, нарязан на тънко",
        "1 чаша натрошено сирене фета",
        "1/4 чаша листа прясна мента",
        "2 с.л. зехтин",
        "1 с.л. лаймов сок",
        "Сол на вкус",
      ],
    },
  },
  {
    en: {
      slug: "panzanella",
      title: "Panzanella",
      description:
        "Stale bread soaked in water and squeezed dry rather than toasted, tossed with tomatoes, mellowed red onion, and basil in a simple oil-and-vinegar dressing - soaking (not toasting) the bread is the traditional Tuscan technique, and red onion is a near-universal ingredient the original recipe left out.",
      imageEmoji: "🍅",
      cookTimeMinutes: 30,
      servings: 4,
      ingredients: [
        { text: "4 cups cubed stale bread", ingredient: "bread", quantity: 4 },
        { text: "1/2 red onion, thinly sliced", ingredient: "red onion", quantity: 0.5 },
        { text: "4 tomatoes, chopped", ingredient: "tomato", quantity: 4 },
        { text: "1 cucumber, diced", ingredient: "cucumber", quantity: 1 },
        { text: "1/4 cup fresh basil, torn", ingredient: "basil", quantity: 0.25 },
        { text: "3 tbsp olive oil", ingredient: "olive oil", quantity: 3 },
        { text: "3 tbsp red wine vinegar (divided)", ingredient: "red wine vinegar", quantity: 3 },
        { text: "Salt and pepper to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Soak the stale bread in water for about 15 minutes, turning occasionally, then squeeze it dry and tear or cut it into chunks - soaking, not toasting, is the traditional Tuscan technique for panzanella.",
        "Soak the sliced red onion in cold water with 1 tablespoon of the vinegar for 10 minutes to mellow its bite, then drain.",
        "Combine the soaked bread, red onion, tomatoes, cucumber, and basil in a large bowl.",
        "Whisk together the olive oil and remaining vinegar, then season with salt and pepper.",
        "Toss the salad with the dressing and let sit for 30 minutes so the bread soaks up the flavors before serving.",
      ],
      tags: ["lunch", "italian", "vegan", "vegetarian", "quick", "salad"],
    },
    bg: {
      title: "Панцанела",
      description:
        "Стар хляб, накиснат във вода и изцеден, вместо препечен, разбъркан с домати, омекотен червен лук и босилек в прост дресинг от олио и оцет - накисването (не препичането) на хляба е традиционната тосканска техника, а червеният лук е почти универсална съставка, която оригиналната рецепта пропускаше.",
      steps: [
        "Накиснете стария хляб във вода за около 15 минути, обръщайки от време на време, после го изцедете и накъсайте или нарежете на парчета - накисването, а не препичането, е традиционната тосканска техника за панцанела.",
        "Накиснете нарязания червен лук в студена вода с 1 с.л. от оцета за 10 минути, за да омекотите остротата му, после отцедете.",
        "Смесете накиснатия хляб, червения лук, доматите, краставицата и босилека в голяма купа.",
        "Разбийте зехтина и останалия оцет, после подправете със сол и черен пипер.",
        "Разбъркайте салатата с дресинга и оставете да престои 30 минути, за да попие хлябът вкусовете, преди сервиране.",
      ],
      ingredients: [
        "4 чаши стар хляб, нарязан на кубчета",
        "1/2 червен лук, нарязан на тънко",
        "4 домата, нарязани",
        "1 краставица, нарязана на кубчета",
        "1/4 чаша пресен босилек, накъсан",
        "3 с.л. зехтин",
        "3 с.л. червен винен оцет (разделен)",
        "Сол и черен пипер на вкус",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
