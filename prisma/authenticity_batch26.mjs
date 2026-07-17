import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "yakisoba",
      title: "Yakisoba",
      description:
        "Stir-fried wheat noodles cooked over high heat with pork and vegetables, sauced at the very end so the sugar doesn't scorch, and finished with aonori and pickled red ginger - the garnishes are what make it taste like real yakisoba, not just noodles in sauce.",
      imageEmoji: "🍜",
      cookTimeMinutes: 25,
      servings: 4,
      ingredients: [
        { text: "1 lb yakisoba noodles (fresh, pre-steamed)", ingredient: "yakisoba noodles", quantity: 1 },
        { text: "1/2 lb pork, sliced thin", ingredient: "pork", quantity: 0.5 },
        { text: "2 cups shredded cabbage", ingredient: "cabbage", quantity: 2 },
        { text: "1 carrot, julienned", ingredient: "carrot", quantity: 1 },
        { text: "1/4 cup yakisoba sauce (Worcestershire-based)", ingredient: "yakisoba sauce", quantity: 0.25 },
        { text: "2 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 2 },
        { text: "1 tbsp aonori (dried green seaweed flakes), for garnish", ingredient: "aonori", quantity: 1 },
        { text: "2 tbsp beni shoga (pickled red ginger), for garnish", ingredient: "beni shoga", quantity: 2 },
        { text: "Bonito flakes (katsuobushi), for garnish (optional)", ingredient: "bonito flakes", quantity: null },
      ],
      steps: [
        "If the noodles are cold and clumped, loosen them under warm water or microwave briefly for about 30 seconds so they separate easily.",
        "Heat the oil in a wok over high heat and cook the pork until browned.",
        "Add the cabbage and carrot, stir-frying over high heat for 3-4 minutes to get a slight char.",
        "Add the loosened noodles and toss for 1-2 minutes, then add the yakisoba sauce right at the very end and toss quickly to coat - adding it too early lets the sugar in the sauce scorch on the hot pan.",
        "Plate immediately and top with aonori, beni shoga, and bonito flakes if using.",
      ],
      tags: ["dinner", "asian", "quick"],
    },
    bg: {
      title: "Якисоба",
      description:
        "Задушена пшенична юфка, приготвена на силен огън със свинско месо и зеленчуци, подправена със сос чак накрая, за да не загори захарта в него, и довършена с аонори и мариновано розово джинджифилче - гарнитурите са това, което й придава вкуса на истинска якисоба, а не просто юфка в сос.",
      steps: [
        "Ако юфката е студена и слепена, разхлабете я под топла вода или в микровълнова за около 30 секунди, за да се раздели лесно.",
        "Загрейте олиото в уок на силен огън и изпечете свинското месо до запържване.",
        "Добавете зелето и моркова, задушавайки на силен огън 3-4 минути за леко овъгляне.",
        "Добавете разхлабената юфка и разбърквайте 1-2 минути, после добавете соса якисоба чак в самия край и разбъркайте бързо, за да покрие - добавен твърде рано, захарта в соса ще загори в горещия тиган.",
        "Сервирайте веднага и поръсете с аонори, мариновано розово джинджифилче и рибени люспи бонито, ако използвате.",
      ],
      ingredients: [
        "450 г юфка якисоба (прясна, предварително сготвена на пара)",
        "225 г свинско месо, нарязано на тънко",
        "2 чаши настъргано зеле",
        "1 морков, нарязан на тънки ивици",
        "1/4 чаша сос якисоба (на основата наустършърски сос)",
        "2 с.л. олио",
        "1 с.л. аонори (сушени зелени водораслови люспи), за поръсване",
        "2 с.л. мариновано розово джинджифилче (бени шога), за поръсване",
        "Рибени люспи бонито (кацуобуши), за поръсване (по желание)",
      ],
    },
  },
  {
    en: {
      slug: "okonomiyaki",
      title: "Okonomiyaki",
      description:
        "A savory Japanese cabbage pancake bound with grated mountain yam for a light, fluffy texture, rested before cooking, and topped with okonomiyaki sauce, mayonnaise, and aonori - bonito flakes are the traditional finish but easy to omit for a vegetarian version.",
      imageEmoji: "🥞",
      cookTimeMinutes: 45,
      servings: 2,
      ingredients: [
        { text: "2 cups shredded cabbage", ingredient: "cabbage", quantity: 2 },
        { text: "1 cup flour", ingredient: "flour", quantity: 1 },
        { text: "1/3 cup grated nagaimo (mountain yam)", ingredient: "nagaimo", quantity: 0.33 },
        { text: "2 eggs", ingredient: "eggs", quantity: 2 },
        { text: "1/2 cup dashi or water", ingredient: "dashi", quantity: 0.5 },
        { text: "1/4 cup tenkasu (tempura scraps, optional)", ingredient: "tenkasu", quantity: 0.25 },
        { text: "3 tbsp okonomiyaki sauce", ingredient: "okonomiyaki sauce", quantity: 3 },
        { text: "3 tbsp mayonnaise", ingredient: "mayonnaise", quantity: 3 },
        { text: "1 tbsp aonori (dried green seaweed flakes)", ingredient: "aonori", quantity: 1 },
        { text: "Bonito flakes (katsuobushi), for topping (optional, omit for vegetarian)", ingredient: "bonito flakes", quantity: null },
      ],
      steps: [
        "Whisk together the flour, grated nagaimo, eggs, and dashi until smooth, then fold in the cabbage and tenkasu if using; let the batter rest for 30 minutes - the grated yam is what gives real okonomiyaki its light, fluffy texture, not just flour and egg.",
        "Pour the batter onto a greased griddle in a thick round and cook for 5-6 minutes per side until golden and cooked through.",
        "Transfer to a plate.",
        "Brush with okonomiyaki sauce, drizzle with mayonnaise, and sprinkle with aonori and bonito flakes (if using) before serving.",
      ],
      tags: ["dinner", "asian", "vegetarian"],
    },
    bg: {
      title: "Окономияки",
      description:
        "Солена японска зелева палачинка, свързана с настърган планински грудков картоф (нагаймо) за лека, пухкава текстура, оставена да почине преди печене и покрита със сос окономияки, майонеза и аонори - рибените люспи бонито са традиционният финал, но лесно се пропускат за вегетарианска версия.",
      steps: [
        "Разбъркайте брашното, настъргания нагаймо, яйцата и дашито до гладкост, после прибавете зелето и тенкасу, ако използвате; оставете тестото да почине 30 минути - настърганият грудков картоф е това, което придава на истинската окономияки лекотата и пухкавостта, не само брашното и яйцата.",
        "Изсипете тестото върху намаслен тиган в дебел кръг и печете по 5-6 минути от всяка страна до златисто и готовност.",
        "Прехвърлете в чиния.",
        "Намажете със соса окономияки, полейте с майонеза и поръсете с аонори и рибени люспи бонито (ако използвате) преди сервиране.",
      ],
      ingredients: [
        "2 чаши настъргано зеле",
        "1 чаша брашно",
        "1/3 чаша настърган нагаймо (планински грудков картоф)",
        "2 яйца",
        "1/2 чаша даши или вода",
        "1/4 чаша тенкасу (трохи от темпура, по желание)",
        "3 с.л. сос окономияки",
        "3 с.л. майонеза",
        "1 с.л. аонори (сушени зелени водораслови люспи)",
        "Рибени люспи бонито (кацуобуши), за поръсване (по желание, пропуснете за вегетарианска версия)",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
