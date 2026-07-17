import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "spanakopita",
      title: "Spanakopita",
      description:
        "Flaky phyllo pastry filled with well-drained spinach, feta, and fresh dill - squeezing every drop of water from the spinach is what keeps the phyllo crisp instead of soggy.",
      imageEmoji: "🥬",
      cookTimeMinutes: 60,
      servings: 8,
      ingredients: [
        { text: "1 lb fresh spinach, chopped", ingredient: "spinach", quantity: 1 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "1 cup crumbled feta cheese", ingredient: "feta cheese", quantity: 1 },
        { text: "2 eggs", ingredient: "eggs", quantity: 2 },
        { text: "1/4 cup fresh dill, chopped", ingredient: "dill", quantity: 0.25 },
        { text: "2 tbsp fresh parsley, chopped", ingredient: "parsley", quantity: 2 },
        { text: "1 package phyllo dough", ingredient: "phyllo dough", quantity: 1 },
        { text: "1/2 cup melted butter", ingredient: "butter", quantity: 0.5 },
        { text: "Salt and pepper to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Sauté the onion until soft, then add the spinach and cook until wilted; let cool, then squeeze it firmly by hand or in a clean towel until no more liquid drips out - this is essential, or the filling will turn the phyllo soggy.",
        "Mix the well-drained spinach with feta, eggs, dill, parsley, salt, and pepper.",
        "Layer sheets of phyllo in a baking dish, brushing each with melted butter.",
        "Spread the spinach filling over the phyllo, then top with more buttered phyllo sheets.",
        "Score the top layer and bake at 375°F for 35-40 minutes until golden.",
      ],
      tags: ["dinner", "mediterranean", "vegetarian"],
    },
    bg: {
      title: "Спанакопита",
      description:
        "Хрупкаво тесто от кори, пълнено с добре изцеден спанак, фета и пресен копър - изцеждането на всяка капка вода от спанака е това, което пази корите хрупкави, а не разкиснати.",
      steps: [
        "Запържете лука до омекване, после добавете спанака и гответе до омекване; оставете да изстине, после изстискайте силно на ръка или в чиста кърпа, докато спре да пуска течност - това е задължително, иначе плънката ще разкисне корите.",
        "Смесете добре изцедения спанак с фетата, яйцата, копъра, магданоза, солта и черния пипер.",
        "Наредете листове кори в тава, намазвайки всеки с разтопено масло.",
        "Разпределете спанаковата плънка върху корите, после покрийте с още намазани с масло кори.",
        "Нарежете леко горния слой и печете на 190°C 35-40 минути до златисто.",
      ],
      ingredients: [
        "450 г пресен спанак, нарязан",
        "1 лук, нарязан на кубчета",
        "1 чаша натрошена фета",
        "2 яйца",
        "1/4 чаша пресен копър, нарязан",
        "2 с.л. пресен магданоз, нарязан",
        "1 пакет кори за баница",
        "1/2 чаша разтопено масло",
        "Сол и черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "greek-lemon-chicken-souvlaki",
      title: "Greek Lemon Chicken Souvlaki",
      description:
        "Skewered chicken marinated for hours in lemon, garlic, oregano, and white wine, grilled hot until charred - the char is what makes it taste like real souvlaki, not just grilled chicken.",
      imageEmoji: "🍗",
      cookTimeMinutes: 60,
      servings: 4,
      ingredients: [
        { text: "2 chicken breasts, cubed", ingredient: "chicken breast", quantity: 2 },
        { text: "1/4 cup olive oil", ingredient: "olive oil", quantity: 0.25 },
        { text: "1 lemon, juiced", ingredient: "lemon", quantity: 1 },
        { text: "2 tbsp white wine", ingredient: "white wine", quantity: 2 },
        { text: "3 cloves garlic, minced", ingredient: "garlic", quantity: 3 },
        { text: "1 tbsp dried oregano", ingredient: "oregano", quantity: 1 },
        { text: "1/2 tsp black pepper", ingredient: "pepper", quantity: 0.5 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Whisk together the olive oil, lemon juice, white wine, garlic, oregano, pepper, and salt until emulsified.",
        "Marinate the chicken cubes in the mixture, covered, in the fridge for at least 2 hours, ideally 4-6.",
        "Thread the chicken onto skewers.",
        "Grill over high heat, turning occasionally, until cooked through and charred in spots - the char is essential to real souvlaki flavor.",
      ],
      tags: ["dinner", "mediterranean", "quick"],
    },
    bg: {
      title: "Гръцко пилешко сувлаки с лимон",
      description:
        "Пиле на шиш, мариновано с часове в лимон, чесън, риган и бяло вино, изпечено на силен огън до овъгляне - овъгляването е това, което придава истинския вкус на сувлаки, не просто на печено пиле.",
      steps: [
        "Разбийте зехтина, лимоновия сок, бялото вино, чесъна, ригана, черния пипер и солта до емулгиране.",
        "Маринова пилешките кубчета в сместа, покрити, в хладилника поне 2 часа, в идеалния случай 4-6.",
        "Наредете пилето на шишчета.",
        "Изпечете на скара на силен огън, обръщайки от време на време, до готовност и леко овъгляне - овъгляването е задължително за истинския вкус на сувлаки.",
      ],
      ingredients: [
        "2 пилешки гърди, нарязани на кубчета",
        "1/4 чаша зехтин",
        "сок от 1 лимон",
        "2 с.л. бяло вино",
        "3 скилидки чесън, ситно нарязани",
        "1 с.л. сух риган",
        "1/2 ч.л. черен пипер",
        "Сол на вкус",
      ],
    },
  },
  {
    en: {
      slug: "baklava",
      title: "Baklava",
      description:
        "Layers of crisp phyllo and cinnamon-walnuts, soaked in a citrus-honey syrup poured cold over the hot baklava straight from the oven - the temperature contrast is what keeps the layers crisp instead of soggy.",
      imageEmoji: "🍯",
      cookTimeMinutes: 70,
      servings: 12,
      ingredients: [
        { text: "1 package phyllo dough", ingredient: "phyllo dough", quantity: 1 },
        { text: "2 cups chopped walnuts", ingredient: "walnuts", quantity: 2 },
        { text: "1 cup melted butter", ingredient: "butter", quantity: 1 },
        { text: "1 cup sugar", ingredient: "sugar", quantity: 1 },
        { text: "1/2 cup honey", ingredient: "honey", quantity: 0.5 },
        { text: "1 tsp cinnamon", ingredient: "cinnamon", quantity: 1 },
        { text: "1 cup water", ingredient: "water", quantity: 1 },
        { text: "Peel of 1 lemon (a few strips, no pith)", ingredient: "lemon peel", quantity: null },
      ],
      steps: [
        "Make the syrup first so it has time to cool: simmer the sugar, honey, water, and lemon peel for 10 minutes, then remove the peel and let the syrup cool completely (or refrigerate).",
        "Mix the chopped walnuts with cinnamon.",
        "Layer sheets of phyllo in a baking dish, brushing each with melted butter, then sprinkle with the walnut mixture every few layers.",
        "Cut into diamond shapes before baking at 350°F for 45 minutes until golden.",
        "Pour the cold syrup evenly over the hot baklava as soon as it comes out of the oven - the temperature contrast is what keeps the phyllo crisp instead of turning soggy - and let it soak in before serving.",
      ],
      tags: ["dessert", "mediterranean", "baking"],
    },
    bg: {
      title: "Баклава",
      description:
        "Пластове хрупкави кори и орехи с канела, напоени в цитрусово-меден сироп, изсипан студен върху горещата баклава направо от фурната - температурният контраст е това, което пази пластовете хрупкави, вместо да ги разкисва.",
      steps: [
        "Направете сиропа първо, за да има време да изстине: варете захарта, меда, водата и лимоновата кора 10 минути, после извадете кората и оставете сиропа да изстине напълно (или го охладете в хладилник).",
        "Смесете нарязаните орехи с канела.",
        "Наредете листове кори в тава, намазвайки всеки с разтопено масло, после поръсвайте с ореховата смес на всеки няколко пласта.",
        "Нарежете на форма на ромбчета преди печене на 180°C 45 минути до златисто.",
        "Изсипете студения сироп равномерно върху горещата баклава веднага щом излезе от фурната - температурният контраст е това, което пази корите хрупкави, вместо да разкисне - и оставете да се напои преди сервиране.",
      ],
      ingredients: [
        "1 пакет кори за баница",
        "2 чаши нарязани орехи",
        "1 чаша разтопено масло",
        "1 чаша захар",
        "1/2 чаша мед",
        "1 ч.л. канела",
        "1 чаша вода",
        "Кора от 1 лимон (няколко ленти, без бялото)",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
