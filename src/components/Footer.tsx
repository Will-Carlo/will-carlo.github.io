import { profile } from "../data";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-10">
      <div className="grid grid-flow-col gap-4">
        <a href="#home" className="link link-hover">Inicio</a>
        <a href="#projects" className="link link-hover">Proyectos</a>
        <a href="#about" className="link link-hover">Sobre Mí</a>
      </div> 
      <div>
        <div className="grid grid-flow-col gap-4">
          {profile.socials.map((social, idx) => (
             <a key={idx} href={social.url} className="text-2xl opacity-70 hover:opacity-100 hover:text-primary transition-all">
                <social.icon size={24} />
             </a>
          ))}
        </div>
      </div> 
      <div>
        <p>Copyright © {new Date().getFullYear()} - Desarrollado por {profile.name}</p>
        <p className="text-xs opacity-50">Hecho con React, Tailwind, DaisyUI & TypeScript</p>
      </div>
    </footer>
  );
};
export default Footer;