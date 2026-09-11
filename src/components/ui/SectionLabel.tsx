import { cn } from "../../utils/cn";

export default function SectionLabel({
  children,
  className,
  light,
}: {
  children: string;
  className?: string;
  light?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase",
        light
          ? "bg-white/10 text-lime-300 ring-1 ring-inset ring-white/20"
          : "bg-amber-100 text-amber-700",
        className,
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", light ? "bg-lime-300" : "bg-amber-600")} />
      {children}
    </span>
  );
}
