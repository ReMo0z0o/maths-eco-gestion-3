import { useSyncExternalStore, useCallback } from "react";

/**
 * Suivi de progression des exercices, persisté dans localStorage.
 * Un exercice est identifié par son id officiel (« 1.1 », « 4.13 », …).
 */

const STORAGE_KEY = "matheco3-exercices-faits-v1";

let doneSet: Set<string> | null = null;
const listeners = new Set<() => void>();
let snapshot: string[] = [];

function load(): Set<string> {
  if (doneSet) return doneSet;
  doneSet = new Set();
  if (typeof window !== "undefined") {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) doneSet = new Set(JSON.parse(raw) as string[]);
    } catch {
      // stockage indisponible ou corrompu : on repart de zéro
    }
  }
  snapshot = [...doneSet];
  return doneSet;
}

function persist() {
  if (typeof window === "undefined" || !doneSet) return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...doneSet]));
  } catch {
    // quota dépassé ou stockage bloqué : la progression reste en mémoire
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): string[] {
  load();
  return snapshot;
}

const EMPTY: string[] = [];
function getServerSnapshot(): string[] {
  return EMPTY;
}

export function toggleDone(id: string) {
  const set = load();
  if (set.has(id)) set.delete(id);
  else set.add(id);
  snapshot = [...set];
  persist();
  listeners.forEach((l) => l());
}

export function useProgress() {
  const done = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isDone = useCallback((id: string) => done.includes(id), [done]);
  const toggle = useCallback((id: string) => toggleDone(id), []);
  const countDone = useCallback(
    (ids: string[]) => ids.filter((id) => done.includes(id)).length,
    [done],
  );
  return { done, isDone, toggle, countDone };
}
