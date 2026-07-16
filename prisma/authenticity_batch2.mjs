import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "sarmi",
      title: "Sarmi",
      description:
        "Bulgarian stuffed cabbage rolls of sour cabbage leaves wrapped around a filling of ground pork, rice, dill, and savory, slow-simmered until tender.",
      imageEmoji: "🥬",
      cookTimeMinutes: 160,
      servings: 6,
      ingredients: [
        { text: "1 head sour (fermented) or fresh cabbage, leaves separated", ingredient: "cabbage", quantity: 1 },
        { text: "1 lb ground pork", ingredient: "ground pork", quantity: 1 },
        { text: "1/2 cup rice, rinsed", ingredient: "rice", quantity: 0.5 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "1 tsp sweet paprika", ingredient: "paprika", quantity: 1 },
        { text: "1/2 tsp dried dill", ingredient: "dill", quantity: 0.5 },
        { text: "1/2 tsp chubritsa (Bulgarian savory) or dried oregano", ingredient: "chubritsa", quantity: 0.5 },
        { text: "1/2 tsp black pepper", ingredient: "pepper", quantity: 0.5 },
        { text: "3 cups water (or water and cabbage brine)", ingredient: "water", quantity: 3 },
      ],
      steps: [
        "Mix the ground pork with rice, onion, paprika, dill, chubritsa, and black pepper.",
        "Place a spoonful of filling in the center of each cabbage leaf, fold in the sides, and roll tightly into a compact log.",
        "Arrange the rolls snugly, seam-side down, in a large pot, and pour in the water (or water and cabbage brine).",
        "Cover and simmer gently on low heat for 2 to 2.5 hours until the rice is fully cooked and the rolls are tender; serve hot with a dollop of thick yogurt.",
      ],
      tags: ["dinner"],
    },
    bg: {
      title: "Сарми",
      description:
        "Български сарми от кисело зеле, пълнени с кайма от свинско месо, ориз, копър и чубрица, бавно варени до омекване.",
      steps: [
        "Смесете каймата с ориза, лука, червения пипер, копъра, чубрицата и черния пипер.",
        "Сложете лъжица плънка в средата на всеки лист зеле, подгънете страните навътре и завийте стегнато на компактно руло.",
        "Наредете сармите плътно, с шева надолу, в голяма тенджера и залейте с вода (или вода и саламура от зелето).",
        "Покрийте и оставете да къкри на слаб огън 2 до 2.5 часа, докато оризът се сготви напълно и сармите омекнат; сервирайте топло с лъжица гъсто кисело мляко.",
      ],
      ingredients: [
        "1 глава кисело или прясно зеле, отделено на листа",
        "450 г кайма от свинско месо",
        "1/2 чаша ориз, изплакнат",
        "1 лук, нарязан на кубчета",
        "1 ч.л. сладък червен пипер",
        "1/2 ч.л. сушен копър",
        "1/2 ч.л. чубрица или сушен риган",
        "1/2 ч.л. черен пипер",
        "3 чаши вода (или вода и саламура от зелето)",
      ],
    },
  },
  {
    en: {
      slug: "kyufte",
      title: "Kyufte",
      description:
        "Bulgarian grilled meat patties of pork and beef, bound with soaked bread and seasoned with garlic, cumin, and chubritsa.",
      imageEmoji: "🍖",
      cookTimeMinutes: 60,
      servings: 4,
      ingredients: [
        { text: "1 lb ground pork", ingredient: "ground pork", quantity: 1 },
        { text: "3/4 lb ground beef", ingredient: "ground beef", quantity: 0.75 },
        { text: "1/2 onion, grated", ingredient: "onion", quantity: 0.5 },
        { text: "3 cloves garlic, minced", ingredient: "garlic", quantity: 3 },
        { text: "1/4 cup fresh parsley, chopped", ingredient: "parsley", quantity: 0.25 },
        { text: "1 tsp cumin", ingredient: "cumin", quantity: 1 },
        { text: "1 tsp chubritsa (Bulgarian savory), or 1/2 tsp dried oregano", ingredient: "chubritsa", quantity: 1 },
        { text: "1 tsp salt", ingredient: "salt", quantity: 1 },
        { text: "1/2 tsp black pepper", ingredient: "pepper", quantity: 0.5 },
        { text: "1/4 cup soft white bread, soaked in water and squeezed dry", ingredient: "bread", quantity: 0.25 },
        { text: "2 tbsp sunflower oil, for cooking", ingredient: "sunflower oil", quantity: 2 },
      ],
      steps: [
        "Soak the bread in water, then squeeze it dry; mix the ground pork and beef with the onion, garlic, parsley, cumin, chubritsa, salt, pepper, and soaked bread, combining gently by hand.",
        "Cover and refrigerate for 30-60 minutes to let the flavors meld.",
        "Shape into flattened oval patties about 1/2 inch thick, pressing a shallow thumb indent into the center of each.",
        "Cook in sunflower oil over medium heat for 5-7 minutes per side until browned and cooked through, then rest for 5 minutes before serving with a side salad.",
      ],
      tags: ["dinner", "quick"],
    },
    bg: {
      title: "Кюфте",
      description:
        "Български кюфтета на скара от свинско и телешко месо, свързани с накиснат хляб и подправени с чесън, кимион и чубрица.",
      steps: [
        "Накиснете хляба във вода, после изцедете; смесете свинската и телешката кайма с лука, чесъна, магданоза, кимиона, чубрицата, солта, черния пипер и накиснатия хляб, като разбърквате внимателно с ръце.",
        "Покрийте и оставете в хладилника 30-60 минути, за да се смесят ароматите.",
        "Оформете на сплескани овални кюфтета с дебелина около 1 см, като направите плитка вдлъбнатина с палец в средата на всяко.",
        "Изпечете в слънчогледово олио на среден огън по 5-7 минути от всяка страна, докато се запържат и сготвят напълно, после оставете да почине 5 минути преди сервиране с гарнитура от салата.",
      ],
      ingredients: [
        "450 г кайма от свинско месо",
        "340 г кайма от телешко месо",
        "1/2 лук, настърган",
        "3 скилидки чесън, ситно нарязани",
        "1/4 чаша пресен магданоз, нарязан",
        "1 ч.л. кимион",
        "1 ч.л. чубрица или 1/2 ч.л. сушен риган",
        "1 ч.л. сол",
        "1/2 ч.л. черен пипер",
        "1/4 чаша мека бяла филия хляб, накисната във вода и изцедена",
        "2 с.л. слънчогледово олио, за пържене",
      ],
    },
  },
  {
    en: {
      slug: "kebapche",
      title: "Kebapche",
      description:
        "Grilled minced meat rolls of pork and beef, seasoned with only cumin, black pepper, and salt - a Bulgarian grill favorite whose texture comes from a long rest and thorough kneading, not fillers.",
      imageEmoji: "🍢",
      cookTimeMinutes: 260,
      servings: 4,
      ingredients: [
        { text: "1 lb ground pork and beef mix", ingredient: "ground meat", quantity: 1 },
        { text: "1/3 cup water", ingredient: "water", quantity: 0.33 },
        { text: "1 tbsp cumin", ingredient: "cumin", quantity: 1 },
        { text: "1 tbsp black pepper", ingredient: "pepper", quantity: 1 },
        { text: "1 tsp salt", ingredient: "salt", quantity: 1 },
      ],
      steps: [
        "Thoroughly knead the ground meat with the cumin, pepper, salt, and water until it forms a smooth, sticky emulsion - this, not any filler, is what holds the kebapche together.",
        "Cover and refrigerate for at least 4 hours, ideally 24, to let the texture set.",
        "Shape into elongated cylinders about 6 inches long on a wooden board.",
        "Grill over medium-high heat, rotating every 2-3 minutes, until browned on all sides and cooked through.",
      ],
      tags: ["dinner", "quick"],
    },
    bg: {
      title: "Кебапче",
      description:
        "Печени на скара рулца от кайма от свинско и телешко месо, подправени само с кимион, черен пипер и сол - любимо българско ястие на скара, чиято текстура идва от дълга почивка и старателно омесване, не от пълнители.",
      steps: [
        "Омесете старателно каймата с кимиона, черния пипер, солта и водата, докато се получи гладка, лепкава емулсия - именно това, а не пълнител, държи кебапчето сплотено.",
        "Покрийте и оставете в хладилника поне 4 часа, в идеалния случай 24 часа, за да се стегне текстурата.",
        "Оформете на продълговати рула с дължина около 15 см върху дъска.",
        "Изпечете на скара на среден до силен огън, обръщайки на всеки 2-3 минути, докато се зачервят от всички страни и се сготвят напълно.",
      ],
      ingredients: [
        "450 г кайма от свинско и телешко месо",
        "1/3 чаша вода",
        "1 с.л. кимион",
        "1 с.л. черен пипер",
        "1 ч.л. сол",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
