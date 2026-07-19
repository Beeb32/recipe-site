import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "focaccia",
      title: "Focaccia",
      description:
        "A flat, olive-oil-rich Italian bread proofed twice - once in bulk, then again in the pan after dimpling - for the airy, open crumb real focaccia is known for; skipping that second proof, which many quick versions do, leaves it dense.",
      imageEmoji: "🍞",
      cookTimeMinutes: 150,
      servings: 8,
      ingredients: [
        { text: "4 cups flour", ingredient: "flour", quantity: 4 },
        { text: "2 1/4 tsp active dry yeast", ingredient: "yeast", quantity: 2.25 },
        { text: "1 3/4 cups warm water", ingredient: "water", quantity: 1.75 },
        { text: "1/2 cup olive oil, divided", ingredient: "olive oil", quantity: 0.5 },
        { text: "1 tbsp flaky salt", ingredient: "salt", quantity: 1 },
      ],
      steps: [
        "Mix the flour, yeast, warm water, and 2 tablespoons of the olive oil into a wet, shaggy dough; knead briefly until it comes together.",
        "Cover and let rise in a bowl for 60-90 minutes until doubled.",
        "Generously oil a baking pan with 2 tablespoons of olive oil, then press the dough into it, stretching it toward the edges.",
        "Cover again and let proof a second time for 60-90 minutes until puffy and reaching the edges of the pan - this second proof is what gives focaccia its airy, open crumb instead of a dense one.",
        "Dimple the dough deeply with oiled fingers all the way to the bottom of the pan, then drizzle with the remaining olive oil and sprinkle with flaky salt.",
        "Bake at 425°F for 20-25 minutes until deeply golden.",
      ],
      tags: ["snack", "vegan", "vegetarian", "italian", "baking"],
    },
    bg: {
      title: "Фокача",
      description:
        "Плосък италиански хляб, богат на зехтин, втасал два пъти - веднъж на едро, после отново в тавата след правенето на трапчинки - за въздушната, отворена структура, с която истинската фокача е известна; пропускането на второто втасване, което много бързи версии правят, я оставя плътна.",
      steps: [
        "Смесете брашното, маята, топлата вода и 2 супени лъжици от зехтина във влажно, разчорлено тесто; замесете за кратко, докато се сглоби.",
        "Покрийте и оставете да втаса в купа 60-90 минути, докато удвои обема си.",
        "Намажете обилно тава с 2 супени лъжици зехтин, после притиснете тестото в нея, разтягайки го към краищата.",
        "Покрийте отново и оставете да втаса втори път 60-90 минути, докато набъбне и стигне краищата на тавата - това второ втасване е това, което придава на фокачата въздушната, отворена структура, вместо плътна.",
        "Направете дълбоки трапчинки с намазнени пръсти чак до дъното на тавата, после полейте с останалия зехтин и поръсете с едра сол.",
        "Печете на 220°C 20-25 минути до дълбоко златисто.",
      ],
      ingredients: [
        "4 чаши брашно",
        "2 1/4 ч.л. суха мая",
        "1 3/4 чаши топла вода",
        "1/2 чаша зехтин, разделен",
        "1 с.л. едра сол",
      ],
    },
  },
  {
    en: {
      slug: "ravioli-with-marinara",
      title: "Ravioli with Marinara",
      description:
        "Cheese ravioli tossed in a from-scratch marinara made the traditional way - garlic cooked gently in olive oil until just golden, tomatoes simmered low and slow, and basil stirred in at the very end - since jarred sauce is what most simplified versions lean on instead.",
      imageEmoji: "🍝",
      cookTimeMinutes: 40,
      servings: 4,
      ingredients: [
        { text: "1 lb cheese ravioli", ingredient: "ravioli", quantity: 1 },
        { text: "3 tbsp olive oil", ingredient: "olive oil", quantity: 3 },
        { text: "4 cloves garlic, thinly sliced", ingredient: "garlic", quantity: 4 },
        { text: "1 can (28 oz) San Marzano tomatoes, crushed by hand", ingredient: "tomato", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "1/4 cup fresh basil, torn", ingredient: "basil", quantity: 0.25 },
        { text: "1/4 cup grated Parmesan", ingredient: "parmesan", quantity: 0.25 },
      ],
      steps: [
        "Cook the ravioli in salted boiling water according to package instructions, then drain gently.",
        "Heat the olive oil in a saucepan over medium-low heat and cook the garlic slowly until just golden, about 1-2 minutes - never let it brown, or it turns bitter.",
        "Add the tomatoes and a pinch of salt, and simmer gently, uncovered, for 20-25 minutes until thickened, stirring occasionally.",
        "Remove from heat and stir in the basil - adding it off the heat keeps its flavor bright instead of cooking it out.",
        "Toss the ravioli in the sauce.",
        "Top with Parmesan before serving.",
      ],
      tags: ["dinner", "italian", "vegetarian", "quick"],
    },
    bg: {
      title: "Равиоли с маринара",
      description:
        "Равиоли със сирене, разбъркани в домашно приготвен сос маринара по традиционния начин - чесън, задушен леко в зехтин до златисто, домати, къкрещи бавно, и босилек, добавен в самия край - тъй като готовият сос от буркан е това, на което разчитат повечето опростени версии.",
      steps: [
        "Сварете равиолите в подсолена вряща вода според инструкциите на опаковката, после внимателно отцедете.",
        "Загрейте зехтина в тенджера на среден до слаб огън и задушете чесъна бавно до леко златисто, около 1-2 минути - никога не го оставяйте да покафенее, иначе ще загорчи.",
        "Добавете доматите и щипка сол, и къкрете леко, без капак, 20-25 минути, докато сгъсти, разбърквайки от време на време.",
        "Свалете от котлона и разбъркайте босилека - добавянето му без котлон запазва вкуса му свеж, вместо да се сготви.",
        "Разбъркайте равиолите в соса.",
        "Отгоре поръсете пармезан преди сервиране.",
      ],
      ingredients: [
        "450 г равиоли със сирене",
        "3 с.л. зехтин",
        "4 скилидки чесън, нарязани на тънки резенчета",
        "1 консерва (800 г) домати сан марцано, намачкани на ръка",
        "Сол на вкус",
        "1/4 чаша пресен босилек, накъсан",
        "1/4 чаша настърган пармезан",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
