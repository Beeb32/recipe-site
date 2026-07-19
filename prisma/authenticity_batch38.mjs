import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "vegetable-lo-mein",
      title: "Vegetable Lo Mein",
      description:
        "Stir-fried noodles built on a garlic-ginger-scallion base and a real lo mein sauce of light and dark soy sauce, oyster sauce, and sugar - the aromatics and layered sauce are what separate real lo mein from noodles tossed in plain soy sauce.",
      imageEmoji: "🍜",
      cookTimeMinutes: 30,
      servings: 4,
      ingredients: [
        { text: "12 oz lo mein noodles", ingredient: "lo mein noodles", quantity: 12 },
        { text: "2 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 2 },
        { text: "3 cloves garlic, minced", ingredient: "garlic", quantity: 3 },
        { text: "1 tbsp grated ginger", ingredient: "ginger", quantity: 1 },
        { text: "2 green onions, sliced (white and green parts separated)", ingredient: "green onion", quantity: 2 },
        { text: "2 cups shredded cabbage", ingredient: "cabbage", quantity: 2 },
        { text: "1 carrot, julienned", ingredient: "carrot", quantity: 1 },
        { text: "1 red bell pepper, sliced", ingredient: "red pepper", quantity: 1 },
        { text: "2 tbsp light soy sauce", ingredient: "soy sauce", quantity: 2 },
        { text: "1 tbsp dark soy sauce", ingredient: "dark soy sauce", quantity: 1 },
        { text: "1 tbsp oyster sauce", ingredient: "oyster sauce", quantity: 1 },
        { text: "1 tsp sugar", ingredient: "sugar", quantity: 1 },
        { text: "1 tsp sesame oil", ingredient: "sesame oil", quantity: 1 },
      ],
      steps: [
        "Cook the noodles according to package instructions, then rinse with cool water and toss with a little oil so they don't clump.",
        "Whisk together the light soy sauce, dark soy sauce, oyster sauce, sugar, and sesame oil.",
        "Heat the vegetable oil in a wok and sauté the garlic, ginger, and the white parts of the green onions for about 1 minute until fragrant.",
        "Add the cabbage, carrot, and red pepper and stir-fry over high heat for 2-3 minutes until just starting to soften.",
        "Add the noodles and the sauce, tossing everything together until evenly coated.",
        "Top with the green onion tops and serve hot.",
      ],
      tags: ["dinner", "asian", "vegan", "vegetarian", "quick"],
    },
    bg: {
      title: "Ло мейн със зеленчуци",
      description:
        "Запържена юфка, изградена върху основа от чесън, джинджифил и пресен лук и истински сос ло мейн от светъл и тъмен соев сос, сос от стриди и захар - ароматите и многослойният сос са това, което отличава истинския ло мейн от юфка, разбъркана в обикновен соев сос.",
      steps: [
        "Сварете юфката според инструкциите на опаковката, после изплакнете със студена вода и разбъркайте с малко олио, за да не се слепи.",
        "Разбъркайте светлия соев сос, тъмния соев сос, соса от стриди, захарта и сусамовото масло.",
        "Загрейте олиото в уок и запържете чесъна, джинджифила и белите части на пресния лук за около 1 минута до ароматизиране.",
        "Добавете зелето, моркова и червената чушка и задушавайте на силен огън 2-3 минути, докато леко омекнат.",
        "Добавете юфката и соса, разбърквайки всичко заедно до равномерно покриване.",
        "Отгоре добавете зелените части на лука и сервирайте горещо.",
      ],
      ingredients: [
        "340 г юфка ло мейн",
        "2 с.л. олио",
        "3 скилидки чесън, ситно нарязани",
        "1 с.л. настърган джинджифил",
        "2 стръка пресен лук, нарязани (белите и зелените части разделени)",
        "2 чаши настъргано зеле",
        "1 морков, нарязан на тънки ивици",
        "1 червена чушка, нарязана на резени",
        "2 с.л. светъл соев сос",
        "1 с.л. тъмен соев сос",
        "1 с.л. сос от стриди",
        "1 ч.л. захар",
        "1 ч.л. сусамово масло",
      ],
    },
  },
  {
    en: {
      slug: "poke-bowl",
      title: "Poke Bowl",
      description:
        "Sushi-grade tuna marinated in shoyu, sesame oil, green onion, and sesame seeds, rested to let the marinade soften the fish - green onion and sesame seeds are standard components of real shoyu poke, not just soy sauce and oil.",
      imageEmoji: "🍚",
      cookTimeMinutes: 75,
      servings: 4,
      ingredients: [
        { text: "1 lb sushi-grade tuna, cubed", ingredient: "tuna", quantity: 1 },
        { text: "1/4 cup soy sauce (shoyu)", ingredient: "soy sauce", quantity: 0.25 },
        { text: "1 tbsp sesame oil", ingredient: "sesame oil", quantity: 1 },
        { text: "2 green onions, sliced", ingredient: "green onion", quantity: 2 },
        { text: "1 tbsp sesame seeds", ingredient: "sesame seeds", quantity: 1 },
        { text: "1/4 sweet onion (Maui or Vidalia), thinly sliced", ingredient: "sweet onion", quantity: 0.25 },
        { text: "1/4 tsp red pepper flakes (optional)", ingredient: "red pepper flakes", quantity: 0.25 },
        { text: "3 cups cooked sushi rice", ingredient: "sushi rice", quantity: 3 },
        { text: "1 cucumber, diced", ingredient: "cucumber", quantity: 1 },
        { text: "1 avocado, sliced", ingredient: "avocado", quantity: 1 },
      ],
      steps: [
        "Toss the tuna cubes with soy sauce, sesame oil, green onions, sesame seeds, sweet onion, and red pepper flakes if using.",
        "Cover and marinate in the fridge for at least 1 hour, handling the fish gently so it doesn't break apart.",
        "Divide the rice among bowls.",
        "Top with the marinated tuna, cucumber, and avocado.",
        "Serve chilled.",
      ],
      tags: ["lunch", "asian", "quick"],
    },
    bg: {
      title: "Поке купа",
      description:
        "Риба тон за суши, маринована в соев сос (шою), сусамово масло, пресен лук и сусам, оставена да почине, за да омекне от марината - пресният лук и сусамът са стандартни съставки на истинското шою поке, не само соев сос и олио.",
      steps: [
        "Разбъркайте кубчетата риба тон със соевия сос, сусамовото масло, пресния лук, сусама, сладкия лук и люспите лют пипер, ако използвате.",
        "Покрийте и маринова в хладилника поне 1 час, боравейки внимателно с рибата, за да не се разпадне.",
        "Разпределете ориза в купи.",
        "Отгоре сложете маринованата риба тон, краставица и авокадо.",
        "Сервирайте охладено.",
      ],
      ingredients: [
        "450 г риба тон за суши, нарязана на кубчета",
        "1/4 чаша соев сос (шою)",
        "1 с.л. сусамово масло",
        "2 стръка пресен лук, нарязани",
        "1 с.л. сусам",
        "1/4 сладък лук (мауи или видалия), нарязан на тънко",
        "1/4 ч.л. люспи лют пипер (по желание)",
        "3 чаши сготвен ориз за суши",
        "1 краставица, нарязана на кубчета",
        "1 авокадо, нарязано на резени",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
