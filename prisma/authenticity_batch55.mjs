import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "garlic-butter-shrimp",
      title: "Garlic Butter Shrimp",
      description:
        "Shrimp seared in butter with garlic and red pepper flakes, then finished with a quick white wine reduction - the wine and chili flakes are what most simplified versions skip, along with patting the shrimp dry first so they sear instead of steam.",
      imageEmoji: "🍤",
      cookTimeMinutes: 15,
      servings: 4,
      ingredients: [
        { text: "1 lb shrimp, peeled and deveined", ingredient: "shrimp", quantity: 1 },
        { text: "4 tbsp butter, divided", ingredient: "butter", quantity: 4 },
        { text: "4 cloves garlic, thinly sliced", ingredient: "garlic", quantity: 4 },
        { text: "1/4 tsp red pepper flakes", ingredient: "red pepper flakes", quantity: 0.25 },
        { text: "1/2 cup dry white wine", ingredient: "white wine", quantity: 0.5 },
        { text: "1 tbsp lemon juice", ingredient: "lemon juice", quantity: 1 },
        { text: "2 tbsp chopped parsley", ingredient: "parsley", quantity: 2 },
        { text: "Salt and pepper to taste", ingredient: "salt and pepper", quantity: null },
      ],
      steps: [
        "Pat the shrimp dry and season with salt and pepper - removing the moisture first is what lets them sear instead of steam.",
        "Melt half the butter in a skillet over medium heat, then add the garlic and red pepper flakes and cook until fragrant, about 30 seconds, watching closely so the garlic doesn't burn.",
        "Add the shrimp and cook for 1-2 minutes per side until just turning pink.",
        "Pour in the white wine and lemon juice, and simmer until reduced by half, about 2 minutes.",
        "Remove from heat, stir in the remaining butter until melted, then toss with parsley and serve immediately.",
      ],
      tags: ["dinner", "quick"],
    },
    bg: {
      title: "Скариди с чеснов масло",
      description:
        "Скариди, запържени в масло с чесън и люти чушки на люспи, довършени с бърза редукция от бяло вино - виното и лютите чушки са това, което повечето опростени версии пропускат, заедно с подсушаването на скаридите, за да се запържат вместо да се задушат.",
      steps: [
        "Подсушете скаридите и подправете със сол и черен пипер - премахването на влагата е това, което им позволява да се запържат, вместо да се задушат.",
        "Разтопете половината масло в тиган на среден огън, после добавете чесъна и лютите чушки и гответе до ароматизиране, около 30 секунди, внимавайки чесънът да не загори.",
        "Добавете скаридите и гответе по 1-2 минути от всяка страна, докато порозовеят.",
        "Долейте бялото вино и лимоновия сок и къкрете, докато редукцията намалее наполовина, около 2 минути.",
        "Свалете от котлона, разбъркайте останалото масло до разтопяване, после разбъркайте с магданоза и сервирайте веднага.",
      ],
      ingredients: [
        "450 г скариди, обелени и почистени",
        "4 с.л. масло, разделено",
        "4 скилидки чесън, нарязани на тънки резенчета",
        "1/4 ч.л. люти чушки на люспи",
        "1/2 чаша бяло вино",
        "1 с.л. лимонов сок",
        "2 с.л. нарязан магданоз",
        "Сол и черен пипер на вкус",
      ],
    },
  },
  {
    en: {
      slug: "coconut-shrimp",
      title: "Coconut Shrimp",
      description:
        "Shrimp dredged in flour and egg, then pressed into a mix of sweetened coconut and panko breadcrumbs for extra crunch and fried until golden - panko alongside the coconut is what most simplified versions leave out, along with drying the shrimp first so the coating actually sticks.",
      imageEmoji: "🍤",
      cookTimeMinutes: 30,
      servings: 4,
      ingredients: [
        { text: "1 lb shrimp, peeled with tails on", ingredient: "shrimp", quantity: 1 },
        { text: "1/2 cup flour", ingredient: "flour", quantity: 0.5 },
        { text: "1/2 tsp salt", ingredient: "salt", quantity: 0.5 },
        { text: "2 eggs, beaten", ingredient: "eggs", quantity: 2 },
        { text: "1 cup sweetened shredded coconut", ingredient: "coconut", quantity: 1 },
        { text: "1 cup panko breadcrumbs", ingredient: "panko breadcrumbs", quantity: 1 },
        { text: "2 cups vegetable oil for frying", ingredient: "vegetable oil", quantity: 2 },
      ],
      steps: [
        "Pat the shrimp completely dry, then dredge each one in the flour mixed with salt, shaking off the excess - dry shrimp hold the coating far better than wet ones.",
        "Dip in the beaten egg, then press into a mixed coating of the shredded coconut and panko - the panko is what keeps the crust crisp while the coconut caramelizes, rather than using coconut alone.",
        "Heat the oil to 350°F and fry the shrimp in batches for 2-3 minutes until golden - frying at the right temperature is what keeps the crust from turning soggy.",
        "Drain on paper towels.",
        "Serve with a sweet chili dipping sauce.",
      ],
      tags: ["dinner", "quick"],
    },
    bg: {
      title: "Скариди с кокос",
      description:
        "Скариди, овалени в брашно и яйце, после натиснати в смес от подсладен кокос и панко галета за допълнителна хрупкавост и изпържени до златисто - панкото заедно с кокоса е това, което повечето опростени версии пропускат, заедно с подсушаването на скаридите, за да залепне панировката.",
      steps: [
        "Подсушете скаридите напълно, после овалайте всяка в брашното, смесено със сол, изтръсквайки излишъка - сухите скариди задържат панировката много по-добре от мокрите.",
        "Потопете в разбитото яйце, после натиснете в смесена панировка от настъргания кокос и панкото - панкото е това, което пази коричката хрупкава, докато кокосът карамелизира, вместо да се използва само кокос.",
        "Загрейте олиото до 175°C и изпържете скаридите на порции 2-3 минути до златисто - пърженето при правилната температура е това, което пази коричката да не омекне.",
        "Отцедете върху хартиена кухненска кърпа.",
        "Сервирайте със сладък сос чили за топене.",
      ],
      ingredients: [
        "450 г скариди, обелени с опашки",
        "1/2 чаша брашно",
        "1/2 ч.л. сол",
        "2 разбити яйца",
        "1 чаша подсладен настърган кокос",
        "1 чаша панко галета",
        "2 чаши олио за пържене",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
