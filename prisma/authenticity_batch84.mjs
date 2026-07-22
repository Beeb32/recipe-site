import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "vanilla-cake",
      title: "Vanilla Cake",
      description:
        "A classic, tender vanilla layer cake made with the reverse creaming method - beating the butter into the dry ingredients first, rather than creaming butter and sugar before adding flour, coats the flour in fat and limits gluten development, which is what gives real bakery-style vanilla cake its velvety, tight crumb instead of an airy, coarse one.",
      imageEmoji: "🍰",
      cookTimeMinutes: 55,
      servings: 12,
      ingredients: [
        { text: "2 1/2 cups cake flour", ingredient: "cake flour", quantity: 2.5 },
        { text: "1 3/4 cups sugar", ingredient: "sugar", quantity: 1.75 },
        { text: "1 cup butter, softened", ingredient: "butter", quantity: 1 },
        { text: "4 eggs", ingredient: "eggs", quantity: 4 },
        { text: "1 cup milk", ingredient: "milk", quantity: 1 },
        { text: "2 tsp vanilla extract", ingredient: "vanilla extract", quantity: 2 },
      ],
      steps: [
        "Preheat oven to 335°F and grease two round cake pans.",
        "Whisk together the cake flour and sugar, then beat in the softened butter until the mixture looks like coarse, damp sand - coating the flour in butter first is what limits gluten development for a tender, velvety crumb.",
        "Beat in the eggs one at a time, then the vanilla.",
        "Gradually mix in the milk until smooth.",
        "Divide between the pans and bake for 28-30 minutes until a toothpick comes out clean.",
      ],
      tags: ["dessert", "vegetarian", "baking"],
    },
    bg: {
      title: "Ванилова торта",
      description:
        "Класическа, нежна многослойна ванилова торта, приготвена по метода на обратното разбиване - разбиването на маслото в сухите съставки първо, вместо разбиване на масло и захар на крем преди добавяне на брашното, покрива брашното с мазнина и ограничава образуването на глутен, което придава на истинската тортa в стил сладкарница нейната кадифена, плътна структура, вместо въздушна и груба.",
      steps: [
        "Загрейте фурната на 168°C и намажете две кръгли форми за торта.",
        "Разбъркайте брашното за торти и захарта заедно, после разбийте омекналото масло, докато сместа заприлича на грубо, влажно пясъче - покриването на брашното с масло първо е това, което ограничава образуването на глутен за нежна, кадифена структура.",
        "Разбийте яйцата едно по едно, после ванилията.",
        "Постепенно вмесете млякото до гладкост.",
        "Разпределете между формите и печете 28-30 минути, докато клечка излезе суха.",
      ],
      ingredients: [
        "2 1/2 чаши брашно за торти",
        "1 3/4 чаши захар",
        "1 чаша масло, омекнало",
        "4 яйца",
        "1 чаша мляко",
        "2 ч.л. ванилова есенция",
      ],
    },
  },
  {
    en: {
      slug: "jalapeno-poppers",
      title: "Jalapeno Poppers",
      description:
        "Jalapeño halves stuffed with creamy cheese, then wrapped in bacon and baked until crisp - wrapping the peppers in bacon, rather than just mixing crumbled bacon into the filling, is the classic technique that gives real jalapeño poppers their crispy, smoky shell.",
      imageEmoji: "🌶️",
      cookTimeMinutes: 30,
      servings: 8,
      ingredients: [
        { text: "12 jalapeños, halved and seeded", ingredient: "jalapeno", quantity: 12 },
        { text: "8 oz cream cheese, softened", ingredient: "cream cheese", quantity: 8 },
        { text: "1 cup shredded cheddar cheese", ingredient: "cheddar cheese", quantity: 1 },
        { text: "12 slices thin-cut bacon, halved", ingredient: "bacon", quantity: 12 },
      ],
      steps: [
        "Preheat oven to 425°F.",
        "Mix the cream cheese and cheddar together.",
        "Stuff the mixture into each jalapeño half.",
        "Wrap each stuffed half in a piece of bacon, securing with a toothpick if needed.",
        "Bake for 18-20 minutes until the bacon is crisp and the peppers are tender.",
      ],
      tags: ["snack", "quick"],
    },
    bg: {
      title: "Пълнени халапеньо",
      description:
        "Половинки халапеньо, пълнени с кремообразно сирене, после увити в бекон и запечени до хрупкаво - увиването на чушките в бекон, вместо просто смесване на натрошен бекон в плънката, е класическата техника, която придава на истинските пълнени халапеньо тяхната хрупкава, димна коричка.",
      steps: [
        "Загрейте фурната на 220°C.",
        "Смесете крема сирене и чедъра заедно.",
        "Напълнете всяка половинка халапеньо със сместа.",
        "Увийте всяка пълнена половинка в парче бекон, закрепвайки с клечка за зъби при нужда.",
        "Печете 18-20 минути, докато беконът стане хрупкав и чушките омекнат.",
      ],
      ingredients: [
        "12 халапеньо, разрязани наполовина и почистени от семки",
        "225 г крема сирене, омекнало",
        "1 чаша настъргано чедър сирене",
        "12 резена тънко нарязан бекон, разполовени",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
