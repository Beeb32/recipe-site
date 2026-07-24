import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "no-bake-oatmeal-cookies",
      title: "No-Bake Oatmeal Cookies",
      description:
        "Chewy chocolate oatmeal cookies that set on the counter, rounded out with vanilla and a pinch of salt - boiling the sugar mixture for a full, exact minute, not less and not more, is what makes these actually set instead of staying gooey or turning crumbly, and the salt and vanilla keep them from tasting flatly sweet.",
      imageEmoji: "🍪",
      cookTimeMinutes: 20,
      servings: 12,
      ingredients: [
        { text: "2 cups sugar", ingredient: "sugar", quantity: 2 },
        { text: "1/2 cup butter", ingredient: "butter", quantity: 0.5 },
        { text: "1/2 cup milk", ingredient: "milk", quantity: 0.5 },
        { text: "1/4 tsp salt", ingredient: "salt", quantity: 0.25 },
        { text: "1/4 cup cocoa powder", ingredient: "cocoa powder", quantity: 0.25 },
        { text: "3 cups rolled oats", ingredient: "oats", quantity: 3 },
        { text: "1/2 cup peanut butter", ingredient: "peanut butter", quantity: 0.5 },
        { text: "1 tsp vanilla extract", ingredient: "vanilla extract", quantity: 1 },
      ],
      steps: [
        "Combine the sugar, butter, milk, salt, and cocoa powder in a saucepan and bring to a full boil for exactly 1 minute, stirring constantly - timing the boil precisely is what makes these set properly instead of staying gooey or turning crumbly.",
        "Remove from heat and stir in the peanut butter and vanilla until melted.",
        "Stir in the oats until fully coated.",
        "Drop spoonfuls onto wax paper and let cool until set.",
      ],
      tags: ["dessert", "vegetarian", "quick"],
    },
    bg: {
      title: "Овесени бисквитки без печене",
      description:
        "Дъвчащи шоколадово-овесени бисквитки, които се стягат на плота, допълнени с ванилия и щипка сол - завирането на захарната смес за пълна, точна минута, не по-малко и не повече, е това, което ги прави да се стегнат правилно, вместо да останат лепкави или трошливи, а солта и ванилията ги пазят от плосък сладък вкус.",
      steps: [
        "Смесете захарта, маслото, млякото, солта и какаото в тенджерка и оставете да заври за точно 1 минута, разбърквайки постоянно - точното засичане на времето за вряне е това, което ги прави да се стегнат правилно, вместо да останат лепкави или трошливи.",
        "Свалете от котлона и добавете фъстъченото масло и ванилията до разтапяне.",
        "Добавете овесените ядки до пълно покриване.",
        "Сложете лъжица от сместа върху восъчна хартия и оставете да изстине до стягане.",
      ],
      ingredients: [
        "2 чаши захар",
        "1/2 чаша масло",
        "1/2 чаша мляко",
        "1/4 ч.л. сол",
        "1/4 чаша какао на прах",
        "3 чаши овесени ядки",
        "1/2 чаша фъстъчено масло",
        "1 ч.л. ванилова есенция",
      ],
    },
  },
  {
    en: {
      slug: "no-bake-chocolate-pudding-pie",
      title: "No-Bake Chocolate Pudding Pie",
      description:
        "A creamy chocolate pudding pie in a graham cracker crust, with half the whipped cream folded into the pudding instead of used only as a topping - folding in whipped cream is what gives the filling a lighter, mousse-like texture instead of the dense texture of pudding mix straight from the box.",
      imageEmoji: "🥧",
      cookTimeMinutes: 20,
      servings: 8,
      ingredients: [
        { text: "1 graham cracker pie crust", ingredient: "graham cracker crust", quantity: 1 },
        { text: "2 boxes instant chocolate pudding mix", ingredient: "chocolate pudding mix", quantity: 2 },
        { text: "3 cups milk", ingredient: "milk", quantity: 3 },
        { text: "1 cup whipped cream", ingredient: "whipped cream", quantity: 1 },
      ],
      steps: [
        "Whisk the pudding mix with milk according to the package instructions until thickened.",
        "Fold half the whipped cream into the pudding - this is what gives the filling a lighter, mousse-like texture instead of a dense one.",
        "Pour the pudding into the graham cracker crust.",
        "Chill for at least 2 hours until set.",
        "Top with the remaining whipped cream before serving.",
      ],
      tags: ["dessert", "vegetarian", "quick"],
    },
    bg: {
      title: "Шоколадов пай с пудинг без печене",
      description:
        "Кремообразен шоколадов пай с пудинг в коричка от бисквити грахам, с половината разбита сметана, вмесена в пудинга, вместо използвана само за отгоре - вмесването на разбита сметана е това, което придава на плънката по-лека, мусоподобна текстура, вместо плътната текстура на пудинг направо от кутията.",
      steps: [
        "Разбъркайте пудинга с мляко според инструкциите на опаковката до сгъстяване.",
        "Вмесете половината разбита сметана в пудинга - това е, което придава на плънката по-лека, мусоподобна текстура, вместо плътна.",
        "Изсипете пудинга в коричката от бисквити грахам.",
        "Охладете поне 2 часа до стягане.",
        "Отгоре добавете останалата разбита сметана преди сервиране.",
      ],
      ingredients: ["1 коричка от бисквити грахам", "2 кутии инстантен шоколадов пудинг", "3 чаши мляко", "1 чаша разбита сметана"],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
