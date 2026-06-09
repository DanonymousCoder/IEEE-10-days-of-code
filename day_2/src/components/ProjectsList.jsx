import ProjectCard from './ProjectCard'
import lumina from '../assets/Lumina CRM Dashboard.png'
import db from '../assets/DB.png'
import edge from '../assets/Edge Proxy Infrastructure.png'

const projects = [
    {
        id: 1,
        image: lumina,
        title: 'Lumina CRM',
        description: 'Engineered a high-performance customer relations platform optimizing large-scale data synchronization and real-time analytics.',
        tags: ['JavaScript', 'TailwindCSS', 'Chart.js'],
        githubUrl: '#',
        demoUrl: '#',
    },
    {
        id: 2,
        image: db,
        title: 'DB Dashboard',
        description: 'Built a database management dashboard with real-time query execution, schema visualization, and performance monitoring.',
        tags: ['React', 'Node.js', 'PostgreSQL'],
        githubUrl: '#',
        demoUrl: '#',
    },
    {
        id: 3,
        image: edge,
        title: 'Edge Proxy Infrastructure',
        description: 'Designed a distributed edge proxy system for low-latency request routing, load balancing, and SSL termination.',
        tags: ['Go', 'Docker', 'Nginx'],
        githubUrl: '#',
        demoUrl: '#',
    },
]

function ProjectsList() {
    return (
        <div className="projects-list">
            {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
            ))}
        </div>
    )
}

export default ProjectsList;
