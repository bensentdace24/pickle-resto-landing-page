import { images } from "../data/images";
import Reveal from "./Reveal";
import SectionLabel from "./ui/SectionLabel";

const showcase = [
  { src: images.chicken, alt: "Grilled chicken inasal platter" },
  { src: images.pasta, alt: "Creamy pasta alfredo with mushrooms" },
  { src: images.restaurantTable, alt: "Elegant table setting at the restaurant" },
];

export default function Restaurant() {
  return (
    <section id="restaurant" className="relative bg-amber-50/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>Our Restaurant</SectionLabel>
          <h2 className="mt-5 font-display text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl">
            Good food. Good company.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Our kitchen serves up hearty Filipino-inspired favorites and comfort classics, made
            fresh daily. Perfect for a quick bite before your match or a leisurely dinner with the
            whole family.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {showcase.map((item, i) => (
            <Reveal key={item.alt} delay={i * 120}>
              <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg shadow-amber-900/10">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300} className="mt-12 flex justify-center">
          <a
            href="#menu"
            className="group inline-flex items-center gap-2 text-base font-bold text-amber-700 transition-colors hover:text-amber-800"
          >
            View Our Menu
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
