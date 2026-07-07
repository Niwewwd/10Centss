import React from "react";
<<<<<<< Updated upstream

export default function HeroSection() {
  return <section className="p-4">HeroSection</section>;
}
=======
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HERO_IMG = "https://media.base44.com/images/public/6a4c4d2dbad7e59b4a110a8e/0a02d7ed4_generated_a81631bf.png";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Sushi sendo flambado com maçarico — a arte culinária da Brasa Tokio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/40 to-obsidian" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-ember glow-line" />
            <span className="text-ember text-sm font-medium tracking-[0.3em] uppercase">
              Culinária Japonesa Premium
            </span>
          </div>

          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] leading-none tracking-wider text-rice mb-6">
            BRAZA
            <br />
            <span className="text-ember">TOKIO</span>
          </h1>

          <p className="text-rice/70 text-lg md:text-xl leading-relaxed max-w-lg mb-10">
            A fusão perfeita entre o fogo da brasa e a precisão da culinária japonesa. 
            Sabores que transformam cada refeição em uma experiência inesquecível.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#menu"
              className="inline-flex items-center justify-center bg-ember text-white px-8 py-4 rounded font-semibold text-lg hover:bg-ember/90 transition-all animate-pulse-glow"
            >
              VER CARDÁPIO
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-rice/20 text-rice px-8 py-4 rounded font-semibold text-lg hover:border-ember hover:text-ember transition-all"
            >
              FAZER PEDIDO
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#featured"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-rice/40 hover:text-ember transition-colors"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.a>

      {/* Ember accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ember/50 to-transparent" />
    </section>
  );
}
>>>>>>> Stashed changes
