export function Tag({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-black/80">
      {label}
    </span>
  );
}
