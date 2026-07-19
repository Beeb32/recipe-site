import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "blueberry-muffins",
      title: "Blueberry Muffins",
      description:
        "Tender, bakery-style muffins studded with fresh blueberries tossed in flour to keep them suspended instead of sinking, topped with a buttery streusel - overmixing the batter is what turns muffins dense instead of tender, so it's folded together just until combined.",
      imageEmoji: "🧁",
      cookTimeMinutes: 35,
      servings: 12,
      ingredients: [
        { text: "2 cups flour", ingredient: "flour", quantity: 2 },
        { text: "3/4 cup sugar", ingredient: "sugar", quantity: 0.75 },
        { text: "2 tsp baking powder", ingredient: "baking powder", quantity: 2 },
        { text: "1 egg", ingredient: "eggs", quantity: 1 },
        { text: "1 cup milk", ingredient: "milk", quantity: 1 },
        { text: "1/3 cup melted butter", ingredient: "butter", quantity: 0.33 },
        { text: "1 1/2 cups fresh blueberries, tossed in 1 tbsp flour", ingredient: "blueberries", quantity: 1.5 },
        { text: "1/4 cup flour (for streusel)", ingredient: "flour", quantity: 0.25 },
        { text: "2 tbsp brown sugar (for streusel)", ingredient: "brown sugar", quantity: 2 },
        { text: "2 tbsp cold butter, cubed (for streusel)", ingredient: "butter", quantity: 2 },
      ],
      steps: [
        "Preheat oven to 400°F and line a muffin tin with liners.",
        "Toss the blueberries with 1 tablespoon of flour to coat - this keeps them suspended in the batter instead of sinking to the bottom.",
        "Whisk together the flour, sugar, and baking powder.",
        "In another bowl, whisk the egg, milk, and melted butter.",
        "Combine the wet and dry ingredients, folding just until combined - overmixing is what makes muffins dense instead of tender, so the batter should still look a little lumpy.",
        "Fold in the floured blueberries.",
        "For the streusel, rub together the flour, brown sugar, and cold butter until crumbly.",
        "Divide the batter among the muffin cups, top with the streusel, and bake for 20-22 minutes until golden.",
      ],
      tags: ["breakfast", "dessert", "baking", "vegetarian"],
    },
    bg: {
      title: "Мъфини с боровинки",
      description:
        "Нежни мъфини като от сладкарница, изпъстрени с пресни боровинки, овалени в брашно, за да останат окачени, вместо да потънат, покрити с маслена трошица - прекомерното разбъркване на тестото е това, което прави мъфините плътни, вместо нежни, затова се смесва само до съединяване.",
      steps: [
        "Загрейте фурната на 200°C и наредете формички за мъфини с хартиени касетки.",
        "Овалайте боровинките в 1 супена лъжица брашно - това ги пази окачени в тестото, вместо да потънат на дъното.",
        "Разбъркайте брашното, захарта и бакпулвера.",
        "В друга купа разбийте яйцето, млякото и разтопеното масло.",
        "Смесете течната смес със сухата, разбърквайки само до съединяване - прекомерното разбъркване прави мъфините плътни, вместо нежни, затова тестото трябва да остане леко на бучки.",
        "Внимателно добавете овалените в брашно боровинки.",
        "За трошицата, разтрийте брашното, кафявата захар и студеното масло до ронливост.",
        "Разпределете тестото в касетките за мъфини, поръсете с трошицата и печете 20-22 минути до златисто.",
      ],
      ingredients: [
        "2 чаши брашно",
        "3/4 чаша захар",
        "2 ч.л. бакпулвер",
        "1 яйце",
        "1 чаша мляко",
        "1/3 чаша разтопено масло",
        "1 1/2 чаши пресни боровинки, овалени в 1 с.л. брашно",
        "1/4 чаша брашно (за трошицата)",
        "2 с.л. кафява захар (за трошицата)",
        "2 с.л. студено масло, нарязано на кубчета (за трошицата)",
      ],
    },
  },
  {
    en: {
      slug: "lemon-bars",
      title: "Lemon Bars",
      description:
        "A buttery shortbread crust blind-baked until pale gold, then topped with a fresh lemon custard poured on while the crust is still hot - fresh-squeezed juice and zest instead of bottled juice, plus pouring the filling in hot, are what keep the filling from tasting dull or setting unevenly.",
      imageEmoji: "🍋",
      cookTimeMinutes: 55,
      servings: 9,
      ingredients: [
        { text: "1 cup flour", ingredient: "flour", quantity: 1 },
        { text: "1/4 cup powdered sugar", ingredient: "powdered sugar", quantity: 0.25 },
        { text: "1/2 cup butter", ingredient: "butter", quantity: 0.5 },
        { text: "2 eggs", ingredient: "eggs", quantity: 2 },
        { text: "1 cup sugar", ingredient: "sugar", quantity: 1 },
        { text: "1/3 cup fresh lemon juice", ingredient: "lemon juice", quantity: 0.33 },
        { text: "1 tbsp lemon zest", ingredient: "lemon zest", quantity: 1 },
        { text: "2 tbsp flour (for filling)", ingredient: "flour", quantity: 2 },
      ],
      steps: [
        "Preheat oven to 350°F and mix the flour, powdered sugar, and butter into a dough for the crust.",
        "Press the dough into a baking pan and bake for 15 minutes until pale golden - this blind bake is what seals the crust so it doesn't turn soggy under the filling.",
        "Whisk the eggs, sugar, fresh lemon juice, lemon zest, and remaining flour together for the filling.",
        "Pour the filling over the crust immediately while it's still hot from the oven, then bake for another 20 minutes until set - pouring it in hot is what helps the filling set evenly instead of turning gloopy.",
        "Cool completely, then dust with powdered sugar and cut into bars.",
      ],
      tags: ["dessert", "baking", "vegetarian"],
    },
    bg: {
      title: "Лимонови блокчета",
      description:
        "Маслена коричка от кекс, предварително запечена до бледо златисто, после покрита с пресен лимонов крем, изсипан, докато коричката е още гореща - прясно изцеденият сок и кората, вместо бутилиран сок, плюс изсипването на плънката гореща, е това, което пази плънката от блудкав вкус или неравномерно стягане.",
      steps: [
        "Загрейте фурната на 180°C и смесете брашното, пудрата захар и маслото в тесто за коричката.",
        "Наблъскайте тестото в тава и печете 15 минути до бледо златисто - това предварително запичане е това, което запечатва коричката, за да не омекне под плънката.",
        "Разбийте яйцата, захарта, пресния лимонов сок, лимоновата кора и останалото брашно за плънката.",
        "Изсипете плънката върху коричката веднага, докато е още гореща от фурната, после печете още 20 минути до стягане - изсипването гореща е това, което помага на плънката да се стегне равномерно, вместо да стане лепкава каша.",
        "Оставете да изстине напълно, после поръсете с пудра захар и нарежете на блокчета.",
      ],
      ingredients: [
        "1 чаша брашно",
        "1/4 чаша пудра захар",
        "1/2 чаша масло",
        "2 яйца",
        "1 чаша захар",
        "1/3 чаша пресен лимонов сок",
        "1 с.л. лимонова кора",
        "2 с.л. брашно (за плънката)",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
