import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "minestrone-soup",
      title: "Minestrone Soup",
      description:
        "A hearty Italian vegetable soup with beans and pasta, simmered with a Parmesan rind for deep umami and finished with a drizzle of good olive oil and grated Parmesan - the rind is the traditional trick that gives real minestrone its savory backbone, and it's what most quick versions skip.",
      imageEmoji: "🍲",
      cookTimeMinutes: 45,
      servings: 6,
      ingredients: [
        { text: "2 tbsp olive oil, plus more for serving", ingredient: "olive oil", quantity: 2 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "2 carrots, diced", ingredient: "carrot", quantity: 2 },
        { text: "2 celery stalks, diced", ingredient: "celery", quantity: 2 },
        { text: "3 cloves garlic, minced", ingredient: "garlic", quantity: 3 },
        { text: "1 can diced tomatoes", ingredient: "tomato", quantity: 1 },
        { text: "1 can kidney beans, drained", ingredient: "kidney beans", quantity: 1 },
        { text: "4 cups vegetable broth", ingredient: "vegetable broth", quantity: 4 },
        { text: "1 Parmesan rind", ingredient: "parmesan", quantity: 1 },
        { text: "1 cup small pasta (ditalini or elbow)", ingredient: "pasta", quantity: 1 },
        { text: "2 cups chopped kale", ingredient: "kale", quantity: 2 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
        { text: "Grated Parmesan, for serving", ingredient: "parmesan", quantity: null },
      ],
      steps: [
        "Heat olive oil in a large pot and sauté onion, carrots, and celery until softened, about 8 minutes.",
        "Add garlic and cook for 1 minute.",
        "Stir in the diced tomatoes, kidney beans, vegetable broth, and Parmesan rind; bring to a boil.",
        "Add the pasta and simmer until al dente, about 10 minutes.",
        "Stir in the kale, season with salt and pepper, and cook until wilted.",
        "Remove the Parmesan rind, then serve drizzled with olive oil and topped with grated Parmesan - the rind is what gives real minestrone its savory backbone.",
      ],
      tags: ["dinner", "vegetarian"],
    },
    bg: {
      title: "Минестроне супа",
      description:
        "Ситна италианска зеленчукова супа с боб и паста, къкреща с корица от пармезан за дълбок вкус на умами и довършена с капка добър зехтин и настърган пармезан - корицата е традиционният трик, който придава на истинското минестроне неговата пикантна основа, и е това, което повечето бързи версии пропускат.",
      steps: [
        "Загрейте зехтин в голяма тенджера и запържете лука, моркова и целината до омекване, около 8 минути.",
        "Добавете чесъна и гответе 1 минута.",
        "Добавете нарязаните домати, боба, зеленчуковия бульон и корицата от пармезан; оставете да заври.",
        "Добавете пастата и варете до готовност, около 10 минути.",
        "Добавете зелето, подправете със сол и черен пипер и гответе до омекване.",
        "Извадете корицата от пармезан, после сервирайте полято със зехтин и поръсено с настърган пармезан - корицата е това, което придава на истинското минестроне неговата пикантна основа.",
      ],
      ingredients: [
        "2 с.л. зехтин, плюс още за сервиране",
        "1 лук, нарязан на кубчета",
        "2 моркова, нарязани на кубчета",
        "2 стъбла целина, нарязани на кубчета",
        "3 скилидки чесън, ситно нарязани",
        "1 консерва нарязани домати",
        "1 консерва боб, отцеден",
        "4 чаши зеленчуков бульон",
        "1 корица от пармезан",
        "1 чаша малка паста (дителини или лакти)",
        "2 чаши нарязано зеле",
        "Сол на вкус",
        "Черен пипер на вкус",
        "Настърган пармезан, за сервиране",
      ],
    },
  },
  {
    en: {
      slug: "classic-apple-pie",
      title: "Classic Apple Pie",
      description:
        "Tart apples drained of their released juice, then tossed with a cornstarch-and-flour thickener and baked in a flaky double crust until glossy and set - draining the apples and blending both starches is what keeps real apple pie filling from turning watery or gummy.",
      imageEmoji: "🥧",
      cookTimeMinutes: 75,
      servings: 8,
      ingredients: [
        { text: "6 tart apples (such as Granny Smith), peeled and sliced", ingredient: "apple", quantity: 6 },
        { text: "3/4 cup sugar", ingredient: "sugar", quantity: 0.75 },
        { text: "2 tbsp flour", ingredient: "flour", quantity: 2 },
        { text: "1 tbsp cornstarch", ingredient: "cornstarch", quantity: 1 },
        { text: "1 tsp cinnamon", ingredient: "cinnamon", quantity: 1 },
        { text: "1/4 tsp nutmeg", ingredient: "nutmeg", quantity: 0.25 },
        { text: "2 pie crusts", ingredient: "pie crust", quantity: 2 },
        { text: "2 tbsp butter", ingredient: "butter", quantity: 2 },
      ],
      steps: [
        "Toss the sliced apples with the sugar and let sit for 15 minutes, then drain off the released juice - draining is what keeps the baked filling from turning watery.",
        "Toss the drained apples with the flour, cornstarch, cinnamon, and nutmeg - the cornstarch-and-flour blend is what gives the filling a glossy set instead of a gummy or runny one.",
        "Line a pie dish with one crust and fill with the apple mixture.",
        "Dot the filling with butter, then top with the second crust, sealing and venting the top.",
        "Bake at 375°F for 45-50 minutes until the crust is golden and filling is bubbling.",
        "Cool for at least an hour before slicing so the filling can set.",
      ],
      tags: ["dessert", "baking", "vegetarian"],
    },
    bg: {
      title: "Класически ябълков пай",
      description:
        "Кисели ябълки, отцедени от отделения сок, после разбъркани с гъстител от нишесте и брашно и запечени в хрупкава двойна кора до лъскавост и стегнатост - отцеждането на ябълките и смесването на двата вида нишесте е това, което пази истинската плънка за ябълков пай от воднистост или лепкавост.",
      steps: [
        "Разбъркайте нарязаните ябълки със захарта и оставете за 15 минути, после отцедете отделения сок - отцеждането е това, което пази печената плънка от воднистост.",
        "Разбъркайте отцедените ябълки с брашното, царевичното нишесте, канелата и индийското орехче - смесването на нишесте и брашно е това, което придава на плънката лъскава стегнатост, вместо лепкавост или течност.",
        "Облицовайте тава за пай с една кора и напълнете с ябълковата смес.",
        "Разпределете парченца масло върху плънката, после покрийте с втора кора, запечатвайки и правейки отвори отгоре.",
        "Печете на 190°C 45-50 минути, докато коричката стане златиста и плънката закъкри.",
        "Оставете да изстине поне час преди нарязване, за да се стегне плънката.",
      ],
      ingredients: [
        "6 кисели ябълки (например Гранни Смит), обелени и нарязани на резени",
        "3/4 чаша захар",
        "2 с.л. брашно",
        "1 с.л. царевично нишесте",
        "1 ч.л. канела",
        "1/4 ч.л. индийско орехче",
        "2 кори за пай",
        "2 с.л. масло",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
