import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "classic-cheeseburger",
      title: "Classic Cheeseburger",
      description:
        "Beef smashed thin on a screaming-hot skillet for a deeply browned, crispy-edged crust, then topped with melted cheese on a soft bun - smashing thin against high heat is what builds the caramelized crust real diner-style cheeseburgers are known for, instead of a thick, gently-browned patty.",
      imageEmoji: "🍔",
      cookTimeMinutes: 20,
      servings: 4,
      ingredients: [
        { text: "1 1/2 lb ground beef", ingredient: "ground beef", quantity: 1.5 },
        { text: "4 slices cheddar cheese", ingredient: "cheddar cheese", quantity: 4 },
        { text: "4 hamburger buns", ingredient: "hamburger buns", quantity: 4 },
        { text: "Salt and pepper to taste", ingredient: "salt and pepper", quantity: null },
      ],
      steps: [
        "Divide the ground beef into 4 loosely formed balls, being careful not to overwork the meat.",
        "Heat a skillet or griddle until very hot, place the balls on it, and immediately smash each flat with a sturdy spatula - smashing thin against high heat is what builds the deeply caramelized crust real diner-style burgers are known for.",
        "Season with salt and pepper and cook undisturbed for 2-3 minutes until a deep brown crust forms, then flip.",
        "Top with cheddar cheese and cook for 1-2 more minutes until melted.",
        "Serve on buns with your favorite toppings.",
      ],
      tags: ["dinner", "quick"],
    },
    bg: {
      title: "Класически чийзбургер",
      description:
        "Кайма, разплескана тънко върху нажежен тиган за дълбоко запечена, хрупкава по краищата коричка, после покрита с разтопено сирене в меко хлебче - разплескването тънко върху силен огън е това, което изгражда карамелизираната коричка, с която истинските бургери в стил дайнер са известни, вместо дебело, леко запечено кюфте.",
      steps: [
        "Разделете каймата на 4 хлабаво оформени топки, внимавайки да не преработите месото.",
        "Загрейте тиган или скара до много високо, сложете топките и веднага разплескайте всяка плоско с здрава шпатула - разплескването тънко върху силен огън е това, което изгражда дълбоко карамелизираната коричка, с която истинските бургери в стил дайнер са известни.",
        "Подправете със сол и черен пипер и гответе неподвижно 2-3 минути, докато се образува дълбока кафява коричка, после обърнете.",
        "Отгоре сложете чедър сирене и гответе още 1-2 минути, докато се разтопи.",
        "Сервирайте в хлебчета с любимите ви добавки.",
      ],
      ingredients: [
        "700 г кайма от телешко месо",
        "4 резена чедър сирене",
        "4 хлебчета за бургер",
        "Сол и черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "soft-pretzels",
      title: "Soft Pretzels",
      description:
        "Chewy pretzels boiled in a bath of baked baking soda rather than plain baking soda - baking the soda first converts it into a stronger alkaline that gets you much closer to the deep mahogany color and flavor of a traditional lye-dipped German pretzel.",
      imageEmoji: "🥨",
      cookTimeMinutes: 135,
      servings: 8,
      ingredients: [
        { text: "4 cups flour", ingredient: "flour", quantity: 4 },
        { text: "2 1/4 tsp active dry yeast", ingredient: "yeast", quantity: 2.25 },
        { text: "1 1/2 cups warm water", ingredient: "water", quantity: 1.5 },
        { text: "1/2 cup baking soda, baked (see step 1)", ingredient: "baking soda", quantity: 0.5 },
        { text: "3 tbsp melted butter", ingredient: "butter", quantity: 3 },
        { text: "Coarse salt for topping", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Spread the baking soda in a thin layer on a foil-lined baking sheet and bake at 250°F for 1 hour, stirring once - this converts it into a stronger alkaline that gets much closer to a traditional lye bath.",
        "Mix the flour, yeast, and warm water into a dough; knead for 5 minutes and let rise for 30 minutes.",
        "Divide into ropes and shape into pretzels.",
        "Dissolve the baked baking soda in a pot of simmering water, then boil each pretzel briefly, about 20-30 seconds per side, and place on a baking sheet.",
        "Brush with melted butter, sprinkle with coarse salt, and bake at 425°F for 12-15 minutes until deep golden-brown.",
      ],
      tags: ["snack", "vegetarian", "baking"],
    },
    bg: {
      title: "Меки геврекчета",
      description:
        "Дъвчащи геврекчета, варени в баня от изпечена сода бикарбонат, вместо обикновена сода бикарбонат - изпичането на содата първо я превръща в по-силна алкална основа, която доближава много повече до дълбокия кафяво-червен цвят и вкус на традиционните геврекчета, потапяни в луга.",
      steps: [
        "Разстелете содата бикарбонат на тънък слой върху тава, застлана с фолио, и печете на 120°C 1 час, разбърквайки веднъж - това я превръща в по-силна алкална основа, доближаваща много повече до традиционна луга.",
        "Смесете брашното, маята и топлата вода в тесто; месете 5 минути и оставете да втаса 30 минути.",
        "Разделете на въженца и оформете геврекчета.",
        "Разтворете изпечената сода бикарбонат в тенджера с леко къкреща вода, после варете всяко геврекче за кратко, около 20-30 секунди от всяка страна, и поставете върху тава за печене.",
        "Намажете с разтопено масло, поръсете с едра сол и печете на 220°C 12-15 минути до дълбоко златисто.",
      ],
      ingredients: [
        "4 чаши брашно",
        "2 1/4 ч.л. суха мая",
        "1 1/2 чаши топла вода",
        "1/2 чаша сода бикарбонат, изпечена (вижте стъпка 1)",
        "3 с.л. разтопено масло",
        "Едра сол за поръсване",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
