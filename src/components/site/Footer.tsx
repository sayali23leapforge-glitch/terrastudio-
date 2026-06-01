import { Instagram, Linkedin, Facebook, MapPin, Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/cssa-logo.png.asset.json";

const WHATSAPP = "https://wa.me/27000000000";

export function Footer() {
  return (
    <footer id="contact" className="relative bg-forest text-white">
      <div className="absolute inset-0 grid-bg opacity-[0.06]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center rounded-2xl bg-white/95 p-4">
              <img src={logo.url} alt="CarbonSmart Solutions Africa" className="h-14 w-auto" />
            </div>
            <p className="mt-6 max-w-md text-white/70">
              Verified climate solutions restoring ecosystems, empowering communities,
              and creating sustainable economic growth across Africa.
            </p>

            <div className="mt-8 flex items-start gap-3 text-sm text-white/85">
              <MapPin className="mt-0.5 h-4 w-4 text-lime" />
              <div>
                Design Quarters, Leslie Road<br />
                Fourways, Johannesburg, 2191<br />
                South Africa
              </div>
            </div>
            <div className="mt-3 flex items-center gap-3 text-sm text-white/85">
              <Mail className="h-4 w-4 text-lime" />
              hello@carbonsmart.africa
            </div>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-3 text-sm text-white/85 hover:text-white">
              <MessageCircle className="h-4 w-4 text-lime" />
              Chat with us on WhatsApp
            </a>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-lime">Company</div>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                <li><a href="/#about" className="hover:text-white">About</a></li>
                <li><a href="/#solutions" className="hover:text-white">Solutions</a></li>
                <li><a href="/#technology" className="hover:text-white">Technology</a></li>
                <li><a href="/#impact" className="hover:text-white">Impact</a></li>
              </ul>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-lime">Engage</div>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                <li><a href="/#campaign" className="hover:text-white">Drop a Seed</a></li>
                <li><a href="/#investors" className="hover:text-white">Investors</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
                <li><a href={WHATSAPP} target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp</a></li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs font-bold uppercase tracking-widest text-lime">Verified by</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Verra", "Gold Standard", "ISSB", "TCFD"].map((b) => (
                <span key={b} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs">{b}</span>
              ))}
            </div>

            <div className="mt-8 text-xs font-bold uppercase tracking-widest text-lime">Follow</div>
            <div className="mt-3 flex gap-3">
              <a aria-label="Instagram" href="https://instagram.com/carbonsmartsolutionsafrica" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:bg-lime hover:text-forest">
                <Instagram className="h-4 w-4" />
              </a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/company/carbonsmart-solutions-africa/" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:bg-lime hover:text-forest">
                <Linkedin className="h-4 w-4" />
              </a>
              <a aria-label="Facebook" href="https://facebook.com/carbonsmartsolutionsafrica" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:bg-lime hover:text-forest">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/60 sm:flex-row sm:items-center">
          <div className="italic">"Take care of the soil, so the soil will take care of you."</div>
        </div>
      </div>
    </footer>
  );
}
