import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "baked-chicken-tenders",
      title: "Baked Chicken Tenders",
      description:
        "Crispy panko-breaded chicken tenders baked instead of fried, seasoned at every stage and baked on a wire rack so air circulates underneath - baking directly on a sheet pan is why most baked tenders turn out soggy on the bottom instead of crispy all around.",
      imageEmoji: "🍗",
      cookTimeMinutes: 35,
      servings: 4,
      ingredients: [
        { text: "1 lb chicken tenders", ingredient: "chicken tenders", quantity: 1 },
        { text: "Salt and pepper to taste", ingredient: "salt and pepper", quantity: null },
        { text: "1/2 cup flour", ingredient: "flour", quantity: 0.5 },
        { text: "1/2 tsp garlic powder", ingredient: "garlic powder", quantity: 0.5 },
        { text: "2 eggs, beaten", ingredient: "eggs", quantity: 2 },
        { text: "1 cup panko breadcrumbs", ingredient: "panko breadcrumbs", quantity: 1 },
        { text: "3 tbsp olive oil", ingredient: "olive oil", quantity: 3 },
      ],
      steps: [
        "Preheat oven to 425°F and set a wire rack inside a baking sheet.",
        "Season the chicken tenders with salt and pepper.",
        "Mix the flour with the garlic powder and a pinch of salt.",
        "Dredge each chicken tender in the seasoned flour, then egg, then panko, pressing to help it stick.",
        "Arrange on the wire rack and drizzle with olive oil - the rack lets air circulate underneath, which is what keeps the bottom crispy instead of soggy.",
        "Bake for 20-25 minutes, flipping halfway, until golden and cooked through.",
      ],
      tags: ["dinner", "quick"],
    },
    bg: {
      title: "Печени пилешки филенца",
      description:
        "Хрупкави пилешки филенца, панирани в панко, печени вместо пържени, подправени на всеки етап и печени върху решетка, за да циркулира въздух отдолу - печенето директно върху тава е причината повечето печени филенца да излизат влажни отдолу, вместо хрупкави отвсякъде.",
      steps: [
        "Загрейте фурната на 220°C и поставете решетка в тава за печене.",
        "Подправете пилешките филенца със сол и черен пипер.",
        "Смесете брашното с чеснов прах и щипка сол.",
        "Овалайте всяко филенце в подправеното брашно, после яйце, после панко, притискайки леко, за да залепне.",
        "Наредете върху решетката и полейте със зехтин - решетката позволява на въздуха да циркулира отдолу, което пази основата хрупкава, вместо влажна.",
        "Печете 20-25 минути, обръщайки по средата, до златисто и готовност.",
      ],
      ingredients: [
        "450 г пилешки филенца",
        "Сол и черен пипер на вкус",
        "1/2 чаша брашно",
        "1/2 ч.л. чеснов прах",
        "2 разбити яйца",
        "1 чаша панко галета",
        "3 с.л. зехтин",
      ],
    },
  },
  {
    en: {
      slug: "baked-tilapia",
      title: "Baked Tilapia",
      description:
        "Mild, flaky tilapia fillets patted dry before seasoning and baked with garlic, lemon, and herbs - moisture left on the fish is what makes it steam instead of roast, turning the fillets watery instead of flaky.",
      imageEmoji: "🐟",
      cookTimeMinutes: 25,
      servings: 4,
      ingredients: [
        { text: "4 tilapia fillets", ingredient: "tilapia", quantity: 4 },
        { text: "3 tbsp melted butter", ingredient: "butter", quantity: 3 },
        { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
        { text: "1 lemon, sliced", ingredient: "lemon", quantity: 1 },
        { text: "1 tsp dried parsley", ingredient: "parsley", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Preheat oven to 400°F.",
        "Pat the tilapia fillets completely dry with paper towels - surface moisture is what makes the fish steam instead of roast.",
        "Place in a baking dish and brush with the melted butter and garlic.",
        "Season with parsley, salt, and pepper, then top with lemon slices.",
        "Bake for 12-15 minutes until the fish flakes easily with a fork.",
      ],
      tags: ["dinner", "quick"],
    },
    bg: {
      title: "Печена тилапия",
      description:
        "Нежни, крехки филета тилапия, подсушени преди подправяне и печени с чесън, лимон и билки - влагата, оставена по рибата, е това, което я кара да се задуши, вместо да се изпече, правейки филетата воднисти, вместо крехки.",
      steps: [
        "Загрейте фурната на 200°C.",
        "Подсушете напълно филетата тилапия с хартиени кърпи - повърхностната влага е това, което кара рибата да се задуши, вместо да се изпече.",
        "Поставете в тава и намажете с разтопеното масло и чесъна.",
        "Подправете с магданоз, сол и черен пипер, после сложете резенчета лимон отгоре.",
        "Печете 12-15 минути, докато рибата се разпада лесно с вилица.",
      ],
      ingredients: [
        "4 филета тилапия",
        "3 с.л. разтопено масло",
        "2 скилидки чесън, ситно нарязани",
        "1 лимон, нарязан на резени",
        "1 ч.л. сух магданоз",
        "Сол на вкус",
        "Черен пипер на вкус",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
