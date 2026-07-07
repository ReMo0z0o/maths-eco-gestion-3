import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import MathText from "@/components/MathText";
import { ExamBadge, TpBadge } from "@/components/ExerciseBadges";
import { getChapter } from "@/data/chapters";
import { allExercises, getExercise, exerciseSlug, exerciseIdFromSlug } from "@/data/exercises";
import type { ExercisePart } from "@/data/exercises";
import { useProgress } from "@/hooks/use-progress";

export const Route = createFileRoute("/exercices/$chapterId/$exerciseId")({
  loader: ({ params }) => {
    const chapter = getChapter(Number(params.chapterId));
    const exercise = getExercise(exerciseIdFromSlug(params.exerciseId));
    if (!chapter || !exercise || exercise.chapter !== chapter.id) throw notFound();
    const idx = allExercises.findIndex((e) => e.id === exercise.id);
    const prev = idx > 0 ? allExercises[idx - 1] : null;
    const next = idx < allExercises.length - 1 ? allExercises[idx + 1] : null;
    return {
      chapter,
      exercise,
      prev: prev ? { id: prev.id, chapter: prev.chapter, title: prev.title } : null,
      next: next ? { id: next.id, chapter: next.chapter, title: next.title } : null,
    };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `Exercice ${loaderData.exercise.id} — ${loaderData.exercise.title} · résolution détaillée`
          : "Exercice",
      },
    ],
  }),
  component: ExercisePage,
});

