import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "corn-chowder",
      title: "Corn Chowder",
      description:
        "A creamy, hearty chowder full of sweet corn and potatoes, simmered with the scraped corn cobs for extra corn flavor - infusing the broth with the cobs is the step most quick versions skip, and it's what gives real corn chowder its deeper, more concentrated corn flavor.",
      imageEmoji: "🌽",
      cookTimeMinutes: 40,
      servings: 6,
      ingredients: [
        { text: "4 cups corn kernels, cobs reserved if using fresh corn", ingredient: "corn", quantity: 4 },
        { text: "3 potatoes, cubed", ingredient: "potato", quantity: 3 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "4 cups vegetable broth", ingredient: "vegetable broth", quantity: 4 },
        { text: "1 cup heavy cream", ingredient: "heavy cream", quantity: 1 },
        { text: "2 tbsp butter", ingredient: "butter", quantity: 2 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Melt the butter and sauté the onion until softened.",
        "Add the potatoes, corn, the reserved cobs if using fresh corn, and vegetable broth, then simmer until the potatoes are tender, about 20 minutes - the cobs release starch and flavor as they simmer.",
        "Remove the cobs, then mash some of the mixture lightly to thicken the chowder.",
        "Stir in the cream, season with salt, and simmer for 5 more minutes.",
      ],
      tags: ["dinner", "vegetarian"],
    },
    bg: {
      title: "Крем супа от царевица",
      description:
        "Кремообразна, ситна супа, пълна със сладка царевица и картофи, къкреща с изстърганите кочани царевица за допълнителен вкус - оставянето на кочаните в бульона е стъпката, която повечето бързи версии пропускат, и е това, което придава на истинската супа от царевица по-дълбокия ѝ, концентриран вкус.",
      steps: [
        "Разтопете маслото и запържете лука до омекване.",
        "Добавете картофите, царевицата, запазените кочани (ако използвате прясна царевица) и зеленчуковия бульон, после варете, докато картофите омекнат, около 20 минути - кочаните отделят скорбяла и вкус, докато къкрят.",
        "Извадете кочаните, после намачкайте леко част от сместа, за да сгъстите супата.",
        "Добавете сметаната, подправете със сол и варете още 5 минути.",
      ],
      ingredients: [
        "4 чаши царевични зърна, запазени кочани, ако използвате прясна царевица",
        "3 картофа, нарязани на кубчета",
        "1 лук, нарязан на кубчета",
        "4 чаши зеленчуков бульон",
        "1 чаша сметана за готвене",
        "2 с.л. масло",
        "Сол на вкус",
      ],
    },
  },
  {
    en: {
      slug: "french-toast-sticks",
      title: "French Toast Sticks",
      description:
        "Golden, cinnamon-dusted French toast cut into dippable sticks, made from day-old thick bread dipped in a custard thickened with a little flour - the flour is what makes the coating cling and crisp instead of turning soggy, a trick most kid-friendly versions skip.",
      imageEmoji: "🍞",
      cookTimeMinutes: 20,
      servings: 4,
      ingredients: [
        { text: "6 slices day-old thick bread, cut into strips", ingredient: "bread", quantity: 6 },
        { text: "3 eggs", ingredient: "eggs", quantity: 3 },
        { text: "1/2 cup milk", ingredient: "milk", quantity: 0.5 },
        { text: "2 tbsp flour", ingredient: "flour", quantity: 2 },
        { text: "1 tsp cinnamon", ingredient: "cinnamon", quantity: 1 },
        { text: "1 tsp vanilla extract", ingredient: "vanilla extract", quantity: 1 },
        { text: "2 tbsp butter for cooking", ingredient: "butter", quantity: 2 },
      ],
      steps: [
        "Whisk together the eggs, milk, flour, cinnamon, and vanilla in a shallow dish until smooth - the flour thickens the custard so it clings to the bread and crisps instead of turning soggy.",
        "Dip each bread strip into the mixture, coating both sides.",
        "Melt butter in a skillet and cook the strips for 2-3 minutes per side until golden and crisp on all sides.",
        "Serve with syrup for dipping.",
      ],
      tags: ["breakfast", "vegetarian"],
    },
    bg: {
      title: "Пръчици пържен хляб",
      description:
        "Златист пържен хляб с канела, нарязан на пръчици за топене, приготвен от стар дебел хляб, потопен в крем, сгъстен с малко брашно - брашното е това, което кара покритието да залепва и да хрупка, вместо да стане кашаво, трик, който повечето версии за деца пропускат.",
      steps: [
        "Разбийте яйцата, млякото, брашното, канелата и ванилията в плитка чиния до гладкост - брашното сгъстява крема, за да залепва за хляба и да хрупка, вместо да стане кашав.",
        "Потопете всяка ивица хляб в сместа, покривайки двете страни.",
        "Разтопете масло в тиган и изпечете ивиците по 2-3 минути от всяка страна до златисто и хрупкаво от всички страни.",
        "Сервирайте със сироп за топене.",
      ],
      ingredients: [
        "6 дебели филии стар хляб, нарязани на ивици",
        "3 яйца",
        "1/2 чаша мляко",
        "2 с.л. брашно",
        "1 ч.л. канела",
        "1 ч.л. ванилова есенция",
        "2 с.л. масло за готвене",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
