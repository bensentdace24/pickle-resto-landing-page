import { featuredMenuItems } from "../data/menu";
import Reveal from "./Reveal";
import SectionLabel from "./ui/SectionLabel";
import Button from "./ui/Button";

const peso = (n: number) => `₱${n.toLocaleString("en-PH")}`;

export default function FeaturedMenu() {
  return (
    <section id="menu" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>Featured Menu</SectionLabel>
          <h2 className="mt-5 font-display text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl">
            Popular Picks
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            A sneak peek of the crowd favorites. This is a prototype menu — the full, up-to-date
            menu will soon be powered by our own API.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredMenuItems.map((item, i) => (
            <Reveal key={item.id} delay={i * 120}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-amber-900/10">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-sm font-extrabold text-amber-700 shadow-md">
                    {peso(item.price)}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-bold text-slate-900">{item.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300} className="mt-14 flex justify-center">
          <Button href="#restaurant" variant="ghost" size="md">
            See Full Restaurant Highlights
          </Button>
        </Reveal>

        <p className="mt-6 text-center text-xs text-slate-400">
          Prices shown are for prototype purposes. Full catalog coming soon via our API.
        </p>
      </div>
    </section>
  );
}
