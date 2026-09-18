import { FiMail, FiLinkedin, FiDownload } from 'react-icons/fi';
export default function Contact() {
  return <section id="contact" className="py-20 bg-[#161616]"><div className="container mx-auto px-4 md:px-6">
    <p className="eyebrow mb-3">CONTACTO</p><h2 className="text-3xl md:text-4xl font-bold mb-6">Hablemos de integración y APIs.</h2>
    <p className="text-gray-300 max-w-2xl text-lg mb-8">Me interesan oportunidades como ingeniero de integración, desarrollador WSO2 o consultor técnico de API Management. Resido en Córdoba y tengo disponibilidad para trasladarme.</p>
    <div className="flex flex-wrap gap-3"><a href="mailto:miguelvegamolina2404@gmail.com" className="primary-button"><FiMail aria-hidden="true" /> Escribir por email</a><a href="https://www.linkedin.com/in/miguel-vega-molina-4410b6257/" target="_blank" rel="noopener noreferrer" className="secondary-button"><FiLinkedin aria-hidden="true" /> LinkedIn</a><a href="/CV.pdf" download="Miguel_Vega_Molina_CV.pdf" className="secondary-button"><FiDownload aria-hidden="true" /> Descargar CV</a></div>
    <p className="mt-8 text-gray-400 break-words"><a href="mailto:miguelvegamolina2404@gmail.com">miguelvegamolina2404@gmail.com</a><br /><a href="tel:+34678867870">+34 678 86 78 70</a></p>
  </div></section>;
}
