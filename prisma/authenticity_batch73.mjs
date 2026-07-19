import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "classic-margherita-pizza",
      title: "Classic Margherita Pizza",
      description:
        "A simple, ingredient-driven Neapolitan pizza with hand-crushed San Marzano tomatoes left uncooked, fresh mozzarella drained of its liquid, and basil added after baking - draining the mozzarella and leaving the sauce raw are the two moisture-control tricks that keep the crust from turning soggy.",
      imageEmoji: "🍕",
      cookTimeMinutes: 25,
      servings: 4,
      ingredients: [
        { text: "1 pizza dough ball", ingredient: "pizza dough", quantity: 1 },
        { text: "1/2 cup crushed San Marzano tomatoes, uncooked", ingredient: "tomato", quantity: 0.5 },
        { text: "8 oz fresh mozzarella, torn and drained", ingredient: "mozzarella", quantity: 8 },
        { text: "Fresh basil leaves", ingredient: "basil", quantity: null },
        { text: "2 tbsp olive oil", ingredient: "olive oil", quantity: 2 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Preheat oven (with a pizza stone if you have one) to 500°F / 260°C.",
        "Tear the mozzarella and let it drain on paper towels for at least 30 minutes - this removes the excess liquid that would otherwise make the crust soggy.",
        "Stretch the dough by hand into a 12-inch round - stretching by hand instead of using a rolling pin keeps the air bubbles intact for a soft interior.",
        "Spread the crushed tomatoes evenly, uncooked, leaving a border for the crust - the sauce is meant to finish cooking on the pizza in the oven, not be simmered beforehand.",
        "Scatter the drained mozzarella over the sauce.",
        "Bake for 8-10 minutes until the crust is golden and cheese is bubbling.",
        "Top with fresh basil and a drizzle of olive oil before serving - adding basil after baking is what keeps it bright green instead of wilted and blackened.",
      ],
      tags: ["dinner", "vegetarian", "italian"],
    },
    bg: {
      title: "Класическа пица Маргарита",
      description:
        "Проста неаполитанска пица с домати Сан Марцано, смачкани на ръка и оставени сурови, прясна моцарела, отцедена от течността си, и босилек, добавен след печене - отцеждането на моцарелата и суровият сос са двата трика за контрол на влагата, които пазят коричката от накисване.",
      steps: [
        "Загрейте фурната (с камък за пица, ако имате) на 260°C.",
        "Накъсайте моцарелата и я оставете да се отцеди върху хартиени кърпи поне 30 минути - това премахва излишната течност, която иначе би направила коричката кашава.",
        "Разтеглете тестото на ръка на кръг с диаметър 30 см - разтеглянето на ръка, вместо с точилка, запазва въздушните мехурчета за мека вътрешност.",
        "Разпределете смачканите домати равномерно, сурови, оставяйки ръб за коричката - сосът е предназначен да довърши готвенето върху пицата във фурната, а не да се вари предварително.",
        "Разпределете отцедената моцарела върху соса.",
        "Печете 8-10 минути, докато коричката стане златиста и сиренето къкри.",
        "Гарнирайте с пресен босилек и малко зехтин преди сервиране - добавянето на босилека след печене е това, което го пази ярко зелен, вместо увяхнал и почернял.",
      ],
      ingredients: [
        "1 топка тесто за пица",
        "1/2 чаша смачкани домати Сан Марцано, сурови",
        "225 г прясна моцарела, накъсана и отцедена",
        "Пресни листа босилек",
        "2 с.л. зехтин",
        "Сол на вкус",
      ],
    },
  },
  {
    en: {
      slug: "hawaiian-pizza",
      title: "Hawaiian Pizza",
      description:
        "A sweet and savory pizza topped with ham and pineapple patted dry before topping so the crust bakes crisp instead of soggy - invented not in Hawaii but in Chatham, Ontario, Canada, in 1962 by Sam Panopoulos, who named it after the brand of canned pineapple he used.",
      imageEmoji: "🍕",
      cookTimeMinutes: 35,
      servings: 4,
      ingredients: [
        { text: "1 pizza dough ball", ingredient: "pizza dough", quantity: 1 },
        { text: "1/2 cup pizza sauce", ingredient: "pizza sauce", quantity: 0.5 },
        { text: "2 cups shredded mozzarella", ingredient: "mozzarella", quantity: 2 },
        { text: "1 cup diced ham", ingredient: "ham", quantity: 1 },
        { text: "1 cup pineapple chunks, patted dry", ingredient: "pineapple", quantity: 1 },
      ],
      steps: [
        "Preheat oven to 475°F.",
        "Pat the pineapple chunks dry with paper towels - excess moisture is what makes the crust soggy.",
        "Roll out the dough and spread with pizza sauce.",
        "Top with mozzarella, ham, and the dried pineapple.",
        "Bake for 12-15 minutes until the crust is golden and the cheese is bubbly.",
      ],
      tags: ["dinner", "italian", "quick"],
    },
    bg: {
      title: "Хавайска пица",
      description:
        "Сладко-солена пица с шунка и ананас, подсушен преди добавяне, за да се изпече коричката хрупкава, вместо кашава - измислена не на Хаваите, а в Чатъм, Онтарио, Канада, през 1962 г. от Сам Панопулос, който я кръщава на марката консервиран ананас, която използвал.",
      steps: [
        "Загрейте фурната на 245°C.",
        "Подсушете парченцата ананас с хартиени кърпи - излишната влага е това, което прави коричката кашава.",
        "Разточете тестото и намажете с доматен сос за пица.",
        "Отгоре сложете моцарела, шунка и подсушения ананас.",
        "Печете 12-15 минути, докато коричката стане златиста и сиренето закъкри.",
      ],
      ingredients: [
        "1 топка тесто за пица",
        "1/2 чаша доматен сос за пица",
        "2 чаши настъргана моцарела",
        "1 чаша нарязана на кубчета шунка",
        "1 чаша парченца ананас, подсушени",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
