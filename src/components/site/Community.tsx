import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import community from "@/assets/community-women.jpg";
import scientist from "@/assets/scientist-lab.jpg";
import drone from "@/assets/drone-farmland.jpg";

const SLIDES = [
  {
    img: community,
    title: "Women at the heart of climate action",
    quote: "When you train one woman farmer, you transform an entire generation.",
    name: "Asha Mwangi · Cooperative lead, Kenya",
  },
  {
    img: scientist,
    title: "Science that listens to the soil",
    quote: "Our lab work begins and ends in the field. Data without context is noise.",
    name: "Dr. Tinashe Moyo · Soil scientist",
  },
  {
    img: drone,
    title: "Aerial views, ground-truth realities",
    quote: "Every hectare we restore reconnects rivers, ecosystems and economies.",
    name: "CSSA Field Operations",
  },
];

export function Community() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % SLIDES.length);
  const prev = () => setI((p) => (p - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section className="relative overflow-hidden bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">Community</div>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight text-forest sm:text-5xl">
              The people who carry Africa's climate future on their backs.
            </h2>
          </div>
          <div className="flex gap-2">
            <button onClick={prev} aria-label="Previous" className="grid h-12 w-12 place-items-center rounded-full border border-border bg-card text-forest transition hover:bg-forest hover:text-beige">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={next} aria-label="Next" className="grid h-12 w-12 place-items-center rounded-full border border-border bg-card text-forest transition hover:bg-forest hover:text-beige">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-3xl shadow-[var(--shadow-lift)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.7 }}
              className="relative h-[70vh] min-h-[480px] w-full"
            >
              <img src={SLIDES[i].img} alt={SLIDES[i].title} loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-white md:p-14">
                <motion.h3
                  key={`t-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.6 }}
                  className="max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl"
                >
                  {SLIDES[i].title}
                </motion.h3>
                <motion.p
                  key={`q-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.6 }}
                  className="mt-4 max-w-2xl text-lg italic text-white/85"
                >
                  "{SLIDES[i].quote}"
                </motion.p>
                <div className="mt-3 text-sm text-emerald">{SLIDES[i].name}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-6 right-8 flex items-center gap-2">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-emerald" : "w-4 bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
