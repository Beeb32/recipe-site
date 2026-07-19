import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "greek-salad",
      title: "Greek Salad",
      description:
        "Tomato, cucumber, green pepper, red onion, and olives dressed simply with olive oil and salt - no vinegar - topped with a whole slab of feta rather than crumbled, the way it's actually served in Greece.",
      imageEmoji: "🥙",
      cookTimeMinutes: 15,
      servings: 4,
      ingredients: [
        { text: "3 tomatoes, cut into wedges", ingredient: "tomato", quantity: 3 },
        { text: "1 cucumber, sliced", ingredient: "cucumber", quantity: 1 },
        { text: "1 green bell pepper, sliced into rings", ingredient: "green pepper", quantity: 1 },
        { text: "1/2 red onion, thinly sliced", ingredient: "red onion", quantity: 0.5 },
        { text: "1/2 cup Kalamata olives", ingredient: "olives", quantity: 0.5 },
        { text: "4 oz feta cheese, in one block", ingredient: "feta cheese", quantity: 4 },
        { text: "1/4 cup olive oil", ingredient: "olive oil", quantity: 0.25 },
        { text: "1 tsp dried oregano", ingredient: "oregano", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Layer the tomatoes and cucumber in a shallow bowl or platter, then add the onion, green pepper, and olives on top - Greek salad is built in layers, not tossed together.",
        "Sprinkle lightly with salt and let sit for 5 minutes to draw out the tomato juices.",
        "Drizzle with olive oil and toss very gently, just enough to coat.",
        "Place the whole block of feta on top and sprinkle with oregano - no vinegar goes into a traditional horiatiki; the tomato juice and olive oil are the only dressing.",
      ],
      tags: ["lunch", "vegetarian", "quick", "salad", "mediterranean"],
    },
    bg: {
      title: "Гръцка салата",
      description:
        "Домат, краставица, зелена чушка, червен лук и маслини, подправени просто със зехтин и сол - без оцет - покрити с цяло парче фета, а не натрошена, както се сервира в реалността в Гърция.",
      steps: [
        "Наредете доматите и краставицата на пластове в плитка купа или плато, после добавете лука, зелената чушка и маслините отгоре - гръцката салата се изгражда на пластове, не се разбърква.",
        "Поръсете леко със сол и оставете да престои 5 минути, за да се отдели сокът от доматите.",
        "Полейте със зехтин и разбъркайте много внимателно, колкото да се покрие.",
        "Сложете цялото парче фета отгоре и поръсете с риган - в традиционната хориатики не влиза оцет; сокът от доматите и зехтинът са единственият дресинг.",
      ],
      ingredients: [
        "3 домата, нарязани на резени",
        "1 краставица, нарязана",
        "1 зелена чушка, нарязана на кръгчета",
        "1/2 червен лук, нарязан на тънко",
        "1/2 чаша маслини Каламата",
        "115 г сирене фета, на едно парче",
        "1/4 чаша зехтин",
        "1 ч.л. сух риган",
        "Сол на вкус",
      ],
    },
  },
  {
    en: {
      slug: "beef-and-broccoli",
      title: "Beef and Broccoli",
      description:
        "Beef velveted in a cornstarch-soy-baking soda marinade before searing, stir-fried with ginger and garlic in a Shaoxing wine-soy sauce - velveting is the technique that gives real Chinese beef and broccoli its silky texture, not just a light cornstarch dust.",
      imageEmoji: "🥦",
      cookTimeMinutes: 40,
      servings: 4,
      ingredients: [
        { text: "1 lb flank steak, sliced thin against the grain", ingredient: "flank steak", quantity: 1 },
        { text: "1/4 tsp baking soda", ingredient: "baking soda", quantity: 0.25 },
        { text: "1 tbsp cornstarch (divided)", ingredient: "cornstarch", quantity: 1 },
        { text: "1 tbsp soy sauce (divided)", ingredient: "soy sauce", quantity: 1 },
        { text: "1 tbsp Shaoxing wine", ingredient: "shaoxing wine", quantity: 1 },
        { text: "4 cups broccoli florets", ingredient: "broccoli", quantity: 4 },
        { text: "3 cloves garlic, minced", ingredient: "garlic", quantity: 3 },
        { text: "1 tbsp grated ginger", ingredient: "ginger", quantity: 1 },
        { text: "2 tbsp oyster sauce", ingredient: "oyster sauce", quantity: 2 },
        { text: "1 tsp sugar", ingredient: "sugar", quantity: 1 },
        { text: "2 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 2 },
      ],
      steps: [
        "Toss the sliced beef with the baking soda and let sit for 15-20 minutes, then rinse it off - this \"velveting\" step is what gives the beef its silky, tender texture.",
        "Mix the rinsed beef with half the cornstarch, half the soy sauce, and the Shaoxing wine; let marinate for 15 minutes.",
        "Heat the oil in a wok and sear the beef until browned; set aside.",
        "Stir-fry the broccoli, garlic, and ginger for 3-4 minutes until crisp-tender.",
        "Whisk together the remaining soy sauce, remaining cornstarch, oyster sauce, and sugar with a splash of water, then return the beef to the wok with the sauce, tossing until glossy and heated through.",
      ],
      tags: ["dinner", "asian", "quick"],
    },
    bg: {
      title: "Телешко с броколи",
      description:
        "Телешко месо, обработено по метода велветинг с царевично нишесте, соя и сода за хляб преди запържване, задушено с джинджифил и чесън в сос от шаосинско вино и соя - велветингът е техниката, която придава на истинското китайско телешко с броколи копринена текстура, не просто лек слой нишесте.",
      steps: [
        "Разбъркайте нарязаното месо със содата за хляб и оставете за 15-20 минути, после изплакнете - тази стъпка \"велветинг\" е това, което придава на месото копринена, крехка текстура.",
        "Смесете изплакнатото месо с половината царевично нишесте, половината соев сос и шаосинското вино; маринова 15 минути.",
        "Загрейте олио в уок и запържете месото до запържване; отделете настрани.",
        "Задушете броколите, чесъна и джинджифила 3-4 минути до леко омекване.",
        "Разбъркайте останалия соев сос, останалото царевично нишесте, стридения сос и захарта с малко вода, после върнете месото в уока със соса, разбърквайки до блясък и затопляне.",
      ],
      ingredients: [
        "450 г телешки флаш стек, нарязан на тънко през влакната",
        "1/4 ч.л. сода за хляб",
        "1 с.л. царевично нишесте (разделено)",
        "1 с.л. соев сос (разделен)",
        "1 с.л. шаосинско вино",
        "4 чаши съцветия броколи",
        "3 скилидки чесън, ситно нарязани",
        "1 с.л. настърган джинджифил",
        "2 с.л. стриден сос",
        "1 ч.л. захар",
        "2 с.л. олио",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
