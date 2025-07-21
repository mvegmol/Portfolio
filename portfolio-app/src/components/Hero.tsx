import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="pt-24 md:pt-32 min-h-screen flex items-center" id="hero">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Miguel Vega Molina
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-600 font-medium mb-6">
              Ingeniero en Sistemas de Información
            </h2>
            <p className="text-lg mb-8 max-w-lg">
              Desarrollador web enfocado en crear soluciones escalables, optimizar procesos y asegurar la alta disponibilidad 
              de servicios críticos. Proactivo, con alta capacidad de adaptación y orientado al trabajo en entornos ágiles.
            </p>
            
            <div className="flex flex-col gap-3 mb-8">
              <div className="flex items-center gap-3">
                <FiMail className="text-blue-600" />
                <a href="mailto:miguelvegamolina2404@gmail.com" className="hover:text-blue-600">
                  miguelvegamolina2404@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <FiPhone className="text-blue-600" />
                <a href="tel:+34678867870" className="hover:text-blue-600">
                  +34 678 86 78 70
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <FiMapPin className="text-blue-600" />
                <span>Córdoba, España</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-colors"
              >
                Contáctame
              </a>
              <div className="flex items-center gap-4">
                <a 
                  href="https://github.com/yourgithub" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl hover:text-blue-600 transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub />
                </a>
                <a 
                  href="https://linkedin.com/in/yourlinkedin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl hover:text-blue-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-full p-1">
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-blue-600 rounded-full p-1">
                <div className="aspect-square bg-white rounded-full overflow-hidden">
                  {/* Image will be added later */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-4xl font-bold text-blue-600">
                    MV
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-xl p-4 max-w-xs">
              <p className="font-medium text-blue-600">Ingeniero Informático</p>
              <p className="text-sm">NTT Data, Córdoba</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
