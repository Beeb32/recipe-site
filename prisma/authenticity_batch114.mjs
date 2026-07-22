import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "coconut-macaroons",
      title: "Coconut Macaroons",
      description:
        "Chewy, golden coconut cookies with a crisp exterior, seasoned with a pinch of salt to balance the sweetness and finished dipped in melted chocolate - the chocolate dip is the classic finishing touch that plain-baked macaroons most quick versions skip.",
      imageEmoji: "🥥",
      cookTimeMinutes: 30,
      servings: 18,
      ingredients: [
        { text: "3 cups shredded coconut", ingredient: "coconut", quantity: 3 },
        { text: "2/3 cup sweetened condensed milk", ingredient: "condensed milk", quantity: 0.67 },
        { text: "2 egg whites", ingredient: "egg whites", quantity: 2 },
        { text: "1/4 tsp salt", ingredient: "salt", quantity: 0.25 },
        { text: "1 tsp vanilla extract", ingredient: "vanilla extract", quantity: 1 },
        { text: "1/2 cup chocolate chips, melted, for dipping", ingredient: "chocolate chips", quantity: 0.5 },
      ],
      steps: [
        "Preheat oven to 325°F.",
        "Mix the shredded coconut with condensed milk, salt, and vanilla.",
        "Whip the egg whites to soft peaks and fold into the coconut mixture.",
        "Scoop into mounds on a baking sheet and bake for 18-20 minutes until golden.",
        "Let cool completely, then dip the bottoms in melted chocolate - the chocolate dip is the classic finishing touch most quick versions skip.",
      ],
      tags: ["dessert", "vegetarian", "baking"],
    },
    bg: {
      title: "Кокосови макаронки",
      description:
        "Дъвчащи, златисти кокосови бисквити с хрупкава външност, подправени с щипка сол за баланс на сладостта и завършени, потопени в разтопен шоколад - потапянето в шоколад е класическият финален щрих, който обикновените печени макаронки, повечето бързи версии пропускат.",
      steps: [
        "Загрейте фурната на 165°C.",
        "Смесете настъргания кокос с кондензираното мляко, солта и ванилията.",
        "Разбийте белтъците до меки върхове и добавете в кокосовата смес.",
        "Оформете купчинки върху тава за печене и печете 18-20 минути до златисто.",
        "Оставете да изстинат напълно, после потопете основите в разтопен шоколад - потапянето в шоколад е класическият финален щрих, който повечето бързи версии пропускат.",
      ],
      ingredients: [
        "3 чаши настърган кокос",
        "2/3 чаша подсладено кондензирано мляко",
        "2 белтъка",
        "1/4 ч.л. сол",
        "1 ч.л. ванилова есенция",
        "1/2 чаша шоколадови парченца, разтопени, за потапяне",
      ],
    },
  },
  {
    en: {
      slug: "chocolate-covered-strawberries",
      title: "Chocolate Covered Strawberries",
      description:
        "Fresh strawberries brought to room temperature and dried completely before dipping in melted chocolate - any moisture or cold on the berries is what makes chocolate seize or turn dull and streaky instead of setting glossy.",
      imageEmoji: "🍓",
      cookTimeMinutes: 20,
      servings: 6,
      ingredients: [
        { text: "1 lb strawberries", ingredient: "strawberries", quantity: 1 },
        { text: "1 1/2 cups chocolate chips", ingredient: "chocolate chips", quantity: 1.5 },
        { text: "1 tsp vegetable oil", ingredient: "vegetable oil", quantity: 1 },
      ],
      steps: [
        "Let the strawberries come to room temperature, then wash and dry them completely - any remaining moisture or cold is what makes the chocolate seize or coat unevenly.",
        "Melt the chocolate chips with the vegetable oil in the microwave in 30-second bursts, stirring between each.",
        "Holding each strawberry by the stem, dip into the melted chocolate, letting the excess drip off.",
        "Place on parchment paper and chill briefly, just until the chocolate sets.",
      ],
      tags: ["dessert", "vegetarian", "quick"],
    },
    bg: {
      title: "Ягоди в шоколад",
      description:
        "Пресни ягоди, оставени да достигнат стайна температура и напълно подсушени преди потапяне в разтопен шоколад - всяка влага или студ по ягодите е това, което кара шоколада да се сгърчи или да стане матов и на ивици, вместо да се стегне гладко и лъскаво.",
      steps: [
        "Оставете ягодите да достигнат стайна температура, после ги измийте и подсушете напълно - всяка останала влага или студ е това, което кара шоколада да се сгърчи или да покрие неравномерно.",
        "Разтопете шоколадовите парченца с олиото в микровълновата на интервали от 30 секунди, разбърквайки между всеки.",
        "Държейки всяка ягода за дръжката, потопете в разтопения шоколад, оставяйки излишъка да капе.",
        "Поставете върху хартия за печене и охладете за кратко, само докато шоколадът се стегне.",
      ],
      ingredients: ["450 г ягоди", "1 1/2 чаши шоколадови парченца", "1 ч.л. олио"],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
