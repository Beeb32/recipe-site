import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "pound-cake",
      title: "Pound Cake",
      description:
        "A dense, buttery cake with a tender crumb, built on the classic pound-for-pound ratio of butter, sugar, eggs, and flour - creaming the room-temperature butter and sugar for a full 5 minutes until pale and fluffy is what gives real pound cake its fine crumb, a step most rushed versions cut short.",
      imageEmoji: "🍰",
      cookTimeMinutes: 75,
      servings: 10,
      ingredients: [
        { text: "3 cups flour", ingredient: "flour", quantity: 3 },
        { text: "2 cups sugar", ingredient: "sugar", quantity: 2 },
        { text: "1 cup butter, softened to room temperature", ingredient: "butter", quantity: 1 },
        { text: "5 eggs, room temperature", ingredient: "eggs", quantity: 5 },
        { text: "1 cup milk, room temperature", ingredient: "milk", quantity: 1 },
        { text: "1 tsp vanilla extract", ingredient: "vanilla extract", quantity: 1 },
      ],
      steps: [
        "Preheat oven to 325°F and grease a loaf or bundt pan.",
        "Cream the room-temperature butter and sugar together for a full 5 minutes until pale and fluffy - rushing this step is what leaves pound cake dense instead of tender, since it's what beats air into the batter.",
        "Beat in the room-temperature eggs one at a time, mixing well after each addition.",
        "Alternate mixing in the flour and milk, then stir in the vanilla.",
        "Pour into the pan and bake for 60-65 minutes until a toothpick comes out clean.",
      ],
      tags: ["dessert", "vegetarian", "baking"],
    },
    bg: {
      title: "Кекс паунд кейк",
      description:
        "Плътен, маслен кекс с нежна трохичка, изграден върху класическото съотношение тегло-в-тегло на масло, захар, яйца и брашно - разбиването на маслото и захарта на стайна температура цели 5 минути до бледо и пухкаво е това, което придава на истинския паунд кейк финната му трохичка, стъпка, която повечето набързо приготвени версии съкращават.",
      steps: [
        "Загрейте фурната на 165°C и намажете форма за кекс или бунд.",
        "Разбийте маслото и захарта на стайна температура заедно цели 5 минути до бледо и пухкаво - съкращаването на тази стъпка е това, което прави кекса плътен, вместо нежен, тъй като тя вкарва въздух в тестото.",
        "Добавяйте яйцата на стайна температура едно по едно, разбърквайки добре след всяко.",
        "Разбърквайте последователно брашното и млякото, после добавете ванилията.",
        "Изсипете във формата и печете 60-65 минути, докато клечка излезе суха.",
      ],
      ingredients: [
        "3 чаши брашно",
        "2 чаши захар",
        "1 чаша масло, омекнало до стайна температура",
        "5 яйца, на стайна температура",
        "1 чаша мляко, на стайна температура",
        "1 ч.л. ванилова есенция",
      ],
    },
  },
  {
    en: {
      slug: "rice-pudding",
      title: "Rice Pudding",
      description:
        "Creamy, comforting short-grain rice simmered slowly in sweetened milk with a hint of vanilla - the frequent stirring is what releases the rice's starch into the milk, and that starch, not any added thickener, is what makes real rice pudding creamy instead of watery.",
      imageEmoji: "🍮",
      cookTimeMinutes: 45,
      servings: 6,
      ingredients: [
        { text: "1 cup short-grain rice", ingredient: "rice", quantity: 1 },
        { text: "4 cups milk", ingredient: "milk", quantity: 4 },
        { text: "Pinch of salt", ingredient: "salt", quantity: null },
        { text: "1/2 cup sugar", ingredient: "sugar", quantity: 0.5 },
        { text: "1 tsp vanilla extract", ingredient: "vanilla extract", quantity: 1 },
        { text: "1/2 tsp cinnamon", ingredient: "cinnamon", quantity: 0.5 },
      ],
      steps: [
        "Combine the rice, milk, and salt in a saucepan and bring to a gentle simmer.",
        "Cook, stirring often, for 30-35 minutes until the rice is tender and the mixture has thickened - the frequent stirring releases the rice's starch into the milk, which is what makes the pudding creamy.",
        "Stir in the sugar and vanilla extract.",
        "Spoon into bowls and dust with cinnamon before serving, warm or chilled.",
      ],
      tags: ["dessert", "vegetarian"],
    },
    bg: {
      title: "Оризов пудинг",
      description:
        "Кремообразен, успокояващ ориз с кръгло зърно, бавно варен в подсладено мляко с нотка ванилия - честото разбъркване е това, което освобождава скорбялата на ориза в млякото, и именно тя, а не добавен сгъстител, прави истинския оризов пудинг кремообразен, вместо воднист.",
      steps: [
        "Смесете ориза, млякото и солта в тенджера и загрейте до леко къкрене.",
        "Гответе, като разбърквате често, 30-35 минути, докато оризът омекне и сместа се сгъсти - честото разбъркване освобождава скорбялата на ориза в млякото, което прави пудинга кремообразен.",
        "Добавете захарта и ваниловата есенция.",
        "Сипете в купички и поръсете с канела преди сервиране, топъл или охладен.",
      ],
      ingredients: [
        "1 чаша ориз с кръгло зърно",
        "4 чаши мляко",
        "Щипка сол",
        "1/2 чаша захар",
        "1 ч.л. ванилова есенция",
        "1/2 ч.л. канела",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
