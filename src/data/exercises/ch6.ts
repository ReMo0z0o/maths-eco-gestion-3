import type { Exercise } from "./types";
import { exercises as a } from "./ch6a";
import { exercises as b } from "./ch6b";

export const exercises: Exercise[] = [...a, ...b];
