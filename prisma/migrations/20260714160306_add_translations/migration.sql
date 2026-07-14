-- CreateTable
CREATE TABLE "RecipeTranslation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "recipeId" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "steps" TEXT NOT NULL,
    CONSTRAINT "RecipeTranslation_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "RecipeIngredientTranslation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "recipeIngredientId" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "displayText" TEXT NOT NULL,
    CONSTRAINT "RecipeIngredientTranslation_recipeIngredientId_fkey" FOREIGN KEY ("recipeIngredientId") REFERENCES "RecipeIngredient" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "RecipeTranslation_recipeId_locale_key" ON "RecipeTranslation"("recipeId", "locale");

-- CreateIndex
CREATE UNIQUE INDEX "RecipeIngredientTranslation_recipeIngredientId_locale_key" ON "RecipeIngredientTranslation"("recipeIngredientId", "locale");
