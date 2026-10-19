"use client";

import Link from "next/link";
import { useCallback, useMemo, useState, useSyncExternalStore } from "react";
import type { Locale } from "@/lib/locale";
import { t } from "@/lib/i18n";
import {
  DEFAULT_GOAL,
  MEALS,
  dayDate,
  dayTotals,
  shiftWeek,
  slotKey,
  slugCounts,
  suggestPlan,
  toKey,
  weekKeyFor,
  weekTotals,
  type Goal,
  type Meal,
  type Plan,
  type PlanRecipe,
} from "@/lib/planner";
import { PlannerPicker } from "@/components/PlannerPicker";
import { ShoppingList } from "@/components/ShoppingList";

const planKey = (week: string) => `wtc.planner.plan.${week}`;
const GOAL_KEY = "wtc.planner.goal";

function loadPlan(week: string): Plan {
  try {
    const raw = localStorage.getItem(planKey(week));
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed && typeof parsed === "object" ? (parsed as Plan) : {};
  } catch {
    return {};
  }
}

function loadGoal(): Goal {
  try {
    const raw = localStorage.getItem(GOAL_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    if (parsed && Number(parsed.kcal) > 0 && Number(parsed.protein) > 0) {
      return { kcal: Number(parsed.kcal), protein: Number(parsed.protein) };
    }
  } catch {
    /* fall through to the default */
  }
  return DEFAULT_GOAL;
}

function Bar({ value, goal, warn = true }: { value: number; goal: number; warn?: boolean }) {
  const pct = goal > 0 ? Math.min(100, (value / goal) * 100) : 0;
  const over = warn && goal > 0 && value > goal * 1.1;
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/10 dark:bg-white/15">
      <div className={`h-full rounded-full ${over ? "bg-amber-500" : "bg-accent"}`} style={{ width: `${pct}%` }} />
    </div>
  );
}

const subscribeNothing = () => () => {};

// Dates and saved data only exist in the browser, so the planner itself renders after hydration (server HTML stays a placeholder).
export function MealPlanner(props: { recipes: PlanRecipe[]; favoriteSlugs: string[]; locale: Locale }) {
  const isClient = useSyncExternalStore(subscribeNothing, () => true, () => false);
  if (!isClient) return <div className="min-h-[24rem]" aria-busy="true" />;
  return <Planner {...props} />;
}

