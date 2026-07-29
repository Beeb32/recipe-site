// Curated ingredient categories for search - lets "cheese" find parmesan and
// mozzarella, and "meat" find chicken and beef, even though those canonical
// ingredient names don't literally contain the word. Hand-picked rather than
// derived from the name itself, since guessing from the string misfires
// constantly (peanut butter isn't a tree nut, coconut milk isn't dairy).
export const ingredientCategories: Record<string, string[]> = {
  cheese: [
    "blue cheese",
    "cheddar cheese",
    "cheese",
    "cheese curds",
    "cotija cheese",
    "cream cheese",
    "farmer's cheese",
    "feta cheese",
    "gruyere cheese",
    "mascarpone",
    "mozzarella",
    "oaxaca cheese",
    "paneer",
    "parmesan",
    "pecorino",
    "provolone cheese",
    "ricotta cheese",
    "sirene",
    "swiss cheese",
  ],
  meat: [
    "bacon",
    "beef",
    "beef brisket",
    "beef chuck",
    "beef chuck roast",
    "beef sirloin",
    "beef tenderloin",
    "beef tripe",
    "breakfast sausage",
    "canadian bacon",
    "chicken",
    "chicken breast",
    "chicken liver",
    "chicken tenders",
    "chicken thighs",
    "chicken wings",
    "cocktail sausages",
    "corned beef",
    "duck",
    "flank steak",
    "ground beef",
    "ground chicken",
    "ground lamb",
    "ground meat",
    "ground pork",
    "ground turkey",
    "guanciale",
    "ham",
    "lamb",
    "meatballs",
    "pancetta",
    "pate",
    "pepperoni",
    "pig's ears",
    "pig's feet",
    "pork",
    "pork belly",
    "pork chops",
    "pork ribs",
    "pork shoulder",
    "pork skin",
    "pork tenderloin",
    "prosciutto",
    "ribeye",
    "ribeye steak",
    "roast pork",
    "salami",
    "sausage",
    "short ribs",
    "sirloin steak",
    "turkey",
    "veal",
    "veal brain",
  ],
  seafood: [
    "anchovy",
    "bonito flakes",
    "carp",
    "clams",
    "crab",
    "crab meat",
    "dried shrimp",
    "lobster",
    "mussels",
    "octopus",
    "salmon",
    "shrimp",
    "tilapia",
    "tuna",
    "white fish",
  ],
};

// Alternate spellings/languages for a category name itself, so the Bulgarian
// UI can trigger the same category lookup as the English keys above.
const categoryAliases: Record<string, string> = {
  "сирене": "cheese",
  "сирената": "cheese",
  "месо": "meat",
  "месата": "meat",
  "риба": "seafood",
  "рибата": "seafood",
  "морски дарове": "seafood",
  "морска храна": "seafood",
};

// Reverse index: canonical ingredient name -> the categories it belongs to,
// built once so a search checks membership in O(1) instead of scanning every
// category's list on every keystroke.
const categoriesByIngredient = new Map<string, Set<string>>();
for (const [category, names] of Object.entries(ingredientCategories)) {
  for (const name of names) {
    if (!categoriesByIngredient.has(name)) categoriesByIngredient.set(name, new Set());
    categoriesByIngredient.get(name)!.add(category);
  }
}

export function ingredientInCategory(entryName: string, categoryQuery: string): boolean {
  const resolved = categoryAliases[categoryQuery] ?? categoryQuery;
  return categoriesByIngredient.get(entryName)?.has(resolved) ?? false;
}
