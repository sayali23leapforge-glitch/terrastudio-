import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Mail, MessageCircle, Send, Instagram, Linkedin, Facebook, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

const WHATSAPP_NUMBER = "27000000000"; // update with the real number
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — CarbonSmart Solutions Africa" },
      { name: "description", content: "Get in touch with CarbonSmart Solutions Africa. Reach our team via WhatsApp, email, or visit us in Fourways, Johannesburg." },
      { property: "og:title", content: "Contact — CarbonSmart Solutions Africa" },
      { property: "og:description", content: "Talk to our climate team — WhatsApp, email or visit us in Johannesburg." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const subject = String(data.get("subject") || "");
    const message = String(data.get("message") || "");
    const text = `Hi CarbonSmart — I'm ${name} (${email}).%0A%0A*${subject}*%0A${message}`;
    setSending(true);
    window.open(`${WHATSAPP_LINK}?text=${text}`, "_blank");
    setTimeout(() => setSending(false), 600);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden gradient-brand pb-24 pt-40">
        <div className="absolute inset-0 grid-bg opacity-[0.12]" />
        <div className="relative mx-auto max-w-7xl px-6 text-white">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back home
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-6 max-w-4xl text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl"
          >
            Let's grow something <span className="text-white/90 underline decoration-white/40 underline-offset-8">together.</span>
          </motion.h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90">
            Whether you're a farmer, business, investor or institution — we'd love to hear
            from you. Reach our team via WhatsApp for the fastest reply.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="relative -mt-16 pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* WHATSAPP CTA */}
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-lux relative col-span-1 flex flex-col justify-between overflow-hidden bg-[#25D366] p-8 text-white lg:col-span-5"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/15 blur-2xl" />
              <div className="relative">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/20 backdrop-blur-sm">
                  <MessageCircle className="h-7 w-7" />
                </div>
                <div className="mt-6 text-xs font-bold uppercase tracking-widest text-white/80">Fastest reply</div>
                <h2 className="mt-2 text-3xl font-bold leading-tight">Chat with us on WhatsApp</h2>
                <p className="mt-4 max-w-sm text-white/90">
                  Tap to open a chat directly with our team. We typically reply within a few hours during business days.
                </p>
              </div>
              <div className="relative mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#25D366]">
                Open WhatsApp <Send className="h-4 w-4" />
              </div>
            </motion.a>

            {/* CONTACT INFO */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card-lux col-span-1 space-y-6 p-8 lg:col-span-7"
            >
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-emerald">Visit</div>
                <div className="mt-3 flex gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-emerald" />
                  <div className="text-forest">
                    <div className="font-bold">Design Quarters</div>
                    <div className="text-muted-foreground">
                      Leslie Road, Fourways<br />
                      Johannesburg, 2191<br />
                      South Africa
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-px bg-border" />

              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-emerald">Email</div>
                <div className="mt-3 flex gap-4">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-emerald" />
                  <a href="mailto:hello@carbonsmart.africa" className="font-semibold text-forest hover:text-emerald">
                    hello@carbonsmart.africa
                  </a>
                </div>
              </div>

              <div className="h-px bg-border" />

              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-emerald">Follow</div>
                <div className="mt-3 flex gap-3">
                  <a aria-label="Instagram" href="https://instagram.com/carbonsmartsolutionsafrica" target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full border border-border text-forest transition hover:bg-forest hover:text-white">
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a aria-label="LinkedIn" href="https://www.linkedin.com/company/carbonsmart-solutions-africa/" target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full border border-border text-forest transition hover:bg-forest hover:text-white">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a aria-label="Facebook" href="https://facebook.com/carbonsmartsolutionsafrica" target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full border border-border text-forest transition hover:bg-forest hover:text-white">
                    <Facebook className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="card-lux mt-6 overflow-hidden p-8 lg:p-12"
          >
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <div className="text-xs font-bold uppercase tracking-widest text-emerald">Send a message</div>
                <h3 className="mt-3 text-3xl font-bold leading-tight text-forest">
                  Tell us what you're working on.
                </h3>
                <p className="mt-4 text-muted-foreground">
                  Fill in the form and we'll open a WhatsApp chat with your message pre-filled.
                  We read every enquiry.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 lg:col-span-3">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Your name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <Field label="Subject" name="subject" required />
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-forest" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-forest placeholder:text-muted-foreground focus:border-emerald focus:outline-none focus:ring-2 focus:ring-emerald/30"
                    placeholder="A few lines about your project, organisation or question…"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold disabled:opacity-60"
                >
                  {sending ? "Opening WhatsApp…" : (<>Send via WhatsApp <Send className="h-4 w-4" /></>)}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Floating WhatsApp button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_15px_40px_-10px_rgba(37,211,102,0.6)] transition hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full" />
      </a>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-bold uppercase tracking-widest text-forest">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-forest placeholder:text-muted-foreground focus:border-emerald focus:outline-none focus:ring-2 focus:ring-emerald/30"
      />
    </div>
  );
}
