import { projects, Project } from "../data";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-content/5 overflow-hidden group"
  >
    <figure className="relative h-48 overflow-hidden">
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
        <a href={project.link} className="btn btn-primary btn-sm gap-2">Ver Detalles</a>
      </div>
      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute top-2 right-2 badge badge-secondary shadow-sm">{project.type}</div>
    </figure>
    <div className="card-body">
      <h2 className="card-title text-primary">
        {project.title}
      </h2>
      <p className="text-sm text-base-content/70 line-clamp-3">{project.description}</p>
      
      <div className="divider my-2"></div>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag, i) => (
          <div key={i} className="badge badge-outline badge-sm text-xs">{tag}</div>
        ))}
      </div>
    </div>
  </motion.div>
);

const ProjectsGrid = () => {
  return (
    <section id="projects" className="py-20 bg-base-200/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Proyectos Destacados</h2>
          <p className="max-w-2xl mx-auto text-base-content/60">
            Una selección de sistemas empresariales, plataformas SaaS y automatizaciones que he desarrollado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectsGrid;