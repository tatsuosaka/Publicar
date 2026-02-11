import React from 'react';
import { motion } from 'framer-motion';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  // Função unificada de scroll que considera a altura da navbar fixa
  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    
    if (element) {
      const navbarHeight = 90; // Altura aproximada da navbar + um respiro
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 border-b border-white/5 bg-black/50 backdrop-blur-xl"
    >
      <div className="flex items-center">
        <Logo />
      </div>

      <div className="flex items-center gap-6">
        <a 
          href="#services" 
          onClick={(e) => handleScroll(e, 'services')}
          className="text-sm font-medium text-zinc-400 hover:text-white transition-colors hidden md:block cursor-pointer p-2"
        >
          Serviços
        </a>
        <a 
          href="#about" 
          onClick={(e) => handleScroll(e, 'about')}
          className="text-sm font-medium text-zinc-400 hover:text-white transition-colors hidden md:block cursor-pointer p-2"
        >
          Sobre Nós
        </a>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => handleScroll(e, 'contact')}
          className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors cursor-pointer"
        >
          Fale Conosco
        </motion.button>
      </div>
    </motion.nav>
  );
};