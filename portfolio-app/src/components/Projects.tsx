import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
    const projects = [
        {
            title: 'Vapexpress TFG',
            description:
                'Sistema de información especializado en la venta de vapers y productos relacionados. Optimiza la experiencia de compra en línea con gestión eficiente y segura para clientes y tiendas.',
            image: '/images/vapexpress/Bienvenida.png',
            images: [
                '/images/vapexpress/Bienvenida.png',
                '/images/vapexpress/producto.png',
                '/images/vapexpress/carrito.png',
                '/images/vapexpress/favoritos.png',
            ],
            period: 'Abril 2024 - Septiembre 2024',
            status: 'completed' as const,
            technologies: [
                'Laravel 10',
                'MySQL',
                'JavaScript',
                'Tailwind CSS',
                'Fortify',
            ],
            features: [
                'Gestión de usuarios, productos, categorías, carritos y pedidos',
                'Direcciones de envío y proveedores',
                'Listas de favoritos',
                'Interfaz moderna adaptable a múltiples dispositivos',
                'Automatización de procesos clave',
                'Panel administrativo con estadísticas en tiempo real',
                'Integración con pasarelas de pago (Stripe, PayPal)',
                'Sistema de notificaciones por email',
                'Módulo de valoraciones',
                'Gestión de descuentos y cupones',
                'Integración con servicios de envío y seguimiento en tiempo real',
            ],
            futureFeatures: [
                'Internacionalización: Soporte para múltiples idiomas y monedas',
                'Optimización del rendimiento para cargas de trabajo intensas',
                'Sistema de recomendación de productos basado en comportamiento de usuarios',
                'Integración de análisis de datos avanzado para informes detallados',
                'Mejoras de usabilidad basadas en pruebas de usuario',
                'Sistema avanzado de descuentos y promociones para fidelización',
            ],
            githubUrl: 'https://github.com/mvegmol/VapexpressLaravel',
            // liveUrl: 'https://vapexpress-demo.example.com',
        },
        {
            title: 'Sistema de Gestión para Tintorería',
            description:
                'Sistema integral de gestión para tintorerías desarrollado con Electron junto a Carlos Vega Molina. Incluye TPV optimizado, gestión completa de clientes, órdenes y empleados, sistema de impresión térmica avanzado, y dashboard en tiempo real con estadísticas detalladas.',
            image: '/images/tintoreria/dashboard.png',
            images: [
                '/images/tintoreria/dashboard.png',
                '/images/tintoreria/deposito.png',
                '/images/tintoreria/pedidos.png',
                '/images/tintoreria/prendas.png',
                '/images/tintoreria/tpv.png',
            ],
            period: 'Febrero 2024 - Presente',
            status: 'in-progress' as const,
            technologies: [
                'Electron',
                'Node.js',
                'JavaScript',
                'MySQL',
                'Sequelize ORM',
                'Bootstrap 5',
                'HTML5/CSS3',
            ],
            features: [
                'TPV (Terminal Punto de Venta) optimizado con sistema de locks anti-duplicados',
                'Gestión completa de clientes, prendas, servicios y tarifas',
                'Sistema de órdenes con estados, seguimiento y fechas de entrega',
                'Gestión de empleados con sesiones de caja automáticas',
                'Sistema dual de impresión: método nativo (Electron) y térmico (ESC/POS)',
                'Soporte para impresoras térmicas (EPSON, Citizen, Star, Bixolon)',
                'Dashboard en tiempo real con estadísticas y métricas de rendimiento',
                'Sistema de descuentos y promociones avanzado',
                'Generación automática de tickets de resguardo y etiquetas lavables',
                'Gestión de facturas con datos fiscales completos',
                'Cache inteligente para optimización de rendimiento',
                'Sistema de copias de seguridad y restauración de datos',
                'Interfaz responsiva adaptable a diferentes pantallas',
                'Búsqueda avanzada de órdenes por cliente, ticket o filtros',
                'Gestión de pagos con múltiples métodos (efectivo, tarjeta, transferencia)',
                'Sistema de configuración de impresoras virtuales para pruebas',
                'Módulo de configuración automática de impresoras por tipo',
            ],
            futureFeatures: [
                'Integración con sistemas de contabilidad externos',
                'Módulo de inventario avanzado con alertas de stock',
                'Sistema de notificaciones SMS/Email para clientes',
                'App móvil para seguimiento de órdenes',
                'Sistema de fidelización de clientes con puntos',
                'Integración con pasarelas de pago online',
                'Módulo de análisis predictivo para demanda',
                'Sistema multi-tienda con sincronización centralizada',
                'API REST para integraciones con terceros',
                'Módulo de recursos humanos con control de horarios',
            ],
            // githubUrl: 'https://github.com/mvegmol/Tintoreria',
        },
        {
            title: 'Habit Challenge API',
            description:
                'API RESTful para la gestión de hábitos y seguimiento de progreso, desplegada en Render (FastAPI) con base de datos PostgreSQL alojada en Railway. Esta arquitectura cloud-native proporciona una solución escalable y gratuita para la gestión de hábitos personales, incluyendo autenticación, seguimiento de progreso y análisis estadístico.',
            image: '/images/habit-challenge-api/overview.png', // Cambia la ruta si tienes otra imagen
            images: [
                '/images/habit-challenge-api/overview.png',
                '/images/habit-challenge-api/model.png',
                '/images/habit-challenge-api/arquitectura.png',
               
            ],
            period: 'Agosto 2025',
            status: 'completed' as const,
            technologies: [
                'FastAPI',
                'SQLAlchemy',
                'PostgreSQL',
                'Railway',
                'Render',
                'Docker',
                'PyJWT',
                'Alembic',
                'Pydantic',
            ],
            features: [
                'Arquitectura en Capas (Layered Architecture) + Clean Architecture',
                'Capa de Presentación: Routers con FastAPI y validación Pydantic',
                'Capa de Lógica de Negocio: CRUD operations y validaciones específicas',
                'Capa de Acceso a Datos: SQLAlchemy ORM con mapeo objeto-relacional',
                'Capa de Persistencia: PostgreSQL con gestión optimizada de conexiones',
                'Patrones de diseño: Repository, DTO, Dependency Injection',
                'Elementos de Arquitectura Hexagonal con adaptadores externos',
                'Registro y autenticación de usuarios con JWT tokens',
                'Gestión de hábitos personalizados con seguimiento detallado',
                'Sistema de progreso diario con cálculos automáticos',
                'Endpoints protegidos con middleware de seguridad',
                'Consultas estadísticas y reportes de avance personalizados',
                'Integración con servicios externos (OpenWeather API)',
                'Documentación interactiva completa con Swagger/OpenAPI',
                'Despliegue cloud-native en Render y Railway',
                'Base de datos PostgreSQL alojada gratuitamente en Railway',
                'Separación clara de responsabilidades por capas',
                'Estructura escalable y mantenible',
                'Pruebas automatizadas con pytest',
            ],
            futureFeatures: [
                'Notificaciones push y recordatorios',
                'Integración con apps móviles',
                'Gamificación y recompensas',
                'Panel de administración web',
                'Exportación de datos a CSV/Excel',
                'Soporte multi-idioma',
                'Integración con servicios de salud y fitness',
            ],
            githubUrl: 'https://github.com/mvegmol/habit-challenge-api',
            liveUrl: 'https://habit-challenge-api.onrender.com', // Si tienes una URL pública, agrégala aquí
        },
        
    ];

    return (
        <section className='py-20 bg-[#161616]' id='projects'>
            <div className='container mx-auto px-4 md:px-6'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className='text-3xl font-bold mb-2'>Proyectos</h2>
                    <div className='w-20 h-1 bg-primary mb-12'></div>

                    <div className='grid md:grid-cols-2 gap-8'>
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                project={project}
                                index={index}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
