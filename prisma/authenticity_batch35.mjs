import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "bobotie",
      title: "Bobotie",
      description:
        "Curried ground beef bound with milk-soaked bread and sweetened with apricot jam, baked under a turmeric-egg custard studded with bay leaves - the soaked bread is the traditional binder that keeps bobotie moist, not just meat and spice.",
      imageEmoji: "🥘",
      cookTimeMinutes: 75,
      servings: 6,
      ingredients: [
        { text: "2 slices bread, crusts removed", ingredient: "bread", quantity: 2 },
        { text: "1 cup milk (divided)", ingredient: "milk", quantity: 1 },
        { text: "1 1/2 lb ground beef", ingredient: "ground beef", quantity: 1.5 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "2 tsp curry powder", ingredient: "curry powder", quantity: 2 },
        { text: "1/2 tsp turmeric", ingredient: "turmeric", quantity: 0.5 },
        { text: "1 tbsp apricot jam (or chutney)", ingredient: "apricot jam", quantity: 1 },
        { text: "1 tbsp red wine vinegar", ingredient: "red wine vinegar", quantity: 1 },
        { text: "1 tsp Worcestershire sauce", ingredient: "worcestershire sauce", quantity: 1 },
        { text: "1/2 cup raisins", ingredient: "raisins", quantity: 0.5 },
        { text: "2 eggs", ingredient: "eggs", quantity: 2 },
        { text: "2-3 bay leaves", ingredient: "bay leaves", quantity: 2 },
      ],
      steps: [
        "Soak the bread in half the milk while you prepare the meat; when softened, squeeze out the milk (reserving it) and mash the bread with a fork.",
        "Preheat oven to 350°F.",
        "Brown the ground beef with the onion, curry powder, and turmeric, then stir in the apricot jam, vinegar, Worcestershire sauce, raisins, and the mashed soaked bread - the soaked bread is the traditional binder that keeps bobotie moist.",
        "Spread the meat mixture into a baking dish.",
        "Whisk the eggs with the reserved milk and remaining milk, pour over the meat, and press the bay leaves onto the surface.",
        "Bake for 30-35 minutes until the custard is set.",
      ],
      tags: ["dinner"],
    },
    bg: {
      title: "Бободжи",
      description:
        "Подправена с къри телешка кайма, свързана с накиснат в мляко хляб и подсладена с кайсиев конфитюр, запечена под яйчен крем с куркума, набоден с дафинови листа - накиснатият хляб е традиционният свързващ елемент, който пази бободжи влажно, не само месото и подправките.",
      steps: [
        "Накиснете хляба в половината мляко, докато подготвяте месото; когато омекне, изстискайте млякото (запазете го) и намачкайте хляба с вилица.",
        "Загрейте фурната на 180°C.",
        "Запържете каймата с лука, къри на прах и куркумата, после разбъркайте кайсиевия конфитюр, оцета, устършърския сос, стафидите и намачкания накиснат хляб - накиснатият хляб е традиционният свързващ елемент, който пази бободжи влажно.",
        "Разпределете месната смес в тава.",
        "Разбийте яйцата със запазеното и останалото мляко, залейте отгоре на месото и набодете дафиновите листа на повърхността.",
        "Печете 30-35 минути до стягане на крема.",
      ],
      ingredients: [
        "2 филии хляб, без коричка",
        "1 чаша мляко (разделено)",
        "700 г кайма от телешко месо",
        "1 лук, нарязан на кубчета",
        "2 ч.л. къри на прах",
        "1/2 ч.л. куркума",
        "1 с.л. кайсиев конфитюр (или чътни)",
        "1 с.л. червен винен оцет",
        "1 ч.л. устършърски сос",
        "1/2 чаша стафиди",
        "2 яйца",
        "2-3 дафинови листа",
      ],
    },
  },
  {
    en: {
      slug: "brazilian-feijoada",
      title: "Brazilian Feijoada",
      description:
        "Black beans simmered for over an hour with smoked sausage, pork, bay leaf, and cumin until deeply thickened - traditionally served with rice, orange slices, and sautéed greens to cut the richness.",
      imageEmoji: "🍲",
      cookTimeMinutes: 100,
      servings: 6,
      ingredients: [
        { text: "2 cans black beans", ingredient: "black beans", quantity: 2 },
        { text: "1/2 lb smoked sausage (linguiça if available), sliced", ingredient: "sausage", quantity: 0.5 },
        { text: "1/2 lb pork shoulder, cubed", ingredient: "pork shoulder", quantity: 0.5 },
        { text: "4 strips bacon, chopped", ingredient: "bacon", quantity: 4 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "4 cloves garlic, minced", ingredient: "garlic", quantity: 4 },
        { text: "2 bay leaves", ingredient: "bay leaves", quantity: 2 },
        { text: "1/2 tsp cumin", ingredient: "cumin", quantity: 0.5 },
        { text: "4 cups chicken broth", ingredient: "chicken broth", quantity: 4 },
        { text: "Orange slices, for serving", ingredient: "orange", quantity: null },
      ],
      steps: [
        "Cook the bacon in a large pot until crisp, then brown the pork and sausage in the rendered fat; set the meat aside.",
        "Sauté the onion and garlic in the same pot until softened.",
        "Return the meat to the pot with the black beans, bay leaves, cumin, and chicken broth.",
        "Simmer, partially covered, for 1.5 hours until deeply thickened, mashing some beans to help thicken.",
        "Discard the bay leaves and serve with rice, orange slices, and sautéed greens on the side to cut the richness.",
      ],
      tags: ["dinner"],
    },
    bg: {
      title: "Бразилска фейжоада",
      description:
        "Черен боб, варен над час с опушена наденица, свинско месо, дафинов лист и кимион до дълбоко сгъстяване - традиционно поднасяна с ориз, резенчета портокал и задушена зелена салата, за да пресекат наситеността.",
      steps: [
        "Запържете бекона в голяма тенджера до хрупкавост, после запържете свинското и наденицата в отделената мазнина; отделете месото настрани.",
        "Запържете лука и чесъна в същата тенджера до омекване.",
        "Върнете месото в тенджерата с черния боб, дафиновите листа, кимиона и пилешкия бульон.",
        "Варете частично покрито 1.5 часа до дълбоко сгъстяване, намачквайки част от боба, за да помогне за сгъстяването.",
        "Изхвърлете дафиновите листа и сервирайте с ориз, резенчета портокал и задушена зелена салата отстрани, за да пресекат наситеността.",
      ],
      ingredients: [
        "2 консерви черен боб",
        "225 г опушена наденица (лингуиса, ако е налична), нарязана",
        "225 г свинска плешка, нарязана на кубчета",
        "4 резена бекон, нарязани",
        "1 лук, нарязан на кубчета",
        "4 скилидки чесън, ситно нарязани",
        "2 дафинови листа",
        "1/2 ч.л. кимион",
        "4 чаши пилешки бульон",
        "Резенчета портокал, за сервиране",
      ],
    },
  },
  {
    en: {
      slug: "chimichurri-steak",
      title: "Chimichurri Steak",
      description:
        "Grilled steak topped with chimichurri built on oregano and red pepper flakes as much as parsley and garlic, rested at least 30 minutes before serving so the flavors meld - skipping the rest is the most common way home versions fall short.",
      imageEmoji: "🥩",
      cookTimeMinutes: 30,
      servings: 4,
      ingredients: [
        { text: "4 sirloin steaks", ingredient: "sirloin steak", quantity: 4 },
        { text: "1 cup fresh parsley, chopped", ingredient: "parsley", quantity: 1 },
        { text: "1/4 cup fresh oregano, chopped (or 2 tbsp dried)", ingredient: "oregano", quantity: 0.25 },
        { text: "4 cloves garlic, minced", ingredient: "garlic", quantity: 4 },
        { text: "1/2 tsp red pepper flakes", ingredient: "red pepper flakes", quantity: 0.5 },
        { text: "1/2 cup olive oil", ingredient: "olive oil", quantity: 0.5 },
        { text: "1/4 cup red wine vinegar", ingredient: "red wine vinegar", quantity: 0.25 },
        { text: "Salt and pepper to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Whisk together the parsley, oregano, garlic, red pepper flakes, olive oil, red wine vinegar, and salt to make the chimichurri.",
        "Let the chimichurri rest at room temperature for at least 30 minutes so the garlic mellows and the flavors meld - this rest is what most home versions skip.",
        "Season the steaks with salt and pepper and grill over high heat for 4-5 minutes per side to medium-rare.",
        "Let the steaks rest for 5 minutes.",
        "Spoon the chimichurri generously over the steaks before serving.",
      ],
      tags: ["dinner", "quick"],
    },
    bg: {
      title: "Стек с чимичури",
      description:
        "Стек на скара, покрит с чимичури, изграден върху риган и люспи лют пипер толкова, колкото и върху магданоз и чесън, оставен да почине поне 30 минути преди сервиране, за да се смесят вкусовете - пропускането на почивката е най-честата причина домашните версии да не достигат.",
      steps: [
        "Разбъркайте магданоза, ригана, чесъна, люспите лют пипер, зехтина, червения винен оцет и солта, за да направите чимичури.",
        "Оставете чимичурито да почине на стайна температура поне 30 минути, за да омекне чесънът и вкусовете да се смесят - тази почивка е това, което повечето домашни версии пропускат.",
        "Подправете стековете със сол и черен пипер и изпечете на скара на силен огън по 4-5 минути от всяка страна до средно препечено.",
        "Оставете стековете да починат 5 минути.",
        "Полейте обилно стековете с чимичури преди сервиране.",
      ],
      ingredients: [
        "4 филейни стека",
        "1 чаша пресен магданоз, нарязан",
        "1/4 чаша пресен риган, нарязан (или 2 с.л. сух)",
        "4 скилидки чесън, ситно нарязани",
        "1/2 ч.л. люспи лют пипер",
        "1/2 чаша зехтин",
        "1/4 чаша червен винен оцет",
        "Сол и черен пипер на вкус",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
