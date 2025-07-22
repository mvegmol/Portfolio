import { motion } from 'framer-motion';
import {
    FiGithub,
    FiLinkedin,
    FiMail,
    FiPhone,
    FiMapPin,
    FiDownload,
    FiArrowDown,
} from 'react-icons/fi';
import { SiLaravel, SiNodedotjs, SiDjango } from 'react-icons/si';

const Hero = () => {
    return (
        <section
            className='pt-24 md:pt-32 min-h-screen flex items-center relative overflow-hidden'
            id='hero'
            style={{
                background: 'linear-gradient(135deg, #121212 0%, #1e1e1e 100%)',
            }}
        >
            {/* Partículas de fondo */}
            <div className='absolute inset-0 opacity-10'>
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className='absolute rounded-full'
                        style={{
                            width: Math.random() * 10 + 5 + 'px',
                            height: Math.random() * 10 + 5 + 'px',
                            background: 'var(--primary-light)',
                            left: Math.random() * 100 + '%',
                            top: Math.random() * 100 + '%',
                            opacity: Math.random() * 0.5 + 0.3,
                            animation: `float ${
                                Math.random() * 8 + 4
                            }s ease-in-out infinite`,
                        }}
                    />
                ))}
            </div>

            <div className='container mx-auto px-4 md:px-6 z-10'>
                <div className='grid md:grid-cols-5 gap-12 items-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='md:col-span-3'
                    >
                        <div className='mb-6'>
                            <motion.h2
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className='text-primary font-medium mb-2'
                            >
                                Desarrollador Web
                            </motion.h2>
                            <motion.h1
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className='text-4xl md:text-6xl font-bold mb-4'
                            >
                                Miguel Vega Molina
                            </motion.h1>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '60px' }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className='h-1 bg-primary mb-6'
                            />
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className='text-lg mb-8 max-w-lg text-gray-300'
                        >
                            Ingeniero en Sistemas de Información especializado
                            en desarrollo web. Creo soluciones escalables,
                            optimizo procesos críticos y aseguro alta
                            disponibilidad de servicios para el negocio.
                            Proactivo y orientado al trabajo en entornos ágiles.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className='flex flex-wrap gap-4 mb-8'
                        >
                            <div className='flex items-center gap-2 bg-[#242424] px-3 py-2 rounded-full'>
                                <SiLaravel className='text-[#FF2D20]' />
                                <span className='text-sm'>Laravel</span>
                            </div>
                            <div className='flex items-center gap-2 bg-[#242424] px-3 py-2 rounded-full'>
                                <SiNodedotjs className='text-[#339933]' />
                                <span className='text-sm'>Node.js</span>
                            </div>
                            <div className='flex items-center gap-2 bg-[#242424] px-3 py-2 rounded-full'>
                                <SiDjango className='text-[#092E20]' />
                                <span className='text-sm'>Django</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                            className='flex flex-wrap gap-4 mt-6'
                        >
                            <a
                                href='#contact'
                                className='bg-primary hover:bg-primary-dark text-white py-3 px-8 rounded-md transition-all flex items-center gap-2 font-medium'
                            >
                                Contáctame
                                <FiArrowDown className='ml-1' />
                            </a>
                            <a
                                href='/cv.pdf'
                                className='border border-primary text-primary hover:bg-primary/10 py-3 px-8 rounded-md transition-all flex items-center gap-2 font-medium'
                                target='_blank'
                            >
                                Descargar CV
                                <FiDownload className='ml-1' />
                            </a>

                            <div className='flex items-center gap-6 ml-2'>
                                <a
                                    href='https://github.com/yourgithub'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-xl hover:text-primary transition-colors'
                                    aria-label='GitHub'
                                >
                                    <FiGithub />
                                </a>
                                <a
                                    href='https://linkedin.com/in/yourlinkedin'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-xl hover:text-primary transition-colors'
                                    aria-label='LinkedIn'
                                >
                                    <FiLinkedin />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className='relative hidden md:block md:col-span-2'
                    >
                        <div className='absolute w-full h-full bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl -z-10'></div>
                        <div className='aspect-square bg-gradient-to-br from-[#2a2a2a] to-[#323232] rounded-full p-1'>
                            <div className='aspect-square bg-gradient-to-br from-primary/30 to-primary rounded-full p-1'>
                                <div className='aspect-square bg-[#1a1a1a] rounded-full overflow-hidden flex items-center justify-center'>
                                    <div className='w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#242424] flex items-center justify-center text-6xl font-bold text-primary'>
                                        MV
                                    </div>
                                </div>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className='absolute -bottom-4 -right-4 bg-[#242424] rounded-lg shadow-xl p-4 max-w-xs'
                        >
                            <p className='font-medium text-primary'>
                                Ingeniero Informático
                            </p>
                            <p className='text-sm text-gray-300'>
                                NTT Data, Córdoba
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll down indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className='absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center'
            >
                <span className='text-sm mb-2 text-gray-400'>
                    Desplaza hacia abajo
                </span>
                <FiArrowDown className='animate-bounce text-primary' />
            </motion.div>
        </section>
    );
};

export default Hero;
