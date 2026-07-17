import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "teriyaki-chicken",
      title: "Teriyaki Chicken",
      description:
        "Pan-seared chicken glazed in a true Japanese teriyaki sauce - just soy sauce, mirin, sake, and sugar, with no garlic, ginger, or cornstarch, reduced naturally to a glossy glaze.",
      imageEmoji: "🍗",
      cookTimeMinutes: 25,
      servings: 4,
      ingredients: [
        { text: "4 chicken thighs", ingredient: "chicken thighs", quantity: 4 },
        { text: "2 tbsp soy sauce", ingredient: "soy sauce", quantity: 2 },
        { text: "2 tbsp mirin", ingredient: "mirin", quantity: 2 },
        { text: "2 tbsp sake", ingredient: "sake", quantity: 2 },
        { text: "1 tbsp sugar", ingredient: "sugar", quantity: 1 },
      ],
      steps: [
        "Whisk together the soy sauce, mirin, sake, and sugar.",
        "Sear the chicken thighs skin-side down in a hot skillet until browned, then flip and cook until nearly done.",
        "Pour in the sauce and simmer, spooning it over the chicken, until it naturally reduces to a glossy glaze, about 5-7 minutes - no cornstarch needed, the alcohol evaporating and sugar caramelizing do the thickening.",
        "Slice and serve coated in the glaze.",
      ],
      tags: ["dinner", "asian", "quick"],
    },
    bg: {
      title: "Пиле Терияки",
      description:
        "Изпечено в тиган пиле, глазирано с истински японски сос терияки - само соев сос, мирин, саке и захар, без чесън, джинджифил или царевично нишесте, редуциран естествено до лъскава глазура.",
      steps: [
        "Разбийте соевия сос, мирина, сакето и захарта заедно.",
        "Изпечете пилешките бутчета с кожата надолу в горещ тиган до запържване, после обърнете и гответе, докато е почти готово.",
        "Изсипете соса и оставете да къкри, поливайки пилето с него, докато естествено се редуцира до лъскава глазура, около 5-7 минути - не е нужно царевично нишесте, изпаряването на алкохола и карамелизирането на захарта свършват сгъстяването.",
        "Нарежете и сервирайте покрито с глазурата.",
      ],
      ingredients: [
        "4 пилешки бутчета",
        "2 с.л. соев сос",
        "2 с.л. мирин",
        "2 с.л. саке",
        "1 с.л. захар",
      ],
    },
  },
  {
    en: {
      slug: "pork-dumplings",
      title: "Pork Dumplings",
      description:
        "Pan-fried and steamed dumplings filled with seasoned pork and cabbage - the cabbage is salted and squeezed dry first so the filling stays juicy instead of turning the wrappers soggy.",
      imageEmoji: "🥟",
      cookTimeMinutes: 55,
      servings: 6,
      ingredients: [
        { text: "1 lb ground pork", ingredient: "ground pork", quantity: 1 },
        { text: "1 cup finely chopped napa cabbage", ingredient: "cabbage", quantity: 1 },
        { text: "1/2 tsp salt (for salting the cabbage)", ingredient: "salt", quantity: 0.5 },
        { text: "2 green onions, minced", ingredient: "green onion", quantity: 2 },
        { text: "1 tbsp soy sauce", ingredient: "soy sauce", quantity: 1 },
        { text: "1 tbsp grated ginger", ingredient: "ginger", quantity: 1 },
        { text: "1 tbsp Shaoxing wine", ingredient: "shaoxing wine", quantity: 1 },
        { text: "1 tsp sesame oil", ingredient: "sesame oil", quantity: 1 },
        { text: "1/4 tsp white pepper", ingredient: "white pepper", quantity: 0.25 },
        { text: "40 dumpling wrappers", ingredient: "dumpling wrappers", quantity: 40 },
        { text: "2 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 2 },
        { text: "Soy sauce and black vinegar, for dipping", ingredient: "black vinegar", quantity: null },
      ],
      steps: [
        "Toss the chopped cabbage with the salt and let it sit for 15-30 minutes, then squeeze out as much liquid as possible - this keeps the filling from turning soggy.",
        "Mix the squeezed cabbage with the ground pork, green onions, soy sauce, ginger, Shaoxing wine, sesame oil, and white pepper.",
        "Spoon a small amount of filling onto each wrapper, then fold and seal the edges.",
        "Heat oil in a skillet and fry the dumplings flat-side down until golden, then add a splash of water, cover, and steam for 5 minutes until cooked through.",
        "Serve hot with a dipping sauce of soy sauce and black vinegar.",
      ],
      tags: ["dinner", "asian"],
    },
    bg: {
      title: "Кнедли със свинско месо",
      description:
        "Изпечени в тиган и задушени кнедли, пълнени с подправено свинско месо и зеле - зелето се осолява и изцежда първо, за да не се разкисне плънката и корите.",
      steps: [
        "Разбъркайте нарязаното зеле със солта и оставете да престои 15-30 минути, после изцедете колкото се може повече течност - това пази плънката от разкисване.",
        "Смесете изцеденото зеле със свинската кайма, пресния лук, соевия сос, джинджифила, шаосинското вино, сусамовото олио и белия пипер.",
        "Сложете малко плънка върху всяка кора, после сгънете и запечатайте краищата.",
        "Загрейте олио в тиган и изпържете кнедлите с плоската страна надолу до златисто, после добавете малко вода, покрийте и задушете 5 минути до готовност.",
        "Сервирайте горещи със сос за топене от соев сос и черен оцет.",
      ],
      ingredients: [
        "450 г свинска кайма",
        "1 чаша ситно нарязано наппа зеле",
        "1/2 ч.л. сол (за осоляване на зелето)",
        "2 стръка пресен лук, ситно нарязани",
        "1 с.л. соев сос",
        "1 с.л. настърган джинджифил",
        "1 с.л. шаосинско вино",
        "1 ч.л. сусамово олио",
        "1/4 ч.л. бял пипер",
        "40 кори за кнедли",
        "2 с.л. олио",
        "Соев сос и черен оцет, за топене",
      ],
    },
  },
  {
    en: {
      slug: "vietnamese-fresh-spring-rolls",
      title: "Vietnamese Fresh Spring Rolls",
      description:
        "Rice paper rolls filled with shrimp, herbs, and vermicelli noodles, with the shrimp halved and placed against the wrapper so it shows through - no frying required.",
      imageEmoji: "🌯",
      cookTimeMinutes: 35,
      servings: 4,
      ingredients: [
        { text: "12 rice paper wrappers", ingredient: "rice paper", quantity: 12 },
        { text: "1 lb shrimp, cooked and halved lengthwise", ingredient: "shrimp", quantity: 1 },
        { text: "4 oz vermicelli noodles, cooked", ingredient: "vermicelli noodles", quantity: 4 },
        { text: "1 cup fresh mint and Thai basil leaves", ingredient: "fresh herbs", quantity: 1 },
        { text: "1 cup shredded lettuce", ingredient: "lettuce", quantity: 1 },
        { text: "1/4 cup peanut butter (for dipping sauce)", ingredient: "peanut butter", quantity: 0.25 },
        { text: "2 tbsp hoisin sauce", ingredient: "hoisin sauce", quantity: 2 },
        { text: "1 tbsp water", ingredient: "water", quantity: 1 },
        { text: "1 tsp lime juice", ingredient: "lime juice", quantity: 1 },
        { text: "Crushed peanuts, for garnish", ingredient: "peanuts", quantity: null },
      ],
      steps: [
        "Dip each rice paper wrapper briefly in warm water to soften.",
        "Arrange 2-3 shrimp halves cut-side up in a row near the bottom edge so they'll show through the wrapper, then layer lettuce, noodles, and herbs on top.",
        "Fold in the sides and roll tightly like a burrito.",
        "Whisk together the peanut butter, hoisin sauce, water, and lime juice for the dipping sauce, and top with crushed peanuts; serve alongside the rolls.",
      ],
      tags: ["lunch", "asian", "quick"],
    },
    bg: {
      title: "Виетнамски пролетни рулца",
      description:
        "Рулца от оризова хартия, пълнени със скариди, билки и тънка юфка, като скаридите се поставят разрязани откъм хартията, за да прозират през нея - без нужда от пържене.",
      steps: [
        "Потопете за кратко всяка оризова хартия в топла вода за омекване.",
        "Наредете 2-3 половинки скариди с разрязаната страна нагоре в редица близо до долния край, така че да прозират през хартията, после отгоре наредете салата, юфка и билки.",
        "Подгънете страните и завийте стегнато като буррито.",
        "Разбийте фъстъченото масло, хоисин соса, водата и лаймовия сок за соса за топене и поръсете с натрошени фъстъци; сервирайте до рулцата.",
      ],
      ingredients: [
        "12 оризови хартии",
        "450 г скариди, сготвени и разполовени по дължина",
        "115 г тънка юфка, сварена",
        "1 чаша пресни листа мента и тайландски босилек",
        "1 чаша настъргана салата",
        "1/4 чаша фъстъчено масло (за соса)",
        "2 с.л. хоисин сос",
        "1 с.л. вода",
        "1 ч.л. лаймов сок",
        "Натрошени фъстъци, за гарниране",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
