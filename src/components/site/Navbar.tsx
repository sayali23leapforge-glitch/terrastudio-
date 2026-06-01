import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/ChatGPT Image Jun 1, 2026, 07_16_01 PM.png";

const NAV = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Impact", href: "/#impact" },
  { label: "Technology", href: "/#technology" },
  { label: "Campaign", href: "/#campaign" },
  { label: "Investors", href: "/#investors" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/85 backdrop-blur-xl shadow-[0_4px_30px_-10px_rgba(0,0,0,0.1)] py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="CarbonSmart Solutions Africa"
            className={`transition-all duration-500 ${scrolled ? "h-10 w-auto" : "h-12 w-auto"}`}
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`nav-link text-sm font-semibold transition-colors ${
                scrolled ? "text-forest hover:text-emerald" : "text-white/90 hover:text-white"
              }`}
            >
              {n.label}
            </a>
          ))}
          <Link
            to="/contact"
            className={`nav-link text-sm font-semibold transition-colors ${
              scrolled ? "text-forest hover:text-emerald" : "text-white/90 hover:text-white"
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary inline-flex items-center rounded-full px-5 py-2.5 text-sm font-bold">
            Join the Movement
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`grid h-10 w-10 place-items-center rounded-lg lg:hidden ${
            scrolled ? "bg-forest text-white" : "glass-dark text-white"
          }`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="mx-6 mt-3 overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-lift)] lg:hidden"
        >
          <div className="flex flex-col gap-1 p-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 font-medium text-forest hover:bg-beige"
              >
                {n.label}
              </a>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-forest hover:bg-beige"
            >
              Contact
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold"
            >
              Join the Movement
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
