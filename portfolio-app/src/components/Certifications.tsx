import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiAward } from 'react-icons/fi';

const Certifications = () => {
    const certifications = [
        {
            title: 'WSO2 Certified Micro Integrator Developer - V4',
            image: '/images/certificacion/certificacion.png',
            issuer: 'WSO2',
        },
    ];

    return (
        <section className='py-20 bg-[#121212]' id='certifications'>
            <div className='container mx-auto px-4 md:px-6'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className='text-3xl font-bold mb-2'>Certificaciones</h2>
                    <div className='w-20 h-1 bg-primary mb-12'></div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                className='bg-[#242424] rounded-lg shadow-lg border border-gray-800 overflow-hidden hover:scale-[1.02] transition-transform'
                            >
                                <div className='relative w-full h-48'>
                                    <Image
                                        src={cert.image}
                                        alt={cert.title}
                                        fill
                                        className='object-contain p-4'
                                    />
                                </div>
                                <div className='p-6 border-t border-gray-800'>
                                    <div className='flex items-center mb-2'>
                                        <FiAward className='text-primary mr-2 flex-shrink-0' size={20} />
                                        <h3 className='text-lg font-bold'>
                                            {cert.title}
                                        </h3>
                                    </div>
                                    <p className='text-gray-400 text-sm'>
                                        {cert.issuer}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;
