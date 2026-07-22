import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "chicken-enchilada-casserole",
      title: "Chicken Enchilada Casserole",
      description:
        "Layered tortillas, shredded chicken, and enchilada sauce baked until bubbly - lightly frying or dipping the tortillas in warm sauce before layering is what keeps them from turning gummy and pasty in the oven, a step most quick versions skip.",
      imageEmoji: "🌯",
      cookTimeMinutes: 45,
      servings: 6,
      ingredients: [
        { text: "3 cups cooked shredded chicken", ingredient: "chicken", quantity: 3 },
        { text: "2 cups enchilada sauce", ingredient: "enchilada sauce", quantity: 2 },
        { text: "1 tsp cumin", ingredient: "cumin", quantity: 1 },
        { text: "Salt to taste", ingredient: "salt", quantity: null },
        { text: "12 corn tortillas", ingredient: "corn tortillas", quantity: 12 },
        { text: "2 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 2 },
        { text: "2 cups shredded cheddar cheese", ingredient: "cheddar cheese", quantity: 2 },
      ],
      steps: [
        "Preheat oven to 375°F.",
        "Toss the shredded chicken with the cumin and a pinch of salt.",
        "Briefly fry each tortilla in the oil for a few seconds per side, or dip in warm enchilada sauce, until pliable - this is what keeps the tortillas from turning gummy and pasty once baked.",
        "Layer the tortillas, chicken, enchilada sauce, and cheese in a baking dish, repeating twice.",
        "Top with the remaining cheese.",
        "Bake for 25-30 minutes until bubbly and golden.",
      ],
      tags: ["dinner", "mexican"],
    },
    bg: {
      title: "Гювеч енчилада с пиле",
      description:
        "Наслоени тортили, накъсано пиле и сос енчилада, запечени до къкрене - леко запържването или потапянето на тортилите в топъл сос преди наслояване е това, което ги пази да не станат лепкави и кашести във фурната, стъпка, която повечето бързи версии пропускат.",
      steps: [
        "Загрейте фурната на 190°C.",
        "Разбъркайте накъсаното пиле с кимиона и щипка сол.",
        "Запържете леко всяка тортила в олиото за няколко секунди от всяка страна, или я потопете в топъл сос енчилада, докато стане гъвкава - това е, което пази тортилите да не станат лепкави и кашести след печене.",
        "Наредете на пластове тортили, пиле, сос енчилада и сирене в тава, повтаряйки два пъти.",
        "Отгоре сложете останалото сирене.",
        "Печете 25-30 минути до къкрене и златисто.",
      ],
      ingredients: [
        "3 чаши сготвено накъсано пиле",
        "2 чаши сос енчилада",
        "1 ч.л. кимион",
        "Сол на вкус",
        "12 царевични тортили",
        "2 с.л. олио",
        "2 чаши настъргано чедър сирене",
      ],
    },
  },
  {
    en: {
      slug: "chicken-tortilla-soup",
      title: "Chicken Tortilla Soup",
      description:
        "A zesty Mexican soup of shredded chicken and tomatoes, topped with tortilla strips fried fresh from corn tortillas rather than crushed chips, and finished with lime - real tortilla strips crisp on the surface while staying tender inside, which broken chips can't replicate once they've softened in the broth.",
      imageEmoji: "🍲",
      cookTimeMinutes: 40,
      servings: 6,
      ingredients: [
        { text: "2 chicken breasts", ingredient: "chicken breast", quantity: 2 },
        { text: "1 can diced tomatoes", ingredient: "tomato", quantity: 1 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
        { text: "6 cups chicken broth", ingredient: "chicken broth", quantity: 6 },
        { text: "2 tsp cumin", ingredient: "cumin", quantity: 2 },
        { text: "4 corn tortillas, cut into strips", ingredient: "corn tortillas", quantity: 4 },
        { text: "2 tbsp vegetable oil", ingredient: "vegetable oil", quantity: 2 },
        { text: "1 lime, cut into wedges", ingredient: "lime", quantity: 1 },
      ],
      steps: [
        "Simmer the chicken breasts in chicken broth with the onion, garlic, tomatoes, and cumin for 20 minutes until cooked through.",
        "Remove the chicken, shred it, and return it to the pot.",
        "Simmer for another 5 minutes.",
        "Meanwhile, fry the tortilla strips in the oil until crisp, about 2-3 minutes, then drain on paper towels - frying fresh strips gives real crunch that holds up in the broth, instead of chips that soften and turn soggy.",
        "Top with the fried tortilla strips and a squeeze of lime before serving.",
      ],
      tags: ["dinner", "mexican", "quick"],
    },
    bg: {
      title: "Пилешка супа с тортила",
      description:
        "Пикантна мексиканска супа с накъсано пиле и домати, покрита с ивици тортила, изпържени пресни от царевични тортили, а не от натрошени чипсове, завършена с лайм - истинските ивици тортила остават хрупкави отгоре, докато вътре са крехки, нещо, което натрошените чипсове не могат да постигнат, след като омекнат в бульона.",
      steps: [
        "Варете пилешките гърди в пилешки бульон с лука, чесъна, доматите и кимиона 20 минути до готовност.",
        "Извадете пилето, накъсайте го и го върнете в тенджерата.",
        "Варете още 5 минути.",
        "Междувременно изпържете ивиците тортила в олиото до хрупкавост, около 2-3 минути, после отцедете върху хартиени кърпи - пресните изпържени ивици дават истинска хрупкавост, която издържа в бульона, за разлика от чипсовете, които омекват и стават кашести.",
        "Отгоре сложете изпържените ивици тортила и малко лайм преди сервиране.",
      ],
      ingredients: [
        "2 пилешки гърди",
        "1 консерва нарязани домати",
        "1 лук, нарязан на кубчета",
        "2 скилидки чесън, ситно нарязани",
        "6 чаши пилешки бульон",
        "2 ч.л. кимион",
        "4 царевични тортили, нарязани на ивици",
        "2 с.л. олио",
        "1 лайм, нарязан на резенчета",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
