import { useState } from "react";
import { promotions, type Promotion } from "../data/promotions";
import Reveal from "./Reveal";
import SectionLabel from "./ui/SectionLabel";
import Button from "./ui/Button";
import Modal from "./ui/Modal";

export default function Promotions() {
  const [active, setActive] = useState<Promotion | null>(null);

  return (
    <section id="promotions" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>Special Offers</SectionLabel>
          <h2 className="mt-5 font-display text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl">
            Promotions &amp; Events
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Keep an eye out for our rotating promos. These are static for now — soon they'll update
            automatically from our admin dashboard.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {promotions.map((promo, i) => (
            <Reveal key={promo.id} delay={i * 130}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-slate-900 shadow-xl shadow-slate-900/10">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={promo.image}
                    alt={promo.title}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-lime-400 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-slate-900">
                    {promo.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-bold text-white">{promo.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">
                    {promo.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => setActive(promo)}
                    className="mt-5 inline-flex items-center gap-2 self-start text-sm font-bold text-amber-400 transition-colors hover:text-amber-300"
                  >
                    Learn More
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <Modal open={!!active} onClose={() => setActive(null)}>
        {active && (
          <div>
            <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-amber-700">
              {active.tag}
            </span>
            <h3 className="mt-4 font-display text-xl font-bold text-slate-900">{active.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{active.details}</p>
            <div className="mt-6">
              <Button variant="primary" size="md" onClick={() => setActive(null)}>
                Got It
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
