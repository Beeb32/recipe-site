import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "magic-cookie-bars",
      title: "Magic Cookie Bars",
      description:
        "Layered bars of graham crust, chocolate chips, coconut, chopped pecans, and condensed milk - classic magic (or '7-layer') bars include a nut layer that this simplified version leaves out, along with a good part of the crunch and flavor contrast.",
      imageEmoji: "🍫",
      cookTimeMinutes: 40,
      servings: 16,
      ingredients: [
        { text: "1 1/2 cups graham cracker crumbs", ingredient: "graham crackers", quantity: 1.5 },
        { text: "1/2 cup melted butter", ingredient: "butter", quantity: 0.5 },
        { text: "1 can sweetened condensed milk", ingredient: "condensed milk", quantity: 1 },
        { text: "1 1/2 cups chocolate chips", ingredient: "chocolate chips", quantity: 1.5 },
        { text: "1 cup shredded coconut", ingredient: "coconut", quantity: 1 },
        { text: "1 cup chopped pecans", ingredient: "pecans", quantity: 1 },
      ],
      steps: [
        "Preheat oven to 350°F.",
        "Mix the graham cracker crumbs with melted butter and press into a baking dish.",
        "Pour the condensed milk evenly over the crust, then sprinkle with chocolate chips, coconut, and pecans.",
        "Bake for 25 minutes until golden, then cool completely before slicing.",
      ],
      tags: ["dessert", "vegetarian", "baking"],
    },
    bg: {
      title: "Магически бисквитени блокчета",
      description:
        "Многослойни блокчета от грахам коричка, шоколадови парченца, кокос, нарязани орехи пекан и кондензирано мляко - класическите магически (или '7-слойни') блокчета включват слой ядки, който тази опростена версия пропуска, заедно с добра част от хрупкавостта и контраста във вкуса.",
      steps: [
        "Загрейте фурната на 180°C.",
        "Смесете трохите от бисквити грахам с разтопено масло и притиснете в тава за печене.",
        "Изсипете равномерно кондензираното мляко върху коричката, после поръсете с шоколадови парченца, кокос и орехи пекан.",
        "Печете 25 минути до златисто, после охладете напълно преди нарязване.",
      ],
      ingredients: [
        "1 1/2 чаши трохи от бисквити грахам",
        "1/2 чаша разтопено масло",
        "1 консерва подсладено кондензирано мляко",
        "1 1/2 чаши шоколадови парченца",
        "1 чаша настърган кокос",
        "1 чаша нарязани орехи пекан",
      ],
    },
  },
  {
    en: {
      slug: "one-bowl-brownies",
      title: "One-Bowl Brownies",
      description:
        "Rich, fudgy brownies made in a single bowl with no mixer required, rounded out with vanilla and a pinch of salt - butter, sugar, and cocoa alone without either is why one-bowl brownies can taste flatly sweet instead of rich.",
      imageEmoji: "🍫",
      cookTimeMinutes: 40,
      servings: 12,
      ingredients: [
        { text: "1/2 cup melted butter", ingredient: "butter", quantity: 0.5 },
        { text: "1 cup sugar", ingredient: "sugar", quantity: 1 },
        { text: "2 eggs", ingredient: "eggs", quantity: 2 },
        { text: "1 tsp vanilla extract", ingredient: "vanilla extract", quantity: 1 },
        { text: "1/3 cup cocoa powder", ingredient: "cocoa powder", quantity: 0.33 },
        { text: "1/2 cup flour", ingredient: "flour", quantity: 0.5 },
        { text: "1/4 tsp salt", ingredient: "salt", quantity: 0.25 },
      ],
      steps: [
        "Preheat oven to 350°F and line a baking pan.",
        "Whisk the melted butter and sugar together in a large bowl.",
        "Whisk in the eggs and vanilla, then stir in the cocoa powder, flour, and salt until just combined.",
        "Pour into the pan and bake for 25-28 minutes until a toothpick comes out mostly clean.",
      ],
      tags: ["dessert", "vegetarian", "baking"],
    },
    bg: {
      title: "Брауни в една купа",
      description:
        "Наситени, влажни брауни, приготвени в една купа без нужда от миксер, допълнени с ванилия и щипка сол - масло, захар и какао сами по себе си, без нито едно от двете, е причината брауни от една купа да имат плосък сладък вкус, вместо наситен.",
      steps: [
        "Загрейте фурната на 180°C и застелете тава.",
        "Разбъркайте разтопеното масло и захарта заедно в голяма купа.",
        "Добавете яйцата и ванилията, разбърквайки, после добавете какаото, брашното и солта до съединяване.",
        "Изсипете в тавата и печете 25-28 минути, докато клечка за зъби излезе почти чиста.",
      ],
      ingredients: [
        "1/2 чаша разтопено масло",
        "1 чаша захар",
        "2 яйца",
        "1 ч.л. ванилова есенция",
        "1/3 чаша какао на прах",
        "1/2 чаша брашно",
        "1/4 ч.л. сол",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
