import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "banana-bread",
      title: "Banana Bread",
      description:
        "A moist, sweet quick bread made from very ripe, heavily speckled bananas - the riper and darker the bananas, the more moisture and flavor they bring, and stirring the batter only until just combined is what keeps the loaf tender instead of dense.",
      imageEmoji: "🍌",
      cookTimeMinutes: 65,
      servings: 8,
      ingredients: [
        { text: "3 very ripe bananas (heavily speckled or blackened), mashed", ingredient: "banana", quantity: 3 },
        { text: "1/3 cup melted butter", ingredient: "butter", quantity: 0.33 },
        { text: "3/4 cup sugar", ingredient: "sugar", quantity: 0.75 },
        { text: "1 egg", ingredient: "eggs", quantity: 1 },
        { text: "1 tsp vanilla extract", ingredient: "vanilla extract", quantity: 1 },
        { text: "1 tsp baking soda", ingredient: "baking soda", quantity: 1 },
        { text: "1 1/2 cups all-purpose flour", ingredient: "flour", quantity: 1.5 },
      ],
      steps: [
        "Preheat oven to 350°F and grease a loaf pan.",
        "Mix the mashed bananas with melted butter.",
        "Stir in the sugar, egg, and vanilla.",
        "Sprinkle the baking soda and flour over the mixture and stir until just combined.",
        "Pour into the loaf pan and bake for 55-60 minutes until a toothpick comes out clean.",
      ],
      tags: ["dessert", "baking", "vegetarian"],
    },
    bg: {
      title: "Кекс с банани",
      description:
        "Сочен, сладък бърз кекс от много узрели, силно напетнени банани - колкото по-узрели и по-тъмни са бананите, толкова повече влага и вкус придават, а разбъркването на тестото само до съединяване е това, което пази кекса нежен, вместо плътен.",
      steps: [
        "Загрейте фурната на 180°C и намажете тава с мазнина.",
        "Смесете намачканите банани с разтопеното масло.",
        "Добавете захарта, яйцето и ванилията.",
        "Поръсете содата за хляб и брашното върху сместа и разбъркайте до съединяване.",
        "Изсипете в тавата и печете 55-60 минути, докато клечка за зъби излезе чиста.",
      ],
      ingredients: [
        "3 много узрели банана (силно напетнени или почернели), намачкани",
        "1/3 чаша разтопено масло",
        "3/4 чаша захар",
        "1 яйце",
        "1 ч.л. ванилова есенция",
        "1 ч.л. сода за хляб",
        "1 1/2 чаши брашно",
      ],
    },
  },
  {
    en: {
      slug: "hearty-beef-stew",
      title: "Hearty Beef Stew",
      description:
        "Tender chunks of beef seared in batches until deeply browned, deglazed with red wine to lift all the fond, then slow-simmered with potatoes and carrots in a rich broth - searing in batches instead of crowding the pot, and deglazing with wine, are what build the deep flavor real beef stew is known for.",
      imageEmoji: "🍲",
      cookTimeMinutes: 120,
      servings: 6,
      ingredients: [
        { text: "2 lb beef chuck, cubed", ingredient: "beef chuck", quantity: 2 },
        { text: "3 potatoes, cubed", ingredient: "potato", quantity: 3 },
        { text: "3 carrots, sliced", ingredient: "carrot", quantity: 3 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "3 tbsp flour", ingredient: "flour", quantity: 3 },
        { text: "1/2 cup dry red wine", ingredient: "red wine", quantity: 0.5 },
        { text: "4 cups beef broth", ingredient: "beef broth", quantity: 4 },
        { text: "2 tbsp tomato paste", ingredient: "tomato paste", quantity: 2 },
      ],
      steps: [
        "Pat the beef cubes dry, then toss in flour.",
        "Working in batches so the pot isn't crowded, brown the beef deeply on all sides in a large pot, then remove and set aside - crowding the pot steams the meat instead of browning it.",
        "Add the onion to the same pot and cook until softened, scraping up any browned bits.",
        "Pour in the red wine and simmer for 1-2 minutes, scraping up the rest of the browned bits from the bottom of the pot - deglazing with wine is what lifts all that flavor into the stew.",
        "Stir in the tomato paste, then pour in the beef broth and return the beef to the pot.",
        "Add the potatoes and carrots, then simmer, covered, for 1.5-2 hours until the beef is tender.",
        "Season to taste before serving.",
      ],
      tags: ["dinner"],
    },
    bg: {
      title: "Ситна телешка яхния",
      description:
        "Крехки парчета телешко месо, запържени на порции до дълбоко кафяво, дегласирани с червено вино, за да се вдигнат запечените частици, после бавно къкрещи с картофи и моркови в наситен бульон - запържването на порции, вместо претрупване на тенджерата, и дегласирането с вино са това, което изгражда дълбокия вкус, с който истинската телешка яхния е известна.",
      steps: [
        "Подсушете телешките кубчета, после ги овалайте в брашно.",
        "Работейки на порции, за да не претрупате тенджерата, запържете месото дълбоко от всички страни в голяма тенджера, после извадете и оставете настрана - претрупването на тенджерата задушава месото на пара, вместо да го запържи.",
        "Добавете лука в същата тенджера и гответе до омекване, изстъргвайки запечените частици.",
        "Долейте червеното вино и варете 1-2 минути, изстъргвайки останалите запечени частици от дъното на тенджерата - дегласирането с вино е това, което вдига целия този вкус в яхнията.",
        "Добавете доматеното пюре, после налейте телешкия бульон и върнете месото в тенджерата.",
        "Добавете картофите и морковите, после варете покрито 1.5-2 часа, докато месото омекне.",
        "Подправете на вкус преди сервиране.",
      ],
      ingredients: [
        "900 г телешко месо, нарязано на кубчета",
        "3 картофа, нарязани на кубчета",
        "3 моркова, нарязани на резени",
        "1 лук, нарязан на кубчета",
        "3 с.л. брашно",
        "1/2 чаша сухо червено вино",
        "4 чаши телешки бульон",
        "2 с.л. доматено пюре",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
