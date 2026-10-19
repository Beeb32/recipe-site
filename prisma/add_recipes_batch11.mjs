import { prisma, runTranslations } from "./translate-lib.mjs";

// 5 popular Japanese recipes, each web-researched for authentic technique
// before writing, per standing instructions. Nutrition estimates are set
// directly here (caloriesPerServing/proteinG/carbsG/fatG), per standing
// instruction to never leave new recipes without nutrition.
const newRecipes = [
  {
    slug: "karaage",
    title: "Karaage",
    description:
      "Japan's everyday fried chicken, built on a double-fry technique and a potato-starch coating instead of flour - the combination that produces its signature shatter-crisp crust while keeping the thigh meat inside juicy.",
    imageEmoji: "🍗",
    cookTimeMinutes: 40,
    servings: 4,
    caloriesPerServing: 460,
    proteinG: 29,
    carbsG: 20,
    fatG: 29,
    ingredients: [
      { text: "1.5 lb boneless, skinless chicken thighs, cut into bite-size pieces", ingredient: "chicken thighs", quantity: 1.5 },
      { text: "2 tbsp soy sauce", ingredient: "soy sauce", quantity: 2 },
      { text: "1 tbsp sake", ingredient: "sake", quantity: 1 },
      { text: "1 tbsp mirin", ingredient: "mirin", quantity: 1 },
      { text: "1 tbsp grated fresh ginger", ingredient: "ginger", quantity: 1 },
      { text: "2 cloves garlic, grated", ingredient: "garlic", quantity: 2 },
      { text: "3/4 cup potato starch (katakuriko)", ingredient: "potato starch", quantity: 0.75 },
      { text: "Vegetable oil, for deep-frying", ingredient: "vegetable oil", quantity: null },
      { text: "Lemon wedges, for serving", ingredient: "lemon", quantity: null },
    ],
    steps: [
      "Combine the soy sauce, sake, mirin, ginger, and garlic in a bowl, add the chicken thigh pieces, and toss to coat.",
      "Cover and marinate in the fridge for at least 30 minutes, or up to overnight for deeper flavor.",
      "Drain off any excess marinade and coat each piece of chicken generously in potato starch, shaking off the excess - potato starch rather than flour is what gives karaage its distinctive shattering crust, so don't substitute.",
      "Heat oil to 320F (160C) and fry the chicken in batches for 3-4 minutes until cooked through but only pale golden; remove to a rack.",
      "Increase the oil temperature to 375F (190C) and fry the chicken a second time for 1-2 minutes until deep golden and audibly crisp - this second fry is the defining karaage technique, driving out remaining moisture from the crust without drying out the meat.",
      "Drain briefly and serve hot with lemon wedges to squeeze over the top.",
    ],
    tags: ["dinner", "japanese"],
    bg: {
      title: "Карааге",
      description:
        "Ежедневното японско пържено пиле, изградено върху техника на двойно пържене и панировка от картофено нишесте вместо брашно - комбинацията, която създава характерната пукаща коричка, докато месото на бутчето остава сочно.",
      steps: [
        "Смесете соевия сос, сакето, мирина, джинджифила и чесъна в купа, добавете нарязаното на хапки пилешко бутче и разбъркайте, за да се покрие.",
        "Покрийте и оставете да се маринова в хладилник поне 30 минути, или до цяла нощ за по-дълбок вкус.",
        "Отцедете излишната марината и обилно оваляйте всяко парче пиле в картофено нишесте, изтръсквайки излишъка - картофеното нишесте, а не брашното, е това, което придава на карааге характерната пукаща коричка, затова не го заменяйте.",
        "Загрейте олио до 160°C и пържете пилето на партиди за 3-4 минути, докато се сготви напълно, но остане само бледо златисто; извадете на решетка.",
        "Повишете температурата на олиото до 190°C и пържете пилето втори път за 1-2 минути, докато стане тъмно златисто и звучно хрупкаво - това второ пържене е определящата техника на карааге, изкарваща остатъчната влага от коричката, без да пресушава месото.",
        "Отцедете за кратко и сервирайте горещо с резенчета лимон за поливане отгоре.",
      ],
      ingredients: [
        "1.5 lb (680г) обезкостени пилешки бутчета без кожа, нарязани на хапки",
        "2 с.л. соев сос",
        "1 с.л. саке",
        "1 с.л. мирин",
        "1 с.л. настърган пресен джинджифил",
        "2 скилидки чесън, настъргани",
        "3/4 чаша картофено нишесте (катакурико)",
        "Олио, за дълбоко пържене",
        "Резенчета лимон, за сервиране",
      ],
    },
  },
  {
    slug: "gyoza",
    title: "Gyoza",
    description:
      "Japan's thinner-wrappered, more garlicky cousin of Chinese jiaozi, cooked with the defining pan-fry-then-steam method that crisps the bottoms into a lacy golden crust while the tops stay soft and delicate.",
    imageEmoji: "🥟",
    cookTimeMinutes: 45,
    servings: 4,
    caloriesPerServing: 320,
    proteinG: 14,
    carbsG: 26,
    fatG: 17,
    ingredients: [
      { text: "1/2 head napa cabbage, very finely chopped", ingredient: "napa cabbage", quantity: 0.5 },
      { text: "1/2 tsp salt, for salting the cabbage", ingredient: "salt", quantity: 0.5 },
      { text: "1/2 lb ground pork", ingredient: "ground pork", quantity: 0.5 },
      { text: "3 cloves garlic, minced", ingredient: "garlic", quantity: 3 },
      { text: "1 tbsp grated ginger", ingredient: "ginger", quantity: 1 },
      { text: "3 green onions, finely chopped", ingredient: "green onion", quantity: 3 },
      { text: "1 tbsp soy sauce", ingredient: "soy sauce", quantity: 1 },
      { text: "1 tsp sesame oil, plus more to finish", ingredient: "sesame oil", quantity: 1 },
      { text: "1 tsp sake", ingredient: "sake", quantity: 1 },
      { text: "1/4 tsp white pepper", ingredient: "white pepper", quantity: 0.25 },
      { text: "24 gyoza wrappers", ingredient: "gyoza wrappers", quantity: 24 },
      { text: "2 tbsp vegetable oil, for frying", ingredient: "vegetable oil", quantity: 2 },
      { text: "2 tbsp soy sauce, for dipping sauce", ingredient: "soy sauce", quantity: 2 },
      { text: "2 tbsp rice vinegar, for dipping sauce", ingredient: "rice vinegar", quantity: 2 },
      { text: "Chili oil (rayu), to taste", ingredient: "chili oil", quantity: null },
    ],
    steps: [
      "Toss the finely chopped napa cabbage with the salt, let it sit for 10 minutes, then squeeze out as much liquid as possible by hand - skipping this step leaves the filling watery and turns the wrappers soggy.",
      "Combine the squeezed cabbage, ground pork, garlic, ginger, green onions, soy sauce, sesame oil, sake, and white pepper in a bowl, and mix vigorously in one direction until sticky and well combined.",
      "Place a small spoonful of filling in the center of each wrapper, wet the edge with water, fold in half, and pleat one side 5-6 times, pressing to seal tightly.",
      "Heat the vegetable oil in a nonstick skillet over medium-high heat and arrange the gyoza flat-side down in a circle, cooking until the bottoms are golden, about 3 minutes.",
      "Add 1/4 cup water to the pan, cover immediately, and let the gyoza steam until the water evaporates and the wrappers turn translucent, 3-4 minutes.",
      "Uncover, drizzle a little extra sesame oil around the pan, and cook uncovered for another minute until the bottoms crisp back up into a lacy golden crust.",
      "Stir together the soy sauce and rice vinegar with chili oil to taste for dipping, and serve the gyoza hot, crispy-side up.",
    ],
    tags: ["snack", "dinner", "japanese"],
    bg: {
      title: "Гьоза",
      description:
        "По-тънката на тесто и по-чеснова братовчедка на китайските дзяодзъ - японската гьоза се готви с характерния метод пържене, последвано от задушаване на пара, който прави дъната хрупкави и златисти като дантела, докато горната част остава мека и деликатна.",
      steps: [
        "Разбъркайте ситно нарязаното китайско зеле със солта, оставете за 10 минути, после изстискайте с ръце колкото се може повече течност - пропускането на тази стъпка прави плънката водниста и разваля кората.",
        "Смесете изцеденото зеле, свинската кайма, чесъна, джинджифила, пролука, соевия сос, сусамовото олио, сакето и белия пипер в купа и разбъркайте енергично в една посока, докато стане лепкава и добре съчетана.",
        "Сложете малка лъжичка плънка в центъра на всяка кора, намокрете края с вода, сгънете наполовина и направете 5-6 плисета от едната страна, притискайки, за да се затвори плътно.",
        "Загрейте олиото в незалепващ тиган на среден до силен огън и подредете гьозите с плоската страна надолу в кръг, готвейки, докато дъната позлатеят, около 3 минути.",
        "Добавете 1/4 чаша вода в тигана, покрийте веднага и оставете гьозите да се задушат на пара, докато водата се изпари и корите станат прозрачни, 3-4 минути.",
        "Отворете, поръсете малко допълнително сусамово олио около тигана и гответе без капак още минута, докато дъната отново захрупкат до златиста дантелена коричка.",
        "Разбъркайте соевия сос с оризовия оцет и лютиво олио на вкус за потапяне и сервирайте гьозите горещи, с хрупкавата страна нагоре.",
      ],
      ingredients: [
        "1/2 глава китайско зеле, много ситно нарязано",
        "1/2 ч.л. сол, за посоляване на зелето",
        "1/2 lb (225г) свинска кайма",
        "3 скилидки чесън, смлени",
        "1 с.л. настърган джинджифил",
        "3 стръка пролук, ситно нарязани",
        "1 с.л. соев сос",
        "1 ч.л. сусамово олио, плюс още за завършване",
        "1 ч.л. саке",
        "1/4 ч.л. бял пипер",
        "24 кори за гьоза",
        "2 с.л. олио, за пържене",
        "2 с.л. соев сос, за сос за потапяне",
        "2 с.л. оризов оцет, за сос за потапяне",
        "Лютиво олио (рае), на вкус",
      ],
    },
  },
  {
    slug: "katsu-curry",
    title: "Katsu Curry",
    description:
      "Japan's beloved yōshoku mashup of a panko-crusted cutlet and thick, mildly sweet curry sauce - built from pre-made curry roux blocks rather than raw spices, the shortcut that actually defines Japanese curry's silky, deeply savory character.",
    imageEmoji: "🍛",
    cookTimeMinutes: 50,
    servings: 4,
    caloriesPerServing: 700,
    proteinG: 35,
    carbsG: 75,
    fatG: 26,
    ingredients: [
      { text: "4 boneless chicken thighs (or pork loin cutlets), pounded to even thickness", ingredient: "chicken thighs", quantity: 4 },
      { text: "Salt and pepper, to season", ingredient: "salt", quantity: null },
      { text: "1/2 cup flour", ingredient: "flour", quantity: 0.5 },
      { text: "2 eggs, beaten", ingredient: "eggs", quantity: 2 },
      { text: "1.5 cups panko breadcrumbs", ingredient: "panko breadcrumbs", quantity: 1.5 },
      { text: "Vegetable oil, for frying", ingredient: "vegetable oil", quantity: null },
      { text: "1 onion, sliced", ingredient: "onion", quantity: 1 },
      { text: "2 carrots, chopped", ingredient: "carrot", quantity: 2 },
      { text: "2 potatoes, chopped", ingredient: "potato", quantity: 2 },
      { text: "3 cups chicken broth", ingredient: "chicken broth", quantity: 3 },
      { text: "3.5 oz Japanese curry roux blocks", ingredient: "curry roux", quantity: 3.5 },
      { text: "4 cups cooked short-grain rice, for serving", ingredient: "rice", quantity: 4 },
    ],
    steps: [
      "Sauté the sliced onion in a pot over medium heat until softened and lightly golden, about 8 minutes - Japanese curry leans on well-cooked onion for sweetness rather than added sugar.",
      "Add the carrots and potatoes, pour in the chicken broth, bring to a simmer, and cook covered until the vegetables are tender, about 15 minutes.",
      "Remove from the heat, break in the curry roux blocks, and stir until fully dissolved; return to low heat and simmer for 5 minutes until glossy and thickened, stirring often so the roux doesn't scorch.",
      "Meanwhile, season the chicken with salt and pepper, dredge in flour, dip in the beaten egg, then coat generously in panko, pressing to help it adhere.",
      "Heat about 1/2 inch of oil in a skillet to 340F (170C) and fry the cutlets 3-4 minutes per side until deep golden and cooked through; drain on a rack and slice into strips.",
      "Serve bowls of rice topped with the curry sauce and the sliced katsu laid over or alongside it.",
    ],
    tags: ["dinner", "japanese"],
    bg: {
      title: "Кацу Кари",
      description:
        "Обичаната японска йошоку комбинация от панирано в панко филе и гъст, леко сладък сос кари - приготвен от готови блокчета кари, а не от сурови подправки, точно тази съкратена техника е това, което придава на японското кари неговия копринен, дълбоко наситен характер.",
      steps: [
        "Запържете нарязания на резени лук в тенджера на среден огън до омекване и леко позлатяване, около 8 минути - японското кари разчита на добре запържения лук за сладост, а не на добавена захар.",
        "Добавете морковите и картофите, залейте с пилешкия бульон, оставете да заври и гответе покрито, докато зеленчуците омекнат, около 15 минути.",
        "Свалете от котлона, разчупете блокчетата кари и разбъркайте, докато напълно се разтворят; върнете на слаб огън и къкрете 5 минути, докато стане лъскаво и гъсто, като разбърквате често, за да не загори.",
        "Междувременно подправете пилето със сол и пипер, овалайте го в брашно, потопете в разбитото яйце, после обилно оваляйте в панко, притискайки, за да прилепне.",
        "Загрейте около 1/2 инч олио в тиган до 170°C и запържете филетата 3-4 минути от всяка страна, докато станат тъмно златисти и се сготвят напълно; отцедете на решетка и нарежете на ивици.",
        "Сервирайте купички с ориз, залети със соса кари, с нарязаното кацу отгоре или отстрани.",
      ],
      ingredients: [
        "4 обезкостени пилешки бутчета (или свински котлети), потупани до еднаква дебелина",
        "Сол и пипер, за подправяне",
        "1/2 чаша брашно",
        "2 яйца, разбити",
        "1.5 чаши панко галета",
        "Олио, за пържене",
        "1 лук, нарязан на резени",
        "2 моркова, нарязани",
        "2 картофа, нарязани",
        "3 чаши пилешки бульон",
        "3.5 унции (100г) блокчета японско кари",
        "4 чаши сварен ориз, за сервиране",
      ],
    },
  },
  {
    slug: "oyakodon",
    title: "Oyakodon",
    description:
      "Tokyo-style 'parent-and-child' rice bowl - chicken and egg, literally parent and child - simmered together in a dashi-soy-mirin sauce and finished with a two-pour egg technique that leaves the top silky and barely set instead of fully cooked through.",
    imageEmoji: "🍚",
    cookTimeMinutes: 20,
    servings: 2,
    caloriesPerServing: 550,
    proteinG: 36,
    carbsG: 56,
    fatG: 20,
    ingredients: [
      { text: "2 boneless, skinless chicken thighs, cut into bite-size pieces", ingredient: "chicken thighs", quantity: 2 },
      { text: "1/2 onion, thinly sliced", ingredient: "onion", quantity: 0.5 },
      { text: "3/4 cup dashi", ingredient: "dashi", quantity: 0.75 },
      { text: "2 tbsp soy sauce", ingredient: "soy sauce", quantity: 2 },
      { text: "2 tbsp mirin", ingredient: "mirin", quantity: 2 },
      { text: "1 tsp sugar", ingredient: "sugar", quantity: 1 },
      { text: "4 eggs, lightly beaten, kept in 2 separate portions", ingredient: "eggs", quantity: 4 },
      { text: "2 cups cooked short-grain rice", ingredient: "rice", quantity: 2 },
      { text: "1 green onion, sliced, for garnish", ingredient: "green onion", quantity: 1 },
    ],
    steps: [
      "Combine the dashi, soy sauce, mirin, and sugar in a small frying pan (a single-portion pan works best for the authentic technique) and bring to a simmer.",
      "Add half the sliced onion and simmer for 2 minutes until slightly softened, then add half the chicken and simmer until just cooked through, about 4 minutes.",
      "Pour half of one portion's beaten egg evenly over the chicken and onion, cover, and cook for 30 seconds.",
      "Pour in the remaining egg for that portion in a thin stream around the pan, cover, and cook until just set but still glossy and slightly runny in the center, about 30-45 seconds - this two-pour technique is what gives oyakodon its signature silky, barely-set egg instead of a fully cooked topping.",
      "Slide the chicken and egg directly onto a bowl of hot rice, letting the sauce soak into the grains.",
      "Repeat the process with the remaining onion, chicken, and egg for the second portion, garnish both bowls with sliced green onion, and serve immediately.",
    ],
    tags: ["dinner", "lunch", "japanese"],
    bg: {
      title: "Ояакодон",
      description:
        "Токийска купа с ориз \"родител и дете\" - пиле и яйце, буквално родител и дете - къкрещи заедно в сос от даши, соев сос и мирин, завършени с техника на двойно изсипване на яйцето, която оставя горната част копринена и едва стегната, вместо напълно сготвена.",
      steps: [
        "Смесете дашито, соевия сос, мирина и захарта в малък тиган (тиган за една порция работи най-добре за автентичната техника) и оставете да заври.",
        "Добавете половината нарязан лук и къкрете 2 минути, докато леко омекне, после добавете половината пиле и къкрете, докато точно се сготви, около 4 минути.",
        "Изсипете половината от разбитото яйце за тази порция равномерно върху пилето и лука, покрийте и гответе 30 секунди.",
        "Изсипете останалото яйце за тази порция в тънка струя около тигана, покрийте и гответе, докато точно се стегне, но остане лъскаво и леко течно в центъра, около 30-45 секунди - тази техника на двойно изсипване придава на ояакодон характерното копринено, едва стегнато яйце, вместо напълно сготвена заливка.",
        "Плъзнете пилето и яйцето директно върху купа с горещ ориз, оставяйки соса да попие в зърната.",
        "Повторете процеса с останалия лук, пиле и яйце за втората порция, гарнирайте двете купи с нарязан пролук и сервирайте веднага.",
      ],
      ingredients: [
        "2 обезкостени пилешки бутчета без кожа, нарязани на хапки",
        "1/2 лук, нарязан на тънко",
        "3/4 чаша даши",
        "2 с.л. соев сос",
        "2 с.л. мирин",
        "1 ч.л. захар",
        "4 яйца, леко разбити, разделени на 2 отделни порции",
        "2 чаши сварен ориз",
        "1 стрък пролук, нарязан, за гарнитура",
      ],
    },
  },
  {
    slug: "yakitori",
    title: "Yakitori",
    description:
      "Japan's charcoal-grilled chicken skewers, cooked completely unmarinated and built entirely on tare - a soy-mirin-sake glaze the skewers are repeatedly dipped into and re-grilled, developing their lacquered flavor at the grill rather than beforehand.",
    imageEmoji: "🍢",
    cookTimeMinutes: 35,
    servings: 4,
    caloriesPerServing: 320,
    proteinG: 29,
    carbsG: 12,
    fatG: 18,
    ingredients: [
      { text: "1.5 lb boneless chicken thighs, cut into 1-inch cubes", ingredient: "chicken thighs", quantity: 1.5 },
      { text: "4 green onions, cut into 1-inch pieces", ingredient: "green onion", quantity: 4 },
      { text: "1/2 cup soy sauce", ingredient: "soy sauce", quantity: 0.5 },
      { text: "1/4 cup mirin", ingredient: "mirin", quantity: 0.25 },
      { text: "1/4 cup sake", ingredient: "sake", quantity: 0.25 },
      { text: "2 tbsp sugar", ingredient: "sugar", quantity: 2 },
      { text: "1 tbsp toasted sesame seeds, for serving", ingredient: "sesame seeds", quantity: 1 },
      { text: "Shichimi togarashi, for serving", ingredient: "shichimi togarashi", quantity: null },
    ],
    steps: [
      "Combine the soy sauce, mirin, sake, and sugar in a small saucepan, bring to a boil, then simmer until reduced by about a third and slightly syrupy, 8-10 minutes; let the tare cool.",
      "Thread the chicken and green onion pieces alternately onto skewers (negima-style), about 4-5 pieces of chicken per skewer.",
      "Preheat a grill or grill pan to high heat - traditionally over binchotan charcoal for a smoky char, though a very hot grill pan works well at home.",
      "Grill the skewers completely unmarinated, turning occasionally, until the chicken begins to char and is nearly cooked through, 6-8 minutes - yakitori gets no marinade at all before grilling, unlike most skewered chicken dishes.",
      "Dip or brush the skewers into the tare, return to the grill for about 30 seconds per side to let the sauce caramelize, then repeat the dip-and-grill once or twice more, finishing with a final glaze.",
      "Sprinkle with sesame seeds and shichimi togarashi, and serve hot straight off the grill.",
    ],
    tags: ["dinner", "japanese"],
    bg: {
      title: "Якитори",
      description:
        "Японски пилешки шишчета на дървени въглища, приготвени напълно без марината и изградени изцяло върху таре - глазура от соев сос, мирин и саке, в която шишчетата многократно се потапят и връщат на скарата, развивайки лакирания си вкус на самата скара, а не предварително.",
      steps: [
        "Смесете соевия сос, мирина, сакето и захарта в малка тенджера, оставете да заври, после къкрете, докато намалее с около една трета и леко се сгъсти, 8-10 минути; оставете тарето да изстине.",
        "Нанижете последователно парчета пиле и пролук на шишчета (стил негима), около 4-5 парчета пиле на шишче.",
        "Загрейте скара или тиган-скара на силен огън - традиционно на дървени въглища бинчотан за димен вкус, макар че много горещ тиган-скара работи добре и у дома.",
        "Изпечете шишчетата напълно без марината, обръщайки от време на време, докато пилето започне да почернява по краищата и е почти сготвено, 6-8 минути - якитори не се маринова изобщо преди печене, за разлика от повечето шишчета с пиле.",
        "Потопете или намажете шишчетата в тарето, върнете на скарата за около 30 секунди от всяка страна, за да карамелизира сосът, после повторете потапянето и печенето още веднъж-два пъти, завършвайки с последен слой глазура.",
        "Поръсете с печени сусамови семена и шичими тогараши и сервирайте горещо направо от скарата.",
      ],
      ingredients: [
        "1.5 lb (680г) обезкостени пилешки бутчета, нарязани на кубчета от 1 инч",
        "4 стръка пролук, нарязани на парчета от 1 инч",
        "1/2 чаша соев сос",
        "1/4 чаша мирин",
        "1/4 чаша саке",
        "2 с.л. захар",
        "1 с.л. печени сусамови семена, за сервиране",
        "Шичими тогараши, за сервиране",
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
