const groups = [
  ['Integración y APIs', 'WSO2 API Manager', 'WSO2 Micro Integrator', 'REST / SOAP', 'OpenAPI / Swagger', 'WSDL', 'Migración y versionado de servicios'],
  ['Observabilidad e identidad', 'Elasticsearch', 'Logstash', 'Kibana', 'Dashboards y alertas', 'Diagnóstico de incidencias', 'Keycloak'],
  ['Automatización y backend', 'Python', 'Django', 'Jenkins', 'SQL / Oracle', 'Git', 'Docker'],
  ['Tecnologías en proyectos personales', 'FastAPI', 'PostgreSQL / SQLAlchemy', 'Laravel / MySQL', 'Node.js / Electron', 'JavaScript', 'Sequelize ORM']
];
export default function Skills() {
  return <section id="skills" className="py-20 bg-[#121212]"><div className="container mx-auto px-4 md:px-6"><p className="eyebrow mb-3">ESPECIALIZACIÓN</p><h2 className="text-3xl font-bold mb-10">Competencias técnicas</h2>
    <div className="grid md:grid-cols-2 gap-8">{groups.map(([title,...items])=><div key={title} className="p-7 rounded-xl border border-white/10"><h3 className="text-xl font-medium mb-5">{title}</h3><ul className="flex flex-wrap gap-2">{items.map(item=><li key={item} className="skill-tag">{item}</li>)}</ul></div>)}</div>
  </div></section>;
}
