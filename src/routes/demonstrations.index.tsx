import { createFileRoute, Link } from "@tanstack/react-router";
import SiteHeader from "@/components/SiteHeader";
import { chapters } from "@/data/chapters";
import { demosForChapter, allDemos, demoSlug } from "@/data/demos";
import { useProgress } from "@/hooks/use-progress";

export const Route = createFileRoute("/demonstrations/")({
  head: () => ({
    meta: [
      { title: "Démonstrations d'examen — Maths Éco & Gestion III" },
      {
        name: "description",
        content:
          "Toutes les démonstrations à connaître par cœur pour l'examen ECGEB251 : explication détaillée pas à pas et rédaction modèle à reproduire sur la feuille.",
      },
    ],
  }),
  component: DemosIndex,
});

function DemosIndex() {
  const { isDone, done } = useProgress();
  const knownCount = allDemos.filter((d) => done.includes(`demo:${d.id}`)).length;

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <section className="border-b border-border bg-gradient-to-b from-primary/[0.07] to-transparent">
        <div className="container py-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            🎓 Démonstrations à connaître par cœur
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/80 sm:text-base">
            La liste officielle des démonstrations exigées à l'examen. Pour chacune :{" "}
            <strong>comprendre</strong> (explication détaillée, étape par étape, du pourquoi de
            chaque ligne), puis <strong>restituer</strong> (la rédaction modèle, complète et
            rigoureuse, à écrire telle quelle sur ta feuille). Utilise le{" "}
            <strong>mode récitation</strong> pour t'entraîner à la reproduire de mémoire.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3 font-sans-ui text-sm">
            <span className="rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-300">
              ✓ {knownCount}/{allDemos.length} sues par cœur
            </span>
          </div>
        </div>
      </section>

      <section className="container space-y-6 py-10">
        {chapters.map((chapter) => {
          const demos = demosForChapter(chapter.id);
          if (demos.length === 0) return null;
          return (
            <div
              key={chapter.id}
              className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl text-lg text-white ${chapter.color}`}
                  >
                    {chapter.emoji}
                  </span>
                  <span>
                    <span className="block font-sans-ui text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                      Chapitre {chapter.id}
                    </span>
                    <span className="block text-lg font-bold">{chapter.title}</span>
                  </span>
                </div>
                <Link
                  to="/cours/$chapterId"
                  params={{ chapterId: String(chapter.id) }}
                  className="rounded-md border border-input px-2.5 py-1.5 font-sans-ui text-xs font-semibold transition-colors hover:bg-muted"
                >
                  📖 Théorie
                </Link>
              </div>
              <div className="mt-4 space-y-2.5">
                {demos.map((d) => (
                  <Link
                    key={d.id}
                    to="/demonstrations/$demoId"
                    params={{ demoId: demoSlug(d.id) }}
                    className={`flex items-center justify-between gap-3 rounded-xl border p-3.5 transition-colors ${
                      isDone(`demo:${d.id}`)
                        ? "border-emerald-300 bg-emerald-50 hover:bg-emerald-100"
                        : "border-border bg-background hover:bg-muted"
                    }`}
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <span className="shrink-0 rounded-md bg-foreground px-2 py-0.5 font-sans-ui text-xs font-bold text-background">
                        {d.id}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate font-semibold">{d.title}</span>
                        <span className="block truncate font-sans-ui text-xs text-muted-foreground">
                          {d.exam} · {d.slideRef}
                        </span>
                      </span>
                    </span>
                    <span className="shrink-0 font-sans-ui text-sm">
                      {isDone(`demo:${d.id}`) ? (
                        <span className="font-semibold text-emerald-700">✓ Sue</span>
                      ) : (
                        <span className="font-semibold text-primary">Réviser →</span>
                      )}
                    </span>
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
