import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "mashed-potatoes",
      title: "Mashed Potatoes",
      description:
        "Creamy, buttery mashed potatoes made with warmed milk and softened butter folded in gently - cold dairy shocks the hot potatoes, and overmixing turns the starch gluey, so warming the milk and mixing gently is what keeps them silky instead of gummy.",
      imageEmoji: "🥔",
      cookTimeMinutes: 35,
      servings: 6,
      ingredients: [
        { text: "5 potatoes, peeled and cubed (Yukon Gold or Russet)", ingredient: "potato", quantity: 5 },
        { text: "1/2 cup butter, softened", ingredient: "butter", quantity: 0.5 },
        { text: "1/2 cup milk, warmed", ingredient: "milk", quantity: 0.5 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
      ],
      steps: [
        "Boil the potatoes in salted water until fork-tender, about 20 minutes.",
        "Meanwhile, warm the milk gently in a small saucepan or the microwave - cold milk shocks the hot potatoes and cools them down.",
        "Drain and return to the pot, then pass through a ricer or mash by hand.",
        "Fold in the softened butter and warmed milk until smooth and creamy, mixing gently - overmixing activates the starch and turns the potatoes gluey.",
        "Season with salt before serving.",
      ],
      tags: ["dinner", "vegetarian", "quick"],
    },
    bg: {
      title: "Картофено пюре",
      description:
        "Кремообразно, маслено картофено пюре, приготвено с претоплено мляко и омекнало масло, вмесени внимателно - студените млечни продукти шокират горещите картофи, а прекомерното разбъркване прави скорбялата лепкава, така че претоплянето на млякото и внимателното разбъркване е това, което ги пази копринени, а не лепкави.",
      steps: [
        "Сварете картофите в подсолена вода до пълно омекване, около 20 минути.",
        "Междувременно претоплете млякото леко в малка тенджерка или в микровълновата - студеното мляко шокира горещите картофи и ги охлажда.",
        "Отцедете и върнете в тенджерата, после прекарайте през преса за картофи или намачкайте на ръка.",
        "Вмесете омекналото масло и претопленото мляко до гладкост и кремообразност, разбърквайки внимателно - прекомерното разбъркване активира скорбялата и прави картофите лепкави.",
        "Подправете със сол преди сервиране.",
      ],
      ingredients: [
        "5 картофа, обелени и нарязани на кубчета (сорт Юкон Голд или обикновени)",
        "1/2 чаша масло, омекнало",
        "1/2 чаша мляко, претоплено",
        "Сол на вкус",
      ],
    },
  },
  {
    en: {
      slug: "cranberry-sauce",
      title: "Cranberry Sauce",
      description:
        "Tart-sweet homemade cranberry sauce simmered with orange zest and juice, with a portion of the berries stirred in near the end so some stay whole - swapping some of the water for orange juice, and holding berries back for texture, are what most simplified versions skip.",
      imageEmoji: "🍒",
      cookTimeMinutes: 25,
      servings: 8,
      ingredients: [
        { text: "12 oz fresh cranberries, divided", ingredient: "cranberries", quantity: 12 },
        { text: "1 cup sugar", ingredient: "sugar", quantity: 1 },
        { text: "3/4 cup water", ingredient: "water", quantity: 0.75 },
        { text: "1/4 cup orange juice", ingredient: "orange juice", quantity: 0.25 },
        { text: "1 tsp orange zest", ingredient: "orange zest", quantity: 1 },
      ],
      steps: [
        "Combine the sugar, water, and orange juice in a saucepan and bring to a boil.",
        "Stir in three-quarters of the cranberries and the orange zest, then reduce heat and simmer for 10 minutes until the berries burst.",
        "Stir in the remaining whole cranberries and simmer for 2-3 more minutes - holding some back is what keeps whole berries in the finished sauce instead of an all-broken mush.",
        "Cool completely before serving; it will thicken as it cools.",
      ],
      tags: ["dinner", "vegan", "vegetarian", "quick"],
    },
    bg: {
      title: "Сос от червени боровинки",
      description:
        "Кисело-сладък домашен сос от червени боровинки, къкрещ с портокалова кора и сок, с част от боровинките, добавени близо до края, за да останат някои цели - замяната на част от водата с портокалов сок и оставянето на боровинки настрана заради текстурата са това, което повечето опростени версии пропускат.",
      steps: [
        "Смесете захарта, водата и портокаловия сок в тенджера и доведете до кипене.",
        "Разбъркайте три четвърти от боровинките и портокаловата кора, после намалете котлона и къкрете 10 минути, докато боровинките се спукат.",
        "Разбъркайте останалите цели боровинки и къкрете още 2-3 минути - оставянето на част настрана е това, което пази цели боровинки в готовия сос, вместо всичко да се превърне в каша.",
        "Охладете напълно преди сервиране; ще се сгъсти при изстиване.",
      ],
      ingredients: [
        "340 г пресни червени боровинки, разделени",
        "1 чаша захар",
        "3/4 чаша вода",
        "1/4 чаша портокалов сок",
        "1 ч.л. портокалова кора",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
