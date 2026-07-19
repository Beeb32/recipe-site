import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "fudgy-brownies",
      title: "Fudgy Brownies",
      description:
        "Rich, dense chocolate brownies with a shiny, crackled top - whisking the sugar into the hot melted butter, then beating in the eggs vigorously, is what dissolves the sugar enough to rise to the surface and form that signature crackly crust, and pulling them while the center still looks slightly underbaked is what keeps them fudgy instead of dry.",
      imageEmoji: "🍫",
      cookTimeMinutes: 40,
      servings: 9,
      ingredients: [
        { text: "1/2 cup butter", ingredient: "butter", quantity: 0.5 },
        { text: "1 cup sugar", ingredient: "sugar", quantity: 1 },
        { text: "2 eggs", ingredient: "eggs", quantity: 2 },
        { text: "1/3 cup cocoa powder", ingredient: "cocoa powder", quantity: 0.33 },
        { text: "1/2 cup flour", ingredient: "flour", quantity: 0.5 },
        { text: "1 tsp vanilla extract", ingredient: "vanilla extract", quantity: 1 },
      ],
      steps: [
        "Preheat oven to 350°F and grease a baking pan.",
        "Melt the butter, then whisk in the sugar while it's still hot until mostly dissolved - this is what helps the sugar rise to the surface for a shiny, crackly top.",
        "Whisk in the eggs and vanilla vigorously until well combined.",
        "Stir in the cocoa powder and flour until just combined.",
        "Pour into the pan and bake for 25-30 minutes until the edges are set but the center still looks slightly underbaked - brownies firm up as they cool, so overbaking here is what dries them out.",
        "Cool completely before cutting into squares.",
      ],
      tags: ["dessert", "baking", "vegetarian"],
    },
    bg: {
      title: "Влажни брауни",
      description:
        "Наситени, плътни шоколадови брауни с блестяща напукана коричка - разбъркването на захарта в горещото разтопено масло, после енергичното разбиване на яйцата, е това, което разтваря захарта достатъчно, за да излезе на повърхността и да образува характерната напукана коричка, а изваждането им, докато центърът все още изглежда леко недопечен, е това, което ги пази влажни, вместо сухи.",
      steps: [
        "Загрейте фурната на 180°C и намажете тава с мазнина.",
        "Разтопете маслото, после разбъркайте захарта в него, докато е още горещо, до почти пълно разтваряне - това помага на захарта да излезе на повърхността за блестяща, напукана коричка.",
        "Разбийте яйцата и ванилията енергично, докато се съединят добре.",
        "Добавете какаото и брашното, разбърквайки до съединяване.",
        "Изсипете в тавата и печете 25-30 минути, докато краищата се стегнат, но центърът все още изглежда леко недопечен - браунитата се стягат, докато изстиват, така че препичането тук ги изсушава.",
        "Оставете да изстине напълно преди да нарежете на квадратчета.",
      ],
      ingredients: [
        "1/2 чаша масло",
        "1 чаша захар",
        "2 яйца",
        "1/3 чаша какао на прах",
        "1/2 чаша брашно",
        "1 ч.л. ванилова есенция",
      ],
    },
  },
  {
    en: {
      slug: "egg-salad-sandwich",
      title: "Egg Salad Sandwich",
      description:
        "Chopped hard-boiled eggs, cooked gently and shocked in ice water to keep the yolks bright yellow, mixed with mayonnaise, mustard, and crunchy diced celery, piled on bread - the ice bath is what keeps the yolks from developing a grey-green ring, and the celery is the crunch most bare-bones versions skip.",
      imageEmoji: "🥪",
      cookTimeMinutes: 15,
      servings: 2,
      ingredients: [
        { text: "6 eggs", ingredient: "eggs", quantity: 6 },
        { text: "1/3 cup mayonnaise", ingredient: "mayonnaise", quantity: 0.33 },
        { text: "1 tsp mustard", ingredient: "mustard", quantity: 1 },
        { text: "1 celery stalk, finely diced", ingredient: "celery", quantity: 1 },
        { text: "1 tbsp chopped fresh chives", ingredient: "chives", quantity: 1 },
        { text: "4 slices bread", ingredient: "bread", quantity: 4 },
        { text: "Salt and pepper to taste", ingredient: "salt and pepper", quantity: null },
      ],
      steps: [
        "Place the eggs in a saucepan, cover with water, and bring to a boil, then remove from heat, cover, and let sit for 10-12 minutes.",
        "Transfer the eggs immediately to an ice bath for at least 5 minutes - shocking them in ice water is what keeps the yolks bright yellow instead of developing a grey-green ring.",
        "Peel and chop the cooled eggs, then mix with mayonnaise, mustard, celery, and chives.",
        "Season with salt and pepper to taste.",
        "Spread onto bread slices and top with the remaining bread.",
      ],
      tags: ["lunch", "quick", "vegetarian"],
    },
    bg: {
      title: "Сандвич със салата от яйца",
      description:
        "Нарязани твърдо сварени яйца, сготвени внимателно и шокирани в ледена вода, за да останат жълтъците ярко жълти, смесени с майонеза, горчица и хрупкав нарязан целина, натрупани върху хляб - ледената баня е това, което пази жълтъците от сиво-зеленикав пръстен, а целината е хрупкавостта, която повечето прости версии пропускат.",
      steps: [
        "Сложете яйцата в тенджера, залейте с вода и доведете до кипене, после свалете от котлона, покрийте и оставете за 10-12 минути.",
        "Прехвърлете яйцата веднага в ледена баня за поне 5 минути - шокирането им в ледена вода е това, което пази жълтъците ярко жълти, вместо да развият сиво-зеленикав пръстен.",
        "Обелете и нарежете изстиналите яйца, после смесете с майонезата, горчицата, целината и чесновия лук.",
        "Подправете със сол и черен пипер на вкус.",
        "Намажете върху филии хляб и покрийте с останалия хляб.",
      ],
      ingredients: [
        "6 яйца",
        "1/3 чаша майонеза",
        "1 ч.л. горчица",
        "1 стрък целина, ситно нарязан",
        "1 с.л. нарязан пресен чеснов лук",
        "4 филии хляб",
        "Сол и черен пипер на вкус",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