function PartSolution({ part, index }: { part: ExercisePart; index: number }) {
  const [shown, setShown] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const allShown = shown >= part.steps.length;

  return (
    <section className="rounded-2xl border border-border bg-card shadow-sm">
      {(part.label || part.statement) && (
        <div className="border-b border-border p-5">
          {part.label && (
            <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-foreground font-sans-ui text-sm font-bold text-background">
              {part.label}
            </span>
          )}
          {part.statement && <MathText className="text-[15px]">{part.statement}</MathText>}
        </div>
      )}
      <div className="space-y-4 p-5">
        {part.steps.slice(0, shown).map((step, i) => (
          <div key={i} className="rounded-xl border border-border bg-background p-4">
            <p className="font-sans-ui text-xs font-bold uppercase tracking-wide text-primary">
              Étape {i + 1} — {step.title}
            </p>
            <MathText className="mt-2 text-[15px]">{step.content}</MathText>
          </div>
        ))}

        <div className="flex flex-wrap items-center gap-2 font-sans-ui text-sm">
          {!allShown && (
            <>
              <button
                onClick={() => setShown((n) => n + 1)}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                {shown === 0
                  ? "🔍 Révéler la première étape"
                  : `➡️ Étape suivante (${shown + 1}/${part.steps.length})`}
              </button>
              <button
                onClick={() => setShown(part.steps.length)}
                className="inline-flex items-center gap-2 rounded-lg border border-input px-4 py-2 font-semibold transition-colors hover:bg-muted"
              >
                Tout afficher
              </button>
            </>
          )}
          {shown > 0 && (
            <button
              onClick={() => {
                setShown(0);
                setShowAnswer(false);
              }}
              className="inline-flex items-center gap-2 rounded-lg border border-input px-4 py-2 font-semibold text-muted-foreground transition-colors hover:bg-muted"
            >
              Masquer les étapes
            </button>
          )}
        </div>

        <div
          className={`rounded-xl border p-4 ${showAnswer ? "border-emerald-300 bg-emerald-50" : "border-dashed border-border"}`}
        >
          {showAnswer ? (
            <>
              <p className="font-sans-ui text-xs font-bold uppercase tracking-wide text-emerald-700">
                ✅ Réponse finale
              </p>
              <MathText className="mt-2 text-[15px] text-emerald-950">{part.answer}</MathText>
            </>
          ) : (
            <button
              onClick={() => setShowAnswer(true)}
              className="font-sans-ui text-sm font-semibold text-foreground/70 transition-colors hover:text-foreground"
            >
              👁️ Voir la réponse finale{index >= 0 ? "" : ""}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

function ExercisePage() {
  const { chapter, exercise, prev, next } = Route.useLoaderData();
  const { isDone, toggle } = useProgress();
  const [showMethod, setShowMethod] = useState(false);
  const done = isDone(exercise.id);

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <div className="container max-w-4xl py-8">
        <nav className="font-sans-ui text-xs text-muted-foreground">
          <Link to="/exercices" className="hover:underline">
            Exercices
          </Link>{" "}
          /{" "}
          <Link
            to="/exercices/$chapterId"
            params={{ chapterId: String(chapter.id) }}
            className="hover:underline"
          >
            Chapitre {chapter.id} — {chapter.title}
          </Link>{" "}
          / Exercice {exercise.id}
        </nav>

        <header className="mt-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-foreground px-2.5 py-1 font-sans-ui text-sm font-bold text-background">
              Exercice {exercise.id}
            </span>
            {exercise.examType && <ExamBadge />}
            <TpBadge exerciseId={exercise.id} />
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight">{exercise.title}</h1>
        </header>

        {/* Énoncé */}
        <section className="mt-6 rounded-2xl border-2 border-foreground/15 bg-card p-5 shadow-sm sm:p-6">
          <h2 className="font-sans-ui text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
            📋 Énoncé
          </h2>
          <MathText className="mt-3 text-[15px]">{exercise.statement}</MathText>
        </section>

        {/* Lien théorie + méthode */}
        <section className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-primary/[0.06] p-5">
            <h2 className="font-sans-ui text-xs font-bold uppercase tracking-[0.15em] text-primary">
              📖 Théorie à mobiliser
            </h2>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {exercise.theoryRefs.map((ref) => (
                <span
                  key={ref}
                  className="rounded-full bg-background px-2.5 py-1 font-sans-ui text-xs font-medium ring-1 ring-border"
                >
                  {ref}
                </span>
              ))}
            </div>
            <Link
              to="/cours/$chapterId"
              params={{ chapterId: String(chapter.id) }}
              className="mt-3 inline-flex items-center gap-1.5 font-sans-ui text-sm font-semibold text-primary hover:underline"
            >
              Revoir le chapitre {chapter.id} — {chapter.title} →
            </Link>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <h2 className="font-sans-ui text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
              💡 La méthode en bref
            </h2>
            {exercise.method ? (
              showMethod ? (
                <MathText className="mt-2.5 text-sm">{exercise.method}</MathText>
              ) : (
                <button
                  onClick={() => setShowMethod(true)}
                  className="mt-2.5 font-sans-ui text-sm font-semibold text-foreground/70 hover:text-foreground"
                >
                  Afficher un indice de méthode (essaie d'abord sans !) →
                </button>
              )
            ) : (
              <p className="mt-2.5 text-sm text-muted-foreground">
                Lance-toi directement, puis compare avec les étapes ci-dessous.
              </p>
            )}
          </div>
        </section>

        {/* Résolution */}
        <section className="mt-8">
          <h2 className="text-xl font-bold tracking-tight">
            🧩 Résolution étape par étape
            {exercise.parts.length > 1 ? ` (${exercise.parts.length} sous-questions)` : ""}
          </h2>
          <p className="mt-1.5 font-sans-ui text-sm text-muted-foreground">
            Essaie d'abord de résoudre seul·e, puis révèle les étapes une à une pour te corriger.
          </p>
          <div className="mt-4 space-y-5">
            {exercise.parts.map((part, i) => (
              <PartSolution key={i} part={part} index={i} />
            ))}
          </div>
        </section>

        {/* Maîtrise + navigation */}
        <section className="mt-8 rounded-2xl border border-border bg-card p-5 shadow-sm">
          <button
            onClick={() => toggle(exercise.id)}
            className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 font-sans-ui text-sm font-bold transition-colors sm:w-auto ${
              done
                ? "bg-emerald-100 text-emerald-900 ring-1 ring-emerald-300 hover:bg-emerald-200"
                : "bg-foreground text-background hover:bg-foreground/85"
            }`}
          >
            {done
              ? "✓ Exercice maîtrisé — cliquer pour décocher"
              : "Marquer cet exercice comme maîtrisé"}
          </button>
        </section>

        <nav className="mt-6 flex items-stretch justify-between gap-3 font-sans-ui text-sm">
          {prev ? (
            <Link
              to="/exercices/$chapterId/$exerciseId"
              params={{ chapterId: String(prev.chapter), exerciseId: exerciseSlug(prev.id) }}
              className="flex max-w-[48%] flex-col rounded-xl border border-border bg-card p-3.5 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-xs text-muted-foreground">← Précédent</span>
              <span className="mt-0.5 truncate font-semibold">
                {prev.id} · {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to="/exercices/$chapterId/$exerciseId"
              params={{ chapterId: String(next.chapter), exerciseId: exerciseSlug(next.id) }}
              className="flex max-w-[48%] flex-col items-end rounded-xl border border-border bg-card p-3.5 text-right shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-xs text-muted-foreground">Suivant →</span>
              <span className="mt-0.5 w-full truncate font-semibold">
                {next.id} · {next.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </main>
  );
}
