import { useEffect, useState } from "react";
import Logo from "./ui/Logo";
import Button from "./ui/Button";
import { cn } from "../utils/cn";

const links = [
  { href: "#about", label: "About" },
  { href: "#restaurant", label: "Restaurant" },
  { href: "#menu", label: "Menu" },
  { href: "#pickleball", label: "Pickleball" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#location", label: "Location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-white/95 shadow-md shadow-slate-900/5 backdrop-blur-sm"
          : "bg-gradient-to-b from-black/40 to-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-10">
        <Logo dark={!scrolled && !open} />

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-semibold tracking-wide transition-colors",
                scrolled ? "text-slate-700 hover:text-amber-600" : "text-white/90 hover:text-white",
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="#menu" size="sm" variant={scrolled ? "ghost" : "outline"}>
            View Menu
          </Button>
          <Button href="#pickleball" size="sm" variant="primary">
            Explore Pickleball
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          className={cn(
            "relative flex h-10 w-10 items-center justify-center rounded-lg lg:hidden",
            scrolled || open ? "text-slate-900" : "text-white",
          )}
        >
          <span className="sr-only">Menu</span>
          <div className="relative h-4 w-6">
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-6 bg-current transition-all duration-300",
                open && "top-1.5 rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1.5 h-0.5 w-6 bg-current transition-all duration-300",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-3 h-0.5 w-6 bg-current transition-all duration-300",
                open && "top-1.5 -rotate-45",
              )}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "grid overflow-hidden bg-white transition-[grid-template-rows] duration-300 ease-in-out lg:hidden",
          open ? "grid-rows-[1fr] shadow-xl" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0">
          <div className="flex flex-col gap-1 px-5 pb-6 pt-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-semibold text-slate-800 transition-colors hover:bg-amber-50 hover:text-amber-700"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-3">
              <Button href="#menu" variant="ghost" onClick={() => setOpen(false)}>
                View Menu
              </Button>
              <Button href="#pickleball" variant="primary" onClick={() => setOpen(false)}>
                Explore Pickleball
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
