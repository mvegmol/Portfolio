import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiPhone, FiMapPin, FiCheck } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<
        'idle' | 'success' | 'error'
    >('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus('error');
            setErrorMessage(
                'Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.'
            );
        } finally {
            setIsSubmitting(false);

            // Reset status after 5 seconds
            setTimeout(() => {
                setSubmitStatus('idle');
                setErrorMessage('');
            }, 5000);
        }
    };

    return (
        <section className='py-20 bg-[#1a1a1a]' id='contact'>
            <div className='container mx-auto px-4 md:px-6'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className='text-3xl font-bold mb-2'>Contacto</h2>
                    <div className='w-20 h-1 bg-primary mb-12'></div>

                    <div className='grid md:grid-cols-2 gap-12'>
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <h3 className='text-2xl font-bold mb-6'>
                                    ¡Hablemos!
                                </h3>
                                <p className='text-lg mb-4 text-gray-300'>
                                    Estoy interesado en oportunidades
                                    profesionales, especialmente en proyectos
                                    backend ambiciosos e innovadores de
                                    interoperabilidad. Si tienes alguna
                                    pregunta o propuesta, no dudes en
                                    contactarme utilizando el formulario.
                                </p>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className='p-4 mb-8 border border-primary/30 bg-primary/5 rounded-lg'
                                >
                                    <h4 className='text-lg font-medium text-primary mb-2'>
                                        Disponibilidad para proyectos
                                    </h4>
                                    <p className='text-gray-300'>
                                        Actualmente estoy{' '}
                                        <span className='text-primary-light font-medium'>
                                            abierto a nuevas oportunidades
                                        </span>
                                        , ya sea en empresas o como freelance.
                                        Me especializo en desarrollo backend,
                                        interoperabilidad entre sistemas,
                                        desarrollo de APIs y
                                        soluciones integrales de integración para
                                        proyectos escalables.
                                    </p>
                                </motion.div>

                                <div className='space-y-4 mb-8'>
                                    <div className='flex items-center gap-4'>
                                        <div className='w-12 h-12 bg-[#2d2d2d] rounded-full flex items-center justify-center'>
                                            <FiMail className='text-xl text-primary' />
                                        </div>
                                        <div>
                                            <h4 className='text-lg font-medium'>
                                                Email
                                            </h4>
                                            <a
                                                href='mailto:miguelvegamolina2404@gmail.com'
                                                className='text-gray-300 hover:text-primary transition-colors'
                                            >
                                                miguelvegamolina2404@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className='flex items-center gap-4'>
                                        <div className='w-12 h-12 bg-[#2d2d2d] rounded-full flex items-center justify-center'>
                                            <FiPhone className='text-xl text-primary' />
                                        </div>
                                        <div>
                                            <h4 className='text-lg font-medium'>
                                                Teléfono
                                            </h4>
                                            <a
                                                href='tel:+34678867870'
                                                className='text-gray-300 hover:text-primary transition-colors'
                                            >
                                                +34 678 86 78 70
                                            </a>
                                        </div>
                                    </div>

                                    <div className='flex items-center gap-4'>
                                        <div className='w-12 h-12 bg-[#2d2d2d] rounded-full flex items-center justify-center'>
                                            <FiMapPin className='text-xl text-primary' />
                                        </div>
                                        <div>
                                            <h4 className='text-lg font-medium'>
                                                Ubicación
                                            </h4>
                                            <p className='text-gray-300'>
                                                Córdoba, España
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className='bg-[#242424] rounded-lg shadow-lg p-8 border border-gray-800'>
                                <h3 className='text-2xl font-bold mb-6'>
                                    Envíame un mensaje
                                </h3>

                                <form
                                    onSubmit={handleSubmit}
                                    className='space-y-6'
                                >
                                    <div>
                                        <label
                                            htmlFor='name'
                                            className='block text-sm font-medium mb-2 text-gray-300'
                                        >
                                            Nombre completo
                                        </label>
                                        <input
                                            type='text'
                                            id='name'
                                            name='name'
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className='w-full px-4 py-2 bg-[#333333] border border-gray-700 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-white'
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor='email'
                                            className='block text-sm font-medium mb-2 text-gray-300'
                                        >
                                            Correo electrónico
                                        </label>
                                        <input
                                            type='email'
                                            id='email'
                                            name='email'
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className='w-full px-4 py-2 bg-[#333333] border border-gray-700 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-white'
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor='subject'
                                            className='block text-sm font-medium mb-2 text-gray-300'
                                        >
                                            Asunto
                                        </label>
                                        <input
                                            type='text'
                                            id='subject'
                                            name='subject'
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className='w-full px-4 py-2 bg-[#333333] border border-gray-700 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-white'
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor='message'
                                            className='block text-sm font-medium mb-2 text-gray-300'
                                        >
                                            Mensaje
                                        </label>
                                        <textarea
                                            id='message'
                                            name='message'
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            required
                                            className='w-full px-4 py-2 bg-[#333333] border border-gray-700 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none text-white'
                                        />
                                    </div>

                                    {submitStatus === 'error' && (
                                        <div className='text-red-600'>
                                            {errorMessage}
                                        </div>
                                    )}

                                    {submitStatus === 'success' && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className='flex items-center gap-2 text-green-600'
                                        >
                                            <FiCheck /> Mensaje enviado
                                            correctamente. ¡Gracias!
                                        </motion.div>
                                    )}

                                    <button
                                        type='submit'
                                        disabled={isSubmitting}
                                        className={`w-full py-3 px-6 flex items-center justify-center gap-2 text-white rounded-md transition-colors ${
                                            isSubmitting
                                                ? 'bg-primary/50 cursor-not-allowed'
                                                : 'bg-primary hover:bg-primary-dark'
                                        }`}
                                    >
                                        {isSubmitting ? (
                                            'Enviando...'
                                        ) : (
                                            <>
                                                <FiSend /> Enviar mensaje
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
