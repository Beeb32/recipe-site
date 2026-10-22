// Run with: node --test tests/
import test from "node:test";
import assert from "node:assert/strict";
import { weekKeyFor, shiftWeek, dayDate, toKey, suggestPlan, dayTotals, slotKey, MEALS, DEFAULT_GOAL } from "../src/lib/planner.ts";
import { parseLine, aggregate, aisleOf, formatAmounts, formatNumber } from "../src/lib/shopping.ts";

test("weeks start on Monday", () => {
  assert.equal(weekKeyFor(new Date(2026, 9, 21)), "2026-10-19"); // Wed 21 Oct -> Mon 19 Oct
  assert.equal(weekKeyFor(new Date(2026, 9, 25)), "2026-10-19"); // Sun
  assert.equal(weekKeyFor(new Date(2026, 9, 26)), "2026-10-26"); // next Mon
  assert.equal(shiftWeek("2026-10-26", -1), "2026-10-19");
  assert.equal(shiftWeek("2026-12-28", 1), "2027-01-04");
  assert.equal(toKey(dayDate("2026-10-19", 6)), "2026-10-25");
});

test("parseLine reads amounts and units in English and Bulgarian", () => {
  assert.deepEqual(parseLine("1 1/2 cups parboiled (idli) rice"), { value: 1.5, unit: "cup", rest: "parboiled (idli) rice" });
  assert.deepEqual(parseLine("3 tbsp olive oil"), { value: 3, unit: "tbsp", rest: "olive oil" });
  assert.deepEqual(parseLine("1/2 tsp salt"), { value: 0.5, unit: "tsp", rest: "salt" });
  assert.equal(parseLine("2-3 cloves garlic").value, 3);
  assert.equal(parseLine("2-3 cloves garlic").unit, "clove");
  assert.equal(parseLine("6 large eggs").unit, "");
  assert.equal(parseLine("Salt, to taste").value, null);
  assert.equal(parseLine("A pinch of saffron").value, null);
  const bg = parseLine("450г картофи");
  assert.equal(bg.value, 450);
  assert.equal(bg.unit, "g");
  assert.equal(parseLine("2 с.л. олио").unit, "tbsp");
  assert.equal(parseLine("1 1/2 ч.л. сол").unit, "tsp");
  assert.equal(parseLine("1.5 lb beef").value, 1.5);
});

test("aisles", () => {
  assert.equal(aisleOf("onion"), "produce");
  assert.equal(aisleOf("black pepper"), "spices");
  assert.equal(aisleOf("bell pepper"), "produce");
  assert.equal(aisleOf("eggplant"), "produce");
  assert.equal(aisleOf("eggs"), "dairy");
  assert.equal(aisleOf("butter"), "dairy");
  assert.equal(aisleOf("peanut butter"), "pantry");
  assert.equal(aisleOf("chicken thighs"), "meat");
  assert.equal(aisleOf("chicken broth"), "pantry");
  assert.equal(aisleOf("coconut milk"), "pantry");
  assert.equal(aisleOf("tomato paste"), "pantry");
  assert.equal(aisleOf("tomato"), "produce");
  assert.equal(aisleOf("pav rolls"), "bakery");
  assert.equal(aisleOf("breadcrumbs"), "pantry");
  assert.equal(aisleOf("ground ginger"), "spices");
  assert.equal(aisleOf("ginger"), "produce");
  assert.equal(aisleOf("fish sauce"), "pantry");
  assert.equal(aisleOf("olive oil"), "pantry");
});

test("shopping list merges the same ingredient across recipes", () => {
  const groups = aggregate(
    [
      { slug: "a", title: "A", count: 1, lines: [{ text: "2 tbsp olive oil", name: "olive oil" }, { text: "1 onion, sliced", name: "onion" }, { text: "Salt, to taste", name: "salt" }] },
      { slug: "b", title: "B", count: 2, lines: [{ text: "1 tbsp olive oil", name: "olive oil" }, { text: "2 onions", name: "onion" }, { text: "1 cup rice", name: "rice" }] },
    ],
    "en",
  );
  const all = groups.flatMap((g) => g.items);
  const oil = all.find((i) => i.key === "olive oil");
  assert.equal(formatAmounts(oil.amounts, "en"), "4 tbsp"); // 2 + 1*2
  assert.deepEqual(oil.recipes, ["A", "B"]);
  const onion = all.find((i) => i.key === "onion");
  assert.equal(formatAmounts(onion.amounts, "en"), "5"); // 1 + 2*2
  assert.equal(all.find((i) => i.key === "salt").noAmount, true);
  assert.equal(formatAmounts(all.find((i) => i.key === "rice").amounts, "en"), "2 cups");
  assert.equal(groups.find((g) => g.items.some((i) => i.key === "onion")).aisle, "produce");
});

test("units of different kinds stay separate, small amounts roll up", () => {
  const groups = aggregate(
    [
      { slug: "a", title: "A", count: 1, lines: [{ text: "2 cups milk", name: "milk" }, { text: "2 tsp sugar", name: "sugar" }] },
      { slug: "b", title: "B", count: 1, lines: [{ text: "100 ml milk", name: "milk" }, { text: "2 tsp sugar", name: "sugar" }] },
    ],
    "en",
  );
  const items = groups.flatMap((g) => g.items);
  assert.equal(formatAmounts(items.find((i) => i.key === "milk").amounts, "en"), "2 cups + 100 ml");
  assert.equal(formatAmounts(items.find((i) => i.key === "sugar").amounts, "en"), "1 1/3 tbsp"); // 4 tsp -> 1 1/3 tbsp (rounded to eighths below)
});

