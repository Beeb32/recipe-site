import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "hashbrown-casserole",
      title: "Hashbrown Casserole",
      description:
        "A cheesy, creamy baked casserole of shredded potatoes topped with buttered cornflakes for crunch - the cornflake topping is the signature finishing touch of the classic 'funeral potatoes' casserole that most quick versions leave off.",
      imageEmoji: "🥔",
      cookTimeMinutes: 55,
      servings: 8,
      ingredients: [
        { text: "1 bag frozen shredded hash browns, thawed and patted dry", ingredient: "hash browns", quantity: 1 },
        { text: "2 cups shredded cheddar cheese", ingredient: "cheddar cheese", quantity: 2 },
        { text: "1 can cream of chicken soup", ingredient: "cream of chicken soup", quantity: 1 },
        { text: "1 cup sour cream", ingredient: "sour cream", quantity: 1 },
        { text: "1/4 cup melted butter", ingredient: "butter", quantity: 0.25 },
        { text: "1/2 tsp onion powder", ingredient: "onion powder", quantity: 0.5 },
        { text: "Salt and pepper to taste", ingredient: "salt and pepper", quantity: null },
        { text: "2 cups cornflakes, crushed", ingredient: "cornflakes", quantity: 2 },
        { text: "2 tbsp melted butter (for topping)", ingredient: "butter", quantity: 2 },
      ],
      steps: [
        "Preheat oven to 350°F.",
        "Pat the thawed hash browns dry with paper towels - excess moisture is what makes the casserole watery instead of creamy.",
        "Mix the hash browns, cheese, cream of chicken soup, sour cream, melted butter, onion powder, salt, and pepper.",
        "Spread into a baking dish.",
        "Toss the crushed cornflakes with the remaining melted butter and sprinkle over the top - the cornflake topping is the signature crunch of classic 'funeral potatoes.'",
        "Bake for 45 minutes until golden and bubbly.",
      ],
      tags: ["breakfast", "vegetarian"],
    },
    bg: {
      title: "Гювеч с настъргани картофи",
      description:
        "Сирен, кремообразен печен гювеч от настъргани картофи, покрит с масленки корнфлейкс за хрупкавост - хрупкавата коричка от корнфлейкс е характерният финален щрих на класическия гювеч 'погребални картофи', който повечето бързи версии пропускат.",
      steps: [
        "Загрейте фурната на 180°C.",
        "Подсушете размразените настъргани картофи с хартиени кърпи - излишната влага е това, което прави гювеча воднист, вместо кремообразен.",
        "Смесете настърганите картофи, сиренето, крем супата от пиле, заквасената сметана, разтопеното масло, лучения прах, солта и черния пипер.",
        "Разпределете в тава.",
        "Разбъркайте натрошените корнфлейкс с останалото разтопено масло и поръсете отгоре - хрупкавата коричка от корнфлейкс е характерната хрупкавост на класическите 'погребални картофи'.",
        "Печете 45 минути до златисто и къкрене.",
      ],
      ingredients: [
        "1 торбичка замразени настъргани картофи, размразени и подсушени",
        "2 чаши настъргано чедър сирене",
        "1 консерва крем супа от пиле",
        "1 чаша заквасена сметана",
        "1/4 чаша разтопено масло",
        "1/2 ч.л. лучен прах",
        "Сол и черен пипер на вкус",
        "2 чаши натрошени корнфлейкс",
        "2 с.л. разтопено масло (за коричката)",
      ],
    },
  },
  {
    en: {
      slug: "loaded-baked-potatoes",
      title: "Loaded Baked Potatoes",
      description:
        "Fluffy baked potatoes with skins rubbed in oil for extra crispness, topped with cheese, bacon, sour cream, and green onion - coating the skin in oil before baking is what gives real baked potatoes their crackly crust instead of a soft, dull one.",
      imageEmoji: "🥔",
      cookTimeMinutes: 60,
      servings: 4,
      ingredients: [
        { text: "4 potatoes", ingredient: "potato", quantity: 4 },
        { text: "2 tbsp olive oil", ingredient: "olive oil", quantity: 2 },
        { text: "1 cup shredded cheddar cheese", ingredient: "cheddar cheese", quantity: 1 },
        { text: "4 slices bacon, cooked and crumbled", ingredient: "bacon", quantity: 4 },
        { text: "1/2 cup sour cream", ingredient: "sour cream", quantity: 0.5 },
        { text: "2 green onions, sliced", ingredient: "green onion", quantity: 2 },
      ],
      steps: [
        "Preheat oven to 400°F and pierce each potato a few times with a fork.",
        "Rub the potatoes all over with olive oil and a sprinkle of salt - coating the skin in oil is what gives it a crispy, crackly crust instead of staying soft.",
        "Bake directly on the oven rack for 45-50 minutes until tender.",
        "Slice open each potato and fluff the inside with a fork.",
        "Top with cheese, bacon, sour cream, and green onions.",
      ],
      tags: ["dinner", "vegetarian"],
    },
    bg: {
      title: "Пълнени печени картофи",
      description:
        "Пухкави печени картофи с корички, намазани със зехтин за допълнителна хрупкавост, покрити със сирене, бекон, заквасена сметана и пресен лук - намазването на кората със зехтин преди печене е това, което придава на истинските печени картофи напукана коричка, вместо мека и безлична.",
      steps: [
        "Загрейте фурната на 200°C и пробийте всеки картоф няколко пъти с вилица.",
        "Намажете картофите отвсякъде със зехтин и поръсете със сол - намазването на кората със зехтин е това, което ѝ придава хрупкава, напукана коричка, вместо да остане мека.",
        "Печете директно върху скарата на фурната 45-50 минути до омекване.",
        "Разрежете всеки картоф и разбийте отвътре с вилица.",
        "Отгоре добавете сирене, бекон, заквасена сметана и пресен лук.",
      ],
      ingredients: [
        "4 картофа",
        "2 с.л. зехтин",
        "1 чаша настъргано чедър сирене",
        "4 резена бекон, изпечен и натрошен",
        "1/2 чаша заквасена сметана",
        "2 стръка пресен лук, нарязани",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
