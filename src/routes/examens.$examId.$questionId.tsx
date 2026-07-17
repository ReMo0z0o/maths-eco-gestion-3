import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import MathText from "@/components/MathText";
import { chapters } from "@/data/chapters";
import { getExam, getExamQuestion } from "@/data/exams";
import { getDemo, demoSlug } from "@/data/demos";
import { getExercise, exerciseSlug } from "@/data/exercises";
import { useProgress } from "@/hooks/use-progress";

export const Route = createFileRoute("/examens/$examId/$questionId")({
  loader: ({ params }) => {
    const found = getExamQuestion(params.examId, params.questionId);
    if (!found) throw notFound();
    const { exam, question } = found;
    const idx = exam.questions.findIndex((q) => q.id === question.id);
    const prev = idx > 0 ? exam.questions[idx - 1] : null;
    const next = idx < exam.questions.length - 1 ? exam.questions[idx + 1] : null;
    return {
      exam,
      question,
      prev: prev ? { id: prev.id, number: prev.number, title: prev.title } : null,
      next: next ? { id: next.id, number: next.number, title: next.title } : null,
    };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.exam.title} — Question ${loaderData.question.number} : ${loaderData.question.title}`
          : "Question d'examen",
      },
    ],
  }),
  component: QuestionPage,
});

function QuestionPage() {
  const { exam, question, prev, next } = Route.useLoaderData();
  const { isDone, toggle } = useProgress();
  const [hintsShown, setHintsShown] = useState(0);
  const [solutionOpen, setSolutionOpen] = useState(false);
  const [stepsShown, setStepsShown] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const progressKey = `exam:${exam.id}:${question.id}`;
  const done = isDone(progressKey);
  const demo = question.demoRef ? getDemo(question.demoRef) : undefined;
  const relatedExercises = (question.exerciseRefs ?? [])
    .map((id) => getExercise(id))
    .filter((e): e is NonNullable<typeof e> => Boolean(e));

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <div className="container max-w-4xl py-8">
        <nav className="font-sans-ui text-xs text-muted-foreground">
          <Link to="/examens" className="hover:underline">
            Examens
          </Link>{" "}
          /{" "}
          <Link to="/examens/$examId" params={{ examId: exam.id }} className="hover:underline">
            {exam.title}
          </Link>{" "}
          / Question {question.number}
        </nav>

        <header className="mt-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-foreground px-2.5 py-1 font-sans-ui text-sm font-bold text-background">
              Question {question.number}
            </span>
            <span className="rounded-full bg-muted px-2 py-0.5 font-sans-ui text-[11px] font-semibold text-muted-foreground">
              {question.points} points
            </span>
            {question.chapters.map((c) => {
              const ch = chapters.find((x) => x.id === c);
              return ch ? (
                <Link
                  key={c}
                  to="/cours/$chapterId"
                  params={{ chapterId: String(c) }}
                  className="rounded-full bg-primary/10 px-2 py-0.5 font-sans-ui text-[11px] font-semibold text-primary ring-1 ring-primary/25 hover:bg-primary/20"
                >
                  Ch{c} · {ch.title}
                </Link>
              ) : null;
            })}
            {done && (
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-sans-ui text-[11px] font-semibold text-emerald-800 ring-1 ring-emerald-300">
                ✓ Maîtrisée
              </span>
            )}
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight">{question.title}</h1>
        </header>

        {/* Énoncé */}
        <section className="mt-6 rounded-2xl border-2 border-foreground/15 bg-card p-5 shadow-sm sm:p-6">
          <h2 className="font-sans-ui text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
            📋 Énoncé ({exam.title})
          </h2>
          <MathText className="mt-3 text-[15px]">{question.statement}</MathText>
        </section>

        {/* Phase de recherche personnelle */}
        <section className="mt-4 rounded-2xl border border-amber-300 bg-amber-50 p-5">
          <p className="font-sans-ui text-sm font-semibold text-amber-950">
            ✋ À toi de jouer d'abord ! Prends une feuille et cherche pendant au moins{" "}
            {Math.max(5, Math.round(question.points * 2))} minutes (à l'examen, cette question vaut{" "}
            {question.points} points sur {exam.totalPoints}). Si tu bloques, débloque les indices{" "}
            <strong>un par un</strong> — chaque indice t'en dit un peu plus, sans donner la
            solution.
          </p>
        </section>

        {/* Indices progressifs */}
        <section className="mt-6">
          <h2 className="text-xl font-bold tracking-tight">💡 Indices progressifs</h2>
          <div className="mt-3 space-y-3">
            {question.hints.slice(0, hintsShown).map((hint, i) => (
              <div key={i} className="rounded-xl border border-primary/30 bg-primary/[0.05] p-4">
                <p className="font-sans-ui text-xs font-bold uppercase tracking-wide text-primary">
                  Indice {i + 1} / {question.hints.length}
                </p>
                <MathText className="mt-1.5 text-[15px]">{hint}</MathText>
              </div>
            ))}
            {hintsShown < question.hints.length && (
              <button
                onClick={() => setHintsShown((n) => n + 1)}
                className="inline-flex items-center gap-2 rounded-lg border border-primary/40 px-4 py-2 font-sans-ui text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                🔓 Débloquer l'indice {hintsShown + 1} / {question.hints.length}
                {hintsShown === 0 ? " (le plus léger)" : ""}
              </button>
            )}
            {hintsShown >= question.hints.length && question.hints.length > 0 && (
              <p className="font-sans-ui text-xs text-muted-foreground">
                Tous les indices sont révélés. Retente la question avant d'ouvrir la résolution !
              </p>
            )}
          </div>
        </section>

        {/* Résolution détaillée */}
        <section className="mt-8">
          <h2 className="text-xl font-bold tracking-tight">🧩 Résolution détaillée</h2>
          {!solutionOpen ? (
            <div className="mt-3 rounded-2xl border-2 border-dashed border-border p-6 text-center">
              <p className="font-sans-ui text-sm text-muted-foreground">
                La résolution complète est masquée pour te laisser chercher.
              </p>
              <button
                onClick={() => setSolutionOpen(true)}
                className="mt-3 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-sans-ui text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                J'ai cherché — montrer la résolution
              </button>
            </div>
          ) : (
            <div className="mt-4 space-y-4">
              {question.steps.slice(0, stepsShown).map((step, i) => (
                <div key={i} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <p className="font-sans-ui text-xs font-bold uppercase tracking-wide text-primary">
                    Étape {i + 1} — {step.title}
                  </p>
                  <MathText className="mt-2 text-[15px]">{step.content}</MathText>
                </div>
              ))}
              <div className="flex flex-wrap items-center gap-2 font-sans-ui text-sm">
                {stepsShown < question.steps.length && (
                  <>
                    <button
                      onClick={() => setStepsShown((n) => n + 1)}
                      className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                    >
                      {stepsShown === 0
                        ? "🔍 Révéler la première étape"
                        : `➡️ Étape suivante (${stepsShown + 1}/${question.steps.length})`}
                    </button>
                    <button
                      onClick={() => setStepsShown(question.steps.length)}
                      className="inline-flex items-center gap-2 rounded-lg border border-input px-4 py-2 font-semibold transition-colors hover:bg-muted"
                    >
                      Tout afficher
                    </button>
                  </>
                )}
                {stepsShown > 0 && (
                  <button
                    onClick={() => {
                      setStepsShown(0);
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
                    <MathText className="mt-2 text-[15px] text-emerald-950">
                      {question.answer}
                    </MathText>
                  </>
                ) : (
                  <button
                    onClick={() => setShowAnswer(true)}
                    className="font-sans-ui text-sm font-semibold text-foreground/70 transition-colors hover:text-foreground"
                  >
                    👁️ Voir la réponse finale
                  </button>
                )}
              </div>
            </div>
          )}
        </section>

        {/* Conseils examen */}
        {solutionOpen && question.examTips.length > 0 && (
          <section className="mt-6 rounded-2xl border border-amber-300 bg-amber-50 p-5">
            <h2 className="font-sans-ui text-xs font-bold uppercase tracking-[0.15em] text-amber-800">
              🎯 Conseils pour le jour J
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-amber-950">
              {question.examTips.map((tip, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-0.5 shrink-0">•</span>
                  <MathText>{tip}</MathText>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Pour aller plus loin */}
        {(demo || relatedExercises.length > 0) && (
          <section className="mt-6 rounded-2xl border border-border bg-primary/[0.05] p-5">
            <h2 className="font-sans-ui text-xs font-bold uppercase tracking-[0.15em] text-primary">
              📚 Pour s'entraîner davantage
            </h2>
            <div className="mt-3 flex flex-wrap gap-2 font-sans-ui text-sm">
              {demo && (
                <Link
                  to="/demonstrations/$demoId"
                  params={{ demoId: demoSlug(demo.id) }}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-input bg-background px-3 py-1.5 font-semibold transition-colors hover:bg-muted"
                >
                  🎓 Démonstration {demo.id} — {demo.title}
                </Link>
              )}
              {relatedExercises.map((e) => (
                <Link
                  key={e.id}
                  to="/exercices/$chapterId/$exerciseId"
                  params={{ chapterId: String(e.chapter), exerciseId: exerciseSlug(e.id) }}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-input bg-background px-3 py-1.5 font-semibold transition-colors hover:bg-muted"
                >
                  ✏️ Exercice {e.id} — {e.title}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Maîtrise + navigation */}
        <section className="mt-8 rounded-2xl border border-border bg-card p-5 shadow-sm">
          <button
            onClick={() => toggle(progressKey)}
            className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 font-sans-ui text-sm font-bold transition-colors sm:w-auto ${
              done
                ? "bg-emerald-100 text-emerald-900 ring-1 ring-emerald-300 hover:bg-emerald-200"
                : "bg-foreground text-background hover:bg-foreground/85"
            }`}
          >
            {done
              ? "✓ Question maîtrisée — cliquer pour décocher"
              : "Je saurais la refaire seul·e à l'examen — marquer comme maîtrisée"}
          </button>
        </section>

        <nav className="mt-6 flex items-stretch justify-between gap-3 font-sans-ui text-sm">
          {prev ? (
            <Link
              to="/examens/$examId/$questionId"
              params={{ examId: exam.id, questionId: prev.id }}
              className="flex max-w-[48%] flex-col rounded-xl border border-border bg-card p-3.5 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-xs text-muted-foreground">← Question {prev.number}</span>
              <span className="mt-0.5 truncate font-semibold">{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to="/examens/$examId/$questionId"
              params={{ examId: exam.id, questionId: next.id }}
              className="flex max-w-[48%] flex-col items-end rounded-xl border border-border bg-card p-3.5 text-right shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-xs text-muted-foreground">Question {next.number} →</span>
              <span className="mt-0.5 w-full truncate font-semibold">{next.title}</span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </main>
  );
}
