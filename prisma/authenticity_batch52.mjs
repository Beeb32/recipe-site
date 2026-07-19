import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "biscuits-and-gravy",
      title: "Biscuits and Gravy",
      description:
        "Flaky buttermilk biscuits smothered in sausage gravy made in the same skillet the sausage browned in, without draining the fat - the rendered sausage fat, not fresh butter or oil, is what carries the gravy's flavor.",
      imageEmoji: "🍞",
      cookTimeMinutes: 35,
      servings: 4,
      ingredients: [
        { text: "8 buttermilk biscuits, baked", ingredient: "biscuits", quantity: 8 },
        { text: "1 lb breakfast sausage", ingredient: "breakfast sausage", quantity: 1 },
        { text: "1/4 cup flour", ingredient: "flour", quantity: 0.25 },
        { text: "3 cups whole milk", ingredient: "milk", quantity: 3 },
        { text: "1 tsp black pepper", ingredient: "pepper", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Brown the sausage in a skillet, breaking it up as it cooks; don't drain the rendered fat - it's what carries the gravy's flavor.",
        "Sprinkle in the flour directly over the sausage and fat, and stir constantly for 2-3 minutes to cook out the raw flour taste.",
        "Gradually whisk in the milk and simmer until thickened, about 5 minutes.",
        "Season generously with black pepper and salt to taste, then ladle over split biscuits immediately, since the gravy thickens further as it sits.",
      ],
      tags: ["breakfast"],
    },
    bg: {
      title: "Бисквити със сос",
      description:
        "Ронливи бисквити с масена суроватка, залети със сос с наденица, приготвен в същия тиган, в който наденицата се е запържила, без да се изхвърля мазнината - изтопената мазнина от наденицата, не прясно масло или олио, е това, което носи вкуса на соса.",
      steps: [
        "Запържете наденицата в тиган, разчупвайки я по време на готвене; не изхвърляйте изтопената мазнина - тя носи вкуса на соса.",
        "Поръсете брашното директно върху наденицата и мазнината, и разбърквайте непрекъснато 2-3 минути, за да се сготви суровият вкус на брашното.",
        "Постепенно вмъкнете млякото, разбърквайки, и къкрете до сгъстяване, около 5 минути.",
        "Подправете обилно с черен пипер и сол на вкус, после залейте веднага върху разрязани бисквити, тъй като сосът се сгъстява още докато престои.",
      ],
      ingredients: [
        "8 бисквити с масена суроватка, изпечени",
        "450 г наденица за закуска",
        "1/4 чаша брашно",
        "3 чаши пълномаслено мляко",
        "1 ч.л. черен пипер",
        "Сол на вкус",
      ],
    },
  },
  {
    en: {
      slug: "chicken-marsala",
      title: "Chicken Marsala",
      description:
        "Chicken dredged and seared for a golden crust, mushrooms browned separately until dry before returning to the pan, and dry Marsala (not sweet) deglazed off the heat and reduced until it coats a spoon - dry Marsala and letting the mushrooms brown properly are what most simplified versions get wrong.",
      imageEmoji: "🍗",
      cookTimeMinutes: 35,
      servings: 4,
      ingredients: [
        { text: "4 chicken breasts, pounded thin and even", ingredient: "chicken breast", quantity: 4 },
        { text: "1/2 cup flour", ingredient: "flour", quantity: 0.5 },
        { text: "Salt and pepper to taste", ingredient: "salt", quantity: null },
        { text: "3 tbsp butter (divided)", ingredient: "butter", quantity: 3 },
        { text: "2 cups mushrooms, sliced", ingredient: "mushroom", quantity: 2 },
        { text: "3/4 cup dry Marsala wine", ingredient: "marsala wine", quantity: 0.75 },
        { text: "1/2 cup chicken broth", ingredient: "chicken broth", quantity: 0.5 },
      ],
      steps: [
        "Season the pounded chicken with salt and pepper, then dredge in flour, shaking off the excess.",
        "Sear the chicken in 2 tbsp of the butter until golden and cooked through; set aside.",
        "Add the mushrooms to the same pan and cook, without stirring too often, until they release their liquid and brown well - the pan should look dry before you move on.",
        "Remove the pan from the heat before pouring in the dry Marsala wine (not sweet) to deglaze, scraping up the browned bits, then return to the heat and let it reduce until it coats a spoon.",
        "Add the chicken broth and simmer briefly, then swirl in the remaining butter off the heat for a glossy finish.",
        "Return the chicken to the pan to warm through in the sauce before serving.",
      ],
      tags: ["dinner", "italian"],
    },
    bg: {
      title: "Пилешко Марсала",
      description:
        "Пиле, овалено и запържено до златиста коричка, гъби, запечени поотделно до изсъхване, преди да се върнат в тигана, и сухо вино Марсала (не сладко), деглазирано извън котлона и редуцирано, докато покрие лъжица - сухото Марсала и правилното запичане на гъбите са това, което повечето опростени версии правят грешно.",
      steps: [
        "Подправете разбитото пиле със сол и черен пипер, после го овалайте в брашно, изтръсквайки излишното.",
        "Запържете пилето в 2 с.л. от маслото до златисто и готовност; оставете настрана.",
        "Добавете гъбите в същия тиган и гответе, без да разбърквате прекалено често, докато отделят течността си и добре покафенеят - тиганът трябва да изглежда сух, преди да продължите.",
        "Свалете тигана от котлона, преди да налеете сухото вино Марсала (не сладко), за да деглазирате, изстъргвайки запечените парченца, после върнете на котлона и оставете да се редуцира, докато покрие лъжица.",
        "Добавете пилешкия бульон и оставете да къкри за кратко, после разбъркайте останалото масло извън котлона за лъскав финал.",
        "Върнете пилето в тигана, за да се стопли в соса преди сервиране.",
      ],
      ingredients: [
        "4 пилешки гърди, разбити тънко и равномерно",
        "1/2 чаша брашно",
        "Сол и черен пипер на вкус",
        "3 с.л. масло (разделено)",
        "2 чаши гъби, нарязани на резени",
        "3/4 чаша сухо вино Марсала",
        "1/2 чаша пилешки бульон",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
