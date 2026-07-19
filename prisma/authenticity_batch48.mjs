import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "chili-con-carne",
      title: "Chili Con Carne",
      description:
        "Cubed beef simmered low and slow in a paste of toasted, rehydrated dried chiles with garlic and cumin, thickened with masa harina - authentic Texas \"bowl of red\" uses no beans at all and dried chiles instead of chili powder.",
      imageEmoji: "🌶️",
      cookTimeMinutes: 240,
      servings: 6,
      ingredients: [
        { text: "2 lb beef chuck, cubed", ingredient: "beef chuck", quantity: 2 },
        { text: "4 dried ancho chiles, stemmed and seeded", ingredient: "ancho chile", quantity: 4 },
        { text: "2 dried guajillo chiles, stemmed and seeded", ingredient: "guajillo chiles", quantity: 2 },
        { text: "1 dried chile de arbol (optional, for heat)", ingredient: "chile de arbol", quantity: 1 },
        { text: "4 cups beef broth (divided)", ingredient: "beef broth", quantity: 4 },
        { text: "2 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 2 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "4 cloves garlic, minced", ingredient: "garlic", quantity: 4 },
        { text: "2 tsp cumin", ingredient: "cumin", quantity: 2 },
        { text: "1 tsp dried Mexican oregano", ingredient: "oregano", quantity: 1 },
        { text: "2 tbsp masa harina", ingredient: "masa harina", quantity: 2 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "2 cans kidney beans, drained (optional - not part of authentic Texas chili, but common elsewhere)", ingredient: "kidney beans", quantity: 2 },
      ],
      steps: [
        "Toast the dried chiles in a dry skillet for about 30 seconds per side until fragrant, then soak in 2 cups of the hot beef broth for 15-20 minutes until softened.",
        "Blend the softened chiles with their soaking liquid, the garlic, cumin, and oregano into a smooth paste.",
        "Heat the oil in a large pot and brown the beef chuck in batches; set aside.",
        "Sauté the onion in the same pot until softened, then stir in the chile paste and cook for 2-3 minutes until it darkens slightly - this \"seasoning\" step removes the raw chile taste.",
        "Return the beef to the pot with the remaining beef broth, then cover and simmer for 3-4 hours until the beef is fall-apart tender, stirring occasionally.",
        "Whisk the masa harina with a cup of the hot broth from the pot, then stir it back in to thicken the chili.",
        "Season with salt. Stir in the beans now if using, though authentic Texas \"bowl of red\" is served without them.",
      ],
      tags: ["dinner", "mexican"],
    },
    bg: {
      title: "Чили кон карне",
      description:
        "Нарязано на кубчета телешко месо, задушено бавно в паста от препечени, накиснати сушени люти чушки с чесън и кимион, сгъстена с царевично брашно маса - истинското тексаско \"чили на червено\" не съдържа никакъв боб и използва сушени чушки вместо лютив пипер на прах.",
      steps: [
        "Препечете сушените чушки в сух тиган по около 30 секунди от всяка страна до ароматизиране, после ги накиснете в 2 чаши от горещия телешки бульон за 15-20 минути до омекване.",
        "Пасирайте омекналите чушки с течността, в която са накиснати, чесъна, кимиона и оригана до гладка паста.",
        "Загрейте олиото в голяма тенджера и запържете телешкото на порции; отделете настрани.",
        "Запържете лука в същата тенджера до омекване, после разбъркайте пастата от чушки и гответе 2-3 минути, докато леко потъмнее - тази стъпка \"подправяне\" премахва суровия вкус на чушките.",
        "Върнете телешкото в тенджерата с останалия бульон, после покрийте и варете 3-4 часа, докато месото стане крехко и се разпада, разбърквайки от време на време.",
        "Разбийте царевичното брашно маса с чаша от горещия бульон от тенджерата, после го разбъркайте обратно, за да сгъстите чилито.",
        "Подправете със сол. Разбъркайте боба сега, ако използвате, макар че истинското тексаско \"чили на червено\" се сервира без него.",
      ],
      ingredients: [
        "900 г телешко месо (плешка), нарязано на кубчета",
        "4 сушени люти чушки анчо, без дръжки и семки",
        "2 сушени люти чушки гуахийо, без дръжки и семки",
        "1 сушена чушка чиле де арбол (по желание, за лютивина)",
        "4 чаши телешки бульон (разделен)",
        "2 с.л. олио",
        "1 лук, нарязан на кубчета",
        "4 скилидки чесън, ситно нарязани",
        "2 ч.л. кимион",
        "1 ч.л. сух мексикански риган",
        "2 с.л. царевично брашно маса",
        "Сол на вкус",
        "2 консерви червен боб, отцеден (по желание - не е част от истинското тексаско чили, но е обичаен другаде)",
      ],
    },
  },
  {
    en: {
      slug: "chicken-sausage-jambalaya",
      title: "Chicken and Sausage Jambalaya",
      description:
        "Rice built on the Creole holy trinity of onion, celery, and bell pepper, simmered with garlic, thyme, and bay leaf alongside chicken and sausage - celery and garlic were missing entirely before, though they're core to the trinity real jambalaya is built on.",
      imageEmoji: "🍚",
      cookTimeMinutes: 60,
      servings: 6,
      ingredients: [
        { text: "2 chicken breasts, cubed", ingredient: "chicken breast", quantity: 2 },
        { text: "1 lb andouille sausage, sliced", ingredient: "sausage", quantity: 1 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "2 celery stalks, diced", ingredient: "celery", quantity: 2 },
        { text: "1 red bell pepper, diced", ingredient: "red pepper", quantity: 1 },
        { text: "4 cloves garlic, minced", ingredient: "garlic", quantity: 4 },
        { text: "2 cups rice", ingredient: "rice", quantity: 2 },
        { text: "1 can diced tomatoes", ingredient: "tomato", quantity: 1 },
        { text: "3 cups chicken broth", ingredient: "chicken broth", quantity: 3 },
        { text: "2 tsp Cajun seasoning", ingredient: "cajun seasoning", quantity: 2 },
        { text: "1 tsp fresh thyme", ingredient: "thyme", quantity: 1 },
        { text: "1 bay leaf", ingredient: "bay leaf", quantity: 1 },
      ],
      steps: [
        "Brown the chicken and sausage in a large pot, then set aside.",
        "Sauté the onion, celery, and red pepper (the \"holy trinity\") in the same pot until softened, about 8 minutes - don't rush this, or the vegetables won't develop their sweetness.",
        "Add the garlic and cook for 30 seconds until fragrant.",
        "Stir in the rice, Cajun seasoning, thyme, and bay leaf, and toast for 1 minute until fragrant.",
        "Add the diced tomatoes and chicken broth.",
        "Return the chicken and sausage to the pot, then simmer covered for 25 minutes until the rice is tender.",
        "Discard the bay leaf before serving.",
      ],
      tags: ["dinner"],
    },
    bg: {
      title: "Джамбалая с пиле и наденица",
      description:
        "Ориз, изграден върху креолската основа от лук, целина и чушка, задушен с чесън, мащерка и дафинов лист заедно с пиле и наденица - целината и чесънът напълно липсваха преди, макар да са основата, върху която е изградена истинската джамбалая.",
      steps: [
        "Запържете пилето и наденицата в голяма тенджера, после отделете настрани.",
        "Запържете лука, целината и червената чушка (\"светата троица\") в същата тенджера до омекване, около 8 минути - не бързайте, иначе зеленчуците няма да развият сладостта си.",
        "Добавете чесъна и гответе 30 секунди до ароматизиране.",
        "Разбъркайте ориза, каджунската подправка, мащерката и дафиновия лист, и препечете 1 минута до ароматизиране.",
        "Добавете нарязаните домати и пилешкия бульон.",
        "Върнете пилето и наденицата в тенджерата, после варете покрито 25 минути, докато оризът омекне.",
        "Изхвърлете дафиновия лист преди сервиране.",
      ],
      ingredients: [
        "2 пилешки гърди, нарязани на кубчета",
        "450 г пикантна наденица, нарязана на резени",
        "1 лук, нарязан на кубчета",
        "2 стъбла целина, нарязани на кубчета",
        "1 червена чушка, нарязана на кубчета",
        "4 скилидки чесън, ситно нарязани",
        "2 чаши ориз",
        "1 консерва нарязани домати",
        "3 чаши пилешки бульон",
        "2 ч.л. каджунска подправка",
        "1 ч.л. прясна мащерка",
        "1 дафинов лист",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
