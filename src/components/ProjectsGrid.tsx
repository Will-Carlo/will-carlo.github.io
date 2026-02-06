import { projects, type Project } from "../data";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

// Función para generar colores estilo Notion (Pastel + Texto fuerte)
const getTagColor = (tag: string) => {
  const colors = [
    "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
    "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
    "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
    "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
    "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300",
  ];
  
  // Hash simple para que el mismo tag siempre tenga el mismo color
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    hash = tag.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  const index = Math.abs(hash % colors.length);
  return colors[index];
};

const ProjectCard = ({ project, index }: ProjectCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full"
  >
    <figure className="relative h-56 overflow-hidden">
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10 backdrop-blur-[2px]">
        <a href={project.link} className="btn btn-primary gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          Ver Detalles <ExternalLink size={16}/>
        </a>
      </div>
      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute top-3 right-3 badge badge-neutral shadow-md font-mono text-xs tracking-wider uppercase opacity-90">{project.type}</div>
    </figure>
    
    <div className="card-body p-6 flex flex-col h-full">
      {/* Título más grande y llamativo */}
      <h2 className="card-title text-2xl font-bold text-base-content mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h2>
      
      <p className="text-base-content/70 flex-grow mb-4 leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-auto pt-4 ">
        {project.tags.map((tag, i) => (
          <span 
            key={i} 
            className={`px-2.5 py-1 rounded-md text-xs font-medium border border-transparent ${getTagColor(tag)}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const ProjectsGrid = () => {
  return (
    <section id="projects" className="py-10">
      <div>
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-4xl font-bold">Proyectos Destacados</h2>
          <p className="max-w-2xl mx-auto text-base-content/60">
            Sistemas empresariales, SaaS y soluciones que marcan la diferencia.
          </p>
        </div>

        {/* Grid de 2 columnas como pediste */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectsGrid;