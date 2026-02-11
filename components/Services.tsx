import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clapperboard, 
  TrendingUp, 
  Newspaper, 
  ShoppingBag, 
  Globe 
} from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Áudio Visual",
    description: "Produção cinematográfica e fotografia que contam histórias memoráveis.",
    icon: Clapperboard,
    colSpan: "md:col-span-2",
  },
  {
    id: 2,
    title: "Marketing",
    description: "Estratégias baseadas em dados para alavancar seu crescimento.",
    icon: TrendingUp,
    colSpan: "md:col-span-1",
  },
  {
    id: 3,
    title: "Assessoria de Imprensa",
    description: "Conectamos sua marca aos maiores veículos de comunicação.",
    icon: Newspaper,
    colSpan: "md:col-span-1",
  },
  {
    id: 4,
    title: "Varejo e Promoção",
    description: "Ativações de marca e experiências no ponto de venda.",
    icon: ShoppingBag,
    colSpan: "md:col-span-2",
  },
  {
    id: 5,
    title: "Comunicação On e Off",
    description: "Gestão integrada de presença digital e mídia tradicional.",
    icon: Globe,
    colSpan: "md:col-span-3",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-4 md:px-12 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">Nossas Expertise</h2>
          <div className="h-1 w-20 bg-amber-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02 }}
              className={`group relative p-8 rounded-3xl bg-zinc-900/40 border border-white/5 overflow-hidden hover:border-white/10 transition-colors ${service.colSpan}`}
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-black transition-colors duration-300 text-zinc-400">
                    <service.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-semibold text-zinc-100 mb-3">{service.title}</h3>
                  <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};