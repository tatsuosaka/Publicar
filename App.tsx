import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

/**
 * Este componente representa a estrutura que iria no arquivo app/page.tsx
 * em um projeto Next.js.
 */
function App() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-amber-500/30">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;