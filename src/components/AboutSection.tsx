import { profile } from "../data";
import { User, Heart, Zap, Coffee } from "lucide-react";

const AboutSection = () => {
  const softSkills = [
    { icon: Zap, label: "Resolución de Problemas" },
    { icon: Heart, label: "Trabajo en Equipo" },
    { icon: Coffee, label: "Aprendizaje Continuo" },
    { icon: User, label: "Comunicación Efectiva" },
  ];

  return (
    <section id="about" className="py-10 scroll-mt-24">
      <div className="grid md:grid-cols-2 gap-12 items-center bg-base-200/50 p-8 md:p-12 rounded-3xl border border-base-content/5">
        
        {/* Columna Texto */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <span className="text-primary">/</span> Sobre Mí
          </h2>
          <p className="text-base-content/80 leading-relaxed text-lg">
            Soy un programador apasionado de 26 años. Mi viaje en el código comenzó en el backend, construyendo la lógica robusta que hace que las cosas funcionen, y poco a poco me he enamorado del frontend, buscando crear experiencias completas.
          </p>
          <p className="text-base-content/70">
            Más allá del código, valoro la arquitectura limpia y las soluciones que escalan. Cuando no estoy programando, probablemente estoy buscando la manera de optimizar algún proceso o aprendiendo una nueva tecnología.
          </p>
        </div>

        {/* Columna Visual / Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {softSkills.map((skill, index) => (
            <div key={index} className="flex items-center gap-3 p-4 bg-base-100 rounded-xl shadow-sm border border-base-content/5 hover:border-primary/20 transition-colors">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <skill.icon size={20} />
              </div>
              <span className="font-medium text-sm">{skill.label}</span>
            </div>
          ))}
          
          {/* Card decorativa de experiencia */}
          <div className="sm:col-span-2 mt-2 p-4 bg-gradient-to-r from-primary/10 to-transparent rounded-xl border border-primary/10 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider opacity-60">Experiencia</p>
              <p className="text-xl font-bold">+3 Años construyendo software</p>
            </div>
            <div className="text-4xl">🚀</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;