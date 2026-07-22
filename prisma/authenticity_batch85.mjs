import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "angel-food-cake",
      title: "Angel Food Cake",
      description:
        "A light, airy cake made from whipped room-temperature egg whites, baked in an ungreased tube pan and cooled upside down the moment it comes out of the oven - cooling it upright would collapse the cake under its own weight, which is what most quick versions forget.",
      imageEmoji: "🍰",
      cookTimeMinutes: 55,
      servings: 10,
      ingredients: [
        { text: "1 cup flour", ingredient: "flour", quantity: 1 },
        { text: "1 1/2 cups sugar", ingredient: "sugar", quantity: 1.5 },
        { text: "12 egg whites, room temperature", ingredient: "egg whites", quantity: 12 },
        { text: "1 tsp cream of tartar", ingredient: "cream of tartar", quantity: 1 },
        { text: "1 tsp vanilla extract", ingredient: "vanilla extract", quantity: 1 },
      ],
      steps: [
        "Preheat oven to 350°F.",
        "Beat the room-temperature egg whites with cream of tartar until soft peaks form, then gradually add the sugar and vanilla, beating to stiff peaks.",
        "Sift the flour over the egg whites in small additions, gently folding after each - folding gently in stages is what keeps the batter from deflating.",
        "Pour into an ungreased tube pan and bake for 35-40 minutes until golden and springy.",
        "Immediately invert the pan onto a cooling rack and let cool completely upside down before removing - cooling it upright would collapse the cake under its own weight.",
      ],
      tags: ["dessert", "vegetarian", "baking"],
    },
    bg: {
      title: "Ангелска торта",
      description:
        "Лека, въздушна торта от разбити белтъци на стайна температура, изпечена в ненамазнена тръбна форма и охладена обърната надолу веднага щом излезе от фурната - охлаждането ѝ изправена би я срутило под собственото ѝ тегло, нещо, което повечето бързи версии забравят.",
      steps: [
        "Загрейте фурната на 180°C.",
        "Разбийте белтъците на стайна температура с винен камък до образуване на меки върхове, после постепенно добавете захарта и ванилията, разбивайки до твърди върхове.",
        "Пресейте брашното върху белтъците на малки порции, внимателно сгъвайки след всяка - внимателното сгъване на етапи е това, което пази тестото да не спадне.",
        "Изсипете в ненамазнена тръбна форма и печете 35-40 минути до златисто и пружиниращо.",
        "Веднага обърнете формата върху решетка за охлаждане и оставете да изстине напълно обърната, преди да я извадите - охлаждането ѝ изправена би срутило тортата под собственото ѝ тегло.",
      ],
      ingredients: [
        "1 чаша брашно",
        "1 1/2 чаши захар",
        "12 белтъка, на стайна температура",
        "1 ч.л. винен камък",
        "1 ч.л. ванилова есенция",
      ],
    },
  },
  {
    en: {
      slug: "sloppy-joes",
      title: "Sloppy Joes",
      description:
        "Ground beef simmered with bell pepper and garlic in a tangy tomato sauce built from ketchup, tomato sauce, mustard, and Worcestershire, piled onto soft buns - the mustard and aromatics are what round out the flavor beyond just ketchup and sugar, which is where most bare-bones versions stop.",
      imageEmoji: "🍔",
      cookTimeMinutes: 30,
      servings: 4,
      ingredients: [
        { text: "1 lb ground beef", ingredient: "ground beef", quantity: 1 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "1 green bell pepper, diced", ingredient: "green bell pepper", quantity: 1 },
        { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
        { text: "1 cup ketchup", ingredient: "ketchup", quantity: 1 },
        { text: "1/2 cup tomato sauce", ingredient: "tomato sauce", quantity: 0.5 },
        { text: "1 tbsp Worcestershire sauce", ingredient: "worcestershire sauce", quantity: 1 },
        { text: "1 tbsp brown sugar", ingredient: "brown sugar", quantity: 1 },
        { text: "1 tsp mustard", ingredient: "mustard", quantity: 1 },
        { text: "4 hamburger buns", ingredient: "hamburger buns", quantity: 4 },
      ],
      steps: [
        "Brown the ground beef with the onion and bell pepper in a skillet, then drain any excess grease.",
        "Add the garlic and cook for 1 minute.",
        "Stir in the ketchup, tomato sauce, Worcestershire sauce, brown sugar, and mustard.",
        "Simmer for 10 minutes, stirring occasionally, until thickened.",
        "Spoon onto hamburger buns and serve.",
      ],
      tags: ["dinner", "quick"],
    },
    bg: {
      title: "Слопи Джо",
      description:
        "Телешка кайма, къкреща с чушка и чесън в кисело-сладък доматен сос от кетчуп, доматен сос, синап и сос Уорчестър, натрупана върху меки хлебчета - синапът и подправките са това, което закръгля вкуса отвъд просто кетчуп и захар, където повечето елементарни версии спират.",
      steps: [
        "Запържете каймата с лука и чушката в тиган, после отцедете излишната мазнина.",
        "Добавете чесъна и гответе 1 минута.",
        "Добавете кетчупа, доматения сос, соса Уорчестър, кафявата захар и синапа.",
        "Варете 10 минути, разбърквайки от време на време, до сгъстяване.",
        "Сложете върху хлебчета и сервирайте.",
      ],
      ingredients: [
        "450 г кайма от телешко месо",
        "1 лук, нарязан на кубчета",
        "1 зелена чушка, нарязана на кубчета",
        "2 скилидки чесън, ситно нарязани",
        "1 чаша кетчуп",
        "1/2 чаша доматен сос",
        "1 с.л. сос Уорчестър",
        "1 с.л. кафява захар",
        "1 ч.л. синап",
        "4 хлебчета за бургер",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
