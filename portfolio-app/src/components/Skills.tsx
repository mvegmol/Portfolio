import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiDatabase, 
  FiServer, 
  FiLayers,
  FiGitBranch,
  FiMonitor
} from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      name: 'Frontend',
      icon: <FiMonitor className="text-3xl text-blue-600" />,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'TailwindCSS', 'Bootstrap']
    },
    {
      name: 'Backend',
      icon: <FiCode className="text-3xl text-blue-600" />,
      skills: ['Laravel', 'Django', 'Node.js', 'PHP', 'Python']
    },
    {
      name: 'Bases de datos',
      icon: <FiDatabase className="text-3xl text-blue-600" />,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite']
    },
    {
      name: 'Infraestructura',
      icon: <FiServer className="text-3xl text-blue-600" />,
      skills: ['Docker', 'WSO2', 'Elastic Search (ELK)', 'AWS', 'KeyCloak']
    },
    {
      name: 'Control de versiones',
      icon: <FiGitBranch className="text-3xl text-blue-600" />,
      skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket']
    },
    {
      name: 'Metodologías',
      icon: <FiLayers className="text-3xl text-blue-600" />,
      skills: ['Scrum', 'Agile', 'Kanban', 'CI/CD']
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="skills">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">Habilidades</h2>
          <div className="w-20 h-1 bg-blue-600 mb-12"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  {category.icon}
                  <h3 className="text-xl font-bold">{category.name}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between">
                        <span>{skill}</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-blue-600 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${85 - (idx * 5)}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 + (idx * 0.1) }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
