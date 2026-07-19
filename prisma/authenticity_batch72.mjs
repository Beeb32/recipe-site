import { applyRecipeUpdates } from "./update-lib.mjs";

const updates = [
  {
    en: {
      slug: "pecan-pie",
      title: "Pecan Pie",
      description:
        "A rich, gooey pie packed with toasted pecans in a dark corn syrup filling - toasting the pecans first and using dark corn syrup instead of light are what give real pecan pie its deeper, more caramelized flavor.",
      imageEmoji: "🥧",
      cookTimeMinutes: 65,
      servings: 8,
      ingredients: [
        { text: "1 pie crust", ingredient: "pie crust", quantity: 1 },
        { text: "1 1/2 cups pecans, toasted and roughly chopped", ingredient: "pecans", quantity: 1.5 },
        { text: "1 cup dark corn syrup", ingredient: "corn syrup", quantity: 1 },
        { text: "3 eggs", ingredient: "eggs", quantity: 3 },
        { text: "3/4 cup sugar", ingredient: "sugar", quantity: 0.75 },
        { text: "3 tbsp melted butter", ingredient: "butter", quantity: 3 },
        { text: "1 tsp vanilla extract", ingredient: "vanilla extract", quantity: 1 },
        { text: "1/4 tsp salt", ingredient: "salt", quantity: 0.25 },
      ],
      steps: [
        "Toast the pecans in a dry skillet or 350°F oven for 5 minutes until fragrant, then roughly chop - toasting first brings out their fullest flavor.",
        "Preheat oven to 350°F and fit the pie crust into a pie dish.",
        "Whisk together the dark corn syrup, eggs, sugar, melted butter, vanilla, and salt - dark corn syrup instead of light is what gives real pecan pie its deeper, caramelized flavor.",
        "Stir in the toasted pecans and pour into the crust.",
        "Bake for 50-55 minutes until set and golden, covering the edges with foil if browning too quickly.",
      ],
      tags: ["dessert", "vegetarian", "baking"],
    },
    bg: {
      title: "Пай с орехи пекан",
      description:
        "Наситен, лепкав пай, богат на препечени орехи пекан в плънка от тъмен царевичен сироп - препичането на орехите първо и използването на тъмен вместо светъл царевичен сироп е това, което придава на истинския пай с пекан по-дълбокия му, карамелизиран вкус.",
      steps: [
        "Препечете орехите пекан в сух тиган или фурна на 180°C за 5 минути до ароматизиране, после ги нарежете едро - препичането първо разкрива пълния им вкус.",
        "Загрейте фурната на 180°C и наредете тестото в тава за пай.",
        "Разбийте тъмния царевичен сироп, яйцата, захарта, разтопеното масло, ванилията и солта заедно - тъмният царевичен сироп вместо светъл е това, което придава на истинския пай с пекан по-дълбокия му, карамелизиран вкус.",
        "Разбъркайте препечените орехи пекан и изсипете в тестото.",
        "Печете 50-55 минути до стягане и златисто, покривайки краищата с фолио, ако потъмняват твърде бързо.",
      ],
      ingredients: [
        "1 тесто за пай",
        "1 1/2 чаши орехи пекан, препечени и едро нарязани",
        "1 чаша тъмен царевичен сироп",
        "3 яйца",
        "3/4 чаша захар",
        "3 с.л. разтопено масло",
        "1 ч.л. ванилова есенция",
        "1/4 ч.л. сол",
      ],
    },
  },
  {
    en: {
      slug: "gingerbread-cookies",
      title: "Gingerbread Cookies",
      description:
        "Warmly spiced molasses cookies with a full blend of ginger, cinnamon, cloves, and allspice, chilled well before rolling out thin - a longer chill and a fuller spice blend are what most quick versions skip, leaving the dough too soft to roll cleanly and the flavor one-dimensional.",
      imageEmoji: "🍪",
      cookTimeMinutes: 150,
      servings: 24,
      ingredients: [
        { text: "3 cups flour", ingredient: "flour", quantity: 3 },
        { text: "3/4 cup butter, softened", ingredient: "butter", quantity: 0.75 },
        { text: "3/4 cup brown sugar", ingredient: "brown sugar", quantity: 0.75 },
        { text: "1/2 cup molasses", ingredient: "molasses", quantity: 0.5 },
        { text: "1 egg", ingredient: "eggs", quantity: 1 },
        { text: "2 tsp ground ginger", ingredient: "ginger", quantity: 2 },
        { text: "1 tsp cinnamon", ingredient: "cinnamon", quantity: 1 },
        { text: "1/2 tsp ground cloves", ingredient: "cloves", quantity: 0.5 },
        { text: "1/2 tsp allspice", ingredient: "allspice", quantity: 0.5 },
        { text: "1/2 tsp baking soda", ingredient: "baking soda", quantity: 0.5 },
        { text: "1/2 tsp salt", ingredient: "salt", quantity: 0.5 },
      ],
      steps: [
        "Cream the butter and brown sugar, then beat in the molasses and egg.",
        "Mix in the flour, ginger, cinnamon, cloves, allspice, baking soda, and salt until a firm dough forms.",
        "Chill the dough for at least 2 hours, up to overnight - a longer chill is what makes the sticky dough firm enough to roll out cleanly.",
        "Roll out thin, about 1/8 inch, and cut into shapes - rolling thin is what gives gingerbread its characteristic snap instead of a cakey texture.",
        "Bake at 350°F for 8-10 minutes until just set.",
      ],
      tags: ["dessert", "vegetarian", "baking"],
    },
    bg: {
      title: "Меденки",
      description:
        "Топло подправени бисквити с меласа с пълна смес от джинджифил, канела, карамфил и бахар, добре охладени преди тънко разточване - по-дългото охлаждане и по-пълната смес от подправки са това, което повечето бързи версии пропускат, оставяйки тестото твърде меко за чисто разточване и вкуса едноизмерен.",
      steps: [
        "Разбийте маслото и кафявата захар на крем, после добавете меласата и яйцето.",
        "Разбъркайте брашното, джинджифила, канелата, карамфила, бахара, содата за хляб и солта, докато се образува стегнато тесто.",
        "Охладете тестото поне 2 часа, до цяла нощ - по-дългото охлаждане е това, което прави лепкавото тесто достатъчно стегнато за чисто разточване.",
        "Разточете тънко, около 3 мм, и изрежете форми - тънкото разточване е това, което придава на меденките характерната им чупливост, вместо кексова текстура.",
        "Печете на 180°C 8-10 минути до леко стягане.",
      ],
      ingredients: [
        "3 чаши брашно",
        "3/4 чаша масло, омекнало",
        "3/4 чаша кафява захар",
        "1/2 чаша меласа",
        "1 яйце",
        "2 ч.л. смлян джинджифил",
        "1 ч.л. канела",
        "1/2 ч.л. смлян карамфил",
        "1/2 ч.л. бахар",
        "1/2 ч.л. сода за хляб",
        "1/2 ч.л. сол",
      ],
    },
  },
];

applyRecipeUpdates(updates).catch((err) => {
  console.error(err);
  process.exit(1);
});
