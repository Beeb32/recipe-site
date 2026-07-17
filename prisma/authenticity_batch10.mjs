import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "korean-beef-bulgogi",
      title: "Korean Beef Bulgogi",
      description:
        "Thin-sliced beef marinated in a sweet soy-garlic sauce with grated Asian pear and onion - the pear's enzymes tenderize the meat, not just sweeten it - then quickly seared.",
      imageEmoji: "🥩",
      cookTimeMinutes: 75,
      servings: 4,
      ingredients: [
        { text: "1 1/2 lb rib-eye, sliced thin", ingredient: "ribeye", quantity: 1.5 },
        { text: "1/3 cup soy sauce", ingredient: "soy sauce", quantity: 0.33 },
        { text: "3 tbsp brown sugar", ingredient: "brown sugar", quantity: 3 },
        { text: "1 Asian pear, grated", ingredient: "pear", quantity: 1 },
        { text: "1/4 onion, grated", ingredient: "onion", quantity: 0.25 },
        { text: "3 cloves garlic, minced", ingredient: "garlic", quantity: 3 },
        { text: "1 tbsp grated ginger", ingredient: "ginger", quantity: 1 },
        { text: "1 tbsp sesame oil", ingredient: "sesame oil", quantity: 1 },
        { text: "2 green onions, sliced, plus more for garnish", ingredient: "green onion", quantity: 2 },
        { text: "1 tsp sesame seeds, for garnish", ingredient: "sesame seeds", quantity: 1 },
      ],
      steps: [
        "Partially freeze the beef for about 45 minutes to make it easier to slice thinly, then slice against the grain into 1/8-inch strips.",
        "Whisk together the soy sauce, brown sugar, grated pear, grated onion, garlic, ginger, and sesame oil.",
        "Marinate the beef in the mixture, covered, in the fridge for at least 1 hour, ideally overnight.",
        "Cook the beef and green onions in a hot skillet or grill in batches until browned, about 2-3 minutes per side, then serve hot over rice, garnished with sesame seeds and extra green onion.",
      ],
      tags: ["dinner", "asian", "quick"],
    },
    bg: {
      title: "Корейско телешко Булгоги",
      description:
        "Тънко нарязано телешко месо, маринована в сладък соево-чеснов сос с настъргана азиатска круша и лук - ензимите на крушата омекотяват месото, не само го подслаждат - после бързо запържена.",
      steps: [
        "Замразете месото частично за около 45 минути, за да го нарежете по-лесно на тънко, после нарежете напречно на влакната на ленти с дебелина около 3 мм.",
        "Разбъркайте соевия сос, кафявата захар, настърганата круша, настъргания лук, чесъна, джинджифила и сусамовото олио.",
        "Маринова месото в сместа, покрито, в хладилника поне 1 час, в идеалния случай през нощта.",
        "Изпечете месото и пресния лук в горещ тиган или на скара на партиди до запържване, около 2-3 минути от всяка страна, после сервирайте горещо с ориз, поръсено със сусамови семена и допълнителен пресен лук.",
      ],
      ingredients: [
        "700 г рибай, нарязан на тънко",
        "1/3 чаша соев сос",
        "3 с.л. кафява захар",
        "1 азиатска круша, настъргана",
        "1/4 лук, настърган",
        "3 скилидки чесън, ситно нарязани",
        "1 с.л. настърган джинджифил",
        "1 с.л. сусамово олио",
        "2 стръка пресен лук, нарязани, плюс още за гарниране",
        "1 ч.л. сусамови семена, за гарниране",
      ],
    },
  },
  {
    en: {
      slug: "kimchi-fried-rice",
      title: "Kimchi Fried Rice",
      description:
        "Tangy, spicy fried rice built on kimchi juice and gochujang, made with day-old rice and topped with a fried egg.",
      imageEmoji: "🍚",
      cookTimeMinutes: 25,
      servings: 4,
      ingredients: [
        { text: "4 cups cooked, cooled day-old rice", ingredient: "rice", quantity: 4 },
        { text: "1 1/2 cups chopped kimchi, juice squeezed out and reserved", ingredient: "kimchi", quantity: 1.5 },
        { text: "1/4 cup reserved kimchi juice", ingredient: "kimchi juice", quantity: 0.25 },
        { text: "2 tsp gochujang", ingredient: "gochujang", quantity: 2 },
        { text: "1 tsp soy sauce", ingredient: "soy sauce", quantity: 1 },
        { text: "2 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 2 },
        { text: "1 tbsp sesame oil", ingredient: "sesame oil", quantity: 1 },
        { text: "4 eggs", ingredient: "eggs", quantity: 4 },
        { text: "2 green onions, sliced", ingredient: "green onion", quantity: 2 },
      ],
      steps: [
        "Squeeze the chopped kimchi over a bowl to extract about 1/4 cup of kimchi juice, then whisk the juice with the gochujang and soy sauce until the gochujang dissolves.",
        "Heat vegetable oil in a large skillet and stir-fry the squeezed kimchi for 2-3 minutes.",
        "Add the rice and the kimchi juice mixture, stirring and tossing for about 7-8 minutes until the rice is evenly stained red and the flavors meld; stir in the sesame oil off the heat.",
        "In a separate pan, fry the eggs sunny-side up. Top each serving of fried rice with a fried egg and sliced green onion.",
      ],
      tags: ["dinner", "asian", "quick", "vegetarian"],
    },
    bg: {
      title: "Пържен ориз с кимчи",
      description:
        "Пикантен, лютив пържен ориз, изграден върху сока от кимчи и гочуджанг, приготвен с престоял ориз и покрит с пържено яйце.",
      steps: [
        "Изцедете нарязаното кимчи над купа, за да извадите около 1/4 чаша сок, после разбийте сока с гочуджанга и соевия сос, докато гочуджангът се разтвори.",
        "Загрейте олио в голям тиган и запържете изцеденото кимчи 2-3 минути.",
        "Добавете ориза и сместа от сок от кимчи, разбърквайки и обръщайки около 7-8 минути, докато оризът се оцвети равномерно в червено и ароматите се смесят; разбъркайте сусамовото олио извън котлона.",
        "В отделен тиган изпържете яйцата на очи. Отгоре на всяка порция пържен ориз сложете пържено яйце и нарязан пресен лук.",
      ],
      ingredients: [
        "4 чаши сготвен, изстинал престоял ориз",
        "1 1/2 чаши нарязано кимчи, с изцеден сок",
        "1/4 чаша запазен сок от кимчи",
        "2 ч.л. гочуджанг",
        "1 ч.л. соев сос",
        "2 с.л. олио",
        "1 с.л. сусамово олио",
        "4 яйца",
        "2 стръка пресен лук, нарязани",
      ],
    },
  },
  {
    en: {
      slug: "general-tsos-chicken",
      title: "General Tso's Chicken",
      description:
        "Crispy double-fried chicken thighs tossed in a sweet-tangy-spicy sauce - the second fry is what keeps the chicken crisp under the sauce instead of going soggy.",
      imageEmoji: "🍗",
      cookTimeMinutes: 45,
      servings: 4,
      ingredients: [
        { text: "1 lb chicken thighs, cubed", ingredient: "chicken thighs", quantity: 1 },
        { text: "1/2 cup cornstarch", ingredient: "cornstarch", quantity: 0.5 },
        { text: "Oil for frying", ingredient: "vegetable oil", quantity: null },
        { text: "1/4 cup soy sauce", ingredient: "soy sauce", quantity: 0.25 },
        { text: "2 tbsp rice vinegar", ingredient: "rice vinegar", quantity: 2 },
        { text: "1 tbsp white vinegar", ingredient: "white vinegar", quantity: 1 },
        { text: "3 tbsp sugar", ingredient: "sugar", quantity: 3 },
        { text: "3 dried red chilies", ingredient: "dried chilies", quantity: 3 },
        { text: "3 cloves garlic, minced", ingredient: "garlic", quantity: 3 },
        { text: "1 tbsp grated ginger", ingredient: "ginger", quantity: 1 },
      ],
      steps: [
        "Toss the chicken cubes in cornstarch, then fry in oil at 325°F for 3-4 minutes until cooked through; remove and drain.",
        "Raise the oil to 350°F and fry the chicken a second time for about 2 minutes until deep golden and extra crispy; this double fry is what keeps it crunchy once sauced.",
        "Whisk together the soy sauce, rice vinegar, white vinegar, and sugar.",
        "Stir-fry the garlic, ginger, and dried chilies briefly, then pour in the sauce and simmer until thickened, and toss the double-fried chicken in the sauce until well coated.",
      ],
      tags: ["dinner", "asian"],
    },
    bg: {
      title: "Пиле Генерал Цо",
      description:
        "Хрупкаво двойно пържено пилешко бутче, разбъркано в сладко-кисел, леко пикантен сос - второто пържене държи пилето хрупкаво под соса, вместо да омекне.",
      steps: [
        "Овалайте пилешките кубчета в царевично нишесте, после изпържете в олио на 165°C 3-4 минути до готовност; извадете и отцедете.",
        "Повишете температурата на олиото на 175°C и изпържете пилето втори път за около 2 минути до дълбоко златисто и допълнително хрупкаво - това двойно пържене е това, което го държи хрупкаво след овкусяване.",
        "Разбъркайте соевия сос, оризовия оцет, белия оцет и захарта.",
        "Запържете за кратко чесъна, джинджифила и сушените люти чушки, после налейте соса и варете до сгъстяване, и разбъркайте двойно пърженото пиле в соса до добро покриване.",
      ],
      ingredients: [
        "450 г пилешки бутчета, нарязани на кубчета",
        "1/2 чаша царевично нишесте",
        "Олио за пържене",
        "1/4 чаша соев сос",
        "2 с.л. оризов оцет",
        "1 с.л. бял оцет",
        "3 с.л. захар",
        "3 сушени люти чушки",
        "3 скилидки чесън, ситно нарязани",
        "1 с.л. настърган джинджифил",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
