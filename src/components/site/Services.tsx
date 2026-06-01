import { motion } from "framer-motion";
import {
  CircleDollarSign, Sprout, Leaf, BarChart3, Network, Globe2, ArrowUpRight,
} from "lucide-react";

const SERVICES = [
  {
    icon: CircleDollarSign,
    title: "Carbon Credit Development & Verification",
    desc: "End-to-end carbon project development across multiple sectors, backed by digital MRV systems that make every tonne of carbon traceable, auditable, and verifiable.",
    tag: "Markets",
    points: ["Internationally recognised methodologies", "Satellite & field-based dMRV", "Continuous, data-driven monitoring"],
    sdg: "SDG 13 · 9 · 12",
  },
  {
    icon: Sprout,
    title: "Biochar, Soil Carbon & Land Rehabilitation",
    desc: "Inoculated and activated biochar that locks carbon for centuries while restoring degraded farmland and mining environments — paired with no-till regenerative practices.",
    tag: "Restoration",
    points: ["Mine & land restoration", "No-till regenerative farming", "Permanent soil carbon storage"],
    sdg: "SDG 2 · 13 · 15 · 12",
  },
  {
    icon: Leaf,
    title: "Regenerative Agriculture Systems",
    desc: "Sustainable land management that restores soil health, improves biodiversity, and builds long-term climate resilience for rural communities.",
    tag: "Agriculture",
    points: ["Soil function restoration", "Biodiversity uplift", "Climate-resilient yields"],
    sdg: "SDG 2 · 8 · 15",
  },
  {
    icon: BarChart3,
    title: "Climate & Sustainability Consulting",
    desc: "Advisory for governments, corporates and institutions building credible pathways into carbon markets and ESG-aligned strategies.",
    tag: "Advisory",
    points: ["ESG strategy & frameworks", "Climate project design", "Carbon accounting & reporting"],
    sdg: "SDG 13 · 9 · 17",
  },
  {
    icon: Network,
    title: "Multi-Pathway Climate Projects",
    desc: "A diversified portfolio across natural, industrial and circular-economy systems — from afforestation and renewables to methane capture and blue carbon.",
    tag: "Projects",
    points: ["Afforestation & reforestation", "Renewables & energy efficiency", "Methane capture & blue carbon"],
    sdg: "SDG 7 · 13 · 14 · 15",
  },
  {
    icon: Globe2,
    title: "Africa's Climate Economy Access",
    desc: "An integrated ecosystem that connects project development, digital verification and market access — opening climate finance to rural farmers and underserved producers.",
    tag: "Access",
    points: ["Transparent climate projects", "Carbon market inclusion", "Stronger ESG accountability"],
    sdg: "SDG 8 · 9 · 10 · 13 · 17",
  },
];

export function Services() {
  return (
    <section id="solutions" className="relative bg-gradient-to-b from-background to-beige/40 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-emerald">Integrated Climate Solutions</div>
            <h2 className="mt-4 text-balance text-4xl font-bold leading-tight text-forest sm:text-5xl">
              Real-world impact, measured and verified.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Six integrated pillars delivering scalable climate solutions across Africa.
            Hover any card to see what's underneath.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="flip-card h-[360px]"
            >
              <div className="flip-inner">
                {/* FRONT */}
                <div className="flip-face card-lux glow-ring relative overflow-hidden p-7">
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald/15 blur-2xl" />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-xl gradient-brand text-white shadow-[var(--shadow-glow)]">
                        <s.icon className="h-5 w-5" />
                      </span>
                      <span className="rounded-full bg-beige px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-forest">
                        {s.tag}
                      </span>
                    </div>
                    <h3 className="mt-6 text-lg font-bold leading-snug text-forest">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                    <div className="mt-auto flex items-center justify-between pt-4">
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-emerald">{s.sdg}</span>
                      <span className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-emerald">
                        Flip <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* BACK */}
                <div className="flip-face flip-back relative overflow-hidden p-7 text-white shadow-[var(--shadow-lift)] gradient-brand">
                  <div className="absolute inset-0 grid-bg opacity-[0.1]" />
                  <div className="relative flex h-full flex-col">
                    <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/80">{s.tag} · Inside</div>
                    <h3 className="mt-3 text-lg font-bold leading-snug">{s.title}</h3>
                    <ul className="mt-5 space-y-2.5">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-white/95">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <a href="/contact" className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-bold text-forest transition hover:scale-105">
                      Talk to our team <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
