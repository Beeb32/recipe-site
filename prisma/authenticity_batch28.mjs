import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "paneer-tikka",
      title: "Paneer Tikka",
      description:
        "Paneer marinated in thick hung curd with ginger-garlic, roasted gram flour, and mustard oil, grilled until charred - the hung curd and besan are what give the marinade its cling and the paneer its light crispness.",
      imageEmoji: "🍢",
      cookTimeMinutes: 150,
      servings: 4,
      ingredients: [
        { text: "1 lb paneer, cubed", ingredient: "paneer", quantity: 1 },
        { text: "1 cup thick yogurt (hung curd, strained)", ingredient: "yogurt", quantity: 1 },
        { text: "1 tbsp besan (gram flour), lightly roasted", ingredient: "besan", quantity: 1 },
        { text: "1 tbsp ginger-garlic paste", ingredient: "ginger garlic paste", quantity: 1 },
        { text: "2 tsp tandoori masala", ingredient: "tandoori masala", quantity: 2 },
        { text: "1/2 tsp Kashmiri chili powder", ingredient: "chili powder", quantity: 0.5 },
        { text: "1 tbsp mustard oil", ingredient: "mustard oil", quantity: 1 },
        { text: "1 tbsp lemon juice", ingredient: "lemon juice", quantity: 1 },
        { text: "1 red bell pepper, cubed", ingredient: "red pepper", quantity: 1 },
        { text: "1 onion, cubed", ingredient: "onion", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "If using regular yogurt, strain it in a cheesecloth-lined sieve for 30 minutes to thicken it into hung curd.",
        "Lightly roast the besan in a dry pan for 2-3 minutes until fragrant and pale golden, then whisk it into the hung curd along with the ginger-garlic paste, tandoori masala, chili powder, mustard oil, lemon juice, and salt.",
        "Coat the paneer, pepper, and onion in the marinade and refrigerate for at least 2 hours - mustard oil is what gives real paneer tikka its distinctive North Indian flavor, so don't substitute it.",
        "Thread onto skewers, alternating paneer and vegetables.",
        "Grill or broil for 10-12 minutes, turning occasionally, until lightly charred.",
      ],
      tags: ["dinner", "vegetarian"],
    },
    bg: {
      title: "Панир Тика",
      description:
        "Панир, маринован в гъсто прецедено кисело мляко с джинджифил, чесън, печено нахутено брашно и синапено олио, изпечен на скара до овъгляне - прецеденото кисело мляко и брашното от нахут са това, което дава на маринатата сцепление, а на панира лека хрупкавост.",
      steps: [
        "Ако използвате обикновено кисело мляко, прецедете го през кърпа в сито за 30 минути, за да се сгъсти в гъсто прецедено кисело мляко.",
        "Леко препечете нахутеното брашно в сух тиган за 2-3 минути до ароматизиране и леко златисто, после го разбъркайте в прецеденото кисело мляко заедно с пастата от джинджифил и чесън, тандури масалата, лютия пипер на прах, синапеното олио, лимоновия сок и солта.",
        "Покрийте панира, чушката и лука с маринатата и охладете поне 2 часа - синапеното олио е това, което придава на истинския панир тика характерния северноиндийски вкус, така че не го заменяйте.",
        "Нанижете на шишчета, редувайки панир и зеленчуци.",
        "Изпечете на скара или грил 10-12 минути, обръщайки от време на време, до леко овъгляне.",
      ],
      ingredients: [
        "450 г панир, нарязан на кубчета",
        "1 чаша гъсто кисело мляко (прецедено)",
        "1 с.л. нахутено брашно, леко препечено",
        "1 с.л. паста от джинджифил и чесън",
        "2 ч.л. тандури масала",
        "1/2 ч.л. лют пипер кашмири на прах",
        "1 с.л. синапено олио",
        "1 с.л. лимонов сок",
        "1 червена чушка, нарязана на кубчета",
        "1 лук, нарязан на кубчета",
        "Сол на вкус",
      ],
    },
  },
  {
    en: {
      slug: "thai-basil-chicken",
      title: "Thai Basil Chicken",
      description:
        "Ground chicken stir-fried with garlic, shallot, and chilies in a fish sauce-oyster sauce-soy blend, finished with holy basil off the heat and served over rice with a crispy fried egg - the sauce blend and basil timing are what make it taste like real pad krapow, not just chicken with basil.",
      imageEmoji: "🌶️",
      cookTimeMinutes: 25,
      servings: 4,
      ingredients: [
        { text: "1 lb ground chicken", ingredient: "ground chicken", quantity: 1 },
        { text: "2 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 2 },
        { text: "1/4 cup sliced shallot", ingredient: "shallot", quantity: 0.25 },
        { text: "4 cloves garlic, minced", ingredient: "garlic", quantity: 4 },
        { text: "2-3 Thai bird's eye chilies, minced", ingredient: "thai chilies", quantity: 2 },
        { text: "1 tbsp fish sauce", ingredient: "fish sauce", quantity: 1 },
        { text: "1 tbsp oyster sauce", ingredient: "oyster sauce", quantity: 1 },
        { text: "2 tsp soy sauce", ingredient: "soy sauce", quantity: 2 },
        { text: "1 tsp sugar", ingredient: "sugar", quantity: 1 },
        { text: "1 cup holy basil (or Thai basil) leaves", ingredient: "thai basil", quantity: 1 },
        { text: "4 eggs, for frying", ingredient: "eggs", quantity: 4 },
        { text: "Cooked jasmine rice, for serving", ingredient: "rice", quantity: null },
      ],
      steps: [
        "Heat the oil in a wok over medium-high heat and stir-fry the shallot, garlic, and chilies until fragrant.",
        "Add the ground chicken and stir-fry for 2-3 minutes, breaking it up, until no longer pink.",
        "Stir in the fish sauce, oyster sauce, soy sauce, and sugar and cook for 1-2 minutes.",
        "Remove from the heat (or lower it to a bare simmer) and toss in the basil leaves just until wilted - every extra second over full heat costs fragrance.",
        "Fry the eggs separately in hot oil until the edges are crispy and the yolk is still runny.",
        "Serve the basil chicken over jasmine rice topped with a fried egg.",
      ],
      tags: ["dinner", "asian", "quick"],
    },
    bg: {
      title: "Тайландско пиле с босилек",
      description:
        "Пилешка кайма, задушена с чесън, шалот и люти чушки в смес от рибен сос, сос от стриди и соев сос, довършена със свещен босилек извън котлона и поднесена върху ориз с хрупкаво пържено яйце - смесеният сос и моментът на добавяне на босилека са това, което й придава вкуса на истинско пад крапао, а не просто пиле с босилек.",
      steps: [
        "Загрейте олиото в уок на среден до силен огън и запържете шалота, чесъна и лютите чушки до ароматизиране.",
        "Добавете пилешката кайма и задушавайте 2-3 минути, разбивайки я, докато порозовее.",
        "Разбъркайте рибния сос, соса от стриди, соевия сос и захарта и гответе 1-2 минути.",
        "Свалете от котлона (или намалете на съвсем слаб огън) и добавете листата босилек, докато леко омекнат - всяка допълнителна секунда на силен огън коства от аромата.",
        "Изпържете яйцата отделно в горещо олио, докато краищата станат хрупкави, а жълтъкът остане течен.",
        "Сервирайте пилето с босилек върху жасминов ориз, отгоре с пържено яйце.",
      ],
      ingredients: [
        "450 г пилешка кайма",
        "2 с.л. олио",
        "1/4 чаша нарязан шалот",
        "4 скилидки чесън, ситно нарязани",
        "2-3 тайландски люти чушки, ситно нарязани",
        "1 с.л. рибен сос",
        "1 с.л. сос от стриди",
        "2 ч.л. соев сос",
        "1 ч.л. захар",
        "1 чаша листа свещен босилек (или тайландски босилек)",
        "4 яйца, за пържене",
        "Сготвен жасминов ориз, за сервиране",
      ],
    },
  },
  {
    en: {
      slug: "thai-fried-rice",
      title: "Thai Fried Rice",
      description:
        "Day-old jasmine rice stir-fried over high heat with garlic, egg, and chicken, seasoned with fish sauce poured around the hot edge of the wok so it flash-evaporates into the rice - finished with white pepper, lime, and cucumber the way it's served on the street in Thailand.",
      imageEmoji: "🍚",
      cookTimeMinutes: 20,
      servings: 4,
      ingredients: [
        { text: "4 cups cooked, cooled jasmine rice (preferably day-old)", ingredient: "rice", quantity: 4 },
        { text: "2 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 2 },
        { text: "3 cloves garlic, minced", ingredient: "garlic", quantity: 3 },
        { text: "1 chicken breast, diced", ingredient: "chicken breast", quantity: 1 },
        { text: "2 eggs, beaten", ingredient: "eggs", quantity: 2 },
        { text: "1 tomato, diced", ingredient: "tomato", quantity: 1 },
        { text: "3 tbsp fish sauce", ingredient: "fish sauce", quantity: 3 },
        { text: "1/4 tsp white pepper", ingredient: "white pepper", quantity: 0.25 },
        { text: "2 green onions, sliced", ingredient: "green onion", quantity: 2 },
        { text: "Lime wedges and sliced cucumber, for serving", ingredient: "lime", quantity: null },
      ],
      steps: [
        "Heat the oil in a wok over high heat and stir-fry the garlic for about 15 seconds until fragrant.",
        "Add the chicken and cook until browned; push everything to one side.",
        "Pour in the eggs and scramble until just set, then mix everything together.",
        "Add the rice and tomato, breaking up any clumps, and stir-fry over high heat for 3-4 minutes.",
        "Pour the fish sauce around the hot edge of the wok rather than directly onto the rice, so it flash-evaporates into the grains, then toss to combine.",
        "Stir in the white pepper and green onions, and serve with lime wedges and cucumber slices on the side.",
      ],
      tags: ["dinner", "asian", "quick"],
    },
    bg: {
      title: "Тайландски пържен ориз",
      description:
        "Едно-дневен жасминов ориз, задушен на силен огън с чесън, яйце и пиле, подправен с рибен сос, изсипан по горещия ръб на уока, за да се изпари мигновено в ориза - довършен с бял пипер, лайм и краставица, както се поднася по улиците в Тайланд.",
      steps: [
        "Загрейте олиото в уок на силен огън и запържете чесъна за около 15 секунди до ароматизиране.",
        "Добавете пилето и гответе до запържване; избутайте всичко настрани.",
        "Изсипете яйцата и разбъркайте до стягане, после смесете всичко заедно.",
        "Добавете ориза и домата, разбивайки бучките, и задушавайте на силен огън 3-4 минути.",
        "Изсипете рибния сос по горещия ръб на уока, а не директно върху ориза, за да се изпари мигновено в зърната, после разбъркайте да се смеси.",
        "Разбъркайте белия пипер и пресния лук, и сервирайте с резенчета лайм и краставица отстрани.",
      ],
      ingredients: [
        "4 чаши сготвен, изстинал жасминов ориз (за предпочитане отпреди един ден)",
        "2 с.л. олио",
        "3 скилидки чесън, ситно нарязани",
        "1 пилешка гърда, нарязана на кубчета",
        "2 разбити яйца",
        "1 домат, нарязан на кубчета",
        "3 с.л. рибен сос",
        "1/4 ч.л. бял пипер",
        "2 стръка пресен лук, нарязани",
        "Резенчета лайм и нарязана краставица, за сервиране",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
