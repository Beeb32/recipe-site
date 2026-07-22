import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "cherry-pie",
      title: "Cherry Pie",
      description:
        "A classic double-crust pie filled with sweet-tart cherry filling, egg-washed for a golden crust and cooled completely before slicing - cutting into a hot cherry pie is why the filling runs everywhere instead of holding its shape.",
      imageEmoji: "🥧",
      cookTimeMinutes: 70,
      servings: 8,
      ingredients: [
        { text: "2 pie crusts", ingredient: "pie crust", quantity: 2 },
        { text: "4 cups pitted cherries", ingredient: "cherries", quantity: 4 },
        { text: "3/4 cup sugar", ingredient: "sugar", quantity: 0.75 },
        { text: "3 tbsp cornstarch", ingredient: "cornstarch", quantity: 3 },
        { text: "1 tbsp lemon juice", ingredient: "lemon juice", quantity: 1 },
        { text: "1 egg, beaten, for egg wash", ingredient: "eggs", quantity: 1 },
      ],
      steps: [
        "Preheat oven to 375°F and fit one chilled pie crust into a pie dish.",
        "Toss the cherries with sugar, cornstarch, and lemon juice, then pour into the crust.",
        "Top with the second crust, sealing and venting the top, then brush with the beaten egg for a golden finish.",
        "Bake for 45-50 minutes until the filling bubbles and the crust is golden.",
        "Let cool completely, at least 3-4 hours, before slicing - the filling needs that time to set, or it will run out the moment you cut into it.",
      ],
      tags: ["dessert", "vegetarian", "baking"],
    },
    bg: {
      title: "Пай с череши",
      description:
        "Класически пай с двоен пласт тесто, пълен със сладко-кисела плънка от череши, намазан с яйце за златиста коричка и напълно изстинал преди рязане - рязането на топъл пай с череши е причината плънката да изтече навсякъде, вместо да запази формата си.",
      steps: [
        "Загрейте фурната на 190°C и наредете едно охладено тесто в тава за пай.",
        "Разбъркайте черешите със захар, царевично нишесте и лимонов сок, после изсипете в тестото.",
        "Покрийте с второто тесто, запечатвайки и правейки отвори отгоре, после намажете с разбитото яйце за златист финал.",
        "Печете 45-50 минути, докато плънката закъкри и тестото стане златисто.",
        "Оставете да изстине напълно, поне 3-4 часа, преди да режете - плънката се нуждае от това време, за да се стегне, иначе ще изтече още при първото рязане.",
      ],
      ingredients: [
        "2 теста за пай",
        "4 чаши обезкостени череши",
        "3/4 чаша захар",
        "3 с.л. царевично нишесте",
        "1 с.л. лимонов сок",
        "1 яйце, разбито, за намазване",
      ],
    },
  },
  {
    en: {
      slug: "blondies",
      title: "Blondies",
      description:
        "Chewy, buttery brown-sugar bars studded with chocolate chips, rounded out with vanilla and salt and lifted with a touch of baking powder - brown sugar and butter alone taste flat and bake dense without them, a gap most quick versions skip.",
      imageEmoji: "🍪",
      cookTimeMinutes: 40,
      servings: 16,
      ingredients: [
        { text: "1/2 cup melted butter", ingredient: "butter", quantity: 0.5 },
        { text: "1 cup brown sugar", ingredient: "brown sugar", quantity: 1 },
        { text: "1 egg", ingredient: "eggs", quantity: 1 },
        { text: "1 tsp vanilla extract", ingredient: "vanilla extract", quantity: 1 },
        { text: "1 cup flour", ingredient: "flour", quantity: 1 },
        { text: "1/2 tsp baking powder", ingredient: "baking powder", quantity: 0.5 },
        { text: "1/4 tsp salt", ingredient: "salt", quantity: 0.25 },
        { text: "1 cup chocolate chips", ingredient: "chocolate chips", quantity: 1 },
      ],
      steps: [
        "Preheat oven to 350°F and line a baking pan.",
        "Whisk the melted butter and brown sugar together, then beat in the egg and vanilla.",
        "Stir in the flour, baking powder, and salt, then fold in the chocolate chips - the baking powder and salt are what keep these from baking flat and one-note sweet.",
        "Spread into the pan and bake for 22-25 minutes until set.",
      ],
      tags: ["dessert", "vegetarian", "baking"],
    },
    bg: {
      title: "Блондита",
      description:
        "Дъвчащи, маслени блокчета с кафява захар, богати на шоколадови парченца, допълнени с ванилия и сол и повдигнати с малко бакпулвер - кафявата захар и маслото сами по себе си имат плосък вкус и пекат плътно без тях, пропуск, който повечето бързи версии допускат.",
      steps: [
        "Загрейте фурната на 180°C и застелете тава за печене.",
        "Разбийте разтопеното масло и кафявата захар заедно, после добавете яйцето и ванилията.",
        "Разбъркайте брашното, бакпулвера и солта, после добавете шоколадовите парченца - бакпулверът и солта са това, което ги пази да не излязат плоски и еднообразно сладки.",
        "Разпределете в тавата и печете 22-25 минути до стягане.",
      ],
      ingredients: [
        "1/2 чаша разтопено масло",
        "1 чаша кафява захар",
        "1 яйце",
        "1 ч.л. ванилова есенция",
        "1 чаша брашно",
        "1/2 ч.л. бакпулвер",
        "1/4 ч.л. сол",
        "1 чаша шоколадови парченца",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
