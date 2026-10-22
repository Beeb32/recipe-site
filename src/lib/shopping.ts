// Turns the ingredient lines of the planned recipes into one grouped shopping list. Pure logic, no server code.

export type Aisle = "produce" | "meat" | "dairy" | "bakery" | "pantry" | "spices";
export const AISLES: Aisle[] = ["produce", "meat", "dairy", "bakery", "pantry", "spices"];

export type IngredientLine = { text: string; name: string };
export type PlannedRecipe = { slug: string; title: string; count: number; lines: IngredientLine[] };

export type ShoppingItem = {
  key: string;
  label: string;
  aisle: Aisle;
  amounts: { unit: string; value: number }[];
  recipes: string[];
  noAmount: boolean;
};
export type ShoppingGroup = { aisle: Aisle; items: ShoppingItem[] };

// ---- reading the amount at the start of an ingredient line ----

const UNICODE_FRACTIONS: Record<string, number> = {
  "½": 0.5, "¼": 0.25, "¾": 0.75, "⅓": 1 / 3, "⅔": 2 / 3, "⅛": 0.125,
};

const UNITS: Record<string, string> = {
  cup: "cup", cups: "cup", чаша: "cup", чаши: "cup",
  tbsp: "tbsp", tablespoon: "tbsp", tablespoons: "tbsp", "с.л.": "tbsp", "с.л": "tbsp",
  tsp: "tsp", teaspoon: "tsp", teaspoons: "tsp", "ч.л.": "tsp", "ч.л": "tsp",
  oz: "oz", ounce: "oz", ounces: "oz", унция: "oz", унции: "oz",
  lb: "lb", lbs: "lb", pound: "lb", pounds: "lb", фунт: "lb", фунта: "lb",
  g: "g", gram: "g", grams: "g", г: "g",
  kg: "kg", кг: "kg",
  ml: "ml", мл: "ml",
  l: "l", liter: "l", liters: "l", litre: "l", litres: "l", л: "l",
  clove: "clove", cloves: "clove", скилидка: "clove", скилидки: "clove",
  can: "can", cans: "can", кутия: "can", кутии: "can",
  pinch: "pinch", щипка: "pinch",
  bunch: "bunch", връзка: "bunch", връзки: "bunch",
  slice: "slice", slices: "slice", резен: "slice", резена: "slice",
  sprig: "sprig", sprigs: "sprig", клонка: "sprig", клонки: "sprig",
  stalk: "stalk", stalks: "stalk", стрък: "stalk", стръка: "stalk",
  stick: "stick", sticks: "stick",
  inch: "inch", inches: "inch", см: "cm",
};

function toNumber(s: string): number {
  return Number(s.replace(",", "."));
}

export type ParsedLine = { value: number | null; unit: string; rest: string };

export function parseLine(text: string): ParsedLine {
  const src = text.trim();
  // 1 1/2 | 1/2 | 1.5 | 2-3 (a range: buy the larger) | a unicode fraction
  const m = src.match(/^(\d+)\s+(\d+)\/(\d+)|^(\d+)\/(\d+)|^(\d+(?:[.,]\d+)?)(?:\s*[-–]\s*(\d+(?:[.,]\d+)?))?|^([½¼¾⅓⅔⅛])/);
  if (!m) return { value: null, unit: "", rest: src };
  let value: number;
  if (m[1] !== undefined) value = Number(m[1]) + Number(m[2]) / Number(m[3]);
  else if (m[4] !== undefined) value = Number(m[4]) / Number(m[5]);
  else if (m[6] !== undefined) value = m[7] !== undefined ? Math.max(toNumber(m[6]), toNumber(m[7])) : toNumber(m[6]);
  else value = UNICODE_FRACTIONS[m[8]];
  let after = src.slice(m[0].length);
  const um = after.match(/^\s*([A-Za-zА-Яа-я]+(?:\.[A-Za-zА-Яа-я]+)?\.?)/);
  let unit = "";
  if (um) {
    const token = um[1].toLowerCase();
    const known = UNITS[token] ?? UNITS[token.replace(/\.$/, "")];
    if (known) {
      unit = known;
      after = after.slice(um[0].length);
    }
  }
  let rest = after.replace(/^\s*(of\s+)?/i, "").trim();
  // "1 lb (450 g) pasta": the metric weight in brackets is the same amount - use it.
  if (unit === "lb" || unit === "oz") {
    const w = rest.match(/^\(\s*(?:about |около )?(\d+(?:[.,]\d+)?)\s*(g|г|ml|мл)\s*\)\s*/i);
    if (w) {
      value = toNumber(w[1]);
      unit = /^(ml|мл)$/i.test(w[2]) ? "ml" : "g";
      rest = rest.slice(w[0].length);
    }
  }
  return { value, unit, rest };
}

