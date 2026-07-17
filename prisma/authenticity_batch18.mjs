import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "pozole-rojo",
      title: "Pozole Rojo",
      description:
        "A rich, red Mexican hominy and pork soup built on a fried guajillo-ancho chile base - frying the chile purée before adding it to the broth removes the raw edge and deepens the color.",
      imageEmoji: "🌶️",
      cookTimeMinutes: 160,
      servings: 8,
      ingredients: [
        { text: "2 lb pork shoulder, cubed", ingredient: "pork shoulder", quantity: 2 },
        { text: "2 cans hominy, drained", ingredient: "hominy", quantity: 2 },
        { text: "4 dried guajillo chilies", ingredient: "dried chilies", quantity: 4 },
        { text: "2 dried ancho chilies", ingredient: "ancho chile", quantity: 2 },
        { text: "1 onion, chopped", ingredient: "onion", quantity: 1 },
        { text: "4 cloves garlic", ingredient: "garlic", quantity: 4 },
        { text: "8 cups chicken broth", ingredient: "chicken broth", quantity: 8 },
        { text: "2 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 2 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Shredded cabbage, sliced radish, lime wedges, and dried oregano, for serving", ingredient: "cabbage", quantity: null },
      ],
      steps: [
        "Simmer the pork in the chicken broth with half the onion and garlic until tender, about 1.5 hours.",
        "Stem and seed the guajillo and ancho chiles, soak in hot water until softened, then blend with the remaining onion, garlic, and a cup of the soaking liquid into a smooth purée.",
        "Heat the oil in a pot, pour in the chile purée, and simmer, stirring, for about 5 minutes until it darkens and thickens slightly - this \"seasoning\" step removes the raw chile taste.",
        "Stir the seasoned chile base into the broth along with the hominy, season with salt, and simmer for another 30 minutes; serve with shredded cabbage, radish, lime, and oregano.",
      ],
      tags: ["dinner", "mexican"],
    },
    bg: {
      title: "Посоле Рохо",
      description:
        "Наситена мексиканска супа с царевица от вар и свинско месо, изградена върху запържена основа от гуахийо и анчо чушки - запържването на пастата от чушки премахва суровия им вкус и задълбочава цвета.",
      steps: [
        "Варете свинското месо в пилешкия бульон с половината лук и чесън до омекване, около 1.5 часа.",
        "Отстранете дръжките и семките на гуахийо и анчо чушките, накиснете ги в гореща вода до омекване, после ги пасирайте с останалия лук, чесъна и чаша от накисващата течност до гладко пюре.",
        "Загрейте олиото в тенджера, изсипете пюрето от чушки и оставете да къкри, разбърквайки, около 5 минути, докато потъмнее и леко се сгъсти - тази стъпка \"подправяне\" премахва суровия вкус на чушките.",
        "Разбъркайте подправената основа от чушки в бульона заедно с царевицата от вар, подправете със сол и варете още 30 минути; сервирайте с настъргано зеле, репички, лайм и риган.",
      ],
      ingredients: [
        "900 г свинско месо (плешка), нарязано на кубчета",
        "2 консерви царевица от вар, отцедена",
        "4 сушени люти чушки гуахийо",
        "2 сушени люти чушки анчо",
        "1 лук, нарязан",
        "4 скилидки чесън",
        "8 чаши пилешки бульон",
        "2 с.л. олио",
        "Сол на вкус",
        "Настъргано зеле, нарязани репички, резенчета лайм и сушен риган, за сервиране",
      ],
    },
  },
  {
    en: {
      slug: "beef-enchiladas",
      title: "Beef Enchiladas",
      description:
        "Corn tortillas lightly fried then dipped in a homemade guajillo-ancho chile sauce before rolling around seasoned beef - the fry-and-dip step is what keeps enchiladas from turning soggy and gives them their deep red color.",
      imageEmoji: "🌯",
      cookTimeMinutes: 55,
      servings: 6,
      ingredients: [
        { text: "1 lb ground beef", ingredient: "ground beef", quantity: 1 },
        { text: "1 onion, diced (plus extra sliced for garnish)", ingredient: "onion", quantity: 1 },
        { text: "2 tsp cumin", ingredient: "cumin", quantity: 2 },
        { text: "4 dried guajillo chilies, stemmed and seeded", ingredient: "guajillo chiles", quantity: 4 },
        { text: "2 dried ancho chilies, stemmed and seeded", ingredient: "ancho chile", quantity: 2 },
        { text: "2 cloves garlic", ingredient: "garlic", quantity: 2 },
        { text: "2 cups beef or chicken broth", ingredient: "beef broth", quantity: 2 },
        { text: "1/4 cup vegetable oil (for frying tortillas)", ingredient: "vegetable oil", quantity: 0.25 },
        { text: "12 corn tortillas", ingredient: "corn tortillas", quantity: 12 },
        { text: "2 cups shredded cheddar cheese (or queso Oaxaca)", ingredient: "cheddar cheese", quantity: 2 },
        { text: "Crumbled cotija and Mexican crema, for serving", ingredient: "cotija cheese", quantity: null },
      ],
      steps: [
        "Brown the ground beef with the diced onion and cumin until cooked through.",
        "Simmer the guajillo and ancho chiles with the garlic in the broth for 15-20 minutes until softened, then blend until smooth to make the enchilada sauce.",
        "Heat the oil in a skillet, then quickly fry each tortilla for a few seconds per side until pliable (not crisp), and dip it in the warm sauce - this keeps the tortillas from getting soggy once baked.",
        "Fill each sauced tortilla with the beef mixture and roll tightly, placing seam-side down in a baking dish.",
        "Pour the remaining sauce over the top and sprinkle with cheese, then bake at 375°F for 20 minutes until bubbly; garnish with sliced onion, cotija, and crema.",
      ],
      tags: ["dinner", "mexican"],
    },
    bg: {
      title: "Телешки енчилади",
      description:
        "Царевични тортили, леко запържени и потопени в домашен сос енчилада от гуахийо и анчо чушки преди завиване около подправена телешка кайма - стъпката запържване-и-потапяне пази енчиладите от разкисване и им дава дълбокия червен цвят.",
      steps: [
        "Запържете каймата с нарязания лук и кимиона до напълно готово.",
        "Варете гуахийо и анчо чушките с чесъна в бульона 15-20 минути до омекване, после пасирайте до гладкост, за да направите соса енчилада.",
        "Загрейте олиото в тиган, после запържете за кратко всяка тортила по няколко секунди от всяка страна, докато стане мека (не хрупкава), и я потопете в топлия сос - това пази тортилите от разкисване след печене.",
        "Напълнете всяка потопена в сос тортила с месната смес и завийте стегнато, поставяйки с шева надолу в тава.",
        "Залейте отгоре с останалия сос и поръсете със сирене, после печете на 190°C 20 минути до къкрене; гарнирайте с нарязан лук, котиха и крема.",
      ],
      ingredients: [
        "450 г кайма от телешко месо",
        "1 лук, нарязан на кубчета (плюс допълнително нарязан на резени за гарниране)",
        "2 ч.л. кимион",
        "4 сушени люти чушки гуахийо, без дръжки и семки",
        "2 сушени люти чушки анчо, без дръжки и семки",
        "2 скилидки чесън",
        "2 чаши телешки или пилешки бульон",
        "1/4 чаша олио (за пържене на тортилите)",
        "12 царевични тортили",
        "2 чаши настъргано чедър сирене (или сирене оахака)",
        "Натрошено сирене котиха и мексиканска крема, за сервиране",
      ],
    },
  },
  {
    en: {
      slug: "mexican-street-corn",
      title: "Mexican Street Corn",
      description:
        "Grilled corn on the cob slathered in a mayo-crema sauce brightened with lime, then rolled in cotija and chili powder - classic Mexican street food.",
      imageEmoji: "🌽",
      cookTimeMinutes: 20,
      servings: 4,
      ingredients: [
        { text: "4 ears corn", ingredient: "corn", quantity: 4 },
        { text: "1/4 cup mayonnaise", ingredient: "mayonnaise", quantity: 0.25 },
        { text: "1/4 cup Mexican crema", ingredient: "crema", quantity: 0.25 },
        { text: "1 tbsp lime juice", ingredient: "lime juice", quantity: 1 },
        { text: "1/2 cup crumbled cotija cheese", ingredient: "cotija cheese", quantity: 0.5 },
        { text: "1 tsp chili powder", ingredient: "chili powder", quantity: 1 },
        { text: "1/4 cup chopped cilantro", ingredient: "cilantro", quantity: 0.25 },
        { text: "1 lime, cut into wedges", ingredient: "lime", quantity: 1 },
      ],
      steps: [
        "Grill the corn, turning occasionally, until charred in spots, about 8-10 minutes.",
        "Whisk together the mayonnaise, crema, and lime juice.",
        "Brush each hot ear generously with the crema mixture while still warm, so it melts into the kernels.",
        "Roll in crumbled cotija cheese, sprinkle with chili powder and cilantro, and serve with lime wedges for squeezing.",
      ],
      tags: ["snack", "mexican", "vegetarian", "quick"],
    },
    bg: {
      title: "Мексиканска улична царевица",
      description:
        "Царевица на скара, намазана със сос от майонеза и крема, освежен с лайм, после овалена в котиха и лютив пипер на прах - класическа мексиканска улична храна.",
      steps: [
        "Изпечете царевицата на скара, обръщайки от време на време, докато се овъгли на места, около 8-10 минути.",
        "Разбийте майонезата, кремата и лаймовия сок заедно.",
        "Намажете обилно всеки горещ кочан със сместа от крема, докато е още топъл, за да се разтопи в зърната.",
        "Овалайте в натрошено сирене котиха, поръсете с лютив пипер на прах и кориандър, и сервирайте с резенчета лайм за изстискване.",
      ],
      ingredients: [
        "4 кочана царевица",
        "1/4 чаша майонеза",
        "1/4 чаша мексиканска крема",
        "1 с.л. лаймов сок",
        "1/2 чаша натрошено сирене котиха",
        "1 ч.л. лютив пипер на прах",
        "1/4 чаша нарязан кориандър",
        "1 лайм, нарязан на резенчета",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
