import Navbar from './components/Navbar';
import ThemeController from './components/ThemeController';
import Background from './components/Background';
import HeroSection from './components/HeroSection';
import ProjectsGrid from './components/ProjectsGrid';
import TechMarquee from './components/TechMarquee';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import AboutSection from './components/AboutSection';

function App() {
  return (
    <div className="min-h-screen relative font-sans text-base-content overflow-x-hidden transition-colors duration-300">
      
      <Background />
      <Navbar />
      <ContactModal />
      
      {/* --- CAMBIO AQUÍ: Posición Inferior Derecha (Bottom-Right) --- */}
      {/* 'fixed' asegura que te siga al bajar. 'z-50' para que esté sobre todo. */}
      <div className="fixed bottom-6 right-6 z-50">
         <ThemeController />
      </div>

      <main className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col gap-32 pb-32">
        
        <div className='mt-20 lg:mt-28'>
           <HeroSection />
        </div>

        <AboutSection />
        
        <ProjectsGrid />
      </main>
        <TechMarquee />
      <main className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col gap-32 pb-32">
        <Certifications />
      
      </main>

      <Footer />
    </div>
  );
}

export default App;