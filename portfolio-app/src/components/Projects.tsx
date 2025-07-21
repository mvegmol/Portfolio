import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'Vapexpress',
      description: 'Sistema de información especializado en la venta de vapers y productos relacionados. Optimiza la experiencia de compra en línea con gestión eficiente y segura para clientes y tiendas.',
      image: '/project-vapexpress.jpg',
      period: 'Abril 2024 - Septiembre 2024',
      technologies: ['Laravel 10', 'MySQL', 'JavaScript', 'Tailwind CSS', 'Fortify'],
      features: [
        'Gestión de usuarios, productos, categorías, carritos y pedidos',
        'Direcciones de envío y proveedores',
        'Listas de favoritos',
        'Interfaz moderna adaptable a múltiples dispositivos',
        'Automatización de procesos clave'
      ],
      futureFeatures: [
        'Panel administrativo con estadísticas en tiempo real',
        'Integración con pasarelas de pago (Stripe, PayPal)',
        'Sistema de notificaciones por email y SMS',
        'Módulo de reseñas y valoraciones',
        'Gestión de descuentos y cupones',
        'Integración con servicios de envío y seguimiento en tiempo real'
      ],
      githubUrl: 'https://github.com/yourusername/vapexpress',
      liveUrl: 'https://vapexpress-demo.example.com'
    }
    // You can add more projects here
  ];
  
  return (
    <section className="py-20" id="projects">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">Proyectos</h2>
          <div className="w-20 h-1 bg-blue-600 mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                project={project}
                index={index}
              />
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <p className="text-lg mb-6">¿Quieres ver más de mis proyectos?</p>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-colors"
            >
              <FiGithub /> Visita mi GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
