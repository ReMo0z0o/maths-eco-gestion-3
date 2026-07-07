# Maths Éco & Gestion III — Cours interactif ECGEB251

Site d'étude complet et gratuit pour le cours **ECGEB251 « Mathématiques pour l'économie et la
gestion III »** : matrices, systèmes linéaires, déterminants, espaces vectoriels, produit
scalaire, valeurs propres, formes quadratiques et intégrales doubles.

## Contenu

- **Théorie** (`public/theorie/chapitre1..8.html`) : 8 cours interactifs autonomes avec
  animations et exercices de compréhension intégrés, servis tels quels et affichés dans une
  coquille de navigation (`/cours/:chapitre`).
- **Exercices pratiques** (`src/data/exercises/`) : les 61 exercices des TP résolus étape par
  étape (énoncé fidèle, méthode, étapes à révélation progressive, réponse finale vérifiée
  contre le solutionnaire officiel, liens vers la théorie). Rendu mathématique via KaTeX.
- **Démonstrations d'examen** (`src/data/demos/`) : les 15 démonstrations à connaître par
  cœur — énoncé exact, explication détaillée pas à pas, rédaction modèle à reproduire sur la
  feuille d'examen, mode récitation et pièges classiques.
- **Progression** : suivi local (localStorage) des exercices maîtrisés.
- Les PDF officiels (énoncés + solutionnaire) sont téléchargeables depuis le pied de page
  (`public/pdf/`).

## Développement

```bash
npm install
npm run dev        # serveur de développement
npm run build      # build de production (dist/client)
node scripts/check-math.mjs   # vérifie la structure et le LaTeX de tous les exercices
node scripts/check-demos.mjs  # idem pour les démonstrations d'examen
```

Stack : TanStack Start (mode SPA) · React 19 · Tailwind CSS v4 · KaTeX.

## Ajouter / corriger un exercice

Chaque chapitre vit dans `src/data/exercises/chN.ts` (les gros chapitres sont découpés en
`chNa.ts`, `chNb.ts`…). Le format des chaînes de contenu est un mini-markdown documenté dans
`src/data/exercises/types.ts` (`$…$` math en ligne, `$$…$$` math display, `**gras**`, listes
`- `). Toujours utiliser `String.raw` et relancer `node scripts/check-math.mjs` après
modification.

## Déploiement

Le site est une SPA statique (voir `vercel.json`). Toute plateforme de fichiers statiques
convient ; les réécritures doivent laisser passer `/theorie/*`, `/pdf/*`, `/og.png` et
`/favicon.*`.

---

Site d'entraide étudiante, non officiel — basé sur les supports du cours ECGEB251 (UNamur).
