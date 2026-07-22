import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "pulled-pork-sandwiches",
      title: "Pulled Pork Sandwiches",
      description:
        "Slow-cooked pork shoulder rubbed with mustard and spices before cooking, then rested and shredded with some of its own juices stirred back in before tossing with barbecue sauce - the mustard rub is what real pulled pork starts with, and moistening the shredded meat with its own juices is what keeps it from drying out under the sauce.",
      imageEmoji: "🥪",
      cookTimeMinutes: 240,
      servings: 8,
      ingredients: [
        { text: "3 lb pork shoulder", ingredient: "pork shoulder", quantity: 3 },
        { text: "1 tbsp yellow mustard", ingredient: "mustard", quantity: 1 },
        { text: "1 tbsp paprika", ingredient: "paprika", quantity: 1 },
        { text: "1 tbsp brown sugar", ingredient: "brown sugar", quantity: 1 },
        { text: "1 tsp salt", ingredient: "salt", quantity: 1 },
        { text: "1 tsp black pepper", ingredient: "black pepper", quantity: 1 },
        { text: "1 onion, sliced", ingredient: "onion", quantity: 1 },
        { text: "1 1/2 cups barbecue sauce", ingredient: "barbecue sauce", quantity: 1.5 },
        { text: "8 hamburger buns", ingredient: "hamburger buns", quantity: 8 },
        { text: "2 cups coleslaw for topping", ingredient: "coleslaw", quantity: 2 },
      ],
      steps: [
        "Rub the pork shoulder with mustard, then coat with paprika, brown sugar, salt, and pepper - the mustard is what helps the rub cling and builds a flavorful crust as it cooks.",
        "Place the pork shoulder and onion in a slow cooker.",
        "Cook on low for 8 hours until the pork shreds easily with a fork.",
        "Let the pork rest for 15 minutes, then shred it, stirring in a few spoonfuls of the cooking liquid to keep it moist, before tossing with the barbecue sauce.",
        "Pile onto buns and top with coleslaw.",
      ],
      tags: ["dinner"],
    },
    bg: {
      title: "Сандвичи с накъсано свинско месо",
      description:
        "Бавно готвена свинска плешка, натрита с синап и подправки преди готвене, после оставена да почине и накъсана с малко от собствения си сок, разбъркан обратно, преди да се смеси с барбекю сос - синапената основа е това, с което истинското накъсано свинско започва, а овлажняването на накъсаното месо със собствения му сок е това, което го пази от изсъхване под соса.",
      steps: [
        "Натрийте свинската плешка със синап, после покрийте с червен пипер, кафява захар, сол и черен пипер - синапът е това, което помага на подправките да залепнат и изгражда ароматна коричка, докато се готви.",
        "Поставете свинската плешка и лука в бавна готварска печка.",
        "Гответе на слаб режим 8 часа, докато месото се накъсва лесно с вилица.",
        "Оставете месото да почине 15 минути, после го накъсайте, разбърквайки няколко лъжици от готварския сок, за да остане влажно, преди да го смесите с барбекю соса.",
        "Натрупайте върху хлебчета и добавете зелева салата отгоре.",
      ],
      ingredients: [
        "1.4 кг свинска плешка",
        "1 с.л. жълт синап",
        "1 с.л. червен пипер",
        "1 с.л. кафява захар",
        "1 ч.л. сол",
        "1 ч.л. черен пипер",
        "1 лук, нарязан на резени",
        "1 1/2 чаши барбекю сос",
        "8 хлебчета за бургер",
        "2 чаши зелева салата за гарниране",
      ],
    },
  },
  {
    en: {
      slug: "tuna-noodle-casserole",
      title: "Tuna Noodle Casserole",
      description:
        "A creamy baked casserole of egg noodles, tuna, and peas in a from-scratch cheese sauce, topped with buttery breadcrumbs - a real roux-based cheese sauce instead of canned soup, well-drained tuna, and noodles cooked just shy of al dente are what keep real tuna casserole creamy instead of watery or mushy.",
      imageEmoji: "🍝",
      cookTimeMinutes: 40,
      servings: 6,
      ingredients: [
        { text: "12 oz egg noodles, cooked just shy of al dente", ingredient: "egg noodles", quantity: 12 },
        { text: "2 cans tuna, drained and pressed dry", ingredient: "tuna", quantity: 2 },
        { text: "1 cup frozen peas", ingredient: "peas", quantity: 1 },
        { text: "3 tbsp butter, divided", ingredient: "butter", quantity: 3 },
        { text: "3 tbsp flour", ingredient: "flour", quantity: 3 },
        { text: "2 cups milk", ingredient: "milk", quantity: 2 },
        { text: "1 1/2 cups shredded cheddar cheese", ingredient: "cheddar cheese", quantity: 1.5 },
        { text: "1 cup breadcrumbs", ingredient: "breadcrumbs", quantity: 1 },
        { text: "Salt and pepper to taste", ingredient: "salt and pepper", quantity: null },
      ],
      steps: [
        "Preheat oven to 375°F.",
        "Cook the noodles until just shy of al dente, since they'll continue cooking in the oven - overcooking here is what turns the casserole mushy.",
        "Melt 2 tablespoons of the butter in a saucepan, whisk in the flour, and cook for 1 minute, then gradually whisk in the milk until thickened.",
        "Remove from heat and stir in the cheddar until melted, then season with salt and pepper - this from-scratch cheese sauce is what real tuna casserole is built on instead of canned soup.",
        "Mix the noodles, well-drained tuna, peas, and cheese sauce together.",
        "Melt the remaining butter and toss with the breadcrumbs, then spread the casserole into a baking dish and top with the buttered breadcrumbs.",
        "Bake for 25 minutes until golden and bubbly.",
      ],
      tags: ["dinner", "quick"],
    },
    bg: {
      title: "Гювеч с юфка и тон риба",
      description:
        "Кремообразен печен гювеч от юфка, тон риба и грах в домашно приготвен сос от сирене, покрит с маслена галета - истински сос от сирене на основата на ру, вместо консервирана супа, добре отцедена тон риба и юфка, сготвена точно преди ал денте, е това, което пази истинския гювеч кремообразен, вместо воднист или кашав.",
      steps: [
        "Загрейте фурната на 190°C.",
        "Сварете юфката точно преди ал денте, тъй като ще продължи да се готви във фурната - преваряването тук е това, което прави гювеча кашав.",
        "Разтопете 2 супени лъжици от маслото в тенджерка, вмесете брашното и гответе 1 минута, после постепенно вмесете млякото до сгъстяване.",
        "Свалете от котлона и разбъркайте чедъра до разтапяне, после подправете със сол и черен пипер - този домашен сос от сирене е основата на истинския гювеч, вместо консервирана супа.",
        "Смесете юфката, добре отцедената тон риба, граха и соса от сирене заедно.",
        "Разтопете останалото масло и разбъркайте с галетата, после разпределете гювеча в тава и покрийте с маслената галета.",
        "Печете 25 минути до златисто и къкрене.",
      ],
      ingredients: [
        "340 г юфка, сготвена точно преди ал денте",
        "2 консерви тон риба, отцедена и притисната суха",
        "1 чаша замразен грах",
        "3 с.л. масло, разделено",
        "3 с.л. брашно",
        "2 чаши мляко",
        "1 1/2 чаши настърган чедър",
        "1 чаша галета",
        "Сол и черен пипер на вкус",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
