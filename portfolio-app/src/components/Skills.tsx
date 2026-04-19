import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTailwindcss,
    SiBootstrap,
    SiLaravel,
    SiDjango,
    SiNodedotjs,
    SiPhp,
    SiPython,
    SiMysql,
    SiPostgresql,
    SiMongodb,
    SiSqlite,
    SiDocker,
    SiAmazon,
    SiElasticsearch,
    SiGit,
    SiGithub,
    SiGitlab,
    SiBitbucket,
    SiElectron,
    SiFastapi,
    SiPydantic,
    SiPytest,
    SiSequelize,
    SiRender,
} from 'react-icons/si';
import { TbServer, TbDatabase, TbApi } from 'react-icons/tb';
import { MdSecurity } from 'react-icons/md';
import { DiMysql } from 'react-icons/di';

const Skills = () => {
    const skillsCategories = [
        {
            title: 'Lenguajes de Programación',
            skills: [
                {
                    name: 'JavaScript',
                    icon: <SiJavascript size={40} className='text-[#F7DF1E]' />,
                },
                {
                    name: 'Python',
                    icon: <SiPython size={40} className='text-[#3776AB]' />,
                },
                {
                    name: 'PHP',
                    icon: <SiPhp size={40} className='text-[#777BB4]' />,
                },
                {
                    name: 'HTML5',
                    icon: <SiHtml5 size={40} className='text-[#E34F26]' />,
                },
                {
                    name: 'CSS3',
                    icon: <SiCss3 size={40} className='text-[#1572B6]' />,
                },
            ],
        },
        {
            title: 'Frameworks & Librerías',
            skills: [
                {
                    name: 'WSO2 Micro Integrator(SOAP & REST)',
                    icon: <TbServer size={40} className='text-primary-light' />,
                },
                {
                    name: 'KeyCloak',
                    icon: <MdSecurity size={40} className='text-red-500' />,
                },
                {
                    name: 'Laravel',
                    icon: <SiLaravel size={40} className='text-[#FF2D20]' />,
                },
                {
                    name: 'FastAPI',
                    icon: <SiFastapi size={40} className='text-[#009688]' />,
                },
                {
                    name: 'Django',
                    icon: <SiDjango size={40} className='text-[#092E20]' />,
                },
                {
                    name: 'Node.js',
                    icon: <SiNodedotjs size={40} className='text-[#339933]' />,
                },
                {
                    name: 'Electron',
                    icon: <SiElectron size={40} className='text-[#0052CC]' />,
                },
                {
                    name: 'TailwindCSS',
                    icon: <SiTailwindcss size={40} className='text-[#06B6D4]' />,
                },
                {
                    name: 'Bootstrap',
                    icon: <SiBootstrap size={40} className='text-[#7952B3]' />,
                },
            ],
        },
        {
            title: 'Bases de Datos & ORM',
            skills: [
                {
                    name: 'PostgreSQL',
                    icon: <SiPostgresql size={40} className='text-[#4169E1]' />,
                },
                {
                    name: 'MySQL',
                    icon: <SiMysql size={40} className='text-[#4479A1]' />,
                },
                {
                    name: 'SQLite',
                    icon: <SiSqlite size={40} className='text-[#003B57]' />,
                },
                {
                    name: 'SQLAlchemy',
                    icon: <TbDatabase size={40} className='text-[#D71F00]' />,
                },
                {
                    name: 'Sequelize',
                    icon: <SiSequelize size={40} className='text-[#52B0E7]' />,
                },
                
            ],
        },
        {
            title: 'DevOps & Cloud',
            skills: [
                {
                    name: 'Docker',
                    icon: <SiDocker size={40} className='text-[#2496ED]' />,
                },
                {
                    name: 'Railway',
                    icon: <TbServer size={40} className='text-[#0B0D0E]' />,
                },
                {
                    name: 'Render',
                    icon: <SiRender size={40} className='text-[#46E3B7]' />,
                },
                {
                    name: 'Git',
                    icon: <SiGit size={40} className='text-[#F05032]' />,
                },
                {
                    name: 'ELK Stack',
                    icon: <SiElasticsearch size={40} className='text-[#005571]' />,
                },
            ],
        },
    
    ];

    return (
        <section className='py-20 bg-[#1a1a1a]' id='skills'>
            <div className='container mx-auto px-4 md:px-6'>
                <div>
                    <h2 className='text-3xl font-bold mb-2'>Habilidades Técnicas</h2>
                    <div className='w-20 h-1 bg-primary mb-12'></div>

                    <div className='space-y-12'>
                        {skillsCategories.map((category, categoryIndex) => (
                            <div
                                key={categoryIndex}
                                className='bg-[#242424] rounded-xl p-6 shadow-xl border border-[#333] hover:border-primary/30 transition-all duration-300'
                            >
                                <h3 className='text-xl font-semibold mb-6 text-primary'>
                                    {category.title}
                                </h3>
                                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                                    {category.skills.map((skill, skillIndex) => (
                                        <div
                                            key={skillIndex}
                                            className='bg-[#161616] rounded-lg p-4 hover:bg-[#2a2a2a] transition-colors duration-200 hover:shadow-lg group cursor-pointer'
                                        >
                                            <div className='flex flex-col items-center text-center'>
                                                <div className='mb-3'>
                                                    {skill.icon}
                                                </div>
                                                <span className='text-sm font-medium group-hover:text-primary transition-colors duration-200'>
                                                    {skill.name}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
