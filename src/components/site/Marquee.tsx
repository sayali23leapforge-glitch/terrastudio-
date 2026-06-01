import { Leaf, Globe2, ShieldCheck, BadgeCheck, Sprout, TreePine, Sun, Mountain } from "lucide-react";

const ITEMS = [
  { icon: Leaf, label: "Verra Registered" },
  { icon: BadgeCheck, label: "Gold Standard" },
  { icon: ShieldCheck, label: "ISSB Aligned" },
  { icon: Globe2, label: "UN SDG Partner" },
  { icon: Sprout, label: "Regen Africa Alliance" },
  { icon: TreePine, label: "1t.org Pledged" },
  { icon: Sun, label: "Climate Neutral" },
  { icon: Mountain, label: "TCFD Reporting" },
];

export function Marquee() {
  // duplicate twice for seamless loop
  const row = [...ITEMS, ...ITEMS];

  return (
    <section className="relative overflow-hidden border-y border-border bg-card py-10">
      <div className="mx-auto mb-6 max-w-7xl px-6 text-center">
        <div className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald">
          Trusted · Certified · Verified
        </div>
      </div>

      <div className="group relative overflow-hidden">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-card to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-card to-transparent" />

        <div className="flex w-max animate-marquee pause-on-hover items-center gap-12 px-6">
          {row.map((it, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center gap-3 rounded-full border border-border bg-background/60 px-6 py-3 text-forest backdrop-blur-sm transition hover:border-emerald/50 hover:text-emerald"
            >
              <it.icon className="h-4 w-4" />
              <span className="whitespace-nowrap text-sm font-semibold tracking-wide">{it.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
