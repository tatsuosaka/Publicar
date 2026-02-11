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
            Filosofia
          </span>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-10 leading-tight">
            Não criamos apenas campanhas. <br />
            <span className="text-zinc-500">Nós desenhamos legados.</span>
          </h2>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
            Acreditamos que a estética não é apenas visual, é funcional. Na Publicar, cada pixel, cada palavra e cada frame são meticulosamente orquestrados para transmitir autoridade e sofisticação.
          </p>
        </motion.div>
      </div>
    </section>
  );
};