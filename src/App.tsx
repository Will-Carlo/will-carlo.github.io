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
    // 1. Contenedor principal limitado en ancho (max-w-6xl) y centrado (mx-auto).
    // Added px-6 md:px-12 for nice side margins on smaller screens.
    <div className="min-h-screen relative font-sans text-base-content max-w-4xl mx-auto px-6 md:px-12 overflow-x-hidden">
      
      <Background />
      <Navbar />
      {/* Ajustamos la posición del ThemeController para que respete el nuevo ancho */}
      <div className="absolute top-0 right-0 pt-4 pr-4 lg:pr-0 z-50">
         <ThemeController />
      </div>

      {/* 2. Usamos Flex columna con un GAP GRANDE (gap-32 = 8rem = 128px) entre secciones */}
      {/* Esto da el "aire" que pediste. */}
      <main className="flex flex-col gap-32 pb-32">
        
        {/* El Hero tiene su propio padding superior interno, así que no lo sumamos al gap */}
        <div className='mt-20 lg:mt-28'>
           <HeroSection />
        </div>

        <ProjectsGrid />

        <TechMarquee />

        <Certifications />
      
      </main>

      <Footer />
    </div>
  );
}

export default App;