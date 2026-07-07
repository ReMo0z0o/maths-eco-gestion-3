import type { Exercise } from "./types";
import { exercises as ch1 } from "./ch1";
import { exercises as ch2 } from "./ch2";
import { exercises as ch3 } from "./ch3";
import { exercises as ch4 } from "./ch4";
import { exercises as ch5 } from "./ch5";
import { exercises as ch6 } from "./ch6";
import { exercises as ch7 } from "./ch7";
import { exercises as ch8 } from "./ch8";

export type { Exercise, ExercisePart, SolutionStep } from "./types";

export const allExercises: Exercise[] = [
  ...ch1,
  ...ch2,
  ...ch3,
  ...ch4,
  ...ch5,
  ...ch6,
  ...ch7,
  ...ch8,
];

const byId = new Map(allExercises.map((e) => [e.id, e]));

export function getExercise(id: string): Exercise | undefined {
  return byId.get(id);
}

export function exercisesForChapter(chapter: number): Exercise[] {
  return allExercises.filter((e) => e.chapter === chapter);
}

/** « 1.1 » → « 1-1 » : slug d'URL sans point (les points cassent le fallback SPA des hébergeurs statiques) */
export function exerciseSlug(id: string): string {
  return id.replace(".", "-");
}

/** « 1-1 » → « 1.1 » */
export function exerciseIdFromSlug(slug: string): string {
  return slug.replace("-", ".");
}
