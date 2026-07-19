import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "lobster-rolls",
      title: "Lobster Rolls",
      description:
        "Chilled lobster meat tossed in a light mayonnaise dressing, piled into a split-top bun griddled golden in butter on both flat sides - griddling the bun in butter, not just toasting it, is the real New England technique.",
      imageEmoji: "🦞",
      cookTimeMinutes: 20,
      servings: 4,
      ingredients: [
        { text: "1 lb cooked lobster meat, chopped", ingredient: "lobster", quantity: 1 },
        { text: "1/4 cup mayonnaise", ingredient: "mayonnaise", quantity: 0.25 },
        { text: "1 celery stalk, diced (optional)", ingredient: "celery", quantity: 1 },
        { text: "1 tbsp lemon juice", ingredient: "lemon juice", quantity: 1 },
        { text: "Salt and pepper to taste", ingredient: "salt", quantity: null },
        { text: "4 New England-style split-top buns (or hot dog buns)", ingredient: "hot dog buns", quantity: 4 },
        { text: "3 tbsp butter, softened", ingredient: "butter", quantity: 3 },
        { text: "1 tbsp chopped chives, for garnish", ingredient: "chives", quantity: 1 },
      ],
      steps: [
        "Toss the lobster meat with mayonnaise, celery if using, lemon juice, salt, and pepper - keep it lightly dressed so the lobster isn't weighed down.",
        "Spread the flat sides of the split-top buns with the softened butter.",
        "Griddle the buns in a skillet, butter-side down, over medium heat until golden, about 3 minutes per side - this griddling in butter, not just toasting, is what real New England lobster rolls are known for.",
        "Fill each bun generously with the lobster salad.",
        "Garnish with chives and serve chilled.",
      ],
      tags: ["lunch", "quick"],
    },
    bg: {
      title: "Сандвичи с омар",
      description:
        "Охладено месо от омар, разбъркано в лек майонезен дресинг, натрупано в разцепено хлебче, изпечено до златисто в масло от двете плоски страни - изпичането на хлебчето в масло на тиган, а не просто препичане, е истинската нюйнглъндска техника.",
      steps: [
        "Разбъркайте месото от омар с майонеза, целината (ако използвате), лимоновия сок, солта и черния пипер - оставете го леко подправено, за да не натежи от майонезата.",
        "Намажете плоските страни на разцепените хлебчета с омекотеното масло.",
        "Изпечете хлебчетата в тиган, с намазаната страна надолу, на среден огън до златисто, около 3 минути от всяка страна - това изпичане в масло на тиган, а не просто препичане, е това, за което са известни истинските нюйнглъндски сандвичи с омар.",
        "Напълнете щедро всяко хлебче със салатата от омар.",
        "Гарнирайте с трън лук и сервирайте охладено.",
      ],
      ingredients: [
        "450 г сготвено месо от омар, нарязано",
        "1/4 чаша майонеза",
        "1 стрък целина, нарязан на кубчета (по желание)",
        "1 с.л. лимонов сок",
        "Сол и черен пипер на вкус",
        "4 разцепени хлебчета в нюйнглъндски стил (или хлебчета за хот-дог)",
        "3 с.л. масло, омекотено",
        "1 с.л. нарязан трън лук, за гарниране",
      ],
    },
  },
  {
    en: {
      slug: "fish-and-chips",
      title: "Fish and Chips",
      description:
        "Fish dredged in seasoned flour before dipping in a cold beer batter, and chips double-fried at a lower temperature first, then hotter for crisping - the seasoned flour dredge and double-fry are what separate real British fish and chips from a single-fry version.",
      imageEmoji: "🐟",
      cookTimeMinutes: 50,
      servings: 4,
      ingredients: [
        { text: "1 lb white fish fillets", ingredient: "white fish", quantity: 1 },
        { text: "1 cup flour (for the batter)", ingredient: "flour", quantity: 1 },
        { text: "1/2 cup flour (for dredging, seasoned with salt and pepper)", ingredient: "flour", quantity: 0.5 },
        { text: "1 tsp baking powder", ingredient: "baking powder", quantity: 1 },
        { text: "1 tsp salt", ingredient: "salt", quantity: 1 },
        { text: "1 cup cold beer", ingredient: "beer", quantity: 1 },
        { text: "4 potatoes, cut into thick chips", ingredient: "potato", quantity: 4 },
        { text: "3 cups vegetable oil for frying", ingredient: "vegetable oil", quantity: 3 },
        { text: "Malt vinegar, for serving", ingredient: "malt vinegar", quantity: null },
      ],
      steps: [
        "Heat the oil to 325°F and fry the chips in batches for 2-3 minutes until pale and just softened; remove and set aside.",
        "Increase the oil temperature to 375°F.",
        "Whisk the batter flour, baking powder, and salt with the cold beer until just smooth.",
        "Dredge the fish in the seasoned flour, tapping off the excess, then dip into the batter - the flour dredge is what helps the batter cling instead of sliding off.",
        "Fry the battered fish for 5-8 minutes until golden and cooked through.",
        "Fry the chips a second time at the higher temperature for 2-3 minutes until golden and crisp.",
        "Serve the fish and chips with malt vinegar.",
      ],
      tags: ["dinner"],
    },
    bg: {
      title: "Риба с пържени картофи",
      description:
        "Риба, овалена в подправено брашно преди потапяне в студено бирено тесто, а картофите изпържени двойно - първо на по-ниска температура, после на по-висока за хрупкавост - подправеното брашно и двойното пържене са това, което отличава истинската британска риба с пържени картофи от еднократно пържена версия.",
      steps: [
        "Загрейте олиото до 163°C и изпържете картофите на порции 2-3 минути, докато побледнеят и леко омекнат; извадете и оставете настрани.",
        "Повишете температурата на олиото до 190°C.",
        "Разбийте брашното за тестото, бакпулвера и солта със студената бира до гладкост.",
        "Овалайте рибата в подправеното брашно, изтърсвайки излишното, после потопете в тестото - подправеното брашно е това, което помага на тестото да се захване, вместо да се плъзне.",
        "Изпържете панираната риба 5-8 минути до златисто и готовност.",
        "Изпържете картофите втори път на по-високата температура за 2-3 минути до златисто и хрупкаво.",
        "Сервирайте рибата с картофите и малцов оцет.",
      ],
      ingredients: [
        "450 г филе от бяла риба",
        "1 чаша брашно (за тестото)",
        "1/2 чаша брашно (за овалване, подправено със сол и черен пипер)",
        "1 ч.л. бакпулвер",
        "1 ч.л. сол",
        "1 чаша студена бира",
        "4 картофа, нарязани на дебели пръчици",
        "3 чаши олио за пържене",
        "Малцов оцет, за сервиране",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
