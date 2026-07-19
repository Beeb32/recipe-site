import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "chicken-noodle-soup",
      title: "Chicken Noodle Soup",
      description:
        "A soothing classic - tender chicken and egg noodles in a broth deepened by simmering bone-in chicken and aromatics right in the pot - starting from bone-in chicken instead of just poaching boneless breasts in store-bought broth is what gives real chicken noodle soup its fuller flavor.",
      imageEmoji: "🍜",
      cookTimeMinutes: 45,
      servings: 6,
      ingredients: [
        { text: "1 tbsp olive oil", ingredient: "olive oil", quantity: 1 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "2 carrots, sliced", ingredient: "carrot", quantity: 2 },
        { text: "2 celery stalks, sliced", ingredient: "celery", quantity: 2 },
        { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
        { text: "8 cups chicken broth", ingredient: "chicken broth", quantity: 8 },
        { text: "2 bone-in, skin-on chicken thighs", ingredient: "chicken thighs", quantity: 2 },
        { text: "1 bay leaf", ingredient: "bay leaf", quantity: 1 },
        { text: "2 sprigs fresh thyme", ingredient: "thyme", quantity: 2 },
        { text: "2 cups egg noodles", ingredient: "egg noodles", quantity: 2 },
        { text: "2 tbsp chopped fresh parsley", ingredient: "parsley", quantity: 2 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Heat olive oil in a large pot and sauté onion, carrots, celery, and garlic until softened.",
        "Add the chicken broth, chicken thighs, bay leaf, and thyme; bring to a boil, then reduce to a simmer.",
        "Cook until the chicken is cooked through and the broth has taken on more flavor, about 25 minutes, then remove the chicken, discard the skin and bones, and shred the meat - simmering bone-in chicken directly in the broth is what builds deeper flavor than poaching boneless breasts alone.",
        "Return the shredded chicken to the pot, discard the bay leaf and thyme sprigs, and add the egg noodles.",
        "Simmer until the noodles are tender, then stir in the parsley and season with salt and pepper.",
      ],
      tags: ["dinner", "quick"],
    },
    bg: {
      title: "Пилешка супа с юфка",
      description:
        "Успокояваща класика - нежно пилешко месо и юфка в бульон, задълбочен от вареното на кости пиле и подправки директно в тенджерата - започването с пиле на кости, вместо просто попарване на пилешки гърди без кости в готов бульон, е това, което придава на истинската пилешка супа по-пълния ѝ вкус.",
      steps: [
        "Загрейте зехтин в голяма тенджера и запържете лука, моркова, целината и чесъна до омекване.",
        "Добавете пилешкия бульон, пилешките бутчета, дафиновия лист и мащерката; оставете да заври, после намалете котлона.",
        "Гответе, докато пилешкото се сготви напълно и бульонът поеме повече вкус, около 25 минути, после извадете пилето, изхвърлете кожата и костите и накъсайте месото - варенето на пиле на кости директно в бульона изгражда по-дълбок вкус, отколкото само попарването на гърди без кости.",
        "Върнете накъсаното пиле в тенджерата, изхвърлете дафиновия лист и мащерката, и добавете юфката.",
        "Варете, докато юфката омекне, после разбъркайте магданоза и подправете със сол и черен пипер.",
      ],
      ingredients: [
        "1 с.л. зехтин",
        "1 лук, нарязан на кубчета",
        "2 моркова, нарязани на резени",
        "2 стъбла целина, нарязани на резени",
        "2 скилидки чесън, ситно нарязани",
        "8 чаши пилешки бульон",
        "2 пилешки бутчета на кости, с кожа",
        "1 дафинов лист",
        "2 клонки прясна мащерка",
        "2 чаши юфка",
        "2 с.л. нарязан пресен магданоз",
        "Сол на вкус",
        "Черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "blt-sandwich",
      title: "BLT Sandwich",
      description:
        "Crispy bacon, lettuce, and tomato piled between toasted bread with mayonnaise, with the tomato seasoned directly before assembling - salting the tomato slices themselves, not just the sandwich as a whole, is the small step that makes the tomato taste like the star instead of an afterthought.",
      imageEmoji: "🥪",
      cookTimeMinutes: 15,
      servings: 2,
      ingredients: [
        { text: "6 slices bacon", ingredient: "bacon", quantity: 6 },
        { text: "4 slices bread, toasted", ingredient: "bread", quantity: 4 },
        { text: "1 tomato, sliced", ingredient: "tomato", quantity: 1 },
        { text: "4 lettuce leaves", ingredient: "lettuce", quantity: 4 },
        { text: "2 tbsp mayonnaise", ingredient: "mayonnaise", quantity: 2 },
        { text: "Salt and pepper, for the tomato", ingredient: "salt and pepper", quantity: null },
      ],
      steps: [
        "Cook the bacon in a skillet until crisp, then drain on paper towels.",
        "Season the tomato slices with salt and pepper.",
        "Spread mayonnaise on the toasted bread slices.",
        "Layer the bacon, lettuce, and seasoned tomato on two slices.",
        "Top with the remaining bread and slice in half to serve.",
      ],
      tags: ["lunch", "quick"],
    },
    bg: {
      title: "БЛТ сандвич",
      description:
        "Хрупкав бекон, салата и домат, наредени между препечен хляб с майонеза, с домата подправен директно преди сглобяване - осоляването на резенчетата домат самите тях, а не само сандвича като цяло, е малката стъпка, която прави домата да звучи като звездата на сандвича, вместо просто добавка.",
      steps: [
        "Изпечете бекона в тиган до хрупкаво, после отцедете върху кухненска хартия.",
        "Подправете резенчетата домат със сол и черен пипер.",
        "Намажете майонеза върху препечените филии хляб.",
        "Наредете бекона, салатата и подправения домат върху две филии.",
        "Покрийте с останалия хляб и нарежете наполовина за сервиране.",
      ],
      ingredients: [
        "6 резена бекон",
        "4 филии хляб, препечени",
        "1 домат, нарязан на резени",
        "4 листа салата",
        "2 с.л. майонеза",
        "Сол и черен пипер, за домата",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
