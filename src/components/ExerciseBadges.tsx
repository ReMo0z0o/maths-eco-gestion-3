import { tpForExercise } from "@/data/planning";

export function ExamBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold text-amber-800 ring-1 ring-amber-300">
      ⭐ Type examen
    </span>
  );
}

export function TpBadge({ exerciseId }: { exerciseId: string }) {
  const info = tpForExercise(exerciseId);
  if (!info) return null;
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-sky-100 px-2 py-0.5 text-[11px] font-semibold text-sky-800 ring-1 ring-sky-300">
      TP{info.tp}
      {info.prep ? " · préparatoire" : ""}
    </span>
  );
}

export function DoneBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-800 ring-1 ring-emerald-300">
      ✓ Maîtrisé
    </span>
  );
}
