import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import MathText from "@/components/MathText";
import { getChapter } from "@/data/chapters";
import { allDemos, getDemo, demoSlug, demoIdFromSlug } from "@/data/demos";
import { useProgress } from "@/hooks/use-progress";

export const Route = createFileRoute("/demonstrations/$demoId")({
  loader: ({ params }) => {
    const demo = getDemo(demoIdFromSlug(params.demoId));
    if (!demo) throw notFound();
    const chapter = getChapter(demo.chapter);
    if (!chapter) throw notFound();
    const idx = allDemos.findIndex((d) => d.id === demo.id);
    const prev = idx > 0 ? allDemos[idx - 1] : null;
    const next = idx < allDemos.length - 1 ? allDemos[idx + 1] : null;
    return {
      demo,
      chapter,
      prev: prev ? { id: prev.id, title: prev.title } : null,
      next: next ? { id: next.id, title: next.title } : null,
    };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `Démonstration ${loaderData.demo.id} — ${loaderData.demo.title}`
          : "Démonstration",
      },
    ],
  }),
  component: DemoPage,
});

function DemoPage() {
  const { demo, chapter, prev, next } = Route.useLoaderData();
  const { isDone, toggle } = useProgress();
  const [recitation, setRecitation] = useState(false);
  const [understandOpen, setUnderstandOpen] = useState(true);
  const known = isDone(`demo:${demo.id}`);

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <div className="container max-w-4xl py-8">
        <nav className="font-sans-ui text-xs text-muted-foreground">
          <Link to="/demonstrations" className="hover:underline">
            Démonstrations
          </Link>{" "}
          / Chapitre {chapter.id} — {chapter.title} / Démo {demo.id}
        </nav>

        <header className="mt-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-foreground px-2.5 py-1 font-sans-ui text-sm font-bold text-background">
              Démonstration {demo.id}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 font-sans-ui text-[11px] font-semibold text-primary ring-1 ring-primary/30">
              {demo.slideRef}
            </span>
            {known && (
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 font-sans-ui text-[11px] font-semibold text-emerald-800 ring-1 ring-emerald-300">
                ✓ Sue par cœur
              </span>
            )}
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight">{demo.title}</h1>
          <p className="mt-2 font-sans-ui text-sm text-muted-foreground">
            📝 Ce que l'examen demande : <strong className="text-foreground">{demo.exam}</strong>
          </p>
        </header>

        {/* Énoncé */}
        <section className="mt-6 rounded-2xl border-2 border-foreground/15 bg-card p-5 shadow-sm sm:p-6">
          <h2 className="font-sans-ui text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
            📜 Énoncé à restituer
          </h2>
          <MathText className="mt-3 text-[15px] font-medium">{demo.statement}</MathText>
        </section>

        {/* Intuition */}
        <section className="mt-4 rounded-2xl border border-border bg-primary/[0.06] p-5">
          <h2 className="font-sans-ui text-xs font-bold uppercase tracking-[0.15em] text-primary">
            💡 L'idée de la preuve
          </h2>
          <MathText className="mt-2.5 text-[15px]">{demo.intuition}</MathText>
          <Link
            to="/cours/$chapterId"
            params={{ chapterId: String(chapter.id) }}
            className="mt-3 inline-flex items-center gap-1.5 font-sans-ui text-sm font-semibold text-primary hover:underline"
          >
            Revoir la théorie : chapitre {chapter.id} — {chapter.title} →
          </Link>
        </section>

        {/* Comprendre */}
        <section className="mt-8">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold tracking-tight">
                🧠 1. Comprendre la démonstration
              </h2>
              <p className="mt-1 font-sans-ui text-sm text-muted-foreground">
                Chaque étape expliquée : d'où elle vient, pourquoi elle marche.
              </p>
            </div>
            <button
              onClick={() => setUnderstandOpen((v) => !v)}
              className="shrink-0 rounded-lg border border-input px-3 py-1.5 font-sans-ui text-sm font-semibold transition-colors hover:bg-muted"
            >
              {understandOpen ? "Replier" : "Déplier"}
            </button>
          </div>
          {understandOpen && (
            <div className="mt-4 space-y-4">
              {demo.steps.map((step, i) => (
                <div key={i} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <p className="font-sans-ui text-xs font-bold uppercase tracking-wide text-primary">
                    Étape {i + 1} — {step.title}
                  </p>
                  <MathText className="mt-2 text-[15px]">{step.content}</MathText>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Rédaction d'examen */}
        <section className="mt-8">
          <h2 className="text-xl font-bold tracking-tight">
            ✍️ 2. La rédaction modèle pour l'examen
          </h2>
          <p className="mt-1 font-sans-ui text-sm text-muted-foreground">
            C'est exactement ce qu'il faut écrire sur ta feuille — complet, rigoureux, sans détour.
          </p>
          <div className="mt-4 overflow-hidden rounded-2xl border-2 border-primary/40 bg-card shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-primary/20 bg-primary/[0.07] px-5 py-3">
              <p className="font-sans-ui text-xs font-bold uppercase tracking-[0.15em] text-primary">
                📄 À écrire sur la feuille d'examen
              </p>
              <button
                onClick={() => setRecitation((v) => !v)}
                className={`rounded-lg px-3 py-1.5 font-sans-ui text-xs font-bold transition-colors ${
                  recitation
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-primary/40 text-primary hover:bg-primary/10"
                }`}
              >
                {recitation ? "👁️ Révéler la rédaction" : "🙈 Mode récitation (masquer)"}
              </button>
            </div>
            {recitation ? (
              <div className="px-5 py-10 text-center">
                <p className="text-4xl">🧑‍🎓</p>
                <p className="mt-3 font-sans-ui text-sm font-semibold">
                  Récite (ou écris au brouillon) la démonstration complète…
                </p>
                <p className="mt-1 font-sans-ui text-xs text-muted-foreground">
                  …puis clique sur « Révéler » et compare ligne par ligne.
                </p>
              </div>
            ) : (
              <div className="p-5 sm:p-6">
                <MathText className="text-[15px]">{demo.examProof}</MathText>
              </div>
            )}
          </div>
        </section>

        {/* Pièges */}
        {demo.pitfalls.length > 0 && (
          <section className="mt-6 rounded-2xl border border-amber-300 bg-amber-50 p-5">
            <h2 className="font-sans-ui text-xs font-bold uppercase tracking-[0.15em] text-amber-800">
              ⚠️ Les pièges qui coûtent des points
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-amber-950">
              {demo.pitfalls.map((p, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-0.5 shrink-0">•</span>
                  <MathText>{p}</MathText>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Maîtrise + navigation */}
        <section className="mt-8 rounded-2xl border border-border bg-card p-5 shadow-sm">
          <button
            onClick={() => toggle(`demo:${demo.id}`)}
            className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 font-sans-ui text-sm font-bold transition-colors sm:w-auto ${
              known
                ? "bg-emerald-100 text-emerald-900 ring-1 ring-emerald-300 hover:bg-emerald-200"
                : "bg-foreground text-background hover:bg-foreground/85"
            }`}
          >
            {known
              ? "✓ Sue par cœur — cliquer pour décocher"
              : "Je sais la réciter sans faute — marquer comme sue"}
          </button>
        </section>

        <nav className="mt-6 flex items-stretch justify-between gap-3 font-sans-ui text-sm">
          {prev ? (
            <Link
              to="/demonstrations/$demoId"
              params={{ demoId: demoSlug(prev.id) }}
              className="flex max-w-[48%] flex-col rounded-xl border border-border bg-card p-3.5 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-xs text-muted-foreground">← Précédente</span>
              <span className="mt-0.5 truncate font-semibold">
                {prev.id} · {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to="/demonstrations/$demoId"
              params={{ demoId: demoSlug(next.id) }}
              className="flex max-w-[48%] flex-col items-end rounded-xl border border-border bg-card p-3.5 text-right shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-xs text-muted-foreground">Suivante →</span>
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
