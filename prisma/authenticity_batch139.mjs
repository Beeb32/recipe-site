import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "breakfast-sausage-patties",
      title: "Breakfast Sausage Patties",
      description:
        "Homemade seasoned pork sausage patties, pan-fried until golden - a touch of brown sugar alongside the sage and pepper is what gives real breakfast sausage its sweet-savory balance, and salt is what most quick versions leave out entirely.",
      imageEmoji: "🥓",
      cookTimeMinutes: 20,
      servings: 4,
      ingredients: [
        { text: "1 lb ground pork", ingredient: "ground pork", quantity: 1 },
        { text: "1 tsp sage", ingredient: "sage", quantity: 1 },
        { text: "1/2 tsp black pepper", ingredient: "pepper", quantity: 0.5 },
        { text: "1/4 tsp red pepper flakes", ingredient: "red pepper flakes", quantity: 0.25 },
        { text: "1/2 tsp salt", ingredient: "salt", quantity: 0.5 },
        { text: "1 tsp brown sugar", ingredient: "brown sugar", quantity: 1 },
        { text: "1 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 1 },
      ],
      steps: [
        "Gently mix the ground pork with sage, pepper, red pepper flakes, salt, and brown sugar - overmixing is what makes sausage patties dense instead of tender.",
        "Form into small patties and chill for 15 minutes to help them hold together - the salt is what actually seasons the meat, which most quick versions skip.",
        "Cook in oil over medium heat for 4-5 minutes per side until cooked through.",
        "Serve hot.",
      ],
      tags: ["breakfast", "quick"],
    },
    bg: {
      title: "Кюфтенца наденица за закуска",
      description:
        "Домашни подправени кюфтенца от свинска наденица, запържени до златисто - малко кафява захар заедно с градинския чай и черния пипер е това, което придава на истинската наденица за закуска нейния сладко-солен баланс, а солта е това, което повечето бързи версии пропускат напълно.",
      steps: [
        "Смесете внимателно свинската кайма с градински чай, черен пипер, люти чушки на люспи, сол и кафява захар - прекомерното месене е това, което прави кюфтенцата плътни, вместо крехки.",
        "Оформете на малки кюфтенца и оставете в хладилника за 15 минути, за да се задържат по-добре формата - солта е това, което наистина подправя месото, което повечето бързи версии пропускат.",
        "Изпечете в олио на среден огън по 4-5 минути от всяка страна до готовност.",
        "Сервирайте горещо.",
      ],
      ingredients: [
        "450 г свинска кайма",
        "1 ч.л. градински чай",
        "1/2 ч.л. черен пипер",
        "1/4 ч.л. люти чушки на люспи",
        "1/2 ч.л. сол",
        "1 ч.л. кафява захар",
        "1 с.л. олио",
      ],
    },
  },
  {
    en: {
      slug: "breakfast-skillet",
      title: "Breakfast Skillet",
      description:
        "A hearty one-pan breakfast of potatoes, eggs, sausage, and peppers - parboiling the potatoes first is what lets them cook through and crisp at the same time, and seasoning at every stage is what keeps this from tasting flat.",
      imageEmoji: "🍳",
      cookTimeMinutes: 35,
      servings: 4,
      ingredients: [
        { text: "3 potatoes, diced", ingredient: "potato", quantity: 3 },
        { text: "1/2 lb breakfast sausage", ingredient: "breakfast sausage", quantity: 0.5 },
        { text: "1/2 red bell pepper, diced", ingredient: "red pepper", quantity: 0.5 },
        { text: "4 eggs", ingredient: "eggs", quantity: 4 },
        { text: "2 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 2 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "Pepper to taste", ingredient: "pepper", quantity: null },
      ],
      steps: [
        "Parboil the diced potatoes in salted water for 5 minutes, then drain and pat dry - this lets them cook through and crisp at the same time instead of staying raw in the middle.",
        "Cook the potatoes in oil in a large skillet until golden and tender, about 8-10 minutes, seasoning with salt and pepper.",
        "Add the sausage and red pepper, cooking until the sausage is browned.",
        "Make wells in the mixture and crack the eggs into them, seasoning the eggs with salt and pepper.",
        "Cover and cook for 5-6 minutes until the eggs are set to your liking.",
      ],
      tags: ["breakfast"],
    },
    bg: {
      title: "Тиган за закуска",
      description:
        "Сита закуска в един тиган от картофи, яйца, наденица и чушки - предварителното сваряване на картофите е това, което им позволява да се сготвят докрай и да станат хрупкави едновременно, а подправянето на всеки етап е това, което пази ястието от безвкусие.",
      steps: [
        "Сварете леко нарязаните на кубчета картофи в подсолена вода за 5 минути, после отцедете и подсушете - това им позволява да се сготвят докрай и да станат хрупкави, вместо да останат сурови в средата.",
        "Изпечете картофите в олио в голям тиган до златисто и омекване, около 8-10 минути, подправяйки със сол и черен пипер.",
        "Добавете наденицата и червената чушка, готвейки докато наденицата се запържи.",
        "Направете вдлъбнатини в сместа и счупете яйцата в тях, подправяйки яйцата със сол и черен пипер.",
        "Покрийте и гответе 5-6 минути, докато яйцата се сготвят по ваш вкус.",
      ],
      ingredients: [
        "3 картофа, нарязани на кубчета",
        "225 г наденица за закуска",
        "1/2 червена чушка, нарязана на кубчета",
        "4 яйца",
        "2 с.л. олио",
        "Сол на вкус",
        "Черен пипер на вкус",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
