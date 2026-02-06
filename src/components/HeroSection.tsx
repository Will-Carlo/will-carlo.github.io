import { profile } from "../data";
import { Download, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Texto (Izquierda) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center lg:text-left order-2 lg:order-1"
        >
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Soy <span className="text-primary">{profile.name.split(" ")[0]}</span>
            <br />
            <span className="text-base-content/60 text-4xl lg:text-5xl">{profile.role}</span>
          </h1>
          <p className="py-4 text-lg text-base-content/70 max-w-lg mx-auto lg:mx-0">
            {profile.bio}
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href={profile.cvUrl} download className="btn btn-primary gap-2 shadow-lg hover:shadow-primary/50 transition-all">
              <Download size={18} /> Descargar CV
            </a>
            <div className="flex gap-2">
              {profile.socials.map((social, idx) => (
                <a key={idx} href={social.url} target="_blank" rel="noreferrer" className="btn btn-square btn-ghost border border-base-content/10">
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Foto (Derecha) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center order-1 lg:order-2"
        >
          <div className="relative w-64 h-64 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <img 
              src={profile.photo} 
              alt={profile.name} 
              className="relative w-full h-full object-cover rounded-full border-4 border-base-100 shadow-2xl mask mask-hexagon"
            />
          </div>
        </motion.div>
      </div>

      <a href="#projects" className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <ChevronDown size={32} />
      </a>
    </section>
  );
};
export default HeroSection;