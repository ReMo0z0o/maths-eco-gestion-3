import { createFileRoute, Link } from "@tanstack/react-router";
import SiteHeader from "@/components/SiteHeader";
import { chapters } from "@/data/chapters";
import { exercisesForChapter, allExercises } from "@/data/exercises";
import { allDemos } from "@/data/demos";
import { allExams } from "@/data/exams";
import { useProgress } from "@/hooks/use-progress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maths Éco & Gestion III — Cours interactif ECGEB251" },
      {
        name: "description",
        content:
          "Toute la théorie du cours ECGEB251 (matrices, systèmes linéaires, déterminants, espaces vectoriels, valeurs propres, formes quadratiques, intégrales doubles) expliquée avec animations, plus tous les exercices de TP résolus étape par étape.",
      },
    ],
  }),
  component: Index,
});

function ChapterCard({ id }: { id: number }) {
  const chapter = chapters.find((c) => c.id === id)!;
  const exercises = exercisesForChapter(id);
  const { countDone } = useProgress();
  const done = countDone(exercises.map((e) => e.id));
  const pct = exercises.length ? Math.round((done / exercises.length) * 100) : 0;

  return (
    <article className="group flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start gap-3">
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl text-white shadow-sm ${chapter.color}`}
        >
          {chapter.emoji}
        </span>
        <div className="min-w-0">
          <p className="font-sans-ui text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            Chapitre {chapter.id}
          </p>
          <h3 className="text-lg font-bold leading-snug">{chapter.title}</h3>
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-foreground/80">{chapter.tagline}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {chapter.notions.slice(0, 4).map((n) => (
          <span
            key={n}
            className="rounded-full bg-muted px-2 py-0.5 font-sans-ui text-[11px] text-muted-foreground"
          >
            {n}
          </span>
        ))}
      </div>
      <div className="mt-4 flex-1" />
      {exercises.length > 0 && (
        <div className="mb-3 font-sans-ui">
          <div className="flex items-center justify-between text-[11px] text-muted-foreground">
            <span>
              {done}/{exercises.length} exercice{exercises.length > 1 ? "s" : ""} maîtrisé
              {done > 1 ? "s" : ""}
            </span>
            <span>{pct}%</span>
          </div>
          <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-emerald-500 transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      )}
      <div className="grid grid-cols-2 gap-2 font-sans-ui text-sm">
        <Link
          to="/cours/$chapterId"
          params={{ chapterId: String(chapter.id) }}
          className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          📖 Théorie
        </Link>
        <Link
          to="/exercices/$chapterId"
          params={{ chapterId: String(chapter.id) }}
          className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-input bg-background px-3 py-2 font-semibold transition-colors hover:bg-muted"
        >
          ✏️ Exercices ({exercises.length})
        </Link>
      </div>
    </article>
  );
}

function Index() {
  const { done } = useProgress();
  const totalExercises = allExercises.length;
  const examCount = allExercises.filter((e) => e.examType).length;

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      {/* Héro */}
      <section className="border-b border-border bg-gradient-to-b from-primary/[0.07] to-transparent">
        <div className="container py-12 sm:py-16">
          <p className="font-sans-ui text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            ECGEB251 · Mathématiques pour l'économie et la gestion III
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Comprendre les maths, <em className="text-primary">pas les subir</em>.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg">
            Un site complet et gratuit pour réussir le cours : les{" "}
            <strong>8 chapitres de théorie</strong> expliqués pas à pas avec des animations et des
            exercices de compréhension intégrés, et{" "}
            <strong>tous les exercices de TP résolus étape par étape</strong>, avec les liens vers
            la théorie à chaque moment clé.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 font-sans-ui">
            <a
              href="#chapitres"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              📖 Commencer la théorie
            </a>
            <Link
              to="/exercices"
              className="inline-flex items-center gap-2 rounded-lg border border-input bg-background px-5 py-2.5 text-sm font-semibold shadow-sm transition-colors hover:bg-muted"
            >
              ✏️ S'entraîner aux exercices
            </Link>
            <Link
              to="/demonstrations"
              className="inline-flex items-center gap-2 rounded-lg border border-input bg-background px-5 py-2.5 text-sm font-semibold shadow-sm transition-colors hover:bg-muted"
            >
              🎓 Démonstrations d'examen
            </Link>
            <Link
              to="/examens"
              className="inline-flex items-center gap-2 rounded-lg border border-input bg-background px-5 py-2.5 text-sm font-semibold shadow-sm transition-colors hover:bg-muted"
            >
              📝 Examens corrigés
            </Link>
          </div>
          <dl className="mt-10 grid max-w-3xl grid-cols-2 gap-4 font-sans-ui sm:grid-cols-5">
            <div className="rounded-xl border border-border bg-card p-3 text-center shadow-sm">
              <dt className="text-[11px] uppercase tracking-wide text-muted-foreground">
                Chapitres
              </dt>
              <dd className="text-2xl font-bold text-primary">8</dd>
            </div>
            <div className="rounded-xl border border-border bg-card p-3 text-center shadow-sm">
              <dt className="text-[11px] uppercase tracking-wide text-muted-foreground">
                Exercices résolus
              </dt>
              <dd className="text-2xl font-bold text-primary">{totalExercises}</dd>
            </div>
            <div className="rounded-xl border border-border bg-card p-3 text-center shadow-sm">
              <dt className="text-[11px] uppercase tracking-wide text-muted-foreground">
                Type examen
              </dt>
              <dd className="text-2xl font-bold text-primary">⭐ {examCount}</dd>
            </div>
            <div className="rounded-xl border border-border bg-card p-3 text-center shadow-sm">
              <dt className="text-[11px] uppercase tracking-wide text-muted-foreground">
                Démonstrations
              </dt>
              <dd className="text-2xl font-bold text-primary">🎓 {allDemos.length}</dd>
            </div>
            <div className="rounded-xl border border-border bg-card p-3 text-center shadow-sm">
              <dt className="text-[11px] uppercase tracking-wide text-muted-foreground">
                Examens résolus
              </dt>
              <dd className="text-2xl font-bold text-primary">📝 {allExams.length}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Méthode de travail */}
      <section className="container py-12">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Comment travailler avec ce site ?
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              step: "1",
              title: "Comprends la théorie",
              text: "Chaque chapitre est un cours interactif : explications progressives, illustrations, animations dynamiques et exercices de compréhension intégrés tout au long pour vérifier que tu suis.",
            },
            {
              step: "2",
              title: "Entraîne-toi sur les TPs",
              text: "Chaque exercice de TP est résolu étape par étape. Essaie d'abord seul, puis révèle les étapes une à une. Chaque résolution rappelle la méthode et renvoie vers la théorie utilisée.",
            },
            {
              step: "3",
              title: "Apprends les démonstrations",
              text: "Les exercices marqués ⭐ sont « type examen » : maîtrise-les parfaitement. Et apprends par cœur les démonstrations exigées, expliquées en détail avec la rédaction exacte à reproduire sur ta feuille.",
            },
          ].map((item) => (
            <div key={item.step} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-sans-ui text-sm font-bold text-primary-foreground">
                {item.step}
              </span>
              <h3 className="mt-3 text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Chapitres */}
      <section id="chapitres" className="container scroll-mt-20 pb-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Les 8 chapitres du cours
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-foreground/70 sm:text-base">
              De l'algèbre matricielle aux intégrales doubles : chaque chapitre combine un cours
              interactif complet et ses exercices de TP corrigés.
            </p>
          </div>
          {done.length > 0 && (
            <p className="hidden shrink-0 rounded-full bg-emerald-100 px-3 py-1 font-sans-ui text-xs font-semibold text-emerald-800 ring-1 ring-emerald-300 sm:block">
              ✓ {done.length}/{totalExercises} exercices maîtrisés
            </p>
          )}
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {chapters.map((c) => (
            <ChapterCard key={c.id} id={c.id} />
          ))}
        </div>
      </section>

      {/* Démonstrations teaser */}
      <section className="border-t border-border bg-muted/40">
        <div className="container py-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                🎓 Les démonstrations à connaître par cœur
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-foreground/80 sm:text-base">
                {allDemos.length} démonstrations sont exigées à l'examen. Pour chacune : l'énoncé
                exact, l'explication détaillée pas à pas pour la comprendre, et la rédaction modèle
                à reproduire telle quelle sur ta feuille d'examen.
              </p>
            </div>
            <Link
              to="/demonstrations"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-sans-ui text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              Réviser les démonstrations →
            </Link>
          </div>
        </div>
      </section>

      {/* Pied de page */}
      <footer className="border-t border-border">
        <div className="container flex flex-col justify-between gap-4 py-8 font-sans-ui text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>
            <p className="font-semibold text-foreground/80">
              Maths Éco &amp; Gestion III — support d'étude interactif
            </p>
            <p className="mt-1">
              Basé sur le cours ECGEB251 « Mathématiques pour l'économie et la gestion III ». Site
              d'entraide étudiante, non officiel.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/pdf/exercices-tps.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-input px-3 py-1.5 transition-colors hover:bg-muted"
            >
              📄 Énoncés des TPs (PDF)
            </a>
            <a
              href="/pdf/solutionnaire.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-input px-3 py-1.5 transition-colors hover:bg-muted"
            >
              📄 Solutionnaire officiel (PDF)
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
