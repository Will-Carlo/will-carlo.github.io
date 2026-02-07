import { profile } from "../data";

const Footer = () => {
  return (
    // Quitamos 'rounded' y 'mt-10' para que sea una franja completa
    <footer className="footer footer-center p-10 bg-base-200 text-base-content w-full">
      <div>
        <div className="grid grid-flow-col gap-4">
          {profile.socials.map((social, idx) => (
             <a key={idx} href={social.url} className="text-2xl opacity-70 hover:opacity-100 hover:text-primary transition-all">
                <social.icon size={24} />
             </a>
          ))}
        </div>
        <p className="text-xs opacity-50">Hecho con React, Tailwind, DaisyUI & TypeScript</p>
      </div>
    </footer>
  );
};
export default Footer;