import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send, User, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with the actual agency phone number
    const phone = "5511999999999"; 
    
    // Construct the WhatsApp URL
    const encodedMessage = encodeURIComponent(
      `Olá! Me chamo ${name}. \n\n${message}`
    );
    
    const url = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-32 px-4 md:px-12 bg-black relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 mb-6 bg-zinc-900 rounded-full border border-zinc-800">
            <MessageCircle className="w-6 h-6 text-amber-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Vamos conversar?</h2>
          <p className="text-zinc-400 text-lg">
            Preencha os dados abaixo para iniciar um atendimento direto via WhatsApp.
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-zinc-900/30 p-8 md:p-12 rounded-3xl border border-white/5 backdrop-blur-sm"
        >
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-zinc-300 ml-1">Seu Nome</label>
            <div className="relative group">
              <User className="absolute left-4 top-3.5 w-5 h-5 text-zinc-500 group-focus-within:text-amber-500 transition-colors" />
              <input
                type="text"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Como podemos te chamar?"
                className="w-full bg-black/50 border border-zinc-800 rounded-xl py-3 pl-12 pr-4 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-zinc-300 ml-1">Mensagem</label>
            <div className="relative group">
              <MessageSquare className="absolute left-4 top-3.5 w-5 h-5 text-zinc-500 group-focus-within:text-amber-500 transition-colors" />
              <textarea
                id="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Conte um pouco sobre sua ideia..."
                className="w-full bg-black/50 border border-zinc-800 rounded-xl py-3 pl-12 pr-4 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-400 text-black font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 group"
          >
            <span>Iniciar Conversa no WhatsApp</span>
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <p className="text-center text-xs text-zinc-600 mt-4">
            Ao clicar, você será redirecionado para o WhatsApp Web ou App.
          </p>
        </motion.form>
      </div>
    </section>
  );
};