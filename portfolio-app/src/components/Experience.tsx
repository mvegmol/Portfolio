const experiences = [
  { title: 'Engineer', period: 'Agosto 2026 - Actualidad', location: 'Córdoba · Híbrido', context: 'Proyectos para la Agencia Digital de Andalucía', bullets: [
    'Diseño, mantenimiento y evolución de integraciones con WSO2 API Manager y Micro Integrator, incluyendo publicación, despliegue y versionado de APIs.',
    'Análisis y ejecución de migraciones de servicios: adaptación de endpoints, contextos, configuraciones y componentes a nuevas plataformas.',
    'Diagnóstico de incidencias mediante logs, trazas y análisis de comunicaciones; administración del stack ELK y mantenimiento de dashboards, consultas y alertas en Kibana.',
    'Automatización de tareas de administración, validación y mantenimiento; configuración de autenticación y autorización con Keycloak y elaboración de documentación técnica.'
  ]},
  { title: 'Junior Engineer', period: 'Enero 2025 - Agosto 2026', location: 'Córdoba · Híbrido', context: 'Integración e interoperabilidad para la Administración Pública', bullets: [
    'Desarrollo y mantenimiento de integraciones WSO2 y APIs REST/SOAP en distintos entornos; apoyo en migraciones y resolución de incidencias.',
    'Desarrollo de herramientas internas con Python, Django y Oracle y scripts para automatizar procesos operativos y comprobaciones.',
    'Monitorización con Elasticsearch y Kibana, dashboards y alertas para detectar errores e indisponibilidades de servicios.',
    'Pipelines de Jenkins para el despliegue de integraciones y operaciones de WSO2 y Keycloak; mantenimiento de documentación técnica.'
  ]},
  { title: 'Student · Prácticas', period: 'Abril 2024 - Octubre 2024', location: 'Dos Hermanas, Sevilla', context: 'NTT DATA', bullets: [
    'Integración y mantenimiento de servicios con WSO2 Micro Integrator, automatización de procesos internos con Django y colaboración en sistemas de alertas.'
  ]}
];
export default function Experience() {
  return <section id="experience" className="py-20 bg-[#121212]"><div className="container mx-auto px-4 md:px-6">
    <p className="eyebrow mb-3">TRAYECTORIA</p><h2 className="text-3xl font-bold mb-3">Experiencia profesional</h2>
    <p className="text-gray-400 mb-10">NTT DATA Europe &amp; Latam</p>
    <div className="space-y-8">{experiences.map(exp=><article key={exp.title} className="experience-row">
      <div><p className="text-primary text-sm mb-2">{exp.period}</p><h3 className="text-2xl font-semibold">{exp.title}</h3><p className="text-gray-400 text-sm mt-3">{exp.location}</p></div>
      <div><p className="font-medium text-white mb-4">{exp.context}</p><ul className="space-y-3 list-disc pl-5 text-gray-300 leading-relaxed">{exp.bullets.map(item=><li key={item}>{item}</li>)}</ul></div>
    </article>)}</div>
    <div className="mt-12 pt-8 border-t border-white/10"><h3 className="text-xl font-semibold mb-2">Formación</h3><p className="text-gray-300">Grado en Ingeniería Informática en Sistemas de Información</p><p className="text-sm text-gray-400 mt-2">Universidad Pablo de Olavide, Sevilla · Septiembre 2020 - Septiembre 2024</p></div>
  </div></section>;
}
