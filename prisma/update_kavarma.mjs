import { prisma } from "./translate-lib.mjs";

const en = {
  slug: "kavarma",
  title: "Kavarma",
  description:
    "A traditional Bulgarian pork stew braised in a clay pot with leeks, peppers, garlic, and white wine, finished with chubritsa (Bulgarian savory).",
  imageEmoji: "🍲",
  cookTimeMinutes: 100,
  servings: 4,
  ingredients: [
    { text: "1 1/2 lb (700g) pork shoulder, cubed", ingredient: "pork shoulder", quantity: 1.5 },
    { text: "2 leeks, sliced into rings", ingredient: "leek", quantity: 2 },
    { text: "1 red bell pepper, sliced", ingredient: "red pepper", quantity: 1 },
    { text: "1 cup (200g) mushrooms, sliced", ingredient: "mushroom", quantity: 1 },
    { text: "3 cloves garlic, minced", ingredient: "garlic", quantity: 3 },
    { text: "2 tomatoes, diced", ingredient: "tomato", quantity: 2 },
    { text: "1/2 cup white wine", ingredient: "white wine", quantity: 0.5 },
    { text: "3 tbsp sunflower oil", ingredient: "sunflower oil", quantity: 3 },
    { text: "1 tsp chubritsa (Bulgarian savory), or 1/2 tsp thyme plus 1/2 tsp oregano", ingredient: "chubritsa", quantity: 1 },
    { text: "2 bay leaves", ingredient: "bay leaf", quantity: 2 },
    { text: "Salt and black pepper to taste", ingredient: "salt", quantity: null },
    { text: "Fresh parsley, chopped, for garnish", ingredient: "parsley", quantity: null },
  ],
  steps: [
    "Cut the pork into cubes, season with salt and pepper, and sear in hot sunflower oil in a heavy pot until browned on all sides; remove and set aside.",
    "In the same pot, sauté the leeks and garlic until softened, then add the red pepper and mushrooms and cook for 5 minutes.",
    "Stir in the tomatoes, bay leaves, and chubritsa, then pour in the white wine and let it reduce by half.",
    "Return the pork to the pot, cover, and braise in a 325°F oven (traditionally in a clay gyuvech) for 60-75 minutes until the pork is fork-tender.",
    "Discard the bay leaves, garnish with fresh parsley, and serve hot straight from the pot with crusty bread.",
  ],
  tags: ["dinner"],
};

const bg = {
  title: "Кавърма",
  description:
    "Традиционна българска яхния от свинско месо, задушена в глинен съд с праз лук, чушки, чесън и бяло вино, довършена с чубрица.",
  steps: [
    "Нарежете свинското месо на кубчета, подправете със сол и черен пипер и запържете в горещо слънчогледово олио в тежка тенджера до зачервяване от всички страни; извадете и оставете настрана.",
    "В същата тенджера задушете праза и чесъна до омекване, после добавете червената чушка и гъбите и гответе 5 минути.",
    "Разбъркайте доматите, дафиновите листа и чубрицата, после налейте бялото вино и оставете да се редуцира наполовина.",
    "Върнете свинското месо в тенджерата, покрийте и задушете във фурна на 160°C (традиционно в глинен гювеч) 60-75 минути, докато месото омекне напълно.",
    "Извадете дафиновите листа, гарнирайте с пресен магданоз и сервирайте горещо направо от съда с хрупкав хляб.",
  ],
  ingredients: [
    "700 г свинско месо (плешка), нарязано на кубчета",
    "2 стръка праз лук, нарязани на колелца",
    "1 червена чушка, нарязана на ленти",
    "1 чаша (200 г) гъби, нарязани на резени",
    "3 скилидки чесън, ситно нарязани",
    "2 домата, нарязани на кубчета",
    "1/2 чаша бяло вино",
    "3 с.л. слънчогледово олио",
    "1 ч.л. чубрица, или 1/2 ч.л. мащерка и 1/2 ч.л. риган",
    "2 дафинови листа",
    "Сол и черен пипер на вкус",
    "Пресен магданоз, нарязан, за гарниране",
  ],
};

async function main() {
  const recipe = await prisma.recipe.update({
    where: { slug: en.slug },
    data: {
      title: en.title,
      description: en.description,
      imageEmoji: en.imageEmoji,
      cookTimeMinutes: en.cookTimeMinutes,
      servings: en.servings,
      steps: JSON.stringify(en.steps),
      tags: JSON.stringify(en.tags),
    },
  });

  // Ingredient set/count changed, so the old RecipeIngredient rows (and
  // their cascaded RecipeIngredientTranslation rows) are dropped and
  // rebuilt fresh rather than diffed against the old list.
  await prisma.recipeIngredient.deleteMany({ where: { recipeId: recipe.id } });

  const newRecipeIngredients = [];
  for (let i = 0; i < en.ingredients.length; i++) {
    const { text, ingredient, quantity } = en.ingredients[i];
    const ingredientRow = await prisma.ingredient.upsert({
      where: { name: ingredient },
      update: {},
      create: { name: ingredient },
    });
    const recipeIngredient = await prisma.recipeIngredient.create({
      data: {
        recipeId: recipe.id,
        ingredientId: ingredientRow.id,
        displayText: text,
        quantity: quantity,
        position: i,
      },
    });
    newRecipeIngredients.push(recipeIngredient);
  }

  await prisma.recipeTranslation.upsert({
    where: { recipeId_locale: { recipeId: recipe.id, locale: "bg" } },
    update: {
      title: bg.title,
      description: bg.description,
      steps: JSON.stringify(bg.steps),
    },
    create: {
      recipeId: recipe.id,
      locale: "bg",
      title: bg.title,
      description: bg.description,
      steps: JSON.stringify(bg.steps),
    },
  });

  if (bg.ingredients.length !== newRecipeIngredients.length) {
    throw new Error(
      `Ingredient count mismatch: ${newRecipeIngredients.length} EN vs ${bg.ingredients.length} BG`
    );
  }

  for (let i = 0; i < newRecipeIngredients.length; i++) {
    await prisma.recipeIngredientTranslation.create({
      data: {
        recipeIngredientId: newRecipeIngredients[i].id,
        locale: "bg",
        displayText: bg.ingredients[i],
      },
    });
  }

  console.log("Updated kavarma: EN content, ingredients, and BG translation.");
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
