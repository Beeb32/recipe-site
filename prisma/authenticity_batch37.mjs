import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "bibimbap",
      title: "Bibimbap",
      description:
        "Rice bowl topped with individually seasoned namul vegetables, mushrooms, and beef marinated in a soy-garlic-pear sauce - seasoning each vegetable separately with sesame oil and garlic is the technique real bibimbap namul is built on, not just blanching them plain.",
      imageEmoji: "🍚",
      cookTimeMinutes: 55,
      servings: 4,
      ingredients: [
        { text: "4 cups cooked rice", ingredient: "rice", quantity: 4 },
        { text: "1/2 lb ground beef (or thinly sliced beef)", ingredient: "ground beef", quantity: 0.5 },
        { text: "2 tbsp soy sauce (divided)", ingredient: "soy sauce", quantity: 2 },
        { text: "1 tbsp brown sugar", ingredient: "brown sugar", quantity: 1 },
        { text: "3 cloves garlic, minced (divided)", ingredient: "garlic", quantity: 3 },
        { text: "1 tbsp grated pear (or apple)", ingredient: "pear", quantity: 1 },
        { text: "3 tbsp sesame oil (divided)", ingredient: "sesame oil", quantity: 3 },
        { text: "4 shiitake mushrooms, sliced", ingredient: "shiitake mushrooms", quantity: 4 },
        { text: "2 cups spinach", ingredient: "spinach", quantity: 2 },
        { text: "2 carrots, julienned", ingredient: "carrot", quantity: 2 },
        { text: "1 cup bean sprouts", ingredient: "bean sprouts", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "4 eggs", ingredient: "eggs", quantity: 4 },
        { text: "1 tbsp sesame seeds, for garnish", ingredient: "sesame seeds", quantity: 1 },
        { text: "3 tbsp gochujang (Korean chili paste)", ingredient: "gochujang", quantity: 3 },
      ],
      steps: [
        "Whisk together 1 tbsp of the soy sauce, brown sugar, half the garlic, grated pear, and 1 tbsp of the sesame oil; marinate the beef in the mixture for at least 20 minutes.",
        "Sauté the shiitake mushrooms in a little oil until golden, then season with a splash of soy sauce and sesame oil; set aside.",
        "Blanch the spinach and bean sprouts separately, then squeeze dry and toss each with sesame oil, a pinch of the remaining garlic, and salt. Sauté the carrots separately until just tender-crisp and season with a pinch of salt - seasoning each vegetable on its own is what makes real bibimbap namul taste distinct rather than muddy.",
        "Cook the marinated beef in a hot skillet until browned.",
        "Fry the eggs sunny-side up.",
        "Divide the rice among bowls and arrange the beef, mushrooms, vegetables, and a fried egg on top; sprinkle with sesame seeds.",
        "Serve with gochujang on the side to mix in.",
      ],
      tags: ["dinner", "asian"],
    },
    bg: {
      title: "Бибимбап",
      description:
        "Купа с ориз, покрита с поотделно подправени намул зеленчуци, гъби и телешко месо, маринована в соево-чеснов сос с круша - подправянето на всеки зеленчук поотделно със сусамово олио и чесън е техниката, върху която е изградено истинското бибимбап намул, не просто бланширане на зеленчуците чисти.",
      steps: [
        "Разбъркайте 1 с.л. от соевия сос, кафявата захар, половината чесън, настърганата круша и 1 с.л. от сусамовото олио; маринова месото в сместа поне 20 минути.",
        "Задушете гъбите шийтаке в малко олио до златисто, после подправете с малко соев сос и сусамово олио; отделете настрани.",
        "Бланширайте спанака и кълновете от боб поотделно, после изстискайте и разбъркайте всеки със сусамово олио, щипка от останалия чесън и сол. Задушете морковите поотделно до леко хрупкави и подправете с щипка сол - подправянето на всеки зеленчук поотделно е това, което придава на истинското бибимбап намул отчетлив, а не размит вкус.",
        "Изпечете маринованото месо в горещ тиган до запържване.",
        "Изпържете яйцата на очи.",
        "Разпределете ориза в купи и подредете отгоре месото, гъбите, зеленчуците и пържено яйце; поръсете със сусамово семе.",
        "Сервирайте с гочуджанг отстрани за размесване.",
      ],
      ingredients: [
        "4 чаши сготвен ориз",
        "225 г телешка кайма (или тънко нарязано телешко месо)",
        "2 с.л. соев сос (разделен)",
        "1 с.л. кафява захар",
        "3 скилидки чесън, ситно нарязани (разделени)",
        "1 с.л. настъргана круша (или ябълка)",
        "3 с.л. сусамово олио (разделено)",
        "4 гъби шийтаке, нарязани",
        "2 чаши спанак",
        "2 моркова, нарязани на тънки ивици",
        "1 чаша кълнове от боб",
        "Сол на вкус",
        "4 яйца",
        "1 с.л. сусамово семе, за гарниране",
        "3 с.л. гочуджанг (корейска лютива паста)",
      ],
    },
  },
  {
    en: {
      slug: "california-roll",
      title: "California Roll",
      description:
        "An inside-out roll (uramaki) with seasoned sushi rice on the outside coated in toasted sesame seeds, wrapping nori around crab, avocado, and cucumber - the rice-outside technique is what actually makes a California roll, not just a roll with imitation crab.",
      imageEmoji: "🍣",
      cookTimeMinutes: 45,
      servings: 4,
      ingredients: [
        { text: "2 cups sushi rice, cooked and seasoned", ingredient: "sushi rice", quantity: 2 },
        { text: "4 sheets nori (seaweed)", ingredient: "nori", quantity: 4 },
        { text: "2 tbsp toasted sesame seeds", ingredient: "sesame seeds", quantity: 2 },
        { text: "1 cup imitation crab, shredded", ingredient: "crab", quantity: 1 },
        { text: "2 tbsp mayonnaise", ingredient: "mayonnaise", quantity: 2 },
        { text: "1 avocado, sliced", ingredient: "avocado", quantity: 1 },
        { text: "1 cucumber, julienned", ingredient: "cucumber", quantity: 1 },
      ],
      steps: [
        "Mix the shredded crab with the mayonnaise.",
        "Lay a sheet of nori on a bamboo mat and spread a thin, even layer of sushi rice over it, then sprinkle the rice with sesame seeds.",
        "Flip the nori so the rice faces down onto the mat (sesame seeds now on the outside) - this inside-out technique, called uramaki, is what actually makes a California roll rather than a plain crab roll.",
        "Layer the crab mixture, avocado, and cucumber along the center of the nori.",
        "Roll tightly using the bamboo mat, sealing the edge with a little water.",
        "Slice into rounds with a sharp, wet knife before serving.",
      ],
      tags: ["lunch", "asian"],
    },
    bg: {
      title: "Калифорния Рол",
      description:
        "Обърната ролка (урамаки) със суши ориз отвън, покрит с препечено сусамово семе, увиващ нори около раче месо, авокадо и краставица - техниката ориз-отвън е това, което всъщност прави Калифорния рол, не просто ролка с имитация на раче месо.",
      steps: [
        "Смесете накъсаното раче месо с майонезата.",
        "Поставете лист нори върху бамбукова постелка и разпределете тънък, равномерен слой суши ориз, после поръсете ориза със сусамово семе.",
        "Обърнете норито така, че оризът да е надолу върху постелката (сусамовото семе вече отвън) - тази обърната техника, наречена урамаки, е това, което всъщност прави Калифорния рол, а не обикновена ролка с раче месо.",
        "Наредете сместа от раче месо, авокадото и краставицата по средата на норито.",
        "Завийте стегнато с бамбуковата постелка, запечатвайки края с малко вода.",
        "Нарежете на кръгчета с остър, мокър нож преди сервиране.",
      ],
      ingredients: [
        "2 чаши суши ориз, сготвен и подправен",
        "4 листа нори (водорасли)",
        "2 с.л. препечено сусамово семе",
        "1 чаша имитация на раче месо, накъсано",
        "2 с.л. майонеза",
        "1 авокадо, нарязано на резени",
        "1 краставица, нарязана на тънки ивици",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
