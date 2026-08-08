import { prisma, runTranslations } from "./translate-lib.mjs";

// Lembas bread - a fan-inspired novelty item, not a traditional-cuisine
// recipe (it's fictional food from Middle-earth), so there's no real
// culinary heritage to verify authenticity against. Instead this follows
// the technique pattern shared across the many independent fan-recreation
// recipes: a dense honey-cream shortbread, scored with an "X," brushed
// with honey, and wrapped in leaves - the standard "movie-prop" approach.
// Nutrition estimate is set directly here, per standing instruction.
const newRecipes = [
  {
    slug: "lembas-bread",
    title: "Lembas Bread",
    description:
      "A fan-made take on the elvish waybread of Middle-earth - dense, honey-sweetened shortbread scored with the signature \"X\" and wrapped in leaves. Not a real dish from any cuisine, but the internet's collective recipe for it has become a tradition of its own.",
    imageEmoji: "🍞",
    cookTimeMinutes: 35,
    servings: 8,
    caloriesPerServing: 280,
    proteinG: 4,
    carbsG: 34,
    fatG: 14,
    ingredients: [
      { text: "2 cups all-purpose flour", ingredient: "flour", quantity: 2 },
      { text: "1 tsp baking powder", ingredient: "baking powder", quantity: 1 },
      { text: "1/4 tsp salt", ingredient: "salt", quantity: 0.25 },
      { text: "1/2 tsp ground cinnamon", ingredient: "cinnamon", quantity: 0.5 },
      { text: "1/2 cup unsalted butter, cold and cubed", ingredient: "butter", quantity: 0.5 },
      { text: "1/3 cup honey, plus extra for brushing", ingredient: "honey", quantity: 0.333 },
      { text: "1/3 cup heavy cream", ingredient: "heavy cream", quantity: 0.333 },
      { text: "1 tsp vanilla extract", ingredient: "vanilla extract", quantity: 1 },
      { text: "1/4 cup finely chopped walnuts (optional)", ingredient: "walnuts", quantity: 0.25 },
      { text: "Banana leaves or parchment paper, for wrapping", ingredient: "banana leaves", quantity: null },
    ],
    steps: [
      "Whisk the flour, baking powder, salt, and cinnamon together in a large bowl.",
      "Cut the cold butter into the flour mixture with a pastry cutter or your fingers until it resembles coarse crumbs - this is what gives the bread its dense, slightly crumbly texture rather than a soft cake crumb.",
      "In a separate bowl, whisk together the honey, heavy cream, and vanilla, then pour into the flour mixture and stir just until a firm dough comes together, folding in the walnuts if using.",
      "Turn the dough out onto a lightly floured surface and pat or roll it to about 1/2 inch thick, then cut into 3-inch squares.",
      "Score a shallow \"X\" into the top of each square with a sharp knife - the signature mark of prop lembas bread, which also helps the thick dough bake through evenly.",
      "Arrange the squares on a parchment-lined baking sheet and brush the tops lightly with honey.",
      "Bake at 350F (175C) for 12-15 minutes, until the edges turn golden but the centers stay pale.",
      "Let cool slightly, then wrap in banana leaves or parchment and tie with twine - as they say, \"one small bite is enough to fill the belly of a grown man.\"",
    ],
    tags: ["snack", "baking", "dessert"],
    bg: {
      title: "Лембас Хляб",
      description: "Фен-версия на елфическия пътен хляб от Средната земя - плътен, подсладен с мед бисквитен хляб, надрязан с характерното \"X\" и увит в листа. Не е истинско ястие от нито една кухня, но колективната рецепта на интернет за него се превърна в своя собствена традиция.",
      steps: [
        "Разбъркайте брашното, бакпулвера, солта и канелата в голяма купа.",
        "Нарежете студеното масло в брашнената смес с прибор за рязане на тесто или с пръсти, докато заприлича на едри трохи - това придава на хляба плътната, леко ронлива текстура, вместо мека текстура като на кекс.",
        "В отделна купа разбийте меда, течната сметана и ванилията, после ги изсипете в брашнената смес и разбъркайте само докато се получи стегнато тесто, вмесвайки орехите, ако ги ползвате.",
        "Изсипете тестото върху леко набрашнена повърхност и го сплескайте или разточете до дебелина около 1.25 см, после нарежете на квадратчета по 7-8 см.",
        "Надрежете плитко \"X\" върху всяко квадратче с остър нож - характерният знак на филмовия реквизитен лембас хляб, който също помага на дебелото тесто да се пропече равномерно.",
        "Наредете квадратчетата върху тавичка, застлана с хартия за печене, и намажете леко върховете с мед.",
        "Печете на 175°C за 12-15 минути, докато краищата станат златисти, а центърът остане блед.",
        "Оставете да поизстинат, после увийте в бананови листа или хартия за печене и завържете с канап - както се казва, \"една малка хапка стига, за да засити корема на възрастен мъж\".",
      ],
      ingredients: [
        "2 чаши брашно",
        "1 ч.л. бакпулвер",
        "1/4 ч.л. сол",
        "1/2 ч.л. смляна канела",
        "1/2 чаша студено масло, нарязано на кубчета",
        "1/3 чаша мед, плюс още за намазване",
        "1/3 чаша течна сметана",
        "1 ч.л. ванилова есенция",
        "1/4 чаша ситно нарязани орехи (по желание)",
        "Бананови листа или хартия за печене, за увиване",
      ],
    },
  },
];

async function main() {
  for (const recipe of newRecipes) {
    const created = await prisma.recipe.create({
      data: {
        slug: recipe.slug,
        title: recipe.title,
        description: recipe.description,
        imageEmoji: recipe.imageEmoji,
        cookTimeMinutes: recipe.cookTimeMinutes,
        servings: recipe.servings,
        steps: JSON.stringify(recipe.steps),
        tags: JSON.stringify(recipe.tags),
        caloriesPerServing: recipe.caloriesPerServing,
        proteinG: recipe.proteinG,
        carbsG: recipe.carbsG,
        fatG: recipe.fatG,
      },
    });

    for (let i = 0; i < recipe.ingredients.length; i++) {
      const ing = recipe.ingredients[i];
      const ingredient = await prisma.ingredient.upsert({
        where: { name: ing.ingredient },
        update: {},
        create: { name: ing.ingredient },
      });
      await prisma.recipeIngredient.create({
        data: {
          recipeId: created.id,
          ingredientId: ingredient.id,
          displayText: ing.text,
          quantity: ing.quantity,
          position: i,
        },
      });
    }

    console.log(`Created ${recipe.slug}`);
  }
  console.log(`Created ${newRecipes.length} recipes total.`);

  await runTranslations(
    newRecipes.map((r) => ({
      slug: r.slug,
      title: r.bg.title,
      description: r.bg.description,
      steps: r.bg.steps,
      ingredients: r.bg.ingredients,
    })),
  );
}

main();
