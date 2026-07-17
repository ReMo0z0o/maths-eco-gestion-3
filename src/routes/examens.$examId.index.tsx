import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import SiteHeader from "@/components/SiteHeader";
import MathText from "@/components/MathText";
import { chapters } from "@/data/chapters";
import { getExam } from "@/data/exams";
import { useProgress } from "@/hooks/use-progress";

export const Route = createFileRoute("/examens/$examId/")({
  loader: ({ params }) => {
    const exam = getExam(params.examId);
    if (!exam) throw notFound();
    return { exam };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: loaderData ? `${loaderData.exam.title} — sujet complet` : "Examen" }],
  }),
  component: ExamPage,
});

function ExamPage() {
  const { exam } = Route.useLoaderData();
  const { isDone } = useProgress();

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <section className="border-b border-border bg-gradient-to-b from-primary/[0.07] to-transparent">
        <div className="container py-10">
          <nav className="font-sans-ui text-xs text-muted-foreground">
            <Link to="/examens" className="hover:underline">
              Examens
            </Link>{" "}
            / {exam.title}
          </nav>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{exam.title}</h1>
            {exam.official && (
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-sans-ui text-[11px] font-semibold text-emerald-800 ring-1 ring-emerald-300">
                ✓ Correction officielle
              </span>
            )}
          </div>
          <p className="mt-2 font-sans-ui text-sm text-muted-foreground">
            {exam.subtitle} · {exam.questions.length} questions · {exam.totalPoints} points ·{" "}
            {Math.round(exam.durationMin / 60)} h · toutes les réponses doivent être justifiées
          </p>
          {exam.note && (
            <p className="mt-1 font-sans-ui text-xs text-muted-foreground">{exam.note}</p>
          )}
          <div className="mt-5 flex flex-wrap gap-3 font-sans-ui text-sm">
            <a
              href={exam.pdf}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-input bg-background px-4 py-2 font-semibold shadow-sm transition-colors hover:bg-muted"
            >
              📄 Télécharger le sujet (PDF)
            </a>
            <span className="inline-flex items-center rounded-lg bg-amber-50 px-4 py-2 text-xs font-semibold text-amber-900 ring-1 ring-amber-300">
              💪 Essaie chaque question par toi-même avant d'ouvrir l'accompagnement !
            </span>
          </div>
        </div>
      </section>

      <section className="container max-w-4xl space-y-5 py-10">
        {exam.questions.map((q) => (
          <div key={q.id} className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-foreground px-2.5 py-1 font-sans-ui text-sm font-bold text-background">
                Question {q.number}
              </span>
              <span className="rounded-full bg-muted px-2 py-0.5 font-sans-ui text-[11px] font-semibold text-muted-foreground">
                {q.points} points
              </span>
              {q.chapters.map((c) => {
                const ch = chapters.find((x) => x.id === c);
                return ch ? (
                  <span
                    key={c}
                    className="rounded-full bg-primary/10 px-2 py-0.5 font-sans-ui text-[11px] font-semibold text-primary ring-1 ring-primary/25"
                  >
                    Ch{c} · {ch.title}
                  </span>
                ) : null;
              })}
              {isDone(`exam:${exam.id}:${q.id}`) && (
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-sans-ui text-[11px] font-semibold text-emerald-800 ring-1 ring-emerald-300">
                  ✓ Maîtrisée
                </span>
              )}
            </div>
            <h2 className="mt-2.5 text-lg font-bold">{q.title}</h2>
            <MathText className="mt-3 text-[15px]">{q.statement}</MathText>
            <div className="mt-4 border-t border-dashed border-border pt-3">
              <Link
                to="/examens/$examId/$questionId"
                params={{ examId: exam.id, questionId: q.id }}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 font-sans-ui text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                🧭 Résoudre avec accompagnement (indices → solution) →
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
