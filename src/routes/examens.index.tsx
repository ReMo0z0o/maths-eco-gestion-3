import { createFileRoute, Link } from "@tanstack/react-router";
import SiteHeader from "@/components/SiteHeader";
import { allExams } from "@/data/exams";
import { useProgress } from "@/hooks/use-progress";

export const Route = createFileRoute("/examens/")({
  head: () => ({
    meta: [
      { title: "Examens des années précédentes — Maths Éco & Gestion III" },
      {
        name: "description",
        content:
          "Les examens des années précédentes du cours ECGEB251, résolus avec indices progressifs et explications super détaillées : entraîne-toi en conditions réelles, puis débloque l'aide pas à pas.",
      },
    ],
  }),
  component: ExamsIndex,
});

function ExamsIndex() {
  const { done } = useProgress();

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <section className="border-b border-border bg-gradient-to-b from-primary/[0.07] to-transparent">
        <div className="container py-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            📝 Examens des années précédentes
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/80 sm:text-base">
            La meilleure préparation : faire les <strong>vrais sujets</strong>. Chaque question est
            accompagnée d'<strong>indices progressifs</strong> — débloque-les un à un seulement si
            tu bloques — puis d'une <strong>résolution super détaillée</strong> qui explique chaque
            choix, avec les liens vers la théorie, les démonstrations et les exercices de TP
            similaires.
          </p>
          <div className="mt-5 rounded-xl border border-amber-300 bg-amber-50 p-4 font-sans-ui text-sm text-amber-950">
            <strong>🎯 Conseil d'entraînement :</strong> travaille d'abord en{" "}
            <strong>conditions d'examen</strong> — télécharge le PDF du sujet, 3 h chrono, sans
            notes. Ensuite seulement, reviens ici pour comparer avec les résolutions et comprendre
            tes erreurs.
          </div>
        </div>
      </section>

      <section className="container space-y-5 py-10">
        {allExams.map((exam) => {
          const doneCount = exam.questions.filter((q) =>
            done.includes(`exam:${exam.id}:${q.id}`),
          ).length;
          return (
            <div
              key={exam.id}
              className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-xl font-bold">{exam.title}</h2>
                    {exam.official && (
                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-sans-ui text-[11px] font-semibold text-emerald-800 ring-1 ring-emerald-300">
                        ✓ Correction officielle
                      </span>
                    )}
                  </div>
                  <p className="mt-1 font-sans-ui text-sm text-muted-foreground">
                    {exam.subtitle} · {exam.questions.length} questions · {exam.totalPoints} points
                    · {Math.round(exam.durationMin / 60)} h
                  </p>
                  {exam.note && (
                    <p className="mt-1 font-sans-ui text-xs text-muted-foreground">{exam.note}</p>
                  )}
                </div>
                <div className="flex shrink-0 flex-wrap items-center gap-2 font-sans-ui text-sm">
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                    ✓ {doneCount}/{exam.questions.length} maîtrisées
                  </span>
                  <a
                    href={exam.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-input px-3 py-1.5 text-xs font-semibold transition-colors hover:bg-muted"
                  >
                    📄 Sujet PDF
                  </a>
                  <Link
                    to="/examens/$examId"
                    params={{ examId: exam.id }}
                    className="rounded-lg bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Travailler ce sujet →
                  </Link>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {exam.questions.map((q) => (
                  <Link
                    key={q.id}
                    to="/examens/$examId/$questionId"
                    params={{ examId: exam.id, questionId: q.id }}
                    className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 font-sans-ui text-xs transition-colors ${
                      done.includes(`exam:${exam.id}:${q.id}`)
                        ? "border-emerald-300 bg-emerald-50 text-emerald-900 hover:bg-emerald-100"
                        : "border-input bg-background hover:bg-muted"
                    }`}
                  >
                    <span className="font-bold">Q{q.number}</span>
                    <span className="hidden max-w-44 truncate text-foreground/70 md:inline">
                      {q.title}
                    </span>
                    <span className="text-muted-foreground">({q.points} pts)</span>
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
