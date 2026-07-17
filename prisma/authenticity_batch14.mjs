import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "thai-green-curry",
      title: "Thai Green Curry",
      description:
        "Chicken and vegetables simmered in a fragrant coconut green curry sauce, balanced with fish sauce and palm sugar and finished with Thai basil - the paste is fried in coconut cream first to unlock its full flavor.",
      imageEmoji: "🍛",
      cookTimeMinutes: 35,
      servings: 4,
      ingredients: [
        { text: "1 lb chicken breast, sliced", ingredient: "chicken breast", quantity: 1 },
        { text: "1 can coconut milk (cream separated if possible)", ingredient: "coconut milk", quantity: 1 },
        { text: "3 tbsp green curry paste", ingredient: "green curry paste", quantity: 3 },
        { text: "1 cup bamboo shoots", ingredient: "bamboo shoots", quantity: 1 },
        { text: "1/2 red bell pepper, sliced", ingredient: "red pepper", quantity: 0.5 },
        { text: "3-4 kaffir lime leaves, torn", ingredient: "kaffir lime leaves", quantity: null },
        { text: "2 tbsp fish sauce", ingredient: "fish sauce", quantity: 2 },
        { text: "1 tbsp palm sugar", ingredient: "palm sugar", quantity: 1 },
        { text: "1 cup Thai basil leaves", ingredient: "thai basil", quantity: 1 },
        { text: "1-2 Thai chilies, sliced (optional)", ingredient: "thai chilies", quantity: null },
      ],
      steps: [
        "Scoop the thick coconut cream from the top of the can and fry it with the green curry paste in a pot, stirring constantly, for about 5 minutes until fragrant and a thin layer of oil separates - this step is what unlocks the paste's full flavor.",
        "Add the chicken and cook until no longer pink.",
        "Pour in the remaining coconut milk, bamboo shoots, red pepper, and kaffir lime leaves, simmering for 10 minutes.",
        "Stir in the fish sauce and palm sugar until the sugar dissolves, then stir in the Thai basil and chilies just before serving.",
      ],
      tags: ["dinner", "asian", "quick"],
    },
    bg: {
      title: "Тайландско зелено къри",
      description:
        "Пиле и зеленчуци, варени в ароматен кокосов зелен сос къри, балансиран с рибен сос и палмова захар и довършен с тайландски босилек - пастата се запържва първо в кокосова сметана, за да разкрие пълния си вкус.",
      steps: [
        "Извадете гъстата кокосова сметана от горната част на консервата и я запържете с пастата зелено къри, разбърквайки постоянно, около 5 минути, докато се ароматизира и олиото се отдели на тънък слой - тази стъпка разкрива пълния вкус на пастата.",
        "Добавете пилето и гответе, докато престане да е розово.",
        "Добавете останалото кокосово мляко, бамбуковите филизи, червената чушка и лаймовите листа кафир, варете 10 минути.",
        "Разбъркайте рибния сос и палмовата захар, докато захарта се разтвори, после разбъркайте тайландския босилек и лютите чушки точно преди сервиране.",
      ],
      ingredients: [
        "450 г пилешка гърда, нарязана",
        "1 консерва кокосово мляко (сметаната отделена, ако е възможно)",
        "3 с.л. паста зелено къри",
        "1 чаша бамбукови филизи",
        "1/2 червена чушка, нарязана",
        "3-4 лаймови листа кафир, накъсани",
        "2 с.л. рибен сос",
        "1 с.л. палмова захар",
        "1 чаша листа тайландски босилек",
        "1-2 тайландски люти чушки, нарязани (по желание)",
      ],
    },
  },
  {
    en: {
      slug: "thai-red-curry",
      title: "Thai Red Curry",
      description:
        "A rich, spicy coconut curry with beef and vegetables, balanced with fish sauce and palm sugar and finished with kaffir lime leaves and Thai basil - the paste is fried in coconut cream first to unlock its full flavor.",
      imageEmoji: "🍛",
      cookTimeMinutes: 35,
      servings: 4,
      ingredients: [
        { text: "1 lb beef, sliced thin", ingredient: "beef", quantity: 1 },
        { text: "1 can coconut milk", ingredient: "coconut milk", quantity: 1 },
        { text: "3 tbsp red curry paste", ingredient: "red curry paste", quantity: 3 },
        { text: "1 cup sliced bell peppers", ingredient: "bell peppers", quantity: 1 },
        { text: "3-4 kaffir lime leaves, torn", ingredient: "kaffir lime leaves", quantity: null },
        { text: "2 tbsp fish sauce", ingredient: "fish sauce", quantity: 2 },
        { text: "1 tbsp palm sugar (or brown sugar)", ingredient: "palm sugar", quantity: 1 },
        { text: "1 cup Thai basil leaves", ingredient: "thai basil", quantity: 1 },
      ],
      steps: [
        "Fry the red curry paste in the thick coconut cream from the top of the can until fragrant and a thin layer of oil separates, about 5 minutes.",
        "Add the beef and cook until browned.",
        "Pour in the remaining coconut milk, bell peppers, and kaffir lime leaves, simmering for 12-15 minutes.",
        "Stir in the fish sauce and palm sugar until dissolved, then stir in the Thai basil just before serving.",
      ],
      tags: ["dinner", "asian"],
    },
    bg: {
      title: "Тайландско червено къри",
      description:
        "Наситено, пикантно кокосово къри с телешко месо и зеленчуци, балансирано с рибен сос и палмова захар и довършено с лаймови листа кафир и тайландски босилек - пастата се запържва първо в кокосова сметана, за да разкрие пълния си вкус.",
      steps: [
        "Запържете пастата червено къри в гъстата кокосова сметана от горната част на консервата, докато се ароматизира и олиото се отдели на тънък слой, около 5 минути.",
        "Добавете телешкото месо и гответе до запържване.",
        "Добавете останалото кокосово мляко, чушките и лаймовите листа кафир, варете 12-15 минути.",
        "Разбъркайте рибния сос и палмовата захар до разтваряне, после разбъркайте тайландския босилек точно преди сервиране.",
      ],
      ingredients: [
        "450 г телешко месо, нарязано на тънко",
        "1 консерва кокосово мляко",
        "3 с.л. паста червено къри",
        "1 чаша нарязани чушки",
        "3-4 лаймови листа кафир, накъсани",
        "2 с.л. рибен сос",
        "1 с.л. палмова захар (или кафява захар)",
        "1 чаша листа тайландски босилек",
      ],
    },
  },
  {
    en: {
      slug: "massaman-curry",
      title: "Massaman Curry",
      description:
        "A mild, rich Thai curry of slow-braised beef, potatoes, and peanuts, balanced with tamarind and palm sugar - the sweet-and-sour backbone that makes massaman distinct from other Thai curries.",
      imageEmoji: "🍛",
      cookTimeMinutes: 130,
      servings: 4,
      ingredients: [
        { text: "1 lb beef stew meat (chuck)", ingredient: "beef", quantity: 1 },
        { text: "1 can coconut milk", ingredient: "coconut milk", quantity: 1 },
        { text: "3 tbsp massaman curry paste", ingredient: "massaman curry paste", quantity: 3 },
        { text: "2 potatoes, cubed", ingredient: "potato", quantity: 2 },
        { text: "1/4 cup roasted peanuts", ingredient: "peanuts", quantity: 0.25 },
        { text: "2 tbsp fish sauce", ingredient: "fish sauce", quantity: 2 },
        { text: "2 tbsp tamarind paste", ingredient: "tamarind paste", quantity: 2 },
        { text: "1 tbsp palm sugar", ingredient: "palm sugar", quantity: 1 },
      ],
      steps: [
        "Fry the curry paste in the thick coconut cream from the top of the can, stirring, for 5-6 minutes until fragrant and a thin layer of oil pools at the edges.",
        "Add the beef and cook until browned.",
        "Pour in the remaining coconut milk, cover, and simmer on low heat for 1.5-2 hours until the beef is fork-tender, adding the potatoes for the last 15-20 minutes so they soften without falling apart.",
        "Stir in the peanuts, fish sauce, tamarind paste, and palm sugar, tasting and adjusting the sweet-sour-salty balance before serving.",
      ],
      tags: ["dinner", "asian"],
    },
    bg: {
      title: "Масаман къри",
      description:
        "Меко, наситено тайландско къри от бавно задушено телешко месо, картофи и фъстъци, балансирано с тамаринд и палмова захар - кисело-сладката основа, която отличава масаман от другите тайландски къри.",
      steps: [
        "Запържете пастата къри в гъстата кокосова сметана от горната част на консервата, разбърквайки, 5-6 минути, докато се ароматизира и олиото се събере на тънък слой по краищата.",
        "Добавете телешкото месо и гответе до запържване.",
        "Добавете останалото кокосово мляко, покрийте и оставете да къкри на слаб огън 1.5-2 часа, докато телешкото омекне напълно, добавяйки картофите през последните 15-20 минути, за да омекнат, без да се разпаднат.",
        "Разбъркайте фъстъците, рибния сос, тамариндовата паста и палмовата захар, опитвайки и коригирайки баланса между сладко, кисело и солено преди сервиране.",
      ],
      ingredients: [
        "450 г телешко месо за яхния",
        "1 консерва кокосово мляко",
        "3 с.л. паста масаман къри",
        "2 картофа, нарязани на кубчета",
        "1/4 чаша печени фъстъци",
        "2 с.л. рибен сос",
        "2 с.л. тамариндова паста",
        "1 с.л. палмова захар",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
