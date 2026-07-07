import type { Exercise } from "./types";
import { exercises as a } from "./ch2a";
import { exercises as b } from "./ch2b";

export const exercises: Exercise[] = [...a, ...b];
