import { reviews } from "../data/reviews";
import Reveal from "./Reveal";
import SectionLabel from "./ui/SectionLabel";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-amber-500" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${i < rating ? "fill-amber-500" : "fill-slate-200"}`}
        >
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.8L10 14.9l-5.2 2.62.99-5.8-4.21-4.1 5.82-.85z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-amber-50/60 py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-16 top-10 select-none font-display text-[12rem] font-black leading-none text-amber-900/[0.04]">
        “
      </div>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="mt-5 font-display text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl">
            What Our Customers Say
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Sample testimonials for this prototype — soon to be replaced with live Google Reviews.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal key={review.id} delay={(i % 3) * 120}>
              <figure className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-lg shadow-slate-900/5 ring-1 ring-slate-100 transition-transform duration-300 hover:-translate-y-1">
                <Stars rating={review.rating} />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                  "{review.text}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 font-display text-sm font-bold text-amber-700">
                    {review.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-slate-900">{review.name}</span>
                    <span className="block text-xs text-slate-500">{review.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-10 flex items-center justify-center gap-2 text-sm text-slate-500">
          <svg viewBox="0 0 24 24" className="h-5 w-5">
            <path
              fill="#4285F4"
              d="M22.5 12.23c0-.82-.07-1.42-.22-2.05H12v3.7h6c-.12 1-.78 2.5-2.24 3.5l-.02.15 3.25 2.52.22.02c2.07-1.9 3.29-4.7 3.29-7.84Z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.65l-3.32-2.55c-.9.62-2.11 1.05-3.96 1.05-3.02 0-5.58-2-6.5-4.75l-.14.01-3.36 2.6-.05.13C3.75 20.3 7.55 23 12 23Z"
            />
            <path
              fill="#FBBC05"
              d="M5.5 14.1a6.86 6.86 0 0 1 0-4.2l-.01-.15-3.4-2.65-.11.05a11.87 11.87 0 0 0 0 9.6l3.52-2.65Z"
            />
            <path
              fill="#EA4335"
              d="M12 5.4c2.07 0 3.47.9 4.27 1.64l3.12-3.04C17.45 2.18 14.97 1 12 1 7.55 1 3.75 3.7 2.02 7.5l3.48 2.7c.93-2.75 3.49-4.8 6.5-4.8Z"
            />
          </svg>
          Google Reviews integration coming in a future update.
        </Reveal>
      </div>
    </section>
  );
}
