import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "classic-meatloaf",
      title: "Classic Meatloaf",
      description:
        "A homestyle ground beef loaf bound with a milk-soaked breadcrumb panade for a tender crumb, glazed with a tangy-sweet ketchup topping - the panade is what keeps meatloaf moist instead of dense, and it's the step most rushed versions skip.",
      imageEmoji: "🍖",
      cookTimeMinutes: 75,
      servings: 6,
      ingredients: [
        { text: "2 lb ground beef", ingredient: "ground beef", quantity: 2 },
        { text: "1 cup breadcrumbs", ingredient: "breadcrumbs", quantity: 1 },
        { text: "1/2 cup milk", ingredient: "milk", quantity: 0.5 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "2 eggs", ingredient: "eggs", quantity: 2 },
        { text: "1/2 cup ketchup", ingredient: "ketchup", quantity: 0.5 },
        { text: "2 tbsp brown sugar", ingredient: "brown sugar", quantity: 2 },
        { text: "1 tbsp vinegar", ingredient: "vinegar", quantity: 1 },
        { text: "1 tsp mustard", ingredient: "mustard", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Soak the breadcrumbs in the milk for 5 minutes until softened - this panade is what keeps the meatloaf moist instead of dense.",
        "Combine the soaked breadcrumbs, ground beef, onion, and eggs in a large bowl.",
        "Season with salt and pepper, then mix gently with your hands until just combined - overmixing makes the loaf tough.",
        "Shape into a loaf and place in a baking dish.",
        "Whisk together the ketchup, brown sugar, vinegar, and mustard, and spread half over the top.",
        "Bake at 350°F for 45 minutes, then spread the remaining glaze and bake for 15 more minutes, until cooked through.",
        "Let rest for 10 minutes before slicing so the juices redistribute.",
      ],
      tags: ["dinner"],
    },
    bg: {
      title: "Класическа печена кайма",
      description:
        "Домашно приготвено руло от телешка кайма, свързано с панада от галета, накисната в мляко, за нежна текстура, глазирано с кисело-сладък кетчуп - панадата е това, което пази кайменото руло влажно, вместо плътно, и е стъпката, която повечето набързо приготвени версии пропускат.",
      steps: [
        "Накиснете галетата в млякото за 5 минути, докато омекне - тази панада е това, което пази кайменото руло влажно, вместо плътно.",
        "Смесете накиснатата галета, каймата, лука и яйцата в голяма купа.",
        "Подправете със сол и черен пипер, после разбъркайте леко на ръка до съединяване - прекомерното разбъркване прави рулото жилаво.",
        "Оформете руло и поставете в тава за печене.",
        "Разбъркайте кетчупа, кафявата захар, оцета и синапа, и намажете половината отгоре.",
        "Печете на 180°C 45 минути, после намажете останалата глазура и печете още 15 минути, докато се сготви напълно.",
        "Оставете да почине 10 минути преди да нарежете, за да се разпределят соковете.",
      ],
      ingredients: [
        "900 г кайма от телешко месо",
        "1 чаша галета",
        "1/2 чаша мляко",
        "1 лук, нарязан на кубчета",
        "2 яйца",
        "1/2 чаша кетчуп",
        "2 с.л. кафява захар",
        "1 с.л. оцет",
        "1 ч.л. синап",
        "Сол на вкус",
        "Черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "shepherds-pie",
      title: "Shepherd's Pie",
      description:
        "Savory ground lamb with vegetables in a rich gravy deepened with Worcestershire sauce and tomato paste, topped with mashed potatoes forked into ridges for extra browning - ground lamb, not beef, is what makes it a true shepherd's pie rather than a cottage pie.",
      imageEmoji: "🥧",
      cookTimeMinutes: 60,
      servings: 6,
      ingredients: [
        { text: "1 lb ground lamb", ingredient: "ground lamb", quantity: 1 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "2 carrots, diced", ingredient: "carrot", quantity: 2 },
        { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
        { text: "2 tbsp flour", ingredient: "flour", quantity: 2 },
        { text: "1 tbsp tomato paste", ingredient: "tomato paste", quantity: 1 },
        { text: "1 cup beef broth", ingredient: "beef broth", quantity: 1 },
        { text: "1 tbsp Worcestershire sauce", ingredient: "worcestershire sauce", quantity: 1 },
        { text: "1 tsp fresh thyme", ingredient: "thyme", quantity: 1 },
        { text: "1 cup frozen peas", ingredient: "peas", quantity: 1 },
        { text: "4 cups mashed potatoes", ingredient: "mashed potatoes", quantity: 4 },
      ],
      steps: [
        "Brown the ground lamb with onion, carrots, and garlic in a large skillet.",
        "Stir in the tomato paste and flour and cook for 1 minute, then pour in the beef broth and Worcestershire sauce and simmer until thickened.",
        "Stir in the thyme and peas, then transfer the mixture to a baking dish.",
        "Spread the mashed potatoes evenly over the top and drag a fork across the surface to create ridges - the ridges are what crisp and brown instead of staying flat and pale.",
        "Bake at 400°F for 25 minutes until golden on top.",
      ],
      tags: ["dinner"],
    },
    bg: {
      title: "Овчарски пай",
      description:
        "Пикантна агнешка кайма със зеленчуци в наситен сос, задълбочен с уорчестърски сос и доматено пюре, покрита с картофено пюре, начертано с вилица на ивици за допълнително запичане - агнешката кайма, а не телешката, е това, което прави пая истински овчарски, а не говежди.",
      steps: [
        "Запържете агнешката кайма с лука, морковите и чесъна в голям тиган.",
        "Добавете доматеното пюре и брашното и гответе 1 минута, после долейте телешкия бульон и уорчестърския сос и варете до сгъстяване.",
        "Разбъркайте мащерката и граха, после прехвърлете сместа в тава за печене.",
        "Разпределете картофеното пюре равномерно отгоре и прекарайте вилица по повърхността, за да оформите ивици - ивиците са това, което хрупка и покафенява, вместо да остане плоско и бледо.",
        "Печете на 200°C 25 минути до златисто отгоре.",
      ],
      ingredients: [
        "450 г агнешка кайма",
        "1 лук, нарязан на кубчета",
        "2 моркова, нарязани на кубчета",
        "2 скилидки чесън, ситно нарязани",
        "2 с.л. брашно",
        "1 с.л. доматено пюре",
        "1 чаша телешки бульон",
        "1 с.л. уорчестърски сос",
        "1 ч.л. пресна мащерка",
        "1 чаша замразен грах",
        "4 чаши картофено пюре",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
