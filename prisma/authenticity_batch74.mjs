import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "grilled-cheese-sandwich",
      title: "Grilled Cheese Sandwich",
      description:
        "Buttery toasted bread with melty cheese, cooked low and slow with a butter-and-mayo combo spread on the outside - the mayo is what gives the crust its evenly golden, extra-crispy exterior, and low heat is what lets the cheese fully melt before the bread over-browns.",
      imageEmoji: "🥪",
      cookTimeMinutes: 10,
      servings: 1,
      ingredients: [
        { text: "2 slices bread", ingredient: "bread", quantity: 2 },
        { text: "2 slices cheddar cheese", ingredient: "cheddar cheese", quantity: 2 },
        { text: "1 tbsp butter, softened", ingredient: "butter", quantity: 1 },
        { text: "1 tbsp mayonnaise", ingredient: "mayonnaise", quantity: 1 },
      ],
      steps: [
        "Mix the softened butter and mayonnaise together, then spread over one side of each bread slice.",
        "Place cheese between the slices, buttered-mayo sides facing out.",
        "Cook in a skillet over medium-low heat, about 4-5 minutes per side, until deeply golden and the cheese is fully melted - low, slow heat is what lets the cheese melt through before the bread over-browns.",
        "Slice and serve warm.",
      ],
      tags: ["lunch", "quick", "vegetarian"],
    },
    bg: {
      title: "Сандвич с топено сирене",
      description:
        "Препечен хляб с масло и разтопено сирене, изпечен бавно на слаб огън с комбинация от масло и майонеза, намазана отвън - майонезата е това, което придава на коричката равномерно златисто, допълнително хрупкаво покритие, а слабият огън е това, което позволява на сиренето да се разтопи напълно, преди хлябът да прегори.",
      steps: [
        "Смесете омекналото масло и майонезата заедно, после намажете едната страна на всяка филия.",
        "Поставете сиренето между филиите, намазаните страни навън.",
        "Изпечете в тиган на среден до слаб огън, около 4-5 минути от всяка страна, докато стане дълбоко златисто и сиренето се разтопи напълно - слабият, бавен огън е това, което позволява на сиренето да се разтопи, преди хлябът да прегори.",
        "Нарежете и сервирайте топъл.",
      ],
      ingredients: [
        "2 филии хляб",
        "2 резена чедър сирене",
        "1 с.л. масло, омекнало",
        "1 с.л. майонеза",
      ],
    },
  },
  {
    en: {
      slug: "broccoli-cheddar-soup",
      title: "Broccoli Cheddar Soup",
      description:
        "A creamy, cheesy soup loaded with tender broccoli, thickened with a proper roux and finished with sharp cheddar stirred in off the heat - skipping the roux, or melting the cheese while the soup's still at a hard simmer, is what makes broccoli cheddar soup turn thin or grainy instead of smooth.",
      imageEmoji: "🥦",
      cookTimeMinutes: 35,
      servings: 6,
      ingredients: [
        { text: "4 cups broccoli florets", ingredient: "broccoli", quantity: 4 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "1/4 cup flour", ingredient: "flour", quantity: 0.25 },
        { text: "4 cups chicken broth", ingredient: "chicken broth", quantity: 4 },
        { text: "2 cups shredded sharp cheddar cheese", ingredient: "cheddar cheese", quantity: 2 },
        { text: "1 cup heavy cream", ingredient: "heavy cream", quantity: 1 },
        { text: "2 tbsp butter", ingredient: "butter", quantity: 2 },
      ],
      steps: [
        "Melt the butter and sauté the onion until softened.",
        "Sprinkle in the flour and cook for 1-2 minutes, whisking constantly, until lightly golden - this roux is what thickens the soup into a proper base instead of a thin broth.",
        "Add the broccoli and chicken broth, then simmer for 15 minutes until the broccoli is tender.",
        "Blend part of the soup until smooth, leaving some broccoli chunks for texture.",
        "Stir in the cream, then remove from heat and stir in the sharp cheddar until melted - adding the cheese off the heat is what keeps the soup smooth instead of turning grainy.",
      ],
      tags: ["dinner", "vegetarian"],
    },
    bg: {
      title: "Крем супа от броколи и чедър",
      description:
        "Кремообразна, сирена супа, пълна с крехки броколи, сгъстена с истинско ру и довършена с остър чедър, разбъркан извън котлона - пропускането на ру-то или разтапянето на сиренето, докато супата още къкри силно, е това, което прави супата тънка или на зърна, вместо кадифена.",
      steps: [
        "Разтопете маслото и запържете лука до омекване.",
        "Поръсете с брашно и гответе 1-2 минути, разбърквайки постоянно, докато леко позлатее - това ру е това, което сгъстява супата в истинска основа, вместо тънък бульон.",
        "Добавете броколите и пилешкия бульон, после варете 15 минути, докато броколите омекнат.",
        "Пасирайте част от супата до гладкост, оставяйки някои парченца броколи за текстура.",
        "Добавете сметаната, после свалете от котлона и разбъркайте острия чедър до разтапяне - добавянето на сиренето извън котлона е това, което пази супата гладка, вместо да стане на зърна.",
      ],
      ingredients: [
        "4 чаши съцветия броколи",
        "1 лук, нарязан на кубчета",
        "1/4 чаша брашно",
        "4 чаши пилешки бульон",
        "2 чаши настърган остър чедър",
        "1 чаша течна сметана",
        "2 с.л. масло",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
