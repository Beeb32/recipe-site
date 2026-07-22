import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "lasagna-soup",
      title: "Lasagna Soup",
      description:
        "All the flavors of lasagna in a comforting, easy-to-make soup, simmered with a Parmesan rind for extra depth and finished with a dollop of ricotta seasoned with parmesan and Italian herbs - the rind and the seasoned ricotta are what most quick versions skip, leaving the soup and topping one-dimensional.",
      imageEmoji: "🍲",
      cookTimeMinutes: 40,
      servings: 6,
      ingredients: [
        { text: "1 lb ground beef", ingredient: "ground beef", quantity: 1 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "2 cloves garlic, minced", ingredient: "garlic", quantity: 2 },
        { text: "1 can crushed tomatoes", ingredient: "tomato", quantity: 1 },
        { text: "6 cups beef broth", ingredient: "beef broth", quantity: 6 },
        { text: "1 Parmesan rind", ingredient: "parmesan", quantity: 1 },
        { text: "8 lasagna noodles, broken into pieces", ingredient: "lasagna noodles", quantity: 8 },
        { text: "1/2 cup ricotta cheese", ingredient: "ricotta cheese", quantity: 0.5 },
        { text: "1/4 cup grated parmesan", ingredient: "parmesan", quantity: 0.25 },
        { text: "1/2 tsp Italian seasoning", ingredient: "italian seasoning", quantity: 0.5 },
        { text: "Shredded mozzarella, for serving", ingredient: "mozzarella", quantity: null },
      ],
      steps: [
        "Brown the ground beef with the onion in a large pot, then add the garlic and cook for 1 minute.",
        "Stir in the crushed tomatoes, beef broth, and Parmesan rind, then bring to a boil.",
        "Add the broken lasagna noodles and simmer for 12-15 minutes until tender; remove the Parmesan rind before serving.",
        "Mix the ricotta with the grated parmesan and Italian seasoning - seasoning the ricotta topping is what most quick versions skip.",
        "Serve the soup topped with a dollop of the seasoned ricotta and shredded mozzarella.",
      ],
      tags: ["dinner", "italian"],
    },
    bg: {
      title: "Супа лазаня",
      description:
        "Всички вкусове на лазанята в уютна, лесна за приготвяне супа, къкреща с корица от пармезан за допълнителна дълбочина и довършена с лъжица рикота, подправена с пармезан и италиански билки - корицата и подправената рикота са това, което повечето бързи версии пропускат, оставяйки супата и гарнитурата едноизмерни.",
      steps: [
        "Запържете каймата с лука в голяма тенджера, после добавете чесъна и гответе 1 минута.",
        "Разбъркайте пасираните домати, телешкия бульон и корицата от пармезан, после доведете до кипене.",
        "Добавете начупените листа лазаня и къкрете 12-15 минути до омекване; извадете корицата от пармезан преди сервиране.",
        "Смесете рикотата с настъргания пармезан и италианските подправки - подправянето на гарнитурата от рикота е това, което повечето бързи версии пропускат.",
        "Сервирайте супата с лъжица от подправената рикота и настъргана моцарела отгоре.",
      ],
      ingredients: [
        "450 г кайма от телешко месо",
        "1 лук, нарязан на кубчета",
        "2 скилидки чесън, ситно нарязани",
        "1 консерва пасирани домати",
        "6 чаши телешки бульон",
        "1 корица от пармезан",
        "8 листа лазаня, начупени на парчета",
        "1/2 чаша рикота",
        "1/4 чаша настърган пармезан",
        "1/2 ч.л. италиански подправки",
        "Настъргана моцарела, за сервиране",
      ],
    },
  },
  {
    en: {
      slug: "one-pot-chili",
      title: "One-Pot Chili",
      description:
        "A hearty, warming chili of ground beef, beans, and tomatoes, with the chili powder and cumin bloomed in the pot before the liquid goes in - blooming the spices in the fat first, rather than just stirring them into the broth, is what unlocks their full flavor and makes the chili taste deeper and more aromatic.",
      imageEmoji: "🌶️",
      cookTimeMinutes: 45,
      servings: 6,
      ingredients: [
        { text: "1 lb ground beef", ingredient: "ground beef", quantity: 1 },
        { text: "1 onion, diced", ingredient: "onion", quantity: 1 },
        { text: "3 cloves garlic, minced", ingredient: "garlic", quantity: 3 },
        { text: "2 tbsp chili powder", ingredient: "chili powder", quantity: 2 },
        { text: "1 tbsp cumin", ingredient: "cumin", quantity: 1 },
        { text: "1 can kidney beans, drained", ingredient: "kidney beans", quantity: 1 },
        { text: "1 can diced tomatoes", ingredient: "tomato", quantity: 1 },
        { text: "1 cup beef broth", ingredient: "beef broth", quantity: 1 },
      ],
      steps: [
        "Brown the ground beef with the onion in a large pot, then add the garlic and cook for 1 minute.",
        "Push the meat to the side and add the chili powder and cumin directly to the fat in the pot, stirring for 30 seconds until fragrant - blooming the spices in the fat first is what unlocks their full flavor instead of just stirring them into the broth.",
        "Stir in the kidney beans, diced tomatoes, and beef broth.",
        "Simmer, stirring occasionally, for 30 minutes until thickened.",
        "Season to taste before serving.",
      ],
      tags: ["dinner"],
    },
    bg: {
      title: "Чили в един съд",
      description:
        "Ситно, сгряващо чили от телешка кайма, боб и домати, с лютия пипер на прах и кимиона, разтворени в мазнината в тенджерата, преди да се добави течността - разтварянето на подправките в мазнината първо, вместо просто разбъркването им в бульона, е това, което разкрива пълния им вкус и прави чилито по-дълбоко и по-ароматно.",
      steps: [
        "Запържете каймата с лука в голяма тенджера, после добавете чесъна и гответе 1 минута.",
        "Избутайте месото настрана и добавете лютия пипер на прах и кимиона директно в мазнината в тенджерата, разбърквайки 30 секунди до ароматизиране - разтварянето на подправките в мазнината първо е това, което разкрива пълния им вкус, вместо просто да се разбъркат в бульона.",
        "Добавете боба, нарязаните домати и телешкия бульон.",
        "Варете, разбърквайки от време на време, 30 минути до сгъстяване.",
        "Подправете на вкус преди сервиране.",
      ],
      ingredients: [
        "450 г кайма от телешко месо",
        "1 лук, нарязан на кубчета",
        "3 скилидки чесън, ситно нарязани",
        "2 с.л. лютив пипер на прах",
        "1 с.л. кимион",
        "1 консерва боб, отцеден",
        "1 консерва нарязани домати",
        "1 чаша телешки бульон",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
