/**
 * Spécification déclarative d'une figure « domaine d'intégration » (rendue en SVG
 * par src/components/DomainFigure.tsx).
 *
 * Les expressions (`fn`, `yLow`, `yHigh`) sont des fonctions de x écrites en
 * JavaScript simple : "x*x", "1/x", "x+1", "2*x", "1-x", "1", "sqrt(x)"…
 */

export interface FigureCurve {
  /** Expression de la courbe y = f(x) */
  fn: string;
  /** Intervalle de tracé [xMin, xMax] (défaut : la fenêtre) */
  domain?: [number, number];
  /** Étiquette affichée près de la courbe, en LaTeX simple rendu tel quel (texte) */
  label?: string;
  /** Position de l'étiquette en coordonnées mathématiques */
  labelAt?: [number, number];
  /** Tracé en pointillés (droites de référence) */
  dashed?: boolean;
}

export interface FigureSegment {
  from: [number, number];
  to: [number, number];
  label?: string;
  labelAt?: [number, number];
  dashed?: boolean;
}

export interface FigureRegion {
  /** Tranches verticales : x parcourt [xFrom, xTo], y entre yLow(x) et yHigh(x) */
  xFrom: number;
  xTo: number;
  yLow: string;
  yHigh: string;
}

export interface FigurePoint {
  at: [number, number];
  /** Étiquette, ex. « (1, 1) » */
  label: string;
  /** Décalage de l'étiquette en pixels [dx, dy] (défaut : en haut à droite du point) */
  offset?: [number, number];
}

export interface DomainFigureSpec {
  /** Fenêtre de tracé en coordonnées mathématiques */
  window: { xMin: number; xMax: number; yMin: number; yMax: number };
  /** Régions ombrées (le domaine d'intégration, éventuellement en morceaux) */
  regions: FigureRegion[];
  /** Courbes y = f(x) */
  curves?: FigureCurve[];
  /** Segments de droite (droites verticales, bords…) */
  segments?: FigureSegment[];
  /** Points remarquables (sommets du domaine) */
  points?: FigurePoint[];
  /** Légende sous la figure : comment lire le dessin (texte simple) */
  caption: string;
}
