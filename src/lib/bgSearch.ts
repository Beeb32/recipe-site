// Word-level Bulgarian matching for the ingredient search. No imports on purpose, so it can be unit tested with plain Node.
//
// Bulgarian inflects its nouns and adjectives (чушка / чушки / чушката / чушките, червен / червена / червени), so a
// plain "text includes query" check both misses plurals (the old bug: "чушка" never found a recipe that says "чушки")
// and matches inside unrelated words ("сол" inside "осолено", "око" inside "шоколад"). Instead the query and the term
// are split into words, every word is reduced to a rough stem, and a term matches only when each query word has the
// same stem as one of the term's words.

// Longest first. A suffix is only removed when at least 3 letters remain.
const SUFFIXES = [
  "ете", "ите", "ята", "ата", "ето", "ото", "ове", "еве", "ета", "ият",
  "ът", "ят", "ия", "та", "те", "то",
  "и", "а", "я", "е", "о", "у", "ъ",
];

// Meat words come as a noun and as an adjective with a different root (пиле / пилешки, агне / агнешко): same stem.
const STEM_ALIASES: Record<string, string> = {
  пилешк: "пил",
  агнешк: "агн",
  телешк: "тел",
  свинск: "свин",
  говежд: "говед",
  заешк: "заек",
  патешк: "патик",
  пуешк: "пуйк",
};

// Names that are one product even though they are two words, so "мляко" must not find yogurt.
const COMPOUNDS: [string, string][] = [["кисело мляко", "киселомляко"]];

export function bgStem(word: string): string {
  const w0 = word.toLowerCase().replace(/ё/g, "е");
  const s = stemCore(w0);
  return STEM_ALIASES[s] ?? s;
}

function stemCore(word: string): string {
  let w = word;
  if (w.length <= 3) return w;
  for (const suffix of SUFFIXES) {
    if (w.endsWith(suffix) && w.length - suffix.length >= 3) {
      w = w.slice(0, -suffix.length);
      break;
    }
  }
  // plural alternation: фъстък / фъстъци, краставица / краставици
  if (w.length >= 4 && w.endsWith("ц")) w = w.slice(0, -1) + "к";
  return w;
}

export function bgWords(text: string): string[] {
  let t = text.toLowerCase();
  for (const [phrase, joined] of COMPOUNDS) t = t.split(phrase).join(joined);
  return t
    .split(/[^\p{L}\p{N}]+/u)
    .filter((w) => w.length > 0);
}

export function hasCyrillic(text: string): boolean {
  return /[Ѐ-ӿ]/.test(text);
}

/** True when every word of the query has the same stem as some word of the term. */
export function bgTermMatches(term: string, query: string): boolean {
  const queryStems = bgWords(query).map(bgStem);
  if (queryStems.length === 0) return false;
  const termStems = new Set(bgWords(term).map(bgStem));
  return queryStems.every((s) => termStems.has(s));
}
