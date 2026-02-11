import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Logo className="scale-75 origin-left" />
          <span className="text-zinc-500 text-sm">© {new Date().getFullYear()} Publicar.</span>
        </div>
        
        <div className="flex gap-8 text-sm text-zinc-400">
          <a 
            href="https://www.instagram.com/publicar_comunicacaoemkt/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};