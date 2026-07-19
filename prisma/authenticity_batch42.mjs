import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "philly-cheesesteak",
      title: "Philly Cheesesteak",
      description:
        "Ribeye frozen briefly then shaved paper-thin, chopped into small pieces with the spatula as it sears - that chopping technique, not just thin slicing, is what gives a real cheesesteak its texture - piled with melted cheese into a toasted roll.",
      imageEmoji: "🥪",
      cookTimeMinutes: 30,
      servings: 4,
      ingredients: [
        { text: "1 1/2 lb ribeye steak, partially frozen", ingredient: "ribeye steak", quantity: 1.5 },
        { text: "1 onion, sliced", ingredient: "onion", quantity: 1 },
        { text: "1 green bell pepper, sliced (optional - not part of the original Philly recipe, but common at many stands)", ingredient: "green pepper", quantity: 1 },
        { text: "8 slices provolone cheese (or Cheez Whiz)", ingredient: "provolone cheese", quantity: 8 },
        { text: "4 hoagie rolls", ingredient: "hoagie rolls", quantity: 4 },
        { text: "2 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 2 },
        { text: "Salt and pepper to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Slice the partially frozen ribeye paper-thin against the grain - freezing it for 30-45 minutes first makes this much easier.",
        "Heat the oil in a skillet and sauté the onion (and green pepper, if using) until softened and lightly caramelized; set aside.",
        "Cook the shaved steak in the same skillet, chopping it into smaller pieces with a spatula as it sears - this chopping motion, not just thin slicing, is what gives a real Philly cheesesteak its texture.",
        "Return the onion (and pepper) to the pan with the steak and season with salt and pepper, then top with provolone until melted (or smear warm Cheez Whiz alongside the meat rather than over it).",
        "Pile the mixture into toasted hoagie rolls.",
      ],
      tags: ["dinner", "quick"],
    },
    bg: {
      title: "Фили Чийзстейк",
      description:
        "Рибай, замразен за кратко и после нарязан хартиено тънко, накълцан на малки парченца с лопатката, докато се запържва - тази техника на кълцане, а не просто тънко нарязване, е това, което придава на истинския чийзстейк характерната му текстура - натрупан с разтопено сирене в препечено хлебче.",
      steps: [
        "Нарежете полузамразения рибай хартиено тънко през влакната - замразяването му за 30-45 минути преди това улеснява значително процеса.",
        "Загрейте олиото в тиган и запържете лука (и зелената чушка, ако използвате) до омекване и леко карамелизиране; отделете настрани.",
        "Изпечете нарязания на тънко стек в същия тиган, накълцвайки го на по-малки парченца с лопатката, докато се запържва - това кълцащо движение, не просто тънкото нарязване, е това, което придава на истинския фили чийзстейк характерната му текстура.",
        "Върнете лука (и чушката) в тигана със стека и подправете със сол и черен пипер, после добавете провалоне отгоре до разтапяне (или намажете топъл сос чийз уиз до месото, а не отгоре).",
        "Натрупайте сместа в препечени хлебчета.",
      ],
      ingredients: [
        "700 г рибай стек, полузамразен",
        "1 лук, нарязан на резени",
        "1 зелена чушка, нарязана на резени (по желание - не е част от оригиналната филаделфийска рецепта, но е обичайна в много павилиони)",
        "8 резена сирене провалоне (или сос чийз уиз)",
        "4 дълги хлебчета",
        "2 с.л. олио",
        "Сол и черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "new-england-clam-chowder",
      title: "New England Clam Chowder",
      description:
        "Clams, potatoes, and bacon in a chowder built on a proper roux with celery, thyme, and bay leaf simmered into the base - celery and the herbs are what most simplified versions leave out, and the chowder should only ever simmer, never boil, once the cream goes in.",
      imageEmoji: "🥣",
      cookTimeMinutes: 55,
      servings: 6,
      ingredients: [
        { text: "4 slices bacon, diced", ingredient: "bacon", quantity: 4 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "2 celery stalks, diced", ingredient: "celery", quantity: 2 },
        { text: "2 tbsp flour", ingredient: "flour", quantity: 2 },
        { text: "3 potatoes, cubed", ingredient: "potato", quantity: 3 },
        { text: "2 cans chopped clams with juice", ingredient: "clams", quantity: 2 },
        { text: "1 cup water (or clam juice)", ingredient: "water", quantity: 1 },
        { text: "1 tsp fresh thyme (or 1/2 tsp dried)", ingredient: "thyme", quantity: 1 },
        { text: "1 bay leaf", ingredient: "bay leaf", quantity: 1 },
        { text: "1 cup heavy cream", ingredient: "heavy cream", quantity: 1 },
        { text: "2 cups milk", ingredient: "milk", quantity: 2 },
        { text: "Salt and pepper to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Cook the bacon in a large pot until crisp, then remove and set aside.",
        "Sauté the onion and celery in the bacon fat until softened, about 8 minutes, then sprinkle in the flour and stir constantly for 1 minute.",
        "Slowly stir in the clam juice from the cans and the water, a little at a time, whisking until smooth, then add the potatoes, thyme, and bay leaf.",
        "Simmer for 20 minutes until the potatoes are tender.",
        "Discard the bay leaf, then stir in the clams, cream, and milk, warming through gently without letting it boil - boiling once the dairy is in will break the chowder.",
        "Season with salt and pepper and serve topped with the crispy bacon.",
      ],
      tags: ["dinner"],
    },
    bg: {
      title: "Крем супа с миди Ню Ингланд",
      description:
        "Миди, картофи и бекон в крем супа, изградена върху истинска запръжка със селъри, мащерка и дафинов лист, сварени в основата - селъри и подправките са това, което повечето опростени версии пропускат, а супата трябва само да къкри, никога да не завира, след като сметаната влезе.",
      steps: [
        "Изпечете бекона в голяма тенджера до хрупкавост, после извадете и отделете настрани.",
        "Запържете лука и селърито в мазнината от бекона до омекване, около 8 минути, после поръсете с брашното и разбърквайте непрекъснато 1 минута.",
        "Бавно добавяйте сока от мидите от консервите и водата, на малки количества, разбърквайки до гладкост, после добавете картофите, мащерката и дафиновия лист.",
        "Варете 20 минути, докато картофите омекнат.",
        "Изхвърлете дафиновия лист, после добавете мидите, сметаната и млякото, затопляйки внимателно, без да завира - завирането след като млечните продукти влязат ще развали супата.",
        "Подправете със сол и черен пипер и сервирайте с хрупкавия бекон отгоре.",
      ],
      ingredients: [
        "4 резена бекон, нарязани на кубчета",
        "1 лук, нарязан на кубчета",
        "2 стъбла селъри, нарязани на кубчета",
        "2 с.л. брашно",
        "3 картофа, нарязани на кубчета",
        "2 консерви нарязани миди със сок",
        "1 чаша вода (или сок от миди)",
        "1 ч.л. прясна мащерка (или 1/2 ч.л. суха)",
        "1 дафинов лист",
        "1 чаша сметана за готвене",
        "2 чаши мляко",
        "Сол и черен пипер на вкус",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
