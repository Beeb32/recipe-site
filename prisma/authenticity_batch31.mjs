import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "japchae",
      title: "Japchae",
      description:
        "Sweet potato glass noodles tossed with beef, mushrooms, and vegetables that are each stir-fried and seasoned separately before combining - cooking everything together muddies the colors and textures that define real japchae.",
      imageEmoji: "🍜",
      cookTimeMinutes: 50,
      servings: 4,
      ingredients: [
        { text: "8 oz sweet potato glass noodles", ingredient: "glass noodles", quantity: 8 },
        { text: "1/2 lb beef, sliced thin", ingredient: "beef", quantity: 0.5 },
        { text: "4 cloves garlic, minced (divided)", ingredient: "garlic", quantity: 4 },
        { text: "1 tbsp sugar (divided)", ingredient: "sugar", quantity: 1 },
        { text: "1/2 tsp black pepper", ingredient: "pepper", quantity: 0.5 },
        { text: "1 onion, sliced", ingredient: "onion", quantity: 1 },
        { text: "4 shiitake mushrooms, sliced", ingredient: "shiitake mushrooms", quantity: 4 },
        { text: "1 carrot, julienned", ingredient: "carrot", quantity: 1 },
        { text: "2 cups spinach", ingredient: "spinach", quantity: 2 },
        { text: "1/3 cup soy sauce (divided)", ingredient: "soy sauce", quantity: 0.33 },
        { text: "3 tbsp sesame oil (divided)", ingredient: "sesame oil", quantity: 3 },
        { text: "2 green onions, sliced", ingredient: "green onion", quantity: 2 },
      ],
      steps: [
        "Toss the beef and sliced shiitake with half the garlic, a pinch of the sugar, the black pepper, a splash of the soy sauce, and a little sesame oil; let marinate briefly while you prep the vegetables.",
        "Cook the glass noodles according to package instructions, then drain and toss with some soy sauce, sugar, and sesame oil while still warm so they absorb the seasoning.",
        "Stir-fry the onion until softened, then the carrot until just tender-crisp, then the marinated beef and shiitake - cooking each separately keeps their colors and textures distinct; season each lightly with salt as you go.",
        "Blanch the spinach for 30-60 seconds, shock it in cold water, squeeze dry, and toss with the remaining garlic, a little sesame oil, and a pinch of salt.",
        "Combine the noodles with all the separately cooked vegetables and beef, tossing gently with the remaining soy sauce and sesame oil to balance the seasoning.",
        "Top with sliced green onions before serving.",
      ],
      tags: ["dinner", "asian"],
    },
    bg: {
      title: "Джапче",
      description:
        "Стъклена юфка от сладък картоф, разбъркана с телешко месо, гъби и зеленчуци, всеки задушен и подправен поотделно преди смесване - готвенето на всичко заедно размътва цветовете и текстурите, които определят истинското джапче.",
      steps: [
        "Разбъркайте месото и нарязаните гъби шийтаке с половината чесън, щипка захар, черния пипер, малко от соевия сос и малко сусамово олио; оставете да мариноват за кратко, докато подготвите зеленчуците.",
        "Сварете стъклената юфка според инструкциите на опаковката, после отцедете и разбъркайте с малко соев сос, захар и сусамово олио, докато е още топла, за да попие подправките.",
        "Задушете лука до омекване, после моркова до леко хрупкав, после маринованото месо и гъбите - готвенето поотделно пази отделните им цветове и текстури; подправяйте леко със сол на всяка стъпка.",
        "Бланширайте спанака за 30-60 секунди, шокирайте в студена вода, изстискайте и разбъркайте с останалия чесън, малко сусамово олио и щипка сол.",
        "Смесете юфката с всички поотделно приготвени зеленчуци и месо, разбърквайки внимателно с останалия соев сос и сусамово олио, за да балансирате вкуса.",
        "Отгоре поръсете с нарязан пресен лук преди сервиране.",
      ],
      ingredients: [
        "225 г стъклена юфка от сладък картоф",
        "225 г телешко месо, нарязано на тънко",
        "4 скилидки чесън, ситно нарязани (разделени)",
        "1 с.л. захар (разделена)",
        "1/2 ч.л. черен пипер",
        "1 лук, нарязан на резени",
        "4 гъби шийтаке, нарязани",
        "1 морков, нарязан на тънки ивици",
        "2 чаши спанак",
        "1/3 чаша соев сос (разделен)",
        "3 с.л. сусамово олио (разделено)",
        "2 стръка пресен лук, нарязани",
      ],
    },
  },
  {
    en: {
      slug: "korean-bbq-short-ribs",
      title: "Korean BBQ Short Ribs",
      description:
        "Thin-cut short ribs marinated in a soy-garlic sauce built on grated Korean pear and onion, which tenderize the meat as much as they sweeten it, then grilled quickly - the grated onion and pear are what separate real galbi from a simple soy marinade.",
      imageEmoji: "🍖",
      cookTimeMinutes: 400,
      servings: 4,
      ingredients: [
        { text: "2 lb flanken-cut short ribs", ingredient: "short ribs", quantity: 2 },
        { text: "1/3 cup soy sauce", ingredient: "soy sauce", quantity: 0.33 },
        { text: "1/3 cup water (or rice wine)", ingredient: "water", quantity: 0.33 },
        { text: "1/4 cup honey (or 1/3 cup brown sugar)", ingredient: "honey", quantity: 0.25 },
        { text: "1 Korean pear (or Asian pear), grated", ingredient: "pear", quantity: 1 },
        { text: "1 onion, grated", ingredient: "onion", quantity: 1 },
        { text: "8 cloves garlic, minced", ingredient: "garlic", quantity: 8 },
        { text: "1 tsp grated ginger", ingredient: "ginger", quantity: 1 },
        { text: "2 tbsp sesame oil", ingredient: "sesame oil", quantity: 2 },
        { text: "1 tsp black pepper", ingredient: "pepper", quantity: 1 },
      ],
      steps: [
        "Soak the short ribs in cold water for 10-20 minutes to draw out the blood, then drain.",
        "Blend the pear and onion until smooth, then whisk together with the soy sauce, water, honey, garlic, ginger, sesame oil, and black pepper - the grated pear and onion are what tenderize the meat and give real galbi its signature sweetness.",
        "Marinate the short ribs in the mixture, covered, for at least 6 hours, ideally overnight.",
        "Grill over high heat for 2-3 minutes per side until caramelized.",
        "Rest for a few minutes before serving.",
      ],
      tags: ["dinner", "asian"],
    },
    bg: {
      title: "Корейски къси ребра на скара",
      description:
        "Тънко нарязани къси ребра, маринована в соево-чеснов сос, изграден върху настъргана корейска круша и лук, които омекотяват месото толкова, колкото го подслаждат, после бързо изпечени на скара - настърганият лук и круша са това, което отличава истинското галби от обикновена соева марината.",
      steps: [
        "Накиснете късите ребра в студена вода за 10-20 минути, за да се отцеди кръвта, после отцедете.",
        "Пасирайте крушата и лука до гладкост, после разбъркайте със соевия сос, водата, меда, чесъна, джинджифила, сусамовото олио и черния пипер - настърганите круша и лук са това, което омекотява месото и придава на истинското галби характерната му сладост.",
        "Маринова късите ребра в сместа, покрити, поне 6 часа, в идеалния случай през нощта.",
        "Изпечете на скара на силен огън по 2-3 минути от всяка страна до карамелизиране.",
        "Оставете да почине няколко минути преди сервиране.",
      ],
      ingredients: [
        "900 г къси ребра, нарязани на тънко",
        "1/3 чаша соев сос",
        "1/3 чаша вода (или оризово вино)",
        "1/4 чаша мед (или 1/3 чаша кафява захар)",
        "1 корейска круша (или азиатска круша), настъргана",
        "1 лук, настърган",
        "8 скилидки чесън, ситно нарязани",
        "1 ч.л. настърган джинджифил",
        "2 с.л. сусамово олио",
        "1 ч.л. черен пипер",
      ],
    },
  },
  {
    en: {
      slug: "fattoush-salad",
      title: "Fattoush Salad",
      description:
        "Chopped romaine, radish, and green onion tossed with tomato and cucumber in a lemon-pomegranate molasses dressing sharpened with sumac - the lettuce base and pomegranate molasses are what most simplified versions leave out entirely.",
      imageEmoji: "🥗",
      cookTimeMinutes: 25,
      servings: 4,
      ingredients: [
        { text: "2 pita breads, toasted and torn", ingredient: "pita bread", quantity: 2 },
        { text: "1 head romaine lettuce, chopped", ingredient: "romaine lettuce", quantity: 1 },
        { text: "2 tomatoes, diced", ingredient: "tomato", quantity: 2 },
        { text: "1 cucumber, diced", ingredient: "cucumber", quantity: 1 },
        { text: "4 radishes, thinly sliced", ingredient: "radish", quantity: 4 },
        { text: "3 green onions, sliced", ingredient: "green onion", quantity: 3 },
        { text: "1/4 cup fresh parsley, chopped", ingredient: "parsley", quantity: 0.25 },
        { text: "2 tbsp fresh mint, chopped", ingredient: "mint", quantity: 2 },
        { text: "3 tbsp olive oil", ingredient: "olive oil", quantity: 3 },
        { text: "2 tbsp lemon juice", ingredient: "lemon juice", quantity: 2 },
        { text: "1 tbsp pomegranate molasses", ingredient: "pomegranate molasses", quantity: 1 },
        { text: "1 tsp sumac", ingredient: "sumac", quantity: 1 },
        { text: "Salt and pepper to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Combine the romaine, tomatoes, cucumber, radishes, green onions, parsley, and mint in a large bowl.",
        "Whisk together the olive oil, lemon juice, pomegranate molasses, sumac, salt, and pepper until emulsified.",
        "Toss the vegetables with the dressing.",
        "Add the toasted pita pieces just before serving to keep them crisp.",
      ],
      tags: ["lunch", "mediterranean", "vegan", "vegetarian", "quick", "salad"],
    },
    bg: {
      title: "Салата Фатуш",
      description:
        "Нарязана марула, репички и пресен лук, разбъркани с домат и краставица в дресинг от лимон и наров сироп, изострен със сумак - основата от марула и наровият сироп са това, което повечето опростени версии напълно пропускат.",
      steps: [
        "Смесете марулата, доматите, краставицата, репичките, пресния лук, магданоза и мятата в голяма купа.",
        "Разбъркайте зехтина, лимоновия сок, наровия сироп, сумака, солта и черния пипер до емулгиране.",
        "Разбъркайте зеленчуците със соса.",
        "Добавете препечените парченца пита точно преди сервиране, за да останат хрупкави.",
      ],
      ingredients: [
        "2 питки, препечени и накъсани",
        "1 глава марула, нарязана",
        "2 домата, нарязани на кубчета",
        "1 краставица, нарязана на кубчета",
        "4 репички, нарязани на тънко",
        "3 стръка пресен лук, нарязани",
        "1/4 чаша пресен магданоз, нарязан",
        "2 с.л. прясна мента, нарязана",
        "3 с.л. зехтин",
        "2 с.л. лимонов сок",
        "1 с.л. наров сироп",
        "1 ч.л. сумак",
        "Сол и черен пипер на вкус",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
