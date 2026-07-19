import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "pepperoni-pizza",
      title: "Pepperoni Pizza",
      description:
        "A classic homemade pizza topped with tomato sauce, mozzarella, and pepperoni, hand-stretched rather than rolled and baked as hot as the oven allows on a preheated stone - rolling pins flatten out the air pockets that give real pizzeria-style crust its chew, which most quick versions lose.",
      imageEmoji: "🍕",
      cookTimeMinutes: 35,
      servings: 4,
      ingredients: [
        { text: "1 pizza dough ball, room temperature", ingredient: "pizza dough", quantity: 1 },
        { text: "1/2 cup pizza sauce", ingredient: "pizza sauce", quantity: 0.5 },
        { text: "2 cups shredded mozzarella", ingredient: "mozzarella", quantity: 2 },
        { text: "1/2 cup sliced pepperoni", ingredient: "pepperoni", quantity: 0.5 },
        { text: "Cornmeal or flour, for dusting", ingredient: "cornmeal", quantity: null },
      ],
      steps: [
        "Place a pizza stone or steel in the oven and preheat to 500-550°F (as hot as your oven goes) for at least 45 minutes.",
        "Hand-stretch the room-temperature dough into a round on a cornmeal-dusted surface - stretching by hand instead of using a rolling pin preserves the air pockets that give the crust its chew.",
        "Spread with pizza sauce, then top with mozzarella and pepperoni slices.",
        "Slide onto the preheated stone and bake for 8-12 minutes until the crust is charred in spots and the cheese is bubbly.",
      ],
      tags: ["dinner", "italian", "quick"],
    },
    bg: {
      title: "Пица Пеперони",
      description:
        "Класическа домашна пица с доматен сос, моцарела и пеперони, разтеглена на ръка вместо разточена и изпечена на възможно най-висока температура върху загрят камък - точилката изравнява въздушните джобчета, които придават на истинската пицарска коричка нейната дъвчимост, и повечето бързи версии я губят.",
      steps: [
        "Сложете камък или стоманена плоча за пица във фурната и загрейте на 260-290°C (възможно най-високата температура на фурната ви) поне 45 минути.",
        "Разтеглете тестото на стайна температура на ръка върху повърхност, поръсена с царевично брашно - разтеглянето на ръка, вместо с точилка, запазва въздушните джобчета, които придават на коричката нейната дъвчимост.",
        "Намажете с доматен сос за пица, после отгоре сложете моцарела и резенчета пеперони.",
        "Плъзнете върху загретия камък и печете 8-12 минути, докато коричката овъглее на места и сиренето закъкри.",
      ],
      ingredients: [
        "1 топка тесто за пица, на стайна температура",
        "1/2 чаша доматен сос за пица",
        "2 чаши настъргана моцарела",
        "1/2 чаша нарязано пеперони",
        "Царевично брашно или обикновено брашно, за поръсване",
      ],
    },
  },
  {
    en: {
      slug: "thanksgiving-stuffing",
      title: "Thanksgiving Stuffing",
      description:
        "Savory bread stuffing made with bread cubes dried out first so they soak up flavor without turning mushy, plus fresh sage, thyme, and parsley alongside the celery and onion - drying the bread properly is the step most rushed versions skip.",
      imageEmoji: "🍞",
      cookTimeMinutes: 75,
      servings: 8,
      ingredients: [
        { text: "8 cups cubed bread, dried out overnight or in the oven", ingredient: "bread", quantity: 8 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "3 celery stalks, diced", ingredient: "celery", quantity: 3 },
        { text: "1/2 cup butter", ingredient: "butter", quantity: 0.5 },
        { text: "2 cups chicken broth", ingredient: "chicken broth", quantity: 2 },
        { text: "1 tbsp poultry seasoning", ingredient: "poultry seasoning", quantity: 1 },
        { text: "2 tbsp fresh sage, chopped", ingredient: "sage", quantity: 2 },
        { text: "1 tbsp fresh thyme leaves", ingredient: "thyme", quantity: 1 },
        { text: "1/4 cup fresh parsley, chopped", ingredient: "parsley", quantity: 0.25 },
      ],
      steps: [
        "If the bread isn't already stale, dry the cubes on a baking sheet at 300°F for 20-30 minutes, stirring occasionally, so they can soak up flavor without turning mushy.",
        "Preheat oven to 350°F.",
        "Sauté the onion and celery in butter until softened but not browned, 7-10 minutes.",
        "Toss the bread cubes with the vegetables, chicken broth, poultry seasoning, sage, thyme, and parsley.",
        "Spread into a baking dish and bake for 35-40 minutes until golden on top.",
      ],
      tags: ["dinner", "vegetarian", "baking"],
    },
    bg: {
      title: "Плънка за Деня на благодарността",
      description:
        "Ароматна хлебна плънка, приготвена от кубчета хляб, изсушени първо, за да попият вкус, без да станат кашести, плюс пресен градински чай, мащерка и магданоз заедно с целината и лука - правилното изсушаване на хляба е стъпката, която повечето набързо приготвени версии пропускат.",
      steps: [
        "Ако хлябът не е вече стар, изсушете кубчетата върху тава на 150°C за 20-30 минути, разбърквайки от време на време, за да могат да попият вкус, без да станат кашести.",
        "Загрейте фурната на 180°C.",
        "Задушете лука и целината в масло до омекване, но без да покафенеят, 7-10 минути.",
        "Разбъркайте кубчетата хляб със зеленчуците, пилешкия бульон, подправката за птиче месо, градинския чай, мащерката и магданоза.",
        "Разпределете в тава и печете 35-40 минути до златисто отгоре.",
      ],
      ingredients: [
        "8 чаши хляб, нарязан на кубчета и изсушен през нощта или във фурната",
        "1 лук, нарязан на кубчета",
        "3 стръка целина, нарязани на кубчета",
        "1/2 чаша масло",
        "2 чаши пилешки бульон",
        "1 с.л. подправка за птиче месо",
        "2 с.л. пресен градински чай, нарязан",
        "1 с.л. листа пресна мащерка",
        "1/4 чаша пресен магданоз, нарязан",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
