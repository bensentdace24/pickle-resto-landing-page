import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.97]";

const variants = {
  primary:
    "bg-amber-600 text-white shadow-lg shadow-amber-600/30 hover:bg-amber-700 hover:shadow-xl hover:shadow-amber-600/40 focus-visible:ring-amber-500",
  dark:
    "bg-slate-900 text-white shadow-lg shadow-slate-900/30 hover:bg-slate-800 focus-visible:ring-slate-700",
  lime: "bg-lime-400 text-slate-900 shadow-lg shadow-lime-400/30 hover:bg-lime-300 focus-visible:ring-lime-300",
  outline:
    "border-2 border-white/70 text-white hover:bg-white hover:text-slate-900 focus-visible:ring-white backdrop-blur-sm",
  ghost:
    "border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white focus-visible:ring-slate-900",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm sm:text-base",
  lg: "px-8 py-4 text-base sm:text-lg",
};

type CommonProps = {
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export default function Button(props: ButtonAsButton | ButtonAsAnchor) {
  const { children, variant = "primary", size = "md", className, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
