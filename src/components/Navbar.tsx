import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Si bajamos más de 100px, mostramos el menú
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Cerramos menú móvil si subimos
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
      className={`fixed top-0 left-0 w-full z-40 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Barra Principal */}
      <div className="bg-base-100/80 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo / Nombre (Clic para ir arriba) */}
          <a href="#home" className="text-xl font-bold tracking-tighter hover:text-primary transition-colors">
            Carlo<span className="text-primary">Dev</span>
          </a>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button onClick={openContactModal} className="btn btn-sm btn-primary">
              Contáctame
            </button>
          </div>

          {/* Botón Menú Móvil */}
          <button
            className="md:hidden btn btn-ghost btn-circle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-base-100 border-b border-base-content/10 shadow-xl absolute w-full">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium p-2 hover:bg-base-200 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button onClick={openContactModal} className="btn btn-primary w-full">
              Contáctame
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;