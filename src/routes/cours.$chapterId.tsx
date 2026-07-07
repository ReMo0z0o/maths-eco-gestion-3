import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getChapter } from "@/data/chapters";
import { exercisesForChapter } from "@/data/exercises";

export const Route = createFileRoute("/cours/$chapterId")({
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
          ? `Chapitre ${loaderData.chapter.id} — ${loaderData.chapter.title} · Théorie`
          : "Théorie",
      },
    ],
  }),
  component: TheoryPage,
});

function TheoryPage() {
  const { chapter } = Route.useLoaderData();
  const exerciseCount = exercisesForChapter(chapter.id).length;
  const prev = chapter.id > 1 ? chapter.id - 1 : null;
  const next = chapter.id < 8 ? chapter.id + 1 : null;

  return (
    <div className="flex h-dvh flex-col bg-background">
      <header className="z-40 border-b border-border bg-background">
        <div className="flex h-12 items-center justify-between gap-2 px-3 font-sans-ui sm:px-4">
          <div className="flex min-w-0 items-center gap-2">
            <Link
              to="/"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-input px-2.5 py-1.5 text-xs font-semibold transition-colors hover:bg-muted"
            >
              ← Accueil
            </Link>
            <span className="hidden text-border sm:inline">|</span>
            <span
              className={`hidden h-6 w-6 shrink-0 items-center justify-center rounded-md text-xs text-white sm:flex ${chapter.color}`}
            >
              {chapter.emoji}
            </span>
            <p className="truncate text-sm font-semibold">
              Chapitre {chapter.id} — {chapter.title}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-1.5 text-xs">
            {exerciseCount > 0 && (
              <Link
                to="/exercices/$chapterId"
                params={{ chapterId: String(chapter.id) }}
                className="hidden items-center gap-1 rounded-md bg-primary px-2.5 py-1.5 font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
              >
                ✏️ Exercices du chapitre
              </Link>
            )}
            {prev && (
              <Link
                to="/cours/$chapterId"
                params={{ chapterId: String(prev) }}
                className="rounded-md border border-input px-2.5 py-1.5 font-semibold transition-colors hover:bg-muted"
                aria-label={`Chapitre ${prev}`}
              >
                ← Ch{prev}
              </Link>
            )}
            {next && (
              <Link
                to="/cours/$chapterId"
                params={{ chapterId: String(next) }}
                className="rounded-md border border-input px-2.5 py-1.5 font-semibold transition-colors hover:bg-muted"
                aria-label={`Chapitre ${next}`}
              >
                Ch{next} →
              </Link>
            )}
          </div>
        </div>
      </header>
      <iframe
        key={chapter.id}
        src={chapter.theoryFile}
        title={`Chapitre ${chapter.id} — ${chapter.title} (cours interactif)`}
        className="w-full flex-1 border-0"
      />
    </div>
  );
}
