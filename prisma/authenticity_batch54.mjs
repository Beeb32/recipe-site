import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "penne-arrabbiata",
      title: "Penne Arrabbiata",
      description:
        "Penne in a fiery garlic-chili tomato sauce finished with starchy pasta water for a glossy cling and fresh parsley - traditionally served with no cheese at all, so the heat and tomato stay front and center.",
      imageEmoji: "🍝",
      cookTimeMinutes: 25,
      servings: 4,
      ingredients: [
        { text: "1 lb penne pasta", ingredient: "penne", quantity: 1 },
        { text: "3 tbsp olive oil", ingredient: "olive oil", quantity: 3 },
        { text: "1 tsp red chili flakes", ingredient: "chili flakes", quantity: 1 },
        { text: "4 cloves garlic, sliced", ingredient: "garlic", quantity: 4 },
        { text: "1 can crushed tomatoes (San Marzano if available)", ingredient: "tomato", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "2 tbsp chopped parsley", ingredient: "parsley", quantity: 2 },
      ],
      steps: [
        "Cook the penne in salted boiling water until al dente, reserving 1/2 cup pasta water before draining.",
        "Heat the olive oil and sauté the chili flakes for 1-2 minutes, then add the garlic and cook briefly until fragrant - don't let the garlic brown, or it turns bitter.",
        "Stir in the crushed tomatoes and simmer for 15 minutes.",
        "Toss the drained pasta with the sauce and a splash of the reserved pasta water until glossy, seasoning with salt.",
        "Garnish with parsley and serve - traditionally with no cheese, so the heat and tomato flavor stay front and center.",
      ],
      tags: ["dinner", "italian", "quick", "vegan"],
    },
    bg: {
      title: "Пене Арабиата",
      description:
        "Пене в огнен доматен сос с чесън и люти чушки, довършен със скорбялена вода от пастата за лъскаво покритие и пресен магданоз - традиционно се сервира без никакво сирене, за да остане лютивината и доматеният вкус на преден план.",
      steps: [
        "Сварете пенето в подсолена вряла вода до готовност, запазвайки 1/2 чаша от водата преди отцеждане.",
        "Загрейте зехтина и запържете лютите чушки на люспи 1-2 минути, после добавете чесъна и гответе за кратко до ароматизиране - не оставяйте чесъна да покафенее, иначе ще загорчи.",
        "Добавете доматеното пюре и варете 15 минути.",
        "Разбъркайте отцедената паста със соса и малко от запазената вода от пастата до лъскавост, подправяйки със сол.",
        "Гарнирайте с магданоз и сервирайте - традиционно без сирене, за да останат лютивината и доматеният вкус на преден план.",
      ],
      ingredients: [
        "450 г паста пене",
        "3 с.л. зехтин",
        "1 ч.л. люти чушки на люспи",
        "4 скилидки чесън, нарязани на резенчета",
        "1 консерва доматено пюре (сан марцано, ако е налично)",
        "Сол на вкус",
        "2 с.л. нарязан магданоз",
      ],
    },
  },
  {
    en: {
      slug: "horchata",
      title: "Horchata",
      description:
        "Rice, cinnamon, and blanched almonds soaked overnight then blended and strained silky-smooth, sweetened with sugar and a touch of vanilla - the almonds and vanilla are what most simplified versions of this Mexican rice drink leave out.",
      imageEmoji: "🥤",
      cookTimeMinutes: 300,
      servings: 6,
      ingredients: [
        { text: "1 cup rice", ingredient: "rice", quantity: 1 },
        { text: "1/4 cup blanched almonds", ingredient: "almonds", quantity: 0.25 },
        { text: "1 cinnamon stick", ingredient: "cinnamon stick", quantity: 1 },
        { text: "4 cups water", ingredient: "water", quantity: 4 },
        { text: "1/2 cup sugar", ingredient: "sugar", quantity: 0.5 },
        { text: "1 tsp vanilla extract", ingredient: "vanilla extract", quantity: 1 },
        { text: "1 cup milk", ingredient: "milk", quantity: 1 },
      ],
      steps: [
        "Soak the rice, almonds, and cinnamon stick in the water for at least 5 hours, ideally overnight, so the rice softens and the flavor spreads through the liquid.",
        "Blend the mixture until completely smooth, then strain through a fine mesh strainer, pressing gently to extract as much liquid as possible without forcing pulp through - this is what keeps the horchata silky instead of gritty.",
        "Stir in the sugar, vanilla, and milk.",
        "Serve chilled over ice.",
      ],
      tags: ["snack", "vegetarian", "mexican"],
    },
    bg: {
      title: "Орчата",
      description:
        "Ориз, канела и обелени бадеми, накиснати през нощта, после пасирани и прецедени до копринена гладкост, подсладени със захар и лек привкус на ванилия - бадемите и ванилията са това, което повечето опростени версии на тази мексиканска оризова напитка пропускат.",
      steps: [
        "Накиснете ориза, бадемите и пръчката канела във водата поне 5 часа, в идеалния случай през нощта, за да омекне оризът и вкусът да се разпростре в течността.",
        "Пасирайте сместа до пълна гладкост, после прецедете през фина цедка, притискайки леко, за да извлечете колкото се може повече течност, без да прокарвате каша - това е това, което пази орчатата копринена, а не песъчлива.",
        "Разбъркайте захарта, ванилията и млякото.",
        "Сервирайте охладено с лед.",
      ],
      ingredients: [
        "1 чаша ориз",
        "1/4 чаша обелени бадеми",
        "1 пръчка канела",
        "4 чаши вода",
        "1/2 чаша захар",
        "1 ч.л. ванилия",
        "1 чаша мляко",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
