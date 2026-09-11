import { images } from "../data/images";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden bg-slate-900">
      {/* Split background imagery */}
      <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-2">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${images.heroRestaurant})` }}
        />
        <div
          className="hidden h-full w-full bg-cover bg-center sm:block"
          style={{ backgroundImage: `url(${images.heroPickleball})` }}
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/85" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/40" />
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-lime-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-24 pb-16 sm:px-8 sm:pt-20 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="animate-fade-up inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-lime-300 ring-1 ring-inset ring-white/20 backdrop-blur-sm">
            Restaurant &amp; Pickleball Club
          </span>

          <h1
            className="animate-fade-up mt-6 font-display text-4xl font-extrabold leading-[1.1] text-white sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "100ms" }}
          >
            Good Food.
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-lime-300 bg-clip-text text-transparent">
              Great Games.
            </span>
          </h1>

          <p
            className="animate-fade-up mx-auto mt-6 max-w-xl text-base text-white/80 sm:text-lg"
            style={{ animationDelay: "200ms" }}
          >
            An experience worth coming back to — savor chef-crafted dishes, then dink,
            drive and smash on our premium pickleball courts.
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animationDelay: "300ms" }}
          >
            <Button href="#menu" size="lg" variant="primary" className="w-full sm:w-auto">
              View Menu
            </Button>
            <Button href="#pickleball" size="lg" variant="outline" className="w-full sm:w-auto">
              Explore Pickleball
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/70 transition-colors hover:text-white sm:flex"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Scroll</span>
        <span className="flex h-9 w-6 items-start justify-center rounded-full border border-white/40 p-1.5">
          <span className="h-2 w-1 animate-float-slow rounded-full bg-white/80" />
        </span>
      </a>
    </section>
  );
}