test("formatNumber", () => {
  assert.equal(formatNumber(0.5), "1/2");
  assert.equal(formatNumber(1.5), "1 1/2");
  assert.equal(formatNumber(3), "3");
  assert.equal(formatNumber(450), "450");
  assert.equal(formatNumber(0.33), "1/3");
  assert.equal(formatNumber(2.67), "2 2/3");
});

function recipe(slug, tags, kcal, protein = 20) {
  return { slug, title: slug, emoji: "x", kcal, protein, time: 30, servings: 4, tags };
}

test("auto-fill fills every empty slot, keeps what is planned, and avoids repeats", () => {
  const recipes = [];
  for (let i = 0; i < 20; i++) recipes.push(recipe(`b${i}`, ["breakfast"], 300 + i * 10));
  for (let i = 0; i < 20; i++) recipes.push(recipe(`l${i}`, ["lunch", i % 2 ? "italian" : "thai"], 450 + i * 10));
  for (let i = 0; i < 30; i++) recipes.push(recipe(`d${i}`, ["dinner", i % 3 ? "french" : "greek"], 550 + i * 10));
  recipes.push(recipe("cake", ["dessert", "dinner"], 400));
  const fixed = { [slotKey(2, "dinner")]: "d5" };
  let n = 0;
  const rand = () => ((n = (n * 9301 + 49297) % 233280) / 233280);
  const plan = suggestPlan(fixed, recipes, DEFAULT_GOAL, rand);
  assert.equal(Object.keys(plan).length, 21);
  assert.equal(plan[slotKey(2, "dinner")], "d5");
  const used = Object.values(plan);
  assert.equal(new Set(used).size, used.length); // enough recipes, so no repeats
  assert.ok(!used.includes("cake"));
  for (let d = 0; d < 7; d++) {
    assert.ok(plan[slotKey(d, "breakfast")].startsWith("b"));
    assert.ok(plan[slotKey(d, "lunch")].startsWith("l"));
    assert.ok(plan[slotKey(d, "dinner")].startsWith("d"));
  }
  const bySlug = new Map(recipes.map((r) => [r.slug, r]));
  for (let d = 0; d < 7; d++) {
    const t = dayTotals(plan, bySlug, d);
    assert.ok(t.kcal > 1200 && t.kcal < 2400, `day ${d} kcal ${t.kcal}`);
  }
});

test("auto-fill still works with a tiny catalogue", () => {
  const recipes = [recipe("only", ["dinner"], 500)];
  const plan = suggestPlan({}, recipes, DEFAULT_GOAL);
  assert.equal(Object.keys(plan).length, 21);
  assert.ok(MEALS.every((m) => plan[slotKey(0, m)] === "only"));
});

test("bracketed metric weights and Bulgarian lists", () => {
  const a = parseLine("1 lb (450g) spaghetti");
  assert.deepEqual([a.value, a.unit, a.rest], [450, "g", "spaghetti"]);
  const b = parseLine("1/2 lb (225г) свинска кайма");
  assert.deepEqual([b.value, b.unit], [225, "g"]);
  const groups = aggregate(
    [{ slug: "x", title: "X", count: 1, lines: [{ text: "2 lb chicken thighs", name: "chicken thighs" }, { text: "1 cup flour", name: "flour" }] }],
    "bg",
    { "chicken thighs": "Пилешки бутчета" },
  );
  const meat = groups.find((g) => g.aisle === "meat").items[0];
  assert.equal(meat.label, "Пилешки бутчета");
  assert.deepEqual(meat.amounts, [{ unit: "g", value: 910 }]);
});

import { bgStem, bgTermMatches } from "../src/lib/bgSearch.ts";

test("Bulgarian search: plurals match, substrings do not", () => {
  for (const pair of [["чушка", "чушки"], ["чушки", "чушката"], ["домат", "доматите"], ["яйце", "яйца"], ["лук", "лукове"], ["сирене", "сиренето"], ["фъстък", "фъстъци"], ["червен", "червената"], ["пиле", "пилета"], ["мляко", "млякото"]]) {
    assert.equal(bgStem(pair[0]), bgStem(pair[1]), pair.join(" / "));
  }
  assert.equal(bgTermMatches("чушки", "чушка"), true);
  assert.equal(bgTermMatches("чушка", "чушки"), true);
  assert.equal(bgTermMatches("червена чушка", "чушки"), true);
  assert.equal(bgTermMatches("червена чушка", "червен лук"), false);
  // the old substring check let these through
  assert.equal(bgTermMatches("осолено говеждо", "сол"), false);
  assert.equal(bgTermMatches("шоколад", "око"), false);
  assert.equal(bgTermMatches("оризов оцет", "ориз"), false);
  assert.equal(bgTermMatches("доматен сос", "домат"), false);
  assert.equal(bgTermMatches("ориз басмати", "ориз"), true);
  assert.equal(bgTermMatches("кисело мляко", "кисело мляко"), true);
});

test("Bulgarian search: meat adjectives, yogurt is not milk", () => {
  assert.equal(bgTermMatches("пилешки гърди", "пиле"), true);
  assert.equal(bgTermMatches("свинско месо", "свинско"), true);
  assert.equal(bgTermMatches("агнешко", "агне"), true);
  assert.equal(bgTermMatches("кисело мляко", "мляко"), false);
  assert.equal(bgTermMatches("кисело мляко", "кисело мляко"), true);
  assert.equal(bgTermMatches("кокосово мляко", "мляко"), true);
});
