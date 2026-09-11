import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";
import { cn } from "../utils/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
};

/** Wraps content and fades/slides it up into view once scrolled into the viewport. */
export default function Reveal({ children, className, delay = 0, id }: RevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      id={id}
      ref={ref}
      className={cn(
        "opacity-0 translate-y-6 transition-all duration-700 ease-out",
        isInView && "opacity-100 translate-y-0",
        className,
      )}
      style={{ transitionDelay: isInView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
