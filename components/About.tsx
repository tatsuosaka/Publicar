import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-4 md:px-12 bg-zinc-950 flex items-center justify-center min-h-[80vh]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
           <span className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-4 block">
            Sobre Nós
          </span>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-10 leading-tight">
            Conexões fortes, <br />
            <span className="text-zinc-500">resultados reais.</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto">
            Somos uma agência completa focada em performance e experiência. Integramos tráfego pago, produção audiovisual, assessoria de imprensa e ativações no varejo para criar estratégias baseadas em dados que impulsionam o crescimento real da sua marca.
          </p>
        </motion.div>
      </div>
    </section>
  );
};