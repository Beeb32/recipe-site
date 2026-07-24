import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "seven-layer-dip",
      title: "Seven Layer Dip",
      description:
        "A crowd-pleasing layered dip of beans, guacamole, sour cream, salsa, cheese, olives, and green onions - seven actual layers, not six passing for seven.",
      imageEmoji: "🥑",
      cookTimeMinutes: 20,
      servings: 8,
      ingredients: [
        { text: "1 can refried beans", ingredient: "refried beans", quantity: 1 },
        { text: "1 cup guacamole", ingredient: "guacamole", quantity: 1 },
        { text: "1 cup sour cream", ingredient: "sour cream", quantity: 1 },
        { text: "1 cup shredded cheddar cheese", ingredient: "cheddar cheese", quantity: 1 },
        { text: "1 cup salsa", ingredient: "salsa", quantity: 1 },
        { text: "1/2 cup sliced black olives", ingredient: "black olives", quantity: 0.5 },
        { text: "3 green onions, sliced", ingredient: "green onion", quantity: 3 },
      ],
      steps: [
        "Spread the refried beans across the bottom of a serving dish.",
        "Layer the guacamole, then the sour cream, over the beans.",
        "Top with salsa, shredded cheese, and black olives.",
        "Finish with a scattering of green onions for the seventh layer.",
        "Serve chilled with tortilla chips.",
      ],
      tags: ["snack", "mexican", "vegetarian"],
    },
    bg: {
      title: "Дип на седем пласта",
      description:
        "Любим на всички слоест дип от боб, гуакамоле, заквасена сметана, салса, сирене, маслини и зелен лук - седем истински пласта, а не шест, представени за седем.",
      steps: [
        "Разстелете печения боб на дъното на купа за сервиране.",
        "Наредете гуакамолето, после заквасената сметана, върху боба.",
        "Отгоре сложете салса, настърганото сирене и маслините.",
        "Завършете с разпръснат зелен лук за седмия пласт.",
        "Сервирайте охладено с тортила чипс.",
      ],
      ingredients: [
        "1 консерва печен боб",
        "1 чаша гуакамоле",
        "1 чаша заквасена сметана",
        "1 чаша настърган чедър",
        "1 чаша салса",
        "1/2 чаша нарязани черни маслини",
        "3 стръка зелен лук, нарязани",
      ],
    },
  },
  {
    en: {
      slug: "shrimp-ceviche",
      title: "Shrimp Ceviche",
      description:
        "Fresh shrimp cured in lime juice with tomato, onion, and cilantro, seasoned with salt - light and zesty.",
      imageEmoji: "🍤",
      cookTimeMinutes: 30,
      servings: 4,
      ingredients: [
        { text: "1 lb shrimp, chopped", ingredient: "shrimp", quantity: 1 },
        { text: "1 cup lime juice", ingredient: "lime juice", quantity: 1 },
        { text: "1 tomato, diced", ingredient: "tomato", quantity: 1 },
        { text: "1/2 red onion, diced", ingredient: "red onion", quantity: 0.5 },
        { text: "1/4 cup chopped cilantro", ingredient: "cilantro", quantity: 0.25 },
        { text: "1 jalapeño, minced", ingredient: "jalapeno", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Combine the shrimp with lime juice in a bowl, making sure it's fully submerged.",
        "Refrigerate for at least 30 minutes, until the shrimp turns opaque and firm.",
        "Stir in the tomato, red onion, cilantro, jalapeño, and salt.",
        "Serve chilled with tortilla chips.",
      ],
      tags: ["lunch", "mexican", "quick"],
    },
    bg: {
      title: "Севиче от скариди",
      description:
        "Пресни скариди, мариновани в лимонов сок с домат, лук и кориандър, подправени със сол - леко и освежаващо.",
      steps: [
        "Смесете скаридите с лимоновия сок в купа, като се уверите, че са напълно потопени.",
        "Охладете поне 30 минути, докато скаридите станат непрозрачни и стегнати.",
        "Разбъркайте с домата, червения лук, кориандъра, халапеньото и солта.",
        "Сервирайте охладено с тортила чипс.",
      ],
      ingredients: [
        "450 г скариди, нарязани",
        "1 чаша лимонов сок",
        "1 домат, нарязан на кубчета",
        "1/2 червен лук, нарязан на кубчета",
        "1/4 чаша нарязан кориандър",
        "1 халапеньо, ситно нарязано",
        "Сол на вкус",
      ],
    },
  },
  {
    en: {
      slug: "simple-baked-meatballs",
      title: "Simple Baked Meatballs",
      description:
        "Tender, oven-baked meatballs seasoned with garlic and oregano in a simple tomato sauce - no frying required.",
      imageEmoji: "🍝",
      cookTimeMinutes: 40,
      servings: 4,
      ingredients: [
        { text: "1 lb ground beef", ingredient: "ground beef", quantity: 1 },
        { text: "1/2 cup breadcrumbs", ingredient: "breadcrumbs", quantity: 0.5 },
        { text: "1 egg", ingredient: "eggs", quantity: 1 },
        { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
        { text: "1 tsp dried oregano", ingredient: "oregano", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
        { text: "1 jar marinara sauce", ingredient: "marinara sauce", quantity: 1 },
        { text: "1/4 cup grated Parmesan", ingredient: "parmesan", quantity: 0.25 },
      ],
      steps: [
        "Preheat oven to 400°F.",
        "Mix the ground beef, breadcrumbs, egg, garlic, oregano, salt, pepper, and Parmesan together, then roll into meatballs - salt is what keeps ground meat from tasting bland once baked.",
        "Arrange on a baking sheet and bake for 20 minutes until browned.",
        "Simmer the baked meatballs in marinara sauce for 10 minutes before serving.",
      ],
      tags: ["dinner", "italian"],
    },
    bg: {
      title: "Прости кюфтета на фурна",
      description:
        "Крехки кюфтета на фурна, подправени с чесън и риган, в прост доматен сос - без пържене.",
      steps: [
        "Загрейте фурната на 200°C.",
        "Смесете говеждата кайма, галетата, яйцето, чесъна, ригана, солта, черния пипер и пармезана, после оформете кюфтета - солта е това, което пази каймата от блудкав вкус след печене.",
        "Наредете върху тава и печете 20 минути до зачервяване.",
        "Задушете изпечените кюфтета в доматен сос 10 минути преди сервиране.",
      ],
      ingredients: [
        "450 г говежда кайма",
        "1/2 чаша галета",
        "1 яйце",
        "2 скилидки чесън, ситно нарязани",
        "1 ч.л. сух риган",
        "Сол на вкус",
        "Черен пипер на вкус",
        "1 буркан доматен сос",
        "1/4 чаша настърган пармезан",
      ],
    },
  },
  {
    en: {
      slug: "simple-bean-salad",
      title: "Simple Bean Salad",
      description:
        "A protein-packed, no-cook salad of mixed beans in a light, salted vinaigrette - salt and pepper are what keep the dressing from tasting like plain oil and vinegar.",
      imageEmoji: "🫘",
      cookTimeMinutes: 15,
      servings: 6,
      ingredients: [
        { text: "1 can kidney beans, drained", ingredient: "kidney beans", quantity: 1 },
        { text: "1 can black beans, drained", ingredient: "black beans", quantity: 1 },
        { text: "1 can corn, drained", ingredient: "corn", quantity: 1 },
        { text: "3 tbsp olive oil", ingredient: "olive oil", quantity: 3 },
        { text: "2 tbsp red wine vinegar", ingredient: "red wine vinegar", quantity: 2 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Combine the kidney beans, black beans, and corn in a large bowl.",
        "Whisk together the olive oil, red wine vinegar, salt, and pepper.",
        "Toss the beans with the dressing.",
        "Chill for at least 30 minutes before serving.",
      ],
      tags: ["lunch", "vegan", "vegetarian", "quick", "salad"],
    },
    bg: {
      title: "Проста салата от боб",
      description:
        "Богата на протеини салата без готвене от смесен боб в лека, подправена винегрета - солта и черният пипер са това, което пази дресинга от вкус на самотно олио и оцет.",
      steps: [
        "Смесете червения боб, черния боб и царевицата в голяма купа.",
        "Разбийте зехтина, червения винен оцет, солта и черния пипер.",
        "Смесете боба с дресинга.",
        "Охладете поне 30 минути преди сервиране.",
      ],
      ingredients: [
        "1 консерва червен боб, отцеден",
        "1 консерва черен боб, отцеден",
        "1 консерва царевица, отцедена",
        "3 с.л. зехтин",
        "2 с.л. червен винен оцет",
        "Сол на вкус",
        "Черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "simple-beef-stir-fry",
      title: "Simple Beef Stir Fry",
      description:
        "Quick-cooked beef and vegetables tossed in a savory soy-garlic sauce, with the garlic added at the end - garlic burns and turns bitter within seconds over high heat, so it goes in last instead of stir-frying the whole time.",
      imageEmoji: "🥩",
      cookTimeMinutes: 25,
      servings: 4,
      ingredients: [
        { text: "1 lb flank steak, sliced thin", ingredient: "flank steak", quantity: 1 },
        { text: "2 cups broccoli florets", ingredient: "broccoli", quantity: 2 },
        { text: "1 carrot, sliced", ingredient: "carrot", quantity: 1 },
        { text: "3 cloves garlic, minced", ingredient: "garlic", quantity: 3 },
        { text: "1/4 cup soy sauce", ingredient: "soy sauce", quantity: 0.25 },
        { text: "2 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 2 },
      ],
      steps: [
        "Heat oil in a wok or large skillet and sear the beef until browned; set aside.",
        "Stir-fry the broccoli and carrot for 3-4 minutes until crisp-tender.",
        "Add the garlic and cook for 30 seconds until fragrant - garlic burns quickly over high heat, so it goes in last instead of stir-frying the whole time.",
        "Return the beef to the pan with the soy sauce, tossing until well combined and heated through.",
      ],
      tags: ["dinner", "quick", "asian"],
    },
    bg: {
      title: "Проста пържена телешка ивица",
      description:
        "Бързо приготвено телешко и зеленчуци, разбъркани в пикантен соев сос с чесън, добавен накрая - чесънът изгаря и се вкисва за секунди на силен огън, затова се добавя последен, вместо да се пържи през цялото време.",
      steps: [
        "Загрейте олио в уок или голям тиган и запечете телешкото до зачервяване; отделете настрана.",
        "Пържете броколите и морковите 3-4 минути до леко омекване.",
        "Добавете чесъна и гответе 30 секунди до ароматизиране - чесънът изгаря бързо на силен огън, затова се добавя последен.",
        "Върнете телешкото в тигана със соевия сос, разбърквайте до пълно смесване и затопляне.",
      ],
      ingredients: [
        "450 г флайм стек, нарязан тънко",
        "2 чаши броколи на розички",
        "1 морков, нарязан на резени",
        "3 скилидки чесън, ситно нарязани",
        "1/4 чаша соев сос",
        "2 с.л. олио",
      ],
    },
  },
  {
    en: {
      slug: "simple-chicken-soup",
      title: "Simple Chicken Soup",
      description:
        "A basic, comforting chicken soup with vegetables, a bay leaf, salt, and pepper - easy enough for a beginner cook, and actually seasoned instead of tasting like plain broth.",
      imageEmoji: "🍲",
      cookTimeMinutes: 45,
      servings: 6,
      ingredients: [
        { text: "2 chicken breasts", ingredient: "chicken breast", quantity: 2 },
        { text: "2 carrots, sliced", ingredient: "carrot", quantity: 2 },
        { text: "2 celery stalks, sliced", ingredient: "celery", quantity: 2 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "1 bay leaf", ingredient: "bay leaf", quantity: 1 },
        { text: "8 cups chicken broth", ingredient: "chicken broth", quantity: 8 },
        { text: "1 cup egg noodles", ingredient: "egg noodles", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Combine the chicken breasts, carrots, celery, onion, bay leaf, and chicken broth in a large pot.",
        "Bring to a boil, then reduce heat and simmer for 25 minutes until the chicken is cooked through.",
        "Remove the chicken, shred it, and return it to the pot along with the egg noodles.",
        "Simmer for another 8-10 minutes until the noodles are tender, then remove the bay leaf and season with salt and pepper before serving.",
      ],
      tags: ["dinner", "quick"],
    },
    bg: {
      title: "Проста пилешка супа",
      description:
        "Основна, успокояваща пилешка супа със зеленчуци, дафинов лист, сол и черен пипер - достатъчно лесна за начинаещ готвач, и наистина подправена, вместо да има вкус на обикновен бульон.",
      steps: [
        "Съберете пилешките гърди, морковите, целината, лука, дафиновия лист и бульона в голяма тенджера.",
        "Оставете да заври, после намалете котлона и къкрете 25 минути, докато пилето се сготви напълно.",
        "Извадете пилето, накъсайте го и го върнете в тенджерата заедно с юфката.",
        "Къкрете още 8-10 минути, докато юфката омекне, после извадете дафиновия лист и подправете със сол и черен пипер преди сервиране.",
      ],
      ingredients: [
        "2 пилешки гърди",
        "2 моркова, нарязани на резени",
        "2 стръка целина, нарязани на резени",
        "1 лук, нарязан на кубчета",
        "1 дафинов лист",
        "8 чаши пилешки бульон",
        "1 чаша яйчена юфка",
        "Сол на вкус",
        "Черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "simple-fish-tacos",
      title: "Simple Fish Tacos",
      description:
        "Flaky pan-seared fish rubbed with chili powder and cumin, tucked into warm tortillas with a creamy slaw - chili powder and cumin are the seasoning the fish actually needs instead of going into the pan plain.",
      imageEmoji: "🌮",
      cookTimeMinutes: 25,
      servings: 4,
      ingredients: [
        { text: "1 lb white fish fillets", ingredient: "white fish", quantity: 1 },
        { text: "1 tsp chili powder", ingredient: "chili powder", quantity: 1 },
        { text: "1/2 tsp cumin", ingredient: "cumin", quantity: 0.5 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "8 small corn tortillas", ingredient: "corn tortillas", quantity: 8 },
        { text: "2 cups shredded cabbage", ingredient: "cabbage", quantity: 2 },
        { text: "1/3 cup mayonnaise", ingredient: "mayonnaise", quantity: 0.33 },
        { text: "1 lime, juiced", ingredient: "lime", quantity: 1 },
        { text: "2 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 2 },
      ],
      steps: [
        "Rub the fish with chili powder, cumin, and salt, then cook in oil over medium-high heat for 3-4 minutes per side until it flakes easily; break into chunks.",
        "Mix the cabbage with mayonnaise and lime juice to make a quick slaw.",
        "Warm the tortillas.",
        "Fill each tortilla with fish and top with the slaw.",
      ],
      tags: ["dinner", "mexican", "quick"],
    },
    bg: {
      title: "Прости рибни тако",
      description:
        "Ронлива, запечена в тиган риба, натрита с чили на прах и кимион, поставена в топли тортили с кремообразно зеле - чили на прах и кимион са подправките, от които рибата наистина се нуждае, вместо да влезе в тигана без нищо.",
      steps: [
        "Натрийте рибата с чили на прах, кимион и сол, после гответе в олио на средно-силен огън по 3-4 минути от всяка страна, докато се разлюспи лесно; разчупете на парчета.",
        "Смесете зелето с майонезата и лимоновия сок за бърза зелева салата.",
        "Претоплете тортилите.",
        "Напълнете всяка тортила с риба и отгоре сложете зелевата салата.",
      ],
      ingredients: [
        "450 г филета от бяла риба",
        "1 ч.л. чили на прах",
        "1/2 ч.л. кимион",
        "Сол на вкус",
        "8 малки царевични тортили",
        "2 чаши настъргано зеле",
        "1/3 чаша майонеза",
        "1 лайм, сокът",
        "2 с.л. олио",
      ],
    },
  },
  {
    en: {
      slug: "simple-fruit-crisp",
      title: "Simple Fruit Crisp",
      description:
        "Baked fruit tossed with lemon juice and topped with a buttery, salted oat crumble - a warm, easy dessert. Lemon juice keeps the apples bright instead of dull, and salt keeps the crumble from tasting flatly sweet.",
      imageEmoji: "🍎",
      cookTimeMinutes: 45,
      servings: 6,
      ingredients: [
        { text: "6 apples, sliced", ingredient: "apple", quantity: 6 },
        { text: "1 tbsp lemon juice", ingredient: "lemon juice", quantity: 1 },
        { text: "1 cup rolled oats", ingredient: "oats", quantity: 1 },
        { text: "1/2 cup flour", ingredient: "flour", quantity: 0.5 },
        { text: "1/2 cup brown sugar", ingredient: "brown sugar", quantity: 0.5 },
        { text: "1/2 cup melted butter", ingredient: "butter", quantity: 0.5 },
        { text: "1 tsp cinnamon", ingredient: "cinnamon", quantity: 1 },
        { text: "Pinch of salt", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Preheat oven to 375°F and toss the sliced apples with lemon juice, then spread in a baking dish.",
        "Mix the oats, flour, brown sugar, melted butter, cinnamon, and salt together until crumbly.",
        "Sprinkle the oat mixture evenly over the apples.",
        "Bake for 35-40 minutes until the topping is golden and the fruit is bubbling.",
      ],
      tags: ["dessert", "vegetarian", "baking"],
    },
    bg: {
      title: "Прост плодов крамбъл",
      description:
        "Печени плодове, разбъркани с лимонов сок и покрити с масленa, подправена с щипка сол трохеста коричка от овес - топъл, лесен десерт. Лимоновият сок пази ябълките свежи вместо матови, а солта пази коричката от плосък сладък вкус.",
      steps: [
        "Загрейте фурната на 190°C и разбъркайте нарязаните ябълки с лимоновия сок, после ги разстелете в тава за печене.",
        "Смесете овеса, брашното, кафявата захар, разтопеното масло, канелата и солта до трохеста консистенция.",
        "Поръсете овесената смес равномерно върху ябълките.",
        "Печете 35-40 минути, докато коричката стане златиста и плодовете къкрят.",
      ],
      ingredients: [
        "6 ябълки, нарязани",
        "1 с.л. лимонов сок",
        "1 чаша овесени ядки",
        "1/2 чаша брашно",
        "1/2 чаша кафява захар",
        "1/2 чаша разтопено масло",
        "1 ч.л. канела",
        "Щипка сол",
      ],
    },
  },
  {
    en: {
      slug: "simple-fruit-salad",
      title: "Simple Fruit Salad",
      description:
        "A refreshing mix of seasonal fruit tossed with lime juice - a no-cook side or dessert. Lime juice is what keeps the banana slices from browning and brightens the other fruit instead of leaving it flat.",
      imageEmoji: "🍉",
      cookTimeMinutes: 15,
      servings: 6,
      ingredients: [
        { text: "2 cups strawberries, sliced", ingredient: "strawberries", quantity: 2 },
        { text: "2 cups grapes", ingredient: "grapes", quantity: 2 },
        { text: "2 cups pineapple chunks", ingredient: "pineapple", quantity: 2 },
        { text: "2 bananas, sliced", ingredient: "banana", quantity: 2 },
        { text: "1 tbsp honey", ingredient: "honey", quantity: 1 },
        { text: "1 tbsp lime juice", ingredient: "lime juice", quantity: 1 },
      ],
      steps: [
        "Combine the strawberries, grapes, pineapple, and bananas in a large bowl.",
        "Drizzle with honey and lime juice and toss gently - lime juice is what keeps the bananas from browning.",
        "Chill before serving.",
      ],
      tags: ["dessert", "vegan", "vegetarian", "quick", "salad"],
    },
    bg: {
      title: "Проста плодова салата",
      description:
        "Освежаваща смес от сезонни плодове, разбъркани с лаймов сок - гарнитура или десерт без готвене. Лаймовият сок пази бананените резенчета от потъмняване и освежава останалите плодове, вместо да ги остави безвкусни.",
      steps: [
        "Смесете ягодите, гроздето, ананаса и бананите в голяма купа.",
        "Полейте с мед и лаймов сок и разбъркайте внимателно - лаймовият сок пази бананите от потъмняване.",
        "Охладете преди сервиране.",
      ],
      ingredients: [
        "2 чаши ягоди, нарязани",
        "2 чаши грозде",
        "2 чаши парчета ананас",
        "2 банана, нарязани",
        "1 с.л. мед",
        "1 с.л. лаймов сок",
      ],
    },
  },
  {
    en: {
      slug: "simple-garden-salad",
      title: "Simple Garden Salad",
      description:
        "A crisp, refreshing salad of lettuce, tomato, and cucumber with a properly emulsified vinaigrette - mustard is what binds oil and vinegar into a real dressing instead of two liquids sitting side by side, and salt is what keeps it from tasting flat.",
      imageEmoji: "🥗",
      cookTimeMinutes: 10,
      servings: 4,
      ingredients: [
        { text: "1 head lettuce, chopped", ingredient: "lettuce", quantity: 1 },
        { text: "2 tomatoes, sliced", ingredient: "tomato", quantity: 2 },
        { text: "1 cucumber, sliced", ingredient: "cucumber", quantity: 1 },
        { text: "3 tbsp olive oil", ingredient: "olive oil", quantity: 3 },
        { text: "1 tbsp vinegar", ingredient: "vinegar", quantity: 1 },
        { text: "1 tsp dijon mustard", ingredient: "dijon mustard", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Combine the lettuce, tomatoes, and cucumber in a large bowl.",
        "Whisk together the olive oil, vinegar, mustard, salt, and pepper - mustard is what binds the oil and vinegar into a proper emulsified dressing.",
        "Toss the salad with the dressing just before serving.",
      ],
      tags: ["lunch", "vegan", "vegetarian", "quick", "salad"],
    },
    bg: {
      title: "Проста градинска салата",
      description:
        "Хрупкава, освежаваща салата от маруля, домат и краставица с правилно емулгирана винегрета - горчицата е това, което свързва олиото и оцета в истински дресинг, вместо две течности една до друга, а солта пази вкуса от плоскост.",
      steps: [
        "Смесете марулята, доматите и краставицата в голяма купа.",
        "Разбийте зехтина, оцета, горчицата, солта и черния пипер - горчицата е това, което свързва олиото и оцета в правилно емулгиран дресинг.",
        "Разбъркайте салатата с дресинга непосредствено преди сервиране.",
      ],
      ingredients: [
        "1 глава маруля, нарязана",
        "2 домата, нарязани",
        "1 краставица, нарязана",
        "3 с.л. зехтин",
        "1 с.л. оцет",
        "1 ч.л. дижонска горчица",
        "Сол на вкус",
        "Черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "simple-lentil-soup",
      title: "Simple Lentil Soup",
      description:
        "A hearty, protein-packed soup of red lentils simmered with vegetables and finished with salt - lentils cooked in unsalted broth the whole way through stay bland no matter how long they simmer.",
      imageEmoji: "🍲",
      cookTimeMinutes: 40,
      servings: 6,
      ingredients: [
        { text: "2 cups red lentils", ingredient: "lentils", quantity: 2 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "2 carrots, diced", ingredient: "carrot", quantity: 2 },
        { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
        { text: "6 cups vegetable broth", ingredient: "vegetable broth", quantity: 6 },
        { text: "1 tsp cumin", ingredient: "cumin", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Sauté the onion, carrots, and garlic in a large pot until softened.",
        "Stir in the lentils, vegetable broth, and cumin.",
        "Bring to a boil, then reduce heat and simmer for 25-30 minutes until the lentils are tender.",
        "Season with salt before serving.",
      ],
      tags: ["lunch", "vegan", "vegetarian"],
    },
    bg: {
      title: "Проста леща супа",
      description:
        "Засищаща, богата на протеини супа от червена леща, къкрена със зеленчуци и завършена със сол - леща, готвена в неосолен бульон през цялото време, остава блудкава без значение колко дълго къкри.",
      steps: [
        "Запържете лука, морковите и чесъна в голяма тенджера до омекване.",
        "Разбъркайте лещата, зеленчуковия бульон и кимиона.",
        "Оставете да заври, после намалете котлона и къкрете 25-30 минути, докато лещата омекне.",
        "Подправете със сол преди сервиране.",
      ],
      ingredients: [
        "2 чаши червена леща",
        "1 лук, нарязан на кубчета",
        "2 моркова, нарязани на кубчета",
        "2 скилидки чесън, ситно нарязани",
        "6 чаши зеленчуков бульон",
        "1 ч.л. кимион",
        "Сол на вкус",
      ],
    },
  },
  {
    en: {
      slug: "simple-shortbread-cookies",
      title: "Simple Shortbread Cookies",
      description:
        "Buttery, crumbly shortbread cookies made with just four ingredients - a pinch of salt is what real shortbread always includes to keep all that butter from tasting flat.",
      imageEmoji: "🍪",
      cookTimeMinutes: 35,
      servings: 16,
      ingredients: [
        { text: "1 cup butter, softened", ingredient: "butter", quantity: 1 },
        { text: "1/2 cup sugar", ingredient: "sugar", quantity: 0.5 },
        { text: "2 cups flour", ingredient: "flour", quantity: 2 },
        { text: "1/4 tsp salt", ingredient: "salt", quantity: 0.25 },
      ],
      steps: [
        "Preheat oven to 325°F.",
        "Cream the butter and sugar together until light and fluffy.",
        "Mix in the flour and salt until a soft dough forms.",
        "Roll out the dough, cut into shapes, and bake for 15-18 minutes until lightly golden at the edges.",
      ],
      tags: ["dessert", "vegetarian", "baking"],
    },
    bg: {
      title: "Прости бисквити шортбред",
      description:
        "Маслени, ронливи бисквити шортбред, направени само от четири съставки - щипка сол е това, което истинският шортбред винаги включва, за да не остави толкова много масло с плосък вкус.",
      steps: [
        "Загрейте фурната на 165°C.",
        "Разбийте маслото и захарта до пухкавост.",
        "Добавете брашното и солта до образуване на меко тесто.",
        "Разточете тестото, изрежете форми и печете 15-18 минути, докато леко позлатеят по краищата.",
      ],
      ingredients: ["1 чаша масло, омекнало", "1/2 чаша захар", "2 чаши брашно", "1/4 ч.л. сол"],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
