import { prisma, runTranslations } from "./translate-lib.mjs";

// Shoyu ramen - web-researched for authentic technique before writing, per
// standing instructions. Nutrition estimate is set directly here
// (caloriesPerServing/proteinG/carbsG/fatG), per standing instruction to
// never leave new recipes without nutrition.
const newRecipes = [
  {
    slug: "shoyu-ramen",
    title: "Shoyu Ramen",
    description:
      "Tokyo's classic soy-sauce ramen - a clear, translucent amber chicken-and-dashi broth kept apart from a separately concentrated soy sauce tare, the two combined only at the very last step in each bowl so every serving's seasoning stays precise.",
    imageEmoji: "🍜",
    cookTimeMinutes: 75,
    servings: 4,
    caloriesPerServing: 580,
    proteinG: 34,
    carbsG: 64,
    fatG: 17,
    ingredients: [
      { text: "6 cups water", ingredient: "water", quantity: 6 },
      { text: "1 (4-inch) piece kombu, plus 1 (2-inch) piece for the tare", ingredient: "kombu", quantity: 1 },
      { text: "1 cup bonito flakes (katsuobushi), plus 1 tbsp for the tare", ingredient: "bonito flakes", quantity: 1 },
      { text: "1 lb chicken thighs, bone-in if possible", ingredient: "chicken thigh", quantity: 1 },
      { text: "2 scallions, cut into large pieces, plus more sliced for garnish", ingredient: "scallion", quantity: 2 },
      { text: "3 slices fresh ginger", ingredient: "ginger", quantity: 3 },
      { text: "2 garlic cloves, smashed", ingredient: "garlic", quantity: 2 },
      { text: "1/2 cup soy sauce", ingredient: "soy sauce", quantity: 0.5 },
      { text: "2 tbsp mirin", ingredient: "mirin", quantity: 2 },
      { text: "1 tbsp sake", ingredient: "sake", quantity: 1 },
      { text: "4 eggs", ingredient: "eggs", quantity: 4 },
      { text: "4 servings fresh ramen noodles (alkaline wheat noodles)", ingredient: "ramen noodles", quantity: 4 },
      { text: "Menma (seasoned bamboo shoots), for topping", ingredient: "menma", quantity: null },
      { text: "1 sheet nori, cut into strips", ingredient: "nori", quantity: 1 },
    ],
    steps: [
      "Combine the water and the larger piece of kombu in a pot and let sit at least 30 minutes, then heat gently just until small bubbles form around the edges - never let kombu boil, which turns dashi bitter and slimy.",
      "Remove the kombu, add the cup of bonito flakes, turn off the heat, and let steep 5 minutes, then strain - this is your dashi base.",
      "In the same pot, combine the strained dashi with the chicken thighs, scallion pieces, ginger, and garlic, and simmer gently, uncovered, for 45-60 minutes, skimming any foam, until the broth is savory and the chicken is cooked through - keep it at a gentle simmer, not a rolling boil, so the broth stays clear and amber rather than cloudy, which is what separates shoyu ramen from tonkotsu.",
      "Remove the chicken, let it cool slightly, then slice it for topping the bowls; strain the broth and keep it hot.",
      "Make the tare separately: combine the soy sauce, mirin, sake, the small piece of kombu, and the tablespoon of bonito flakes in a small saucepan and simmer gently for about 5 minutes to concentrate the flavor, then strain - keeping the tare and the broth as two separate components, combined only in the bowl, is what lets you control the seasoning intensity of every serving precisely.",
      "Soft-boil the eggs (6.5-7 minutes in simmering water, then into an ice bath), peel, and let them sit in a splash of the finished tare for at least 30 minutes to pick up color and flavor, then halve.",
      "Cook the ramen noodles in a separate pot of boiling water according to the package directions, just until al dente, then drain well - never cook noodles in the broth itself, which would cloud it and dilute the seasoning.",
      "To assemble, spoon 2-3 tablespoons of tare into the bottom of each bowl, ladle in the hot broth and stir to combine, add the drained noodles, then top with the sliced chicken, a halved marinated egg, sliced scallion, menma, and a strip of nori.",
    ],
    tags: ["dinner", "japanese", "soup"],
    bg: {
      title: "Шою Рамен",
      description: "Класическият токийски рамен със соев сос - бистър, прозрачно кехлибарен бульон от пиле и даши, държан отделно от концентрирано таре от соев сос, като двете се смесват едва в последната стъпка във всяка купа, за да остане подправянето на всяка порция точно.",
      steps: [
        "Смесете водата с по-голямото парче комбу в тенджера и оставете да престои поне 30 минути, после загрейте леко, само докато се появят малки мехурчета по края - никога не оставяйте комбу да заври, защото това прави дашито горчиво и лигаво.",
        "Извадете комбуто, добавете чашата люспи бонито, изключете котлона и оставете да престои 5 минути, после прецедете - това е основата на дашито.",
        "В същата тенджера смесете прецеденото даши с пилешките бутчета, парчетата пролетен лук, джинджифила и чесъна и къкрете леко, без капак, 45-60 минути, отстранявайки пяната, докато бульонът стане ароматен и пилето се сготви напълно - поддържайте лек къкрещ огън, а не силно кипене, за да остане бульонът бистър и кехлибарен, а не мътен, което е разликата между шою рамен и тонкоцу.",
        "Извадете пилето, оставете да поизстине леко, после го нарежете за гарниране на купите; прецедете бульона и го дръжте горещ.",
        "Направете тарето отделно: смесете соевия сос, мирина, сакето, малкото парче комбу и лъжицата люспи бонито в малка тенджерка и къкрете леко около 5 минути, за да се концентрира вкусът, после прецедете - запазването на тарето и бульона като два отделни компонента, смесвани само в купата, е това, което позволява точен контрол върху подправянето на всяка порция.",
        "Сварете яйцата рохки (6.5-7 минути в къкреща вода, после в ледена вода), обелете ги и ги оставете да престоят в малко от готовото таре поне 30 минути, за да поемат цвят и вкус, после ги разрежете наполовина.",
        "Сгответе юфката за рамен в отделна тенджера с вряща вода според инструкциите на опаковката, само докато стане ал денте, после отцедете добре - никога не гответе юфката направо в бульона, защото това ще го помъти и ще разреди подправянето.",
        "За сглобяване сложете 2-3 супени лъжици таре на дъното на всяка купа, налейте горещия бульон и разбъркайте, добавете отцедената юфка, после гарнирайте с нарязаното пиле, разполовено мариновано яйце, нарязан пролетен лук, менма и ивица нори.",
      ],
      ingredients: [
        "6 чаши вода",
        "1 парче комбу (10 см), плюс 1 по-малко парче (5 см) за тарето",
        "1 чаша люспи бонито (кацуобуши), плюс 1 с.л. за тарето",
        "450г пилешки бутчета, с кост, ако е възможно",
        "2 стръка пролетен лук, нарязани на едро, плюс още нарязан за гарнитура",
        "3 резена свеж джинджифил",
        "2 скилидки чесън, натрошени",
        "1/2 чаша соев сос",
        "2 с.л. мирин",
        "1 с.л. саке",
        "4 яйца",
        "4 порции прясна юфка за рамен (алкална пшенична юфка)",
        "Менма (подправени бамбукови филизи), за гарнитура",
        "1 лист нори, нарязан на ивици",
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
