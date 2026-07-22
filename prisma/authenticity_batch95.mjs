import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "lemon-bundt-cake",
      title: "Lemon Bundt Cake",
      description:
        "A moist, tangy bundt cake built on butter, sour cream, and both lemon zest and juice for real lemon flavor, soaked in glaze while still warm - most quick versions skip the zest and the leavening entirely, leaving a dense cake with only surface-level lemon taste.",
      imageEmoji: "🍋",
      cookTimeMinutes: 65,
      servings: 10,
      ingredients: [
        { text: "3 cups flour", ingredient: "flour", quantity: 3 },
        { text: "2 tsp baking powder", ingredient: "baking powder", quantity: 2 },
        { text: "1/2 tsp baking soda", ingredient: "baking soda", quantity: 0.5 },
        { text: "1/2 tsp salt", ingredient: "salt", quantity: 0.5 },
        { text: "2 cups sugar", ingredient: "sugar", quantity: 2 },
        { text: "1 cup butter, softened", ingredient: "butter", quantity: 1 },
        { text: "4 eggs", ingredient: "eggs", quantity: 4 },
        { text: "1 cup sour cream", ingredient: "sour cream", quantity: 1 },
        { text: "2 tbsp lemon zest", ingredient: "lemon zest", quantity: 2 },
        { text: "1/2 cup fresh lemon juice, divided", ingredient: "lemon juice", quantity: 0.5 },
        { text: "1 cup powdered sugar for glaze", ingredient: "powdered sugar", quantity: 1 },
      ],
      steps: [
        "Preheat oven to 350°F and grease a bundt pan.",
        "Whisk together the flour, baking powder, baking soda, and salt.",
        "Cream the butter and sugar, then beat in the eggs one at a time, followed by the sour cream, lemon zest, and 2 tbsp of the lemon juice - the zest is where most of the lemon flavor lives, and sour cream is what keeps a bundt cake this rich moist instead of dense.",
        "Mix in the flour mixture until just combined.",
        "Pour into the pan and bake for 50-55 minutes, until a toothpick comes out clean.",
        "While the cake is still warm, poke a few holes in the top and brush with 2 tbsp of the lemon juice, then let cool completely before whisking the powdered sugar with the remaining lemon juice and drizzling over the top - soaking the warm cake first is what makes a bundt cake taste of lemon all the way through, not just on the surface.",
      ],
      tags: ["dessert", "vegetarian", "baking"],
    },
    bg: {
      title: "Лимонов бунд кекс",
      description:
        "Сочен, кисел бунд кекс, изграден върху масло, заквасена сметана и лимонова кора заедно със сока за истински лимонов вкус, накиснат с глазура докато е още топъл - повечето бързи версии пропускат кората и бакпулвера напълно, оставяйки плътен кекс с лимонов вкус само по повърхността.",
      steps: [
        "Загрейте фурната на 180°C и намажете форма за бунд.",
        "Разбъркайте брашното, бакпулвера, содата за хляб и солта.",
        "Разбийте маслото и захарта на крем, после добавете яйцата едно по едно, следвани от заквасената сметана, лимоновата кора и 2 с.л. от лимоновия сок - кората е мястото, където се крие най-много от лимоновия вкус, а заквасената сметана е това, което пази кекса сочен, вместо плътен.",
        "Разбъркайте брашнената смес до смесване.",
        "Изсипете във формата и печете 50-55 минути, докато клечка излезе чиста.",
        "Докато кексът е още топъл, пробийте няколко дупки отгоре и намажете с 2 с.л. от лимоновия сок, после оставете да изстине напълно, преди да разбиете пудрата захар с останалия лимонов сок и да полеете отгоре - накисването на топлия кекс първо е това, което придава лимонов вкус докрай, а не само по повърхността.",
      ],
      ingredients: [
        "3 чаши брашно",
        "2 ч.л. бакпулвер",
        "1/2 ч.л. сода за хляб",
        "1/2 ч.л. сол",
        "2 чаши захар",
        "1 чаша масло, омекнало",
        "4 яйца",
        "1 чаша заквасена сметана",
        "2 с.л. лимонова кора",
        "1/2 чаша пресен лимонов сок, разделен",
        "1 чаша пудра захар за глазура",
      ],
    },
  },
  {
    en: {
      slug: "molasses-cookies",
      title: "Molasses Cookies",
      description:
        "Soft, chewy cookies built on a full blend of cinnamon, ginger, and cloves rather than cinnamon alone, rolled in sugar before baking - real molasses cookies also rely on baking soda, which reacts with the molasses to create their signature crackled tops, a step most quick versions leave out entirely.",
      imageEmoji: "🍪",
      cookTimeMinutes: 30,
      servings: 24,
      ingredients: [
        { text: "2 1/4 cups flour", ingredient: "flour", quantity: 2.25 },
        { text: "2 tsp baking soda", ingredient: "baking soda", quantity: 2 },
        { text: "1/4 tsp salt", ingredient: "salt", quantity: 0.25 },
        { text: "3/4 cup butter, softened", ingredient: "butter", quantity: 0.75 },
        { text: "1 cup sugar, plus extra for rolling", ingredient: "sugar", quantity: 1 },
        { text: "1/4 cup molasses", ingredient: "molasses", quantity: 0.25 },
        { text: "1 egg", ingredient: "eggs", quantity: 1 },
        { text: "1 tsp cinnamon", ingredient: "cinnamon", quantity: 1 },
        { text: "1 tsp ground ginger", ingredient: "ginger", quantity: 1 },
        { text: "1/2 tsp ground cloves", ingredient: "cloves", quantity: 0.5 },
      ],
      steps: [
        "Preheat oven to 350°F.",
        "Whisk together the flour, baking soda, and salt.",
        "Cream the butter and sugar, then beat in the molasses and egg.",
        "Mix in the flour mixture, cinnamon, ginger, and cloves until a soft dough forms - baking soda reacting with the molasses is what gives these cookies their signature crackled tops, and the fuller spice blend is what separates real molasses cookies from a plain cinnamon cookie.",
        "Roll into balls, coat in sugar, and bake for 10-12 minutes until cracked on top.",
      ],
      tags: ["dessert", "vegetarian", "baking"],
    },
    bg: {
      title: "Бисквити с меласа",
      description:
        "Меки, дъвчащи бисквити, изградени върху пълна смес от канела, джинджифил и карамфил, вместо само канела, овалени в захар преди печене - истинските бисквити с меласа разчитат и на сода за хляб, която реагира с меласата и създава характерните напукани върхове, стъпка, която повечето бързи версии пропускат напълно.",
      steps: [
        "Загрейте фурната на 180°C.",
        "Разбъркайте брашното, содата за хляб и солта.",
        "Разбийте маслото и захарта на крем, после добавете меласата и яйцето.",
        "Разбъркайте брашнената смес, канелата, джинджифила и карамфила, докато се образува меко тесто - реакцията на содата за хляб с меласата е това, което придава на тези бисквити характерните напукани върхове, а по-пълната смес от подправки е това, което отличава истинските бисквити с меласа от обикновена бисквита с канела.",
        "Оформете топчета, овалайте в захар и печете 10-12 минути до напукване отгоре.",
      ],
      ingredients: [
        "2 1/4 чаши брашно",
        "2 ч.л. сода за хляб",
        "1/4 ч.л. сол",
        "3/4 чаша масло, омекнало",
        "1 чаша захар, плюс допълнително за овалване",
        "1/4 чаша меласа",
        "1 яйце",
        "1 ч.л. канела",
        "1 ч.л. смлян джинджифил",
        "1/2 ч.л. смлян карамфил",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
