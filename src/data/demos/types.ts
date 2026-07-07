/**
 * Démonstrations à connaître par cœur pour l'examen.
 * Contenu au format MathText (voir src/data/exercises/types.ts) :
 * `$...$` math en ligne · `$$...$$` display · `**gras**` · listes `- ` · ligne vide = paragraphe.
 */

export interface DemoStep {
  /** Titre court de l'étape de compréhension */
  title: string;
  /** Explication pédagogique détaillée (format MathText) */
  content: string;
}

export interface Demonstration {
  /** Identifiant, ex. « 3.2 » (2ᵉ démonstration du chapitre 3) */
  id: string;
  /** Chapitre du cours (1 à 7) */
  chapter: number;
  /** Titre court, ex. « Règle de Cramer » */
  title: string;
  /** Référence officielle, ex. « Slide 121 » */
  slideRef: string;
  /** Ce que l'examen demande exactement, ex. « Énoncer et prouver la règle de Cramer » */
  exam: string;
  /** Énoncé du théorème à restituer (format MathText) */
  statement: string;
  /** L'idée de la preuve en une ou deux phrases (format MathText) */
  intuition: string;
  /** Compréhension détaillée : chaque étape expliquée et développée */
  steps: DemoStep[];
  /** Rédaction modèle COMPLÈTE à écrire telle quelle sur la feuille d'examen (format MathText) */
  examProof: string;
  /** Pièges classiques qui coûtent des points (format MathText, un par entrée) */
  pitfalls: string[];
}
