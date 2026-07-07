<<<<<<< Updated upstream
import React from "react";

export default function FeaturedSection() {
  return <section className="p-4">FeaturedSection</section>;
}
=======
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const FEATURED = [
  {
    name: "Uramaki Especial",
    desc: "Salmão, cream cheese e cebolinha",
    price: "R$ 32,90",
    img: "https://media.base44.com/images/public/6a4c4d2dbad7e59b4a110a8e/444807d21_generated_18e68756.png",
    tag: "Mais Pedido",
  },
  {
    name: "Dragon Roll",
    desc: "Enguia, abacate e molho teriyaki",
    price: "R$ 42,90",
    img: "https://media.base44.com/images/public/6a4c4d2dbad7e59b4a110a8e/1b0cb2258_generated_9092f594.png",
    tag: "Chef's Choice",
  },
  {
    name: "Sashimi Premium",
    desc: "Salmão, atum e peixe branco",
    price: "R$ 48,90",
    img: "https://media.base44.com/images/public/6a4c4d2dbad7e59b4a110a8e/cd2716a58_generated_34622da6.png",
    tag: "Premium",
  },
  {
    name: "Hot Philadelphia",
    desc: "Salmão, cream cheese empanado",
    price: "R$ 29,90",
    img: "https://media.base44.com/images/public/6a4c4d2dbad7e59b4a110a8e/e01622c6c_generated_fa232ac4.png",
    tag: "Favorito",
  },
];

export default function FeaturedSection() {
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section id="featured" ref={sectionRef} className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-ember glow-line" />
              <span className="text-ember text-sm tracking-[0.3em] uppercase font-medium">
                Destaques
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl tracking-wider text-rice">
              OS MAIS <span className="text-ember">PEDIDOS</span>
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll(-1)}
              className="p-3 border border-rice/10 rounded hover:border-ember hover:text-ember text-rice/50 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="p-3 border border-rice/10 rounded hover:border-ember hover:text-ember text-rice/50 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {FEATURED.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="min-w-[280px] md:min-w-[300px] snap-start group"
            >
              <div className="relative overflow-hidden rounded-lg border border-rice/5 card-glow bg-obsidian">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-ember/90 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl tracking-wider text-rice mb-1">
                    {item.name}
                  </h3>
                  <p className="text-rice/50 text-sm mb-4">{item.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gold font-bold text-xl">{item.price}</span>
                    <a
                      href="https://wa.me/5500000000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-ember/10 border border-ember/30 text-ember px-4 py-2 rounded text-sm font-medium hover:bg-ember hover:text-white transition-all"
                    >
                      Pedir
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Ember accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ember/20 to-transparent" />
    </section>
  );
}
>>>>>>> Stashed changes
