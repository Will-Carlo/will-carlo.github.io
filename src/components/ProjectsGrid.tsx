import { projects, type Project } from "../data";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

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
  
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    hash = tag.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  const index = Math.abs(hash % colors.length);
  return colors[index];
};

const ProjectCard = ({ project, index }: ProjectCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
  >
    {/* RESPONSIVE: h-52 para móvil (ahorra scroll) / h-64 para desktop (más impacto)
    */}
    <figure className="relative h-52 md:h-64 w-full overflow-hidden">
      
      {/* Overlay: En móvil, al tocar la imagen, se activará el hover visualmente */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 backdrop-blur-sm">
        <a 
          href={project.link} 
          className="btn btn-circle btn-lg btn-primary scale-0 group-hover:scale-100 transition-transform duration-300 shadow-xl"
          aria-label={`Ver proyecto ${project.title}`}
        >
          <ArrowUpRight size={32} />
        </a>
      </div>

      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
      />
      
      {/* Badge: Tamaño de texto ajustado para móvil */}
      <div className="absolute top-3 right-3 md:top-4 md:right-4 badge badge-neutral/90 backdrop-blur-md shadow-lg font-bold text-[10px] md:text-xs uppercase tracking-wide border-none px-2 py-2 md:px-3 md:py-3">
        {project.type}
      </div>
    </figure>
    
    {/* RESPONSIVE: p-5 en móvil (más espacio para contenido) / p-6 en desktop
    */}
    <div className="card-body p-5 md:p-6 gap-3 md:gap-4">
      
      <div className="space-y-1 md:space-y-2">
        {/* Enlace en el título para mejor UX en móvil si no le atinan a la imagen */}
        <a href={project.link} className="hover:underline decoration-primary">
            <h2 className="card-title text-xl md:text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
            {project.title}
            </h2>
        </a>
        
        <p className="text-base-content/70 leading-relaxed text-sm">
          {project.description}
        </p>
      </div>
      
      <div className="h-px w-full bg-base-content/5 my-1"></div>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, i) => (
          <span 
            key={i} 
            className={`px-2 py-1 md:px-3 md:py-1 rounded-md text-[10px] md:text-xs font-bold tracking-wide border border-transparent/5 shadow-sm ${getTagColor(tag)}`}
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
    <section id="projects" className="py-8 md:py-10">
      <div>
        <div className="mb-8 md:mb-12 space-y-2 text-center md:text-left">
          {/* Título adaptable: 3xl en móvil, 4xl en desktop */}
          <h2 className="text-3xl md:text-4xl font-bold">Proyectos Destacados</h2>
          <p className="text-base-content/60 max-w-xl mx-auto md:mx-0 text-sm md:text-base">
             Soluciones que combinan arquitectura robusta con interfaces modernas.
          </p>
        </div>

        {/* Grid adaptable: gap-6 en móvil, gap-10 en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectsGrid;