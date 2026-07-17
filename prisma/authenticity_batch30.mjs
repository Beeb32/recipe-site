import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "teriyaki-salmon",
      title: "Teriyaki Salmon",
      description:
        "Pan-seared salmon glazed with a real teriyaki sauce of soy sauce, sake, mirin, and sugar reduced to a thin, glossy glaze - not the cornstarch-thickened, overly sweet version common outside Japan.",
      imageEmoji: "🐟",
      cookTimeMinutes: 20,
      servings: 4,
      ingredients: [
        { text: "4 salmon fillets", ingredient: "salmon", quantity: 4 },
        { text: "1/3 cup soy sauce", ingredient: "soy sauce", quantity: 0.33 },
        { text: "1/3 cup sake", ingredient: "sake", quantity: 0.33 },
        { text: "1/3 cup mirin", ingredient: "mirin", quantity: 0.33 },
        { text: "3 tbsp sugar", ingredient: "sugar", quantity: 3 },
        { text: "1 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 1 },
      ],
      steps: [
        "Combine the soy sauce, sake, mirin, and sugar in a saucepan and bring to a boil, whisking until the sugar dissolves.",
        "Lower the heat and simmer for 10-15 minutes until the sauce thickens slightly - it should stay thin and glossy, not syrupy; it will thicken further as it cools.",
        "Sear the salmon in oil, skin-side down, for 4 minutes.",
        "Flip and pour in about half the teriyaki sauce, simmering for 2-3 minutes until glossy and the salmon is cooked through.",
        "Spoon the remaining sauce over the top before serving.",
      ],
      tags: ["dinner", "asian", "quick"],
    },
    bg: {
      title: "Сьомга Терияки",
      description:
        "Изпечена в тиган сьомга, глазирана с истински сос терияки от соев сос, саке, мирин и захар, редуциран до тънка, лъскава глазура - не разреденият с царевично нишесте, прекалено сладък вариант, обичаен извън Япония.",
      steps: [
        "Смесете соевия сос, сакето, мирина и захарта в тенджерка и доведете до кипене, разбърквайки, докато захарта се разтвори.",
        "Намалете котлона и оставете да къкри 10-15 минути, докато сосът леко се сгъсти - трябва да остане тънък и лъскав, не сиропест; ще се сгъсти още докато изстива.",
        "Запържете сьомгата в олио, с кожата надолу, за 4 минути.",
        "Обърнете и добавете около половината от соса терияки, варете 2-3 минути до блясък и готовност на сьомгата.",
        "Полейте отгоре с останалия сос преди сервиране.",
      ],
      ingredients: [
        "4 филета сьомга",
        "1/3 чаша соев сос",
        "1/3 чаша саке",
        "1/3 чаша мирин",
        "3 с.л. захар",
        "1 с.л. олио",
      ],
    },
  },
  {
    en: {
      slug: "japanese-curry",
      title: "Japanese Curry",
      description:
        "Chicken and vegetables simmered with deeply caramelized onions, finished with grated apple and honey - the 30-40 minute onion caramelization is what builds the curry's savory-sweet depth, not just the roux.",
      imageEmoji: "🍛",
      cookTimeMinutes: 75,
      servings: 4,
      ingredients: [
        { text: "1 lb chicken thighs, cubed", ingredient: "chicken thighs", quantity: 1 },
        { text: "2 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 2 },
        { text: "2 onions, thinly sliced", ingredient: "onion", quantity: 2 },
        { text: "2 potatoes, cubed", ingredient: "potato", quantity: 2 },
        { text: "2 carrots, sliced", ingredient: "carrot", quantity: 2 },
        { text: "1 box Japanese curry roux", ingredient: "curry roux", quantity: 1 },
        { text: "1/2 apple, grated", ingredient: "apple", quantity: 0.5 },
        { text: "1 tbsp honey", ingredient: "honey", quantity: 1 },
        { text: "4 cups water", ingredient: "water", quantity: 4 },
        { text: "4 cups cooked rice", ingredient: "rice", quantity: 4 },
      ],
      steps: [
        "Heat the oil in a large heavy-bottomed pot and cook the sliced onions with a pinch of salt over medium heat, stirring every few minutes, for 30-40 minutes until deeply caramelized to a dark amber and jammy - this long caramelization is what gives Japanese curry its depth, not just the roux.",
        "Add the chicken and brown lightly, then add the potatoes, carrots, and water, and simmer for 20 minutes until the vegetables are tender.",
        "Break the curry roux into the pot and stir until dissolved and thickened, about 5 minutes.",
        "Stir in the grated apple and honey off the heat for a rounded, balanced sweetness.",
        "Serve over cooked rice.",
      ],
      tags: ["dinner", "asian"],
    },
    bg: {
      title: "Японско къри",
      description:
        "Пиле и зеленчуци, задушени с дълбоко карамелизиран лук, довършени с настъргана ябълка и мед - карамелизирането на лука за 30-40 минути е това, което изгражда наситения сладко-солен вкус на кърито, не само руу-то.",
      steps: [
        "Загрейте олиото в голяма тежка тенджера и гответе нарязания на тънко лук с щипка сол на среден огън, разбърквайки на всеки няколко минути, 30-40 минути, докато се карамелизира дълбоко до тъмен кехлибарен цвят и сладникава консистенция - това дълго карамелизиране е това, което придава на японското къри дълбочината му, не само руу-то.",
        "Добавете пилето и леко запържете, после добавете картофите, морковите и водата, и варете 20 минути до омекване на зеленчуците.",
        "Натрошете кубчето къри в тенджерата и разбърквайте до разтваряне и сгъстяване, около 5 минути.",
        "Разбъркайте настърганата ябълка и меда извън котлона за заоблена, балансирана сладост.",
        "Сервирайте върху сготвен ориз.",
      ],
      ingredients: [
        "450 г пилешки бутчета, нарязани на кубчета",
        "2 с.л. олио",
        "2 лука, нарязани на тънко",
        "2 картофа, нарязани на кубчета",
        "2 моркова, нарязани на резени",
        "1 кутия японско къри руу",
        "1/2 ябълка, настъргана",
        "1 с.л. мед",
        "4 чаши вода",
        "4 чаши сготвен ориз",
      ],
    },
  },
  {
    en: {
      slug: "korean-fried-chicken",
      title: "Korean Fried Chicken",
      description:
        "Chicken wings coated in potato starch and fried twice - the second fry at a higher temperature is what boils off the extra moisture and creates the glass-like crackling crust real Korean fried chicken is known for - tossed in a garlic-ginger gochujang glaze.",
      imageEmoji: "🍗",
      cookTimeMinutes: 60,
      servings: 4,
      ingredients: [
        { text: "2 lb chicken wings", ingredient: "chicken wings", quantity: 2 },
        { text: "Salt and pepper, for seasoning", ingredient: "salt", quantity: null },
        { text: "1 cup potato starch (or cornstarch)", ingredient: "potato starch", quantity: 1 },
        { text: "2 cups vegetable oil for frying", ingredient: "vegetable oil", quantity: 2 },
        { text: "3 tbsp gochujang", ingredient: "gochujang", quantity: 3 },
        { text: "2 tbsp honey", ingredient: "honey", quantity: 2 },
        { text: "1 tbsp brown sugar", ingredient: "brown sugar", quantity: 1 },
        { text: "2 tbsp soy sauce", ingredient: "soy sauce", quantity: 2 },
        { text: "1 tbsp rice vinegar", ingredient: "rice vinegar", quantity: 1 },
        { text: "1 tsp sesame oil", ingredient: "sesame oil", quantity: 1 },
        { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
        { text: "1 tsp grated ginger", ingredient: "ginger", quantity: 1 },
      ],
      steps: [
        "Pat the chicken wings dry, season with salt and pepper, then toss in potato starch to coat, pressing it on firmly; let rest on a wire rack for 10-15 minutes to help the coating set.",
        "Heat the oil to 325°F and fry the wings in batches for about 8 minutes until cooked through but pale; drain.",
        "Increase the oil temperature to 375°F and fry the wings a second time for 2-3 minutes until deeply golden and crackling-crisp - this second fry is what boils off the remaining moisture for real Korean-style crunch.",
        "Whisk together the gochujang, honey, brown sugar, soy sauce, rice vinegar, sesame oil, garlic, and ginger in a saucepan, and simmer for 2-3 minutes until slightly thickened.",
        "Toss the double-fried wings in the sauce while still hot until well coated.",
      ],
      tags: ["dinner", "asian"],
    },
    bg: {
      title: "Корейско пържено пиле",
      description:
        "Пилешки крилца, овалени в картофено нишесте и изпържени двойно - второто пържене на по-висока температура е това, което изпарява остатъчната влага и създава характерната стъклена хрупкава коричка на истинското корейско пържено пиле - разбъркани в глазура гочуджанг с чесън и джинджифил.",
      steps: [
        "Подсушете пилешките крилца, подправете със сол и черен пипер, после ги овалайте в картофено нишесте, притискайки го здраво; оставете да престоят на решетка 10-15 минути, за да се захване коричката.",
        "Загрейте олиото до 163°C и изпържете крилцата на партиди около 8 минути до готовност, но бледи на цвят; отцедете.",
        "Повишете температурата на олиото до 190°C и изпържете крилцата втори път за 2-3 минути до дълбоко златисто и хрупкаво - това второ пържене е това, което изпарява остатъчната влага за истинската корейска хрупкавост.",
        "Разбъркайте гочуджанга, меда, кафявата захар, соевия сос, оризовия оцет, сусамовото масло, чесъна и джинджифила в тенджерка, и варете 2-3 минути до леко сгъстяване.",
        "Разбъркайте двойно пържените крилца в соса, докато са още горещи, до добро покриване.",
      ],
      ingredients: [
        "900 г пилешки крилца",
        "Сол и черен пипер, за подправяне",
        "1 чаша картофено нишесте (или царевично нишесте)",
        "2 чаши олио за пържене",
        "3 с.л. гочуджанг",
        "2 с.л. мед",
        "1 с.л. кафява захар",
        "2 с.л. соев сос",
        "1 с.л. оризов оцет",
        "1 ч.л. сусамово масло",
        "2 скилидки чесън, ситно нарязани",
        "1 ч.л. настърган джинджифил",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
