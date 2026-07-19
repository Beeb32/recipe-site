import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "garlic-bread",
      title: "Garlic Bread",
      description:
        "Crusty bread brushed with garlicky butter, baked until warmed through, then broiled briefly for deeply golden, crisp edges - that broiling finish is the step most quick versions skip, relying on baking alone.",
      imageEmoji: "🍞",
      cookTimeMinutes: 20,
      servings: 6,
      ingredients: [
        { text: "1 baguette, halved lengthwise", ingredient: "baguette", quantity: 1 },
        { text: "1/2 cup butter, softened", ingredient: "butter", quantity: 0.5 },
        { text: "4 cloves garlic, minced", ingredient: "garlic", quantity: 4 },
        { text: "1/2 tsp garlic powder", ingredient: "garlic powder", quantity: 0.5 },
        { text: "1/4 cup grated Parmesan", ingredient: "parmesan", quantity: 0.25 },
        { text: "2 tbsp chopped parsley", ingredient: "parsley", quantity: 2 },
      ],
      steps: [
        "Preheat oven to 400°F.",
        "Mix the softened butter with the minced garlic, garlic powder, and parsley, then spread over the cut sides of the baguette.",
        "Sprinkle with Parmesan.",
        "Bake for 8-10 minutes until warmed through.",
        "Broil for 1-2 minutes, watching closely, until the edges are deeply golden and crisp - this broiling finish is what most quick versions skip.",
      ],
      tags: ["snack", "vegetarian", "italian", "quick", "baking"],
    },
    bg: {
      title: "Чеснов хляб",
      description:
        "Хрупкав хляб, намазан с чеснов масло, изпечен до претопляне, после препечен за кратко на грил за дълбоко златисти, хрупкави краища - това довършване на грил е стъпката, която повечето бързи версии пропускат, разчитайки само на печенето.",
      steps: [
        "Загрейте фурната на 200°C.",
        "Смесете омекналото масло със ситно нарязания чесън, чесновия прах и магданоза, после намажете разрязаните страни на багетата.",
        "Поръсете с пармезан.",
        "Печете 8-10 минути до претопляне.",
        "Препечете на грил 1-2 минути, наблюдавайки внимателно, докато краищата станат дълбоко златисти и хрупкави - това довършване на грил е това, което повечето бързи версии пропускат.",
      ],
      ingredients: [
        "1 багета, разрязана на две по дължина",
        "1/2 чаша масло, омекнало",
        "4 скилидки чесън, ситно нарязани",
        "1/2 ч.л. чеснов прах",
        "1/4 чаша настърган пармезан",
        "2 с.л. нарязан магданоз",
      ],
    },
  },
  {
    en: {
      slug: "buttermilk-biscuits",
      title: "Buttermilk Biscuits",
      description:
        "Flaky, tender biscuits made with cold butter folded into layers before cutting - folding the dough several times is what creates the buttery layers real biscuits are known for, and cutting straight down without twisting is what lets them rise tall instead of sealing the edges shut.",
      imageEmoji: "🍞",
      cookTimeMinutes: 30,
      servings: 8,
      ingredients: [
        { text: "2 cups flour", ingredient: "flour", quantity: 2 },
        { text: "1 tbsp baking powder", ingredient: "baking powder", quantity: 1 },
        { text: "1/2 cup cold butter, cubed", ingredient: "butter", quantity: 0.5 },
        { text: "3/4 cup buttermilk, plus more for brushing", ingredient: "buttermilk", quantity: 0.75 },
      ],
      steps: [
        "Preheat oven to 425°F.",
        "Whisk together the flour and baking powder, then cut in the cold butter until pea-sized crumbs form.",
        "Stir in the buttermilk until just combined into a shaggy dough.",
        "Pat the dough into a rectangle, fold it into thirds like a letter, and pat out again - repeat this fold 3-4 times to build flaky layers.",
        "Pat out to 1 inch thick and cut into rounds with a floured cutter, pressing straight down without twisting - twisting seals the edges and keeps the biscuits from rising tall.",
        "Brush the tops with a little buttermilk and bake for 12-15 minutes until golden.",
      ],
      tags: ["breakfast", "vegetarian", "baking"],
    },
    bg: {
      title: "Бисквити с масена суроватка",
      description:
        "Ронливи, нежни бисквити, приготвени със студено масло, сгънато на слоеве преди рязане - сгъването на тестото няколко пъти е това, което създава масленните слоеве, с които истинските бисквити са известни, а рязането направо надолу без завъртане е това, което им позволява да втасат високо, вместо да запечата краищата.",
      steps: [
        "Загрейте фурната на 220°C.",
        "Разбийте брашното и бакпулвера заедно, после нарежете студеното масло до образуване на трохи с размер на грахово зърно.",
        "Разбъркайте масената суроватка до леко смесване в грубо тесто.",
        "Разплескайте тестото в правоъгълник, сгънете го на три като писмо и разплескайте отново - повторете това сгъване 3-4 пъти, за да изградите ронливи слоеве.",
        "Разплескайте до дебелина 2,5 см и изрежете кръгчета с набрашнена форма, натискайки направо надолу без завъртане - завъртането запечатва краищата и пречи на бисквитите да втасат високо.",
        "Намажете отгоре с малко масена суроватка и печете 12-15 минути до златисто.",
      ],
      ingredients: [
        "2 чаши брашно",
        "1 с.л. бакпулвер",
        "1/2 чаша студено масло, нарязано на кубчета",
        "3/4 чаша масена суроватка, плюс още за намазване",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
