<<<<<<< Updated upstream
import React from "react";

export default function AboutSection() {
  return <section className="p-4">AboutSection</section>;
}
=======
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Flame, Fish, Award, Clock } from "lucide-react";

const CITY_IMG = "https://media.base44.com/images/public/6a4c4d2dbad7e59b4a110a8e/2a48bf8cc_generated_572707c0.png";

const STATS = [
  { icon: Fish, value: "30+", label: "Variedades no Cardápio" },
  { icon: Award, value: "100%", label: "Ingredientes Selecionados" },
  { icon: Clock, value: "40 min", label: "Tempo Médio de Entrega" },
  { icon: Flame, value: "2000+", label: "Clientes Satisfeitos" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={CITY_IMG}
          alt="Paisagem da cidade com trilha de luz laranja — de Tóquio para sua cidade"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-obsidian/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-ember glow-line" />
            <span className="text-ember text-sm tracking-[0.3em] uppercase font-medium">
              Nossa História
            </span>
            <div className="w-8 h-[1px] bg-ember glow-line" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl tracking-wider text-rice mb-6">
            DE TÓQUIO PARA <span className="text-ember">SUA CIDADE</span>
          </h2>
          <p className="text-rice/60 text-lg max-w-2xl mx-auto leading-relaxed">
            A Brasa Tokio nasceu da paixão por unir o melhor da culinária japonesa 
            com o calor e a intensidade da brasa brasileira. Cada peça é preparada com 
            ingredientes frescos e técnicas que respeitam a tradição, trazendo o sabor 
            autêntico de Tóquio direto para a sua mesa.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass rounded-lg p-6 text-center card-glow"
            >
              <stat.icon className="w-8 h-8 text-ember mx-auto mb-3" />
              <div className="font-display text-4xl text-gold tracking-wider mb-1">
                {stat.value}
              </div>
              <p className="text-rice/50 text-sm">{stat.label}</p>
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
