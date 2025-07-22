import { motion } from 'framer-motion';
import {
    FiUser,
    FiMapPin,
    FiMail,
    FiPhone,
    FiBook,
    FiAward,
    FiGlobe,
} from 'react-icons/fi';

const About = () => {
    return (
        <section className='py-20 bg-[#161616]' id='about'>
            <div className='container mx-auto px-4 md:px-6'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className='text-3xl font-bold mb-2'>Sobre Mí</h2>
                    <div className='w-20 h-1 bg-primary mb-8'></div>

                    <div className='grid md:grid-cols-2 gap-12'>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className='relative'
                        >
                            <div className='mb-6 relative max-w-xs mx-auto md:mx-0'>
                                <div className='absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-primary'></div>
                                <img
                                    src='/images/foto.png'
                                    alt='Miguel Vega Molina'
                                    className='w-full rounded-lg shadow-lg'
                                />
                                <div className='absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-primary'></div>
                            </div>
                            <p className='text-lg mb-6 text-gray-300'>
                                Soy un Ingeniero informático en Sistemas de
                                Información con experiencia en desarrollo de
                                aplicaciones web y un enfoque particular en
                                tecnologías como Laravel, Node.js, Django, WSO2
                                y Elastic Search.
                            </p>
                            <p className='text-lg mb-6 text-gray-300'>
                                Mi objetivo profesional está enfocado en crear
                                soluciones escalables, optimizar procesos
                                críticos y garantizar la alta disponibilidad de
                                servicios esenciales para el negocio.
                            </p>
                            <p className='text-lg text-gray-300'>
                                Me caracterizo por ser proactivo, con alta
                                capacidad de adaptación y orientado al trabajo
                                en entornos ágiles. Estoy constantemente
                                motivado por seguir creciendo profesionalmente
                                en proyectos de innovación tecnológica que
                                supongan nuevos retos.
                            </p>

                            <motion.div
                                className='mt-8 inline-block'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <a
                                    href='#projects'
                                    className='text-primary border-b border-primary pb-1 hover:text-primary-light transition-colors'
                                >
                                    Explora mis proyectos →
                                </a>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className='bg-[#242424] shadow-xl rounded-lg p-8 border border-gray-800'
                        >
                            <h3 className='text-xl font-medium mb-6 text-primary'>
                                Detalles personales
                            </h3>

                            <div className='space-y-5'>
                                <motion.div
                                    className='flex items-center gap-3'
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    <div className='bg-[#2d2d2d] p-2 rounded-full'>
                                        <FiUser className='text-primary' />
                                    </div>
                                    <div>
                                        <p className='text-sm text-gray-400'>
                                            Nombre completo
                                        </p>
                                        <p className='font-medium'>
                                            Miguel Vega Molina
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className='flex items-center gap-3'
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    <div className='bg-[#2d2d2d] p-2 rounded-full'>
                                        <FiMapPin className='text-primary' />
                                    </div>
                                    <div>
                                        <p className='text-sm text-gray-400'>
                                            Ubicación
                                        </p>
                                        <p className='font-medium'>
                                            Córdoba, España
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className='flex items-center gap-3'
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                >
                                    <div className='bg-[#2d2d2d] p-2 rounded-full'>
                                        <FiMail className='text-primary' />
                                    </div>
                                    <div>
                                        <p className='text-sm text-gray-400'>
                                            Email
                                        </p>
                                        <a
                                            href='mailto:miguelvegamolina2404@gmail.com'
                                            className='font-medium hover:text-primary transition-colors'
                                        >
                                            miguelvegamolina2404@gmail.com
                                        </a>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className='flex items-center gap-3'
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.7 }}
                                >
                                    <div className='bg-[#2d2d2d] p-2 rounded-full'>
                                        <FiPhone className='text-primary' />
                                    </div>
                                    <div>
                                        <p className='text-sm text-gray-400'>
                                            Teléfono
                                        </p>
                                        <a
                                            href='tel:+34678867870'
                                            className='font-medium hover:text-primary transition-colors'
                                        >
                                            +34 678 86 78 70
                                        </a>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className='flex items-center gap-3'
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                >
                                    <div className='bg-[#2d2d2d] p-2 rounded-full'>
                                        <FiBook className='text-primary' />
                                    </div>
                                    <div>
                                        <p className='text-sm text-gray-400'>
                                            Educación
                                        </p>
                                        <p className='font-medium'>
                                            Universidad Pablo de Olavide,
                                            Sevilla
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className='flex items-center gap-3'
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.9 }}
                                >
                                    <div className='bg-[#2d2d2d] p-2 rounded-full'>
                                        <FiAward className='text-primary' />
                                    </div>
                                    <div>
                                        <p className='text-sm text-gray-400'>
                                            Título
                                        </p>
                                        <p className='font-medium'>
                                            Ingeniero Informático en Sistemas de
                                            Información
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className='flex items-center gap-3'
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 1.0 }}
                                >
                                    <div className='bg-[#2d2d2d] p-2 rounded-full'>
                                        <FiGlobe className='text-primary' />
                                    </div>
                                    <div>
                                        <p className='text-sm text-gray-400'>
                                            Idiomas
                                        </p>
                                        <p className='font-medium'>
                                            Español (Nativo), Inglés
                                            (Intermedio)
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
