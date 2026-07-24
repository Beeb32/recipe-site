import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "chickpea-salad",
      title: "Chickpea Salad",
      description:
        "A protein-packed no-cook salad of chickpeas, cucumber, feta, red onion, and parsley in a lemony dressing - most quick versions leave out the onion and herbs that give real Mediterranean chickpea salad its brightness, dressing plain chickpeas and cucumber alone.",
      imageEmoji: "🥗",
      cookTimeMinutes: 15,
      servings: 4,
      ingredients: [
        { text: "2 cans chickpeas, drained", ingredient: "chickpeas", quantity: 2 },
        { text: "1 cucumber, diced", ingredient: "cucumber", quantity: 1 },
        { text: "1/4 red onion, finely diced", ingredient: "red onion", quantity: 0.25 },
        { text: "1/4 cup chopped fresh parsley", ingredient: "parsley", quantity: 0.25 },
        { text: "1/2 cup crumbled feta cheese", ingredient: "feta cheese", quantity: 0.5 },
        { text: "3 tbsp olive oil", ingredient: "olive oil", quantity: 3 },
        { text: "2 tbsp lemon juice", ingredient: "lemon juice", quantity: 2 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Combine the chickpeas, cucumber, red onion, parsley, and feta in a bowl.",
        "Whisk together the olive oil, lemon juice, salt, and pepper.",
        "Toss the salad with the dressing.",
        "Chill before serving.",
      ],
      tags: ["lunch", "vegetarian", "quick", "salad", "mediterranean"],
    },
    bg: {
      title: "Салата с нахут",
      description:
        "Богата на протеин салата без готвене от нахут, краставица, фета, червен лук и магданоз в лимонов дресинг - повечето бързи версии пропускат лука и билките, които придават на истинската средиземноморска салата с нахут нейната свежест, подправяйки само обикновен нахут и краставица.",
      steps: [
        "Смесете нахута, краставицата, червения лук, магданоза и фетата в купа.",
        "Разбийте зехтина, лимоновия сок, солта и черния пипер заедно.",
        "Разбъркайте салатата с дресинга.",
        "Охладете преди сервиране.",
      ],
      ingredients: [
        "2 консерви нахут, отцеден",
        "1 краставица, нарязана на кубчета",
        "1/4 червен лук, ситно нарязан",
        "1/4 чаша нарязан пресен магданоз",
        "1/2 чаша натрошено сирене фета",
        "3 с.л. зехтин",
        "2 с.л. лимонов сок",
        "Сол на вкус",
        "Черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "asian-sesame-salad",
      title: "Asian Sesame Salad",
      description:
        "Crunchy cabbage and carrot tossed in a savory sesame-ginger dressing built with real fresh ginger and a touch of honey to balance the soy and vinegar - a dressing calling itself 'ginger' with no ginger in it is why most quick versions taste flat and one-note.",
      imageEmoji: "🥗",
      cookTimeMinutes: 15,
      servings: 4,
      ingredients: [
        { text: "4 cups shredded cabbage", ingredient: "cabbage", quantity: 4 },
        { text: "1 carrot, shredded", ingredient: "carrot", quantity: 1 },
        { text: "3 tbsp soy sauce", ingredient: "soy sauce", quantity: 3 },
        { text: "2 tbsp sesame oil", ingredient: "sesame oil", quantity: 2 },
        { text: "1 tbsp rice vinegar", ingredient: "rice vinegar", quantity: 1 },
        { text: "1 tsp fresh ginger, grated", ingredient: "ginger", quantity: 1 },
        { text: "1 tsp honey", ingredient: "honey", quantity: 1 },
        { text: "1 tbsp sesame seeds", ingredient: "sesame seeds", quantity: 1 },
      ],
      steps: [
        "Combine the cabbage and carrot in a large bowl.",
        "Whisk together the soy sauce, sesame oil, rice vinegar, ginger, and honey - the fresh ginger is what actually makes this a ginger dressing instead of just calling itself one.",
        "Toss the salad with the dressing.",
        "Sprinkle with sesame seeds before serving.",
      ],
      tags: ["lunch", "asian", "vegan", "vegetarian", "quick", "salad"],
    },
    bg: {
      title: "Азиатска салата със сусам",
      description:
        "Хрупкаво зеле и моркови, разбъркани в ароматен дресинг от сусам и джинджифил, направен с истински пресен джинджифил и малко мед за баланс на соевия сос и оцета - дресинг, наречен 'джинджифилов' без никакъв джинджифил в него, е причината повечето бързи версии да имат плосък, еднообразен вкус.",
      steps: [
        "Смесете зелето и морковите в голяма купа.",
        "Разбийте соевия сос, сусамовото масло, оризовия оцет, джинджифила и меда заедно - пресният джинджифил е това, което наистина прави този дресинг джинджифилов, вместо просто да се нарича така.",
        "Разбъркайте салатата с дресинга.",
        "Поръсете със сусамови семена преди сервиране.",
      ],
      ingredients: [
        "4 чаши настъргано зеле",
        "1 морков, настърган",
        "3 с.л. соев сос",
        "2 с.л. сусамово масло",
        "1 с.л. оризов оцет",
        "1 ч.л. пресен джинджифил, настърган",
        "1 ч.л. мед",
        "1 с.л. сусамови семена",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
