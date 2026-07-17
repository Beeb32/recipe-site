import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "miso-soup",
      title: "Miso Soup",
      description:
        "A light, savory Japanese soup with tofu, seaweed, and a delicate miso broth - the miso goes in last, off the heat, so it never boils and keeps its aroma.",
      imageEmoji: "🍲",
      cookTimeMinutes: 20,
      servings: 4,
      ingredients: [
        { text: "4 cups dashi or vegetable broth", ingredient: "dashi", quantity: 4 },
        { text: "3 tbsp miso paste", ingredient: "miso paste", quantity: 3 },
        { text: "1 cup cubed silken tofu", ingredient: "tofu", quantity: 1 },
        { text: "2 tbsp dried wakame seaweed", ingredient: "seaweed", quantity: 2 },
        { text: "2 green onions, sliced", ingredient: "green onion", quantity: 2 },
      ],
      steps: [
        "Soak the dried wakame in a small bowl of water for 5 minutes to rehydrate, then drain.",
        "Bring the dashi or vegetable broth to a gentle simmer - do not boil.",
        "Add the tofu and rehydrated wakame, warming through for 2-3 minutes.",
        "Remove from the heat, whisk a ladleful of the hot broth into the miso paste until smooth, then stir it back into the pot - adding miso off the heat and last keeps it from turning bitter and losing its aroma.",
        "Garnish with sliced green onions before serving.",
      ],
      tags: ["lunch", "quick", "vegetarian", "asian"],
    },
    bg: {
      title: "Мисо супа",
      description:
        "Лека, ароматна японска супа с тофу, водорасли и нежен мисо бульон - мисото се добавя последно, извън котлона, за да не заври и да запази аромата си.",
      steps: [
        "Накиснете сушените водорасли уакаме в купичка с вода за 5 минути, за да се възстановят, после отцедете.",
        "Загрейте дашито или зеленчуковия бульон до леко къкрене - не оставяйте да заври.",
        "Добавете тофуто и възстановените водорасли, затоплете за 2-3 минути.",
        "Свалете от котлона, разбъркайте черпак горещ бульон с мисо пастата до гладкост, после върнете сместа в тенджерата - добавянето на мисото последно и извън котлона го пази да не загорчи и да запази аромата си.",
        "Гарнирайте с нарязан пресен лук преди сервиране.",
      ],
      ingredients: [
        "4 чаши даши или зеленчуков бульон",
        "3 с.л. мисо паста",
        "1 чаша тофу, нарязано на кубчета",
        "2 с.л. сушени водорасли уакаме",
        "2 стръка пресен лук, нарязани",
      ],
    },
  },
  {
    en: {
      slug: "chicken-ramen",
      title: "Chicken Ramen",
      description:
        "A savory chicken broth simmered with ginger, garlic, and scallion, topped with noodles and eggs marinated for hours in a soy-mirin marinade - the marinated egg (ajitsuke tamago) is what separates real ramen from broth and noodles.",
      imageEmoji: "🍜",
      cookTimeMinutes: 180,
      servings: 4,
      ingredients: [
        { text: "8 cups chicken broth", ingredient: "chicken broth", quantity: 8 },
        { text: "1 1/2 lb chicken thighs", ingredient: "chicken thighs", quantity: 1.5 },
        { text: "3 slices fresh ginger", ingredient: "ginger", quantity: 3 },
        { text: "3 cloves garlic, smashed", ingredient: "garlic", quantity: 3 },
        { text: "2 green onions, white parts smashed (greens reserved)", ingredient: "green onion", quantity: 2 },
        { text: "4 packs ramen noodles", ingredient: "ramen noodles", quantity: 4 },
        { text: "4 eggs", ingredient: "eggs", quantity: 4 },
        { text: "1/4 cup soy sauce (divided)", ingredient: "soy sauce", quantity: 0.25 },
        { text: "2 tbsp mirin", ingredient: "mirin", quantity: 2 },
        { text: "1 tbsp sake", ingredient: "sake", quantity: 1 },
        { text: "1 tsp sugar", ingredient: "sugar", quantity: 1 },
        { text: "1 tsp sesame oil", ingredient: "sesame oil", quantity: 1 },
        { text: "3 green onions, sliced, for garnish", ingredient: "green onion", quantity: 3 },
      ],
      steps: [
        "Soft-boil the eggs for 7 minutes, then transfer immediately to an ice bath to stop the cooking and cool completely.",
        "Peel the eggs, then combine 3 tablespoons of the soy sauce with the mirin, sake, and sugar in a small saucepan; bring to a boil, simmer for 1 minute, and let cool. Submerge the peeled eggs in the cooled marinade, cover, and refrigerate for at least 2 hours, ideally overnight.",
        "Simmer the chicken broth with the chicken thighs, ginger, garlic, and the smashed white parts of the green onions for 30-45 minutes until the broth is flavorful and the chicken is cooked through.",
        "Remove and slice the chicken, then strain the broth and stir in the remaining soy sauce and the sesame oil.",
        "Cook the ramen noodles separately according to package instructions.",
        "Divide the noodles among bowls and ladle the hot broth over them.",
        "Top with sliced chicken, a halved marinated egg, and the sliced green onion garnish.",
      ],
      tags: ["dinner", "asian", "quick"],
    },
    bg: {
      title: "Пилешки рамен",
      description:
        "Ароматен пилешки бульон, къкрен с джинджифил, чесън и пресен лук, поднесен с юфка и яйца, мариновани с часове в соево-мирин марината - маринованото яйце (аджицуке тамаго) е това, което отличава истинския рамен от обикновен бульон с юфка.",
      steps: [
        "Сварете яйцата меко за 7 минути, после ги прехвърлете веднага в ледена вода, за да спрат да се готвят и да изстинат напълно.",
        "Обелете яйцата, после смесете 3 супени лъжици от соевия сос с мирина, сакето и захарта в малка тенджера; доведете до кипене, варете 1 минута и оставете да изстине. Потопете обелените яйца в изстиналата марината, покрийте и охладете поне 2 часа, в идеалния случай през нощта.",
        "Варете пилешкия бульон с пилешките бутчета, джинджифила, чесъна и смачканите бели части на пресния лук 30-45 минути, докато бульонът стане ароматен, а пилето се сготви напълно.",
        "Извадете и нарежете пилето, после прецедете бульона и разбъркайте останалия соев сос и сусамовото масло.",
        "Сварете юфката рамен отделно според инструкциите на опаковката.",
        "Разпределете юфката в купи и залейте с горещия бульон.",
        "Отгоре сложете нарязано пиле, разполовено маринова яйце и нарязания пресен лук за гарниране.",
      ],
      ingredients: [
        "8 чаши пилешки бульон",
        "700 г пилешки бутчета",
        "3 резена пресен джинджифил",
        "3 скилидки чесън, натрошени",
        "2 стръка пресен лук, белите части натрошени (зелените запазени)",
        "4 пакетчета юфка рамен",
        "4 яйца",
        "1/4 чаша соев сос (разделен)",
        "2 с.л. мирин",
        "1 с.л. саке",
        "1 ч.л. захар",
        "1 ч.л. сусамово масло",
        "3 стръка пресен лук, нарязани, за гарниране",
      ],
    },
  },
  {
    en: {
      slug: "onigiri",
      title: "Onigiri",
      description:
        "Japanese rice balls hand-shaped with salted palms around a well-seasoned tuna-mayo filling, wrapped in nori just before eating so it stays crisp.",
      imageEmoji: "🍙",
      cookTimeMinutes: 25,
      servings: 4,
      ingredients: [
        { text: "3 cups cooked sushi rice, still warm", ingredient: "sushi rice", quantity: 3 },
        { text: "1 can tuna, drained and squeezed dry", ingredient: "tuna", quantity: 1 },
        { text: "2 tbsp mayonnaise", ingredient: "mayonnaise", quantity: 2 },
        { text: "1 tsp soy sauce", ingredient: "soy sauce", quantity: 1 },
        { text: "4 strips nori (seaweed)", ingredient: "nori", quantity: 4 },
        { text: "Salt, for your hands", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Drain the tuna and squeeze it firmly to remove excess water - this single step does more than anything else to keep the onigiri from turning soggy - then mix with the mayonnaise and soy sauce.",
        "Wet your hands with water, then rub a pinch of salt evenly between your palms.",
        "Scoop a portion of warm rice into your palm, press a small hollow in the center, add a spoonful of tuna filling, and mold the rice into a triangle around it, pressing gently - don't over-squeeze, or the onigiri turns dense.",
        "Wrap a strip of nori around the base just before serving so it stays crisp.",
      ],
      tags: ["lunch", "asian", "quick"],
    },
    bg: {
      title: "Онигири",
      description:
        "Японски топки ориз, оформени на ръка със солени длани около добре подправена плънка от тон риба с майонеза, увити с нори точно преди хапване, за да остане хрупкава.",
      steps: [
        "Отцедете тон рибата и я изстискайте силно, за да премахнете излишната вода - тази единствена стъпка е най-важна, за да не се разкисне онигирито - после я смесете с майонезата и соевия сос.",
        "Намокрете ръцете си с вода, после разтрийте щипка сол равномерно между дланите си.",
        "Сложете порция топъл ориз в дланта си, направете малка вдлъбнатина в центъра, добавете лъжица плънка от тон риба и оформете ориза на триъгълник около нея, притискайки леко - не притискайте прекалено силно, иначе онигирито ще стане плътно.",
        "Увийте лента нори около основата точно преди сервиране, за да остане хрупкава.",
      ],
      ingredients: [
        "3 чаши сготвен суши ориз, все още топъл",
        "1 консерва тон риба, отцедена и изстискана",
        "2 с.л. майонеза",
        "1 ч.л. соев сос",
        "4 ленти нори (водорасли)",
        "Сол, за ръцете",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
