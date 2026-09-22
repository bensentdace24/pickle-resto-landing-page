import { images } from "../data/images";
import Reveal from "./Reveal";
import SectionLabel from "./ui/SectionLabel";

const stats = [
  { value: "10+", label: "Signature Dishes" },
  { value: "4", label: "Premium Courts" },
  { value: "7", label: "Days a Week" },
  { value: "1000+", label: "Happy Guests" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <Reveal className="order-2 lg:order-1">
          <SectionLabel>Who We Are</SectionLabel>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            More Than Just a<br className="hidden sm:block" /> Place to Eat
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            MJ Pickle &amp; Restaurant brings together two of life's simple pleasures — a hearty, home-style
            meal and a good, competitive game. Whether you're here to relax over comfort food with
            family or to break a sweat on our pickleball courts with friends, we've built a space
            designed for connection, community and fun.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            From our kitchen to our courts, every detail is crafted to give you an experience worth
            coming back to — again and again.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-amber-500 pl-3">
                <div className="font-display text-2xl font-extrabold text-slate-900 sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500 sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150} className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-amber-100 to-lime-100" />
            <img
              src={images.about}
              alt="Guests enjoying a meal together at Dink & Dine"
              className="aspect-[4/5] w-full rounded-[1.75rem] object-cover shadow-2xl shadow-slate-900/20"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -left-6 hidden max-w-[220px] rounded-2xl bg-white p-4 shadow-xl shadow-slate-900/10 ring-1 ring-slate-100 sm:block">
              <p className="font-display text-sm font-bold text-slate-900">"Good food. Good company. Good game."</p>
              <p className="mt-1 text-xs text-slate-500">Our everyday promise to you.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
