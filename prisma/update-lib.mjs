export { prisma } from "./translate-lib.mjs";
import { prisma } from "./translate-lib.mjs";

// Rewrites one recipe's EN content + ingredient list from scratch (dropping
// and rebuilding RecipeIngredient rows, which cascades away any stale
// RecipeIngredientTranslation rows) and upserts its BG translation to match.
// Used for authenticity rewrites where the ingredient set itself changes,
// not just wording - see update_kavarma.mjs for the original one-off version
// this was generalized from.
export async function applyRecipeUpdate({ en, bg }) {
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
      `${en.slug}: ingredient count mismatch - ${newRecipeIngredients.length} EN vs ${bg.ingredients.length} BG`
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
}

export async function applyRecipeUpdates(updates) {
  for (const update of updates) {
    await applyRecipeUpdate(update);
    console.log(`Updated ${update.en.slug}`);
  }
  console.log(`Updated ${updates.length} recipes total.`);
}
