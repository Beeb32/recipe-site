import { prisma, runTranslations } from "./translate-lib.mjs";

// 3 traditional Japanese okayu (rice porridge) recipes. The first,
// plain okayu, is the dish memorably cooked for an ailing Ashitaka by
// the monk Jigo in Princess Mononoke - noted in the description, but
// written and researched as the real, traditional dish, not a novelty
// tie-in. The other two are classic okayu variations. Each
// web-researched for authentic technique before writing, per standing
// instructions. Nutrition estimates set directly here, per standing
// instruction to never leave new recipes without nutrition.
const newRecipes = [
  {
    slug: "okayu",
    title: "Okayu",
    description:
      "Japan's classic plain rice porridge, cooked low and slow until the rice breaks down into something soft, creamy, and deeply comforting - the kind of simple healing food given to the sick, the cold, and the weary, memorably cooked for an ailing traveler by the monk Jigo in Princess Mononoke. A generous water ratio and a gentle simmer, without disturbing the rice too much, is what gives okayu its silky, unified texture.",
    imageEmoji: "🍚",
    cookTimeMinutes: 45,
    servings: 2,
    caloriesPerServing: 150,
    proteinG: 3,
    carbsG: 33,
    fatG: 0,
    ingredients: [
      { text: "1/2 cup Japanese short-grain white rice", ingredient: "short-grain rice", quantity: 1 },
      { text: "3 1/2 cups water", ingredient: "water", quantity: 4 },
      { text: "1/4 tsp salt, optional", ingredient: "salt", quantity: 1 },
      { text: "Umeboshi or thinly sliced scallion, for serving, optional", ingredient: "umeboshi", quantity: null },
    ],
    steps: [
      "Rinse the rice in several changes of water, swirling gently and draining, until the water runs mostly clear.",
      "Combine the rinsed rice with the water in a heavy-bottomed pot or donabe (Japanese clay pot), which retains and distributes heat evenly for the slow simmer ahead.",
      "Bring to a boil over medium heat, uncovered.",
      "Once boiling, reduce to the lowest possible simmer and partially cover with a lid slightly ajar, letting steam escape.",
      "Simmer gently for 30-35 minutes, resisting the urge to stir often - occasional gentle stirring is fine, but constant stirring breaks the rice down unevenly and can make the porridge gluey rather than silky.",
      "The rice is ready when the grains have mostly broken down into a soft, thick, creamy porridge with no distinct hard grains remaining.",
      "Turn off the heat, cover fully, and let the okayu steam and settle for 10 minutes before serving.",
      "Season with a pinch of salt if desired, and serve warm, plain or topped with umeboshi or sliced scallion.",
    ],
    tags: ["breakfast", "dinner", "vegetarian"],
    bg: {
      title: "Окаю",
      description: "Класическата японска обикновена оризова каша, сготвена бавно и на слаб огън, докато оризът се разпадне в нещо меко, кремообразно и дълбоко успокояващо - вид проста лечебна храна, давана на болни, премръзнали и изтощени, паметно сготвена за болен пътник от монаха Джико в \"Принцеса Мононоке\". Обилно съотношение вода и нежно къкрене, без прекалено обезпокояване на ориза, придават на окаюто копринената му, обединена текстура.",
      steps: [
        "Изплакнете ориза в няколко смени вода, разбърквайки леко и отцеждайки, докато водата стане предимно бистра.",
        "Смесете изплакнатия ориз с водата в тежка тенджера или донабе (японски глинен съд), който задържа и разпределя топлината равномерно за предстоящото бавно къкрене.",
        "Кипнете на средна температура, без капак.",
        "След завиране намалете до възможно най-слабо къкрене и частично покрийте с капак, леко открехнат, за да излиза пара.",
        "Къкрете леко 30-35 минути, устоявайки на изкушението да разбърквате често - случайно леко разбъркване е добре, но постоянното разбъркване разпада ориза неравномерно и може да направи кашата лепкава, вместо копринена.",
        "Оризът е готов, когато зърната са предимно разпаднати в мека, гъста, кремообразна каша без останали твърди зърна.",
        "Изключете котлона, покрийте напълно и оставете окаюто да се задуши и слегне 10 минути преди сервиране.",
        "Подправете с щипка сол по желание и сервирайте топло, самостоятелно или с умебоши или нарязан пролетен лук отгоре.",
      ],
      ingredients: [
        "1/2 чаша японски ориз с кръгло зърно",
        "830мл вода",
        "1/4 ч.л. сол, по желание",
        "Умебоши или тънко нарязан пролетен лук, за сервиране, по желание",
      ],
    },
  },
  {
    slug: "tamago-okayu",
    title: "Tamago Okayu",
    description:
      "A comforting Japanese egg rice porridge, plain okayu enriched with bonito dashi and a beaten egg swirled in at the end to form soft golden ribbons. Pouring the egg in slowly while stirring continuously in one direction is what creates fine ribbons instead of scrambled clumps.",
    imageEmoji: "🍚",
    cookTimeMinutes: 40,
    servings: 2,
    caloriesPerServing: 210,
    proteinG: 9,
    carbsG: 33,
    fatG: 5,
    ingredients: [
      { text: "1/2 cup Japanese short-grain white rice", ingredient: "short-grain rice", quantity: 1 },
      { text: "3 cups dashi stock", ingredient: "dashi stock", quantity: 3 },
      { text: "1/2 cup water", ingredient: "water", quantity: 1 },
      { text: "1 tbsp soy sauce", ingredient: "soy sauce", quantity: 1 },
      { text: "2 eggs, beaten", ingredient: "egg", quantity: 2 },
      { text: "2 scallions, thinly sliced, for garnish", ingredient: "scallion", quantity: 2 },
      { text: "Shredded nori, for garnish, optional", ingredient: "nori", quantity: null },
    ],
    steps: [
      "Rinse the rice in several changes of water until it runs mostly clear, then drain.",
      "Combine the rinsed rice with the dashi and water in a heavy-bottomed pot and bring to a boil over medium heat.",
      "Once boiling, reduce to a low simmer and cook, partially covered, for 25-30 minutes, until the rice has broken down into a thick, soft porridge.",
      "Stir in the soy sauce.",
      "With the porridge at a gentle simmer, slowly pour in the beaten egg in a thin stream while continuously stirring the porridge in one direction with a spoon or chopsticks - this steady motion is what creates fine, delicate ribbons of egg rather than clumps.",
      "Let the porridge simmer gently for another minute or two, just until the egg ribbons are fully set and cooked through.",
      "Taste and adjust seasoning with a little more soy sauce if needed.",
      "Ladle into bowls and garnish with sliced scallion and a scattering of shredded nori before serving hot.",
    ],
    tags: ["breakfast", "dinner"],
    bg: {
      title: "Тамаго Окаю",
      description: "Успокояваща японска оризова каша с яйце - обикновено окаю, обогатено с бонито даши и разбито яйце, завихрено накрая в меки златисти панделки. Бавното изливане на яйцето, докато разбърквате постоянно в една посока, създава фини панделки, вместо разбъркани бучки.",
      steps: [
        "Изплакнете ориза в няколко смени вода, докато стане предимно бистра, после отцедете.",
        "Смесете изплакнатия ориз с дашито и водата в тежка тенджера и кипнете на средна температура.",
        "След завиране намалете до слабо къкрене и гответе, частично покрито, 25-30 минути, докато оризът се разпадне в гъста, мека каша.",
        "Разбъркайте соевия сос.",
        "Докато кашата леко къкри, бавно изсипете разбитото яйце на тънка струя, докато разбърквате кашата непрекъснато в една посока с лъжица или пръчици - това постоянно движение създава фини, деликатни панделки от яйце, вместо бучки.",
        "Оставете кашата да къкри леко още минута-две, точно докато панделките яйце се стегнат напълно и сготвят.",
        "Опитайте и коригирайте подправките с малко повече соев сос при нужда.",
        "Сипете в купи и украсете с нарязан пролетен лук и малко настъргано нори преди сервиране горещо.",
      ],
      ingredients: [
        "1/2 чаша японски ориз с кръгло зърно",
        "700мл бульон даши",
        "1/2 чаша вода",
        "1 с.л. соев сос",
        "2 яйца, разбити",
        "2 стръка пролетен лук, тънко нарязани, за украса",
        "Настъргано нори, за украса, по желание",
      ],
    },
  },
  {
    slug: "umeboshi-okayu",
    title: "Umeboshi Okayu",
    description:
      "Plain Japanese rice porridge topped with salty, sour umeboshi (pickled plum), whose sharp tang cuts through the porridge's mildness in a classic, centuries-old pairing. Simmering the umeboshi's pit right in the porridge, then removing it before serving, lets its flavor gently perfume the whole pot.",
    imageEmoji: "🍚",
    cookTimeMinutes: 45,
    servings: 2,
    caloriesPerServing: 160,
    proteinG: 3,
    carbsG: 34,
    fatG: 0,
    ingredients: [
      { text: "1/2 cup Japanese short-grain white rice", ingredient: "short-grain rice", quantity: 1 },
      { text: "3 1/2 cups water", ingredient: "water", quantity: 4 },
      { text: "2 umeboshi (Japanese pickled plums), pitted and finely chopped, pits reserved", ingredient: "umeboshi", quantity: 2 },
      { text: "1 tsp toasted white sesame seeds, for garnish", ingredient: "sesame seeds", quantity: 1 },
      { text: "1 scallion, thinly sliced, for garnish", ingredient: "scallion", quantity: 1 },
      { text: "Shredded nori, for garnish, optional", ingredient: "nori", quantity: null },
    ],
    steps: [
      "Rinse the rice in several changes of water until it runs mostly clear, then drain.",
      "Combine the rinsed rice with the water in a heavy-bottomed pot or donabe, and drop in the reserved umeboshi pits, which will gently perfume the porridge as it cooks.",
      "Bring to a boil over medium heat, uncovered.",
      "Once boiling, reduce to the lowest simmer, partially cover with the lid ajar, and cook gently for 30-35 minutes, stirring only occasionally, until the rice has broken down into a soft, creamy porridge.",
      "Remove and discard the umeboshi pits.",
      "Turn off the heat, cover fully, and let the porridge steam and settle for 10 minutes.",
      "Ladle the porridge into bowls and top each with the finely chopped umeboshi flesh, letting diners stir it in themselves to their preferred level of tang.",
      "Garnish with toasted sesame seeds, sliced scallion, and shredded nori if using, and serve warm.",
    ],
    tags: ["breakfast", "dinner", "vegetarian"],
    bg: {
      title: "Умебоши Окаю",
      description: "Обикновена японска оризова каша, поднесена с солено-кисело умебоши (кисела слива), чиято остра киселинност пробива мекотата на кашата в класическа, вековна комбинация. Къкренето на костилката от умебоши направо в кашата, после премахването й преди сервиране, позволява на аромата й нежно да напои цялата тенджера.",
      steps: [
        "Изплакнете ориза в няколко смени вода, докато стане предимно бистра, после отцедете.",
        "Смесете изплакнатия ориз с водата в тежка тенджера или донабе и пуснете запазените костилки от умебоши, които ще напоят кашата с аромат, докато се готви.",
        "Кипнете на средна температура, без капак.",
        "След завиране намалете до най-слабо къкрене, частично покрийте с открехнат капак и гответе леко 30-35 минути, разбърквайки само от време на време, докато оризът се разпадне в мека, кремообразна каша.",
        "Извадете и изхвърлете костилките от умебоши.",
        "Изключете котлона, покрийте напълно и оставете кашата да се задуши и слегне 10 минути.",
        "Сипете кашата в купи и отгоре сложете ситно нарязаната каша от умебоши, оставяйки сътрапезниците сами да я разбъркат до предпочитаната от тях киселинност.",
        "Украсете с печени сусамови семена, нарязан пролетен лук и настъргано нори, ако използвате, и сервирайте топло.",
      ],
      ingredients: [
        "1/2 чаша японски ориз с кръгло зърно",
        "830мл вода",
        "2 умебоши (японски кисели сливи), обезкостени и ситно нарязани, костилките запазени",
        "1 ч.л. печени бели сусамови семена, за украса",
        "1 стрък пролетен лук, тънко нарязан, за украса",
        "Настъргано нори, за украса, по желание",
      ],
    },
  },
];

