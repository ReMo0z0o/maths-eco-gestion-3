import { Link } from "@tanstack/react-router";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="container flex h-14 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5 font-sans-ui">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            ∑
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold tracking-tight">
              Maths Éco &amp; Gestion III
            </span>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              ECGEB251 · Cours interactif
            </span>
          </span>
        </Link>
        <nav className="flex items-center gap-1 font-sans-ui text-sm">
          <Link
            to="/"
            className="rounded-md px-3 py-1.5 text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
            activeProps={{
              className: "rounded-md px-3 py-1.5 bg-muted font-semibold text-foreground",
            }}
            activeOptions={{ exact: true }}
          >
            <span className="hidden sm:inline">Accueil</span>
            <span className="sm:hidden">🏠</span>
          </Link>
          <Link
            to="/exercices"
            className="rounded-md px-3 py-1.5 text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
            activeProps={{
              className: "rounded-md px-3 py-1.5 bg-muted font-semibold text-foreground",
            }}
          >
            Exercices
          </Link>
          <Link
            to="/demonstrations"
            className="rounded-md px-3 py-1.5 text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
            activeProps={{
              className: "rounded-md px-3 py-1.5 bg-muted font-semibold text-foreground",
            }}
          >
            Démos
          </Link>
        </nav>
      </div>
    </header>
  );
}
