import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "buddha-bowl",
      title: "Buddha Bowl",
      description:
        "A balanced vegan bowl of grains, vegetables roasted with oil, cumin, and salt, and a tahini dressing - unseasoned roasted vegetables and a plain tahini-lemon dressing with no salt are why this kind of bowl often tastes bland despite looking balanced.",
      imageEmoji: "🥗",
      cookTimeMinutes: 40,
      servings: 4,
      ingredients: [
        { text: "2 cups cooked quinoa", ingredient: "quinoa", quantity: 2 },
        { text: "2 sweet potatoes, cubed", ingredient: "sweet potato", quantity: 2 },
        { text: "2 cups chickpeas", ingredient: "chickpeas", quantity: 2 },
        { text: "2 tbsp olive oil", ingredient: "olive oil", quantity: 2 },
        { text: "1/2 tsp cumin", ingredient: "cumin", quantity: 0.5 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "2 cups spinach", ingredient: "spinach", quantity: 2 },
        { text: "3 tbsp tahini", ingredient: "tahini", quantity: 3 },
        { text: "2 tbsp lemon juice", ingredient: "lemon juice", quantity: 2 },
      ],
      steps: [
        "Toss the sweet potato and chickpeas with olive oil, cumin, and salt, then roast at 425°F for 25-30 minutes until tender and golden - seasoning before roasting is what actually gives the vegetables flavor instead of leaving them plain.",
        "Divide the quinoa and spinach among bowls.",
        "Top with the roasted sweet potato and chickpeas.",
        "Whisk together the tahini, lemon juice, a splash of water, and a pinch of salt until smooth.",
        "Drizzle the dressing over the bowls before serving.",
      ],
      tags: ["dinner", "vegan", "vegetarian"],
    },
    bg: {
      title: "Купа Буда",
      description:
        "Балансирана веган купа от зърнени храни, зеленчуци, печени със зехтин, кимион и сол, и дресинг от тахан - неподправени печени зеленчуци и обикновен дресинг от тахан и лимон без сол са причината такава купа често да има безвкусен резултат, въпреки че изглежда балансирана.",
      steps: [
        "Разбъркайте сладкия картоф и нахута със зехтин, кимион и сол, после изпечете на 220°C 25-30 минути до омекване и златисто - подправянето преди печене е това, което наистина придава вкус на зеленчуците, вместо да ги остави обикновени.",
        "Разпределете киноата и спанака в купи.",
        "Отгоре сложете печения сладък картоф и нахут.",
        "Разбийте тахана, лимоновия сок, малко вода и щипка сол до гладкост.",
        "Полейте купите с дресинга преди сервиране.",
      ],
      ingredients: [
        "2 чаши сготвена киноа",
        "2 сладки картофа, нарязани на кубчета",
        "2 чаши нахут",
        "2 с.л. зехтин",
        "1/2 ч.л. кимион",
        "Сол на вкус",
        "2 чаши спанак",
        "3 с.л. тахан",
        "2 с.л. лимонов сок",
      ],
    },
  },
  {
    en: {
      slug: "burrito-bowl",
      title: "Burrito Bowl",
      description:
        "Rice, beans, seasoned chicken, and fresh toppings in one hearty bowl, finished with lime and cilantro and corn charred in a hot pan - plain canned corn straight into the bowl with no lime is why homemade burrito bowls often taste flatter than the restaurant version.",
      imageEmoji: "🥗",
      cookTimeMinutes: 35,
      servings: 4,
      ingredients: [
        { text: "2 chicken breasts, diced", ingredient: "chicken breast", quantity: 2 },
        { text: "2 tbsp taco seasoning", ingredient: "taco seasoning", quantity: 2 },
        { text: "3 cups cooked rice", ingredient: "rice", quantity: 3 },
        { text: "1 can black beans, drained", ingredient: "black beans", quantity: 1 },
        { text: "1 cup corn", ingredient: "corn", quantity: 1 },
        { text: "1/2 cup salsa", ingredient: "salsa", quantity: 0.5 },
        { text: "1 lime, cut into wedges", ingredient: "lime", quantity: 1 },
        { text: "2 tbsp chopped fresh cilantro", ingredient: "cilantro", quantity: 2 },
      ],
      steps: [
        "Season the chicken with taco seasoning and cook in a skillet until cooked through.",
        "Char the corn in a dry skillet over high heat for 3-4 minutes until lightly blackened in spots - charring is what gives the corn real roasted flavor instead of tasting plain and canned.",
        "Divide the rice among bowls.",
        "Top with chicken, black beans, and charred corn.",
        "Finish with salsa, cilantro, and a squeeze of lime before serving.",
      ],
      tags: ["dinner", "mexican", "quick"],
    },
    bg: {
      title: "Буррито купа",
      description:
        "Ориз, боб, подправено пиле и пресни добавки в една сита купа, завършена с лайм и кориандър и царевица, овъглена в горещ тиган - обикновена консервирана царевица направо в купата без лайм е причината домашните буррито купи често да имат по-плосък вкус от ресторантската версия.",
      steps: [
        "Подправете пилето с подправка тако и изпечете в тиган до готовност.",
        "Овъглете царевицата в сух тиган на силен огън 3-4 минути, докато леко почернее на места - овъгляването е това, което придава на царевицата истински печен вкус, вместо да има вкус на обикновена консервирана.",
        "Разпределете ориза в купи.",
        "Отгоре сложете пиле, черен боб и овъглената царевица.",
        "Завършете със салса, кориандър и малко лайм преди сервиране.",
      ],
      ingredients: [
        "2 пилешки гърди, нарязани на кубчета",
        "2 с.л. подправка тако",
        "3 чаши сготвен ориз",
        "1 консерва черен боб, отцеден",
        "1 чаша царевица",
        "1/2 чаша салса",
        "1 лайм, нарязан на резенчета",
        "2 с.л. нарязан пресен кориандър",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
