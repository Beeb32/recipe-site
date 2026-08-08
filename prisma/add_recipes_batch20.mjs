import { prisma, runTranslations } from "./translate-lib.mjs";

// 5 of the most popular Japanese sando (sandwiches): Katsu, Tamago, Fruit,
// Yakisoba Pan, and Karaage. Each web-researched for authentic technique
// before writing, per standing instructions. Nutrition estimates are set
// directly here (caloriesPerServing/proteinG/carbsG/fatG), per standing
// instruction to never leave new recipes without nutrition.
const newRecipes = [
  {
    slug: "katsu-sando",
    title: "Katsu Sando",
    description:
      "Japan's crustless pork cutlet sandwich - a thin barrier of butter on the shokupan keeps the bread from turning soggy under the sauce, and pressing the sandwich under a light weight before slicing is what gives it that clean, magazine-cover cross-section.",
    imageEmoji: "🥪",
    cookTimeMinutes: 40,
    servings: 2,
    caloriesPerServing: 730,
    proteinG: 33,
    carbsG: 60,
    fatG: 38,
    ingredients: [
      { text: "2 boneless pork loin cutlets (about 5-6 oz / 150g each), pounded to even 1/2-inch thickness", ingredient: "pork loin", quantity: 2 },
      { text: "Salt and black pepper", ingredient: "salt", quantity: null },
      { text: "1/4 cup flour", ingredient: "flour", quantity: 0.25 },
      { text: "1 egg, beaten", ingredient: "egg", quantity: 1 },
      { text: "1 cup panko breadcrumbs", ingredient: "panko breadcrumbs", quantity: 1 },
      { text: "Neutral oil, for frying (about 1 inch deep)", ingredient: "vegetable oil", quantity: null },
      { text: "4 slices shokupan (Japanese milk bread), a day old if possible", ingredient: "shokupan", quantity: 4 },
      { text: "2 tbsp butter, softened", ingredient: "butter", quantity: 2 },
      { text: "1/4 cup tonkatsu sauce", ingredient: "tonkatsu sauce", quantity: 0.25 },
      { text: "1/2 cup very thinly shredded cabbage", ingredient: "cabbage", quantity: 0.5 },
    ],
    steps: [
      "Pound the pork cutlets to an even 1/2-inch thickness and season both sides with salt and pepper.",
      "Dredge each cutlet in flour, then beaten egg, then panko, pressing the panko on gently rather than packing it tight, for a light crust that stays crisp instead of dense.",
      "Heat oil to 340-350F (170-175C) in a deep skillet and fry the cutlets 3-4 minutes per side until deep golden brown and cooked through, then rest on a wire rack for a few minutes.",
      "Butter both sides of each slice of shokupan all the way to the edges - this thin fat barrier is what keeps the bread from turning soggy once the katsu and sauce go on.",
      "Brush the fried cutlets with tonkatsu sauce, then layer the shredded cabbage and the cutlet between two slices of buttered bread.",
      "Wrap each sandwich tightly in plastic wrap and set a light, flat weight on top for a few minutes - the standard technique for compressing the sandwich so it holds together and slices cleanly.",
      "Trim the crusts off with a sharp serrated knife and cut each sandwich in half.",
    ],
    tags: ["dinner", "japanese", "sandwich"],
    bg: {
      title: "Кацу Сандо",
      description: "Японски сандвич с панирано свинско без корички - тънък слой масло върху шокупана пази хляба да не омекне под соса, а притискането на сандвича с лек товар преди рязане му дава онзи чист, спретнат разрез.",
      steps: [
        "Разбийте свинските котлети до равномерна дебелина от 1.25 см и подправете от двете страни със сол и черен пипер.",
        "Овалявайте всеки котлет в брашно, после в разбито яйце, после в панко, притискайки панкото леко, а не плътно, за да остане коричката лека, а не плътна.",
        "Загрейте олио до 170-175°C в дълбок тиган и изпържете котлетите по 3-4 минути на страна до тъмно златисто и напълно сготвени, после ги оставете да починат на решетка за няколко минути.",
        "Намажете с масло двете страни на всяка филия шокупан чак до краищата - тази тънка мазна бариера пази хляба да не омекне, след като добавите кацуто и соса.",
        "Намажете изпържените котлети с сос тонкацу, после наредете нарязаното на тънко зеле и котлета между две намазани с масло филии.",
        "Увийте всеки сандвич плътно в стреч фолио и поставете лек, плосък товар отгоре за няколко минути - стандартната техника за притискане на сандвича, за да се държи заедно и да се реже чисто.",
        "Отрежете корите с остър назъбен нож и разрежете всеки сандвич наполовина.",
      ],
      ingredients: [
        "2 свински котлета без кост (около 150г всеки), разбити до равномерна дебелина от 1.25 см",
        "Сол и черен пипер",
        "1/4 чаша брашно",
        "1 яйце, разбито",
        "1 чаша панко галета",
        "Олио без мирис, за пържене (около 2.5 см дълбочина)",
        "4 филии шокупан (японски млечен хляб), за предпочитане отлежал един ден",
        "2 с.л. масло, омекнало",
        "1/4 чаша сос тонкацу",
        "1/2 чаша съвсем тънко нарязано зеле",
      ],
    },
  },
  {
    slug: "tamago-sando",
    title: "Tamago Sando",
    description:
      "Japan's convenience-store egg salad sandwich, made rich rather than chunky by mashing the yolks separately into the Kewpie mayonnaise first, then folding in the diced whites - the technique behind its famously creamy, almost custardy filling.",
    imageEmoji: "🥪",
    cookTimeMinutes: 30,
    servings: 2,
    caloriesPerServing: 470,
    proteinG: 15,
    carbsG: 36,
    fatG: 30,
    ingredients: [
      { text: "4 large eggs", ingredient: "eggs", quantity: 4 },
      { text: "3 tbsp Japanese (Kewpie) mayonnaise", ingredient: "kewpie mayonnaise", quantity: 3 },
      { text: "1 tsp heavy cream or milk", ingredient: "heavy cream", quantity: 1 },
      { text: "1/4 tsp sugar", ingredient: "sugar", quantity: 0.25 },
      { text: "Salt, to taste", ingredient: "salt", quantity: null },
      { text: "4 slices shokupan (Japanese milk bread)", ingredient: "shokupan", quantity: 4 },
      { text: "1 tbsp butter, softened", ingredient: "butter", quantity: 1 },
    ],
    steps: [
      "Bring a pot of water to a rolling boil, gently lower in the eggs, and simmer for 10 minutes for a fully set yolk, then transfer immediately to an ice bath to stop the cooking and make peeling easier.",
      "Peel the eggs, halve them, and pop out the yolks into a separate bowl, keeping the whites intact.",
      "Mash the yolks with the Kewpie mayonnaise, cream, sugar, and a pinch of salt until smooth - this yolk-forward base is what gives tamago sando its rich, almost custardy texture, rather than the chunkier egg salad most people expect.",
      "Dice the reserved egg whites and fold them gently into the yolk mixture, keeping some texture rather than mashing everything smooth.",
      "Butter both sides of the bread slices all the way to the edges to keep the filling from soaking in.",
      "Spread the egg filling generously and evenly on one slice of each sandwich pair, all the way to the edges, then top with the second slice.",
      "Wrap tightly and chill for at least 15 minutes before trimming the crusts and cutting in half - this firms the filling enough to cut clean, even slices.",
    ],
    tags: ["breakfast", "japanese", "sandwich"],
    bg: {
      title: "Тамаго Сандо",
      description: "Японският сандвич със салата от яйца, продаван в денонощните магазини - направен кремообразен, а не на бучки, като жълтъците се смачкват отделно с майонеза Kewpie първо, после белтъците се добавят нарязани на кубчета - техниката зад прочутото му кремообразно, почти на крем пълнеж.",
      steps: [
        "Кипнете тенджера с вода, спуснете внимателно яйцата и ги варете 10 минути за напълно сварен жълтък, после веднага ги прехвърлете в ледена вода, за да спрете варенето и да се белят по-лесно.",
        "Обелете яйцата, разрежете ги наполовина и извадете жълтъците в отделна купа, като запазите белтъците цели.",
        "Смачкайте жълтъците с майонезата Kewpie, сметаната, захарта и щипка сол до гладкост - тази основа от жълтъци е това, което дава на тамаго сандо неговата богата, почти кремообразна текстура, вместо познатата по-плътна салата от яйца.",
        "Нарежете запазените белтъци на кубчета и ги вмесете внимателно в жълтъчната смес, запазвайки известна текстура, вместо да разбъркате всичко до гладко.",
        "Намажете с масло двете страни на филиите хляб чак до краищата, за да не се напои пълнежът.",
        "Намажете пълнежа от яйца щедро и равномерно върху едната филия от всяка двойка, чак до краищата, после покрийте с втората филия.",
        "Увийте плътно и охладете поне 15 минути, преди да отрежете корите и да разрежете наполовина - това стяга пълнежа достатъчно, за да се реже чисто и равномерно.",
      ],
      ingredients: [
        "4 големи яйца",
        "3 с.л. японска майонеза (Kewpie)",
        "1 ч.л. течна сметана или мляко",
        "1/4 ч.л. захар",
        "Сол на вкус",
        "4 филии шокупан (японски млечен хляб)",
        "1 с.л. масло, омекнало",
      ],
    },
  },
  {
    slug: "fruit-sando",
    title: "Fruit Sando",
    description:
      "Japan's Instagram-famous fruit-and-cream sandwich - whipping the cream over an ice bath keeps it stable enough to hold the fruit's weight, and patting every piece of fruit bone-dry before assembly is what keeps the bread from turning soggy in the fridge.",
    imageEmoji: "🍓",
    cookTimeMinutes: 75,
    servings: 2,
    caloriesPerServing: 360,
    proteinG: 6,
    carbsG: 38,
    fatG: 20,
    ingredients: [
      { text: "1 cup heavy cream (36%+ fat)", ingredient: "heavy cream", quantity: 1 },
      { text: "2 tbsp sugar", ingredient: "sugar", quantity: 2 },
      { text: "4 slices thick-cut shokupan (Japanese milk bread)", ingredient: "shokupan", quantity: 4 },
      { text: "Assorted ripe but firm fruit (e.g. strawberries, kiwi, mandarin segments), sliced", ingredient: "mixed fruit", quantity: null },
    ],
    steps: [
      "Whip the heavy cream in a bowl set over an ice bath, adding the sugar partway through, until it holds firm, spreadable peaks - whipping over ice keeps the cream stable enough to hold the fruit's weight without weeping.",
      "Pat the fruit completely dry with paper towels; any surface moisture will make the cream slide and the bread go soggy.",
      "Spread whipped cream edge-to-edge on one slice of bread, then arrange the fruit in a single tight layer along the line where you plan to cut the sandwich in half, thinking ahead about how the cross-section will look once sliced.",
      "Fill the gaps between fruit pieces with more whipped cream so nothing shifts, then top with more cream and the second slice of bread, pressing gently to seal.",
      "Wrap the sandwich tightly in plastic wrap, marking your intended cut line on the wrap with a pen, and refrigerate for at least 1 hour.",
      "Unwrap and slice along the marked line with a sharp, clean knife, wiping the blade between cuts for a neat cross-section.",
    ],
    tags: ["dessert", "japanese", "sandwich"],
    bg: {
      title: "Плодов Сандо",
      description: "Прочутият в Instagram японски сандвич с плодове и крем - разбиването на сметаната над ледена баня я прави достатъчно стабилна, за да задържи тежестта на плодовете, а подсушаването на всяко парче плод до сухо преди сглобяване пази хляба да не омекне в хладилника.",
      steps: [
        "Разбийте течната сметана в купа, поставена над ледена баня, добавяйки захарта на етапи, докато стане плътна и намазваема - разбиването над лед пази сметаната достатъчно стабилна, за да задържи тежестта на плодовете, без да поддава.",
        "Подсушете плодовете напълно с кухненска хартия - всяка повърхностна влага ще накара сметаната да се плъзга, а хлябът да омекне.",
        "Намажете сметана от край до край върху едната филия хляб, после наредете плодовете в един плътен слой по линията, по която планирате да разрежете сандвича наполовина, като мислите предварително как ще изглежда разрезът.",
        "Запълнете празнините между парчетата плод с още сметана, за да не се местят, после добавете още сметана и втората филия хляб, притискайки леко, за да се затвори.",
        "Увийте сандвича плътно в стреч фолио, отбелязвайки линията на рязане върху фолиото с химикал, и охладете поне 1 час.",
        "Развийте и разрежете по отбелязаната линия с остър, чист нож, като бършете острието между отделните разрези за чист разрез.",
      ],
      ingredients: [
        "1 чаша течна сметана (36%+ масленост)",
        "2 с.л. захар",
        "4 дебели филии шокупан (японски млечен хляб)",
        "Разнообразни зрели, но твърди плодове (напр. ягоди, киви, резенчета мандарина), нарязани",
      ],
    },
  },
  {
    slug: "yakisoba-pan",
    title: "Yakisoba Pan",
    description:
      "Japan's stir-fried-noodle-stuffed-into-a-hot-dog-bun snack, sold in every bakery and konbini - the noodles get a quick steam under a lid to soften, then a fast, barely-stirred sear so they pick up a light char instead of turning mushy.",
    imageEmoji: "🥪",
    cookTimeMinutes: 30,
    servings: 2,
    caloriesPerServing: 540,
    proteinG: 16,
    carbsG: 70,
    fatG: 20,
    ingredients: [
      { text: "2 servings fresh chuka men (Chinese-style wheat noodles), or fresh ramen noodles", ingredient: "chuka men noodles", quantity: 2 },
      { text: "2 tbsp neutral oil", ingredient: "vegetable oil", quantity: 2 },
      { text: "1 cup thinly sliced cabbage", ingredient: "cabbage", quantity: 1 },
      { text: "1/2 carrot, julienned", ingredient: "carrot", quantity: 0.5 },
      { text: "1/4 onion, sliced", ingredient: "onion", quantity: 0.25 },
      { text: "2 tbsp water", ingredient: "water", quantity: 2 },
      { text: "Salt and pepper", ingredient: "salt", quantity: null },
      { text: "3 tbsp yakisoba sauce (or 1 tbsp each oyster sauce, soy sauce, Worcestershire sauce, ketchup, plus 1 tsp sugar and a few drops sesame oil)", ingredient: "yakisoba sauce", quantity: 3 },
      { text: "2 hot dog buns (koppe pan) or soft sub rolls", ingredient: "hot dog buns", quantity: 2 },
      { text: "1 tbsp butter, softened", ingredient: "butter", quantity: 1 },
      { text: "Aonori (dried green seaweed flakes) and pickled red ginger, for garnish", ingredient: "aonori", quantity: null },
    ],
    steps: [
      "Heat the oil in a large skillet or flat griddle over medium-high heat and add the cabbage, carrot, and onion, cooking until just starting to soften, about 2 minutes.",
      "Add the noodles and the water, cover, and let steam for about 2 minutes to loosen and soften the noodles without needing to separate them by hand.",
      "Uncover, season with a little salt and pepper, then raise the heat and stir-fry with minimal stirring for a couple of minutes so the noodles pick up a light char (koge) where they touch the pan, instead of steaming soft all over.",
      "Pour in the yakisoba sauce and toss to coat evenly, cooking another 1-2 minutes until the sauce clings to the noodles rather than pooling in the pan.",
      "Butter the insides of the buns and toast lightly in a dry pan or under the broiler until just golden.",
      "Stuff each bun generously with the hot noodles, letting some spill out the ends, and top with a sprinkle of aonori and a few strands of pickled red ginger.",
    ],
    tags: ["lunch", "japanese", "sandwich"],
    bg: {
      title: "Якисоба Пан",
      description: "Японска закуска от пържени юфка, натъпкани в хлебче за хот-дог, продавана във всяка пекарна и денонощен магазин - юфката се задушава за кратко под капак, за да омекне, после се запържва бързо, почти без разбъркване, за да хване лека коричка, вместо да омекне напълно.",
      steps: [
        "Загрейте олиото в голям тиган или плоска скара на средно силен огън и добавете зелето, моркова и лука, като готвите, докато леко омекнат, около 2 минути.",
        "Добавете юфката и водата, покрийте с капак и оставете да се задуши около 2 минути, за да омекне юфката, без да се налага да я разделяте на ръка.",
        "Отворете капака, подправете с малко сол и черен пипер, после усилете огъня и запържете, разбърквайки минимално за няколко минути, така че юфката да хване лека коричка там, където докосва тигана, вместо да омекне навсякъде.",
        "Изсипете соса за якисоба и разбъркайте да покрие равномерно, готвейки още 1-2 минути, докато сосът полепне по юфката, вместо да се събира в тигана.",
        "Намажете с масло вътрешността на хлебчетата и ги препечете леко в сух тиган или на грил, докато леко позлатеят.",
        "Натъпчете всяко хлебче щедро с горещата юфка, оставяйки малко да се подава от краищата, и поръсете с аонори и няколко нишки мариновани червени джинджифили.",
      ],
      ingredients: [
        "2 порции прясна чука мен юфка (китайски тип пшенична юфка) или прясна юфка за рамен",
        "2 с.л. олио без мирис",
        "1 чаша тънко нарязано зеле",
        "1/2 морков, нарязан на тънки ивици",
        "1/4 глава лук, нарязан",
        "2 с.л. вода",
        "Сол и черен пипер",
        "3 с.л. сос за якисоба (или по 1 с.л. стридов сос, соев сос, устърширски сос, кетчуп, плюс 1 ч.л. захар и няколко капки сусамово олио)",
        "2 хлебчета за хот-дог (копе пан) или меки продълговати хлебчета",
        "1 с.л. масло, омекнало",
        "Аонори (сушени зелени водорасли на люспи) и мариновани червени джинджифили, за гарнитура",
      ],
    },
  },
  {
    slug: "karaage-sando",
    title: "Karaage Sando",
    description:
      "Japan's fried-chicken sandwich, built on double-fried karaage - a first fry at a lower temperature to cook the meat through, then a second, hotter fry to shatter the crust, coated in potato starch rather than flour for its signature light, crackling texture.",
    imageEmoji: "🥪",
    cookTimeMinutes: 45,
    servings: 2,
    caloriesPerServing: 650,
    proteinG: 29,
    carbsG: 54,
    fatG: 32,
    ingredients: [
      { text: "1 lb boneless chicken thigh, cut into 1.5-inch pieces", ingredient: "chicken thigh", quantity: 1 },
      { text: "1 tbsp soy sauce", ingredient: "soy sauce", quantity: 1 },
      { text: "1 tbsp sake", ingredient: "sake", quantity: 1 },
      { text: "1 tsp grated ginger", ingredient: "ginger", quantity: 1 },
      { text: "1 tsp grated garlic", ingredient: "garlic", quantity: 1 },
      { text: "1/2 tsp sugar", ingredient: "sugar", quantity: 0.5 },
      { text: "1/2 cup potato starch (katakuriko), for coating", ingredient: "potato starch", quantity: 0.5 },
      { text: "Neutral oil, for deep-frying", ingredient: "vegetable oil", quantity: null },
      { text: "4 slices shokupan or 2 soft sandwich buns", ingredient: "shokupan", quantity: 4 },
      { text: "2 tbsp Japanese mayonnaise", ingredient: "kewpie mayonnaise", quantity: 2 },
      { text: "Shredded cabbage", ingredient: "cabbage", quantity: null },
      { text: "Tonkatsu sauce or a squeeze of lemon, to finish", ingredient: "tonkatsu sauce", quantity: null },
    ],
    steps: [
      "Toss the chicken thigh pieces with the soy sauce, sake, grated ginger, grated garlic, and sugar, and marinate for at least 20 minutes.",
      "Drain off excess marinade, then coat each piece thoroughly in potato starch, shaking off any excess - potato starch, not flour, is what gives karaage its distinctively light, shattering crust.",
      "Heat oil to 320F (160C) and fry the chicken in batches for about 3 minutes, just until cooked through, then remove to a rack.",
      "Raise the oil temperature to 375F (190C) and fry the chicken a second time, about 1 minute, until deeply golden and audibly crisp - this double fry is what separates real karaage from a single-fried cutlet.",
      "Spread Japanese mayonnaise on the bread, layer with shredded cabbage and the hot karaage, and drizzle with a little tonkatsu sauce or a squeeze of lemon.",
      "Close the sandwich, press gently, and cut in half to serve.",
    ],
    tags: ["dinner", "japanese", "sandwich"],
    bg: {
      title: "Караагe Сандо",
      description: "Японски сандвич с пържено пиле, изграден върху двойно пържено караагe - първо пържене при по-ниска температура, за да се сготви месото напълно, после второ, по-горещо пържене, за да се разбие коричката, панирано в картофено нишесте вместо брашно за характерната лека, хрупкава текстура.",
      steps: [
        "Разбъркайте парчетата пилешко бутче със соевия сос, сакето, настъргания джинджифил, настъргания чесън и захарта и мариновайте поне 20 минути.",
        "Отцедете излишната марината, после овалявайте всяко парче старателно в картофено нишесте, отърсвайки излишъка - картофеното нишесте, а не брашното, е това, което дава на караагето характерната лека, хрупкава коричка.",
        "Загрейте олиото до 160°C и изпържете пилето на партиди около 3 минути, само докато се сготви напълно, после го извадете на решетка.",
        "Повишете температурата на олиото до 190°C и изпържете пилето втори път, около 1 минута, докато стане тъмно златисто и звучно хрупкаво - това двойно пържене е разликата между истинско караагe и еднократно пържен котлет.",
        "Намажете хляба с японска майонеза, наредете нарязано зеле и горещото караагe и полейте с малко сос тонкацу или няколко капки лимон.",
        "Затворете сандвича, притиснете леко и разрежете наполовина за сервиране.",
      ],
      ingredients: [
        "450г пилешко бутче без кост, нарязано на парчета от 4 см",
        "1 с.л. соев сос",
        "1 с.л. саке",
        "1 ч.л. настърган джинджифил",
        "1 ч.л. настърган чесън",
        "1/2 ч.л. захар",
        "1/2 чаша картофено нишесте (катакурико), за паниране",
        "Олио без мирис, за дълбоко пържене",
        "4 филии шокупан или 2 меки хлебчета за сандвичи",
        "2 с.л. японска майонеза",
        "Нарязано зеле",
        "Сос тонкацу или няколко капки лимон, за финал",
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
        caloriesPerServing: recipe.caloriesPerServing,
        proteinG: recipe.proteinG,
        carbsG: recipe.carbsG,
        fatG: recipe.fatG,
      },
    });

    for (let i = 0; i < recipe.ingredients.length; i++) {
      const ing = recipe.ingredients[i];
      const ingredient = await prisma.ingredient.upsert({
        where: { name: ing.ingredient },
        update: {},
        create: { name: ing.ingredient },
      });
      await prisma.recipeIngredient.create({
        data: {
          recipeId: created.id,
          ingredientId: ingredient.id,
          displayText: ing.text,
          quantity: ing.quantity,
          position: i,
        },
      });
    }

    console.log(`Created ${recipe.slug}`);
  }
  console.log(`Created ${newRecipes.length} recipes total.`);

  await runTranslations(
    newRecipes.map((r) => ({
      slug: r.slug,
      title: r.bg.title,
      description: r.bg.description,
      steps: r.bg.steps,
      ingredients: r.bg.ingredients,
    })),
  );
}

main();
