import { prisma, runTranslations } from "./translate-lib.mjs";

// New recipes (not updates) - each was web-researched for authentic
// technique before writing, per standing instructions: chicken parmesan
// (pan-fry before baking), New York cheesecake (two-temperature bake, no
// water bath, oven-cooldown), churros (egg-free Spanish dough, star tip).
const newRecipes = [
  {
    slug: "chicken-parmesan",
    title: "Chicken Parmesan",
    description:
      "Chicken cutlets pounded thin, breaded in seasoned panko, and pan-fried in oil until golden before finishing in the oven with marinara and mozzarella - pan-frying first is what gives real chicken parmesan its crisp crust instead of the softer crust baking alone produces.",
    imageEmoji: "🍗",
    cookTimeMinutes: 40,
    servings: 4,
    ingredients: [
      { text: "4 boneless, skinless chicken breasts, pounded thin", ingredient: "chicken breast", quantity: 4 },
      { text: "1 cup flour", ingredient: "flour", quantity: 1 },
      { text: "2 eggs, beaten", ingredient: "eggs", quantity: 2 },
      { text: "1 1/2 cups panko breadcrumbs", ingredient: "panko breadcrumbs", quantity: 1.5 },
      { text: "1/2 cup grated Parmesan (for breading)", ingredient: "parmesan", quantity: 0.5 },
      { text: "1 tsp garlic powder", ingredient: "garlic powder", quantity: 1 },
      { text: "Salt to taste", ingredient: "salt", quantity: null },
      { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      { text: "1/2 cup vegetable oil, for frying", ingredient: "vegetable oil", quantity: 0.5 },
      { text: "2 cups marinara sauce", ingredient: "marinara sauce", quantity: 2 },
      { text: "1 1/2 cups shredded mozzarella", ingredient: "mozzarella", quantity: 1.5 },
      { text: "1/4 cup grated Parmesan (for topping)", ingredient: "parmesan", quantity: 0.25 },
    ],
    steps: [
      "Preheat oven to 400°F.",
      "Set up a breading station: flour in one dish, beaten eggs in another, and panko mixed with Parmesan, garlic powder, salt, and pepper in a third.",
      "Dredge each chicken cutlet in flour, then egg, then press into the panko mixture to coat evenly.",
      "Heat the oil in a large skillet over medium-high heat and fry the cutlets for 2-3 minutes per side until golden - pan-frying first is what gives the crust its crispness, since the chicken only needs to brown here, not cook through.",
      "Transfer the cutlets to a baking dish, top each with marinara sauce, mozzarella, and Parmesan.",
      "Bake for 15-20 minutes until the chicken is cooked through and the cheese is melted and bubbly.",
    ],
    tags: ["dinner", "italian"],
    bg: {
      title: "Пилешко пармиджана",
      description:
        "Пилешки котлети, разбити тънко, панирани в подправена панко галета и запържени в тиган до златисто, преди да се довършат във фурната с доматен сос и моцарела - запържването първо е това, което дава на истинското пилешко пармиджана хрупкавата коричка, вместо по-мекия резултат само от печене.",
      steps: [
        "Загрейте фурната на 200°C.",
        "Подгответе станция за паниране: брашно в едно блюдо, разбити яйца в друго, и панко галета, смесена с пармезан, чеснов прах, сол и черен пипер в трето.",
        "Обваляйте всеки пилешки котлет в брашно, после в яйце, после притиснете в панко сместа за равномерно покритие.",
        "Загрейте олиото в голям тиган на среден-силен огън и запържете котлетите по 2-3 минути от всяка страна до златисто - запържването първо е това, което дава хрупкавата коричка, тъй като пилето трябва само да се зачерви тук, не да се сготви напълно.",
        "Прехвърлете котлетите в тава за печене, отгоре сложете доматен сос, моцарела и пармезан върху всеки.",
        "Печете 15-20 минути, докато пилето се сготви напълно и сиренето се разтопи и запени.",
      ],
      ingredients: [
        "4 пилешки гърди без кости и кожа, разбити тънко",
        "1 чаша брашно",
        "2 яйца, разбити",
        "1 1/2 чаши панко галета",
        "1/2 чаша настърган пармезан (за панирането)",
        "1 ч.л. чеснов прах",
        "Сол на вкус",
        "Черен пипер на вкус",
        "1/2 чаша олио за пържене",
        "2 чаши доматен сос",
        "1 1/2 чаши настъргана моцарела",
        "1/4 чаша настърган пармезан (за отгоре)",
      ],
    },
  },
  {
    slug: "new-york-cheesecake",
    title: "New York Cheesecake",
    description:
      "Dense, creamy cheesecake baked with a blast of high heat before dropping to a low finish, then cooled inside the turned-off oven - that two-temperature bake, not a water bath, is the real New York technique, and skipping the oven-cooldown is why so many cheesecakes sink or crack.",
    imageEmoji: "🍰",
    cookTimeMinutes: 100,
    servings: 12,
    ingredients: [
      { text: "1 1/2 cups graham cracker crumbs", ingredient: "graham crackers", quantity: 1.5 },
      { text: "6 tbsp melted butter", ingredient: "butter", quantity: 6 },
      { text: "2 tbsp sugar (for the crust)", ingredient: "sugar", quantity: 2 },
      { text: "4 (8 oz) packages cream cheese, softened", ingredient: "cream cheese", quantity: 4 },
      { text: "1 1/4 cups sugar (for the filling)", ingredient: "sugar", quantity: 1.25 },
      { text: "1/4 cup sour cream", ingredient: "sour cream", quantity: 0.25 },
      { text: "1 tbsp lemon juice", ingredient: "lemon juice", quantity: 1 },
      { text: "1 tsp vanilla extract", ingredient: "vanilla extract", quantity: 1 },
      { text: "4 eggs", ingredient: "eggs", quantity: 4 },
    ],
    steps: [
      "Preheat oven to 450°F. Mix the graham cracker crumbs, melted butter, and 2 tbsp sugar, then press firmly into the bottom of a 9-inch springform pan. Bake for 8-10 minutes, then set aside.",
      "Beat the cream cheese and 1 1/4 cups sugar until smooth, then mix in the sour cream, lemon juice, and vanilla.",
      "Add the eggs one at a time, mixing on low speed just until combined after each - overmixing once the eggs go in is what beats air into the batter that later causes cracks.",
      "Pour the filling over the crust and bake at 450°F for 10 minutes, then, without opening the oven, reduce the temperature to 225°F and continue baking for 55-65 minutes until the center is just set with a slight jiggle - the initial high-heat blast followed by a long, low finish is the real New York technique, not a water bath.",
      "Turn off the oven and let the cheesecake sit inside with the door closed for 1 hour - this slow cooldown is what keeps the top from sinking or cracking as it cools.",
      "Chill in the refrigerator for at least 4 hours, ideally overnight, before releasing from the pan and serving.",
    ],
    tags: ["dessert", "vegetarian", "baking"],
    bg: {
      title: "Нюйоркски чийзкейк",
      description:
        "Плътен, кремообразен чийзкейк, изпечен с първоначален удар на силна топлина, после понижен на слаба до готовност, и охладен вътре в изключената фурна - тази техника на две температури, а не водна баня, е истинската нюйоркска техника, а пропускането на изстиването във фурната е причината толкова много чийзкейкове да хлътнат или напукат.",
      steps: [
        "Загрейте фурната на 230°C. Смесете галета от греъм крекери, разтопеното масло и 2 с.л. захар, после притиснете плътно на дъното на кръгла форма с пружина 23 см. Печете 8-10 минути, после оставете настрана.",
        "Разбийте крема сиренето и 1 1/4 чаши захар до гладкост, после разбъркайте заквасената сметана, лимоновия сок и ванилията.",
        "Добавете яйцата едно по едно, разбърквайки на слаба скорост само до смесване след всяко - прекомерното разбъркване след добавянето на яйцата е това, което вкарва въздух в сместа, който по-късно причинява пукнатини.",
        "Изсипете пълнежа върху коричката и печете на 230°C 10 минути, после, без да отваряте фурната, намалете температурата на 110°C и продължете да печете 55-65 минути, докато центърът е леко стегнат с лек трепет - първоначалният удар на силна топлина, последван от дълго довършване на слаба, е истинската нюйоркска техника, а не водна баня.",
        "Изключете фурната и оставете чийзкейка вътре със затворена вратичка за 1 час - това бавно изстиване е това, което пази горната част от хлътване или напукване, докато изстива.",
        "Охладете в хладилника поне 4 часа, най-добре през нощта, преди да освободите от формата и сервирате.",
      ],
      ingredients: [
        "1 1/2 чаши галета от греъм крекери",
        "6 с.л. разтопено масло",
        "2 с.л. захар (за коричката)",
        "4 пакета (по 225 г) крема сирене, омекнало",
        "1 1/4 чаши захар (за пълнежа)",
        "1/4 чаша заквасена сметана",
        "1 с.л. лимонов сок",
        "1 ч.л. екстракт от ванилия",
        "4 яйца",
      ],
    },
  },
  {
    slug: "churros",
    title: "Churros",
    description:
      "Spanish-style fried dough made from just flour, water, and salt - no eggs, no butter, no baking powder - piped through a star tip for the classic ridges and fried until crisp, then rolled in cinnamon sugar. Egg-enriched dough is a common shortcut, but it's what makes homemade churros taste more like a doughnut than the real, denser street-cart version.",
    imageEmoji: "🍩",
    cookTimeMinutes: 30,
    servings: 6,
    ingredients: [
      { text: "1 cup water", ingredient: "water", quantity: 1 },
      { text: "2 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 2 },
      { text: "1/2 tsp salt", ingredient: "salt", quantity: 0.5 },
      { text: "1 cup flour", ingredient: "flour", quantity: 1 },
      { text: "4 cups vegetable oil, for frying", ingredient: "vegetable oil", quantity: 4 },
      { text: "1/2 cup sugar", ingredient: "sugar", quantity: 0.5 },
      { text: "1 tbsp cinnamon", ingredient: "cinnamon", quantity: 1 },
      { text: "4 oz dark chocolate, chopped", ingredient: "dark chocolate", quantity: 4 },
      { text: "1/2 cup heavy cream", ingredient: "heavy cream", quantity: 0.5 },
    ],
    steps: [
      "Combine the water, 2 tbsp oil, and salt in a saucepan and bring to a boil.",
      "Remove from heat and stir in the flour all at once, beating vigorously until it forms a smooth, thick dough that pulls away from the sides of the pan - this dough is deliberately plain, with no egg or butter, which is what gives real Spanish churros their dense, chewy bite instead of a lighter, doughnut-like crumb.",
      "Let the dough cool for a few minutes, then transfer to a piping bag fitted with a large star tip - the star tip is what creates the ridges that make churros crisp up properly in the oil.",
      "Heat the frying oil in a deep, heavy pot to 350°F. Pipe 4-5 inch lengths of dough directly into the hot oil, cutting with scissors or a knife, and fry for 2-3 minutes per side until deep golden and cooked through.",
      "Drain on paper towels, then toss immediately in the combined sugar and cinnamon while still warm.",
      "For the dipping sauce, heat the cream until just simmering, then pour over the chopped chocolate and let sit for 1 minute before stirring until smooth. Serve alongside the churros.",
    ],
    tags: ["dessert", "vegetarian"],
    bg: {
      title: "Чурос",
      description:
        "Испански пържено тесто само от брашно, вода и сол - без яйца, без масло, без бакпулвер - изпомпано през звездовиден накрайник за класическите жлебове и изпържено до хрупкаво, после овалено в канела и захар. Обогатеното с яйца тесто е често срещана пряка пътека, но истинската, по-плътна улична версия е точно това, което истинските домашни чурос трябва да имат вместо вкус на понички.",
      steps: [
        "Съберете водата, 2 с.л. олио и солта в тенджера и оставете да заври.",
        "Свалете от котлона и разбъркайте брашното наведнъж, разбивайки енергично, докато се образува гладко, гъсто тесто, което се отделя от стените на тенджерата - това тесто е нарочно просто, без яйце или масло, което е това, което дава на истинските испански чурос тяхната плътна, дъвчаща хапка, вместо по-лека, подобна на поничка структура.",
        "Оставете тестото да изстине за няколко минути, после прехвърлете в пош с голям звездовиден накрайник - звездовидният накрайник е това, което създава жлебовете, позволяващи на чуросите правилно да се изпържат хрупкаво.",
        "Загрейте олиото за пържене в дълбока, тежка тенджера до 175°C. Изпомпайте парчета тесто с дължина 10-12 см директно в горещото олио, отрязвайки с ножица или нож, и пържете 2-3 минути от всяка страна до дълбоко златисто и напълно сготвени.",
        "Отцедете върху хартиени кърпи, после веднага овалайте в смесените захар и канела, докато са още топли.",
        "За соса за топене, загрейте сметаната до леко къкрене, после изсипете върху нарязания шоколад и оставете за 1 минута, преди да разбъркате до гладкост. Сервирайте заедно с чуросите.",
      ],
      ingredients: [
        "1 чаша вода",
        "2 с.л. олио",
        "1/2 ч.л. сол",
        "1 чаша брашно",
        "4 чаши олио за пържене",
        "1/2 чаша захар",
        "1 с.л. канела",
        "115 г тъмен шоколад, нарязан",
        "1/2 чаша течна сметана",
      ],
    },
  },
];

async function main() {
  for (const recipe of newRecipes) {
    const created = await prisma.recipe.create({
      data: {
        slug: recipe.slug,
        title: recipe.title,
        description: recipe.description,
        imageEmoji: recipe.imageEmoji,
        cookTimeMinutes: recipe.cookTimeMinutes,
        servings: recipe.servings,
        steps: JSON.stringify(recipe.steps),
        tags: JSON.stringify(recipe.tags),
      },
    });

    for (let i = 0; i < recipe.ingredients.length; i++) {
      const { text, ingredient, quantity } = recipe.ingredients[i];
      const ingredientRow = await prisma.ingredient.upsert({
        where: { name: ingredient },
        update: {},
        create: { name: ingredient },
      });
      await prisma.recipeIngredient.create({
        data: {
          recipeId: created.id,
          ingredientId: ingredientRow.id,
          displayText: text,
          quantity,
          position: i,
        },
      });
    }
    console.log(`Created ${recipe.slug}`);
  }
  console.log(`Created ${newRecipes.length} recipes total.`);

  // runTranslations disconnects prisma when done, so it must run last.
  await runTranslations(newRecipes.map((r) => ({ slug: r.slug, ...r.bg })));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
