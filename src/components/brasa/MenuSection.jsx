<<<<<<< Updated upstream
import React from "react";

export default function MenuSection() {
  return <section className="p-4">MenuSection</section>;
}
=======
import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Flame } from "lucide-react";

const FOOD_CATEGORIES = [
  {
    id: "uramaki",
    label: "Uramaki",
    items: [
      { name: "Philadelphia Roll", desc: "Salmão, cream cheese, pepino", price: "R$ 28,90", spice: 0 },
      { name: "Skin Roll", desc: "Pele de salmão crocante, cebolinha", price: "R$ 26,90", spice: 1 },
      { name: "Vulcão Roll", desc: "Salmão grelhado, molho especial", price: "R$ 34,90", spice: 2 },
      { name: "Tropical Roll", desc: "Manga, salmão, cream cheese", price: "R$ 32,90", spice: 0 },
      { name: "Crunchy Roll", desc: "Camarão empanado, abacate", price: "R$ 36,90", spice: 1 },
    ],
  },
  {
    id: "temaki",
    label: "Temaki",
    items: [
      { name: "Temaki Salmão", desc: "Salmão fresco, arroz, nori", price: "R$ 22,90", spice: 0 },
      { name: "Temaki Atum", desc: "Atum fresco com cebolinha", price: "R$ 24,90", spice: 0 },
      { name: "Temaki Camarão", desc: "Camarão empanado, molho tarê", price: "R$ 26,90", spice: 1 },
      { name: "Temaki Skin", desc: "Pele de salmão frita crocante", price: "R$ 21,90", spice: 1 },
    ],
  },
  {
    id: "sashimi",
    label: "Sashimi",
    items: [
      { name: "Sashimi Salmão (10 un.)", desc: "Fatias finas de salmão fresco", price: "R$ 38,90", spice: 0 },
      { name: "Sashimi Atum (10 un.)", desc: "Fatias finas de atum premium", price: "R$ 42,90", spice: 0 },
      { name: "Sashimi Misto (15 un.)", desc: "Salmão, atum e peixe branco", price: "R$ 52,90", spice: 0 },
    ],
  },
  {
    id: "nigiri",
    label: "Nigiri",
    items: [
      { name: "Nigiri Salmão (2 un.)", desc: "Bolinho de arroz com salmão", price: "R$ 14,90", spice: 0 },
      { name: "Nigiri Atum (2 un.)", desc: "Bolinho de arroz com atum", price: "R$ 16,90", spice: 0 },
      { name: "Nigiri Camarão (2 un.)", desc: "Bolinho de arroz com camarão", price: "R$ 16,90", spice: 0 },
      { name: "Niguiri Flambado (2 un.)", desc: "Salmão flambado com molho especial", price: "R$ 18,90", spice: 2 },
    ],
  },
  {
    id: "hot",
    label: "Hot Roll",
    items: [
      { name: "Hot Philadelphia", desc: "Salmão, cream cheese empanado e frito", price: "R$ 29,90", spice: 0 },
      { name: "Hot Skin", desc: "Pele de salmão, cream cheese empanado", price: "R$ 27,90", spice: 1 },
      { name: "Hot Banana", desc: "Banana, cream cheese, canela", price: "R$ 25,90", spice: 0 },
    ],
  },
  {
    id: "pratos",
    label: "Pratos Quentes",
    items: [
      { name: "Gyoza (8 un.)", desc: "Guioza de porco grelhado", price: "R$ 24,90", spice: 1 },
      { name: "Yakisoba de Frango", desc: "Macarrão oriental salteado", price: "R$ 32,90", spice: 1 },
      { name: "Yakisoba de Camarão", desc: "Macarrão oriental com camarão", price: "R$ 38,90", spice: 1 },
    ],
  },
];

const DRINK_CATEGORIES = [
  {
    id: "drinks-autorais",
    label: "Drinks Autorais",
    items: [
      { name: "Caipirinha Braza", desc: "Cachaça artesanal, limão, açúcar", price: "R$ 18,90", spice: 0 },
      { name: "Batida de Jurupinga", desc: "Jurupinga, leite condensado, frutas", price: "R$ 19,90", spice: 0 },
      { name: "Tokio Sour", desc: "Sakê, limão, xarope de gengibre", price: "R$ 22,90", spice: 1 },
      { name: "Ember Mojito", desc: "Rum, hortelã, limão, refrigerante", price: "R$ 21,90", spice: 0 },
      { name: "Lychee Martini", desc: "Vodka, licor de lichia, limão", price: "R$ 24,90", spice: 0 },
    ],
  },
  {
    id: "sakes",
    label: "Sakês",
    items: [
      { name: "Sakê Quente (180ml)", desc: "Sakê tradicional servido quente", price: "R$ 14,90", spice: 1 },
      { name: "Sakê Gelado (180ml)", desc: "Sakê premium servido gelado", price: "R$ 16,90", spice: 0 },
      { name: "Sakê Frutas (180ml)", desc: "Sakê com toque de frutas vermelhas", price: "R$ 19,90", spice: 0 },
    ],
  },
  {
    id: "sem-alcool",
    label: "Sem Álcool",
    items: [
      { name: "Suco de Maracujá", desc: "Polpa natural de maracujá", price: "R$ 9,90", spice: 0 },
      { name: "Limonada Suíça", desc: "Limão batido com hortelã", price: "R$ 10,90", spice: 0 },
      { name: "Refrigerante", desc: "Coca-Cola, Guaraná, Sprite", price: "R$ 7,90", spice: 0 },
      { name: "Água Tônica", desc: "Água tônica com limão", price: "R$ 8,90", spice: 0 },
    ],
  },
];

