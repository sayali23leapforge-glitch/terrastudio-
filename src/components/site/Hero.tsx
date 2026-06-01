import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Leaf, TrendingUp, Globe2 } from "lucide-react";
import heroImg from "@/assets/hero-planting.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="African woman with baby on her back planting a seedling at golden hour"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/70 via-forest/55 to-forest/95" />
        <div className="absolute inset-0 grid-bg opacity-[0.08]" />
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ y: "110vh", x: `${(i * 73) % 100}vw`, opacity: 0 }}
            animate={{ y: "-10vh", opacity: [0, 0.8, 0] }}
            transition={{
              duration: 18 + (i % 5) * 4,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "linear",
            }}
            className="absolute h-1.5 w-1.5 rounded-full bg-emerald/70 shadow-[0_0_12px_color-mix(in_oklab,var(--emerald)_80%,transparent)]"
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs font-medium text-white/90"
        >
          <Sparkles className="h-3.5 w-3.5 text-emerald" />
          Verified climate solutions · Africa-led innovation
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-5xl text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Take care of the soil,{" "}
          <span className="bg-gradient-to-r from-lime via-white to-sky bg-clip-text text-transparent">
            so the soil takes care of you.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg"
        >
          CarbonSmart Solutions Africa is a climate technology and carbon project
          development platform delivering measurable, verifiable and scalable climate
          solutions across the continent.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#solutions" className="btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold">
            Explore Solutions <ArrowRight className="h-4 w-4" />
          </a>
          <a href="/contact" className="btn-ghost-light inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold">
            Partner With Us
          </a>
        </motion.div>

        {/* Floating climate dashboard cards */}
        <div className="pointer-events-none mt-16 hidden grid-cols-3 gap-4 md:grid">
          <FloatingStat icon={<Leaf className="h-4 w-4" />} label="Carbon sequestered" value="128,400" unit="tCO₂e" delay={0.6} />
          <FloatingStat icon={<TrendingUp className="h-4 w-4" />} label="Yield uplift" value="+34%" unit="avg." delay={0.8} />
          <FloatingStat icon={<Globe2 className="h-4 w-4" />} label="Hectares restored" value="12,750" unit="ha" delay={1.0} />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}

function FloatingStat({
  icon, label, value, unit, delay,
}: { icon: React.ReactNode; label: string; value: string; unit: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="glass-dark rounded-2xl p-5 text-white animate-float"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/70">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-emerald/30 text-emerald">{icon}</span>
        {label}
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-3xl font-semibold tracking-tight">{value}</span>
        <span className="text-xs text-white/60">{unit}</span>
      </div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-emerald to-white/80 animate-shimmer" />
      </div>
    </motion.div>
  );
}