// ---- which aisle an ingredient belongs to ----

const PANTRY_FIRST =
  /\b(broth|stock|bouillon|sauce|paste|passata|puree|canned|crushed|vinegar|coconut (milk|cream)|peanut butter|breadcrumbs|cream of|oil|syrup|honey|jam|starch|flour)\b/;
const SPICES =
  /(^|\b)(salt|salt and pepper|black pepper|white pepper|peppercorns?|cumin|paprika|turmeric|cinnamon|cloves?|cardamom( pods)?|oregano|thyme|nutmeg|saffron|garam masala|curry powder|bay leaf|bay leaves|star anise|fennel seeds?|sumac|za'?atar|allspice|marjoram|rosemary|sage|vanilla( extract)?|asafoetida|mustard seeds?|sesame seeds?|ground [a-z ]+|chili (flakes|powder)|red pepper flakes|cayenne( pepper)?|aleppo pepper|chole masala|pav bhaji masala|kasuri methi|amchur|anise|marash|(garlic|onion|ginger|chili|chile) powder)\b/;
const DAIRY =
  /\b(milk|butter|cheese|cream|yogurt|eggs?|ghee|buttermilk|mozzarella|parmesan|parmigiano|feta|ricotta|sirene|kashkaval|labneh|kefir|halloumi|kefalotyri|mascarpone|paneer|pecorino|cheddar|gruyere|egg yolks?|egg whites?|creme fraiche)\b/;
const MEAT =
  /\b(chicken|beef|pork|lamb|veal|bacon|sausage|ham|turkey|duck|rabbit|fish|salmon|tuna|cod|shrimp|prawns?|anchov(y|ies)|squid|crab|lobster|mince|brisket|ribs|steak|chorizo|tilapia|sardines?|prosciutto|guanciale|pancetta|salami|haddock|liver|jowl|mutton|oxtail)\b/;
const PRODUCE =
  /\b(onions?|shallots?|garlic|ginger|tomato(es)?|potato(es)?|carrots?|celery|lettuce|spinach|kale|cabbage|cauliflower|broccoli|zucchini|eggplant|cucumber|peppers?|chil(i|ies|e|es)|jalape\w*|poblano|mushrooms?|lemons?|limes?|apples?|bananas?|oranges?|avocados?|parsley|cilantro|coriander leaves|basil|mint|dill|chives|scallions?|green onions?|leeks?|pumpkin|squash|beets?|radish(es)?|berries|strawberr\w*|mango|pineapple|peas|corn|plantains?|papaya|lemongrass|galangal|kaffir lime leaves|curry leaves|tomatillos?|arugula|fennel|asparagus|green beans|dates)\b/;
const BAKERY = /\b(bread|pita|tortillas?|buns?|rolls?|naan|pav|baguette|croissants?|pastry|dough|waffles?|bagels?)\b/;

export function aisleOf(name: string): Aisle {
  const n = name.toLowerCase();
  if (/\b(tortillas?|bread|buns?|baguette|pita|naan)\b/.test(n) && !/flour/.test(n)) return "bakery";
  if (PANTRY_FIRST.test(n)) return "pantry";
  if (/^(salt and )?pepper$/.test(n)) return "spices";
  if (DAIRY.test(n)) return "dairy";
  if (MEAT.test(n)) return "meat";
  if (SPICES.test(n)) return "spices";
  if (BAKERY.test(n)) return "bakery";
  if (PRODUCE.test(n)) return "produce";
  return "pantry";
}

// ---- building the list ----

function cleanLabel(rest: string): string {
  let label = rest.replace(/^\([^)]*\)\s*/, "").split(/[,(]/)[0].trim();
  label = label.replace(/^(a|an|the)\s+/i, "");
  return label.length > 0 ? label : rest.trim();
}

function capitalize(s: string): string {
  return s.length > 0 ? s[0].toUpperCase() + s.slice(1) : s;
}

export function aggregate(planned: PlannedRecipe[], locale: "en" | "bg", names: Record<string, string> = {}): ShoppingGroup[] {
  const items = new Map<string, ShoppingItem>();
  for (const recipe of planned) {
    for (const line of recipe.lines) {
      const parsed = parseLine(line.text);
      const key = line.name.toLowerCase();
      let item = items.get(key);
      if (!item) {
        item = {
          key,
          label: capitalize(locale === "bg" ? (names[key] ?? cleanLabel(parsed.rest)) : line.name),
          aisle: aisleOf(line.name),
          amounts: [],
          recipes: [],
          noAmount: false,
        };
        items.set(key, item);
      }
      if (!item.recipes.includes(recipe.title)) item.recipes.push(recipe.title);
      if (parsed.value === null) {
        item.noAmount = true;
        continue;
      }
      let unit = parsed.unit;
      let value = parsed.value * recipe.count;
      if (locale === "bg" && (unit === "lb" || unit === "oz")) {
        // metric for the Bulgarian list
        value = Math.round((value * (unit === "lb" ? 454 : 28.35)) / 5) * 5;
        unit = "g";
      }
      const existing = item.amounts.find((a) => a.unit === unit);
      if (existing) existing.value += value;
      else item.amounts.push({ unit, value });
    }
  }
  // 3+ teaspoons read better as tablespoons, 1000+ g / ml as kg / l.
  for (const item of items.values()) {
    const tsp = item.amounts.find((a) => a.unit === "tsp");
    if (tsp && tsp.value >= 3) {
      const converted = tsp.value / 3;
      const tbsp = item.amounts.find((a) => a.unit === "tbsp");
      if (tbsp) tbsp.value += converted;
      else item.amounts.push({ unit: "tbsp", value: converted });
      item.amounts = item.amounts.filter((a) => a !== tsp);
    }
    for (const [small, big] of [["g", "kg"], ["ml", "l"]] as const) {
      const a = item.amounts.find((x) => x.unit === small);
      if (a && a.value >= 1000) {
        const converted = a.value / 1000;
        const existing = item.amounts.find((x) => x.unit === big);
        if (existing) existing.value += converted;
        else item.amounts.push({ unit: big, value: converted });
        item.amounts = item.amounts.filter((x) => x !== a);
      }
    }
  }
  const groups: ShoppingGroup[] = AISLES.map((aisle) => ({ aisle, items: [] }));
  for (const item of items.values()) groups.find((g) => g.aisle === item.aisle)!.items.push(item);
  for (const g of groups) g.items.sort((a, b) => a.label.localeCompare(b.label, locale));
  return groups.filter((g) => g.items.length > 0);
}

// ---- showing amounts ----

const FRACTIONS = ["", "1/8", "1/4", "3/8", "1/2", "5/8", "3/4", "7/8"];

export function formatNumber(v: number): string {
  if (v >= 20) return String(Math.round(v));
  if (v >= 10) return String(Math.round(v * 2) / 2).replace(".5", " 1/2");
  const base = Math.floor(v);
  const rest = v - base;
  if (Math.abs(rest - 1 / 3) < 0.04) return base === 0 ? "1/3" : `${base} 1/3`;
  if (Math.abs(rest - 2 / 3) < 0.04) return base === 0 ? "2/3" : `${base} 2/3`;
  const eighths = Math.round(v * 8);
  const whole = Math.floor(eighths / 8);
  const frac = FRACTIONS[eighths % 8];
  if (!frac) return String(whole === 0 ? 0 : whole);
  return whole === 0 ? frac : `${whole} ${frac}`;
}

const UNIT_LABELS: Record<"en" | "bg", Record<string, [string, string]>> = {
  en: {
    cup: ["cup", "cups"], tbsp: ["tbsp", "tbsp"], tsp: ["tsp", "tsp"], oz: ["oz", "oz"], lb: ["lb", "lb"], g: ["g", "g"],
    kg: ["kg", "kg"], ml: ["ml", "ml"], l: ["l", "l"], clove: ["clove", "cloves"], can: ["can", "cans"], pinch: ["pinch", "pinches"],
    bunch: ["bunch", "bunches"], slice: ["slice", "slices"], sprig: ["sprig", "sprigs"], stalk: ["stalk", "stalks"],
    stick: ["stick", "sticks"], inch: ["inch", "inches"], cm: ["cm", "cm"],
  },
  bg: {
    cup: ["чаша", "чаши"], tbsp: ["с.л.", "с.л."], tsp: ["ч.л.", "ч.л."], oz: ["унция", "унции"], lb: ["фунт", "фунта"], g: ["г", "г"],
    kg: ["кг", "кг"], ml: ["мл", "мл"], l: ["л", "л"], clove: ["скилидка", "скилидки"], can: ["кутия", "кутии"], pinch: ["щипка", "щипки"],
    bunch: ["връзка", "връзки"], slice: ["резен", "резена"], sprig: ["клонка", "клонки"], stalk: ["стрък", "стръка"],
    stick: ["клечка", "клечки"], inch: ["инч", "инча"], cm: ["см", "см"],
  },
};

export function formatAmounts(amounts: { unit: string; value: number }[], locale: "en" | "bg"): string {
  return amounts
    .map((a) => {
      const num = formatNumber(a.value);
      if (!a.unit) return num;
      const labels = UNIT_LABELS[locale][a.unit] ?? [a.unit, a.unit];
      return `${num} ${a.value > 1 ? labels[1] : labels[0]}`;
    })
    .join(" + ");
}
