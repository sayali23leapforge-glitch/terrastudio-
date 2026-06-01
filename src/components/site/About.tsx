import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import founder from "@/assets/about-founder.jpg";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-background py-28">
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-emerald/10 blur-3xl" />
      <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-lime/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-lift)]">
            <img src={founder} alt="Wendile Mpofu, founder of CarbonSmart Solutions Africa" loading="lazy" className="aspect-[4/5] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" />
          </div>
          <div className="absolute -bottom-8 -right-6 hidden w-72 rounded-2xl glass p-5 shadow-[var(--shadow-soft)] md:block">
            <div className="text-xs uppercase tracking-widest text-emerald">Founder & CEO</div>
            <div className="mt-1 text-lg font-bold text-forest">Wendile Mpofu</div>
            <div className="text-sm text-muted-foreground">Climate strategist & soil advocate</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-emerald">Our story</div>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-forest sm:text-5xl">
            Ancestral wisdom. <span className="gradient-text">Modern innovation.</span>
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Wendile Mpofu, born in King William's Town and raised in Mulbarton, spent countless
              afternoons in the garden with her grandmother. It was there she first heard the
              Xhosa phrase <em className="text-forest">"Khathalela umhlaba, nawo umhlaba uza kukukhathalela"</em>
              {" "}— "Take care of the soil, so the soil will take care of you."
            </p>
            <p>
              That wisdom stayed with her. Years later, Wendile discovered the world of carbon
              credits and realised the same principle her grandmother lived by could transform
              communities: farmers could care for the soil and, in return, the soil could care
              for them — not just with food, but with income and resilience.
            </p>
            <p>
              Instead of settling for fragmented climate solutions, Wendile founded
              CarbonSmart Solutions Africa in 2023, officially registering it in 2024. Her vision
              is clear: merge ancestral wisdom with modern innovation to build a trusted,
              transparent climate platform that restores ecosystems and empowers communities.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { y: "2023", l: "Founded" },
              { y: "450+", l: "Farmers" },
              { y: "6", l: "Solution pillars" },
            ].map((s) => (
              <div key={s.l} className="border-l-2 border-emerald/40 pl-4">
                <div className="text-2xl font-bold text-forest">{s.y}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="relative mt-10 rounded-2xl bg-gradient-to-br from-beige to-white p-8 shadow-[var(--shadow-soft)]">
            <Quote className="absolute -left-3 -top-3 h-8 w-8 rounded-lg bg-forest p-1.5 text-white" />
            <p className="text-xl font-semibold italic leading-snug text-forest">
              "Take care of the soil, so the soil will take care of you."
            </p>
            <div className="mt-3 text-sm text-muted-foreground">— Wendile Mpofu, Founder</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
