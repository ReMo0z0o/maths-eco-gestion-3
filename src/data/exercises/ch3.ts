import type { Exercise } from "./types";
import { exercises as a } from "./ch3a";
import { exercises as b } from "./ch3b";

export const exercises: Exercise[] = [...a, ...b];
