import { motion } from "framer-motion";
import { Sprout, Heart } from "lucide-react";
import seedling from "@/assets/seedling-macro.jpg";

export function Campaign() {
  return (
    <section id="campaign" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={seedling} alt="Macro of a seedling emerging from rich soil" loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/85 to-forest/40" />
      </div>

      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ y: -40, x: `${(i * 53) % 100}%`, rotate: 0, opacity: 0 }}
            animate={{ y: "110vh", rotate: 360, opacity: [0, 0.7, 0] }}
            transition={{ duration: 14 + (i % 4) * 3, repeat: Infinity, delay: i * 1.5, ease: "linear" }}
            className="absolute"
          >
            <Sprout className="h-4 w-4 text-lime/70" />
          </motion.span>
        ))}
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-32 text-white lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs font-bold uppercase tracking-widest">
            <Heart className="h-3.5 w-3.5 text-lime" /> Drop a Seed Campaign
          </div>
          <h2 className="mt-6 text-balance text-4xl font-bold leading-tight sm:text-6xl">
            Planting the Seeds of Change Across Africa.
          </h2>
          <p className="mt-6 max-w-xl text-pretty text-white/85">
            One seedling. One farmer. One community at a time. We are inspiring local
            communities to reclaim their futures through sustainable agriculture and verified
            climate action. By empowering individual farmers, we are cultivating a greener,
            more resilient continent from the ground up.
          </p>

          <div className="mt-8 rounded-2xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm">
            <div className="text-xs font-bold uppercase tracking-widest text-lime">Our goal</div>
            <p className="mt-3 text-white/90">
              Plant 100,000 seedlings, enrol 1,000 smallholder farmers, and restore
              degraded land across the continent — verified, transparent and community-led.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="/contact" className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold">
              Drop a Seed — Get Involved
            </a>
            <a href="#impact" className="btn-ghost-light inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold">
              See the impact
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative rounded-3xl glass-dark p-8">
            <div className="text-xs font-bold uppercase tracking-widest text-white/70">Campaign progress</div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-5xl font-bold">87,420</span>
              <span className="text-sm text-lime">/ 100,000 seedlings</span>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "87%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: "easeOut" }}
                className="h-full rounded-full gradient-brand animate-shimmer"
              />
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              {[
                { v: "1", l: "1 seedling" },
                { v: "10", l: "1 family plot" },
                { v: "100", l: "1 hectare" },
              ].map((t) => (
                <div key={t.l} className="rounded-xl border border-white/15 bg-white/5 p-4 transition hover:bg-lime/20">
                  <div className="text-lg font-bold">{t.v}</div>
                  <div className="text-[11px] uppercase tracking-widest text-white/70">{t.l}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
