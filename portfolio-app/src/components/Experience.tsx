import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiAward } from 'react-icons/fi';
import Image from 'next/image';

const Experience = () => {
    const experiences = [
        {
            title: 'Ingeniero Junior',
            company: 'NTT Data — Agencia Digital de Andalucía',
            location: 'Córdoba',
            period: 'Febrero 2026 - Presente',
            description: [
                'Integración de servicios WSO2 con sistemas de la Junta de Andalucía y Ministerios, garantizando la interoperabilidad entre plataformas.',
                'Análisis funcional y técnico de servicios web (REST/SOAP) para su correcta integración en el ecosistema de la Agencia Digital.',
                'Configuración y despliegue de APIs, proxies y secuencias en WSO2 API Manager y Micro Integrator.',
                'Colaboración con equipos multidisciplinares para la definición de requisitos y validación de integraciones.',
                'Documentación técnica de integraciones y procesos siguiendo los estándares de calidad de la organización.',
            ],
        },
        {
            title: 'Ingeniero Junior',
            company: 'NTT Data',
            location: 'Córdoba',
            period: 'Enero 2025 - Enero 2026',
            description: [
                'Diseño y desarrollo de aplicaciones web en Django para proyectos de la Junta de Andalucía.',
                'Automatización de procesos internos, incluyendo sistemas de alertas para monitorización de servicios críticos y detección de caídas.',
                'Integración y mantenimiento de servicios basados en WSO2, incluyendo la creación de nuevos sistemas de información.',
                'Optimización y soporte en entornos de integración continua con tecnologías como Elastic Search para el monitoreo y análisis de servicios.',
                'Elaboración y gestión de documentación técnica de sistemas, integraciones y procesos de automatización siguiendo los estándares de calidad de la organización.',
            ],
        },
        {
            title: 'Becario',
            company: 'NTT Data',
            location: 'Dos Hermanas, Sevilla',
            period: 'Abril 2024 - Octubre 2024',
            description: [
                'Integración de servicios backend utilizando WSO2, incluyendo APIs RESTful, servicios SOAP y Data Services.',
                'Automatizaciones de procesos internos con Django (Jira Internos, horas de cliente)',
                'Colaboré en la implementación de alertas y monitoreo con Elastic Search.',
            ],
        },
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
            },
        }),
    };

    return (
        <section className='py-20 bg-[#1a1a1a]' id='experience'>
            <div className='container mx-auto px-4 md:px-6'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className='text-3xl font-bold mb-2'>Experiencia</h2>
                    <div className='w-20 h-1 bg-primary mb-12'></div>

                    <div className='relative'>
                        {/* Timeline line */}
                        <div className='absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-[#333333]'></div>

                        <div className='space-y-12'>
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    custom={index}
                                    variants={cardVariants}
                                    initial='hidden'
                                    whileInView='visible'
                                    viewport={{ once: true, margin: '-100px' }}
                                    className={`relative flex flex-col md:flex-row md:items-center ${
                                        index % 2 === 0
                                            ? 'md:flex-row-reverse'
                                            : ''
                                    }`}
                                >
                                    {/* Timeline dot */}
                                    <div className='absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-[#242424]'></div>

                                    {/* Date for mobile view */}
                                    <div className='md:hidden flex items-center text-primary mb-2 pl-8'>
                                        <FiCalendar className='mr-2' />
                                        <span>{exp.period}</span>
                                    </div>

                                    {/* Content */}
                                    <div
                                        className={`w-full md:w-1/2 pl-8 md:pl-0 ${
                                            index % 2 === 0
                                                ? 'md:pl-12'
                                                : 'md:pr-12 md:text-right'
                                        }`}
                                    >
                                        <div className='bg-[#242424] rounded-lg shadow-lg p-6 border border-gray-800'>
                                            <div className='flex items-center mb-2'>
                                                <FiBriefcase className='text-primary mr-2' />
                                                <h3 className='text-xl font-bold'>
                                                    {exp.title}
                                                </h3>
                                            </div>

                                            <div className='mb-4'>
                                                <p className='text-lg font-medium'>
                                                    {exp.company},{' '}
                                                    {exp.location}
                                                </p>
                                                <p className='hidden md:block text-primary'>
                                                    {exp.period}
                                                </p>
                                            </div>

                                            <ul
                                                className={`space-y-2 ${
                                                    index % 2 === 0
                                                        ? ''
                                                        : 'md:list-inside'
                                                }`}
                                            >
                                                {exp.description.map(
                                                    (item, idx) => (
                                                        <li
                                                            key={idx}
                                                            className='text-gray-300'
                                                        >
                                                            • {item}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Empty div for timeline balance */}
                                    <div className='hidden md:block w-full md:w-1/2'></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className='mt-16'
                    >
                        <h3 className='text-2xl font-bold mb-6'>Educación</h3>
                        <div className='bg-[#242424] rounded-lg shadow-lg p-6 border border-gray-800'>
                            <h4 className='text-xl font-bold mb-2'>
                                Universidad Pablo de Olavide, Sevilla
                            </h4>
                            <p className='text-primary mb-2'>
                                Septiembre 2020 - Septiembre 2024
                            </p>
                            <p className='text-lg text-gray-300'>
                                Ingeniero Informático en Sistemas de Información
                            </p>
                        </div>

                        {/* Certifications */}
                        <h3 className='text-2xl font-bold mt-12 mb-6'>Certificaciones</h3>
                        <div className='flex flex-col sm:flex-row gap-6'>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{ duration: 0.4 }}
                                className='group relative bg-gradient-to-br from-[#242424] to-[#1a1a1a] rounded-xl p-1 w-full sm:max-w-md'
                            >
                                <div className='absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                                <div className='relative bg-[#1e1e1e] rounded-[10px] overflow-hidden'>
                                    <a
                                        href='/images/certificacion/certificacion.png'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='block relative w-full h-64 bg-[#2a2a2a] cursor-zoom-in'
                                    >
                                        <Image
                                            src='/images/certificacion/certificacion.png'
                                            alt='WSO2 Certified Micro Integrator Developer - V4'
                                            fill
                                            className='object-contain p-4 transition-transform duration-300 group-hover:scale-105'
                                        />
                                    </a>
                                    <div className='px-5 py-4'>
                                        <div className='flex items-start gap-3'>
                                            <FiAward className='text-primary mt-1 flex-shrink-0' size={22} />
                                            <div>
                                                <h4 className='font-bold text-white leading-tight'>
                                                    WSO2 Certified Micro Integrator Developer - V4
                                                </h4>
                                                <p className='text-gray-400 text-sm mt-1'>WSO2</p>
                                                <p className='text-gray-500 text-xs mt-1 font-mono'>
                                                    Certification ID: CID-05301118
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
