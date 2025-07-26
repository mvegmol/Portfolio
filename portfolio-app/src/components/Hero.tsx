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
                {/* Partículas pre-definidas para evitar errores de hidratación */}
                <div
                    className='absolute rounded-full'
                    style={{
                        width: '7.85px',
                        height: '10.07px',
                        background: 'var(--primary-light)',
                        left: '81.61%',
                        top: '12.46%',
                        opacity: 0.34,
                        animation: 'float 7.75s ease-in-out infinite',
                    }}
                />
                <div
                    className='absolute rounded-full'
                    style={{
                        width: '9.06px',
                        height: '5.57px',
                        background: 'var(--primary-light)',
                        left: '24.11%',
                        top: '67.34%',
                        opacity: 0.46,
                        animation: 'float 4.71s ease-in-out infinite',
                    }}
                />
                <div
                    className='absolute rounded-full'
                    style={{
                        width: '8.92px',
                        height: '5.62px',
                        background: 'var(--primary-light)',
                        left: '19.01%',
                        top: '34.85%',
                        opacity: 0.58,
                        animation: 'float 8.55s ease-in-out infinite',
                    }}
                />
                <div
                    className='absolute rounded-full'
                    style={{
                        width: '12.42px',
                        height: '12.57px',
                        background: 'var(--primary-light)',
                        left: '45.99%',
                        top: '33.07%',
                        opacity: 0.64,
                        animation: 'float 9.75s ease-in-out infinite',
                    }}
                />
                <div
                    className='absolute rounded-full'
                    style={{
                        width: '9.43px',
                        height: '8.18px',
                        background: 'var(--primary-light)',
                        left: '83.55%',
                        top: '97.55%',
                        opacity: 0.69,
                        animation: 'float 7.49s ease-in-out infinite',
                    }}
                />
                <div
                    className='absolute rounded-full'
                    style={{
                        width: '7.55px',
                        height: '13.51px',
                        background: 'var(--primary-light)',
                        left: '96.54%',
                        top: '21.93%',
                        opacity: 0.37,
                        animation: 'float 7.86s ease-in-out infinite',
                    }}
                />
                <div
                    className='absolute rounded-full'
                    style={{
                        width: '7.96px',
                        height: '6.11px',
                        background: 'var(--primary-light)',
                        left: '92.73%',
                        top: '68.77%',
                        opacity: 0.8,
                        animation: 'float 5.88s ease-in-out infinite',
                    }}
                />
                <div
                    className='absolute rounded-full'
                    style={{
                        width: '14.82px',
                        height: '8.43px',
                        background: 'var(--primary-light)',
                        left: '26.25%',
                        top: '91.88%',
                        opacity: 0.51,
                        animation: 'float 5.94s ease-in-out infinite',
                    }}
                />
                <div
                    className='absolute rounded-full'
                    style={{
                        width: '8.73px',
                        height: '10.43px',
                        background: 'var(--primary-light)',
                        left: '30.48%',
                        top: '99.44%',
                        opacity: 0.63,
                        animation: 'float 7.47s ease-in-out infinite',
                    }}
                />
                <div
                    className='absolute rounded-full'
                    style={{
                        width: '5.64px',
                        height: '10.79px',
                        background: 'var(--primary-light)',
                        left: '41.31%',
                        top: '14.09%',
                        opacity: 0.34,
                        animation: 'float 6.31s ease-in-out infinite',
                    }}
                />
                <div
                    className='absolute rounded-full'
                    style={{
                        width: '14.70px',
                        height: '9.16px',
                        background: 'var(--primary-light)',
                        left: '69.30%',
                        top: '46.53%',
                        opacity: 0.41,
                        animation: 'float 7.39s ease-in-out infinite',
                    }}
                />
                <div
                    className='absolute rounded-full'
                    style={{
                        width: '8.41px',
                        height: '10.79px',
                        background: 'var(--primary-light)',
                        left: '56.20%',
                        top: '57.82%',
                        opacity: 0.73,
                        animation: 'float 5.40s ease-in-out infinite',
                    }}
                />
                <div
                    className='absolute rounded-full'
                    style={{
                        width: '11.33px',
                        height: '10.51px',
                        background: 'var(--primary-light)',
                        left: '54.77%',
                        top: '34.94%',
                        opacity: 0.57,
                        animation: 'float 8.06s ease-in-out infinite',
                    }}
                />
                <div
                    className='absolute rounded-full'
                    style={{
                        width: '10.81px',
                        height: '11.97px',
                        background: 'var(--primary-light)',
                        left: '84.19%',
                        top: '97.83%',
                        opacity: 0.34,
                        animation: 'float 8.73s ease-in-out infinite',
                    }}
                />
                <div
                    className='absolute rounded-full'
                    style={{
                        width: '7.22px',
                        height: '7.36px',
                        background: 'var(--primary-light)',
                        left: '85.28%',
                        top: '80.21%',
                        opacity: 0.35,
                        animation: 'float 5.72s ease-in-out infinite',
                    }}
                />
                <div
                    className='absolute rounded-full'
                    style={{
                        width: '14.20px',
                        height: '14.09px',
                        background: 'var(--primary-light)',
                        left: '71.26%',
                        top: '67.82%',
                        opacity: 0.62,
                        animation: 'float 6.61s ease-in-out infinite',
                    }}
                />
                <div
                    className='absolute rounded-full'
                    style={{
                        width: '5.77px',
                        height: '6.59px',
                        background: 'var(--primary-light)',
                        left: '12.24%',
                        top: '23.09%',
                        opacity: 0.77,
                        animation: 'float 6.27s ease-in-out infinite',
                    }}
                />
                <div
                    className='absolute rounded-full'
                    style={{
                        width: '9.54px',
                        height: '12.23px',
                        background: 'var(--primary-light)',
                        left: '4.21%',
                        top: '45.45%',
                        opacity: 0.63,
                        animation: 'float 6.29s ease-in-out infinite',
                    }}
                />
                <div
                    className='absolute rounded-full'
                    style={{
                        width: '11.18px',
                        height: '14.70px',
                        background: 'var(--primary-light)',
                        left: '4.95%',
                        top: '27.29%',
                        opacity: 0.38,
                        animation: 'float 11.86s ease-in-out infinite',
                    }}
                />
                <div
                    className='absolute rounded-full'
                    style={{
                        width: '14.53px',
                        height: '8.69px',
                        background: 'var(--primary-light)',
                        left: '98.78%',
                        top: '69.10%',
                        opacity: 0.53,
                        animation: 'float 11.61s ease-in-out infinite',
                    }}
                />
            </div>

            <div className='container mx-auto px-4 md:px-6 z-10'>
                <div className='grid md:grid-cols-5 gap-12 items-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='md:col-span-3'
                    >
                        <div className='mb-3'>
                            <motion.h1
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className='text-4xl md:text-6xl font-bold mb-2'
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
                                href='/CV.pdf'
                                className='border border-primary text-primary hover:bg-primary/10 py-3 px-8 rounded-md transition-all flex items-center gap-2 font-medium'
                                target='_blank'
                                rel='noopener noreferrer'
                                download='Miguel_Vega_Molina_CV.pdf'
                            >
                                Descargar CV
                                <FiDownload className='ml-1' />
                            </a>

                            <div className='flex items-center gap-6 ml-2'>
                                <a
                                    href='https://github.com/mvegmol'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-xl hover:text-primary transition-colors'
                                    aria-label='GitHub'
                                >
                                    <FiGithub />
                                </a>
                                <a
                                    href='https://www.linkedin.com/in/miguel-vega-molina-4410b6257'
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
                                    <img
                                        src='/images/foto.png'
                                        alt='Miguel Vega Molina'
                                        className='w-full h-full object-cover'
                                    />
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
