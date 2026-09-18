import Image from 'next/image';
const certifications = [
  { title: 'WSO2 Certified API Manager Developer - V4', date: '26 de agosto de 2026', image: '/images/certificacion/api-manager-v4.jpg' },
  { title: 'WSO2 Certified Micro Integrator Developer - V4.5', date: '8 de marzo de 2026', image: '/images/certificacion/certificacion.png' },
];
export default function Certifications() {
  return <section id="certifications" className="py-20 bg-[#161616]"><div className="container mx-auto px-4 md:px-6">
    <p className="eyebrow mb-3">ACREDITACIONES</p><h2 className="text-3xl font-bold mb-10">Certificaciones WSO2</h2>
    <div className="grid md:grid-cols-2 gap-8">{certifications.map(cert=><article key={cert.title} className="rounded-xl border border-white/10 overflow-hidden bg-[#202020]">
      <a href={cert.image} target="_blank" rel="noopener noreferrer" aria-label={`Abrir certificado ${cert.title}`} className="block relative aspect-[1.6]"><Image src={cert.image} alt={cert.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-contain p-4" /></a>
      <div className="p-6 border-t border-white/10"><h3 className="text-xl font-semibold mb-3">{cert.title}</h3><p className="text-gray-300">WSO2 · {cert.date}</p><p className="text-sm text-gray-400 mt-2">ID de credencial: CID-05301118</p><a href="https://certification.wso2.com/" target="_blank" rel="noopener noreferrer" className="inline-block text-primary text-sm mt-5">Portal de validación de WSO2 ↗</a></div>
    </article>)}</div>
  </div></section>;
}
