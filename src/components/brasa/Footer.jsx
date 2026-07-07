import React from "react";
import { Flame, Instagram, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-rice/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-ember" />
            <span className="font-display text-xl tracking-wider text-rice">
              BRAZA <span className="text-ember">TOKIO</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/brasatokio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rice/40 hover:text-ember transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rice/40 hover:text-green-500 transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>

          <p className="text-rice/30 text-sm">
            © 2026 Brasa Tokio. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
