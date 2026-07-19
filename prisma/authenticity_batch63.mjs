import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "chicken-pot-pie",
      title: "Chicken Pot Pie",
      description:
        "Tender chicken and vegetables in a roux-thickened creamy sauce, cooled before it goes into the crust and baked until deeply golden - pouring hot filling straight into raw dough is what makes the bottom crust turn soggy instead of flaky.",
      imageEmoji: "🥧",
      cookTimeMinutes: 60,
      servings: 6,
      ingredients: [
        { text: "2 chicken breasts, cooked and diced", ingredient: "chicken breast", quantity: 2 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "2 carrots, diced", ingredient: "carrot", quantity: 2 },
        { text: "1 cup frozen peas", ingredient: "peas", quantity: 1 },
        { text: "1/3 cup flour", ingredient: "flour", quantity: 0.33 },
        { text: "2 cups chicken broth", ingredient: "chicken broth", quantity: 2 },
        { text: "1 cup milk", ingredient: "milk", quantity: 1 },
        { text: "1 tsp fresh thyme", ingredient: "thyme", quantity: 1 },
        { text: "2 pie crusts", ingredient: "pie crust", quantity: 2 },
        { text: "1 egg, beaten (for egg wash)", ingredient: "eggs", quantity: 1 },
      ],
      steps: [
        "Sauté the onion and carrots until softened.",
        "Sprinkle in the flour and cook for 1 minute to eliminate the raw flour taste, then whisk in the chicken broth and milk until thickened.",
        "Stir in the cooked chicken, peas, and thyme, then let the filling cool for 15-20 minutes - hot filling melts the bottom crust before it bakes, leading to a soggy bottom.",
        "Pour the cooled filling into a pie crust-lined dish and top with the second crust, sealing the edges and brushing with the beaten egg.",
        "Bake at 400°F for 30-35 minutes until the crust is deeply golden.",
      ],
      tags: ["dinner"],
    },
    bg: {
      title: "Пилешки пай",
      description:
        "Крехко пиле и зеленчуци в кремообразен сос, сгъстен с ру, охладен преди да влезе в кората и изпечен до дълбоко златисто - изливането на гореща плънка направо в сурово тесто е това, което прави долната кора кашава, вместо хрупкава.",
      steps: [
        "Запържете лука и морковите до омекване.",
        "Поръсете с брашно и гответе 1 минута, за да премахнете суровия вкус на брашното, после разбъркайте с пилешкия бульон и млякото до сгъстяване.",
        "Добавете сготвеното пиле, граха и мащерката, после оставете плънката да изстине 15-20 минути - горещата плънка разтопява долната кора, преди да се изпече, което я прави кашава.",
        "Изсипете охладената плънка в тава, облицована с кора, и покрийте с втора кора, запечатвайки краищата и намазвайки с разбитото яйце.",
        "Печете на 200°C 30-35 минути до дълбоко златиста коричка.",
      ],
      ingredients: [
        "2 пилешки гърди, сготвени и нарязани на кубчета",
        "1 лук, нарязан на кубчета",
        "2 моркова, нарязани на кубчета",
        "1 чаша замразен грах",
        "1/3 чаша брашно",
        "2 чаши пилешки бульон",
        "1 чаша мляко",
        "1 ч.л. пресна мащерка",
        "2 кори за пай",
        "1 разбито яйце (за намазване)",
      ],
    },
  },
  {
    en: {
      slug: "carrot-cake",
      title: "Carrot Cake",
      description:
        "A moist spiced cake packed with shredded carrots, crushed pineapple, and walnuts, topped with a proper cream cheese frosting - pineapple and walnuts are the two classic mix-ins most quick versions leave out.",
      imageEmoji: "🥕",
      cookTimeMinutes: 70,
      servings: 10,
      ingredients: [
        { text: "2 cups flour", ingredient: "flour", quantity: 2 },
        { text: "2 tsp cinnamon", ingredient: "cinnamon", quantity: 2 },
        { text: "1 tsp baking soda", ingredient: "baking soda", quantity: 1 },
        { text: "1/2 tsp ground ginger", ingredient: "ginger", quantity: 0.5 },
        { text: "1/4 tsp nutmeg", ingredient: "nutmeg", quantity: 0.25 },
        { text: "3 eggs", ingredient: "eggs", quantity: 3 },
        { text: "1 cup vegetable oil", ingredient: "vegetable oil", quantity: 1 },
        { text: "1 1/2 cups sugar", ingredient: "sugar", quantity: 1.5 },
        { text: "3 cups grated carrots", ingredient: "carrot", quantity: 3 },
        { text: "1/2 cup crushed pineapple, drained", ingredient: "pineapple", quantity: 0.5 },
        { text: "1/2 cup walnuts, chopped", ingredient: "walnuts", quantity: 0.5 },
        { text: "8 oz cream cheese, softened", ingredient: "cream cheese", quantity: 8 },
        { text: "1/2 cup butter, softened", ingredient: "butter", quantity: 0.5 },
        { text: "3 cups powdered sugar", ingredient: "powdered sugar", quantity: 3 },
        { text: "1 tsp vanilla extract", ingredient: "vanilla extract", quantity: 1 },
      ],
      steps: [
        "Preheat oven to 350°F and grease two cake pans.",
        "Whisk together the flour, cinnamon, baking soda, ginger, and nutmeg.",
        "In another bowl, beat the eggs, oil, and sugar together, then fold in the grated carrots, drained pineapple, and walnuts.",
        "Combine the wet and dry ingredients and divide between the pans.",
        "Bake for 30-35 minutes, then cool completely.",
        "Beat the cream cheese and butter together until smooth, then beat in the powdered sugar and vanilla until fluffy - creaming the cream cheese and butter first, before the sugar, is what keeps the frosting from turning weepy.",
        "Frost the cooled cake.",
      ],
      tags: ["dessert", "baking", "vegetarian"],
    },
    bg: {
      title: "Торта с моркови",
      description:
        "Сочна подправена торта, пълна с настъргани моркови, смачкан ананас и орехи, покрита с истински крем от крема сирене - ананасът и орехите са двете класически добавки, които повечето бързи версии пропускат.",
      steps: [
        "Загрейте фурната на 180°C и намажете две тави за торта.",
        "Разбъркайте брашното, канелата, содата за хляб, джинджифила и индийското орехче.",
        "В друга купа разбийте яйцата, олиото и захарта, после добавете настърганите моркови, отцедения ананас и орехите.",
        "Смесете течната смес със сухата и разпределете в тавите.",
        "Печете 30-35 минути, после оставете да изстине напълно.",
        "Разбийте крема сирене и маслото заедно до гладкост, после разбийте пудрата захар и ванилията до пухкавост - разбиването на крема сирене и маслото първо, преди захарта, е това, което пази крема от отделяне на течност.",
        "Намажете изстиналата торта.",
      ],
      ingredients: [
        "2 чаши брашно",
        "2 ч.л. канела",
        "1 ч.л. сода за хляб",
        "1/2 ч.л. смлян джинджифил",
        "1/4 ч.л. индийско орехче",
        "3 яйца",
        "1 чаша олио",
        "1 1/2 чаши захар",
        "3 чаши настъргани моркови",
        "1/2 чаша смачкан ананас, отцеден",
        "1/2 чаша орехи, нарязани",
        "225 г крема сирене, омекотено",
        "1/2 чаша масло, омекотено",
        "3 чаши пудра захар",
        "1 ч.л. ванилова есенция",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
