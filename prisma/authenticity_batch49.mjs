import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "shrimp-tacos",
      title: "Shrimp Tacos",
      description:
        "Shrimp marinated in a fresh spice blend of chili powder, cumin, garlic, and lime, seared until charred at the edges, and served over a cilantro-lime cabbage slaw - the lime and cilantro in the slaw, not just sour cream, are what make these taste like real Mexican shrimp tacos.",
      imageEmoji: "🌮",
      cookTimeMinutes: 25,
      servings: 4,
      ingredients: [
        { text: "1 lb shrimp, peeled", ingredient: "shrimp", quantity: 1 },
        { text: "1 tsp chili powder", ingredient: "chili powder", quantity: 1 },
        { text: "1 tsp cumin", ingredient: "cumin", quantity: 1 },
        { text: "1/2 tsp garlic powder", ingredient: "garlic powder", quantity: 0.5 },
        { text: "1/2 tsp smoked paprika", ingredient: "smoked paprika", quantity: 0.5 },
        { text: "2 tbsp lime juice (divided)", ingredient: "lime juice", quantity: 2 },
        { text: "2 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 2 },
        { text: "2 cups shredded cabbage", ingredient: "cabbage", quantity: 2 },
        { text: "1/4 cup chopped cilantro", ingredient: "cilantro", quantity: 0.25 },
        { text: "1/3 cup sour cream (or Mexican crema)", ingredient: "sour cream", quantity: 0.33 },
        { text: "8 small corn tortillas", ingredient: "corn tortillas", quantity: 8 },
        { text: "Lime wedges, for serving", ingredient: "lime", quantity: null },
      ],
      steps: [
        "Toss the shrimp with the chili powder, cumin, garlic powder, smoked paprika, half the lime juice, and salt; let marinate for 10-15 minutes.",
        "Toss the cabbage with the cilantro and remaining lime juice to make a quick slaw.",
        "Cook the shrimp in oil over medium-high heat for 2-3 minutes per side until pink with slightly charred edges.",
        "Warm the tortillas.",
        "Fill with shrimp, the cilantro-lime slaw, and a dollop of sour cream, and serve with lime wedges.",
      ],
      tags: ["dinner", "mexican", "quick"],
    },
    bg: {
      title: "Тако с скариди",
      description:
        "Скариди, маринована в прясна смес от лютив пипер на прах, кимион, чесън и лайм, запечени до леко овъгляне по краищата, поднесени върху зелева салата с кориандър и лайм - лаймът и кориандърът в салатата, а не само заквасената сметана, са това, което придава на истинското мексиканско тако с скариди характерния му вкус.",
      steps: [
        "Разбъркайте скаридите с лютивия пипер на прах, кимиона, чесновия прах, пушения червен пипер, половината лаймов сок и сол; оставете да мариноват 10-15 минути.",
        "Разбъркайте зелето с кориандъра и останалия лаймов сок, за да направите бърза салата.",
        "Изпечете скаридите в олио на среден до силен огън по 2-3 минути от всяка страна до порозовяване и леко овъгляне по краищата.",
        "Затоплете тортилите.",
        "Напълнете със скариди, салатата с кориандър и лайм, и лъжица заквасена сметана, и сервирайте с резенчета лайм.",
      ],
      ingredients: [
        "450 г скариди, обелени",
        "1 ч.л. лютив пипер на прах",
        "1 ч.л. кимион",
        "1/2 ч.л. чеснов прах",
        "1/2 ч.л. пушен червен пипер",
        "2 с.л. лаймов сок (разделен)",
        "2 с.л. олио",
        "2 чаши настъргано зеле",
        "1/4 чаша нарязан кориандър",
        "1/3 чаша заквасена сметана (или мексиканска крема)",
        "8 малки царевични тортили",
        "Резенчета лайм, за сервиране",
      ],
    },
  },
  {
    en: {
      slug: "baja-fish-tacos",
      title: "Baja Fish Tacos",
      description:
        "Fish battered in cold beer and baking powder for extra crunch, deep-fried, and topped with lime crema and slaw - the baking powder is what makes the batter puff up light and crisp, and real Baja tacos are finished with fresh lime and cilantro, not just chipotle mayo.",
      imageEmoji: "🌮",
      cookTimeMinutes: 35,
      servings: 4,
      ingredients: [
        { text: "1 lb white fish fillets, cut into strips", ingredient: "white fish", quantity: 1 },
        { text: "1 cup flour", ingredient: "flour", quantity: 1 },
        { text: "1 tsp baking powder", ingredient: "baking powder", quantity: 1 },
        { text: "1/2 tsp salt", ingredient: "salt", quantity: 0.5 },
        { text: "1 cup cold beer (or sparkling water)", ingredient: "beer", quantity: 1 },
        { text: "3 cups vegetable oil for frying", ingredient: "vegetable oil", quantity: 3 },
        { text: "8 small corn tortillas", ingredient: "corn tortillas", quantity: 8 },
        { text: "2 cups shredded cabbage", ingredient: "cabbage", quantity: 2 },
        { text: "1/3 cup mayonnaise (or Mexican crema)", ingredient: "mayonnaise", quantity: 0.33 },
        { text: "1 tbsp chipotle sauce", ingredient: "chipotle sauce", quantity: 1 },
        { text: "1 tbsp lime juice", ingredient: "lime juice", quantity: 1 },
        { text: "2 tbsp chopped cilantro", ingredient: "cilantro", quantity: 2 },
        { text: "Lime wedges, for serving", ingredient: "lime", quantity: null },
      ],
      steps: [
        "Whisk the flour, baking powder, and salt, then gently stir in the cold beer until just combined; let the batter sit for 15 minutes to thicken - the baking powder and cold beer are what make the crust puff up light and crisp.",
        "Pat the fish strips completely dry, then heat the oil to 350°F.",
        "Dip the fish in the batter and fry until golden and crisp, about 3-4 minutes; drain on paper towels.",
        "Mix the mayonnaise, chipotle sauce, and lime juice to make the crema.",
        "Warm the tortillas, ideally stacking two per taco in the classic Baja style.",
        "Fill with fish, cabbage, a drizzle of chipotle crema, and cilantro, and serve with lime wedges.",
      ],
      tags: ["dinner", "mexican"],
    },
    bg: {
      title: "Тако с риба Баха",
      description:
        "Риба в тесто от студена бира и бакпулвер за допълнителна хрупкавост, дълбоко пържена и покрита с крема от лайм и зелева салата - бакпулверът е това, което кара тестото да набъбне леко и хрупкаво, а истинските тако Баха се довършват с прясен лайм и кориандър, не само майонеза с чипотле.",
      steps: [
        "Разбийте брашното, бакпулвера и солта, после внимателно вмесете студената бира, докато се получи гладко тесто; оставете да престои 15 минути, за да се сгъсти - бакпулверът и студената бира са това, което кара коричката да набъбне леко и хрупкаво.",
        "Подсушете напълно рибените ивици, после загрейте олиото до 177°C.",
        "Потопете рибата в тестото и я изпържете до златисто и хрупкаво, около 3-4 минути; отцедете върху хартиена кърпа.",
        "Смесете майонезата, соса чипотле и лаймовия сок, за да направите кремата.",
        "Затоплете тортилите, в идеалния случай подредени по две за всяко тако в класическия стил Баха.",
        "Напълнете с риба, зеле, малко от кремата чипотле и кориандър, и сервирайте с резенчета лайм.",
      ],
      ingredients: [
        "450 г филе от бяла риба, нарязано на ивици",
        "1 чаша брашно",
        "1 ч.л. бакпулвер",
        "1/2 ч.л. сол",
        "1 чаша студена бира (или газирана вода)",
        "3 чаши олио за пържене",
        "8 малки царевични тортили",
        "2 чаши настъргано зеле",
        "1/3 чаша майонеза (или мексиканска крема)",
        "1 с.л. сос чипотле",
        "1 с.л. лаймов сок",
        "2 с.л. нарязан кориандър",
        "Резенчета лайм, за сервиране",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
