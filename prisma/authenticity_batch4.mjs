import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "mekitsi",
      title: "Mekitsi",
      description:
        "Fried Bulgarian dough puffs of yogurt-leavened dough, crisp outside and soft inside - a beloved breakfast treat.",
      imageEmoji: "🍩",
      cookTimeMinutes: 90,
      servings: 6,
      ingredients: [
        { text: "3 cups flour", ingredient: "flour", quantity: 3 },
        { text: "1 cup plain yogurt", ingredient: "yogurt", quantity: 1 },
        { text: "1 egg", ingredient: "eggs", quantity: 1 },
        { text: "1 tsp baking soda", ingredient: "baking soda", quantity: 1 },
        { text: "1/2 tsp salt", ingredient: "salt", quantity: 0.5 },
        { text: "2 cups sunflower oil for frying", ingredient: "sunflower oil", quantity: 2 },
      ],
      steps: [
        "Mix the flour, yogurt, egg, baking soda, and salt into a soft, slightly sticky dough.",
        "Cover and let rest in a warm place for about 1 hour so the baking soda can fully activate.",
        "With oiled hands, tear off pieces of dough, flatten into rounds, and fry in hot oil, spooning hot oil over the top as they cook to help them puff, about 2-3 minutes per side until golden.",
        "Serve warm dusted with powdered sugar, or with jam, honey, or sirene cheese.",
      ],
      tags: ["breakfast", "vegetarian"],
    },
    bg: {
      title: "Мекици",
      description:
        "Пържени български мекици от тесто, втасало с кисело мляко - хрупкави отвън и меки отвътре - любимо ястие за закуска.",
      steps: [
        "Смесете брашното, киселото мляко, яйцето, содата за хляб и солта в меко, леко лепкаво тесто.",
        "Покрийте и оставете да почине на топло място около 1 час, за да се активира напълно содата.",
        "С намазнени ръце откъсвайте парчета тесто, разплесквайте на кръгчета и пържете в горещо олио, като поливате отгоре с горещото олио, докато се пържат, за да набъбнат по-добре, около 2-3 минути от всяка страна до златисто.",
        "Сервирайте топли, поръсени с пудра захар, или с конфитюр, мед или сирене.",
      ],
      ingredients: [
        "3 чаши брашно",
        "1 чаша натурално кисело мляко",
        "1 яйце",
        "1 ч.л. сода за хляб",
        "1/2 ч.л. сол",
        "2 чаши слънчогледово олио за пържене",
      ],
    },
  },
  {
    en: {
      slug: "lyutenitsa",
      title: "Lyutenitsa",
      description:
        "A rich, slow-cooked relish of roasted peppers, eggplant, and tomatoes - a Bulgarian pantry staple traditionally made in big batches at the end of summer.",
      imageEmoji: "🍅",
      cookTimeMinutes: 90,
      servings: 8,
      ingredients: [
        { text: "6 red bell peppers, roasted, peeled, and seeded", ingredient: "red pepper", quantity: 6 },
        { text: "1 large eggplant, roasted and peeled", ingredient: "eggplant", quantity: 1 },
        { text: "4 tomatoes, diced", ingredient: "tomato", quantity: 4 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
        { text: "3 tbsp sunflower oil", ingredient: "sunflower oil", quantity: 3 },
        { text: "1 tsp sugar", ingredient: "sugar", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Roast the peppers and eggplant over an open flame or under a broiler, turning occasionally, until the skins are completely charred; transfer to a covered bowl to steam for 10-15 minutes, then peel and seed.",
        "Blend the roasted peppers, eggplant, tomatoes, and onion until mostly smooth.",
        "Simmer the mixture in a pot with sunflower oil and sugar for 45-60 minutes, stirring often, until thickened and a wooden spoon leaves a clear trail across the bottom of the pot.",
        "Stir in the garlic during the last 5 minutes of cooking, season with salt, and cool before serving as a spread.",
      ],
      tags: ["snack", "vegan", "vegetarian"],
    },
    bg: {
      title: "Лютеница",
      description:
        "Наситена, бавно готвена лютеница от печени чушки, патладжан и домати - основен продукт в българската килера, традиционно приготвяна на едро в края на лятото.",
      steps: [
        "Изпечете чушките и патладжана на открит огън или под грил, като обръщате от време на време, докато кожата напълно почернее; сложете в купа, покрийте и оставете да се запарят 10-15 минути, после обелете и почистете от семки.",
        "Пасирайте печените чушки, патладжана, доматите и лука до почти гладка смес.",
        "Варете сместа в тенджера със слънчогледово олио и захар 45-60 минути, като разбърквате често, докато се сгъсти и дървена лъжица оставя ясна следа по дъното на тенджерата.",
        "Добавете чесъна през последните 5 минути от готвенето, подправете със сол и оставете да изстине преди да сервирате като намазка.",
      ],
      ingredients: [
        "6 червени чушки, изпечени, обелени и почистени от семки",
        "1 голям патладжан, изпечен и обелен",
        "4 домата, нарязани на кубчета",
        "1 лук, нарязан на кубчета",
        "2 скилидки чесън, ситно нарязани",
        "3 с.л. слънчогледово олио",
        "1 ч.л. захар",
        "Сол на вкус",
      ],
    },
  },
  {
    en: {
      slug: "shkembe-chorba",
      title: "Shkembe Chorba",
      description:
        "A rich, paprika-butter tripe soup, one of Bulgaria's most iconic dishes, traditionally served with garlic-vinegar and chili flakes on the side - and a beloved hangover cure.",
      imageEmoji: "🍲",
      cookTimeMinutes: 180,
      servings: 6,
      ingredients: [
        { text: "2 lb beef tripe, cleaned", ingredient: "beef tripe", quantity: 2 },
        { text: "1 onion, halved", ingredient: "onion", quantity: 1 },
        { text: "2 carrots, roughly chopped", ingredient: "carrot", quantity: 2 },
        { text: "2 bay leaves", ingredient: "bay leaf", quantity: 2 },
        { text: "1 tsp whole black peppercorns", ingredient: "peppercorns", quantity: 1 },
        { text: "8 cups beef broth", ingredient: "beef broth", quantity: 8 },
        { text: "1/4 cup butter", ingredient: "butter", quantity: 0.25 },
        { text: "4 cloves garlic, minced (for the roux)", ingredient: "garlic", quantity: 4 },
        { text: "1/4 cup flour", ingredient: "flour", quantity: 0.25 },
        { text: "1 tbsp sweet paprika", ingredient: "paprika", quantity: 1 },
        { text: "1/2 cup milk", ingredient: "milk", quantity: 0.5 },
        { text: "1 tsp salt", ingredient: "salt", quantity: 1 },
        { text: "1/2 tsp black pepper", ingredient: "pepper", quantity: 0.5 },
        { text: "2 tbsp minced garlic, for serving", ingredient: "garlic", quantity: 2 },
        { text: "1/4 cup white wine vinegar, for serving", ingredient: "white wine vinegar", quantity: 0.25 },
        { text: "1 tbsp red pepper flakes, for serving", ingredient: "red pepper flakes", quantity: 1 },
      ],
      steps: [
        "Rinse the tripe and boil for 10 minutes in fresh water, then drain.",
        "Return the tripe to the pot with the beef broth, onion, carrots, bay leaves, and peppercorns; simmer for 2 to 2.5 hours until very tender, then remove the tripe, cut into thin strips, and strain the broth.",
        "Melt the butter in a clean pot, sauté the minced garlic briefly, whisk in the flour, then stir in the paprika off the heat so it doesn't burn; gradually whisk in the hot strained broth until smooth.",
        "Return the tripe to the pot, stir in the milk, salt, and pepper, and simmer for 15-17 minutes; serve hot with small bowls of garlic mixed with vinegar and red pepper flakes on the side for guests to season to taste.",
      ],
      tags: ["dinner"],
    },
    bg: {
      title: "Шкембе чорба",
      description:
        "Наситена супа от шкембе с масло и червен пипер - едно от най-емблематичните български ястия, традиционно сервирана с чесън в оцет и люти чушки на люспи отстрани - и обичан лек след пиене.",
      steps: [
        "Изплакнете шкембето и варете 10 минути в прясна вода, после отцедете.",
        "Върнете шкембето в тенджерата с телешкия бульон, лука, морковите, дафиновите листа и черния пипер на зърна; варете 2 до 2.5 часа, докато омекне напълно, после извадете шкембето, нарежете на тънки ивици и прецедете бульона.",
        "Разтопете маслото в чиста тенджера, задушете за кратко ситно нарязания чесън, вмъкнете брашното, после разбъркайте червения пипер извън котлона, за да не изгори; постепенно вмъкнете горещия прецеден бульон, разбърквайки, до гладкост.",
        "Върнете шкембето в тенджерата, разбъркайте млякото, солта и черния пипер и варете 15-17 минути; сервирайте горещо с малки купички чесън, смесен с оцет, и люти чушки на люспи отстрани, за да си доподправят гостите.",
      ],
      ingredients: [
        "900 г телешко шкембе, почистено",
        "1 лук, разрязан наполовина",
        "2 моркова, нарязани на едро",
        "2 дафинови листа",
        "1 ч.л. черен пипер на зърна",
        "8 чаши телешки бульон",
        "1/4 чаша масло",
        "4 скилидки чесън, ситно нарязани (за запръжката)",
        "1/4 чаша брашно",
        "1 с.л. сладък червен пипер",
        "1/2 чаша мляко",
        "1 ч.л. сол",
        "1/2 ч.л. черен пипер",
        "2 с.л. ситно нарязан чесън, за сервиране",
        "1/4 чаша бял винен оцет, за сервиране",
        "1 с.л. люти чушки на люспи, за сервиране",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
