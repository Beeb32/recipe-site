import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "stuffed-bell-peppers",
      title: "Stuffed Bell Peppers",
      description:
        "Bell peppers parboiled briefly to soften before stuffing with a savory mixture of ground beef, rice, and tomato sauce - parboiling first is what keeps the peppers tender all the way through instead of staying crunchy at the base while the filling is done.",
      imageEmoji: "🫑",
      cookTimeMinutes: 55,
      servings: 4,
      ingredients: [
        { text: "4 bell peppers, tops removed and seeded", ingredient: "bell peppers", quantity: 4 },
        { text: "1 lb ground beef", ingredient: "ground beef", quantity: 1 },
        { text: "1 cup cooked rice", ingredient: "rice", quantity: 1 },
        { text: "1 cup tomato sauce", ingredient: "tomato sauce", quantity: 1 },
        { text: "1 cup shredded cheese", ingredient: "cheese", quantity: 1 },
      ],
      steps: [
        "Preheat oven to 375°F.",
        "Blanch the bell peppers in boiling water for 5 minutes to soften slightly, then drain - parboiling first is what keeps the peppers tender all the way through instead of staying crunchy at the base.",
        "Brown the ground beef, then mix with the cooked rice and half the tomato sauce.",
        "Stuff the mixture into the parboiled bell peppers and place in a baking dish.",
        "Top with remaining sauce and cheese, then bake for 30-35 minutes until the peppers are tender.",
      ],
      tags: ["dinner"],
    },
    bg: {
      title: "Пълнени чушки",
      description:
        "Чушки, бланширани за кратко, за да омекнат, преди да се напълнят с ароматна смес от телешка кайма, ориз и доматен сос - предварителното бланширане е това, което пази чушките крехки чак до основата, вместо да останат твърди, докато плънката е готова.",
      steps: [
        "Загрейте фурната на 190°C.",
        "Бланширайте чушките във вряла вода за 5 минути, за да омекнат леко, после отцедете - предварителното бланширане е това, което пази чушките крехки чак до основата, вместо да останат твърди.",
        "Запържете каймата, после смесете със сготвения ориз и половината доматен сос.",
        "Напълнете бланшираните чушки със сместа и ги поставете в тава.",
        "Отгоре сложете останалия сос и сирене, после печете 30-35 минути до омекване на чушките.",
      ],
      ingredients: [
        "4 чушки, с изрязани връхчета и почистени от семки",
        "450 г кайма от телешко месо",
        "1 чаша сготвен ориз",
        "1 чаша доматен сос",
        "1 чаша настъргано сирене",
      ],
    },
  },
  {
    en: {
      slug: "stuffed-shells",
      title: "Stuffed Shells",
      description:
        "Jumbo pasta shells cooked just to al dente so they don't tear, filled with a ricotta mixture properly seasoned with parmesan, garlic, and herbs - seasoning the ricotta filling itself, not just the sauce, is what most bare-bones versions skip, leaving the filling bland.",
      imageEmoji: "🍝",
      cookTimeMinutes: 55,
      servings: 6,
      ingredients: [
        { text: "20 jumbo pasta shells, cooked just to al dente", ingredient: "pasta shells", quantity: 20 },
        { text: "2 cups ricotta cheese", ingredient: "ricotta cheese", quantity: 2 },
        { text: "1 egg", ingredient: "eggs", quantity: 1 },
        { text: "1/2 cup grated parmesan", ingredient: "parmesan", quantity: 0.5 },
        { text: "1 clove garlic, minced", ingredient: "garlic", quantity: 1 },
        { text: "1 tsp Italian seasoning", ingredient: "italian seasoning", quantity: 1 },
        { text: "Salt and pepper to taste", ingredient: "salt and pepper", quantity: null },
        { text: "2 cups marinara sauce", ingredient: "marinara sauce", quantity: 2 },
        { text: "1 1/2 cups shredded mozzarella", ingredient: "mozzarella", quantity: 1.5 },
      ],
      steps: [
        "Preheat oven to 375°F.",
        "Cook the pasta shells just until al dente according to the package, being careful not to overcook them or they'll tear when stuffed.",
        "Mix the ricotta cheese with the egg, parmesan, garlic, Italian seasoning, salt, pepper, and half the mozzarella - seasoning the filling itself is what keeps it from tasting bland under the sauce.",
        "Spread a layer of marinara in a baking dish, stuff the shells with the ricotta mixture, and arrange on top.",
        "Cover with remaining marinara and mozzarella, then bake for 30 minutes until bubbly.",
      ],
      tags: ["dinner", "italian", "vegetarian"],
    },
    bg: {
      title: "Пълнени черупки паста",
      description:
        "Големи черупки паста, сготвени точно до ал денте, за да не се скъсат, пълнени със смес от рикота, правилно подправена с пармезан, чесън и билки - подправянето на самата плънка от рикота, а не само на соса, е това, което повечето елементарни версии пропускат, оставяйки плънката безвкусна.",
      steps: [
        "Загрейте фурната на 190°C.",
        "Сварете черупките точно до ал денте според опаковката, внимавайки да не ги преварите, иначе ще се скъсат при пълнене.",
        "Смесете рикотата с яйцето, пармезана, чесъна, италианските подправки, солта, черния пипер и половината моцарела - подправянето на самата плънка е това, което я пази от безвкусие под соса.",
        "Разстелете слой маринара в тава, напълнете черупките със сместа от рикота и ги наредете отгоре.",
        "Покрийте с останалата маринара и моцарела, после печете 30 минути до къкрене.",
      ],
      ingredients: [
        "20 големи черупки паста, сготвени точно до ал денте",
        "2 чаши рикота",
        "1 яйце",
        "1/2 чаша настърган пармезан",
        "1 скилидка чесън, ситно нарязана",
        "1 ч.л. италиански подправки",
        "Сол и черен пипер на вкус",
        "2 чаши сос маринара",
        "1 1/2 чаши настъргана моцарела",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
