import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='py-10 bg-[#0a0a0a] text-white'>
            <div className='container mx-auto px-4 md:px-6'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='mb-4 md:mb-0'>
                        <h3 className='text-2xl font-bold'>
                            Miguel<span className='text-primary'>VM</span>
                        </h3>
                        <p className='text-gray-400'>
                            Desarrollador web &amp; Ingeniero de Sistemas
                        </p>
                    </div>

                    <div className='flex items-center space-x-6 mb-4 md:mb-0'>
                        <a
                            href='https://github.com/mvegmol'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-gray-400 hover:text-primary transition-colors text-xl'
                            aria-label='GitHub'
                        >
                            <FiGithub />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/miguel-vega-molina-4410b6257'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-gray-400 hover:text-primary transition-colors text-xl'
                            aria-label='LinkedIn'
                        >
                            <FiLinkedin />
                        </a>
                        <a
                            href='mailto:miguelvegamolina2404@gmail.com'
                            className='text-gray-400 hover:text-primary transition-colors text-xl'
                            aria-label='Email'
                        >
                            <FiMail />
                        </a>
                    </div>
                </div>

                <div className='border-t border-gray-800 mt-6 pt-6 text-center text-gray-400 text-sm'>
                    <p>
                        &copy; {currentYear} Miguel Vega Molina. Todos los
                        derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
