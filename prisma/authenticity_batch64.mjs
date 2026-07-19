import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "cinnamon-rolls",
      title: "Cinnamon Rolls",
      description:
        "Soft, pillowy rolls made from an egg-enriched dough, swirled with cinnamon sugar and topped with cream cheese icing spread on while warm - the egg in the dough is what gives real cinnamon rolls their tender, soft crumb instead of a bready one.",
      imageEmoji: "🍥",
      cookTimeMinutes: 120,
      servings: 12,
      ingredients: [
        { text: "3 1/2 cups flour", ingredient: "flour", quantity: 3.5 },
        { text: "1/4 cup sugar", ingredient: "sugar", quantity: 0.25 },
        { text: "2 1/4 tsp active dry yeast", ingredient: "yeast", quantity: 2.25 },
        { text: "1 cup warm milk", ingredient: "milk", quantity: 1 },
        { text: "1 egg", ingredient: "eggs", quantity: 1 },
        { text: "1/3 cup melted butter, plus more for spreading", ingredient: "butter", quantity: 0.33 },
        { text: "1/2 cup brown sugar", ingredient: "brown sugar", quantity: 0.5 },
        { text: "2 tbsp cinnamon", ingredient: "cinnamon", quantity: 2 },
        { text: "4 oz cream cheese, softened", ingredient: "cream cheese", quantity: 4 },
        { text: "1/4 cup butter, softened", ingredient: "butter", quantity: 0.25 },
        { text: "1 1/2 cups powdered sugar", ingredient: "powdered sugar", quantity: 1.5 },
        { text: "1/2 tsp vanilla extract", ingredient: "vanilla extract", quantity: 0.5 },
      ],
      steps: [
        "Combine the flour, sugar, yeast, warm milk, egg, and melted butter into a soft dough; knead until smooth - the egg is what makes the dough tender instead of bready.",
        "Let the dough rise in a warm place for about 1 hour until doubled.",
        "Roll the dough into a rectangle, spread with butter, and sprinkle with brown sugar and cinnamon.",
        "Roll up tightly, slice into rolls, and place in a baking dish to rise for another 30 minutes.",
        "Bake at 350°F for 25 minutes.",
        "Beat the cream cheese, softened butter, and vanilla together until smooth, then beat in the powdered sugar, and spread over the rolls while they're still warm so the icing melts slightly into them.",
      ],
      tags: ["dessert", "baking", "breakfast", "vegetarian"],
    },
    bg: {
      title: "Кифлички с канела",
      description:
        "Меки, пухкави кифлички от тесто, обогатено с яйце, завихрени с канела и захар, покрити с глазура от крема сирене, намазана докато са топли - яйцето в тестото е това, което придава на истинските кифлички с канела нежната им мека структура, вместо да са хлебести.",
      steps: [
        "Смесете брашното, захарта, маята, топлото мляко, яйцето и разтопеното масло в меко тесто; месете до гладкост - яйцето е това, което прави тестото нежно, вместо хлебесто.",
        "Оставете тестото да втаса на топло място около 1 час, докато удвои обема си.",
        "Разточете тестото на правоъгълник, намажете с масло и поръсете с кафява захар и канела.",
        "Навийте стегнато, нарежете на кифлички и поставете в тава за печене, за да втасат още 30 минути.",
        "Печете на 180°C 25 минути.",
        "Разбийте крема сирене, омекотеното масло и ванилията заедно до гладкост, после разбийте пудрата захар, и намажете върху кифличките, докато са още топли, за да се разтопи глазурата леко в тях.",
      ],
      ingredients: [
        "3 1/2 чаши брашно",
        "1/4 чаша захар",
        "2 1/4 ч.л. суха мая",
        "1 чаша топло мляко",
        "1 яйце",
        "1/3 чаша разтопено масло, плюс още за намазване",
        "1/2 чаша кафява захар",
        "2 с.л. канела",
        "115 г крема сирене, омекотено",
        "1/4 чаша масло, омекотено",
        "1 1/2 чаши пудра захар",
        "1/2 ч.л. ванилова есенция",
      ],
    },
  },
  {
    en: {
      slug: "deviled-eggs",
      title: "Deviled Eggs",
      description:
        "Hard-boiled eggs cooked gently and shocked in ice water to keep the yolks bright yellow, filled with a creamy, tangy mustard-and-vinegar yolk mixture - the ice bath is the step most rushed versions skip, and it's what keeps the yolks from developing a grey-green ring.",
      imageEmoji: "🥚",
      cookTimeMinutes: 25,
      servings: 6,
      ingredients: [
        { text: "6 eggs", ingredient: "eggs", quantity: 6 },
        { text: "3 tbsp mayonnaise", ingredient: "mayonnaise", quantity: 3 },
        { text: "1 tsp mustard", ingredient: "mustard", quantity: 1 },
        { text: "1 tsp vinegar", ingredient: "vinegar", quantity: 1 },
        { text: "Salt and pepper to taste", ingredient: "salt and pepper", quantity: null },
        { text: "Paprika for garnish", ingredient: "paprika", quantity: null },
      ],
      steps: [
        "Place the eggs in a saucepan, cover with water, and bring to a boil, then remove from heat, cover, and let sit for 10-12 minutes.",
        "Transfer the eggs immediately to an ice bath for at least 5 minutes - shocking them in ice water is what keeps the yolks bright yellow instead of developing a grey-green ring.",
        "Peel the cooled eggs, slice in half, and scoop the yolks into a bowl.",
        "Mash the yolks with mayonnaise, mustard, and vinegar until smooth, then season with salt and pepper.",
        "Spoon the mixture back into the egg whites and sprinkle with paprika.",
      ],
      tags: ["snack", "vegetarian"],
    },
    bg: {
      title: "Пълнени яйца",
      description:
        "Твърдо сварени яйца, сготвени внимателно и шокирани в ледена вода, за да останат жълтъците ярко жълти, пълнени с кремообразна, пикантна смес от жълтък с горчица и оцет - ледената баня е стъпката, която повечето набързо приготвени версии пропускат, и е това, което пази жълтъците от сиво-зеленикав пръстен.",
      steps: [
        "Сложете яйцата в тенджера, залейте с вода и доведете до кипене, после свалете от котлона, покрийте и оставете за 10-12 минути.",
        "Прехвърлете яйцата веднага в ледена баня за поне 5 минути - шокирането им в ледена вода е това, което пази жълтъците ярко жълти, вместо да развият сиво-зеленикав пръстен.",
        "Обелете изстиналите яйца, разрежете наполовина и извадете жълтъците в купа.",
        "Намачкайте жълтъците с майонезата, горчицата и оцета до гладкост, после подправете със сол и черен пипер.",
        "Сложете сместа обратно в белтъците и поръсете с червен пипер.",
      ],
      ingredients: [
        "6 яйца",
        "3 с.л. майонеза",
        "1 ч.л. горчица",
        "1 ч.л. оцет",
        "Сол и черен пипер на вкус",
        "Червен пипер за гарниране",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
