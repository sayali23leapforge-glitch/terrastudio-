import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import biochar from "@/assets/biochar-hands.jpg";

const STATS = [
  { value: 450, suffix: "+", label: "Farmers Enrolled" },
  { value: 40, suffix: "%", label: "Yield Increase", prefix: "up to " },
  { value: 30, suffix: "%", label: "Fertilizer Reduction" },
  { value: 20, suffix: "%", label: "Water Savings" },
];

function Counter({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{prefix}{n}{suffix}</span>;
}

export function Impact() {
  return (
    <section id="impact" className="relative overflow-hidden bg-beige/50 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">Impact</div>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight text-forest sm:text-5xl">
            Numbers that grow. Lives that change.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Every metric we report is verified, third-party audited and tied back to the farmer,
            the field and the community delivering it.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="card-lux relative overflow-hidden p-7"
            >
              <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-gradient-to-br from-emerald/20 to-transparent blur-xl" />
              <div className="relative">
                <div className="text-5xl font-semibold tracking-tight text-forest">
                  <Counter to={s.value} suffix={s.suffix} prefix={s.prefix} />
                </div>
                <div className="mt-3 text-sm uppercase tracking-widest text-muted-foreground">{s.label}</div>
                <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-muted">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.3 + i * 0.08 }}
                    className="h-full rounded-full bg-gradient-to-r from-forest to-emerald"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid grid-cols-1 items-center gap-10 overflow-hidden rounded-3xl bg-forest text-white lg:grid-cols-2"
        >
          <div className="p-10 lg:p-14">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">Biochar in action</div>
            <h3 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              One handful of biochar. Decades of locked carbon.
            </h3>
            <p className="mt-5 text-white/75">
              Our pyrolysis program converts agricultural residue into stable biochar that
              sequesters carbon for centuries while making soils more fertile and water-efficient.
            </p>
          </div>
          <div className="relative h-72 lg:h-full">
            <img src={biochar} alt="Hands holding biochar and rich soil" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-forest/70 to-transparent lg:bg-gradient-to-l" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
