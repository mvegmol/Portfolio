export default function About() {
  return <section id="about" className="py-20 bg-[#161616]"><div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-[1fr_2fr] gap-10">
    <div><p className="eyebrow mb-3">PERFIL</p><h2 className="text-3xl font-bold">Conectar sistemas.<br />Entender el servicio.</h2></div>
    <div className="text-gray-300 text-lg leading-relaxed space-y-5">
      <p>Soy graduado en Ingeniería Informática en Sistemas de Información por la Universidad Pablo de Olavide. Trabajo en NTT DATA en proyectos para la Agencia Digital de Andalucía, participando en la evolución y operación de plataformas de integración basadas en WSO2.</p>
      <p>Mi trabajo abarca el ciclo de vida de APIs y servicios REST/SOAP, las migraciones entre entornos y el diagnóstico de incidencias. Lo complemento con automatización en Python y Django, pipelines de Jenkins, observabilidad con Elasticsearch, Logstash y Kibana, y configuraciones de identidad y acceso con Keycloak.</p>
      <p className="text-base text-gray-400">Córdoba, España · Disponibilidad para traslado<br />Español nativo · Inglés B1</p>
    </div>
  </div></section>;
}
