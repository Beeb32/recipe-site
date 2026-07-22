import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "mushroom-swiss-burger",
      title: "Mushroom Swiss Burger",
      description:
        "A beef burger topped with caramelized onions, sautéed mushrooms, and melted Swiss cheese - the caramelized onions are what round out the earthy mushrooms and rich cheese, a layer most quick versions skip entirely.",
      imageEmoji: "🍔",
      cookTimeMinutes: 45,
      servings: 4,
      ingredients: [
        { text: "1 1/2 lb ground beef", ingredient: "ground beef", quantity: 1.5 },
        { text: "Salt and pepper to taste", ingredient: "salt and pepper", quantity: null },
        { text: "1 onion, thinly sliced", ingredient: "onion", quantity: 1 },
        { text: "2 cups mushrooms, sliced", ingredient: "mushroom", quantity: 2 },
        { text: "3 tbsp butter, divided", ingredient: "butter", quantity: 3 },
        { text: "4 slices Swiss cheese", ingredient: "swiss cheese", quantity: 4 },
        { text: "4 hamburger buns", ingredient: "hamburger buns", quantity: 4 },
      ],
      steps: [
        "Melt 1 tbsp butter in a skillet over medium-low heat and cook the onion, stirring occasionally, for 20-25 minutes until deeply caramelized and golden brown - low and slow is what turns onions sweet instead of just soft.",
        "Sauté the mushrooms in the remaining butter over medium heat until golden, then season with salt and pepper off the heat - salting mushrooms before cooking draws out their moisture and keeps them from browning.",
        "Form the ground beef into four patties, season generously with salt and pepper, and press a shallow dimple into the center of each - the dimple keeps the patties from puffing into a dome as they cook.",
        "Cook the patties for 4-5 minutes per side, topping each with Swiss cheese during the last 2 minutes so it melts fully.",
        "Top each patty with the caramelized onions and sautéed mushrooms.",
        "Serve on buns.",
      ],
      tags: ["dinner", "quick"],
    },
    bg: {
      title: "Бургер с гъби и швейцарско сирене",
      description:
        "Телешки бургер с карамелизиран лук, задушени гъби и разтопено швейцарско сирене - карамелизираният лук е това, което заокръгля земните гъби и богатото сирене, слой, който повечето бързи версии пропускат напълно.",
      steps: [
        "Разтопете 1 с.л. масло в тиган на средно-слаб огън и гответе лука, като разбърквате от време на време, 20-25 минути, докато стане дълбоко карамелизиран и златистокафяв - бавното готвене е това, което прави лука сладък, а не просто омекнал.",
        "Задушете гъбите в останалото масло на средна температура до златисто, после подправете със сол и черен пипер извън котлона - осоляването на гъбите преди готвене изважда влагата им и им пречи да покафенеят.",
        "Оформете каймата на четири кюфтенца, подправете обилно със сол и черен пипер и направете плитка вдлъбнатина в средата на всяко - вдлъбнатината пречи на кюфтетата да се издуят като кубе при печене.",
        "Изпечете кюфтетата по 4-5 минути от всяка страна, като отгоре сложите швейцарско сирене през последните 2 минути, за да се разтопи напълно.",
        "Отгоре на всяко кюфте сложете карамелизирания лук и задушените гъби.",
        "Сервирайте в хлебчета.",
      ],
      ingredients: [
        "700 г кайма от телешко месо",
        "Сол и черен пипер на вкус",
        "1 глава лук, нарязан на тънко",
        "2 чаши гъби, нарязани на резени",
        "3 с.л. масло, разделено",
        "4 резена швейцарско сирене",
        "4 хлебчета за бургер",
      ],
    },
  },
  {
    en: {
      slug: "grilled-salmon-lemon-butter",
      title: "Grilled Salmon with Lemon Butter",
      description:
        "Flaky grilled salmon fillets with crisp skin, finished with a bright, buttery lemon sauce built from both zest and juice - patting the fillets fully dry and leaving them undisturbed on the grill is what gives the skin real crackle instead of turning soggy under the sauce.",
      imageEmoji: "🐟",
      cookTimeMinutes: 20,
      servings: 4,
      ingredients: [
        { text: "4 salmon fillets, skin-on", ingredient: "salmon", quantity: 4 },
        { text: "3 tbsp butter", ingredient: "butter", quantity: 3 },
        { text: "1 lemon, zested and juiced", ingredient: "lemon", quantity: 1 },
        { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
        { text: "1 tbsp fresh dill", ingredient: "dill", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Pat the salmon fillets completely dry and season with salt and pepper - any surface moisture is what keeps the skin from crisping.",
        "Place the fillets skin-side down on the grill or in a hot pan and cook undisturbed for 4-5 minutes until the skin is crisp and releases easily, then flip and cook 2-3 minutes more until just cooked through.",
        "Melt the butter with garlic in a small saucepan, then stir in the lemon zest, lemon juice, and dill.",
        "Spoon the lemon butter sauce over the salmon just before serving, keeping the crisp skin out of the sauce so it stays crackly.",
      ],
      tags: ["dinner", "quick"],
    },
    bg: {
      title: "Сьомга на скара с лимоново масло",
      description:
        "Крехка сьомга на скара с хрупкава кожа, довършена със свеж, маслен лимонов сос, изграден от кора и сок заедно - подсушаването на филетата напълно и оставянето им необезпокоявани на скарата е това, което придава на кожата истинска хрупкавост, вместо да омекне под соса.",
      steps: [
        "Подсушете филетата сьомга напълно и подправете със сол и черен пипер - всяка повърхностна влага е това, което пречи на кожата да стане хрупкава.",
        "Поставете филетата с кожата надолу на скарата или в горещ тиган и гответе необезпокоявани 4-5 минути, докато кожата стане хрупкава и се отделя лесно, после обърнете и гответе още 2-3 минути до готовност.",
        "Разтопете маслото с чесъна в малка тенджерка, после добавете лимоновата кора, лимоновия сок и копъра.",
        "Полейте сьомгата с лимоновото масло непосредствено преди сервиране, като държите хрупкавата кожа далеч от соса, за да остане хрупкава.",
      ],
      ingredients: [
        "4 филета сьомга с кожа",
        "3 с.л. масло",
        "1 лимон, настъргана кора и сок",
        "2 скилидки чесън, ситно нарязани",
        "1 с.л. пресен копър",
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
