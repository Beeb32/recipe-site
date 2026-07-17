import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "french-onion-soup",
      title: "French Onion Soup",
      description:
        "Sweet caramelized onions, deglazed with sherry, in a rich thyme-scented beef broth, topped with toasted bread and melted Gruyère.",
      imageEmoji: "🧅",
      cookTimeMinutes: 75,
      servings: 4,
      ingredients: [
        { text: "4 tbsp butter", ingredient: "butter", quantity: 4 },
        { text: "4 large onions, thinly sliced", ingredient: "onion", quantity: 4 },
        { text: "1 tsp sugar", ingredient: "sugar", quantity: 1 },
        { text: "Salt, for drawing out onion moisture", ingredient: "salt", quantity: null },
        { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
        { text: "2 tbsp flour", ingredient: "flour", quantity: 2 },
        { text: "1/4 cup dry sherry", ingredient: "sherry", quantity: 0.25 },
        { text: "6 cups beef broth", ingredient: "beef broth", quantity: 6 },
        { text: "2 sprigs thyme", ingredient: "thyme", quantity: null },
        { text: "1 bay leaf", ingredient: "bay leaf", quantity: 1 },
        { text: "4 slices baguette", ingredient: "baguette", quantity: 4 },
        { text: "1 cup shredded Gruyère cheese", ingredient: "gruyere cheese", quantity: 1 },
      ],
      steps: [
        "Melt butter in a large pot and add the sliced onions with sugar and a pinch of salt to draw out their moisture and speed caramelization.",
        "Cook over low heat, stirring occasionally, until deeply caramelized, about 45-50 minutes.",
        "Stir in the garlic and flour and cook for 2 minutes, then pour in the sherry, scraping up the browned bits from the bottom of the pot as it deglazes.",
        "Whisk in the beef broth with the thyme and bay leaf, and simmer for 15 minutes, seasoning to taste.",
        "Ladle into oven-safe bowls, top with toasted baguette and cheese, and broil until bubbly.",
      ],
      tags: ["dinner", "french"],
    },
    bg: {
      title: "Френска лучена супа",
      description:
        "Сладък карамелизиран лук, деглазиран с шери, в наситен телешки бульон с аромат на мащерка, поднесен с препечен хляб и разтопено грюйер сирене.",
      steps: [
        "Разтопете масло в голяма тенджера и добавете нарязания лук със захарта и щипка сол, за да изтеглите влагата и ускорите карамелизирането.",
        "Гответе на слаб огън, разбърквайки от време на време, докато лукът се карамелизира дълбоко, около 45-50 минути.",
        "Разбъркайте чесъна и брашното и гответе 2 минути, после налейте шерито, изстъргвайки запечените парченца от дъното на тенджерата, докато се деглазира.",
        "Разбъркайте телешкия бульон с мащерката и дафиновия лист и варете 15 минути, подправяйки на вкус.",
        "Сипете в купи, подходящи за фурна, добавете препечена багета и сирене отгоре и запечете на грил, докато сиренето заври.",
      ],
      ingredients: [
        "4 с.л. масло",
        "4 големи лука, нарязани на тънко",
        "1 ч.л. захар",
        "Сол, за изтегляне на влагата от лука",
        "2 скилидки чесън, ситно нарязани",
        "2 с.л. брашно",
        "1/4 чаша сухо шери",
        "6 чаши телешки бульон",
        "2 стръка мащерка",
        "1 дафинов лист",
        "4 филии багета",
        "1 чаша настъргано грюйер сирене",
      ],
    },
  },
  {
    en: {
      slug: "gazpacho",
      title: "Gazpacho",
      description:
        "A chilled Spanish soup of ripe tomatoes, cucumber, and peppers, blended with soaked stale bread - the traditional emulsifier that gives real gazpacho its smooth, creamy body.",
      imageEmoji: "🍅",
      cookTimeMinutes: 20,
      servings: 4,
      ingredients: [
        { text: "6 ripe tomatoes, chopped", ingredient: "tomato", quantity: 6 },
        { text: "1 cucumber, chopped", ingredient: "cucumber", quantity: 1 },
        { text: "1 red bell pepper, chopped", ingredient: "red pepper", quantity: 1 },
        { text: "1/4 onion", ingredient: "onion", quantity: 0.25 },
        { text: "2 cloves garlic", ingredient: "garlic", quantity: 2 },
        { text: "2 slices stale bread, crusts removed", ingredient: "bread", quantity: 2 },
        { text: "3 tbsp olive oil", ingredient: "olive oil", quantity: 3 },
        { text: "2 tbsp sherry vinegar", ingredient: "sherry vinegar", quantity: 2 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Soak the stale bread in a little water for a few minutes, then squeeze out the excess water.",
        "Combine the tomatoes, cucumber, red pepper, onion, garlic, and soaked bread in a blender.",
        "Blend until completely smooth, then stream in the olive oil and vinegar to emulsify.",
        "Season with salt and chill for at least 2 hours; serve cold, garnished with diced vegetables if desired.",
      ],
      tags: ["lunch", "vegan", "quick", "mediterranean"],
    },
    bg: {
      title: "Гаспачо",
      description:
        "Студена испанска супа от узрели домати, краставица и чушки, пасирана с накиснат стар хляб - традиционният емулгатор, който придава на истинското гаспачо гладкото му, кремообразно тяло.",
      steps: [
        "Накиснете стария хляб в малко вода за няколко минути, после изцедете излишната вода.",
        "Смесете доматите, краставицата, червената чушка, лука, чесъна и накиснатия хляб в блендер.",
        "Пасирайте до пълна гладкост, после наливайте зехтина и оцета, за да емулгирате.",
        "Подправете със сол и охладете поне 2 часа; сервирайте студено, гарнирано с нарязани зеленчуци по желание.",
      ],
      ingredients: [
        "6 узрели домата, нарязани",
        "1 краставица, нарязана",
        "1 червена чушка, нарязана",
        "1/4 лук",
        "2 скилидки чесън",
        "2 филии стар хляб, без коричка",
        "3 с.л. зехтин",
        "2 с.л. шери оцет",
        "Сол на вкус",
      ],
    },
  },
  {
    en: {
      slug: "cacio-e-pepe",
      title: "Cacio e Pepe",
      description: "A deceptively simple Roman pasta of just cheese, black pepper, and pasta water.",
      imageEmoji: "🧀",
      cookTimeMinutes: 20,
      servings: 4,
      ingredients: [
        { text: "1 lb spaghetti", ingredient: "spaghetti", quantity: 1 },
        { text: "2 cups finely grated Pecorino Romano (grated almost to powder)", ingredient: "pecorino", quantity: 2 },
        { text: "2 tsp coarsely ground black pepper", ingredient: "pepper", quantity: 2 },
      ],
      steps: [
        "Cook the spaghetti in salted boiling water, using less water than usual so it stays extra starchy; reserve 1 1/2 cups pasta water.",
        "Toast the black pepper in a dry skillet for 1 minute until fragrant.",
        "Add a splash of pasta water to the pepper, then toss in the drained pasta.",
        "Off the heat, add the Pecorino gradually, tossing and adding pasta water as needed until a creamy sauce forms.",
      ],
      tags: ["dinner", "italian", "quick", "vegetarian"],
    },
    bg: {
      title: "Качо е пепе",
      description: "Обманчиво проста римска паста само от сирене, черен пипер и вода от пастата.",
      steps: [
        "Сварете спагетите в подсолена вряла вода, използвайки по-малко вода от обичайното, за да остане по-скорбялена; запазете 1 1/2 чаши от водата.",
        "Препечете черния пипер в сух тиган за 1 минута до ароматизиране.",
        "Добавете малко вода от пастата към пипера, после разбъркайте с отцедената паста.",
        "Извън котлона добавяйте фино настъргания пекорино постепенно, разбърквайки и доливайки вода от пастата при нужда, докато се получи кремообразен сос.",
      ],
      ingredients: [
        "450 г спагети",
        "2 чаши фино настърган пекорино романо (почти на прах)",
        "2 ч.л. едро смлян черен пипер",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
