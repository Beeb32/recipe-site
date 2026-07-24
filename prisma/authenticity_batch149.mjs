import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "banana-nice-cream",
      title: "Banana Nice Cream",
      description:
        "Creamy, dairy-free soft-serve made from frozen bananas blended with a swirl of peanut butter - using almond milk instead of dairy milk is what keeps this actually dairy-free instead of only partly so.",
      imageEmoji: "🍌",
      cookTimeMinutes: 10,
      servings: 2,
      ingredients: [
        { text: "4 frozen bananas, sliced", ingredient: "banana", quantity: 4 },
        { text: "2 tbsp peanut butter", ingredient: "peanut butter", quantity: 2 },
        { text: "1 tbsp almond milk", ingredient: "almond milk", quantity: 1 },
      ],
      steps: [
        "Blend the frozen banana slices in a food processor until crumbly.",
        "Add the peanut butter and almond milk, blending until smooth and creamy.",
        "Serve immediately as soft-serve, or freeze for a firmer texture.",
      ],
      tags: ["dessert", "vegetarian", "vegan", "quick"],
    },
    bg: {
      title: "Бананов \"сладолед\"",
      description:
        "Кремообразен, безмлечен сладолед от замразени банани, разбити с фъстъчено масло - бадемовото мляко вместо краве е това, което пази десерта наистина безмлечен, а не само отчасти.",
      steps: [
        "Разбийте замразените бананови резенчета в кухненски робот до трошлива консистенция.",
        "Добавете фъстъченото масло и бадемовото мляко, разбивайте до гладкост и кремообразност.",
        "Сервирайте веднага като сладолед или замразете за по-твърда текстура.",
      ],
      ingredients: ["4 замразени банана, нарязани", "2 с.л. фъстъчено масло", "1 с.л. бадемово мляко"],
    },
  },
  {
    en: {
      slug: "caprese-skewers",
      title: "Caprese Skewers",
      description:
        "Bite-sized skewers of mozzarella, cherry tomato, and basil, seasoned with salt and olive oil before finishing with balsamic glaze - salt is what makes classic caprese taste balanced instead of flat.",
      imageEmoji: "🍅",
      cookTimeMinutes: 15,
      servings: 6,
      ingredients: [
        { text: "1 pint cherry tomatoes", ingredient: "cherry tomatoes", quantity: 1 },
        { text: "8 oz mozzarella balls", ingredient: "mozzarella", quantity: 8 },
        { text: "1 cup fresh basil leaves", ingredient: "basil", quantity: 1 },
        { text: "1 tbsp olive oil", ingredient: "olive oil", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "2 tbsp balsamic glaze", ingredient: "balsamic glaze", quantity: 2 },
      ],
      steps: [
        "Thread a cherry tomato, basil leaf, and mozzarella ball onto small skewers.",
        "Repeat with the remaining ingredients.",
        "Arrange on a platter, then season with salt and drizzle with olive oil - salt is what keeps caprese from tasting flat.",
        "Finish with a drizzle of balsamic glaze and serve chilled or at room temperature.",
      ],
      tags: ["snack", "vegetarian", "italian", "quick"],
    },
    bg: {
      title: "Капрезе на шишчета",
      description:
        "Хапки на шишчета от моцарела, чери домат и босилек, подправени със сол и зехтин преди да се завършат с балсамов гланц - солта е това, което прави класическото капрезе балансирано, а не безвкусно.",
      steps: [
        "Нанижете чери домат, лист босилек и топче моцарела на малки шишчета.",
        "Повторете с останалите съставки.",
        "Подредете на плато, после подправете със сол и полейте със зехтин - солта пази капрезето от безвкусие.",
        "Завършете с балсамов гланц и сервирайте охладено или на стайна температура.",
      ],
      ingredients: [
        "1 кутия чери домати",
        "225 г топчета моцарела",
        "1 чаша пресни листа босилек",
        "1 с.л. зехтин",
        "Сол на вкус",
        "2 с.л. балсамов гланц",
      ],
    },
  },
  {
    en: {
      slug: "coconut-chickpea-curry",
      title: "Coconut Chickpea Curry",
      description:
        "Chickpeas simmered in a creamy coconut curry sauce with garlic and ginger - garlic and ginger are the aromatics a curry needs for real depth, and this dish tasted flat without them.",
      imageEmoji: "🍛",
      cookTimeMinutes: 30,
      servings: 4,
      ingredients: [
        { text: "2 cans chickpeas, drained", ingredient: "chickpeas", quantity: 2 },
        { text: "1 can coconut milk", ingredient: "coconut milk", quantity: 1 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "3 cloves garlic, minced", ingredient: "garlic", quantity: 3 },
        { text: "1 tbsp fresh ginger, grated", ingredient: "ginger", quantity: 1 },
        { text: "2 tbsp curry powder", ingredient: "curry powder", quantity: 2 },
        { text: "1 can diced tomatoes", ingredient: "tomato", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Sauté the onion until softened, then stir in the garlic, ginger, and curry powder and cook for 1 minute until fragrant.",
        "Add the diced tomatoes and coconut milk, simmering for 10 minutes.",
        "Stir in the chickpeas and salt, then simmer for another 10 minutes.",
        "Serve over rice.",
      ],
      tags: ["dinner", "vegan", "vegetarian", "quick"],
    },
    bg: {
      title: "Къри с нахут и кокосово мляко",
      description:
        "Нахут, къкрен в кремообразен сос от кокосово мляко с чесън и джинджифил - чесънът и джинджифилът са ароматите, от които всяко къри се нуждае за истинска дълбочина на вкуса, и без тях ястието имаше плосък вкус.",
      steps: [
        "Запържете лука до омекване, после добавете чесъна, джинджифила и къри подправката и гответе 1 минута до ароматизиране.",
        "Добавете нарязаните домати и кокосовото мляко, къкрете 10 минути.",
        "Разбъркайте нахута и солта, после къкрете още 10 минути.",
        "Сервирайте върху ориз.",
      ],
      ingredients: [
        "2 консерви нахут, отцеден",
        "1 консерва кокосово мляко",
        "1 лук, нарязан на кубчета",
        "3 скилидки чесън, ситно нарязани",
        "1 с.л. настърган пресен джинджифил",
        "2 с.л. къри подправка",
        "1 консерва нарязани домати",
        "Сол на вкус",
      ],
    },
  },
  {
    en: {
      slug: "lamb-burger",
      title: "Lamb Burger",
      description:
        "A juicy, richly spiced lamb burger with a Mediterranean twist of mint and feta - salt is what a ground-meat patty needs to hold together and taste seasoned instead of bland, and mint is the herb that makes the Mediterranean flavor real instead of just a description.",
      imageEmoji: "🍔",
      cookTimeMinutes: 25,
      servings: 4,
      ingredients: [
        { text: "1 1/2 lb ground lamb", ingredient: "ground lamb", quantity: 1.5 },
        { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
        { text: "1 tsp cumin", ingredient: "cumin", quantity: 1 },
        { text: "2 tbsp chopped fresh mint", ingredient: "mint", quantity: 2 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
        { text: "4 hamburger buns", ingredient: "hamburger buns", quantity: 4 },
        { text: "1/4 cup crumbled feta", ingredient: "feta cheese", quantity: 0.25 },
      ],
      steps: [
        "Mix the ground lamb with garlic, cumin, mint, salt, and pepper, then form into four patties - salt is essential for a ground-meat patty to hold together and taste properly seasoned.",
        "Cook in a skillet or grill for 4-5 minutes per side.",
        "Top with crumbled feta.",
        "Serve on buns.",
      ],
      tags: ["dinner", "mediterranean", "quick"],
    },
    bg: {
      title: "Агнешки бургер",
      description:
        "Сочен, богато подправен агнешки бургер със средиземноморски щрих от мента и фета - солта е това, от което всяка кайма се нуждае, за да се свърже и да има подправен вкус вместо блудкав, а ментата е билката, която прави средиземноморския вкус истински, а не само на думи.",
      steps: [
        "Смесете агнешката кайма с чесъна, кимиона, ментата, солта и черния пипер, после оформете четири кюфтета - солта е задължителна, за да се свърже каймата и да има правилно подправен вкус.",
        "Гответе в тиган или на скара по 4-5 минути от всяка страна.",
        "Отгоре сложете натрошена фета.",
        "Сервирайте в хлебчета.",
      ],
      ingredients: [
        "680 г агнешка кайма",
        "2 скилидки чесън, ситно нарязани",
        "1 ч.л. кимион",
        "2 с.л. нарязана прясна мента",
        "Сол на вкус",
        "Черен пипер на вкус",
        "4 хлебчета за бургер",
        "1/4 чаша натрошена фета",
      ],
    },
  },
  {
    en: {
      slug: "lemon-cookies",
      title: "Lemon Cookies",
      description:
        "Soft, bright cookies bursting with fresh lemon flavor from both juice and zest, lifted with baking powder - zest carries the aromatic lemon oils that juice alone can't deliver, and baking powder is what keeps the cookies soft instead of dense.",
      imageEmoji: "🍋",
      cookTimeMinutes: 30,
      servings: 24,
      ingredients: [
        { text: "2 1/2 cups flour", ingredient: "flour", quantity: 2.5 },
        { text: "1 tsp baking powder", ingredient: "baking powder", quantity: 1 },
        { text: "1/4 tsp salt", ingredient: "salt", quantity: 0.25 },
        { text: "1 cup butter, softened", ingredient: "butter", quantity: 1 },
        { text: "1 cup sugar", ingredient: "sugar", quantity: 1 },
        { text: "1 egg", ingredient: "eggs", quantity: 1 },
        { text: "1 tbsp lemon zest", ingredient: "lemon zest", quantity: 1 },
        { text: "3 tbsp fresh lemon juice", ingredient: "lemon juice", quantity: 3 },
        { text: "1 cup powdered sugar for glaze", ingredient: "powdered sugar", quantity: 1 },
      ],
      steps: [
        "Preheat oven to 350°F.",
        "Whisk together the flour, baking powder, and salt in a bowl.",
        "Cream the butter and sugar, then beat in the egg, lemon zest, and lemon juice - zest is what gives the cookies their bright lemon aroma, not juice alone.",
        "Mix in the flour mixture until a soft dough forms.",
        "Drop spoonfuls onto a baking sheet, bake for 10-12 minutes, then drizzle with a glaze of powdered sugar and lemon juice.",
      ],
      tags: ["dessert", "vegetarian", "baking"],
    },
    bg: {
      title: "Лимонови бисквити",
      description:
        "Меки, свежи бисквити, изпълнени с истински лимонов вкус от сок и кора, повдигнати с бакпулвер - кората носи ароматните лимонови масла, които само сокът не може да достави, а бакпулверът пази бисквитите меки вместо плътни.",
      steps: [
        "Загрейте фурната на 175°C.",
        "Разбъркайте брашното, бакпулвера и солта в купа.",
        "Разбийте маслото и захарта, после добавете яйцето, лимоновата кора и лимоновия сок - кората е това, което дава на бисквитите ярък лимонов аромат, а не само сокът.",
        "Добавете брашнената смес до образуване на меко тесто.",
        "Слагайте лъжица тесто върху тава и печете 10-12 минути, после полейте с глазура от пудра захар и лимонов сок.",
      ],
      ingredients: [
        "2 1/2 чаши брашно",
        "1 ч.л. бакпулвер",
        "1/4 ч.л. сол",
        "1 чаша масло, омекнало",
        "1 чаша захар",
        "1 яйце",
        "1 с.л. настъргана лимонова кора",
        "3 с.л. пресен лимонов сок",
        "1 чаша пудра захар за глазура",
      ],
    },
  },
  {
    en: {
      slug: "microwave-mug-cake",
      title: "Microwave Mug Cake",
      description:
        "A single-serving chocolate cake baked right in a mug in the microwave, with a touch of baking powder for lift - without it, the batter stays dense in the microwave instead of rising like a cake.",
      imageEmoji: "🧁",
      cookTimeMinutes: 5,
      servings: 1,
      ingredients: [
        { text: "4 tbsp flour", ingredient: "flour", quantity: 4 },
        { text: "4 tbsp sugar", ingredient: "sugar", quantity: 4 },
        { text: "2 tbsp cocoa powder", ingredient: "cocoa powder", quantity: 2 },
        { text: "1/2 tsp baking powder", ingredient: "baking powder", quantity: 0.5 },
        { text: "Pinch of salt", ingredient: "salt", quantity: null },
        { text: "3 tbsp milk", ingredient: "milk", quantity: 3 },
        { text: "3 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 3 },
      ],
      steps: [
        "Whisk together the flour, sugar, cocoa powder, baking powder, and salt in a large mug.",
        "Stir in the milk and vegetable oil until smooth.",
        "Microwave for 90 seconds to 2 minutes until risen and set.",
        "Let cool slightly before eating.",
      ],
      tags: ["dessert", "quick", "vegetarian"],
    },
    bg: {
      title: "Кекс в чаша за микровълнова",
      description:
        "Шоколадов кекс за един човек, изпечен направо в чаша в микровълновата, с малко бакпулвер за бухналост - без него тестото остава плътно в микровълновата, вместо да бухне като кекс.",
      steps: [
        "Разбъркайте брашното, захарта, какаото, бакпулвера и солта в голяма чаша.",
        "Добавете млякото и олиото, разбъркайте до гладкост.",
        "Гответе в микровълнова 90 секунди до 2 минути, докато бухне и се стегне.",
        "Оставете да поизстине леко преди хапване.",
      ],
      ingredients: [
        "4 с.л. брашно",
        "4 с.л. захар",
        "2 с.л. какао",
        "1/2 ч.л. бакпулвер",
        "Щипка сол",
        "3 с.л. мляко",
        "3 с.л. олио",
      ],
    },
  },
  {
    en: {
      slug: "no-bake-cheesecake-cups",
      title: "No-Bake Cheesecake Cups",
      description:
        "Creamy, individual cheesecake cups with a graham cracker crust, brightened with vanilla and a touch of lemon juice - vanilla and lemon are what give cheesecake filling its characteristic tang instead of tasting like plain sweetened cream cheese.",
      imageEmoji: "🍰",
      cookTimeMinutes: 20,
      servings: 6,
      ingredients: [
        { text: "1 cup graham cracker crumbs", ingredient: "graham crackers", quantity: 1 },
        { text: "4 tbsp melted butter", ingredient: "butter", quantity: 4 },
        { text: "16 oz cream cheese, softened", ingredient: "cream cheese", quantity: 16 },
        { text: "1/2 cup sugar", ingredient: "sugar", quantity: 0.5 },
        { text: "1 tsp vanilla extract", ingredient: "vanilla extract", quantity: 1 },
        { text: "1 tbsp lemon juice", ingredient: "lemon juice", quantity: 1 },
        { text: "1 cup whipped cream", ingredient: "whipped cream", quantity: 1 },
      ],
      steps: [
        "Mix the graham cracker crumbs with melted butter and press into the bottom of small cups.",
        "Beat the cream cheese, sugar, vanilla extract, and lemon juice together until smooth - vanilla and lemon are what give the filling its real cheesecake tang.",
        "Fold in the whipped cream until fully combined.",
        "Spoon the mixture over the crusts and chill for at least 2 hours before serving.",
      ],
      tags: ["dessert", "vegetarian"],
    },
    bg: {
      title: "Чийзкейк чашки без печене",
      description:
        "Кремообразни индивидуални чийзкейк чашки с коричка от греъм крекери, освежени с ванилия и малко лимонов сок - ванилията и лимонът са това, което дава на пълнежа характерния чийзкейк вкус, а не просто вкус на подсладено крема сирене.",
      steps: [
        "Смесете натрошените греъм крекери с разтопеното масло и наблъскайте на дъното на малки чашки.",
        "Разбийте крема сиренето, захарта, ванилията и лимоновия сок до гладкост - ванилията и лимонът са това, което дава на пълнежа истинския чийзкейк вкус.",
        "Внимателно вмесете разбитата сметана до пълно смесване.",
        "Сложете сместа върху коричките и охладете поне 2 часа преди сервиране.",
      ],
      ingredients: [
        "1 чаша натрошени греъм крекери",
        "4 с.л. разтопено масло",
        "450 г крема сирене, омекнало",
        "1/2 чаша захар",
        "1 ч.л. екстракт от ванилия",
        "1 с.л. лимонов сок",
        "1 чаша разбита сметана",
      ],
    },
  },
  {
    en: {
      slug: "no-churn-vanilla-ice-cream",
      title: "No-Churn Vanilla Ice Cream",
      description:
        "Rich, creamy vanilla ice cream made without an ice cream maker, with a pinch of salt to sharpen the vanilla flavor - salt is what keeps the sweetness from tasting flat.",
      imageEmoji: "🍦",
      cookTimeMinutes: 15,
      servings: 8,
      ingredients: [
        { text: "2 cups heavy cream", ingredient: "heavy cream", quantity: 2 },
        { text: "1 can sweetened condensed milk", ingredient: "condensed milk", quantity: 1 },
        { text: "1 tsp vanilla extract", ingredient: "vanilla extract", quantity: 1 },
        { text: "Pinch of salt", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Whip the heavy cream to stiff peaks.",
        "Gently fold in the condensed milk, vanilla, and salt until fully combined - salt is what keeps the vanilla flavor from tasting flat.",
        "Pour into a loaf pan and freeze for at least 6 hours.",
        "Scoop and serve.",
      ],
      tags: ["dessert", "vegetarian"],
    },
    bg: {
      title: "Ванилов сладолед без сладоледна машина",
      description:
        "Богат, кремообразен ванилов сладолед, приготвен без сладоледна машина, с щипка сол за подсилване на ваниловия вкус - солта е това, което пази сладостта от плосък вкус.",
      steps: [
        "Разбийте сметаната до твърди връхчета.",
        "Внимателно вмесете кондензираното мляко, ванилията и солта до пълно смесване - солта пази ваниловия вкус от плосък вкус.",
        "Изсипете в тава за хляб и замразете поне 6 часа.",
        "Извадете на топки и сервирайте.",
      ],
      ingredients: [
        "2 чаши течна сметана",
        "1 кутия кондензирано мляко",
        "1 ч.л. екстракт от ванилия",
        "Щипка сол",
      ],
    },
  },
  {
    en: {
      slug: "oven-smoked-brisket",
      title: "Oven Smoked Brisket",
      description:
        "Beef brisket rubbed with smoky spices and liquid smoke, roasted uncovered until a bark forms, then wrapped and slow-roasted until fall-apart tender - roasting uncovered first is what lets a smoky bark develop before wrapping in foil traps in the moisture, and liquid smoke provides the actual smoke flavor smoked paprika alone can't deliver.",
      imageEmoji: "🍖",
      cookTimeMinutes: 240,
      servings: 8,
      ingredients: [
        { text: "4 lb beef brisket", ingredient: "beef brisket", quantity: 4 },
        { text: "3 tbsp smoked paprika", ingredient: "smoked paprika", quantity: 3 },
        { text: "2 tbsp brown sugar", ingredient: "brown sugar", quantity: 2 },
        { text: "1 tbsp garlic powder", ingredient: "garlic powder", quantity: 1 },
        { text: "1 tbsp coarse black pepper", ingredient: "black pepper", quantity: 1 },
        { text: "1 tbsp liquid smoke", ingredient: "liquid smoke", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Preheat oven to 300°F.",
        "Rub the brisket with smoked paprika, brown sugar, garlic powder, black pepper, liquid smoke, and salt.",
        "Place uncovered in a roasting pan and roast for 1.5-2 hours until a dark bark forms on the surface - roasting uncovered first is what lets the bark develop instead of steaming under foil.",
        "Wrap tightly in foil and continue roasting for 2 more hours until fork-tender, then rest for 20 minutes before slicing.",
      ],
      tags: ["dinner"],
    },
    bg: {
      title: "Пушена гърдинка на фурна",
      description:
        "Телешка гърдинка, натрита с димни подправки и течен дим, изпечена без покритие до образуване на коричка, после увита и бавно изпечена до пълна мекота - печенето без покритие първо е това, което позволява на димната коричка да се образува, преди увиването във фолио да задържи влагата, а течният дим е това, което дава истинския димен вкус, който самата пушена чушка не може да достави.",
      steps: [
        "Загрейте фурната на 150°C.",
        "Натрийте гърдинката с пушената чушка, кафявата захар, чесновия прах, черния пипер, течния дим и солта.",
        "Поставете без покритие в тава за печене и печете 1.5-2 часа, докато се образува тъмна коричка отгоре - печенето без покритие първо е това, което позволява на коричката да се образува, вместо месото да се задуши под фолиото.",
        "Увийте плътно във фолио и продължете да печете още 2 часа, докато омекне напълно, после оставете да си почине 20 минути преди нарязване.",
      ],
      ingredients: [
        "1.8 кг телешка гърдинка",
        "3 с.л. пушена чушка",
        "2 с.л. кафява захар",
        "1 с.л. чеснов прах",
        "1 с.л. едро смлян черен пипер",
        "1 с.л. течен дим",
        "Сол на вкус",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
