import Navbar from './components/Navbar';
import ThemeController from './components/ThemeController';
import Background from './components/Background';
import HeroSection from './components/HeroSection';
import ProjectsGrid from './components/ProjectsGrid';
import TechMarquee from './components/TechMarquee';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal'; // Importamos el modal
import AboutSection from './components/AboutSection'; // Importamos Sobre Mí

function App() {
  return (
    <div className="min-h-screen relative font-sans text-base-content overflow-x-hidden">
      
      <Background />
      
      {/* El Navbar ahora maneja su propia visibilidad al scroll */}
      <Navbar />
      
      {/* El modal vive oculto hasta que se le llama */}
      <ContactModal />
      
      <div className="absolute top-0 right-0 pt-4 pr-4 lg:pr-6 z-50">
         <ThemeController />
      </div>

      <main className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col gap-32 pb-32">
        
        <div className='mt-20 lg:mt-28'>
           <HeroSection />
        </div>

        {/* Nueva Sección: Sobre Mí */}
        <AboutSection />

        <ProjectsGrid />

        <TechMarquee />

        <Certifications />
      
      </main>

      <Footer />
    </div>
  );
}

export default App;