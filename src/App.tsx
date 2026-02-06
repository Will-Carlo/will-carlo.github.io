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
    // 1. Contenedor padre: Ocupa todo el ancho (Full Width)
    <div className="min-h-screen relative font-sans text-base-content overflow-x-hidden">
      
      <Background />
      <Navbar />
      <ThemeController />

      {/* 2. Main: Aquí aplicamos el ancho máximo y centrado solo al contenido */}
      <main className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col gap-32 pb-32">
        
        <div className='mt-20 lg:mt-28'>
           <HeroSection />
        </div>

        <ProjectsGrid />

        <TechMarquee />

        <Certifications />
      
      </main>

      {/* 3. Footer: Está fuera del 'main', por lo que ocupará todo el ancho de la pantalla */}
      <Footer />
    </div>
  );
}

export default App;