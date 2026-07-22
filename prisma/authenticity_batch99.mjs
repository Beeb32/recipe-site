import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "baked-mac-and-cheese",
      title: "Baked Mac and Cheese",
      description:
        "Creamy stovetop cheese sauce sharpened with a touch of dry mustard, baked with slightly undercooked macaroni under a crunchy panko topping - undercooking the pasta before it goes in the oven is what keeps it from turning mushy, and the panko crust is the textural contrast most stovetop-only versions skip.",
      imageEmoji: "🧀",
      cookTimeMinutes: 40,
      servings: 6,
      ingredients: [
        { text: "1 lb elbow macaroni", ingredient: "macaroni", quantity: 1 },
        { text: "4 tbsp butter, divided", ingredient: "butter", quantity: 4 },
        { text: "1/4 cup flour", ingredient: "flour", quantity: 0.25 },
        { text: "3 cups milk", ingredient: "milk", quantity: 3 },
        { text: "1/4 tsp dry mustard", ingredient: "dry mustard", quantity: 0.25 },
        { text: "3 cups shredded cheddar cheese", ingredient: "cheddar cheese", quantity: 3 },
        { text: "1/2 cup panko breadcrumbs", ingredient: "panko breadcrumbs", quantity: 0.5 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Cook the macaroni in salted boiling water for 1 minute less than package directions - it will keep cooking in the oven, and starting slightly underdone is what keeps it from turning mushy.",
        "Melt 3 tbsp of the butter in a saucepan and whisk in the flour, cooking for 1 minute.",
        "Gradually whisk in the milk and dry mustard, cooking until thickened.",
        "Stir in the cheddar cheese until melted, then toss with the macaroni.",
        "Transfer to a baking dish, toss the panko with the remaining 1 tbsp melted butter and scatter over the top, and bake at 375°F for 20 minutes until golden and bubbly - panko instead of the sauce alone is what gives the top real crunch.",
      ],
      tags: ["dinner", "vegetarian"],
    },
    bg: {
      title: "Печена паста с кашкавал",
      description:
        "Кремообразен сос от сирене на котлона, изострен с щипка сух синап, запечен с леко недосготвени макарони под хрупкава коричка от панко - недосготвянето на пастата преди фурната е това, което я пази от разкашкване, а коричката от панко е текстурният контраст, който повечето версии само на котлон пропускат.",
      steps: [
        "Сварете макароните в подсолена вряла вода 1 минута по-малко от указаното на опаковката - ще продължат да се готвят във фурната, а леко недосготвените са това, което ги пази от разкашкване.",
        "Разтопете 3 с.л. от маслото в тенджера и разбъркайте с брашното, гответе 1 минута.",
        "Постепенно добавяйте млякото и сухия синап, разбърквайки до сгъстяване.",
        "Добавете чедъра до разтопяване, после разбъркайте с макароните.",
        "Прехвърлете в тава, разбъркайте панкото с останалата 1 с.л. разтопено масло и поръсете отгоре, после печете на 190°C 20 минути до златисто и къкрене - панкото, вместо само сосът, е това, което придава истинска хрупкавост отгоре.",
      ],
      ingredients: [
        "450 г макарони",
        "4 с.л. масло, разделено",
        "1/4 чаша брашно",
        "3 чаши мляко",
        "1/4 ч.л. сух синап",
        "3 чаши настъргано чедър сирене",
        "1/2 чаша панко галета",
        "Сол на вкус",
        "Черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "baked-ziti",
      title: "Baked Ziti",
      description:
        "Ziti pasta baked with marinara, a ricotta layer seasoned with herbs and pepper rather than left plain, and mozzarella until bubbly - an unseasoned ricotta layer is the most common reason baked ziti tastes bland in the middle.",
      imageEmoji: "🍝",
      cookTimeMinutes: 55,
      servings: 8,
      ingredients: [
        { text: "1 lb ziti pasta", ingredient: "ziti", quantity: 1 },
        { text: "1 jar marinara sauce", ingredient: "marinara sauce", quantity: 1 },
        { text: "2 cups ricotta cheese", ingredient: "ricotta cheese", quantity: 2 },
        { text: "1 egg", ingredient: "eggs", quantity: 1 },
        { text: "1/4 cup chopped fresh basil", ingredient: "basil", quantity: 0.25 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
        { text: "3 cups shredded mozzarella", ingredient: "mozzarella", quantity: 3 },
        { text: "1/2 cup grated Parmesan", ingredient: "parmesan", quantity: 0.5 },
      ],
      steps: [
        "Cook the ziti in salted boiling water until just shy of al dente, then drain.",
        "Mix the ricotta with the egg, half the Parmesan, basil, salt, and pepper - seasoning the ricotta itself is what keeps the inside from tasting bland under the sauce.",
        "Toss the pasta with the marinara sauce, then layer half in a baking dish with dollops of the ricotta mixture.",
        "Top with the remaining pasta, mozzarella, and Parmesan.",
        "Bake at 375°F for 25 minutes until golden and bubbly.",
      ],
      tags: ["dinner", "italian", "vegetarian"],
    },
    bg: {
      title: "Печена паста дзити",
      description:
        "Паста дзити, запечена с маринара, слой рикота, подправен с билки и черен пипер, вместо оставен обикновен, и моцарела до къкрене - неподправеният слой рикота е най-честата причина печената дзити да има безвкусна среда.",
      steps: [
        "Сварете дзитито в подсолена вряла вода до почти готовност, после отцедете.",
        "Смесете рикотата с яйцето, половината пармезан, босилека, солта и черния пипер - подправянето на самата рикота е това, което пази средата от безвкусие под соса.",
        "Разбъркайте пастата със соса маринара, после наредете половината в тава с топчета от рикотената смес.",
        "Отгоре сложете останалата паста, моцарела и пармезан.",
        "Печете на 190°C 25 минути до златисто и къкрене.",
      ],
      ingredients: [
        "450 г паста дзити",
        "1 буркан доматен сос маринара",
        "2 чаши рикота",
        "1 яйце",
        "1/4 чаша нарязан пресен босилек",
        "Сол на вкус",
        "Черен пипер на вкус",
        "3 чаши настъргана моцарела",
        "1/2 чаша настърган пармезан",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
