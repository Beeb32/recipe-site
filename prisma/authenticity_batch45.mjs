import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "cornbread",
      title: "Cornbread",
      description:
        "Southern-style buttermilk cornbread baked in a preheated cast-iron skillet with sizzling fat - no sugar, since that turns it into cornmeal cake rather than the savory bread Southern cornbread actually is.",
      imageEmoji: "🌽",
      cookTimeMinutes: 35,
      servings: 8,
      ingredients: [
        { text: "1 1/2 cups cornmeal", ingredient: "cornmeal", quantity: 1.5 },
        { text: "1/2 cup flour", ingredient: "flour", quantity: 0.5 },
        { text: "1 tbsp baking powder", ingredient: "baking powder", quantity: 1 },
        { text: "1/2 tsp baking soda", ingredient: "baking soda", quantity: 0.5 },
        { text: "1 tsp salt", ingredient: "salt", quantity: 1 },
        { text: "1 1/2 cups buttermilk", ingredient: "buttermilk", quantity: 1.5 },
        { text: "1 egg", ingredient: "eggs", quantity: 1 },
        { text: "3 tbsp butter (or bacon grease for a more traditional Southern crust)", ingredient: "butter", quantity: 3 },
      ],
      steps: [
        "Preheat the oven to 450°F with a cast-iron skillet inside.",
        "Whisk together the cornmeal, flour, baking powder, and salt.",
        "Whisk the buttermilk, egg, and baking soda together in another bowl - the soda should fizz slightly when it hits the buttermilk - then combine with the dry ingredients.",
        "Carefully remove the hot skillet from the oven, add the butter (or bacon grease), and swirl to coat; you should hear it sizzle - that sizzle is what gives cornbread its crisp, golden crust.",
        "Pour the batter into the hot skillet and bake for 20-25 minutes until golden and a toothpick comes out clean.",
      ],
      tags: ["dinner", "baking", "vegetarian"],
    },
    bg: {
      title: "Царевичен хляб",
      description:
        "Царевичен хляб в южен стил с мътеница, изпечен в предварително загрят чугунен тиган с цвъртяща мазнина - без захар, защото тя го превръща в царевичен кекс, а не в солен хляб, какъвто южното царевично хлебче всъщност е.",
      steps: [
        "Загрейте фурната на 230°C с чугунен тиган вътре.",
        "Разбъркайте царевичното брашно, брашното, бакпулвера и солта.",
        "Разбийте мътеницата, яйцето и содата за хляб в друга купа - содата трябва леко да зацвърти, щом докосне мътеницата - после смесете със сухите съставки.",
        "Внимателно извадете горещия тиган от фурната, добавете маслото (или мазнината от бекон) и разклатете, за да покрие дъното; трябва да чуете съскане - това съскане е това, което придава на царевичния хляб хрупкавата му златиста коричка.",
        "Изсипете тестото в горещия тиган и печете 20-25 минути до златисто, докато клечка за зъби излезе чиста.",
      ],
      ingredients: [
        "1 1/2 чаши царевично брашно",
        "1/2 чаша бяло брашно",
        "1 с.л. бакпулвер",
        "1/2 ч.л. сода за хляб",
        "1 ч.л. сол",
        "1 1/2 чаши мътеница",
        "1 яйце",
        "3 с.л. масло (или мазнина от бекон за по-традиционна южна коричка)",
      ],
    },
  },
  {
    en: {
      slug: "key-lime-pie",
      title: "Key Lime Pie",
      description:
        "Graham cracker crust pre-baked before filling, key lime custard baked until just set, topped with fresh whipped cream just before serving - baking the crust first keeps it from turning soggy, and real key lime juice (not standard lime) gives the tart, floral flavor the pie is named for.",
      imageEmoji: "🥧",
      cookTimeMinutes: 240,
      servings: 8,
      ingredients: [
        { text: "1 1/2 cups graham cracker crumbs", ingredient: "graham crackers", quantity: 1.5 },
        { text: "2 tbsp sugar", ingredient: "sugar", quantity: 2 },
        { text: "6 tbsp melted butter", ingredient: "butter", quantity: 6 },
        { text: "3 egg yolks", ingredient: "egg yolks", quantity: 3 },
        { text: "1 can sweetened condensed milk", ingredient: "condensed milk", quantity: 1 },
        { text: "1/2 cup key lime juice", ingredient: "lime juice", quantity: 0.5 },
        { text: "1 tsp lime zest", ingredient: "lime zest", quantity: 1 },
        { text: "1 cup heavy cream", ingredient: "heavy cream", quantity: 1 },
        { text: "2 tbsp powdered sugar", ingredient: "powdered sugar", quantity: 2 },
      ],
      steps: [
        "Preheat oven to 350°F and mix the graham cracker crumbs, sugar, and melted butter.",
        "Press the mixture into a pie dish and pre-bake for 8 minutes to set the crust and keep it from turning soggy, then cool slightly.",
        "Whisk together the egg yolks, condensed milk, key lime juice, and lime zest until smooth - real key lime juice is what gives the pie its distinctive tart, floral flavor, not standard lime juice.",
        "Pour the filling into the warm crust and bake for 15 minutes until just set.",
        "Chill for at least 3 hours.",
        "Whip the cream with the powdered sugar to medium peaks and spread or pipe over the pie just before serving, so it doesn't turn runny.",
      ],
      tags: ["dessert", "baking"],
    },
    bg: {
      title: "Пай с лайм",
      description:
        "Коричка от бисквити грахам, препечена предварително преди плънката, крем от лайм, изпечен до леко стягане, покрит с прясна разбита сметана точно преди сервиране - предварителното печене на коричката я пази да не се разкисне, а истинският сок от лайм кий (не обикновен лайм) придава киселия, ароматен вкус, на който пая е кръстен.",
      steps: [
        "Загрейте фурната на 180°C и смесете натрошените бисквити грахам, захарта и разтопеното масло.",
        "Наблъскайте сместа в тава за пай и препечете предварително 8 минути, за да се стегне коричката и да не се разкисне, после оставете да поизстине.",
        "Разбийте жълтъците, кондензираното мляко, лаймовия сок и лаймовата кора до гладкост - истинският сок от лайм кий е това, което придава на пая характерния му кисел, ароматен вкус, не обикновеният лаймов сок.",
        "Изсипете плънката в топлата коричка и печете 15 минути до леко стягане.",
        "Охладете поне 3 часа.",
        "Разбийте сметаната с пудрата захар до средно твърди връхчета и я разпределете или изсипете отгоре на пая точно преди сервиране, за да не се разтече.",
      ],
      ingredients: [
        "1 1/2 чаши натрошени бисквити грахам",
        "2 с.л. захар",
        "6 с.л. разтопено масло",
        "3 жълтъка",
        "1 консерва кондензирано мляко",
        "1/2 чаша сок от лайм кий",
        "1 ч.л. лаймова кора",
        "1 чаша сметана за разбиване",
        "2 с.л. пудра захар",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
