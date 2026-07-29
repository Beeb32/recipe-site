import { prisma, runTranslations } from "./translate-lib.mjs";

// 10 new Bulgarian recipes, each web-researched for authentic technique
// before writing, per standing instructions. Drob Sarma uses chicken liver
// in place of the traditional mixed lamb offal (rarely available outside
// Bulgaria) - substitution stated explicitly in its own description.
const newRecipes = [
  {
    slug: "kyopoolu",
    title: "Kyopoolu",
    description:
      "A smoky Bulgarian roasted eggplant and red pepper dip, blended with garlic and a splash of lemon - roasting the vegetables until the skins fully char, then letting them steam under a cover before peeling, is what gives kyopoolu its deep, smoky flavor instead of a raw, grassy one.",
    imageEmoji: "🍆",
    cookTimeMinutes: 45,
    servings: 4,
    ingredients: [
      { text: "2 large eggplants", ingredient: "eggplant", quantity: 2 },
      { text: "2 red bell peppers", ingredient: "bell peppers", quantity: 2 },
      { text: "1 ripe tomato, grated or finely chopped", ingredient: "tomato", quantity: 1 },
      { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
      { text: "2 tbsp olive oil", ingredient: "olive oil", quantity: 2 },
      { text: "1 tbsp lemon juice", ingredient: "lemon juice", quantity: 1 },
      { text: "2 tbsp finely chopped parsley", ingredient: "parsley", quantity: 2 },
      { text: "Salt to taste", ingredient: "salt", quantity: null },
    ],
    steps: [
      "Preheat the oven to 450°F. Prick the eggplants a few times with a fork, then place them and the red peppers on a baking sheet.",
      "Roast for 30-40 minutes, turning occasionally, until the skins are fully charred and blistered and the vegetables have collapsed and softened all the way through - full charring is what gives kyopoolu its characteristic smoky flavor, not just tender flesh.",
      "Transfer the eggplants and peppers to a bowl and cover tightly with plastic wrap or a lid for 10-15 minutes - trapping the steam loosens the skins and makes them much easier to peel off.",
      "Peel off and discard the charred skins, stems, and seeds, then drain the flesh briefly in a colander to remove excess liquid.",
      "Finely chop the eggplant and pepper flesh (or pulse briefly in a food processor for a coarser dip), then mix in the grated tomato, garlic, olive oil, lemon juice, parsley, and salt.",
      "Chill for at least 30 minutes before serving so the flavors meld - kyopoolu is traditionally served cold or at room temperature as an appetizer with bread.",
    ],
    tags: ["snack", "vegetarian", "vegan"],
    bg: {
      title: "Кьопоолу",
      description:
        "Димлив български дип от печени патладжани и червени чушки, разбит с чесън и малко лимонов сок - печенето на зеленчуците, докато кожата им напълно почернее, а после оставянето им да се задушат покрити, преди белене, е това, което дава на кьопоолуто дълбокия димен вкус, а не суров, тревист.",
      steps: [
        "Загрейте фурната на 230°C. Набодете патладжаните няколко пъти с вилица, после ги наредете заедно с червените чушки върху тава за печене.",
        "Печете 30-40 минути, като обръщате от време на време, докато кожата напълно почернее и се напука, а зеленчуците напълно омекнат отвътре - пълното изгаряне на кожата е това, което дава на кьопоолуто характерния димен вкус, не само мека месеста част.",
        "Прехвърлете патладжаните и чушките в купа и покрийте плътно с фолио или капак за 10-15 минути - задържаната пара разхлабва кожата и я прави много по-лесна за белене.",
        "Обелете и изхвърлете изгорялата кожа, дръжките и семките, после отцедете месестата част за кратко в цедка, за да премахнете излишната течност.",
        "Нарежете ситно месестата част на патладжана и чушките (или пуснете за кратко в кухненски робот за по-едра консистенция), после разбъркайте с настъргания домат, чесъна, зехтина, лимоновия сок, магданоза и солта.",
        "Оставете да се охлади поне 30 минути преди сервиране, за да се съчетаят вкусовете - кьопоолуто традиционно се сервира студено или на стайна температура като предястие с хляб.",
      ],
      ingredients: [
        "2 големи патладжана",
        "2 червени чушки",
        "1 узрял домат, настърган или ситно нарязан",
        "2 скилидки чесън, ситно нарязани",
        "2 с.л. зехтин",
        "1 с.л. лимонов сок",
        "2 с.л. ситно нарязан магданоз",
        "Сол на вкус",
      ],
    },
  },
  {
    slug: "ovcharska-salad",
    title: "Ovcharska Salad (Shepherd's Salad)",
    description:
      "Bulgaria's hearty 'shepherd's salad' - built on the same tomato-cucumber-onion-pepper base as shopska salad, but topped with roasted pepper, ham, mushrooms, and hard-boiled egg before the sirene is grated over - the extra toppings are what turn a light side salad into a filling meal on their own.",
    imageEmoji: "🥗",
    cookTimeMinutes: 25,
    servings: 4,
    ingredients: [
      { text: "3 ripe tomatoes, diced", ingredient: "tomato", quantity: 3 },
      { text: "1 cucumber, diced", ingredient: "cucumber", quantity: 1 },
      { text: "1/2 onion, finely chopped", ingredient: "onion", quantity: 0.5 },
      { text: "1 roasted red bell pepper, sliced", ingredient: "bell peppers", quantity: 1 },
      { text: "3.5 oz cooked ham, diced", ingredient: "ham", quantity: 3.5 },
      { text: "3.5 oz mushrooms, sautéed and sliced", ingredient: "mushroom", quantity: 3.5 },
      { text: "2 hard-boiled eggs, sliced", ingredient: "eggs", quantity: 2 },
      { text: "5 oz sirene (Bulgarian white brined cheese), grated", ingredient: "sirene", quantity: 5 },
      { text: "3 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 3 },
      { text: "Salt to taste", ingredient: "salt", quantity: null },
    ],
    steps: [
      "Combine the diced tomatoes, cucumber, and onion in a large salad bowl.",
      "Add the sliced roasted pepper, diced ham, and sautéed mushrooms, then toss gently with the vegetable oil and salt.",
      "Arrange the sliced hard-boiled eggs over the top.",
      "Finish with a generous layer of grated sirene over the entire salad - like shopska salad, the cheese sits on top rather than being tossed in, so it stays visible and doesn't dissolve into the dressing.",
      "Serve immediately at room temperature.",
    ],
    tags: ["lunch", "dinner", "salad"],
    bg: {
      title: "Овчарска салата",
      description:
        "Наситената българска овчарска салата - изградена на същата основа от домати, краставици, лук и чушки като шопската салата, но допълнена с печена чушка, шунка, гъби и твърдо сварено яйце, преди отгоре да се настърже сиренето - допълнителните добавки са това, което превръща една лека салата в самостоятелно засищащо ястие.",
      steps: [
        "Смесете нарязаните на кубчета домати, краставица и лук в голяма салатна купа.",
        "Добавете нарязаната печена чушка, нарязаната на кубчета шунка и запържените гъби, после разбъркайте леко с олиото и солта.",
        "Наредете нарязаните твърдо сварени яйца отгоре.",
        "Завършете с щедър слой настъргано сирене върху цялата салата - както при шопската салата, сиренето остава отгоре, вместо да се разбърква, за да остане видимо и да не се разтвори в дресинга.",
        "Сервирайте веднага на стайна температура.",
      ],
      ingredients: [
        "3 узрели домата, нарязани на кубчета",
        "1 краставица, нарязана на кубчета",
        "1/2 лук, ситно нарязан",
        "1 печена червена чушка, нарязана",
        "100 г варена шунка, нарязана на кубчета",
        "100 г гъби, запържени и нарязани",
        "2 твърдо сварени яйца, нарязани",
        "150 г сирене, настъргано",
        "3 с.л. олио",
        "Сол на вкус",
      ],
    },
  },
  {
    slug: "tutmanik",
    title: "Tutmanik",
    description:
      "A yeasted Bulgarian cheese bread from the banitsa family, layered with sirene and yogurt and brushed with butter between each fold before baking - the layering and butter-brushing is what gives tutmanik its flaky, pull-apart texture instead of a dense, uniform crumb.",
    imageEmoji: "🧀",
    cookTimeMinutes: 100,
    servings: 8,
    ingredients: [
      { text: "3 1/2 cups flour", ingredient: "flour", quantity: 3.5 },
      { text: "1 packet (2 1/4 tsp) yeast", ingredient: "yeast", quantity: 2.25 },
      { text: "1 tsp sugar", ingredient: "sugar", quantity: 1 },
      { text: "1 tsp salt", ingredient: "salt", quantity: 1 },
      { text: "1 1/4 cups warm water", ingredient: "water", quantity: 1.25 },
      { text: "2 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 2 },
      { text: "10 oz sirene (Bulgarian white brined cheese), crumbled", ingredient: "sirene", quantity: 10 },
      { text: "1 cup plain yogurt", ingredient: "yogurt", quantity: 1 },
      { text: "3 eggs", ingredient: "eggs", quantity: 3 },
      { text: "6 tbsp melted butter", ingredient: "butter", quantity: 6 },
    ],
    steps: [
      "Dissolve the yeast and sugar in the warm water and let sit for 5-10 minutes until foamy.",
      "Mix the flour and salt in a large bowl, add the yeast mixture and oil, and knead for about 8 minutes until you have a smooth, elastic dough. Cover and let rise for 1 hour, until doubled in size.",
      "Meanwhile, mash the crumbled sirene with the yogurt and 2 of the eggs to make a smooth filling.",
      "Punch down the dough and divide into several pieces. Stretch or roll each piece thin, brush with melted butter, spread with the cheese filling, then fold or roll it up and place in a buttered baking pan - it's this layering of thin dough, butter, and filling, not a single thick crust, that gives tutmanik its characteristic flaky pull-apart texture.",
      "Repeat until all the dough and filling are used, arranging the pieces snugly in the pan. Brush the top with the remaining beaten egg.",
      "Let rest for 15-20 minutes, then bake at 400°F for 30-35 minutes until deep golden brown. Brush with any remaining melted butter as soon as it comes out of the oven.",
      "Let cool slightly before slicing. Serve warm, traditionally with ayran or tea.",
    ],
    tags: ["breakfast", "baking", "vegetarian"],
    bg: {
      title: "Тутманик",
      description:
        "Втасан на мая български хляб със сирене от семейството на баницата, послоен със сирене и кисело мляко и намазван с масло между всяко сгъване преди печене - послояването и намазването с масло е това, което дава на тутманика неговата ронлива, лесна за откъсване текстура, вместо плътна, еднородна средина.",
      steps: [
        "Разтворете маята и захарта в топлата вода и оставете за 5-10 минути, докато се разпени.",
        "Смесете брашното и солта в голяма купа, добавете маената смес и олиото, и месете около 8 минути, докато се получи гладко, еластично тесто. Покрийте и оставете да втаса 1 час, докато удвои обема си.",
        "Междувременно, разбийте натрошеното сирене с киселото мляко и 2 от яйцата, за да направите гладък пълнеж.",
        "Ударете тестото, за да излезе въздухът, и го разделете на няколко части. Разтегнете или разточете всяка част тънко, намажете с разтопено масло, разпределете сиренения пълнеж, после сгънете или навийте на руло и наредете в намазана с масло тава за печене - именно послояването на тънко тесто, масло и пълнеж, а не една плътна кора, е това, което дава на тутманика характерната ронлива, лесна за откъсване текстура.",
        "Повторете, докато свърши тестото и пълнежът, като наредете парчетата плътно в тавата. Намажете отгоре с останалото разбито яйце.",
        "Оставете да втаса 15-20 минути, после печете на 200°C 30-35 минути, докато стане дълбоко златисто кафяво. Намажете с останалото разтопено масло веднага щом излезе от фурната.",
        "Оставете да изстине леко преди рязане. Сервирайте топъл, традиционно с айран или чай.",
      ],
      ingredients: [
        "3 1/2 чаши брашно",
        "1 пакетче (2 1/4 ч.л.) мая",
        "1 ч.л. захар",
        "1 ч.л. сол",
        "1 1/4 чаши топла вода",
        "2 с.л. олио",
        "280 г сирене, натрошено",
        "1 чаша кисело мляко",
        "3 яйца",
        "6 с.л. разтопено масло",
      ],
    },
  },
  {
    slug: "popara",
    title: "Popara",
    description:
      "A simple Bulgarian bread porridge made by pouring hot milk over stale bread and letting it steam under a cover rather than boiling it, then finishing with butter and crumbled sirene - steaming instead of boiling is what keeps the bread pieces soft but still holding their shape, instead of turning to mush.",
    imageEmoji: "🍞",
    cookTimeMinutes: 15,
    servings: 2,
    ingredients: [
      { text: "4 cups stale bread, torn into pieces", ingredient: "bread", quantity: 4 },
      { text: "2 cups milk", ingredient: "milk", quantity: 2 },
      { text: "3 tbsp butter", ingredient: "butter", quantity: 3 },
      { text: "5 oz sirene (Bulgarian white brined cheese), crumbled", ingredient: "sirene", quantity: 5 },
      { text: "Salt to taste", ingredient: "salt", quantity: null },
      { text: "1/2 tsp paprika, for serving", ingredient: "paprika", quantity: 0.5 },
    ],
    steps: [
      "Tear the stale bread into bite-sized pieces and place them in a large heatproof bowl.",
      "Heat the milk in a saucepan until just steaming (not boiling), then pour it over the bread.",
      "Cover the bowl immediately with a lid or plate and let it steam for 5 minutes - covering and steaming rather than boiling the bread directly is what keeps the pieces soft but intact instead of dissolving into mush.",
      "Uncover, add the butter and most of the crumbled sirene, and stir gently to combine, letting the residual heat melt the butter and soften the cheese.",
      "Season with a pinch of salt if needed, sprinkle the remaining sirene and a dusting of paprika on top, and serve warm.",
    ],
    tags: ["breakfast", "vegetarian", "quick"],
    bg: {
      title: "Попара",
      description:
        "Обикновена българска попара, приготвена, като се залее сух хляб с горещо мляко и се остави да се задуши покрита, вместо да се вари - задушаването вместо варенето е това, което пази парчетата хляб меки, но все пак запазващи форма, вместо да се превърнат в каша.",
      steps: [
        "Накъсайте сухия хляб на хапки и ги наредете в голяма топлоустойчива купа.",
        "Загрейте млякото в тенджера, докато започне леко да пуши (без да заври), после го залейте върху хляба.",
        "Покрийте купата веднага с капак или чиния и оставете да се задуши 5 минути - покриването и задушаването, вместо директното варене на хляба, е това, което пази парчетата меки, но цели, вместо да се разтворят в каша.",
        "Отворете, добавете маслото и по-голямата част от натрошеното сирене, и разбъркайте леко, оставяйки останалата топлина да разтопи маслото и омекоти сиренето.",
        "Подправете с щипка сол, ако е нужно, поръсете останалото сирене и малко червен пипер отгоре, и сервирайте топла.",
      ],
      ingredients: [
        "4 чаши сух хляб, накъсан на парчета",
        "2 чаши мляко",
        "3 с.л. масло",
        "150 г сирене, натрошено",
        "Сол на вкус",
        "1/2 ч.л. червен пипер, за поднасяне",
      ],
    },
  },
  {
    slug: "kapama",
    title: "Kapama",
    description:
      "A Bansko specialty of pork, chicken, and sausage layered with sauerkraut and rice, then baked low and slow for hours in a sealed pot until the meats are falling-apart tender - the long, low bake and the layering itself, not just the ingredients, are what traditionally define real kapama.",
    imageEmoji: "🍲",
    cookTimeMinutes: 300,
    servings: 6,
    ingredients: [
      { text: "1.5 lb pork shoulder, cut into chunks", ingredient: "pork shoulder", quantity: 1.5 },
      { text: "1 lb chicken thighs, cut into pieces", ingredient: "chicken thighs", quantity: 1 },
      { text: "0.5 lb sausage, sliced", ingredient: "sausage", quantity: 0.5 },
      { text: "2 lb sauerkraut, drained", ingredient: "sauerkraut", quantity: 2 },
      { text: "1 cup rice", ingredient: "rice", quantity: 1 },
      { text: "1 onion, chopped", ingredient: "onion", quantity: 1 },
      { text: "1 cup red wine", ingredient: "red wine", quantity: 1 },
      { text: "2 bay leaves", ingredient: "bay leaves", quantity: 2 },
      { text: "1 tbsp paprika", ingredient: "paprika", quantity: 1 },
      { text: "1 tsp black pepper", ingredient: "black pepper", quantity: 1 },
      { text: "2 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 2 },
      { text: "Salt to taste", ingredient: "salt", quantity: null },
    ],
    steps: [
      "Preheat the oven to 300°F. Heat the oil in a large pan and brown the pork, chicken, and sausage in batches, then set aside.",
      "In the same pan, sauté the onion until softened, then stir in the paprika.",
      "In a large clay pot or Dutch oven, spread a layer of sauerkraut on the bottom, then add a layer of the browned meats, a scattering of rice, and a sprinkle of the sautéed onion, bay leaves, and black pepper.",
      "Repeat the layers - sauerkraut, meat, rice, onion, spices - until everything is used, finishing with a layer of sauerkraut on top.",
      "Pour the red wine evenly over the top, cover tightly (with a lid or a layer of dough sealing the edges, if using a clay pot), and bake for 4-5 hours at 300°F, until the meats are completely tender and falling apart - it's this long, slow, sealed bake, more than any single ingredient, that traditionally defines real kapama.",
      "Serve hot straight from the pot.",
    ],
    tags: ["dinner"],
    bg: {
      title: "Капама",
      description:
        "Банска специалност от свинско, пилешко и наденица, послоени с кисело зеле и ориз, после запечени бавно и на слаба температура часове наред в затворено гърне, докато месата станат крехки и се разпадат - дългото и бавно печене и самото послояване, не само съставките, традиционно определят истинската капама.",
      steps: [
        "Загрейте фурната на 150°C. Загрейте олиото в голям тиган и запържете свинското, пилешкото и наденицата на порции до зачервяване, после ги оставете настрана.",
        "В същия тиган запържете лука до омекване, после разбъркайте червения пипер.",
        "В голямо глинено гърне или тенджера, разстелете слой кисело зеле на дъното, после добавете слой от запържените меса, малко ориз и поръсете със запържения лук, дафиновите листа и черния пипер.",
        "Повторете слоевете - кисело зеле, месо, ориз, лук, подправки - докато свърши всичко, като завършите със слой кисело зеле отгоре.",
        "Залейте равномерно с червеното вино отгоре, покрийте плътно (с капак или слой тесто, запечатващо ръбовете, ако използвате глинено гърне), и печете 4-5 часа на 150°C, докато месата станат напълно крехки и се разпаднат - именно това дълго, бавно и запечатано печене, повече от всяка отделна съставка, традиционно определя истинската капама.",
        "Сервирайте горещо направо от гърнето.",
      ],
      ingredients: [
        "700 г свинска плешка, нарязана на парчета",
        "450 г пилешки бутчета, нарязани на парчета",
        "225 г наденица, нарязана",
        "900 г кисело зеле, отцедено",
        "1 чаша ориз",
        "1 лук, нарязан",
        "1 чаша червено вино",
        "2 дафинови листа",
        "1 с.л. червен пипер",
        "1 ч.л. черен пипер",
        "2 с.л. олио",
        "Сол на вкус",
      ],
    },
  },
  {
    slug: "drob-sarma",
    title: "Drob Sarma",
    description:
      "A Bulgarian baked liver and rice casserole, topped with a savory yogurt-egg custard - this home version uses chicken liver in place of the mixed lamb offal (liver, heart, lungs) traditionally stuffed into lamb's caul for festive drob sarma, since lamb offal is rarely available outside Bulgaria; the yogurt custard topping is what separates drob sarma from a plain liver-and-rice bake.",
    imageEmoji: "🍚",
    cookTimeMinutes: 70,
    servings: 4,
    ingredients: [
      { text: "1 lb chicken livers, cleaned and chopped", ingredient: "chicken liver", quantity: 1 },
      { text: "1 cup rice", ingredient: "rice", quantity: 1 },
      { text: "1 onion, finely chopped", ingredient: "onion", quantity: 1 },
      { text: "2 green onions, chopped", ingredient: "green onion", quantity: 2 },
      { text: "2 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 2 },
      { text: "1 tsp paprika", ingredient: "paprika", quantity: 1 },
      { text: "2 tbsp chopped dill", ingredient: "dill", quantity: 2 },
      { text: "1 cup plain yogurt", ingredient: "yogurt", quantity: 1 },
      { text: "2 eggs", ingredient: "eggs", quantity: 2 },
      { text: "Salt to taste", ingredient: "salt", quantity: null },
      { text: "Pepper to taste", ingredient: "pepper", quantity: null },
    ],
    steps: [
      "Cook the rice in salted water until just tender, about 12-15 minutes, then drain.",
      "Heat the oil in a large skillet, sauté the onion until soft, then add the chicken livers and cook for 5-7 minutes, until browned but still slightly pink inside, breaking them into small pieces as they cook.",
      "Stir in the paprika, green onions, dill, salt, and pepper, then fold in the cooked rice.",
      "Spread the liver and rice mixture into a greased baking dish.",
      "Whisk together the yogurt and eggs and pour evenly over the top - this yogurt-egg custard topping, baked until just set, is what distinguishes drob sarma from a plain liver-and-rice bake.",
      "Bake at 350°F for 25-30 minutes, until the custard topping is set and lightly golden. Serve warm.",
    ],
    tags: ["dinner"],
    bg: {
      title: "Дроб сарма",
      description:
        "Печена българска гювеч от дроб и ориз, покрита със солен крем от кисело мляко и яйца - тази домашна версия използва пилешки дробчета вместо смес от агнешки карантии (дроб, сърце, бял дроб), традиционно пълнени в агнешка мрежа за празничната дроб сарма, тъй като агнешката карантия рядко се намира извън България; покривката от кисело мляко и яйца е това, което отличава дроб сармата от обикновена печена ориз с дроб.",
      steps: [
        "Сварете ориза в подсолена вода до омекване, около 12-15 минути, после отцедете.",
        "Загрейте олиото в голям тиган, запържете лука до омекване, после добавете пилешките дробчета и гответе 5-7 минути, докато се зачервят, но останат леко розови отвътре, като ги разчупвате на малки парченца, докато се готвят.",
        "Разбъркайте с червения пипер, пресния лук, копъра, солта и пипера, после прибавете сварения ориз.",
        "Разстелете сместа от дроб и ориз в намазана тава за печене.",
        "Разбийте заедно киселото мляко и яйцата и залейте равномерно отгоре - тази покривка от кисело мляко и яйца, изпечена до стягане, е това, което отличава дроб сармата от обикновена печена ориз с дроб.",
        "Печете на 175°C 25-30 минути, докато покривката се стегне и леко позлатее. Сервирайте топла.",
      ],
      ingredients: [
        "450 г пилешки дробчета, почистени и нарязани",
        "1 чаша ориз",
        "1 лук, ситно нарязан",
        "2 стръка пресен лук, нарязани",
        "2 с.л. олио",
        "1 ч.л. червен пипер",
        "2 с.л. нарязан копър",
        "1 чаша кисело мляко",
        "2 яйца",
        "Сол на вкус",
        "Черен пипер на вкус",
      ],
    },
  },
  {
    slug: "tikvenik",
    title: "Tikvenik",
    description:
      "A Bulgarian pumpkin banitsa - phyllo sheets rolled around a sweet, cinnamon-spiced grated pumpkin and walnut filling, coiled into a spiral, and baked until golden - grating the raw pumpkin instead of using canned puree is what keeps the filling from turning watery and soggy inside the phyllo.",
    imageEmoji: "🎃",
    cookTimeMinutes: 80,
    servings: 8,
    ingredients: [
      { text: "2 lb pumpkin, peeled and coarsely grated", ingredient: "pumpkin", quantity: 2 },
      { text: "3/4 cup sugar", ingredient: "sugar", quantity: 0.75 },
      { text: "1 tbsp cinnamon", ingredient: "cinnamon", quantity: 1 },
      { text: "1 cup walnuts, chopped", ingredient: "walnuts", quantity: 1 },
      { text: "1 lb phyllo dough", ingredient: "phyllo dough", quantity: 1 },
      { text: "1 cup melted butter", ingredient: "butter", quantity: 1 },
      { text: "Powdered sugar, for dusting", ingredient: "powdered sugar", quantity: null },
    ],
    steps: [
      "Toss the grated pumpkin with the sugar and set aside for 15 minutes to draw out some of its liquid, then squeeze out and discard the excess liquid firmly - skipping this step is what makes the filling turn watery and soggy inside the phyllo.",
      "Stir the cinnamon and chopped walnuts into the drained pumpkin.",
      "Lay out a sheet of phyllo, brush with melted butter, top with a second sheet, and spread a thin line of the pumpkin filling along one edge.",
      "Roll the phyllo up around the filling into a long rope, then coil it into a spiral in a buttered round baking pan. Repeat with the remaining phyllo and filling, coiling each new rope around the last to build one large spiral.",
      "Brush the top generously with the remaining melted butter.",
      "Bake at 350°F for 40-45 minutes, until deep golden brown and crisp.",
      "Let cool slightly, dust with powdered sugar, and serve warm or at room temperature.",
    ],
    tags: ["dessert", "baking", "vegetarian"],
    bg: {
      title: "Тиквеник",
      description:
        "Българска тиквена баница - кори от филo тесто, навити около сладък пълнеж от настъргана тиква с канела и орехи, навити на спирала и изпечени до златисто - настъргването на суровата тиква, вместо използване на консервирано пюре, е това, което пази пълнежа от воднист и разкиснат резултат вътре в корите.",
      steps: [
        "Разбъркайте настърганата тиква със захарта и оставете за 15 минути, за да пусне част от течността си, после изстискайте и изхвърлете излишната течност силно - пропускането на тази стъпка е това, което прави пълнежа воднист и разкиснат вътре в корите.",
        "Разбъркайте канелата и нарязаните орехи в отцедената тиква.",
        "Разстелете лист кори, намажете с разтопено масло, покрийте с втори лист, и разпределете тънка ивица от тиквения пълнеж по единия ръб.",
        "Навийте корите около пълнежа на дълго руло, после навийте на спирала в намазана кръгла тава за печене. Повторете с останалите кори и пълнеж, навивайки всяко ново руло около предишното, за да образувате една голяма спирала.",
        "Намажете отгоре щедро с останалото разтопено масло.",
        "Печете на 175°C 40-45 минути, докато стане дълбоко златисто и хрупкаво.",
        "Оставете да изстине леко, поръсете с пудра захар, и сервирайте топъл или на стайна температура.",
      ],
      ingredients: [
        "900 г тиква, обелена и едро настъргана",
        "3/4 чаша захар",
        "1 с.л. канела",
        "1 чаша орехи, нарязани",
        "450 г кори за баница",
        "1 чаша разтопено масло",
        "Пудра захар, за поръсване",
      ],
    },
  },
  {
    slug: "panagyurski-eggs",
    title: "Panagyurski Eggs",
    description:
      "A beloved Bulgarian brunch dish of poached eggs served over a mix of yogurt and crumbled sirene, finished with a drizzle of melted butter infused with paprika - the paprika butter poured on at the very end, while everything is still warm, is what gives panagyurski eggs their signature red-flecked look and flavor.",
    imageEmoji: "🍳",
    cookTimeMinutes: 20,
    servings: 2,
    ingredients: [
      { text: "1 cup plain yogurt", ingredient: "yogurt", quantity: 1 },
      { text: "3.5 oz sirene (Bulgarian white brined cheese), crumbled", ingredient: "sirene", quantity: 3.5 },
      { text: "1 clove garlic, minced", ingredient: "garlic", quantity: 1 },
      { text: "4 eggs", ingredient: "eggs", quantity: 4 },
      { text: "1 tbsp vinegar (for poaching)", ingredient: "vinegar", quantity: 1 },
      { text: "3 tbsp butter", ingredient: "butter", quantity: 3 },
      { text: "1 tsp paprika", ingredient: "paprika", quantity: 1 },
      { text: "Salt to taste", ingredient: "salt", quantity: null },
    ],
    steps: [
      "Mix the yogurt with the crumbled sirene and minced garlic, then divide between two serving bowls, spreading it into an even layer.",
      "Bring a pot of water to a gentle simmer and add the vinegar. Crack each egg into a small cup, then slide it into the simmering water and poach for 3 minutes, until the whites are set but the yolks are still runny.",
      "Lift out the poached eggs with a slotted spoon, drain briefly, and place two on top of each bowl of yogurt and sirene.",
      "Melt the butter in a small pan over low heat, stir in the paprika, and let it sizzle for about 30 seconds until fragrant and red - pouring this hot paprika butter over the eggs right at serving time is what gives panagyurski eggs their signature red-flecked look and flavor.",
      "Spoon the hot paprika butter over the eggs and yogurt, season with a little salt, and serve immediately with bread.",
    ],
    tags: ["breakfast", "lunch", "vegetarian"],
    bg: {
      title: "Яйца по панагюрски",
      description:
        "Обичано българско ястие за закуска или обяд от рохки яйца, сервирани върху смес от кисело мляко и натрошено сирене, завършено със струйка разтопено масло, ароматизирано с червен пипер - маслото с червен пипер, изсипано най-накрая, докато всичко е още топло, е това, което дава на яйцата по панагюрски характерния им червенопетнист вид и вкус.",
      steps: [
        "Смесете киселото мляко с натрошеното сирене и ситно нарязания чесън, после разпределете в две купички за сервиране, разстилайки на равен слой.",
        "Оставете тенджера с вода да заври леко и добавете оцета. Счупете всяко яйце в малка чаша, после го плъзнете в леко къкрещата вода и гответе 3 минути, докато белтъкът се стегне, а жълтъкът остане течен.",
        "Извадете рохките яйца с решетъчна лъжица, отцедете за кратко, и наредете по две върху всяка купичка с кисело мляко и сирене.",
        "Разтопете маслото в малък тиган на слаб огън, разбъркайте червения пипер, и оставете да съска около 30 секунди, докато замирише и почервенее - изсипването на това горещо масло с червен пипер върху яйцата точно преди сервиране е това, което дава на яйцата по панагюрски характерния им червенопетнист вид и вкус.",
        "Полейте яйцата и киселото мляко с горещото масло с червен пипер, подправете с малко сол, и сервирайте веднага с хляб.",
      ],
      ingredients: [
        "1 чаша кисело мляко",
        "100 г сирене, натрошено",
        "1 скилидка чесън, ситно нарязана",
        "4 яйца",
        "1 с.л. оцет (за рохкото готвене)",
        "3 с.л. масло",
        "1 ч.л. червен пипер",
        "Сол на вкус",
      ],
    },
  },
  {
    slug: "sirene-po-shopski",
    title: "Sirene po Shopski",
    description:
      "Bulgarian baked sirene in individual clay pots, layered with tomato and pepper and topped with a cracked egg baked just until the white sets and the yolk stays runny - baking it in small individual pots rather than one big dish is what's traditional, so each portion gets its own bubbling, self-contained crust of melted cheese.",
    imageEmoji: "🧀",
    cookTimeMinutes: 30,
    servings: 2,
    ingredients: [
      { text: "10 oz sirene (Bulgarian white brined cheese), crumbled", ingredient: "sirene", quantity: 10 },
      { text: "2 tomatoes, sliced", ingredient: "tomato", quantity: 2 },
      { text: "1 green bell pepper, sliced", ingredient: "green bell pepper", quantity: 1 },
      { text: "2 eggs", ingredient: "eggs", quantity: 2 },
      { text: "1 tbsp butter", ingredient: "butter", quantity: 1 },
      { text: "Black pepper to taste", ingredient: "black pepper", quantity: null },
    ],
    steps: [
      "Preheat the oven to 390°F. Divide half of the crumbled sirene between two small individual clay pots or ramekins.",
      "Layer the sliced tomato and green pepper over the cheese, then top with the remaining sirene.",
      "Dot with the butter and bake for 15-20 minutes, until the cheese is bubbling and the vegetables have softened.",
      "Crack one egg directly on top of each pot and return to the oven for 5-7 minutes, until the whites are just set but the yolks are still runny - baking each portion in its own small pot, rather than one large dish, is what's traditional and keeps every serving bubbling right up to the table.",
      "Season with black pepper and serve immediately, straight from the oven, with crusty bread.",
    ],
    tags: ["lunch", "dinner", "vegetarian"],
    bg: {
      title: "Сирене по шопски",
      description:
        "Печено българско сирене в отделни глинени гювечета, послоено с домат и чушка и покрито с чупено яйце, изпечено точно докато белтъкът се стегне, а жълтъкът остане течен - печенето в малки отделни гювечета, вместо в едно голямо блюдо, е традиционното, за да получи всяка порция своя собствена къкреща коричка от разтопено сирене.",
      steps: [
        "Загрейте фурната на 200°C. Разпределете половината от натрошеното сирене в две малки отделни глинени гювечета или купички за печене.",
        "Наредете нарязания домат и зелената чушка върху сиренето, после покрийте с останалото сирене.",
        "Разпределете маслото на парченца отгоре и печете 15-20 минути, докато сиренето започне да къкри, а зеленчуците омекнат.",
        "Счупете по едно яйце директно върху всяко гювече и върнете във фурната за 5-7 минути, докато белтъкът се стегне, а жълтъкът остане течен - печенето на всяка порция в собствено малко гювече, вместо в едно голямо блюдо, е традиционното и пази всяка порция къкреща чак до масата.",
        "Подправете с черен пипер и сервирайте веднага, направо от фурната, с хрупкав хляб.",
      ],
      ingredients: [
        "280 г сирене, натрошено",
        "2 домата, нарязани",
        "1 зелена чушка, нарязана",
        "2 яйца",
        "1 с.л. масло",
        "Черен пипер на вкус",
      ],
    },
  },
  {
    slug: "boza",
    title: "Boza",
    description:
      "A traditional Bulgarian fermented wheat drink - thick, mildly sweet, and gently sour from a day or two of natural fermentation - historically associated with the town of Razgrad and traditionally paired with banitsa for breakfast. The active prep is quick, but real boza needs a full 24-48 hours of fermentation to develop its characteristic tang, which no shortcut replicates.",
    imageEmoji: "🥤",
    cookTimeMinutes: 30,
    servings: 6,
    ingredients: [
      { text: "1 cup flour", ingredient: "flour", quantity: 1 },
      { text: "6 cups water", ingredient: "water", quantity: 6 },
      { text: "3/4 cup sugar", ingredient: "sugar", quantity: 0.75 },
      { text: "1/4 tsp yeast", ingredient: "yeast", quantity: 0.25 },
      { text: "1 tsp cinnamon, for serving", ingredient: "cinnamon", quantity: 1 },
    ],
    steps: [
      "Toast the flour in a dry skillet over medium-low heat, stirring constantly, for 5-8 minutes until it turns a light golden color and smells nutty - this toasting step is what gives real boza its characteristic malty depth, not just plain flour flavor.",
      "Whisk the toasted flour with 2 cups of the water in a saucepan until completely smooth with no lumps, then whisk in the remaining water.",
      "Bring the mixture to a gentle boil over medium heat, whisking constantly, and cook for 5 minutes until slightly thickened, then remove from heat and stir in the sugar until dissolved.",
      "Let the mixture cool to lukewarm (about 100°F), then whisk in the yeast.",
      "Pour into a clean glass jar, cover loosely with a cloth (not an airtight lid, so gas can escape), and let ferment at room temperature for 24-48 hours, stirring once or twice a day - this fermentation, not any added flavoring, is what gives boza its mild sourness and thick, aerated body; the longer it sits, the more sour it becomes.",
      "Once it has developed a pleasant tang, transfer to the refrigerator to slow the fermentation. Serve cold, dusted with a little cinnamon, traditionally alongside banitsa.",
    ],
    tags: ["breakfast", "snack", "vegan"],
    bg: {
      title: "Боза",
      description:
        "Традиционна българска напитка от ферментирало брашно - гъста, леко сладка и деликатно кисела от ден-два естествена ферментация - исторически свързвана с град Разград и традиционно поднасяна с баница за закуска. Активната подготовка е бърза, но истинската боза се нуждае от цели 24-48 часа ферментация, за да развие характерната си киселинност, която никаква пряка пътека не може да замести.",
      steps: [
        "Препечете брашното в сух тиган на среден-слаб огън, като бъркате постоянно, 5-8 минути, докато придобие светло златист цвят и замирише на препечено - тази стъпка на препичане е това, което дава на истинската боза характерната й дълбочина на вкуса, а не просто вкус на обикновено брашно.",
        "Разбийте препеченото брашно с 2 чаши от водата в тенджера до напълно гладка смес без бучки, после разбъркайте с останалата вода.",
        "Оставете сместа да заври леко на среден огън, като бъркате постоянно, и гответе 5 минути, докато леко се сгъсти, после свалете от котлона и разбъркайте захарта, докато се разтвори.",
        "Оставете сместа да изстине до хладко (около 38°C), после разбъркайте маята.",
        "Изсипете в чист стъклен буркан, покрийте свободно с кърпа (не с херметичен капак, за да може газът да излиза), и оставете да ферментира на стайна температура 24-48 часа, като разбърквате веднъж-два пъти на ден - тази ферментация, а не някаква добавена аромата, е това, което дава на бозата нейната лека киселинност и гъсто, наситено с въздух тяло; колкото по-дълго престои, толкова по-кисела става.",
        "След като развие приятна киселинност, прехвърлете в хладилника, за да забавите ферментацията. Сервирайте студена, поръсена с малко канела, традиционно заедно с баница.",
      ],
      ingredients: [
        "1 чаша брашно",
        "6 чаши вода",
        "3/4 чаша захар",
        "1/4 ч.л. мая",
        "1 ч.л. канела, за поднасяне",
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
