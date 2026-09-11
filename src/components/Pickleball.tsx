import { useState } from "react";
import { images } from "../data/images";
import { courtRates } from "../data/rates";
import Reveal from "./Reveal";
import Button from "./ui/Button";
import Modal from "./ui/Modal";

export default function Pickleball() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section
      id="pickleball"
      className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-28"
    >
      {/* Distinct visual treatment */}
      <div className="absolute inset-0">
        <img
          src={images.pickleballIndoor}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-25"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-lime-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-lime-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-lime-300 ring-1 ring-inset ring-lime-300/30">
              Play · Compete · Have Fun
            </span>
            <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Premium pickleball courts for beginners and experienced players.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
              Four professionally maintained courts, rental paddles and balls, and a lineup that
              welcomes everyone — from first-timers learning to dink to seasoned competitors
              chasing the next tournament win.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href="#rates" variant="lime" size="lg">
                View Rates
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setBookingOpen(true)}
                className="border-white/30"
              >
                Book a Court
              </Button>
            </div>
            <p className="mt-4 text-xs text-white/40">
              Online booking is launching soon. Tap "Book a Court" for details.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative mx-auto grid max-w-md grid-cols-2 gap-4 sm:max-w-lg">
              <img
                src={images.pickleballAction}
                alt="Player in action on the pickleball court"
                loading="lazy"
                className="col-span-2 aspect-[16/10] w-full rounded-2xl object-cover shadow-2xl shadow-black/40"
              />
              <img
                src={images.pickleballGroup}
                alt="Group of friends playing pickleball"
                loading="lazy"
                className="aspect-square w-full rounded-2xl object-cover shadow-xl shadow-black/30"
              />
              <img
                src={images.pickleballCelebrate}
                alt="Player celebrating a point"
                loading="lazy"
                className="aspect-square w-full rounded-2xl object-cover shadow-xl shadow-black/30"
              />
            </div>
          </Reveal>
        </div>

        {/* Court rates */}
        <Reveal delay={100} id="rates" className="mt-24 scroll-mt-24">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="font-display text-2xl font-extrabold sm:text-3xl">Court Rates</h3>
            <p className="mt-3 text-white/60">
              Simple, transparent pricing. Rates are static for this prototype and will be
              manageable later through the admin dashboard.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl ring-1 ring-white/10">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-white/5 text-xs uppercase tracking-wider text-white/50">
                  <th className="px-5 py-4 font-semibold sm:px-6">Session</th>
                  <th className="hidden px-5 py-4 font-semibold sm:table-cell sm:px-6">Time</th>
                  <th className="px-5 py-4 font-semibold sm:px-6">Rate</th>
                </tr>
              </thead>
              <tbody>
                {courtRates.map((rate, i) => (
                  <tr
                    key={rate.id}
                    className={i % 2 === 0 ? "bg-white/[0.03]" : "bg-transparent"}
                  >
                    <td className="px-5 py-5 sm:px-6">
                      <div className="font-semibold text-white">{rate.session}</div>
                      {rate.note && <div className="mt-0.5 text-xs text-white/40">{rate.note}</div>}
                      <div className="mt-1 text-xs text-white/40 sm:hidden">{rate.time}</div>
                    </td>
                    <td className="hidden px-5 py-5 text-sm text-white/60 sm:table-cell sm:px-6">
                      {rate.time}
                    </td>
                    <td className="px-5 py-5 sm:px-6">
                      <span className="font-display text-base font-bold text-lime-300 sm:text-lg">
                        {rate.rate}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>

      <Modal open={bookingOpen} onClose={() => setBookingOpen(false)}>
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-lime-100 text-2xl">
            🏓
          </div>
          <h3 className="mt-4 font-display text-xl font-bold text-slate-900">
            Online Booking Coming Soon
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            We're putting the finishing touches on real-time court booking. In the meantime, reserve
            your court by calling or messaging us and our team will confirm your slot right away.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button href="tel:+639123456789" variant="primary" size="md">
              Call +63 912 345 6789
            </Button>
            <Button href="#location" variant="ghost" size="md" onClick={() => setBookingOpen(false)}>
              View Contact Details
            </Button>
          </div>
        </div>
      </Modal>
    </section>
  );
}
