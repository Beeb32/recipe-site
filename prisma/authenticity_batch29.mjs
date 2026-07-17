import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "papaya-salad",
      title: "Papaya Salad",
      description:
        "Green papaya pounded in a mortar and pestle with garlic, chilies, and long beans, then dressed with fish sauce, lime, and palm sugar - the pounding technique, not just tossing, is what defines real som tam.",
      imageEmoji: "🥗",
      cookTimeMinutes: 20,
      servings: 4,
      ingredients: [
        { text: "4 cups shredded green papaya", ingredient: "green papaya", quantity: 4 },
        { text: "2-3 cloves garlic", ingredient: "garlic", quantity: 2 },
        { text: "1-3 Thai chilies", ingredient: "thai chilies", quantity: 1 },
        { text: "1/2 cup yardlong beans (or green beans), cut into 1-inch pieces", ingredient: "long beans", quantity: 0.5 },
        { text: "2 tomatoes, sliced", ingredient: "tomato", quantity: 2 },
        { text: "2 tbsp dried shrimp (optional)", ingredient: "dried shrimp", quantity: 2 },
        { text: "1/4 cup roasted peanuts, crushed", ingredient: "peanuts", quantity: 0.25 },
        { text: "2 tbsp fish sauce", ingredient: "fish sauce", quantity: 2 },
        { text: "3 tbsp lime juice", ingredient: "lime juice", quantity: 3 },
        { text: "1 tbsp palm sugar (or brown sugar)", ingredient: "palm sugar", quantity: 1 },
      ],
      steps: [
        "Pound the garlic and chilies in a mortar and pestle until broken down, then add the palm sugar and pound until dissolved into a paste.",
        "Add the long beans and pound lightly just until bruised, then add the dried shrimp and half the peanuts and pound a few times to break them up.",
        "Add the fish sauce and lime juice, then add the shredded papaya and tomatoes.",
        "Pound and toss with a spoon, turning the mixture from the bottom up rather than pounding straight down, to bruise the papaya slightly while keeping it crisp.",
        "Top with the remaining crushed peanuts before serving.",
      ],
      tags: ["lunch", "asian", "quick", "salad"],
    },
    bg: {
      title: "Салата от папая",
      description:
        "Зелена папая, чукана в хаван с чушки и чесън, дълги зелени зърна, после подправена с рибен сос, лайм и палмова захар - чуканата техника, а не само разбъркването, е това, което определя истинското сом там.",
      steps: [
        "Счукайте чесъна и лютите чушки в хаван, докато се разбият, после добавете палмовата захар и счукайте до разтваряне в паста.",
        "Добавете дългите зърна и счукайте леко само докато се натъртят, после добавете сушените скариди и половината фъстъци и счукайте няколко пъти, за да ги разбиете.",
        "Добавете рибния сос и лаймовия сок, после добавете настърганата папая и доматите.",
        "Чукайте и разбърквайте с лъжица, обръщайки сместа от дъното нагоре, вместо да чукате направо надолу, за да натъртите леко папаята, докато остане хрупкава.",
        "Отгоре поръсете с останалите натрошени фъстъци преди сервиране.",
      ],
      ingredients: [
        "4 чаши настъргана зелена папая",
        "2-3 скилидки чесън",
        "1-3 тайландски люти чушки",
        "1/2 чаша дълги зелени зърна (или зелен боб), нарязани на парчета от 2-3 см",
        "2 домата, нарязани на резени",
        "2 с.л. сушени скариди (по желание)",
        "1/4 чаша печени фъстъци, натрошени",
        "2 с.л. рибен сос",
        "3 с.л. лаймов сок",
        "1 с.л. палмова захар (или кафява захар)",
      ],
    },
  },
  {
    en: {
      slug: "thai-peanut-noodles",
      title: "Thai Peanut Noodles",
      description:
        "Rice noodles tossed in a peanut sauce built on garlic, ginger, and coconut milk - the aromatics and coconut milk are what separate real Thai peanut sauce from peanut butter thinned with soy sauce.",
      imageEmoji: "🍜",
      cookTimeMinutes: 25,
      servings: 4,
      ingredients: [
        { text: "12 oz rice noodles", ingredient: "rice noodles", quantity: 12 },
        { text: "1 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 1 },
        { text: "3 cloves garlic, minced", ingredient: "garlic", quantity: 3 },
        { text: "1 tbsp grated ginger", ingredient: "ginger", quantity: 1 },
        { text: "1/2 cup peanut butter", ingredient: "peanut butter", quantity: 0.5 },
        { text: "1/2 cup coconut milk", ingredient: "coconut milk", quantity: 0.5 },
        { text: "3 tbsp soy sauce (or fish sauce for a more traditional, non-vegetarian umami)", ingredient: "soy sauce", quantity: 3 },
        { text: "2 tbsp lime juice", ingredient: "lime juice", quantity: 2 },
        { text: "1 tbsp brown sugar", ingredient: "brown sugar", quantity: 1 },
        { text: "1/2 tsp red chili flakes (or Thai chili paste)", ingredient: "chili flakes", quantity: 0.5 },
        { text: "1 carrot, julienned", ingredient: "carrot", quantity: 1 },
        { text: "2 green onions, sliced", ingredient: "green onion", quantity: 2 },
        { text: "1/4 cup chopped peanuts, for garnish", ingredient: "peanuts", quantity: 0.25 },
      ],
      steps: [
        "Cook the rice noodles according to package instructions, then drain.",
        "Heat the oil in a pan and sauté the garlic and ginger until fragrant, about 30 seconds.",
        "Whisk in the peanut butter, coconut milk, soy sauce, lime juice, brown sugar, and chili flakes over low heat until smooth and slightly thickened, about 5 minutes.",
        "Add the hot, freshly drained noodles directly to the sauce along with the carrot, tossing while still warm so the sauce coats evenly.",
        "Top with green onions and chopped peanuts before serving.",
      ],
      tags: ["dinner", "asian", "quick", "vegetarian"],
    },
    bg: {
      title: "Тайландска юфка с фъстъчен сос",
      description:
        "Оризова юфка, разбъркана във фъстъчен сос, изграден върху чесън, джинджифил и кокосово мляко - ароматите и кокосовото мляко са това, което отличава истинския тайландски фъстъчен сос от фъстъчено масло, разредено със соев сос.",
      steps: [
        "Сварете оризовата юфка според инструкциите на опаковката, после отцедете.",
        "Загрейте олиото в тиган и запържете чесъна и джинджифила до ароматизиране, около 30 секунди.",
        "Разбъркайте фъстъченото масло, кокосовото мляко, соевия сос, лаймовия сок, кафявата захар и люспите лют пипер на слаб огън до гладкост и леко сгъстяване, около 5 минути.",
        "Добавете горещата, току-що отцедена юфка директно в соса заедно с моркова, разбърквайки, докато е още топла, за да покрие соса равномерно.",
        "Отгоре добавете пресен лук и натрошени фъстъци преди сервиране.",
      ],
      ingredients: [
        "340 г оризова юфка",
        "1 с.л. олио",
        "3 скилидки чесън, ситно нарязани",
        "1 с.л. настърган джинджифил",
        "1/2 чаша фъстъчено масло",
        "1/2 чаша кокосово мляко",
        "3 с.л. соев сос (или рибен сос за по-традиционен, невегетариански вкус)",
        "2 с.л. лаймов сок",
        "1 с.л. кафява захар",
        "1/2 ч.л. люспи лют пипер (или тайландска чили паста)",
        "1 морков, нарязан на тънки ивици",
        "2 стръка пресен лук, нарязани",
        "1/4 чаша натрошени фъстъци, за гарниране",
      ],
    },
  },
  {
    en: {
      slug: "vietnamese-caramel-pork",
      title: "Vietnamese Caramel Pork",
      description:
        "Pork belly and hard-boiled eggs braised in a dark sugar caramel with fish sauce, shallots, and coconut water until deeply savory-sweet and glossy - the eggs are as essential as the pork in real thit kho, and the caramel is built from scratch, not just melted sugar.",
      imageEmoji: "🍖",
      cookTimeMinutes: 120,
      servings: 4,
      ingredients: [
        { text: "1 1/2 lb pork belly (or shoulder), cubed", ingredient: "pork belly", quantity: 1.5 },
        { text: "4 eggs, hard-boiled and peeled", ingredient: "eggs", quantity: 4 },
        { text: "1/3 cup sugar", ingredient: "sugar", quantity: 0.33 },
        { text: "1/4 cup water (for the caramel)", ingredient: "water", quantity: 0.25 },
        { text: "1/4 cup fish sauce", ingredient: "fish sauce", quantity: 0.25 },
        { text: "2 shallots, minced", ingredient: "shallot", quantity: 2 },
        { text: "3 cloves garlic, minced", ingredient: "garlic", quantity: 3 },
        { text: "1 tbsp grated ginger", ingredient: "ginger", quantity: 1 },
        { text: "1 cup coconut water", ingredient: "coconut water", quantity: 1 },
        { text: "1/2 tsp black pepper", ingredient: "pepper", quantity: 0.5 },
      ],
      steps: [
        "Parboil the pork for 2-3 minutes until you see impurities rise to the surface, then drain and rinse.",
        "Melt the sugar with the water in a pot over medium heat, swirling occasionally, until it turns a deep amber caramel - watch it closely, as it can burn quickly once it starts to color.",
        "Carefully add the pork, shallots, garlic, and ginger to the caramel (it will bubble vigorously) and stir to coat, cooking for 2-3 minutes until the pork is lightly browned.",
        "Pour in the fish sauce, coconut water, and black pepper, then add the hard-boiled eggs.",
        "Simmer uncovered for 1.5 hours, stirring occasionally and skimming any foam, until the pork is tender, the eggs have absorbed the sauce, and the liquid has reduced to a glossy glaze.",
      ],
      tags: ["dinner", "asian"],
    },
    bg: {
      title: "Виетнамско карамелено свинско",
      description:
        "Свинска гърда и твърдо сварени яйца, задушени в тъмен захарен карамел с рибен сос, шалот и кокосова вода до дълбоко наситен вкус и блясък - яйцата са толкова съществени, колкото и месото в истинското тхит кхо, а карамелът се прави от нулата, не просто разтопена захар.",
      steps: [
        "Бланширайте свинското за 2-3 минути, докато видите примесите да изплуват на повърхността, после отцедете и изплакнете.",
        "Разтопете захарта с водата в тенджера на среден огън, разклащайки от време на време, докато стане тъмно кехлибарена - следете внимателно, защото може бързо да загори, щом започне да потъмнява.",
        "Внимателно добавете свинското, шалота, чесъна и джинджифила в карамела (ще заври бурно) и разбъркайте за покриване, готвейки 2-3 минути, докато свинското леко покафенее.",
        "Налейте рибния сос, кокосовата вода и черния пипер, после добавете твърдо сварените яйца.",
        "Варете без капак 1.5 часа, разбърквайки от време на време и събирайки пяната, докато свинското омекне, яйцата попият соса, а течността се редуцира до лъскава глазура.",
      ],
      ingredients: [
        "700 г свинска гърда (или плешка), нарязана на кубчета",
        "4 яйца, твърдо сварени и обелени",
        "1/3 чаша захар",
        "1/4 чаша вода (за карамела)",
        "1/4 чаша рибен сос",
        "2 шалота, ситно нарязани",
        "3 скилидки чесън, ситно нарязани",
        "1 с.л. настърган джинджифил",
        "1 чаша кокосова вода",
        "1/2 ч.л. черен пипер",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
