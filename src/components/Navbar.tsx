import { useState, useEffect } from "react";
import { Menu, X, Send } from "lucide-react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mantenemos tu lógica de scroll
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openContactModal = () => {
    const modal = document.getElementById('contact_modal') as HTMLDialogElement;
    if (modal) modal.showModal();
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Sobre Mí", href: "#about" },
    { name: "Proyectos", href: "#projects" },
    { name: "Stack", href: "#tech" },
    { name: "Certificaciones", href: "#certs" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* CAMBIOS APLICADOS:
        1. bg-base-100: Color sólido base del tema (blanco en light, oscuro en dark).
        2. shadow-md: Sombra más pronunciada para separar del contenido.
        3. border-b: Línea sutil abajo para definición.
      */}
      <div className="bg-base-100 shadow-md">
        {/* CAMBIO DE ALTURA:
           h-14 (56px) es más delgado que el anterior h-16 (64px). 
        */}
        <div className="container mx-auto px-6 h-14 flex items-center justify-between">
          
          {/* Logo (opcional, si lo quieres vacío como en tu código lo dejo así) */}
          <a href="#home" className="text-xl font-bold tracking-tighter hover:text-primary transition-colors">
            {/* CarloDev */}
          </a>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-base-content/80 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            {/* BOTÓN PERSONALIZADO:
               - btn-primary: Usa el color principal del tema.
               - text-primary-content: Asegura que el texto sea legible sobre el color.
               - shadow-lg & hover:scale-105: Efecto "pop" 3D sutil.
               - !h-9 & min-h-0: Fuerza al botón a ser un poco más bajito para encajar en la barra delgada.
            */}
            <button 
              onClick={openContactModal} 
              className="btn btn-sm btn-primary text-primary-content font-bold shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all !h-9 min-h-0 rounded-full px-6"
            >
              Contáctame <Send size={14} className="ml-1" />
            </button>
          </div>

          {/* Botón Menú Móvil */}
          <button
            className="md:hidden btn btn-ghost btn-sm btn-circle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Menú Desplegable Móvil (Fondo sólido también) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-base-100 border-b border-base-content/10 shadow-xl absolute w-full left-0">
          <div className="flex flex-col p-4 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium p-2 hover:bg-base-200 hover:text-primary rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button onClick={openContactModal} className="btn btn-primary w-full mt-2 shadow-lg">
              Contáctame
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;