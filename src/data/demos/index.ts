import type { Demonstration } from "./types";
import { demos as ch1 } from "./ch1";
import { demos as ch2 } from "./ch2";
import { demos as ch3 } from "./ch3";
import { demos as ch4 } from "./ch4";
import { demos as ch5 } from "./ch5";
import { demos as ch6 } from "./ch6";
import { demos as ch7 } from "./ch7";

export type { Demonstration, DemoStep } from "./types";

export const allDemos: Demonstration[] = [...ch1, ...ch2, ...ch3, ...ch4, ...ch5, ...ch6, ...ch7];

const byId = new Map(allDemos.map((d) => [d.id, d]));

export function getDemo(id: string): Demonstration | undefined {
  return byId.get(id);
}

export function demosForChapter(chapter: number): Demonstration[] {
  return allDemos.filter((d) => d.chapter === chapter);
}

/** « 3.2 » → « 3-2 » (slug d'URL sans point) */
export function demoSlug(id: string): string {
  return id.replace(".", "-");
}

/** « 3-2 » → « 3.2 » */
export function demoIdFromSlug(slug: string): string {
  return slug.replace("-", ".");
}
