import Navbar from './components/Navbar';
import ThemeController from './components/ThemeController';
import Background from './components/Background';
import HeroSection from './components/HeroSection';
import ProjectsGrid from './components/ProjectsGrid';
import TechMarquee from './components/TechMarquee';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

function App() {
  return (
    // 'font-sans' aplica la fuente por defecto de Tailwind.
    // 'text-base-content' asegura que el texto tome el color correcto del tema DaisyUI.
    <div className="min-h-screen relative font-sans text-base-content transition-colors duration-300">
      
      {/* --- Elementos Globales (Fondo, Menú, Tema) --- */}
      <Background />
      <Navbar />
      <ThemeController />

      {/* --- Contenido Principal --- */}
      <main className="pb-20">
        
        {/* Sección de Inicio / Hero */}
        <HeroSection />

        {/* Separador visual sutil */}
        <div className="divider container mx-auto opacity-10 my-0"></div>

        {/* Sección de Proyectos */}
        <ProjectsGrid />

        {/* Sección de Tecnologías (Marquee infinito) */}
        <TechMarquee />

        {/* Sección de Certificaciones */}
        <Certifications />
      
      </main>

      {/* --- Footer --- */}
      <Footer />
    </div>
  );
}

export default App;