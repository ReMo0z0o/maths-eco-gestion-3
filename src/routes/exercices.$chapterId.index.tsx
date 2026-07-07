import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import SiteHeader from "@/components/SiteHeader";
import MathText from "@/components/MathText";
import { ExamBadge, DoneBadge } from "@/components/ExerciseBadges";
import { getChapter } from "@/data/chapters";
import { exercisesForChapter, exerciseSlug } from "@/data/exercises";
import { useProgress } from "@/hooks/use-progress";

export const Route = createFileRoute("/exercices/$chapterId/")({
  loader: ({ params }) => {
    const id = Number(params.chapterId);
    const chapter = getChapter(id);
    if (!chapter) throw notFound();
    return { chapter };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `Exercices du chapitre ${loaderData.chapter.id} — ${loaderData.chapter.title}`
          : "Exercices",
      },
    ],
  }),
  component: ChapterExercises,
});

function ChapterExercises() {
  const { chapter } = Route.useLoaderData();
  const exercises = exercisesForChapter(chapter.id);
  const { isDone, countDone } = useProgress();
  const doneCount = countDone(exercises.map((e) => e.id));

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <section className="border-b border-border bg-gradient-to-b from-primary/[0.07] to-transparent">
        <div className="container py-10">
          <nav className="font-sans-ui text-xs text-muted-foreground">
            <Link to="/exercices" className="hover:underline">
              Exercices
            </Link>{" "}
            / Chapitre {chapter.id}
          </nav>
          <div className="mt-3 flex items-start gap-4">
            <span
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl text-white shadow-sm ${chapter.color}`}
            >
              {chapter.emoji}
            </span>
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Chapitre {chapter.id} — {chapter.title}
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-foreground/80 sm:text-base">
                {chapter.tagline}
              </p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-3 font-sans-ui text-sm">
            <Link
              to="/cours/$chapterId"
              params={{ chapterId: String(chapter.id) }}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              📖 Revoir la théorie du chapitre
            </Link>
            <span className="inline-flex items-center rounded-lg border border-input bg-background px-4 py-2 text-xs font-semibold text-muted-foreground">
              ✓ {doneCount}/{exercises.length} exercices maîtrisés
            </span>
          </div>
        </div>
      </section>

      <div className="container grid gap-8 py-10 lg:grid-cols-[1fr_320px]">
        <section className="space-y-4">
          {exercises.length === 0 && (
            <p className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
              Les exercices de ce chapitre arrivent bientôt.
            </p>
          )}
          {exercises.map((e) => (
            <Link
              key={e.id}
              to="/exercices/$chapterId/$exerciseId"
              params={{ chapterId: String(chapter.id), exerciseId: exerciseSlug(e.id) }}
              className="group block rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md bg-foreground px-2 py-0.5 font-sans-ui text-xs font-bold text-background">
                  Exercice {e.id}
                </span>
                {e.examType && <ExamBadge />}
                {isDone(e.id) && <DoneBadge />}
              </div>
              <h2 className="mt-2.5 text-lg font-bold group-hover:underline">{e.title}</h2>
              <div className="mt-2 line-clamp-3 text-sm text-foreground/75">
                <MathText>{e.statement}</MathText>
              </div>
              <p className="mt-3 font-sans-ui text-sm font-semibold text-primary">
                Voir la résolution étape par étape →
              </p>
            </Link>
          ))}
        </section>

        <aside className="lg:sticky lg:top-20 lg:self-start">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <h2 className="font-sans-ui text-sm font-bold uppercase tracking-wide text-muted-foreground">
              🎯 Objectifs du chapitre
            </h2>
            <p className="mt-2 font-sans-ui text-xs text-muted-foreground">
              À la fin de ce chapitre, tu dois être capable de :
            </p>
            <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-foreground/85">
              {chapter.objectives.map((o, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-0.5 text-primary">✔</span>
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
