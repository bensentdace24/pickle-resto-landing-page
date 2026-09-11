import Reveal from "./Reveal";
import SectionLabel from "./ui/SectionLabel";

const hours = [
  { day: "Monday – Friday", time: "10:00 AM – 10:00 PM" },
  { day: "Saturday – Sunday", time: "8:00 AM – 11:00 PM" },
  { day: "Court Access", time: "6:00 AM – 10:00 PM daily" },
];

const contacts = [
  {
    label: "Address",
    value: "123 Sports Complex Road, Brgy. Poblacion, Sample City, Philippines",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s-7-6.1-7-11a7 7 0 1 1 14 0c0 4.9-7 11-7 11Z M12 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      />
    ),
  },
  {
    label: "Phone",
    value: "+63 912 345 6789",
    href: "tel:+639123456789",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5.5C3 4.7 3.7 4 4.5 4H7l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v2.5c0 .8-.7 1.5-1.5 1.5C10.5 19 5 13.5 3 8.5V5.5Z"
      />
    ),
  },
  {
    label: "Email",
    value: "hello@dinkanddine.ph",
    href: "mailto:hello@dinkanddine.ph",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11ZM4 6.5l8 6.5 8-6.5"
      />
    ),
  },
];

export default function Location() {
  return (
    <section id="location" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>Visit Us</SectionLabel>
          <h2 className="mt-5 font-display text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl">
            Find Us &amp; Say Hello
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Drop by for a meal, a match, or both. We'd love to have you.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6 rounded-2xl bg-slate-50 p-7 ring-1 ring-slate-100 sm:p-8">
              <div>
                <h3 className="font-display text-lg font-bold text-slate-900">Contact &amp; Address</h3>
                <div className="mt-5 space-y-5">
                  {contacts.map((c) => (
                    <div key={c.label} className="flex items-start gap-3.5">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8}>
                          {c.icon}
                        </svg>
                      </span>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          {c.label}
                        </div>
                        {c.href ? (
                          <a href={c.href} className="text-sm font-medium text-slate-800 hover:text-amber-700">
                            {c.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-slate-800">{c.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-display text-lg font-bold text-slate-900">Opening Hours</h3>
                <ul className="mt-4 space-y-3">
                  {hours.map((h) => (
                    <li key={h.day} className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">{h.day}</span>
                      <span className="font-semibold text-slate-800">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-display text-lg font-bold text-slate-900">Follow Us</h3>
                <div className="mt-4 flex gap-3">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-700 ring-1 ring-slate-200 transition-all hover:-translate-y-0.5 hover:bg-amber-600 hover:text-white"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-700 ring-1 ring-slate-200 transition-all hover:-translate-y-0.5 hover:bg-amber-600 hover:text-white"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47a4.9 4.9 0 0 1 1.77 1.15 4.9 4.9 0 0 1 1.15 1.77c.25.64.42 1.37.47 2.43C21.99 8.94 22 9.28 22 12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.64.25-1.37.42-2.43.47C15.06 21.99 14.72 22 12 22s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43a4.9 4.9 0 0 1 1.15-1.77A4.9 4.9 0 0 1 5.45.53C6.09.28 6.82.11 7.88.06 8.94.01 9.28 0 12 0Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm5.2-8.4a1.17 1.17 0 1 1-2.34 0 1.17 1.17 0 0 1 2.34 0Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-3">
            <div className="h-full min-h-[420px] overflow-hidden rounded-2xl shadow-xl shadow-slate-900/10 ring-1 ring-slate-100">
              <iframe
                title="Dink & Dine Map Location"
                src="https://www.google.com/maps?q=Rizal%20Park%2C%20Manila%2C%20Philippines&output=embed"
                className="h-full min-h-[420px] w-full grayscale-[15%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-3 text-center text-xs text-slate-400">
              Placeholder map for the prototype — will be updated with the exact business location
              via Google Maps Platform.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
