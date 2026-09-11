import { cn } from "../../utils/cn";

export default function Logo({ dark = false, className }: { dark?: boolean; className?: string }) {
  return (
    <a
      href="#home"
      className={cn("group flex items-center gap-2.5 font-display", className)}
      aria-label="Dink & Dine — Home"
    >
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 shadow-md shadow-amber-600/30 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth={2}>
          <circle cx="8.5" cy="8.5" r="5.5" strokeLinecap="round" />
          <path d="M12.5 12.5 20 20" strokeLinecap="round" />
          <circle cx="8.5" cy="8.5" r="1.6" fill="currentColor" stroke="none" />
        </svg>
        <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full bg-lime-400 ring-2 ring-white" />
      </span>
      <span className="leading-tight">
        <span className={cn("block text-lg font-bold tracking-tight", dark ? "text-white" : "text-slate-900")}>
          Dink<span className="text-amber-600">&amp;</span>Dine
        </span>
        <span
          className={cn(
            "block text-[10px] font-semibold tracking-[0.25em] uppercase",
            dark ? "text-white/60" : "text-slate-500",
          )}
        >
          Restaurant · Pickleball
        </span>
      </span>
    </a>
  );
}
