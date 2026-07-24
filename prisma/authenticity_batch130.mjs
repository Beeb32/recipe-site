import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "one-pot-chicken-and-rice",
      title: "One-Pot Chicken and Rice",
      description:
        "Tender chicken and fluffy rice simmered together in one pot, seasoned with garlic alongside the salt and rested off heat before serving - letting the pot rest covered for a few minutes after cooking is what lets the rice finish steaming evenly instead of staying wet at the bottom.",
      imageEmoji: "🍚",
      cookTimeMinutes: 40,
      servings: 4,
      ingredients: [
        { text: "4 chicken thighs", ingredient: "chicken thighs", quantity: 4 },
        { text: "1 1/2 cups rice", ingredient: "rice", quantity: 1.5 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
        { text: "3 cups chicken broth", ingredient: "chicken broth", quantity: 3 },
        { text: "2 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 2 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Season the chicken thighs with salt and pepper, then sear in oil in a large pot until browned; set aside.",
        "Sauté the onion and garlic in the same pot until softened.",
        "Stir in the rice and chicken broth, then nestle the chicken back into the pot.",
        "Cover and simmer for 20-25 minutes until the rice is tender and the chicken is cooked through.",
        "Remove from heat and let rest, covered, for 5 minutes before serving - resting lets the rice finish steaming evenly instead of staying wet at the bottom.",
      ],
      tags: ["dinner", "quick"],
    },
    bg: {
      title: "Пиле с ориз в един съд",
      description:
        "Крехко пиле и пухкав ориз, варени заедно в един съд, подправени с чесън заедно със солта и оставени да починат извън котлона преди сервиране - оставянето на съда покрит за няколко минути след готвене е това, което позволява на ориза да довърши изпаряването равномерно, вместо да остане мокър на дъното.",
      steps: [
        "Подправете пилешките бутчета със сол и черен пипер, после ги запържете в олио в голяма тенджера до запържване; отделете настрани.",
        "Запържете лука и чесъна в същата тенджера до омекване.",
        "Добавете ориза и пилешкия бульон, после върнете пилето обратно в тенджерата.",
        "Покрийте и варете 20-25 минути, докато оризът омекне и пилето се сготви напълно.",
        "Свалете от котлона и оставете да почине, покрито, 5 минути преди сервиране - почивката позволява на ориза да довърши изпаряването равномерно, вместо да остане мокър на дъното.",
      ],
      ingredients: [
        "4 пилешки бутчета",
        "1 1/2 чаши ориз",
        "1 лук, нарязан на кубчета",
        "2 скилидки чесън, ситно нарязани",
        "3 чаши пилешки бульон",
        "2 с.л. олио",
        "Сол на вкус",
        "Черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "one-pot-pasta",
      title: "One-Pot Pasta",
      description:
        "Pasta, sauce, and vegetables all cooked together in a single pot, finished with fresh basil - stirring frequently as the liquid reduces is what keeps the pasta from sticking and clumping in the shallow broth, and basil at the end is the finishing note most quick versions skip.",
      imageEmoji: "🍝",
      cookTimeMinutes: 25,
      servings: 4,
      ingredients: [
        { text: "1 lb spaghetti", ingredient: "spaghetti", quantity: 1 },
        { text: "1 can diced tomatoes", ingredient: "tomato", quantity: 1 },
        { text: "1 onion, sliced", ingredient: "onion", quantity: 1 },
        { text: "3 cloves garlic, sliced", ingredient: "garlic", quantity: 3 },
        { text: "4 cups vegetable broth", ingredient: "vegetable broth", quantity: 4 },
        { text: "3 tbsp olive oil", ingredient: "olive oil", quantity: 3 },
        { text: "1/4 cup chopped fresh basil", ingredient: "basil", quantity: 0.25 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Combine the spaghetti, diced tomatoes, onion, garlic, vegetable broth, olive oil, and a pinch of salt in a large pot.",
        "Bring to a boil, then reduce heat and simmer, stirring frequently, for 10-12 minutes until the pasta is tender and the liquid has mostly absorbed - frequent stirring is what keeps the pasta from sticking and clumping in the shallow liquid.",
        "Stir in the basil and season to taste before serving.",
      ],
      tags: ["dinner", "quick", "vegan", "italian"],
    },
    bg: {
      title: "Паста в един съд",
      description:
        "Паста, сос и зеленчуци, приготвени заедно в един съд, завършени с пресен босилек - честото разбъркване, докато течността намалява, е това, което пази пастата да не залепне и слепне в плитката течност, а босилекът накрая е финалната нотка, която повечето бързи версии пропускат.",
      steps: [
        "Смесете спагетите, нарязаните домати, лука, чесъна, зеленчуковия бульон, зехтина и щипка сол в голяма тенджера.",
        "Оставете да заври, после намалете котлона и варете, разбърквайки често, 10-12 минути, докато пастата омекне и течността се абсорбира почти напълно - честото разбъркване е това, което пази пастата да не залепне и слепне в плитката течност.",
        "Разбъркайте босилека и подправете на вкус преди сервиране.",
      ],
      ingredients: [
        "450 г спагети",
        "1 консерва нарязани домати",
        "1 лук, нарязан на резени",
        "3 скилидки чесън, нарязани на резенчета",
        "4 чаши зеленчуков бульон",
        "3 с.л. зехтин",
        "1/4 чаша нарязан пресен босилек",
        "Сол на вкус",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
