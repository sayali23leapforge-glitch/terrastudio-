import { motion } from "framer-motion";
import { Activity, Satellite, Cpu, MapPin } from "lucide-react";
import farming from "@/assets/smart-farming.jpg";

export function Technology() {
  return (
    <section id="technology" className="relative overflow-hidden bg-forest py-28 text-white">
      <div className="absolute inset-0 grid-bg opacity-[0.08]" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-emerald/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">Technology</div>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            A climate intelligence layer for the world's most important continent.
          </h2>
          <p className="mt-6 max-w-xl text-pretty text-white/75">
            Our digital MRV platform fuses satellite imagery, ground-truth IoT sensors and AI
            modelling to deliver continuous, audit-grade climate analytics. Every credit issued is
            traceable to the hectare, the harvest and the farmer.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              { icon: Satellite, t: "Satellite MRV", d: "Sentinel + Planet imagery, weekly cadence." },
              { icon: Cpu, t: "AI Climate Models", d: "Yield, biomass and SOC predictions." },
              { icon: MapPin, t: "Geo-tagged Plots", d: "Polygon-level traceability for every farm." },
              { icon: Activity, t: "Live Dashboards", d: "Real-time ESG and carbon analytics." },
            ].map((f) => (
              <div key={f.t} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-emerald/40 hover:bg-white/[0.07]">
                <f.icon className="h-5 w-5 text-emerald" />
                <div className="mt-3 font-semibold">{f.t}</div>
                <div className="mt-1 text-sm text-white/70">{f.d}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Dashboard mock */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-[var(--shadow-lift)]">
            <img src={farming} alt="Engineer using climate analytics tablet in a field" loading="lazy" className="h-[420px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/40 to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-8 left-6 w-72 rounded-2xl glass-dark p-5 animate-float"
          >
            <div className="text-xs uppercase tracking-widest text-white/60">Sequestration · live</div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-semibold">+1,284</span>
              <span className="text-xs text-emerald">tCO₂e / 24h</span>
            </div>
            <div className="mt-3 flex h-12 items-end gap-1">
              {[40, 60, 35, 70, 55, 80, 65, 90, 75, 95].map((h, i) => (
                <div key={i} className="w-2 rounded-sm bg-gradient-to-t from-emerald to-white/80" style={{ height: `${h}%` }} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute -top-6 -right-2 w-56 rounded-2xl glass-dark p-4"
          >
            <div className="flex items-center justify-between text-xs">
              <span className="text-white/60">ESG Score</span>
              <span className="rounded-full bg-emerald/30 px-2 py-0.5 text-emerald">A+</span>
            </div>
            <div className="mt-3 text-2xl font-semibold">94.6</div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-emerald to-white animate-shimmer" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
