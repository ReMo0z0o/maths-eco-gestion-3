/**
 * Modèle de données des exercices de TP.
 *
 * Tout le contenu textuel utilise le mini-format MathText :
 *   - `$...$`   : mathématiques en ligne (KaTeX)
 *   - `$$...$$` : mathématiques en mode display (KaTeX, centré)
 *   - `**gras**`
 *   - lignes commençant par `- ` : liste à puces
 *   - ligne vide : nouveau paragraphe
 */

export interface SolutionStep {
  /** Titre court de l'étape, ex. « Poser la matrice augmentée » */
  title: string;
  /** Contenu pédagogique de l'étape (format MathText) */
  content: string;
}

import type { DomainFigureSpec } from "../figures";

export interface ExercisePart {
  /** « a », « b », … ou null si l'exercice n'a pas de sous-questions */
  label: string | null;
  /** Énoncé propre à la sous-question (format MathText) */
  statement?: string;
  /** Résolution détaillée, étape par étape */
  steps: SolutionStep[];
  /** Réponse finale concise (format MathText) */
  answer: string;
  /** Représentation graphique du domaine (exercices d'intégrales doubles) */
  figure?: DomainFigureSpec;
}

export interface Exercise {
  /** Numéro officiel, ex. « 1.1 » */
  id: string;
  /** Chapitre auquel appartient l'exercice (1 à 8) */
  chapter: number;
  /** Titre descriptif court, ex. « Matrices qui commutent » */
  title: string;
  /** Exercice « type examen » (signalé dans l'énoncé officiel) */
  examType: boolean;
  /** Énoncé général commun à toutes les sous-questions (format MathText) */
  statement: string;
  /** Méthode / stratégie à comprendre avant de se lancer (format MathText) */
  method?: string;
  /** Notions de théorie mobilisées (affichées comme étiquettes) */
  theoryRefs: string[];
  /** Sous-questions (au moins une ; label null si pas de découpage) */
  parts: ExercisePart[];
}
