import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  // WhatsApp Link Handler
  const handleStartProject = () => {
    const phone = "5511999999999"; // Replace with actual number
    const message = encodeURIComponent("Olá! Gostaria de iniciar um projeto com a Publicar.");
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden pt-20">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none opacity-50" />

      <div className="z-10 text-center max-w-5xl mx-auto space-y-12 flex flex-col items-center">
        {/* Animated Logo Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, filter: 'blur(20px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64"
        >
          <img 
            src="/logo.webp" 
            alt="Publicar Agency" 
            className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(245,158,11,0.2)]"
          />
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-2xl text-zinc-400 font-light tracking-wide max-w-2xl mx-auto"
        >
          Elevando sua marca ao padrão de excelência.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="pt-4"
        >
          <button 
            onClick={handleStartProject}
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-zinc-900 px-8 font-medium text-zinc-300 transition-all duration-300 hover:bg-zinc-800 hover:text-white border border-zinc-800 hover:border-zinc-700"
          >
            <span className="mr-2">Iniciar Projeto</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-zinc-600 animate-bounce" />
      </motion.div>
    </section>
  );
};