async function main() {
  for (const recipe of newRecipes) {
    const created = await prisma.recipe.create({
      data: {
        slug: recipe.slug,
        title: recipe.title,
        description: recipe.description,
        imageEmoji: recipe.imageEmoji,
        cookTimeMinutes: recipe.cookTimeMinutes,
        servings: recipe.servings,
        steps: JSON.stringify(recipe.steps),
        tags: JSON.stringify(recipe.tags),
        caloriesPerServing: recipe.caloriesPerServing,
        proteinG: recipe.proteinG,
        carbsG: recipe.carbsG,
        fatG: recipe.fatG,
      },
    });

    for (let i = 0; i < recipe.ingredients.length; i++) {
      const ing = recipe.ingredients[i];
      const ingredient = await prisma.ingredient.upsert({
        where: { name: ing.ingredient },
        update: {},
        create: { name: ing.ingredient },
      });
      await prisma.recipeIngredient.create({
        data: {
          recipeId: created.id,
          ingredientId: ingredient.id,
          displayText: ing.text,
          quantity: ing.quantity,
          position: i,
        },
      });
    }

    console.log(`Created ${recipe.slug}`);
  }
  console.log(`Created ${newRecipes.length} recipes total.`);

  await runTranslations(
    newRecipes.map((r) => ({
      slug: r.slug,
      title: r.bg.title,
      description: r.bg.description,
      steps: r.bg.steps,
      ingredients: r.bg.ingredients,
    })),
  );
}

main();
