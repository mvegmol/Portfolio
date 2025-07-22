import { motion } from 'framer-motion';
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
} from 'react-icons/si';
import { TbServer } from 'react-icons/tb'; // Para WSO2
import { MdSecurity } from 'react-icons/md'; // Para KeyCloak

const Skills = () => {
    // Array de habilidades con sus iconos correspondientes
    const skillsList = [
        {
            name: 'HTML5',
            icon: <SiHtml5 size={40} className='text-[#E34F26]' />,
        },
        { name: 'CSS3', icon: <SiCss3 size={40} className='text-[#1572B6]' /> },
        {
            name: 'JavaScript',
            icon: <SiJavascript size={40} className='text-[#F7DF1E]' />,
        },
        {
            name: 'TailwindCSS',
            icon: <SiTailwindcss size={40} className='text-[#06B6D4]' />,
        },
        {
            name: 'Bootstrap',
            icon: <SiBootstrap size={40} className='text-[#7952B3]' />,
        },
        {
            name: 'Laravel',
            icon: <SiLaravel size={40} className='text-[#FF2D20]' />,
        },
        {
            name: 'Django',
            icon: <SiDjango size={40} className='text-[#092E20]' />,
        },
        {
            name: 'Node.js',
            icon: <SiNodedotjs size={40} className='text-[#339933]' />,
        },
        { name: 'PHP', icon: <SiPhp size={40} className='text-[#777BB4]' /> },
        {
            name: 'Python',
            icon: <SiPython size={40} className='text-[#3776AB]' />,
        },
        {
            name: 'MySQL',
            icon: <SiMysql size={40} className='text-[#4479A1]' />,
        },
        {
            name: 'PostgreSQL',
            icon: <SiPostgresql size={40} className='text-[#4169E1]' />,
        },
        {
            name: 'MongoDB',
            icon: <SiMongodb size={40} className='text-[#47A248]' />,
        },
        {
            name: 'SQLite',
            icon: <SiSqlite size={40} className='text-[#003B57]' />,
        },
        {
            name: 'Docker',
            icon: <SiDocker size={40} className='text-[#2496ED]' />,
        },
        {
            name: 'WSO2',
            icon: <TbServer size={40} className='text-primary-light' />,
        },
        {
            name: 'ELK',
            icon: <SiElasticsearch size={40} className='text-[#005571]' />,
        },
        {
            name: 'AWS',
            icon: <SiAmazon size={40} className='text-[#FF9900]' />,
        },
        {
            name: 'KeyCloak',
            icon: <MdSecurity size={40} className='text-red-500' />,
        },
        { name: 'Git', icon: <SiGit size={40} className='text-[#F05032]' /> },
        {
            name: 'GitHub',
            icon: <SiGithub size={40} className='text-foreground' />,
        },
        {
            name: 'GitLab',
            icon: <SiGitlab size={40} className='text-[#FCA121]' />,
        },
        {
            name: 'Bitbucket',
            icon: <SiBitbucket size={40} className='text-[#0052CC]' />,
        },
    ];

    return (
        <section className='py-20 bg-[#1a1a1a]' id='skills'>
            <div className='container mx-auto px-4 md:px-6'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className='text-3xl font-bold mb-2'>Habilidades</h2>
                    <div className='w-20 h-1 bg-primary mb-12'></div>

                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8'>
                        {skillsList.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.05,
                                }}
                                className='bg-[#242424] rounded-lg p-4 shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-transform'
                            >
                                <div className='mb-3'>{skill.icon}</div>
                                <span className='text-sm font-medium text-center'>
                                    {skill.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