const FOOD_IMAGES = {
  uramaki: "https://media.base44.com/images/public/6a4c4d2dbad7e59b4a110a8e/444807d21_generated_18e68756.png",
  temaki: "https://media.base44.com/images/public/6a4c4d2dbad7e59b4a110a8e/aa9100d7f_generated_bb29cf5f.png",
  sashimi: "https://media.base44.com/images/public/6a4c4d2dbad7e59b4a110a8e/cd2716a58_generated_34622da6.png",
  nigiri: "https://media.base44.com/images/public/6a4c4d2dbad7e59b4a110a8e/3bc15a14b_generated_1c83a695.png",
  hot: "https://media.base44.com/images/public/6a4c4d2dbad7e59b4a110a8e/e01622c6c_generated_fa232ac4.png",
  pratos: "https://media.base44.com/images/public/6a4c4d2dbad7e59b4a110a8e/c45c78236_generated_564dc417.png",
};

const DRINK_IMAGES = {
  "drinks-autorais": "https://media.base44.com/images/public/6a4c4d2dbad7e59b4a110a8e/3a90b4aab_generated_image.png",
  sakes: "https://media.base44.com/images/public/6a4c4d2dbad7e59b4a110a8e/f2e3776dc_generated_image.png",
  "sem-alcool": "https://media.base44.com/images/public/6a4c4d2dbad7e59b4a110a8e/386b00641_generated_image.png",
};

function SpiceLevel({ level }) {
  if (level === 0) return null;
  return (
    <div className="flex gap-0.5 items-center">
      {Array.from({ length: level }).map((_, i) => (
        <Flame key={i} className="w-3 h-3 text-ember" />
      ))}
    </div>
  );
}

export default function MenuSection() {
  const [mode, setMode] = useState("comida");
  const [active, setActive] = useState("uramaki");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const categories = mode === "comida" ? FOOD_CATEGORIES : DRINK_CATEGORIES;
  const images = mode === "comida" ? FOOD_IMAGES : DRINK_IMAGES;

  const handleModeChange = (newMode) => {
    setMode(newMode);
    setActive(newMode === "comida" ? "uramaki" : "drinks-autorais");
  };

  const activeCat = categories.find((c) => c.id === active);

  return (
    <section id="menu" ref={sectionRef} className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-ember glow-line" />
            <span className="text-ember text-sm tracking-[0.3em] uppercase font-medium">
              Nosso Cardápio
            </span>
            <div className="w-8 h-[1px] bg-ember glow-line" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl tracking-wider text-rice">
            MENU <span className="text-ember">COMPLETO</span>
          </h2>
        </motion.div>

        {/* Mode filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex glass rounded-full p-1">
            <button
              onClick={() => handleModeChange("comida")}
              className={`px-8 py-2.5 rounded-full text-sm font-semibold tracking-wide uppercase transition-all ${
                mode === "comida"
                  ? "bg-ember text-white"
                  : "text-rice/50 hover:text-rice"
              }`}
            >
              Comidas
            </button>
            <button
              onClick={() => handleModeChange("bebidas")}
              className={`px-8 py-2.5 rounded-full text-sm font-semibold tracking-wide uppercase transition-all ${
                mode === "bebidas"
                  ? "bg-ember text-white"
                  : "text-rice/50 hover:text-rice"
              }`}
            >
              Bebidas
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col lg:flex-row gap-12"
          >
            {/* Category nav */}
            <div className="lg:w-48 shrink-0">
              <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 lg:sticky lg:top-24" style={{ scrollbarWidth: "none" }}>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActive(cat.id)}
                    className={`whitespace-nowrap px-4 py-3 rounded text-left text-sm font-medium tracking-wide uppercase transition-all ${
                      active === cat.id
                        ? "bg-ember/10 text-ember border border-ember/30"
                        : "text-rice/40 hover:text-rice/70 border border-transparent"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Menu content */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Category image */}
                <div className="md:w-64 shrink-0">
                  <div className="sticky top-24 rounded-lg overflow-hidden border border-rice/5 card-glow">
                    <img
                      src={images[active]}
                      alt={activeCat?.label}
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                </div>

                {/* Items list */}
                <div className="flex-1 space-y-1">
                  {activeCat?.items.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="group flex items-start justify-between gap-4 p-4 rounded-lg hover:bg-rice/[0.03] transition-colors border border-transparent hover:border-rice/5"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-rice font-medium group-hover:text-ember transition-colors">
                            {item.name}
                          </h3>
                          <SpiceLevel level={item.spice} />
                        </div>
                        <p className="text-rice/40 text-sm">{item.desc}</p>
                      </div>
                      <div className="flex items-center gap-4 shrink-0">
                        <span className="text-gold font-bold text-lg">{item.price}</span>
                        <a
                          href="https://wa.me/5500000000000"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="opacity-0 group-hover:opacity-100 bg-ember text-white text-xs px-3 py-1.5 rounded font-medium transition-all hover:bg-ember/90"
                        >
                          Pedir
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Ember accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ember/20 to-transparent" />
    </section>
  );
}
>>>>>>> Stashed changes
