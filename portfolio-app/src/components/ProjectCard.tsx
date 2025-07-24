import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiExternalLink,
    FiGithub,
    FiClock,
    FiChevronDown,
    FiChevronUp,
    FiChevronLeft,
    FiChevronRight,
    FiX,
} from 'react-icons/fi';

interface ProjectProps {
    project: {
        title: string;
        description: string;
        image: string;
        images?: string[];
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
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showImageModal, setShowImageModal] = useState(false);
    const [showDetailsModal, setShowDetailsModal] = useState(false);

    const images = project.images || [project.image];
    const hasMultipleImages = images.length > 1;

    const nextImage = () => {
        setCurrentImageIndex(prev => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex(
            prev => (prev - 1 + images.length) % images.length
        );
    };

    const openImageModal = () => {
        setShowImageModal(true);
    };

    const closeImageModal = () => {
        setShowImageModal(false);
    };

    const openDetailsModal = () => {
        setShowDetailsModal(true);
    };

    const closeDetailsModal = () => {
        setShowDetailsModal(false);
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='bg-[#242424] rounded-lg overflow-hidden shadow-lg border border-gray-800'
            >
                <div className='relative h-56 w-full group'>
                    <div className='w-full h-full bg-gradient-to-br from-[#2a2a2a] to-[#333333] flex items-center justify-center'>
                        {images[currentImageIndex] ? (
                            <div className='relative w-full h-full'>
                                <Image
                                    src={images[currentImageIndex]}
                                    alt={`${project.title} - Imagen ${
                                        currentImageIndex + 1
                                    }`}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className='transition-transform duration-300 hover:scale-105 cursor-pointer'
                                    onClick={openImageModal}
                                />

                                {/* Carrusel de navegación */}
                                {hasMultipleImages && (
                                    <>
                                        <button
                                            onClick={e => {
                                                e.stopPropagation();
                                                prevImage();
                                            }}
                                            className='absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 z-10'
                                        >
                                            <FiChevronLeft />
                                        </button>
                                        <button
                                            onClick={e => {
                                                e.stopPropagation();
                                                nextImage();
                                            }}
                                            className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 z-10'
                                        >
                                            <FiChevronRight />
                                        </button>

                                        {/* Indicadores de puntos */}
                                        <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10'>
                                            {images.map((_, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={e => {
                                                        e.stopPropagation();
                                                        setCurrentImageIndex(
                                                            idx
                                                        );
                                                    }}
                                                    className={`w-2 h-2 rounded-full transition-colors ${
                                                        idx ===
                                                        currentImageIndex
                                                            ? 'bg-primary'
                                                            : 'bg-white/50 hover:bg-white/70'
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}

                                {/* Indicador de clic para ver completa */}
                                <div className='absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity'>
                                    Clic para ver completa
                                </div>
                            </div>
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
                        onClick={openDetailsModal}
                        className='flex items-center gap-2 text-primary hover:text-primary-light transition-colors w-full justify-center bg-[#333333] py-3 rounded-lg hover:bg-[#404040]'
                    >
                        Ver detalles completos <FiExternalLink />
                    </button>
                </div>
            </motion.div>

            {/* Modal para ver detalles completos del proyecto */}
            <AnimatePresence>
                {showDetailsModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className='fixed inset-0 z-[9998] flex items-center justify-center bg-black/90 p-4'
                        onClick={closeDetailsModal}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className='relative max-w-4xl max-h-[90vh] w-full bg-[#242424] rounded-lg overflow-hidden'
                            onClick={e => e.stopPropagation()}
                        >
                            {/* Botón cerrar */}
                            <button
                                onClick={closeDetailsModal}
                                className='absolute top-4 right-4 z-10 bg-black/70 text-white p-3 rounded-full hover:bg-black/90 transition-colors shadow-lg'
                            >
                                <FiX size={20} />
                            </button>

                            {/* Contenido del modal */}
                            <div className='p-6 overflow-y-auto max-h-[90vh]'>
                                {/* Header del proyecto */}
                                <div className='mb-6'>
                                    <h2 className='text-3xl font-bold mb-2'>
                                        {project.title}
                                    </h2>
                                    <div className='flex items-center gap-4 mb-4'>
                                        <div className='flex items-center gap-2 text-primary'>
                                            <FiClock />
                                            <span>{project.period}</span>
                                        </div>
                                        <div className='flex gap-3'>
                                            {project.githubUrl && (
                                                <a
                                                    href={project.githubUrl}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                    className='flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors'
                                                >
                                                    <FiGithub /> GitHub
                                                </a>
                                            )}
                                            {project.liveUrl && (
                                                <a
                                                    href={project.liveUrl}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                    className='flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors'
                                                >
                                                    <FiExternalLink /> Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <p className='text-gray-300 text-lg leading-relaxed'>
                                        {project.description}
                                    </p>
                                </div>

                                {/* Galería de imágenes */}
                                {images.length > 0 && (
                                    <div className='mb-6'>
                                        <h3 className='text-xl font-semibold mb-4'>
                                            Imagenes del proyecto
                                        </h3>
                                        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                                            {images.map((img, idx) => (
                                                <div
                                                    key={idx}
                                                    className='relative aspect-video bg-gray-700 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform'
                                                    onClick={() => {
                                                        setCurrentImageIndex(
                                                            idx
                                                        );
                                                        openImageModal();
                                                    }}
                                                >
                                                    <Image
                                                        src={img}
                                                        alt={`${
                                                            project.title
                                                        } - Captura ${idx + 1}`}
                                                        fill
                                                        style={{
                                                            objectFit: 'cover',
                                                        }}
                                                        className='rounded-lg'
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Tecnologías */}
                                <div className='mb-6'>
                                    <h3 className='text-xl font-semibold mb-4'>
                                        Tecnologías utilizadas
                                    </h3>
                                    <div className='flex flex-wrap gap-3'>
                                        {project.technologies.map(
                                            (tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className='bg-[#333333] text-primary-light px-4 py-2 rounded-full text-sm font-medium'
                                                >
                                                    {tech}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>

                                {/* Características */}
                                <div className='mb-6'>
                                    <h3 className='text-xl font-semibold mb-4'>
                                        Características principales
                                    </h3>
                                    <ul className='list-disc list-inside space-y-2 text-gray-300 ml-4'>
                                        {project.features.map(
                                            (feature, idx) => (
                                                <li
                                                    key={idx}
                                                    className='leading-relaxed marker:text-primary'
                                                >
                                                    {feature}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>

                                {/* Futuras implementaciones */}
                                {project.futureFeatures &&
                                    project.futureFeatures.length > 0 && (
                                        <div className='mb-6'>
                                            <h3 className='text-xl font-semibold mb-4'>
                                                Futuras implementaciones
                                            </h3>
                                            <ul className='list-disc list-inside space-y-2 text-gray-400 ml-4'>
                                                {project.futureFeatures.map(
                                                    (feature, idx) => (
                                                        <li
                                                            key={idx}
                                                            className='leading-relaxed marker:text-primary/60'
                                                        >
                                                            {feature}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Modal para ver imagen completa */}
            <AnimatePresence>
                {showImageModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className='fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4'
                        onClick={closeImageModal}
                        style={{ position: 'fixed' }}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className='relative max-w-4xl max-h-[90vh] w-full h-[80vh]'
                            onClick={e => e.stopPropagation()}
                        >
                            {/* Botón cerrar */}
                            <button
                                onClick={closeImageModal}
                                className='absolute top-4 right-4 z-10 bg-black/70 text-white p-3 rounded-full hover:bg-black/90 transition-colors shadow-lg'
                            >
                                <FiX size={20} />
                            </button>

                            {/* Imagen en modal */}
                            <div className='relative w-full h-full bg-black rounded-lg overflow-hidden'>
                                <Image
                                    src={images[currentImageIndex]}
                                    alt={`${project.title} - Imagen ${
                                        currentImageIndex + 1
                                    }`}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    className='rounded-lg'
                                    priority
                                />

                                {/* Navegación en modal */}
                                {hasMultipleImages && (
                                    <>
                                        <button
                                            onClick={e => {
                                                e.stopPropagation();
                                                prevImage();
                                            }}
                                            className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors'
                                        >
                                            <FiChevronLeft size={24} />
                                        </button>
                                        <button
                                            onClick={e => {
                                                e.stopPropagation();
                                                nextImage();
                                            }}
                                            className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors'
                                        >
                                            <FiChevronRight size={24} />
                                        </button>

                                        {/* Indicadores en modal */}
                                        <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3'>
                                            {images.map((_, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={e => {
                                                        e.stopPropagation();
                                                        setCurrentImageIndex(
                                                            idx
                                                        );
                                                    }}
                                                    className={`w-3 h-3 rounded-full transition-colors ${
                                                        idx ===
                                                        currentImageIndex
                                                            ? 'bg-primary'
                                                            : 'bg-white/50 hover:bg-white/70'
                                                    }`}
                                                />
                                            ))}
                                        </div>

                                        {/* Contador de imágenes */}
                                        <div className='absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm'>
                                            {currentImageIndex + 1} /{' '}
                                            {images.length}
                                        </div>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ProjectCard;
