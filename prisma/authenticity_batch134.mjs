import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "beef-barley-soup",
      title: "Beef Barley Soup",
      description:
        "A hearty soup of tender beef, vegetables, and chewy barley, with the beef seasoned and garlic and thyme added for depth - beef browned plain with nothing but broth and vegetables is why this kind of soup often tastes thin instead of rich.",
      imageEmoji: "🍲",
      cookTimeMinutes: 90,
      servings: 6,
      ingredients: [
        { text: "1 lb beef stew meat", ingredient: "beef", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
        { text: "1 cup pearl barley", ingredient: "barley", quantity: 1 },
        { text: "3 carrots, sliced", ingredient: "carrot", quantity: 3 },
        { text: "2 celery stalks, sliced", ingredient: "celery", quantity: 2 },
        { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
        { text: "1/2 tsp dried thyme", ingredient: "thyme", quantity: 0.5 },
        { text: "8 cups beef broth", ingredient: "beef broth", quantity: 8 },
      ],
      steps: [
        "Season the beef with salt and pepper, then brown in a large pot.",
        "Add the beef broth, carrots, celery, garlic, and thyme, then simmer for 45 minutes.",
        "Stir in the barley and simmer for another 25-30 minutes until tender.",
        "Season to taste before serving.",
      ],
      tags: ["dinner"],
    },
    bg: {
      title: "Телешка супа с ечемик",
      description:
        "Сита супа от крехко телешко месо, зеленчуци и дъвчащ ечемик, с подправено месо и добавени чесън и мащерка за дълбочина на вкуса - месо, запържено просто, само с бульон и зеленчуци, е причината такива супи често да имат тънък, а не наситен вкус.",
      steps: [
        "Подправете телешкото със сол и черен пипер, после запържете в голяма тенджера.",
        "Добавете телешкия бульон, морковите, целината, чесъна и мащерката, после варете 45 минути.",
        "Разбъркайте ечемика и варете още 25-30 минути до омекване.",
        "Подправете на вкус преди сервиране.",
      ],
      ingredients: [
        "450 г телешко месо за яхния",
        "Сол на вкус",
        "Черен пипер на вкус",
        "1 чаша перлен ечемик",
        "3 моркова, нарязани на резени",
        "2 стръка целина, нарязани на резени",
        "2 скилидки чесън, ситно нарязани",
        "1/2 ч.л. сушена мащерка",
        "8 чаши телешки бульон",
      ],
    },
  },
  {
    en: {
      slug: "loaded-baked-potato-soup",
      title: "Loaded Baked Potato Soup",
      description:
        "A creamy potato soup topped with cheese, bacon, sour cream, and green onion - like a baked potato in a bowl - seasoned with salt and pepper as it simmers, not left to rely on the toppings alone for flavor.",
      imageEmoji: "🥔",
      cookTimeMinutes: 45,
      servings: 6,
      ingredients: [
        { text: "5 potatoes, cubed", ingredient: "potato", quantity: 5 },
        { text: "4 cups chicken broth", ingredient: "chicken broth", quantity: 4 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
        { text: "1 cup heavy cream", ingredient: "heavy cream", quantity: 1 },
        { text: "1 cup shredded cheddar cheese", ingredient: "cheddar cheese", quantity: 1 },
        { text: "6 slices bacon, cooked and crumbled", ingredient: "bacon", quantity: 6 },
        { text: "2 green onions, sliced", ingredient: "green onion", quantity: 2 },
        { text: "1/2 cup sour cream, for topping", ingredient: "sour cream", quantity: 0.5 },
      ],
      steps: [
        "Simmer the potatoes in chicken broth, seasoned with salt and pepper, until very tender, about 20 minutes.",
        "Mash some of the potatoes to thicken the soup, leaving some chunks.",
        "Stir in the cream and cheese until melted.",
        "Top with bacon, green onions, and a dollop of sour cream before serving.",
      ],
      tags: ["dinner"],
    },
    bg: {
      title: "Заредена супа от печен картоф",
      description:
        "Кремообразна картофена супа с топинги от сирене, бекон, заквасена сметана и пресен лук - като печен картоф в купа - подправена със сол и черен пипер, докато къкри, а не оставена да разчита само на добавките за вкус.",
      steps: [
        "Варете картофите в пилешки бульон, подправен със сол и черен пипер, до пълно омекване, около 20 минути.",
        "Намачкайте част от картофите, за да сгъстите супата, оставяйки и парченца.",
        "Разбъркайте сметаната и сиренето до разтопяване.",
        "Отгоре сложете бекон, пресен лук и лъжица заквасена сметана преди сервиране.",
      ],
      ingredients: [
        "5 картофа, нарязани на кубчета",
        "4 чаши пилешки бульон",
        "Сол на вкус",
        "Черен пипер на вкус",
        "1 чаша сметана за готвене",
        "1 чаша настъргано чедър сирене",
        "6 резена бекон, изпечен и натрошен",
        "2 стръка пресен лук, нарязани",
        "1/2 чаша заквасена сметана, за поднасяне",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
