import Image from 'next/image';
import { FiArrowUpRight, FiDownload } from 'react-icons/fi';

export default function Hero() {
  return <section id="hero" className="hero-section">
    <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
      <div>
        <p className="eyebrow">INTEGRACIÓN · INTEROPERABILIDAD · APIs</p>
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.06] mt-5 mb-6">Miguel Vega<br /><span className="text-primary">Molina.</span></h1>
        <p className="text-2xl md:text-3xl text-white mb-5">Ingeniero de integración WSO2</p>
        <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">Diseño, desarrollo y mantengo integraciones y APIs para la Administración Pública. Trabajo con WSO2 API Manager, Micro Integrator, observabilidad con ELK y automatización con Python.</p>
        <p className="text-sm text-gray-400 mt-5">Engineer en NTT DATA · Córdoba, España · Disponibilidad para traslado</p>
        <div className="flex flex-wrap gap-3 mt-8">
          <a href="/CV.pdf" download="Miguel_Vega_Molina_CV.pdf" className="primary-button"><FiDownload aria-hidden="true" /> Descargar CV</a>
          <a href="#experience" className="secondary-button">Ver experiencia <FiArrowUpRight aria-hidden="true" /></a>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8 text-sm">
          <a href="https://www.linkedin.com/in/miguel-vega-molina-4410b6257/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary">LinkedIn ↗</a>
          <a href="https://github.com/mvegmol" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary">GitHub ↗</a>
          <a href="#contact" className="text-gray-300 hover:text-primary">Contacto ↗</a>
        </div>
      </div>
      <div className="hero-aside">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6"><Image src="/images/2.png" alt="Miguel Vega Molina" fill priority sizes="(min-width: 1024px) 400px, 90vw" className="object-cover object-top" /></div>
        <p className="eyebrow mb-4">CERTIFICACIONES WSO2</p>
        <a href="#certifications" className="block border-b border-white/10 pb-4 mb-4"><strong className="text-white">API Manager Developer</strong><span className="block text-gray-400 text-sm mt-1">V4 · Agosto 2026 ↗</span></a>
        <a href="#certifications" className="block"><strong className="text-white">Micro Integrator Developer</strong><span className="block text-gray-400 text-sm mt-1">V4.5 · Marzo 2026 ↗</span></a>
      </div>
    </div>
  </section>;
}
