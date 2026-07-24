import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "kale-caesar-salad",
      title: "Kale Caesar Salad",
      description:
        "Massaged kale tossed in a creamy Caesar dressing with Parmesan and croutons, brightened with a squeeze of lemon and cracked black pepper - kale is tougher than romaine and needs that acid to actually break down and taste tender, not just bitter and raw.",
      imageEmoji: "🥗",
      cookTimeMinutes: 15,
      servings: 4,
      ingredients: [
        { text: "1 bunch kale, chopped", ingredient: "kale", quantity: 1 },
        { text: "1/2 cup Caesar dressing", ingredient: "caesar dressing", quantity: 0.5 },
        { text: "1/2 lemon, juiced", ingredient: "lemon", quantity: 0.5 },
        { text: "1/2 cup grated Parmesan", ingredient: "parmesan", quantity: 0.5 },
        { text: "1 cup croutons", ingredient: "croutons", quantity: 1 },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Massage the chopped kale with the lemon juice and a little of the dressing for 2 minutes to soften - the acid is what actually breaks down kale's toughness, not just the dressing.",
        "Toss with the remaining dressing and Parmesan.",
        "Top with croutons and cracked pepper before serving.",
      ],
      tags: ["lunch", "vegetarian", "quick", "salad"],
    },
    bg: {
      title: "Салата Цезар с къдраво зеле",
      description:
        "Омекотено къдраво зеле, разбъркано в кремообразен дресинг Цезар с пармезан и крутони, освежено с малко лимонов сок и прясно смлян черен пипер - къдравото зеле е по-твърдо от марулята и се нуждае от тази киселина, за да омекне наистина, а не да остане горчиво и сурово.",
      steps: [
        "Омекотете нарязаното къдраво зеле с лимоновия сок и малко от дресинга за 2 минути - киселината е това, което наистина разгражда твърдостта на зелето, не само дресингът.",
        "Разбъркайте с останалия дресинг и пармезана.",
        "Отгоре сложете крутони и смлян черен пипер преди сервиране.",
      ],
      ingredients: [
        "1 връзка къдраво зеле, нарязано",
        "1/2 чаша дресинг Цезар",
        "сок от 1/2 лимон",
        "1/2 чаша настърган пармезан",
        "1 чаша крутони",
        "Черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "orzo-salad",
      title: "Orzo Salad",
      description:
        "A Mediterranean-style cold pasta salad of orzo, vegetables, feta, red onion, and fresh herbs - orzo, cucumber, and tomato alone with no onion or herbs is a thinner version of the Mediterranean salad this is meant to be.",
      imageEmoji: "🥗",
      cookTimeMinutes: 25,
      servings: 6,
      ingredients: [
        { text: "1 1/2 cups orzo", ingredient: "orzo", quantity: 1.5 },
        { text: "1 cucumber, diced", ingredient: "cucumber", quantity: 1 },
        { text: "1 cup cherry tomatoes, halved", ingredient: "cherry tomatoes", quantity: 1 },
        { text: "1/4 red onion, finely diced", ingredient: "red onion", quantity: 0.25 },
        { text: "1/4 cup chopped fresh parsley", ingredient: "parsley", quantity: 0.25 },
        { text: "1/2 cup crumbled feta cheese", ingredient: "feta cheese", quantity: 0.5 },
        { text: "3 tbsp olive oil", ingredient: "olive oil", quantity: 3 },
        { text: "2 tbsp lemon juice", ingredient: "lemon juice", quantity: 2 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Cook the orzo in salted boiling water until tender, then drain and cool.",
        "Combine the orzo with cucumber, cherry tomatoes, red onion, parsley, and feta.",
        "Whisk together the olive oil, lemon juice, salt, and pepper, then toss with the salad.",
        "Chill before serving.",
      ],
      tags: ["lunch", "vegetarian", "salad", "mediterranean", "quick"],
    },
    bg: {
      title: "Салата с орзо",
      description:
        "Студена салата с паста в средиземноморски стил от орзо, зеленчуци, фета, червен лук и пресни билки - орзо, краставица и домат сами по себе си, без лук или билки, е по-бедна версия на средиземноморската салата, каквато тя трябва да бъде.",
      steps: [
        "Сварете орзото в подсолена вряща вода до омекване, после отцедете и охладете.",
        "Смесете орзото с краставица, чери домати, червен лук, магданоз и фета.",
        "Разбийте зехтина, лимоновия сок, солта и черния пипер заедно, после разбъркайте със салатата.",
        "Охладете преди сервиране.",
      ],
      ingredients: [
        "1 1/2 чаши орзо",
        "1 краставица, нарязана на кубчета",
        "1 чаша чери домати, разрязани наполовина",
        "1/4 червен лук, ситно нарязан",
        "1/4 чаша нарязан пресен магданоз",
        "1/2 чаша натрошено сирене фета",
        "3 с.л. зехтин",
        "2 с.л. лимонов сок",
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
