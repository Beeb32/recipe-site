import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "teriyaki-chicken-bowl",
      title: "Teriyaki Chicken Bowl",
      description:
        "Glazed teriyaki chicken with garlic and ginger served over rice with steamed vegetables - garlic and ginger are what real teriyaki sauce is built on, not just soy sauce and sugar.",
      imageEmoji: "🍚",
      cookTimeMinutes: 30,
      servings: 4,
      ingredients: [
        { text: "1 1/2 lb chicken thighs, cubed", ingredient: "chicken thighs", quantity: 1.5 },
        { text: "1/3 cup soy sauce", ingredient: "soy sauce", quantity: 0.33 },
        { text: "3 tbsp brown sugar", ingredient: "brown sugar", quantity: 3 },
        { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
        { text: "1 tbsp fresh ginger, grated", ingredient: "ginger", quantity: 1 },
        { text: "3 cups cooked rice", ingredient: "rice", quantity: 3 },
        { text: "2 cups steamed broccoli", ingredient: "broccoli", quantity: 2 },
      ],
      steps: [
        "Cook the chicken in a skillet until browned and cooked through.",
        "Whisk together the soy sauce, brown sugar, garlic, and ginger, then pour over the chicken, simmering until glazed - garlic and ginger are what give teriyaki its real depth.",
        "Divide the rice among bowls and top with the teriyaki chicken.",
        "Serve with steamed broccoli on the side.",
      ],
      tags: ["dinner", "asian", "quick"],
    },
    bg: {
      title: "Купа с пилешко терияки",
      description:
        "Глазирано пилешко терияки с чесън и джинджифил, поднесено върху ориз с задушени зеленчуци - чесънът и джинджифилът са това, на което истинският сос терияки се гради, а не само соев сос и захар.",
      steps: [
        "Гответе пилето в тиган до зачервяване и пълно сготвяне.",
        "Разбийте соевия сос, кафявата захар, чесъна и джинджифила, после излейте върху пилето, къкрете до глазиране - чесънът и джинджифилът са това, което дава на терияки истинска дълбочина.",
        "Разпределете ориза в купи и отгоре сложете терияки пилето.",
        "Сервирайте със задушено броколи отстрани.",
      ],
      ingredients: [
        "680 г пилешки бутчета, нарязани на кубчета",
        "1/3 чаша соев сос",
        "3 с.л. кафява захар",
        "2 скилидки чесън, ситно нарязани",
        "1 с.л. настърган пресен джинджифил",
        "3 чаши сготвен ориз",
        "2 чаши задушено броколи",
      ],
    },
  },
  {
    en: {
      slug: "vegan-chili",
      title: "Vegan Chili",
      description:
        "A hearty, meatless chili loaded with beans and vegetables, rounded out with garlic, cumin, and salt - chili powder alone leaves the classic chili flavor incomplete.",
      imageEmoji: "🌶️",
      cookTimeMinutes: 40,
      servings: 6,
      ingredients: [
        { text: "1 can black beans, drained", ingredient: "black beans", quantity: 1 },
        { text: "1 can kidney beans, drained", ingredient: "kidney beans", quantity: 1 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
        { text: "1 can diced tomatoes", ingredient: "tomato", quantity: 1 },
        { text: "1 cup corn", ingredient: "corn", quantity: 1 },
        { text: "3 tbsp chili powder", ingredient: "chili powder", quantity: 3 },
        { text: "1 tbsp cumin", ingredient: "cumin", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Sauté the onion and garlic until softened.",
        "Stir in the chili powder, cumin, diced tomatoes, black beans, kidney beans, and corn.",
        "Simmer for 25-30 minutes, stirring occasionally.",
        "Season with salt before serving.",
      ],
      tags: ["dinner", "vegan", "vegetarian"],
    },
    bg: {
      title: "Вегано чили",
      description:
        "Засищащо чили без месо, заредено с боб и зеленчуци, обогатено с чесън, кимион и сол - самото чили на прах оставя класическия вкус на чили непълен.",
      steps: [
        "Запържете лука и чесъна до омекване.",
        "Разбъркайте чили на прах, кимиона, нарязаните домати, черния боб, червения боб и царевицата.",
        "Къкрете 25-30 минути, разбърквайки от време на време.",
        "Подправете със сол преди сервиране.",
      ],
      ingredients: [
        "1 консерва черен боб, отцеден",
        "1 консерва червен боб, отцеден",
        "1 лук, нарязан на кубчета",
        "2 скилидки чесън, ситно нарязани",
        "1 консерва нарязани домати",
        "1 чаша царевица",
        "3 с.л. чили на прах",
        "1 с.л. кимион",
        "Сол на вкус",
      ],
    },
  },
  {
    en: {
      slug: "vegetable-curry",
      title: "Vegetable Curry",
      description:
        "A colorful mix of vegetables simmered in a fragrant coconut curry sauce with garlic and ginger - garlic and ginger are the aromatics a curry needs for real depth instead of tasting like plain curry-powder-flavored coconut milk.",
      imageEmoji: "🍛",
      cookTimeMinutes: 35,
      servings: 4,
      ingredients: [
        { text: "2 potatoes, cubed", ingredient: "potato", quantity: 2 },
        { text: "1 cup cauliflower florets", ingredient: "cauliflower", quantity: 1 },
        { text: "1 cup green peas", ingredient: "peas", quantity: 1 },
        { text: "1 can coconut milk", ingredient: "coconut milk", quantity: 1 },
        { text: "3 cloves garlic, minced", ingredient: "garlic", quantity: 3 },
        { text: "1 tbsp fresh ginger, grated", ingredient: "ginger", quantity: 1 },
        { text: "2 tbsp curry powder", ingredient: "curry powder", quantity: 2 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Sauté the onion until softened, then stir in the garlic, ginger, and curry powder and cook for 1 minute until fragrant.",
        "Add the potatoes and cauliflower with the coconut milk.",
        "Simmer for 20 minutes until the vegetables are tender.",
        "Stir in the peas and salt, and cook for another 5 minutes.",
      ],
      tags: ["dinner", "vegan", "vegetarian"],
    },
    bg: {
      title: "Зеленчуково къри",
      description:
        "Цветна смес от зеленчуци, къкрени в ароматен сос от кокосово мляко с чесън и джинджифил - чесънът и джинджифилът са ароматите, от които всяко къри се нуждае за истинска дълбочина на вкуса, вместо да има вкус на обикновено кокосово мляко с къри на прах.",
      steps: [
        "Запържете лука до омекване, после добавете чесъна, джинджифила и къри подправката и гответе 1 минута до ароматизиране.",
        "Добавете картофите и карфиола с кокосовото мляко.",
        "Къкрете 20 минути, докато зеленчуците омекнат.",
        "Разбъркайте граха и солта, гответе още 5 минути.",
      ],
      ingredients: [
        "2 картофа, нарязани на кубчета",
        "1 чаша розички карфиол",
        "1 чаша зелен грах",
        "1 консерва кокосово мляко",
        "3 скилидки чесън, ситно нарязани",
        "1 с.л. настърган пресен джинджифил",
        "2 с.л. къри подправка",
        "1 лук, нарязан на кубчета",
        "Сол на вкус",
      ],
    },
  },
  {
    en: {
      slug: "vegetable-spring-rolls",
      title: "Vegetable Spring Rolls",
      description:
        "Crispy fried rolls packed with cabbage, carrot, and glass noodles, seasoned with soy sauce and salt - an unseasoned filling is what makes fried spring rolls taste like crunchy wrappers around plain vegetables.",
      imageEmoji: "🥬",
      cookTimeMinutes: 40,
      servings: 6,
      ingredients: [
        { text: "2 cups shredded cabbage", ingredient: "cabbage", quantity: 2 },
        { text: "2 carrots, julienned", ingredient: "carrot", quantity: 2 },
        { text: "1 cup soaked glass noodles", ingredient: "glass noodles", quantity: 1 },
        { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
        { text: "1 tbsp soy sauce", ingredient: "soy sauce", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "20 spring roll wrappers", ingredient: "spring roll wrappers", quantity: 20 },
        { text: "2 cups vegetable oil for frying", ingredient: "vegetable oil", quantity: 2 },
      ],
      steps: [
        "Stir-fry the cabbage, carrot, garlic, and glass noodles with the soy sauce and salt briefly until just softened; cool slightly - seasoning the filling now is what keeps the rolls from tasting bland once fried.",
        "Spoon filling onto each wrapper and roll tightly, sealing the edge with water.",
        "Heat oil in a deep pan and fry the rolls until golden and crisp.",
        "Drain on paper towels and serve with dipping sauce.",
      ],
      tags: ["snack", "asian", "vegan"],
    },
    bg: {
      title: "Зеленчукови пролетни рула",
      description:
        "Хрупкави пържени рула, заредени със зеле, моркови и стъклена юфка, подправени със соев сос и сол - неподправен пълнеж е това, което прави пържените пролетни рула на вкус като хрупкави корички около обикновени зеленчуци.",
      steps: [
        "Запържете зелето, морковите, чесъна и стъклената юфка със соевия сос и солта за кратко до леко омекване; оставете да поизстинат - подправянето на пълнежа сега е това, което пази рулата от безвкусие след пържене.",
        "Сложете пълнеж върху всяка кора и навийте плътно, запечатвайки края с вода.",
        "Загрейте олио в дълбок тиган и пържете рулата до златисто и хрупкаво.",
        "Отцедете върху хартиени кърпи и сервирайте със сос за топене.",
      ],
      ingredients: [
        "2 чаши настъргано зеле",
        "2 моркова, нарязани на ивици",
        "1 чаша накиснала стъклена юфка",
        "2 скилидки чесън, ситно нарязани",
        "1 с.л. соев сос",
        "Сол на вкус",
        "20 кори за пролетни рула",
        "2 чаши олио за пържене",
      ],
    },
  },
  {
    en: {
      slug: "white-pizza",
      title: "White Pizza",
      description:
        "A garlicky, cheesy pizza with seasoned ricotta and mozzarella instead of tomato sauce - salt and pepper are what keep the ricotta from tasting like plain sweetened dairy under the melted mozzarella.",
      imageEmoji: "🍕",
      cookTimeMinutes: 35,
      servings: 4,
      ingredients: [
        { text: "1 pizza dough ball", ingredient: "pizza dough", quantity: 1 },
        { text: "1 cup ricotta cheese", ingredient: "ricotta cheese", quantity: 1 },
        { text: "2 cups shredded mozzarella", ingredient: "mozzarella", quantity: 2 },
        { text: "3 cloves garlic, minced", ingredient: "garlic", quantity: 3 },
        { text: "3 tbsp olive oil", ingredient: "olive oil", quantity: 3 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Preheat oven to 475°F.",
        "Roll out the dough and brush with olive oil and garlic.",
        "Mix the ricotta with salt and pepper, then dollop it over the dough and top with mozzarella.",
        "Bake for 12-15 minutes until the crust is golden and the cheese is bubbly.",
      ],
      tags: ["dinner", "italian", "vegetarian", "quick"],
    },
    bg: {
      title: "Бяла пица",
      description:
        "Чеснова, сирена пица с подправена рикота и моцарела вместо доматен сос - солта и черният пипер са това, което пази рикотата от вкус на обикновена подсладена млечна маса под разтопената моцарела.",
      steps: [
        "Загрейте фурната на 245°C.",
        "Разточете тестото и намажете със зехтин и чесън.",
        "Смесете рикотата със сол и черен пипер, после я сложете на бучки върху тестото и отгоре сложете моцарела.",
        "Печете 12-15 минути, докато кората стане златиста и сиренето заври.",
      ],
      ingredients: [
        "1 топка тесто за пица",
        "1 чаша рикота",
        "2 чаши настъргана моцарела",
        "3 скилидки чесън, ситно нарязани",
        "3 с.л. зехтин",
        "Сол на вкус",
        "Черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "wonton-soup",
      title: "Wonton Soup",
      description:
        "Delicate pork-filled dumplings seasoned with sesame oil and salt, simmered in a light, savory broth - a filling with nothing but pork, soy sauce, and ginger is thin on flavor without salt and sesame oil rounding it out.",
      imageEmoji: "🍜",
      cookTimeMinutes: 40,
      servings: 4,
      ingredients: [
        { text: "1/2 lb ground pork", ingredient: "ground pork", quantity: 0.5 },
        { text: "24 wonton wrappers", ingredient: "wonton wrappers", quantity: 24 },
        { text: "1 tbsp soy sauce", ingredient: "soy sauce", quantity: 1 },
        { text: "1 tsp grated ginger", ingredient: "ginger", quantity: 1 },
        { text: "1 tsp sesame oil", ingredient: "sesame oil", quantity: 1 },
        { text: "1 green onion, minced", ingredient: "green onion", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "6 cups chicken broth", ingredient: "chicken broth", quantity: 6 },
        { text: "2 green onions, sliced", ingredient: "green onion", quantity: 2 },
      ],
      steps: [
        "Mix the ground pork with soy sauce, ginger, sesame oil, minced green onion, and salt - sesame oil and salt are what keep the filling from tasting bland.",
        "Spoon a small amount of filling onto each wrapper, wet the edges, and fold into a pouch.",
        "Bring the chicken broth to a simmer, season with salt, and cook the wontons for 5-6 minutes until they float.",
        "Top with sliced green onions before serving.",
      ],
      tags: ["dinner", "asian"],
    },
    bg: {
      title: "Супа с уонтон",
      description:
        "Деликатни пълнени със свинско кнедли, подправени със сусамово масло и сол, къкрени в лек, ароматен бульон - пълнеж само от свинско, соев сос и джинджифил е беден на вкус без сол и сусамово масло, които го обогатяват.",
      steps: [
        "Смесете свинската кайма със соевия сос, джинджифила, сусамовото масло, ситно нарязания зелен лук и солта - сусамовото масло и солта са това, което пази пълнежа от безвкусие.",
        "Сложете малко пълнеж върху всяка кора, намокрете краищата и сгънете на пакетче.",
        "Оставете пилешкия бульон да заври, подправете със сол и гответе кнедлите 5-6 минути, докато изплуват.",
        "Отгоре сложете нарязан зелен лук преди сервиране.",
      ],
      ingredients: [
        "225 г свинска кайма",
        "24 кори за уонтон",
        "1 с.л. соев сос",
        "1 ч.л. настърган джинджифил",
        "1 ч.л. сусамово масло",
        "1 стрък зелен лук, ситно нарязан",
        "Сол на вкус",
        "6 чаши пилешки бульон",
        "2 стръка зелен лук, нарязани",
      ],
    },
  },
  {
    en: {
      slug: "zucchini-noodles-with-pesto",
      title: "Zucchini Noodles with Pesto",
      description:
        "Spiralized zucchini salted briefly to draw out excess moisture, then tossed in fresh basil pesto - a light, low-carb pasta alternative. Skipping the salting step is why zoodles often turn watery and dilute the pesto instead of staying light and flavorful.",
      imageEmoji: "🥒",
      cookTimeMinutes: 15,
      servings: 4,
      ingredients: [
        { text: "4 zucchini, spiralized", ingredient: "zucchini", quantity: 4 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "1/2 cup basil pesto", ingredient: "pesto", quantity: 0.5 },
        { text: "1/4 cup grated Parmesan", ingredient: "parmesan", quantity: 0.25 },
        { text: "1 cup cherry tomatoes, halved", ingredient: "cherry tomatoes", quantity: 1 },
      ],
      steps: [
        "Toss the zucchini noodles with a pinch of salt and let sit for 10 minutes, then pat dry - this draws out the moisture that would otherwise water down the pesto.",
        "Sauté the zucchini noodles in a hot pan for 2-3 minutes until just softened.",
        "Toss with the pesto off the heat.",
        "Stir in the cherry tomatoes.",
        "Top with Parmesan before serving.",
      ],
      tags: ["dinner", "italian", "vegetarian", "quick"],
    },
    bg: {
      title: "Тиквички на юфка с песто",
      description:
        "Спираловидно нарязани тиквички, посолени за кратко, за да отделят излишната влага, после разбъркани с прясно песто от босилек - лека, нисковъглехидратна алтернатива на пастата. Пропускането на осоляването е причината юфката от тиквички често да стане водниста и да разреди пестото, вместо да остане лека и ароматна.",
      steps: [
        "Разбъркайте юфката от тиквички с щипка сол и оставете за 10 минути, после подсушете - това отделя влагата, която иначе би разредила пестото.",
        "Запържете юфката от тиквички в горещ тиган за 2-3 минути до леко омекване.",
        "Разбъркайте с пестото извън котлона.",
        "Добавете чери доматите.",
        "Отгоре сложете пармезан преди сервиране.",
      ],
      ingredients: [
        "4 тиквички, нарязани спираловидно",
        "Сол на вкус",
        "1/2 чаша песто от босилек",
        "1/4 чаша настърган пармезан",
        "1 чаша чери домати, разрязани наполовина",
      ],
    },
  },
  {
    en: {
      slug: "zucchini-bread",
      title: "Zucchini Bread",
      description:
        "A moist, lightly spiced quick bread made with shredded zucchini and lifted with baking soda - without a leavening agent, a quick bread stays dense instead of rising.",
      imageEmoji: "🍞",
      cookTimeMinutes: 70,
      servings: 8,
      ingredients: [
        { text: "2 cups shredded zucchini", ingredient: "zucchini", quantity: 2 },
        { text: "2 cups flour", ingredient: "flour", quantity: 2 },
        { text: "1 tsp baking soda", ingredient: "baking soda", quantity: 1 },
        { text: "1/2 tsp salt", ingredient: "salt", quantity: 0.5 },
        { text: "1 cup sugar", ingredient: "sugar", quantity: 1 },
        { text: "2 eggs", ingredient: "eggs", quantity: 2 },
        { text: "1/2 cup vegetable oil", ingredient: "vegetable oil", quantity: 0.5 },
        { text: "1 tsp cinnamon", ingredient: "cinnamon", quantity: 1 },
      ],
      steps: [
        "Preheat oven to 350°F and grease a loaf pan.",
        "Whisk together the sugar, eggs, and oil, then stir in the zucchini.",
        "Mix in the flour, baking soda, salt, and cinnamon until just combined - baking soda is what makes the loaf rise instead of staying dense.",
        "Pour into the pan and bake for 55-60 minutes until a toothpick comes out clean.",
      ],
      tags: ["breakfast", "vegetarian", "baking"],
    },
    bg: {
      title: "Хляб с тиквички",
      description:
        "Сочен, леко подправен бърз хляб, направен с настъргани тиквички и повдигнат със сода бикарбонат - без набухвател бързият хляб остава плътен, вместо да бухне.",
      steps: [
        "Загрейте фурната на 175°C и намажете тава за хляб.",
        "Разбийте захарта, яйцата и олиото, после разбъркайте тиквичките.",
        "Добавете брашното, содата бикарбонат, солта и канелата до смесване - содата бикарбонат е това, което кара хляба да бухне, вместо да остане плътен.",
        "Изсипете в тавата и печете 55-60 минути, докато клечка за зъби излезе чиста.",
      ],
      ingredients: [
        "2 чаши настъргани тиквички",
        "2 чаши брашно",
        "1 ч.л. сода бикарбонат",
        "1/2 ч.л. сол",
        "1 чаша захар",
        "2 яйца",
        "1/2 чаша олио",
        "1 ч.л. канела",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
