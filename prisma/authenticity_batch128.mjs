import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "blackened-fish",
      title: "Blackened Fish",
      description:
        "Fish fillets coated in a smoky spice blend and seared until deeply crusted in a screaming-hot pan - regular butter alone is what burns and turns bitter at the high heat true blackening needs; a splash of high-heat oil keeps the crust dark without scorching.",
      imageEmoji: "🐟",
      cookTimeMinutes: 20,
      servings: 4,
      ingredients: [
        { text: "4 white fish fillets", ingredient: "white fish", quantity: 4 },
        { text: "2 tbsp blackening seasoning", ingredient: "blackening seasoning", quantity: 2 },
        { text: "1 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 1 },
        { text: "3 tbsp butter", ingredient: "butter", quantity: 3 },
      ],
      steps: [
        "Pat the fish fillets dry and coat each generously with blackening seasoning.",
        "Heat the oil in a cast iron or heavy skillet over high heat until just smoking.",
        "Add the butter and immediately sear the fish for 3-4 minutes per side until a dark crust forms and the fish is cooked through - the oil is what keeps the butter from burning at the high heat true blackening needs.",
        "Serve immediately.",
      ],
      tags: ["dinner", "quick"],
    },
    bg: {
      title: "Опушена риба",
      description:
        "Рибни филета, покрити с опушена смес от подправки и запържени до силна коричка в нажежен тиган - самото масло е това, което изгаря и се превръща в горчиво при високата температура, необходима за истинско 'опушване'; малко олио с висока точка на изпушване пази коричката тъмна, без да прегаря.",
      steps: [
        "Подсушете рибните филета и покрийте щедро всяко с подправка за опушване.",
        "Загрейте олиото в чугунен или тежък тиган на силен огън, докато започне да пуши.",
        "Добавете маслото и веднага запържете рибата по 3-4 минути от всяка страна, докато се образува тъмна коричка и рибата стане готова - олиото е това, което пази маслото да не изгори при високата температура, необходима за истинско опушване.",
        "Сервирайте веднага.",
      ],
      ingredients: [
        "4 филета от бяла риба",
        "2 с.л. подправка за опушване",
        "1 с.л. олио",
        "3 с.л. масло",
      ],
    },
  },
  {
    en: {
      slug: "mango-salsa-fish",
      title: "Mango Salsa Fish",
      description:
        "Pan-seared fish topped with a fresh, sweet-tangy mango salsa rounded out with cilantro and jalapeño - mango and red onion alone is a thinner salsa than the classic version, missing the herb and heat that balance the sweetness.",
      imageEmoji: "🐟",
      cookTimeMinutes: 25,
      servings: 4,
      ingredients: [
        { text: "4 white fish fillets", ingredient: "white fish", quantity: 4 },
        { text: "1 mango, diced", ingredient: "mango", quantity: 1 },
        { text: "1/4 red onion, diced", ingredient: "red onion", quantity: 0.25 },
        { text: "1/2 jalapeño, minced", ingredient: "jalapeno", quantity: 0.5 },
        { text: "2 tbsp chopped fresh cilantro", ingredient: "cilantro", quantity: 2 },
        { text: "1 lime, juiced", ingredient: "lime", quantity: 1 },
        { text: "2 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 2 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Combine the mango, red onion, jalapeño, cilantro, and half the lime juice in a bowl to make the salsa.",
        "Season the fish with salt and the remaining lime juice, then cook in oil over medium-high heat for 3-4 minutes per side.",
        "Top each fillet with a generous spoonful of mango salsa.",
        "Serve immediately.",
      ],
      tags: ["dinner", "quick"],
    },
    bg: {
      title: "Риба със салса от манго",
      description:
        "Риба, изпечена в тиган, покрита с прясна, сладко-кисела салса от манго, допълнена с кориандър и халапеньо - манго и червен лук сами по себе си правят по-тънка салса от класическата версия, липсват билката и лютивината, които балансират сладостта.",
      steps: [
        "Смесете мангото, червения лук, халапеньото, кориандъра и половината лаймов сок в купа за салсата.",
        "Подправете рибата със сол и останалия лаймов сок, после изпечете в олио на среден до силен огън по 3-4 минути от всяка страна.",
        "Отгоре на всяко филе сложете обилна лъжица салса от манго.",
        "Сервирайте веднага.",
      ],
      ingredients: [
        "4 филета бяла риба",
        "1 манго, нарязано на кубчета",
        "1/4 червен лук, нарязан на кубчета",
        "1/2 халапеньо, ситно нарязано",
        "2 с.л. нарязан пресен кориандър",
        "сок от 1 лайм",
        "2 с.л. олио",
        "Сол на вкус",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
