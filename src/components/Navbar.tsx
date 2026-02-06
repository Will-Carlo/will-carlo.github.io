import { Home, User, Briefcase, Cpu, Award } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface NavItem {
  id: string;
  icon: LucideIcon;
  label: string;
}

const Navbar = () => {
  const navItems: NavItem[] = [
    { id: "#home", icon: Home, label: "Inicio" },
    { id: "#about", icon: User, label: "Sobre Mí" },
    { id: "#projects", icon: Briefcase, label: "Proyectos" },
    { id: "#tech", icon: Cpu, label: "Tecnologías" },
    { id: "#certs", icon: Award, label: "Certificaciones" },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex gap-2 p-2 bg-base-200/50 backdrop-blur-lg border border-white/10 rounded-full shadow-2xl">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.id}
            className="btn btn-ghost btn-circle btn-sm tooltip tooltip-top hover:bg-primary hover:text-primary-content transition-all"
            data-tip={item.label}
          >
            <item.icon size={18} />
          </a>
        ))}
      </div>
    </div>
  );
};
export default Navbar;