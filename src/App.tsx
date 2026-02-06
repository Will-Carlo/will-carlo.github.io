import React, { useEffect, useState } from 'react';
import { Palette, Home, User, Briefcase, Code, Award } from 'lucide-react';
import Background from './components/Background.tsx';

function App() {
  const [theme, setTheme] = useState("dark");
  const themes = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"];

  return (
    <div data-theme={theme} className="min-h-screen transition-colors duration-300">
      <Background />
      
      {/* Selector de Temas Flotante (Top Right) */}
      <div className="fixed top-4 right-4 z-50 dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-primary btn-circle shadow-lg">
          <Palette size={24} />
        </label>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52 max-h-96 overflow-y-auto">
          {themes.map((t) => (
            <li key={t}><button onClick={() => setTheme(t)} className="capitalize">{t}</button></li>
          ))}
        </ul>
      </div>

      {/* Menú de Navegación Flotante Lateral o Inferior */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div className="btm-nav btm-nav-sm bg-base-200/80 backdrop-blur-md border border-base-content/10 rounded-full px-4 h-16 shadow-2xl relative">
          <a href="#home" className="text-primary"><Home size={20} /></a>
          <a href="#about"><User size={20} /></a>
          <a href="#projects"><Briefcase size={20} /></a>
          <a href="#tech"><Code size={20} /></a>
          <a href="#certs"><Award size={20} /></a>
        </div>
      </div>

      {/* Secciones del Portafolio */}
      <main className="container mx-auto px-4 pb-32">
        <section id="home" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Hola, soy [Tu Nombre]</h1>
            <p className="py-6 text-xl">Desarrollador Backend & Frontend</p>
          </div>
        </section>

        {/* Aquí irán los componentes que crearemos después */}
        <section id="about" className="py-20 h-screen"><h2>Sobre Mí</h2></section>
        <section id="projects" className="py-20 h-screen"><h2>Proyectos</h2></section>
        <section id="tech" className="py-20 h-screen"><h2>Tecnologías</h2></section>
        <section id="certs" className="py-20 h-screen"><h2>Certificaciones</h2></section>
      </main>
    </div>
  );
}

export default App;