import { motion } from "framer-motion";
import { ShieldCheck, BadgeCheck, TrendingUp, FileText } from "lucide-react";

const POINTS = [
  { icon: ShieldCheck, t: "Audit-grade MRV", d: "Independent verification on every credit, every cycle." },
  { icon: BadgeCheck, t: "Standards aligned", d: "Verra, Gold Standard, ISSB, TCFD compliant pipelines." },
  { icon: TrendingUp, t: "Investor-ready", d: "Bankable carbon assets with transparent unit economics." },
  { icon: FileText, t: "ESG reporting", d: "Custom disclosure packs for funds, corporates and DFIs." },
];

export function Investors() {
  return (
    <section id="investors" className="relative bg-gradient-to-b from-beige/40 to-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">Investors & ESG</div>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight text-forest sm:text-5xl">
              Capital that compounds — for portfolios and the planet.
            </h2>
            <p className="mt-6 text-muted-foreground">
              We partner with funds, corporates, foundations and DFIs to deploy climate capital
              into Africa's most underwritten asset: regenerative land. Every dollar tracked,
              every outcome verified.
            </p>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-beige transition hover:bg-emerald">
              Request investor deck →
            </a>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {POINTS.map((p, i) => (
              <motion.div
                key={p.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="card-lux p-6"
              >
                <p.icon className="h-6 w-6 text-emerald" />
                <div className="mt-4 text-lg font-semibold text-forest">{p.t}</div>
                <div className="mt-2 text-sm text-muted-foreground">{p.d}</div>
              </motion.div>
            ))}

            <div className="sm:col-span-2 rounded-3xl bg-forest p-8 text-white shadow-[var(--shadow-lift)]">
              <div className="grid grid-cols-3 gap-6 text-center">
                {[
                  { v: "$24M", l: "Pipeline" },
                  { v: "11", l: "Active projects" },
                  { v: "A+", l: "ESG score" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-3xl font-semibold">{s.v}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-widest text-white/70">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
