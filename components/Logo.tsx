import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src="./logo.webp" 
        alt="Publicar Logo" 
        className="w-10 h-10 object-contain"
      />
      <span className="font-bold text-xl tracking-tight text-white hidden sm:block">Publicar</span>
    </div>
  );
};