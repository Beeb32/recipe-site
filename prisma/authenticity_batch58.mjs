import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "cobb-salad",
      title: "Cobb Salad",
      description:
        "A hearty chopped salad arranged in neat rows over finely chopped lettuce - chicken, bacon, egg, tomato, avocado, chives, and blue cheese - invented at the Hollywood Brown Derby; tomato and chives are the two ingredients most modern versions leave out.",
      imageEmoji: "🥗",
      cookTimeMinutes: 25,
      servings: 4,
      ingredients: [
        { text: "2 chicken breasts, cooked and diced", ingredient: "chicken breast", quantity: 2 },
        { text: "6 slices bacon, cooked and chopped", ingredient: "bacon", quantity: 6 },
        { text: "2 eggs, hard-boiled and chopped", ingredient: "eggs", quantity: 2 },
        { text: "2 tomatoes, diced", ingredient: "tomato", quantity: 2 },
        { text: "1 avocado, diced", ingredient: "avocado", quantity: 1 },
        { text: "1/2 cup crumbled blue cheese", ingredient: "blue cheese", quantity: 0.5 },
        { text: "2 tbsp chopped chives", ingredient: "chives", quantity: 2 },
        { text: "1 head romaine lettuce, finely chopped", ingredient: "romaine lettuce", quantity: 1 },
        { text: "3 tbsp olive oil", ingredient: "olive oil", quantity: 3 },
        { text: "1 tbsp red wine vinegar", ingredient: "red wine vinegar", quantity: 1 },
      ],
      steps: [
        "Finely chop the romaine and arrange on a large platter - the original Brown Derby version chopped everything fine rather than in big chunks.",
        "Top with neat rows of chicken, bacon, egg, tomato, avocado, and blue cheese, then scatter the chives over the top.",
        "Whisk together the olive oil and red wine vinegar for the dressing.",
        "Drizzle the dressing over the salad just before serving.",
      ],
      tags: ["lunch", "salad", "quick"],
    },
    bg: {
      title: "Салата Коб",
      description:
        "Ситно нарязана салата, подредена в спретнати редици върху ситно нарязана салата айсберг/романа - пиле, бекон, яйце, домат, авокадо, чесново лук и синьо сирене - измислена в холивудския ресторант Brown Derby; доматът и чесновият лук са двете съставки, които повечето съвременни версии пропускат.",
      steps: [
        "Нарежете ситно романата и наредете върху голямо плато - оригиналната версия от Brown Derby нарязваше всичко ситно, вместо на едри парчета.",
        "Отгоре подредете спретнати редици от пиле, бекон, яйце, домат, авокадо и синьо сирене, после поръсете с чесновия лук отгоре.",
        "Разбъркайте зехтина и червения винен оцет за соса.",
        "Полейте салатата със соса точно преди сервиране.",
      ],
      ingredients: [
        "2 пилешки гърди, сготвени и нарязани на кубчета",
        "6 резена бекон, изпечен и нарязан",
        "2 твърдо сварени яйца, нарязани",
        "2 домата, нарязани на кубчета",
        "1 авокадо, нарязано на кубчета",
        "1/2 чаша натрошено синьо сирене",
        "2 с.л. нарязан чеснов лук",
        "1 глава салата романа, ситно нарязана",
        "3 с.л. зехтин",
        "1 с.л. червен винен оцет",
      ],
    },
  },
  {
    en: {
      slug: "waldorf-salad",
      title: "Waldorf Salad",
      description:
        "A crisp salad of apples, celery, toasted walnuts, and grapes tossed in a creamy dressing - this is the 1920s version of the dish, since the very first Waldorf salad, created at the Waldorf-Astoria in 1893, was just apples, celery, and mayonnaise.",
      imageEmoji: "🍎",
      cookTimeMinutes: 15,
      servings: 4,
      ingredients: [
        { text: "3 apples, diced", ingredient: "apple", quantity: 3 },
        { text: "2 celery stalks, diced", ingredient: "celery", quantity: 2 },
        { text: "1/2 cup walnuts, toasted and chopped", ingredient: "walnuts", quantity: 0.5 },
        { text: "1/2 cup grapes, halved", ingredient: "grapes", quantity: 0.5 },
        { text: "1/2 cup mayonnaise", ingredient: "mayonnaise", quantity: 0.5 },
        { text: "1 tbsp lemon juice", ingredient: "lemon juice", quantity: 1 },
      ],
      steps: [
        "Toast the walnuts in a dry skillet over medium heat for 3-4 minutes until fragrant, then let cool before chopping - toasting deepens their flavor.",
        "Toss the diced apples with lemon juice to prevent browning.",
        "Combine the apples with celery, walnuts, and grapes in a bowl.",
        "Stir in the mayonnaise until evenly coated.",
        "Chill before serving.",
      ],
      tags: ["lunch", "vegetarian", "quick", "salad"],
    },
    bg: {
      title: "Салата Уолдорф",
      description:
        "Хрупкава салата от ябълки, целина, препечени орехи и грозде в кремообразен сос - това е версията от 20-те години на миналия век, тъй като самата първа салата Уолдорф, създадена в хотел Waldorf-Astoria през 1893 г., е съдържала само ябълки, целина и майонеза.",
      steps: [
        "Препечете орехите в сух тиган на среден огън 3-4 минути до ароматизиране, после ги оставете да изстинат преди да ги нарежете - препичането задълбочава вкуса им.",
        "Разбъркайте нарязаните ябълки с лимонов сок, за да не потъмнеят.",
        "Смесете ябълките с целината, орехите и гроздето в купа.",
        "Добавете майонезата, разбърквайки до равномерно покриване.",
        "Охладете преди сервиране.",
      ],
      ingredients: [
        "3 ябълки, нарязани на кубчета",
        "2 стъбла целина, нарязани на кубчета",
        "1/2 чаша орехи, препечени и нарязани",
        "1/2 чаша грозде, разполовено",
        "1/2 чаша майонеза",
        "1 с.л. лимонов сок",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
