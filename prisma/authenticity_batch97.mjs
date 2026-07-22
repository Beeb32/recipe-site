import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "bacon-burger",
      title: "Bacon Burger",
      description:
        "A hearty beef burger seasoned right before cooking and topped with crispy bacon and melted cheddar - salting the patties just before they hit the pan, not while mixing, is what keeps ground beef tender instead of dense and springy.",
      imageEmoji: "🍔",
      cookTimeMinutes: 25,
      servings: 4,
      ingredients: [
        { text: "1 1/2 lb ground beef", ingredient: "ground beef", quantity: 1.5 },
        { text: "Salt and pepper to taste", ingredient: "salt and pepper", quantity: null },
        { text: "8 slices bacon, cooked", ingredient: "bacon", quantity: 8 },
        { text: "4 slices cheddar cheese", ingredient: "cheddar cheese", quantity: 4 },
        { text: "4 hamburger buns", ingredient: "hamburger buns", quantity: 4 },
      ],
      steps: [
        "Form the ground beef into four patties, season generously with salt and pepper just before cooking, and press a shallow dimple into the center of each - salting early toughens the meat, and the dimple keeps the patties from puffing into a dome.",
        "Cook for 4-5 minutes per side, topping with cheddar cheese near the end to melt.",
        "Top each patty with two slices of crispy bacon.",
        "Serve on buns.",
      ],
      tags: ["dinner", "quick"],
    },
    bg: {
      title: "Бургер с бекон",
      description:
        "Сит телешки бургер, подправен точно преди печене и с хрупкав бекон и разтопен чедър - осоляването на кюфтетата точно преди да влязат в тигана, а не при смесване, е това, което пази каймата крехка, вместо плътна и еластична.",
      steps: [
        "Оформете каймата на четири кюфтенца, подправете обилно със сол и черен пипер точно преди печене и направете плитка вдлъбнатина в средата на всяко - ранното осоляване втвърдява месото, а вдлъбнатината пречи на кюфтетата да се издуят като кубе.",
        "Изпечете по 4-5 минути от всяка страна, като добавите чедър сирене към края, за да се разтопи.",
        "Отгоре на всяко кюфте сложете по два резена хрупкав бекон.",
        "Сервирайте в хлебчета.",
      ],
      ingredients: [
        "700 г кайма от телешко месо",
        "Сол и черен пипер на вкус",
        "8 резена бекон, изпечен",
        "4 резена чедър сирене",
        "4 хлебчета за бургер",
      ],
    },
  },
  {
    en: {
      slug: "black-bean-burger",
      title: "Black Bean Burger",
      description:
        "A hearty, meatless burger patty made from black beans left partly chunky rather than fully mashed, chilled before cooking so the patties hold together on the stove instead of falling apart - a step most quick versions skip.",
      imageEmoji: "🍔",
      cookTimeMinutes: 30,
      servings: 4,
      ingredients: [
        { text: "2 cans black beans, drained and patted dry", ingredient: "black beans", quantity: 2 },
        { text: "1/2 cup breadcrumbs", ingredient: "breadcrumbs", quantity: 0.5 },
        { text: "1 egg", ingredient: "eggs", quantity: 1 },
        { text: "2 tbsp mayonnaise", ingredient: "mayonnaise", quantity: 2 },
        { text: "1 tsp cumin", ingredient: "cumin", quantity: 1 },
        { text: "1/2 tsp salt", ingredient: "salt", quantity: 0.5 },
        { text: "2 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 2 },
        { text: "4 hamburger buns", ingredient: "hamburger buns", quantity: 4 },
      ],
      steps: [
        "Pat the drained black beans dry with paper towels - excess moisture is what makes the patties fall apart.",
        "Mash about two-thirds of the beans, leaving the rest whole for texture, then mix in the breadcrumbs, egg, mayonnaise, cumin, and salt - the mayonnaise is what binds the patties without making them mushy.",
        "Form into four patties and refrigerate for at least 20 minutes - chilling firms them up so they hold together in the pan instead of crumbling.",
        "Cook in oil over medium heat for 4-5 minutes per side until firm and lightly crisp.",
        "Serve on buns with your favorite toppings.",
      ],
      tags: ["dinner", "vegetarian", "quick"],
    },
    bg: {
      title: "Бургер с черен боб",
      description:
        "Сито, безмесно бургерско кюфте от черен боб, оставен частично на парченца, вместо напълно намачкан, охладено преди печене, за да не се разпадат кюфтетата в тигана - стъпка, която повечето бързи версии пропускат.",
      steps: [
        "Подсушете отцедения черен боб с хартиени кърпи - излишната влага е това, което кара кюфтетата да се разпадат.",
        "Намачкайте около две трети от боба, оставяйки останалото цяло за текстура, после разбъркайте с галетата, яйцето, майонезата, кимиона и солта - майонезата е това, което свързва кюфтетата, без да ги прави кашести.",
        "Оформете на четири кюфтенца и приберете в хладилника за поне 20 минути - охлаждането ги стяга, за да се държат в тигана, вместо да се ронят.",
        "Изпечете в олио на среден огън по 4-5 минути от всяка страна до стягане и леко хрупкане.",
        "Сервирайте в хлебчета с любимите ви добавки.",
      ],
      ingredients: [
        "2 консерви черен боб, отцеден и подсушен",
        "1/2 чаша галета",
        "1 яйце",
        "2 с.л. майонеза",
        "1 ч.л. кимион",
        "1/2 ч.л. сол",
        "2 с.л. олио",
        "4 хлебчета за бургер",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
