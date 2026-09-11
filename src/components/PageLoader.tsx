import { cn } from "../utils/cn";

export default function PageLoader({ visible }: { visible: boolean }) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[200] flex items-center justify-center bg-slate-950 transition-opacity duration-500",
        visible ? "opacity-100" : "pointer-events-none opacity-0",
      )}
      aria-hidden={!visible}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 shadow-lg shadow-amber-600/30">
          <svg viewBox="0 0 24 24" className="h-8 w-8 animate-pulse text-white" fill="none" stroke="currentColor" strokeWidth={2}>
            <circle cx="8.5" cy="8.5" r="5.5" strokeLinecap="round" />
            <path d="M12.5 12.5 20 20" strokeLinecap="round" />
          </svg>
        </div>
        <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
          Dink &amp; Dine
        </p>
      </div>
    </div>
  );
}
