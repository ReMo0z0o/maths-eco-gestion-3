import type { Exercise } from "./types";
import { exercises as a } from "./ch4a";
import { exercises as b } from "./ch4b";
import { exercises as c } from "./ch4c";

export const exercises: Exercise[] = [...a, ...b, ...c];
