import type { Locale } from "@/lib/locale";

// Static UI copy for the site chrome (nav, headings, buttons, empty states).
// Recipe content itself is translated separately via RecipeTranslation /
// RecipeIngredientTranslation rows in the database (see lib/recipes.ts).
const strings = {
  en: {
    logIn: "Log in",
    signUp: "Sign up",
    logOut: "Log out",
    favorites: "Favorites",
    hi: (name: string) => `Hi, ${name}`,
    recipesHeading: "Recipes",
    recipesSubheading: "Browse, search, and filter what to cook next.",
    searchByName: "Search by recipe name...",
    searchByIngredient: "Search by ingredient...",
    anyCookTime: "Any cook time",
    fifteenMinOrLess: "15 min or less",
    thirtyMinOrLess: "30 min or less",
    oneHourOrLess: "1 hour or less",
    allTag: "All",
    newlyAdded: "🆕 Newly Added",
    noRecipesMatch: "No recipes match your search.",
    min: "min",
    servings: "servings",
    logInToSave: "Log in to save",
    saved: "♥ Saved",
    save: "♡ Save",
    ingredients: "Ingredients",
    steps: "Steps",
    myFavorites: "My Favorites",
    favoritesSubheading: "Recipes you've saved.",
    noFavoritesYet: "No favorites yet - save a recipe from its page to see it here.",
  },
  bg: {
    logIn: "Вход",
    signUp: "Регистрация",
    logOut: "Изход",
    favorites: "Любими",
    hi: (name: string) => `Здравей, ${name}`,
    recipesHeading: "Рецепти",
    recipesSubheading: "Разглеждай, търси и филтрирай какво да сготвиш.",
    searchByName: "Търсене по име на рецепта...",
    searchByIngredient: "Търсене по съставка...",
    anyCookTime: "Всяко време за готвене",
    fifteenMinOrLess: "До 15 мин",
    thirtyMinOrLess: "До 30 мин",
    oneHourOrLess: "До 1 час",
    allTag: "Всички",
    newlyAdded: "🆕 Ново добавени",
    noRecipesMatch: "Няма рецепти, отговарящи на търсенето.",
    min: "мин",
    servings: "порции",
    logInToSave: "Влез, за да запазиш",
    saved: "♥ Запазено",
    save: "♡ Запази",
    ingredients: "Съставки",
    steps: "Стъпки",
    myFavorites: "Любими рецепти",
    favoritesSubheading: "Рецептите, които си запазил.",
    noFavoritesYet: "Все още няма любими - запази рецепта от нейната страница, за да я видиш тук.",
  },
} as const;

export function t(locale: Locale) {
  return strings[locale];
}

// Recipe tags are stored as fixed lowercase English words (matched against
// in RecipeBrowser's filter logic) - only their displayed label changes
// with locale.
const tagLabels: Record<Locale, Record<string, string>> = {
  en: {},
  bg: {
    asian: "азиатско",
    baking: "печене",
    breakfast: "закуска",
    dessert: "десерт",
    dinner: "вечеря",
    french: "френско",
    italian: "италианско",
    lunch: "обяд",
    mediterranean: "средиземноморско",
    mexican: "мексиканско",
    quick: "бързо",
    salad: "салата",
    snack: "закуска (междинна)",
    vegan: "веган",
    vegetarian: "вегетарианско",
  },
};

export function tagLabel(locale: Locale, tag: string): string {
  return tagLabels[locale][tag] ?? tag;
}
