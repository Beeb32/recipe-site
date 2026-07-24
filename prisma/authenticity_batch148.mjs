import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "quinoa-salad",
      title: "Quinoa Salad",
      description:
        "A fresh, protein-packed salad of quinoa, cucumber, tomato, feta, and fresh parsley - quinoa has a naturally bitter coating that needs rinsing before cooking, a step most quick recipes skip, leaving the salad with an off, soapy edge.",
      imageEmoji: "🥗",
      cookTimeMinutes: 25,
      servings: 4,
      ingredients: [
        { text: "1 cup quinoa, rinsed", ingredient: "quinoa", quantity: 1 },
        { text: "2 tomatoes, diced", ingredient: "tomato", quantity: 2 },
        { text: "1 cucumber, diced", ingredient: "cucumber", quantity: 1 },
        { text: "1/4 cup chopped fresh parsley", ingredient: "parsley", quantity: 0.25 },
        { text: "1/2 cup crumbled feta cheese", ingredient: "feta cheese", quantity: 0.5 },
        { text: "3 tbsp olive oil", ingredient: "olive oil", quantity: 3 },
        { text: "2 tbsp lemon juice", ingredient: "lemon juice", quantity: 2 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Rinse the quinoa thoroughly under cold water before cooking - this removes quinoa's naturally bitter coating, which is what gives unrinsed quinoa an off, soapy taste.",
        "Cook the quinoa according to package instructions, then let cool.",
        "Combine the cooled quinoa with tomatoes, cucumber, parsley, and feta.",
        "Whisk together the olive oil, lemon juice, salt, and pepper, then toss with the salad.",
        "Chill before serving.",
      ],
      tags: ["lunch", "vegetarian", "quick", "salad", "mediterranean"],
    },
    bg: {
      title: "Салата с киноа",
      description:
        "Свежа, богата на протеини салата с киноа, краставица, домат, фета и пресен магданоз - киноата има естествено горчиво покритие, което трябва да се измие преди готвене, стъпка, която повечето бързи рецепти пропускат, оставяйки салатата с неприятен, сапунист привкус.",
      steps: [
        "Изплакнете киноата обилно под студена вода преди готвене - това премахва естественото горчиво покритие на киноата, което придава на неизплакнатата киноа неприятен, сапунист вкус.",
        "Сварете киноата според инструкциите на опаковката, после оставете да изстине.",
        "Смесете изстиналата киноа с доматите, краставицата, магданоза и фетата.",
        "Разбийте зехтина, лимоновия сок, солта и черния пипер заедно, после разбъркайте със салатата.",
        "Охладете преди сервиране.",
      ],
      ingredients: [
        "1 чаша киноа, изплакната",
        "2 домата, нарязани на кубчета",
        "1 краставица, нарязана на кубчета",
        "1/4 чаша нарязан пресен магданоз",
        "1/2 чаша натрошена фета",
        "3 с.л. зехтин",
        "2 с.л. лимонов сок",
        "Сол на вкус",
        "Черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "rice-and-beans",
      title: "Rice and Beans",
      description:
        "A simple, filling combination of seasoned rice and black beans, finished with lime and cilantro - beans simmered with nothing but cumin and no acid at the end is why this dish can taste flat instead of bright.",
      imageEmoji: "🍚",
      cookTimeMinutes: 30,
      servings: 4,
      ingredients: [
        { text: "2 cups rice", ingredient: "rice", quantity: 2 },
        { text: "1 can black beans, drained", ingredient: "black beans", quantity: 1 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
        { text: "1 tsp cumin", ingredient: "cumin", quantity: 1 },
        { text: "2 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 2 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "1 lime, cut into wedges", ingredient: "lime", quantity: 1 },
        { text: "2 tbsp chopped fresh cilantro", ingredient: "cilantro", quantity: 2 },
      ],
      steps: [
        "Cook the rice according to package instructions.",
        "Heat oil in a pan and sauté the onion and garlic until softened.",
        "Stir in the black beans, cumin, and a pinch of salt, cooking for 5 minutes until heated through.",
        "Serve the beans over the rice, finished with cilantro and a squeeze of lime - the lime is what actually brightens the dish instead of leaving it tasting flat.",
      ],
      tags: ["dinner", "vegan", "vegetarian", "quick", "mexican"],
    },
    bg: {
      title: "Ориз с боб",
      description:
        "Проста, засищаща комбинация от подправен ориз и черен боб, завършена с лайм и кориандър - боб, къкрен само с кимион и без никаква киселина накрая, е причината това ястие да има плосък, а не свеж вкус.",
      steps: [
        "Сварете ориза според инструкциите на опаковката.",
        "Загрейте олио в тиган и запържете лука и чесъна до омекване.",
        "Добавете черния боб, кимиона и щипка сол, гответе 5 минути до затопляне.",
        "Сервирайте боба върху ориза, завършен с кориандър и малко лайм - лаймът е това, което наистина освежава ястието, вместо да го остави с плосък вкус.",
      ],
      ingredients: [
        "2 чаши ориз",
        "1 консерва черен боб, отцеден",
        "1 лук, нарязан на кубчета",
        "2 скилидки чесън, ситно нарязани",
        "1 ч.л. кимион",
        "2 с.л. олио",
        "Сол на вкус",
        "1 лайм, нарязан на резенчета",
        "2 с.л. нарязан пресен кориандър",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
