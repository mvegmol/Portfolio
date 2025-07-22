import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
    isOpen: boolean;
    toggle: () => void;
}

const MobileMenu = ({ isOpen, toggle }: MobileMenuProps) => {
    const menuItems = [
        { href: '#about', label: 'Sobre mí' },
        { href: '#experience', label: 'Experiencia' },
        { href: '#projects', label: 'Proyectos' },
        { href: '#skills', label: 'Habilidades' },
        { href: '#contact', label: 'Contacto' },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className='md:hidden bg-[#1a1a1a] shadow-lg absolute top-full left-0 w-full border-t border-gray-800'
                >
                    <nav className='flex flex-col py-4'>
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className='px-6 py-3 text-gray-300 hover:bg-[#242424] hover:text-primary transition-colors'
                                onClick={toggle}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
