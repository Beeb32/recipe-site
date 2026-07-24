import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "no-bake-energy-bites",
      title: "No-Bake Energy Bites",
      description:
        "Bite-sized balls of oats, peanut butter, and honey rounded out with vanilla and a pinch of salt, chilled briefly before rolling - rolling the mixture while it's still warm and sticky, which most quick versions do, makes a mess; a short chill first firms it up.",
      imageEmoji: "⚡",
      cookTimeMinutes: 15,
      servings: 12,
      ingredients: [
        { text: "1 cup rolled oats", ingredient: "oats", quantity: 1 },
        { text: "1/2 cup peanut butter", ingredient: "peanut butter", quantity: 0.5 },
        { text: "1/3 cup honey", ingredient: "honey", quantity: 0.33 },
        { text: "1 tsp vanilla extract", ingredient: "vanilla extract", quantity: 1 },
        { text: "1/4 tsp salt", ingredient: "salt", quantity: 0.25 },
        { text: "1/2 cup mini chocolate chips", ingredient: "chocolate chips", quantity: 0.5 },
      ],
      steps: [
        "Mix the oats, peanut butter, honey, vanilla, salt, and chocolate chips together in a bowl until well combined.",
        "Chill the mixture in the refrigerator for 15 minutes to firm up before rolling - rolling it while still soft and sticky is what makes a mess.",
        "Roll the mixture into small balls using your hands.",
        "Chill in the refrigerator for at least 30 minutes to firm up.",
      ],
      tags: ["snack", "vegetarian", "quick"],
    },
    bg: {
      title: "Енергийни топчета без печене",
      description:
        "Малки топчета от овесени ядки, фъстъчено масло и мед, допълнени с ванилия и щипка сол, охладени за кратко преди оформяне - оформянето на сместа, докато е още топла и лепкава, което правят повечето бързи версии, прави бъркотия; кратко охлаждане първо я стяга.",
      steps: [
        "Смесете овесените ядки, фъстъченото масло, меда, ванилията, солта и шоколадовите парченца в купа до добро съединяване.",
        "Оставете сместа в хладилника за 15 минути да се стегне преди оформяне - оформянето, докато е още мека и лепкава, е това, което прави бъркотия.",
        "Оформете сместа на малки топчета с ръце.",
        "Оставете в хладилника поне 30 минути за стягане.",
      ],
      ingredients: [
        "1 чаша овесени ядки",
        "1/2 чаша фъстъчено масло",
        "1/3 чаша мед",
        "1 ч.л. ванилова есенция",
        "1/4 ч.л. сол",
        "1/2 чаша мини шоколадови парченца",
      ],
    },
  },
  {
    en: {
      slug: "no-bake-peanut-butter-bars",
      title: "No-Bake Peanut Butter Bars",
      description:
        "Rich, chewy peanut butter bars rounded out with vanilla and a pinch of salt, topped with a chocolate layer - peanut butter and powdered sugar alone without salt or vanilla is why these can taste flatly sweet instead of rounded.",
      imageEmoji: "🍫",
      cookTimeMinutes: 20,
      servings: 12,
      ingredients: [
        { text: "1 cup peanut butter", ingredient: "peanut butter", quantity: 1 },
        { text: "1/2 cup melted butter", ingredient: "butter", quantity: 0.5 },
        { text: "2 cups powdered sugar", ingredient: "powdered sugar", quantity: 2 },
        { text: "2 cups graham cracker crumbs", ingredient: "graham crackers", quantity: 2 },
        { text: "1 tsp vanilla extract", ingredient: "vanilla extract", quantity: 1 },
        { text: "1/4 tsp salt", ingredient: "salt", quantity: 0.25 },
        { text: "1 cup chocolate chips", ingredient: "chocolate chips", quantity: 1 },
      ],
      steps: [
        "Mix the peanut butter, melted butter, powdered sugar, graham cracker crumbs, vanilla, and salt until well combined.",
        "Press the mixture firmly into a lined baking dish.",
        "Melt the chocolate chips and spread evenly over the top.",
        "Chill for at least 1 hour before slicing into bars.",
      ],
      tags: ["dessert", "vegetarian", "quick"],
    },
    bg: {
      title: "Блокчета с фъстъчено масло без печене",
      description:
        "Наситени, дъвчащи блокчета с фъстъчено масло, допълнени с ванилия и щипка сол, покрити с шоколадов слой - фъстъчено масло и пудра захар сами по себе си, без сол или ванилия, е причината тези да имат плосък сладък вкус, вместо закръглен.",
      steps: [
        "Смесете фъстъченото масло, разтопеното масло, пудрата захар, натрошените бисквити грахам, ванилията и солта до добро съединяване.",
        "Наблъскайте стегнато сместа в облицована тава.",
        "Разтопете шоколадовите парченца и разпределете равномерно отгоре.",
        "Охладете поне 1 час преди нарязване на блокчета.",
      ],
      ingredients: [
        "1 чаша фъстъчено масло",
        "1/2 чаша разтопено масло",
        "2 чаши пудра захар",
        "2 чаши натрошени бисквити грахам",
        "1 ч.л. ванилова есенция",
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
