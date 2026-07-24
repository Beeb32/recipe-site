import { prisma, runTranslations } from "./translate-lib.mjs";

// New recipes (not updates to existing ones) - created directly rather than
// via applyRecipeUpdates, which upserts by slug and assumes the row already
// exists.
const newRecipes = [
  {
    slug: "chicken-adobo",
    title: "Chicken Adobo",
    description:
      "Chicken braised in a soy-vinegar-garlic sauce with bay leaves and peppercorns, finished uncovered to reduce into a glaze - simmering uncovered at the end is what turns the sauce from thin and watery into the classic adobo glaze.",
    imageEmoji: "🍗",
    cookTimeMinutes: 45,
    servings: 4,
    ingredients: [
      { text: "2 lb chicken thighs and drumsticks, bone-in", ingredient: "chicken thighs", quantity: 2 },
      { text: "1/2 cup soy sauce", ingredient: "soy sauce", quantity: 0.5 },
      { text: "1/4 cup cane vinegar or white vinegar", ingredient: "vinegar", quantity: 0.25 },
      { text: "6 cloves garlic, smashed", ingredient: "garlic", quantity: 6 },
      { text: "3 bay leaves", ingredient: "bay leaf", quantity: 3 },
      { text: "1 tsp whole black peppercorns", ingredient: "black peppercorns", quantity: 1 },
      { text: "2 tbsp brown sugar", ingredient: "brown sugar", quantity: 2 },
      { text: "1 cup water", ingredient: "water", quantity: 1 },
      { text: "2 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 2 },
    ],
    steps: [
      "Combine the chicken, soy sauce, vinegar, garlic, bay leaves, and peppercorns in a bowl and marinate for at least 30 minutes, or overnight in the fridge.",
      "Heat the oil in a pot, lift the chicken out of the marinade, and brown on all sides; set aside.",
      "Pour the reserved marinade into the pot along with the brown sugar and water, and bring to a boil.",
      "Return the chicken to the pot, reduce the heat, and simmer uncovered for 30-35 minutes, occasionally spooning the sauce over the chicken, until it reduces and thickens into a glaze - simmering uncovered is what lets the sauce reduce into a glaze instead of staying thin and watery.",
      "Serve over rice.",
    ],
    tags: ["dinner", "asian"],
    bg: {
      title: "Пилешко адобо",
      description:
        "Пиле, задушено в сос от соев сос, оцет и чесън с дафинови листа и черен пипер на зърна, довършено без капак, за да се сгъсти до глазура - готвенето без капак накрая е това, което превръща соса от рядък и воднист в класическата адобо глазура.",
      steps: [
        "Смесете пилето, соевия сос, оцета, чесъна, дафиновите листа и черния пипер в купа и оставете да се маринова поне 30 минути или през нощта в хладилник.",
        "Загрейте олиото в тенджера, извадете пилето от марината и запечете от всички страни; отделете настрана.",
        "Изсипете запазената марината в тенджерата заедно с кафявата захар и водата и оставете да заври.",
        "Върнете пилето в тенджерата, намалете котлона и къкрете без капак 30-35 минути, поливайки от време на време със соса, докато се сгъсти до глазура - готвенето без капак е това, което позволява на соса да се сгъсти до глазура, вместо да остане рядък и воднист.",
        "Сервирайте върху ориз.",
      ],
      ingredients: [
        "900 г пилешки бутчета и кълки с кост",
        "1/2 чаша соев сос",
        "1/4 чаша оцет от захарна тръстика или бял оцет",
        "6 скилидки чесън, натрошени",
        "3 дафинови листа",
        "1 ч.л. черен пипер на зърна",
        "2 с.л. кафява захар",
        "1 чаша вода",
        "2 с.л. олио",
      ],
    },
  },
  {
    slug: "mapo-tofu",
    title: "Mapo Tofu",
    description:
      "Silken tofu and ground pork in a fiery, numbing Sichuan sauce of fermented chili bean paste and ground Sichuan peppercorns - the peppercorns are what give real mapo tofu its tingling \"mala\" heat, not chili alone.",
    imageEmoji: "🌶️",
    cookTimeMinutes: 30,
    servings: 4,
    ingredients: [
      { text: "14 oz soft or silken tofu, cubed", ingredient: "tofu", quantity: 14 },
      { text: "1/2 lb ground pork", ingredient: "ground pork", quantity: 0.5 },
      { text: "2 tbsp doubanjiang (fermented chili bean paste)", ingredient: "doubanjiang", quantity: 2 },
      { text: "1 tbsp fermented black beans, chopped", ingredient: "fermented black beans", quantity: 1 },
      { text: "3 cloves garlic, minced", ingredient: "garlic", quantity: 3 },
      { text: "1 tbsp fresh ginger, minced", ingredient: "ginger", quantity: 1 },
      { text: "2 green onions, sliced, white and green parts separated", ingredient: "green onion", quantity: 2 },
      { text: "1 tsp ground Sichuan peppercorns", ingredient: "sichuan peppercorns", quantity: 1 },
      { text: "1 cup chicken broth", ingredient: "chicken broth", quantity: 1 },
      { text: "1 tbsp soy sauce", ingredient: "soy sauce", quantity: 1 },
      { text: "1 tbsp cornstarch mixed with 2 tbsp water", ingredient: "cornstarch", quantity: 1 },
      { text: "2 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 2 },
    ],
    steps: [
      "Bring a pot of lightly salted water to a boil and gently blanch the tofu cubes for 2 minutes, then drain - blanching firms the tofu and removes its raw bean taste so it holds together in the sauce instead of crumbling.",
      "Heat the oil in a wok and brown the ground pork until cooked through.",
      "Add the doubanjiang, fermented black beans, garlic, ginger, and the white parts of the green onion; stir-fry for 1 minute until fragrant and the oil turns red.",
      "Pour in the chicken broth and soy sauce, then gently slide in the tofu and simmer for 5 minutes, stirring gently to avoid breaking the cubes.",
      "Stir in the cornstarch slurry and cook until the sauce thickens and clings to the tofu.",
      "Sprinkle with the ground Sichuan peppercorns and the green onion tops before serving - the peppercorns are what give mapo tofu its signature tingling \"mala\" heat, not the chili paste alone.",
    ],
    tags: ["dinner", "asian", "quick"],
    bg: {
      title: "Мапо тофу",
      description:
        "Копринено тофу и свинска кайма в огнен, изтръпващ съчуански сос от ферментирала чили паста и смлян съчуански пипер - пиперът е това, което дава на истинското мапо тофу характерното изтръпващо усещане \"мала\", а не само чилито.",
      steps: [
        "Оставете тенджера леко подсолена вода да заври и бланширайте тофуто на кубчета за 2 минути, после отцедете - бланширането стяга тофуто и премахва суровия боб вкус, за да се задържи цяло в соса, вместо да се рони.",
        "Загрейте олиото в уок и запържете свинската кайма до пълно сготвяне.",
        "Добавете доубандзян, ферментиралия черен боб, чесъна, джинджифила и бялата част на зеления лук; запържете 1 минута до ароматизиране и почервеняване на олиото.",
        "Долейте пилешкия бульон и соевия сос, после внимателно сложете тофуто и къкрете 5 минути, разбърквайки внимателно, за да не се счупят кубчетата.",
        "Разбъркайте разтвора от нишесте и гответе, докато сосът се сгъсти и обвие тофуто.",
        "Поръсете със смления съчуански пипер и зелената част на лука преди сервиране - пиперът е това, което дава на мапо тофу характерното изтръпващо усещане \"мала\", а не само чилито паста.",
      ],
      ingredients: [
        "400 г меко или копринено тофу, нарязано на кубчета",
        "225 г свинска кайма",
        "2 с.л. доубандзян (ферментирала чили паста)",
        "1 с.л. ферментирал черен боб, нарязан",
        "3 скилидки чесън, ситно нарязани",
        "1 с.л. пресен джинджифил, ситно нарязан",
        "2 стръка зелен лук, нарязани, бяло и зелено разделени",
        "1 ч.л. смлян съчуански пипер",
        "1 чаша пилешки бульон",
        "1 с.л. соев сос",
        "1 с.л. нишесте, разбъркано с 2 с.л. вода",
        "2 с.л. олио",
      ],
    },
  },
  {
    slug: "pierogi",
    title: "Pierogi",
    description:
      "Polish dumplings filled with mashed potato, cheddar, and caramelized onion, boiled and then pan-fried in butter - pan-frying after boiling is the extra step that gives pierogi their golden, slightly crisp finish instead of a plain boiled dumpling.",
    imageEmoji: "🥟",
    cookTimeMinutes: 60,
    servings: 4,
    ingredients: [
      { text: "2 cups flour", ingredient: "flour", quantity: 2 },
      { text: "1 egg", ingredient: "eggs", quantity: 1 },
      { text: "1/2 cup sour cream", ingredient: "sour cream", quantity: 0.5 },
      { text: "1/2 tsp salt", ingredient: "salt", quantity: 0.5 },
      { text: "2 cups mashed potatoes, cooled", ingredient: "mashed potatoes", quantity: 2 },
      { text: "1 cup shredded cheddar cheese", ingredient: "cheddar cheese", quantity: 1 },
      { text: "1 onion, finely diced, divided", ingredient: "onion", quantity: 1 },
      { text: "3 tbsp butter", ingredient: "butter", quantity: 3 },
      { text: "Salt to taste", ingredient: "salt", quantity: null },
      { text: "Pepper to taste", ingredient: "pepper", quantity: null },
    ],
    steps: [
      "Sauté half the diced onion in 1 tbsp of the butter until soft and golden, then mix into the mashed potatoes with the cheddar, salt, and pepper to make the filling.",
      "Mix the flour, egg, sour cream, and salt into a soft dough, kneading until smooth, then let it rest for 10 minutes.",
      "Roll the dough thin and cut into rounds. Spoon a small amount of filling onto each round, fold over, and pinch the edges tightly to seal - a well-sealed edge is what keeps the filling from leaking out into the boiling water.",
      "Boil the pierogi in batches in salted water until they float to the top, about 3-4 minutes.",
      "Sauté the remaining onion in the rest of the butter until golden, then toss the boiled pierogi in the pan to lightly brown before serving.",
    ],
    tags: ["dinner", "vegetarian"],
    bg: {
      title: "Пироги",
      description:
        "Полски кнедли, пълнени с картофено пюре, чедър и карамелизиран лук, сварени и после запържени в масло - запържването след варенето е допълнителната стъпка, която дава на пирогите златист, леко хрупкав финал, вместо обикновена сварена кнедла.",
      steps: [
        "Запържете половината нарязан лук в 1 с.л. от маслото до омекване и златист цвят, после смесете с картофеното пюре, чедъра, солта и черния пипер за пълнежа.",
        "Смесете брашното, яйцето, заквасената сметана и солта в меко тесто, замесете до гладкост, после оставете да почине 10 минути.",
        "Разточете тестото тънко и изрежете кръгове. Сложете малко пълнеж върху всеки кръг, сгънете наполовина и стегнато прищипете краищата, за да запечатате - добре запечатан край е това, което пази пълнежа да не изтече във врящата вода.",
        "Варете пирогите на партиди в подсолена вода, докато изплуват, около 3-4 минути.",
        "Запържете останалия лук в останалото масло до златисто, после разбъркайте сварените пироги в тигана, за да леко се зачервят преди сервиране.",
      ],
      ingredients: [
        "2 чаши брашно",
        "1 яйце",
        "1/2 чаша заквасена сметана",
        "1/2 ч.л. сол",
        "2 чаши картофено пюре, изстинало",
        "1 чаша настърган чедър",
        "1 лук, ситно нарязан, разделен",
        "3 с.л. масло",
        "Сол на вкус",
        "Черен пипер на вкус",
      ],
    },
  },
  {
    slug: "hungarian-goulash",
    title: "Hungarian Goulash",
    description:
      "Beef and potatoes simmered low and slow in a paprika-rich broth with deeply caramelized onions and caraway - real Hungarian goulash rests on generous sweet paprika added off the heat, not a token pinch stirred in over high flame where it turns bitter.",
    imageEmoji: "🍲",
    cookTimeMinutes: 150,
    servings: 6,
    ingredients: [
      { text: "2 lb beef chuck, cubed", ingredient: "beef chuck", quantity: 2 },
      { text: "3 onions, diced", ingredient: "onion", quantity: 3 },
      { text: "3 tbsp sweet Hungarian paprika", ingredient: "paprika", quantity: 3 },
      { text: "1 tbsp caraway seeds", ingredient: "caraway seeds", quantity: 1 },
      { text: "3 cloves garlic, minced", ingredient: "garlic", quantity: 3 },
      { text: "2 tbsp tomato paste", ingredient: "tomato paste", quantity: 2 },
      { text: "1 green bell pepper, diced", ingredient: "green pepper", quantity: 1 },
      { text: "4 potatoes, cubed", ingredient: "potato", quantity: 4 },
      { text: "6 cups beef broth", ingredient: "beef broth", quantity: 6 },
      { text: "2 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 2 },
      { text: "Salt to taste", ingredient: "salt", quantity: null },
      { text: "Pepper to taste", ingredient: "pepper", quantity: null },
    ],
    steps: [
      "Heat the oil in a large pot and cook the onions over low heat until deeply softened and golden, about 15 minutes.",
      "Remove the pot from the heat briefly and stir in the paprika, caraway seeds, and garlic - taking the pot off the heat before adding the paprika keeps it from scorching and turning bitter.",
      "Return the pot to the stove, add the beef, tomato paste, and bell pepper, and stir to coat.",
      "Pour in the beef broth, bring to a boil, then reduce heat and simmer covered for 1.5 hours until the beef is tender.",
      "Add the potatoes and simmer for another 25-30 minutes until tender.",
      "Season with salt and pepper before serving.",
    ],
    tags: ["dinner"],
    bg: {
      title: "Унгарски гулаш",
      description:
        "Телешко и картофи, къкрени бавно в богат на чушка бульон с дълбоко карамелизиран лук и кимион - истинският унгарски гулаш разчита на щедро количество сладка чушка, добавена извън котлона, а не на символична щипка, разбъркана на силен огън, където горчивее.",
      steps: [
        "Загрейте олиото в голяма тенджера и гответе лука на слаб огън до дълбоко омекване и златист цвят, около 15 минути.",
        "Свалете тенджерата за кратко от котлона и разбъркайте чушката, кимиона и чесъна - свалянето от котлона преди добавянето на чушката пази от загаряне и горчивина.",
        "Върнете тенджерата на котлона, добавете телешкото, доматеното пюре и чушката, и разбъркайте да се покрият.",
        "Долейте телешкия бульон, оставете да заври, после намалете котлона и къкрете с капак 1.5 часа, докато телешкото омекне.",
        "Добавете картофите и къкрете още 25-30 минути до омекване.",
        "Подправете със сол и черен пипер преди сервиране.",
      ],
      ingredients: [
        "900 г телешко плешка, нарязано на кубчета",
        "3 лука, нарязани на кубчета",
        "3 с.л. сладка унгарска чушка",
        "1 с.л. кимион",
        "3 скилидки чесън, ситно нарязани",
        "2 с.л. доматено пюре",
        "1 зелена чушка, нарязана на кубчета",
        "4 картофа, нарязани на кубчета",
        "6 чаши телешки бульон",
        "2 с.л. олио",
        "Сол на вкус",
        "Черен пипер на вкус",
      ],
    },
  },
  {
    slug: "khachapuri",
    title: "Khachapuri",
    description:
      "Georgian cheese-filled bread made with a mozzarella-feta blend standing in for sulguni, pan-seared until the crust is golden and the cheese inside is molten.",
    imageEmoji: "🫓",
    cookTimeMinutes: 90,
    servings: 4,
    ingredients: [
      { text: "2 1/2 cups flour", ingredient: "flour", quantity: 2.5 },
      { text: "1 tsp instant yeast", ingredient: "yeast", quantity: 1 },
      { text: "1 tsp sugar", ingredient: "sugar", quantity: 1 },
      { text: "3/4 tsp salt", ingredient: "salt", quantity: 0.75 },
      { text: "3/4 cup warm milk", ingredient: "milk", quantity: 0.75 },
      { text: "2 tbsp melted butter", ingredient: "butter", quantity: 2 },
      { text: "1 1/2 cups shredded mozzarella", ingredient: "mozzarella", quantity: 1.5 },
      { text: "1 cup crumbled feta", ingredient: "feta cheese", quantity: 1 },
      { text: "2 tbsp melted butter for brushing", ingredient: "butter", quantity: 2 },
    ],
    steps: [
      "Mix the flour, yeast, sugar, and salt, then stir in the warm milk and melted butter to form a soft dough; knead for 8-10 minutes until smooth.",
      "Cover and let rise in a warm place for 1 hour, until doubled.",
      "Combine the mozzarella and feta for the filling - the blend of a melty cheese and a salty, tangy one is what stands in for the sulguni and Imeretian cheese used in Georgia.",
      "Divide the dough into 4 pieces, roll each into a round, and place a portion of the cheese filling in the center. Gather the edges up and over the filling, pinch to seal, then gently flatten into a disc.",
      "Roll or press each filled disc out gently until the cheese is evenly distributed, being careful not to tear the dough.",
      "Cook on a hot, dry skillet or griddle over medium heat for 3-4 minutes per side until the dough is browned in spots and the cheese has melted, brushing with the remaining melted butter as it comes off the pan.",
    ],
    tags: ["dinner", "vegetarian"],
    bg: {
      title: "Хачапури",
      description:
        "Грузински хляб, пълнен със сирене, с микс от моцарела и фета вместо сулугуни, изпечен в тиган до златиста коричка и разтопено сирене отвътре.",
      steps: [
        "Смесете брашното, маята, захарта и солта, после разбъркайте топлото мляко и разтопеното масло, за да образувате меко тесто; месете 8-10 минути до гладкост.",
        "Покрийте и оставете да втаса на топло място 1 час, докато се удвои.",
        "Смесете моцарелата и фетата за пълнежа - смесът от топящо се сирене и солено, пикантно сирене е това, което замества сулугуни и имеретинското сирене, използвани в Грузия.",
        "Разделете тестото на 4 части, разточете всяка на кръг и сложете порция от сиренения пълнеж в средата. Съберете краищата отгоре над пълнежа, прищипете, за да запечатате, после леко сплескайте на диск.",
        "Разточете или притиснете внимателно всеки пълнен диск, докато сиренето се разпредели равномерно, внимавайки да не скъсате тестото.",
        "Гответе на горещ, сух тиган или скара на среден огън 3-4 минути от всяка страна, докато тестото се зачерви на места и сиренето се разтопи, намазвайки с остатъчното разтопено масло, докато го извадите от тигана.",
      ],
      ingredients: [
        "2 1/2 чаши брашно",
        "1 ч.л. инстантна мая",
        "1 ч.л. захар",
        "3/4 ч.л. сол",
        "3/4 чаша топло мляко",
        "2 с.л. разтопено масло",
        "1 1/2 чаши настъргана моцарела",
        "1 чаша натрошена фета",
        "2 с.л. разтопено масло за намазване",
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