function Planner({
  recipes,
  favoriteSlugs,
  locale,
}: {
  recipes: PlanRecipe[];
  favoriteSlugs: string[];
  locale: Locale;
}) {
  const strings = t(locale);
  const bySlug = useMemo(() => new Map(recipes.map((r) => [r.slug, r])), [recipes]);
  const favorites = useMemo(() => new Set(favoriteSlugs), [favoriteSlugs]);

  const [week, setWeek] = useState(() => weekKeyFor(new Date()));
  const [today] = useState(() => toKey(new Date()));
  const [plan, setPlan] = useState<Plan>(() => loadPlan(weekKeyFor(new Date())));
  const [goal, setGoal] = useState<Goal>(() => loadGoal());
  const [selDay, setSelDay] = useState(() => (new Date().getDay() + 6) % 7);
  const [picker, setPicker] = useState<{ day: number; meal: Meal } | null>(null);
  const [showList, setShowList] = useState(false);
  const [editGoal, setEditGoal] = useState(false);
  const [goalDraft, setGoalDraft] = useState({ kcal: "", protein: "" });
  const [dragKey, setDragKey] = useState<string | null>(null);
  const [overKey, setOverKey] = useState<string | null>(null);

  const savePlan = useCallback(
    (next: Plan) => {
      setPlan(next);
      try {
        localStorage.setItem(planKey(week), JSON.stringify(next));
      } catch {
        /* storage unavailable - the plan just won't persist */
      }
    },
    [week],
  );

  const goToWeek = (key: string) => {
    setWeek(key);
    setPlan(loadPlan(key));
  };

  const fmt = useMemo(() => {
    const tag = locale === "bg" ? "bg-BG" : "en-GB";
    return {
      weekday: new Intl.DateTimeFormat(tag, { weekday: "short" }),
      date: new Intl.DateTimeFormat(tag, { day: "numeric", month: "short" }),
    };
  }, [locale]);

  const setSlot = (day: number, meal: Meal, slug: string | null) => {
    const next = { ...plan };
    if (slug) next[slotKey(day, meal)] = slug;
    else delete next[slotKey(day, meal)];
    savePlan(next);
  };

  const dropOn = (targetKey: string) => {
    if (dragKey && dragKey !== targetKey) {
      const next = { ...plan };
      const moving = next[dragKey];
      const existing = next[targetKey];
      if (moving) {
        next[targetKey] = moving;
        if (existing) next[dragKey] = existing;
        else delete next[dragKey];
        savePlan(next);
      }
    }
    setDragKey(null);
    setOverKey(null);
  };

  const planned = useMemo(() => Object.values(plan).filter((s) => bySlug.has(s)).length, [plan, bySlug]);
  const counts = useMemo(() => slugCounts(plan, bySlug), [plan, bySlug]);
  const totals = useMemo(() => weekTotals(plan, bySlug), [plan, bySlug]);

  const days = Array.from({ length: 7 }, (_, d) => {
    const date = dayDate(week, d);
    return { d, date, key: toKey(date), label: fmt.weekday.format(date), sub: fmt.date.format(date) };
  });
  const thisWeek = weekKeyFor(new Date()) === week;
  const weekLabel = `${fmt.date.format(days[0].date)} - ${fmt.date.format(days[6].date)}`;

  const slotCard = (day: number, meal: Meal, compact: boolean) => {
    const key = slotKey(day, meal);
    const recipe = bySlug.get(plan[key] ?? "");
    const isOver = overKey === key && dragKey !== key;
    const base = `relative rounded-xl border transition ${
      isOver ? "border-accent bg-accent/10" : "border-black/10 dark:border-white/15"
    }`;
    const dropProps = {
      onDragOver: (e: React.DragEvent) => {
        if (!dragKey) return;
        e.preventDefault();
        setOverKey(key);
      },
      onDragLeave: () => setOverKey((k) => (k === key ? null : k)),
      onDrop: (e: React.DragEvent) => {
        e.preventDefault();
        dropOn(key);
      },
    };
    if (!recipe) {
      return (
        <button
          type="button"
          onClick={() => setPicker({ day, meal })}
          aria-label={`${strings.plannerAdd}: ${strings.plannerMeal[meal]}`}
          className={`${base} flex w-full items-center justify-center border-dashed ${compact ? "min-h-20" : "min-h-24"} text-2xl opacity-50 hover:opacity-100 hover:border-accent hover:text-accent`}
          {...dropProps}
        >
          +
        </button>
      );
    }
    return (
      <div
        draggable
        onDragStart={(e) => {
          setDragKey(key);
          e.dataTransfer.effectAllowed = "move";
          e.dataTransfer.setData("text/plain", key);
        }}
        onDragEnd={() => {
          setDragKey(null);
          setOverKey(null);
        }}
        className={`${base} group w-full cursor-grab bg-black/[0.02] dark:bg-white/[0.04] p-2 ${dragKey === key ? "opacity-40" : ""}`}
        {...dropProps}
      >
        <Link href={`/recipes/${recipe.slug}`} draggable={false} className="flex items-start gap-2">
          <span className="text-2xl leading-none" aria-hidden>
            {recipe.emoji}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-xs font-medium leading-snug line-clamp-2 hover:text-accent">{recipe.title}</span>
            <span className="mt-0.5 block text-[11px] opacity-60">
              {recipe.kcal != null ? `${recipe.kcal} ${strings.kcal}` : `${recipe.time} ${strings.min}`}
              {recipe.protein != null ? ` · ${recipe.protein} g` : ""}
            </span>
          </span>
        </Link>
        <div className="mt-1 flex justify-end gap-1 text-[11px] opacity-70 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100 transition">
          <button type="button" onClick={() => setPicker({ day, meal })} className="rounded px-1.5 py-0.5 hover:bg-black/10 dark:hover:bg-white/10">
            {strings.plannerChange}
          </button>
          <button
            type="button"
            onClick={() => setSlot(day, meal, null)}
            aria-label={strings.plannerRemove}
            className="rounded px-1.5 py-0.5 hover:bg-black/10 dark:hover:bg-white/10"
          >
            ×
          </button>
        </div>
      </div>
    );
  };

  const totalsBlock = (day: number) => {
    const tt = dayTotals(plan, bySlug, day);
    return (
      <div className="space-y-1.5 text-[11px]">
        <div>
          <div className="mb-0.5 flex justify-between">
            <span className="font-medium">{tt.kcal} {strings.kcal}</span>
            <span className="opacity-50">{goal.kcal}</span>
          </div>
          <Bar value={tt.kcal} goal={goal.kcal} />
        </div>
        <div>
          <div className="mb-0.5 flex justify-between">
            <span className="font-medium">{strings.plannerProteinG(tt.protein)}</span>
            <span className="opacity-50">{goal.protein}</span>
          </div>
          <Bar value={tt.protein} goal={goal.protein} warn={false} />
        </div>
      </div>
    );
  };

  const autoFill = () => savePlan(suggestPlan(plan, recipes, goal, Math.random));
  const clearWeek = () => {
    if (planned === 0 || window.confirm(strings.plannerClearConfirm)) savePlan({});
  };

  const openGoalEditor = () => {
    setGoalDraft({ kcal: String(goal.kcal), protein: String(goal.protein) });
    setEditGoal(true);
  };
  const saveGoal = () => {
    const kcal = Math.round(Number(goalDraft.kcal));
    const protein = Math.round(Number(goalDraft.protein));
    if (kcal >= 500 && kcal <= 10000 && protein >= 10 && protein <= 500) {
      const next = { kcal, protein };
      setGoal(next);
      try {
        localStorage.setItem(GOAL_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      setEditGoal(false);
    }
  };

  const btn =
    "rounded-full border border-black/15 dark:border-white/25 px-4 py-1.5 text-sm hover:border-accent hover:text-accent transition";
  const pickerSlot = picker ? bySlug.get(plan[slotKey(picker.day, picker.meal)] ?? "") : undefined;

  return (
    <div>
      {/* toolbar */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => goToWeek(shiftWeek(week, -1))} aria-label={strings.plannerPrevWeek} className="rounded-full border border-black/15 dark:border-white/25 h-9 w-9 hover:border-accent hover:text-accent transition">
            ‹
          </button>
          <div className="min-w-40 text-center text-sm font-medium">{strings.plannerWeekOf(weekLabel)}</div>
          <button type="button" onClick={() => goToWeek(shiftWeek(week, 1))} aria-label={strings.plannerNextWeek} className="rounded-full border border-black/15 dark:border-white/25 h-9 w-9 hover:border-accent hover:text-accent transition">
            ›
          </button>
          {!thisWeek && (
            <button type="button" onClick={() => goToWeek(weekKeyFor(new Date()))} className="ml-1 text-sm text-accent hover:underline">
              {strings.plannerThisWeek}
            </button>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button type="button" onClick={autoFill} className="rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-black hover:brightness-110 transition">
            ✨ {strings.plannerAutoFill}
          </button>
          <button type="button" onClick={() => setShowList(true)} className={btn}>
            🛒 {strings.plannerShopping(Object.keys(counts).length)}
          </button>
          <button type="button" onClick={clearWeek} disabled={planned === 0} className={`${btn} disabled:opacity-40 disabled:hover:border-black/15`}>
            {strings.plannerClear}
          </button>
        </div>
      </div>

      {/* goal + summary */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-sm opacity-80">
        {editGoal ? (
          <form
            className="flex flex-wrap items-center gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              saveGoal();
            }}
          >
            <label className="flex items-center gap-1">
              <input
                type="number"
                min={500}
                max={10000}
                value={goalDraft.kcal}
                onChange={(e) => setGoalDraft((g) => ({ ...g, kcal: e.target.value }))}
                className="w-20 rounded-md border border-black/15 dark:border-white/25 bg-transparent px-2 py-1"
                aria-label={strings.calories}
              />
              {strings.kcal}
            </label>
            <label className="flex items-center gap-1">
              <input
                type="number"
                min={10}
                max={500}
                value={goalDraft.protein}
                onChange={(e) => setGoalDraft((g) => ({ ...g, protein: e.target.value }))}
                className="w-16 rounded-md border border-black/15 dark:border-white/25 bg-transparent px-2 py-1"
                aria-label={strings.protein}
              />
              g {strings.protein.toLowerCase()}
            </label>
            <button type="submit" className="rounded-full bg-foreground px-3 py-1 text-background">
              {strings.plannerSave}
            </button>
          </form>
        ) : (
          <div>
            {strings.plannerGoal(goal.kcal, goal.protein)}{" "}
            <button type="button" onClick={openGoalEditor} className="text-accent hover:underline">
              {strings.plannerEditGoal}
            </button>
          </div>
        )}
        <div>
          {strings.plannerPlanned(planned)}
          {totals.meals > 0 ? ` · ${strings.plannerAverage(totals.avgKcal, totals.avgProtein)}` : ""}
        </div>
      </div>

      {/* desktop: the whole week */}
      <div className="hidden md:grid grid-cols-[64px_repeat(7,minmax(0,1fr))] gap-2">
        <div />
        {days.map((day) => (
          <div
            key={day.d}
            className={`rounded-lg py-1.5 text-center ${day.key === today ? "bg-accent/15 text-accent" : ""}`}
          >
            <div className="text-sm font-semibold capitalize">{day.label}</div>
            <div className="text-[11px] opacity-60">{day.key === today ? strings.plannerToday : day.sub}</div>
          </div>
        ))}
        {MEALS.map((meal) => (
          <div key={meal} className="contents">
            <div className="pt-3 text-xs font-medium opacity-70">{strings.plannerMeal[meal]}</div>
            {days.map((day) => (
              <div key={day.d} className="flex">{slotCard(day.d, meal, false)}</div>
            ))}
          </div>
        ))}
        <div className="pt-1 text-xs font-medium opacity-70">{strings.plannerTotal}</div>
        {days.map((day) => (
          <div key={day.d}>{totalsBlock(day.d)}</div>
        ))}
      </div>

      {/* phone: one day at a time */}
      <div className="md:hidden">
        <div className="mb-3 grid grid-cols-7 gap-1">
          {days.map((day) => {
            const tt = dayTotals(plan, bySlug, day.d);
            const active = day.d === selDay;
            return (
              <button
                key={day.d}
                type="button"
                onClick={() => setSelDay(day.d)}
                aria-pressed={active}
                className={`rounded-lg border py-1.5 text-center transition ${
                  active ? "border-accent bg-accent/15 text-accent" : "border-black/10 dark:border-white/15"
                }`}
              >
                <div className="text-[11px] font-semibold capitalize">{day.label}</div>
                <div className="text-[11px] opacity-60">{fmt.date.format(day.date).split(" ")[0]}</div>
                <div className={`mx-auto mt-1 h-1 w-1 rounded-full ${tt.meals > 0 ? "bg-accent" : "bg-transparent"}`} />
              </button>
            );
          })}
        </div>
        <div className="space-y-3">
          {MEALS.map((meal) => (
            <div key={meal}>
              <div className="mb-1 text-xs font-medium opacity-70">{strings.plannerMeal[meal]}</div>
              {slotCard(selDay, meal, true)}
            </div>
          ))}
          <div className="rounded-xl border border-black/10 dark:border-white/15 p-3">
            <div className="mb-2 text-xs font-medium opacity-70">
              {strings.plannerTotal} - {days[selDay].label} {days[selDay].sub}
            </div>
            {totalsBlock(selDay)}
          </div>
        </div>
      </div>

      <p className="mt-6 text-center text-xs opacity-50">
        <span className="hidden md:inline">{strings.plannerDragHint} </span>
        {strings.plannerSavedNote}
      </p>

      {picker && (
        <PlannerPicker
          recipes={recipes}
          favoriteSlugs={favorites}
          meal={picker.meal}
          locale={locale}
          currentSlug={pickerSlot?.slug}
          onPick={(slug) => {
            setSlot(picker.day, picker.meal, slug);
            setPicker(null);
          }}
          onRemove={
            pickerSlot
              ? () => {
                  setSlot(picker.day, picker.meal, null);
                  setPicker(null);
                }
              : undefined
          }
          onClose={() => setPicker(null)}
        />
      )}
      {showList && <ShoppingList counts={counts} week={week} locale={locale} onClose={() => setShowList(false)} />}
    </div>
  );
}
