<<<<<<< Updated upstream
import React from "react";

export default function Navbar() {
  return <nav className="p-4">Navbar</nav>;
}
=======
import React, { useState, useEffect } from "react";
import { Menu, X, Flame } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "Início", href: "#hero" },
  { label: "Cardápio", href: "#menu" },
  { label: "Sobre", href: "#about" },
  { label: "Contato", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 group">
            <Flame className="w-7 h-7 text-ember group-hover:scale-110 transition-transform" />
            <span className="font-display text-3xl tracking-wider text-rice">
              BRAZA <span className="text-ember">TOKIO</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-rice/70 hover:text-ember transition-colors tracking-wide uppercase"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ember text-white px-5 py-2.5 rounded text-sm font-semibold hover:bg-ember/90 transition-colors animate-pulse-glow"
            >
              PEÇA AGORA
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-rice p-2"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 glass flex flex-col items-center justify-center gap-8"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="font-display text-4xl text-rice hover:text-ember transition-colors tracking-wider"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="bg-ember text-white px-8 py-3 rounded text-lg font-semibold mt-4"
            >
              PEÇA AGORA
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
>>>>>>> Stashed changes
