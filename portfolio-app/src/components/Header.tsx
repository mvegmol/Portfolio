import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import MobileMenu from './MobileMenu';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-[#121212]/90 backdrop-blur-md shadow-md border-b border-gray-800 py-4'
                    : 'bg-transparent py-6'
            }`}
        >
            <div className='container mx-auto px-4 md:px-6'>
                <div className='flex justify-between items-center'>
                    <Link href='/' className='text-2xl font-bold'>
                        Miguel<span className='text-primary'>VM</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className='hidden md:flex space-x-8'>
                        <Link
                            href='#about'
                            className='text-gray-300 hover:text-primary transition-colors'
                        >
                            Sobre mí
                        </Link>
                        <Link
                            href='#experience'
                            className='text-gray-300 hover:text-primary transition-colors'
                        >
                            Experiencia
                        </Link>
                        <Link
                            href='#projects'
                            className='text-gray-300 hover:text-primary transition-colors'
                        >
                            Proyectos
                        </Link>
                        <Link
                            href='#skills'
                            className='text-gray-300 hover:text-primary transition-colors'
                        >
                            Habilidades
                        </Link>
                        <Link
                            href='#contact'
                            className='text-gray-300 hover:text-primary transition-colors'
                        >
                            Contacto
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className='md:hidden text-2xl focus:outline-none'
                        onClick={toggleMenu}
                        aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                    >
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <MobileMenu isOpen={isMenuOpen} toggle={toggleMenu} />
        </header>
    );
};

export default Header;
