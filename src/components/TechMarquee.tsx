import { technologies, type TechItem } from "../data";
import { motion } from "framer-motion";

interface TechRowProps {
  items: TechItem[];
  reverse?: boolean;
}

const TechRow = ({ items, reverse = false }: TechRowProps) => (
  <div className="flex overflow-hidden py-4 group mask-gradient-linear">
    <motion.div
      className="flex gap-8 px-4"
      animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
      transition={{ ease: "linear", duration: 30, repeat: Infinity }}
    >
      {[...items, ...items, ...items, ...items].map((tech, i) => (
        <div 
          key={i} 
          className="flex items-center gap-3 bg-base-100/80 px-5 py-3 rounded-xl border border-base-content/5 shadow-sm backdrop-blur-sm whitespace-nowrap hover:border-primary/30 hover:shadow-md transition-all cursor-default"
        >
          <span className="text-2xl filter drop-shadow-sm">{tech.logo}</span>
          <span className="font-bold text-sm text-base-content/80 tracking-wide">{tech.name}</span>
        </div>
      ))}
    </motion.div>
  </div>
);

const TechSection = ({ title, items, reverse = false }: { title: string, items: TechItem[], reverse?: boolean }) => (
  <div className="space-y-2">
    <h3 className="text-sm font-bold text-center uppercase tracking-widest text-base-content/40 mb-2">{title}</h3>
    <TechRow items={items} reverse={reverse} />
  </div>
);

const TechMarquee = () => {
  return (
    <section id="tech" className="py-10 relative">
      <div className="mb-16 text-center space-y-2">
        <h2 className="text-4xl font-bold">Stack Tecnológico</h2>
        <p className="text-base-content/60">Mi caja de herramientas para construir soluciones robustas</p>
      </div>
      
      <div className="flex flex-col gap-12">
        <TechSection title="Backend & Arquitectura" items={technologies[0]} />
        <TechSection title="Frontend & UI" items={technologies[1]} reverse />
        <TechSection title="Herramientas & DevOps" items={technologies[2]} />
      </div>
    </section>
  );
};
export default TechMarquee;