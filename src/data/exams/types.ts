/**
 * Examens des années précédentes, résolus avec accompagnement progressif.
 * Contenu au format MathText (voir src/data/exercises/types.ts) :
 * `$...$` math en ligne · `$$...$$` display · `**gras**` · listes `- ` · ligne vide = paragraphe.
 */

export interface ExamStep {
  /** Titre court de l'étape de résolution */
  title: string;
  /** Contenu détaillé (format MathText) */
  content: string;
}

export interface ExamQuestion {
  /** « q1 », « q2 », … (numérotation officielle du sujet) */
  id: string;
  /** Numéro affiché (3 pour « Question 3 ») */
  number: number;
  /** Titre descriptif court, ex. « Sous-vectoriel : base et orthonormalisation » */
  title: string;
  /** Barème officiel */
  points: number;
  /** Chapitres du cours mobilisés (1 à 8) */
  chapters: number[];
  /** Nature de la question */
  kind: "demo" | "vraifaux" | "qcm" | "exercice";
  /** Énoncé fidèle au sujet (format MathText) */
  statement: string;
  /**
   * Indices progressifs (2 à 4), révélés un à un AVANT la solution :
   * du plus vague (« quelle méthode ? ») au plus concret (« premier résultat intermédiaire »).
   */
  hints: string[];
  /** Résolution super détaillée, étape par étape */
  steps: ExamStep[];
  /** Réponse finale / récapitulatif concis (format MathText) */
  answer: string;
  /** Conseils « gestion d'examen » : barème, temps, ce que le correcteur attend, pièges */
  examTips: string[];
  /** Si la question est une démonstration du référentiel : id de la démo (ex. « 6.3 ») */
  demoRef?: string;
  /** Exercices de TP très proches (ids, ex. « 5.2 ») pour s'entraîner davantage */
  exerciseRefs?: string[];
}

export interface Exam {
  /** Slug, ex. « janvier-2026 » */
  id: string;
  /** Titre affiché, ex. « Examen de janvier 2026 » */
  title: string;
  /** Sous-titre court (correction officielle, sujet partiel…) */
  subtitle: string;
  /** Correction officielle typée disponible dans le PDF */
  official: boolean;
  /** Chemin du PDF téléchargeable */
  pdf: string;
  /** Durée officielle en minutes */
  durationMin: number;
  /** Total des points du sujet (tel que couvert ici) */
  totalPoints: number;
  /** Remarque éventuelle (ex. sujet partiel) */
  note?: string;
  questions: ExamQuestion[];
}
