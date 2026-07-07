import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import { chapters } from "@/data/chapters";
import { exercisesForChapter, allExercises, exerciseSlug } from "@/data/exercises";
import { useProgress } from "@/hooks/use-progress";

export const Route = createFileRoute("/exercices/")({
  head: () => ({
    meta: [
      { title: "Exercices de TP résolus — Maths Éco & Gestion III" },
      {
        name: "description",
        content:
          "Tous les exercices des travaux pratiques du cours ECGEB251 résolus étape par étape, avec méthode, liens vers la théorie et réponses finales.",
      },
    ],
  }),
  component: ExercisesIndex,
});

function ExercisesIndex() {
  const [examOnly, setExamOnly] = useState(false);
  const { isDone, countDone, done } = useProgress();
  const total = allExercises.length;

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <section className="border-b border-border bg-gradient-to-b from-primary/[0.07] to-transparent">
        <div className="container py-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Exercices pratiques</h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/80 sm:text-base">
            Tous les exercices des TPs, résolus <strong>étape par étape</strong> avec la méthode,
            les liens vers la théorie et la réponse finale. Essaie toujours par toi-même avant de
            révéler les étapes !
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3 font-sans-ui text-sm">
            <button
              onClick={() => setExamOnly((v) => !v)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-semibold transition-colors ${
                examOnly
                  ? "border-amber-400 bg-amber-100 text-amber-900"
                  : "border-input bg-background hover:bg-muted"
              }`}
            >
              ⭐ Type examen uniquement
            </button>
            <span className="rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-300">
              ✓ {done.length}/{total} maîtrisés
            </span>
          </div>
        </div>
      </section>

      <section className="container space-y-8 py-10">
        {chapters.map((chapter) => {
          const exercises = exercisesForChapter(chapter.id).filter((e) => !examOnly || e.examType);
          if (exercises.length === 0) return null;
          const ids = exercisesForChapter(chapter.id).map((e) => e.id);
          const doneCount = countDone(ids);
          return (
            <div
              key={chapter.id}
              className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <Link
                  to="/exercices/$chapterId"
                  params={{ chapterId: String(chapter.id) }}
                  className="group flex items-center gap-3"
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl text-lg text-white ${chapter.color}`}
                  >
                    {chapter.emoji}
                  </span>
                  <span>
                    <span className="block font-sans-ui text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                      Chapitre {chapter.id}
                    </span>
                    <span className="block text-lg font-bold group-hover:underline">
                      {chapter.title}
                    </span>
                  </span>
                </Link>
                <div className="flex items-center gap-3 font-sans-ui text-xs text-muted-foreground">
                  <span>
                    {doneCount}/{ids.length} maîtrisés
                  </span>
                  <Link
                    to="/cours/$chapterId"
                    params={{ chapterId: String(chapter.id) }}
                    className="rounded-md border border-input px-2.5 py-1.5 font-semibold text-foreground transition-colors hover:bg-muted"
                  >
                    📖 Théorie
                  </Link>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {exercises.map((e) => (
                  <Link
                    key={e.id}
                    to="/exercices/$chapterId/$exerciseId"
                    params={{ chapterId: String(chapter.id), exerciseId: exerciseSlug(e.id) }}
                    className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 font-sans-ui text-sm transition-colors ${
                      isDone(e.id)
                        ? "border-emerald-300 bg-emerald-50 text-emerald-900 hover:bg-emerald-100"
                        : "border-input bg-background hover:bg-muted"
                    }`}
                  >
                    <span className="font-bold">{e.id}</span>
                    <span className="hidden max-w-48 truncate text-foreground/70 md:inline">
                      {e.title}
                    </span>
                    {e.examType && <span title="Type examen">⭐</span>}
                    {isDone(e.id) && <span className="text-emerald-600">✓</span>}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
