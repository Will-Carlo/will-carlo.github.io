import { technologies, TechItem } from "../data";
import { motion } from "framer-motion";

interface TechRowProps {
  items: TechItem[];
  reverse?: boolean; // El signo ? significa que es opcional
}

const TechRow = ({ items, reverse = false }: TechRowProps) => (
  <div className="flex overflow-hidden py-4 group">
    <motion.div
      className="flex gap-8 px-4"
      animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
      transition={{ ease: "linear", duration: 25, repeat: Infinity }}
    >
      {[...items, ...items, ...items].map((tech, i) => (
        <div key={i} className="flex items-center gap-2 bg-base-200/50 px-6 py-3 rounded-xl border border-base-content/5 backdrop-blur-sm whitespace-nowrap hover:border-primary/50 transition-colors cursor-default">
          <span className="text-2xl">{tech.logo}</span>
          <span className="font-bold text-base-content/80">{tech.name}</span>
        </div>
      ))}
    </motion.div>
  </div>
);

const TechMarquee = () => {
  return (
    <section id="tech" className="py-24 relative">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="text-4xl font-bold mb-4">Stack Tecnológico</h2>
        <p className="text-base-content/60">Herramientas que domino para construir soluciones robustas</p>
      </div>
      
      <div className="flex flex-col gap-6 mask-gradient-linear">
        <TechRow items={technologies[0]} />
        <TechRow items={technologies[1]} reverse />
        <TechRow items={technologies[2]} />
      </div>
    </section>
  );
};
export default TechMarquee;