import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    FiExternalLink,
    FiGithub,
    FiClock,
    FiChevronDown,
    FiChevronUp,
} from 'react-icons/fi';

interface ProjectProps {
    project: {
        title: string;
        description: string;
        image: string;
        period: string;
        technologies: string[];
        features: string[];
        futureFeatures?: string[];
        githubUrl?: string;
        liveUrl?: string;
    };
    index: number;
}

const ProjectCard = ({ project, index }: ProjectProps) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='bg-[#242424] rounded-lg overflow-hidden shadow-lg border border-gray-800'
        >
            <div className='relative h-56 w-full'>
                <div className='w-full h-full bg-gradient-to-br from-[#2a2a2a] to-[#333333] flex items-center justify-center'>
                    {project.image ? (
                        <Image
                            src={project.image}
                            alt={project.title}
                            layout='fill'
                            objectFit='cover'
                            className='transition-transform duration-300 hover:scale-105'
                        />
                    ) : (
                        <span className='text-2xl font-bold text-primary'>
                            {project.title}
                        </span>
                    )}
                </div>
            </div>

            <div className='p-6'>
                <div className='flex items-center justify-between mb-3'>
                    <h3 className='text-xl font-bold'>{project.title}</h3>
                    <div className='flex items-center gap-2'>
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-gray-400 hover:text-primary transition-colors'
                                aria-label='GitHub'
                            >
                                <FiGithub />
                            </a>
                        )}

                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-gray-400 hover:text-primary transition-colors'
                                aria-label='Live Demo'
                            >
                                <FiExternalLink />
                            </a>
                        )}
                    </div>
                </div>

                <div className='flex items-center gap-2 text-primary text-sm mb-4'>
                    <FiClock />
                    <span>{project.period}</span>
                </div>

                <p className='mb-4 text-gray-300'>{project.description}</p>

                <div className='flex flex-wrap gap-2 mb-4'>
                    {project.technologies.map((tech, idx) => (
                        <span
                            key={idx}
                            className='text-xs bg-[#333333] text-primary-light px-2 py-1 rounded-full'
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <button
                    onClick={() => setShowDetails(!showDetails)}
                    className='flex items-center gap-2 text-primary hover:text-primary-light transition-colors w-full justify-center'
                >
                    {showDetails ? (
                        <>
                            Ocultar detalles <FiChevronUp />
                        </>
                    ) : (
                        <>
                            Ver detalles <FiChevronDown />
                        </>
                    )}
                </button>

                {showDetails && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className='mt-4 pt-4 border-t border-gray-700'
                    >
                        <h4 className='font-medium mb-2 text-gray-200'>
                            Características:
                        </h4>
                        <ul className='list-disc pl-5 mb-4 space-y-1 text-gray-300'>
                            {project.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>

                        {project.futureFeatures &&
                            project.futureFeatures.length > 0 && (
                                <>
                                    <h4 className='font-medium mb-2 text-gray-200'>
                                        Futuras implementaciones:
                                    </h4>
                                    <ul className='list-disc pl-5 space-y-1 text-gray-300'>
                                        {project.futureFeatures.map(
                                            (feature, idx) => (
                                                <li key={idx}>{feature}</li>
                                            )
                                        )}
                                    </ul>
                                </>
                            )}
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
