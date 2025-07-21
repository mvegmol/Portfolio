import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">Sobre Mí</h2>
          <div className="w-20 h-1 bg-blue-600 mb-8"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-4">
                Soy un Ingeniero informático en Sistemas de Información con experiencia en 
                desarrollo de aplicaciones web y un enfoque particular en tecnologías como 
                Laravel, Node.js, Django, WSO2 y Elastic Search.
              </p>
              <p className="text-lg mb-4">
                Mi objetivo profesional está enfocado en crear soluciones escalables, optimizar 
                procesos críticos y garantizar la alta disponibilidad de servicios esenciales 
                para el negocio.
              </p>
              <p className="text-lg">
                Me caracterizo por ser proactivo, con alta capacidad de adaptación y orientado 
                al trabajo en entornos ágiles. Estoy constantemente motivado por seguir creciendo 
                profesionalmente en proyectos de innovación tecnológica que supongan nuevos retos.
              </p>
            </div>
            
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-medium mb-4 text-blue-600">Detalles personales</h3>
              
              <div className="space-y-3">
                <div className="flex">
                  <span className="font-medium min-w-28">Nombre completo:</span>
                  <span>Miguel Vega Molina</span>
                </div>
                
                <div className="flex">
                  <span className="font-medium min-w-28">Ubicación:</span>
                  <span>Córdoba, España</span>
                </div>
                
                <div className="flex">
                  <span className="font-medium min-w-28">Email:</span>
                  <a href="mailto:miguelvegamolina2404@gmail.com" className="hover:text-blue-600 transition-colors">
                    miguelvegamolina2404@gmail.com
                  </a>
                </div>
                
                <div className="flex">
                  <span className="font-medium min-w-28">Teléfono:</span>
                  <a href="tel:+34678867870" className="hover:text-blue-600 transition-colors">
                    +34 678 86 78 70
                  </a>
                </div>
                
                <div className="flex">
                  <span className="font-medium min-w-28">Educación:</span>
                  <span>Universidad Pablo de Olavide, Sevilla</span>
                </div>
                
                <div className="flex">
                  <span className="font-medium min-w-28">Título:</span>
                  <span>Ingeniero Informático en Sistemas de Información</span>
                </div>
                
                <div className="flex">
                  <span className="font-medium min-w-28">Idiomas:</span>
                  <span>Español (Nativo), Inglés (Intermedio)</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
