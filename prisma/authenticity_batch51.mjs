import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "huevos-rancheros",
      title: "Huevos Rancheros",
      description:
        "Lightly fried corn tortillas topped with fried eggs and a cooked salsa ranchera of charred tomato, onion, garlic, and jalapeño - the cooked ranchera sauce, not jarred salsa, is what real huevos rancheros is built on, finished with crumbled cotija and avocado.",
      imageEmoji: "🌶️",
      cookTimeMinutes: 35,
      servings: 4,
      ingredients: [
        { text: "4 corn tortillas", ingredient: "corn tortillas", quantity: 4 },
        { text: "4 eggs", ingredient: "eggs", quantity: 4 },
        { text: "1 can black beans, drained (or refried beans)", ingredient: "black beans", quantity: 1 },
        { text: "3 tomatoes", ingredient: "tomato", quantity: 3 },
        { text: "1/2 onion", ingredient: "onion", quantity: 0.5 },
        { text: "2 cloves garlic", ingredient: "garlic", quantity: 2 },
        { text: "1 jalapeño, seeded", ingredient: "jalapeno", quantity: 1 },
        { text: "3 tbsp vegetable oil (divided)", ingredient: "vegetable oil", quantity: 3 },
        { text: "1/2 cup crumbled cotija cheese (or queso fresco)", ingredient: "cotija cheese", quantity: 0.5 },
        { text: "1/4 cup chopped cilantro", ingredient: "cilantro", quantity: 0.25 },
        { text: "1 avocado, sliced", ingredient: "avocado", quantity: 1 },
      ],
      steps: [
        "Char the tomatoes, onion, garlic, and jalapeño in a dry skillet or under the broiler until blackened in spots, then blend into a chunky sauce.",
        "Heat 1 tbsp of the oil and fry the blended sauce for 5 minutes until it darkens slightly and thickens - this \"sofrito\" step removes the raw edge and builds depth.",
        "Warm the black beans in a small saucepan.",
        "Fry the tortillas briefly in the remaining oil, just 20-30 seconds per side until lightly crisp but still pliable, then set on plates.",
        "Fry the eggs sunny-side up in the same pan.",
        "Top each tortilla with beans, a fried egg, the warm ranchera sauce, cotija, cilantro, and avocado.",
      ],
      tags: ["breakfast", "mexican", "vegetarian"],
    },
    bg: {
      title: "Уевос Ранчерос",
      description:
        "Леко изпържени царевични тортили, покрити с пържени яйца и сготвен сос ранчера от овъглен домат, лук, чесън и халапеньо - сготвеният сос ранчера, не консервирана салса, е това, върху което е изградено истинското уевос ранчерос, довършено с натрошено сирене котиха и авокадо.",
      steps: [
        "Овъглете доматите, лука, чесъна и халапенято в сух тиган или под грила, докато почернеят на места, после ги пасирайте в сос на бучки.",
        "Загрейте 1 с.л. от олиото и запържете пасирания сос 5 минути, докато леко потъмнее и се сгъсти - тази стъпка \"софрито\" премахва суровия вкус и изгражда дълбочина.",
        "Затоплете черния боб в малка тенджерка.",
        "Изпържете тортилите за кратко в останалото олио, само по 20-30 секунди от всяка страна, докато станат леко хрупкави, но останат меки, после наредете в чинии.",
        "Изпържете яйцата на очи в същия тиган.",
        "Отгоре на всяка тортила сложете боб, пържено яйце, топлия сос ранчера, котиха, кориандър и авокадо.",
      ],
      ingredients: [
        "4 царевични тортили",
        "4 яйца",
        "1 консерва черен боб, отцеден (или пюре от боб)",
        "3 домата",
        "1/2 лук",
        "2 скилидки чесън",
        "1 халапеньо, без семки",
        "3 с.л. олио (разделено)",
        "1/2 чаша натрошено сирене котиха (или сирене фреско)",
        "1/4 чаша нарязан кориандър",
        "1 авокадо, нарязано на резени",
      ],
    },
  },
  {
    en: {
      slug: "dutch-baby-pancake",
      title: "Dutch Baby Pancake",
      description:
        "A puffy, oven-baked pancake risen by steam from a hot cast-iron skillet, finished with lemon juice and powdered sugar - the classic topping, which most simplified versions leave off entirely.",
      imageEmoji: "🥞",
      cookTimeMinutes: 30,
      servings: 4,
      ingredients: [
        { text: "3 eggs", ingredient: "eggs", quantity: 3 },
        { text: "1/2 cup flour", ingredient: "flour", quantity: 0.5 },
        { text: "1/2 cup milk", ingredient: "milk", quantity: 0.5 },
        { text: "1/2 tsp vanilla extract", ingredient: "vanilla extract", quantity: 0.5 },
        { text: "1/4 tsp salt", ingredient: "salt", quantity: 0.25 },
        { text: "3 tbsp butter", ingredient: "butter", quantity: 3 },
        { text: "2 tbsp powdered sugar, for topping", ingredient: "powdered sugar", quantity: 2 },
        { text: "1 lemon, cut into wedges, for topping", ingredient: "lemon", quantity: 1 },
      ],
      steps: [
        "Preheat oven to 425°F with a cast-iron skillet inside.",
        "Blend the eggs, flour, milk, vanilla, and salt until smooth, then let the batter rest for 15-20 minutes.",
        "Carefully remove the hot skillet, melt the butter in it, then pour in the batter.",
        "Bake for 18-20 minutes until puffed dramatically and golden - the hot skillet and whipped batter are what create the steam that makes it rise.",
        "Serve immediately, dusted with powdered sugar and with lemon wedges to squeeze over the top.",
      ],
      tags: ["breakfast", "vegetarian"],
    },
    bg: {
      title: "Холандски бебешки палачинка",
      description:
        "Надута, печена във фурна палачинка, повдигната от парата на горещ чугунен тиган, довършена с лимонов сок и пудра захар - класическата гарнитура, която повечето опростени версии напълно пропускат.",
      steps: [
        "Загрейте фурната на 220°C с чугунен тиган вътре.",
        "Разбийте яйцата, брашното, млякото, ванилията и солта до гладкост, после оставете тестото да престои 15-20 минути.",
        "Внимателно извадете горещия тиган, разтопете маслото в него, после изсипете тестото.",
        "Печете 18-20 минути до драматично надуване и златисто - горещият тиган и разбитото тесто са това, което създава парата, която го кара да се надуе.",
        "Сервирайте веднага, поръсени с пудра захар и с резенчета лимон за изстискване отгоре.",
      ],
      ingredients: [
        "3 яйца",
        "1/2 чаша брашно",
        "1/2 чаша мляко",
        "1/2 ч.л. ванилия",
        "1/4 ч.л. сол",
        "3 с.л. масло",
        "2 с.л. пудра захар, за поръсване",
        "1 лимон, нарязан на резенчета, за поръсване",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
