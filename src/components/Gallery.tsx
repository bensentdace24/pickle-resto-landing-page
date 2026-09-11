import { useState } from "react";
import { galleryCategories, galleryItems, type GalleryCategory } from "../data/gallery";
import Reveal from "./Reveal";
import SectionLabel from "./ui/SectionLabel";
import { cn } from "../utils/cn";

type Filter = "All" | GalleryCategory;

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    filter === "All" ? galleryItems : galleryItems.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="relative bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>Gallery</SectionLabel>
          <h2 className="mt-5 font-display text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl">
            A Look Inside Dink &amp; Dine
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            From plated favorites to game-point celebrations — a glimpse of the everyday moments
            we get to share with our guests.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
          {(["All", ...galleryCategories] as Filter[]).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
                filter === cat
                  ? "bg-amber-600 text-white shadow-md shadow-amber-600/30"
                  : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-amber-50 hover:text-amber-700",
              )}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="mt-12 columns-2 gap-4 sm:columns-3 lg:columns-4">
          {filtered.map((item, i) => (
            <Reveal key={item.id} delay={(i % 4) * 90} className="mb-4 break-inside-avoid">
              <button
                type="button"
                onClick={() => setLightbox(item.image)}
                className={cn(
                  "group relative block w-full overflow-hidden rounded-xl shadow-md shadow-slate-900/5 ring-1 ring-slate-200/70",
                  item.tall ? "aspect-[3/4]" : "aspect-square",
                )}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-slate-950/70 via-slate-950/0 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-xs font-semibold text-white">{item.category}</span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt="Enlarged gallery view"
            className="max-h-[85vh] max-w-full rounded-xl object-contain shadow-2xl animate-fade-up"
          />
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close preview"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl text-white transition-colors hover:bg-white/20"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}
