export interface TpSession {
  /** Numéro du TP (1 à 9) */
  id: number;
  /** Semaine, ex. « Semaine du 29 septembre » */
  week: string;
  /** Contenu théorique couvert, ex. « Slides 1–95 (Ch1–Ch2) » */
  content: string;
  /** Chapitres concernés */
  chapters: number[];
  /** Exercices préparatoires — à faire AVANT le TP (ids, éventuellement suffixés : « 2.1a ») */
  prep: string[];
  /** Note libre pour la préparation (ex. vidéos à regarder) */
  prepNote?: string;
  /** Exercices réalisés au TP */
  during: string[];
  /** Note libre pour la séance */
  note?: string;
}

export const planning: TpSession[] = [
  {
    id: 1,
    week: "Semaine du 29 septembre",
    content: "Slides 1–95 (Ch1–Ch2)",
    chapters: [1, 2],
    prep: ["1.3", "2.1a"],
    during: ["1.2", "1.4", "1.5", "2.2a", "2.3a", "2.4c"],
  },
  {
    id: 2,
    week: "Semaine du 6 octobre",
    content: "Slides 59–123 (Ch2–Ch3)",
    chapters: [2, 3],
    prep: ["2.7", "3.2b", "3.6a"],
    during: ["2.8", "3.1", "3.3", "3.4b", "3.7"],
  },
  {
    id: 3,
    week: "Semaine du 13 octobre",
    content: "Slides 124–155 (Ch3–Ch4)",
    chapters: [3, 4],
    prep: ["4.1d", "4.3a"],
    during: ["3.8", "3.9", "4.1a", "4.3c", "4.4"],
  },
  {
    id: 4,
    week: "Semaine du 20 octobre",
    content: "Slides 156–168 (Ch4)",
    chapters: [4],
    prep: ["4.5b", "4.8d", "4.9b"],
    during: ["4.5a", "4.6a", "4.7", "4.8ac", "4.9ac"],
  },
  {
    id: 5,
    week: "Semaine du 3 novembre",
    content: "Slides 156–199 (Ch4–Ch5)",
    chapters: [4, 5],
    prep: ["5.1"],
    during: ["4.10cf", "4.11", "4.13", "5.2bc"],
  },
  {
    id: 6,
    week: "Semaine du 17 novembre",
    content: "Slides 193–226 (Ch5–Ch6)",
    chapters: [5, 6],
    prep: [],
    during: ["5.3", "6.2", "6.3a", "6.4"],
  },
  {
    id: 7,
    week: "Semaine du 24 novembre",
    content: "Slides 213–240 (Ch6)",
    chapters: [6],
    prep: [],
    prepNote: "Regarder les vidéos sur les polynômes",
    during: ["6.5", "6.6", "6.8", "6.9"],
  },
  {
    id: 8,
    week: "Semaine du 1ᵉʳ décembre",
    content: "Slides 241–286 (Ch7–Ch8)",
    chapters: [7, 8],
    prep: ["7.3a", "8.2a", "8.3df"],
    during: ["7.1", "7.2", "7.3b", "8.4", "8.5", "8.6"],
  },
  {
    id: 9,
    week: "Semaine du 8 décembre",
    content: "Préparation à l'examen",
    chapters: [],
    prep: [],
    during: [],
    note: "Les énoncés seront disponibles sur Webcampus.",
  },
];

/** « 4.10cf » → id d'exercice « 4.10 » (les suffixes désignent les sous-questions) */
export function exerciseIdFromRef(ref: string): string {
  const m = ref.match(/^(\d+\.\d+)/);
  return m ? m[1] : ref;
}

/** Sous-questions ciblées par une référence : « 4.8ac » → « a, c » (vide si tout l'exercice) */
export function partsFromRef(ref: string): string {
  const m = ref.match(/^\d+\.\d+([a-z]+)$/);
  return m ? m[1].split("").join(", ") : "";
}

const tpByExercise = new Map<string, { tp: number; prep: boolean }>();
for (const tp of planning) {
  for (const ref of tp.prep) {
    const id = exerciseIdFromRef(ref);
    if (!tpByExercise.has(id)) tpByExercise.set(id, { tp: tp.id, prep: true });
  }
  for (const ref of tp.during) {
    const id = exerciseIdFromRef(ref);
    if (!tpByExercise.has(id)) tpByExercise.set(id, { tp: tp.id, prep: false });
  }
}

/** TP dans lequel l'exercice apparaît (préparatoire ou en séance), s'il y en a un */
export function tpForExercise(id: string): { tp: number; prep: boolean } | undefined {
  return tpByExercise.get(id);
}
