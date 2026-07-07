import { createFileRoute, Link } from "@tanstack/react-router";
import SiteHeader from "@/components/SiteHeader";
import { planning, exerciseIdFromRef, partsFromRef } from "@/data/planning";
import { getExercise, exerciseSlug } from "@/data/exercises";
import { useProgress } from "@/hooks/use-progress";

export const Route = createFileRoute("/planning")({
  head: () => ({
    meta: [
      { title: "Planning des TPs — Maths Éco & Gestion III" },
      {
        name: "description",
        content:
          "Le planning des 9 séances de TP du cours ECGEB251 : exercices préparatoires et exercices de séance, tous corrigés étape par étape.",
      },
    ],
  }),
  component: PlanningPage,
});

function ExerciseChip({ refId }: { refId: string }) {
  const id = exerciseIdFromRef(refId);
  const parts = partsFromRef(refId);
  const exercise = getExercise(id);
  const { isDone } = useProgress();
  if (!exercise) {
    return (
      <span className="inline-flex items-center rounded-lg border border-dashed border-input px-2.5 py-1 font-sans-ui text-sm text-muted-foreground">
        {refId}
      </span>
    );
  }
  return (
    <Link
      to="/exercices/$chapterId/$exerciseId"
      params={{ chapterId: String(exercise.chapter), exerciseId: exerciseSlug(exercise.id) }}
      title={`${exercise.title}${parts ? ` (sous-questions ${parts})` : ""}`}
      className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 font-sans-ui text-sm transition-colors ${
        isDone(exercise.id)
          ? "border-emerald-300 bg-emerald-50 text-emerald-900 hover:bg-emerald-100"
          : "border-input bg-background hover:bg-muted"
      }`}
    >
      <span className="font-bold">{refId}</span>
      {exercise.examType && <span title="Type examen">⭐</span>}
      {isDone(exercise.id) && <span className="text-emerald-600">✓</span>}
    </Link>
  );
}

function PlanningPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <section className="border-b border-border bg-gradient-to-b from-primary/[0.07] to-transparent">
        <div className="container py-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">🗓️ Planning des TPs</h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/80 sm:text-base">
            Présente-toi à chaque TP en ayant fait les <strong>exercices préparatoires</strong> et
            revu la théorie associée. Les exercices marqués ⭐ sont de <strong>type examen</strong>{" "}
            : ce sont eux qu'il faut maîtriser en priorité. Clique sur un exercice pour voir sa
            résolution détaillée.
          </p>
        </div>
      </section>

      <section className="container max-w-4xl py-10">
        <ol className="relative space-y-6 border-l-2 border-border pl-6 sm:pl-8">
          {planning.map((tp) => (
            <li key={tp.id} className="relative">
              <span className="absolute -left-[37px] flex h-8 w-8 items-center justify-center rounded-full bg-primary font-sans-ui text-xs font-bold text-primary-foreground ring-4 ring-background sm:-left-[45px]">
                {tp.id}
              </span>
              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="text-lg font-bold">TP{tp.id}</h2>
                  <span className="font-sans-ui text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {tp.week}
                  </span>
                </div>
                <p className="mt-1 font-sans-ui text-sm text-foreground/75">
                  📚 Théorie à revoir : {tp.content}
                  {tp.chapters.length > 0 && (
                    <>
                      {" · "}
                      {tp.chapters.map((c, i) => (
                        <span key={c}>
                          {i > 0 && ", "}
                          <Link
                            to="/cours/$chapterId"
                            params={{ chapterId: String(c) }}
                            className="font-semibold text-primary hover:underline"
                          >
                            Chapitre {c}
                          </Link>
                        </span>
                      ))}
                    </>
                  )}
                </p>
                {(tp.prep.length > 0 || tp.prepNote) && (
                  <div className="mt-4">
                    <h3 className="font-sans-ui text-xs font-bold uppercase tracking-wide text-amber-700">
                      ✍️ À préparer avant la séance
                    </h3>
                    {tp.prepNote && (
                      <p className="mt-1 font-sans-ui text-sm text-foreground/75">{tp.prepNote}</p>
                    )}
                    <div className="mt-2 flex flex-wrap gap-2">
                      {tp.prep.map((ref) => (
                        <ExerciseChip key={ref} refId={ref} />
                      ))}
                    </div>
                  </div>
                )}
                {tp.during.length > 0 && (
                  <div className="mt-4">
                    <h3 className="font-sans-ui text-xs font-bold uppercase tracking-wide text-sky-700">
                      🧑‍🏫 Réalisés au TP
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {tp.during.map((ref) => (
                        <ExerciseChip key={ref} refId={ref} />
                      ))}
                    </div>
                  </div>
                )}
                {tp.note && (
                  <p className="mt-4 font-sans-ui text-sm italic text-muted-foreground">
                    {tp.note}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
