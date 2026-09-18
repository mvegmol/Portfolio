import ProjectCard from './ProjectCard';
const projects = [
  {
    "title": "Habit Challenge API",
    "description": "Proyecto personal de backend para gestionar hábitos y su progreso. API REST con autenticación JWT, persistencia en PostgreSQL y documentación OpenAPI.",
    "image": "/images/habit-challenge-api/overview.png",
    "images": [
      "/images/habit-challenge-api/overview.png",
      "/images/habit-challenge-api/model.png",
      "/images/habit-challenge-api/arquitectura.png"
    ],
    "period": "Agosto 2025",
    "status": "completed" as const,
    "technologies": [
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "JWT",
      "Docker",
      "pytest"
    ],
    "features": [
      "Registro y autenticación con JWT y endpoints protegidos.",
      "Gestión de hábitos, progreso diario y consultas estadísticas.",
      "Validación con Pydantic y documentación interactiva OpenAPI/Swagger.",
      "Separación de lógica de negocio y acceso a datos; migraciones con Alembic.",
      "Integración con OpenWeather API y pruebas con pytest."
    ],
    "githubUrl": "https://github.com/mvegmol/habit-challenge-api"
  },
  {
    "title": "Sistema de gestión para tintorería",
    "description": "Aplicación de escritorio desarrollada junto a Carlos Vega Molina. Gestión de clientes, prendas, pedidos y cobros con Electron y Node.js.",
    "image": "/images/tintoreria/dashboard.png",
    "images": [
      "/images/tintoreria/dashboard.png",
      "/images/tintoreria/deposito.png",
      "/images/tintoreria/pedidos.png",
      "/images/tintoreria/prendas.png",
      "/images/tintoreria/tpv.png"
    ],
    "period": "Febrero 2025 - Junio 2025",
    "status": "completed" as const,
    "technologies": [
      "Electron",
      "Node.js",
      "MySQL",
      "Sequelize ORM",
      "JavaScript"
    ],
    "features": [
      "Gestión de clientes, prendas, servicios, tarifas y pedidos.",
      "TPV y seguimiento de estados y fechas de entrega.",
      "Impresión de resguardos y etiquetas mediante Electron y ESC/POS.",
      "Persistencia con MySQL y Sequelize; copias de seguridad y restauración.",
      "Dashboard con estadísticas de actividad."
    ]
  },
  {
    "title": "Vapexpress · Trabajo de fin de grado",
    "description": "Sistema de información para comercio electrónico desarrollado como TFG. Catálogo, usuarios, carrito y pedidos con Laravel y MySQL.",
    "image": "/images/vapexpress/Bienvenida.png",
    "images": [
      "/images/vapexpress/Bienvenida.png",
      "/images/vapexpress/producto.png",
      "/images/vapexpress/carrito.png",
      "/images/vapexpress/favoritos.png"
    ],
    "period": "Abril 2024 - Septiembre 2024",
    "status": "completed" as const,
    "technologies": [
      "Laravel 10",
      "MySQL",
      "JavaScript",
      "Tailwind CSS",
      "Laravel Fortify"
    ],
    "features": [
      "Gestión de usuarios, catálogo, categorías, carritos y pedidos.",
      "Direcciones de envío y listas de favoritos.",
      "Autenticación con Laravel Fortify y panel administrativo.",
      "Interfaz adaptable a distintos dispositivos."
    ],
    "githubUrl": "https://github.com/mvegmol/VapexpressLaravel"
  }
];
export default function Projects() {
 return <section id="projects" className="py-20 bg-[#161616]"><div className="container mx-auto px-4 md:px-6">
 <p className="eyebrow mb-3">DESARROLLO PERSONAL Y ACADÉMICO</p><h2 className="text-3xl font-bold mb-4">Proyectos de backend y aplicaciones</h2>
 <p className="text-gray-400 max-w-2xl mb-10">Proyectos propios que complementan mi experiencia profesional en integración: diseño de APIs, persistencia de datos y aplicaciones de gestión.</p>
 <div className="grid md:grid-cols-2 gap-8">{projects.map((project,index)=><ProjectCard key={project.title} project={project} index={index} />)}</div>
 </div></section>;
}
