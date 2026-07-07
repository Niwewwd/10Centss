<<<<<<< Updated upstream
import React from "react";

export default function ContactSection() {
  return <section className="p-4">ContactSection</section>;
}
=======
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle, Instagram } from "lucide-react";

const INFO = [
  {
    icon: MapPin,
    title: "Endereço",
    text: "Rua Principal, 123 — Centro",
    link: "https://maps.google.com",
  },
  {
    icon: Phone,
    title: "Telefone",
    text: "(00) 99999-9999",
    link: "tel:+5500999999999",
  },
  {
    icon: Clock,
    title: "Horário",
    text: "Ter a Dom — 18h às 23h",
    link: null,
  },
  {
    icon: Instagram,
    title: "Instagram",
    text: "@brasatokio",
    link: "https://instagram.com/brasatokio",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-ember glow-line" />
            <span className="text-ember text-sm tracking-[0.3em] uppercase font-medium">
              Fale Conosco
            </span>
            <div className="w-8 h-[1px] bg-ember glow-line" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl tracking-wider text-rice">
            ENTRE EM <span className="text-ember">CONTATO</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Info cards */}
          <div className="space-y-4">
            {INFO.map((item, i) => {
              const Wrapper = item.link ? "a" : "div";
              const wrapperProps = item.link
                ? { href: item.link, target: "_blank", rel: "noopener noreferrer" }
                : {};
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Wrapper
                    {...wrapperProps}
                    className="glass rounded-lg p-5 flex items-center gap-4 card-glow block"
                  >
                    <div className="w-12 h-12 rounded-lg bg-ember/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-ember" />
                    </div>
                    <div>
                      <p className="text-rice/50 text-xs uppercase tracking-wider mb-0.5">
                        {item.title}
                      </p>
                      <p className="text-rice font-medium">{item.text}</p>
                    </div>
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass rounded-lg p-8 flex flex-col items-center justify-center text-center card-glow"
          >
            <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
              <MessageCircle className="w-10 h-10 text-green-500" />
            </div>
            <h3 className="font-display text-3xl tracking-wider text-rice mb-3">
              PEÇA PELO WHATSAPP
            </h3>
            <p className="text-rice/50 mb-8 max-w-sm">
              Faça seu pedido de forma rápida e prática. É só mandar uma mensagem 
              que já preparamos tudo pra você!
            </p>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Abrir WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      {/* Ember accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ember/20 to-transparent" />
    </section>
  );
}
>>>>>>> Stashed changes
